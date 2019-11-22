"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-11-22
 * @modified
 *
 * @description App
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

import { Add } from "./add";
import { Minus } from "./minus";

const App = () => {
    log(`App`);
    Add(1, 2);
    Minus(3, 1);
};

export {
    App,
};

export default App;
