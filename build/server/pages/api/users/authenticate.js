"use strict";
(() => {
var exports = {};
exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9779:
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ 4195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5696);
/* harmony import */ var _helpers_users_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4747);



const jwt = __webpack_require__(9344);
const bcrypt = __webpack_require__(8432);
const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__/* .apiHandler */ .G)({
    post: authenticate
}));
function authenticate(req, res) {
    const { username , password  } = req.body;
    const user = _helpers_users_repo__WEBPACK_IMPORTED_MODULE_2__/* .usersRepo.find */ .r.find((u)=>u.username === username
    );
    console.log('user : ', user);
    // validate
    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw 'Username or password is incorrect';
    }
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({
        sub: user.id
    }, serverRuntimeConfig.secret, {
        expiresIn: '7d'
    });
    console.log('Token', token);
    // return basic user details and token
    return res.status(200).json({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [418], () => (__webpack_exec__(4195)));
module.exports = __webpack_exports__;

})();