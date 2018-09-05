"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description testing.js
 * @augments
 * @example
 *
 */

const Testing = (debug = false) => {
    if (debug) {
        console.log(`testing.js is running...`);
    }
    const el = document.getElementById("items");
    let sortable = Sortable.create(el);
};

export default Testing;

export {
    Testing,
};
