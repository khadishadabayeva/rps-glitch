(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],l=0,p=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"center-container"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.audioDevice,expression:"audioDevice"}],staticClass:"margin-10 device-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.audioDevice=t.target.multiple?n:n[0]}}},e._l(e.audioDevices,(function(t,r){return n("option",{key:r,domProps:{value:t.deviceId}},[e._v(" "+e._s(t.label)+" ")])})),0),n("table",{staticClass:"margin-10"},[null!=e.topPrediction?n("tr",{staticClass:"top-row"},[n("td",[e._v(e._s(e.topPrediction.name))]),n("td",[e._v(e._s(e.topPrediction.score)+" %")])]):n("tr",[n("td",[e._v("Not sure...")])]),e._l(e.filteredSortedPredictions,(function(t,r){return n("tr",{key:r,staticClass:"other-rows"},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.score)+" %")])])}))],2)])])},i=[],c=n("1da1"),a=n("2909"),s=(n("96cf"),n("4de4"),n("159b"),n("99af"),n("b680"),n("b0c0"),n("ce1a")),u=n("af3e"),d={name:"App",components:{},data:function(){return{isModelReady:!1,predictions:[],audioTrackConstraints:{},audioDevices:[],audioDevice:"",messages:[],socketId:""}},sockets:{connect:function(){this.socketId=this.$socket.id},serverMessage:function(e){this.messages.push(e)},serverMessages:function(e){this.messages=e}},watch:{audioDevice:function(e){this.recognizer&&this.setupRecognizer(e)}},computed:{sortedPredictions:function(){var e=Object(a["a"])(this.predictions);return e.sort((function(e,t){return t.score-e.score})),e},topPrediction:function(){return this.sortedPredictions.length>0?this.sortedPredictions[0]:null},filteredSortedPredictions:function(){var e=this.topPrediction;return this.sortedPredictions.filter((function(t){return t!=e}))}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s["a"]("webgl"),n=navigator.mediaDevices.enumerateDevices(),n.then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.forEach((function(t){"audioinput"===t.kind&&e.audioDevices.push(t)})),e.audioDevice=e.audioDevices[0].deviceId,t.next=4,e.createModel();case 4:e.recognizer=t.sent,e.classLabels=e.recognizer.wordLabels(),e.setupRecognizer(e.audioDevice);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.webSocket=new WebSocket("wss://a91cdfc1ad7d.ngrok.io/");case 4:case"end":return t.stop()}}),t)})))()},methods:{setupRecognizer:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.recognizer.isListening()){n.next=3;break}return n.next=3,t.recognizer.stopListening();case 3:return n.next=5,t.recognizer.listen((function(e){t.handlePredictions(e.scores)}),{includeSpectrogram:!1,probabilityThreshold:.75,invokeCallbackOnNoiseAndUnknown:!0,overlapFactor:.5,audioTrackConstraints:{deviceId:e}});case 5:case"end":return n.stop()}}),n)})))()},createModel:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(location.protocol,"//").concat(location.host,"/model.json"),n="".concat(location.protocol,"//").concat(location.host,"/metadata.json"),r=u["a"]("BROWSER_FFT",void 0,t,n),e.next=5,r.ensureModelLoaded();case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()},handlePredictions:function(e){var t=this;this.predictions.length=0,e.forEach((function(e,n){t.predictions.push({name:t.classLabels[n],score:(100*e).toFixed(1)})}));var n={username:"Khadisha",detectiontype:"speech",className:this.topPrediction.name,score:this.topPrediction.score};this.webSocket.send(JSON.stringify(n))}}},l=d,p=(n("034f"),n("2877")),f=Object(p["a"])(l,o,i,!1,null,null,null),v=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.cda17c98.js.map