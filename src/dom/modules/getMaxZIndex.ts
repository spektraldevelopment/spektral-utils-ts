/**
 * @function getMaxZIndex
 * @description Get the highest z-index value in the document.
 */
const getMaxZIndex = (): number =>
  Math.max(
    ...Array.from(document.querySelectorAll("body *"), (el) =>
      parseFloat(window.getComputedStyle(el).zIndex),
    ).filter((zIndex) => !Number.isNaN(zIndex)),
    0,
  );

export default getMaxZIndex;
