(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hearts.696b195c.png"},function(e,t,a){e.exports=a.p+"static/media/surprise.5051d332.png"},function(e,t,a){e.exports=a.p+"static/media/sweden.6413fcd6.png"},function(e,t,a){e.exports=a.p+"static/media/united-kingdom.6f382b2d.png"},function(e,t,a){e.exports=a.p+"static/media/sleep.6405cfbc.png"},function(e,t,a){e.exports=a.p+"static/media/toastmasters.af844554.png"},function(e,t,a){e.exports=a.p+"static/media/saturday.b16c2f8f.png"},function(e,t,a){e.exports=a.p+"static/media/aah.f09ff199.png"},function(e,t,a){e.exports=a.p+"static/media/love.f5db2a5e.png"},,function(e,t,a){e.exports=a(34)},,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),l=a(3),c=a(4),o=a(8),m=a(5),d=a(7),u=a(1);a(29),a(30);function h(e){return r.a.createElement("div",null,r.a.createElement("section",{id:e.section,className:"sec p-4 m-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 "+(e.right?"order-md-2":"order-md-1")},r.a.createElement("h3",{className:"pb-1 "},e.title),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:"col-md-4 "+(e.right?"order-md-1":"order-md-2")},e.img))))}function p(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:"Could not find"}))}function g(){return r.a.createElement("div",null,r.a.createElement("div",{className:"embed-responsive-1by1"},r.a.createElement("iframe",{className:"img-fluid",title:"titel",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d68225.40056133762!2d12.176563716595503!3d57.698656631047854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad0d978d525e9826!2sChalmersbastun!5e0!3m2!1sen!2sus!4v1551516535250",frameBorder:"0",allowFullScreen:!0},"Something else")))}var b=a(22),f=a(6),v=a(9),E=a.n(v),k=a(2),w=a(12);function y(e){return r.a.createElement("div",{className:"py-1"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"submit",className:" btn btn-outline-success btn-block btn-lg ",value:"Skicka!"}))))}function j(e){return e.show&&r.a.createElement("div",{className:"form-row justify-content-md-center mb-1"},r.a.createElement("div",{className:"btn-group btn-group-toggle btn-block btn-sm"},r.a.createElement("label",{className:"btn btn-outline-success "+(e.person.isAttending?" active":"")},r.a.createElement("input",{type:"radio",id:"attendingButton"+e.person.id,checked:e.person.isAttending,onChange:function(t){e.handleChange(e.person.id,"isAttending",!0),t.preventDefault()}}),"Jag kommer!"),r.a.createElement("label",{className:"btn btn-outline-danger "+(e.person.isAttending?"":"active ")},r.a.createElement("input",{type:"radio",id:"notAttendingButton"+e.person.id,checked:!e.person.isAttending,onChange:function(t){e.handleChange(e.person.id,"isAttending",!1),t.preventDefault()}}),"Tyv\xe4rr inte")))}function N(e){return e.show&&r.a.createElement("div",{key:e.id,className:"form-row"},r.a.createElement("input",{id:e.name+e.id,type:e.type,name:e.name,className:"form-control",placeholder:e.placeholder,value:e.value,onChange:function(t){e.handleChange(e.id,e.name,t.target.value),t.preventDefault()},required:e.required,autoComplete:"off",onInvalid:function(t){return t.target.setCustomValidity("Fyll i  ".concat(e.placeholder.toLowerCase().replace("...","")," h\xe4r"))},onInput:function(e){return e.target.setCustomValidity("")}}))}function x(e){return r.a.createElement("div",{className:"form-group person-form p-3 mt-1 mb-2"},r.a.createElement(j,{person:e.person,handleChange:e.handleChange,show:!0}),r.a.createElement(N,{id:e.person.id,type:"text",name:"name",placeholder:"F\xf6rnamn...",value:e.person.name,handleChange:e.handleChange,show:!0,required:!0}),r.a.createElement(N,{id:e.person.id,type:"text",name:"surname",placeholder:"Efternamn...",value:e.person.surname,handleChange:e.handleChange,show:!0,required:!0}),r.a.createElement(N,{id:e.person.id,type:"text",name:"email",placeholder:"Email...",value:e.person.email,handleChange:e.handleChange,show:e.person.isAttending&&1===e.person.id,required:e.person.isAttending&&1===e.person.id}),r.a.createElement(N,{id:e.person.id,type:"text",name:"diet",placeholder:"Specialkost...",value:e.person.diet,handleChange:e.handleChange,show:e.person.isAttending,required:!1}),r.a.createElement(N,{id:e.person.id,type:"text",name:"comments",placeholder:"\xd6vriga Kommentarer...",value:e.person.comments,handleChange:e.handleChange,show:1===e.person.id,required:!1}))}function C(e){return r.a.createElement("div",{className:"form-row px-1 justify-content-center my-2"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h5",{className:"text-center"},"Anm\xe4l fler personer")),r.a.createElement("div",{className:"col ml-auto"},r.a.createElement("div",{className:"btn-group-toggle"},r.a.createElement("label",{className:"cur btn btn-outline-white "},r.a.createElement("input",{type:"checkbox",autoComplete:"off",onClick:e.addPerson}),r.a.createElement("i",{className:"fa fa-plus"})))),r.a.createElement("div",{className:"col justify-content-center"},r.a.createElement("div",{className:"btn-group-toggle"},r.a.createElement("label",{className:"cur btn btn-outline-white "},r.a.createElement("input",{type:"checkbox",autoComplete:"off",onClick:e.removePerson}),r.a.createElement("i",{className:"fa fa-minus"})))))}var O=a(13),A=a.n(O),S=a(14),P=a.n(S);function L(){return r.a.createElement("div",{className:"text-center my-4"},r.a.createElement("div",{className:"spinner-grow text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}var H={submitted:"none",persons:[{isAttending:!0,id:1,name:"",surname:"",diet:"",sleepFri:!1,sleepSat:!1,email:"",comments:""}]},V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=H,a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.addPerson=a.addPerson.bind(Object(u.a)(Object(u.a)(a))),a.removePerson=a.removePerson.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(){var e=Object(w.a)(E.a.mark(function e(t){var a,n,r,s,i,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.setState(Object(k.a)({},this.state,{submitted:"pending"})),a="https://script.google.com/macros/s/AKfycbznWL2A-dRgzL-HGPDhYKjoA7UpAVCI6JHaiHRxNYIwE4UcgIg/exec",n=0;case 4:if(!(n<this.state.persons.length)){e.next=25;break}for(s in r=new FormData,this.state.persons[n])r.append(s,this.state.persons[n][s]);return r.append("submittingPerson",this.state.persons[0].name),e.prev=8,e.next=11,fetch(a,{method:"POST",body:r});case 11:return i=e.sent,e.next=14,i.json();case 14:l=e.sent,console.log(l),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(8),this.setState(Object(k.a)({},this.state,{submitted:"error"})),e.abrupt("return");case 22:n++,e.next=4;break;case 25:this.setState(H),this.setState(Object(k.a)({},this.state,{submitted:"success"}));case 27:case"end":return e.stop()}},e,this,[[8,18]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t,a){this.setState(Object(k.a)({},this.state,{persons:this.state.persons.map(function(n){return e===n.id?Object(k.a)({},n,Object(f.a)({},t,a)):n})}))}},{key:"addPerson",value:function(){this.setState(Object(k.a)({},this.state,{persons:[].concat(Object(b.a)(this.state.persons),[Object(k.a)({},H.persons[0],{id:this.state.persons.length+1})])}))}},{key:"removePerson",value:function(){var e=this;this.state.persons.length>1?this.setState(Object(k.a)({},this.state,{persons:this.state.persons.filter(function(t){return t.id!==e.state.persons.length})})):this.setState(H)}},{key:"render",value:function(){var e,t=this,a=r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center mb-4"},"Anm\xe4l dig!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},this.state.persons.map(function(e){return r.a.createElement(x,{key:e.id,handleChange:t.handleChange,person:e})}),r.a.createElement(C,{addPerson:this.addPerson,removePerson:this.removePerson}),r.a.createElement(y,null))))),n=r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center mb-4"},"Tack s\xe5 mycket!"),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(p,{img:A.a})))),s=r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center mb-4"},"Woops, n\xe5got gick fel!"),r.a.createElement("h5",null,"Prova lite igen lite senare eller skicka ett email till antonstenaxel@gmail.com"),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(p,{img:P.a}))));switch(this.state.submitted){case"pending":e=r.a.createElement(L,null);break;case"error":e=s;break;case"success":e=n;break;default:e=a}return r.a.createElement("div",null,r.a.createElement("section",{id:this.props.section,className:"sec p-4 m-3"},e))}}]),t}(n.Component),F=a(15),I=a.n(F),q=a(16),D=a.n(q);function T(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"language-btn",type:"button",onClick:e.changeLanguage},r.a.createElement("img",{className:"flag-icon",src:e.swedish?D.a:I.a,alt:""})))}var B=a(17),W=a.n(B),K=a(18),G=a.n(K),J=a(19),z=a.n(J),M=a(20),R=a.n(M),U=a(21),Y=a.n(U),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={swedish:!0},a.changeLanguage=a.changeLanguage.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeLanguage",value:function(){this.setState({swedish:!this.state.swedish})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container main-feed p-1 pt-4"},r.a.createElement(T,{changeLanguage:this.changeLanguage,swedish:this.state.swedish}),r.a.createElement(h,{section:"start",title:this.state.swedish?"V\xe4lkomna p\xe5 br\xf6llop!":"Welcome to our wedding!",text:"S\xe5 roligt att du hittat hit och vill vara med och fira oss!  ",img:r.a.createElement(p,{img:Y.a}),right:!1}),r.a.createElement(h,{section:"info",title:"Information",text:"Kl\xe4dkod: Ta p\xe5 dig n\xe5got som du k\xe4nner dig bekv\xe4m och fin i! G\xe5vor: Vi har redan allt vi beh\xf6ver, s\xe5 g\xe5vor undanbedes. Vi tar g\xe4rna emot ett ekonomiskt bidrag, dr\xf6mmen om ett torp lever kvar! ",img:r.a.createElement(p,{img:R.a}),right:!0}),r.a.createElement(h,{section:"weddingday",title:"Br\xf6llopsdagen",text:"Vi kommer att vigas utomhus (vid bra v\xe4der) vid sj\xf6n intill festlokalen. Vigseln kommer att ske kl. 16 den 20 juli 2019. D\xe4refter sk\xe5lar vi och minglar en stund innan middagen kl. 18. ",img:r.a.createElement(p,{img:z.a}),right:!1}),r.a.createElement(h,{section:"toast",title:"Tal och andra framtr\xe4danden",text:"Vi vill hemskt g\xe4rna att ni h\xe5ller tal, sjunger s\xe5nger, spelar teater eller bjuder in till quiz. F\xf6r att anm\xe4la dig, skicka en detaljerad beskrivning av vad du vill framf\xf6ra till v\xe5ra toastmasters Karl-Oskar och Pontus p\xe5 EMAIL. Vi ser fram emot ditt framf\xf6rande! ",img:r.a.createElement(p,{img:G.a}),right:!0}),r.a.createElement(h,{section:"find",title:"Hitta Hit",text:"Vid Chalmersv\xe4gen 11, 438 92, H\xe4rryda. F\xf6r den som \xe5ker kollektivt:  F\xf6r den som \xe5ker bil:  Chalmersbastun ligger ca 30 minuters bilf\xe4rd fr\xe5n g\xf6teborg. Parkering finns i n\xe4rheten.  Har du ingen tillg\xe5ng till bil? Maila oss p\xe5 HASHTAG@mail och m\xe4rk mailet skjuts s\xe5 ska vi f\xf6rs\xf6ka hj\xe4lpa till!  ",img:r.a.createElement(g,null),right:!1}),r.a.createElement(h,{section:"sleep",title:"\xd6vernattning",text:"P\xe5 chalmersbastuns omr\xe5de finns tre sovsalar med flera s\xe4ngar f\xf6r den som vill \xf6vernatta. Om du vill boka en s\xe4ngplats p\xe5 omr\xe5det kan du maila HASHTAG@email, m\xe4rk mailet \xf6vernattning.  kostnad: I n\xe4rheten finns \xe4ven  Flygplatshotellet Landvetter bed and breakfast Landvetter airport hotel Hellsn\xe4s  Wendelsbergs hotel Samt en m\xe4ngd andra hotell inne i g\xf6teborg ",img:r.a.createElement(p,{img:W.a}),right:!0}),r.a.createElement(V,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,1,2]]]);
//# sourceMappingURL=main.4363690f.chunk.js.map