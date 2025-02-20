interface NewElementProps {
  classList?: string[];
  style?: { [key: string]: string };
  textContent?: string;
  innerHTML?: string;
  dataset?: { [key: string]: string };
}

const createElement = (
  elementType: string = "div",
  props?: NewElementProps,
): HTMLElement => {
  // * Create new element
  const newElement: HTMLElement = document.createElement(elementType);

  // Loop through props
  for (const key in props) {
    // Create switch statement
    switch (key) {
      case "classList":
        // * Add classes to the new element
        props.classList?.forEach((className: string) => {
          newElement.classList.add(className);
        });
        break;
      case "style":
        // * If style is an object and not empty
        if (
          typeof props.style === "object" &&
          Object.keys(props.style).length > 0
        ) {
          // * Add styles to the new element if style is an object and not empty
          Object.keys(props.style).forEach((style) => {
            if (props.style) {
              newElement.style.setProperty(style, props.style[style]);
            }
          });
        }
        break;
      case "textContent":
        // * Add text content to the new element
        newElement.textContent = props.textContent ?? null;
        break;
      case "innerHTML":
        // * Add inner HTML to the new element
        newElement.innerHTML = props.innerHTML ?? "";
        break;
      case "dataset":
        if (
          typeof props.dataset === "object" &&
          Object.keys(props.dataset).length > 0
        ) {
          // * Add data attributes to the new element
          Object.keys(props.dataset).forEach((data) => {
            if (props.dataset) {
              newElement.dataset[data] = props.dataset[data];
            }
          });
        }
        break;
      default:
        break;
    }
  }

  return newElement;
};

export default createElement;
