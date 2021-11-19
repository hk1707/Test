"use strict";
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 3243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ alertService),
/* harmony export */   "N": () => (/* binding */ AlertType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5863);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


const alertService = {
    onAlert,
    success,
    error,
    info,
    warn,
    alert: alert1,
    clear
};
const AlertType = {
    Success: 'Success',
    Error: 'Error',
    Info: 'Info',
    Warning: 'Warning'
};
const alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
const defaultId = 'default-alert';
// enable subscribing to alerts observable
function onAlert(id = defaultId) {
    return alertSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((x)=>x && x.id === id
    ));
}
// convenience methods
function success(message, options) {
    alert1({
        ...options,
        type: AlertType.Success,
        message
    });
}
function error(message, options) {
    alert1({
        ...options,
        type: AlertType.Error,
        message
    });
}
function info(message, options) {
    alert1({
        ...options,
        type: AlertType.Info,
        message
    });
}
function warn(message, options) {
    alert1({
        ...options,
        type: AlertType.Warning,
        message
    });
}
// core alert method
function alert1(alert) {
    alert.id = alert.id || defaultId;
    alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
    alertSubject.next(alert);
}
// clear alerts
function clear(id = defaultId) {
    alertSubject.next({
        id
    });
}


/***/ })

};
;