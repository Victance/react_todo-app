(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n.n(c),r=(n(18),n(19),n(20),n(0)),o=n(7),s=n(2),i=n(6),l=n(13),u=n(5),d=n(4),j=n.n(d),p="https://mate.academy/students-api",f=function(){return fetch("".concat(p,"/todos?userId=30")).then((function(e){return e.json()}))},h=function(e){return fetch("".concat(p,"/todos/").concat(e),{method:"DELETE"})},b=function(e,t){return fetch(e,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},m=function(e,t){return b("".concat(p,"/todos/").concat(e),{completed:t})},O=n(10),x=n.n(O),v=n(1),y=function(e){return x()({selected:e.isActive})},g=function(e){var t=e.itemsLeft,n=e.todos,c=e.setTodos,a=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.filter((function(e){return e.completed})).map((function(e){return h(e.id)})));case 2:f().then(c);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("footer",{className:"footer",children:[Object(v.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(t," items left")}),Object(v.jsxs)("ul",{className:"filters",children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",className:y,children:"All"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/active",className:y,children:"Active"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/completed",className:y,children:"Completed"})})]}),t<n.length&&Object(v.jsx)("button",{type:"button",className:"clear-completed",onClick:a,children:"Clear completed"})]})},k=function(e){var t=e.todo,n=e.setTodos,c=Object(r.useState)(!1),a=Object(u.a)(c,2),o=a[0],s=a[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),O=d[0],y=d[1];Object(r.useEffect)((function(){y(t.title)}),[]);var g=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.id);case 2:f().then(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.id,!t.completed);case 2:f().then(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.length||g(),s(!1),c=t.id,a=O,b("".concat(p,"/todos/").concat(c),{title:a}),f().then(n);case 4:case"end":return e.stop()}var c,a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("li",{className:x()({completed:t.completed,editing:o}),children:o?Object(v.jsx)("input",{type:"text",className:"edit",value:O,autoFocus:!0,onBlur:function(){s(!1),t.title!==O&&N()},onKeyDown:function(e){"Enter"===e.key&&O===t.title&&s(!1),"Enter"===e.key&&N(),"Escape"===e.key&&(s(!1),y(t.title))},onChange:function(e){y(e.target.value)}}):Object(v.jsxs)("div",{className:"view",children:[Object(v.jsx)("input",{type:"checkbox",className:"toggle",checked:t.completed,id:"".concat(t.id),onChange:k}),Object(v.jsx)("label",{role:"presentation",onClick:function(){s(!0)},children:O}),Object(v.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo",onClick:g})]})})})},N=function(e){var t=e.todos,n=e.setTodos,c=e.itemsLeft,a=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==c&&c!==t.length){e.next=3;break}return e.next=3,Promise.all(t.map((function(e){return m(e.id,!e.completed)})));case 3:if(!(c<t.length)){e.next=6;break}return e.next=6,Promise.all(t.filter((function(e){return!e.completed})).map((function(e){return m(e.id,!e.completed)})));case 6:f().then(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("section",{className:"main",children:[Object(v.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all","data-cy":"toggleAll",checked:c>0,onChange:a}),Object(v.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(v.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:t.map((function(e){return Object(v.jsx)(k,{todo:e,setTodos:n},e.id)}))})]})},w=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(u.a)(a,2),d=o[0],h=o[1],b=Object(s.f)().pathname;Object(r.useEffect)((function(){f().then(h)}),[]);var m=function(){var e=Object(i.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.length){e.next=3;break}return e.abrupt("return");case 3:return a={title:n,id:Math.max.apply(Math,Object(l.a)(d.map((function(e){return e.id}))))+1,userId:30,completed:!1},e.next=6,r=a,fetch("".concat(p,"/todos"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}).then((function(e){return e.json()}));case 6:f().then(h),c("");case 8:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),O=d.filter((function(e){return!e.completed})).length,x=d;switch(b){case"/active":x=d.filter((function(e){return!e.completed}));break;case"/completed":x=d.filter((function(e){return e.completed}));break;default:x=d}return Object(v.jsxs)("div",{className:"todoapp",children:[Object(v.jsxs)("header",{className:"header",children:[Object(v.jsx)("h1",{children:"To-Dos"}),Object(v.jsx)("form",{onSubmit:m,children:Object(v.jsx)("input",{type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:n,onChange:function(e){c(e.target.value)}})})]}),Object(v.jsx)(g,{todos:x,itemsLeft:O,setTodos:h}),Object(v.jsx)(N,{todos:x,setTodos:h,itemsLeft:O})]})},T=function(){return Object(v.jsx)(o.a,{children:Object(v.jsxs)(s.d,{children:[Object(v.jsxs)(s.b,{path:"/",element:Object(v.jsx)(w,{}),children:[Object(v.jsx)(s.b,{path:":active",element:Object(v.jsx)(w,{})}),Object(v.jsx)(s.b,{path:":completed",element:Object(v.jsx)(w,{})})]}),Object(v.jsx)(s.b,{path:"/home",element:Object(v.jsx)(s.a,{to:"/",replace:!0})}),Object(v.jsx)(s.b,{path:"*",element:Object(v.jsx)("h1",{children:"Page not found"})})]})})};a.a.render(Object(v.jsx)(T,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.10d460c7.chunk.js.map