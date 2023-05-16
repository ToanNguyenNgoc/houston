(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2597:
/***/ ((module) => {

// Exports
module.exports = {
	"home_section_item": "home_home_section_item__ZSGtt",
	"banner_item_cnt": "home_banner_item_cnt__dU639",
	"banner_item_img": "home_banner_item_img__HOrhs",
	"banner_item": "home_banner_item__vFqTH",
	"banner_item_content": "home_banner_item_content___wgoM",
	"banner_item_name": "home_banner_item_name__iDdyO",
	"banner_item_btn": "home_banner_item_btn__i0a4v",
	"banner_dot": "home_banner_dot__bk3FL",
	"dot_item_btn": "home_dot_item_btn__AiTj4",
	"branch_item": "home_branch_item__s_wIG",
	"branch_item_bg": "home_branch_item_bg__VtwMo",
	"branch_cnt": "home_branch_cnt__Av3a2",
	"branch_detail_bot": "home_branch_detail_bot__pliND",
	"branch_cnt_re": "home_branch_cnt_re__qbV_x",
	"branch_detail": "home_branch_detail__h7Fy8",
	"branch_detail_head": "home_branch_detail_head__dTBcT",
	"branch_detail_name": "home_branch_detail_name__7RiOa",
	"branch_detail_desc": "home_branch_detail_desc___i9WI",
	"branch_detail_bot_btn": "home_branch_detail_bot_btn__B2O8G"
};


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FS": () => (/* reexport */ HomeBanner),
  "CX": () => (/* reexport */ HomeBranch),
  "se": () => (/* reexport */ HomeVilla),
  "Fx": () => (/* reexport */ WelCome)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./src/components/pages/home/home.module.css
var home_module = __webpack_require__(2597);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__(2644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/pages/home/Banner.tsx
/* eslint-disable @next/next/no-img-element */ 






const HomeBanner = ({ banners  })=>{
    const [crrSlide, setCrrSlide] = (0,external_react_.useState)(0);
    const settings = {
        customPaging: (index)=>{
            return /*#__PURE__*/ jsx_runtime.jsx("button", {
                style: index === crrSlide ? {
                    backgroundColor: "var(--primary)"
                } : {},
                className: (home_module_default()).dot_item_btn
            });
        },
        dotsClass: (home_module_default()).banner_dot,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        afterChange: (currentSlide)=>setCrrSlide(currentSlide)
    };
    const router = (0,router_.useRouter)();
    const onBannerClick = (banner)=>{
        switch(banner.type){
            case "BRANCH":
                router.push(`/branches/${(0,utils/* slugify */.lV)(banner.name)}&id=${banner.original_id}`);
                break;
            case "VILLA":
                router.push(`/danh-sach-villa/${(0,utils/* slugify */.lV)(banner.name)}&id=${banner.original_id}`);
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (home_module_default()).banner_cnt,
        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
            ...settings,
            children: banners.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (home_module_default()).banner_item_cnt,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            style: item.content !== "" ? {
                                filter: "brightness(70%)"
                            } : {},
                            src: item.media?.original_url,
                            className: (home_module_default()).banner_item_img,
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (home_module_default()).banner_item,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (home_module_default()).banner_item_content,
                                children: [
                                    i == 0 && /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: (home_module_default()).banner_item_name,
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: (home_module_default()).banner_item_content,
                                        children: item.content
                                    }),
                                    item.type !== "HOME" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (home_module_default()).banner_item_btn,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            onClick: ()=>onBannerClick(item),
                                            variant: "contained",
                                            size: "large",
                                            style: {
                                                backgroundColor: "var(--primary)"
                                            },
                                            children: "Kh\xe1m ph\xe1 ngay"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }, item.id))
        })
    });
};

;// CONCATENATED MODULE: ./src/components/pages/home/WelCome.tsx

const WelCome = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "WelCome"
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/pages/home/Branch.tsx
/* eslint-disable @next/next/no-img-element */ 




const HomeBranch = ({ branches  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (home_module_default()).home_section_item,
        children: branches.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (home_module_default()).branch_item,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: (home_module_default()).branch_item_bg,
                        src: item.image?.original_url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: i % 2 !== 0 ? `${(home_module_default()).branch_cnt} ${(home_module_default()).branch_cnt_re}` : (home_module_default()).branch_cnt,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: item.image?.original_url,
                                alt: "",
                                className: (home_module_default()).branch_cnt_img
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (home_module_default()).branch_detail,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (home_module_default()).branch_detail_head,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: (home_module_default()).branch_detail_name,
                                                children: item.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: (home_module_default()).branch_detail_desc,
                                                children: item.content
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (home_module_default()).branch_detail_bot,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: `/branches/${(0,utils/* slugify */.lV)(item.name)}&id=${item.id}`,
                                            className: (home_module_default()).branch_detail_bot_btn,
                                            children: [
                                                "T\xecm hiểu th\xeam",
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaArrowRight, {})
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, item.id))
    });
};

;// CONCATENATED MODULE: ./src/components/pages/home/Villa.tsx

const HomeVilla = ({ villas  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "HomeVilla"
    });
};

;// CONCATENATED MODULE: ./src/components/pages/home/index.ts






/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3537);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7430);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1280);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_config__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Home = (props)=>{
    const { branches , villas , banners  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_1__/* .HomeBanner */ .FS, {
                    banners: banners
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_1__/* .WelCome */ .Fx, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_1__/* .HomeBranch */ .CX, {
                    branches: branches
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_1__/* .HomeVilla */ .se, {
                    villas: villas
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
Home.Layout = _layouts__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Zn;
const getStaticProps = async (context)=>{
    let branches = [];
    let villas = [];
    let banners = [];
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseURL */ .v2}branches`);
        branches = response.data?.data;
    } catch (error) {}
    //
    try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_4__/* .api.banners */ .h.banners();
        banners = response.data;
    } catch (error) {}
    return {
        props: {
            branches,
            villas,
            banners
        },
        revalidate: 3600 * 24
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 2194:
/***/ ((module) => {

"use strict";
module.exports = import("query-string");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,379,557], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();