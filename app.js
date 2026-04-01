(() => {
  const mapContent = document.getElementById("mapContent");
  const mapMenu = document.getElementById("mapMenu");
  const menuCreate = document.getElementById("menuCreate");
  const menuEdit = document.getElementById("menuEdit");
  const menuDelete = document.getElementById("menuDelete");
  const formModal = document.getElementById("formModal");
  const dialogTitle = document.getElementById("dialogTitle");
  const pointForm = document.getElementById("pointForm");
  const pointName = document.getElementById("pointName");
  const pointIconFile = document.getElementById("pointIconFile");
  const pointDesc = document.getElementById("pointDesc");
  const iconPreview = document.getElementById("iconPreview");
  const cancelForm = document.getElementById("cancelForm");
  const detailView = document.getElementById("detailView");
  const detailName = document.getElementById("detailName");
  const detailDesc = document.getElementById("detailDesc");
  const detailIcon = document.getElementById("detailIcon");
  const backDetail = document.getElementById("backDetail");
  const detailPhotos = document.getElementById("detailPhotos");
  const commentsList = document.getElementById("commentsList");
  const commentInput = document.getElementById("commentInput");
  const submitComment = document.getElementById("submitComment");
  const geoBtn = document.getElementById("geoBtn");
  const searchInput = document.getElementById("searchInput");
  
  const STORAGE_KEY = "campus_map_points_v2"; // 使用 v2 区分经纬度坐标

  if (
    !mapContent ||
    !mapMenu ||
    !menuCreate ||
    !menuEdit ||
    !menuDelete ||
    !formModal ||
    !dialogTitle ||
    !pointForm ||
    !pointName ||
    !pointIconFile ||
    !pointDesc ||
    !iconPreview ||
    !cancelForm ||
    !detailView ||
    !detailName ||
    !detailDesc ||
    !detailIcon ||
    !backDetail ||
    !detailPhotos ||
    !commentsList ||
    !commentInput ||
    !submitComment ||
    !geoBtn ||
    !searchInput
  ) {
    return;
  }

  let map = null;
  let geolocation = null;
  let menuMode = "create";
  let selectedId = null;
  let pendingLngLat = null; // 用于存储新建地点的经纬度
  let editingId = null;
  let iconDataUrl = "";
  let points = loadPoints();
  let markers = []; // 存储 AMap.Marker 实例
  let longPressTimer = null; // 长按定时器

  const uuid = () => `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const savePoints = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
  };

  function loadPoints() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((p) => p && typeof p.id === "string");
    } catch {
      return [];
    }
  }

  const getPointById = (id) => points.find((p) => p.id === id) || null;

  // 初始化地图
  const initMap = () => {
    // 福州大学至诚学院中心坐标
    const ZC_CENTER = [119.273151, 26.074554];
    
    map = new AMap.Map('mapContent', {
      zoom: 16.5, // 调整为接近参考图的比例尺
      center: ZC_CENTER,
      viewMode: '3D',
    });

    // 限制拖动范围：福州大学至诚学院周边 (放宽左右距离)
    const bounds = new AMap.Bounds(
      [119.250000, 26.065000], // 西南 (经度更往西)
      [119.300000, 26.085000]  // 东北 (经度更往东)
    );
    map.setLimitBounds(bounds);

    // 地图长按事件 - 弹出新建菜单 (适配移动端和 PC)
    map.on('mousedown', (e) => {
      hideMenu();
      longPressTimer = setTimeout(() => {
        pendingLngLat = [e.lnglat.lng, e.lnglat.lat];
        showMenu(e.originEvent.clientX, e.originEvent.clientY, "create");
        longPressTimer = null;
      }, 600); // 600ms 判定为长按
    });

    map.on('mouseup', () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    });

    map.on('mousemove', () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    });

    // 移动端触摸支持
    map.on('touchstart', (e) => {
      hideMenu();
      if (e.originEvent.touches.length > 1) return; // 多指操作不触发
      longPressTimer = setTimeout(() => {
        pendingLngLat = [e.lnglat.lng, e.lnglat.lat];
        const touch = e.originEvent.touches[0];
        showMenu(touch.clientX, touch.clientY, "create");
        longPressTimer = null;
      }, 600);
    });

    map.on('touchend', () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    });

    map.on('touchmove', () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    });

    // 加载定位插件
    map.plugin('AMap.Geolocation', function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 10000,           // 超过10秒后停止定位，默认：5s
        buttonPosition: 'RB',    // 定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,     // 定位成功后是否自动调整地图视野到定位点
        showButton: false,        // 使用自定义按钮
      });
      map.addControl(geolocation);
    });

    /** 
     * [提示] 如果您有校园手绘地图图片，可以使用以下代码叠加：
     * 
     * var imageLayer = new AMap.ImageLayer({
     *   url: './your-hand-drawn-map.png', // 图片 URL
     *   bounds: new AMap.Bounds([116.327, 39.938], [116.520, 39.996]), // 图片覆盖的地理范围 [西南角, 东北角]
     *   zooms: [15, 20] // 显示层级范围
     * });
     * map.add(imageLayer);
     */

    renderPoints();
  };

  const renderPoints = (filterText = "") => {
    // 清除旧标记
    markers.forEach(m => m.setMap(null));
    markers = [];

    const displayPoints = filterText 
      ? points.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()))
      : points;

    displayPoints.forEach((p) => {
      // 创建标记内容
      const markerContent = document.createElement("div");
      markerContent.className = "map-marker-v2"; // 稍微调整样式以适应 AMap
      
      const iconNode = p.icon
        ? `<img class="map-marker-icon" src="${p.icon}" alt="${p.name}" />`
        : `<span class="map-marker-fallback">📍</span>`;
      
      markerContent.innerHTML = `
        ${iconNode}
        <span class="map-marker-label">${p.name || "未命名地点"}</span>
      `;

      const marker = new AMap.Marker({
        position: [p.lng, p.lat],
        content: markerContent,
        offset: new AMap.Pixel(-10, -10),
        extData: { id: p.id }
      });

      // 标记点击事件 - 弹出修改/删除菜单
      marker.on('click', (e) => {
        // 阻止事件冒泡到地图
        if (e.originEvent) e.originEvent.stopPropagation();
        selectedId = p.id;
        showMenu(e.originEvent.clientX, e.originEvent.clientY, "marker", p.id);
      });

      // 标记双击事件 - 打开详情
      marker.on('dblclick', (e) => {
        if (e.originEvent) e.originEvent.stopPropagation();
        openDetail(p.id);
      });

      marker.setMap(map);
      markers.push(marker);
    });
  };

  const hideMenu = () => {
    mapMenu.classList.add("is-hidden");
  };

  const showMenu = (clientX, clientY, mode, markerId = null) => {
    menuMode = mode;
    selectedId = markerId;

    menuEdit.disabled = mode !== "marker";
    menuDelete.disabled = mode !== "marker";

    const menuWidth = 160;
    const menuHeight = 128;
    const x = Math.max(8, Math.min(clientX, window.innerWidth - menuWidth - 8));
    const y = Math.max(8, Math.min(clientY, window.innerHeight - menuHeight - 8));
    mapMenu.style.left = `${x}px`;
    mapMenu.style.top = `${y}px`;
    mapMenu.classList.remove("is-hidden");
  };

  const resetForm = () => {
    pointForm.reset();
    iconDataUrl = "";
    iconPreview.classList.add("is-hidden");
    iconPreview.removeAttribute("src");
  };

  const openForm = (type, point = null) => {
    editingId = point ? point.id : null;
    dialogTitle.textContent = type === "edit" ? "修改地点" : "新建地点";
    resetForm();
    if (point) {
      pointName.value = point.name || "";
      pointDesc.value = point.desc || "";
      if (point.icon) {
        iconDataUrl = point.icon;
        iconPreview.src = point.icon;
        iconPreview.classList.remove("is-hidden");
      }
    }
    formModal.classList.remove("is-hidden");
    formModal.setAttribute("aria-hidden", "false");
  };

  const closeForm = () => {
    formModal.classList.add("is-hidden");
    formModal.setAttribute("aria-hidden", "true");
  };

  const openDetail = (id) => {
    const p = getPointById(id);
    if (!p) return;
    detailName.textContent = p.name || "未命名地点";
    detailDesc.textContent = p.desc || "暂无详情";
    
    // 渲染实景照片 (目前先放图标作为唯一照片演示)
    detailPhotos.innerHTML = "";
    if (p.icon) {
      const img = document.createElement("img");
      img.src = p.icon;
      img.className = "photo-item"; // 可以在 css 补样式
      img.style.width = "100%";
      img.style.height = "80px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "4px";
      detailPhotos.appendChild(img);
    } else {
      detailPhotos.innerHTML = '<div class="photo-placeholder">暂无实景照片</div>';
    }

    // 渲染评论列表
    renderComments(p.comments || []);

    if (p.icon) {
      detailIcon.src = p.icon;
      detailIcon.classList.remove("is-hidden");
    } else {
      detailIcon.classList.add("is-hidden");
      detailIcon.removeAttribute("src");
    }
    detailView.classList.remove("is-hidden");
    detailView.setAttribute("aria-hidden", "false");
  };

  const closeDetail = () => {
    detailView.classList.add("is-hidden");
    detailView.setAttribute("aria-hidden", "true");
  };

  const renderComments = (comments) => {
    commentsList.innerHTML = "";
    if (comments.length === 0) {
      commentsList.innerHTML = '<div class="comment-placeholder">暂无评论</div>';
      return;
    }
    comments.forEach(c => {
      const item = document.createElement("div");
      item.className = "comment-item";
      item.innerHTML = `
        <div class="comment-user">匿名用户</div>
        <div class="comment-text">${c.text}</div>
      `;
      commentsList.appendChild(item);
    });
    // 滚动到底部
    commentsList.scrollTop = commentsList.scrollHeight;
  };

  // 监听文档点击隐藏菜单
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#mapMenu") && !e.target.closest(".amap-marker")) {
      hideMenu();
    }
  });

  menuCreate.addEventListener("click", () => {
    hideMenu();
    openForm("create");
  });

  menuEdit.addEventListener("click", () => {
    if (!selectedId) return;
    const p = getPointById(selectedId);
    if (!p) return;
    hideMenu();
    openForm("edit", p);
  });

  menuDelete.addEventListener("click", () => {
    if (!selectedId) return;
    const p = getPointById(selectedId);
    if (!p) return;
    const ok = window.confirm(`确认删除地点「${p.name || "未命名地点"}」？`);
    if (!ok) return;
    points = points.filter((it) => it.id !== selectedId);
    savePoints();
    renderPoints();
    hideMenu();
  });

  pointIconFile.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      iconDataUrl = typeof reader.result === "string" ? reader.result : "";
      if (iconDataUrl) {
        iconPreview.src = iconDataUrl;
        iconPreview.classList.remove("is-hidden");
      }
    };
    reader.readAsDataURL(file);
  });

  pointForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = pointName.value.trim();
    const desc = pointDesc.value.trim();
    if (!name) return;

    if (editingId) {
      points = points.map((p) => {
        if (p.id !== editingId) return p;
        return {
          ...p,
          name,
          desc,
          icon: iconDataUrl || p.icon || "",
          updatedAt: Date.now(),
        };
      });
    } else {
      points.push({
        id: uuid(),
        lng: pendingLngLat[0],
        lat: pendingLngLat[1],
        name,
        desc,
        icon: iconDataUrl,
        updatedAt: Date.now(),
      });
    }
    savePoints();
    renderPoints();
    closeForm();
  });

  cancelForm.addEventListener("click", closeForm);
  formModal.addEventListener("click", (e) => {
    if (e.target === formModal) closeForm();
  });
  backDetail.addEventListener("click", closeDetail);

  // 定位按钮点击
  geoBtn.addEventListener("click", () => {
    if (geolocation) {
      geolocation.getCurrentPosition();
    }
  });

  // 搜索框输入事件
  searchInput.addEventListener("input", (e) => {
    const text = e.target.value.trim();
    renderPoints(text);
  });

  // 提交评论
  submitComment.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text || !selectedId) return;

    const p = getPointById(selectedId);
    if (!p) return;

    if (!p.comments) p.comments = [];
    p.comments.push({ text, time: Date.now() });
    
    savePoints();
    renderComments(p.comments);
    commentInput.value = "";
  });

  // 初始化
  if (window.AMap) {
    initMap();
  } else {
    // 如果 AMap 还没加载完，等待加载
    window.onload = initMap;
  }
})();

(() => {
  const pages = {
    map: document.getElementById("page-map"),
    memorial: document.getElementById("page-memorial"),
    discover: document.getElementById("page-discover"),
    me: document.getElementById("page-me"),
  };
  const tabs = Array.from(document.querySelectorAll(".tab-item"));

  const setActive = (key) => {
    Object.entries(pages).forEach(([k, el]) => {
      if (!el) return;
      el.classList.toggle("is-active", k === key);
    });
    tabs.forEach((btn) => {
      const active = btn.getAttribute("data-tab") === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
  };

  tabs.forEach((btn) => {
    btn.addEventListener(
      "click",
      () => {
        const key = btn.getAttribute("data-tab");
        if (key && pages[key]) setActive(key);
      },
      { passive: true }
    );
  });
})();
