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
  const pointSubtitle = document.getElementById("pointSubtitle");
  const pointDesc = document.getElementById("pointDesc");
  const iconPreview = document.getElementById("iconPreview");
  const cancelForm = document.getElementById("cancelForm");
  const detailView = document.getElementById("detailView");
  const detailName = document.getElementById("detailName");
  const detailDistance = document.getElementById("detailDistance");
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
  const overlayAdjustBtn = document.getElementById("overlayAdjustBtn");
  const overlayAdjustModal = document.getElementById("overlayAdjustModal");
  const closeOverlayAdjust = document.getElementById("closeOverlayAdjust");
  const overlayWest = document.getElementById("overlayWest");
  const overlaySouth = document.getElementById("overlaySouth");
  const overlayEast = document.getElementById("overlayEast");
  const overlayNorth = document.getElementById("overlayNorth");
  const overlayRotate = document.getElementById("overlayRotate");
  const overlayStep = document.getElementById("overlayStep");
  const overlayMoveUp = document.getElementById("overlayMoveUp");
  const overlayMoveDown = document.getElementById("overlayMoveDown");
  const overlayMoveLeft = document.getElementById("overlayMoveLeft");
  const overlayMoveRight = document.getElementById("overlayMoveRight");
  const overlayScaleUp = document.getElementById("overlayScaleUp");
  const overlayScaleDown = document.getElementById("overlayScaleDown");
  const overlayRotateLeft = document.getElementById("overlayRotateLeft");
  const overlayRotateRight = document.getElementById("overlayRotateRight");
  const overlayStretchYUp = document.getElementById("overlayStretchYUp");
  const overlayStretchYDown = document.getElementById("overlayStretchYDown");
  const overlayStretchXUp = document.getElementById("overlayStretchXUp");
  const overlayStretchXDown = document.getElementById("overlayStretchXDown");
  const resetOverlayAdjust = document.getElementById("resetOverlayAdjust");
  const saveOverlayAdjust = document.getElementById("saveOverlayAdjust");
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
  const togglePerfMode = document.getElementById("togglePerfMode");
  const perfModeState = document.getElementById("perfModeState");
  const toggleMarkerOpenMode = document.getElementById("toggleMarkerOpenMode");
  const markerOpenModeState = document.getElementById("markerOpenModeState");
  const toggleOverlayVisible = document.getElementById("toggleOverlayVisible");
  const overlayVisibleState = document.getElementById("overlayVisibleState");
  const activityDateLabel = document.getElementById("activityDateLabel");
  const activityDayRow = document.getElementById("activityDayRow");
  const activityList = document.getElementById("activityList");
  const btnAddEvent = document.getElementById("btnAddEvent");
  const openCalendar = document.getElementById("openCalendar");
  const calendarModal = document.getElementById("calendarModal");
  const closeCalendar = document.getElementById("closeCalendar");
  const monthPicker = document.getElementById("monthPicker");
  const calendarGrid = document.getElementById("calendarGrid");
  const eventDetailView = document.getElementById("eventDetailView");
  const backEventDetail = document.getElementById("backEventDetail");
  const deleteEvent = document.getElementById("deleteEvent");
  const closeEventDetail = document.getElementById("closeEventDetail");
  const eventDetailBody = document.getElementById("eventDetailBody");
  const eventDetailImage = document.getElementById("eventDetailImage");
  const eventDetailImagePlaceholder = document.getElementById("eventDetailImagePlaceholder");
  const eventDetailTitle = document.getElementById("eventDetailTitle");
  const eventDetailDate = document.getElementById("eventDetailDate");
  const eventLikeBtn = document.getElementById("eventLikeBtn");
  const eventLikeCount = document.getElementById("eventLikeCount");
  const eventDetailContent = document.getElementById("eventDetailContent");
  const eventScrollIndicator = document.getElementById("eventScrollIndicator");
  const eventScrollThumb = document.getElementById("eventScrollThumb");
  const eventFormModal = document.getElementById("eventFormModal");
  const closeEventForm = document.getElementById("closeEventForm");
  const cancelEventForm = document.getElementById("cancelEventForm");
  const eventForm = document.getElementById("eventForm");
  const eventDateInput = document.getElementById("eventDateInput");
  const eventTitleInput = document.getElementById("eventTitleInput");
  const eventImageFile = document.getElementById("eventImageFile");
  const eventImagePreview = document.getElementById("eventImagePreview");
  const eventContentInput = document.getElementById("eventContentInput");
  const discoverList = document.getElementById("discoverList");
  const btnDiscoverRefresh = document.getElementById("btnDiscoverRefresh");
  const imageViewer = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("viewerImage");
  const closeImageViewer = document.getElementById("closeImageViewer");
  const downloadImageViewer = document.getElementById("downloadImageViewer");
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
  const PERF_MODE_KEY = "campus_map_perf_mode";
  const MARKER_OPEN_MODE_KEY = "campus_map_marker_open_mode";
  const EVENTS_KEY = "campus_map_events_v1";
  const OVERLAY_CONFIG_KEY = "campus_map_overlay_config_v1";
  const OVERLAY_VISIBLE_KEY = "campus_map_overlay_visible_v1";

  const DEFAULT_OVERLAY_CONFIG = {
    url: "./svg/mapfrits.png",
    west: 119.268,
    south: 26.068,
    east: 119.278,
    north: 26.078,
    opacity: 0.95,
    rotationDeg: 0,
  };

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
    !pointSubtitle ||
    !pointDesc ||
    !iconPreview ||
    !cancelForm ||
    !detailView ||
    !detailName ||
    !detailDistance ||
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
    !overlayAdjustBtn ||
    !overlayAdjustModal ||
    !closeOverlayAdjust ||
    !overlayWest ||
    !overlaySouth ||
    !overlayEast ||
    !overlayNorth ||
    !overlayRotate ||
    !overlayStep ||
    !overlayMoveUp ||
    !overlayMoveDown ||
    !overlayMoveLeft ||
    !overlayMoveRight ||
    !overlayScaleUp ||
    !overlayScaleDown ||
    !overlayRotateLeft ||
    !overlayRotateRight ||
    !overlayStretchYUp ||
    !overlayStretchYDown ||
    !overlayStretchXUp ||
    !overlayStretchXDown ||
    !resetOverlayAdjust ||
    !saveOverlayAdjust ||
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
    !togglePerfMode ||
    !perfModeState ||
    !toggleMarkerOpenMode ||
    !markerOpenModeState ||
    !toggleOverlayVisible ||
    !overlayVisibleState ||
    !activityDateLabel ||
    !activityDayRow ||
    !activityList ||
    !btnAddEvent ||
    !openCalendar ||
    !calendarModal ||
    !closeCalendar ||
    !monthPicker ||
    !calendarGrid ||
    !eventDetailView ||
    !backEventDetail ||
    !deleteEvent ||
    !closeEventDetail ||
    !eventDetailBody ||
    !eventDetailImage ||
    !eventDetailImagePlaceholder ||
    !eventDetailTitle ||
    !eventDetailDate ||
    !eventLikeBtn ||
    !eventLikeCount ||
    !eventDetailContent ||
    !eventScrollIndicator ||
    !eventScrollThumb ||
    !eventFormModal ||
    !closeEventForm ||
    !cancelEventForm ||
    !eventForm ||
    !eventDateInput ||
    !eventTitleInput ||
    !eventImageFile ||
    !eventImagePreview ||
    !eventContentInput ||
    !discoverList ||
    !btnDiscoverRefresh ||
    !imageViewer ||
    !viewerImage ||
    !closeImageViewer ||
    !downloadImageViewer ||
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
  let perfModeEnabled = localStorage.getItem(PERF_MODE_KEY) === "1";
  let markerOpenMode = localStorage.getItem(MARKER_OPEN_MODE_KEY) || "single";
  let overlayVisible = localStorage.getItem(OVERLAY_VISIBLE_KEY) !== "0";
  let lastUserLngLat = null;
  let events = [];
  let selectedEventId = null;
  let selectedActivityDate = "";
  let selectedActivityMonth = "";
  let eventImageDataUrl = "";
  let campusImageLayer = null;
  let campusOverlayCanvasWrap = null;
  let campusOverlayCanvas = null;
  let campusOverlayCanvasCtx = null;
  let campusOverlayImage = null;
  let campusOverlayImageUrl = "";
  let overlayCanvasEventsBound = false;

  const sanitizeOverlayConfig = (raw) => {
    if (!raw || typeof raw !== "object") return { ...DEFAULT_OVERLAY_CONFIG };
    const urlRaw = raw.url ?? raw.imageUrl ?? raw.imageURL;
    const url = typeof urlRaw === "string" && urlRaw.trim() ? urlRaw.trim() : DEFAULT_OVERLAY_CONFIG.url;
    let west = Number(raw.west);
    let south = Number(raw.south);
    let east = Number(raw.east);
    let north = Number(raw.north);
    if (
      (!Number.isFinite(west) || !Number.isFinite(south) || !Number.isFinite(east) || !Number.isFinite(north)) &&
      Array.isArray(raw.bounds) &&
      raw.bounds.length === 2 &&
      Array.isArray(raw.bounds[0]) &&
      Array.isArray(raw.bounds[1]) &&
      raw.bounds[0].length >= 2 &&
      raw.bounds[1].length >= 2
    ) {
      west = Number(raw.bounds[0][0]);
      south = Number(raw.bounds[0][1]);
      east = Number(raw.bounds[1][0]);
      north = Number(raw.bounds[1][1]);
    }
    const opacity = Number(raw.opacity);
    const rotationDegRaw = raw.rotationDeg ?? raw.rotateDeg ?? raw.rotation ?? raw.rotate;
    const rotationDeg = Number(rotationDegRaw);

    const cfg = {
      url,
      west: Number.isFinite(west) ? west : DEFAULT_OVERLAY_CONFIG.west,
      south: Number.isFinite(south) ? south : DEFAULT_OVERLAY_CONFIG.south,
      east: Number.isFinite(east) ? east : DEFAULT_OVERLAY_CONFIG.east,
      north: Number.isFinite(north) ? north : DEFAULT_OVERLAY_CONFIG.north,
      opacity: Number.isFinite(opacity) ? Math.max(0, Math.min(1, opacity)) : DEFAULT_OVERLAY_CONFIG.opacity,
      rotationDeg: Number.isFinite(rotationDeg) ? rotationDeg : DEFAULT_OVERLAY_CONFIG.rotationDeg,
    };

    if (cfg.east <= cfg.west) cfg.east = cfg.west + 0.0001;
    if (cfg.north <= cfg.south) cfg.north = cfg.south + 0.0001;
    return cfg;
  };

  const loadOverlayConfigLocal = () => {
    try {
      const raw = localStorage.getItem(OVERLAY_CONFIG_KEY);
      if (!raw) return { ...DEFAULT_OVERLAY_CONFIG };
      return sanitizeOverlayConfig(JSON.parse(raw));
    } catch {
      return { ...DEFAULT_OVERLAY_CONFIG };
    }
  };

  const saveOverlayConfigLocal = (cfg) => {
    try {
      localStorage.setItem(OVERLAY_CONFIG_KEY, JSON.stringify(sanitizeOverlayConfig(cfg)));
    } catch {}
  };

  let overlayConfig = loadOverlayConfigLocal();

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

  const updatePerfModeUI = () => {
    perfModeState.textContent = perfModeEnabled ? "开" : "关";
    perfModeState.classList.toggle("is-on", perfModeEnabled);
  };
  
  const updateMarkerOpenModeUI = () => {
    const on = markerOpenMode !== "double";
    markerOpenModeState.textContent = on ? "开" : "关";
    markerOpenModeState.classList.toggle("is-on", on);
  };

  const updateOverlayVisibleUI = () => {
    overlayVisibleState.textContent = overlayVisible ? "开" : "关";
    overlayVisibleState.classList.toggle("is-on", overlayVisible);
  };

  const setOverlayAdjustInputs = (cfg) => {
    const c = sanitizeOverlayConfig(cfg);
    overlayWest.value = String(c.west);
    overlaySouth.value = String(c.south);
    overlayEast.value = String(c.east);
    overlayNorth.value = String(c.north);
    overlayRotate.value = String(c.rotationDeg);
  };

  const readOverlayAdjustInputs = () => {
    return sanitizeOverlayConfig({
      url: DEFAULT_OVERLAY_CONFIG.url,
      west: Number(overlayWest.value),
      south: Number(overlaySouth.value),
      east: Number(overlayEast.value),
      north: Number(overlayNorth.value),
      rotationDeg: Number(overlayRotate.value),
      opacity: overlayConfig?.opacity ?? DEFAULT_OVERLAY_CONFIG.opacity,
    });
  };

  const readOverlayStep = () => {
    const v = Number(overlayStep.value);
    if (!Number.isFinite(v) || v <= 0) return 0.0001;
    return v;
  };

  const canLoadCampusOverlay = () => location.protocol === "http:" || location.protocol === "https:";

  const ensureCampusOverlayCanvas = () => {
    if (!map) return;
    if (campusOverlayCanvasWrap && campusOverlayCanvas && campusOverlayCanvasCtx) return;
    const container = map.getContainer();
    campusOverlayCanvasWrap = document.createElement("div");
    campusOverlayCanvasWrap.style.position = "absolute";
    campusOverlayCanvasWrap.style.inset = "0";
    campusOverlayCanvasWrap.style.zIndex = "10";
    campusOverlayCanvasWrap.style.pointerEvents = "none";
    campusOverlayCanvasWrap.style.overflow = "hidden";
    container.appendChild(campusOverlayCanvasWrap);

    campusOverlayCanvas = document.createElement("canvas");
    campusOverlayCanvas.style.width = "100%";
    campusOverlayCanvas.style.height = "100%";
    campusOverlayCanvasWrap.appendChild(campusOverlayCanvas);

    campusOverlayCanvasCtx = campusOverlayCanvas.getContext("2d");
  };

  const updateCampusOverlayCanvasSize = () => {
    if (!map || !campusOverlayCanvas || !campusOverlayCanvasCtx) return;
    const container = map.getContainer();
    const rect = container.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    campusOverlayCanvas.width = Math.round(w * dpr);
    campusOverlayCanvas.height = Math.round(h * dpr);
    campusOverlayCanvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    campusOverlayCanvasCtx.imageSmoothingEnabled = true;
  };

  const loadCampusOverlayImage = (absUrl) => {
    if (!absUrl) return;
    if (campusOverlayImage && campusOverlayImageUrl === absUrl && campusOverlayImage.complete) return;
    campusOverlayImageUrl = absUrl;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      campusOverlayImage = img;
      renderCampusOverlayCanvas(overlayConfig);
    };
    img.onerror = () => {
      campusOverlayImage = null;
    };
    img.src = absUrl;
  };

  const isCanvasOverlayMode = (cfg) => Math.abs(Number(cfg?.rotationDeg || 0)) > 1e-6;

  const renderCampusOverlayCanvas = (cfg) => {
    if (!map || !campusOverlayCanvasCtx || !campusOverlayCanvas) return;
    const c = sanitizeOverlayConfig(cfg);
    updateCampusOverlayCanvasSize();
    const ctx = campusOverlayCanvasCtx;
    const container = map.getContainer();
    const rect = container.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    if (!campusOverlayImage) return;

    const sw = map.lngLatToContainer(new AMap.LngLat(c.west, c.south));
    const ne = map.lngLatToContainer(new AMap.LngLat(c.east, c.north));
    if (!sw || !ne) return;

    const left = Math.min(sw.x, ne.x);
    const top = Math.min(sw.y, ne.y);
    const width = Math.abs(ne.x - sw.x);
    const height = Math.abs(ne.y - sw.y);
    if (!Number.isFinite(width) || !Number.isFinite(height) || width < 1 || height < 1) return;

    const cx = left + width / 2;
    const cy = top + height / 2;
    const rad = (c.rotationDeg * Math.PI) / 180;
    ctx.save();
    ctx.globalAlpha = c.opacity;
    ctx.translate(cx, cy);
    ctx.rotate(rad);
    ctx.drawImage(campusOverlayImage, -width / 2, -height / 2, width, height);
    ctx.restore();
  };

  const bindOverlayCanvasEvents = () => {
    if (!map || overlayCanvasEventsBound) return;
    overlayCanvasEventsBound = true;
    const rerender = () => {
      if (!overlayVisible) return;
      if (!isCanvasOverlayMode(overlayConfig)) return;
      renderCampusOverlayCanvas(overlayConfig);
    };
    map.on("mapmove", rerender);
    map.on("zoomend", rerender);
    map.on("resize", rerender);
  };

  const teardownCampusOverlayCanvas = () => {
    if (campusOverlayCanvasWrap) {
      try {
        campusOverlayCanvasWrap.remove();
      } catch {}
    }
    campusOverlayCanvasWrap = null;
    campusOverlayCanvas = null;
    campusOverlayCanvasCtx = null;
    campusOverlayImage = null;
    campusOverlayImageUrl = "";
  };

  const removeCampusOverlay = () => {
    if (campusImageLayer) {
      try {
        if (typeof campusImageLayer.setMap === "function") campusImageLayer.setMap(null);
        else if (map && typeof map.remove === "function") map.remove(campusImageLayer);
      } catch {}
      campusImageLayer = null;
    }
    teardownCampusOverlayCanvas();
  };

  const applyCampusOverlay = (cfg) => {
    if (!map) return;
    if (!canLoadCampusOverlay()) return;
    if (!overlayVisible) {
      removeCampusOverlay();
      return;
    }
    const c = sanitizeOverlayConfig(cfg);
    if (isCanvasOverlayMode(c)) {
      if (campusImageLayer) {
        try {
          if (typeof campusImageLayer.setMap === "function") campusImageLayer.setMap(null);
          else if (map && typeof map.remove === "function") map.remove(campusImageLayer);
        } catch {}
        campusImageLayer = null;
      }
      ensureCampusOverlayCanvas();
      bindOverlayCanvasEvents();
      loadCampusOverlayImage(new URL(c.url, window.location.href).toString());
      renderCampusOverlayCanvas(c);
      return;
    }

    teardownCampusOverlayCanvas();
    if (campusImageLayer) {
      try {
        if (typeof campusImageLayer.setMap === "function") campusImageLayer.setMap(null);
        else if (map && typeof map.remove === "function") map.remove(campusImageLayer);
      } catch {}
      campusImageLayer = null;
    }
    campusImageLayer = new AMap.ImageLayer({
      url: new URL(c.url, window.location.href).toString(),
      bounds: new AMap.Bounds([c.west, c.south], [c.east, c.north]),
      zooms: [3, 20],
      opacity: c.opacity,
      zIndex: 10,
      visible: true,
    });
    if (typeof campusImageLayer.setMap === "function") campusImageLayer.setMap(map);
    else map.add(campusImageLayer);
  };

  const openOverlayAdjustModal = () => {
    if (currentUser?.role !== "admin") return;
    setOverlayAdjustInputs(overlayConfig);
    overlayAdjustModal.classList.remove("is-hidden");
    overlayAdjustModal.setAttribute("aria-hidden", "false");
  };

  const closeOverlayAdjustModal = () => {
    overlayAdjustModal.classList.add("is-hidden");
    overlayAdjustModal.setAttribute("aria-hidden", "true");
  };

  const nudgeOverlay = (dx, dy) => {
    const step = readOverlayStep();
    const c = readOverlayAdjustInputs();
    const next = {
      ...c,
      west: c.west + dx * step,
      east: c.east + dx * step,
      south: c.south + dy * step,
      north: c.north + dy * step,
    };
    setOverlayAdjustInputs(next);
    applyCampusOverlay(next);
  };

  const scaleOverlay = (delta) => {
    const step = readOverlayStep();
    const c = readOverlayAdjustInputs();
    const cx = (c.west + c.east) / 2;
    const cy = (c.south + c.north) / 2;
    const w = c.east - c.west;
    const h = c.north - c.south;
    const nextW = Math.max(step, w * (1 + delta));
    const nextH = Math.max(step, h * (1 + delta));
    const next = {
      ...c,
      west: cx - nextW / 2,
      east: cx + nextW / 2,
      south: cy - nextH / 2,
      north: cy + nextH / 2,
    };
    setOverlayAdjustInputs(next);
    applyCampusOverlay(next);
  };

  const stretchOverlayY = (dir) => {
    const step = readOverlayStep();
    const c = readOverlayAdjustInputs();
    const next = {
      ...c,
      south: c.south - dir * step,
      north: c.north + dir * step,
    };
    setOverlayAdjustInputs(next);
    applyCampusOverlay(next);
  };

  const stretchOverlayX = (dir) => {
    const step = readOverlayStep();
    const c = readOverlayAdjustInputs();
    const next = {
      ...c,
      west: c.west - dir * step,
      east: c.east + dir * step,
    };
    setOverlayAdjustInputs(next);
    applyCampusOverlay(next);
  };

  const rotateOverlay = (deltaDeg) => {
    const c = readOverlayAdjustInputs();
    const next = {
      ...c,
      rotationDeg: Number(c.rotationDeg) + deltaDeg,
    };
    setOverlayAdjustInputs(next);
    applyCampusOverlay(next);
  };

  async function fetchOverlayConfigOnline() {
    try {
      const res = await fetch("/api/mapConfig");
      if (!res.ok) return;
      const remote = await res.json();
      if (remote && typeof remote === "object") {
        overlayConfig = sanitizeOverlayConfig(remote);
        saveOverlayConfigLocal(overlayConfig);
        if (overlayVisible) applyCampusOverlay(overlayConfig);
      }
    } catch {}
  }

  async function saveOverlayConfigOnline(cfg, options = {}) {
    try {
      const res = await fetch("/api/mapConfig", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cfg),
      });
      if (!res.ok) {
        let message = `云端未响应（${res.status}）`;
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const err = await res.json();
            message = err?.error || message;
          } else {
            const t = await res.text();
            if (t) message = t;
          }
        } catch {}
        throw new Error(message);
      }
      if (options.notice) showToast("✅ 底图参数已同步到云端", "success");
      return true;
    } catch (e) {
      if (options.notice) showToast("❌ 底图同步失败：" + (e?.message || "未知错误"), "error", 3000);
      return false;
    }
  }

  const pad2 = (n) => String(n).padStart(2, "0");
  const toDateKey = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  const toMonthKey = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
  const parseDateKey = (s) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
    if (!m) return null;
    const dt = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    if (Number.isNaN(dt.getTime())) return null;
    return dt;
  };
  const formatCNDate = (d) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  const getDowCN = (d) => "日一二三四五六"[d.getDay()];

  const applyPerfModeToMap = () => {
    if (!map) return;
    try {
      map.setStatus({
        rotateEnable: !perfModeEnabled,
        pitchEnable: !perfModeEnabled,
        animateEnable: !perfModeEnabled,
      });
    } catch {}
    try {
      map.setRotation(0);
    } catch {}
    try {
      map.setPitch(0);
    } catch {}
    try {
      map.setZooms(perfModeEnabled ? [15, 19] : [3, 20]);
    } catch {}
  };

  const isDataUrl = (v) => typeof v === "string" && v.startsWith("data:image/");

  const loadImage = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("图片加载失败"));
      img.src = src;
    });

  const canvasToDataUrl = async (canvas, mime, quality) => {
    try {
      const out = canvas.toDataURL(mime, quality);
      if (typeof out === "string" && out.startsWith("data:image/")) return out;
    } catch {}
    return canvas.toDataURL("image/jpeg", quality);
  };

  const shrinkImageDataUrl = async (dataUrl, options = {}) => {
    const {
      maxSide = 256,
      mime = "image/webp",
      quality = 0.72,
      minQuality = 0.55,
      maxChars = 220_000,
    } = options;

    if (!isDataUrl(dataUrl)) return dataUrl;
    if (dataUrl.length <= maxChars) return dataUrl;

    const img = await loadImage(dataUrl);
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) return dataUrl;

    const scale = Math.min(1, maxSide / Math.max(w, h));
    const tw = Math.max(1, Math.round(w * scale));
    const th = Math.max(1, Math.round(h * scale));

    const canvas = document.createElement("canvas");
    canvas.width = tw;
    canvas.height = th;
    const ctx = canvas.getContext("2d");
    if (!ctx) return dataUrl;
    ctx.drawImage(img, 0, 0, tw, th);

    let q = quality;
    let out = await canvasToDataUrl(canvas, mime, q);

    if (mime === "image/webp" && !out.startsWith("data:image/webp")) {
      out = await canvasToDataUrl(canvas, "image/jpeg", q);
    }

    while (out.length > maxChars && q > minQuality) {
      q = Math.max(minQuality, q - 0.08);
      out = await canvasToDataUrl(canvas, out.startsWith("data:image/webp") ? "image/webp" : "image/jpeg", q);
    }

    return out;
  };

  const shrinkIconsInPoints = async (pts) => {
    let changed = false;
    const out = [];
    for (const p of pts) {
      if (!p || typeof p !== "object") continue;
      if (isDataUrl(p.icon) && p.icon.length > 220_000) {
        try {
          const newIcon = await shrinkImageDataUrl(p.icon);
          if (newIcon !== p.icon) {
            out.push({ ...p, icon: newIcon });
            changed = true;
            continue;
          }
        } catch {}
      }
      out.push(p);
    }
    return { points: out, changed };
  };

  const sanitizeFileName = (name) => {
    const n = String(name || "").trim();
    const safe = n.replace(/[\\/:*?"<>|]/g, "_").slice(0, 60);
    return safe || "image";
  };

  const guessExtFromMime = (mime) => {
    if (!mime) return "png";
    const m = String(mime).toLowerCase();
    if (m.includes("webp")) return "webp";
    if (m.includes("jpeg") || m.includes("jpg")) return "jpg";
    if (m.includes("png")) return "png";
    if (m.includes("gif")) return "gif";
    return "png";
  };

  const guessMimeFromDataUrl = (dataUrl) => {
    const m = /^data:([^;]+);/i.exec(String(dataUrl || ""));
    return m ? m[1] : "";
  };

  const downloadUrl = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const downloadImage = async (src, filenameBase) => {
    if (!src) {
      showToast("没有可保存的图片", "error", 2200);
      return;
    }

    try {
      if (isDataUrl(src)) {
        const mime = guessMimeFromDataUrl(src);
        const ext = guessExtFromMime(mime);
        downloadUrl(src, `${sanitizeFileName(filenameBase)}.${ext}`);
        showToast("✅ 已开始保存到本地", "success", 1600);
        return;
      }

      const res = await fetch(src, { cache: "force-cache" });
      if (!res.ok) throw new Error(`图片下载失败（${res.status}）`);
      const blob = await res.blob();
      const ext = guessExtFromMime(blob.type);
      const objUrl = URL.createObjectURL(blob);
      downloadUrl(objUrl, `${sanitizeFileName(filenameBase)}.${ext}`);
      setTimeout(() => URL.revokeObjectURL(objUrl), 10_000);
      showToast("✅ 已开始保存到本地", "success", 1600);
    } catch (e) {
      showToast("保存失败：可能被跨域限制", "error", 2600);
      try {
        window.open(src, "_blank");
      } catch {}
    }
  };

  const loadEventsLocal = () => {
    try {
      const raw = localStorage.getItem(EVENTS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((e) => e && typeof e.id === "string");
    } catch {
      return [];
    }
  };

  const saveEventsLocal = (list) => {
    try {
      localStorage.setItem(EVENTS_KEY, JSON.stringify(list));
    } catch {}
  };

  const fetchEventsOnline = async () => {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data)) {
        events = data;
        saveEventsLocal(events);
      }
    } catch {}
  };

  const saveEventsOnline = async (options = {}) => {
    try {
      saveEventsLocal(events);
    } catch {}

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(events),
      });
      if (!res.ok) {
        let message = `保存失败（${res.status}）`;
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const err = await res.json();
            message = err?.error || message;
          } else {
            const t = await res.text();
            if (t) message = t;
          }
        } catch {}
        throw new Error(message);
      }
      if (options.notice) showToast("✅ 活动发布成功", "success");
      return true;
    } catch (e) {
      if (options.notice) showToast("❌ 活动发布失败：" + e.message, "error", 3000);
      return false;
    }
  };

  const ensureActivityDate = () => {
    const today = new Date();
    if (!selectedActivityDate) selectedActivityDate = toDateKey(today);
    const d = parseDateKey(selectedActivityDate) || today;
    if (!selectedActivityMonth) selectedActivityMonth = toMonthKey(d);
  };

  const getEventById = (id) => events.find((e) => e && e.id === id) || null;

  const updateEventLikeBtnState = (ev) => {
    const likes = ev?.likes || [];
    eventLikeCount.textContent = String(likes.length);
    const uid = getCurrentUserId();
    if (likes.includes(uid)) {
      eventLikeBtn.classList.add("is-liked");
      eventLikeBtn.querySelector(".like-text").textContent = "已赞";
    } else {
      eventLikeBtn.classList.remove("is-liked");
      eventLikeBtn.querySelector(".like-text").textContent = "点赞";
    }
  };

  const clampDateToMonth = (d, monthKey) => {
    const base = new Date(d);
    const m = /^(\d{4})-(\d{2})$/.exec(String(monthKey || ""));
    if (!m) return base;
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const first = new Date(y, mo, 1);
    const last = new Date(y, mo + 1, 0);
    if (base < first) return first;
    if (base > last) return last;
    return base;
  };

  const openCalendarModal = () => {
    ensureActivityDate();
    monthPicker.value = selectedActivityMonth || toMonthKey(new Date());
    renderCalendarGrid();
    calendarModal.classList.remove("is-hidden");
    calendarModal.setAttribute("aria-hidden", "false");
  };

  const closeCalendarModal = () => {
    calendarModal.classList.add("is-hidden");
    calendarModal.setAttribute("aria-hidden", "true");
  };

  closeCalendar.addEventListener("click", closeCalendarModal);
  calendarModal.addEventListener("click", (e) => {
    if (e.target === calendarModal) closeCalendarModal();
  });
  openCalendar.addEventListener("click", openCalendarModal);
  monthPicker.addEventListener("change", () => {
    selectedActivityMonth = monthPicker.value || selectedActivityMonth;
    renderCalendarGrid();
  });

  const renderCalendarGrid = () => {
    const mk = monthPicker.value || selectedActivityMonth;
    const m = /^(\d{4})-(\d{2})$/.exec(String(mk || ""));
    if (!m) return;
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const first = new Date(y, mo, 1);
    const daysInMonth = new Date(y, mo + 1, 0).getDate();
    const weekdayMon0 = (first.getDay() + 6) % 7;
    const selected = parseDateKey(selectedActivityDate);

    const cells = [];
    for (let i = 0; i < weekdayMon0; i++) {
      cells.push({ empty: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(y, mo, d);
      const key = toDateKey(dt);
      const active = selected && toDateKey(selected) === key;
      cells.push({ day: d, key, active });
    }
    while (cells.length % 7 !== 0) {
      cells.push({ empty: true });
    }

    calendarGrid.innerHTML = cells
      .map((c) => {
        if (c.empty) return `<button type="button" class="cal-day is-empty" aria-hidden="true"></button>`;
        return `<button type="button" class="cal-day${c.active ? " is-active" : ""}" data-key="${c.key}">${c.day}</button>`;
      })
      .join("");

    calendarGrid.querySelectorAll(".cal-day[data-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-key");
        if (!key) return;
        selectedActivityDate = key;
        const d = parseDateKey(key);
        if (d) selectedActivityMonth = toMonthKey(d);
        closeCalendarModal();
        renderActivityPage();
      });
    });
  };

  const openEventDetail = (eventId) => {
    const ev = getEventById(eventId);
    if (!ev) return;
    selectedEventId = ev.id;
    eventDetailTitle.textContent = ev.title || "活动标题";
    eventDetailContent.textContent = ev.content || "活动公告";
    const d = parseDateKey(ev.date);
    eventDetailDate.textContent = d ? formatCNDate(d) : (ev.date || "");
    if (ev.image) {
      eventDetailImage.src = ev.image;
      eventDetailImage.classList.remove("is-hidden");
      eventDetailImagePlaceholder.classList.add("is-hidden");
      eventDetailImage.style.cursor = "pointer";
      eventDetailImage.onclick = () => openImageViewer(ev.image);
    } else {
      eventDetailImage.classList.add("is-hidden");
      eventDetailImage.removeAttribute("src");
      eventDetailImagePlaceholder.classList.remove("is-hidden");
      eventDetailImage.style.cursor = "";
      eventDetailImage.onclick = null;
    }
    updateEventLikeBtnState(ev);
    if (currentUser?.role === "admin") {
      deleteEvent.classList.remove("is-hidden");
    } else {
      deleteEvent.classList.add("is-hidden");
    }
    eventDetailView.classList.remove("is-hidden");
    eventDetailView.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-event-open");
    requestAnimationFrame(() => {
      updateEventScrollIndicator();
      eventDetailBody.scrollTop = 0;
      updateEventScrollIndicator();
    });
  };

  const closeEventDetailView = () => {
    eventDetailView.classList.add("is-hidden");
    eventDetailView.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-event-open");
    selectedEventId = null;
  };

  const updateEventScrollIndicator = () => {
    const el = eventDetailBody;
    const track = eventScrollIndicator;
    const thumb = eventScrollThumb;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 0) {
      track.style.display = "none";
      return;
    }
    track.style.display = "block";
    const ratio = el.clientHeight / el.scrollHeight;
    const trackH = track.clientHeight;
    const thumbH = Math.max(18, Math.round(trackH * ratio));
    const top = Math.round(((trackH - thumbH) * el.scrollTop) / max);
    thumb.style.height = `${thumbH}px`;
    thumb.style.top = `${top}px`;
  };

  closeEventDetail.addEventListener("click", closeEventDetailView);
  backEventDetail.addEventListener("click", closeEventDetailView);
  eventDetailView.addEventListener("click", (e) => {
    if (e.target === eventDetailView) closeEventDetailView();
  });
  
  eventDetailBody.addEventListener("scroll", () => {
    updateEventScrollIndicator();
  });

  deleteEvent.addEventListener("click", async () => {
    if (currentUser?.role !== "admin") return;
    if (!selectedEventId) return;
    const ev = getEventById(selectedEventId);
    const ok = window.confirm(`确认删除活动「${ev?.title || "未命名活动"}」？`);
    if (!ok) return;
    events = events.filter((x) => x.id !== selectedEventId);
    const saved = await saveEventsOnline({ notice: true });
    if (saved) {
      closeEventDetailView();
      renderActivityPage();
    }
  });

  eventLikeBtn.addEventListener("click", async () => {
    if (!selectedEventId) return;
    const ev = getEventById(selectedEventId);
    if (!ev) return;
    if (!ev.likes) ev.likes = [];
    const uid = getCurrentUserId();
    const idx = ev.likes.indexOf(uid);
    if (idx > -1) {
      ev.likes.splice(idx, 1);
    } else {
      ev.likes.push(uid);
    }
    updateEventLikeBtnState(ev);
    await saveEventsOnline();
  });

  let activitySwipeStartX = null;
  let activitySwipeStartY = null;

  const moveSelectedWeek = (deltaDays) => {
    ensureActivityDate();
    const mk = selectedActivityMonth;
    const cur = parseDateKey(selectedActivityDate) || new Date();
    const next = new Date(cur);
    next.setDate(next.getDate() + deltaDays);
    const clamped = clampDateToMonth(next, mk);
    selectedActivityDate = toDateKey(clamped);
    renderActivityPage();
  };

  const renderActivityDays = () => {
    ensureActivityDate();
    const mk = selectedActivityMonth;
    const m = /^(\d{4})-(\d{2})$/.exec(String(mk || ""));
    const selectedDate = parseDateKey(selectedActivityDate) || new Date();
    const selected = clampDateToMonth(selectedDate, mk);

    const y = m ? Number(m[1]) : selected.getFullYear();
    const mo = m ? Number(m[2]) - 1 : selected.getMonth();
    const first = new Date(y, mo, 1);
    const last = new Date(y, mo + 1, 0);

    const dowMon0 = (selected.getDay() + 6) % 7;
    const weekStart = new Date(selected);
    weekStart.setDate(selected.getDate() - dowMon0);

    activityDayRow.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      const inMonth = d >= first && d <= last;
      const key = toDateKey(d);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "day-chip" +
        (inMonth ? "" : " is-disabled") +
        (inMonth && key === selectedActivityDate ? " is-active" : "");
      btn.innerHTML = `<div class="dom">${inMonth ? d.getDate() : ""}</div>`;
      btn.addEventListener("click", () => {
        if (!inMonth) return;
        selectedActivityDate = key;
        selectedActivityMonth = toMonthKey(d);
        renderActivityPage();
      });
      activityDayRow.appendChild(btn);
    }

    activityDateLabel.textContent = formatCNDate(selected);
  };

  const renderActivityList = () => {
    ensureActivityDate();
    const list = events
      .filter((e) => e && e.date === selectedActivityDate)
      .sort((a, b) => (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0));

    if (list.length === 0) {
      activityList.innerHTML = `<div class="comment-placeholder">暂无活动（默认显示今日）</div>`;
      return;
    }

    activityList.innerHTML = list
      .map(
        (e) => {
          const title = e.title || "活动标题";
          const desc = String(e.content || "").replace(/\s+/g, " ").slice(0, 46);
          const img = e.image || "";
          return `
            <div class="activity-item" data-id="${e.id}">
              ${img ? `<img class="activity-thumb" src="${img}" alt="${title}" />` : `<div class="activity-thumb"></div>`}
              <div class="activity-info">
                <div class="activity-title">${title}</div>
                <div class="activity-desc">${desc || "活动公告"}</div>
              </div>
            </div>
          `;
        }
      )
      .join("");

    activityList.querySelectorAll(".activity-item").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-id");
        if (id) openEventDetail(id);
      });
    });
  };

  const renderActivityPage = () => {
    renderActivityDays();
    renderActivityList();
    if (currentUser?.role === "admin") {
      btnAddEvent.classList.remove("is-hidden");
    } else {
      btnAddEvent.classList.add("is-hidden");
    }
  };

  activityDayRow.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      activitySwipeStartX = t.clientX;
      activitySwipeStartY = t.clientY;
    },
    { passive: true }
  );

  activityDayRow.addEventListener(
    "touchend",
    (e) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t) return;
      if (activitySwipeStartX == null || activitySwipeStartY == null) return;
      const dx = t.clientX - activitySwipeStartX;
      const dy = t.clientY - activitySwipeStartY;
      activitySwipeStartX = null;
      activitySwipeStartY = null;

      if (Math.abs(dx) < 42 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) {
        moveSelectedWeek(7);
      } else {
        moveSelectedWeek(-7);
      }
    },
    { passive: true }
  );

  const resetEventForm = () => {
    eventForm.reset();
    eventImageDataUrl = "";
    eventImagePreview.classList.add("is-hidden");
    eventImagePreview.removeAttribute("src");
  };

  const openEventForm = () => {
    if (currentUser?.role !== "admin") return;
    ensureActivityDate();
    resetEventForm();
    eventDateInput.value = selectedActivityDate;
    eventFormModal.classList.remove("is-hidden");
    eventFormModal.setAttribute("aria-hidden", "false");
  };

  const closeEventFormModal = () => {
    eventFormModal.classList.add("is-hidden");
    eventFormModal.setAttribute("aria-hidden", "true");
  };

  btnAddEvent.addEventListener("click", openEventForm);
  closeEventForm.addEventListener("click", closeEventFormModal);
  cancelEventForm.addEventListener("click", closeEventFormModal);
  eventFormModal.addEventListener("click", (e) => {
    if (e.target === eventFormModal) closeEventFormModal();
  });

  eventImageFile.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const reader = new FileReader();
      const raw = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
        reader.onerror = () => reject(new Error("读取文件失败"));
        reader.readAsDataURL(file);
      });
      if (!raw) return;
      const compressed = await shrinkImageDataUrl(raw, { maxSide: 960, maxChars: 360_000 });
      eventImageDataUrl = compressed;
      eventImagePreview.src = eventImageDataUrl;
      eventImagePreview.classList.remove("is-hidden");
    } catch {
      showToast("配图处理失败", "error", 2600);
    }
  });

  eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (currentUser?.role !== "admin") return;
    const date = eventDateInput.value || selectedActivityDate;
    const title = String(eventTitleInput.value || "").trim();
    const content = String(eventContentInput.value || "").trim();
    if (!date || !title) {
      showToast("请填写活动日期与标题", "error", 2200);
      return;
    }

    const now = Date.now();
    events.push({
      id: uuid(),
      date,
      title,
      content,
      image: eventImageDataUrl || "",
      createdAt: now,
      updatedAt: now,
    });

    const ok = await saveEventsOnline({ notice: true });
    if (ok) {
      selectedActivityDate = date;
      const d = parseDateKey(date);
      if (d) selectedActivityMonth = toMonthKey(d);
      closeEventFormModal();
      renderActivityPage();
    }
  });

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const haversineKm = (a, b) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(b[1] - a[1]);
    const dLng = toRad(b[0] - a[0]);
    const lat1 = toRad(a[1]);
    const lat2 = toRad(b[1]);
    const s =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
  };

  const formatDistance = (km) => {
    if (!Number.isFinite(km)) return "";
    if (km < 1) return `${Math.round(km * 1000)}m`;
    return `${km.toFixed(1)}km`;
  };

  const renderDiscoverPage = () => {
    const base = lastUserLngLat || [119.273151, 26.074554];
    const list = shuffle(points).slice(0, 10);
    if (!list.length) {
      discoverList.innerHTML = `<div class="comment-placeholder">暂无推荐内容</div>`;
      return;
    }

    discoverList.innerHTML = list
      .map((p) => {
        const img = (p.images && p.images[0]) || p.icon || "";
        const dist = formatDistance(haversineKm(base, [p.lng, p.lat]));
        const subtitle = (p.subtitle || "").trim();
        const meta = dist ? `距离 ${dist}${subtitle ? `·${subtitle}` : ""}` : (subtitle || "");
        const name = p.name || "未命名地点";
        const desc = (p.desc || "").replace(/\s+/g, " ").slice(0, 26);
        return `
          <div class="discover-item" data-id="${p.id}">
            ${img ? `<img class="discover-thumb" src="${img}" alt="${name}" />` : `<div class="discover-thumb"></div>`}
            <div class="discover-info">
              <div class="discover-name">${name}</div>
              <div class="discover-meta">${meta}${desc ? ` · ${desc}` : ""}</div>
            </div>
          </div>
        `;
      })
      .join("");

    discoverList.querySelectorAll(".discover-item").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-id");
        if (!id) return;
        const p = getPointById(id);
        if (!p) return;
        const ev = new CustomEvent("switch-tab", { detail: { tab: "map" } });
        document.dispatchEvent(ev);
        if (map) {
          map.setCenter([p.lng, p.lat]);
          map.setZoom(18);
        }
        openDetail(id);
      });
    });
  };

  btnDiscoverRefresh.addEventListener("click", renderDiscoverPage);

  document.addEventListener("tab-changed", (e) => {
    const tab = e.detail?.tab;
    if (tab === "discover") {
      renderDiscoverPage();
    } else if (tab === "memorial") {
      renderActivityPage();
    }
  });

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
    updatePerfModeUI();
    updateMarkerOpenModeUI();
    updateOverlayVisibleUI();
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

  togglePerfMode.addEventListener("click", () => {
    perfModeEnabled = !perfModeEnabled;
    localStorage.setItem(PERF_MODE_KEY, perfModeEnabled ? "1" : "0");
    updatePerfModeUI();
    showToast("已切换性能模式，正在刷新以生效…", "success", 1200);
    setTimeout(() => {
      location.reload();
    }, 650);
  });

  toggleMarkerOpenMode.addEventListener("click", () => {
    markerOpenMode = markerOpenMode === "double" ? "single" : "double";
    localStorage.setItem(MARKER_OPEN_MODE_KEY, markerOpenMode);
    updateMarkerOpenModeUI();
    const text = markerOpenMode === "double" ? "已切换：双击打开详情" : "已切换：单击打开详情";
    showToast(text, "success", 1600);
    renderPoints(searchInput.value.trim());
  });

  toggleOverlayVisible.addEventListener("click", () => {
    overlayVisible = !overlayVisible;
    localStorage.setItem(OVERLAY_VISIBLE_KEY, overlayVisible ? "1" : "0");
    updateOverlayVisibleUI();
    if (overlayVisible) {
      if (canLoadCampusOverlay()) applyCampusOverlay(overlayConfig);
      else showToast("本地 file:// 打开会拦截底图图片（CORS）。请用本地服务器或线上链接打开。", "error", 3500);
    } else {
      removeCampusOverlay();
    }
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
      overlayAdjustBtn.classList.toggle("is-hidden", currentUser.role !== "admin");
      
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
  overlayAdjustBtn.addEventListener("click", openOverlayAdjustModal);
  closeOverlayAdjust.addEventListener("click", closeOverlayAdjustModal);
  overlayAdjustModal.addEventListener("click", (e) => {
    if (e.target === overlayAdjustModal) closeOverlayAdjustModal();
  });
  overlayMoveUp.addEventListener("click", () => nudgeOverlay(0, 1));
  overlayMoveDown.addEventListener("click", () => nudgeOverlay(0, -1));
  overlayMoveLeft.addEventListener("click", () => nudgeOverlay(-1, 0));
  overlayMoveRight.addEventListener("click", () => nudgeOverlay(1, 0));
  overlayScaleUp.addEventListener("click", () => scaleOverlay(0.02));
  overlayScaleDown.addEventListener("click", () => scaleOverlay(-0.02));
  overlayRotateLeft.addEventListener("click", () => rotateOverlay(-0.5));
  overlayRotateRight.addEventListener("click", () => rotateOverlay(0.5));
  overlayStretchYUp.addEventListener("click", () => stretchOverlayY(1));
  overlayStretchYDown.addEventListener("click", () => stretchOverlayY(-1));
  overlayStretchXUp.addEventListener("click", () => stretchOverlayX(1));
  overlayStretchXDown.addEventListener("click", () => stretchOverlayX(-1));
  resetOverlayAdjust.addEventListener("click", () => {
    setOverlayAdjustInputs(DEFAULT_OVERLAY_CONFIG);
    applyCampusOverlay(DEFAULT_OVERLAY_CONFIG);
  });
  [overlayWest, overlaySouth, overlayEast, overlayNorth, overlayRotate].forEach((el) => {
    el.addEventListener("change", () => applyCampusOverlay(readOverlayAdjustInputs()));
  });
  saveOverlayAdjust.addEventListener("click", async () => {
    if (currentUser?.role !== "admin") return;
    const cfg = readOverlayAdjustInputs();
    overlayConfig = cfg;
    saveOverlayConfigLocal(overlayConfig);
    applyCampusOverlay(overlayConfig);
    await saveOverlayConfigOnline(overlayConfig, { notice: true });
    closeOverlayAdjustModal();
  });

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
    updateOverlayVisibleUI();
    loginOverlay.classList.add("is-hidden");
    events = loadEventsLocal();
    ensureActivityDate();
    if (events.length === 0) {
      events = [
        {
          id: "sample-20260420",
          date: "2026-04-20",
          title: "活动标题",
          content: "活动公告",
          image: "",
          likes: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      ];
      saveEventsLocal(events);
    }
    fetchEventsOnline().then(() => {
      renderActivityPage();
    });
    if (window.AMap) {
      initMap();
    } else {
      window.onload = initMap;
    }
    fetchPointsOnline(); // [新增] 初始化时从云端同步数据
    fetchOverlayConfigOnline();
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
        let message = `云端未响应（${response.status}）`;
        try {
          const ct = response.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const err = await response.json();
            message = err?.error || message;
          } else {
            const t = await response.text();
            if (t) message = t;
          }
        } catch {}
        throw new Error(message);
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
          try {
            savePointsLocal(points);
          } catch {
            showToast("本地存储空间不足：已跳过本地备份", "error", 2600);
          }
          renderPoints();
          if (!silent) alert('✅ 同步成功：已获取云端最新 ' + onlinePoints.length + ' 个地点');
        } else {
          if (!silent) alert('ℹ️ 云端和本地目前均无数据');
        }
      }
      
      // 检查是否是通过分享链接进入的
      checkSharedPoint();
      renderDiscoverPage();
      
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
      let pointsToSend = newPoints;
      let bodyStr = JSON.stringify(pointsToSend);
      if (bodyStr.length > 3_000_000) {
        const shrunk = await shrinkIconsInPoints(pointsToSend);
        if (shrunk.changed) {
          pointsToSend = shrunk.points;
          points = pointsToSend;
          try {
            savePointsLocal(points);
          } catch {}
          bodyStr = JSON.stringify(pointsToSend);
        }
      }

      const doPost = async () =>
        fetch('/api/points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyStr
      });
      
      let response = await doPost();
      if (response.status === 413) {
        const shrunk = await shrinkIconsInPoints(pointsToSend);
        if (shrunk.changed) {
          pointsToSend = shrunk.points;
          points = pointsToSend;
          try {
            savePointsLocal(points);
          } catch {}
          bodyStr = JSON.stringify(pointsToSend);
          response = await doPost();
        }
      }

      if (!response.ok) {
        let message = `保存失败（${response.status}）`;
        try {
          const ct = response.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const errData = await response.json();
            message = errData?.error || message;
          } else {
            const t = await response.text();
            if (t) message = t;
          }
        } catch {}
        if (response.status === 413) {
          message = "数据过大（图片/图标太大），已尝试压缩后仍超限";
        }
        throw new Error(message);
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
      viewMode: '2D',
      animateEnable: !perfModeEnabled,
      zooms: perfModeEnabled ? [15, 19] : [3, 20],
    });
    
    applyPerfModeToMap();

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
      geolocation.on('complete', (data) => {
        if (data && data.position) {
          lastUserLngLat = [data.position.lng, data.position.lat];
        }
      });
    });

    /** 
     * 1. 叠加校园建筑描绘图 (GroundImage/ImageLayer)
     * 将您的手绘图或建筑描绘图放置在 ./assets/campus-map.png (示例路径)
     */
    if (canLoadCampusOverlay()) {
      if (overlayVisible) applyCampusOverlay(overlayConfig);
    } else {
      showToast("本地 file:// 打开会拦截底图图片（CORS）。请用本地服务器或线上链接打开。", "error", 3500);
    }

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
        fillOpacity: 0.05,
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
        polygon.setOptions({ fillOpacity: 0.12 });
      });
      polygon.on('mouseout', () => {
        polygon.setOptions({ fillOpacity: 0.05 });
      });

      map.add(polygon);
    };

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
        zIndex: 100,
        extData: { id: p.id }
      });

      const openBySingle = markerOpenMode !== "double";

      marker.on('click', (e) => {
        if (e.originEvent) e.originEvent.stopPropagation();
        selectedId = p.id;
        if (openBySingle) {
          openDetail(p.id);
        } else if (currentUser?.role === "admin") {
          showMenu(e.originEvent.clientX, e.originEvent.clientY, "marker", p.id);
        }
      });

      marker.on('dblclick', (e) => {
        if (e.originEvent) e.originEvent.stopPropagation();
        selectedId = p.id;
        if (openBySingle) {
          if (currentUser?.role === "admin" && e.originEvent) {
            showMenu(e.originEvent.clientX, e.originEvent.clientY, "marker", p.id);
          }
        } else {
          openDetail(p.id);
        }
      });
      
      marker.on('rightclick', (e) => {
        if (currentUser?.role !== "admin") return;
        if (e.originEvent) e.originEvent.stopPropagation();
        selectedId = p.id;
        if (e.originEvent) {
          showMenu(e.originEvent.clientX, e.originEvent.clientY, "marker", p.id);
        }
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
      pointSubtitle.value = point.subtitle || "";
      pointDesc.value = point.desc || "";
      if (point.icon) {
        iconDataUrl = point.icon;
        iconPreview.src = point.icon;
        iconPreview.classList.remove("is-hidden");
      }
    }
    formModal.classList.remove("is-hidden");
    formModal.setAttribute("aria-hidden", "false");
    formModal.inert = false;
    setTimeout(() => {
      pointName.focus();
    }, 0);
  };

  const closeForm = () => {
    if (formModal.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    formModal.classList.add("is-hidden");
    formModal.setAttribute("aria-hidden", "true");
    formModal.inert = true;
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
  
  downloadImageViewer.addEventListener("click", async () => {
    const src = viewerImage.getAttribute("src") || "";
    const p = selectedId ? getPointById(selectedId) : null;
    const base = p ? `${p.name || p.id}-图片` : "图片";
    await downloadImage(src, base);
  });

  // 渲染并打开详情页
  const openDetail = (id) => {
    const p = getPointById(id);
    if (!p) return;
    
    selectedId = id; // 保存当前选中的点，给收藏、转发用
    
    detailName.textContent = p.name || "未命名地点";
    const base = lastUserLngLat || [119.273151, 26.074554];
    const dist = formatDistance(haversineKm(base, [p.lng, p.lat]));
    if (dist) {
      const subtitle = (p.subtitle || "").trim();
      detailDistance.textContent = `距离 ${dist}${subtitle ? ` · ${subtitle}` : ""}`;
      detailDistance.classList.remove("is-hidden");
    } else {
      detailDistance.classList.add("is-hidden");
      detailDistance.textContent = "";
    }
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
    document.body.classList.add("is-detail-open");
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
    document.body.classList.remove("is-detail-open");
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

  pointIconFile.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const reader = new FileReader();
      const raw = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
        reader.onerror = () => reject(new Error("读取文件失败"));
        reader.readAsDataURL(file);
      });
      if (!raw) return;
      const compressed = await shrinkImageDataUrl(raw, { maxSide: 256, maxChars: 180_000 });
      iconDataUrl = compressed;
      iconPreview.src = iconDataUrl;
      iconPreview.classList.remove("is-hidden");
    } catch (err) {
      showToast("图标处理失败", "error", 2600);
    }
  });

  pointForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = pointName.value.trim();
    const subtitle = pointSubtitle.value.trim().slice(0, 5);
    const desc = pointDesc.value.trim();
    if (!name) return;

    if (editingId) {
      points = points.map((p) => {
        if (p.id !== editingId) return p;
        return {
          ...p,
          name,
          subtitle,
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
        subtitle,
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

  let searchDebounceTimer = null;
  searchInput.addEventListener("input", (e) => {
    const text = e.target.value.trim();
    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      renderPoints(text);
      renderSearchResults(text);
    }, 120);
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
    
    document.dispatchEvent(new CustomEvent("tab-changed", { detail: { tab: key } }));
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
