/**
 * @fileoverview This file will contain test utils and values
 */

const USER_AGENT: string =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)";
const INNER_WIDTH: number = 1440;
const INNER_HEIGHT: number = 1024;
const SCREEN_WIDTH: number = 1497;
const SCREEN_HEIGHT: number = 738;
const DEVICE_PIXEL_RATIO: number = 1;

// * Breakpoints
interface Breakpoint {
  name: string;
  value: number;
}

const BREAKPOINTS: Record<string, Breakpoint> = {
  DEFAULT: { name: "DEFAULT", value: 0 },
  TABLET: { name: "TABLET", value: 768 },
  DESKTOP_SMALL: { name: "DESKTOP_SMALL", value: 1024 },
  DESKTOP_MEDIUM: { name: "DESKTOP_MEDIUM", value: 1366 },
};

// * Orientations
interface Orientation {
  name: string;
  value: string;
}

const ORIENTATIONS: Record<string, Orientation> = {
  PORTRAIT: { name: "PORTRAIT", value: "portrait" },
  LANDSCAPE: { name: "LANDSCAPE", value: "landscape" },
};

// * Mock User Agents
interface UserAgentMapping {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

const MOCK_USER_AGENTS: UserAgentMapping = {
  ios: {
    iphone: {
      chrome: USER_AGENT,
      safari: USER_AGENT,
    },
    ipad: {
      chrome:
        "Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
      safari:
        "Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
    },
    ipod: {
      chrome:
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
      safari:
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
    },
  },
  osx: {
    macbookPro: {
      chrome:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      safari:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
    },
  },
  android: {
    mobile: {
      chrome:
        "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
    },
    tablet: {
      chrome:
        "Mozilla/5.0 (Linux; Android 10; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
    },
  },
  windows: {
    desktop: {
      chrome:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
      firefox: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0)",
      edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
  },
  linux: {
    desktop: {
      chrome:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)",
      firefox: "Mozilla/5.0 (X11; Linux x86_64; rv:78.0)",
    },
  },
};

const Utils = {
  USER_AGENT,
  INNER_WIDTH,
  INNER_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  DEVICE_PIXEL_RATIO,
  BREAKPOINTS,
  ORIENTATIONS,
  MOCK_USER_AGENTS,
};

export default Utils;
