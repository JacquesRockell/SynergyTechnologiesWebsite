(this["webpackJsonpsyn-web"]=this["webpackJsonpsyn-web"]||[]).push([[0],{57:function(e,t,i){},58:function(e,t,i){},84:function(e,t,i){"use strict";i.r(t);var n,r=i(0),a=i.n(r),s=i(26),c=i.n(s),o=(i(57),i(10)),l=i(11),u=i(13),d=i(12),h=(i(58),i(7)),j=i(4),m=(i(59),i(14)),b=i.n(m),p=i(18),f=i(27),x=i.n(f),O=i(1),g=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).state={Sleep:!1,Scrolling:!1,HeroTitleSlideNum:0,HeroTitleList:["Extend And Enable Your IT Team","Our Values At Synergy","What We Provide At Synergy","Our Comunity At Synergy"],Content:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Need that extra bit of IT support that your company currently does not have?"}),Object(O.jsx)("p",{children:"We can extend the support of your current IT team with our friendly online team that\u2019s ready to face any issue you can\u2019t currently solve, to get you back on the right track."})]}),Object(O.jsxs)("div",{className:"our-values",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("p",{children:"People"}),Object(O.jsx)("p",{children:"Always"}),Object(O.jsx)("p",{children:"Always"}),Object(O.jsx)("p",{children:"Always with"})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)("p",{children:"First"}),Object(O.jsx)("p",{children:"Listening"}),Object(O.jsx)("p",{children:"Learning"}),Object(O.jsx)("p",{children:"Integrity"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"What we provide at Synergy is a personal, local IT support experience with our tight knit team right here in New Zealand."}),Object(O.jsx)("p",{children:"We provide 24/7 online support and will send people from our team to your business for issues that can not be resolved online."})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"At Synergy, supporting our community is one of our biggest focuses."}),Object(O.jsx)("p",{children:"We do this by supporting our local charities, like Good Neighbor and Awhina house."}),Object(O.jsx)("p",{children:"We also get involved in events to help our community like our community clean up events."})]})],AnimationName:"enter",Fade:"in"},e.vantaRef=a.a.createRef(),e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.vantaEffect=x()({el:this.vantaRef.current,mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,shininess:28,waveHeight:8,waveSpeed:.25,color:131586})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"scrollDown",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.HeroTitleSlideNum<3&&!1===this.state.Sleep)){e.next=14;break}return this.setState({Sleep:!0}),this.setState({AnimationName:"exit"}),this.setState({Fade:"out"}),e.next=6,new Promise((function(e){return setTimeout(e,500)}));case 6:return this.setState({HeroTitleSlideNum:this.state.HeroTitleSlideNum+1}),this.setState({AnimationName:"enter"}),this.setState({Fade:"in"}),e.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:this.setState({Sleep:!1}),e.next=15;break;case 14:3==this.state.HeroTitleSlideNum&&(this.setState({Scrolling:!0}),this.props.toggleSroll(!0));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollUp",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.HeroTitleSlideNum>0&&!1===this.state.Sleep)){e.next=12;break}return this.setState({Sleep:!0}),this.setState({AnimationName:"exit"}),this.setState({Fade:"out"}),e.next=6,new Promise((function(e){return setTimeout(e,500)}));case 6:return this.setState({HeroTitleSlideNum:this.state.HeroTitleSlideNum-1}),this.setState({AnimationName:"enter"}),this.setState({Fade:"in"}),e.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:this.setState({Sleep:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollTo",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==this.state.Sleep||t==this.state.HeroTitleSlideNum){e.next=12;break}return this.setState({Sleep:!0}),this.setState({AnimationName:"exit"}),this.setState({Fade:"out"}),e.next=6,new Promise((function(e){return setTimeout(e,500)}));case 6:return this.setState({HeroTitleSlideNum:t}),this.setState({AnimationName:"enter"}),this.setState({Fade:"in"}),e.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:this.setState({Sleep:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onscroll",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.nativeEvent.wheelDelta<0&&!1===this.state.Sleep&&!1===this.state.Scrolling&&(3==this.state.HeroTitleSlideNum?(this.setState({Scrolling:!0}),this.props.toggleSroll(!0)):this.state.HeroTitleSlideNum<3&&this.scrollDown()),t.nativeEvent.wheelDelta>0&&!1===this.state.Sleep&&(!1===this.state.Scrolling&&this.state.HeroTitleSlideNum>0?this.scrollUp():0===window.scrollY&&(this.setState({Scrolling:!1}),this.props.toggleSroll(!1)));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{id:"Hero",ref:this.vantaRef,onWheel:function(t){return e.onscroll(t)},children:Object(O.jsxs)("div",{className:"hero-content-container",children:[Object(O.jsx)("div",{className:"hero-title-box ".concat(this.state.AnimationName),children:this.state.HeroTitleList[this.state.HeroTitleSlideNum]}),Object(O.jsx)("div",{className:"hero-content ".concat(this.state.Fade),children:this.state.Content[this.state.HeroTitleSlideNum]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollUp()},children:Object(O.jsx)("div",{className:"arrow-up"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollTo(0)},className:0===this.state.HeroTitleSlideNum?"active":"",children:"Your IT"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollTo(1)},className:1===this.state.HeroTitleSlideNum?"active":"",children:"Our Values"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollTo(2)},className:2===this.state.HeroTitleSlideNum?"active":"",children:"What we provide"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollTo(3)},className:3===this.state.HeroTitleSlideNum?"active":"",children:"Our Comunity"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"",onClick:function(){return e.scrollDown()},children:Object(O.jsx)("div",{className:"arrow-down"})})})]})]})})}}]),i}(r.Component),v=i.p+"static/media/synlogo.bfa65f3a.png",S=i(29),y=i(30).a.div(n||(n=Object(S.a)(["\n  position:  absolute;\n  top: 0;\n  margin-left: -2.5rem;\n  background: #00AEEF;\n  width:  100%;\n  height:  3px;\n  z-index:  10;\n\n  transform-origin: left;\n  transform: scaleX(",");\n  transition: all ease-out 150ms;\n"])),(function(e){return e.scroll})),N=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={HambugerToggle:!1,scrollPostion:0},e.listenToScrollEvent=function(){document.addEventListener("scroll",(function(){requestAnimationFrame((function(){e.calculateScrollDistance()}))}))},e.calculateScrollDistance=function(){var t=window.pageYOffset,i=window.innerHeight,n=e.getDocHeight()-i,r=Math.floor(t/n*100);e.setState({scrollPostion:r})},e.getDocHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("header",{id:"headerId",className:this.props.scroll?"bg":"",children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{class:"logo",children:Object(O.jsx)("a",{children:Object(O.jsx)("img",{src:v})})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/",children:"About Us"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/Careers",children:"Careers"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/Careers",children:"Contact"})})]}),Object(O.jsx)(h.b,{to:"/",className:"contact-btn",children:"Customer Portal"})]}),"   ",Object(O.jsx)(y,{scroll:this.state.scrollPostion+"%"})]})})}}]),i}(r.Component),T=i(34),w=i.n(T),k=(i(82),i(15)),H=i(87),C=i(86),A=(i(83),i(25)),E=i.p+"static/media/server.f5a2d1c2.png",P=i.p+"static/media/LaptopImg.2e97355c.jpg",L=i.p+"static/media/Clouds.87a790b7.jpg";k.a.use([A.a]);var F=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={SlideTitle:["Cloud Statergy","Oher Title","Oher Title 3","Oher Title 4","Oher Title 5","Oher Title 6"],SlideContent:["Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore.","Other contents dsf gf g fgr jfj fj f sddddddd ffffdsdfs   fqwqejkjh sdf   sdfgf  fgh g fh fgadsg fd hgfhjfg dfgd h dhdfh fgh fg fgh fghfg","Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore.","Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore.","Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore.","Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."],SlideBg:[L,P,L,L,L,L]},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){w.a.init({duration:500})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section-header","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:"Services"}),Object(O.jsxs)("div",{className:"icons-container","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:[Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]}),Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]}),Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]}),Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]}),Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]}),Object(O.jsxs)("a",{className:"icon",children:[Object(O.jsx)("img",{src:E}),Object(O.jsx)("p",{children:"Title section area"})]})]}),Object(O.jsx)(H.a,{effect:"coverflow",centeredSlides:!0,slidesPerView:"2",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},className:"swiper","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:this.state.SlideTitle.map((function(t,i){return Object(O.jsxs)(C.a,{style:{backgroundImage:e.state.SlideBg[i]},className:"swiper-slide",virtualIndex:i,children:[Object(O.jsx)("img",{src:e.state.SlideBg[i]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)("p",{children:e.state.SlideContent[i]})]})]},t)}))})]})}}]),i}(r.Component),q=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).state={scroll:!1},e.toggleScroll=function(t){e.setState({scroll:t})},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:this.state.scroll?"":"no-scroll",children:[Object(O.jsx)(N,{scroll:this.state.scroll}),Object(O.jsx)(g,{toggleSroll:this.toggleScroll.bind(this)}),Object(O.jsx)("div",{className:"Other",children:Object(O.jsx)(F,{})})]})}}]),i}(r.Component),D=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Careers page"})})}}]),i}(r.Component),I=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("div",{id:"page",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/Careers",children:Object(O.jsx)(D,{})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(q,{})})]})})})}}]),i}(a.a.Component),W=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,88)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),r(e),a(e),s(e)}))};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),W()}},[[84,1,2]]]);
//# sourceMappingURL=main.fb83222d.chunk.js.map