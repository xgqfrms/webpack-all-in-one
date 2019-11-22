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

const Add = (a = 0, b = 0) => {
    const result = a + b;
    log(`add result`, result);
    return result;
};

export {
    Add,
};

export default Add;
