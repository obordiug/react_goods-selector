(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),s=n(5),r=n(6),a=n(8),d=n(7),l=n(2),i=n.n(l),u=n(1),h=n.n(u),f=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(a.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.listingOfSelectedGoods=function(e){if(1===e.length)return"".concat(e[0]," is selected");var t=e.join(", "),n=t.lastIndexOf(",");return"".concat(t.slice(0,n)," and ").concat(t.slice(n+2)," are selected ")},e.addGoodHandler=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.concat(t)}}))},e.removeGoodHandler=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearHandler=function(){e.setState({selectedGoods:[]})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("h1",{children:["Selected good:",0===t.length?"No goods selected":this.listingOfSelectedGoods(t)," ",Object(f.jsx)("button",{type:"button",onClick:this.clearHandler,className:h()({hide:0===t.length}),children:"X"})]}),Object(f.jsx)("ul",{children:j.map((function(n){return Object(f.jsxs)("li",{className:"list-item",children:[Object(f.jsx)("span",{className:h()({selected:t.some((function(e){return e===n}))}),children:n})," ",Object(f.jsx)("button",{type:"button",onClick:function(){e.addGoodHandler(n)},className:h()({hide:t.some((function(e){return e===n}))}),children:"Add"}),Object(f.jsx)("button",{type:"button",onClick:function(){e.removeGoodHandler(n)},className:h()({hide:t.every((function(e){return!(e===n)}))}),children:"Remove"})]},n)}))})]})}}]),n}(i.a.Component),m=b;o.a.render(Object(f.jsx)(m,{}),document.getElementById("root"));t.default=m}},[[15,1,2]]]);
//# sourceMappingURL=main.00d9af4b.chunk.js.map