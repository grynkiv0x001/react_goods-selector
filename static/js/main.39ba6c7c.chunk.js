(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(2),c=n.n(s),l=n(6),r=n(3),i=n(4),u=n(8),d=n(7),m=n(17),p=n(5),f=n.n(p),b=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Ham","Chicke","Milk","Tomatoes"].map((function(e){return{id:Object(m.a)(),good:e}}))),_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:["Jam"]},e.titleUpdate=function(){var t=e.state.selectedGoods;return 0===t.length?"Select goods from list below: ":"Selected: ".concat(t.length," goods")},e.selectGoods=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[t])}}))},e.removeGoods=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.resetSelection=function(){return e.setState({selectedGoods:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App__title"},this.titleUpdate()),a.a.createElement("ul",{className:"list"},b.map((function(n,o){var s=n.good,c=n.id;return a.a.createElement("li",{key:c,className:"list__item"},a.a.createElement("div",{className:"list__item-name"},o+1,". ",s),a.a.createElement("button",{type:"button",className:f()("list__item-button",{"list__item-button--active":t.includes(s)}),onClick:function(){return t.includes(s)?e.removeGoods(s):e.selectGoods(s)}}))}))),a.a.createElement("div",{className:"App__reset"},a.a.createElement("button",{type:"button",className:"App__reset-button",onClick:this.resetSelection},"Clear all")))}}]),n}(a.a.Component);c.a.render(a.a.createElement(_,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.39ba6c7c.chunk.js.map