(this["webpackJsonptic-tac-toe-redux"]=this["webpackJsonptic-tac-toe-redux"]||[]).push([[0],{23:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(0),c=r.n(s),i=r(5),a=r.n(i),o=(r(23),r(17)),u=r(6),h=r(7),d=r(10),l=r(9);var j=function(e){return Object(n.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},p=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(n.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(c.a.Component),b=r(8),O=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"handleClick",value:function(e){var t=this.props.history.slice(0,this.props.stepNumber+1),r=t[t.length-1].squares.slice();x(r)||r[e]||(r[e]=this.props.xIsNext?"X":"O",(0,this.props.dispatch)({type:"MOVE",history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.props.xIsNext}))}},{key:"jumpTo",value:function(e){(0,this.props.dispatch)({type:"JUMP_TO",history:this.props.history,stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.props.history,s=r[this.props.stepNumber],c=x(s.squares),i=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=c?"Winner: "+c:"Next player: "+(this.props.xIsNext?"X":"O"),Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)("div",{className:"game-board",children:Object(n.jsx)(p,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(n.jsxs)("div",{className:"game-info",children:[Object(n.jsx)("div",{children:e}),Object(n.jsx)("ol",{children:i})]})]})}}]),r}(c.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(o.a)(t[r],3),s=n[0],c=n[1],i=n[2];if(e[s]&&e[s]===e[c]&&e[s]===e[i])return e[s]}return null}var v=O=Object(b.b)((function(e){return{history:e.history,xIsNext:e.xIsNext,stepNumber:e.stepNumber}}))(O);var f=function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("div",{id:"header",children:Object(n.jsx)("p",{id:"header-title",children:"Tic Tac Toe"})})})};var m=function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("div",{id:"footer",children:Object(n.jsxs)("p",{children:["This site is only an example project for ",Object(n.jsx)("a",{href:"https://www.epicodus.com/",children:"Epicodus"})]})})})};var N=function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{className:"contain",children:[Object(n.jsx)(f,{}),Object(n.jsx)("div",{id:"spacing",children:Object(n.jsx)(v,{})}),Object(n.jsx)(m,{})]})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),c(e),i(e)}))},g=r(3),q=Object(g.combineReducers)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{squares:Array(9).fill(null)}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE":case"JUMP_TO":return t.history;default:return e}},xIsNext:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE":case"JUMP_TO":return t.xIsNext;default:return e}},stepNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE":case"JUMP_TO":return t.stepNumber;default:return e}}}),k=r(16),C=Object(g.createStore)(q,Object(k.devToolsEnhancer)());a.a.render(Object(n.jsx)(b.a,{store:C,children:Object(n.jsx)(N,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.7251d579.chunk.js.map