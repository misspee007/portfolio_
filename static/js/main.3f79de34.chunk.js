(this.webpackJsonpportfolio_=this.webpackJsonpportfolio_||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/myProfile.ebf01a44.png"},26:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/precious_abubakar_dev.027d06e9.pdf"},30:function(e){e.exports=JSON.parse('{"basic_info":{"name":"Precious Abubakar","titles":["Front-end Developer","Writer"],"social":[{"name":"github","url":"https://github.com/misspee007/","class":"fab fa-github"},{"name":"linkedIn","url":"https://www.linkedin.com/in/precious-abubakar/","class":"fab fa-linkedin"},{"name":"whatsapp","url":"http://wa.me/2348109343220?text=Hi,%20I\'m%20interested%20in%20your%20services","class":"fab fa-whatsapp"},{"name":"mail","url":"mailto:preciousdanabubakar@gmail.com","class":"fa fa-envelope"},{"name":"phone","url":"tel:+2348109343220","class":"fa fa-phone"}],"image":"myProfile.jpg"},"skills":{"icons":[{"name":"HTML 5","class":"devicon-html5-plain","level":"95"},{"name":"CSS 3","class":"devicon-css3-plain","level":"95"},{"name":"JavaScript","class":"devicon-javascript-plain","level":"70"},{"name":"ReactJs","class":"devicon-react-plain","level":"60"},{"name":"Git","class":"devicon-git-plain","level":"60"},{"name":"Sass","class":"devicon-sass-original","level":"75"},{"name":"Bootstrap","class":"devicon-bootstrap-plain","level":"85"}]}}')},31:function(e){e.exports=JSON.parse('{"basic_info":{"description_header":"Hi","description":"\ud83d\udc4bI\'m Precious Abubakar, Frontend Developer and Writer.  :) I\'m currently working with JavaScript and ReactJs, but I\'m open to learning new technologies. I\'m working on my technical writing but in the meantime, I write about my journey as a developer","section_name":{"about":"About me","projects":"Projects","skills":"Skills","experience":"Experience"}},"projects":[{"title":"Zuri Chat","startDate":"2021","description":"An open source messaging platform that will power remote work in the Web3 future and make it feel as good as sitting across the desk from your friends. Zuri chat offers games, music and more functionality via a plugin system. Zuri Chat is powered by diverse technologies including GoLang, Python and NodeJS, but I worked with the ReactJS teams.","images":["images/portfolio/zurichat/zcLogo.svg","images/portfolio/zurichat/zcChess.png","images/portfolio/zurichat/zcManageDAO.png","images/portfolio/zurichat/zcVirtualWorkspaces.png"],"url":"https://www.zuri.chat/","technologies":[{"class":"devicon-react-original","name":"React"},{"class":"devicon-vuejs-plain","name":"Vue"}]},{"title":"HomeTeach","startDate":"2021","description":"An online educational platform that connects students to tutors. Group project for Zuri training. I worked on the cart, and some web pages.","images":["images/portfolio/hometeach/homeTeach.jpg","images/portfolio/hometeach/home.jpg","images/portfolio/hometeach/cart.jpg","images/portfolio/hometeach/cart.png","images/portfolio/hometeach/contact.jpg"],"url":"https://staging-hometeach80.netlify.app/","technologies":[{"class":"devicon-react-original","name":"React"}]},{"title":"Rock-Paper-Scissors","startDate":"2021","description":" A personal project for study purposes. A game of rock-paper-scissors built with ReactJS.","images":["images/portfolio/rockPaperSci/game.jpg","images/portfolio/rockPaperSci/win.jpg","images/portfolio/rockPaperSci/loss.jpg","images/portfolio/rockPaperSci/draw.jpg"],"url":"https://misspee007.github.io/rock_paper_scissors/","technologies":[{"class":"devicon-react-original","name":"React"},{"class":"devicon-javascript-plain","name":"JavaScript"}]},{"title":"Pomodoro Timer","startDate":"2021","description":" A personal project for study purposes. A game of rock-paper-scissors built with ReactJS.","images":["images/portfolio/timer/timer.jpg","images/portfolio/timer/timer2.jpg","images/portfolio/timer/timer3.jpg"],"url":"https://misspee007.github.io/timer/","technologies":[{"class":"devicon-react-original","name":"React"}]},{"title":"Markdown Editor","startDate":"2021","description":" A personal project for study purposes. A game of rock-paper-scissors built with ReactJS.","images":["images/portfolio/mdEditor/image.jpg","images/portfolio/mdEditor/image2.jpg"],"url":"https://misspee007.github.io/markdown_editor/","technologies":[{"class":"devicon-react-original","name":"React"}]}],"experience":[{"company":"HNG Internship","title":"Intern","years":"08.2021 - 10.2021","mainTech":["ReactJs"],"technologies":["RxJS","JavaScript","Bootstrap","TailwindCSS","HTML","CSS"]},{"company":"Zuri Chat","title":"Frontend Developer","years":"09.2021 - 12.2021","mainTech":["ReactJs"],"technologies":["RxJS","JavaScript","Bootstrap","TailwindCSS","Styled components","Scss","HTML","CSS","Vue"]},{"company":"Devshelpdevs","title":"Front-end Developer","years":"present","mainTech":["ReactJs"],"technologies":["RxJS","JavaScript","Bootstrap","TailwindCSS","Styled components","Scss","HTML","CSS"]}]}')},32:function(e,a,t){e.exports=t(50)},37:function(e,a,t){},38:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(12),r=t.n(s),o=(t(37),t(6)),c=t(7),l=t(9),m=t(8),p=(t(38),t(13)),d=t(19),u=t(21),h=t.n(u),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(c.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var t=i.a.memo((function(){return i.a.createElement(d.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(d.a,{steps:[a],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(t,null)),i.a.createElement(h.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),t}(n.Component),g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),v=t(17),E=t(22),b=t.n(E),y=t(23),w=t.n(y),k=t(24),N=t.n(k),j=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,t=this.props.resumeBasicInfo.description;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,e)),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{height:"250px",src:w.a,alt:"Avatar placeholder"}),i.a.createElement(v.Icon,{icon:b.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(v.Icon,{icon:N.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},a," :) "),i.a.createElement("br",null),i.a.createElement("br",null),t,i.a.createElement("a",{href:"https://preciousabubakar.hashnode.dev/",target:"_blank",rel:"noopener noreferrer"}," here."))))))))}}]),t}(n.Component),S=t(16),x=(t(46),t(18)),I=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies,n=e.mainTech.map((function(e,a){return i.a.createElement(x.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)})),s=t.map((function(e,a){return i.a.createElement(x.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return i.a.createElement(S.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fab fa-react experience-icon"}),key:a},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},s))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(S.VerticalTimeline,null,a,i.a.createElement(S.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),O=t(53),A=t(25),C=t.n(A),B=t(26),D=t.n(B),_=t(27),T=t.n(_),R=(t(47),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(console.log(this.props.data),this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,s=this.props.data.url;if(this.props.data.technologies){var r=e.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var o=a.map((function(e,a){return i.a.createElement("div",{key:a,"data-src":e})}))}}return i.a.createElement(O.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement(C.a,{cssModule:[D.a,T.a],animation:"scaleOutAnimation",className:"slider-image"},o)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,s?i.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},r)))))}}]),t}(n.Component)),J=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},i.a.createElement("div",null,i.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},a.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3",style:"Rock-Paper-Scissors"===a.title?{fontSize:"1.5rem"}:null},a.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto justify-content-center"},t)),i.a.createElement(R,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),z=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),P=t(29),L=t.n(P),H=t(30),W=t(31),M=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:W,sharedData:H},n}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{sharedData:this.state.sharedData.basic_info}),i.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},i.a.createElement("div",{style:{display:"inline"}},i.a.createElement("a",{href:L.a,download:"preciousAbubakarResume",style:{color:"#353239"}},i.a.createElement("span",{className:"iconify","data-icon":"ic:baseline-save-alt","data-inline":"false",id:window.$primaryLanguageIconId}),i.a.createElement("p",{style:{fontSize:13}},"Download Resume")))),i.a.createElement(j,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),i.a.createElement(J,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(z,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(I,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(49);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(i.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio_",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolio_","/service-worker.js");F?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(a,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.3f79de34.chunk.js.map