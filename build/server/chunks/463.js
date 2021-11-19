"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 2565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ AddEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6253);
/* harmony import */ var _services_userservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2246);
/* harmony import */ var _services_alertservicenew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function AddEdit(props) {
    var ref, ref1, ref2, ref3;
    const user = props === null || props === void 0 ? void 0 : props.user;
    const isAddMode = !user;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // form validation rules 
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        firstName: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('First Name is required'),
        lastName: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Last Name is required'),
        username: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Username is required'),
        password: yup__WEBPACK_IMPORTED_MODULE_4__.string().transform((x)=>x === '' ? undefined : x
        ).concat(isAddMode ? yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Password is required') : null).min(6, 'Password must be at least 6 characters')
    });
    const formOptions = {
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(validationSchema)
    };
    // set default form values if in edit mode
    if (!isAddMode) {
        formOptions.defaultValues = props.user;
    }
    // get functions to build form with useForm() hook
    const { register , handleSubmit , reset , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(formOptions);
    const { errors  } = formState;
    function onSubmit(data) {
        return isAddMode ? createUser(data) : updateUser(user.id, data);
    }
    function createUser(data) {
        return _services_userservice__WEBPACK_IMPORTED_MODULE_6__/* .userService.register */ .W.register(data).then(()=>{
            _services_alertservicenew__WEBPACK_IMPORTED_MODULE_7__/* .alertService.success */ .A.success('User added', {
                keepAfterRouteChange: true
            });
            router.push('.');
        }).catch(_services_alertservicenew__WEBPACK_IMPORTED_MODULE_7__/* .alertService.error */ .A.error);
    }
    function updateUser(id, data) {
        return _services_userservice__WEBPACK_IMPORTED_MODULE_6__/* .userService.update */ .W.update(id, data).then(()=>{
            _services_alertservicenew__WEBPACK_IMPORTED_MODULE_7__/* .alertService.success */ .A.success('User updated', {
                keepAfterRouteChange: true
            });
            router.push('..');
        }).catch(_services_alertservicenew__WEBPACK_IMPORTED_MODULE_7__/* .alertService.error */ .A.error);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "First Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "firstName",
                                type: "text",
                                ...register('firstName'),
                                className: `form-control ${errors.firstName ? 'is-invalid' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: (ref = errors.firstName) === null || ref === void 0 ? void 0 : ref.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Last Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "lastName",
                                type: "text",
                                ...register('lastName'),
                                className: `form-control ${errors.lastName ? 'is-invalid' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: (ref1 = errors.lastName) === null || ref1 === void 0 ? void 0 : ref1.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "username",
                                type: "text",
                                ...register('username'),
                                className: `form-control ${errors.username ? 'is-invalid' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: (ref2 = errors.email) === null || ref2 === void 0 ? void 0 : ref2.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-group col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "Password",
                                    !isAddMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        className: "ml-1",
                                        children: "(Leave blank to keep the same password)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "password",
                                type: "password",
                                ...register('password'),
                                className: `form-control ${errors.password ? 'is-invalid' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: (ref3 = errors.password) === null || ref3 === void 0 ? void 0 : ref3.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "submit",
                        disabled: formState.isSubmitting,
                        className: "btn btn-primary mr-2",
                        children: [
                            formState.isSubmitting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "spinner-border spinner-border-sm mr-1"
                            }),
                            "Save"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>reset(formOptions.defaultValues)
                        ,
                        type: "button",
                        disabled: formState.isSubmitting,
                        className: "btn btn-secondary",
                        children: "Reset"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* .Link */ .r, {
                        href: "/users",
                        className: "btn btn-link",
                        children: "Cancel"
                    })
                ]
            })
        ]
    }));
}

});

/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Layout({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: children
        })
    }));
}


/***/ })

};
;