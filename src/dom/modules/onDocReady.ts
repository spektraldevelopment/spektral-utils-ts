/**
 * @function onDocumentReady
 * @description - Checks if the document is ready and fires callback
 * @param {Function} callback
 */
const onDocReady = (callback: Function): void => {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback as EventListener);
  }
};

export default onDocReady;
