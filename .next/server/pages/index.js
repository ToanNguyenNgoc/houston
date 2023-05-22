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
	"branch_detail_bot_btn": "home_branch_detail_bot_btn__B2O8G",
	"villa_title": "home_villa_title__PptEM",
	"villa_cate_cnt": "home_villa_cate_cnt__dFrzo",
	"villa_cate_list": "home_villa_cate_list__YSChb",
	"villa_cate_item": "home_villa_cate_item__o_by_",
	"villa_cnt": "home_villa_cnt__XXG5u",
	"villa_list": "home_villa_list__xl46i",
	"welcome_cnt_content": "home_welcome_cnt_content__KLmQC",
	"welcome_cnt_content_left": "home_welcome_cnt_content_left__b_0hy",
	"welcome_cnt_video": "home_welcome_cnt_video__zZaAg",
	"welcome_cnt_content_right": "home_welcome_cnt_content_right__rgxYe",
	"welcome_right_more": "home_welcome_right_more__bIfBl",
	"welcome_right_social": "home_welcome_right_social__tzmFN",
	"util_list": "home_util_list__CoSdx",
	"util_item": "home_util_item__EaAJb",
	"util_item_name": "home_util_item_name__VzciO",
	"banner_cnt": "home_banner_cnt__bKP9T"
};


/***/ }),

/***/ 1356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ HomeBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2597);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4074);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable @next/next/no-img-element */ 






const HomeBanner = ({ banners  })=>{
    const [crrSlide, setCrrSlide] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const settings = {
        customPaging: (index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                style: index === crrSlide ? {
                    backgroundColor: "var(--primary)"
                } : {},
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().dot_item_btn)
            });
        },
        dotsClass: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_dot),
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const onBannerClick = (banner)=>{
        switch(banner.type){
            case "BRANCH":
                router.push(`/branches/${(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .slugify */ .lV)(banner.name)}&id=${banner.original_id}`);
                break;
            case "VILLA":
                router.push(`/danh-sach-villa/${(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .slugify */ .lV)(banner.name)}&id=${banner.original_id}`);
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_cnt),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
            ...settings,
            children: banners.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_cnt),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: item.content !== "" ? {
                                filter: "brightness(70%)"
                            } : {},
                            src: item.media?.original_url,
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_img),
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_content),
                                children: [
                                    i == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_name),
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_content),
                                        children: item.content
                                    }),
                                    item.type !== "HOME" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_item_btn),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
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


/***/ }),

/***/ 3168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ HomeBranch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2597);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4074);
/* eslint-disable @next/next/no-img-element */ 




const HomeBranch = ({ branches  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().home_section_item),
        children: branches.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_item_bg),
                        src: item.image?.original_url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: i % 2 !== 0 ? `${(_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_cnt)} ${(_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_cnt_re)}` : (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_cnt),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.image?.original_url,
                                alt: "",
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_cnt_img)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail_head),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail_name),
                                                children: item.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail_desc),
                                                children: item.content
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail_bot),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: `/branches/${(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .slugify */ .lV)(item.name)}&id=${item.id}`,
                                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().branch_detail_bot_btn),
                                            children: [
                                                "T\xecm hiểu th\xeam",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowRight, {})
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


/***/ }),

/***/ 7679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ HomeVilla)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2597);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1280);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_villa_card_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4485);
/* harmony import */ var _components_villa_card_load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(618);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const HomeVilla = ()=>{
    const [cate, setCate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            "HOME_VILLA_CATE"
        ],
        queryFn: ()=>_services__WEBPACK_IMPORTED_MODULE_3__/* .api.villaCates */ .h.villaCates({
                page: 1,
                limit: 15,
                status: true
            })
    });
    const cates = data?.data ?? [];
    const { data: dataVilla , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            "HOME_VILLA",
            cate
        ],
        queryFn: ()=>_services__WEBPACK_IMPORTED_MODULE_3__/* .api.villas */ .h.villas({
                page: 1,
                limit: 12,
                villa_cate_id: cate,
                includes: "full_address"
            }),
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_7__/* .QR_TIME_CACHE */ .C
    });
    const villas = dataVilla?.data ?? [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_title),
                children: "Biệt thự nổi bật"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_cate_cnt),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_cate_list),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            style: !cate ? {
                                backgroundColor: "var(--primary)",
                                color: "var(--white)"
                            } : {},
                            onClick: ()=>setCate(undefined),
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_cate_item),
                            children: "Tất cả"
                        }),
                        cates.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                style: item.id === cate ? {
                                    backgroundColor: "var(--primary)",
                                    color: "var(--white)"
                                } : {},
                                onClick: ()=>setCate(item.id),
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_cate_item),
                                children: item.villa_cate_name
                            }, item.id))
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_cnt),
                children: [
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadVilla, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_list),
                        children: villas.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_villa_card_item__WEBPACK_IMPORTED_MODULE_5__/* .VillaCard */ .J, {
                                    villa: item
                                })
                            }, item.id))
                    })
                ]
            })
        ]
    });
};
const LoadVilla = ()=>{
    let list = [];
    for(var i = 0; i < 4; i++){
        const item = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_item),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_villa_card_load__WEBPACK_IMPORTED_MODULE_6__/* .VillaCardLoad */ .G, {})
        }, i);
        list.push(item);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().villa_list),
        children: list
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ WelCome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2597);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7780);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);







const WelCome = ()=>{
    const socials = [
        {
            link: "https://www.youtube.com/watch?v=o0mSrIedcq8",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaYoutube, {
                color: "var(--primary)",
                size: 18
            })
        },
        {
            link: "https://www.facebook.com/houston.garden01",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaFacebook, {
                color: "var(--primary)",
                size: 18
            })
        },
        {
            link: "https://www.instagram.com/houston.garden/",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaInstagram, {
                color: "var(--primary)",
                size: 18
            })
        },
        {
            link: "https://www.tiktok.com/@houstongarden",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTiktok, {
                color: "var(--primary)",
                size: 18
            })
        }
    ];
    const utils = [
        {
            name: "Lễ t\xe2n 24/7",
            icon: _assets_icon__WEBPACK_IMPORTED_MODULE_2__/* .icon.foodCate */ .q.foodCate
        },
        {
            name: "Nh\xe0 h\xe0ng",
            icon: _assets_icon__WEBPACK_IMPORTED_MODULE_2__/* .icon.dinnerCate */ .q.dinnerCate
        },
        {
            name: "Dịch vụ vận chuyển",
            icon: _assets_icon__WEBPACK_IMPORTED_MODULE_2__/* .icon.transportCate */ .q.transportCate
        },
        {
            name: "Spa Suites",
            icon: _assets_icon__WEBPACK_IMPORTED_MODULE_2__/* .icon.spaCate */ .q.spaCate
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt_content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt_content_left),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt_video),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    src: "https://www.youtube.com/embed/o0mSrIedcq8?autoplay=1&mute=1&loop=1&color=white&controls=0",
                                    frameBorder: "0",
                                    allow: "autoplay; encrypted-media",
                                    allowFullScreen: true,
                                    title: "YouTube video player",
                                    style: {
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt_content_right),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "BIỆT THỰ NGHỈ DƯỠNG TỐT NHẤT Ở VŨNG T\xc0U"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Thức dậy với niềm hạnh ph\xfac, nhẹ nh\xe0ng v\xe0 s\xe2u lắng trong t\xe2m hồn. Sự pha trộn của lối sống hiện đại, ẩm thực tuyệt vời với sự đa dạng của ẩm thực 3 miền v\xe0 đội ngũ nh\xe2n vi\xean sẽ vượt qu\xe1 mọi sự mong đợi. Houston Garden Villa l\xe0 chuỗi nghỉ dưỡng kiểu Indochine sẽ mang đến trải nghiệm nghỉ ngơi thư gi\xe3n, độc đ\xe1o – thực sự l\xe0 ng\xf4i nh\xe0 của bạn khi xa nh\xe0."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_right_more),
                                    children: "Kh\xe1m ph\xe1m th\xeam"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_right_social),
                                    children: socials.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: item.link,
                                                target: "_blank",
                                                children: item.icon
                                            })
                                        }, i))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().welcome_cnt_utils),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().util_list),
                        children: utils.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().util_item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: item.icon,
                                        alt: item.name,
                                        width: 100,
                                        height: 100
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_6___default().util_item_name),
                                        children: item.name
                                    })
                                ]
                            }, i))
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 8950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CX": () => (/* reexport safe */ _Branch__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "FS": () => (/* reexport safe */ _Banner__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "Fx": () => (/* reexport safe */ _WelCome__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "se": () => (/* reexport safe */ _Villa__WEBPACK_IMPORTED_MODULE_3__.s)
/* harmony export */ });
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1356);
/* harmony import */ var _WelCome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5894);
/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3168);
/* harmony import */ var _Villa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7679);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Villa__WEBPACK_IMPORTED_MODULE_3__]);
_Villa__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _components_pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8950);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7430);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8557);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1280);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _components_pages_home__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _layouts__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _components_pages_home__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _layouts__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Home = (props)=>{
    const { branches , banners  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Seo */ .pQ, {
                title: "Trang chủ",
                description: "Trang chủ Houston Garden",
                url: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_2__/* .HomeBanner */ .FS, {
                        banners: banners
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_2__/* .WelCome */ .Fx, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_2__/* .HomeVilla */ .se, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_2__/* .HomeBranch */ .CX, {
                        branches: branches
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
Home.Layout = _layouts__WEBPACK_IMPORTED_MODULE_4__/* .MainLayout */ .Zn;
const getStaticProps = async (context)=>{
    let branches = [];
    let banners = [];
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_3__/* .baseURL */ .v2}branches`);
        branches = response.data?.data;
    } catch (error) {}
    //
    try {
        const response = await _services__WEBPACK_IMPORTED_MODULE_5__/* .api.banners */ .h.banners();
        banners = response.data;
    } catch (error) {}
    return {
        props: {
            branches,
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

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

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