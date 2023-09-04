/**
 * id: MY3w
 * path: ./ui-components/log-panel
 */

(function(require,module,exports) {
"use strict";var e,t,n,i,o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},a=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var s=require("@bilibili-live/web-player-common"),l=r(require("./log-panel.less")),c="web-player-show-log",h=function(){function r(a){e.set(this,s.createElement("div",{classname:l.default.webPlayerLogPanel})),t.set(this,s.createElement("pre")),n.set(this,!1),i.set(this,null),this.initPanel(),a.appendChild(o(this,e)),"1"===localStorage.getItem(c)&&this.show()}return r.prototype.show=function(){o(this,e).style.display="block",o(this,n)||a(this,i,this.syncLogger()),localStorage.setItem(c,"1")},r.prototype.destroy=function(){var t;null===(t=o(this,i))||void 0===t||t.call(this),o(this,e).remove()},r.prototype.initPanel=function(){var t=this.createCloseBtn();o(this,e).appendChild(t)},r.prototype.createCloseBtn=function(){var t=this,n=s.createElement("div",{text:"[x]",classname:l.default.closeBtn});return n.addEventListener("click",function(n){n.stopPropagation(),o(t,e).style.display="none",localStorage.setItem(c,"0")}),n},r.prototype.syncLogger=function(){var i=this;a(this,n,!0);var r=document.createDocumentFragment();return s.logger.history().forEach(function(e){r.appendChild(c(e))}),o(this,t).appendChild(r),o(this,e).appendChild(o(this,t)),s.logger.watch(function(e){o(i,t).appendChild(c(e))});function c(e){var t=document.createElement("code");return t.classList.add(l.default["log"+e.level]),t.textContent=s.logger.stringify(e,{tag:!1,time:!1})+"\n",t}},r}();e=new WeakMap,t=new WeakMap,n=new WeakMap,i=new WeakMap,exports.default=h;
})()