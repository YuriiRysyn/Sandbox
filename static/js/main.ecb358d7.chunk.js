(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){e.exports=t(27)},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),s=t(1),o=t(3),d=t(9),i=t.n(d),u=function(e){var a=e.player,t=e.isAutoPlayEnabled,n=e.setIsAutoPlayEnabled,c=e.playerParams,r=e.handleProgress;return l.a.createElement(i.a,{ref:a,className:"react-player",controls:!0,url:"https://d1dgcz2mzc8ifr.cloudfront.net/speaking-test-3qs-jack/index.m3u8",width:"320px",playing:c.isPlaying,playsinline:!0,onProgress:r,onStart:function(){t||n(!0)},muted:!0})};t(26);var p=function(){var e=l.a.createRef(),a=Object(n.useState)(!1),t=Object(o.a)(a,2),c=t[0],r=t[1],d=Object(n.useState)({isPlaying:!0,playedSeconds:"",loadedSeconds:""}),i=Object(o.a)(d,2),p=i[0],y=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{player:e,isAutoPlayEnabled:c,setIsAutoPlayEnabled:r,playerParams:p,handleProgress:function(e){var a=Math.round(e.playedSeconds),t=Math.round(e.loadedSeconds);y(Object(s.a)(Object(s.a)({},p),{},{playedSeconds:a,loadedSeconds:t}))}}),l.a.createElement("p",null,p.playedSeconds),!c&&l.a.createElement("button",{onClick:function(){y(Object(s.a)(Object(s.a)({},p),{},{isPlaying:!1})),setTimeout((function(){y(Object(s.a)(Object(s.a)({},p),{},{isPlaying:!0}))}),1)}},"Play"," "))};r.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ecb358d7.chunk.js.map