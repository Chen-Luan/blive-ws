/**
 * id: vDPq
 * path: ./ui-components/end-recommend-panel
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function a(e){try{s(o.next(e))}catch(n){r(n)}}function l(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(a,l)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(s){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(a=0)),a;)try{if(t=1,o&&(i=2&l[0]?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,o=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=n.call(e,a)}catch(s){l=[6,s],o=0}finally{t=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},o=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.endRecommendPanel=void 0;var i,r,a=require("@bilibili-live/web-player-common");function l(e,n,t,o,i){n.classList.add("web-player-ending-panel"),n.style.cssText="\n    z-index: 3;\n    color: #fff;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #000;\n  ",n.appendChild(s(t,o,i))}function s(e,n,t){var o=document.createElement("div"),a=document.createElement("div");return o.style.cssText="\n    width: 606px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -moz-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    -o-transform: translate3d(-50%, -50%, 0);\n    transform: translate3d(-50%, -50%, 0);\n  ",e.style.cssText="\n    font-size: 28px;\n    color: #aaa;\n    text-align: center;\n    line-height: 50px;\n    height: 50px;\n    margin-bottom: 20px;\n  ",o.appendChild(e),n.classList.add("web-player-ending-panel-recommendList"),t.forEach(function(e,t){t<6&&r("info",{type:i.recommendListShow,data:e}),n.appendChild(c(e))}),n.style.cssText="\n    display: ".concat(t.length>0?"block":"none",";\n    height: 236px;\n    overflow: hidden;\n  "),a.innerText="闲置中",a.style.cssText="display: none;",o.appendChild(n),o.appendChild(a),o}function c(e){var n,t,o=document.createElement("a"),l=document.createElement("div"),s=document.createElement("div");l.style.cssText="\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  ",s.style.cssText="\n    width: 100%;\n    position: absolute;\n    height: 50px;\n    bottom: -20px;\n    z-index: 3;\n    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\n    color: #fffff;\n    -webkit-transition: bottom 0.3s ease-in-out;\n    -moz-transition: bottom 0.3s ease-in-out;\n    -ms-transition: bottom 0.3s ease-in-out;\n    -o-transition: bottom 0.3s ease-in-out;\n    transition: bottom 0.3s ease-in-out;\n  ";var c=document.createElement("div");c.style.cssText="\n    margin-top: 8px;\n    height: 16px;\n    position: relative;\n    line-height: 16px;\n    color: '#fff\n  ";var d=document.createElement("div");d.innerText=e.title,d.style.cssText="\n    padding: 0 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: #fff;\n  ";var p=document.createElement("div");p.style.cssText="\n    padding: 6px 8px;\n    color: #969696;\n    height: 16px;\n    position: relative;\n    line-height: 16px;\n  ";var u=document.createElement("div");u.style.cssText="\n    width: 60%;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    float: left;\n  ",u.innerText=e.uname;var h=document.createElement("span");h.style.cssText="\n    float: right;\n  ","online"in e&&(e.online>1e4?h.innerHTML=Math.floor(e.online/1e4).toString()+"万":h.innerText=e.online.toString()),!0===(null===(n=e.watched_show)||void 0===n?void 0:n.switch)&&null!=(null===(t=e.watched_show)||void 0===t?void 0:t.text_small)&&(h.innerText=e.watched_show.text_small),p.appendChild(u),p.appendChild(h),c.appendChild(d),s.appendChild(c),s.appendChild(p);var m=document.createElement("img");if(m.alt=e.title,m.src="".concat(e.cover).concat((0,a.isWebPSupported)()?"@384w_240h.webp":"@384w_240h.jpg"),m.style.cssText="\n    width: 100%;\n    height: 100%;\n    border: none;\n  ",l.appendChild(m),o.appendChild(l),o.appendChild(s),o.style.cssText="\n    width: 192px;\n    height: 108px;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    float: left;\n    overflow: hidden;\n    display: inline-block;\n    position: relative;\n    margin: 5px;\n    text-decoration: none;\n    outline: none;\n    color: #444;\n    font-size: 12px;\n    cursor: pointer;\n  ",o.href="javascript:void(0);",o.addEventListener("mouseover",function(){s.style.bottom="0px"}),o.addEventListener("mouseout",function(){s.style.bottom="-20px"}),o.onclick=function(){var n="text"in e?"//www.bilibili.com/video/".concat(e.bvid):"//live.bilibili.com/".concat(e.roomid);n="".concat(n,"?live_from=75001"),window.open(n),r("info",{type:i.recommendListClick,data:e}),r("redirect",{type:i.recommendListClick,data:n})},o.onmouseenter=function(){r("info",{type:i.recommendListMoveEnter,data:e})},"text"in e){var f=document.createElement("div");f.innerText=e.text,f.style.cssText="\n      background: #4fc1e9;\n      position: absolute;\n      top: 4px;\n      right: 5px;\n      height: 16px;\n      line-height: 16px;\n      width: 48px;\n      padding: 1px 4px;\n      color: #fff;\n      border-radius: 2px;\n    ",l.appendChild(f)}return o}function d(e,n,t,o,i){var s=t.roomId,c=t.rnd,d=t.showRecommend;void 0===i&&(i=""),r=o;var u=document.createElement("div"),h=document.createElement("div"),m=d;if(d){var f=(0,a.loading)(e);p(s,c).then(function(t){if(f(),m){var o=t.tips,r=void 0===o?"主播已关播":o,a=t.recommend,s=void 0===a?[]:a;h.innerText=r,""!==i&&(h.innerText=i),l(e,n,h,u,s)}else h.innerText="主播已关播",l(e,n,h,u,[])}).catch(function(e){a.logger.error(e),f()})}else h.innerText="主播已关播",l(e,n,h,u,[]);return function(){m=!1,h.innerText="主播已关播",u.style.display="none"}}function p(l,s){return n(this,void 0,Promise,function(){var n,c;return t(this,function(t){switch(t.label){case 0:return[4,(0,a.ajax)("/xlive/web-room/v1/index/getOffLiveList?room_id=".concat(l,"&count=8&rnd=").concat(s.toFixed(0)))];case 1:return null!=(n=t.sent())&&Array.isArray(n.recommend)||r("info",{type:i.recommendListNull}),c=n.record_list.map(function(n){return e(e({},n),{roomid:n.rid,text:"主播推荐"})}),n.recommend=o(o([],c,!0),n.recommend,!0).sort(function(e,n){return e.global_order-n.global_order}),[2,n]}})})}!function(e){e.recommendListNull="nolive",e.recommendListClick="click",e.recommendListMoveEnter="move",e.recommendListShow="show"}(i||(i={})),exports.endRecommendPanel=d;
})()