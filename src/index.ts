import * as stringUtils from "./string";
import * as urlUtils from "./url";
import * as cookieUtils from "./cookie";
import * as domUtils from "./dom";
import * as objectUtils from "./object";
import * as formUtils from "./form";

export const cookie = cookieUtils;
export const dom = domUtils;
export const form = formUtils;
export const object = objectUtils;
export const string = stringUtils;
export const url = urlUtils;

export default {
  cookie,
  dom,
  form,
  object,
  string,
  url,
};

// Export namespace as a string for debugging
export const utilsNamespace = "SpektralUtils";
