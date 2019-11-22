"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-11-22
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

const Minus = (a = 0, b = 0) => {
    const result = a - b;
    log(`minus result`, result);
    return result;
};

export {
    Minus,
};

export default Minus;
