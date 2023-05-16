exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 2255:
/***/ ((module) => {

// Exports
module.exports = {
	"account_page_title": "account_account_page_title__cFga2",
	"account_page_body": "account_account_page_body__Fsv84",
	"acc_form_row": "account_acc_form_row__lIrx_",
	"acc_form_row_label": "account_acc_form_row_label__vcEod",
	"acc_form_row_ip": "account_acc_form_row_ip__qR_vq",
	"acc_form_row_ip_error": "account_acc_form_row_ip_error__XacFg",
	"acc_form_bot": "account_acc_form_bot__M4cAl",
	"row_avatar": "account_row_avatar__ge_Na",
	"form_avatar": "account_form_avatar__tTEgY",
	"form_avatar_btn": "account_form_avatar_btn__qwwkH",
	"booking_item": "account_booking_item__oALVH",
	"booking_item_detail": "account_booking_item_detail__reDxw",
	"booking_item_detail_head": "account_booking_item_detail_head__Dc_An",
	"booking_item_detail_amount": "account_booking_item_detail_amount__hPeZT",
	"booking_item_img": "account_booking_item_img__hSbjz",
	"booking_item_detail_head_create": "account_booking_item_detail_head_create__0_9rt",
	"booking_item_detail_address": "account_booking_item_detail_address__kKbUr",
	"range_date": "account_range_date__C1LDC",
	"range_date_item": "account_range_date_item__jRXps",
	"account_page_bot": "account_account_page_bot__NIbYI",
	"booking_list_item": "account_booking_list_item__QiWar"
};


/***/ }),

/***/ 9684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderAccount": () => (/* binding */ PageHeaderAccount),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8557);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1280);
/* harmony import */ var _styles_account_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2255);
/* harmony import */ var _styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9752);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(588);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, _services__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 











const PageHeaderAccount = ({ title  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().account_page_title),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>router.back(),
                className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().account_page_title_btn),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaAngleLeft, {
                    size: 26,
                    color: "var(--primary)"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: title
            })
        ]
    });
};
const Bookings = ()=>{
    const { data , fetchNextPage , isLoading , isFetchingNextPage  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery)({
        queryKey: [
            "BOOKINGS"
        ],
        queryFn: ({ pageParam =1  })=>_services__WEBPACK_IMPORTED_MODULE_3__/* .api.bookings */ .h.bookings({
                page: pageParam,
                limit: 10,
                includes: "full_address|villa_media"
            }),
        getNextPageParam: (page)=>page.current_page + 1
    });
    const totalItem = data?.pages[0]?.total ?? 0;
    const bookings = data?.pages?.map((item)=>item.data).flat() ?? [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Seo */ .pQ, {
                title: "Lịch sử đặt ph\xf2ng",
                description: "",
                url: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageHeaderAccount, {
                title: "Lịch sử đặt ph\xf2ng"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().account_page_body),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_list),
                        children: bookings.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_list_item),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: "/",
                                    className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_img),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.villa?.thumbnail?.original_url,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_detail),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_detail_head_create),
                                                            children: [
                                                                "ng\xe0y đặt: ",
                                                                moment__WEBPACK_IMPORTED_MODULE_6___default()(item.created_at).format("HH:mm DD [thg] MM, YYYY")
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_detail_head),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: item.villa?.name
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        "Trạng th\xe1i đặt ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                        item.status_booking
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_detail_address),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMapMarkerAlt, {
                                                                    color: "var(--primary)",
                                                                    size: 12
                                                                }),
                                                                item.branch?.address,
                                                                ",",
                                                                item.branch?.ward?.name,
                                                                ",",
                                                                item.branch?.district?.name,
                                                                ",",
                                                                item.branch?.province?.name
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().range_date),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().range_date_item),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Nhận ph\xf2ng"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: moment__WEBPACK_IMPORTED_MODULE_6___default()(item.from_date_booking).format("DD [thg] MM, YYYY")
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().range_date_item),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Trả ph\xf2ng"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: moment__WEBPACK_IMPORTED_MODULE_6___default()(item.to_date_booking).format("DD [thg] MM, YYYY")
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_item_detail_amount),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Tổng cộng"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .fmPrice */ .BX)(item.amount),
                                                                " / (",
                                                                item.nights,
                                                                " đ\xeam)"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, item.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_account_module_css__WEBPACK_IMPORTED_MODULE_11___default().account_page_bot),
                        children: bookings.length < totalItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_9__.LoadingButton, {
                            loading: isFetchingNextPage,
                            onClick: ()=>fetchNextPage(),
                            style: {
                                color: "var(--primary)"
                            },
                            children: "Xem th\xeam"
                        })
                    })
                ]
            })
        ]
    });
};
Bookings.Layout = _layouts__WEBPACK_IMPORTED_MODULE_2__/* .AccountLayout */ .p0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;