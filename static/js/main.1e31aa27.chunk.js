(this["webpackJsonpmk-contact-form"]=this["webpackJsonpmk-contact-form"]||[]).push([[0],{39:function(e,a,t){e.exports=t(50)},44:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),c=t.n(i),o=(t(44),t(12)),s=t(22),m=t.n(s),l=t(27),u=t(25),h=t(14),d=t(31),p=t(32),g=t(34),f=t(86),v=t(87),E=t(89),b=t(4),w=t(84),y=t(90),N=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={userName:"",email:"",message:""},t.handleSubmit=function(){var e=Object(l.a)(m.a.mark((function e(a){var n,r,i,c,o,s,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){return(u=Object(l.a)(m.a.mark((function e(){var a,t,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(a,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(){return u.apply(this,arguments)},n=t.state,r=n.userName,i=n.email,c=n.message,e.prev=3,e.next=6,s("https://1u5leuz6gg.execute-api.us-west-2.amazonaws.com/prod/submit",{userName:r,email:i,message:c});case 6:o=e.sent,console.log(JSON.stringify(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(a){return e.apply(this,arguments)}}(),t.handleChange=function(e){return function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(o.a)({},n,r))}},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state;a.userName,a.email,a.message;return r.a.createElement("div",{className:e.container},r.a.createElement(y.a,null),r.a.createElement(w.a,{variant:"h4",align:"center",component:"h1",gutterBottom:!0},"Contact Form".toUpperCase()),r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement("form",{id:"contact-form",className:e.contactForm,onSubmit:this.handleSubmit},r.a.createElement(f.a,{item:!0},r.a.createElement(v.a,{fullWidth:!0,required:!0,id:"name",label:"Name",name:"userName",className:e.inputField,onChange:this.handleChange("userName"),margin:"normal"})),r.a.createElement(f.a,{item:!0},r.a.createElement(v.a,{fullWidth:!0,required:!0,id:"email",label:"Email",name:"email",className:e.inputField,onChange:this.handleChange("email"),margin:"normal"})),r.a.createElement(f.a,{item:!0},r.a.createElement(v.a,{fullWidth:!0,required:!0,id:"message",label:"Message",name:"message",className:e.inputField,onChange:this.handleChange("message"),margin:"normal",multiline:!0,rowsMax:"4"})),r.a.createElement(f.a,{container:!0,direction:"row",spacing:2,style:{marginTop:20,alignItems:"right"}},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{className:e.formButton,type:"reset",variant:"contained",color:"default"},"RESET")),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{className:e.formButton,type:"submit",variant:"contained",color:"primary"},"Submit")))))))}}]),a}(n.Component),j=Object(b.a)({contactForm:{marginTop:50,width:"60vh"}})(N);t(49);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1e31aa27.chunk.js.map