(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7665:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/additional",function(){return n(6108)}])},6108:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),l=n(9008),o=n.n(l),s=n(8515),a=n(7294),i=n(1852),c=n(4084),d=n(6848),m=n(7416),h=n(7004),u=n(5849),x=n(7536),f=n(7533),p=n(4231);let k=p.Ry({birthDate:p.Z_(),class:p.IX(p.Z_().required()),clubTeam:p.Z_(),fullName:p.Z_(),height:p.IX(p.Z_().required()),highschool:p.Z_(),hometown:p.Z_(),position:p.Z_(),sport:p.IX(p.Z_().required()),weight:p.IX(p.Z_().required())}).required(),j=e=>{var t;let{edit:n}=e,[l,o]=(0,a.useState)(),s=(0,h.V1)(u.wk,"fetchID"),i=(0,h.V1)(u.wk,"editID"),p=null===(t=u.I8.currentUser)||void 0===t?void 0:t.uid,{register:j,handleSubmit:g,control:y,formState:{isValid:N,errors:v}}=(0,x.cI)({resolver:(0,f.X)(k),mode:"onChange"});console.log(y._formValues);let b=e=>{console.log(p,"submit=============="),i({id:p,userData:{fullName:e.fullName,hometown:e.hometown,highschool:e.highschool,class:e.class,sport:e.sport,birthDate:e.birthDate,clubTeam:e.clubTeam,position:e.position,height:e.height,weight:e.weight}}).then(e=>{console.log(e.data,"result, =================="),o(e.data)})};return(0,a.useEffect)(()=>{s({id:p}).then(e=>{console.log(e.data),o(e.data)})},[]),console.log(null==l?void 0:l.birthDate),(0,r.jsx)("div",{className:"flex flex-col justify-between items-between h-full w-full mb-20",children:(0,r.jsxs)("form",{className:"flex flex-col justify-start h-full w-full",onSubmit:g(b),children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-start mt-2 mb-[10px] h-full w-full",children:[(0,r.jsxs)("div",{className:"mb-2 w-full mr-6 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"First Name"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:null==l?void 0:l.fullName.slice(0,8),...j("fullName")})]}),(0,r.jsxs)("div",{className:"mb-2 w-full ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Last Name"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:null==l?void 0:l.fullName.slice(9,16),...j("hometown")})]})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center mt-2 mb-[10px] h-full w-full",children:[(0,r.jsxs)("div",{className:"mb-2  w-full mr-6 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Gender"}),(0,r.jsx)(x.Qr,{name:"class",control:y,render:e=>{let{field:{onChange:t,value:n}}=e;return(0,r.jsx)(c.Z,{width:"w-full",list:"grad",hint:"Choose One",value:n,onChange:t})}})]}),(0,r.jsxs)("div",{className:"mb-2 w-full ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Date of Birth"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:null==l?void 0:l.birthDate,...j("hometown")})]})]}),(0,r.jsxs)("div",{className:"mb-2 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Email Address"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"Email",...j("hometown")})]}),(0,r.jsxs)("div",{className:"mb-2 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Primary Phone no."}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"000-000-000",...j("hometown")})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-start mt-2 mb-[10px] h-full w-full",children:[(0,r.jsxs)("div",{className:"mb-2 w-full mr-6 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Guardian First Name"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"John",...j("fullName")})]}),(0,r.jsxs)("div",{className:"mb-2 w-full ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Guardian Last Name"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"Doe",...j("hometown")})]})]}),(0,r.jsxs)("div",{className:"mb-2 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Guardian Email Address"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"Email",...j("hometown")})]}),(0,r.jsxs)("div",{className:"mb-2 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Guardian Primary Phone no."}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"000-000-000",...j("hometown")})]}),(0,r.jsxs)("div",{className:"mb-2 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Address"}),(0,r.jsx)(x.Qr,{name:"class",control:y,render:e=>{let{field:{onChange:t,value:n}}=e;return(0,r.jsx)(c.Z,{width:"w-full",list:"grad",hint:"30 Clinton Drive",value:n,onChange:t})}})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center mt-2 mb-[10px] h-full w-full",children:[(0,r.jsxs)("div",{className:"mb-2 w-full mr-4 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"City"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"Los Angeles",...j("fullName")})]}),(0,r.jsxs)("div",{className:"mb-2 w-full mr-4 ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"State"}),(0,r.jsx)(x.Qr,{name:"class",control:y,render:e=>{let{field:{onChange:t,value:n}}=e;return(0,r.jsx)(c.Z,{width:"w-full",list:"grad",hint:"CA",value:n,onChange:t})}})]}),(0,r.jsxs)("div",{className:"mb-2 w-full ".concat(n?"pointer-events-none":"pointer-events-all"),children:[(0,r.jsx)(m.Z,{htmlFor:"lastName",className:"text-md text-gray-700",children:"Zip Code"}),(0,r.jsx)(d.Z,{className:"bg-gray-50 border-gray-400 placeholder-gray-600",hint:"3ND231",...j("hometown")})]})]})]})})},g=()=>{let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!0);return(0,i.useMediaQuery)({query:"(min-width: 1000px)"}),(0,i.useMediaQuery)({query:"(max-width: 800px)"}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"TPC - Home"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"flex flex-col h-full w-full bg-gray-50 justify-start items-start rounded-3xl mt-5 pl-10 pr-10",children:[(0,r.jsxs)("div",{className:"flex flex-row w-full justify-between items-center mb-4",children:[(0,r.jsx)("p",{className:"text-2xl text-black ml-0 mt-4",children:"Additional Details"}),(0,r.jsxs)("div",{className:"flex w-3/12 flex-row items-center justify-start mt-4",children:[(0,r.jsx)(s.Z,{size:25,color:"#111"}),(0,r.jsxs)("button",{className:"ml-2",onClick:()=>{},children:[" ","Edit Information"]})]})]}),(0,r.jsx)(j,{edit:c})]})]})};g.layout="main",g.background="default";var y=g},8515:function(e,t,n){"use strict";var r=n(7294),l=n(9818),o=n(7258),s=new Map;s.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("polyline",{points:"176 211.2 176 176 128 72 80 176 80 211.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M128,200a24,24,0,0,1,48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M128,224V200a24,24,0,0,0-48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"98.5",y1:"136",x2:"157.5",y2:"136",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),s.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M80,211.2a96,96,0,1,1,96,0h0V176L128,72,80,176v35.2Z",opacity:"0.2"}),r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("polyline",{points:"176 211.2 176 176 128 72 80 176 80 211.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M128,192a24,24,0,0,1,48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M128,224V192a24,24,0,0,0-48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"102.2",y1:"128",x2:"153.8",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),s.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M201.5,54.5a103.8,103.8,0,0,0-147,0,103.8,103.8,0,0,0,0,147,103.8,103.8,0,0,0,147,0,103.8,103.8,0,0,0,0-147ZM128,170.9a31.9,31.9,0,0,0-32.3-9.8L111,128h34l15.3,33.1a31.9,31.9,0,0,0-32.3,9.8Zm40,35.5a89,89,0,0,1-32,9.2V192a16,16,0,0,1,32,0Zm22.2-16.2c-2,2-4.1,3.9-6.2,5.7V176a9.8,9.8,0,0,0-.7-3.4l-48-104h-.1a4.1,4.1,0,0,0-.5-.9c0-.1,0-.1-.1-.2l-.5-.7H134a4.6,4.6,0,0,0-.7-.7h-.2l-.7-.6h-.2l-.8-.5h-.1l-.9-.3h-.3l-.9-.2h-2.4l-1,.2h-.2l-.8.3h-.2l-.9.4h-.1l-.7.6h-.2l-.7.7h-.1l-.5.7-.2.2a4.1,4.1,0,0,1-.5.9l-22.1,48h0L72.7,172.6A9.8,9.8,0,0,0,72,176v19.9c-2.1-1.8-4.2-3.7-6.2-5.7a88,88,0,1,1,124.4,0Z"}))}),s.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("polyline",{points:"176 211.2 176 176 128 72 80 176 80 211.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M128,192a24,24,0,0,1,48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M128,224V192a24,24,0,0,0-48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"102.2",y1:"128",x2:"153.8",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),s.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("polyline",{points:"176 211.2 176 176 128 72 80 176 80 211.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M128,192a24,24,0,0,1,48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M128,224V192a24,24,0,0,0-48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"102.2",y1:"128",x2:"153.8",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),s.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("polyline",{points:"176 211.2 176 176 128 72 80 176 80 211.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M128,192a24,24,0,0,1,48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M128,224V192a24,24,0,0,0-48,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"102.2",y1:"128",x2:"153.8",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var a=function(e,t){return(0,l._)(e,t,s)},i=(0,r.forwardRef)(function(e,t){return r.createElement(o.Z,Object.assign({ref:t},e,{renderPath:a}))});i.displayName="PencilCircle",t.Z=i}},function(e){e.O(0,[16,597,249,347,192,774,888,179],function(){return e(e.s=7665)}),_N_E=e.O()}]);