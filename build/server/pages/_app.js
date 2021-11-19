"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./services/userservice.js + 1 modules
var userservice = __webpack_require__(2246);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./components/Link.jsx
var Link = __webpack_require__(6253);
;// CONCATENATED MODULE: ./components/NavLink.jsx





NavLink.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    exact: (external_prop_types_default()).bool
};
NavLink.defaultProps = {
    exact: false
};
function NavLink({ children , href , exact , ...props }) {
    const { pathname  } = (0,router_.useRouter)();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    if (isActive) {
        props.className += ' active';
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Link/* Link */.r, {
        href: href,
        ...props,
        children: children
    }));
}

;// CONCATENATED MODULE: ./components/Nav.jsx





function Nav() {
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const subscription = userservice/* userService.user.subscribe */.W.user.subscribe((x)=>setUser(x)
        );
        return ()=>subscription.unsubscribe()
        ;
    }, []);
    function logout() {
        userservice/* userService.logout */.W.logout();
    }
    // only show nav when logged in
    if (!user) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand navbar-dark bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar-nav",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    href: "/",
                    exact: true,
                    className: "nav-item nav-link",
                    children: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    href: "/users",
                    className: "nav-item nav-link",
                    children: "Users"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: logout,
                    className: "nav-item nav-link",
                    children: "Logout"
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./services/alertservicenew.js
var alertservicenew = __webpack_require__(3243);
;// CONCATENATED MODULE: ./components/Alert.jsx






Alert.propTypes = {
    id: (external_prop_types_default()).string,
    fade: (external_prop_types_default()).bool
};
Alert.defaultProps = {
    id: 'default-alert',
    fade: true
};
function Alert({ id , fade  }) {
    const router = (0,router_.useRouter)();
    const { 0: alerts1 , 1: setAlerts  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        // subscribe to new alert notifications
        const subscription = alertservicenew/* alertService.onAlert */.A.onAlert(id).subscribe((alert)=>{
            // clear alerts when an empty alert is received
            if (!alert.message) {
                setAlerts((alerts)=>{
                    // filter out alerts without 'keepAfterRouteChange' flag
                    const filteredAlerts = alerts.filter((x)=>x.keepAfterRouteChange
                    );
                    // set 'keepAfterRouteChange' flag to false on the rest
                    filteredAlerts.forEach((x)=>delete x.keepAfterRouteChange
                    );
                    return filteredAlerts;
                });
            } else {
                // add alert to array
                setAlerts((alerts)=>[
                        ...alerts,
                        alert
                    ]
                );
                // auto close alert if required
                if (alert.autoClose) {
                    setTimeout(()=>removeAlert(alert)
                    , 3000);
                }
            }
        });
        // clear alerts on location change
        const clearAlerts = ()=>{
            setTimeout(()=>alertservicenew/* alertService.clear */.A.clear(id)
            );
        };
        router.events.on('routeChangeStart', clearAlerts);
        // clean up function that runs when the component unmounts
        return ()=>{
            // unsubscribe to avoid memory leaks
            subscription.unsubscribe();
            router.events.off('routeChangeStart', clearAlerts);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function removeAlert(alert) {
        if (fade) {
            // fade out alert
            const alertWithFade = {
                ...alert,
                fade: true
            };
            setAlerts((alerts)=>alerts.map((x)=>x === alert ? alertWithFade : x
                )
            );
            // remove alert after faded out
            setTimeout(()=>{
                setAlerts((alerts)=>alerts.filter((x)=>x !== alertWithFade
                    )
                );
            }, 250);
        } else {
            // remove alert
            setAlerts((alerts)=>alerts.filter((x)=>x !== alert
                )
            );
        }
    }
    ;
    function cssClasses(alert) {
        if (!alert) return;
        const classes = [
            'alert',
            'alert-dismissable'
        ];
        const alertTypeClass = {
            [alertservicenew/* AlertType.Success */.N.Success]: 'alert-success',
            [alertservicenew/* AlertType.Error */.N.Error]: 'alert-danger',
            [alertservicenew/* AlertType.Info */.N.Info]: 'alert-info',
            [alertservicenew/* AlertType.Warning */.N.Warning]: 'alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
    if (!alerts1.length) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "m-3",
            children: alerts1.map((alert, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: cssClasses(alert),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "close",
                            onClick: ()=>removeAlert(alert)
                            ,
                            children: "\xd7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: alert.message
                            }
                        })
                    ]
                }, index)
            )
        })
    }));
}

;// CONCATENATED MODULE: ./pages/_app.js




//import 'styles/globals.css';



/* harmony default export */ const _app = (App);
function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(null);
    const { 0: authorized , 1: setAuthorized  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // on initial load - run auth check 
        authCheck(router.asPath);
        // on route change start - hide page content by setting authorized to false  
        const hideContent = ()=>setAuthorized(false)
        ;
        router.events.on('routeChangeStart', hideContent);
        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck);
        // unsubscribe from events in useEffect return function
        return ()=>{
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        setUser(userservice/* userService.userValue */.W.userValue);
        const publicPaths = [
            '/account/login',
            '/account/register'
        ];
        const path = url.split('?')[0];
        if (!userservice/* userService.userValue */.W.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/account/login',
                query: {
                    returnUrl: router.asPath
                }
            });
        } else {
            setAuthorized(true);
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Next.js 11 - User Registration and Login Example"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `app-container ${user ? 'bg-light' : ''}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Alert, {
                    }),
                    authorized && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1964:
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ 5863:
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,824,243], () => (__webpack_exec__(70)));
module.exports = __webpack_exports__;

})();