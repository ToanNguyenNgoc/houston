(() => {
var exports = {};
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 5745:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "branch_container__5o33f",
	"banner_head": "branch_banner_head__jS4cH",
	"banner_head_right": "branch_banner_head_right__lm5KT",
	"banner_head_left": "branch_banner_head_left__RvfnQ",
	"branch_name": "branch_branch_name__OqYyt",
	"banner_address": "branch_banner_address__aH6N7",
	"banner_image_cnt": "branch_banner_image_cnt__vZ5wG",
	"banner_image": "branch_banner_image__c6KCm",
	"tab_cnt": "branch_tab_cnt__axbjC",
	"tab_item": "branch_tab_item__KIZVR",
	"villa_list": "branch_villa_list__q0_xS",
	"villa_bot": "branch_villa_bot__Oe4Ov",
	"desc_cnt": "branch_desc_cnt__EIIOh",
	"gallery_img_item": "branch_gallery_img_item__xyTOM",
	"banner_cnt": "branch_banner_cnt__6XWr0"
};


/***/ }),

/***/ 4157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* reexport */ QR_TIME_CACHE)
});

// UNUSED EXPORTS: KEY

;// CONCATENATED MODULE: ./src/constants/react-query.ts
const KEY = {};
const QR_TIME_CACHE = 15 * (60 * 1000);

;// CONCATENATED MODULE: ./src/constants/index.ts



/***/ }),

/***/ 5640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7430);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8557);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1280);
/* harmony import */ var _styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5745);
/* harmony import */ var _styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4277);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4074);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2194);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4157);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__, query_string__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__]);
([_config__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__, query_string__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 













const Branch = (props)=>{
    const { branch  } = props;
    const tabs = [
        {
            id: 1,
            name: "Biệt thự"
        },
        {
            id: 2,
            name: "Giới thiệu"
        },
        {
            id: 3,
            name: "Thư viện"
        }
    ];
    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(1);
    const renderTab = ()=>{
        let child;
        switch(tab){
            case 1:
                return child = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabVillas, {
                    branch: branch
                });
            case 2:
                return child = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabDecs, {
                    branch: branch
                });
            case 3:
                return child = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabGallery, {
                    branch: branch
                });
            default:
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .pQ, {
                title: branch.name,
                description: branch.content,
                image_url: branch.image?.original_url,
                url: `branches/${(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .slugify */ .lV)(branch.name)}&id=${branch.id}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_cnt),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_head),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_head_left),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().branch_name),
                                                    children: branch.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_address),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaMapMarkerAlt, {
                                                            color: "var(--primary)",
                                                            style: {
                                                                margin: "0px 4px -1px 0px"
                                                            }
                                                        }),
                                                        branch.address
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_head_right)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_image_cnt),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: branch.image?.original_url,
                                        className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().banner_image),
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().tab_cnt),
                            children: tabs.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: ()=>setTab(item.id),
                                    style: item.id === tab ? {
                                        color: "var(--primary)"
                                    } : {},
                                    className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().tab_item),
                                    children: item.name
                                }, item.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().tab_render_cnt),
                            children: renderTab()
                        })
                    ]
                })
            })
        ]
    });
};
Branch.Layout = _layouts__WEBPACK_IMPORTED_MODULE_2__/* .MainLayout */ .Zn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Branch);
const TabVillas = ({ branch  })=>{
    const { data , isLoading , fetchNextPage , isFetchingNextPage  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useInfiniteQuery)({
        queryKey: [
            "BRANCH_VILLA",
            branch.id
        ],
        queryFn: ({ pageParam =1  })=>_services__WEBPACK_IMPORTED_MODULE_3__/* .api.villas */ .h.villas({
                page: pageParam,
                limit: 16,
                branch_id: branch.id,
                status: true
            }),
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_11__/* .QR_TIME_CACHE */ .C,
        getNextPageParam: (page)=>page?.current_page + 1
    });
    const villas = data?.pages?.map((i)=>i.data).flat() ?? [];
    const totalItem = data?.pages[0]?.total ?? 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().villa_list),
                children: isLoading ? [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().villa_list_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .VillaCardLoad */ .Gg, {})
                    }, i)) : villas.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().villa_list_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .VillaCard */ .Jp, {
                            villa: item
                        })
                    }, item.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().villa_bot),
                children: villas.length < totalItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_12__.LoadingButton, {
                    variant: "contained",
                    loading: isFetchingNextPage,
                    style: {
                        backgroundColor: "var(--primary)"
                    },
                    onClick: ()=>fetchNextPage(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaAngleDown, {
                        size: 20
                    })
                })
            }),
            !isLoading && totalItem === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .EmptyResult */ ._f, {
                title: "Đang cập nhật danh s\xe1ch biệt thự"
            })
        ]
    });
};
const TabDecs = ({ branch  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().desc_cnt),
        dangerouslySetInnerHTML: {
            __html: branch.description
        }
    });
};
const TabGallery = ({ branch  })=>{
    const mb = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)("(max-width:767px)");
    const [full, setFull] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        open: false,
        index: 0
    });
    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({
        queryKey: [
            "BRANCH_GALLERY",
            branch.id
        ],
        queryFn: ()=>_services__WEBPACK_IMPORTED_MODULE_3__/* .api.branchGalleries */ .h.branchGalleries(branch.id),
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_11__/* .QR_TIME_CACHE */ .C
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .GalleryCarousel */ .xq, {
                src: data?.data.map((i)=>i.image?.original_url) ?? [],
                open: full.open,
                index: full.index,
                onClose: ()=>setFull({
                        open: false,
                        index: 0
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: data?.data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_12__.Masonry, {
                    columns: mb ? 2 : 4,
                    spacing: 1,
                    children: data?.data.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            onClick: ()=>setFull({
                                    open: true,
                                    index: index
                                }),
                            className: (_styles_branch_module_css__WEBPACK_IMPORTED_MODULE_13___default().gallery_img_item),
                            src: item.image?.original_url,
                            alt: ""
                        }, index))
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .serverSideCache */ .O3)(context);
    let branch;
    const { params  } = context;
    const queryParams = query_string__WEBPACK_IMPORTED_MODULE_6__["default"].parse(params?.branchId);
    try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_3__/* .api.branchById */ .h.branchById(queryParams.id);
        branch = response.data;
    } catch (error) {
        return {
            redirect: {
                destination: "/404",
                permanent: false
            }
        };
    }
    return {
        props: {
            branch
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6072:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab");

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

/***/ 8513:
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

/***/ 4871:
/***/ ((module) => {

"use strict";
module.exports = require("react-gallery-carousel");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,379,557], () => (__webpack_exec__(5640)));
module.exports = __webpack_exports__;

})();