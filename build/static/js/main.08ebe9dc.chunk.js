(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1DjEd",modal:"ErrorModal_modal__2Aqeb",header:"ErrorModal_header__1Z8PU",content:"ErrorModal_content__2BzBH",actions:"ErrorModal_actions__23bf4"}},,,,,function(e,t,n){e.exports={card:"Card_card__3A6cb"}},function(e,t,n){e.exports={input:"AddNewUser_input__1UAki"}},function(e,t,n){e.exports={button:"Button_button__1vxrC"}},function(e,t,n){e.exports={users:"StoredUsers_users__7GTkn"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),c=n.n(a),s=(n(17),n(12)),o=n(2),i=n(8),l=n.n(i),d=n(0);var u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=n(10),h=n.n(m);var O=function(e){return Object(d.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},x=n(3),f=n.n(x);var p=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:f.a.backdrop,onClick:e.onConfirmError}),Object(d.jsxs)(u,{className:f.a.modal,children:[Object(d.jsx)("header",{className:f.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:f.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:f.a.actions,children:Object(d.jsx)(O,{onClick:e.onConfirmError,children:"Okay"})})]})]})};var _=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],m=Object(r.useState)(),h=Object(o.a)(m,2),x=h[0],f=h[1];return Object(d.jsxs)(d.Fragment,{children:[x&&Object(d.jsx)(p,{title:x.title,message:x.message,onConfirmError:function(){f(null)}}),Object(d.jsx)(u,{className:b.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0!==a.trim().length&&0!==l.trim().length)if(+l<1)f({title:"Invalid age",message:"Please enter a valid age."});else{var n={id:Math.random().toString(),name:a,age:l};e.onAdd(n),c(""),j("")}else f({title:"Invalid input",message:"Please enter your information."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",onChange:function(e){c(e.target.value)},value:a}),Object(d.jsx)("label",{htmlFor:"age",children:"Age"}),Object(d.jsx)("input",{id:"age",type:"number",onChange:function(e){j(e.target.value)},value:l}),Object(d.jsx)(O,{type:"submit",children:"Add"})]})})]})},g=n(11),v=n.n(g);var k=function(e){var t=e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name,", ",e.age," years old"]},e.id)}));return Object(d.jsxs)(u,{className:v.a.users,children:[Object(d.jsx)("ul",{children:t}),";"]})};var C=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{onAdd:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(d.jsx)(k,{users:n})]})};c.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.08ebe9dc.chunk.js.map