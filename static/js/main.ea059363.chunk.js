(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(5),a=c(6),l=c(8),d=c(7),r=c(1),i=c.n(r),u=c(2),j=c.n(u),h=(c(13),c(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={nameGood:"Jam",selectedGood:"Jam is selected"},e.selectedGoodHandler=function(t){e.setState({nameGood:t,selectedGood:"".concat(t," is selected")})},e.clearHandler=function(){e.setState({nameGood:"",selectedGood:"No goods selected"})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.nameGood,n=t.selectedGood;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Selected good:",n," ",Object(h.jsx)("button",{type:"button",onClick:function(){e.clearHandler()},className:j()({hide:""===c}),children:"X"})]}),Object(h.jsx)("ul",{children:m.map((function(t){return Object(h.jsxs)("li",{className:"list-item",children:[Object(h.jsx)("span",{className:j()({selected:c===t}),children:t})," ",Object(h.jsx)("button",{type:"button",onClick:function(){e.selectedGoodHandler(t)},className:j()({hide:t===c}),children:"Select"})]},t)}))})]})}}]),c}(i.a.Component),p=b;o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"));t.default=p}},[[15,1,2]]]);
//# sourceMappingURL=main.ea059363.chunk.js.map