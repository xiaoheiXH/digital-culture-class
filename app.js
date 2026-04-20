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
  const btnLike = document.getElementById("btnLike");
  const likeCount = document.getElementById("likeCount");
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
  const imageViewer = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("viewerImage");
  const closeImageViewer = document.getElementById("closeImageViewer");
  const toast = document.getElementById("toast");

  // 新增 DOM
  const tabLogin = document.getElementById("tabLogin");
  const tabRegister = document.getElementById("tabRegister");
  const authSubmitBtn = document.getElementById("authSubmitBtn");
  const btnFavorite = document.getElementById("btnFavorite");
  const btnShare = document.getElementById("btnShare");
  const openFavorites = document.getElementById("openFavorites");
  const openMyComments = document.getElementById("openMyComments");
  const openFriends = document.getElementById("openFriends");
  const genericListModal = document.getElementById("genericListModal");
  const genericListTitle = document.getElementById("genericListTitle");
  const closeGenericList = document.getElementById("closeGenericList");
  const genericListContainer = document.getElementById("genericListContainer");
  const meSubpage = document.getElementById("meSubpage");
  const backSubpage = document.getElementById("backSubpage");
  const subpageTitle = document.getElementById("subpageTitle");
  const subpageListContainer = document.getElementById("subpageListContainer");
  const addFriendArea = document.getElementById("addFriendArea");
  const friendNameInput = document.getElementById("friendNameInput");
  const addFriendBtn = document.getElementById("addFriendBtn");
  
  const STORAGE_KEY = "campus_map_points_v2";
  const USER_KEY = "campus_map_user";
  const USERS_DB_KEY = "campus_map_users_db"; // 本地用户数据库

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
    !btnLike ||
    !likeCount ||
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
    !settingsModal ||
    !imageViewer ||
    !viewerImage ||
    !closeImageViewer ||
    !toast ||
    !genericListModal ||
    !genericListTitle ||
    !closeGenericList ||
    !genericListContainer ||
    !meSubpage ||
    !backSubpage ||
    !subpageTitle ||
    !subpageListContainer ||
    !addFriendArea
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
  let usersDB = JSON.parse(localStorage.getItem(USERS_DB_KEY)) || [{username: 'bonvoyage', password: 'pathbeclear', role: 'admin', favorites: [], friends: []}];
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
  let isLoginMode = true;
  let toastTimer = null;

  const showToast = (message, type = "info", duration = 2200) => {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);
    toast.classList.remove("is-hidden", "success", "error");
    if (type === "success") toast.classList.add("success");
    if (type === "error") toast.classList.add("error");
    toast.textContent = String(message || "");
    toastTimer = setTimeout(() => {
      toast.classList.add("is-hidden");
    }, duration);
  };

  // 保存用户数据库
  const saveUsersDB = () => {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(usersDB));
  };

  // 同步当前用户最新状态
  const syncCurrentUser = () => {
    if (currentUser && currentUser.role !== 'guest') {
      const userInDb = usersDB.find(u => u.username === currentUser.username);
      if (userInDb) {
        currentUser = { ...userInDb };
        localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
      }
    }
  };

  // 登录/注册模式切换
  const setAuthMode = (isLogin) => {
    isLoginMode = isLogin;
    if (isLogin) {
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");
      authSubmitBtn.textContent = "进入系统";
      document.getElementById("loginSubtitle").textContent = "请登录以开始您的探索之旅";
      document.getElementById("loginFooterText").textContent = "直接注册，拥有专属账号";
    } else {
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");
      authSubmitBtn.textContent = "立即注册";
      document.getElementById("loginSubtitle").textContent = "创建账号以体验完整功能";
      document.getElementById("loginFooterText").textContent = "已有账号？直接登录";
    }
    loginError.classList.add("is-hidden");
  };

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener("click", () => setAuthMode(true));
    tabRegister.addEventListener("click", () => setAuthMode(false));
  }

  // 登录/注册逻辑
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    if (isLoginMode) {
      // 登录
      const user = usersDB.find(u => u.username === username && u.password === password);
      if (user) {
        currentUser = { ...user };
        localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
        updateMePage();
        loginOverlay.classList.add("is-hidden");
        initApp();
      } else {
        loginError.textContent = "账号或密码错误，请重试";
        loginError.classList.remove("is-hidden");
      }
    } else {
      // 注册
      const exists = usersDB.find(u => u.username === username);
      if (exists) {
        loginError.textContent = "该账号名已存在，请换一个";
        loginError.classList.remove("is-hidden");
      } else {
        const newUser = { username, password, role: "user", favorites: [], friends: [] };
        usersDB.push(newUser);
        saveUsersDB();
        currentUser = { ...newUser };
        localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
        updateMePage();
        loginOverlay.classList.add("is-hidden");
        initApp();
      }
    }
  };

  // 登出逻辑
  const handleLogout = () => {
    localStorage.removeItem(USER_KEY);
    currentUser = null;
    location.reload(); 
  };

  // 匿名访问
  const handleSkipLogin = () => {
    currentUser = { username: "匿名访客", role: "guest", favorites: [], friends: [] };
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
      return; 
    }
    
    // 兼容旧数据
    if (!currentUser.favorites) currentUser.favorites = [];
    if (!currentUser.friends) currentUser.friends = [];
    
    syncCurrentUser(); // 确保加载最新本地数据库中的信息
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

  const checkSharedPoint = () => {
    const params = new URLSearchParams(window.location.search);
    const pointId = params.get('point');
    if (pointId) {
      const p = getPointById(pointId);
      if (p) {
        // 平移并放大地图
        if (map) {
          map.setCenter([p.lng, p.lat]);
          map.setZoom(18);
        }
        // 延迟一点打开详情，避免被初始化覆盖
        setTimeout(() => {
          openDetail(pointId);
        }, 300);
      }
    }
  };

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
        if (onlinePoints.length === 0 && points.length > 0) {
          // 特殊逻辑：如果云端是空的，但本地有数据（比如测试点或你刚标的点）
          // 则自动将本地数据推送到云端进行初始化
          console.log('云端为空，正在初始化云端数据...');
          await savePointsOnline(points);
          if (!silent) alert('✅ 云端已初始化：已将本地 ' + points.length + ' 个地点同步至云端');
        } else if (onlinePoints.length > 0) {
          // 云端有数据，以云端为准
          points = onlinePoints;
          savePointsLocal(points);
          renderPoints();
          if (!silent) alert('✅ 同步成功：已获取云端最新 ' + onlinePoints.length + ' 个地点');
        } else {
          if (!silent) alert('ℹ️ 云端和本地目前均无数据');
        }
      }
      
      // 检查是否是通过分享链接进入的
      checkSharedPoint();
      
    } catch (error) {
      console.error('❌ 同步失败:', error);
      if (!silent) alert('❌ 同步失败: ' + error.message);
    }
  }

  // 保存数据
  async function savePointsOnline(newPoints, options = {}) {
    points = newPoints;
    // 尝试保存到本地，但如果失败了（空间满）也不要中断流程
    try {
      savePointsLocal(points); 
    } catch (e) {
      console.warn('本地存储已满，仅同步至云端');
    }

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
      if (options.notice) showToast("✅ 地点上传成功", "success");
      return true;
    } catch (error) {
      console.error('❌ 无法推送到云端:', error);
      if (options.notice) showToast("❌ 地点上传失败：" + error.message, "error", 3000);
      return false;
    }
  }

  // 仅保存到本地
  const savePointsLocal = (pts) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pts));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.error('LocalStorage 空间不足，无法保存本地备份');
        // 抛出异常让调用者决定是否处理
        throw e;
      }
    }
  };

  const savePoints = (options = {}) => savePointsOnline(points, options);

  function loadPoints() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const defaults = [
        { id: 'def-1', name: '图书馆', lng: 119.273151, lat: 26.074554, desc: '福州大学至诚学院图书馆，环境优美，藏书丰富。', images: ['https://picsum.photos/id/1/400/300','https://picsum.photos/id/10/400/300','https://picsum.photos/id/20/400/300'] },
        { id: 'def-2', name: '北门', lng: 119.271373, lat: 26.076872, desc: '福州大学至诚学院北门，通往福大怡山校区。', images: ['https://picsum.photos/id/11/400/300'] },
        { id: 'def-3', name: '西门', lng: 119.269415, lat: 26.073551, desc: '福州大学至诚学院西门，靠近工业路。', images: ['https://picsum.photos/id/12/400/300'] },
        { id: 'def-4', name: '体育馆', lng: 119.272145, lat: 26.071234, desc: '体育场馆，设施齐全。', images: ['https://picsum.photos/id/13/400/300'] },
        { id: 'test-sync-1', name: '云端同步测试点', lng: 119.273, lat: 26.073, desc: '如果你在不同设备上看到这个点，说明云端同步已经初步打通。', images: ['https://picsum.photos/id/100/400/300'], comments: [{ user: '管理员', text: '这是一个预设的测试评论。', time: Date.now() }] }
      ];

      if (!raw) return defaults;
      
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return defaults;

      // 强制确保测试点存在于列表中（如果本地数据里没有的话）
      const hasTestPoint = parsed.some(p => p.id === 'test-sync-1');
      if (!hasTestPoint) {
        parsed.push(defaults.find(d => d.id === 'test-sync-1'));
      }

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
        : `<img class="map-marker-fallback" src="./svg/marker.svg" alt="Marker" />`;
      
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

  // 图片查看器逻辑
  const openImageViewer = (src) => {
    if (!src) return;
    viewerImage.src = src;
    imageViewer.classList.remove("is-hidden");
    imageViewer.setAttribute("aria-hidden", "false");
  };

  const closeImageViewerModal = () => {
    imageViewer.classList.add("is-hidden");
    imageViewer.setAttribute("aria-hidden", "true");
    viewerImage.src = "";
  };

  closeImageViewer.addEventListener("click", closeImageViewerModal);
  imageViewer.addEventListener("click", (e) => {
    if (e.target === imageViewer) closeImageViewerModal();
  });

  // 渲染并打开详情页
  const openDetail = (id) => {
    const p = getPointById(id);
    if (!p) return;
    
    selectedId = id; // 保存当前选中的点，给收藏、转发用
    
    detailName.textContent = p.name || "未命名地点";
    detailDesc.textContent = p.desc || "暂无详情";
    
    // 更新收藏按钮状态
    updateFavoriteBtnState(id);
    
    // 更新点赞状态
    updateLikeBtnState(p);

    // 渲染实景照片列表
    detailPhotos.innerHTML = "";
    const imagesToShow = p.images || (p.icon ? [p.icon] : []);
    
    if (imagesToShow.length > 0) {
      imagesToShow.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "photo-item";
        img.style.cursor = "pointer";
        img.addEventListener("click", () => openImageViewer(imgSrc));
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
      detailIcon.style.cursor = "pointer";
      // 点击图标全屏查看
      detailIcon.onclick = () => openImageViewer(p.icon);
    } else {
      detailIcon.classList.add("is-hidden");
      detailIcon.removeAttribute("src");
      detailIcon.onclick = null;
    }
    detailView.classList.remove("is-hidden");
    detailView.setAttribute("aria-hidden", "false");
  };

  // 收藏状态更新
  const updateFavoriteBtnState = (id) => {
    if (!currentUser || !currentUser.favorites) return;
    if (currentUser.favorites.includes(id)) {
      btnFavorite.classList.add("is-favorited");
      btnFavorite.title = "取消收藏";
    } else {
      btnFavorite.classList.remove("is-favorited");
      btnFavorite.title = "收藏";
    }
  };

  // 获取当前用户的唯一标识（注册用户用username，匿名用户用一个固定的或本地存储的临时ID）
  const getGuestId = () => {
    let guestId = localStorage.getItem("guest_id");
    if (!guestId) {
      guestId = "guest_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
      localStorage.setItem("guest_id", guestId);
    }
    return guestId;
  };

  const getCurrentUserId = () => {
    if (currentUser && currentUser.role !== 'guest') {
      return currentUser.username;
    }
    return getGuestId();
  };

  // 点赞状态更新
  const updateLikeBtnState = (p) => {
    const likes = p.likes || [];
    likeCount.textContent = likes.length;
    
    const uid = getCurrentUserId();
    if (likes.includes(uid)) {
      btnLike.classList.add("is-liked");
      btnLike.querySelector(".like-text").textContent = "已赞";
    } else {
      btnLike.classList.remove("is-liked");
      btnLike.querySelector(".like-text").textContent = "点赞";
    }
  };

  // 点赞操作
  btnLike.addEventListener("click", () => {
    if (!selectedId) return;
    const p = getPointById(selectedId);
    if (!p) return;

    if (!p.likes) p.likes = [];
    const uid = getCurrentUserId();
    const idx = p.likes.indexOf(uid);

    if (idx > -1) {
      // 已经点赞，取消点赞
      p.likes.splice(idx, 1);
    } else {
      // 未点赞，添加点赞
      p.likes.push(uid);
    }
    
    savePoints();
    updateLikeBtnState(p);
  });

  // 收藏操作
  btnFavorite.addEventListener("click", () => {
    if (!currentUser || currentUser.role === 'guest') {
      alert("收藏功能需要登录专属账号哦");
      return;
    }
    if (!selectedId) return;

    if (!currentUser.favorites) currentUser.favorites = [];
    const idx = currentUser.favorites.indexOf(selectedId);
    if (idx > -1) {
      currentUser.favorites.splice(idx, 1);
    } else {
      currentUser.favorites.push(selectedId);
    }
    
    // 更新本地数据库
    const userInDb = usersDB.find(u => u.username === currentUser.username);
    if (userInDb) {
      userInDb.favorites = currentUser.favorites;
      saveUsersDB();
    }
    localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
    updateFavoriteBtnState(selectedId);
  });

  // 分享/转发操作
  btnShare.addEventListener("click", () => {
    if (!selectedId) return;
    const p = getPointById(selectedId);
    if (!p) return;

    // 获取当前好友列表，弹窗选择好友
    if (!currentUser || currentUser.role === 'guest' || !currentUser.friends || currentUser.friends.length === 0) {
      // 如果没有好友或未登录，直接生成复制链接
      const shareText = `快来看看这个校园地点：${p.name}\n链接: https://digital-culture-class.vercel.app/?point=${selectedId}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert("🔗 链接已复制，去发给朋友吧！");
      }).catch(() => {
        alert("转发链接：" + shareText);
      });
      return;
    }

    // 如果有好友，渲染好友列表供选择
    genericListTitle.textContent = `转发：${p.name}`;
    addFriendArea.classList.add("is-hidden"); // 隐藏添加好友框
    
    genericListContainer.innerHTML = currentUser.friends.map(friend => `
      <div class="generic-item forward-friend-item" data-friend="${friend}">
        <div class="generic-item-content">
          <div class="generic-item-title">${friend}</div>
        </div>
        <button class="btn-forward">发送</button>
      </div>
    `).join('');

    genericListContainer.querySelectorAll(".forward-friend-item").forEach(el => {
      el.addEventListener("click", () => {
        const f = el.getAttribute("data-friend");
        alert(`✅ 已成功将「${p.name}」转发给好友：${f}`);
        closeGenericListModal();
      });
    });

    openGenericListModal();
  });

  const closeGenericListModal = () => {
    genericListModal.classList.add("is-hidden");
    genericListModal.setAttribute("aria-hidden", "true");
  };

  const openGenericListModal = () => {
    genericListModal.classList.remove("is-hidden");
    genericListModal.setAttribute("aria-hidden", "false");
  };

  closeGenericList.addEventListener("click", closeGenericListModal);
  genericListModal.addEventListener("click", (e) => {
    if (e.target === genericListModal) closeGenericListModal();
  });

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

  pointForm.addEventListener("submit", async (e) => {
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
    await savePoints({ notice: true });
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
    let nickname;
    if (!currentUser || currentUser.role === 'guest') {
      nickname = "匿名用户";
    } else {
      nickname = currentUser.username;
    }

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

  // --- 个人中心子页面模块 ---
  
  const closeSubpage = () => {
    meSubpage.classList.add("is-hidden");
    meSubpage.setAttribute("aria-hidden", "true");
  };

  backSubpage.addEventListener("click", closeSubpage);

  const openSubpage = (title) => {
    subpageTitle.textContent = title;
    meSubpage.classList.remove("is-hidden");
    meSubpage.setAttribute("aria-hidden", "false");
  };

  // 渲染通用列表项
  const renderGenericList = (items, emptyText, onClickCallback) => {
    if (!items || items.length === 0) {
      subpageListContainer.innerHTML = `<div class="comment-placeholder">${emptyText}</div>`;
      return;
    }
    
    subpageListContainer.innerHTML = items.map((item, idx) => `
      <div class="generic-item" data-idx="${idx}">
        <div class="generic-item-content">
          <div class="generic-item-title">${item.title}</div>
          <div class="generic-item-desc">${item.desc}</div>
        </div>
      </div>
    `).join('');

    subpageListContainer.querySelectorAll('.generic-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = el.getAttribute('data-idx');
        onClickCallback(items[idx]);
      });
    });
  };

  // 跳转到地图页面的公共函数
  const switchToMapPage = () => {
    // 使用 hash 作为信号或直接触发全局事件。这里采用直接分发自定义事件的方法，让底部的自执行函数监听到。
    const event = new CustomEvent("switch-tab", { detail: { tab: "map" } });
    document.dispatchEvent(event);
  };

  // 我的收藏
  openFavorites.addEventListener("click", () => {
    if (!currentUser || currentUser.role === 'guest') return alert("请先登录专属账号");
    addFriendArea.classList.add("is-hidden");
    
    const favPoints = (currentUser.favorites || []).map(id => getPointById(id)).filter(Boolean);
    const items = favPoints.map(p => ({
      title: p.name,
      desc: p.desc || '暂无描述',
      id: p.id
    }));

    renderGenericList(items, "暂无收藏的标点", (item) => {
      closeSubpage();
      switchToMapPage();
      const p = getPointById(item.id);
      if (p && map) {
        map.setCenter([p.lng, p.lat]);
        map.setZoom(18);
        openDetail(item.id);
      }
    });
    openSubpage("我的收藏");
  });

  // 我的评论
  openMyComments.addEventListener("click", () => {
    if (!currentUser || currentUser.role === 'guest') return alert("请先登录专属账号");
    addFriendArea.classList.add("is-hidden");

    let myComments = [];
    points.forEach(p => {
      if (p.comments) {
        p.comments.forEach(c => {
          if (c.user === currentUser.username) {
            myComments.push({
              title: p.name,
              desc: `我说：${c.text}`,
              id: p.id
            });
          }
        });
      }
    });

    renderGenericList(myComments, "暂无发表过的评论", (item) => {
      closeSubpage();
      switchToMapPage();
      const p = getPointById(item.id);
      if (p && map) {
        map.setCenter([p.lng, p.lat]);
        map.setZoom(18);
        openDetail(item.id);
      }
    });
    openSubpage("我的评论");
  });

  // 我的好友
  openFriends.addEventListener("click", () => {
    if (!currentUser || currentUser.role === 'guest') return alert("请先登录专属账号");
    addFriendArea.classList.remove("is-hidden"); // 显示添加好友区域
    friendNameInput.value = "";

    const renderFriends = () => {
      const friends = currentUser.friends || [];
      const items = friends.map(f => ({
        title: f,
        desc: "已添加的好友"
      }));
      renderGenericList(items, "暂无好友，在上方输入账号名添加吧", (item) => {
        // 点击好友可查看其主页，暂只弹窗
        alert(`这是你的好友：${item.title}`);
      });
    };

    renderFriends();
    openSubpage("我的好友");

    // 添加好友事件只绑定一次（使用覆盖或解绑防止重复）
    addFriendBtn.onclick = () => {
      const friendName = friendNameInput.value.trim();
      if (!friendName) return;
      if (friendName === currentUser.username) return alert("不能添加自己为好友");
      
      const friendExists = usersDB.find(u => u.username === friendName);
      if (!friendExists) return alert("该用户不存在");

      if (!currentUser.friends) currentUser.friends = [];
      if (currentUser.friends.includes(friendName)) return alert("已经是好友了");

      currentUser.friends.push(friendName);
      const userInDb = usersDB.find(u => u.username === currentUser.username);
      if (userInDb) {
        userInDb.friends = currentUser.friends;
        saveUsersDB();
      }
      localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
      friendNameInput.value = "";
      alert(`✅ 成功添加好友：${friendName}`);
      renderFriends();
    };
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
  const appHeader = document.getElementById("appHeader");

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
    
    // 控制搜索栏只在“地图”页面显示
    if (appHeader) {
      if (key === "map") {
        appHeader.classList.add("is-active");
      } else {
        appHeader.classList.remove("is-active");
      }
    }
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

  // 监听来自其他模块的跳转请求
  document.addEventListener("switch-tab", (e) => {
    const key = e.detail?.tab;
    if (key && pages[key]) setActive(key);
  });
})();
