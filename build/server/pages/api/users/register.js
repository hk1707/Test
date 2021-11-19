"use strict";
(() => {
var exports = {};
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_users_repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4747);
/* harmony import */ var _helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5696);


const bcrypt = __webpack_require__(8432);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__/* .apiHandler */ .G)({
    post: register
}));
function register(req, res) {
    // split out password from user details 
    const { password , ...user } = req.body;
    // validate
    if (_helpers_users_repo__WEBPACK_IMPORTED_MODULE_0__/* .usersRepo.find */ .r.find((x)=>x.username === user.username
    )) throw `User with the username "${user.username}" already exists`;
    // hash password
    user.hash = bcrypt.hashSync(password, 10);
    _helpers_users_repo__WEBPACK_IMPORTED_MODULE_0__/* .usersRepo.create */ .r.create(user);
    return res.status(200).json({
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [418], () => (__webpack_exec__(7767)));
module.exports = __webpack_exports__;

})();