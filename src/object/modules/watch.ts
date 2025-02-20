/**
 * @function watch
 * @description A function that watches for changes in an object and executes a callback function.
 * @param object - The object to watch for changes.
 * @param callback - The callback function to execute when a change is detected.
 * @returns void
 */
type ChangeCallback<T> = (prop: keyof T, oldValue: any, newValue: any) => void;

function watch<T extends object>(obj: T, callback: ChangeCallback<T>): T {
  return new Proxy(obj, {
    set(target, prop, value) {
      const oldValue = target[prop as keyof T];
      if (oldValue !== value) {
        target[prop as keyof T] = value;
        callback(prop as keyof T, oldValue, value);
      }
      return true;
    },
  });
}

export default watch;
