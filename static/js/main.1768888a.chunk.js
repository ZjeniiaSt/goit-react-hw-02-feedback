(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=n(4),s=n(5),u=n(6),b=n(9),j=n(7),l=(n(14),n(0));var d=function(e){var t=e.title,n=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:t}),n]})},h=n(8);var v=function(e){var t=e.options,n=e.total,c=e.positivePercentage;return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object.entries(t).map((function(e){var t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("li",{children:[n,": ",c]},n)})),Object(l.jsxs)("li",{children:["Total: ",n]}),Object(l.jsxs)("li",{children:["Positive feedback: ",c," %"]})]})})};var O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{children:Object.keys(t).map((function(e){return Object(l.jsx)("button",{onClick:function(){return n(e)},children:e},e)}))})},f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(d,{title:"Statistics",children:Object(l.jsx)(v,{options:this.state,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),k=f;n(16);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1768888a.chunk.js.map