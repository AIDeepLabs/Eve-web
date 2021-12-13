(this.webpackJsonpeve=this.webpackJsonpeve||[]).push([[0],{187:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(21),r=n.n(i),c=(n(187),n(14)),s=n(575),d=n(576),l=n(581),j=n(161),h=n.n(j),b=n(574),u=n.p+"static/media/dogo.eea15ace.jpeg",p=n(570),g=n(571),m=n(591),x=n(160),O=n.n(x),f=n(159),y=n.n(f),v=n(583),E=n(582),w=n(164),I=n(580);n.p;var V,F,k=n(125),S=n(586),C=n(590),T=n(589),L=n(585),P=n(587),A=n(588),D=n(584),N=n(577),W=n(2),H=Object(w.a)(),M=function(e,t,n){return{description:e,tick:t,cross:n}},R=[M("Make accurate predictions","\u2714\ufe0f","\u2714\ufe0f"),M("No Machine Learning expertise needed","\u2714\ufe0f","\u2714\ufe0f"),M("No training data needed","\u2714\ufe0f","\u2714\ufe0f"),M("Able to integrate Video and Image recognition into your app ","\u2714\ufe0f","\u2714\ufe0f"),M("Always learning and getting the latest models ","\u2714\ufe0f","Will pull updates every week from Cloud EVE"),M("No need to setup infrastructure","\u2714\ufe0f","X"),M("No need to maintain Eve","\u2714\ufe0f","X"),M("Free","Will always have a free tier","\u2714\ufe0f")];function q(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),r=Object(c.a)(i,2),j=r[0],x=r[1],f=Object(a.useState)(!1),w=Object(c.a)(f,2),M=w[0],q=w[1],B=Object(a.useState)(null),J=Object(c.a)(B,2),z=J[0],G=J[1],U=a.useState(!1),X=Object(c.a)(U,2),K=X[0],Q=X[1],Y=function(e,t){"clickaway"!==t&&Q(!1)},Z=function(e){return Object(W.jsx)(N.a,{open:K,autoHideDuration:6e3,onClose:Y,message:"error"})};Z("sdas");return Object(W.jsxs)(I.a,{theme:H,children:[Object(W.jsx)(p.a,{}),Object(W.jsxs)("main",{children:[Object(W.jsx)(l.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(W.jsxs)(E.a,{maxWidth:"sm",children:[Object(W.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"EVE"}),Object(W.jsxs)(g.a,{spacing:1,direction:"row",style:{justifyContent:"center"},children:[Object(W.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=star&count=true",frameborder:"0",scrolling:"0",width:"150",height:"20",title:"GitHub"}),Object(W.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=watch&count=true&v=2",frameborder:"0",scrolling:"0",width:"150",height:"20",title:"GitHub"}),Object(W.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=AIDeepLabs&repo=WinningEve-Server&type=fork&count=true",frameborder:"0",scrolling:"0",width:"150",height:"20",title:"GitHub"})]}),Object(W.jsx)("br",{}),Object(W.jsx)(v.a,{variant:"h6",align:"center",color:"text.secondary",paragraph:!0,children:"An open-source, free, REST Solution For Image and Video Recognition for your next project."}),Object(W.jsx)("br",{}),Object(W.jsxs)(g.a,{direction:"row",spacing:1,style:{justifyContent:"center"},children:[Object(W.jsx)(s.a,{variant:"contained",href:"#tryItOut",endIcon:Object(W.jsx)(y.a,{}),children:"Try It Out"}),Object(W.jsx)(s.a,{variant:"contained",href:"https://github.com/AIDeepLabs/WinningEve-Server",style:{backgroundColor:"#333",color:"#FFFFFF"},endIcon:Object(W.jsx)(O.a,{}),children:"View on GitHub"}),Object(W.jsx)(s.a,{variant:"contained",href:"https://documenter.getpostman.com/view/10049267/UVJhEFMH",style:{backgroundColor:"#EF5B25",color:"#FFFFFF"},endIcon:Object(W.jsx)(h.a,{}),children:"View API Docs"})]})]})}),Object(W.jsx)(l.a,{children:Object(W.jsx)(E.a,{sx:{py:8},maxWidth:"lg",children:Object(W.jsxs)(g.a,{spacing:2,children:[Object(W.jsx)(v.a,{variant:"h5",children:"Why does EVE exists?"}),Object(W.jsxs)(v.a,{variant:"body1",children:["Ever wanted to add a bit of image or video recognition into your application, but didn\u2019t know where to get started? Also wanted to use a solution which is open-source and free to use and not proprietary and hidden behind mysterious companies? ",Object(W.jsx)("br",{})," ",Object(W.jsx)("br",{})," I faced this problem when I wanted to create an app to sort out photos and videos. Unfortunately, all the solutions I found were paid or the solutions were proprietary and no information was on how they functioned. ",Object(W.jsx)("br",{})," ",Object(W.jsx)("br",{})," I decided to create EVE, a free, open-source, REST API solution for image and video recognition."]}),Object(W.jsxs)(g.a,{sx:{pt:4},direction:"column",spacing:2,justifyContent:"center",children:[Object(W.jsx)(v.a,{variant:"h5",children:"The Power of EVE through example"}),Object(W.jsx)(v.a,{variant:"body1",children:"Lets pass EVE an image lets say this cute doggo one:"}),Object(W.jsx)("img",{src:u,style:{width:"30%",alignSelf:"center"},alt:"dogo"}),Object(W.jsx)(v.a,{variant:"body1",children:"We can send EVE multiple ways as it is just a REST service lets use CURL, to send an image to EVE to identify."}),Object(W.jsx)(d.a,{showLineNumbers:!0,language:"bash",children:"curl --location --request POST 'http://aideeplabs/EVE/detectObjectsInImage' --form 'image=@\"dogo.jpeg\"'"}),Object(W.jsx)(v.a,{variant:"body1",children:"EVE is lightning quick and accurate as it is built using multiple models such as ResNet. EVE then responds back in a JSON format."}),Object(W.jsx)(d.a,{showLineNumbers:!0,language:"json",children:'{\n  "Lhasa": 0.02862674929201603,\n  "Maltese dog": 0.9127932190895081,\n  "Shih-Tzu": 0.00895776879042387,\n  "Tibetan terrier": 0.018368251621723175,\n  "toy poodle": 0.012540102936327457\n}'}),Object(W.jsx)(v.a,{variant:"body1",children:"Here we see that EVE has accurately identifies the image as a Maltese doggo with a 91% accuracy."})]}),Object(W.jsx)(v.a,{id:"tryItOut",variant:"h5",children:"Try It Out"}),Object(W.jsxs)(v.a,{variant:"body1",children:["EVE can predict videos and images. Feel free to try your own images and videos. Please note that the images and videos have a quota based on the amount of requests you make. If you exceed the quota you will be blocked, this is so everyone can try the prototype of EVE. Also feel free to run your own code, here is the documentation for EVE: ",Object(W.jsx)("a",{href:"https://documenter.getpostman.com/view/10049267/UVJhEFMH",children:"Documentation"})]}),Object(W.jsx)(v.a,{variant:"h6",children:"Images"}),Object(W.jsx)(v.a,{variant:"body1",children:"Pick an Image to send to EVE for a prediction."}),Object(W.jsx)(k.a,{filesLimit:1,acceptedFiles:["image/*"],dropzoneText:"Drag and drop an image here or click",onChange:function(e){return V=e[0]}}),Object(W.jsx)(s.a,{variant:"contained",onClick:function(){return function(e){if(console.log(e),void 0===e)return console.log("No Image found"),0;o(!0),x(null);var t=new FormData;t.append("image",e),fetch("http://localhost:8080/detectObjectsInImage",{method:"POST",body:t,dataType:"text"}).then((function(e){return console.log(e),e.text()})).then((function(e){x(e),o(!1)})).catch((function(e){return Z(e)}))}(V)},children:"Predict"}),n&&Object(W.jsx)(D.a,{}),j&&Object(W.jsx)(d.a,{showLineNumbers:!0,language:"json",children:j.replaceAll(",",",\n")}),Object(W.jsx)(v.a,{variant:"h6",children:"Videos"}),Object(W.jsx)(v.a,{variant:"body1",children:"Pick an Video to send to EVE for a prediction."}),Object(W.jsx)(k.a,{filesLimit:1,acceptedFiles:["video/*"],maxFileSize:104857600,dropzoneText:"Drag and drop an video here or click",onChange:function(e){return F=e[0]}}),Object(W.jsx)(s.a,{variant:"contained",onClick:function(){return function(e){if(void 0===e)return console.log("No Video found"),0;q(!0),G(null);var t=new FormData;t.append("video",e),fetch("http://localhost:8080/detectObjectsInVideo",{method:"POST",body:t,dataType:"text"}).then((function(e){return console.log(e),e.text()})).then((function(e){G(e),q(!1)})).catch((function(e){return Z(e)}))}(F)},children:"Predict"}),M&&Object(W.jsx)(D.a,{}),z&&Object(W.jsx)(d.a,{showLineNumbers:!0,language:"json",children:z.replaceAll(",",",\n")}),Object(W.jsx)(v.a,{variant:"h5",children:"EVEs flavours"}),Object(W.jsx)(v.a,{variant:"body1",children:"EVE is still being built in two flavours: cloud based and a standalone community version."}),Object(W.jsx)(L.a,{component:l.a,children:Object(W.jsxs)(S.a,{stickyHeader:!0,"aria-label":"simple table",children:[Object(W.jsx)(P.a,{children:Object(W.jsxs)(A.a,{children:[Object(W.jsx)(T.a,{children:"Features"}),Object(W.jsx)(T.a,{children:"Cloud EVE"}),Object(W.jsx)(T.a,{children:"Standalone Community EVE"})]})}),Object(W.jsx)(C.a,{children:R.map((function(e){return Object(W.jsxs)(A.a,{children:[Object(W.jsx)(T.a,{component:"th",scope:"row",children:e.description}),Object(W.jsx)(T.a,{children:e.tick}),Object(W.jsx)(T.a,{children:e.cross})]},e.description)}))})]})}),Object(W.jsx)(v.a,{variant:"h5",children:"Stay informed about upcoming updates by registering your email here:"}),Object(W.jsxs)(g.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[Object(W.jsx)(b.a,{label:"Email",inputProps:{inputMode:"email"}}),Object(W.jsx)(s.a,{variant:"contained",children:"Register your Interest"})]}),Object(W.jsx)(v.a,{variant:"body1",children:"If you have any feedback or comments feel free to email me at asim@poptani.com."})]})})})]}),Object(W.jsxs)(m.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(W.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0}),Object(W.jsx)(v.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p"})]})]})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,593)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))};r.a.render(Object(W.jsx)(o.a.StrictMode,{children:Object(W.jsx)(q,{})}),document.getElementById("root")),B()}},[[480,1,2]]]);
//# sourceMappingURL=main.ff20e155.chunk.js.map