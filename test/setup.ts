/**
 * @fileoverview This file contains the setup for the jest tests.
 * @description This file is used to mock the testing environment for each test
 */
import { divFixture, formFixture } from "./fixtures";

// Store original window object
const originalWindow = { ...window };

const setProperty = <T, K extends keyof any>(
  obj: T,
  prop: K,
  params: any,
): void => {
  Object.defineProperty(obj, prop, {
    writable: true,
    value: params,
  });
};

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
  setProperty(window, "location", mockLocation);

  // Add the div fixture to the document body
  document.body.innerHTML = divFixture;

  // Add the form fixture to the document body
  document.body.innerHTML += formFixture;
});

afterEach(() => {
  // Reset window properties
  Object.assign(window, originalWindow);

  // Clear all mocks
  jest.clearAllMocks();

  // Reset all modules
  jest.resetModules();
});
