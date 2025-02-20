import { REG_EX_PATTERNS } from "../../common";

/**
 * @function focusInput
 * @description This method will pull focus to an input field,
 * and if the device is an iOS device, it will scroll the input field into view,
 * and add a class to the input field to make it appear as if it is focused
 */
const focusInput = (
  input: HTMLInputElement,
  inputClass: string = "utils-input__ios--focus",
) => {
  // Declare the input to focus
  const inputToFocus = input;

  // Get the device type
  // eslint-disable-next-line max-len
  const isIOS = (): boolean => {
    // Get the user agent
    const { userAgent } = navigator;

    // Check if the user agent is an iOS device
    return (
      REG_EX_PATTERNS.IOS_DEVICES.test(userAgent.toLowerCase()) &&
      !(window as any).MSStream
    );
  };

  // Declare the function to check if the user has interacted with the page
  const hasInteracted = (() => {
    // Declare the interacted variable
    let interacted = false;

    // Declare the onTouchStart function
    const onTouchStart = (): void => {
      // Set interacted to true
      interacted = true;

      // Remove the event listener
      document.removeEventListener("touchstart", onTouchStart);
    };

    // Add the event listener
    document.addEventListener("touchstart", onTouchStart);

    // Return the interacted variable
    return () => interacted;
  })();

  enum FOCUS_TYPES {
    REAL = "real",
    FAKE = "fake",
  }

  const getFocusType = (): string => {
    const interacted = hasInteracted();
    const iOS = isIOS();

    if (interacted) {
      return FOCUS_TYPES.REAL;
    } else if (!iOS) {
      return FOCUS_TYPES.REAL;
    } else {
      return FOCUS_TYPES.FAKE;
    }
  };

  const focus = (input: HTMLInputElement): void => {
    // Get the focus type
    const focusType = getFocusType();

    // Switch on the focus type
    switch (focusType) {
      // If the focus type is real, then focus on the input field
      case FOCUS_TYPES.REAL:
        return input.focus();
      // If the focus type is fake, then add the input class to the input field
      case FOCUS_TYPES.FAKE:
        // Call fake focus function
        fakeFocus(input);

        // Add the input class to the input field
        input.classList.add(inputClass);

        const onBlur = (evt: FocusEvent) => {
          const target = evt.target as HTMLInputElement;
          // Remove the input class from the input field
          target.classList.remove(inputClass);

          // Remove the event listener
          target.removeEventListener("blur", onBlur);
        };

        // Add the event listener
        input.addEventListener("blur", onBlur);

        // Scroll the input field into view
        input.scrollIntoView();
    }
  };

  // Call the focus function
  focus(inputToFocus);
};

const fakeFocus = (input: HTMLInputElement): void => {
  // Create a new mouse event
  const mouseEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  // Dispatch the mouse event on the input field
  input.dispatchEvent(mouseEvent);
};

export default focusInput;
