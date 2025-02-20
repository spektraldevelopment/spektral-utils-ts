import * as string from "./string";
import * as url from "./url";
import * as cookie from "./cookie";
import * as dom from "./dom";
import * as object from "./object";

const SpektralUtils = {
  cookie,
  dom,
  object,
  string,
  url,
};

// Export namespace as a string for debugging
export const utilsNamespace = "SpektralUtils";

export default SpektralUtils;
