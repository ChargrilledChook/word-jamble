(this["webpackJsonpword-jamble"]=this["webpackJsonpword-jamble"]||[]).push([[0],[,,,,,,,,,,function(e,n,i){},function(e,n,i){},function(e,n,i){},,function(e,n,i){},,,function(e,n,i){},function(e,n,i){},function(e,n,i){},function(e,n,i){},function(e,n,i){},function(e,n,i){},function(e,n,i){"use strict";i.r(n);var t=i(1),o=i.n(t),r=i(5),a=i.n(r),c=(i(10),i(11),i(12),i(0));var s=function(){return Object(c.jsx)("header",{className:"site-header",children:"Word Jamble"})},d=i(2),l=(i(14),i(3)),u=i.n(l),f=[{word:"acquire",definition:"Obtain, get gain "},{word:"acquisition",definition:"Achievement, purchase, possession, asset"},{word:"argument",definition:"Quarrel, disagreement, case, reasoning, contention"},{word:"assumption",definition:"Statement guess theory belief"},{word:"coordinate",definition:"Organize, direct, manage, bring together"},{word:"dialect",definition:"Language, talk, idiom"},{word:"editorial",definition:"Viewpoint, perspective, position, point of view"},{word:"etiquette",definition:"Manners, good manners, protocol"},{word:"expository",definition:"Explanation, account"},{word:"figurative",definition:"Metaphoric, abstract"},{word:"literal",definition:"Factual, truthful, exact, word by word, verbatim"},{word:"inconsistency",definition:"Not in agreement, conflicting, unpredictable, shifting, unreliable, erratic"},{word:"jargon",definition:"Terminology, slang, lingo"},{word:"modify",definition:"Alteration, change, adjustment"},{word:"projection",definition:"Outcrop, bulge, forecast, prediction"},{word:"slant",definition:"Angle, viewpoint, attitude, point of view"},{word:"slang",definition:"Informal usage, playful language or idioms"},{word:"stereotype",definition:"Typecast, label"},{word:"subordinate",definition:"Secondary, lesser, inferior, assistant, junior, underling"},{word:"transition",definition:"Change, evolution, shift, alteration, transfer"},{word:"inflection",definition:"Nuance, variation, variety"},{word:"collaboration",definition:"Teamwork, partnership, group, effort"},{word:"clarify",definition:"Make clear, explain, spell out, simplify, refine, purify, filter"},{word:"exponent",definition:"Advocate, supporter, example, model, interpreter, explainer"},{word:"ratio",definition:"Relation, relative amount, percentage"},{word:"proportion",definition:"Amount ,quantity, ratio, comparison, relationship"},{word:"discord",definition:"Disagreement, conflict, dispute, disharmony, friction"},{word:"adapt",definition:"Version, edition, alteration, change"},{word:"approximate",definition:"Estimated, fairly accurate, rough, near, ballpark"},{word:"transformation",definition:"Alteration, change, conversion, renovation"},{word:"composition",definition:"Create, write, arrange, calm, settle down"},{word:"objection",definition:"Opposition, protest, doubt"},{word:"supported",definition:"Hold up, maintain, foundation, encourage, assist, backing"},{word:"sequence",definition:"Chronological, in order"},{word:"maintain",definition:"Uphold, preserve, argue, claim, look after, care for"},{word:"promote",definition:"Endorse, encourage, advance, further advertise, campaign for"},{word:"extensive",definition:"Widespread, wide-ranging, big, vast"},{word:"formal",definition:"Procedure, requirement, reserve, stiffness"}];i(17);var j=function(e){var n=e.word,i=e.definition,o=Object(t.useState)(Object(l.shuffle)(n.split("")).join(" ").toUpperCase()),r=Object(d.a)(o,2),a=r[0],s=r[1];return Object(t.useEffect)((function(){return s(Object(l.shuffle)(n.split("")).join(" ").toUpperCase())}),[n]),Object(c.jsxs)("div",{className:"center-text",children:[Object(c.jsx)("h2",{className:"jumble",children:a}),Object(c.jsx)("p",{className:"hint-text",children:i})]})};i(18);var p=function(e){var n=e.handleChange,i=e.answer,t=e.playRound;return Object(c.jsxs)("form",{className:"board-input",children:[Object(c.jsx)("input",{className:"main-input",type:"text",onChange:n,value:i}),Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsx)("button",{onClick:function(e){return t(e)},children:"Pass"}),Object(c.jsx)("button",{onClick:function(e){return t(e)},children:"Enter"})]})]})};i(19);var b=function(e){var n=e.score;return Object(c.jsxs)("div",{className:"board-header",children:[Object(c.jsxs)("div",{className:"header-cell",children:["Score: ",n]}),Object(c.jsx)("div",{className:"header-cell",children:"Hint"}),Object(c.jsx)("div",{className:"header-cell",children:"Grade: 5"})]})};i(20),i(21);var m=function(e){var n=e.score,i=e.reset;return Object(c.jsxs)("div",{className:"game-over",children:[Object(c.jsxs)("h2",{children:["Round over! You scored ",n," points!"]}),Object(c.jsx)("button",{onClick:i,className:"button replay",children:"Play Again"})]})};var w=function(){var e=Object(t.useState)(f),n=Object(d.a)(e,2),i=n[0],o=n[1],r=Object(t.useState)(u.a.sample(i)),a=Object(d.a)(r,2),s=a[0],l=a[1],w=Object(t.useState)(""),h=Object(d.a)(w,2),g=h[0],v=h[1],O=Object(t.useState)(0),x=Object(d.a)(O,2),y=x[0],N=x[1],C=function(){return o(f)};return Object(c.jsxs)("main",{className:"main-board",children:[Object(c.jsx)(b,{score:y}),i.length<1?Object(c.jsx)(m,{score:y,reset:C}):Object(c.jsx)(j,{word:s.word,definition:s.definition}),Object(c.jsx)(p,{handleChange:function(e){return v(e.target.value)},answer:g,playRound:function(e){e.preventDefault(),i.length<1||(s.word.toLowerCase()===g.toLowerCase()&&N(y+1),o(i.filter((function(e){return e.word!==s.word}))),l(u.a.sample(i)),v(""))}})]})};i(22);var h=function(){return Object(c.jsx)("footer",{className:"site-footer",children:"Made by two mad lads for the Odin Game Jam"})};var g=function(){return Object(c.jsxs)("div",{className:"Layout",children:[Object(c.jsx)(s,{}),Object(c.jsx)(w,{}),Object(c.jsx)(h,{})]})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.92d40ad1.chunk.js.map