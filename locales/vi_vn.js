/**
 * language: english
 */
const lang = {
  // app desc
  app: {
    desc:
      "electerm là một terminal/ssh/sftp client(linux, mac, win) được phát triển trên electron/ssh2/node-pty/xterm/antd/subx và nhiều thư viện khác",
    isRunning: "đang chạy",
    press: "bấm",
    toShow: "để hiện",
  },

  // app menu
  menu: {
    // mac app
    hide: "ẩn",
    hideothers: "ẩn các cái khác",
    unhide: "không ẩn",
    quit: "thoát",

    // edit
    edit: "sửa",
    undo: "undo",
    redo: "redo",
    cut: "cut",
    copy: "copy",
    paste: "paste",
    pasteandmatchstyle: "paste and match style",
    del: "delete",
    selectall: "select all",
    startspeaking: "start speaking",
    stopspeaking: "stop speaking",

    // view
    view: "Xem",
    reload: "Tải lại",
    forcereload: "Bắt buộc tải lại",
    toggledevtools: "Mở xem mã nguồn",
    toggleControl: "Mở nút điều khiển",
    resetzoom: "reset zoom",
    zoomin: "Phóng to",
    zoomout: "Thu nhỏ",
    togglefullscreen: "Full màn hình",

    // window
    window: "window",
    minimize: "minimize",
    maximize: "maximize",
    unmaximize: "unmaximize",
    close: "Đóng lại",
    restart: "Chạy lại",
    front: "Đặt ở đằng trước đi",

    // help
    help: "Trợ giúp",
    about: "Giới thiệu",
    checkUpdate: "Kiểm tra cập nhật",
    reportIssue: "Báo cáo lỗi",
    homepage: "Trang chủ",
  },

  // common
  common: {
    history: "Lịch sử",
    bookmarks: "Đánh dấu",
    bookmarkCategory: "Danh mục",
    setting: "Cài đặt",
    about: "Giới thiệu",
    ok: "ok",
    cancel: "Hủy",
    restoreSessions:
      "Khôi phục tình trạng lúc nãy do ứng dụng bị tắt không đúng?",
    expandAll: "Mở rộng hết ra",
    collapseAll: "Thu gọn hết lại",
  },

  // control buttons
  control: {
    author: "Tác giả",
    download: "Tải xuống",
    bugReport: "Báo cáo lỗi",
    checkForUpdate: "Kiểm tra cập nhật mới",
    homepage: "Trang chủ",
    notFoundContent: "Không có nội dung",
    newSsh: "SSH mới",
    newTerminal: "Terminal mới",
    dependencies: "Thư viện phụ thuộc",
    env: "env",
    os: "os",
    userTips: "Hướng dẫn sử dụng",
  },

  // transferHistory
  transferHistory: {
    transferHistory: "Lịch sử truyền file",
    localPath: "Đường dẫn ở máy mình",
    remotePath: "Đường dẫn trên máy chủ",
    type: "loại",
    startTime: "Bắt đầu",
    finishTime: "thời gian kết thúc",
    speed: "tốc độ",
    clear: "Xóa",
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: "Đừng có để trống tiêu đề chứ",
    close: "Đóng lại",
    closeOtherTabs: "Tắt hết các tab khác hộ cái",
    closeTabRight: "Tắt hết các tab bên phải nhé",
    newTab: "Tab mới đi",
    duplicate: "Sao chép sang tab mới",
    rename: "Đổi tên",
    openNewTerm: "Mở terminal mới",
    sessions: "Phiên",
  },

  // main warpper
  main: {
    error: "Đã xảy ra lỗi.",
  },

  // updater check
  updater: {
    noNeed: "Không có cập nhật mới đâu, có tôi báo ngay",
    noNeedDesc: "Bạn đang dùng phiên bản mới nhất rồi",
    fail: "Lỗi khi kiểm tra cập nhật",
    goGetIt: "OK tải thôi!",
    newVersion: "Ồ, có phiên bản mới đấy, có thích tải không?",
    upgrade: "Cập nhật",
    upgrading: "Đang cập nhật nhé, đợi tẹo",
    skipThisVersion: "Bỏ qua phiên bản này đi, đang bận",
  },

  // setting
  setting: {
    new: "Thêm mới",
    settings: "Cài đặt",
    common: "Cài đặt chung",
    hotkeyNotOk: "Phím tắt này không thể đăng ký, vui lòng dùng phím tắt khác",
    saved: "Đã lưu",
    saveLang: "Đã lưu, khởi động lại ứng dụng để thấy sự thay đổi",
    restartNow: "Khởi động lại",
    hotkeyDesc: "Phím tắt hệ thống(để window ra mặt trước)",
    timeoutDesc: "ssh/sftp timeout(theo millisecond)",
    scrollBackDesc: "scrollback lines",
    language: "Ngôn ngữ",
    copyWhenSelect: "Tự động sao chép khi lựa chọn",
    rightClickSelectsWord: "Bấm chuột phải để chọn văn bản",
    pasteWhenContextMenu: "Dán luôn khi bấm chuột phải",
    fontSize: "Kích cỡ font",
    fontFamily: "font family",
    opacity: "Độ mờ",
    global: "global",
    disableSshHistory: "Tắt lịch sử ssh",
    disableTransferHistory: "Tắt lịch sử truyền file sftp",
    resetAllToDefault: "Khôi phục cài đặt mặc định",
    terminalBackgroundImage: "Hình nền terminal",
    chooseFile: "Chọn file",
    rendererType: "renderer type",
    defaultTerminalType: "default terminal type",
    ctrlOrMetaOpenTerminalLink:
      "phải bấm ctrl hoặc meta (trên máy mac) khi mở link trên terminal",
    noTerminalBg: "Không hình nền",
    saveTerminalLogToFile: "Lưu terminal log vào file",
  },

  // sftp
  sftp: {
    cancel: "Hủy",
    skip: "bỏ qua",
    merge: "Gộp lại",
    overwrite: "Ghi đè",
    rename: "Đổi tên",
    renameAll: "Đổi tất cả tên",
    mergeDesc: "Hợp nhất các thư mục bị xung đột file",
    overwriteDesc: "Ghi đè tất cả các thư mục bị xung đột file",
    mergeAll: "Gộp tất cả",
    overwriteAll: "Ghi đè tất cả",
    renameDesc: "Đổi tên file / thư mục",
    folder: "Thư mục",
    file: "file",
    fileConflict: "file bị xung đột",
    submit: "Gửi đi",
    edit: "Sửa",
    open: "Mở",
    permission: "Quyền",
    name: "Tên",
    mode: "Mode",
    path: "Đường dẫn",
    fullPath: "full đường dẫn",
    size: "Kích cỡ",
    accessTime: "Lần truy cập cuối",
    modifyTime: "Lần sửa đổi cuối",
    attributes: "Thuộc tính",
    enter: "enter",
    deleteAll: "Xóa hết luôn",
    selected: "đã chọn",
    newFile: "File mới",
    newFolder: "Thư mục mới",
    selectAll: "Chọn tất",
    refresh: "refresh",
    editPermission: "Sửa quyền",
    info: "Thông tin",
    filesAndFolders: "files/folders",
    files: "files",
    delTip: "Chắc không đấy? Xóa luôn đấy",
    delTip1: "và tất cả file/thư mục trong đó",
    goParent: "Trở lại thư mục cha",
    hide: "ẩn",
    show: "hiện",
    hfd: "ẩn files và thư mục",
    remote: "remote",
    local: "local",
    fileTransfers: "file transfers",
    cancelAll: "Hủy tất cả",
    upload: "upload",
    download: "download",
    resume: "Tải lại",
    pause: "Dừng lại",
    reset: "reset",
    showInDefaultFileMananger: "Hiện trong trình quản lý file",
  },

  permission: {
    read: "read",
    write: "write",
    exec: "exec",
    owner: "owner",
    group: "group",
    other: "other",
  },

  // ssh form
  form: {
    password: "Mật khẩu",
    privateKey: "privateKey",
    privateKeyDesc: "private key string",
    importFromFile: "Nhập từ file",
    passphrase: "passphrase",
    passphraseDesc: "passphrase for privateKey",
    host: "host",
    username: "Tài khoản",
    port: "port",
    title: "Tiêu đề",
    saveAndConnect: "Lưu lại và kết nối",
    saveAndCreateNew: "Lưu và tạo mới",
    save: "Lưu",
    loginScript: "Chạy script",
    loginScriptDelay: "Chạy script delay",
    loginScriptTip: "Chạy script sau khi đăng nhập",
    connect: "Kết nối",
    testConnection: "Kieemr tra kết nối",
    required: "Yêu cầu phải nhập",
    proxyIp: "proxy ip",
    proxyPort: "proxy port",
    proxyType: "proxy type",
    proxyIpPlaceholder: "proxy ip address",
    selectProxy: "Chọn proxy",
    auth: "auth",
    proxy: "proxy",
    use: "use",
    encode: "encode",
    terminalType: "terminal type",
  },

  // ssh terminal
  ssh: {
    clear: "Xóa",
    selectAll: "Chọn tất cả",
    savePassword: "Lưu mật khẩu",
    search: "Tìm kiếm",
    terminal: "terminal",
    nextMatch: "next match",
    prevMatch: "prev match",
    split: "split",
    fileManager: "Quản lý file",
    changeDirection: "Chuyển hướng",
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: "Giao diện terminal",
    export: "Xuất giao diện",
    themeName: "Tên giao diện",
    saveAndApply: "Lưu và áp dụng",
    apply: "Áp dụng",
    default: "Mặc định",
    newTheme: "Giao diện mới",
    themeConfig: "Cài đặt giao diện",
    updated: "Đã cập nhật",
  },

  // quick commands
  quickCommands: {
    quickCommand: "Lệnh nhanh",
    quickCommands: "Lệnh nhanh",
    quickCommandName: "Tên lệnh",
    addQuickCommands: "Thêm lệnh",
    newQuickCommand: "Thêm lệnh mới",
    inputOnly: "chế độ chỉ nhập",
  },

  // setting sync
  settingSync: {
    settingSync: "Đồng bộ cài đặt",
    sync: "Đồng bộ",
    syncing: "Đang đồng bộ",
    syncSettings: "Đồng bộ cài đặt",
    uploadSettings: "upload cài đặt",
    downloadSettings: "download cài đặt",
    synced: "Đã đồng bộ",
    syncDesc:
      "đồng bộ đánh dấu trang / lịch sử / cài đặt lên github secret gist",
    autoSync: "Tự động đồng bộ",
    lastSyncTime: "Lần đồng bộ cuối cùng",
  },
};

module.exports = {
  lang,
  name: 'Vietnamese',
  match: /vi/,
  flag: 'vn'
}
