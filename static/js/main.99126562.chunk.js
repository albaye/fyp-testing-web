(this.webpackJsonptesting_web=this.webpackJsonptesting_web||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(11),c=n.n(s),a=(n(19),n(20),n(14)),r=n.n(a),l=n(31),u=n(0),m=function(){return Object(u.jsxs)("div",{className:"container p-5 w-100 d-flex align-items-center flex-column justify-content-center",style:{height:"100vh"},children:[Object(u.jsx)("div",{className:"row m-2",children:Object(u.jsx)("div",{className:"col-12 text-center",children:"Welcome message to the tests"})}),Object(u.jsx)("div",{className:"row w-100 pb-5",children:Object(u.jsx)("div",{className:"col-12 justify-content-center p-5 text-center",children:Object(u.jsx)("a",{href:"./test2",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary py-3 px-5 fs-4",children:"Start test 2"})})})})]})},d=function(e){var t=e.question,n=e.options,o=e.qid,i=e.instruction;return Object(u.jsxs)("div",{className:"row py-4",children:[Object(u.jsx)("span",{children:t}),n.map((function(e,t){return Object(u.jsxs)("div",{className:"form-check m-2",children:[Object(u.jsx)("input",{className:"form-check-input",type:"radio",name:o,id:"".concat(o,"-").concat(t)}),Object(u.jsx)("label",{className:"form-check-label w-100","aria-label":e,htmlFor:"".concat(o,"-").concat(t),children:Object(u.jsx)("p",{className:"w-100",children:e})})]},JSON.stringify(e))})),Object(u.jsx)("div",{className:"form-text",children:i})]})},j=["Event name,x,y,timestamp\n"],h=function(){Object(o.useEffect)((function(){return console.log("aaaaaaa"),document.getElementById("root").className+="hide",window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var e=function(e){j.push("scroll,,,".concat(e.timeStamp,"\n"))},t=function(e){console.log("submit"),e.preventDefault(),console.log("unmounting");var t=document.createElement("a"),n=new Blob(j,{type:"text/csv"});t.href=URL.createObjectURL(n),t.download="myFile.csv",document.body.appendChild(t),t.click()};return Object(u.jsxs)("div",{className:"container",id:"test3",onMouseMove:function(e){j.push("mouse move,".concat(e.pageX,",").concat(e.pageY,",").concat(e.timeStamp,"\n"))},onClick:function(e){j.push("click,".concat(e.pageX,",").concat(e.pageY,",").concat(e.timeStamp,"\n"))},children:[Object(u.jsx)("div",{className:"row py-5",children:"Please complete this online form."}),Object(u.jsxs)("form",{className:"border p-3",onSubmit:t,children:[Object(u.jsxs)("div",{className:"row my-2",children:[Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)(d,{question:"Q1. Where do you prefer to watch films?",options:["Cinema","Online"],qid:"q1",instruction:"If you have chosen cinema go to question 3, otherwise go to question 4."}),Object(u.jsx)(d,{question:"Q2. How important is the soundtrack to you in a film?",options:["Very Important","Important","Unimportant","Not important at all"],qid:"q2",instruction:"Please submit the form"}),Object(u.jsx)(d,{question:"Q3. How often do you go to the cinema?",options:["Weekly","Monthly","Once a year"],qid:"q3",instruction:"Go to question 6"}),Object(u.jsx)(d,{question:"Q4. What do you use to watch films?",options:["Netflix","Prime Video"],qid:"q4",instruction:"Go to question 6"}),Object(u.jsx)(d,{question:"Q5. What makes you choose a film?",options:["Trailer","Adverts","Reviews","Actors","Word of mouth"],qid:"q5",instruction:"Please go to question 9"})]}),Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)(d,{question:"Q6. Do you prefer Empire Strikes or Titanic?",options:["Empire Strikes","Titanic"],qid:"q6",instruction:"If you have chosen Empire Strikes please go to Q7. Otherwise, go to Q10."}),Object(u.jsx)(d,{question:"Q7. Which of these Star Wars movie is your favourite?",options:["Episode I - The Phantom Menace","Episode VI - Return of the Jedi","Episode VII - The Force Awakens","Episode IX - The Rise of Skywalker"],qid:"q7",instruction:"Please go to Q8."}),Object(u.jsx)(d,{question:"Q8. Do you prefer a male or female lead?",options:["Male","Female","Don't mind"],qid:"q8",instruction:"Please go to Q5"}),Object(u.jsx)(d,{question:"Q9. Do you generally prefer Drama or Science Fiction Movies?",options:["Drama","Science Fiction"],qid:"q9",instruction:"Go to question 2."}),Object(u.jsx)(d,{question:"Q10. What was your favourite thing about Titanic?",options:["The characters","Disaster Drama","Special Effects","Historical basis"],qid:"q10",instruction:"Please go to Q8."})]})]}),Object(u.jsx)("p",{type:"submit",onClick:t,className:"btn btn-primary",children:"Submit"})]})]})};function p(){return Object(u.jsxs)(l.Switch,{children:[Object(u.jsx)(l.Route,{path:"/",exact:!0,component:m}),Object(u.jsx)(l.Route,{path:"/test2",exact:!0,component:h})]})}var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(r.a,{basename:"/fyp-testing-web",children:Object(u.jsx)(p,{})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.99126562.chunk.js.map