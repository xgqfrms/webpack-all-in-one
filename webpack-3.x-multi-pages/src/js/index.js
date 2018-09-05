"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms 2018.08.22
 *
 * @description index.js
 * @augments
 * @example
 *
 */

import "../css/index.css";

const tabsHandler = () => {
    let lis = [...document.querySelectorAll(`[data-li="tabs"]`)];
    lis.forEach(
        (li, i) => {
            let flag = li.dataset.flag;
            if (flag !== "true") {
                li.dataset.flag = "true";
                li.addEventListener(`click`, () => {
                    let tabs = [...document.querySelectorAll(`[data-li="tabs"]`)],
                        divs = [...document.querySelectorAll(`[data-div="tabs"]`)];
                    tabs.forEach(tab => tab.classList.remove("gildata_aside-nav-ul-li-active"));
                    divs.forEach(div => div.classList.remove("gildata_aside-nav-div-active"));
                    li.classList.add("gildata_aside-nav-ul-li-active");
                    divs[i].classList.add("gildata_aside-nav-div-active");
                });
            }
        }
    );
}

const templateHanlder = () => {
    let templates = [...document.querySelectorAll(`[data-div*="tempalte"]`)],
        lis = [...document.querySelectorAll(`[data-li="tabs"]`)];
    templates.forEach(
        (template, i) => {
            template.addEventListener(`click`, () => {
                lis[i].click();
            });
        }
    );
}

const accordionHandler = () => {
    let items = [...document.querySelectorAll(`[data-div="accordion"]`)];
    items.forEach(
        (item, i) => {
            let flag = item.dataset.flag;
            if (flag !== "true") {
                item.dataset.flag = "true";
                item.addEventListener(`click`, () => {
                    let divs = [...document.querySelectorAll(`[data-div="accordion"]`)];
                    let state = item.classList.contains("gildata_accordion-item-open");
                    divs.forEach(
                        (div) => {
                            div.classList.remove("gildata_accordion-item-open");
                            div.classList.add("gildata_accordion-item-close");
                        }
                    );
                    if (state) {
                        item.classList.remove("gildata_accordion-item-open");
                    } else {
                        item.classList.add("gildata_accordion-item-open");
                    }
                });
            }
        }
    );
};

const sidebarHnalder = () => {
    let sidebar = document.querySelector(`[data-div="siderbar"]`),
        sidebarBox = document.querySelector(`[data-div="sidebar-box"]`),
        asideNav = document.querySelector(`[data-nav="aside-nav"]`),
        mainBox = document.querySelector(`[data-main="main-box"]`);
    sidebar.addEventListener(`click`, () => {
        let isLeft = sidebar.classList.contains("gildata_aside-sidebar-left");
        if (isLeft) {
            asideNav.style.display = "none";
            mainBox.classList.remove("gildata_main-small");
            mainBox.classList.add("gildata_main-big");
            sidebarBox.classList.remove("gildata_aside-sidebar-box-hidden");
            sidebarBox.classList.add("gildata_aside-sidebar-box-show");
            sidebar.classList.remove("gildata_aside-sidebar-left");
            sidebar.classList.add("gildata_aside-sidebar-right");
            sidebar.title = "展开菜单栏";
        } else {
            asideNav.style.display = "block";
            mainBox.classList.remove("gildata_main-big");
            mainBox.classList.add("gildata_main-small");
            sidebarBox.classList.remove("gildata_aside-sidebar-box-show");
            sidebarBox.classList.add("gildata_aside-sidebar-box-hidden");
            sidebar.classList.add("gildata_aside-sidebar-left");
            sidebar.classList.remove("gildata_aside-sidebar-right");
            sidebar.title = "折叠菜单栏";
        }
    });
};

document.addEventListener(`DOMContentLoaded`, () => {
    tabsHandler();
    templateHanlder();
    accordionHandler();
    sidebarHnalder();
});
