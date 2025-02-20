/**
 * @fileoverview This file contains the setup for the jest tests.
 * @description This file is used to mock the testing environment for each test
 */
import Utils from "./utils";

// Store original window object
const originalWindow = { ...window };

const mockLocation = {
  hash: "#test=hello",
  host: "developer.mozilla.org:8080",
  hostname: "developer.mozilla.org",
  href: "https://developer.mozilla.org/en/foobar?foo=bar&bar=foo#test=hello",
  origin: "https://developer.mozilla.org",
  pathname: "/en/foobar",
  port: "8080",
  protocol: "https:",
  search: "?foo=bar&bar=foo",
};

beforeEach(() => {
  // Set window location
  Utils.setProperty(window, "location", mockLocation);

  // Add navigator to window
  Utils.setProperty(window, "navigator", {});

  // Set userAgent
  Utils.setProperty(navigator, "userAgent", Utils.USER_AGENT);

  // Set window scroll
  window.HTMLElement.prototype.scrollIntoView = function () {};
});

afterEach(() => {
  // Reset window properties
  Object.assign(window, originalWindow);

  // Clear all mocks
  jest.clearAllMocks();

  // Reset all modules
  jest.resetModules();
});
