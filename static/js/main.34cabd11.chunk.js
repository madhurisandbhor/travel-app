(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a,i,c,r,o,s,l=n(0),d=n.n(l),j=n(15),b=n.n(j),u=n(59),m=n(16),p=n(195),O=n(193),h=n(11),f=n(105),g=Object(f.a)({palette:{primary:{light:"",main:"#FF8BE3",dark:"#FF64E3"},secondary:{light:"",main:"#0DDFFD",dark:"#00aec7"}},app:{white:"#fff",grey:"#dbdbdb",yellow:"#ebb734",red:"#e33030",blue:"#3330e3",green:"#1fab26"},typography:{fontFamily:'"Gabriela", serif',htmlFontSize:10},overrides:{MuiInputLabel:{root:{fontSize:"1.4rem"}},MuiTextField:{root:{fontSize:"1.4rem"}},MuiInputBase:{input:{fontSize:"1.4rem"}},MuiSvgIcon:{root:{fontSize:"2.4rem"}},MuiTypography:{body1:{fontSize:"1.4rem"},body2:{fontSize:"1.2rem"}}}}),x=n(33),y=n(9),v=n(12),S=n(14),w=Object(h.b)(u.b)(a||(a=Object(S.a)(["\n  display: inline-block;\n  padding: 0.5rem 2rem;\n  text-decoration: none;\n  user-select: none;\n  cursor: pointer;\n  outline: 0;\n  font-size: 3rem;\n  font-weight: bold;\n  color: ",';\n  fontfamily: "Gabriela", serif;\n  & > b {\n    color: ',";\n  }\n"])),(function(e){return e.theme.app.white}),(function(e){return e.theme.palette.primary.main})),C=n(2),k=h.b.ul(i||(i=Object(S.a)(["\n  list-style: none;\n"]))),N=h.b.li(c||(c=Object(S.a)(["\n  display: inline;\n"]))),z=function(){return Object(C.jsx)(k,{children:Object(C.jsx)(N,{children:Object(C.jsxs)(w,{exact:!0,to:"/",children:["Bon Voyage",Object(C.jsx)("b",{children:"!"})]})})})},D=n(40),I=n(4),E=n(179),A=n(182),B=n(187),T=n(99),F=n.n(T),U=n(188),P=n(198),R=n(184),M=n(183),L=n(186),q=n(97),H=n.n(q),J=n(96),G=n.n(J),W=n(185),V=n(200),Z=function(e,t){return null===t?(localStorage.removeItem("info"),_):Object(y.a)(Object(y.a)({},e),t)},_={continentSelected:{},citiesAddedByUser:[],notificationToggle:!1},Y=JSON.parse(localStorage.getItem("info")),K=d.a.createContext();function Q(e){var t=Object(l.useReducer)(Z,Y||_),n=Object(v.a)(t,2),a=n[0],i=n[1];return Object(l.useEffect)((function(){localStorage.setItem("info",JSON.stringify(a))}),[a]),Object(C.jsx)(K.Provider,{value:{info:a,setInfo:i},children:e.children})}var X,$,ee,te=h.b.b(r||(r=Object(S.a)(["\n  align-self: center;\n  color: ",";\n  margin-left: 2rem;\n"])),(function(e){return e.theme.palette.primary.main})),ne=h.b.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 1.5rem 0;\n"]))),ae=h.b.div(s||(s=Object(S.a)(["\n  padding: 2rem;\n  line-height: 1.6;\n"]))),ie=Object(E.a)((function(e){return{root:{display:"flex"},drawer:{width:"30rem",flexShrink:0},drawerPaper:{width:"30rem"},drawerHeader:Object(y.a)(Object(y.a)({display:"flex",alignItems:"center",padding:".5rem"},e.mixins.toolbar),{},{justifyContent:"flex-start"}),button:{justifyContent:"center",background:e.palette.primary.main,color:e.app.white,fontSize:"1.1rem","&:hover":{background:e.palette.secondary.main}}}})),ce=function(e){var t=e.open,n=e.handleDrawerClose,a=e.onDeleteCity,i=e.onDeleteAllCities,c=ie(),r=Object(l.useContext)(K).info,o=r.citiesAddedByUser?r.citiesAddedByUser:[];return Object(C.jsxs)(P.a,{className:c.drawer,variant:"persistent",anchor:"right",open:t,classes:{paper:c.drawerPaper},children:[Object(C.jsxs)("div",{className:c.drawerHeader,children:[Object(C.jsx)(A.a,{onClick:n,children:Object(C.jsx)(G.a,{})}),Object(C.jsx)(te,{children:"Travel Itinerary"})]}),Object(C.jsx)(M.a,{}),0!==o.length&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(R.a,{children:o.map((function(e,t){return Object(C.jsxs)(W.a,{button:!0,children:[Object(C.jsx)(V.a,{primary:"Day ".concat(t+1)}),Object(C.jsx)(V.a,{primary:e.name,secondary:e.selectedDate}),Object(C.jsx)(A.a,{onClick:function(t){return a(e.name)},children:Object(C.jsx)(H.a,{fontSize:"small"})})]},e.id)}))}),Object(C.jsx)(M.a,{}),Object(C.jsx)(ne,{children:Object(C.jsx)(L.a,{variant:"contained",className:c.button,onClick:i,children:"Remove all cities"})})]}),0===o.length&&Object(C.jsxs)(ae,{children:[Object(C.jsx)("div",{children:"You have 0 cities added to your travel"}),Object(C.jsx)("div",{children:"Start exploring!!"})]})]})},re=d.a.memo(ce),oe=["notificationToggle","handleDrawerOpen","open"],se=h.b.div(X||(X=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n"]))),le=Object(E.a)((function(e){return{button:{borderRadius:"0.5rem",padding:"0.8rem",backgroundColor:"rgb(0 0 0 / 26%)","&:hover":{color:e.palette.secondary.main,backgroundColor:"rgb(0 0 0 / 50%)"}},hide:{display:"none"},open:{position:"absolute",right:"2rem"},customBadge:{backgroundColor:e.app.red,color:"white"},tooltip:{fontSize:"1.2rem"}}})),de=function(e){var t=e.notificationToggle,n=e.handleDrawerOpen,a=e.open,i=Object(D.a)(e,oe),c=le();return Object(C.jsxs)(se,{children:[Object(C.jsx)(B.a,{title:"Travel Itinerary",classes:{tooltip:c.tooltip},children:Object(C.jsx)(A.a,{variant:"outlined",color:"inherit","aria-label":"open drawer",edge:"end",onClick:n,className:Object(I.a)(a&&c.hide,!a&&c.open,c.button),children:Object(C.jsx)(U.a,{variant:"dot",anchorOrigin:{vertical:"top",horizontal:"left"},classes:{badge:t&&c.customBadge},children:Object(C.jsx)(F.a,{})})})}),Object(C.jsx)(re,Object(y.a)({open:a},i))]})},je=d.a.memo(de),be=Object(E.a)((function(e){return{wraper:{minHeight:"5.5rem",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",color:e.app.white,background:"linear-gradient(90deg, #0ddffd 0%, #ff8be3 100%)",fontFamily:'"Gabriela", serif'}}})),ue=function(){var e=be(),t=d.a.useState(!1),n=Object(v.a)(t,2),a=n[0],i=n[1],c=Object(l.useContext)(K),r=c.info,o=c.setInfo,s=Object(l.useCallback)((function(){o(Object(y.a)(Object(y.a)({},r),{},{notificationToggle:!1})),i(!0)}),[r,o]),j=Object(l.useCallback)((function(){i(!1)}),[]),b=Object(l.useCallback)((function(e){var t=Object(x.a)(r.citiesAddedByUser);t=t.filter((function(t){return t.name!==e})),o(Object(y.a)(Object(y.a)({},r),{},{citiesAddedByUser:t}))}),[r,o]),u=Object(l.useCallback)((function(){o(Object(y.a)(Object(y.a)({},r),{},{citiesAddedByUser:[]}))}),[r,o]);return Object(C.jsxs)("header",{className:e.wraper,children:[Object(C.jsx)(z,{}),Object(C.jsx)(je,{open:a,handleDrawerOpen:s,handleDrawerClose:j,notificationToggle:r.notificationToggle,onDeleteCity:b,onDeleteAllCities:u})]})},me=Object(l.memo)(ue),pe=n(189),Oe=n.p+"static/media/Asia.d04940cc.jpg",he=n.p+"static/media/Africa.a2f36494.jpg",fe=n.p+"static/media/Antarctica.e8e72b2c.jpg",ge=n.p+"static/media/Europe.e9d068ad.jpg",xe=n.p+"static/media/Insular Oceania.ee13d913.jpg",ye=n.p+"static/media/North America.41531507.jpg",ve=n.p+"static/media/South America.a6485b21.jpg",Se=h.b.div($||($=Object(S.a)(["\n   text-align :center;\n"]))),we=h.b.i(ee||(ee=Object(S.a)(["\n   color: ",";\n"])),(function(e){return e.theme.app.white})),Ce=function(){return Object(C.jsx)(Se,{"data-testid":"loader",children:Object(C.jsx)(we,{className:"fas fa-circle-notch fa-2x fa-spin"})})},ke=n(58),Ne=n.n(ke),ze=n(71),De=Object(E.a)((function(e){return{topSection:{height:"10rem",alignSelf:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:e.app.black,lineHeight:1.6,fontFamily:'"Gabriela", serif',width:"80%",margin:"3rem 0"},title:{fontSize:"2.4rem",fontWeight:"600",letterSpacing:"0.05rem"},subText:{fontSize:"2rem"}}})),Ie=function(){var e=De();return Object(C.jsxs)("div",{className:e.topSection,children:[Object(C.jsx)("div",{className:e.title,children:"Explore the world with US!"}),Object(C.jsx)("div",{className:e.subText,children:"Locate your next travel destination and create your itinerary"})]})},Ee=Object(l.memo)(Ie),Ae=Object(E.a)((function(e){return{root:{width:"100%",margin:"0 auto",minHeight:"100vh",display:"flex",flexDirection:"column",background:"linear-gradient(90deg, #0ddffd 0%, #ff8be3 100%)"},hidden:{visibility:"hidden"},sliderContainer:{width:"80%",height:"100%",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridAutoFlow:"row",gridGap:"2rem",margin:"2rem auto","@media(max-width: 1024px) and (min-width: 768px)":{gridTemplateColumns:"1fr 1fr"},"@media(max-width: 768px)":{gridTemplateColumns:"1fr"}},card:{width:"100%",height:"30rem",display:"flex",flexDirection:"column",border:"0.8rem solid white",position:"relative",borderRadius:0,borderBottomWidth:"2.4rem",background:"lightgrey","&:hover":{cursor:"pointer"},"& > img":{width:"100%",height:"100%",objectFit:"cover",transition:"all 0.5s ease-in-out",zIndex:0,"&:hover":{transform:"scale(1.1)",overflow:"hidden"}}},name:{zIndex:99,fontWeight:"bold",color:e.app.white,fontSize:"1.8rem",letterSpacing:"0.1rem",position:"absolute",bottom:"1rem",left:"2rem"},content:{background:"linear-gradient(to bottom, rgba(250, 250, 250, 0), black 100%)",position:"absolute",bottom:0,left:0,height:"20%",width:"100%"},error:{textAlign:"center"}}})),Be=[Oe,he,fe,ge,ye,xe,ve],Te=function(){var e=Ae(),t=Object(l.useState)([]),n=Object(v.a)(t,2),a=n[0],i=n[1],c=Object(l.useState)([]),r=Object(v.a)(c,2),o=r[0],s=r[1],d=Object(l.useContext)(K),j=d.info,b=d.setInfo,u=Object(m.f)(),p=function(e,t){var n=Object(l.useState)(null),a=Object(v.a)(n,2),i=a[0],c=a[1],r=Object(l.useState)(!1),o=Object(v.a)(r,2),s=o[0],d=o[1],j=Object(l.useState)(null),b=Object(v.a)(j,2),u=b[0],m=b[1];return Object(l.useEffect)((function(){d(!0);var n=function(){var n=Object(ze.a)(Ne.a.mark((function n(){var a,i,r;return Ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});case 3:return a=n.sent,n.next=6,a.json();case 6:i=n.sent,r=i.data,c(r),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),m(n.t0);case 15:d(!1);case 16:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),{data:i,error:u,isLoading:s}}("https://api.everbase.co/graphql?apikey=your_key","{\n        continents {\n            id\n            name\n            population\n            countries {\n              id\n            }\n        }\n    }"),O=p.isLoading,h=p.data,f=p.error,g=Object(l.useCallback)((function(e){b(Object(y.a)(Object(y.a)({},j),{},{continentSelected:e})),u.push("/continents/".concat(e.name))}),[u,j,b]);return Object(l.useEffect)((function(){null!==h&&i(h.continents)}),[h]),Object(l.useEffect)((function(){var e=Object(x.a)(a).map((function(e){return Be.length>0&&Be.forEach((function(t){t.includes("/")&&t.split("/")[4].toString().toLowerCase().includes(e.name.toLowerCase())&&(e.img=t)})),e}));s(e)}),[a]),Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(Ee,{}),O&&Object(C.jsx)(Ce,{}),!O&&f&&Object(C.jsx)("div",{className:e.error,children:"Everbase server error!"}),!O&&h&&Object(C.jsx)("div",{className:e.sliderContainer,children:o.length>0&&o.map((function(t){return Object(C.jsxs)(pe.a,{className:e.card,onClick:function(e){return g(t,e)},children:[Object(C.jsx)("img",{src:t.img,alt:t.name}),Object(C.jsx)("div",{className:e.name,children:t.name}),Object(C.jsx)("div",{className:e.content})]},t.id)}))})]})},Fe=function(e,t){switch(t.type){case"SEND":return{loading:!0,error:null,responseData:null};case"RESPONSE":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,responseData:t.responseData});case"ERROR":return{loading:!1,error:t.errorMsg,responseData:null};default:throw new Error("Wrong action type: ".concat(t.type))}};var Ue,Pe,Re,Me,Le,qe,He,Je,Ge,We,Ve,Ze,_e,Ye,Ke,Qe=function(e,t){var n=Object(l.useReducer)(Fe,{loading:!1,error:null,responseData:null}),a=Object(v.a)(n,2),i=a[0],c=a[1];return Object(l.useEffect)((function(){c({type:"SEND"});var n=function(){var n=Object(ze.a)(Ne.a.mark((function n(){var a,i,r;return Ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});case 3:return a=n.sent,n.next=6,a.json();case 6:i=n.sent,r=i.data,c({type:"RESPONSE",responseData:r}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),c({type:"ERROR",errorMsg:n.t0});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),{isLoading:i.loading,error:i.error,data:i.responseData}},Xe=n(194),$e=n(196),et=n(5),tt=Object(et.a)({root:{fontSize:"1.6rem",marginBottom:"1.2rem",width:"100%",color:g.palette.primary.dark},option:{fontSize:"1.5rem","& > span":{marginRight:"1rem",fontSize:"1.8rem"}}})($e.a),nt=function(e){var t=e.type,n=e.list,a=e.onSelectChange,i="Choose a ".concat(t);return Object(C.jsx)(tt,{id:"select-menu",options:n,autoHighlight:!0,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(C.jsx)(Xe.a,Object(y.a)(Object(y.a)({},e),{},{label:i}))},onChange:function(e,t){return a(t)}})},at=d.a.memo(nt),it=h.b.div(Ue||(Ue=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  padding: 2rem;\n  box-shadow: 0 0.7rem 3rem -1rem rgba(150, 170, 180, 0.5);\n  border-radius: 0.8rem;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),ct=h.b.div(Pe||(Pe=Object(S.a)(["\n  margin-bottom: 1rem;\n  color: ",";\n  padding-bottom: 1rem;\n  border-bottom: 0.1rem solid black;\n"])),(function(e){return e.theme.palette.primary.dark})),rt=h.b.div(Re||(Re=Object(S.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(1, auto);\n  grid-gap: 3rem;\n"]))),ot=h.b.div(Me||(Me=Object(S.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  grid-gap: 1rem;\n"]))),st=h.b.div(Le||(Le=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > span:first-child {\n    font-size: 1.2rem;\n    color: ",";\n  }\n  & > span:last-child {\n    font-weight: bold;\n    font-size: 1.4rem;\n    opacity: 0.9;\n  }\n"])),(function(e){return e.theme.palette.secondary.dark})),lt=function(e){var t=e.countryInfo,n=Object(l.useCallback)((function(e){return e&&e.map((function(e){return e.name})).join(", ")}),[]);return Object(C.jsx)(it,{children:Object(C.jsxs)(ot,{children:[Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Capital"}),Object(C.jsx)("span",{children:t.capital?t.capital.name:"NA"})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Population"}),Object(C.jsx)("span",{children:t.population})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Currencies"}),Object(C.jsxs)("span",{children:[n(t.currencies)," "]})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Languages"}),Object(C.jsx)("span",{children:n(t.languages)})]})]})})},dt=d.a.memo(lt),jt=function(e){var t=e.cityInfo;return Object(C.jsx)(it,{children:Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Population"}),Object(C.jsx)("span",{children:t.population})]})})},bt=d.a.memo(jt),ut=h.b.div(qe||(qe=Object(S.a)(["\n  margin: 1rem 0;\n"]))),mt=function(e){var t=e.countrySelected,n=e.setCurrentCity,a=Object(l.useState)([]),i=Object(v.a)(a,2),c=i[0],r=i[1],o=Object(l.useState)({}),s=Object(v.a)(o,2),d=s[0],j=s[1],b=Object(l.useState)({}),u=Object(v.a)(b,2),m=u[0],p=u[1],O='{\n        countries(where: {name: {eq: "'.concat(t.name,'"}}) {\n            id\n            name\n            capital {\n                name\n            }\n            cities {\n                id\n                name\n                location {\n                  lat\n                  long\n                }\n                population\n            }\n            languages {\n                id\n                name\n            }\n            currencies {\n                id\n                name\n            }\n            population\n        } \n    }'),h=Qe("https://api.everbase.co/graphql?apikey=your_key",O),f=h.isLoading,g=h.data,x=h.error;Object(l.useEffect)((function(){null!==g&&(r(g.countries[0].cities),j(g.countries[0]),p(""))}),[g]);var y=Object(l.useCallback)((function(e){var t=e||{};p(t),n(t)}),[n]);return Object(C.jsxs)(C.Fragment,{children:[f&&Object(C.jsx)(Ce,{}),x&&Object(C.jsx)("div",{className:"no-result-text",children:"No result!!!"}),!f&&Object(C.jsxs)(C.Fragment,{children:[0!==Object.keys(d).length&&Object(C.jsx)(dt,{countryInfo:d}),c.length>0&&Object(C.jsx)(at,{type:"city",list:c,onSelectChange:y}),0===c.length&&Object(C.jsx)(ut,{children:"No city available"}),0!==Object.keys(m).length&&Object(C.jsx)(bt,{cityInfo:m})]})]})},pt=d.a.memo(mt),Ot=h.b.div(He||(He=Object(S.a)(["\n  width: 100%;\n  min-height: 100%;\n  background: white;\n"]))),ht=h.b.div(Je||(Je=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 2rem;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),ft=h.b.div(Ge||(Ge=Object(S.a)(["\n  width: 40%;\n  height: 100%;\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  align-content: space-around;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n"]))),gt=h.b.div(We||(We=Object(S.a)(["\n  margin-bottom: 1.5rem;\n  font-weight: bold;\n  width: 100%;\n  opacity: 0.9;\n"]))),xt=h.b.div(Ve||(Ve=Object(S.a)(["\n  width: 60%;\n  height: 100%;\n  display: flex;\n  padding: 0 1rem;\n  flex-direction: column;\n  align-items: center;\n  & > p {\n    display: flex;\n    align-items: center;\n    & > img {\n      width: 2.4rem;\n      height: 2.4rem;\n    }\n    font-size: 1.4rem;\n    margin: 1rem;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),yt=function(e){var t=e.continentSelected;return Object(C.jsxs)(it,{children:[Object(C.jsx)(ct,{children:"Geographical Information"}),Object(C.jsxs)(rt,{children:[Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Continent "}),Object(C.jsx)("span",{children:t.name})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Population "}),Object(C.jsx)("span",{children:t.population})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)("span",{children:"Countries "}),Object(C.jsx)("span",{children:t.countries&&t.countries.length})]})]})]})},vt=d.a.memo(yt),St=n(28),wt=n.n(St),Ct=n(199),kt=n(192),Nt=n(190),zt=n(101),Dt=n.n(zt),It=n(102),Et=n.n(It),At=n(100),Bt=n.n(At),Tt=h.b.div(Ze||(Ze=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: space-between;\n"]))),Ft=h.b.b(_e||(_e=Object(S.a)(["\n  margin-bottom: 0.5rem;\n  font-size: 1.6rem;\n  color: ",";\n"])),(function(e){return e.theme.palette.secondary.main})),Ut=h.b.div(Ye||(Ye=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n"]))),Pt=Object(et.a)((function(e){return{root:{fontSize:"1.6rem",color:e.palette.secondary.main,"&:hover":{color:e.palette.primary.main},padding:".2rem"}}}))(A.a),Rt=Object(et.a)((function(e){return{root:{margin:"1rem 0 .5rem 0"}}}))(Xe.a),Mt=function(e){var t=e.selected,n=e.onCloseClick,a=Object(l.useContext)(K),i=a.info,c=a.setInfo,r=Object(l.useState)(!1),o=Object(v.a)(r,2),s=o[0],j=o[1],b=d.a.useState((new Date).toISOString().split("T")[0]),u=Object(v.a)(b,2),m=u[0],p=u[1];return Object(l.useEffect)((function(){localStorage.setItem("citiesAddedByUser",JSON.stringify(i.citiesAddedByUser))}),[i]),Object(l.useEffect)((function(){var e=i.citiesAddedByUser.some((function(e){return e.name===t.name}));j(e)}),[t,j,i]),Object(C.jsx)(Nt.a,{onCloseClick:n,children:Object(C.jsxs)(Tt,{children:[Object(C.jsx)(Ft,{children:t.name}),!s&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Rt,{id:"date",label:"Select date",type:"date",value:m,onChange:function(e){p(e.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:(new Date).toISOString().split("T")[0]}}),Object(C.jsx)(Pt,{"aria-label":"add city",onClick:function(){var e=Object(y.a)(Object(y.a)({},t),{},{locationSelected:!0,selectedDate:m});c(Object(y.a)(Object(y.a)({},i),{},{citiesAddedByUser:[].concat(Object(x.a)(i.citiesAddedByUser),[e]),notificationToggle:!0}))},children:Object(C.jsx)(Bt.a,{})})]}),s&&Object(C.jsxs)(Ut,{children:[Object(C.jsx)("span",{children:"City is added"}),Object(C.jsx)(Dt.a,{}),Object(C.jsx)(Pt,{"aria-label":"delete city",onClick:function(){var e=Object(x.a)(i.citiesAddedByUser);e=e.filter((function(e){return e.name!==t.name})),c(Object(y.a)(Object(y.a)({},i),{},{citiesAddedByUser:e}))},children:Object(C.jsx)(Et.a,{})})]})]})})},Lt=d.a.memo(Mt),qt=(n(132),n(191)),Ht=Object(h.b)(qt.a)(Ke||(Ke=Object(S.a)(["\n  width: 100%;\n  height: 48rem;\n"]))),Jt=n(103),Gt=n(104),Wt=wt.a.icon({iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40],iconUrl:Jt.a,shadowUrl:Gt.a});wt.a.Marker.prototype.options.icon=Wt;var Vt=function(e){var t=e.countries,n=e.countrySelected,a=e.citySelected,i=e.markers,c=e.setMarkerPosition,r=e.zoom,o=e.resetZoom,s=Object(l.useContext)(K).info,d=Object(l.useState)(""),j=Object(v.a)(d,2),b=j[0],u=j[1],m=Object(l.useState)(null),p=Object(v.a)(m,2),O=p[0],h=p[1],f=Object(l.useState)({lat:t[0].location.lat,lng:t[0].location.long}),g=Object(v.a)(f,2),y=g[0],S=g[1];Object(l.useEffect)((function(){var e=0!==Object.keys(a).length?a:n,i=s.citiesAddedByUser;if(0!==Object.keys(a).length||0!==Object.keys(n).length){0!==Object.keys(a).length?o(10):o(5),S({lat:e.location.lat,lng:e.location.long}),O.setView({lat:e.location.lat,lng:e.location.long},5);var r=i.some((function(t){return t.name===e.name}));c([{lat:e.location?e.location.lat:0,lng:e.location?e.location.long:0,id:e.id,name:e.name,population:e.population,locationSelected:r}])}else o(3),t.forEach((function(e){var t=i.some((function(t){return t.name===e.name}));c((function(n){return[].concat(Object(x.a)(n),[{lat:e.location?e.location.lat:0,lng:e.location?e.location.long:0,id:e.id,name:e.name,population:e.population,locationSelected:t}])}))}))}),[t,n,a,s,O,c,o]);var w=Object(l.useCallback)((function(){u(null)}),[]);return Object(l.useEffect)((function(){!n.id&&O&&O.setView({lat:t[0].location.lat,lng:t[0].location.long},3)}),[n,O,t]),Object(C.jsxs)(Ht,{id:"map",center:y,zoom:r,scrollWheelZoom:!1,whenCreated:h,children:[Object(C.jsx)(Ct.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.map((function(e){return Object(C.jsx)(kt.a,{position:{lat:e.lat,lng:e.lng},eventHandlers:{click:function(t){return function(e,t){u(e)}(e)}},children:Object(C.jsx)(Lt,{selected:b,onCloseClick:w})},e.name)}))]})},Zt=d.a.memo(Vt),_t=n.p+"static/media/location.6a77edc1.svg",Yt=function(){var e=Object(l.useContext)(K).info,t=Object(l.useState)([]),n=Object(v.a)(t,2),a=n[0],i=n[1],c=e.continentSelected,r=Object(l.useState)({}),o=Object(v.a)(r,2),s=o[0],d=o[1],j=Object(l.useState)({}),b=Object(v.a)(j,2),u=b[0],m=b[1],p=Object(l.useState)([]),O=Object(v.a)(p,2),h=O[0],f=O[1],g=Object(l.useState)(3),x=Object(v.a)(g,2),y=x[0],S=x[1],w='{\n        continents(where: {name: {eq: "'.concat(c.name,'"}}) {\n            id \n            name \n            population\n            countries {\n                id\n                name\n                location {\n                    lat\n                    long\n                }\n                population\n            }\n        }\n    }'),k=Qe("https://api.everbase.co/graphql?apikey=your_key",w),N=k.isLoading,z=k.data,D=k.error;Object(l.useEffect)((function(){null!==z&&i(z.continents[0].countries)}),[z]);var I=Object(l.useCallback)((function(e){S(e)}),[]),E=Object(l.useCallback)((function(e){f([]),I(3),d(e||{}),m({})}),[I]),A=Object(l.useCallback)((function(e){f([]),I(5),m(e)}),[I]),B=Object(l.useCallback)((function(e){f(e)}),[]);return Object(C.jsxs)(Ot,{children:[N&&Object(C.jsx)(Ce,{}),D&&Object(C.jsx)("div",{className:"no-result-text",children:"No result!!!"}),!N&&Object(C.jsxs)(ht,{children:[Object(C.jsxs)(ft,{children:[Object(C.jsx)(vt,{continentSelected:c}),a.length>0&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(gt,{children:"Please choose your destination to explore"}),Object(C.jsx)(at,{type:"country",list:a,onSelectChange:E}),0!==Object.keys(s).length&&Object(C.jsx)(pt,{countrySelected:s,setCurrentCity:A})]})]}),a.length>0&&Object(C.jsxs)(xt,{children:[Object(C.jsxs)("p",{children:[Object(C.jsx)("img",{src:_t,alt:"location Note"})," Click the blue marker on map to add city to your travel plan."]}),Object(C.jsx)(Zt,{countries:a,countrySelected:s,citySelected:u,markers:h,setMarkerPosition:B,zoom:y,resetZoom:I})]}),0===a.length&&Object(C.jsx)(xt,{children:"Map is temporarily not available"})]})]})},Kt=function(){return Object(C.jsx)("div",{children:"Page not found!"})};n(133);var Qt=function(){return Object(C.jsx)(p.b,{injectFirst:!0,children:Object(C.jsx)(O.a,{theme:g,children:Object(C.jsx)(h.a,{theme:g,children:Object(C.jsx)(Q,{children:Object(C.jsx)(u.a,{basename:"/travel-app",children:Object(C.jsxs)("div",{className:"app",children:[Object(C.jsx)(me,{}),Object(C.jsx)("main",{className:"app-body",children:Object(C.jsxs)(m.c,{children:[Object(C.jsx)(m.a,{exact:!0,path:"/",component:Te}),Object(C.jsx)(m.a,{path:"/continents/:continent",component:Yt}),Object(C.jsx)(m.a,{path:"",component:Kt})]})})]})})})})})})};b.a.render(Object(C.jsx)(d.a.StrictMode,{children:Object(C.jsx)(Qt,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.34cabd11.chunk.js.map