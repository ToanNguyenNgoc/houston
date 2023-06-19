(() => {
var exports = {};
exports.id = 183;
exports.ids = [183,117];
exports.modules = {

/***/ 1624:
/***/ ((module) => {

// Exports
module.exports = {
	"booking_form_title": "villa-detail_booking_form_title__2eyXp",
	"booking_form": "villa-detail_booking_form__cdEXk",
	"form_row": "villa-detail_form_row__LW865",
	"form_row_col_2": "villa-detail_form_row_col_2__xCz7g",
	"input_date": "villa-detail_input_date__4g5lf",
	"range_date_cnt": "villa-detail_range_date_cnt__p9SQQ",
	"range_date_act": "villa-detail_range_date_act__dU7Xy",
	"booking_range_date_picker": "villa-detail_booking_range_date_picker__AtAml",
	"form_row_label": "villa-detail_form_row_label__N25VU",
	"note": "villa-detail_note__GQKbV",
	"form_row_error": "villa-detail_form_row_error__lFs2r",
	"form_bot_btn": "villa-detail_form_bot_btn__cdaHj",
	"util_cnt": "villa-detail_util_cnt__mOsNB",
	"list_util": "villa-detail_list_util__83o5V",
	"util_item": "villa-detail_util_item__mmgly",
	"util_item_content": "villa-detail_util_item_content__BbAfO",
	"list_util_free": "villa-detail_list_util_free__D4NXP"
};


/***/ }),

/***/ 7928:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "villa_container__OmfSI",
	"head_banner_cnt": "villa_head_banner_cnt__yUJj5",
	"villa_name": "villa_villa_name__U4yVn",
	"villa_cate": "villa_villa_cate__FOU2y",
	"villa_star": "villa_villa_star__fgvJ0",
	"head_banner_desk": "villa_head_banner_desk__a1Y8b",
	"banner_item_cnt": "villa_banner_item_cnt__nBEvO",
	"price": "villa_price__sXIf2",
	"body": "villa_body__wNB4S",
	"body_left": "villa_body_left__lPXoG",
	"body_right": "villa_body_right__hw_b8",
	"body_title": "villa_body_title__v5mVP",
	"body_desc": "villa_body_desc__9E8UC",
	"head": "villa_head__31e8D",
	"head_detail": "villa_head_detail__etaiU",
	"head_banner_mb": "villa_head_banner_mb__r0t57",
	"slide_page": "villa_slide_page__JuoZf",
	"slider_item": "villa_slider_item__g0RTj",
	"bottom": "villa_bottom__8Oa3O",
	"bottom_right": "villa_bottom_right__Bc_ce",
	"bottom_form_cnt": "villa_bottom_form_cnt__OUff_"
};


/***/ }),

/***/ 8278:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ FormBooking)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _stores_zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4433);
/* harmony import */ var _villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1624);
/* harmony import */ var _villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4304);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_zustand__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__]);
([_stores_zustand__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const schema = yup__WEBPACK_IMPORTED_MODULE_8__.object({
    from_date_booking: yup__WEBPACK_IMPORTED_MODULE_8__.string().required("Chọn ng\xe0y đến"),
    to_date_booking: yup__WEBPACK_IMPORTED_MODULE_8__.string().required("Chọn ng\xe0y trả"),
    customer_count: yup__WEBPACK_IMPORTED_MODULE_8__.number().min(1, "Số lượng kh\xe1ch kh\xf4ng hợp lệ").max(20, "Lượng kh\xe1ch tối đa 20 người").required("Vui l\xf2ng chọn số lượng kh\xe1ch"),
    baby_count: yup__WEBPACK_IMPORTED_MODULE_8__.number().min(0, "Số lượng kh\xe1ch kh\xf4ng hợp lệ")
});
const FormBooking = ({ villa  })=>{
    const [profile] = (0,_stores_zustand__WEBPACK_IMPORTED_MODULE_1__/* .useProfileStore */ .O)((state)=>[
            state.profile
        ]);
    const [onSetBooking] = (0,_stores_zustand__WEBPACK_IMPORTED_MODULE_1__/* .useBookingStore */ .M)((state)=>[
            state.onSetBooking
        ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const rangeDateRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const onShowRangDate = ()=>{
        if (rangeDateRef.current) {
            rangeDateRef.current.classList.add((_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().range_date_act));
        }
    };
    if (false) {}
    const [dateRange, setDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        start: new Date(),
        end: new Date()
    });
    const selectionRange = {
        startDate: dateRange.start,
        endDate: dateRange.end,
        key: "selection"
    };
    const { register , handleSubmit , setValue , formState: { errors  } , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(schema),
        defaultValues: {
            from_date_booking: moment__WEBPACK_IMPORTED_MODULE_7___default()().format("YYYY-MM-DD"),
            to_date_booking: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, "days").format("YYYY-MM-DD"),
            customer_count: 1,
            baby_count: 0,
            note: ""
        }
    });
    const onChange = (e)=>{
        const start = e.selection.startDate;
        const end = e.selection.endDate;
        setValue("from_date_booking", moment__WEBPACK_IMPORTED_MODULE_7___default()(start).format("YYYY-MM-DD"));
        setValue("to_date_booking", moment__WEBPACK_IMPORTED_MODULE_7___default()(end).format("YYYY-MM-DD"));
        setDateRange({
            start: start,
            end: end
        });
    };
    const onSubmit = (value)=>{
        const { from_date_booking , to_date_booking , note , customer_count , baby_count  } = value;
        if (villa.branch) {
            const data = {
                branch_id: villa.branch?.id,
                villa_id: villa.id,
                recaptcha: "",
                from_date_booking,
                to_date_booking,
                customer_count,
                baby_count,
                note
            };
            router.push("/check-out");
            onSetBooking(villa, data);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_form_cnt),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_form_title),
                    children: "Đặt ph\xf2ng"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: profile ? handleSubmit(onSubmit) : (e)=>{
                        e.preventDefault();
                        router.push("/auth/login");
                    },
                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_form),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onShowRangDate();
                            },
                            className: `${(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row)} ${(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row_col_2)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    disabled: true,
                                    className: `app-input ${(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().input_date)}`,
                                    placeholder: "Từ ng\xe0y",
                                    ...register("from_date_booking")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    disabled: true,
                                    className: `app-input ${(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().input_date)}`,
                                    placeholder: "Đến ng\xe0y",
                                    ...register("to_date_booking")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: rangeDateRef,
                                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().range_date_cnt),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_3__.DateRangePicker, {
                                        className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().booking_range_date_picker),
                                        color: "#015258",
                                        minDate: new Date(),
                                        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.vi,
                                        ranges: [
                                            selectionRange
                                        ],
                                        onChange: onChange
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row_label),
                                    children: "Số lượng kh\xe1ch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        marginTop: "8px"
                                    },
                                    ...register("customer_count"),
                                    type: "number",
                                    className: "app-input"
                                }),
                                getValues("customer_count") !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row_error),
                                    children: errors.customer_count?.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row_label),
                                    children: "Số trẻ em (dưới 11 tuổi)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        marginTop: "8px"
                                    },
                                    ...register("baby_count"),
                                    type: "number",
                                    className: "app-input"
                                }),
                                getValues("baby_count") !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row_error),
                                    children: errors.baby_count?.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().note),
                                placeholder: "Ghi ch\xfa"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_bot),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_6__.LoadingButton, {
                                variant: "contained",
                                size: "large",
                                style: {
                                    backgroundColor: "var(--primary)"
                                },
                                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_11___default().form_bot_btn),
                                type: "submit",
                                children: "X\xe1c nhận đặt ph\xf2ng"
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ VillaUtil)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1624);
/* harmony import */ var _villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);



const VillaUtil = ()=>{
    const utils = [
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaWifi, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Wi-Fi miễn ph\xed"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaParking, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Chỗ đỗ xe miễn ph\xed"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDoorClosed, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Ph\xf2ng gia đ\xecnh"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaSmokingBan, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Ph\xf2ng kh\xf4ng h\xfat thuốc"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaHouseUser, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Dịch vụ ph\xf2ng"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaWheelchair, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Tiện \xedch cho kh\xe1ch khuyết tật"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaWineGlassAlt, {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_icon),
                size: 16,
                color: "var(--green-dark-2)"
            }),
            content: "Bữa s\xe1ng tốt"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_cnt),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().booking_form_title),
                children: "Tiện \xedch v\xe0 dịch vụ đi k\xe8m"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_util),
                children: utils.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_item),
                        children: [
                            item.icon,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().util_item_content),
                                children: item.content
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_villa_detail_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_util_free),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStarOfLife, {
                                size: 8,
                                style: {
                                    margin: "0px 6px 0px 3px"
                                },
                                color: "var(--green-dark-2)"
                            }),
                            "Miễn ph\xed buffet s\xe1ng"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStarOfLife, {
                                size: 8,
                                style: {
                                    margin: "0px 6px 0px 3px"
                                },
                                color: "var(--green-dark-2)"
                            }),
                            "Nước uống ch\xe0o mừng khi nhận ph\xf2ng"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStarOfLife, {
                                size: 8,
                                style: {
                                    margin: "0px 6px 0px 3px"
                                },
                                color: "var(--green-dark-2)"
                            }),
                            "Đặt trước, thanh to\xe1n sau"
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _VIllaUtil__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "W": () => (/* reexport safe */ _FormBooking__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _FormBooking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8278);
/* harmony import */ var _VIllaUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormBooking__WEBPACK_IMPORTED_MODULE_0__]);
_FormBooking__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7430);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1280);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2194);
/* harmony import */ var _styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7928);
/* harmony import */ var _styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9752);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2842);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5848);
/* harmony import */ var _stores_zustand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4433);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7379);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4074);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_6__, query_string__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, _components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__, _stores_zustand__WEBPACK_IMPORTED_MODULE_13__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_6__, query_string__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__, _components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__, _stores_zustand__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 


















const VillaDetail = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { villa , villa_id  } = props;
    const [isLoading] = (0,_stores_zustand__WEBPACK_IMPORTED_MODULE_13__/* .useProfileStore */ .O)((state)=>[
            state.isLoading
        ]);
    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)({
        queryKey: [
            "VILLA_GALLERIES",
            villa_id
        ],
        queryFn: ()=>_services__WEBPACK_IMPORTED_MODULE_4__/* .api.villa_galleries */ .h.villa_galleries(villa_id),
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_14__/* .QR_TIME_CACHE */ .CA
    });
    const villaGalleries = data?.data.map((i)=>i.image?.original_url) ?? [];
    const listImageUrl = [
        villa.thumbnail?.original_url ?? "",
        ...villaGalleries
    ];
    const isMb = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)("(max-width:767px)");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Seo */ .pQ, {
                title: villa.name,
                description: villa.description,
                url: router.asPath,
                image_url: villa.thumbnail?.original_url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_detail),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_detail_left),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().villa_name),
                                                    children: villa.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().villa_cate),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaThList, {
                                                            size: 13,
                                                            color: "var(--primary)"
                                                        }),
                                                        villa.villa_cate?.villa_cate_name
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().villa_star),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaStar, {
                                                            size: 12,
                                                            color: "var(--primary)"
                                                        }),
                                                        " 5,0"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_detail_right)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_banner_cnt),
                                    children: isMb ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SliderImage, {
                                        images: listImageUrl
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_banner_desk),
                                        children: listImageUrl.slice(0, 4).map((url)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().banner_item_cnt),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: url,
                                                    alt: ""
                                                })
                                            }, url))
                                    })
                                })
                            ]
                        }),
                        !isMb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Price, {
                            villa: villa
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().body),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().body_left),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().body_title),
                                            children: "Giới thiệu về biệt thự n\xe0y"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().body_desc),
                                            children: villa.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__/* .VillaUtil */ .U, {})
                                    ]
                                }),
                                !isMb ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().body_right),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__/* .FormBooking */ .W, {
                                        villa: villa
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bottom, {
                                    villa: villa
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
VillaDetail.Layout = _layouts__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Zn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VillaDetail);
const SliderImage = ({ images  })=>{
    const [cur, setCur] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(1);
    const bannerSettings = {
        ..._settings__WEBPACK_IMPORTED_MODULE_12__/* .settings */ .X,
        autoplay: false,
        afterChange: (currentSlide)=>setCur(currentSlide + 1)
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().head_banner_mb),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().slide_page),
                children: [
                    cur,
                    "/",
                    images.length
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_10___default()), {
                ...bannerSettings,
                children: images.map((url, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().slider_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: url,
                            alt: ""
                        })
                    }, i))
            })
        ]
    });
};
const Price = ({ villa  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().price),
        children: villa.special_price < villa.price ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        (0,_utils__WEBPACK_IMPORTED_MODULE_16__/* .fmPrice */ .BX)(villa.special_price),
                        " VND/đ\xeam"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        (0,_utils__WEBPACK_IMPORTED_MODULE_16__/* .fmPrice */ .BX)(villa.price),
                        " VND/đ\xeam"
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [
                (0,_utils__WEBPACK_IMPORTED_MODULE_16__/* .fmPrice */ .BX)(villa.price),
                " VND/đ\xeam"
            ]
        })
    });
};
const Bottom = ({ villa  })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
                open: open,
                onClose: ()=>setOpen(false),
                anchor: "bottom",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().bottom_form_cnt),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_villa_detail__WEBPACK_IMPORTED_MODULE_11__/* .FormBooking */ .W, {
                        villa: villa
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().bottom),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().bottom_left),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Price, {
                            villa: villa
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_villa_module_css__WEBPACK_IMPORTED_MODULE_18___default().bottom_right),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            onClick: ()=>setOpen(true),
                            variant: "contained",
                            size: "large",
                            style: {
                                backgroundColor: "var(--primary)",
                                width: "100%"
                            },
                            children: "Đặt ph\xf2ng"
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    (0,_config__WEBPACK_IMPORTED_MODULE_2__/* .serverSideCache */ .O3)(context);
    const { params  } = context;
    const queryParams = query_string__WEBPACK_IMPORTED_MODULE_8__["default"].parse(params?.villaId);
    let villa;
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseURL */ .v2}villas/${queryParams.id}`, {
            params: {
                "includes": "category|branch|full_address"
            }
        });
        villa = response.data.data;
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
            villa: villa,
            villa_id: queryParams.id
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ settings)
});

;// CONCATENATED MODULE: ./src/settings/slick-slider.ts
const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
};

;// CONCATENATED MODULE: ./src/settings/index.ts



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

/***/ 5564:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("react-date-range");

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

/***/ 5856:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/go");

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

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

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

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,379,557], () => (__webpack_exec__(7783)));
module.exports = __webpack_exports__;

})();