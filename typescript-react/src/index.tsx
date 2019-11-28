/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-11-28
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

// import React from "react";
// import React, { Component } from "react";
import * as React from "react";
// import ReactDOM from "react-dom";
import "./index.scss";

let log = console.log;

// Generator
class APP extends React.Component {
    // super(props);
    state = {
        // title: this.props.title || `TypeScript & React`,
        title: `TypeScript & React`,
        debug: false,
    };
    // props
    render() {
        const {
            title,
        } = this.state;
        log(`props`, this.props);
        return (
            <>
                <header>
                    <h1>{title}</h1>
                </header>
                <section>
                    <a href="https://feiqa.xgqfrms.xyz/index.html"></a>
                </section>
                <article></article>
                <footer>
                    <p className="copyright">copyright&copy; xgqfrms 2019</p>
                </footer>
            </>
        );
    };
};

// const APP = (title = `TypeScript & React`, debug = false) => {
//     // class component render()
//     const html = (
//         <>
//             <header>
//                 <h1>${title}</h1>
//             </header>
//             <section>
//                 <a href="https://feiqa.xgqfrms.xyz/index.html"></a>
//             </section>
//             <article></article>
//             <footer>
//                 <p className="copyright">copyright&copy; xgqfrms 2019</p>
//             </footer>
//         </>
//     );
//     return html;
// };

export default APP;

export {
    APP,
};
