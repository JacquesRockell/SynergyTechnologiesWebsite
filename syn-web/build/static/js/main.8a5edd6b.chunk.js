(this["webpackJsonpsyn-web"]=this["webpackJsonpsyn-web"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),r=a(17),l=a.n(r),n=(a(38),a(8)),s=a(9),o=a(11),u=a(10),d=(a(39),a(7)),m=a(18),j=a.n(m),h=a(6),p=a(14),b=a(15),x=a(57),O=a(56),v=(a(50),a(13)),g=a(16),f=a.p+"static/media/synlogo.bfa65f3a.png",C=a.p+"static/media/Clouds.87a790b7.jpg",w=a.p+"static/media/net-security.8a9358d7.jpg",y=a.p+"static/media/techroadmap.364a1083.jpg",N=a.p+"static/media/laptop.4a1840aa.jpg",k=a.p+"static/media/continuity.c2faef50.jpg",E=a.p+"static/media/support.76e6c168.jpg",q=a.p+"static/media/team.c0859cb5.png",L=a.p+"static/media/community.631bb9a1.jpg",A=a(58),T=a(0);h.a.use([v.a,p.a,b.a,g.a]);var z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={FormOpen:!1,CardExpanded:!1,isOpen:!1,cardNum:0,infoCardTitle:["YOUR CLOUD STRATEGY","Technology To Enable Your Organisation","TECHNOLOGY ROAD MAP","Procurement","Business Continuity Essentials","Supporting Your Business"],infoCardContent:["Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.","Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.","Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.","Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.","Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.","Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."]},e.vantaRef=c.a.createRef(),e.hamRef=c.a.createRef(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.vantaEffect=j()({el:this.vantaRef.current,mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,shininess:24,waveHeight:5,waveSpeed:.7,color:328965})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"cardClick",value:function(e){this.setState({cardNum:e}),this.setState({CardExpanded:!this.state.CardExpanded})}},{key:"toggleHamburger",value:function(){console.log("toggle"),this.setState({isOpen:!this.state.isOpen})}},{key:"toggleContact",value:function(){this.setState({FormOpen:!this.state.FormOpen})}},{key:"formSend",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e,t=this;return Object(T.jsxs)("div",{className:"no-scroll",children:[Object(T.jsx)("div",{onClick:function(e){return t.cardClick()},className:this.state.CardExpanded?"infocard expanded":"infocard",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:this.state.infoCardTitle[this.state.cardNum]}),Object(T.jsx)("p",{children:this.state.infoCardContent[this.state.cardNum]})]})}),Object(T.jsxs)("div",{className:this.state.FormOpen?"contact-form form-open":"contact-form",children:[Object(T.jsx)("div",{onClick:function(){return t.toggleContact()},className:"click-mask"}),Object(T.jsxs)("form",{onSubmit:this.formSend,children:[Object(T.jsx)("h1",{children:"Contact Us"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"var(--dark-grey)",class:"bi bi-person",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),Object(T.jsx)("input",{placeholder:"Name"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"var(--dark-grey)",class:"bi bi-envelope",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})}),Object(T.jsx)("input",{placeholder:"Email"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"var(--dark-grey)",class:"bi bi-telephone",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})}),Object(T.jsx)("input",{placeholder:"Phone"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"var(--dark-grey)",class:"bi bi-people",viewBox:"0 0 16 16",children:Object(T.jsx)("path",{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"})}),Object(T.jsx)("input",{placeholder:"Company"})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"var(--dark-grey)",class:"bi bi-journal-text",viewBox:"0 0 16 16",children:[Object(T.jsx)("path",{d:"M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"}),Object(T.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(T.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]}),Object(T.jsxs)("select",{placeholder:"Enquiry",children:[Object(T.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Enquiry"}),Object(T.jsx)("option",{children:"General"}),Object(T.jsx)("option",{children:"Ticket"}),Object(T.jsx)("option",{children:"Jobs"})]})]}),Object(T.jsx)("textarea",{placeholder:"Message"}),Object(T.jsx)("button",{children:"SEND"})]})]}),Object(T.jsx)("header",{id:"headerId",className:this.props.scroll?"bg":"",children:Object(T.jsxs)("nav",{children:[Object(T.jsx)("div",{class:"logo",children:Object(T.jsx)("a",{children:Object(T.jsx)("img",{src:f})})}),Object(T.jsx)(A.a,{onToggle:function(){return t.toggleHamburger()},toggled:this.state.isOpen,size:40,color:"#fff"})]})}),Object(T.jsx)("div",{className:this.state.isOpen?"menu menu-open":"menu",children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"/#home",onClick:function(){return t.toggleHamburger()},children:"Home"})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"/#services",onClick:function(){return t.toggleHamburger()},children:"Services"})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"/#aboutus",onClick:function(){return t.toggleHamburger()},children:"About Us"})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"/#careers",onClick:function(){return t.toggleHamburger()},children:"Careers"})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"#",onClick:function(){t.toggleHamburger(),t.toggleContact()},children:"Contact"})}),Object(T.jsx)("li",{children:Object(T.jsx)("p",{children:"synergyemail@synergy.com | 022 011 211 | 25 Somthing St"})})]})}),Object(T.jsx)("div",{id:"Hero",ref:this.vantaRef,children:Object(T.jsxs)(x.a,(e={speed:500,hashNavigation:{watchState:!0},mousewheel:!0,allowTouchMove:!1,pagination:!0},Object(d.a)(e,"pagination",{clickable:!0}),Object(d.a)(e,"navigation",!0),Object(d.a)(e,"children",[Object(T.jsx)(O.a,{"data-hash":"home",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:"EXTEND AND ENABLE YOUR IT TEAM"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience? We\u2019ll work along side your organisation to reach your objectives faster with our flexible approach."}),Object(T.jsxs)("div",{children:[Object(T.jsx)("a",{href:"#",onClick:function(e){return t.toggleContact()},className:"btn-contact",children:"Contact"}),Object(T.jsx)("a",{href:"#",className:"btn-customerportal",children:"Customer Portal"})]})]})}),Object(T.jsx)(O.a,{"data-hash":"services",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:"SERVICES"}),Object(T.jsxs)("div",{className:"services",children:[Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(0)},children:[Object(T.jsx)("img",{src:C}),Object(T.jsxs)("div",{id:"sc-div-id-2",children:[Object(T.jsx)("h1",{id:"sc-header-id-1",children:"Your Cloud Strategy"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]}),Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(1)},children:[Object(T.jsx)("img",{src:w}),Object(T.jsxs)("div",{id:"sc-div-id-2",children:[Object(T.jsx)("h1",{id:"sc-header-id-1",children:"Technology To Enable Your Organisation"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]}),Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(2)},children:[Object(T.jsx)("img",{src:y}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Technology Roadmap"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]}),Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(3)},children:[Object(T.jsx)("img",{src:N}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Procurement"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]}),Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(4)},children:[Object(T.jsx)("img",{src:k}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Business Continuity Essentials"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]}),Object(T.jsxs)("div",{className:"service-card-v2",onClick:function(e){return t.cardClick(5)},children:[Object(T.jsx)("img",{src:E}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Supporting Your Business"}),Object(T.jsx)("p",{children:"Already have an IT Team in place, but want to leverage our capacity and experience?"}),Object(T.jsx)("a",{className:"view-btn",children:"VIEW MORE"})]})]})]})]})}),Object(T.jsx)(O.a,{"data-hash":"aboutus",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:"About Us"}),Object(T.jsxs)("div",{className:"about-us",children:[Object(T.jsx)("div",{className:"flip-card",children:Object(T.jsxs)("div",{className:"flip-card-inner",children:[Object(T.jsxs)("div",{className:"flip-card-front",children:[Object(T.jsx)("img",{src:q}),Object(T.jsx)("h1",{children:"Our Team"})]}),Object(T.jsxs)("div",{className:"flip-card-back",children:[Object(T.jsx)("h1",{children:"Our Team"}),Object(T.jsx)("p",{children:"Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. "})]})]})}),Object(T.jsx)("div",{className:"flip-card",children:Object(T.jsxs)("div",{className:"flip-card-inner",children:[Object(T.jsxs)("div",{className:"flip-card-front",children:[Object(T.jsx)("img",{src:L}),Object(T.jsx)("h1",{children:"Our Community"})]}),Object(T.jsxs)("div",{className:"flip-card-back yellow-bg",children:[Object(T.jsx)("h1",{children:"Our Community"}),Object(T.jsx)("p",{children:"Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. "})]})]})})]})]})})]),e))})]})}}]),a}(i.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{id:"page",children:Object(T.jsx)(z,{})})}}]),a}(c.a.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),i(e),c(e),r(e),l(e)}))};l.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(S,{})}),document.getElementById("root")),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.8a5edd6b.chunk.js.map