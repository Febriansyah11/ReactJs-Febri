(this["webpackJsonpfebriansyah-adi-putra"]=this["webpackJsonpfebriansyah-adi-putra"]||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},145:function(e,t,a){e.exports=a.p+"static/media/photo.74951ae4.svg"},146:function(e,t,a){e.exports=a.p+"static/media/futsalBg1.26848c33.png"},147:function(e,t,a){e.exports=a.p+"static/media/futsal0.3926a3f8.png"},148:function(e,t,a){e.exports=a.p+"static/media/futsal1.30f7b9d7.png"},149:function(e,t,a){e.exports=a.p+"static/media/futsal2.e520ac20.png"},150:function(e,t,a){e.exports=a.p+"static/media/Github.ad3904b1.svg"},151:function(e,t,a){e.exports=a.p+"static/media/blog.6f7a2864.png"},154:function(e,t,a){e.exports=a.p+"static/media/blogger.50cfb66b.mp4"},165:function(e,t,a){e.exports=a(223)},170:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(170),a(94),a(57)),s=a(43),i=a(22),m=a(23),u=a(26),d=a(25),h=a(240),p=a(139),f=a.n(p),b=(a(56),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleWelcome=function(){var t=document.getElementById("welcome"),a=document.getElementById("welcome-text");e.interval=setInterval((function(){return e.setState({time:e.state.time+1})}),680),t.style.height=0,a.style.color="#20b2aa",e.setState({button:!1})},e.state={time:0,button:!0},e}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return 1===this.state.time&&this.props.history.push("/dashboard"),l.a.createElement("div",{id:"welcome",className:"welcome-style shadow d-flex flex-column"},l.a.createElement("h4",{id:"welcome-text",className:"welcome-style-text text-raleway-welcome"},"Welcome, I'm Febriansyah "),!0===this.state.button?l.a.createElement(h.a,{id:"btn-welcome",className:"px-3 text-raleway-welcome-button",variant:"outline",onClick:this.handleWelcome},"About me ",l.a.createElement(f.a,{fontSize:"large",className:"welcome-icon"})):null)}}]),a}(n.Component)),E=Object(s.f)(b),g=a(144),v=a.n(g),w=a(145),x=a.n(w),y=(a(175),a(248)),k=a(245),N=a(243),j=a(46),O=a(146),C=a.n(O),S=a(147),B=a.n(S),I=a(148),M=a.n(I),T=a(149),A=a.n(T),L=a(150),F=a.n(L),D=a(151),H=a.n(D),P=a(152),W=a(154),z=a.n(W);function J(e){return l.a.createElement(N.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(j.a,null,l.a.createElement(j.a.Item,{className:"py-5 bg-dark"},l.a.createElement("img",{className:"d-block w-100",src:B.a,alt:"First slide"}),l.a.createElement(j.a.Caption,{className:"text-dark"},l.a.createElement("h3",null,"As user"))),l.a.createElement(j.a.Item,{className:"py-5 bg-dark"},l.a.createElement("img",{className:"d-block w-100",src:M.a,alt:"First slide"}),l.a.createElement(j.a.Caption,{className:"text-dark"},l.a.createElement("h3",null,"As user"))),l.a.createElement(j.a.Item,{className:"py-5 bg-dark"},l.a.createElement("img",{className:"d-block w-100",src:A.a,alt:"First slide"}),l.a.createElement(j.a.Caption,{className:"text-dark"},l.a.createElement("h3",null,"As admin")))))}function R(e){return l.a.createElement(N.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(P.Player,{playsInline:!0,poster:"/assets/poster.png",src:z.a}))}var U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={showModal1:!1,showModal2:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.showModal1,"modall 1"),l.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center text-raleway-about text-dark p-xl-5 p-lg-5 p-1 overflow-scroll"},l.a.createElement(y.a,{className:"text-center shadow m-1",style:{width:"19rem"}},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null," Futsal Field Booking "),l.a.createElement(y.a.Img,{variant:"top",src:C.a}),l.a.createElement(k.a,{color:"primary",style:{width:200},onClick:function(){return e.setState({showModal1:!0})}},"Show more"))),l.a.createElement(y.a,{className:"text-center shadow m-1",style:{width:"19rem"},bg:"info"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null," Blog "),l.a.createElement(y.a.Img,{variant:"top",src:H.a,className:"my-5"}),l.a.createElement(k.a,{color:"primary",style:{width:200},onClick:function(){return e.setState({showModal2:!0})}},"Show more"))),l.a.createElement(y.a,{className:"text-center shadow m-1",style:{width:"19rem"}},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,"Another project on my github "),l.a.createElement(y.a.Img,{variant:"top",src:F.a,style:{width:"13.4rem",height:"13.4rem"}}),l.a.createElement(k.a,{color:"primary",onClick:function(e){return window.location.href="https://github.com/Febriansyah11"},style:{width:200}},"Show more"))),l.a.createElement(J,{show:this.state.showModal1,onHide:function(){return e.setState({showModal1:!1})}}),l.a.createElement(R,{show:this.state.showModal2,onHide:function(){return e.setState({showModal2:!1})}}))}}]),a}(n.Component);function Y(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",{className:"text-raleway-about text-center"},"I'am a developer, my first studied at Balai Latihan Kerja Bekasi\xa0",l.a.createElement("a",{href:"https://blkbekasi.kemnaker.go.id/",className:"text-raleway-about-italic"},"BBPLK"),". I majored in Web Developer, there i learned HTML and PHP Native. After that, i got more training again at PT. Enigma Humanika Cipta, there i learn to be Fullstack Developer, all for free!. And now i've mastered several frameworks and programming languages like a.."),l.a.createElement("p",{className:"text-raleway-about-item p-0 mt-xl-5 mt-lg-5 mt-md-2 mt-1 text-center"},"Javascript ~ ReactJs ~ ReactNative ~ HTML5 ~ CSS3 ~ Bootstrap4"),l.a.createElement("p",{className:"text-raleway-about-item p-0 text-center"},"Java ~ Java Springboot ~ MySQL"))}var K=a(45),G=a.n(K),Q=a(157),$=a(69),_=a(247),q=a(244),V=a(160),X=a(161),Z=a(158),ee=a.n(Z),te=a(159),ae=a.n(te),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){console.log(t.target.value,"onChange"),e.setState(Object(Q.a)({},t.target.name,t.target.value))},e.state={name:"",email:"",message:""},e.handleSubmit=e.handleSubmit.bind(Object($.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){console.log(this.state,"cdn")}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.email,l=t.message;ae.a.post("/api/form",{name:a,email:n,message:l}),ee.a.fire({position:"center",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement(_.a,{id:"contact",collapseOnSelect:!0,expand:"lg",sticky:"bottom",bg:"dark",variant:"dark",className:"dashboard d-flex flex-column justify-content-start align-items-center p-xl-5 p-lg-5 p-1 text-raleway-about"},l.a.createElement("p",{className:"m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard text-white text-center"},l.a.createElement(G.a,null),"\xa0CONTACT ME\xa0",l.a.createElement(G.a,null)),l.a.createElement(q.a,{onSubmit:this.handleSubmit,className:"w-50 bg-dark d-flex flex-column justify-content-center align-items-center text-white"},l.a.createElement(V.a,{className:"w-100",controlId:"formBasicText"},l.a.createElement(X.a,{name:"name",type:"text",value:this.state.name,onChange:this.handleChange,placeholder:"Your Name"})),l.a.createElement(V.a,{className:"w-100",controlId:"formBasicEmail"},l.a.createElement(X.a,{name:"email",type:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Example@mail.com"})),l.a.createElement(V.a,{className:"w-100",controlId:"exampleForm.ControlTextarea1"},l.a.createElement(X.a,{as:"textarea",rows:"3",name:"message",type:"textarea",value:this.state.message,onChange:this.handleChange,placeholder:"Your Message"})),l.a.createElement(h.a,{type:"submit",className:"w-100"},"Send")))}}]),a}(n.Component),le=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleClickHref=function(){window.location.href("https://blkbekasi.kemnaker.go.id/")},e.state={time:1,loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:e.state.time+=1})}),1e3)}},{key:"render",value:function(){return console.log(this.state.time,"time render"),2===this.state.time&&(clearInterval(this.interval),this.setState({loading:!1,time:0})),l.a.createElement(n.Fragment,null,!0===this.state.loading?l.a.createElement("div",{className:"row justify-content-center align-content-center vh-100"},l.a.createElement("img",{className:"App-logo",src:v.a,alt:"react-loading"})):l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{id:"dashboard",className:"dashboard d-flex justify-content-center align-items-center p-5"},l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center dash-febri"},l.a.createElement("img",{height:"300",width:"300",src:x.a,alt:"febriansyah adi putra"}),l.a.createElement("p",{className:"m-1 text-raleway-febri text-center"},"Febriansyah Adi Putra"),l.a.createElement("p",{className:"m-1 text-raleway-febri text-center"},"Web Developer & Backend Developer"))),l.a.createElement("div",{className:"dashboard dash-port bg-white d-flex flex-column justify-content-start align-items-center p-5 "},l.a.createElement("div",{id:"portfolio",className:"d-flex flex-column align-items-center justify-content-center"},l.a.createElement("p",{className:"m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard"},l.a.createElement(G.a,null),"\xa0PORTFOLIO\xa0",l.a.createElement(G.a,null)),l.a.createElement(U,null))),l.a.createElement("div",{className:"dashboard dash-bout d-flex flex-column justify-content-start align-items-center p-5 "},l.a.createElement("div",{id:"about",className:"d-flex flex-column align-items-center justify-content-center"},l.a.createElement("p",{className:"m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard text-white"},l.a.createElement(G.a,null),"\xa0ABOUT\xa0",l.a.createElement(G.a,null)),l.a.createElement(Y,null))),l.a.createElement(ne,null)))}}]),a}(n.Component),re=a(246),ce=a(241),oe=a(242),se=a(62),ie=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(_.a,{collapseOnSelect:!0,bg:"info",expand:"lg",sticky:"top",variant:"dark",className:"navbar-style shadow d-flex flex-row pl-xl-5 pr-xl-5"},l.a.createElement(re.a,{className:"d-flex flex-row align-items-center flex-grow-0"},l.a.createElement("a",{href:"https://www.facebook.com/febriansyah.adiputra.3"},l.a.createElement(ce.a,{fontSize:"large",className:"navbar-icon-social",style:{color:"white",textDecoration:"dark"}})),l.a.createElement("a",{href:"https://www.instagram.com/febriansz_/"},l.a.createElement(oe.a,{fontSize:"large",className:"navbar-icon-social",style:{color:"white",textDecoration:"dark"}}))),l.a.createElement(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(_.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(re.a,{className:"btn mr-auto text-raleway-header-mail"},"1102.adiputra@gmail.com"),l.a.createElement(re.a,null,l.a.createElement(re.a.Link,null,l.a.createElement(se.Link,{activeClass:"active",to:"dashboard",spy:!0,smooth:!0,offset:-70,duration:500},"DASHBOARD")),l.a.createElement(re.a.Link,null,l.a.createElement(se.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:500},"PORTFOLIO")),l.a.createElement(re.a.Link,null,l.a.createElement(se.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"ABOUT")),l.a.createElement(re.a.Link,null,l.a.createElement(se.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"CONTACT")))))}}]),a}(n.Component),me=Object(s.f)(ie),ue=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement(me,null),l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/dashboard",component:le}),l.a.createElement(s.a,{path:"/project",component:E}))))}}]),a}(n.Component);a(222);function de(){return l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{path:"/dashboard",component:ue})))}var he=function(){return l.a.createElement(de,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){}},[[165,1,2]]]);
//# sourceMappingURL=main.e4b372f3.chunk.js.map