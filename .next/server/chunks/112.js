exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 6027:
/***/ ((module) => {

// Exports
module.exports = {
	"form_row": "login_form_row__FlaK7",
	"form_row_change_mail": "login_form_row_change_mail__Oj8Mc",
	"form_row_error": "login_form_row_error__OjLUG",
	"form_btn_forgot": "login_form_btn_forgot__LbQvU",
	"form_btn": "login_form_btn__QU4OW"
};


/***/ }),

/***/ 5704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _useNoti__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _useNoti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _usePostMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1209);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_usePostMedia__WEBPACK_IMPORTED_MODULE_1__]);
_usePostMedia__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useNoti)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useNoti() {
    const [noti, setNoti] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        load: false,
        message: "",
        openAlert: false,
        color: "info"
    });
    const firstLoad = ()=>setNoti({
            ...noti,
            load: true
        });
    const resultLoad = (options)=>{
        setNoti({
            load: false,
            message: options.message ?? "",
            openAlert: true,
            element: options.element,
            color: options.color
        });
    };
    const onCloseNoti = ()=>setNoti({
            ...noti,
            openAlert: false
        });
    return {
        noti,
        firstLoad,
        resultLoad,
        onCloseNoti
    };
}


/***/ }),

/***/ 1209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export usePostMedia */
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1280);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_0__]);
_services__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function usePostMedia() {
    const [medias, setMedias] = useState([]);
    const handlePostMedia = async ({ e , callBack  })=>{
        if (e.target.files) {
            try {
                const mediaList = [];
                for(var i = 0; i < e.target.files?.length; i++){
                    const fileItem = e.target.files[i];
                    let formData = new FormData();
                    let resMedia = {
                        original_url: "",
                        mediaId: i
                    };
                    formData.append("file", fileItem);
                    const res = await api.uploadMedia(formData);
                    if (res) {
                        resMedia = {
                            original_url: res.data.original_url,
                            mediaId: res.data.id
                        };
                    }
                    mediaList.push(resMedia);
                }
                setMedias(mediaList);
                if (callBack) {
                    callBack(mediaList);
                }
            } catch (error) {}
        }
    };
    return {
        medias,
        handlePostMedia
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;