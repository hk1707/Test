"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 6253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);



function Link({ href , children , ...props }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props,
            children: children
        })
    }));
}


/***/ }),

/***/ 5725:
/***/ ((module) => {


module.exports = {
    reactStrictMode: true,
    distDir: "build",
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl:  false ? 0 // development api
         : 'https://test-dqx1d1z7p-testw.vercel.app' // production api
    }
};


/***/ }),

/***/ 2246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ userService)
});

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1964);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./helpers/fetch-wrapper.js


const { publicRuntimeConfig  } = config_default()();
const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};
function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
function post(url, body) {
    console.log(url);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader(url)
        },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader(url)
        },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
// helper functions
function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return {
            Authorization: `Bearer ${user.token}`
        };
    } else {
        return {
        };
    }
}
function handleResponse(response) {
    return response.text().then((text)=>{
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([
                401,
                403
            ].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }
            const error = data && data.message || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

;// CONCATENATED MODULE: ./services/userservice.js




const { publicRuntimeConfig: userservice_publicRuntimeConfig  } = (next_config_default());
console.log(userservice_publicRuntimeConfig.apiUrl);
const baseUrl = `${userservice_publicRuntimeConfig.apiUrl}/users`;
const userSubject = new external_rxjs_.BehaviorSubject( false && 0);
const userService = {
    user: userSubject.asObservable(),
    get userValue () {
        return userSubject.value;
    },
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: userservice_delete
};
function login(username, password) {
    return fetchWrapper.post(`${baseUrl}/authenticate`, {
        username,
        password
    }).then((user)=>{
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}
function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    router_default().push('/account/login');
}
function register(user) {
    return fetchWrapper.post(`${baseUrl}/register`, user);
}
function getAll() {
    return fetchWrapper.get(baseUrl);
}
function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x)=>{
        // update stored user if the logged in user updated their own record
        if (id === userSubject.value.id) {
            // update local storage
            const user = {
                ...userSubject.value,
                ...params
            };
            localStorage.setItem('user', JSON.stringify(user));
            // publish updated user to subscribers
            userSubject.next(user);
        }
        return x;
    });
}
// prefixed with underscored because delete is a reserved word in javascript
function userservice_delete(id) {
    return fetchWrapper["delete"](`${baseUrl}/${id}`);
}


/***/ })

};
;