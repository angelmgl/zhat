(this.webpackJsonpzhat=this.webpackJsonpzhat||[]).push([[0],{91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(16),c=a.n(n),r=a(4),i=a(9),l=a(7),o=a(24),u=a(1),d=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],c=a[1],r=e.chatId,d=e.creds,m=document.getElementById("message-input"),j=document.getElementById("text-input"),b=document.getElementById("submit-button"),h=function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(i.i)(d,r,{text:t}),c(""),m.innerText=""};return Object(u.jsxs)("form",{className:"message-form",onSubmit:h,children:[Object(u.jsx)("label",{htmlFor:"upload-button",children:Object(u.jsx)("span",{className:"image-button",children:Object(u.jsx)(o.a,{className:"picture-icon"})})}),Object(u.jsx)("div",{className:"message-input",id:"message-input",contentEditable:"true","data-text":"Escribe un mensaje...",onInput:function(){j.value=m.innerText,c(j.value),m.addEventListener("keyup",(function(e){13===e.keyCode&&b.click()})),Object(i.f)(e,r)}}),Object(u.jsx)("input",{id:"text-input",onSubmit:h,style:{display:"none"}}),Object(u.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(i.i)(d,r,{files:e.target.files,text:""})}}),Object(u.jsx)("button",{type:"submit",id:"submit-button",className:"send-button",children:Object(u.jsx)(o.b,{className:"send-icon"})})]})},m=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(u.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(u.jsx)("div",{className:"my-message",children:a.text})},j=function(e){var t,a,s=e.lastMessage,n=e.message,c=!s||s.sender.username!==n.sender.username;return Object(u.jsxs)("div",{className:"message-row",children:[c&&Object(u.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===n||void 0===n||null===(t=n.sender)||void 0===t?void 0:t.avatar,")")}}),(null===n||void 0===n||null===(a=n.attachments)||void 0===a?void 0:a.length)>0?Object(u.jsx)("img",{src:n.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:c?"10px":"48px"}}):Object(u.jsx)("div",{className:"their-message",style:{marginLeft:c?"10px":"48px"},children:n.text})]})},b=function(e){var t=e.chats,a=e.activeChat,s=e.userName,n=e.messages,c=t&&t[a],i=function(e,t){return c.people.map((function(a,s){var n;return a.last_read===e.id&&Object(u.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(n=a.person)||void 0===n?void 0:n.avatar,")")}},"read_".concat(s))}))},l=function(){var e=document.getElementById("chat-feed");e.scrollTop=e.scrollHeight};return c?Object(u.jsxs)("div",{className:"chat-feed",id:"chat-feed",children:[Object(u.jsxs)("div",{className:"chat-title-container",children:[Object(u.jsx)("div",{className:"chat-title",children:null===c||void 0===c?void 0:c.title}),Object(u.jsx)("div",{className:"chat-subtitle",children:c.people.map((function(e){return"".concat(e.person.username," ")}))})]}),function(){var e=Object.keys(n);return e.map((function(t,a){var c=n[t],r=0===a?null:e[a-1],o=s===c.sender.username;return Object(u.jsx)("div",{style:{width:"100%"},children:Object(u.jsxs)("div",{className:"message-block",children:[o?Object(u.jsx)(m,{message:c}):Object(u.jsx)(j,{message:c,lastMessage:n[r]}),Object(u.jsx)("div",{className:"read-receipts",style:{marginRight:o?"18px":"0px",marginLeft:o?"0px":"18px"},children:i(c,o)}),l()]})},"msg_".concat(a))}))}(),Object(u.jsx)("div",{className:"space"}),Object(u.jsx)("div",{className:"message-form-container",children:Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."},h=a(23),p=a.n(h),g=a(43),x=a(2),v=a.n(x),O=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(l.a)(c,2),i=r[0],o=r[1],d=Object(s.useState)(""),m=Object(l.a)(d,2),j=m[0],b=m[1],h=function(){var e=Object(g.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"a535e95b-8fbb-46fd-b164-46d3e687cd44","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,v.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),b("Pone bien tus datos ctm");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("h1",{className:"title",children:"ZHAT"}),Object(u.jsxs)("form",{onSubmit:h,children:[Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"input",placeholder:"Nombre de usuario",required:!0}),Object(u.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Contrase\xf1a",required:!0}),Object(u.jsxs)("div",{align:"center",children:[Object(u.jsx)("button",{type:"submit",className:"button",children:Object(u.jsx)("span",{children:"Entrar al Zhat"})}),Object(u.jsx)("h2",{className:"error",children:j})]})]})]})})},f=(a(91),function(){return localStorage.getItem("username")?Object(u.jsx)(i.a,{height:"100vh",projectID:"a535e95b-8fbb-46fd-b164-46d3e687cd44",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(u.jsx)(b,Object(r.a)({},e))}}):Object(u.jsx)(O,{})});c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.2d018f21.chunk.js.map