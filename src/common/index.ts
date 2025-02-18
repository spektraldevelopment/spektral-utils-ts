// * Commonly used key codes for keyboard events
export enum KEY_CODES {
    BACKSPACE = 8,
    TAB = 9,
    ENTER = 13,
    SHIFT = 16,
    CTRL = 17,
    ALT = 18,
    CAPS_LOCK = 20,
    ESC = 27,
    SPACE = 32,
    PAGE_UP = 33,
    PAGE_DOWN = 34,
    END = 35,
    HOME = 36,
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    INSERT = 45,
    DELETE = 46
}

// * Commonly used devices
export enum DEVICES {
    ANDROID = "android",
    BLACKBERRY = "blackberry",
    IEMOBILE = "iemobile",
    IPAD = "ipad",
    IPHONE = "iphone",
    IPOD = "ipod",
    LINUX = "linux",
    MACINTOSH = "macintosh",
    MOBILE = "mobile",
    OPERA_MINI = "opera-mini",
    WINDOWS = "windows",
    DARWIN = "darwin",
    WIN32 = "win32",
    WIN64 = "win64",
    X11 = "x11"
}

export enum ORIENTATIONS {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}

export const REG_EX_PATTERNS = {
    MOBILE_DEVICES:
        /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i,
    IOS_DEVICES: /(ipod|iphone|ipad)/g,
    APPLE_WEB_KIT: /applewebkit/g,
    DESKTOP_DEVICES: /windows|macintosh|linux/i,
    SQUARE_BRACKETS: /\[([^\]]+)\]/gm,
    ROUND_BRACKETS: /\(([^)]+)\)/gm,
    CURLY_BRACKETS: /\{([^}]+)\}/gm,
    HTML: /(<([^>]+)>)/gi,
    SPECIAL_CHARS: /[@#<>=`%'";:&~^!*+?^${}()|\/[\]\\_]/g,
    NUMBER: /\d+/,
    ALPHA_ONLY: /[^a-zA-Z]/g,
    UPPERCASE: /[A-Z]/,
    LOWERCASE: /[a-z]/,
    SPACES: /\s+/g,
};


