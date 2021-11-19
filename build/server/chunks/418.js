"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 5696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ apiHandler)
});

;// CONCATENATED MODULE: ./helpers/api/error-handler.js

function errorHandler(err, res) {
    if (typeof err === 'string') {
        // custom application error
        const is404 = err.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({
            message: err
        });
    }
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({
            message: 'Invalid Token'
        });
    }
    // default to 500 server error
    console.error(err);
    return res.status(500).json({
        message: err.message
    });
}

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./helpers/api/jwt-middleware.js

const expressJwt = __webpack_require__(9779);
const util = __webpack_require__(6464);
const { serverRuntimeConfig  } = config_default()();

function jwtMiddleware(req, res) {
    const middleware = expressJwt({
        secret: serverRuntimeConfig.secret,
        algorithms: [
            'HS256'
        ]
    }).unless({
        path: [
            '/api/users/register',
            '/api/users/authenticate'
        ]
    });
    return util.promisify(middleware)(req, res);
}

;// CONCATENATED MODULE: ./helpers/api/api-handler.js



function apiHandler(handler) {
    return async (req, res)=>{
        const method = req.method.toLowerCase();
        // check handler supports HTTP method
        if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);
        try {
            // global middleware
            await jwtMiddleware(req, res);
            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    };
}


/***/ }),

/***/ 4747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ usersRepo)
/* harmony export */ });
const fs = __webpack_require__(7147);
// users in JSON file for simplicity, store in a db for production applications
let users = __webpack_require__(7095);
const usersRepo = {
    getAll: ()=>users
    ,
    getById: (id)=>users.find((x)=>x.id.toString() === id.toString()
        )
    ,
    find: (x)=>users.find(x)
    ,
    create,
    update,
    delete: _delete
};
function create(user) {
    // generate new user id
    user.id = users.length ? Math.max(...users.map((x)=>x.id
    )) + 1 : 1;
    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
    // add and save user
    users.push(user);
    saveData();
}
function update(id, params) {
    const user = users.find((x)=>x.id.toString() === id.toString()
    );
    // set date updated
    user.dateUpdated = new Date().toISOString();
    // update and save
    Object.assign(user, params);
    saveData();
}
// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter((x)=>x.id.toString() !== id.toString()
    );
    saveData();
}
// private helper functions
function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}


/***/ }),

/***/ 7095:
/***/ ((module) => {

module.exports = JSON.parse('[{"firstName":"Hitesh","lastName":"Talpada","username":"Hitesh","hash":"$2a$10$rihTx4PVDm3qcdu50nE10O.Vl.xY86Mt6uFLNrLFKjyXgcNor7vJy","id":3,"dateCreated":"2021-11-19T07:04:40.062Z","dateUpdated":"2021-11-19T07:04:40.062Z"},{"firstName":"developer","lastName":"Test","username":"developer","hash":"$2a$10$th3HZfNQHT4hxPlcyOuI7ORqpq61d5hauOrfS/w1GmAiifI2IfCA2","id":4,"dateCreated":"2021-11-19T10:10:08.460Z","dateUpdated":"2021-11-19T10:10:08.460Z"},{"firstName":"developer","lastName":"Test","username":"Developer","hash":"$2a$10$PVc.OYQ2hnqrwzYBXDAeH.BcEI8bjTefSrT0GUr6I2pNJv5m83JDC","id":5,"dateCreated":"2021-11-19T10:13:26.065Z","dateUpdated":"2021-11-19T10:13:26.065Z"}]');

/***/ })

};
;