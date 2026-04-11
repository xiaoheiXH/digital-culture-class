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
  const commentNickname = document.getElementById("commentNickname");
  const submitComment = document.getElementById("submitComment");
  const geoBtn = document.getElementById("geoBtn");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const loginOverlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");
  const skipLogin = document.getElementById("skipLogin");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtnMe = document.getElementById("loginBtnMe");
  const meUsername = document.getElementById("meUsername");
  const meRole = document.getElementById("meRole");
  const syncCloud = document.getElementById("syncCloud");
  const openSettings = document.getElementById("openSettings");
  const closeSettings = document.getElementById("closeSettings");
  const settingsModal = document.getElementById("settingsModal");
  
  const STORAGE_KEY = "campus_map_points_v2";
  const USER_KEY = "campus_map_user";

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
    !commentNickname ||
    !submitComment ||
    !geoBtn ||
    !searchInput ||
    !searchResults ||
    !loginOverlay ||
    !loginForm ||
    !loginError ||
    !skipLogin ||
    !logoutBtn ||
    !loginBtnMe ||
    !meUsername ||
    !meRole ||
    !syncCloud ||
    !openSettings ||
    !closeSettings ||
    !settingsModal
  ) {
    return;
  }

  let map = null;
  let geolocation = null;
  let menuMode = "create";
  let selectedId = null;
  let pendingLngLat = null;
  let editingId = null;
  let iconDataUrl = "";
  let currentUser = JSON.parse(localStorage.getItem(USER_KEY)) || null;
  let points = loadPoints();
  
  // 建筑数据（占位，后续可改为从服务器获取或管理员配置）
  const buildings = [
    { id: 'b-1', name: '教学楼 A', type: 'building', desc: '主要教学场所，内有大型阶梯教室。', lng: 119.271, lat: 26.075 },
    { id: 'b-2', name: '学生公寓 1 号楼', type: 'building', desc: '学生宿舍区。', lng: 119.275, lat: 26.073 },
    { id: 'b-3', name: '行政楼', type: 'building', desc: '学校办公行政中心。', lng: 119.272, lat: 26.076 },
    { id: 'b-4', name: '校医院', type: 'building', desc: '提供医疗保障服务。', lng: 119.274, lat: 26.074 },
  ];

  let markers = [];
  let longPressTimer = null;

  // 登录逻辑
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // 管理员账号校验
    if (username === "bonvoyage" && password === "pathbeclear") {
      currentUser = { username, role: "admin" };
    } else if (username && password) {
      // 普通用户登录
      currentUser = { username, role: "user" };
    } else {
      loginError.classList.remove("is-hidden");
      return;
    }

    localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
    updateMePage();
    loginOverlay.classList.add("is-hidden");
    initApp();
  };

  // 登出逻辑
  const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    currentUser = null;
    location.reload(); 
  };

  // 匿名访问
  const handleSkipLogin = () => {
    currentUser = { username: "匿名访客", role: "guest" };
    // 不保存到本地存储，刷新后需重新选择或登录
    updateMePage();
    loginOverlay.classList.add("is-hidden");
    initApp();
  };

  // 从“我的”页面去登录
  const goToLogin = () => {
    loginOverlay.classList.remove("is-hidden");
    loginError.classList.add("is-hidden");
  };

  // 设置弹窗开关
  openSettings.addEventListener("click", () => {
    settingsModal.classList.remove("is-hidden");
    settingsModal.setAttribute("aria-hidden", "false");
  });

  const closeSettingsModal = () => {
    settingsModal.classList.add("is-hidden");
    settingsModal.setAttribute("aria-hidden", "true");
  };

  closeSettings.addEventListener("click", closeSettingsModal);
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) closeSettingsModal();
  });

  // 手动同步
  syncCloud.addEventListener("click", () => fetchPointsOnline(false));

  // 更新“我的”页面信息
  const updateMePage = () => {
    if (currentUser) {
      meUsername.textContent = currentUser.username;
      const roleText = {
        'admin': '管理员',
        'user': '注册用户',
        'guest': '匿名访客'
      }[currentUser.role] || '未知';
      meRole.textContent = `角色：${roleText}`;
      
      // 控制退出/登录按钮显示
      if (currentUser.role === 'guest') {
        logoutBtn.classList.add("is-hidden");
        loginBtnMe.classList.remove("is-hidden");
      } else {
        logoutBtn.classList.remove("is-hidden");
        loginBtnMe.classList.add("is-hidden");
      }
    }
  };

  loginForm.addEventListener("submit", handleLogin);
  skipLogin.addEventListener("click", handleSkipLogin);
  logoutBtn.addEventListener("click", handleLogout);
  loginBtnMe.addEventListener("click", goToLogin);

  // 初始化应用
  const initApp = () => {
    // 匿名或已登录用户都可进入
    if (!currentUser) {
      // 默认不强制弹出登录，或者根据需求决定是否弹出
      // 如果希望一开始就让用户选，则保持 loginOverlay 开启
      return; 
    }
    updateMePage();
    loginOverlay.classList.add("is-hidden");
    if (window.AMap) {
      initMap();
    } else {
      window.onload = initMap;
    }
    fetchPointsOnline(); // [新增] 初始化时从云端同步数据
  };

  const uuid = () => `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  // 获取数据
  async function fetchPointsOnline(silent = true) {
    if (!silent) console.log('正在从云端同步数据...');
    try {
      const response = await fetch('/api/points');
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || '云端未响应');
      }
      const onlinePoints = await response.json();
      
      if (Array.isArray(onlinePoints)) {
        // 智能合并：本地新增但云端没有的 ID 会被保留（可选，这里先用覆盖逻辑）
        points = onlinePoints;
        savePointsLocal(points);
        renderPoints();
        if (!silent) alert('✅ 同步成功：已获取云端最新 ' + onlinePoints.length + ' 个地点');
      }
    } catch (error) {
      console.error('❌ 同步失败:', error);
      if (!silent) alert('❌ 同ップ失败: ' + error.message);
    }
  }

  // 保存数据
  async function savePointsOnline(newPoints) {
    points = newPoints;
    savePointsLocal(points); 

    try {
      const response = await fetch('/api/points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPoints)
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || '保存失败');
      }
      console.log('✅ 已同步至云端');
    } catch (error) {
      console.error('❌ 无法推送到云端:', error);
      // alert('数据仅保存在本地。' + error.message);
    }
  }

  // 仅保存到本地
  const savePointsLocal = (pts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pts));
  };

  const savePoints = () => {
    savePointsOnline(points);
  };

  function loadPoints() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // 提供一些默认的至诚学院地点
        const defaults = [
          { 
            id: 'def-1', 
            name: '图书馆', 
            lng: 119.273151, 
            lat: 26.074554, 
            desc: '福州大学至诚学院图书馆，环境优美，藏书丰富。',
            images: [
              'https://picsum.photos/id/1/400/300',
              'https://picsum.photos/id/10/400/300',
              'https://picsum.photos/id/20/400/300'
            ]
          },
          { 
            id: 'def-2', 
            name: '北门', 
            lng: 119.271373, 
            lat: 26.076872, 
            desc: '福州大学至诚学院北门，通往福大怡山校区。',
            images: ['https://picsum.photos/id/11/400/300']
          },
          { 
            id: 'def-3', 
            name: '西门', 
            lng: 119.269415, 
            lat: 26.073551, 
            desc: '福州大学至诚学院西门，靠近工业路。',
            images: ['https://picsum.photos/id/12/400/300']
          },
          { 
            id: 'def-4', 
            name: '体育馆', 
            lng: 119.272145, 
            lat: 26.071234, 
            desc: '体育场馆，设施齐全。',
            images: ['https://picsum.photos/id/13/400/300']
          },
          {
            id: 'test-sync-1',
            name: '云端同步测试点',
            lng: 119.273,
            lat: 26.073,
            desc: '如果你在不同设备上看到这个点，说明云端同步已经初步打通。',
            images: ['https://picsum.photos/id/100/400/300'],
            comments: [
              { user: '管理员', text: '这是一个预设的测试评论。', time: Date.now() }
            ]
          }
        ];
        return defaults;
      }
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
     * 1. 叠加校园建筑描绘图 (GroundImage/ImageLayer)
     * 将您的手绘图或建筑描绘图放置在 ./assets/campus-map.png (示例路径)
     */
    const campusImageLayer = new AMap.ImageLayer({
      url: 'https://a.amap.com/jsapi_demos/static/demo-center/bg/map_shanghai.png', // 示例图
      bounds: new AMap.Bounds(
        [119.268000, 26.068000], // 西南角
        [119.278000, 26.078000]  // 东北角
      ),
      zooms: [15, 20],
      opacity: 0, // [修改] 暂时设为 0（透明），等您准备好图片后再调回 0.85 左右
      visible: false // [修改] 也可以直接设为不可见，功能代码依然保留
    });
    map.add(campusImageLayer);

    /**
     * 2. 绘制建筑轮廓 (Polygon)
     * 即使图片透明，轮廓依然可以存在，您可以用来测试“点击建筑弹出详情”的功能
     */
    const renderBuildingOutlines = () => {
      // 示例：图书馆轮廓 (Polygon)
      const libraryPath = [
        [119.272500, 26.074000],
        [119.273800, 26.074000],
        [119.273800, 26.075000],
        [119.272500, 26.075000]
      ];

      const polygon = new AMap.Polygon({
        path: libraryPath,
        fillColor: '#00b2ff',
        fillOpacity: 0.1,     // [修改] 调低填充透明度，让它不遮挡底层地图
        strokeColor: '#00b2ff',
        strokeWeight: 1,      // [修改] 调细边框
        strokeStyle: 'dashed', // [修改] 使用虚线，表示这只是一个逻辑区域
        extData: { id: 'def-1' }
      });

      polygon.on('click', (e) => {
        openDetail('def-1');
      });

      // 鼠标移入效果
      polygon.on('mouseover', () => {
        polygon.setOptions({ fillOpacity: 0.5 });
      });
      polygon.on('mouseout', () => {
        polygon.setOptions({ fillOpacity: 0.2 });
      });

      map.add(polygon);
    };

    renderBuildingOutlines();
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
    // 如果是 marker 模式（编辑/删除），只有管理员可以操作
    if (mode === "marker" && currentUser?.role !== "admin") return;
    
    // 如果是 create 模式，所有人（包括匿名访客）都可以操作
    if (mode === "create" && !currentUser) return; // 理论上 initApp 会处理 currentUser

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
    // 只有管理员可以编辑，但所有人可以新建
    if (type === "edit" && currentUser?.role !== "admin") return;
    
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
    
    // 渲染实景照片列表
    detailPhotos.innerHTML = "";
    const imagesToShow = p.images || (p.icon ? [p.icon] : []);
    
    if (imagesToShow.length > 0) {
      imagesToShow.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "photo-item";
        detailPhotos.appendChild(img);
      });
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
      commentsList.innerHTML = '<div class="comment-placeholder">暂无评论数据</div>';
      return;
    }
    comments.forEach(c => {
      const item = document.createElement("div");
      item.className = "comment-item";
      const timeStr = new Date(c.time).toLocaleString('zh-CN', { hour12: false });
      item.innerHTML = `
        <div class="comment-user">${c.user || "匿名用户"}</div>
        <div class="comment-text">${c.text}</div>
        <div class="comment-time">${timeStr}</div>
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
    renderSearchResults(text);
  });

  // 渲染搜索结果列表
  const renderSearchResults = (text) => {
    if (!text) {
      searchResults.classList.add("is-hidden");
      searchResults.innerHTML = "";
      return;
    }

    // 同时搜索地点和建筑
    const pointMatches = points.filter(p => 
      p.name.toLowerCase().includes(text.toLowerCase()) || 
      (p.desc && p.desc.toLowerCase().includes(text.toLowerCase()))
    ).map(p => ({ ...p, resultType: 'point' }));

    const buildingMatches = buildings.filter(b => 
      b.name.toLowerCase().includes(text.toLowerCase()) || 
      (b.desc && b.desc.toLowerCase().includes(text.toLowerCase()))
    ).map(b => ({ ...b, resultType: 'building' }));

    const allMatches = [...pointMatches, ...buildingMatches];

    if (allMatches.length === 0) {
      searchResults.innerHTML = '<div class="search-no-result">未找到相关地点或建筑</div>';
    } else {
      searchResults.innerHTML = allMatches.map(item => `
        <div class="search-item" data-id="${item.id}" data-type="${item.resultType}">
          <div class="search-item-icon">
            ${item.resultType === 'building' ? '🏢' : (item.icon ? `<img src="${item.icon}" style="width:24px;height:24px;border-radius:4px;">` : '📍')}
          </div>
          <div class="search-item-info">
            <div class="search-item-name">
              ${item.name} 
              <span class="search-item-tag ${item.resultType === 'building' ? 'tag-building' : 'tag-point'}">
                ${item.resultType === 'building' ? '建筑' : '地点'}
              </span>
            </div>
            <div class="search-item-desc">${item.desc || '暂无描述'}</div>
          </div>
        </div>
      `).join('');

      // 给搜索项添加点击事件
      searchResults.querySelectorAll(".search-item").forEach(el => {
        el.addEventListener("click", () => {
          const id = el.getAttribute("data-id");
          const type = el.getAttribute("data-type");
          
          let item = null;
          if (type === 'point') {
            item = getPointById(id);
          } else {
            item = buildings.find(b => b.id === id);
          }

          if (item && map) {
            map.setCenter([item.lng, item.lat]);
            map.setZoom(18);
            if (type === 'point') {
              openDetail(id);
            } else {
              // 如果是建筑，暂时也弹一个模拟信息
              alert(`您点击了建筑：${item.name}\n${item.desc}\n(建筑详细图层待管理员实装)`);
            }
            searchResults.classList.add("is-hidden");
            searchInput.value = item.name;
          }
        });
      });
    }

    searchResults.classList.remove("is-hidden");
  };

  // 点击页面其他地方关闭搜索结果
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("is-hidden");
    }
  });

  // 提交评论
  submitComment.addEventListener("click", () => {
    const text = commentInput.value.trim();
    const nickname = commentNickname.value.trim() || (currentUser ? currentUser.username : "匿名用户");
    if (!text || !selectedId) return;

    const p = getPointById(selectedId);
    if (!p) return;

    if (!p.comments) p.comments = [];
    p.comments.push({ 
      user: nickname, 
      text: text, 
      time: Date.now() 
    });
    
    savePoints();
    renderComments(p.comments);
    commentInput.value = "";
  });

  // 初始化
  initApp();
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
