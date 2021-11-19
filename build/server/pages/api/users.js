"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 9779:
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 5010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ omit)
/* harmony export */ });

function omit(obj, key) {
    const { [key]: omitted , ...rest } = obj;
    return rest;
}


/***/ }),

/***/ 1800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5696);
/* harmony import */ var _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var _helpers_api_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5010);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_0__/* .apiHandler */ .G)({
    get: getUsers
}));
function getUsers(req, res) {
    // return users without hashed passwords in the response
    const response = _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo.getAll */ .r.getAll().map((x)=>(0,_helpers_api_omit__WEBPACK_IMPORTED_MODULE_2__/* .omit */ .C)(x, 'hash')
    );
    return res.status(200).json(response);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [418], () => (__webpack_exec__(1800)));
module.exports = __webpack_exports__;

})();