(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{9225:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/add",function(){return r(8158)}])},2565:function(e,s,r){"use strict";r.d(s,{A:function(){return f}});var n=r(5893),a=r(1163),i=r(2287),t=r(5496),c=r(4231),l=r(6253),o=r(8704),u=r(9847);function d(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function m(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(s){d(e,s,r[s])}))}return e}function f(e){var s,r,d,f,v=function(e){return o.W.register(e).then((function(){u.A.success("User added",{keepAfterRouteChange:!0}),N.push(".")})).catch(u.A.error)},h=function(e,s){return o.W.update(e,s).then((function(){u.A.success("User updated",{keepAfterRouteChange:!0}),N.push("..")})).catch(u.A.error)},p=null===e||void 0===e?void 0:e.user,b=!p,N=(0,a.useRouter)(),j=c.Ry().shape({firstName:c.Z_().required("First Name is required"),lastName:c.Z_().required("Last Name is required"),username:c.Z_().required("Username is required"),password:c.Z_().transform((function(e){return""===e?void 0:e})).concat(b?c.Z_().required("Password is required"):null).min(6,"Password must be at least 6 characters")}),x={resolver:(0,t.X)(j)};b||(x.defaultValues=e.user);var w=(0,i.cI)(x),g=w.register,y=w.handleSubmit,_=w.reset,k=w.formState,A=k.errors;return(0,n.jsxs)("form",{onSubmit:y((function(e){return b?v(e):h(p.id,e)})),children:[(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col",children:[(0,n.jsx)("label",{children:"First Name"}),(0,n.jsx)("input",m({name:"firstName",type:"text"},g("firstName"),{className:"form-control ".concat(A.firstName?"is-invalid":"")})),(0,n.jsx)("div",{className:"invalid-feedback",children:null===(s=A.firstName)||void 0===s?void 0:s.message})]}),(0,n.jsxs)("div",{className:"form-group col",children:[(0,n.jsx)("label",{children:"Last Name"}),(0,n.jsx)("input",m({name:"lastName",type:"text"},g("lastName"),{className:"form-control ".concat(A.lastName?"is-invalid":"")})),(0,n.jsx)("div",{className:"invalid-feedback",children:null===(r=A.lastName)||void 0===r?void 0:r.message})]})]}),(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col",children:[(0,n.jsx)("label",{children:"Username"}),(0,n.jsx)("input",m({name:"username",type:"text"},g("username"),{className:"form-control ".concat(A.username?"is-invalid":"")})),(0,n.jsx)("div",{className:"invalid-feedback",children:null===(d=A.email)||void 0===d?void 0:d.message})]}),(0,n.jsxs)("div",{className:"form-group col",children:[(0,n.jsxs)("label",{children:["Password",!b&&(0,n.jsx)("em",{className:"ml-1",children:"(Leave blank to keep the same password)"})]}),(0,n.jsx)("input",m({name:"password",type:"password"},g("password"),{className:"form-control ".concat(A.password?"is-invalid":"")})),(0,n.jsx)("div",{className:"invalid-feedback",children:null===(f=A.password)||void 0===f?void 0:f.message})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("button",{type:"submit",disabled:k.isSubmitting,className:"btn btn-primary mr-2",children:[k.isSubmitting&&(0,n.jsx)("span",{className:"spinner-border spinner-border-sm mr-1"}),"Save"]}),(0,n.jsx)("button",{onClick:function(){return _(x.defaultValues)},type:"button",disabled:k.isSubmitting,className:"btn btn-secondary",children:"Reset"}),(0,n.jsx)(l.r,{href:"/users",className:"btn btn-link",children:"Cancel"})]})]})}},2822:function(e,s,r){"use strict";r.d(s,{A:function(){return a}});var n=r(5893);function a(e){var s=e.children;return(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)("div",{className:"container",children:s})})}},8158:function(e,s,r){"use strict";r.r(s);var n=r(5893),a=r(2822),i=r(2565);s.default=function(){return(0,n.jsxs)(a.A,{children:[(0,n.jsx)("h1",{children:"Add User"}),(0,n.jsx)(i.A,{})]})}}},function(e){e.O(0,[978,774,888,179],(function(){return s=9225,e(e.s=s);var s}));var s=e.O();_N_E=s}]);