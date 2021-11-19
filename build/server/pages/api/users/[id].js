"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
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

/***/ 9773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5696);
/* harmony import */ var _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var _helpers_api_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5010);



const bcrypt = __webpack_require__(8432);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_0__/* .apiHandler */ .G)({
    get: getById,
    put: update,
    delete: _delete
}));
function getById(req, res) {
    const user = _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo.getById */ .r.getById(req.query.id);
    if (!user) throw 'User Not Found';
    return res.status(200).json((0,_helpers_api_omit__WEBPACK_IMPORTED_MODULE_2__/* .omit */ .C)(user, 'hash'));
}
function update(req, res) {
    const user = _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo.getById */ .r.getById(req.query.id);
    if (!user) throw 'User Not Found';
    // split out password from user details 
    const { password , ...params } = req.body;
    // validate
    if (user.username !== params.username && _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo.find */ .r.find((x)=>x.username === params.username
    )) throw `User with the username "${params.username}" already exists`;
    // only update hashed password if entered
    if (password) {
        user.hash = bcrypt.hashSync(password, 10);
    }
    _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo.update */ .r.update(req.query.id, params);
    return res.status(200).json({
    });
}
function _delete(req, res) {
    _helpers_users_repo__WEBPACK_IMPORTED_MODULE_1__/* .usersRepo["delete"] */ .r["delete"](req.query.id);
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
var __webpack_exports__ = __webpack_require__.X(0, [418], () => (__webpack_exec__(9773)));
module.exports = __webpack_exports__;

})();