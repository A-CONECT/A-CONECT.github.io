import{g as x}from"./index-f-GYBEF9.js";function _(r,s){for(var e=0;e<s.length;e++){const t=s[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var C=d;function d(){}d.mixin=function(r){var s=r.prototype||r;s.isWildEmitter=!0,s.on=function(e,t,n){this.callbacks=this.callbacks||{};var a=arguments.length===3,i=a?arguments[1]:void 0,o=a?arguments[2]:arguments[1];return o._groupName=i,(this.callbacks[e]=this.callbacks[e]||[]).push(o),this},s.once=function(e,t,n){var a=this,i=arguments.length===3,o=i?arguments[1]:void 0,l=i?arguments[2]:arguments[1];function g(){a.off(e,g),l.apply(this,arguments)}return this.on(e,o,g),this},s.releaseGroup=function(e){this.callbacks=this.callbacks||{};var t,n,a,i;for(t in this.callbacks)for(i=this.callbacks[t],n=0,a=i.length;n<a;n++)i[n]._groupName===e&&(i.splice(n,1),n--,a--);return this},s.off=function(e,t){this.callbacks=this.callbacks||{};var n=this.callbacks[e],a;return n?arguments.length===1?(delete this.callbacks[e],this):(a=n.indexOf(t),a!==-1&&(n.splice(a,1),n.length===0&&delete this.callbacks[e]),this):this},s.emit=function(e){this.callbacks=this.callbacks||{};var t=[].slice.call(arguments,1),n=this.callbacks[e],a=this.getWildcardCallbacks(e),i,o,l;if(n)for(l=n.slice(),i=0,o=l.length;i<o&&l[i];++i)l[i].apply(this,t);if(a)for(o=a.length,l=a.slice(),i=0,o=l.length;i<o&&l[i];++i)l[i].apply(this,[e].concat(t));return this},s.getWildcardCallbacks=function(e){this.callbacks=this.callbacks||{};var t,n,a=[];for(t in this.callbacks)n=t.split("*"),(t==="*"||n.length===2&&e.slice(0,n[0].length)===n[0])&&(a=a.concat(this.callbacks[t]));return a}};d.mixin(d);var H=C;function j(r,s){var e=-1/0;r.getFloatFrequencyData(s);for(var t=4,n=s.length;t<n;t++)s[t]>e&&s[t]<0&&(e=s[t]);return e}var m;typeof window<"u"&&(m=window.AudioContext||window.webkitAudioContext);var c=null,w=function(r,t){var e=new H;if(!m)return e;var t=t||{},n=t.smoothing||.1,a=t.interval||50,i=t.threshold,o=t.play,l=t.history||10,g=!0;c=t.audioContext||c||new m;var p,y,u;u=c.createAnalyser(),u.fftSize=512,u.smoothingTimeConstant=n,y=new Float32Array(u.frequencyBinCount),r.jquery&&(r=r[0]),r instanceof HTMLAudioElement||r instanceof HTMLVideoElement?(p=c.createMediaElementSource(r),typeof o>"u"&&(o=!0),i=i||-50):(p=c.createMediaStreamSource(r),i=i||-50),p.connect(u),o&&u.connect(c.destination),e.speaking=!1,e.suspend=function(){return c.suspend()},e.resume=function(){return c.resume()},Object.defineProperty(e,"state",{get:function(){return c.state}}),c.onstatechange=function(){e.emit("state_change",c.state)},e.setThreshold=function(f){i=f},e.setInterval=function(f){a=f},e.stop=function(){g=!1,e.emit("volume_change",-100,i),e.speaking&&(e.speaking=!1,e.emit("stopped_speaking")),u.disconnect(),p.disconnect()},e.speakingHistory=[];for(var b=0;b<l;b++)e.speakingHistory.push(0);var v=function(){setTimeout(function(){if(g){var f=j(u,y);e.emit("volume_change",f,i);var k=0;if(f>i&&!e.speaking){for(var h=e.speakingHistory.length-3;h<e.speakingHistory.length;h++)k+=e.speakingHistory[h];k>=2&&(e.speaking=!0,e.emit("speaking"))}else if(f<i&&e.speaking){for(var h=0;h<e.speakingHistory.length;h++)k+=e.speakingHistory[h];k==0&&(e.speaking=!1,e.emit("stopped_speaking"))}e.speakingHistory.shift(),e.speakingHistory.push(0+(f>i)),v()}},a)};return v(),e};const A=x(w),O=_({__proto__:null,default:A},[w]);export{O as h};
