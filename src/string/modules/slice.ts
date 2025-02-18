/**
 * @function slice
 * @description Slices a string from the start index to the end index and return the result
 */

interface SliceOptions {
    start: number;
    end?: number;
}

const slice = (str: string, options: SliceOptions ): string => {
    // Default start to 1 and leave end as undefined
    const { start = 1, end } = options;

    // Trim the whitespace from the string
    const trimmed = str.trim();

    // If end is defined return the sliced string from start to end, otherwise return the sliced string from start to the end of the string
    return end ? trimmed.slice(start, end) : trimmed.slice(start);

};

export default slice;