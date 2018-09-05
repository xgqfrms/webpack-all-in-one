"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description app.js
 * @augments
 * @example
 *
 */

import "../css/app.css";

// import "./plugins/index.js";
import { Sortable } from "./plugins/index.js";

import { Testing } from "./plugins/testing";

console.log(`this is app.js!`);


document.addEventListener(`DOMContentLoaded`, () => {
    // golbal export
    window.Sortable = Sortable;
    console.log(`DOM is ready!`);
    Testing();
});
