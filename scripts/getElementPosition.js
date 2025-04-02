/**
 * Get the position of an element relative to the viewport.
 * @param {HTMLElement} element - The DOM element.
 * @returns {Object} An object containing top, left, right, and bottom positions.
 */
function getElementPosition(element) {
    if (!(element instanceof HTMLElement)) {
        throw new TypeError("Expected a valid HTMLElement.");
    }

    const { top, left, right, bottom } = element.getBoundingClientRect();
    return { top, left, right, bottom };
}

// Example usage:
// const position = getElementPosition(document.querySelector('#myElement'));
// console.log(position);
