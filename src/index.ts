import * as string from "./string";
import * as url from "./url";
import * as cookie from "./cookie";
import * as dom from "./dom";
import * as object from "./object";
import * as form from "./form";

const SpektralUtils = {
  cookie,
  dom,
  form,
  object,
  string,
  url,
};

// Export namespace as a string for debugging
export const utilsNamespace = "SpektralUtils";

export default SpektralUtils;
