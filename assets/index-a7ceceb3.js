function AC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var NC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function IC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(e,i);return new o}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var hx={exports:{}},Dd={},px={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc=Symbol.for("react.element"),jC=Symbol.for("react.portal"),RC=Symbol.for("react.fragment"),MC=Symbol.for("react.strict_mode"),DC=Symbol.for("react.profiler"),LC=Symbol.for("react.provider"),$C=Symbol.for("react.context"),zC=Symbol.for("react.forward_ref"),FC=Symbol.for("react.suspense"),BC=Symbol.for("react.memo"),HC=Symbol.for("react.lazy"),Ey=Symbol.iterator;function UC(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var mx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gx=Object.assign,vx={};function xl(t,e,n){this.props=t,this.context=e,this.refs=vx,this.updater=n||mx}xl.prototype.isReactComponent={};xl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yx(){}yx.prototype=xl.prototype;function wg(t,e,n){this.props=t,this.context=e,this.refs=vx,this.updater=n||mx}var bg=wg.prototype=new yx;bg.constructor=wg;gx(bg,xl.prototype);bg.isPureReactComponent=!0;var Ty=Array.isArray,_x=Object.prototype.hasOwnProperty,Sg={current:null},xx={key:!0,ref:!0,__self:!0,__source:!0};function wx(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)_x.call(e,r)&&!xx.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sc,type:t,key:o,ref:s,props:i,_owner:Sg.current}}function WC(t,e){return{$$typeof:sc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kg(t){return typeof t=="object"&&t!==null&&t.$$typeof===sc}function VC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Py=/\/+/g;function $h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VC(""+t.key):e.toString(36)}function ff(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case sc:case jC:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+$h(s,0):r,Ty(i)?(n="",t!=null&&(n=t.replace(Py,"$&/")+"/"),ff(i,e,n,"",function(c){return c})):i!=null&&(kg(i)&&(i=WC(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Py,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Ty(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+$h(o,a);s+=ff(o,e,n,l,i)}else if(l=UC(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+$h(o,a++),s+=ff(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Nc(t,e,n){if(t==null)return t;var r=[],i=0;return ff(t,r,"","",function(o){return e.call(n,o,i++)}),r}function YC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jn={current:null},df={transition:null},KC={ReactCurrentDispatcher:Jn,ReactCurrentBatchConfig:df,ReactCurrentOwner:Sg};Ne.Children={map:Nc,forEach:function(t,e,n){Nc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nc(t,function(){e++}),e},toArray:function(t){return Nc(t,function(e){return e})||[]},only:function(t){if(!kg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=xl;Ne.Fragment=RC;Ne.Profiler=DC;Ne.PureComponent=wg;Ne.StrictMode=MC;Ne.Suspense=FC;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gx({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Sg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_x.call(e,l)&&!xx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sc,type:t.type,key:i,ref:o,props:r,_owner:s}};Ne.createContext=function(t){return t={$$typeof:$C,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LC,_context:t},t.Consumer=t};Ne.createElement=wx;Ne.createFactory=function(t){var e=wx.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:zC,render:t}};Ne.isValidElement=kg;Ne.lazy=function(t){return{$$typeof:HC,_payload:{_status:-1,_result:t},_init:YC}};Ne.memo=function(t,e){return{$$typeof:BC,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=df.transition;df.transition={};try{t()}finally{df.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(t,e){return Jn.current.useCallback(t,e)};Ne.useContext=function(t){return Jn.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return Jn.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return Jn.current.useEffect(t,e)};Ne.useId=function(){return Jn.current.useId()};Ne.useImperativeHandle=function(t,e,n){return Jn.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return Jn.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return Jn.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return Jn.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return Jn.current.useReducer(t,e,n)};Ne.useRef=function(t){return Jn.current.useRef(t)};Ne.useState=function(t){return Jn.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return Jn.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return Jn.current.useTransition()};Ne.version="18.2.0";px.exports=Ne;var L=px.exports;const pe=xg(L),Bf=AC({__proto__:null,default:pe},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XC=L,GC=Symbol.for("react.element"),qC=Symbol.for("react.fragment"),QC=Object.prototype.hasOwnProperty,ZC=XC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JC={key:!0,ref:!0,__self:!0,__source:!0};function bx(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)QC.call(e,r)&&!JC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GC,type:t,key:o,ref:s,props:i,_owner:ZC.current}}Dd.Fragment=qC;Dd.jsx=bx;Dd.jsxs=bx;hx.exports=Dd;var x=hx.exports,Dp={},Sx={exports:{}},$r={},kx={exports:{}},Cx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,H){var S=$.length;$.push(H);e:for(;0<S;){var Q=S-1>>>1,ae=$[Q];if(0<i(ae,H))$[Q]=H,$[S]=ae,S=Q;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var H=$[0],S=$.pop();if(S!==H){$[0]=S;e:for(var Q=0,ae=$.length,it=ae>>>1;Q<it;){var ue=2*(Q+1)-1,Me=$[ue],me=ue+1,De=$[me];if(0>i(Me,S))me<ae&&0>i(De,Me)?($[Q]=De,$[me]=S,Q=me):($[Q]=Me,$[ue]=S,Q=ue);else if(me<ae&&0>i(De,S))$[Q]=De,$[me]=S,Q=me;else break e}}return H}function i($,H){var S=$.sortIndex-H.sortIndex;return S!==0?S:$.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,v=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=$)r(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function E($){if(g=!1,b($),!v)if(n(l)!==null)v=!0,oe(P);else{var H=n(c);H!==null&&te(E,H.startTime-$)}}function P($,H){v=!1,g&&(g=!1,_(j),j=-1),p=!0;var S=d;try{for(b(H),h=n(l);h!==null&&(!(h.expirationTime>H)||$&&!W());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var ae=Q(h.expirationTime<=H);H=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),b(H)}else r(l);h=n(l)}if(h!==null)var it=!0;else{var ue=n(c);ue!==null&&te(E,ue.startTime-H),it=!1}return it}finally{h=null,d=S,p=!1}}var O=!1,T=null,j=-1,R=5,I=-1;function W(){return!(t.unstable_now()-I<R)}function F(){if(T!==null){var $=t.unstable_now();I=$;var H=!0;try{H=T(!0,$)}finally{H?re():(O=!1,T=null)}}else O=!1}var re;if(typeof y=="function")re=function(){y(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ne=ee.port2;ee.port1.onmessage=F,re=function(){ne.postMessage(null)}}else re=function(){C(F,0)};function oe($){T=$,O||(O=!0,re())}function te($,H){j=C(function(){$(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,oe(P))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var S=d;d=H;try{return $()}finally{d=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var S=d;d=$;try{return H()}finally{d=S}},t.unstable_scheduleCallback=function($,H,S){var Q=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?Q+S:Q):S=Q,$){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=S+ae,$={id:f++,callback:H,priorityLevel:$,startTime:S,expirationTime:ae,sortIndex:-1},S>Q?($.sortIndex=S,e(c,$),n(l)===null&&$===n(c)&&(g?(_(j),j=-1):g=!0,te(E,S-Q))):($.sortIndex=ae,e(l,$),v||p||(v=!0,oe(P))),$},t.unstable_shouldYield=W,t.unstable_wrapCallback=function($){var H=d;return function(){var S=d;d=H;try{return $.apply(this,arguments)}finally{d=S}}}})(Cx);kx.exports=Cx;var eE=kx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=L,Dr=eE;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tx=new Set,Eu={};function ea(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(Eu[t]=e,t=0;t<e.length;t++)Tx.add(e[t])}var po=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oy={},Ay={};function nE(t){return Lp.call(Ay,t)?!0:Lp.call(Oy,t)?!1:tE.test(t)?Ay[t]=!0:(Oy[t]=!0,!1)}function rE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iE(t,e,n,r){if(e===null||typeof e>"u"||rE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function er(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){En[t]=new er(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];En[e]=new er(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){En[t]=new er(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){En[t]=new er(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){En[t]=new er(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){En[t]=new er(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){En[t]=new er(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){En[t]=new er(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){En[t]=new er(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cg=/[\-:]([a-z])/g;function Eg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cg,Eg);En[e]=new er(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cg,Eg);En[e]=new er(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cg,Eg);En[e]=new er(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){En[t]=new er(t,1,!1,t.toLowerCase(),null,!1,!1)});En.xlinkHref=new er("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){En[t]=new er(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tg(t,e,n,r){var i=En.hasOwnProperty(e)?En[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iE(e,n,i,r)&&(n=null),r||i===null?nE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wo=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ic=Symbol.for("react.element"),ba=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),Oo=Symbol.for("react.lazy"),Ax=Symbol.for("react.offscreen"),Ny=Symbol.iterator;function jl(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,zh;function Kl(t){if(zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zh=e&&e[1]||""}return`
`+zh+t}var Fh=!1;function Bh(t,e){if(!t||Fh)return"";Fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Kl(t):""}function oE(t){switch(t.tag){case 5:return Kl(t.type);case 16:return Kl("Lazy");case 13:return Kl("Suspense");case 19:return Kl("SuspenseList");case 0:case 2:case 15:return t=Bh(t.type,!1),t;case 11:return t=Bh(t.type.render,!1),t;case 1:return t=Bh(t.type,!0),t;default:return""}}function Bp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sa:return"Fragment";case ba:return"Portal";case $p:return"Profiler";case Pg:return"StrictMode";case zp:return"Suspense";case Fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ox:return(t.displayName||"Context")+".Consumer";case Px:return(t._context.displayName||"Context")+".Provider";case Og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ag:return e=t.displayName||null,e!==null?e:Bp(t.type)||"Memo";case Oo:e=t._payload,t=t._init;try{return Bp(t(e))}catch{}}return null}function sE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bp(e);case 8:return e===Pg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aE(t){var e=Nx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jc(t){t._valueTracker||(t._valueTracker=aE(t))}function Ix(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hp(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jx(t,e){e=e.checked,e!=null&&Tg(t,"checked",e,!1)}function Up(t,e){jx(t,e);var n=ts(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wp(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wp(t,e,n){(e!=="number"||Hf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xl=Array.isArray;function za(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ry(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Xl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function Rx(t,e){var n=ts(e.value),r=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function My(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Rc,Dx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Rc=Rc||document.createElement("div"),Rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ru={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(ru).forEach(function(t){lE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ru[e]=ru[t]})});function Lx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ru.hasOwnProperty(t)&&ru[t]?(""+e).trim():e+"px"}function $x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uE=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kp(t,e){if(e){if(uE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Xp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function Ng(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qp=null,Fa=null,Ba=null;function Dy(t){if(t=uc(t)){if(typeof qp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Bd(e),qp(t.stateNode,t.type,e))}}function zx(t){Fa?Ba?Ba.push(t):Ba=[t]:Fa=t}function Fx(){if(Fa){var t=Fa,e=Ba;if(Ba=Fa=null,Dy(t),e)for(t=0;t<e.length;t++)Dy(e[t])}}function Bx(t,e){return t(e)}function Hx(){}var Hh=!1;function Ux(t,e,n){if(Hh)return t(e,n);Hh=!0;try{return Bx(t,e,n)}finally{Hh=!1,(Fa!==null||Ba!==null)&&(Hx(),Fx())}}function Pu(t,e){var n=t.stateNode;if(n===null)return null;var r=Bd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Qp=!1;if(po)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{Qp=!1}function cE(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var iu=!1,Uf=null,Wf=!1,Zp=null,fE={onError:function(t){iu=!0,Uf=t}};function dE(t,e,n,r,i,o,s,a,l){iu=!1,Uf=null,cE.apply(fE,arguments)}function hE(t,e,n,r,i,o,s,a,l){if(dE.apply(this,arguments),iu){if(iu){var c=Uf;iu=!1,Uf=null}else throw Error(B(198));Wf||(Wf=!0,Zp=c)}}function ta(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ly(t){if(ta(t)!==t)throw Error(B(188))}function pE(t){var e=t.alternate;if(!e){if(e=ta(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ly(i),t;if(o===r)return Ly(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Vx(t){return t=pE(t),t!==null?Yx(t):null}function Yx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yx(t);if(e!==null)return e;t=t.sibling}return null}var Kx=Dr.unstable_scheduleCallback,$y=Dr.unstable_cancelCallback,mE=Dr.unstable_shouldYield,gE=Dr.unstable_requestPaint,Ht=Dr.unstable_now,vE=Dr.unstable_getCurrentPriorityLevel,Ig=Dr.unstable_ImmediatePriority,Xx=Dr.unstable_UserBlockingPriority,Vf=Dr.unstable_NormalPriority,yE=Dr.unstable_LowPriority,Gx=Dr.unstable_IdlePriority,Ld=null,Wi=null;function _E(t){if(Wi&&typeof Wi.onCommitFiberRoot=="function")try{Wi.onCommitFiberRoot(Ld,t,void 0,(t.current.flags&128)===128)}catch{}}var ki=Math.clz32?Math.clz32:bE,xE=Math.log,wE=Math.LN2;function bE(t){return t>>>=0,t===0?32:31-(xE(t)/wE|0)|0}var Mc=64,Dc=4194304;function Gl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yf(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Gl(a):(o&=s,o!==0&&(r=Gl(o)))}else s=n&~i,s!==0?r=Gl(s):o!==0&&(r=Gl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ki(e),i=1<<n,r|=t[n],e&=~i;return r}function SE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ki(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=SE(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qx(){var t=Mc;return Mc<<=1,!(Mc&4194240)&&(Mc=64),t}function Uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ac(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ki(e),t[e]=n}function CE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ki(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function jg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ki(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var qe=0;function Qx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zx,Rg,Jx,ew,tw,em=!1,Lc=[],Ho=null,Uo=null,Wo=null,Ou=new Map,Au=new Map,Io=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zy(t,e){switch(t){case"focusin":case"focusout":Ho=null;break;case"dragenter":case"dragleave":Uo=null;break;case"mouseover":case"mouseout":Wo=null;break;case"pointerover":case"pointerout":Ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(e.pointerId)}}function Ml(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=uc(e),e!==null&&Rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TE(t,e,n,r,i){switch(e){case"focusin":return Ho=Ml(Ho,t,e,n,r,i),!0;case"dragenter":return Uo=Ml(Uo,t,e,n,r,i),!0;case"mouseover":return Wo=Ml(Wo,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ou.set(o,Ml(Ou.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Au.set(o,Ml(Au.get(o)||null,t,e,n,r,i)),!0}return!1}function nw(t){var e=Es(t.target);if(e!==null){var n=ta(e);if(n!==null){if(e=n.tag,e===13){if(e=Wx(n),e!==null){t.blockedOn=e,tw(t.priority,function(){Jx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gp=r,n.target.dispatchEvent(r),Gp=null}else return e=uc(n),e!==null&&Rg(e),t.blockedOn=n,!1;e.shift()}return!0}function Fy(t,e,n){hf(t)&&n.delete(e)}function PE(){em=!1,Ho!==null&&hf(Ho)&&(Ho=null),Uo!==null&&hf(Uo)&&(Uo=null),Wo!==null&&hf(Wo)&&(Wo=null),Ou.forEach(Fy),Au.forEach(Fy)}function Dl(t,e){t.blockedOn===e&&(t.blockedOn=null,em||(em=!0,Dr.unstable_scheduleCallback(Dr.unstable_NormalPriority,PE)))}function Nu(t){function e(i){return Dl(i,t)}if(0<Lc.length){Dl(Lc[0],t);for(var n=1;n<Lc.length;n++){var r=Lc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ho!==null&&Dl(Ho,t),Uo!==null&&Dl(Uo,t),Wo!==null&&Dl(Wo,t),Ou.forEach(e),Au.forEach(e),n=0;n<Io.length;n++)r=Io[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Io.length&&(n=Io[0],n.blockedOn===null);)nw(n),n.blockedOn===null&&Io.shift()}var Ha=wo.ReactCurrentBatchConfig,Kf=!0;function OE(t,e,n,r){var i=qe,o=Ha.transition;Ha.transition=null;try{qe=1,Mg(t,e,n,r)}finally{qe=i,Ha.transition=o}}function AE(t,e,n,r){var i=qe,o=Ha.transition;Ha.transition=null;try{qe=4,Mg(t,e,n,r)}finally{qe=i,Ha.transition=o}}function Mg(t,e,n,r){if(Kf){var i=tm(t,e,n,r);if(i===null)Jh(t,e,r,Xf,n),zy(t,r);else if(TE(i,t,e,n,r))r.stopPropagation();else if(zy(t,r),e&4&&-1<EE.indexOf(t)){for(;i!==null;){var o=uc(i);if(o!==null&&Zx(o),o=tm(t,e,n,r),o===null&&Jh(t,e,r,Xf,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jh(t,e,r,null,n)}}var Xf=null;function tm(t,e,n,r){if(Xf=null,t=Ng(r),t=Es(t),t!==null)if(e=ta(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xf=t,null}function rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case Ig:return 1;case Xx:return 4;case Vf:case yE:return 16;case Gx:return 536870912;default:return 16}default:return 16}}var Ro=null,Dg=null,pf=null;function iw(){if(pf)return pf;var t,e=Dg,n=e.length,r,i="value"in Ro?Ro.value:Ro.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return pf=i.slice(t,1<r?1-r:void 0)}function mf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $c(){return!0}function By(){return!1}function zr(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$c:By,this.isPropagationStopped=By,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$c)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$c)},persist:function(){},isPersistent:$c}),e}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lg=zr(wl),lc=Et({},wl,{view:0,detail:0}),NE=zr(lc),Wh,Vh,Ll,$d=Et({},lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$g,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ll&&(Ll&&t.type==="mousemove"?(Wh=t.screenX-Ll.screenX,Vh=t.screenY-Ll.screenY):Vh=Wh=0,Ll=t),Wh)},movementY:function(t){return"movementY"in t?t.movementY:Vh}}),Hy=zr($d),IE=Et({},$d,{dataTransfer:0}),jE=zr(IE),RE=Et({},lc,{relatedTarget:0}),Yh=zr(RE),ME=Et({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),DE=zr(ME),LE=Et({},wl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$E=zr(LE),zE=Et({},wl,{data:0}),Uy=zr(zE),FE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HE[t])?!!e[t]:!1}function $g(){return UE}var WE=Et({},lc,{key:function(t){if(t.key){var e=FE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$g,charCode:function(t){return t.type==="keypress"?mf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VE=zr(WE),YE=Et({},$d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wy=zr(YE),KE=Et({},lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$g}),XE=zr(KE),GE=Et({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),qE=zr(GE),QE=Et({},$d,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=zr(QE),JE=[9,13,27,32],zg=po&&"CompositionEvent"in window,ou=null;po&&"documentMode"in document&&(ou=document.documentMode);var eT=po&&"TextEvent"in window&&!ou,ow=po&&(!zg||ou&&8<ou&&11>=ou),Vy=String.fromCharCode(32),Yy=!1;function sw(t,e){switch(t){case"keyup":return JE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function tT(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(Yy=!0,Vy);case"textInput":return t=e.data,t===Vy&&Yy?null:t;default:return null}}function nT(t,e){if(ka)return t==="compositionend"||!zg&&sw(t,e)?(t=iw(),pf=Dg=Ro=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ow&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function lw(t,e,n,r){zx(r),e=Gf(e,"onChange"),0<e.length&&(n=new Lg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var su=null,Iu=null;function iT(t){_w(t,0)}function zd(t){var e=Ta(t);if(Ix(e))return t}function oT(t,e){if(t==="change")return e}var uw=!1;if(po){var Kh;if(po){var Xh="oninput"in document;if(!Xh){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),Xh=typeof Xy.oninput=="function"}Kh=Xh}else Kh=!1;uw=Kh&&(!document.documentMode||9<document.documentMode)}function Gy(){su&&(su.detachEvent("onpropertychange",cw),Iu=su=null)}function cw(t){if(t.propertyName==="value"&&zd(Iu)){var e=[];lw(e,Iu,t,Ng(t)),Ux(iT,e)}}function sT(t,e,n){t==="focusin"?(Gy(),su=e,Iu=n,su.attachEvent("onpropertychange",cw)):t==="focusout"&&Gy()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zd(Iu)}function lT(t,e){if(t==="click")return zd(e)}function uT(t,e){if(t==="input"||t==="change")return zd(e)}function cT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pi=typeof Object.is=="function"?Object.is:cT;function ju(t,e){if(Pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(e,i)||!Pi(t[i],e[i]))return!1}return!0}function qy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qy(t,e){var n=qy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qy(n)}}function fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dw(){for(var t=window,e=Hf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hf(t.document)}return e}function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fT(t){var e=dw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fw(n.ownerDocument.documentElement,n)){if(r!==null&&Fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Qy(n,o);var s=Qy(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dT=po&&"documentMode"in document&&11>=document.documentMode,Ca=null,nm=null,au=null,rm=!1;function Zy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rm||Ca==null||Ca!==Hf(r)||(r=Ca,"selectionStart"in r&&Fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),au&&ju(au,r)||(au=r,r=Gf(nm,"onSelect"),0<r.length&&(e=new Lg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ca)))}function zc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ea={animationend:zc("Animation","AnimationEnd"),animationiteration:zc("Animation","AnimationIteration"),animationstart:zc("Animation","AnimationStart"),transitionend:zc("Transition","TransitionEnd")},Gh={},hw={};po&&(hw=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Fd(t){if(Gh[t])return Gh[t];if(!Ea[t])return t;var e=Ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hw)return Gh[t]=e[n];return t}var pw=Fd("animationend"),mw=Fd("animationiteration"),gw=Fd("animationstart"),vw=Fd("transitionend"),yw=new Map,Jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){yw.set(t,e),ea(e,[t])}for(var qh=0;qh<Jy.length;qh++){var Qh=Jy[qh],hT=Qh.toLowerCase(),pT=Qh[0].toUpperCase()+Qh.slice(1);ss(hT,"on"+pT)}ss(pw,"onAnimationEnd");ss(mw,"onAnimationIteration");ss(gw,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(vw,"onTransitionEnd");Ja("onMouseEnter",["mouseout","mouseover"]);Ja("onMouseLeave",["mouseout","mouseover"]);Ja("onPointerEnter",["pointerout","pointerover"]);Ja("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ql));function e1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hE(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;e1(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;e1(i,a,c),o=l}}}if(Wf)throw t=Zp,Wf=!1,Zp=null,t}function ct(t,e){var n=e[lm];n===void 0&&(n=e[lm]=new Set);var r=t+"__bubble";n.has(r)||(xw(e,t,2,!1),n.add(r))}function Zh(t,e,n){var r=0;e&&(r|=4),xw(n,t,r,e)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Ru(t){if(!t[Fc]){t[Fc]=!0,Tx.forEach(function(n){n!=="selectionchange"&&(mT.has(n)||Zh(n,!1,t),Zh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fc]||(e[Fc]=!0,Zh("selectionchange",!1,e))}}function xw(t,e,n,r){switch(rw(e)){case 1:var i=OE;break;case 4:i=AE;break;default:i=Mg}n=i.bind(null,e,n,t),i=void 0,!Qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jh(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Es(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ux(function(){var c=o,f=Ng(n),h=[];e:{var d=yw.get(t);if(d!==void 0){var p=Lg,v=t;switch(t){case"keypress":if(mf(n)===0)break e;case"keydown":case"keyup":p=VE;break;case"focusin":v="focus",p=Yh;break;case"focusout":v="blur",p=Yh;break;case"beforeblur":case"afterblur":p=Yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XE;break;case pw:case mw:case gw:p=DE;break;case vw:p=qE;break;case"scroll":p=NE;break;case"wheel":p=ZE;break;case"copy":case"cut":case"paste":p=$E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wy}var g=(e&4)!==0,C=!g&&t==="scroll",_=g?d!==null?d+"Capture":null:d;g=[];for(var y=c,b;y!==null;){b=y;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,_!==null&&(E=Pu(y,_),E!=null&&g.push(Mu(y,E,b)))),C)break;y=y.return}0<g.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Gp&&(v=n.relatedTarget||n.fromElement)&&(Es(v)||v[mo]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Es(v):null,v!==null&&(C=ta(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(g=Hy,E="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(g=Wy,E="onPointerLeave",_="onPointerEnter",y="pointer"),C=p==null?d:Ta(p),b=v==null?d:Ta(v),d=new g(E,y+"leave",p,n,f),d.target=C,d.relatedTarget=b,E=null,Es(f)===c&&(g=new g(_,y+"enter",v,n,f),g.target=b,g.relatedTarget=C,E=g),C=E,p&&v)t:{for(g=p,_=v,y=0,b=g;b;b=la(b))y++;for(b=0,E=_;E;E=la(E))b++;for(;0<y-b;)g=la(g),y--;for(;0<b-y;)_=la(_),b--;for(;y--;){if(g===_||_!==null&&g===_.alternate)break t;g=la(g),_=la(_)}g=null}else g=null;p!==null&&t1(h,d,p,g,!1),v!==null&&C!==null&&t1(h,C,v,g,!0)}}e:{if(d=c?Ta(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=oT;else if(Ky(d))if(uw)P=uT;else{P=aT;var O=sT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=lT);if(P&&(P=P(t,c))){lw(h,P,n,f);break e}O&&O(t,d,c),t==="focusout"&&(O=d._wrapperState)&&O.controlled&&d.type==="number"&&Wp(d,"number",d.value)}switch(O=c?Ta(c):window,t){case"focusin":(Ky(O)||O.contentEditable==="true")&&(Ca=O,nm=c,au=null);break;case"focusout":au=nm=Ca=null;break;case"mousedown":rm=!0;break;case"contextmenu":case"mouseup":case"dragend":rm=!1,Zy(h,n,f);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":Zy(h,n,f)}var T;if(zg)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ka?sw(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(ow&&n.locale!=="ko"&&(ka||j!=="onCompositionStart"?j==="onCompositionEnd"&&ka&&(T=iw()):(Ro=f,Dg="value"in Ro?Ro.value:Ro.textContent,ka=!0)),O=Gf(c,j),0<O.length&&(j=new Uy(j,t,null,n,f),h.push({event:j,listeners:O}),T?j.data=T:(T=aw(n),T!==null&&(j.data=T)))),(T=eT?tT(t,n):nT(t,n))&&(c=Gf(c,"onBeforeInput"),0<c.length&&(f=new Uy("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}_w(h,e)})}function Mu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pu(t,n),o!=null&&r.unshift(Mu(t,o,i)),o=Pu(t,e),o!=null&&r.push(Mu(t,o,i))),t=t.return}return r}function la(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t1(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Pu(n,o),l!=null&&s.unshift(Mu(n,l,a))):i||(l=Pu(n,o),l!=null&&s.push(Mu(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var gT=/\r\n?/g,vT=/\u0000|\uFFFD/g;function n1(t){return(typeof t=="string"?t:""+t).replace(gT,`
`).replace(vT,"")}function Bc(t,e,n){if(e=n1(e),n1(t)!==e&&n)throw Error(B(425))}function qf(){}var im=null,om=null;function sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var am=typeof setTimeout=="function"?setTimeout:void 0,yT=typeof clearTimeout=="function"?clearTimeout:void 0,r1=typeof Promise=="function"?Promise:void 0,_T=typeof queueMicrotask=="function"?queueMicrotask:typeof r1<"u"?function(t){return r1.resolve(null).then(t).catch(xT)}:am;function xT(t){setTimeout(function(){throw t})}function ep(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nu(e)}function Vo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bl=Math.random().toString(36).slice(2),Fi="__reactFiber$"+bl,Du="__reactProps$"+bl,mo="__reactContainer$"+bl,lm="__reactEvents$"+bl,wT="__reactListeners$"+bl,bT="__reactHandles$"+bl;function Es(t){var e=t[Fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mo]||n[Fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i1(t);t!==null;){if(n=t[Fi])return n;t=i1(t)}return e}t=n,n=t.parentNode}return null}function uc(t){return t=t[Fi]||t[mo],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Bd(t){return t[Du]||null}var um=[],Pa=-1;function as(t){return{current:t}}function ht(t){0>Pa||(t.current=um[Pa],um[Pa]=null,Pa--)}function at(t,e){Pa++,um[Pa]=t.current,t.current=e}var ns={},Ln=as(ns),ur=as(!1),Us=ns;function el(t,e){var n=t.type.contextTypes;if(!n)return ns;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function cr(t){return t=t.childContextTypes,t!=null}function Qf(){ht(ur),ht(Ln)}function o1(t,e,n){if(Ln.current!==ns)throw Error(B(168));at(Ln,e),at(ur,n)}function ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,sE(t)||"Unknown",i));return Et({},n,r)}function Zf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,Us=Ln.current,at(Ln,t),at(ur,ur.current),!0}function s1(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=ww(t,e,Us),r.__reactInternalMemoizedMergedChildContext=t,ht(ur),ht(Ln),at(Ln,t)):ht(ur),at(ur,n)}var ro=null,Hd=!1,tp=!1;function bw(t){ro===null?ro=[t]:ro.push(t)}function ST(t){Hd=!0,bw(t)}function ls(){if(!tp&&ro!==null){tp=!0;var t=0,e=qe;try{var n=ro;for(qe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ro=null,Hd=!1}catch(i){throw ro!==null&&(ro=ro.slice(t+1)),Kx(Ig,ls),i}finally{qe=e,tp=!1}}return null}var Oa=[],Aa=0,Jf=null,ed=0,Gr=[],qr=0,Ws=null,so=1,ao="";function xs(t,e){Oa[Aa++]=ed,Oa[Aa++]=Jf,Jf=t,ed=e}function Sw(t,e,n){Gr[qr++]=so,Gr[qr++]=ao,Gr[qr++]=Ws,Ws=t;var r=so;t=ao;var i=32-ki(r)-1;r&=~(1<<i),n+=1;var o=32-ki(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,so=1<<32-ki(e)+i|n<<i|r,ao=o+t}else so=1<<o|n<<i|r,ao=t}function Bg(t){t.return!==null&&(xs(t,1),Sw(t,1,0))}function Hg(t){for(;t===Jf;)Jf=Oa[--Aa],Oa[Aa]=null,ed=Oa[--Aa],Oa[Aa]=null;for(;t===Ws;)Ws=Gr[--qr],Gr[qr]=null,ao=Gr[--qr],Gr[qr]=null,so=Gr[--qr],Gr[qr]=null}var jr=null,Ir=null,_t=!1,wi=null;function kw(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jr=t,Ir=Vo(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jr=t,Ir=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ws!==null?{id:so,overflow:ao}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jr=t,Ir=null,!0):!1;default:return!1}}function cm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(_t){var e=Ir;if(e){var n=e;if(!a1(t,e)){if(cm(t))throw Error(B(418));e=Vo(n.nextSibling);var r=jr;e&&a1(t,e)?kw(r,n):(t.flags=t.flags&-4097|2,_t=!1,jr=t)}}else{if(cm(t))throw Error(B(418));t.flags=t.flags&-4097|2,_t=!1,jr=t}}}function l1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jr=t}function Hc(t){if(t!==jr)return!1;if(!_t)return l1(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sm(t.type,t.memoizedProps)),e&&(e=Ir)){if(cm(t))throw Cw(),Error(B(418));for(;e;)kw(t,e),e=Vo(e.nextSibling)}if(l1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ir=Vo(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ir=null}}else Ir=jr?Vo(t.stateNode.nextSibling):null;return!0}function Cw(){for(var t=Ir;t;)t=Vo(t.nextSibling)}function tl(){Ir=jr=null,_t=!1}function Ug(t){wi===null?wi=[t]:wi.push(t)}var kT=wo.ReactCurrentBatchConfig;function _i(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var td=as(null),nd=null,Na=null,Wg=null;function Vg(){Wg=Na=nd=null}function Yg(t){var e=td.current;ht(td),t._currentValue=e}function dm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ua(t,e){nd=t,Wg=Na=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lr=!0),t.firstContext=null)}function si(t){var e=t._currentValue;if(Wg!==t)if(t={context:t,memoizedValue:e,next:null},Na===null){if(nd===null)throw Error(B(308));Na=t,nd.dependencies={lanes:0,firstContext:t}}else Na=Na.next=t;return e}var Ts=null;function Kg(t){Ts===null?Ts=[t]:Ts.push(t)}function Ew(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kg(e)):(n.next=i.next,i.next=n),e.interleaved=n,go(t,r)}function go(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ao=!1;function Xg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function co(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yo(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ze&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,go(t,n)}return i=r.interleaved,i===null?(e.next=e,Kg(r)):(e.next=i.next,i.next=e),r.interleaved=e,go(t,n)}function gf(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jg(t,n)}}function u1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rd(t,e,n,r){var i=t.updateQueue;Ao=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=c=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(d=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Et({},h,d);break e;case 2:Ao=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ys|=s,t.lanes=s,t.memoizedState=h}}function c1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Pw=new Ex.Component().refs;function hm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ud={isMounted:function(t){return(t=t._reactInternals)?ta(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zn(),i=Xo(t),o=co(r,i);o.payload=e,n!=null&&(o.callback=n),e=Yo(t,o,i),e!==null&&(Ci(e,t,i,r),gf(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zn(),i=Xo(t),o=co(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yo(t,o,i),e!==null&&(Ci(e,t,i,r),gf(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zn(),r=Xo(t),i=co(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yo(t,i,r),e!==null&&(Ci(e,t,r,n),gf(e,t,r))}};function f1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ju(n,r)||!ju(i,o):!0}function Ow(t,e,n){var r=!1,i=ns,o=e.contextType;return typeof o=="object"&&o!==null?o=si(o):(i=cr(e)?Us:Ln.current,r=e.contextTypes,o=(r=r!=null)?el(t,i):ns),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ud,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function d1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ud.enqueueReplaceState(e,e.state,null)}function pm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Pw,Xg(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=si(o):(o=cr(e)?Us:Ln.current,i.context=el(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ud.enqueueReplaceState(i,i.state,null),rd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $l(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Pw&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Uc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h1(t){var e=t._init;return e(t._payload)}function Aw(t){function e(_,y){if(t){var b=_.deletions;b===null?(_.deletions=[y],_.flags|=16):b.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Go(_,y),_.index=0,_.sibling=null,_}function o(_,y,b){return _.index=b,t?(b=_.alternate,b!==null?(b=b.index,b<y?(_.flags|=2,y):b):(_.flags|=2,y)):(_.flags|=1048576,y)}function s(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,b,E){return y===null||y.tag!==6?(y=lp(b,_.mode,E),y.return=_,y):(y=i(y,b),y.return=_,y)}function l(_,y,b,E){var P=b.type;return P===Sa?f(_,y,b.props.children,E,b.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Oo&&h1(P)===y.type)?(E=i(y,b.props),E.ref=$l(_,y,b),E.return=_,E):(E=bf(b.type,b.key,b.props,null,_.mode,E),E.ref=$l(_,y,b),E.return=_,E)}function c(_,y,b,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=up(b,_.mode,E),y.return=_,y):(y=i(y,b.children||[]),y.return=_,y)}function f(_,y,b,E,P){return y===null||y.tag!==7?(y=Rs(b,_.mode,E,P),y.return=_,y):(y=i(y,b),y.return=_,y)}function h(_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=lp(""+y,_.mode,b),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ic:return b=bf(y.type,y.key,y.props,null,_.mode,b),b.ref=$l(_,null,y),b.return=_,b;case ba:return y=up(y,_.mode,b),y.return=_,y;case Oo:var E=y._init;return h(_,E(y._payload),b)}if(Xl(y)||jl(y))return y=Rs(y,_.mode,b,null),y.return=_,y;Uc(_,y)}return null}function d(_,y,b,E){var P=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return P!==null?null:a(_,y,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ic:return b.key===P?l(_,y,b,E):null;case ba:return b.key===P?c(_,y,b,E):null;case Oo:return P=b._init,d(_,y,P(b._payload),E)}if(Xl(b)||jl(b))return P!==null?null:f(_,y,b,E,null);Uc(_,b)}return null}function p(_,y,b,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return _=_.get(b)||null,a(y,_,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ic:return _=_.get(E.key===null?b:E.key)||null,l(y,_,E,P);case ba:return _=_.get(E.key===null?b:E.key)||null,c(y,_,E,P);case Oo:var O=E._init;return p(_,y,b,O(E._payload),P)}if(Xl(E)||jl(E))return _=_.get(b)||null,f(y,_,E,P,null);Uc(y,E)}return null}function v(_,y,b,E){for(var P=null,O=null,T=y,j=y=0,R=null;T!==null&&j<b.length;j++){T.index>j?(R=T,T=null):R=T.sibling;var I=d(_,T,b[j],E);if(I===null){T===null&&(T=R);break}t&&T&&I.alternate===null&&e(_,T),y=o(I,y,j),O===null?P=I:O.sibling=I,O=I,T=R}if(j===b.length)return n(_,T),_t&&xs(_,j),P;if(T===null){for(;j<b.length;j++)T=h(_,b[j],E),T!==null&&(y=o(T,y,j),O===null?P=T:O.sibling=T,O=T);return _t&&xs(_,j),P}for(T=r(_,T);j<b.length;j++)R=p(T,_,j,b[j],E),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?j:R.key),y=o(R,y,j),O===null?P=R:O.sibling=R,O=R);return t&&T.forEach(function(W){return e(_,W)}),_t&&xs(_,j),P}function g(_,y,b,E){var P=jl(b);if(typeof P!="function")throw Error(B(150));if(b=P.call(b),b==null)throw Error(B(151));for(var O=P=null,T=y,j=y=0,R=null,I=b.next();T!==null&&!I.done;j++,I=b.next()){T.index>j?(R=T,T=null):R=T.sibling;var W=d(_,T,I.value,E);if(W===null){T===null&&(T=R);break}t&&T&&W.alternate===null&&e(_,T),y=o(W,y,j),O===null?P=W:O.sibling=W,O=W,T=R}if(I.done)return n(_,T),_t&&xs(_,j),P;if(T===null){for(;!I.done;j++,I=b.next())I=h(_,I.value,E),I!==null&&(y=o(I,y,j),O===null?P=I:O.sibling=I,O=I);return _t&&xs(_,j),P}for(T=r(_,T);!I.done;j++,I=b.next())I=p(T,_,j,I.value,E),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?j:I.key),y=o(I,y,j),O===null?P=I:O.sibling=I,O=I);return t&&T.forEach(function(F){return e(_,F)}),_t&&xs(_,j),P}function C(_,y,b,E){if(typeof b=="object"&&b!==null&&b.type===Sa&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ic:e:{for(var P=b.key,O=y;O!==null;){if(O.key===P){if(P=b.type,P===Sa){if(O.tag===7){n(_,O.sibling),y=i(O,b.props.children),y.return=_,_=y;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Oo&&h1(P)===O.type){n(_,O.sibling),y=i(O,b.props),y.ref=$l(_,O,b),y.return=_,_=y;break e}n(_,O);break}else e(_,O);O=O.sibling}b.type===Sa?(y=Rs(b.props.children,_.mode,E,b.key),y.return=_,_=y):(E=bf(b.type,b.key,b.props,null,_.mode,E),E.ref=$l(_,y,b),E.return=_,_=E)}return s(_);case ba:e:{for(O=b.key;y!==null;){if(y.key===O)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(_,y.sibling),y=i(y,b.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=up(b,_.mode,E),y.return=_,_=y}return s(_);case Oo:return O=b._init,C(_,y,O(b._payload),E)}if(Xl(b))return v(_,y,b,E);if(jl(b))return g(_,y,b,E);Uc(_,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,b),y.return=_,_=y):(n(_,y),y=lp(b,_.mode,E),y.return=_,_=y),s(_)):n(_,y)}return C}var nl=Aw(!0),Nw=Aw(!1),cc={},Vi=as(cc),Lu=as(cc),$u=as(cc);function Ps(t){if(t===cc)throw Error(B(174));return t}function Gg(t,e){switch(at($u,e),at(Lu,t),at(Vi,cc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yp(e,t)}ht(Vi),at(Vi,e)}function rl(){ht(Vi),ht(Lu),ht($u)}function Iw(t){Ps($u.current);var e=Ps(Vi.current),n=Yp(e,t.type);e!==n&&(at(Lu,t),at(Vi,n))}function qg(t){Lu.current===t&&(ht(Vi),ht(Lu))}var bt=as(0);function id(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var np=[];function Qg(){for(var t=0;t<np.length;t++)np[t]._workInProgressVersionPrimary=null;np.length=0}var vf=wo.ReactCurrentDispatcher,rp=wo.ReactCurrentBatchConfig,Vs=0,Ct=null,on=null,mn=null,od=!1,lu=!1,zu=0,CT=0;function On(){throw Error(B(321))}function Zg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pi(t[n],e[n]))return!1;return!0}function Jg(t,e,n,r,i,o){if(Vs=o,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vf.current=t===null||t.memoizedState===null?OT:AT,t=n(r,i),lu){o=0;do{if(lu=!1,zu=0,25<=o)throw Error(B(301));o+=1,mn=on=null,e.updateQueue=null,vf.current=NT,t=n(r,i)}while(lu)}if(vf.current=sd,e=on!==null&&on.next!==null,Vs=0,mn=on=Ct=null,od=!1,e)throw Error(B(300));return t}function e0(){var t=zu!==0;return zu=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Ct.memoizedState=mn=t:mn=mn.next=t,mn}function ai(){if(on===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var e=mn===null?Ct.memoizedState:mn.next;if(e!==null)mn=e,on=t;else{if(t===null)throw Error(B(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},mn===null?Ct.memoizedState=mn=t:mn=mn.next=t}return mn}function Fu(t,e){return typeof e=="function"?e(t):e}function ip(t){var e=ai(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=on,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Vs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Ct.lanes|=f,Ys|=f}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Pi(r,e.memoizedState)||(lr=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ct.lanes|=o,Ys|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function op(t){var e=ai(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Pi(o,e.memoizedState)||(lr=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function jw(){}function Rw(t,e){var n=Ct,r=ai(),i=e(),o=!Pi(r.memoizedState,i);if(o&&(r.memoizedState=i,lr=!0),r=r.queue,t0(Lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||mn!==null&&mn.memoizedState.tag&1){if(n.flags|=2048,Bu(9,Dw.bind(null,n,r,i,e),void 0,null),yn===null)throw Error(B(349));Vs&30||Mw(n,e,i)}return i}function Mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,$w(e)&&zw(t)}function Lw(t,e,n){return n(function(){$w(e)&&zw(t)})}function $w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pi(t,n)}catch{return!0}}function zw(t){var e=go(t,1);e!==null&&Ci(e,t,1,-1)}function p1(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},e.queue=t,t=t.dispatch=PT.bind(null,Ct,t),[e.memoizedState,t]}function Bu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fw(){return ai().memoizedState}function yf(t,e,n,r){var i=Mi();Ct.flags|=t,i.memoizedState=Bu(1|e,n,void 0,r===void 0?null:r)}function Wd(t,e,n,r){var i=ai();r=r===void 0?null:r;var o=void 0;if(on!==null){var s=on.memoizedState;if(o=s.destroy,r!==null&&Zg(r,s.deps)){i.memoizedState=Bu(e,n,o,r);return}}Ct.flags|=t,i.memoizedState=Bu(1|e,n,o,r)}function m1(t,e){return yf(8390656,8,t,e)}function t0(t,e){return Wd(2048,8,t,e)}function Bw(t,e){return Wd(4,2,t,e)}function Hw(t,e){return Wd(4,4,t,e)}function Uw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ww(t,e,n){return n=n!=null?n.concat([t]):null,Wd(4,4,Uw.bind(null,e,t),n)}function n0(){}function Vw(t,e){var n=ai();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yw(t,e){var n=ai();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kw(t,e,n){return Vs&21?(Pi(n,e)||(n=qx(),Ct.lanes|=n,Ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lr=!0),t.memoizedState=n)}function ET(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var r=rp.transition;rp.transition={};try{t(!1),e()}finally{qe=n,rp.transition=r}}function Xw(){return ai().memoizedState}function TT(t,e,n){var r=Xo(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gw(t))qw(e,n);else if(n=Ew(t,e,n,r),n!==null){var i=Zn();Ci(n,t,r,i),Qw(n,e,r)}}function PT(t,e,n){var r=Xo(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gw(t))qw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pi(a,s)){var l=e.interleaved;l===null?(i.next=i,Kg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ew(t,e,i,r),n!==null&&(i=Zn(),Ci(n,t,r,i),Qw(n,e,r))}}function Gw(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function qw(t,e){lu=od=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jg(t,n)}}var sd={readContext:si,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},OT={readContext:si,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:si,useEffect:m1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yf(4194308,4,Uw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yf(4194308,4,t,e)},useInsertionEffect:function(t,e){return yf(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mi();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TT.bind(null,Ct,t),[r.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:p1,useDebugValue:n0,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=p1(!1),e=t[0];return t=ET.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ct,i=Mi();if(_t){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),yn===null)throw Error(B(349));Vs&30||Mw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,m1(Lw.bind(null,r,o,t),[t]),r.flags|=2048,Bu(9,Dw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Mi(),e=yn.identifierPrefix;if(_t){var n=ao,r=so;n=(r&~(1<<32-ki(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AT={readContext:si,useCallback:Vw,useContext:si,useEffect:t0,useImperativeHandle:Ww,useInsertionEffect:Bw,useLayoutEffect:Hw,useMemo:Yw,useReducer:ip,useRef:Fw,useState:function(){return ip(Fu)},useDebugValue:n0,useDeferredValue:function(t){var e=ai();return Kw(e,on.memoizedState,t)},useTransition:function(){var t=ip(Fu)[0],e=ai().memoizedState;return[t,e]},useMutableSource:jw,useSyncExternalStore:Rw,useId:Xw,unstable_isNewReconciler:!1},NT={readContext:si,useCallback:Vw,useContext:si,useEffect:t0,useImperativeHandle:Ww,useInsertionEffect:Bw,useLayoutEffect:Hw,useMemo:Yw,useReducer:op,useRef:Fw,useState:function(){return op(Fu)},useDebugValue:n0,useDeferredValue:function(t){var e=ai();return on===null?e.memoizedState=t:Kw(e,on.memoizedState,t)},useTransition:function(){var t=op(Fu)[0],e=ai().memoizedState;return[t,e]},useMutableSource:jw,useSyncExternalStore:Rw,useId:Xw,unstable_isNewReconciler:!1};function il(t,e){try{var n="",r=e;do n+=oE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function sp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IT=typeof WeakMap=="function"?WeakMap:Map;function Zw(t,e,n){n=co(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ld||(ld=!0,Cm=r),mm(t,e)},n}function Jw(t,e,n){n=co(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mm(t,e),typeof r!="function"&&(Ko===null?Ko=new Set([this]):Ko.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function g1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YT.bind(null,t,e,n),e.then(t,t))}function v1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function y1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=co(-1,1),e.tag=2,Yo(n,e,1))),n.lanes|=1),t)}var jT=wo.ReactCurrentOwner,lr=!1;function Yn(t,e,n,r){e.child=t===null?Nw(e,null,n,r):nl(e,t.child,n,r)}function _1(t,e,n,r,i){n=n.render;var o=e.ref;return Ua(e,i),r=Jg(t,e,n,r,o,i),n=e0(),t!==null&&!lr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vo(t,e,i)):(_t&&n&&Bg(e),e.flags|=1,Yn(t,e,r,i),e.child)}function x1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!c0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,eb(t,e,o,r,i)):(t=bf(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ju,n(s,r)&&t.ref===e.ref)return vo(t,e,i)}return e.flags|=1,t=Go(o,r),t.ref=e.ref,t.return=e,e.child=t}function eb(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ju(o,r)&&t.ref===e.ref)if(lr=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(lr=!0);else return e.lanes=t.lanes,vo(t,e,i)}return gm(t,e,n,r,i)}function tb(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ja,kr),kr|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ja,kr),kr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,at(ja,kr),kr|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,at(ja,kr),kr|=r;return Yn(t,e,i,n),e.child}function nb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gm(t,e,n,r,i){var o=cr(n)?Us:Ln.current;return o=el(e,o),Ua(e,i),n=Jg(t,e,n,r,o,i),r=e0(),t!==null&&!lr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vo(t,e,i)):(_t&&r&&Bg(e),e.flags|=1,Yn(t,e,n,i),e.child)}function w1(t,e,n,r,i){if(cr(n)){var o=!0;Zf(e)}else o=!1;if(Ua(e,i),e.stateNode===null)_f(t,e),Ow(e,n,r),pm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=si(c):(c=cr(n)?Us:Ln.current,c=el(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&d1(e,s,r,c),Ao=!1;var d=e.memoizedState;s.state=d,rd(e,r,s,i),l=e.memoizedState,a!==r||d!==l||ur.current||Ao?(typeof f=="function"&&(hm(e,n,f,r),l=e.memoizedState),(a=Ao||f1(e,n,a,r,d,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Tw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_i(e.type,a),s.props=c,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=si(l):(l=cr(n)?Us:Ln.current,l=el(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&d1(e,s,r,l),Ao=!1,d=e.memoizedState,s.state=d,rd(e,r,s,i);var v=e.memoizedState;a!==h||d!==v||ur.current||Ao?(typeof p=="function"&&(hm(e,n,p,r),v=e.memoizedState),(c=Ao||f1(e,n,c,r,d,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vm(t,e,n,r,o,i)}function vm(t,e,n,r,i,o){nb(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&s1(e,n,!1),vo(t,e,o);r=e.stateNode,jT.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=nl(e,t.child,null,o),e.child=nl(e,null,a,o)):Yn(t,e,a,o),e.memoizedState=r.state,i&&s1(e,n,!0),e.child}function rb(t){var e=t.stateNode;e.pendingContext?o1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&o1(t,e.context,!1),Gg(t,e.containerInfo)}function b1(t,e,n,r,i){return tl(),Ug(i),e.flags|=256,Yn(t,e,n,r),e.child}var ym={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function ib(t,e,n){var r=e.pendingProps,i=bt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),at(bt,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Kd(s,r,0,null),t=Rs(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=_m(n),e.memoizedState=ym,t):r0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RT(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Go(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Go(a,o):(o=Rs(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?_m(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ym,r}return o=t.child,t=o.sibling,r=Go(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function r0(t,e){return e=Kd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wc(t,e,n,r){return r!==null&&Ug(r),nl(e,t.child,null,n),t=r0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=sp(Error(B(422))),Wc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Kd({mode:"visible",children:r.children},i,0,null),o=Rs(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&nl(e,t.child,null,s),e.child.memoizedState=_m(s),e.memoizedState=ym,o);if(!(e.mode&1))return Wc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=sp(o,r,void 0),Wc(t,e,s,r)}if(a=(s&t.childLanes)!==0,lr||a){if(r=yn,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,go(t,i),Ci(r,t,i,-1))}return u0(),r=sp(Error(B(421))),Wc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KT.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ir=Vo(i.nextSibling),jr=e,_t=!0,wi=null,t!==null&&(Gr[qr++]=so,Gr[qr++]=ao,Gr[qr++]=Ws,so=t.id,ao=t.overflow,Ws=e),e=r0(e,r.children),e.flags|=4096,e)}function S1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dm(t.return,e,n)}function ap(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ob(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Yn(t,e,r.children,n),r=bt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S1(t,n,e);else if(t.tag===19)S1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(at(bt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&id(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ap(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&id(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ap(e,!0,n,null,o);break;case"together":ap(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _f(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vo(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Go(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Go(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MT(t,e,n){switch(e.tag){case 3:rb(e),tl();break;case 5:Iw(e);break;case 1:cr(e.type)&&Zf(e);break;case 4:Gg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;at(td,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(at(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?ib(t,e,n):(at(bt,bt.current&1),t=vo(t,e,n),t!==null?t.sibling:null);at(bt,bt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ob(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),at(bt,bt.current),r)break;return null;case 22:case 23:return e.lanes=0,tb(t,e,n)}return vo(t,e,n)}var sb,xm,ab,lb;sb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xm=function(){};ab=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ps(Vi.current);var o=null;switch(n){case"input":i=Hp(t,i),r=Hp(t,r),o=[];break;case"select":i=Et({},i,{value:void 0}),r=Et({},r,{value:void 0}),o=[];break;case"textarea":i=Vp(t,i),r=Vp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qf)}Kp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eu.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};lb=function(t,e,n,r){n!==r&&(e.flags|=4)};function zl(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function An(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DT(t,e,n){var r=e.pendingProps;switch(Hg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(e),null;case 1:return cr(e.type)&&Qf(),An(e),null;case 3:return r=e.stateNode,rl(),ht(ur),ht(Ln),Qg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wi!==null&&(Pm(wi),wi=null))),xm(t,e),An(e),null;case 5:qg(e);var i=Ps($u.current);if(n=e.type,t!==null&&e.stateNode!=null)ab(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return An(e),null}if(t=Ps(Vi.current),Hc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Fi]=e,r[Du]=o,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",r),ct("close",r);break;case"iframe":case"object":case"embed":ct("load",r);break;case"video":case"audio":for(i=0;i<ql.length;i++)ct(ql[i],r);break;case"source":ct("error",r);break;case"img":case"image":case"link":ct("error",r),ct("load",r);break;case"details":ct("toggle",r);break;case"input":Iy(r,o),ct("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ct("invalid",r);break;case"textarea":Ry(r,o),ct("invalid",r)}Kp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Bc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Bc(r.textContent,a,t),i=["children",""+a]):Eu.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ct("scroll",r)}switch(n){case"input":jc(r),jy(r,o,!0);break;case"textarea":jc(r),My(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qf)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Fi]=e,t[Du]=r,sb(t,e,!1,!1),e.stateNode=t;e:{switch(s=Xp(n,r),n){case"dialog":ct("cancel",t),ct("close",t),i=r;break;case"iframe":case"object":case"embed":ct("load",t),i=r;break;case"video":case"audio":for(i=0;i<ql.length;i++)ct(ql[i],t);i=r;break;case"source":ct("error",t),i=r;break;case"img":case"image":case"link":ct("error",t),ct("load",t),i=r;break;case"details":ct("toggle",t),i=r;break;case"input":Iy(t,r),i=Hp(t,r),ct("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Et({},r,{value:void 0}),ct("invalid",t);break;case"textarea":Ry(t,r),i=Vp(t,r),ct("invalid",t);break;default:i=r}Kp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$x(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tu(t,l):typeof l=="number"&&Tu(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Eu.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ct("scroll",t):l!=null&&Tg(t,o,l,s))}switch(n){case"input":jc(t),jy(t,r,!1);break;case"textarea":jc(t),My(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ts(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?za(t,!!r.multiple,o,!1):r.defaultValue!=null&&za(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return An(e),null;case 6:if(t&&e.stateNode!=null)lb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ps($u.current),Ps(Vi.current),Hc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fi]=e,(o=r.nodeValue!==n)&&(t=jr,t!==null))switch(t.tag){case 3:Bc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fi]=e,e.stateNode=r}return An(e),null;case 13:if(ht(bt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Ir!==null&&e.mode&1&&!(e.flags&128))Cw(),tl(),e.flags|=98560,o=!1;else if(o=Hc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Fi]=e}else tl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;An(e),o=!1}else wi!==null&&(Pm(wi),wi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?an===0&&(an=3):u0())),e.updateQueue!==null&&(e.flags|=4),An(e),null);case 4:return rl(),xm(t,e),t===null&&Ru(e.stateNode.containerInfo),An(e),null;case 10:return Yg(e.type._context),An(e),null;case 17:return cr(e.type)&&Qf(),An(e),null;case 19:if(ht(bt),o=e.memoizedState,o===null)return An(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)zl(o,!1);else{if(an!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=id(t),s!==null){for(e.flags|=128,zl(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(bt,bt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ht()>ol&&(e.flags|=128,r=!0,zl(o,!1),e.lanes=4194304)}else{if(!r)if(t=id(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!_t)return An(e),null}else 2*Ht()-o.renderingStartTime>ol&&n!==1073741824&&(e.flags|=128,r=!0,zl(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ht(),e.sibling=null,n=bt.current,at(bt,r?n&1|2:n&1),e):(An(e),null);case 22:case 23:return l0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kr&1073741824&&(An(e),e.subtreeFlags&6&&(e.flags|=8192)):An(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function LT(t,e){switch(Hg(e),e.tag){case 1:return cr(e.type)&&Qf(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rl(),ht(ur),ht(Ln),Qg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qg(e),null;case 13:if(ht(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));tl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(bt),null;case 4:return rl(),null;case 10:return Yg(e.type._context),null;case 22:case 23:return l0(),null;case 24:return null;default:return null}}var Vc=!1,jn=!1,$T=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ia(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Rt(t,e,r)}else n.current=null}function wm(t,e,n){try{n()}catch(r){Rt(t,e,r)}}var k1=!1;function zT(t,e){if(im=Kf,t=dw(),Fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===i&&(a=s),d===o&&++f===r&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(om={focusedElem:t,selectionRange:n},Kf=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,C=v.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?g:_i(e.type,g),C);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(E){Rt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return v=k1,k1=!1,v}function uu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&wm(e,n,o)}i=i.next}while(i!==r)}}function Vd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ub(t){var e=t.alternate;e!==null&&(t.alternate=null,ub(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fi],delete e[Du],delete e[lm],delete e[wT],delete e[bT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cb(t){return t.tag===5||t.tag===3||t.tag===4}function C1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qf));else if(r!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}function km(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(km(t,e,n),t=t.sibling;t!==null;)km(t,e,n),t=t.sibling}var wn=null,xi=!1;function Co(t,e,n){for(n=n.child;n!==null;)fb(t,e,n),n=n.sibling}function fb(t,e,n){if(Wi&&typeof Wi.onCommitFiberUnmount=="function")try{Wi.onCommitFiberUnmount(Ld,n)}catch{}switch(n.tag){case 5:jn||Ia(n,e);case 6:var r=wn,i=xi;wn=null,Co(t,e,n),wn=r,xi=i,wn!==null&&(xi?(t=wn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wn.removeChild(n.stateNode));break;case 18:wn!==null&&(xi?(t=wn,n=n.stateNode,t.nodeType===8?ep(t.parentNode,n):t.nodeType===1&&ep(t,n),Nu(t)):ep(wn,n.stateNode));break;case 4:r=wn,i=xi,wn=n.stateNode.containerInfo,xi=!0,Co(t,e,n),wn=r,xi=i;break;case 0:case 11:case 14:case 15:if(!jn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wm(n,e,s),i=i.next}while(i!==r)}Co(t,e,n);break;case 1:if(!jn&&(Ia(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Rt(n,e,a)}Co(t,e,n);break;case 21:Co(t,e,n);break;case 22:n.mode&1?(jn=(r=jn)||n.memoizedState!==null,Co(t,e,n),jn=r):Co(t,e,n);break;default:Co(t,e,n)}}function E1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $T),e.forEach(function(r){var i=XT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vi(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:wn=a.stateNode,xi=!1;break e;case 3:wn=a.stateNode.containerInfo,xi=!0;break e;case 4:wn=a.stateNode.containerInfo,xi=!0;break e}a=a.return}if(wn===null)throw Error(B(160));fb(o,s,i),wn=null,xi=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Rt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)db(e,t),e=e.sibling}function db(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(e,t),Ri(t),r&4){try{uu(3,t,t.return),Vd(3,t)}catch(g){Rt(t,t.return,g)}try{uu(5,t,t.return)}catch(g){Rt(t,t.return,g)}}break;case 1:vi(e,t),Ri(t),r&512&&n!==null&&Ia(n,n.return);break;case 5:if(vi(e,t),Ri(t),r&512&&n!==null&&Ia(n,n.return),t.flags&32){var i=t.stateNode;try{Tu(i,"")}catch(g){Rt(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jx(i,o),Xp(a,s);var c=Xp(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?$x(i,h):f==="dangerouslySetInnerHTML"?Dx(i,h):f==="children"?Tu(i,h):Tg(i,f,h,c)}switch(a){case"input":Up(i,o);break;case"textarea":Rx(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?za(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?za(i,!!o.multiple,o.defaultValue,!0):za(i,!!o.multiple,o.multiple?[]:"",!1))}i[Du]=o}catch(g){Rt(t,t.return,g)}}break;case 6:if(vi(e,t),Ri(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){Rt(t,t.return,g)}}break;case 3:if(vi(e,t),Ri(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nu(e.containerInfo)}catch(g){Rt(t,t.return,g)}break;case 4:vi(e,t),Ri(t);break;case 13:vi(e,t),Ri(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(s0=Ht())),r&4&&E1(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jn=(c=jn)||f,vi(e,t),jn=c):vi(e,t),Ri(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(h=q=f;q!==null;){switch(d=q,p=d.child,d.tag){case 0:case 11:case 14:case 15:uu(4,d,d.return);break;case 1:Ia(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Rt(r,n,g)}}break;case 5:Ia(d,d.return);break;case 22:if(d.memoizedState!==null){P1(h);continue}}p!==null?(p.return=d,q=p):P1(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lx("display",s))}catch(g){Rt(t,t.return,g)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){Rt(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vi(e,t),Ri(t),r&4&&E1(t);break;case 21:break;default:vi(e,t),Ri(t)}}function Ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cb(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tu(i,""),r.flags&=-33);var o=C1(t);km(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=C1(t);Sm(t,a,s);break;default:throw Error(B(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FT(t,e,n){q=t,hb(t)}function hb(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jn;a=Vc;var c=jn;if(Vc=s,(jn=l)&&!c)for(q=i;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?O1(i):l!==null?(l.return=s,q=l):O1(i);for(;o!==null;)q=o,hb(o),o=o.sibling;q=i,Vc=a,jn=c}T1(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):T1(t)}}function T1(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jn||Vd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_i(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&c1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c1(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Nu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}jn||e.flags&512&&bm(e)}catch(d){Rt(e,e.return,d)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function P1(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function O1(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vd(4,e)}catch(l){Rt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Rt(e,i,l)}}var o=e.return;try{bm(e)}catch(l){Rt(e,o,l)}break;case 5:var s=e.return;try{bm(e)}catch(l){Rt(e,s,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var BT=Math.ceil,ad=wo.ReactCurrentDispatcher,i0=wo.ReactCurrentOwner,ii=wo.ReactCurrentBatchConfig,ze=0,yn=null,Zt=null,Cn=0,kr=0,ja=as(0),an=0,Hu=null,Ys=0,Yd=0,o0=0,cu=null,sr=null,s0=0,ol=1/0,eo=null,ld=!1,Cm=null,Ko=null,Yc=!1,Mo=null,ud=0,fu=0,Em=null,xf=-1,wf=0;function Zn(){return ze&6?Ht():xf!==-1?xf:xf=Ht()}function Xo(t){return t.mode&1?ze&2&&Cn!==0?Cn&-Cn:kT.transition!==null?(wf===0&&(wf=qx()),wf):(t=qe,t!==0||(t=window.event,t=t===void 0?16:rw(t.type)),t):1}function Ci(t,e,n,r){if(50<fu)throw fu=0,Em=null,Error(B(185));ac(t,n,r),(!(ze&2)||t!==yn)&&(t===yn&&(!(ze&2)&&(Yd|=n),an===4&&jo(t,Cn)),fr(t,r),n===1&&ze===0&&!(e.mode&1)&&(ol=Ht()+500,Hd&&ls()))}function fr(t,e){var n=t.callbackNode;kE(t,e);var r=Yf(t,t===yn?Cn:0);if(r===0)n!==null&&$y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$y(n),e===1)t.tag===0?ST(A1.bind(null,t)):bw(A1.bind(null,t)),_T(function(){!(ze&6)&&ls()}),n=null;else{switch(Qx(r)){case 1:n=Ig;break;case 4:n=Xx;break;case 16:n=Vf;break;case 536870912:n=Gx;break;default:n=Vf}n=wb(n,pb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pb(t,e){if(xf=-1,wf=0,ze&6)throw Error(B(327));var n=t.callbackNode;if(Wa()&&t.callbackNode!==n)return null;var r=Yf(t,t===yn?Cn:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cd(t,r);else{e=r;var i=ze;ze|=2;var o=gb();(yn!==t||Cn!==e)&&(eo=null,ol=Ht()+500,js(t,e));do try{WT();break}catch(a){mb(t,a)}while(1);Vg(),ad.current=o,ze=i,Zt!==null?e=0:(yn=null,Cn=0,e=an)}if(e!==0){if(e===2&&(i=Jp(t),i!==0&&(r=i,e=Tm(t,i))),e===1)throw n=Hu,js(t,0),jo(t,r),fr(t,Ht()),n;if(e===6)jo(t,r);else{if(i=t.current.alternate,!(r&30)&&!HT(i)&&(e=cd(t,r),e===2&&(o=Jp(t),o!==0&&(r=o,e=Tm(t,o))),e===1))throw n=Hu,js(t,0),jo(t,r),fr(t,Ht()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ws(t,sr,eo);break;case 3:if(jo(t,r),(r&130023424)===r&&(e=s0+500-Ht(),10<e)){if(Yf(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Zn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=am(ws.bind(null,t,sr,eo),e);break}ws(t,sr,eo);break;case 4:if(jo(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-ki(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BT(r/1960))-r,10<r){t.timeoutHandle=am(ws.bind(null,t,sr,eo),r);break}ws(t,sr,eo);break;case 5:ws(t,sr,eo);break;default:throw Error(B(329))}}}return fr(t,Ht()),t.callbackNode===n?pb.bind(null,t):null}function Tm(t,e){var n=cu;return t.current.memoizedState.isDehydrated&&(js(t,e).flags|=256),t=cd(t,e),t!==2&&(e=sr,sr=n,e!==null&&Pm(e)),t}function Pm(t){sr===null?sr=t:sr.push.apply(sr,t)}function HT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pi(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jo(t,e){for(e&=~o0,e&=~Yd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ki(e),r=1<<n;t[n]=-1,e&=~r}}function A1(t){if(ze&6)throw Error(B(327));Wa();var e=Yf(t,0);if(!(e&1))return fr(t,Ht()),null;var n=cd(t,e);if(t.tag!==0&&n===2){var r=Jp(t);r!==0&&(e=r,n=Tm(t,r))}if(n===1)throw n=Hu,js(t,0),jo(t,e),fr(t,Ht()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ws(t,sr,eo),fr(t,Ht()),null}function a0(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(ol=Ht()+500,Hd&&ls())}}function Ks(t){Mo!==null&&Mo.tag===0&&!(ze&6)&&Wa();var e=ze;ze|=1;var n=ii.transition,r=qe;try{if(ii.transition=null,qe=1,t)return t()}finally{qe=r,ii.transition=n,ze=e,!(ze&6)&&ls()}}function l0(){kr=ja.current,ht(ja)}function js(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yT(n)),Zt!==null)for(n=Zt.return;n!==null;){var r=n;switch(Hg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qf();break;case 3:rl(),ht(ur),ht(Ln),Qg();break;case 5:qg(r);break;case 4:rl();break;case 13:ht(bt);break;case 19:ht(bt);break;case 10:Yg(r.type._context);break;case 22:case 23:l0()}n=n.return}if(yn=t,Zt=t=Go(t.current,null),Cn=kr=e,an=0,Hu=null,o0=Yd=Ys=0,sr=cu=null,Ts!==null){for(e=0;e<Ts.length;e++)if(n=Ts[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ts=null}return t}function mb(t,e){do{var n=Zt;try{if(Vg(),vf.current=sd,od){for(var r=Ct.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}od=!1}if(Vs=0,mn=on=Ct=null,lu=!1,zu=0,i0.current=null,n===null||n.return===null){an=1,Hu=e,Zt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=v1(s);if(p!==null){p.flags&=-257,y1(p,s,a,o,e),p.mode&1&&g1(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){g1(o,c,e),u0();break e}l=Error(B(426))}}else if(_t&&a.mode&1){var C=v1(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),y1(C,s,a,o,e),Ug(il(l,a));break e}}o=l=il(l,a),an!==4&&(an=2),cu===null?cu=[o]:cu.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=Zw(o,l,e);u1(o,_);break e;case 1:a=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ko===null||!Ko.has(b)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Jw(o,a,e);u1(o,E);break e}}o=o.return}while(o!==null)}yb(n)}catch(P){e=P,Zt===n&&n!==null&&(Zt=n=n.return);continue}break}while(1)}function gb(){var t=ad.current;return ad.current=sd,t===null?sd:t}function u0(){(an===0||an===3||an===2)&&(an=4),yn===null||!(Ys&268435455)&&!(Yd&268435455)||jo(yn,Cn)}function cd(t,e){var n=ze;ze|=2;var r=gb();(yn!==t||Cn!==e)&&(eo=null,js(t,e));do try{UT();break}catch(i){mb(t,i)}while(1);if(Vg(),ze=n,ad.current=r,Zt!==null)throw Error(B(261));return yn=null,Cn=0,an}function UT(){for(;Zt!==null;)vb(Zt)}function WT(){for(;Zt!==null&&!mE();)vb(Zt)}function vb(t){var e=xb(t.alternate,t,kr);t.memoizedProps=t.pendingProps,e===null?yb(t):Zt=e,i0.current=null}function yb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LT(n,e),n!==null){n.flags&=32767,Zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,Zt=null;return}}else if(n=DT(n,e,kr),n!==null){Zt=n;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=t}while(e!==null);an===0&&(an=5)}function ws(t,e,n){var r=qe,i=ii.transition;try{ii.transition=null,qe=1,VT(t,e,n,r)}finally{ii.transition=i,qe=r}return null}function VT(t,e,n,r){do Wa();while(Mo!==null);if(ze&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(CE(t,o),t===yn&&(Zt=yn=null,Cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yc||(Yc=!0,wb(Vf,function(){return Wa(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ii.transition,ii.transition=null;var s=qe;qe=1;var a=ze;ze|=4,i0.current=null,zT(t,n),db(n,t),fT(om),Kf=!!im,om=im=null,t.current=n,FT(n),gE(),ze=a,qe=s,ii.transition=o}else t.current=n;if(Yc&&(Yc=!1,Mo=t,ud=i),o=t.pendingLanes,o===0&&(Ko=null),_E(n.stateNode),fr(t,Ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ld)throw ld=!1,t=Cm,Cm=null,t;return ud&1&&t.tag!==0&&Wa(),o=t.pendingLanes,o&1?t===Em?fu++:(fu=0,Em=t):fu=0,ls(),null}function Wa(){if(Mo!==null){var t=Qx(ud),e=ii.transition,n=qe;try{if(ii.transition=null,qe=16>t?16:t,Mo===null)var r=!1;else{if(t=Mo,Mo=null,ud=0,ze&6)throw Error(B(331));var i=ze;for(ze|=4,q=t.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:uu(8,f,o)}var h=f.child;if(h!==null)h.return=f,q=h;else for(;q!==null;){f=q;var d=f.sibling,p=f.return;if(ub(f),f===c){q=null;break}if(d!==null){d.return=p,q=d;break}q=p}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:uu(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,q=_;break e}q=o.return}}var y=t.current;for(q=y;q!==null;){s=q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,q=b;else e:for(s=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vd(9,a)}}catch(P){Rt(a,a.return,P)}if(a===s){q=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,q=E;break e}q=a.return}}if(ze=i,ls(),Wi&&typeof Wi.onPostCommitFiberRoot=="function")try{Wi.onPostCommitFiberRoot(Ld,t)}catch{}r=!0}return r}finally{qe=n,ii.transition=e}}return!1}function N1(t,e,n){e=il(n,e),e=Zw(t,e,1),t=Yo(t,e,1),e=Zn(),t!==null&&(ac(t,1,e),fr(t,e))}function Rt(t,e,n){if(t.tag===3)N1(t,t,n);else for(;e!==null;){if(e.tag===3){N1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ko===null||!Ko.has(r))){t=il(n,t),t=Jw(e,t,1),e=Yo(e,t,1),t=Zn(),e!==null&&(ac(e,1,t),fr(e,t));break}}e=e.return}}function YT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zn(),t.pingedLanes|=t.suspendedLanes&n,yn===t&&(Cn&n)===n&&(an===4||an===3&&(Cn&130023424)===Cn&&500>Ht()-s0?js(t,0):o0|=n),fr(t,e)}function _b(t,e){e===0&&(t.mode&1?(e=Dc,Dc<<=1,!(Dc&130023424)&&(Dc=4194304)):e=1);var n=Zn();t=go(t,e),t!==null&&(ac(t,e,n),fr(t,n))}function KT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_b(t,n)}function XT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),_b(t,n)}var xb;xb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ur.current)lr=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lr=!1,MT(t,e,n);lr=!!(t.flags&131072)}else lr=!1,_t&&e.flags&1048576&&Sw(e,ed,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_f(t,e),t=e.pendingProps;var i=el(e,Ln.current);Ua(e,n),i=Jg(null,e,r,t,i,n);var o=e0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cr(r)?(o=!0,Zf(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xg(e),i.updater=Ud,e.stateNode=i,i._reactInternals=e,pm(e,r,t,n),e=vm(null,e,r,!0,o,n)):(e.tag=0,_t&&o&&Bg(e),Yn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_f(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qT(r),t=_i(r,t),i){case 0:e=gm(null,e,r,t,n);break e;case 1:e=w1(null,e,r,t,n);break e;case 11:e=_1(null,e,r,t,n);break e;case 14:e=x1(null,e,r,_i(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_i(r,i),gm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_i(r,i),w1(t,e,r,i,n);case 3:e:{if(rb(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Tw(t,e),rd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=il(Error(B(423)),e),e=b1(t,e,r,n,i);break e}else if(r!==i){i=il(Error(B(424)),e),e=b1(t,e,r,n,i);break e}else for(Ir=Vo(e.stateNode.containerInfo.firstChild),jr=e,_t=!0,wi=null,n=Nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tl(),r===i){e=vo(t,e,n);break e}Yn(t,e,r,n)}e=e.child}return e;case 5:return Iw(e),t===null&&fm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,sm(r,i)?s=null:o!==null&&sm(r,o)&&(e.flags|=32),nb(t,e),Yn(t,e,s,n),e.child;case 6:return t===null&&fm(e),null;case 13:return ib(t,e,n);case 4:return Gg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=nl(e,null,r,n):Yn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_i(r,i),_1(t,e,r,i,n);case 7:return Yn(t,e,e.pendingProps,n),e.child;case 8:return Yn(t,e,e.pendingProps.children,n),e.child;case 12:return Yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,at(td,r._currentValue),r._currentValue=s,o!==null)if(Pi(o.value,s)){if(o.children===i.children&&!ur.current){e=vo(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=co(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),dm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ua(e,n),i=si(i),r=r(i),e.flags|=1,Yn(t,e,r,n),e.child;case 14:return r=e.type,i=_i(r,e.pendingProps),i=_i(r.type,i),x1(t,e,r,i,n);case 15:return eb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_i(r,i),_f(t,e),e.tag=1,cr(r)?(t=!0,Zf(e)):t=!1,Ua(e,n),Ow(e,r,i),pm(e,r,i,n),vm(null,e,r,!0,t,n);case 19:return ob(t,e,n);case 22:return tb(t,e,n)}throw Error(B(156,e.tag))};function wb(t,e){return Kx(t,e)}function GT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,r){return new GT(t,e,n,r)}function c0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qT(t){if(typeof t=="function")return c0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Og)return 11;if(t===Ag)return 14}return 2}function Go(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bf(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")c0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Sa:return Rs(n.children,i,o,e);case Pg:s=8,i|=8;break;case $p:return t=ei(12,n,e,i|2),t.elementType=$p,t.lanes=o,t;case zp:return t=ei(13,n,e,i),t.elementType=zp,t.lanes=o,t;case Fp:return t=ei(19,n,e,i),t.elementType=Fp,t.lanes=o,t;case Ax:return Kd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Px:s=10;break e;case Ox:s=9;break e;case Og:s=11;break e;case Ag:s=14;break e;case Oo:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=ei(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Rs(t,e,n,r){return t=ei(7,t,r,e),t.lanes=n,t}function Kd(t,e,n,r){return t=ei(22,t,r,e),t.elementType=Ax,t.lanes=n,t.stateNode={isHidden:!1},t}function lp(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function up(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function f0(t,e,n,r,i,o,s,a,l){return t=new QT(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ei(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xg(o),t}function ZT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ba,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bb(t){if(!t)return ns;t=t._reactInternals;e:{if(ta(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(cr(n))return ww(t,n,e)}return e}function Sb(t,e,n,r,i,o,s,a,l){return t=f0(n,r,!0,t,i,o,s,a,l),t.context=bb(null),n=t.current,r=Zn(),i=Xo(n),o=co(r,i),o.callback=e??null,Yo(n,o,i),t.current.lanes=i,ac(t,i,r),fr(t,r),t}function Xd(t,e,n,r){var i=e.current,o=Zn(),s=Xo(i);return n=bb(n),e.context===null?e.context=n:e.pendingContext=n,e=co(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yo(i,e,s),t!==null&&(Ci(t,i,s,o),gf(t,i,s)),s}function fd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function I1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function d0(t,e){I1(t,e),(t=t.alternate)&&I1(t,e)}function JT(){return null}var kb=typeof reportError=="function"?reportError:function(t){console.error(t)};function h0(t){this._internalRoot=t}Gd.prototype.render=h0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Xd(t,e,null,null)};Gd.prototype.unmount=h0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ks(function(){Xd(null,t,null,null)}),e[mo]=null}};function Gd(t){this._internalRoot=t}Gd.prototype.unstable_scheduleHydration=function(t){if(t){var e=ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Io.length&&e!==0&&e<Io[n].priority;n++);Io.splice(n,0,t),n===0&&nw(t)}};function p0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function j1(){}function eP(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fd(s);o.call(c)}}var s=Sb(e,r,t,0,null,!1,!1,"",j1);return t._reactRootContainer=s,t[mo]=s.current,Ru(t.nodeType===8?t.parentNode:t),Ks(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fd(l);a.call(c)}}var l=f0(t,0,!1,null,null,!1,!1,"",j1);return t._reactRootContainer=l,t[mo]=l.current,Ru(t.nodeType===8?t.parentNode:t),Ks(function(){Xd(e,l,n,r)}),l}function Qd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=fd(s);a.call(l)}}Xd(e,s,t,i)}else s=eP(n,e,t,i,r);return fd(s)}Zx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gl(e.pendingLanes);n!==0&&(jg(e,n|1),fr(e,Ht()),!(ze&6)&&(ol=Ht()+500,ls()))}break;case 13:Ks(function(){var r=go(t,1);if(r!==null){var i=Zn();Ci(r,t,1,i)}}),d0(t,1)}};Rg=function(t){if(t.tag===13){var e=go(t,134217728);if(e!==null){var n=Zn();Ci(e,t,134217728,n)}d0(t,134217728)}};Jx=function(t){if(t.tag===13){var e=Xo(t),n=go(t,e);if(n!==null){var r=Zn();Ci(n,t,e,r)}d0(t,e)}};ew=function(){return qe};tw=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};qp=function(t,e,n){switch(e){case"input":if(Up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bd(r);if(!i)throw Error(B(90));Ix(r),Up(r,i)}}}break;case"textarea":Rx(t,n);break;case"select":e=n.value,e!=null&&za(t,!!n.multiple,e,!1)}};Bx=a0;Hx=Ks;var tP={usingClientEntryPoint:!1,Events:[uc,Ta,Bd,zx,Fx,a0]},Fl={findFiberByHostInstance:Es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nP={bundleType:Fl.bundleType,version:Fl.version,rendererPackageName:Fl.rendererPackageName,rendererConfig:Fl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wo.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vx(t),t===null?null:t.stateNode},findFiberByHostInstance:Fl.findFiberByHostInstance||JT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{Ld=Kc.inject(nP),Wi=Kc}catch{}}$r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tP;$r.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p0(e))throw Error(B(200));return ZT(t,e,null,n)};$r.createRoot=function(t,e){if(!p0(t))throw Error(B(299));var n=!1,r="",i=kb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=f0(t,1,!1,null,null,n,!1,r,i),t[mo]=e.current,Ru(t.nodeType===8?t.parentNode:t),new h0(e)};$r.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Vx(e),t=t===null?null:t.stateNode,t};$r.flushSync=function(t){return Ks(t)};$r.hydrate=function(t,e,n){if(!qd(e))throw Error(B(200));return Qd(null,t,e,!0,n)};$r.hydrateRoot=function(t,e,n){if(!p0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=kb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Sb(e,null,t,1,n??null,i,!1,o,s),t[mo]=e.current,Ru(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gd(e)};$r.render=function(t,e,n){if(!qd(e))throw Error(B(200));return Qd(null,t,e,!1,n)};$r.unmountComponentAtNode=function(t){if(!qd(t))throw Error(B(40));return t._reactRootContainer?(Ks(function(){Qd(null,null,t,!1,function(){t._reactRootContainer=null,t[mo]=null})}),!0):!1};$r.unstable_batchedUpdates=a0;$r.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Qd(t,e,n,!1,r)};$r.version="18.2.0-next-9e3b772b8-20220608";function Cb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cb)}catch(t){console.error(t)}}Cb(),Sx.exports=$r;var rP=Sx.exports,R1=rP;Dp.createRoot=R1.createRoot,Dp.hydrateRoot=R1.hydrateRoot;var iP={exports:{}};/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,r){t.exports=r()})(NC,function(){const n=new Map,r={set(w,u,m){n.has(w)||n.set(w,new Map);const k=n.get(w);k.has(u)||k.size===0?k.set(u,m):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(k.keys())[0]}.`)},get:(w,u)=>n.has(w)&&n.get(w).get(u)||null,remove(w,u){if(!n.has(w))return;const m=n.get(w);m.delete(u),m.size===0&&n.delete(w)}},i="transitionend",o=w=>(w&&window.CSS&&window.CSS.escape&&(w=w.replace(/#([^\s"#']+)/g,(u,m)=>`#${CSS.escape(m)}`)),w),s=w=>{w.dispatchEvent(new Event(i))},a=w=>!(!w||typeof w!="object")&&(w.jquery!==void 0&&(w=w[0]),w.nodeType!==void 0),l=w=>a(w)?w.jquery?w[0]:w:typeof w=="string"&&w.length>0?document.querySelector(o(w)):null,c=w=>{if(!a(w)||w.getClientRects().length===0)return!1;const u=getComputedStyle(w).getPropertyValue("visibility")==="visible",m=w.closest("details:not([open])");if(!m)return u;if(m!==w){const k=w.closest("summary");if(k&&k.parentNode!==m||k===null)return!1}return u},f=w=>!w||w.nodeType!==Node.ELEMENT_NODE||!!w.classList.contains("disabled")||(w.disabled!==void 0?w.disabled:w.hasAttribute("disabled")&&w.getAttribute("disabled")!=="false"),h=w=>{if(!document.documentElement.attachShadow)return null;if(typeof w.getRootNode=="function"){const u=w.getRootNode();return u instanceof ShadowRoot?u:null}return w instanceof ShadowRoot?w:w.parentNode?h(w.parentNode):null},d=()=>{},p=w=>{w.offsetHeight},v=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],C=()=>document.documentElement.dir==="rtl",_=w=>{var u;u=()=>{const m=v();if(m){const k=w.NAME,A=m.fn[k];m.fn[k]=w.jQueryInterface,m.fn[k].Constructor=w,m.fn[k].noConflict=()=>(m.fn[k]=A,w.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const m of g)m()}),g.push(u)):u()},y=(w,u=[],m=w)=>typeof w=="function"?w(...u):m,b=(w,u,m=!0)=>{if(!m)return void y(w);const k=(D=>{if(!D)return 0;let{transitionDuration:z,transitionDelay:V}=window.getComputedStyle(D);const G=Number.parseFloat(z),Z=Number.parseFloat(V);return G||Z?(z=z.split(",")[0],V=V.split(",")[0],1e3*(Number.parseFloat(z)+Number.parseFloat(V))):0})(u)+5;let A=!1;const N=({target:D})=>{D===u&&(A=!0,u.removeEventListener(i,N),y(w))};u.addEventListener(i,N),setTimeout(()=>{A||s(u)},k)},E=(w,u,m,k)=>{const A=w.length;let N=w.indexOf(u);return N===-1?!m&&k?w[A-1]:w[0]:(N+=m?1:-1,k&&(N=(N+A)%A),w[Math.max(0,Math.min(N,A-1))])},P=/[^.]*(?=\..*)\.|.*/,O=/\..*/,T=/::\d+$/,j={};let R=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},W=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function F(w,u){return u&&`${u}::${R++}`||w.uidEvent||R++}function re(w){const u=F(w);return w.uidEvent=u,j[u]=j[u]||{},j[u]}function ee(w,u,m=null){return Object.values(w).find(k=>k.callable===u&&k.delegationSelector===m)}function ne(w,u,m){const k=typeof u=="string",A=k?m:u||m;let N=H(w);return W.has(N)||(N=w),[k,A,N]}function oe(w,u,m,k,A){if(typeof u!="string"||!w)return;let[N,D,z]=ne(u,m,k);u in I&&(D=(de=>function(fe){if(!fe.relatedTarget||fe.relatedTarget!==fe.delegateTarget&&!fe.delegateTarget.contains(fe.relatedTarget))return de.call(this,fe)})(D));const V=re(w),G=V[z]||(V[z]={}),Z=ee(G,D,N?m:null);if(Z)return void(Z.oneOff=Z.oneOff&&A);const K=F(D,u.replace(P,"")),ge=N?function(le,de,fe){return function he(Ze){const st=le.querySelectorAll(de);for(let{target:be}=Ze;be&&be!==this;be=be.parentNode)for(const He of st)if(He===be)return Q(Ze,{delegateTarget:be}),he.oneOff&&S.off(le,Ze.type,de,fe),fe.apply(be,[Ze])}}(w,m,D):function(le,de){return function fe(he){return Q(he,{delegateTarget:le}),fe.oneOff&&S.off(le,he.type,de),de.apply(le,[he])}}(w,D);ge.delegationSelector=N?m:null,ge.callable=D,ge.oneOff=A,ge.uidEvent=K,G[K]=ge,w.addEventListener(z,ge,N)}function te(w,u,m,k,A){const N=ee(u[m],k,A);N&&(w.removeEventListener(m,N,!!A),delete u[m][N.uidEvent])}function $(w,u,m,k){const A=u[m]||{};for(const[N,D]of Object.entries(A))N.includes(k)&&te(w,u,m,D.callable,D.delegationSelector)}function H(w){return w=w.replace(O,""),I[w]||w}const S={on(w,u,m,k){oe(w,u,m,k,!1)},one(w,u,m,k){oe(w,u,m,k,!0)},off(w,u,m,k){if(typeof u!="string"||!w)return;const[A,N,D]=ne(u,m,k),z=D!==u,V=re(w),G=V[D]||{},Z=u.startsWith(".");if(N===void 0){if(Z)for(const K of Object.keys(V))$(w,V,K,u.slice(1));for(const[K,ge]of Object.entries(G)){const le=K.replace(T,"");z&&!u.includes(le)||te(w,V,D,ge.callable,ge.delegationSelector)}}else{if(!Object.keys(G).length)return;te(w,V,D,N,A?m:null)}},trigger(w,u,m){if(typeof u!="string"||!w)return null;const k=v();let A=null,N=!0,D=!0,z=!1;u!==H(u)&&k&&(A=k.Event(u,m),k(w).trigger(A),N=!A.isPropagationStopped(),D=!A.isImmediatePropagationStopped(),z=A.isDefaultPrevented());const V=Q(new Event(u,{bubbles:N,cancelable:!0}),m);return z&&V.preventDefault(),D&&w.dispatchEvent(V),V.defaultPrevented&&A&&A.preventDefault(),V}};function Q(w,u={}){for(const[m,k]of Object.entries(u))try{w[m]=k}catch{Object.defineProperty(w,m,{configurable:!0,get:()=>k})}return w}function ae(w){if(w==="true")return!0;if(w==="false")return!1;if(w===Number(w).toString())return Number(w);if(w===""||w==="null")return null;if(typeof w!="string")return w;try{return JSON.parse(decodeURIComponent(w))}catch{return w}}function it(w){return w.replace(/[A-Z]/g,u=>`-${u.toLowerCase()}`)}const ue={setDataAttribute(w,u,m){w.setAttribute(`data-bs-${it(u)}`,m)},removeDataAttribute(w,u){w.removeAttribute(`data-bs-${it(u)}`)},getDataAttributes(w){if(!w)return{};const u={},m=Object.keys(w.dataset).filter(k=>k.startsWith("bs")&&!k.startsWith("bsConfig"));for(const k of m){let A=k.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1,A.length),u[A]=ae(w.dataset[k])}return u},getDataAttribute:(w,u)=>ae(w.getAttribute(`data-bs-${it(u)}`))};class Me{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,m){const k=a(m)?ue.getDataAttribute(m,"config"):{};return{...this.constructor.Default,...typeof k=="object"?k:{},...a(m)?ue.getDataAttributes(m):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,m=this.constructor.DefaultType){for(const[A,N]of Object.entries(m)){const D=u[A],z=a(D)?"element":(k=D)==null?`${k}`:Object.prototype.toString.call(k).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(N).test(z))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${A}" provided type "${z}" but expected type "${N}".`)}var k}}class me extends Me{constructor(u,m){super(),(u=l(u))&&(this._element=u,this._config=this._getConfig(m),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const u of Object.getOwnPropertyNames(this))this[u]=null}_queueCallback(u,m,k=!0){b(u,m,k)}_getConfig(u){return u=this._mergeConfigObj(u,this._element),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}static getInstance(u){return r.get(l(u),this.DATA_KEY)}static getOrCreateInstance(u,m={}){return this.getInstance(u)||new this(u,typeof m=="object"?m:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(u){return`${u}${this.EVENT_KEY}`}}const De=w=>{let u=w.getAttribute("data-bs-target");if(!u||u==="#"){let m=w.getAttribute("href");if(!m||!m.includes("#")&&!m.startsWith("."))return null;m.includes("#")&&!m.startsWith("#")&&(m=`#${m.split("#")[1]}`),u=m&&m!=="#"?m.trim():null}return o(u)},Y={find:(w,u=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(u,w)),findOne:(w,u=document.documentElement)=>Element.prototype.querySelector.call(u,w),children:(w,u)=>[].concat(...w.children).filter(m=>m.matches(u)),parents(w,u){const m=[];let k=w.parentNode.closest(u);for(;k;)m.push(k),k=k.parentNode.closest(u);return m},prev(w,u){let m=w.previousElementSibling;for(;m;){if(m.matches(u))return[m];m=m.previousElementSibling}return[]},next(w,u){let m=w.nextElementSibling;for(;m;){if(m.matches(u))return[m];m=m.nextElementSibling}return[]},focusableChildren(w){const u=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(m=>`${m}:not([tabindex^="-"])`).join(",");return this.find(u,w).filter(m=>!f(m)&&c(m))},getSelectorFromElement(w){const u=De(w);return u&&Y.findOne(u)?u:null},getElementFromSelector(w){const u=De(w);return u?Y.findOne(u):null},getMultipleElementsFromSelector(w){const u=De(w);return u?Y.find(u):[]}},Ke=(w,u="hide")=>{const m=`click.dismiss${w.EVENT_KEY}`,k=w.NAME;S.on(document,m,`[data-bs-dismiss="${k}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),f(this))return;const N=Y.getElementFromSelector(this)||this.closest(`.${k}`);w.getOrCreateInstance(N)[u]()})};class ln extends me{static get NAME(){return"alert"}close(){if(S.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const u=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,u)}_destroyElement(){this._element.remove(),S.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(u){return this.each(function(){const m=ln.getOrCreateInstance(this);if(typeof u=="string"){if(m[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);m[u](this)}})}}Ke(ln,"close"),_(ln);const Tt='[data-bs-toggle="button"]';class lt extends me{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(u){return this.each(function(){const m=lt.getOrCreateInstance(this);u==="toggle"&&m[u]()})}}S.on(document,"click.bs.button.data-api",Tt,w=>{w.preventDefault();const u=w.target.closest(Tt);lt.getOrCreateInstance(u).toggle()}),_(lt);const Le={endCallback:null,leftCallback:null,rightCallback:null},Pt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class tn extends Me{constructor(u,m){super(),this._element=u,u&&tn.isSupported()&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Le}static get DefaultType(){return Pt}static get NAME(){return"swipe"}dispose(){S.off(this._element,".bs.swipe")}_start(u){this._supportPointerEvents?this._eventIsPointerPenTouch(u)&&(this._deltaX=u.clientX):this._deltaX=u.touches[0].clientX}_end(u){this._eventIsPointerPenTouch(u)&&(this._deltaX=u.clientX-this._deltaX),this._handleSwipe(),y(this._config.endCallback)}_move(u){this._deltaX=u.touches&&u.touches.length>1?0:u.touches[0].clientX-this._deltaX}_handleSwipe(){const u=Math.abs(this._deltaX);if(u<=40)return;const m=u/this._deltaX;this._deltaX=0,m&&y(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,"pointerdown.bs.swipe",u=>this._start(u)),S.on(this._element,"pointerup.bs.swipe",u=>this._end(u)),this._element.classList.add("pointer-event")):(S.on(this._element,"touchstart.bs.swipe",u=>this._start(u)),S.on(this._element,"touchmove.bs.swipe",u=>this._move(u)),S.on(this._element,"touchend.bs.swipe",u=>this._end(u)))}_eventIsPointerPenTouch(u){return this._supportPointerEvents&&(u.pointerType==="pen"||u.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const nn="next",M="prev",Ut="left",tr="right",ci="slid.bs.carousel",xt="carousel",Fr="active",Qi={ArrowLeft:tr,ArrowRight:Ut},ds={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rn={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Qe extends me{constructor(u,m){super(u,m),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Y.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===xt&&this.cycle()}static get Default(){return ds}static get DefaultType(){return rn}static get NAME(){return"carousel"}next(){this._slide(nn)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(M)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?S.one(this._element,ci,()=>this.cycle()):this.cycle())}to(u){const m=this._getItems();if(u>m.length-1||u<0)return;if(this._isSliding)return void S.one(this._element,ci,()=>this.to(u));const k=this._getItemIndex(this._getActive());if(k===u)return;const A=u>k?nn:M;this._slide(A,m[u])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(u){return u.defaultInterval=u.interval,u}_addEventListeners(){this._config.keyboard&&S.on(this._element,"keydown.bs.carousel",u=>this._keydown(u)),this._config.pause==="hover"&&(S.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),S.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&tn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const m of Y.find(".carousel-item img",this._element))S.on(m,"dragstart.bs.carousel",k=>k.preventDefault());const u={leftCallback:()=>this._slide(this._directionToOrder(Ut)),rightCallback:()=>this._slide(this._directionToOrder(tr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new tn(this._element,u)}_keydown(u){if(/input|textarea/i.test(u.target.tagName))return;const m=Qi[u.key];m&&(u.preventDefault(),this._slide(this._directionToOrder(m)))}_getItemIndex(u){return this._getItems().indexOf(u)}_setActiveIndicatorElement(u){if(!this._indicatorsElement)return;const m=Y.findOne(".active",this._indicatorsElement);m.classList.remove(Fr),m.removeAttribute("aria-current");const k=Y.findOne(`[data-bs-slide-to="${u}"]`,this._indicatorsElement);k&&(k.classList.add(Fr),k.setAttribute("aria-current","true"))}_updateInterval(){const u=this._activeElement||this._getActive();if(!u)return;const m=Number.parseInt(u.getAttribute("data-bs-interval"),10);this._config.interval=m||this._config.defaultInterval}_slide(u,m=null){if(this._isSliding)return;const k=this._getActive(),A=u===nn,N=m||E(this._getItems(),k,A,this._config.wrap);if(N===k)return;const D=this._getItemIndex(N),z=K=>S.trigger(this._element,K,{relatedTarget:N,direction:this._orderToDirection(u),from:this._getItemIndex(k),to:D});if(z("slide.bs.carousel").defaultPrevented||!k||!N)return;const V=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(D),this._activeElement=N;const G=A?"carousel-item-start":"carousel-item-end",Z=A?"carousel-item-next":"carousel-item-prev";N.classList.add(Z),p(N),k.classList.add(G),N.classList.add(G),this._queueCallback(()=>{N.classList.remove(G,Z),N.classList.add(Fr),k.classList.remove(Fr,Z,G),this._isSliding=!1,z(ci)},k,this._isAnimated()),V&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Y.findOne(".active.carousel-item",this._element)}_getItems(){return Y.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(u){return C()?u===Ut?M:nn:u===Ut?nn:M}_orderToDirection(u){return C()?u===M?Ut:tr:u===M?tr:Ut}static jQueryInterface(u){return this.each(function(){const m=Qe.getOrCreateInstance(this,u);if(typeof u!="number"){if(typeof u=="string"){if(m[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);m[u]()}}else m.to(u)})}}S.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(w){const u=Y.getElementFromSelector(this);if(!u||!u.classList.contains(xt))return;w.preventDefault();const m=Qe.getOrCreateInstance(u),k=this.getAttribute("data-bs-slide-to");return k?(m.to(k),void m._maybeEnableCycle()):ue.getDataAttribute(this,"slide")==="next"?(m.next(),void m._maybeEnableCycle()):(m.prev(),void m._maybeEnableCycle())}),S.on(window,"load.bs.carousel.data-api",()=>{const w=Y.find('[data-bs-ride="carousel"]');for(const u of w)Qe.getOrCreateInstance(u)}),_(Qe);const $n="show",Tn="collapse",Br="collapsing",vr='[data-bs-toggle="collapse"]',Hr={parent:null,toggle:!0},Pn={parent:"(null|element)",toggle:"boolean"};class nr extends me{constructor(u,m){super(u,m),this._isTransitioning=!1,this._triggerArray=[];const k=Y.find(vr);for(const A of k){const N=Y.getSelectorFromElement(A),D=Y.find(N).filter(z=>z===this._element);N!==null&&D.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Hr}static get DefaultType(){return Pn}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let u=[];if(this._config.parent&&(u=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(A=>A!==this._element).map(A=>nr.getOrCreateInstance(A,{toggle:!1}))),u.length&&u[0]._isTransitioning||S.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const A of u)A.hide();const m=this._getDimension();this._element.classList.remove(Tn),this._element.classList.add(Br),this._element.style[m]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const k=`scroll${m[0].toUpperCase()+m.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Br),this._element.classList.add(Tn,$n),this._element.style[m]="",S.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[m]=`${this._element[k]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const u=this._getDimension();this._element.style[u]=`${this._element.getBoundingClientRect()[u]}px`,p(this._element),this._element.classList.add(Br),this._element.classList.remove(Tn,$n);for(const m of this._triggerArray){const k=Y.getElementFromSelector(m);k&&!this._isShown(k)&&this._addAriaAndCollapsedClass([m],!1)}this._isTransitioning=!0,this._element.style[u]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Br),this._element.classList.add(Tn),S.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(u=this._element){return u.classList.contains($n)}_configAfterMerge(u){return u.toggle=!!u.toggle,u.parent=l(u.parent),u}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const u=this._getFirstLevelChildren(vr);for(const m of u){const k=Y.getElementFromSelector(m);k&&this._addAriaAndCollapsedClass([m],this._isShown(k))}}_getFirstLevelChildren(u){const m=Y.find(":scope .collapse .collapse",this._config.parent);return Y.find(u,this._config.parent).filter(k=>!m.includes(k))}_addAriaAndCollapsedClass(u,m){if(u.length)for(const k of u)k.classList.toggle("collapsed",!m),k.setAttribute("aria-expanded",m)}static jQueryInterface(u){const m={};return typeof u=="string"&&/show|hide/.test(u)&&(m.toggle=!1),this.each(function(){const k=nr.getOrCreateInstance(this,m);if(typeof u=="string"){if(k[u]===void 0)throw new TypeError(`No method named "${u}"`);k[u]()}})}}S.on(document,"click.bs.collapse.data-api",vr,function(w){(w.target.tagName==="A"||w.delegateTarget&&w.delegateTarget.tagName==="A")&&w.preventDefault();for(const u of Y.getMultipleElementsFromSelector(this))nr.getOrCreateInstance(u,{toggle:!1}).toggle()}),_(nr);var Ot="top",Wt="bottom",$t="right",pt="left",yr="auto",ve=[Ot,Wt,$t,pt],zn="start",un="end",rr="clippingParents",Fn="viewport",ir="popper",Zi="reference",_r=ve.reduce(function(w,u){return w.concat([u+"-"+zn,u+"-"+un])},[]),ce=[].concat(ve,[yr]).reduce(function(w,u){return w.concat([u,u+"-"+zn,u+"-"+un])},[]),ie="beforeRead",$e="read",ut="afterRead",X="beforeMain",ke="main",se="afterMain",ye="beforeWrite",zt="write",Ee="afterWrite",mt=[ie,$e,ut,X,ke,se,ye,zt,Ee];function ot(w){return w?(w.nodeName||"").toLowerCase():null}function Fe(w){if(w==null)return window;if(w.toString()!=="[object Window]"){var u=w.ownerDocument;return u&&u.defaultView||window}return w}function Be(w){return w instanceof Fe(w).Element||w instanceof Element}function _e(w){return w instanceof Fe(w).HTMLElement||w instanceof HTMLElement}function Bn(w){return typeof ShadowRoot<"u"&&(w instanceof Fe(w).ShadowRoot||w instanceof ShadowRoot)}const et={name:"applyStyles",enabled:!0,phase:"write",fn:function(w){var u=w.state;Object.keys(u.elements).forEach(function(m){var k=u.styles[m]||{},A=u.attributes[m]||{},N=u.elements[m];_e(N)&&ot(N)&&(Object.assign(N.style,k),Object.keys(A).forEach(function(D){var z=A[D];z===!1?N.removeAttribute(D):N.setAttribute(D,z===!0?"":z)}))})},effect:function(w){var u=w.state,m={popper:{position:u.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(u.elements.popper.style,m.popper),u.styles=m,u.elements.arrow&&Object.assign(u.elements.arrow.style,m.arrow),function(){Object.keys(u.elements).forEach(function(k){var A=u.elements[k],N=u.attributes[k]||{},D=Object.keys(u.styles.hasOwnProperty(k)?u.styles[k]:m[k]).reduce(function(z,V){return z[V]="",z},{});_e(A)&&ot(A)&&(Object.assign(A.style,D),Object.keys(N).forEach(function(z){A.removeAttribute(z)}))})}},requires:["computeStyles"]};function gt(w){return w.split("-")[0]}var cn=Math.max,fn=Math.min,vt=Math.round;function Vt(){var w=navigator.userAgentData;return w!=null&&w.brands&&Array.isArray(w.brands)?w.brands.map(function(u){return u.brand+"/"+u.version}).join(" "):navigator.userAgent}function Ai(){return!/^((?!chrome|android).)*safari/i.test(Vt())}function fi(w,u,m){u===void 0&&(u=!1),m===void 0&&(m=!1);var k=w.getBoundingClientRect(),A=1,N=1;u&&_e(w)&&(A=w.offsetWidth>0&&vt(k.width)/w.offsetWidth||1,N=w.offsetHeight>0&&vt(k.height)/w.offsetHeight||1);var D=(Be(w)?Fe(w):window).visualViewport,z=!Ai()&&m,V=(k.left+(z&&D?D.offsetLeft:0))/A,G=(k.top+(z&&D?D.offsetTop:0))/N,Z=k.width/A,K=k.height/N;return{width:Z,height:K,top:G,right:V+Z,bottom:G+K,left:V,x:V,y:G}}function Yt(w){var u=fi(w),m=w.offsetWidth,k=w.offsetHeight;return Math.abs(u.width-m)<=1&&(m=u.width),Math.abs(u.height-k)<=1&&(k=u.height),{x:w.offsetLeft,y:w.offsetTop,width:m,height:k}}function At(w,u){var m=u.getRootNode&&u.getRootNode();if(w.contains(u))return!0;if(m&&Bn(m)){var k=u;do{if(k&&w.isSameNode(k))return!0;k=k.parentNode||k.host}while(k)}return!1}function Kt(w){return Fe(w).getComputedStyle(w)}function Tl(w){return["table","td","th"].indexOf(ot(w))>=0}function di(w){return((Be(w)?w.ownerDocument:w.document)||window.document).documentElement}function Ni(w){return ot(w)==="html"?w:w.assignedSlot||w.parentNode||(Bn(w)?w.host:null)||di(w)}function xr(w){return _e(w)&&Kt(w).position!=="fixed"?w.offsetParent:null}function hi(w){for(var u=Fe(w),m=xr(w);m&&Tl(m)&&Kt(m).position==="static";)m=xr(m);return m&&(ot(m)==="html"||ot(m)==="body"&&Kt(m).position==="static")?u:m||function(k){var A=/firefox/i.test(Vt());if(/Trident/i.test(Vt())&&_e(k)&&Kt(k).position==="fixed")return null;var N=Ni(k);for(Bn(N)&&(N=N.host);_e(N)&&["html","body"].indexOf(ot(N))<0;){var D=Kt(N);if(D.transform!=="none"||D.perspective!=="none"||D.contain==="paint"||["transform","perspective"].indexOf(D.willChange)!==-1||A&&D.willChange==="filter"||A&&D.filter&&D.filter!=="none")return N;N=N.parentNode}return null}(w)||u}function So(w){return["top","bottom"].indexOf(w)>=0?"x":"y"}function pi(w,u,m){return cn(w,fn(u,m))}function gv(w){return Object.assign({},{top:0,right:0,bottom:0,left:0},w)}function vv(w,u){return u.reduce(function(m,k){return m[k]=w,m},{})}const yv={name:"arrow",enabled:!0,phase:"main",fn:function(w){var u,m=w.state,k=w.name,A=w.options,N=m.elements.arrow,D=m.modifiersData.popperOffsets,z=gt(m.placement),V=So(z),G=[pt,$t].indexOf(z)>=0?"height":"width";if(N&&D){var Z=function(Je,Ge){return gv(typeof(Je=typeof Je=="function"?Je(Object.assign({},Ge.rects,{placement:Ge.placement})):Je)!="number"?Je:vv(Je,ve))}(A.padding,m),K=Yt(N),ge=V==="y"?Ot:pt,le=V==="y"?Wt:$t,de=m.rects.reference[G]+m.rects.reference[V]-D[V]-m.rects.popper[G],fe=D[V]-m.rects.reference[V],he=hi(N),Ze=he?V==="y"?he.clientHeight||0:he.clientWidth||0:0,st=de/2-fe/2,be=Z[ge],He=Ze-K[G]-Z[le],xe=Ze/2-K[G]/2+st,Ie=pi(be,xe,He),Xe=V;m.modifiersData[k]=((u={})[Xe]=Ie,u.centerOffset=Ie-xe,u)}},effect:function(w){var u=w.state,m=w.options.element,k=m===void 0?"[data-popper-arrow]":m;k!=null&&(typeof k!="string"||(k=u.elements.popper.querySelector(k)))&&At(u.elements.popper,k)&&(u.elements.arrow=k)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oa(w){return w.split("-")[1]}var Nk={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _v(w){var u,m=w.popper,k=w.popperRect,A=w.placement,N=w.variation,D=w.offsets,z=w.position,V=w.gpuAcceleration,G=w.adaptive,Z=w.roundOffsets,K=w.isFixed,ge=D.x,le=ge===void 0?0:ge,de=D.y,fe=de===void 0?0:de,he=typeof Z=="function"?Z({x:le,y:fe}):{x:le,y:fe};le=he.x,fe=he.y;var Ze=D.hasOwnProperty("x"),st=D.hasOwnProperty("y"),be=pt,He=Ot,xe=window;if(G){var Ie=hi(m),Xe="clientHeight",Je="clientWidth";Ie===Fe(m)&&Kt(Ie=di(m)).position!=="static"&&z==="absolute"&&(Xe="scrollHeight",Je="scrollWidth"),(A===Ot||(A===pt||A===$t)&&N===un)&&(He=Wt,fe-=(K&&Ie===xe&&xe.visualViewport?xe.visualViewport.height:Ie[Xe])-k.height,fe*=V?1:-1),A!==pt&&(A!==Ot&&A!==Wt||N!==un)||(be=$t,le-=(K&&Ie===xe&&xe.visualViewport?xe.visualViewport.width:Ie[Je])-k.width,le*=V?1:-1)}var Ge,Ft=Object.assign({position:z},G&&Nk),wr=Z===!0?function(gi,Hn){var Ur=gi.x,Wr=gi.y,Nt=Hn.devicePixelRatio||1;return{x:vt(Ur*Nt)/Nt||0,y:vt(Wr*Nt)/Nt||0}}({x:le,y:fe},Fe(m)):{x:le,y:fe};return le=wr.x,fe=wr.y,V?Object.assign({},Ft,((Ge={})[He]=st?"0":"",Ge[be]=Ze?"0":"",Ge.transform=(xe.devicePixelRatio||1)<=1?"translate("+le+"px, "+fe+"px)":"translate3d("+le+"px, "+fe+"px, 0)",Ge)):Object.assign({},Ft,((u={})[He]=st?fe+"px":"",u[be]=Ze?le+"px":"",u.transform="",u))}const bh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(w){var u=w.state,m=w.options,k=m.gpuAcceleration,A=k===void 0||k,N=m.adaptive,D=N===void 0||N,z=m.roundOffsets,V=z===void 0||z,G={placement:gt(u.placement),variation:oa(u.placement),popper:u.elements.popper,popperRect:u.rects.popper,gpuAcceleration:A,isFixed:u.options.strategy==="fixed"};u.modifiersData.popperOffsets!=null&&(u.styles.popper=Object.assign({},u.styles.popper,_v(Object.assign({},G,{offsets:u.modifiersData.popperOffsets,position:u.options.strategy,adaptive:D,roundOffsets:V})))),u.modifiersData.arrow!=null&&(u.styles.arrow=Object.assign({},u.styles.arrow,_v(Object.assign({},G,{offsets:u.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:V})))),u.attributes.popper=Object.assign({},u.attributes.popper,{"data-popper-placement":u.placement})},data:{}};var vc={passive:!0};const Sh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(w){var u=w.state,m=w.instance,k=w.options,A=k.scroll,N=A===void 0||A,D=k.resize,z=D===void 0||D,V=Fe(u.elements.popper),G=[].concat(u.scrollParents.reference,u.scrollParents.popper);return N&&G.forEach(function(Z){Z.addEventListener("scroll",m.update,vc)}),z&&V.addEventListener("resize",m.update,vc),function(){N&&G.forEach(function(Z){Z.removeEventListener("scroll",m.update,vc)}),z&&V.removeEventListener("resize",m.update,vc)}},data:{}};var Ik={left:"right",right:"left",bottom:"top",top:"bottom"};function yc(w){return w.replace(/left|right|bottom|top/g,function(u){return Ik[u]})}var jk={start:"end",end:"start"};function xv(w){return w.replace(/start|end/g,function(u){return jk[u]})}function kh(w){var u=Fe(w);return{scrollLeft:u.pageXOffset,scrollTop:u.pageYOffset}}function Ch(w){return fi(di(w)).left+kh(w).scrollLeft}function Eh(w){var u=Kt(w),m=u.overflow,k=u.overflowX,A=u.overflowY;return/auto|scroll|overlay|hidden/.test(m+A+k)}function wv(w){return["html","body","#document"].indexOf(ot(w))>=0?w.ownerDocument.body:_e(w)&&Eh(w)?w:wv(Ni(w))}function Pl(w,u){var m;u===void 0&&(u=[]);var k=wv(w),A=k===((m=w.ownerDocument)==null?void 0:m.body),N=Fe(k),D=A?[N].concat(N.visualViewport||[],Eh(k)?k:[]):k,z=u.concat(D);return A?z:z.concat(Pl(Ni(D)))}function Th(w){return Object.assign({},w,{left:w.x,top:w.y,right:w.x+w.width,bottom:w.y+w.height})}function bv(w,u,m){return u===Fn?Th(function(k,A){var N=Fe(k),D=di(k),z=N.visualViewport,V=D.clientWidth,G=D.clientHeight,Z=0,K=0;if(z){V=z.width,G=z.height;var ge=Ai();(ge||!ge&&A==="fixed")&&(Z=z.offsetLeft,K=z.offsetTop)}return{width:V,height:G,x:Z+Ch(k),y:K}}(w,m)):Be(u)?function(k,A){var N=fi(k,!1,A==="fixed");return N.top=N.top+k.clientTop,N.left=N.left+k.clientLeft,N.bottom=N.top+k.clientHeight,N.right=N.left+k.clientWidth,N.width=k.clientWidth,N.height=k.clientHeight,N.x=N.left,N.y=N.top,N}(u,m):Th(function(k){var A,N=di(k),D=kh(k),z=(A=k.ownerDocument)==null?void 0:A.body,V=cn(N.scrollWidth,N.clientWidth,z?z.scrollWidth:0,z?z.clientWidth:0),G=cn(N.scrollHeight,N.clientHeight,z?z.scrollHeight:0,z?z.clientHeight:0),Z=-D.scrollLeft+Ch(k),K=-D.scrollTop;return Kt(z||N).direction==="rtl"&&(Z+=cn(N.clientWidth,z?z.clientWidth:0)-V),{width:V,height:G,x:Z,y:K}}(di(w)))}function Sv(w){var u,m=w.reference,k=w.element,A=w.placement,N=A?gt(A):null,D=A?oa(A):null,z=m.x+m.width/2-k.width/2,V=m.y+m.height/2-k.height/2;switch(N){case Ot:u={x:z,y:m.y-k.height};break;case Wt:u={x:z,y:m.y+m.height};break;case $t:u={x:m.x+m.width,y:V};break;case pt:u={x:m.x-k.width,y:V};break;default:u={x:m.x,y:m.y}}var G=N?So(N):null;if(G!=null){var Z=G==="y"?"height":"width";switch(D){case zn:u[G]=u[G]-(m[Z]/2-k[Z]/2);break;case un:u[G]=u[G]+(m[Z]/2-k[Z]/2)}}return u}function sa(w,u){u===void 0&&(u={});var m=u,k=m.placement,A=k===void 0?w.placement:k,N=m.strategy,D=N===void 0?w.strategy:N,z=m.boundary,V=z===void 0?rr:z,G=m.rootBoundary,Z=G===void 0?Fn:G,K=m.elementContext,ge=K===void 0?ir:K,le=m.altBoundary,de=le!==void 0&&le,fe=m.padding,he=fe===void 0?0:fe,Ze=gv(typeof he!="number"?he:vv(he,ve)),st=ge===ir?Zi:ir,be=w.rects.popper,He=w.elements[de?st:ge],xe=function(Hn,Ur,Wr,Nt){var Ii=Ur==="clippingParents"?function(tt){var Un=Pl(Ni(tt)),Vr=["absolute","fixed"].indexOf(Kt(tt).position)>=0&&_e(tt)?hi(tt):tt;return Be(Vr)?Un.filter(function(ko){return Be(ko)&&At(ko,Vr)&&ot(ko)!=="body"}):[]}(Hn):[].concat(Ur),ji=[].concat(Ii,[Wr]),aa=ji[0],dn=ji.reduce(function(tt,Un){var Vr=bv(Hn,Un,Nt);return tt.top=cn(Vr.top,tt.top),tt.right=fn(Vr.right,tt.right),tt.bottom=fn(Vr.bottom,tt.bottom),tt.left=cn(Vr.left,tt.left),tt},bv(Hn,aa,Nt));return dn.width=dn.right-dn.left,dn.height=dn.bottom-dn.top,dn.x=dn.left,dn.y=dn.top,dn}(Be(He)?He:He.contextElement||di(w.elements.popper),V,Z,D),Ie=fi(w.elements.reference),Xe=Sv({reference:Ie,element:be,strategy:"absolute",placement:A}),Je=Th(Object.assign({},be,Xe)),Ge=ge===ir?Je:Ie,Ft={top:xe.top-Ge.top+Ze.top,bottom:Ge.bottom-xe.bottom+Ze.bottom,left:xe.left-Ge.left+Ze.left,right:Ge.right-xe.right+Ze.right},wr=w.modifiersData.offset;if(ge===ir&&wr){var gi=wr[A];Object.keys(Ft).forEach(function(Hn){var Ur=[$t,Wt].indexOf(Hn)>=0?1:-1,Wr=[Ot,Wt].indexOf(Hn)>=0?"y":"x";Ft[Hn]+=gi[Wr]*Ur})}return Ft}function Rk(w,u){u===void 0&&(u={});var m=u,k=m.placement,A=m.boundary,N=m.rootBoundary,D=m.padding,z=m.flipVariations,V=m.allowedAutoPlacements,G=V===void 0?ce:V,Z=oa(k),K=Z?z?_r:_r.filter(function(de){return oa(de)===Z}):ve,ge=K.filter(function(de){return G.indexOf(de)>=0});ge.length===0&&(ge=K);var le=ge.reduce(function(de,fe){return de[fe]=sa(w,{placement:fe,boundary:A,rootBoundary:N,padding:D})[gt(fe)],de},{});return Object.keys(le).sort(function(de,fe){return le[de]-le[fe]})}const kv={name:"flip",enabled:!0,phase:"main",fn:function(w){var u=w.state,m=w.options,k=w.name;if(!u.modifiersData[k]._skip){for(var A=m.mainAxis,N=A===void 0||A,D=m.altAxis,z=D===void 0||D,V=m.fallbackPlacements,G=m.padding,Z=m.boundary,K=m.rootBoundary,ge=m.altBoundary,le=m.flipVariations,de=le===void 0||le,fe=m.allowedAutoPlacements,he=u.options.placement,Ze=gt(he),st=V||(Ze!==he&&de?function(tt){if(gt(tt)===yr)return[];var Un=yc(tt);return[xv(tt),Un,xv(Un)]}(he):[yc(he)]),be=[he].concat(st).reduce(function(tt,Un){return tt.concat(gt(Un)===yr?Rk(u,{placement:Un,boundary:Z,rootBoundary:K,padding:G,flipVariations:de,allowedAutoPlacements:fe}):Un)},[]),He=u.rects.reference,xe=u.rects.popper,Ie=new Map,Xe=!0,Je=be[0],Ge=0;Ge<be.length;Ge++){var Ft=be[Ge],wr=gt(Ft),gi=oa(Ft)===zn,Hn=[Ot,Wt].indexOf(wr)>=0,Ur=Hn?"width":"height",Wr=sa(u,{placement:Ft,boundary:Z,rootBoundary:K,altBoundary:ge,padding:G}),Nt=Hn?gi?$t:pt:gi?Wt:Ot;He[Ur]>xe[Ur]&&(Nt=yc(Nt));var Ii=yc(Nt),ji=[];if(N&&ji.push(Wr[wr]<=0),z&&ji.push(Wr[Nt]<=0,Wr[Ii]<=0),ji.every(function(tt){return tt})){Je=Ft,Xe=!1;break}Ie.set(Ft,ji)}if(Xe)for(var aa=function(tt){var Un=be.find(function(Vr){var ko=Ie.get(Vr);if(ko)return ko.slice(0,tt).every(function(Pc){return Pc})});if(Un)return Je=Un,"break"},dn=de?3:1;dn>0&&aa(dn)!=="break";dn--);u.placement!==Je&&(u.modifiersData[k]._skip=!0,u.placement=Je,u.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Cv(w,u,m){return m===void 0&&(m={x:0,y:0}),{top:w.top-u.height-m.y,right:w.right-u.width+m.x,bottom:w.bottom-u.height+m.y,left:w.left-u.width-m.x}}function Ev(w){return[Ot,$t,Wt,pt].some(function(u){return w[u]>=0})}const Tv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(w){var u=w.state,m=w.name,k=u.rects.reference,A=u.rects.popper,N=u.modifiersData.preventOverflow,D=sa(u,{elementContext:"reference"}),z=sa(u,{altBoundary:!0}),V=Cv(D,k),G=Cv(z,A,N),Z=Ev(V),K=Ev(G);u.modifiersData[m]={referenceClippingOffsets:V,popperEscapeOffsets:G,isReferenceHidden:Z,hasPopperEscaped:K},u.attributes.popper=Object.assign({},u.attributes.popper,{"data-popper-reference-hidden":Z,"data-popper-escaped":K})}},Pv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(w){var u=w.state,m=w.options,k=w.name,A=m.offset,N=A===void 0?[0,0]:A,D=ce.reduce(function(Z,K){return Z[K]=function(ge,le,de){var fe=gt(ge),he=[pt,Ot].indexOf(fe)>=0?-1:1,Ze=typeof de=="function"?de(Object.assign({},le,{placement:ge})):de,st=Ze[0],be=Ze[1];return st=st||0,be=(be||0)*he,[pt,$t].indexOf(fe)>=0?{x:be,y:st}:{x:st,y:be}}(K,u.rects,N),Z},{}),z=D[u.placement],V=z.x,G=z.y;u.modifiersData.popperOffsets!=null&&(u.modifiersData.popperOffsets.x+=V,u.modifiersData.popperOffsets.y+=G),u.modifiersData[k]=D}},Ph={name:"popperOffsets",enabled:!0,phase:"read",fn:function(w){var u=w.state,m=w.name;u.modifiersData[m]=Sv({reference:u.rects.reference,element:u.rects.popper,strategy:"absolute",placement:u.placement})},data:{}},Ov={name:"preventOverflow",enabled:!0,phase:"main",fn:function(w){var u=w.state,m=w.options,k=w.name,A=m.mainAxis,N=A===void 0||A,D=m.altAxis,z=D!==void 0&&D,V=m.boundary,G=m.rootBoundary,Z=m.altBoundary,K=m.padding,ge=m.tether,le=ge===void 0||ge,de=m.tetherOffset,fe=de===void 0?0:de,he=sa(u,{boundary:V,rootBoundary:G,padding:K,altBoundary:Z}),Ze=gt(u.placement),st=oa(u.placement),be=!st,He=So(Ze),xe=He==="x"?"y":"x",Ie=u.modifiersData.popperOffsets,Xe=u.rects.reference,Je=u.rects.popper,Ge=typeof fe=="function"?fe(Object.assign({},u.rects,{placement:u.placement})):fe,Ft=typeof Ge=="number"?{mainAxis:Ge,altAxis:Ge}:Object.assign({mainAxis:0,altAxis:0},Ge),wr=u.modifiersData.offset?u.modifiersData.offset[u.placement]:null,gi={x:0,y:0};if(Ie){if(N){var Hn,Ur=He==="y"?Ot:pt,Wr=He==="y"?Wt:$t,Nt=He==="y"?"height":"width",Ii=Ie[He],ji=Ii+he[Ur],aa=Ii-he[Wr],dn=le?-Je[Nt]/2:0,tt=st===zn?Xe[Nt]:Je[Nt],Un=st===zn?-Je[Nt]:-Xe[Nt],Vr=u.elements.arrow,ko=le&&Vr?Yt(Vr):{width:0,height:0},Pc=u.modifiersData["arrow#persistent"]?u.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},py=Pc[Ur],my=Pc[Wr],Oc=pi(0,Xe[Nt],ko[Nt]),bC=be?Xe[Nt]/2-dn-Oc-py-Ft.mainAxis:tt-Oc-py-Ft.mainAxis,SC=be?-Xe[Nt]/2+dn+Oc+my+Ft.mainAxis:Un+Oc+my+Ft.mainAxis,Mh=u.elements.arrow&&hi(u.elements.arrow),kC=Mh?He==="y"?Mh.clientTop||0:Mh.clientLeft||0:0,gy=(Hn=wr==null?void 0:wr[He])!=null?Hn:0,CC=Ii+SC-gy,vy=pi(le?fn(ji,Ii+bC-gy-kC):ji,Ii,le?cn(aa,CC):aa);Ie[He]=vy,gi[He]=vy-Ii}if(z){var yy,EC=He==="x"?Ot:pt,TC=He==="x"?Wt:$t,vs=Ie[xe],Ac=xe==="y"?"height":"width",_y=vs+he[EC],xy=vs-he[TC],Dh=[Ot,pt].indexOf(Ze)!==-1,wy=(yy=wr==null?void 0:wr[xe])!=null?yy:0,by=Dh?_y:vs-Xe[Ac]-Je[Ac]-wy+Ft.altAxis,Sy=Dh?vs+Xe[Ac]+Je[Ac]-wy-Ft.altAxis:xy,ky=le&&Dh?function(PC,OC,Lh){var Cy=pi(PC,OC,Lh);return Cy>Lh?Lh:Cy}(by,vs,Sy):pi(le?by:_y,vs,le?Sy:xy);Ie[xe]=ky,gi[xe]=ky-vs}u.modifiersData[k]=gi}},requiresIfExists:["offset"]};function Mk(w,u,m){m===void 0&&(m=!1);var k,A,N=_e(u),D=_e(u)&&function(K){var ge=K.getBoundingClientRect(),le=vt(ge.width)/K.offsetWidth||1,de=vt(ge.height)/K.offsetHeight||1;return le!==1||de!==1}(u),z=di(u),V=fi(w,D,m),G={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(N||!N&&!m)&&((ot(u)!=="body"||Eh(z))&&(G=(k=u)!==Fe(k)&&_e(k)?{scrollLeft:(A=k).scrollLeft,scrollTop:A.scrollTop}:kh(k)),_e(u)?((Z=fi(u,!0)).x+=u.clientLeft,Z.y+=u.clientTop):z&&(Z.x=Ch(z))),{x:V.left+G.scrollLeft-Z.x,y:V.top+G.scrollTop-Z.y,width:V.width,height:V.height}}function Dk(w){var u=new Map,m=new Set,k=[];function A(N){m.add(N.name),[].concat(N.requires||[],N.requiresIfExists||[]).forEach(function(D){if(!m.has(D)){var z=u.get(D);z&&A(z)}}),k.push(N)}return w.forEach(function(N){u.set(N.name,N)}),w.forEach(function(N){m.has(N.name)||A(N)}),k}var Av={placement:"bottom",modifiers:[],strategy:"absolute"};function Nv(){for(var w=arguments.length,u=new Array(w),m=0;m<w;m++)u[m]=arguments[m];return!u.some(function(k){return!(k&&typeof k.getBoundingClientRect=="function")})}function _c(w){w===void 0&&(w={});var u=w,m=u.defaultModifiers,k=m===void 0?[]:m,A=u.defaultOptions,N=A===void 0?Av:A;return function(D,z,V){V===void 0&&(V=N);var G,Z,K={placement:"bottom",orderedModifiers:[],options:Object.assign({},Av,N),modifiersData:{},elements:{reference:D,popper:z},attributes:{},styles:{}},ge=[],le=!1,de={state:K,setOptions:function(he){var Ze=typeof he=="function"?he(K.options):he;fe(),K.options=Object.assign({},N,K.options,Ze),K.scrollParents={reference:Be(D)?Pl(D):D.contextElement?Pl(D.contextElement):[],popper:Pl(z)};var st,be,He=function(xe){var Ie=Dk(xe);return mt.reduce(function(Xe,Je){return Xe.concat(Ie.filter(function(Ge){return Ge.phase===Je}))},[])}((st=[].concat(k,K.options.modifiers),be=st.reduce(function(xe,Ie){var Xe=xe[Ie.name];return xe[Ie.name]=Xe?Object.assign({},Xe,Ie,{options:Object.assign({},Xe.options,Ie.options),data:Object.assign({},Xe.data,Ie.data)}):Ie,xe},{}),Object.keys(be).map(function(xe){return be[xe]})));return K.orderedModifiers=He.filter(function(xe){return xe.enabled}),K.orderedModifiers.forEach(function(xe){var Ie=xe.name,Xe=xe.options,Je=Xe===void 0?{}:Xe,Ge=xe.effect;if(typeof Ge=="function"){var Ft=Ge({state:K,name:Ie,instance:de,options:Je});ge.push(Ft||function(){})}}),de.update()},forceUpdate:function(){if(!le){var he=K.elements,Ze=he.reference,st=he.popper;if(Nv(Ze,st)){K.rects={reference:Mk(Ze,hi(st),K.options.strategy==="fixed"),popper:Yt(st)},K.reset=!1,K.placement=K.options.placement,K.orderedModifiers.forEach(function(Ge){return K.modifiersData[Ge.name]=Object.assign({},Ge.data)});for(var be=0;be<K.orderedModifiers.length;be++)if(K.reset!==!0){var He=K.orderedModifiers[be],xe=He.fn,Ie=He.options,Xe=Ie===void 0?{}:Ie,Je=He.name;typeof xe=="function"&&(K=xe({state:K,options:Xe,name:Je,instance:de})||K)}else K.reset=!1,be=-1}}},update:(G=function(){return new Promise(function(he){de.forceUpdate(),he(K)})},function(){return Z||(Z=new Promise(function(he){Promise.resolve().then(function(){Z=void 0,he(G())})})),Z}),destroy:function(){fe(),le=!0}};if(!Nv(D,z))return de;function fe(){ge.forEach(function(he){return he()}),ge=[]}return de.setOptions(V).then(function(he){!le&&V.onFirstUpdate&&V.onFirstUpdate(he)}),de}}var Lk=_c(),$k=_c({defaultModifiers:[Sh,Ph,bh,et]}),Oh=_c({defaultModifiers:[Sh,Ph,bh,et,Pv,kv,Ov,yv,Tv]});const Iv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:se,afterRead:ut,afterWrite:Ee,applyStyles:et,arrow:yv,auto:yr,basePlacements:ve,beforeMain:X,beforeRead:ie,beforeWrite:ye,bottom:Wt,clippingParents:rr,computeStyles:bh,createPopper:Oh,createPopperBase:Lk,createPopperLite:$k,detectOverflow:sa,end:un,eventListeners:Sh,flip:kv,hide:Tv,left:pt,main:ke,modifierPhases:mt,offset:Pv,placements:ce,popper:ir,popperGenerator:_c,popperOffsets:Ph,preventOverflow:Ov,read:$e,reference:Zi,right:$t,start:zn,top:Ot,variationPlacements:_r,viewport:Fn,write:zt},Symbol.toStringTag,{value:"Module"})),jv="dropdown",zk="ArrowUp",Rv="ArrowDown",Mv="click.bs.dropdown.data-api",Dv="keydown.bs.dropdown.data-api",Ol="show",hs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Fk=`${hs}.show`,xc=".dropdown-menu",Bk=C()?"top-end":"top-start",Hk=C()?"top-start":"top-end",Uk=C()?"bottom-end":"bottom-start",Wk=C()?"bottom-start":"bottom-end",Vk=C()?"left-start":"right-start",Yk=C()?"right-start":"left-start",Kk={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Xk={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class mi extends me{constructor(u,m){super(u,m),this._popper=null,this._parent=this._element.parentNode,this._menu=Y.next(this._element,xc)[0]||Y.prev(this._element,xc)[0]||Y.findOne(xc,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Kk}static get DefaultType(){return Xk}static get NAME(){return jv}toggle(){return this._isShown()?this.hide():this.show()}show(){if(f(this._element)||this._isShown())return;const u={relatedTarget:this._element};if(!S.trigger(this._element,"show.bs.dropdown",u).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const m of[].concat(...document.body.children))S.on(m,"mouseover",d);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ol),this._element.classList.add(Ol),S.trigger(this._element,"shown.bs.dropdown",u)}}hide(){if(f(this._element)||!this._isShown())return;const u={relatedTarget:this._element};this._completeHide(u)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(u){if(!S.trigger(this._element,"hide.bs.dropdown",u).defaultPrevented){if("ontouchstart"in document.documentElement)for(const m of[].concat(...document.body.children))S.off(m,"mouseover",d);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ol),this._element.classList.remove(Ol),this._element.setAttribute("aria-expanded","false"),ue.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,"hidden.bs.dropdown",u)}}_getConfig(u){if(typeof(u=super._getConfig(u)).reference=="object"&&!a(u.reference)&&typeof u.reference.getBoundingClientRect!="function")throw new TypeError(`${jv.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return u}_createPopper(){if(Iv===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let u=this._element;this._config.reference==="parent"?u=this._parent:a(this._config.reference)?u=l(this._config.reference):typeof this._config.reference=="object"&&(u=this._config.reference);const m=this._getPopperConfig();this._popper=Oh(u,this._menu,m)}_isShown(){return this._menu.classList.contains(Ol)}_getPlacement(){const u=this._parent;if(u.classList.contains("dropend"))return Vk;if(u.classList.contains("dropstart"))return Yk;if(u.classList.contains("dropup-center"))return"top";if(u.classList.contains("dropdown-center"))return"bottom";const m=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return u.classList.contains("dropup")?m?Hk:Bk:m?Wk:Uk}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:u}=this._config;return typeof u=="string"?u.split(",").map(m=>Number.parseInt(m,10)):typeof u=="function"?m=>u(m,this._element):u}_getPopperConfig(){const u={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ue.setDataAttribute(this._menu,"popper","static"),u.modifiers=[{name:"applyStyles",enabled:!1}]),{...u,...y(this._config.popperConfig,[u])}}_selectMenuItem({key:u,target:m}){const k=Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(A=>c(A));k.length&&E(k,m,u===Rv,!k.includes(m)).focus()}static jQueryInterface(u){return this.each(function(){const m=mi.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0)throw new TypeError(`No method named "${u}"`);m[u]()}})}static clearMenus(u){if(u.button===2||u.type==="keyup"&&u.key!=="Tab")return;const m=Y.find(Fk);for(const k of m){const A=mi.getInstance(k);if(!A||A._config.autoClose===!1)continue;const N=u.composedPath(),D=N.includes(A._menu);if(N.includes(A._element)||A._config.autoClose==="inside"&&!D||A._config.autoClose==="outside"&&D||A._menu.contains(u.target)&&(u.type==="keyup"&&u.key==="Tab"||/input|select|option|textarea|form/i.test(u.target.tagName)))continue;const z={relatedTarget:A._element};u.type==="click"&&(z.clickEvent=u),A._completeHide(z)}}static dataApiKeydownHandler(u){const m=/input|textarea/i.test(u.target.tagName),k=u.key==="Escape",A=[zk,Rv].includes(u.key);if(!A&&!k||m&&!k)return;u.preventDefault();const N=this.matches(hs)?this:Y.prev(this,hs)[0]||Y.next(this,hs)[0]||Y.findOne(hs,u.delegateTarget.parentNode),D=mi.getOrCreateInstance(N);if(A)return u.stopPropagation(),D.show(),void D._selectMenuItem(u);D._isShown()&&(u.stopPropagation(),D.hide(),N.focus())}}S.on(document,Dv,hs,mi.dataApiKeydownHandler),S.on(document,Dv,xc,mi.dataApiKeydownHandler),S.on(document,Mv,mi.clearMenus),S.on(document,"keyup.bs.dropdown.data-api",mi.clearMenus),S.on(document,Mv,hs,function(w){w.preventDefault(),mi.getOrCreateInstance(this).toggle()}),_(mi);const Lv="show",$v="mousedown.bs.backdrop",Gk={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},qk={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zv extends Me{constructor(u){super(),this._config=this._getConfig(u),this._isAppended=!1,this._element=null}static get Default(){return Gk}static get DefaultType(){return qk}static get NAME(){return"backdrop"}show(u){if(!this._config.isVisible)return void y(u);this._append();const m=this._getElement();this._config.isAnimated&&p(m),m.classList.add(Lv),this._emulateAnimation(()=>{y(u)})}hide(u){this._config.isVisible?(this._getElement().classList.remove(Lv),this._emulateAnimation(()=>{this.dispose(),y(u)})):y(u)}dispose(){this._isAppended&&(S.off(this._element,$v),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const u=document.createElement("div");u.className=this._config.className,this._config.isAnimated&&u.classList.add("fade"),this._element=u}return this._element}_configAfterMerge(u){return u.rootElement=l(u.rootElement),u}_append(){if(this._isAppended)return;const u=this._getElement();this._config.rootElement.append(u),S.on(u,$v,()=>{y(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(u){b(u,this._getElement(),this._config.isAnimated)}}const Fv=".bs.focustrap",Bv="backward",Qk={autofocus:!0,trapElement:null},Zk={autofocus:"boolean",trapElement:"element"};class Hv extends Me{constructor(u){super(),this._config=this._getConfig(u),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Qk}static get DefaultType(){return Zk}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Fv),S.on(document,"focusin.bs.focustrap",u=>this._handleFocusin(u)),S.on(document,"keydown.tab.bs.focustrap",u=>this._handleKeydown(u)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Fv))}_handleFocusin(u){const{trapElement:m}=this._config;if(u.target===document||u.target===m||m.contains(u.target))return;const k=Y.focusableChildren(m);k.length===0?m.focus():this._lastTabNavDirection===Bv?k[k.length-1].focus():k[0].focus()}_handleKeydown(u){u.key==="Tab"&&(this._lastTabNavDirection=u.shiftKey?Bv:"forward")}}const Uv=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Wv=".sticky-top",wc="padding-right",Vv="margin-right";class Ah{constructor(){this._element=document.body}getWidth(){const u=document.documentElement.clientWidth;return Math.abs(window.innerWidth-u)}hide(){const u=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,wc,m=>m+u),this._setElementAttributes(Uv,wc,m=>m+u),this._setElementAttributes(Wv,Vv,m=>m-u)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,wc),this._resetElementAttributes(Uv,wc),this._resetElementAttributes(Wv,Vv)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(u,m,k){const A=this.getWidth();this._applyManipulationCallback(u,N=>{if(N!==this._element&&window.innerWidth>N.clientWidth+A)return;this._saveInitialAttribute(N,m);const D=window.getComputedStyle(N).getPropertyValue(m);N.style.setProperty(m,`${k(Number.parseFloat(D))}px`)})}_saveInitialAttribute(u,m){const k=u.style.getPropertyValue(m);k&&ue.setDataAttribute(u,m,k)}_resetElementAttributes(u,m){this._applyManipulationCallback(u,k=>{const A=ue.getDataAttribute(k,m);A!==null?(ue.removeDataAttribute(k,m),k.style.setProperty(m,A)):k.style.removeProperty(m)})}_applyManipulationCallback(u,m){if(a(u))m(u);else for(const k of Y.find(u,this._element))m(k)}}const Yv=".bs.modal",Kv="hidden.bs.modal",Xv="show.bs.modal",Gv="modal-open",qv="show",Nh="modal-static",Jk={backdrop:!0,focus:!0,keyboard:!0},eC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ps extends me{constructor(u,m){super(u,m),this._dialog=Y.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ah,this._addEventListeners()}static get Default(){return Jk}static get DefaultType(){return eC}static get NAME(){return"modal"}toggle(u){return this._isShown?this.hide():this.show(u)}show(u){this._isShown||this._isTransitioning||S.trigger(this._element,Xv,{relatedTarget:u}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Gv),this._adjustDialog(),this._backdrop.show(()=>this._showElement(u)))}hide(){this._isShown&&!this._isTransitioning&&(S.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(qv),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){S.off(window,Yv),S.off(this._dialog,Yv),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zv({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hv({trapElement:this._element})}_showElement(u){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const m=Y.findOne(".modal-body",this._dialog);m&&(m.scrollTop=0),p(this._element),this._element.classList.add(qv),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,"shown.bs.modal",{relatedTarget:u})},this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,"keydown.dismiss.bs.modal",u=>{u.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),S.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,"mousedown.dismiss.bs.modal",u=>{S.one(this._element,"click.dismiss.bs.modal",m=>{this._element===u.target&&this._element===m.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Gv),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Kv)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(S.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const u=this._element.scrollHeight>document.documentElement.clientHeight,m=this._element.style.overflowY;m==="hidden"||this._element.classList.contains(Nh)||(u||(this._element.style.overflowY="hidden"),this._element.classList.add(Nh),this._queueCallback(()=>{this._element.classList.remove(Nh),this._queueCallback(()=>{this._element.style.overflowY=m},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const u=this._element.scrollHeight>document.documentElement.clientHeight,m=this._scrollBar.getWidth(),k=m>0;if(k&&!u){const A=C()?"paddingLeft":"paddingRight";this._element.style[A]=`${m}px`}if(!k&&u){const A=C()?"paddingRight":"paddingLeft";this._element.style[A]=`${m}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(u,m){return this.each(function(){const k=ps.getOrCreateInstance(this,u);if(typeof u=="string"){if(k[u]===void 0)throw new TypeError(`No method named "${u}"`);k[u](m)}})}}S.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(w){const u=Y.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&w.preventDefault(),S.one(u,Xv,k=>{k.defaultPrevented||S.one(u,Kv,()=>{c(this)&&this.focus()})});const m=Y.findOne(".modal.show");m&&ps.getInstance(m).hide(),ps.getOrCreateInstance(u).toggle(this)}),Ke(ps),_(ps);const Qv="show",Zv="showing",Jv="hiding",ey=".offcanvas.show",ty="hidePrevented.bs.offcanvas",ny="hidden.bs.offcanvas",tC={backdrop:!0,keyboard:!0,scroll:!1},nC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ji extends me{constructor(u,m){super(u,m),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return tC}static get DefaultType(){return nC}static get NAME(){return"offcanvas"}toggle(u){return this._isShown?this.hide():this.show(u)}show(u){this._isShown||S.trigger(this._element,"show.bs.offcanvas",{relatedTarget:u}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ah().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Zv),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Qv),this._element.classList.remove(Zv),S.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:u})},this._element,!0))}hide(){this._isShown&&(S.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Jv),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Qv,Jv),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ah().reset(),S.trigger(this._element,ny)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const u=!!this._config.backdrop;return new zv({className:"offcanvas-backdrop",isVisible:u,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:u?()=>{this._config.backdrop!=="static"?this.hide():S.trigger(this._element,ty)}:null})}_initializeFocusTrap(){return new Hv({trapElement:this._element})}_addEventListeners(){S.on(this._element,"keydown.dismiss.bs.offcanvas",u=>{u.key==="Escape"&&(this._config.keyboard?this.hide():S.trigger(this._element,ty))})}static jQueryInterface(u){return this.each(function(){const m=Ji.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);m[u](this)}})}}S.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(w){const u=Y.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&w.preventDefault(),f(this))return;S.one(u,ny,()=>{c(this)&&this.focus()});const m=Y.findOne(ey);m&&m!==u&&Ji.getInstance(m).hide(),Ji.getOrCreateInstance(u).toggle(this)}),S.on(window,"load.bs.offcanvas.data-api",()=>{for(const w of Y.find(ey))Ji.getOrCreateInstance(w).show()}),S.on(window,"resize.bs.offcanvas",()=>{for(const w of Y.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(w).position!=="fixed"&&Ji.getOrCreateInstance(w).hide()}),Ke(Ji),_(Ji);const ry={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},rC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),iC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,oC=(w,u)=>{const m=w.nodeName.toLowerCase();return u.includes(m)?!rC.has(m)||!!iC.test(w.nodeValue):u.filter(k=>k instanceof RegExp).some(k=>k.test(m))},sC={allowList:ry,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},aC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},lC={entry:"(string|element|function|null)",selector:"(string|element)"};class uC extends Me{constructor(u){super(),this._config=this._getConfig(u)}static get Default(){return sC}static get DefaultType(){return aC}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(u=>this._resolvePossibleFunction(u)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(u){return this._checkContent(u),this._config.content={...this._config.content,...u},this}toHtml(){const u=document.createElement("div");u.innerHTML=this._maybeSanitize(this._config.template);for(const[A,N]of Object.entries(this._config.content))this._setContent(u,N,A);const m=u.children[0],k=this._resolvePossibleFunction(this._config.extraClass);return k&&m.classList.add(...k.split(" ")),m}_typeCheckConfig(u){super._typeCheckConfig(u),this._checkContent(u.content)}_checkContent(u){for(const[m,k]of Object.entries(u))super._typeCheckConfig({selector:m,entry:k},lC)}_setContent(u,m,k){const A=Y.findOne(k,u);A&&((m=this._resolvePossibleFunction(m))?a(m)?this._putElementInTemplate(l(m),A):this._config.html?A.innerHTML=this._maybeSanitize(m):A.textContent=m:A.remove())}_maybeSanitize(u){return this._config.sanitize?function(m,k,A){if(!m.length)return m;if(A&&typeof A=="function")return A(m);const N=new window.DOMParser().parseFromString(m,"text/html"),D=[].concat(...N.body.querySelectorAll("*"));for(const z of D){const V=z.nodeName.toLowerCase();if(!Object.keys(k).includes(V)){z.remove();continue}const G=[].concat(...z.attributes),Z=[].concat(k["*"]||[],k[V]||[]);for(const K of G)oC(K,Z)||z.removeAttribute(K.nodeName)}return N.body.innerHTML}(u,this._config.allowList,this._config.sanitizeFn):u}_resolvePossibleFunction(u){return y(u,[this])}_putElementInTemplate(u,m){if(this._config.html)return m.innerHTML="",void m.append(u);m.textContent=u.textContent}}const cC=new Set(["sanitize","allowList","sanitizeFn"]),Ih="fade",bc="show",iy=".modal",oy="hide.bs.modal",Sc="hover",sy="focus",fC={AUTO:"auto",TOP:"top",RIGHT:C()?"left":"right",BOTTOM:"bottom",LEFT:C()?"right":"left"},dC={allowList:ry,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},hC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ms extends me{constructor(u,m){if(Iv===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(u,m),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return dC}static get DefaultType(){return hC}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(iy),oy,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const u=S.trigger(this._element,this.constructor.eventName("show")),m=(h(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(u.defaultPrevented||!m)return;this._disposePopper();const k=this._getTipElement();this._element.setAttribute("aria-describedby",k.getAttribute("id"));const{container:A}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(A.append(k),S.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(k),k.classList.add(bc),"ontouchstart"in document.documentElement)for(const N of[].concat(...document.body.children))S.on(N,"mouseover",d);this._queueCallback(()=>{S.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!S.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(bc),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))S.off(u,"mouseover",d);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(u){const m=this._getTemplateFactory(u).toHtml();if(!m)return null;m.classList.remove(Ih,bc),m.classList.add(`bs-${this.constructor.NAME}-auto`);const k=(A=>{do A+=Math.floor(1e6*Math.random());while(document.getElementById(A));return A})(this.constructor.NAME).toString();return m.setAttribute("id",k),this._isAnimated()&&m.classList.add(Ih),m}setContent(u){this._newContent=u,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(u){return this._templateFactory?this._templateFactory.changeContent(u):this._templateFactory=new uC({...this._config,content:u,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(u){return this.constructor.getOrCreateInstance(u.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ih)}_isShown(){return this.tip&&this.tip.classList.contains(bc)}_createPopper(u){const m=y(this._config.placement,[this,u,this._element]),k=fC[m.toUpperCase()];return Oh(this._element,u,this._getPopperConfig(k))}_getOffset(){const{offset:u}=this._config;return typeof u=="string"?u.split(",").map(m=>Number.parseInt(m,10)):typeof u=="function"?m=>u(m,this._element):u}_resolvePossibleFunction(u){return y(u,[this._element])}_getPopperConfig(u){const m={placement:u,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:k=>{this._getTipElement().setAttribute("data-popper-placement",k.state.placement)}}]};return{...m,...y(this._config.popperConfig,[m])}}_setListeners(){const u=this._config.trigger.split(" ");for(const m of u)if(m==="click")S.on(this._element,this.constructor.eventName("click"),this._config.selector,k=>{this._initializeOnDelegatedTarget(k).toggle()});else if(m!=="manual"){const k=m===Sc?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),A=m===Sc?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");S.on(this._element,k,this._config.selector,N=>{const D=this._initializeOnDelegatedTarget(N);D._activeTrigger[N.type==="focusin"?sy:Sc]=!0,D._enter()}),S.on(this._element,A,this._config.selector,N=>{const D=this._initializeOnDelegatedTarget(N);D._activeTrigger[N.type==="focusout"?sy:Sc]=D._element.contains(N.relatedTarget),D._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(iy),oy,this._hideModalHandler)}_fixTitle(){const u=this._element.getAttribute("title");u&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",u),this._element.setAttribute("data-bs-original-title",u),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(u,m){clearTimeout(this._timeout),this._timeout=setTimeout(u,m)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(u){const m=ue.getDataAttributes(this._element);for(const k of Object.keys(m))cC.has(k)&&delete m[k];return u={...m,...typeof u=="object"&&u?u:{}},u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u.container=u.container===!1?document.body:l(u.container),typeof u.delay=="number"&&(u.delay={show:u.delay,hide:u.delay}),typeof u.title=="number"&&(u.title=u.title.toString()),typeof u.content=="number"&&(u.content=u.content.toString()),u}_getDelegateConfig(){const u={};for(const[m,k]of Object.entries(this._config))this.constructor.Default[m]!==k&&(u[m]=k);return u.selector=!1,u.trigger="manual",u}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(u){return this.each(function(){const m=ms.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0)throw new TypeError(`No method named "${u}"`);m[u]()}})}}_(ms);const pC={...ms.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},mC={...ms.DefaultType,content:"(null|string|element|function)"};class kc extends ms{static get Default(){return pC}static get DefaultType(){return mC}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(u){return this.each(function(){const m=kc.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0)throw new TypeError(`No method named "${u}"`);m[u]()}})}}_(kc);const ay="click.bs.scrollspy",Al="active",ly="[href]",gC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},vC={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Nl extends me{constructor(u,m){super(u,m),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return gC}static get DefaultType(){return vC}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const u of this._observableSections.values())this._observer.observe(u)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(u){return u.target=l(u.target)||document.body,u.rootMargin=u.offset?`${u.offset}px 0px -30%`:u.rootMargin,typeof u.threshold=="string"&&(u.threshold=u.threshold.split(",").map(m=>Number.parseFloat(m))),u}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,ay),S.on(this._config.target,ay,ly,u=>{const m=this._observableSections.get(u.target.hash);if(m){u.preventDefault();const k=this._rootElement||window,A=m.offsetTop-this._element.offsetTop;if(k.scrollTo)return void k.scrollTo({top:A,behavior:"smooth"});k.scrollTop=A}}))}_getNewObserver(){const u={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(m=>this._observerCallback(m),u)}_observerCallback(u){const m=D=>this._targetLinks.get(`#${D.target.id}`),k=D=>{this._previousScrollData.visibleEntryTop=D.target.offsetTop,this._process(m(D))},A=(this._rootElement||document.documentElement).scrollTop,N=A>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=A;for(const D of u){if(!D.isIntersecting){this._activeTarget=null,this._clearActiveClass(m(D));continue}const z=D.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(N&&z){if(k(D),!A)return}else N||z||k(D)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const u=Y.find(ly,this._config.target);for(const m of u){if(!m.hash||f(m))continue;const k=Y.findOne(decodeURI(m.hash),this._element);c(k)&&(this._targetLinks.set(decodeURI(m.hash),m),this._observableSections.set(m.hash,k))}}_process(u){this._activeTarget!==u&&(this._clearActiveClass(this._config.target),this._activeTarget=u,u.classList.add(Al),this._activateParents(u),S.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:u}))}_activateParents(u){if(u.classList.contains("dropdown-item"))Y.findOne(".dropdown-toggle",u.closest(".dropdown")).classList.add(Al);else for(const m of Y.parents(u,".nav, .list-group"))for(const k of Y.prev(m,".nav-link, .nav-item > .nav-link, .list-group-item"))k.classList.add(Al)}_clearActiveClass(u){u.classList.remove(Al);const m=Y.find("[href].active",u);for(const k of m)k.classList.remove(Al)}static jQueryInterface(u){return this.each(function(){const m=Nl.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);m[u]()}})}}S.on(window,"load.bs.scrollspy.data-api",()=>{for(const w of Y.find('[data-bs-spy="scroll"]'))Nl.getOrCreateInstance(w)}),_(Nl);const yC="ArrowLeft",uy="ArrowRight",_C="ArrowUp",cy="ArrowDown",Cc="active",fy="fade",jh="show",dy='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Rh=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${dy}`;class gs extends me{constructor(u){super(u),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,"keydown.bs.tab",m=>this._keydown(m)))}static get NAME(){return"tab"}show(){const u=this._element;if(this._elemIsActive(u))return;const m=this._getActiveElem(),k=m?S.trigger(m,"hide.bs.tab",{relatedTarget:u}):null;S.trigger(u,"show.bs.tab",{relatedTarget:m}).defaultPrevented||k&&k.defaultPrevented||(this._deactivate(m,u),this._activate(u,m))}_activate(u,m){u&&(u.classList.add(Cc),this._activate(Y.getElementFromSelector(u)),this._queueCallback(()=>{u.getAttribute("role")==="tab"?(u.removeAttribute("tabindex"),u.setAttribute("aria-selected",!0),this._toggleDropDown(u,!0),S.trigger(u,"shown.bs.tab",{relatedTarget:m})):u.classList.add(jh)},u,u.classList.contains(fy)))}_deactivate(u,m){u&&(u.classList.remove(Cc),u.blur(),this._deactivate(Y.getElementFromSelector(u)),this._queueCallback(()=>{u.getAttribute("role")==="tab"?(u.setAttribute("aria-selected",!1),u.setAttribute("tabindex","-1"),this._toggleDropDown(u,!1),S.trigger(u,"hidden.bs.tab",{relatedTarget:m})):u.classList.remove(jh)},u,u.classList.contains(fy)))}_keydown(u){if(![yC,uy,_C,cy].includes(u.key))return;u.stopPropagation(),u.preventDefault();const m=[uy,cy].includes(u.key),k=E(this._getChildren().filter(A=>!f(A)),u.target,m,!0);k&&(k.focus({preventScroll:!0}),gs.getOrCreateInstance(k).show())}_getChildren(){return Y.find(Rh,this._parent)}_getActiveElem(){return this._getChildren().find(u=>this._elemIsActive(u))||null}_setInitialAttributes(u,m){this._setAttributeIfNotExists(u,"role","tablist");for(const k of m)this._setInitialAttributesOnChild(k)}_setInitialAttributesOnChild(u){u=this._getInnerElement(u);const m=this._elemIsActive(u),k=this._getOuterElement(u);u.setAttribute("aria-selected",m),k!==u&&this._setAttributeIfNotExists(k,"role","presentation"),m||u.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(u,"role","tab"),this._setInitialAttributesOnTargetPanel(u)}_setInitialAttributesOnTargetPanel(u){const m=Y.getElementFromSelector(u);m&&(this._setAttributeIfNotExists(m,"role","tabpanel"),u.id&&this._setAttributeIfNotExists(m,"aria-labelledby",`${u.id}`))}_toggleDropDown(u,m){const k=this._getOuterElement(u);if(!k.classList.contains("dropdown"))return;const A=(N,D)=>{const z=Y.findOne(N,k);z&&z.classList.toggle(D,m)};A(".dropdown-toggle",Cc),A(".dropdown-menu",jh),k.setAttribute("aria-expanded",m)}_setAttributeIfNotExists(u,m,k){u.hasAttribute(m)||u.setAttribute(m,k)}_elemIsActive(u){return u.classList.contains(Cc)}_getInnerElement(u){return u.matches(Rh)?u:Y.findOne(Rh,u)}_getOuterElement(u){return u.closest(".nav-item, .list-group-item")||u}static jQueryInterface(u){return this.each(function(){const m=gs.getOrCreateInstance(this);if(typeof u=="string"){if(m[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);m[u]()}})}}S.on(document,"click.bs.tab",dy,function(w){["A","AREA"].includes(this.tagName)&&w.preventDefault(),f(this)||gs.getOrCreateInstance(this).show()}),S.on(window,"load.bs.tab",()=>{for(const w of Y.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))gs.getOrCreateInstance(w)}),_(gs);const hy="hide",Ec="show",Tc="showing",xC={animation:"boolean",autohide:"boolean",delay:"number"},wC={animation:!0,autohide:!0,delay:5e3};class Il extends me{constructor(u,m){super(u,m),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return wC}static get DefaultType(){return xC}static get NAME(){return"toast"}show(){S.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(hy),p(this._element),this._element.classList.add(Ec,Tc),this._queueCallback(()=>{this._element.classList.remove(Tc),S.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(S.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Tc),this._queueCallback(()=>{this._element.classList.add(hy),this._element.classList.remove(Tc,Ec),S.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ec),super.dispose()}isShown(){return this._element.classList.contains(Ec)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(u,m){switch(u.type){case"mouseover":case"mouseout":this._hasMouseInteraction=m;break;case"focusin":case"focusout":this._hasKeyboardInteraction=m}if(m)return void this._clearTimeout();const k=u.relatedTarget;this._element===k||this._element.contains(k)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,"mouseover.bs.toast",u=>this._onInteraction(u,!0)),S.on(this._element,"mouseout.bs.toast",u=>this._onInteraction(u,!1)),S.on(this._element,"focusin.bs.toast",u=>this._onInteraction(u,!0)),S.on(this._element,"focusout.bs.toast",u=>this._onInteraction(u,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(u){return this.each(function(){const m=Il.getOrCreateInstance(this,u);if(typeof u=="string"){if(m[u]===void 0)throw new TypeError(`No method named "${u}"`);m[u](this)}})}}return Ke(Il),_(Il),{Alert:ln,Button:lt,Carousel:Qe,Collapse:nr,Dropdown:mi,Modal:ps,Offcanvas:Ji,Popover:kc,ScrollSpy:Nl,Tab:gs,Toast:Il,Tooltip:ms}})})(iP);var vn=function(){return vn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},vn.apply(this,arguments)};function Uu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function Eb(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var oP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sP=Eb(function(t){return oP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ft="-ms-",du="-moz-",Ve="-webkit-",Tb="comm",Zd="rule",m0="decl",aP="@import",Pb="@keyframes",lP="@layer",uP=Math.abs,g0=String.fromCharCode,Om=Object.assign;function cP(t,e){return gn(t,0)^45?(((e<<2^gn(t,0))<<2^gn(t,1))<<2^gn(t,2))<<2^gn(t,3):0}function Ob(t){return t.trim()}function to(t,e){return(t=e.exec(t))?t[0]:t}function we(t,e,n){return t.replace(e,n)}function Sf(t,e){return t.indexOf(e)}function gn(t,e){return t.charCodeAt(e)|0}function sl(t,e,n){return t.slice(e,n)}function Li(t){return t.length}function Ab(t){return t.length}function Ql(t,e){return e.push(t),t}function fP(t,e){return t.map(e).join("")}function M1(t,e){return t.filter(function(n){return!to(n,e)})}var Jd=1,al=1,Nb=0,li=0,qt=0,Sl="";function eh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Jd,column:al,length:s,return:"",siblings:a}}function Eo(t,e){return Om(eh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ua(t){for(;t.root;)t=Eo(t.root,{children:[t]});Ql(t,t.siblings)}function dP(){return qt}function hP(){return qt=li>0?gn(Sl,--li):0,al--,qt===10&&(al=1,Jd--),qt}function Ei(){return qt=li<Nb?gn(Sl,li++):0,al++,qt===10&&(al=1,Jd++),qt}function Ms(){return gn(Sl,li)}function kf(){return li}function th(t,e){return sl(Sl,t,e)}function Am(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pP(t){return Jd=al=1,Nb=Li(Sl=t),li=0,[]}function mP(t){return Sl="",t}function cp(t){return Ob(th(li-1,Nm(t===91?t+2:t===40?t+1:t)))}function gP(t){for(;(qt=Ms())&&qt<33;)Ei();return Am(t)>2||Am(qt)>3?"":" "}function vP(t,e){for(;--e&&Ei()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return th(t,kf()+(e<6&&Ms()==32&&Ei()==32))}function Nm(t){for(;Ei();)switch(qt){case t:return li;case 34:case 39:t!==34&&t!==39&&Nm(qt);break;case 40:t===41&&Nm(t);break;case 92:Ei();break}return li}function yP(t,e){for(;Ei()&&t+qt!==47+10;)if(t+qt===42+42&&Ms()===47)break;return"/*"+th(e,li-1)+"*"+g0(t===47?t:Ei())}function _P(t){for(;!Am(Ms());)Ei();return th(t,li)}function xP(t){return mP(Cf("",null,null,null,[""],t=pP(t),0,[0],t))}function Cf(t,e,n,r,i,o,s,a,l){for(var c=0,f=0,h=s,d=0,p=0,v=0,g=1,C=1,_=1,y=0,b="",E=i,P=o,O=r,T=b;C;)switch(v=y,y=Ei()){case 40:if(v!=108&&gn(T,h-1)==58){Sf(T+=we(cp(y),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:T+=cp(y);break;case 9:case 10:case 13:case 32:T+=gP(v);break;case 92:T+=vP(kf()-1,7);continue;case 47:switch(Ms()){case 42:case 47:Ql(wP(yP(Ei(),kf()),e,n,l),l);break;default:T+="/"}break;case 123*g:a[c++]=Li(T)*_;case 125*g:case 59:case 0:switch(y){case 0:case 125:C=0;case 59+f:_==-1&&(T=we(T,/\f/g,"")),p>0&&Li(T)-h&&Ql(p>32?L1(T+";",r,n,h-1,l):L1(we(T," ","")+";",r,n,h-2,l),l);break;case 59:T+=";";default:if(Ql(O=D1(T,e,n,c,f,i,a,b,E=[],P=[],h,o),o),y===123)if(f===0)Cf(T,e,O,O,E,o,h,a,P);else switch(d===99&&gn(T,3)===110?100:d){case 100:case 108:case 109:case 115:Cf(t,O,O,r&&Ql(D1(t,O,O,0,0,i,a,b,i,E=[],h,P),P),i,P,h,a,r?E:P);break;default:Cf(T,O,O,O,[""],P,0,a,P)}}c=f=p=0,g=_=1,b=T="",h=s;break;case 58:h=1+Li(T),p=v;default:if(g<1){if(y==123)--g;else if(y==125&&g++==0&&hP()==125)continue}switch(T+=g0(y),y*g){case 38:_=f>0?1:(T+="\f",-1);break;case 44:a[c++]=(Li(T)-1)*_,_=1;break;case 64:Ms()===45&&(T+=cp(Ei())),d=Ms(),f=h=Li(b=T+=_P(kf())),y++;break;case 45:v===45&&Li(T)==2&&(g=0)}}return o}function D1(t,e,n,r,i,o,s,a,l,c,f,h){for(var d=i-1,p=i===0?o:[""],v=Ab(p),g=0,C=0,_=0;g<r;++g)for(var y=0,b=sl(t,d+1,d=uP(C=s[g])),E=t;y<v;++y)(E=Ob(C>0?p[y]+" "+b:we(b,/&\f/g,p[y])))&&(l[_++]=E);return eh(t,e,n,i===0?Zd:a,l,c,f,h)}function wP(t,e,n,r){return eh(t,e,n,Tb,g0(dP()),sl(t,2,-2),0,r)}function L1(t,e,n,r,i){return eh(t,e,n,m0,sl(t,0,r),sl(t,r+1,-1),r,i)}function Ib(t,e,n){switch(cP(t,e)){case 5103:return Ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ve+t+t;case 4789:return du+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ve+t+du+t+ft+t+t;case 5936:switch(gn(t,e+11)){case 114:return Ve+t+ft+we(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ve+t+ft+we(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ve+t+ft+we(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ve+t+ft+t+t;case 6165:return Ve+t+ft+"flex-"+t+t;case 5187:return Ve+t+we(t,/(\w+).+(:[^]+)/,Ve+"box-$1$2"+ft+"flex-$1$2")+t;case 5443:return Ve+t+ft+"flex-item-"+we(t,/flex-|-self/g,"")+(to(t,/flex-|baseline/)?"":ft+"grid-row-"+we(t,/flex-|-self/g,""))+t;case 4675:return Ve+t+ft+"flex-line-pack"+we(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ve+t+ft+we(t,"shrink","negative")+t;case 5292:return Ve+t+ft+we(t,"basis","preferred-size")+t;case 6060:return Ve+"box-"+we(t,"-grow","")+Ve+t+ft+we(t,"grow","positive")+t;case 4554:return Ve+we(t,/([^-])(transform)/g,"$1"+Ve+"$2")+t;case 6187:return we(we(we(t,/(zoom-|grab)/,Ve+"$1"),/(image-set)/,Ve+"$1"),t,"")+t;case 5495:case 3959:return we(t,/(image-set\([^]*)/,Ve+"$1$`$1");case 4968:return we(we(t,/(.+:)(flex-)?(.*)/,Ve+"box-pack:$3"+ft+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ve+t+t;case 4200:if(!to(t,/flex-|baseline/))return ft+"grid-column-align"+sl(t,e)+t;break;case 2592:case 3360:return ft+we(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,to(r.props,/grid-\w+-end/)})?~Sf(t+(n=n[e].value),"span")?t:ft+we(t,"-start","")+t+ft+"grid-row-span:"+(~Sf(n,"span")?to(n,/\d+/):+to(n,/\d+/)-+to(t,/\d+/))+";":ft+we(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return to(r.props,/grid-\w+-start/)})?t:ft+we(we(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return we(t,/(.+)-inline(.+)/,Ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Li(t)-1-e>6)switch(gn(t,e+1)){case 109:if(gn(t,e+4)!==45)break;case 102:return we(t,/(.+:)(.+)-([^]+)/,"$1"+Ve+"$2-$3$1"+du+(gn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Sf(t,"stretch")?Ib(we(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return we(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return ft+i+":"+o+c+(s?ft+i+"-span:"+(a?l:+l-+o)+c:"")+t});case 4949:if(gn(t,e+6)===121)return we(t,":",":"+Ve)+t;break;case 6444:switch(gn(t,gn(t,14)===45?18:11)){case 120:return we(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ve+(gn(t,14)===45?"inline-":"")+"box$3$1"+Ve+"$2$3$1"+ft+"$2box$3")+t;case 100:return we(t,":",":"+ft)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(t,"scroll-","scroll-snap-")+t}return t}function dd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function bP(t,e,n,r){switch(t.type){case lP:if(t.children.length)break;case aP:case m0:return t.return=t.return||t.value;case Tb:return"";case Pb:return t.return=t.value+"{"+dd(t.children,r)+"}";case Zd:if(!Li(t.value=t.props.join(",")))return""}return Li(n=dd(t.children,r))?t.return=t.value+"{"+n+"}":""}function SP(t){var e=Ab(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function kP(t){return function(e){e.root||(e=e.return)&&t(e)}}function CP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case m0:t.return=Ib(t.value,t.length,n);return;case Pb:return dd([Eo(t,{value:we(t.value,"@","@"+Ve)})],r);case Zd:if(t.length)return fP(n=t.props,function(i){switch(to(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ua(Eo(t,{props:[we(i,/:(read-\w+)/,":"+du+"$1")]})),ua(Eo(t,{props:[i]})),Om(t,{props:M1(n,r)});break;case"::placeholder":ua(Eo(t,{props:[we(i,/:(plac\w+)/,":"+Ve+"input-$1")]})),ua(Eo(t,{props:[we(i,/:(plac\w+)/,":"+du+"$1")]})),ua(Eo(t,{props:[we(i,/:(plac\w+)/,ft+"input-$1")]})),ua(Eo(t,{props:[i]})),Om(t,{props:M1(n,r)});break}return""})}}var jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ll=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",v0=typeof window<"u"&&"HTMLElement"in window,EP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),TP={},y0=Object.freeze([]),ul=Object.freeze({});function Rb(t,e,n){return n===void 0&&(n=ul),t.theme!==n.theme&&t.theme||e||n.theme}var Mb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),PP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OP=/(^-|-$)/g;function $1(t){return t.replace(PP,"-").replace(OP,"")}var AP=/(a)(d)/gi,z1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Im(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=z1(e%52)+n;return(z1(e%52)+n).replace(AP,"$1-$2")}var fp,Ra=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Db=function(t){return Ra(5381,t)};function Lb(t){return Im(Db(t)>>>0)}function NP(t){return t.displayName||t.name||"Component"}function dp(t){return typeof t=="string"&&!0}var $b=typeof Symbol=="function"&&Symbol.for,zb=$b?Symbol.for("react.memo"):60115,IP=$b?Symbol.for("react.forward_ref"):60112,jP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},MP=((fp={})[IP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fp[zb]=Fb,fp);function F1(t){return("type"in(e=t)&&e.type.$$typeof)===zb?Fb:"$$typeof"in t?MP[t.$$typeof]:jP;var e}var DP=Object.defineProperty,LP=Object.getOwnPropertyNames,B1=Object.getOwnPropertySymbols,$P=Object.getOwnPropertyDescriptor,zP=Object.getPrototypeOf,H1=Object.prototype;function Bb(t,e,n){if(typeof e!="string"){if(H1){var r=zP(e);r&&r!==H1&&Bb(t,r,n)}var i=LP(e);B1&&(i=i.concat(B1(e)));for(var o=F1(t),s=F1(e),a=0;a<i.length;++a){var l=i[a];if(!(l in RP||n&&n[l]||s&&l in s||o&&l in o)){var c=$P(e,l);try{DP(t,l,c)}catch{}}}}return t}function Xs(t){return typeof t=="function"}function _0(t){return typeof t=="object"&&"styledComponentId"in t}function Os(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function jm(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Wu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Rm(t,e,n){if(n===void 0&&(n=!1),!n&&!Wu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Rm(t[r],e[r]);else if(Wu(e))for(var r in e)t[r]=Rm(t[r],e[r]);return t}function x0(t,e){Object.defineProperty(t,"toString",{value:e})}function Gs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var FP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Gs(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Ef=new Map,hd=new Map,hp=1,Xc=function(t){if(Ef.has(t))return Ef.get(t);for(;hd.has(hp);)hp++;var e=hp++;return Ef.set(t,e),hd.set(e,t),e},BP=function(t,e){Ef.set(t,e),hd.set(e,t)},HP="style[".concat(ll,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),UP=new RegExp("^".concat(ll,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WP=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},VP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(UP);if(l){var c=0|parseInt(l[1],10),f=l[2];c!==0&&(BP(f,c),WP(t,f,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function YP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hb=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){return Array.from(a.querySelectorAll("style[".concat(ll,"]"))).at(-1)}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ll,"active"),r.setAttribute("data-styled-version","6.0.1");var s=YP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},KP=function(){function t(e){this.element=Hb(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Gs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),XP=function(){function t(e){this.element=Hb(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),GP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),U1=v0,qP={isServer:!v0,useCSSOMInjection:!EP},pd=function(){function t(e,n,r){e===void 0&&(e=ul),n===void 0&&(n={});var i=this;this.options=vn(vn({},qP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&v0&&U1&&(U1=!1,function(o){for(var s=document.querySelectorAll(HP),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(ll)!=="active"&&(VP(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),x0(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(h){var d=function(_){return hd.get(_)}(h);if(d===void 0)return"continue";var p=o.names.get(d),v=s.getGroup(h);if(p===void 0||v.length===0)return"continue";var g="".concat(ll,".g").concat(h,'[id="').concat(d,'"]'),C="";p!==void 0&&p.forEach(function(_){_.length>0&&(C+="".concat(_,","))}),l+="".concat(v).concat(g,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},f=0;f<a;f++)c(f);return l}(i)})}return t.registerId=function(e){return Xc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(vn(vn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new GP(i):r?new KP(i):new XP(i)}(this.options),new FP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Xc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Xc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),QP=/&/g,ZP=/^\s*\/\/.*$/gm;function Ub(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ub(n.children,e)),n})}function JP(t){var e,n,r,i=t===void 0?ul:t,o=i.options,s=o===void 0?ul:o,a=i.plugins,l=a===void 0?y0:a,c=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},f=l.slice();f.push(function(d){d.type===Zd&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(QP,n).replace(r,c))}),s.prefix&&f.push(CP),f.push(bP);var h=function(d,p,v,g){p===void 0&&(p=""),v===void 0&&(v=""),g===void 0&&(g="&"),e=g,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var C=d.replace(ZP,""),_=xP(v||p?"".concat(v," ").concat(p," { ").concat(C," }"):C);s.namespace&&(_=Ub(_,s.namespace));var y=[];return dd(_,SP(f.concat(kP(function(b){return y.push(b)})))),y};return h.hash=l.length?l.reduce(function(d,p){return p.name||Gs(15),Ra(d,p.name)},5381).toString():"",h}var e5=new pd,Mm=JP(),Wb=pe.createContext({shouldForwardProp:void 0,styleSheet:e5,stylis:Mm});Wb.Consumer;pe.createContext(void 0);function Dm(){return L.useContext(Wb)}var t5=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Mm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,x0(this,function(){throw Gs(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Mm),this.name+e.hash},t}(),n5=function(t){return t>="A"&&t<="Z"};function W1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;n5(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Vb=function(t){return t==null||t===!1||t===""},Yb=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Vb(o)&&(Array.isArray(o)&&o.isCss||Xs(o)?r.push("".concat(W1(i),":"),o,";"):Wu(o)?r.push.apply(r,Uu(Uu(["".concat(i," {")],Yb(o),!1),["}"],!1)):r.push("".concat(W1(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in jb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qo(t,e,n,r){if(Vb(t))return[];if(_0(t))return[".".concat(t.styledComponentId)];if(Xs(t)){if(!Xs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return qo(i,e,n,r)}var o;return t instanceof t5?n?(t.inject(n,r),[t.getName(r)]):[t]:Wu(t)?Yb(t):Array.isArray(t)?t.flatMap(function(s){return qo(s,e,n,r)}):[t.toString()]}function Kb(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Xs(n)&&!_0(n))return!1}return!0}var r5=Db("6.0.1"),i5=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Kb(e),this.componentId=n,this.baseHash=Ra(r5,n),this.baseStyle=r,pd.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Os(i,this.staticRulesId);else{var o=jm(qo(this.rules,e,n,r)),s=Im(Ra(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Os(i,s),this.staticRulesId=s}else{for(var l=Ra(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var d=jm(qo(h,e,n,r));l=Ra(l,d),c+=d}}if(c){var p=Im(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),i=Os(i,p)}}return i},t}(),Vu=pe.createContext(void 0);Vu.Consumer;function o5(t){var e=pe.useContext(Vu),n=L.useMemo(function(){return function(r,i){if(!r)throw Gs(14);if(Xs(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Gs(8);return i?vn(vn({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?pe.createElement(Vu.Provider,{value:n},t.children):null}var pp={};function s5(t,e,n){var r=_0(t),i=t,o=!dp(t),s=e.attrs,a=s===void 0?y0:s,l=e.componentId,c=l===void 0?function(E,P){var O=typeof E!="string"?"sc":$1(E);pp[O]=(pp[O]||0)+1;var T="".concat(O,"-").concat(Lb("6.0.1"+O+pp[O]));return P?"".concat(P,"-").concat(T):T}(e.displayName,e.parentComponentId):l,f=e.displayName,h=f===void 0?function(E){return dp(E)?"styled.".concat(E):"Styled(".concat(NP(E),")")}(t):f,d=e.displayName&&e.componentId?"".concat($1(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;v=function(E,P){return g(E,P)&&C(E,P)}}else v=g}var _=new i5(n,d,r?i.componentStyle:void 0);_.isStatic&&a.length;function y(E,P){return function(O,T,j,R){var I=O.attrs,W=O.componentStyle,F=O.defaultProps,re=O.foldedComponentIds,ee=O.styledComponentId,ne=O.target,oe=pe.useContext(Vu),te=Dm(),$=O.shouldForwardProp||te.shouldForwardProp,H=function(Me,me,De){for(var Y,Ke=vn(vn({},me),{className:void 0,theme:De}),ln=0;ln<Me.length;ln+=1){var Tt=Xs(Y=Me[ln])?Y(Ke):Y;for(var lt in Tt)Ke[lt]=lt==="className"?Os(Ke[lt],Tt[lt]):lt==="style"?vn(vn({},Ke[lt]),Tt[lt]):Tt[lt]}return me.className&&(Ke.className=Os(Ke.className,me.className)),Ke}(I,T,Rb(T,oe,F)||ul),S=H.as||ne,Q={};for(var ae in H)H[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"||(ae==="forwardedAs"?Q.as=H.forwardedAs:$&&!$(ae,S)||(Q[ae]=H[ae]));var it=function(Me,me){var De=Dm(),Y=Me.generateAndInjectStyles(me,De.styleSheet,De.stylis);return Y}(W,H),ue=Os(re,ee);return it&&(ue+=" "+it),H.className&&(ue+=" "+H.className),Q[dp(S)&&!Mb.has(S)?"class":"className"]=ue,Q.ref=j,L.createElement(S,Q)}(b,E,P)}y.displayName=h;var b=pe.forwardRef(y);return b.attrs=p,b.componentStyle=_,b.displayName=h,b.shouldForwardProp=v,b.foldedComponentIds=r?Os(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=d,b.target=r?i.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(P){for(var O=[],T=1;T<arguments.length;T++)O[T-1]=arguments[T];for(var j=0,R=O;j<R.length;j++)Rm(P,R[j],!0);return P}({},i.defaultProps,E):E}}),x0(b,function(){return".".concat(b.styledComponentId)}),o&&Bb(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function V1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Y1=function(t){return Object.assign(t,{isCss:!0})};function Xb(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Xs(t)||Wu(t)){var r=t;return Y1(qo(V1(y0,Uu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?qo(i):Y1(qo(V1(i,e)))}function Lm(t,e,n){if(n===void 0&&(n=ul),!e)throw Gs(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Xb.apply(void 0,Uu([i],o,!1)))};return r.attrs=function(i){return Lm(t,e,vn(vn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Lm(t,e,vn(vn({},n),i))},r}var Gb=function(t){return Lm(s5,t)},Lt=Gb;Mb.forEach(function(t){Lt[t]=Gb(t)});var a5=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Kb(e),pd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(jm(qo(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&pd.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function l5(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Xb.apply(void 0,Uu([t],e,!1)),i="sc-global-".concat(Lb(JSON.stringify(r))),o=new a5(r,i),s=function(l){var c=Dm(),f=pe.useContext(Vu),h=pe.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(h,l,c.styleSheet,f,c.stylis),(pe.useInsertionEffect||pe.useLayoutEffect)(function(){if(!c.styleSheet.server)return a(h,l,c.styleSheet,f,c.stylis),function(){return o.removeStyles(h,c.styleSheet)}},[h,l,c.styleSheet,f,c.stylis]),null};function a(l,c,f,h,d){if(o.isStatic)o.renderStyles(l,TP,f,d);else{var p=vn(vn({},c),{theme:Rb(c,h,s.defaultProps)});o.renderStyles(l,p,f,d)}}return pe.memo(s)}const kl=({words:t,interval:e,typingDelay:n,erasingDelay:r})=>{const[i,o]=L.useState(0),[s,a]=L.useState(""),[l,c]=L.useState(!0);return L.useEffect(()=>{let f;if(l){const h=t[i],d=h.length;f=setInterval(()=>{a(p=>p.length===d?(c(!1),p):h.slice(0,p.length+1))},e)}else f=setInterval(()=>{a(h=>h.length===0?(c(!0),o(d=>(d+1)%t.length),""):h.slice(0,h.length-1))},r);return()=>clearInterval(f)},[i,t,e,n,r,l]),x.jsx("span",{children:s})},u5={elastic:[{id:1,title:"Photoshoots",imageUrl:"./imagescroll/Imagescroll1.png"},{id:2,title:"Adventure",imageUrl:"./imagescroll/Imagescroll2.png"},{id:3,title:"Events",imageUrl:"./imagescroll/Imagescroll4.png"},{id:4,title:"Discovery",imageUrl:"./imagescroll/Imagescroll5.png"},{id:5,title:"Sports",imageUrl:"./imagescroll/Imagescroll3.png"}]};var qb={exports:{}},c5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",f5=c5,d5=f5;function Qb(){}function Zb(){}Zb.resetWarningCache=Qb;var h5=function(){function t(r,i,o,s,a,l){if(l!==d5){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Zb,resetWarningCache:Qb};return n.PropTypes=n,n};qb.exports=h5();var p5=qb.exports;const U=xg(p5);function Xr(){return Xr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xr.apply(this,arguments)}function m5(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var g5={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},$m={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},v5="Left",y5="Right",_5="Up",x5="Down",w5="touchstart",b5="touchmove",S5="touchend",K1="mousemove",X1="mouseup";function k5(t,e,n,r){return t>e?n>0?v5:y5:r>0?_5:x5}function G1(t,e){if(e===0)return t;var n=Math.PI/180*e,r=t[0]*Math.cos(n)+t[1]*Math.sin(n),i=t[1]*Math.cos(n)-t[0]*Math.sin(n);return[r,i]}function C5(t,e){var n=function(h){h.touches&&h.touches.length>1||t(function(d,p){p.trackMouse&&(document.addEventListener(K1,r),document.addEventListener(X1,s));var v=h.touches?h.touches[0]:h,g=v.clientX,C=v.clientY,_=G1([g,C],p.rotationAngle);return Xr({},d,$m,{eventData:{initial:[].concat(_),first:!0},xy:_,start:h.timeStamp||0})})},r=function(h){t(function(d,p){if(!d.xy[0]||!d.xy[1]||h.touches&&h.touches.length>1)return d;var v=h.touches?h.touches[0]:h,g=v.clientX,C=v.clientY,_=G1([g,C],p.rotationAngle),y=_[0],b=_[1],E=d.xy[0]-y,P=d.xy[1]-b,O=Math.abs(E),T=Math.abs(P),j=(h.timeStamp||0)-d.start,R=Math.sqrt(O*O+T*T)/(j||1);if(O<p.delta&&T<p.delta&&!d.swiping)return d;var I=k5(O,T,E,P),W=Xr({},d.eventData,{event:h,absX:O,absY:T,deltaX:E,deltaY:P,velocity:R,dir:I});p.onSwiping&&p.onSwiping(W);var F=!1;return(p.onSwiping||p.onSwiped||p["onSwiped"+I])&&(F=!0),F&&p.preventDefaultTouchmoveEvent&&p.trackTouch&&h.cancelable&&h.preventDefault(),Xr({},d,{eventData:Xr({},W,{first:!1}),swiping:!0})})},i=function(h){t(function(d,p){var v;return d.swiping&&(v=Xr({},d.eventData,{event:h}),p.onSwiped&&p.onSwiped(v),p["onSwiped"+v.dir]&&p["onSwiped"+v.dir](v)),Xr({},d,$m,{eventData:v})})},o=function(){document.removeEventListener(K1,r),document.removeEventListener(X1,s)},s=function(h){o(),i(h)},a=function(h){if(h&&h.addEventListener){var d=[[w5,n],[b5,r],[S5,i]];return d.forEach(function(p){var v=p[0],g=p[1];return h.addEventListener(v,g)}),function(){return d.forEach(function(p){var v=p[0],g=p[1];return h.removeEventListener(v,g)})}}},l=function(h){h!==null&&t(function(d,p){if(d.el===h)return d;var v={};return d.el&&d.el!==h&&d.cleanUpTouch&&(d.cleanUpTouch(),v.cleanUpTouch=null),p.trackTouch&&h&&(v.cleanUpTouch=a(h)),Xr({},d,{el:h},v)})},c={ref:l};return e.trackMouse&&(c.onMouseDown=n),[c,a]}function E5(t,e,n){var r={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),r.cleanUpTouch=null):e.trackTouch&&!t.cleanUpTouch&&t.el&&(r.cleanUpTouch=n(t.el)),Xr({},t,r)}var w0=function(t){m5(e,t);function e(r){var i;return i=t.call(this,r)||this,i._set=function(o){i.transientState=o(i.transientState,i.props)},i.transientState=Xr({},$m,{type:"class"}),i}var n=e.prototype;return n.render=function(){var i=this.props,o=i.className,s=i.style,a=i.nodeName,l=a===void 0?"div":a,c=i.innerRef,f=i.children,h=i.trackMouse,d=C5(this._set,{trackMouse:h}),p=d[0],v=d[1];this.transientState=E5(this.transientState,this.props,v);var g=c?function(C){return c(C),p.ref(C)}:p.ref;return pe.createElement(l,Xr({},p,{className:o,style:s,ref:g}),f)},e}(pe.PureComponent);w0.propTypes={onSwiped:U.func,onSwiping:U.func,onSwipedUp:U.func,onSwipedRight:U.func,onSwipedDown:U.func,onSwipedLeft:U.func,delta:U.number,preventDefaultTouchmoveEvent:U.bool,nodeName:U.string,trackMouse:U.bool,trackTouch:U.bool,innerRef:U.func,rotationAngle:U.number};w0.defaultProps=g5;var Jb={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Jb);var T5=Jb.exports;const P5=xg(T5);var eS=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function e(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(r){var i=t(this.__entries__,r),o=this.__entries__[i];return o&&o[1]},e.prototype.set=function(r,i){var o=t(this.__entries__,r);~o?this.__entries__[o][1]=i:this.__entries__.push([r,i])},e.prototype.delete=function(r){var i=this.__entries__,o=t(i,r);~o&&i.splice(o,1)},e.prototype.has=function(r){return!!~t(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,i){var o=this;i===void 0&&(i=null);for(var s=0,a=o.__entries__;s<a.length;s+=1){var l=a[s];r.call(i,l[1],l[0])}},Object.defineProperties(e.prototype,n),e}()}(),b0=typeof window<"u"&&typeof document<"u"&&window.document===document,md=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),O5=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(md):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),A5=2,N5=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function s(){O5(o)}function a(){var l=Date.now();if(n){if(l-i<A5)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=l}return a},I5=20,j5=["top","right","bottom","left","width","height","size","weight"],R5=typeof MutationObserver<"u",Oi=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=N5(this.refresh.bind(this),I5)};Oi.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()};Oi.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()};Oi.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()};Oi.prototype.updateObservers_=function(){var t=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return t.forEach(function(e){return e.broadcastActive()}),t.length>0};Oi.prototype.connect_=function(){!b0||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),R5?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)};Oi.prototype.disconnect_=function(){!b0||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)};Oi.prototype.onTransitionEnd_=function(t){var e=t.propertyName;e===void 0&&(e="");var n=j5.some(function(r){return!!~e.indexOf(r)});n&&this.refresh()};Oi.getInstance=function(){return this.instance_||(this.instance_=new Oi),this.instance_};Oi.instance_=null;var tS=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},cl=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||md},nS=nh(0,0,0,0);function gd(t){return parseFloat(t)||0}function q1(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e.reduce(function(r,i){var o=t["border-"+i+"-width"];return r+gd(o)},0)}function M5(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r+=1){var o=i[r],s=t["padding-"+o];n[o]=gd(s)}return n}function D5(t){var e=t.getBBox();return nh(0,0,e.width,e.height)}function L5(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return nS;var r=cl(t).getComputedStyle(t),i=M5(r),o=i.left+i.right,s=i.top+i.bottom,a=gd(r.width),l=gd(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=q1(r,"left","right")+o),Math.round(l+s)!==n&&(l-=q1(r,"top","bottom")+s)),!z5(t)){var c=Math.round(a+o)-e,f=Math.round(l+s)-n;Math.abs(c)!==1&&(a-=c),Math.abs(f)!==1&&(l-=f)}return nh(i.left,i.top,a,l)}var $5=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof cl(t).SVGGraphicsElement}:function(t){return t instanceof cl(t).SVGElement&&typeof t.getBBox=="function"}}();function z5(t){return t===cl(t).document.documentElement}function F5(t){return b0?$5(t)?D5(t):L5(t):nS}function B5(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return tS(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function nh(t,e,n,r){return{x:t,y:e,width:n,height:r}}var S0=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=nh(0,0,0,0),this.target=t};S0.prototype.isActive=function(){var t=F5(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight};S0.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var H5=function(t,e){var n=B5(e);tS(this,{target:t,contentRect:n})},us=function(t,e,n){if(this.activeObservations_=[],this.observations_=new eS,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n};us.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof cl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new S0(t)),this.controller_.addObserver(this),this.controller_.refresh())}};us.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof cl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}};us.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};us.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})};us.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(n){return new H5(n.target,n.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}};us.prototype.clearActive=function(){this.activeObservations_.splice(0)};us.prototype.hasActive=function(){return this.activeObservations_.length>0};var rS=typeof WeakMap<"u"?new WeakMap:new eS,k0=function(t){if(!(this instanceof k0))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=Oi.getInstance(),n=new us(t,e,this);rS.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){k0.prototype[t]=function(){return(e=rS.get(this))[t].apply(e,arguments);var e}});var U5=function(){return typeof md.ResizeObserver<"u"?md.ResizeObserver:k0}(),W5=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},V5=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Q1=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Y5=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},K5=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},X5=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},hu=function(t){Y5(e,t);function e(){return W5(this,e),X5(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return V5(e,[{key:"render",value:function(){var r=this.props,i=r.children,o=r.when,s=r.hiddenMode,a=r.className,l=pe.Children.only(i),c=l.props,f=c.style,h=K5(c,["style"]),d=Q1({},h),p=s&&s!=="withNull";p&&(s==="withCss"?d.className=d.className+" "+a:d.style=Q1({},f,s==="withDisplay"&&{display:"none"},s==="withVisibility"&&{visibility:"hidden"}));var v=pe.cloneElement(l,d),g=p?v:null;return o?l:g}}]),e}(L.Component);hu.defaultProps={hiddenMode:"withNull",className:"r-o_hidden"};hu.propTypes={children:U.element.isRequired,when:U.bool.isRequired,hiddenMode:U.oneOf(["withNull","withDisplay","withVisibility","withCss"]),className:U.string};function rh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ih(t,e,n){return e&&Z1(t.prototype,e),n&&Z1(t,n),t}function Te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vd(){return vd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vd.apply(this,arguments)}function J1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function As(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J1(Object(n),!0).forEach(function(r){Te(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oh(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zm(t,e)}function yd(t){return yd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yd(t)}function zm(t,e){return zm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},zm(t,e)}function G5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function q5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iS(t,e){if(t==null)return{};var n=q5(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Pe(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q5(t,e){return e&&(typeof e=="object"||typeof e=="function")?e:Pe(t)}function sh(t){var e=G5();return function(){var r=yd(t),i;if(e){var o=yd(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Q5(this,i)}}function cs(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Z5(t){return J5(t)||eO(t)||oS(t)||tO()}function J5(t){if(Array.isArray(t))return Fm(t)}function eO(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function oS(t,e){if(t){if(typeof t=="string")return Fm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fm(t,e)}}function Fm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nO(t,e){var n;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=oS(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,a;return{s:function(){n=t[Symbol.iterator]()},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,a=l},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw a}}}}var No=function(){},sS=function(e){return Z5(Array(e).keys())},Si=function(){for(var e="rec",n=" ",r="".concat(e),i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];var a=o.reduce(function(l,c){return c&&(l+="".concat(n).concat(e,"-").concat(c)),l},"");return r+=a,r},rO=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,s){return s(o)},i)}};function aS(){var t=cs([`
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 1.6em;
  background-color: rgba(103, 58, 183, 0.1);
  color: `,`;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #fff;
    background-color: rgba(103, 58, 183, 1);
    box-shadow: 0 0 2px 0 #333;
  }
  &:disabled {
    cursor: not-allowed;
  }
`]);return aS=function(){return t},t}var iO=Lt.button.attrs(function(t){var e=t.type,n=e===void 0?"button":e;return{type:n}})(aS(),function(t){return t.disabled?"#999":"#333"}),Pr={PREV:"PREV",NEXT:"NEXT",START:"flex-start",CENTER:"center",END:"flex-end"};function lS(){var t=cs([`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  user-select: none;
  justify-content: `,`;
`]);return lS=function(){return t},t}var C0=Lt.div.attrs(function(t){var e=t.style;return{style:e,className:Si("item-wrapper")}})(lS(),function(t){var e=t.itemPosition;return e});C0.defaultProps={style:{},itemPosition:Pr.CENTER};C0.propTypes={children:U.element.isRequired,style:U.object,itemPosition:U.oneOf([Pr.START,Pr.CENTER,Pr.END])};function uS(){var t=cs([`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 10px;
`]);return uS=function(){return t},t}var oO=Lt.div(uS());function cS(){var t=cs([`
  position: absolute;
  display: flex;
  flex-direction: `,`;
  `,`;
  `,`;
`]);return cS=function(){return t},t}var sO=function(e){var n=e.isRTL,r=e.verticalMode,i=e.isSwiping,o=e.swipedSliderPosition,s=e.sliderPosition;return r||n?"auto":"".concat(i?o:s,"px")},aO=function(e){var n=e.isRTL,r=e.verticalMode,i=e.isSwiping,o=e.swipedSliderPosition,s=e.sliderPosition;return!r&&n?"".concat(i?o:s,"px"):"auto"},lO=function(e){var n=e.verticalMode,r=e.isSwiping,i=e.swipedSliderPosition,o=e.sliderPosition;return n?"".concat(r?i:o,"px"):"auto"},uO=function(e){var n=e.isSwiping,r=e.transitionMs,i=e.easing,o=e.tiltEasing,s=n?0:r,a=n?o:i;return"all ".concat(s,"ms ").concat(a)},cO=Lt.div.attrs(function(t){return{style:{transition:uO(t),left:sO(t),right:aO(t),top:lO(t)}}})(cS(),function(t){var e=t.verticalMode;return e?"column":"row"},function(t){var e=t.verticalMode;return e?"min-height: 100%;":""},function(t){var e=t.verticalMode,n=t.outerSpacing;return e?"":"margin: 0 ".concat(n,"px;")});function fS(){var t=cs([`
  display: flex;
  flex-direction: row;
  width: 100%;
`]);return fS=function(){return t},t}var fO=Lt.div.attrs(function(t){return{style:{height:t.size.height}}})(fS());function dS(){var t=cs([`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: `,`;
`]);return dS=function(){return t},t}var dO=Lt.div(dS(),function(t){var e=t.isRTL;return e?"rtl":"ltr"}),E0=function(t){oh(n,t);var e=sh(n);function n(){var r;rh(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o)),Te(Pe(r),"onClick",function(){var a=r.props,l=a.onClick,c=a.id;l(c)}),r}return ih(n,[{key:"render",value:function(){return pe.createElement(C0,vd({},this.props,{onClick:this.onClick}))}}]),n}(pe.Component);E0.defaultProps={onClick:No};E0.propTypes={id:U.oneOfType([U.string,U.number]),onClick:U.func};var hS=function(e){var n=e.children,r=e.childWidth,i=e.autoTabIndexVisibleItems,o=e.enableSwipe,s=e.enableMouseSwipe,a=e.preventDefaultTouchmoveEvent,l=e.itemsToShow,c=e.itemsToScroll,f=e.currentItem,h=e.itemPosition,d=e.itemPadding,p=e.onSwiped,v=e.onSwiping,g=e.verticalMode,C=e.onItemClick,_="".concat(r,"px"),y="".concat(d.join("px "),"px"),b=f,E=f+l,P=b-c,O=E+c,T=pe.Children.map(n,function(R,I){var W=I>=b&&I<E,F=!W&&I>=P&&I<f,re=!W&&I<O&&I>f,ee="carousel-item",ne=i?pe.cloneElement(R,{tabIndex:W?0:-1}):R;return pe.createElement("div",{className:Si(ee,"".concat(ee,"-").concat(I),"".concat(ee,"-").concat(W?"visible":"hidden"),F&&"".concat(ee,"-prev"),re&&"".concat(ee,"-next"))},pe.createElement(E0,{id:I,itemPosition:h,style:{width:_,padding:y},key:I,onClick:C},ne))}),j=o?pe.createElement(w0,{style:{display:"flex",flexDirection:g?"column":"row"},stopPropagation:!0,preventDefaultTouchmoveEvent:a,trackMouse:s,onSwiped:p,onSwiping:v,className:Si("swipable")},T):T;return j};hS.propTypes={children:U.array.isRequired,itemsToShow:U.number.isRequired,noAutoTabbedItems:U.bool,currentItem:U.number.isRequired,itemPosition:U.string,itemPadding:U.array,childWidth:U.number,verticalMode:U.bool,enableSwipe:U.bool,enableMouseSwipe:U.bool,preventDefaultTouchmoveEvent:U.bool,onSwiped:U.func,onSwiping:U.func,onItemClick:U.func};var hO={left:"❮",right:"❯",up:"❮",down:"❯"},e_=Si("arrow"),pO=function(e){var n={};return(e===Tr.up||e===Tr.down)&&(n.transform="rotate(90deg)"),n},Tr=function(e){var n=e.direction,r=e.onClick,i=e.icons,o=e.style,s=iS(e,["direction","onClick","icons","style"]),a=As(As({},hO),i),l=As(As({},pO(n)),o);return pe.createElement(iO,vd({tabIndex:0,onClick:r,className:P5(e_,"".concat(e_,"-").concat(n)),style:l},s),a[n])};Tr.left="left";Tr.right="right";Tr.up="up";Tr.down="down";Tr.propTypes={direction:U.oneOf(["left","right","up","down"]).isRequired,icons:U.object,style:U.object,onClick:U.func};var pS="NEXT_ITEM",mS="PREV_ITEM",mO=function(e,n){var r=n.limit,i=n.itemsToScroll,o=n.type;switch(o){case pS:{var s=e+i,a=r>=s?s:r;return a}case mS:{var l=e-i,c=l>=r?l:r;return c}default:return e}},gO=function(e,n){return{type:pS,limit:e,itemsToScroll:n}},vO=function(e,n){return{type:mS,limit:e,itemsToScroll:n}};function gS(){var t=cs([`
  box-sizing: border-box;
  padding: 0;
  transition: all 250ms ease;
  border: none;
  margin: 5px;
  background-color: `,`;
  font-size: 1.3em;
  content: "";
  height: 10px;
  width: 10px;
  box-shadow: `,`;
  border-radius: 50%;
  outline: none;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: `,`;
  }
`]);return gS=function(){return t},t}var yO="0 0 1px 2px rgba(0, 0, 0, 0.5)",t_="0 0 1px 3px rgba(103,58,183,1)",_O="0 0 1px 3px rgba(103,58,183,.5)",xO=Lt.button.attrs(function(t){var e=t.type,n=e===void 0?"button":e;return{type:n}})(gS(),function(t){var e=t.active;return e?"rgba(103,58,183,.5)":"transparent"},function(t){var e=t.active;return e?t_:yO},function(t){var e=t.active;return e?t_:_O}),vS=function(t){oh(n,t);var e=sh(n);function n(){var r;rh(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o)),Te(Pe(r),"onClick",function(){var a=r.props,l=a.onClick,c=a.id;l(c)}),r}return ih(n,[{key:"render",value:function(){var i=this.props.active;return pe.createElement(xO,{tabIndex:i?-1:0,onClick:this.onClick,active:i,className:"".concat(Si("dot")," ").concat(i?Si("dot_active"):"")})}}]),n}(pe.Component);vS.propTypes={id:U.oneOfType([U.string,U.number]),active:U.bool,onClick:U.func};function yS(){var t=cs([`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`]);return yS=function(){return t},t}var wO=Lt.div(yS()),T0=function(t){oh(n,t);var e=sh(n);function n(){return rh(this,n),e.apply(this,arguments)}return ih(n,[{key:"render",value:function(){var i=this.props,o=i.numOfPages,s=i.activePage,a=i.onClick,l=sS(o);return pe.createElement(wO,{className:Si("pagination")},l.map(function(c,f){return pe.createElement(vS,{key:f,id:f,active:f===s,onClick:a})}))}}]),n}(pe.Component);T0.defaultProps={onClick:No};T0.propTypes={numOfPages:U.number.isRequired,activePage:U.number.isRequired,onClick:U.func};var P0=function(t){oh(n,t);var e=sh(n);function n(){var r;rh(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o)),Te(Pe(r),"isComponentMounted",!1),Te(Pe(r),"state",{rootHeight:0,childHeight:0,sliderPosition:0,swipedSliderPosition:0,isSwiping:!1,transitioning:!1,transitionMs:r.props.transitionMs,activeIndex:r.props.initialActiveIndex||r.props.initialFirstItem,pages:[],activePage:0,sliderContainerWidth:0}),Te(Pe(r),"setRef",function(a){return function(l){return r[a]=l}}),Te(Pe(r),"initResizeObserver",function(){r.ro=new U5(function(a,l){var c=nO(a),f;try{var h=function(){var p=f.value;p.target===r.sliderContainer&&window.requestAnimationFrame(function(){r.onContainerResize(p)}),p.target===r.slider&&window.requestAnimationFrame(function(){r.onSliderResize(p)})};for(c.s();!(f=c.n()).done;)h()}catch(d){c.e(d)}finally{c.f()}}),r.ro.observe(r.sliderContainer),r.ro.observe(r.slider)}),Te(Pe(r),"unSubscribeObserver",function(){return r.ro.disconnect()}),Te(Pe(r),"setAutoPlay",function(){var a=r.getDerivedPropsFromBreakPoint(),l=a.autoPlaySpeed;r.autoPlayIntervalId=setInterval(function(){if(r.isComponentMounted){var c=r.state.transitioning;c||r.slideNext()}},l)}),Te(Pe(r),"removeAutoPlay",function(){r.autoPlayIntervalId&&(clearInterval(r.autoPlayIntervalId),r.autoPlayIntervalId=null)}),Te(Pe(r),"setPages",function(){var a=r.getNumOfPages(),l=sS(a);r.setState({pages:l})}),Te(Pe(r),"onSliderTransitionEnd",function(a){r.slider.addEventListener("transitionend",a)}),Te(Pe(r),"removeSliderTransitionHook",function(a){r.slider.removeEventListener("transitionend",a)}),Te(Pe(r),"getDerivedPropsFromBreakPoint",function(){var a=r.props,l=a.breakPoints,c=iS(a,["breakPoints"]),f=r.state.sliderContainerWidth,h;return l&&l.length>0&&(h=l.slice().reverse().find(function(d){return d.width<=f}),h||(h=l[0])),As(As({},c),h)}),Te(Pe(r),"updateSliderPosition",function(){r.setState(function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.children,f=l.verticalMode,h=l.itemsToShow,d=l.transitionMs,p=a.childHeight,v=a.activeIndex,g=r.calculateChildWidth(),C=L.Children.toArray(c).length,_=C-h,y=v*-1,b=h-(C-v);b>0&&_>0&&(y=b+v*-1);var E=(f?p:g)*y,P=b>0?v-b:v;return window.requestAnimationFrame(function(){r.isComponentMounted&&r.setState({transitionMs:d})}),{sliderPosition:E,activeIndex:P<0?0:P}})}),Te(Pe(r),"onSliderResize",function(a){if(r.isComponentMounted){var l=r.getDerivedPropsFromBreakPoint(),c=l.verticalMode,f=l.children,h=l.itemsToShow,d=a.contentRect.height,p={},v=L.Children.toArray(f).length;if(c){var g=d/v;p.rootHeight=g*Math.min(v,h),p.childHeight=g}else p.rootHeight=d;r.setState(p)}}),Te(Pe(r),"calculateChildWidth",function(){var a=r.state.sliderContainerWidth,l=r.getDerivedPropsFromBreakPoint(),c=l.verticalMode,f=l.itemsToShow,h=l.showEmptySlots,d=l.children,p=L.Children.toArray(d).length||1,v=0;return c?v=a:v=a/(h?f:Math.min(p,f)),v}),Te(Pe(r),"onContainerResize",function(a){var l=a.contentRect.width,c=r.getDerivedPropsFromBreakPoint(),f=c.outerSpacing,h=c.verticalMode,d=l-(h?0:f*2);!r.isComponentMounted||r.state.sliderContainerWidth===l||r.setState({sliderContainerWidth:d,transitionMs:0},function(){var p=r.getDerivedPropsFromBreakPoint(),v=p.onResize,g=p.itemsToShow,C=p.children,_=L.Children.toArray(C).length||1;r.setState(function(y){var b=y.activeIndex,E=Math.min(_,g),P=_-E;return b>P&&(b=P),{activeIndex:b}},function(){r.updateSliderPosition();var y=r.getDerivedPropsFromBreakPoint();v(y)})})}),Te(Pe(r),"tiltMovement",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:150;r.setState(function(f){return{isSwiping:!0,swipedSliderPosition:a-l}}),setTimeout(function(){r.setState({isSwiping:!1,swipedSliderPosition:0})},c)}),Te(Pe(r),"convertChildToCbObj",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.children,f=Math.round(a),h=L.Children.toArray(c)[f];return{item:h.props,index:f}}),Te(Pe(r),"getNextItemIndex",function(a,l){var c=r.getDerivedPropsFromBreakPoint(),f=c.children,h=c.itemsToShow,d=c.itemsToScroll,p=L.Children.toArray(f).length||1,v=h>p,g=l?0:p-h;v&&(g=0);var C=l?vO(0,d):gO(g,d),_=mO(a,C);return _}),Te(Pe(r),"getNextItemObj",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.children,f=r.state.activeIndex,h=r.getNextItemIndex(f,a),d=Math.round(h),p=L.Children.toArray(c)[d],v={item:p.props,index:d};return v}),Te(Pe(r),"resetSwipe",function(){r.setState({swipedSliderPosition:0,transitioning:!1,isSwiping:!1})}),Te(Pe(r),"onSwiping",function(a){var l=a.deltaX,c=a.absX,f=a.deltaY,h=a.absY,d=a.dir;r.setState(function(p){var v=p.childHeight,g=p.activeIndex,C=p.sliderPosition,_=r.getDerivedPropsFromBreakPoint(),y=_.itemsToShow,b=_.verticalMode,E=_.children,P=_.isRTL,O=r.calculateChildWidth(),T=L.Children.toArray(E).length||1,j=!b&&d==="Left"&&!P||!b&&d==="Right"&&P||b&&d==="Up",R=!b&&d==="Right"&&!P||!b&&d==="Left"&&P||b&&d==="Down",I=d==="Left"||d==="Right",W=d==="Up"||d==="Down",F=!b,re=0,ee=O/2,ne=v/2;if(b){if(W){var oe=T*v;j?re=oe-v*g-y*v+ne:R&&(re=v*g+ne)}}else if(I){var te=T*O;j?re=te-O*g-y*O+ee:R&&(re=O*g+ee)}var $=F&&W||F&&I&&c>re,H=b&&I||b&&W&&h>re;if(!($||H)){var S;return I?P?S=C+l:S=C-l:S=C-f,{swipedSliderPosition:S,isSwiping:!0,transitioning:!0}}})}),Te(Pe(r),"onSwiped",function(a){var l=a.absX,c=a.absY,f=a.dir,h=r.state,d=h.childHeight,p=h.activeIndex,v=r.getDerivedPropsFromBreakPoint(),g=v.verticalMode,C=v.isRTL,_=v.itemsToScroll,y=r.calculateChildWidth(),b=r.resetSwipe,E=y/5,P=d/5,O=f==="Left",T=f==="Right",j=f==="Up",R=f==="Down",I=g&&(j||R)&&c>P,W=!g&&(T||O)&&l>E,F=!1;if((I||W)&&(F=!0),F)if(g){var re=Math.ceil((c-P)/d),ee=Math.max(_,re),ne=p-ee,oe=p+ee;R&&(b=function(){return r.goTo(ne)}),j&&(b=function(){return r.goTo(oe)})}else{var te=Math.ceil((l-E)/y),$=Math.max(_,te),H=p-$,S=p+$;C?(O&&(b=function(){return r.goTo(H)}),T&&(b=function(){return r.goTo(S)})):(O&&(b=function(){return r.goTo(S)}),T&&(b=function(){return r.goTo(H)}))}r.setState({isSwiping:!1,transitioning:!1}),b({skipTilt:!0})}),Te(Pe(r),"onNextStart",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.onNextStart,f=r.state.activeIndex,h=r.getNextItemObj(),d=r.convertChildToCbObj(f);c(d,h),r.slideNext(a)}),Te(Pe(r),"onPrevStart",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.onPrevStart,f=r.state.activeIndex,h=r.getNextItemObj(!0),d=r.convertChildToCbObj(f);c(d,h),r.slidePrev(a)}),Te(Pe(r),"slideNext",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.skipTilt,c=r.getDerivedPropsFromBreakPoint(),f=c.enableTilt,h=r.state,d=h.activeIndex,p=h.sliderPosition,v=r.getNextItemIndex(d,!1);d!==v?r.goTo(v):f&&!l&&r.tiltMovement(p,20,150)}),Te(Pe(r),"slidePrev",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.skipTilt,c=r.state.activeIndex,f=r.getDerivedPropsFromBreakPoint(),h=f.enableTilt,d=r.getNextItemIndex(c,!0);c!==d?r.goTo(d):h&&!l&&r.tiltMovement(0,-20,150)}),Te(Pe(r),"onNextEnd",function(){var a=r.getDerivedPropsFromBreakPoint(),l=a.onNextEnd,c=a.onChange,f=r.state,h=f.activeIndex,d=f.activePage,p=r.convertChildToCbObj(h);r.removeSliderTransitionHook(r.onNextEnd),r.setState({transitioning:!1}),c&&c(p,d),l(p,d)}),Te(Pe(r),"onPrevEnd",function(){var a=r.getDerivedPropsFromBreakPoint(),l=a.onPrevEnd,c=a.onChange,f=r.state,h=f.activeIndex,d=f.activePage,p=r.convertChildToCbObj(h);r.removeSliderTransitionHook(r.onPrevEnd),r.setState({transitioning:!1}),c&&c(p,d),l(p,d)}),Te(Pe(r),"generatePositionUpdater",function(a,l,c,f){return function(h){var d=h.sliderPosition,p=h.childHeight,v=h.activeIndex,g=r.calculateChildWidth(),C=0,_=c?p:g;return a===Pr.NEXT?C=d-_*(l-v):C=d+_*(v-l),As({sliderPosition:C,activeIndex:l,swipedSliderPosition:0,isSwiping:!1},f)}}),Te(Pe(r),"goTo",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.children,f=l.verticalMode,h=l.itemsToShow,d=r.state.activeIndex,p=L.Children.toArray(c).length,v=Math.max(0,a),g=d>v,C=r.getNextItemIndex(d,g),_=C===d,y=v+h>=p;if(!_){y&&(v=Math.max(0,p-h));var b=Pr.NEXT,E=r.onNextEnd;g&&(b=Pr.PREV,E=r.onPrevEnd);var P=r.generatePositionUpdater(b,v,f,{transitioning:!0});r.setState(P,function(){rO(r.updateActivePage(),r.onSliderTransitionEnd(E))})}}),Te(Pe(r),"getNumOfPages",function(){var a=r.getDerivedPropsFromBreakPoint(),l=a.children,c=a.itemsToShow,f=L.Children.toArray(l).length,h=Math.max(c,1),d=Math.ceil(f/h);return d||1}),Te(Pe(r),"updateActivePage",function(){r.setState(function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.itemsToShow,f=l.children,h=a.activeIndex,d=a.activePage,p=r.getNumOfPages(),v=L.Children.toArray(f).length,g=Math.min(v,c),C=Math.max(g,1),_=Math.ceil(h/C),y=Math.min(p-1,_);if(d!==y)return{activePage:y}})}),Te(Pe(r),"onIndicatorClick",function(a){var l=r.getDerivedPropsFromBreakPoint(),c=l.itemsToShow,f=a*c;r.setState({activePage:a}),r.goTo(f)}),r}return ih(n,[{key:"componentDidMount",value:function(){this.isComponentMounted=!0,this.initResizeObserver(),this.updateActivePage(),this.setPages()}},{key:"componentDidUpdate",value:function(i,o){var s=this.props,a=s.enableAutoPlay,l=s.children,c=s.itemsToShow,f=s.itemsToScroll,h=s.breakPoints,d=this.state,p=d.activeIndex,v=d.sliderContainerWidth,g=this.getNextItemIndex(p,!1),C=L.Children.toArray(l).length,_=L.Children.toArray(i.children).length;if((_!==C||i.itemsToShow!==c||i.itemsToScroll!==f||i.breakPoints!==h||v!==o.sliderContainerWidth)&&(this.onContainerResize({contentRect:{width:v}}),this.setPages(),this.updateActivePage()),p===g?this.removeAutoPlay():a&&!this.autoPlayIntervalId?this.setAutoPlay():!a&&this.autoPlayIntervalId&&this.removeAutoPlay(),_!==C){var y=this.getDerivedPropsFromBreakPoint(),b=y.itemsToShow,E=C-1,P=p+b>E;P&&this.goTo(Math.max(0,C-b))}}},{key:"componentWillUnmount",value:function(){this.isComponentMounted=!1,this.removeAutoPlay(),this.unSubscribeObserver()}},{key:"render",value:function(){var i=this.state,o=i.activePage,s=i.isSwiping,a=i.sliderPosition,l=i.swipedSliderPosition,c=i.rootHeight,f=i.pages,h=i.activeIndex,d=i.transitionMs,p=this.getDerivedPropsFromBreakPoint(),v=p.className,g=p.style,C=p.itemsToShow,_=p.itemsToScroll,y=p.verticalMode,b=p.isRTL,E=p.easing,P=p.tiltEasing,O=p.children,T=p.focusOnSelect,j=p.autoTabIndexVisibleItems,R=p.itemPosition,I=p.itemPadding,W=p.outerSpacing,F=p.enableSwipe,re=p.enableMouseSwipe,ee=p.pagination,ne=p.showArrows,oe=p.disableArrowsOnEnd,te=p.preventDefaultTouchmoveEvent,$=p.renderArrow,H=p.renderPagination,S=this.calculateChildWidth(),Q=this.getNumOfPages(),ae=h!==this.getNextItemIndex(h,!0),it=h!==this.getNextItemIndex(h,!1),ue=!ae&&oe,Me=!it&&oe;return pe.createElement(dO,{isRTL:b,className:"".concat(Si("carousel-wrapper")," ").concat(v),style:g},pe.createElement(fO,{className:Si("carousel"),size:{height:c}},pe.createElement(hu,{when:ne},$?$({type:Pr.PREV,onClick:this.onPrevStart,isEdge:!ae}):pe.createElement(Tr,{onClick:this.onPrevStart,direction:y?Tr.up:Tr.left,disabled:ue})),pe.createElement(oO,{className:Si("slider-container"),ref:this.setRef("sliderContainer")},pe.createElement(cO,{verticalMode:y,isRTL:b,easing:E,sliderPosition:a,swipedSliderPosition:l,isSwiping:s,transitionMs:d,tiltEasing:P,className:Si("slider"),ref:this.setRef("slider"),outerSpacing:W},pe.createElement(hS,{verticalMode:y,children:L.Children.toArray(O),childWidth:S,currentItem:h,autoTabIndexVisibleItems:j,itemsToShow:C,itemsToScroll:_,itemPosition:R,itemPadding:I,enableSwipe:F,enableMouseSwipe:re,preventDefaultTouchmoveEvent:te,onSwiped:this.onSwiped,onSwiping:this.onSwiping,onItemClick:T?this.goTo:void 0}))),pe.createElement(hu,{when:ne},$?$({type:Pr.NEXT,onClick:this.onNextStart,isEdge:!it}):pe.createElement(Tr,{onClick:this.onNextStart,direction:y?Tr.down:Tr.right,disabled:Me}))),pe.createElement(hu,{when:ee},H?H({pages:f,activePage:o,onClick:this.onIndicatorClick}):pe.createElement(T0,{numOfPages:Q,activePage:o,onClick:this.onIndicatorClick})))}}]),n}(pe.Component);P0.defaultProps={className:"",style:{},verticalMode:!1,isRTL:!1,initialFirstItem:0,initialActiveIndex:0,showArrows:!0,showEmptySlots:!1,disableArrowsOnEnd:!0,pagination:!0,easing:"ease",tiltEasing:"ease",transitionMs:500,enableTilt:!0,enableSwipe:!0,enableMouseSwipe:!0,preventDefaultTouchmoveEvent:!1,focusOnSelect:!1,autoTabIndexVisibleItems:!0,itemsToShow:1,itemsToScroll:1,itemPosition:Pr.CENTER,itemPadding:[0,0,0,0],outerSpacing:0,enableAutoPlay:!1,autoPlaySpeed:2e3,onChange:No,onNextEnd:No,onPrevEnd:No,onNextStart:No,onPrevStart:No,onResize:No};P0.propTypes={children:U.node.isRequired,className:U.string,style:U.object,verticalMode:U.bool,isRTL:U.bool,pagination:U.bool,transitionMs:U.number,easing:U.string,tiltEasing:U.string,enableTilt:U.bool,itemsToShow:U.number,itemsToScroll:U.number,breakPoints:U.arrayOf(U.shape({width:U.number.isRequired,itemsToShow:U.number,itemsToScroll:U.number})),initialActiveIndex:U.number,initialFirstItem:U.number,showArrows:U.bool,showEmptySlots:U.bool,disableArrowsOnEnd:U.bool,focusOnSelect:U.bool,autoTabIndexVisibleItems:U.bool,renderArrow:U.func,renderPagination:U.func,itemPosition:U.oneOf([Pr.START,Pr.CENTER,Pr.END]),itemPadding:U.array,outerSpacing:U.number,enableSwipe:U.bool,enableMouseSwipe:U.bool,preventDefaultTouchmoveEvent:U.bool,enableAutoPlay:U.bool,autoPlaySpeed:U.number,onChange:U.func,onNextStart:U.func,onPrevStart:U.func,onNextEnd:U.func,onPrevEnd:U.func,onResize:U.func};const bO="_container_1afty_3",SO="_carousWrapper_1afty_41",kO="_card_1afty_47",CO="_title_1afty_57",EO="_backgroundImage_1afty_73",Gc={container:bO,carousWrapper:SO,card:kO,title:CO,backgroundImage:EO},TO=[{width:1,itemsToShow:1},{width:550,itemsToShow:1,itemsToScroll:1},{width:768,itemsToShow:1},{width:1200,itemsToShow:1}];function PO(){const{elastic:t}=u5;return x.jsxs("div",{className:Gc.container,children:[x.jsx("div",{children:x.jsx("h1",{children:"Gallery"})}),x.jsx("div",{className:Gc.contWrapper,children:x.jsx(P0,{breakPoints:TO,children:t.map(e=>x.jsx("div",{className:Gc.card,children:x.jsx("img",{src:e.imageUrl,alt:e.title,className:Gc.backgroundImage})},e.id))})})]})}/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yu.apply(this,arguments)}var Do;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Do||(Do={}));const n_="popstate";function OO(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Bm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_d(i)}return NO(e,n,null,t)}function Jt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function O0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AO(){return Math.random().toString(36).substr(2,8)}function r_(t,e){return{usr:t.state,key:t.key,idx:e}}function Bm(t,e,n,r){return n===void 0&&(n=null),Yu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cl(e):e,{state:n,key:e&&e.key||r||AO()})}function _d(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function NO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Do.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(Yu({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=Do.Pop;let C=f(),_=C==null?null:C-c;c=C,l&&l({action:a,location:g.location,delta:_})}function d(C,_){a=Do.Push;let y=Bm(g.location,C,_);n&&n(y,C),c=f()+1;let b=r_(y,c),E=g.createHref(y);try{s.pushState(b,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}o&&l&&l({action:a,location:g.location,delta:1})}function p(C,_){a=Do.Replace;let y=Bm(g.location,C,_);n&&n(y,C),c=f();let b=r_(y,c),E=g.createHref(y);s.replaceState(b,"",E),o&&l&&l({action:a,location:g.location,delta:0})}function v(C){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof C=="string"?C:_d(C);return Jt(_,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,_)}let g={get action(){return a},get location(){return t(i,s)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(n_,h),l=C,()=>{i.removeEventListener(n_,h),l=null}},createHref(C){return e(i,C)},createURL:v,encodeLocation(C){let _=v(C);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:d,replace:p,go(C){return s.go(C)}};return g}var i_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(i_||(i_={}));function IO(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cl(e):e,i=A0(r.pathname||"/",n);if(i==null)return null;let o=_S(t);jO(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=HO(o[a],VO(i));return s}function _S(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Jt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Qo([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Jt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_S(o.children,e,f,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:FO(c,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of xS(o.path))i(o,s,l)}),e}function xS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=xS(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RO=/^:\w+$/,MO=3,DO=2,LO=1,$O=10,zO=-2,o_=t=>t==="*";function FO(t,e){let n=t.split("/"),r=n.length;return n.some(o_)&&(r+=zO),e&&(r+=DO),n.filter(i=>!o_(i)).reduce((i,o)=>i+(RO.test(o)?MO:o===""?LO:$O),r)}function BO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function HO(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=UO({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:Qo([i,f.pathname]),pathnameBase:GO(Qo([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Qo([i,f.pathnameBase]))}return o}function UO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,h)=>{if(f==="*"){let d=a[h]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return c[f]=YO(a[h]||"",f),c},{}),pathname:o,pathnameBase:s,pattern:t}}function WO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),O0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VO(t){try{return decodeURI(t)}catch(e){return O0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YO(t,e){try{return decodeURIComponent(t)}catch(n){return O0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function A0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function KO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cl(t):t;return{pathname:n?n.startsWith("/")?n:XO(n,e):e,search:qO(r),hash:QO(i)}}function XO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cl(t):(i=Yu({},t),Jt(!i.pathname||!i.pathname.includes("?"),mp("?","pathname","search",i)),Jt(!i.pathname||!i.pathname.includes("#"),mp("#","pathname","hash",i)),Jt(!i.search||!i.search.includes("#"),mp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=e.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=KO(i,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Qo=t=>t.join("/").replace(/\/\/+/g,"/"),GO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const SS=["post","put","patch","delete"];new Set(SS);const JO=["get",...SS];new Set(JO);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xd.apply(this,arguments)}const N0=L.createContext(null),kS=L.createContext(null),na=L.createContext(null),ah=L.createContext(null),ra=L.createContext({outlet:null,matches:[],isDataRoute:!1}),CS=L.createContext(null);function eA(t,e){let{relative:n}=e===void 0?{}:e;fc()||Jt(!1);let{basename:r,navigator:i}=L.useContext(na),{hash:o,pathname:s,search:a}=I0(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Qo([r,s])),i.createHref({pathname:l,search:a,hash:o})}function fc(){return L.useContext(ah)!=null}function dc(){return fc()||Jt(!1),L.useContext(ah).location}function ES(t){L.useContext(na).static||L.useLayoutEffect(t)}function tA(){let{isDataRoute:t}=L.useContext(ra);return t?pA():nA()}function nA(){fc()||Jt(!1);let t=L.useContext(N0),{basename:e,navigator:n}=L.useContext(na),{matches:r}=L.useContext(ra),{pathname:i}=dc(),o=JSON.stringify(wS(r).map(l=>l.pathnameBase)),s=L.useRef(!1);return ES(()=>{s.current=!0}),L.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let f=bS(l,JSON.parse(o),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Qo([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,o,i,t])}function I0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=L.useContext(ra),{pathname:i}=dc(),o=JSON.stringify(wS(r).map(s=>s.pathnameBase));return L.useMemo(()=>bS(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function rA(t,e){return iA(t,e)}function iA(t,e,n){fc()||Jt(!1);let{navigator:r}=L.useContext(na),{matches:i}=L.useContext(ra),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=dc(),c;if(e){var f;let g=typeof e=="string"?Cl(e):e;a==="/"||(f=g.pathname)!=null&&f.startsWith(a)||Jt(!1),c=g}else c=l;let h=c.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=IO(t,{pathname:d}),v=uA(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:Qo([a,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Qo([a,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return e&&v?L.createElement(ah.Provider,{value:{location:xd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Do.Pop}},v):v}function oA(){let t=hA(),e=ZO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,o)}const sA=L.createElement(oA,null);class aA extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?L.createElement(ra.Provider,{value:this.props.routeContext},L.createElement(CS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lA(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(N0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(ra.Provider,{value:e},r)}function uA(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Jt(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let f=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||sA);let d=e.concat(o.slice(0,c+1)),p=()=>{let v;return f?v=h:l.route.Component?v=L.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,L.createElement(lA,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?L.createElement(aA,{location:n.location,revalidation:n.revalidation,component:h,error:f,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Hm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hm||(Hm={}));var Ku;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ku||(Ku={}));function cA(t){let e=L.useContext(N0);return e||Jt(!1),e}function fA(t){let e=L.useContext(kS);return e||Jt(!1),e}function dA(t){let e=L.useContext(ra);return e||Jt(!1),e}function TS(t){let e=dA(),n=e.matches[e.matches.length-1];return n.route.id||Jt(!1),n.route.id}function hA(){var t;let e=L.useContext(CS),n=fA(Ku.UseRouteError),r=TS(Ku.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function pA(){let{router:t}=cA(Hm.UseNavigateStable),e=TS(Ku.UseNavigateStable),n=L.useRef(!1);return ES(()=>{n.current=!0}),L.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xd({fromRouteId:e},o)))},[t,e])}function bs(t){Jt(!1)}function mA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Do.Pop,navigator:o,static:s=!1}=t;fc()&&Jt(!1);let a=e.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Cl(r));let{pathname:c="/",search:f="",hash:h="",state:d=null,key:p="default"}=r,v=L.useMemo(()=>{let g=A0(c,a);return g==null?null:{location:{pathname:g,search:f,hash:h,state:d,key:p},navigationType:i}},[a,c,f,h,d,p,i]);return v==null?null:L.createElement(na.Provider,{value:l},L.createElement(ah.Provider,{children:n,value:v}))}function gA(t){let{children:e,location:n}=t;return rA(Um(e),n)}var s_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(s_||(s_={}));new Promise(()=>{});function Um(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let o=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Um(r.props.children,o));return}r.type!==bs&&Jt(!1),!r.props.index||!r.props.children||Jt(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Um(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wd.apply(this,arguments)}function PS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yA(t,e){return t.button===0&&(!e||e==="_self")&&!vA(t)}const _A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],xA=["aria-current","caseSensitive","className","end","style","to","children"],wA="startTransition",a_=Bf[wA];function bA(t){let{basename:e,children:n,future:r,window:i}=t,o=L.useRef();o.current==null&&(o.current=OO({window:i,v5Compat:!0}));let s=o.current,[a,l]=L.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=L.useCallback(h=>{c&&a_?a_(()=>l(h)):l(h)},[l,c]);return L.useLayoutEffect(()=>s.listen(f),[s,f]),L.createElement(mA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const SA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CA=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:f}=e,h=PS(e,_A),{basename:d}=L.useContext(na),p,v=!1;if(typeof c=="string"&&kA.test(c)&&(p=c,SA))try{let y=new URL(window.location.href),b=c.startsWith("//")?new URL(y.protocol+c):new URL(c),E=A0(b.pathname,d);b.origin===y.origin&&E!=null?c=E+b.search+b.hash:v=!0}catch{}let g=eA(c,{relative:i}),C=EA(c,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function _(y){r&&r(y),y.defaultPrevented||C(y)}return L.createElement("a",wd({},h,{href:p||g,onClick:v||o?r:_,ref:n,target:l}))}),Qr=L.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:c}=e,f=PS(e,xA),h=I0(l,{relative:f.relative}),d=dc(),p=L.useContext(kS),{navigator:v}=L.useContext(na),g=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,C=d.pathname,_=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(C=C.toLowerCase(),_=_?_.toLowerCase():null,g=g.toLowerCase());let y=C===g||!s&&C.startsWith(g)&&C.charAt(g.length)==="/",b=_!=null&&(_===g||!s&&_.startsWith(g)&&_.charAt(g.length)==="/"),E=y?r:void 0,P;typeof o=="function"?P=o({isActive:y,isPending:b}):P=[o,y?"active":null,b?"pending":null].filter(Boolean).join(" ");let O=typeof a=="function"?a({isActive:y,isPending:b}):a;return L.createElement(CA,wd({},f,{"aria-current":E,className:P,ref:n,style:O,to:l}),typeof c=="function"?c({isActive:y,isPending:b}):c)});var l_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(l_||(l_={}));var u_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(u_||(u_={}));function EA(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=tA(),l=dc(),c=I0(t,{relative:s});return L.useCallback(f=>{if(yA(f,n)){f.preventDefault();let h=r!==void 0?r:_d(l)===_d(c);a(t,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,c,r,i,n,t,o,s])}const TA=["Think","Tinker","Transform"],PA=200,OA=2e3,AA=100,NA=()=>x.jsxs(IA,{children:[x.jsx("div",{className:"ellipse1"}),x.jsx("div",{className:"ellipse2"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"row",children:[x.jsxs("div",{className:"col-xl",id:"left",children:[x.jsx("div",{className:"hero-heading",children:"Tinkerers’ Laboratory"}),x.jsx("div",{className:"hero-tag",children:"IIT Hyderabad"}),x.jsx("div",{className:"hero-bottom",children:x.jsx(kl,{words:TA,interval:PA,typingDelay:OA,erasingDelay:AA})}),x.jsx("button",{className:"reachus",children:x.jsx(Qr,{to:"/contacts",children:"Reach Us"})})]}),x.jsx("div",{className:"col-xl",id:"right",children:x.jsx("div",{className:"section-hero-image",children:x.jsx("picture",{children:x.jsx("img",{className:"pic1",src:"./images/Home.svg",alt:"image"})})})})]}),x.jsx("div",{className:"row",id:"aims",children:x.jsxs("div",{className:"col-lg-12",children:[x.jsx("div",{className:"ouraim",children:"Our Aim"}),x.jsx("div",{className:"seperator"}),x.jsx("div",{className:"desp1",children:"Here, at Tinkerers' Lab, our aim is to provide you a working space with vast ranges of tools in order to bring out the inner tinkerer in you"})]})}),x.jsxs("div",{className:"row",id:"aims2",children:[x.jsx("div",{className:"col-lg-4 col-md-6",children:x.jsxs("div",{className:"cont",children:[x.jsx("div",{className:"box",children:x.jsx("img",{src:"./images/aim1.svg",alt:"Aim1"})}),x.jsxs("div",{className:"content",children:[x.jsx("div",{className:"heading",children:"Availability"}),x.jsx("div",{className:"line"}),x.jsx("div",{className:"desp2",children:"We know that the best ideas don't always come to us during work hours. Tinkerers' Lab is open 24/7, giving you the liberty to build and innovate whenever."})]})]})}),x.jsx("div",{className:"col-lg-4 col-md-6",children:x.jsxs("div",{className:"cont",children:[x.jsx("div",{className:"box",children:x.jsx("img",{src:"./images/aim2.svg",alt:"Aim1"})}),x.jsxs("div",{className:"content",children:[x.jsx("div",{className:"heading",children:"Resources"}),x.jsx("div",{className:"line"}),x.jsx("div",{className:"desp2",children:"We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers."})]})]})}),x.jsxs("div",{className:"col-lg-4 col-md-6",children:[x.jsxs("div",{className:"cont",children:[x.jsx("div",{className:"box",children:x.jsx("img",{src:"./images/aim3.svg",alt:"Aim1"})}),x.jsxs("div",{className:"content",children:[x.jsx("div",{className:"heading",children:"TL Talks"}),x.jsx("div",{className:"line"}),x.jsx("div",{className:"desp2",children:"TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries."})]})]}),x.jsx("div",{className:"hand",children:x.jsx("img",{src:"./images/hand.svg",alt:"hand"})})]})]})]}),x.jsx(PO,{})]}),IA=Lt.section`
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hand {
    position: absolute;
    z-index: 3;
    right: 5vw;
    margin-bottom: 5vw;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 15vw;
    margin-bottom: 15vh;
  }
  #aims2,
  #aims {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    height: 38rem;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  .ouraim {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #000000;
    padding-top: 7vh;
  }
  .reachus {
    width: 220px;
    height: 10vh;
    a {
      color: #fff;
    }

    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .ellipse2 {
    position: absolute;
    width: 33vw;
    height: 35vw;
    left: 0;
    top: -18vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .ellipse1 {
    position: absolute;
    width: 40vw;
    height: 45vw;
    left: -18vw;
    top: -19vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }
  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .col-xl-6 {
    text-align: center;
  }
  .col-xl {
    text-align: center;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .pic1 {
    animation: rotation1 8s infinite linear;
  }

  @keyframes rotation1 {
    0%,
    100% {
      transform: rotate(-15deg);
    }
    10%,
    90% {
      transform: rotate(-10deg);
    }
    40%,
    60% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 624px; */
  }

  picture {
    text-align: center;
  }
  @media (min-width: 768px) {
    .desp2 {
      padding: 0rem 5vw;
    }
  }
  @media (max-width: 1200px) {
    .reachus {
      font-weight: 700;
      font-size: 24px;
      width: 75vw;
    }
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .desp2 {
      padding: 0rem 5vw;
    }
    .container {
      justify-content: center;
      width: 100vw;
    }
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,jA=["Think","Tinker","Transform"],RA=200,MA=2e3,DA=100,LA=()=>x.jsxs($A,{children:[x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"}),x.jsx("div",{className:"circle5"}),x.jsxs("div",{className:"container grid grid-two-column",children:[x.jsxs("div",{className:"section-hero-data",children:[x.jsx("h2",{className:"hero-heading",children:"Our Team"}),x.jsx("h3",{className:"hero-tag",children:"Tinkerers' Lab IITH"}),x.jsx("div",{className:"hero-bottom",children:x.jsx(kl,{words:jA,interval:RA,typingDelay:MA,erasingDelay:DA})})]}),x.jsx("div",{className:"section-hero-image",children:x.jsx("picture",{children:x.jsx("img",{src:"./images/Team.svg",alt:"image",className:"hero-img"})})})]}),x.jsxs("div",{className:"convener",children:[x.jsx("div",{className:"position",children:"Convener"}),x.jsx("picture",{children:x.jsx("img",{src:"./images/samyak.png",alt:"pic"})})]}),x.jsx("div",{className:"circle8"}),x.jsx("div",{className:"circle9"}),x.jsxs("div",{className:"secretaries",children:[x.jsx("div",{className:"position",children:"Secretaries"}),x.jsxs("div",{className:"img-secs",children:[x.jsx("picture",{children:x.jsx("img",{src:"./images/jarpula.png",alt:"pic"})}),x.jsx("picture",{children:x.jsx("img",{src:"./images/abhay.png",alt:"pic"})}),x.jsx("picture",{children:x.jsx("img",{src:"./images/sahoo.png",alt:"pic"})}),x.jsx("picture",{children:x.jsx("img",{src:"./images/suddho.png",alt:"pic"})})]}),x.jsxs("div",{className:"img-secs",children:[x.jsx("picture",{children:x.jsx("img",{src:"./images/arthi.png",alt:"pic"})}),x.jsx("picture",{children:x.jsx("img",{src:"./images/arsh.png",alt:"pic"})}),x.jsx("picture",{children:x.jsx("img",{src:"./images/anand.png",alt:"pic"})})]})]}),x.jsx("div",{className:"circle6"}),x.jsx("div",{className:"circle7"}),x.jsxs("div",{className:"cores",children:[x.jsx("div",{className:"cores-position",children:"Cores"}),x.jsxs("div",{className:"cores-section",children:[x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:"SOFTWARE"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"ARSH SRIVASTAVA"}),x.jsx("li",{children:"MOHAMED KAIF"}),x.jsx("li",{children:"AJAY KRISHNAN K"}),x.jsx("li",{children:"SATPUTE ANIKET TUKARAM"}),x.jsx("li",{children:"DEEPSHIKHA"}),x.jsx("li",{children:"KASI DHANVI"}),x.jsx("li",{children:"HIMANSHU SHEKHAR MAHARAJ"}),x.jsx("li",{children:"ARUGONDA SRIKAR"}),x.jsx("li",{children:"SHASHANK SINGH"}),x.jsx("li",{children:"MEDIKONDA SREEKAR"}),x.jsx("li",{children:"MAHESH"}),x.jsx("li",{children:"SAI TEJA BHUKYA"})]})]}),x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:" MACHINE LEARNING"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"HARSH GOYAL"}),x.jsx("li",{children:"HARSHIT PANT"}),x.jsx("li",{children:"TEJAL KULKARNI"}),x.jsx("li",{children:"RATNA KSNR"}),x.jsx("li",{children:"AAYUSH ADLAKHA"}),x.jsx("li",{children:"DIKSHANT KHANDELWAL"}),x.jsx("li",{children:"VISHAL VIJAY DEVADIGA"}),x.jsx("li",{children:"SWAPNIL BAG"}),x.jsx("li",{children:"SHIRSENDU PAL"}),x.jsx("li",{children:"REDDICHARLA NAGA GIRI VARDHAN"}),x.jsx("li",{children:"ISHAAN JAIN"}),x.jsx("li",{children:"GITANSHU ARORA"})]})]}),x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:" MECHATRONICS"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"KEVIN"}),x.jsx("li",{children:"PRATIK PATIL"}),x.jsx("li",{children:"NANJUDARDHAYA"}),x.jsx("li",{children:"SHRIRAM H"}),x.jsx("li",{children:"NEERAJ BALACHANDERN"}),x.jsx("li",{children:"SAFA FATHIMA RAFEEK"}),x.jsx("li",{children:"GUNETHRA"}),x.jsx("li",{children:"KAIPA VENKATA TUHIL"}),x.jsx("li",{children:"RAGHUVEER"}),x.jsx("li",{children:"MATHEW M PHILIP"}),x.jsx("li",{children:"PRAKHAR"}),x.jsx("li",{children:"ASHISH BHARDWAJ"})]})]})]}),x.jsxs("div",{className:"cores-section",children:[x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:"EVENTS & PRO"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"PRABHAT"}),x.jsx("li",{children:"MEET JAIN"}),x.jsx("li",{children:"PARTH KANSAGRA"}),x.jsx("li",{children:"AHMIK VIRANI"}),x.jsx("li",{children:"SHARVIL PEDAMKAR"}),x.jsx("li",{children:"NISARG ASLE"}),x.jsx("li",{children:"VEDANT SANGHAVI"}),x.jsx("li",{children:"UTTAM PAHARIA"}),x.jsx("li",{children:"SARTHAK SINGHAL"}),x.jsx("li",{children:"PRITESH SINGH"}),x.jsx("li",{children:"DEVANSH AGRAWAL"})]})]}),x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:" OPERATIONS"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"TANISHQ BHATTACHARJEE"}),x.jsx("li",{children:"SAHIL KUSHWAHA"}),x.jsx("li",{children:"OMKAR NILKANTH"}),x.jsx("li",{children:"PRATHAMESH KADAM"}),x.jsx("li",{children:"CHANDRAHAAS"}),x.jsx("li",{children:"ABHAY GOYAL"}),x.jsx("li",{children:"SOHAM JIDDEWAR"}),x.jsx("li",{children:"VARUN SRIVASTAV"})]})]}),x.jsxs("div",{className:"core",children:[x.jsx("div",{className:"position",children:" DESIGN"}),x.jsxs("ul",{className:"name-cores",children:[x.jsx("li",{children:"PRANAY JAIN"}),x.jsx("li",{children:"PADMAPRABHAN A"}),x.jsx("li",{children:"THAVEEM"}),x.jsx("li",{children:"SRIJA MAILERSETTI"})]})]})]})]})]}),$A=Lt.section`
  padding: 9rem 0;

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
    margin-top:250px;
    margin-left: 15rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  .convener{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-top:180px;
    .position{
      padding: 2rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
      // animation: fadeIn 5s;
      
      -webkit-animation: slide-top 1s ease-in reverse ;
      animation: slide-top 1s ease-in reverse ;
      

    }

    img{
      width: 262.292px;
      height: 280px;
    }
  }

  .secretaries{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    
    .position{
      padding: 7rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
      // animation: fadeIn 8s;
      -webkit-animation: slide-top 2s ease-in reverse ;
      animation: slide-top 2s ease-in reverse ;
      


    }

    .img-secs{
      display: flex;
      flex-direction: row;
      margin-bottom:40px;
      animation: fadeIn ease 5s;
      -webkit-animation: fadeIn ease 5s;
      -moz-animation: fadeIn ease 5s;
      -o-animation: fadeIn ease 5s;
      -ms-animation: fadeIn ease 5s;


      
    }
  }

  .cores{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    margin:30px;
    
    .cores-position{
    
    -webkit-animation: slide-top 3s ease-in reverse ;
    animation: slide-top 3s ease-in reverse ;
    //  animation: fadeIn 10s;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    .cores-section{
      width: 100%;
      display: flex;
      justify-content: space-around;


      .core{
        
        width: 323px;
        height: 500px;
        left: 479px;
        top: 2487px;
        margin-bottom:200px;

        .position{
          width:auto;
          margin-left:0px;  
          padding: 2rem 0;
          color: #000;
          text-align: center;
          font-size: 35px;
          font-family: Inter;
          font-weight: 700;  
          margin-top:40px;
          -webkit-animation: slide-top 4s ease-in reverse ;
          animation: slide-top 4s ease-in reverse ;
         
        }
  
        .name-cores{
          font-family: Inter;
          font-size:25px;
          color: #6C10C6;
          text-align: center;
          -webkit-animation: slide-top 4s ease-in reverse ;
          animation: slide-top 4s ease-in reverse ;
         

        }
      }

      
    
    } 
  }

 @-webkit-keyframes slide-top {
   0% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
   }
   100% {
     -webkit-transform: translateY(-100px);
             transform: translateY(-100px);
   }
 }
 @keyframes slide-top {
   0% {
     -webkit-transform: translateY(0);
             transform: translateY(0);
   }
   100% {
     -webkit-transform: translateY(-100px);
             transform: translateY(-100px);
   }
 }


 @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
 
  .circle6{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 10rem;
    top: 190rem;
  }

  .circle7{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 15rem;
    top: 195rem;
  }

  .circle8{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 200rem;
    top: 90rem;
  }

  .circle9{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 195rem;
    top: 100rem;
  }

  
  
  


    // @media (min-width:768px){
      
    // }

    @media (max-width: 1200px) {


      .section-hero-data{
        margin:0;
        width: 100%;

        .hero-heading {
          top:180px;
          font-weight: 800;
          font-size: 50px;
          left:50px;
          text-align: center;
        }
  
        
        .hero-tag {
          top:240px;
          font-weight: 500;
          font-size: 30px;
          left:30px;
          width:auto;
          height:auto;
          text-align:center;
        }
  
        .hero-bottom {
          font-size:30px;
          margin-top:120px;
          margin-left:30px;
          text-align: center;
          
        }
        
      }
      .circle1 {
        display: none;
      }
  
      .circle2 {
        display: none;
      }
  
      .circle3 {
        display: none;
      }
  
      .circle4 {
        display: none;
      }

      .circle5 {
        display: none;
      }

      .circle6 {
        display: none;
      }
      .circle7 {
        display: none;
      }
      .circle8 {
        display: none;
      }
      .circle9 {
        display: none;
      }

      .hero-img{
        display: none;
      }

      

      .secretaries{
        
        .img-secs{
          display:flex;
          flex-wrap: wrap;
          align-content: center;
          gap: 3rem;
        }

      }

      .cores{
        
        
        .cores-section{
          display:flex;
          flex-wrap: wrap;
          

          .core{
            margin-bottom:0px;
            height:fit-content;
            
            .position{
              text-align: center;
              font-size:30px;
              margin-left:0px;
            }


            
            .name-cores{
              font-size:20px;
              text-align: center;
              padding-left:0rem;
              
            }
          }

        }
      }
  }

`;function zA(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function FA(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var BA=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(FA(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=zA(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Nn="-ms-",bd="-moz-",Ue="-webkit-",OS="comm",j0="rule",R0="decl",HA="@import",AS="@keyframes",UA="@layer",WA=Math.abs,lh=String.fromCharCode,VA=Object.assign;function YA(t,e){return bn(t,0)^45?(((e<<2^bn(t,0))<<2^bn(t,1))<<2^bn(t,2))<<2^bn(t,3):0}function NS(t){return t.trim()}function KA(t,e){return(t=e.exec(t))?t[0]:t}function We(t,e,n){return t.replace(e,n)}function Wm(t,e){return t.indexOf(e)}function bn(t,e){return t.charCodeAt(e)|0}function Xu(t,e,n){return t.slice(e,n)}function $i(t){return t.length}function M0(t){return t.length}function qc(t,e){return e.push(t),t}function XA(t,e){return t.map(e).join("")}var uh=1,fl=1,IS=0,mr=0,Qt=0,El="";function ch(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:uh,column:fl,length:s,return:""}}function Bl(t,e){return VA(ch("",null,null,"",null,null,0),t,{length:-t.length},e)}function GA(){return Qt}function qA(){return Qt=mr>0?bn(El,--mr):0,fl--,Qt===10&&(fl=1,uh--),Qt}function Rr(){return Qt=mr<IS?bn(El,mr++):0,fl++,Qt===10&&(fl=1,uh++),Qt}function Yi(){return bn(El,mr)}function Tf(){return mr}function hc(t,e){return Xu(El,t,e)}function Gu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jS(t){return uh=fl=1,IS=$i(El=t),mr=0,[]}function RS(t){return El="",t}function Pf(t){return NS(hc(mr-1,Vm(t===91?t+2:t===40?t+1:t)))}function QA(t){for(;(Qt=Yi())&&Qt<33;)Rr();return Gu(t)>2||Gu(Qt)>3?"":" "}function ZA(t,e){for(;--e&&Rr()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return hc(t,Tf()+(e<6&&Yi()==32&&Rr()==32))}function Vm(t){for(;Rr();)switch(Qt){case t:return mr;case 34:case 39:t!==34&&t!==39&&Vm(Qt);break;case 40:t===41&&Vm(t);break;case 92:Rr();break}return mr}function JA(t,e){for(;Rr()&&t+Qt!==47+10;)if(t+Qt===42+42&&Yi()===47)break;return"/*"+hc(e,mr-1)+"*"+lh(t===47?t:Rr())}function e3(t){for(;!Gu(Yi());)Rr();return hc(t,mr)}function t3(t){return RS(Of("",null,null,null,[""],t=jS(t),0,[0],t))}function Of(t,e,n,r,i,o,s,a,l){for(var c=0,f=0,h=s,d=0,p=0,v=0,g=1,C=1,_=1,y=0,b="",E=i,P=o,O=r,T=b;C;)switch(v=y,y=Rr()){case 40:if(v!=108&&bn(T,h-1)==58){Wm(T+=We(Pf(y),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:T+=Pf(y);break;case 9:case 10:case 13:case 32:T+=QA(v);break;case 92:T+=ZA(Tf()-1,7);continue;case 47:switch(Yi()){case 42:case 47:qc(n3(JA(Rr(),Tf()),e,n),l);break;default:T+="/"}break;case 123*g:a[c++]=$i(T)*_;case 125*g:case 59:case 0:switch(y){case 0:case 125:C=0;case 59+f:_==-1&&(T=We(T,/\f/g,"")),p>0&&$i(T)-h&&qc(p>32?f_(T+";",r,n,h-1):f_(We(T," ","")+";",r,n,h-2),l);break;case 59:T+=";";default:if(qc(O=c_(T,e,n,c,f,i,a,b,E=[],P=[],h),o),y===123)if(f===0)Of(T,e,O,O,E,o,h,a,P);else switch(d===99&&bn(T,3)===110?100:d){case 100:case 108:case 109:case 115:Of(t,O,O,r&&qc(c_(t,O,O,0,0,i,a,b,i,E=[],h),P),i,P,h,a,r?E:P);break;default:Of(T,O,O,O,[""],P,0,a,P)}}c=f=p=0,g=_=1,b=T="",h=s;break;case 58:h=1+$i(T),p=v;default:if(g<1){if(y==123)--g;else if(y==125&&g++==0&&qA()==125)continue}switch(T+=lh(y),y*g){case 38:_=f>0?1:(T+="\f",-1);break;case 44:a[c++]=($i(T)-1)*_,_=1;break;case 64:Yi()===45&&(T+=Pf(Rr())),d=Yi(),f=h=$i(b=T+=e3(Tf())),y++;break;case 45:v===45&&$i(T)==2&&(g=0)}}return o}function c_(t,e,n,r,i,o,s,a,l,c,f){for(var h=i-1,d=i===0?o:[""],p=M0(d),v=0,g=0,C=0;v<r;++v)for(var _=0,y=Xu(t,h+1,h=WA(g=s[v])),b=t;_<p;++_)(b=NS(g>0?d[_]+" "+y:We(y,/&\f/g,d[_])))&&(l[C++]=b);return ch(t,e,n,i===0?j0:a,l,c,f)}function n3(t,e,n){return ch(t,e,n,OS,lh(GA()),Xu(t,2,-2),0)}function f_(t,e,n,r){return ch(t,e,n,R0,Xu(t,0,r),Xu(t,r+1,-1),r)}function Va(t,e){for(var n="",r=M0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function r3(t,e,n,r){switch(t.type){case UA:if(t.children.length)break;case HA:case R0:return t.return=t.return||t.value;case OS:return"";case AS:return t.return=t.value+"{"+Va(t.children,r)+"}";case j0:t.value=t.props.join(",")}return $i(n=Va(t.children,r))?t.return=t.value+"{"+n+"}":""}function i3(t){var e=M0(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function o3(t){return function(e){e.root||(e=e.return)&&t(e)}}var s3=function(e,n,r){for(var i=0,o=0;i=o,o=Yi(),i===38&&o===12&&(n[r]=1),!Gu(o);)Rr();return hc(e,mr)},a3=function(e,n){var r=-1,i=44;do switch(Gu(i)){case 0:i===38&&Yi()===12&&(n[r]=1),e[r]+=s3(mr-1,n,r);break;case 2:e[r]+=Pf(i);break;case 4:if(i===44){e[++r]=Yi()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=lh(i)}while(i=Rr());return e},l3=function(e,n){return RS(a3(jS(e),n))},d_=new WeakMap,u3=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!d_.get(r))&&!i){d_.set(e,!0);for(var o=[],s=l3(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var f=0;f<a.length;f++,c++)e.props[c]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},c3=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function MS(t,e){switch(YA(t,e)){case 5103:return Ue+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ue+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+t+bd+t+Nn+t+t;case 6828:case 4268:return Ue+t+Nn+t+t;case 6165:return Ue+t+Nn+"flex-"+t+t;case 5187:return Ue+t+We(t,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Nn+"flex-$1$2")+t;case 5443:return Ue+t+Nn+"flex-item-"+We(t,/flex-|-self/,"")+t;case 4675:return Ue+t+Nn+"flex-line-pack"+We(t,/align-content|flex-|-self/,"")+t;case 5548:return Ue+t+Nn+We(t,"shrink","negative")+t;case 5292:return Ue+t+Nn+We(t,"basis","preferred-size")+t;case 6060:return Ue+"box-"+We(t,"-grow","")+Ue+t+Nn+We(t,"grow","positive")+t;case 4554:return Ue+We(t,/([^-])(transform)/g,"$1"+Ue+"$2")+t;case 6187:return We(We(We(t,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),t,"")+t;case 5495:case 3959:return We(t,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return We(We(t,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Nn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ue+t+t;case 4095:case 3583:case 4068:case 2532:return We(t,/(.+)-inline(.+)/,Ue+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($i(t)-1-e>6)switch(bn(t,e+1)){case 109:if(bn(t,e+4)!==45)break;case 102:return We(t,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+bd+(bn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wm(t,"stretch")?MS(We(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(bn(t,e+1)!==115)break;case 6444:switch(bn(t,$i(t)-3-(~Wm(t,"!important")&&10))){case 107:return We(t,":",":"+Ue)+t;case 101:return We(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ue+(bn(t,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Nn+"$2box$3")+t}break;case 5936:switch(bn(t,e+11)){case 114:return Ue+t+Nn+We(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ue+t+Nn+We(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ue+t+Nn+We(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ue+t+Nn+t+t}return t}var f3=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case R0:e.return=MS(e.value,e.length);break;case AS:return Va([Bl(e,{value:We(e.value,"@","@"+Ue)})],i);case j0:if(e.length)return XA(e.props,function(o){switch(KA(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Va([Bl(e,{props:[We(o,/:(read-\w+)/,":"+bd+"$1")]})],i);case"::placeholder":return Va([Bl(e,{props:[We(o,/:(plac\w+)/,":"+Ue+"input-$1")]}),Bl(e,{props:[We(o,/:(plac\w+)/,":"+bd+"$1")]}),Bl(e,{props:[We(o,/:(plac\w+)/,Nn+"input-$1")]})],i)}return""})}},d3=[f3],h3=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var C=g.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=e.stylisPlugins||d3,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var C=g.getAttribute("data-emotion").split(" "),_=1;_<C.length;_++)o[C[_]]=!0;a.push(g)});var l,c=[u3,c3];{var f,h=[r3,o3(function(g){f.insert(g)})],d=i3(c.concat(i,h)),p=function(C){return Va(t3(C),d)};l=function(C,_,y,b){f=y,p(C?C+"{"+_.styles+"}":_.styles),b&&(v.inserted[_.name]=!0)}}var v={key:n,sheet:new BA({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v};function Oe(){return Oe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oe.apply(this,arguments)}var p3=!0;function m3(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var DS=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||p3===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},g3=function(e,n,r){DS(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function v3(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var y3=/[A-Z]|^ms/g,_3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,LS=function(e){return e.charCodeAt(1)===45},h_=function(e){return e!=null&&typeof e!="boolean"},gp=Eb(function(t){return LS(t)?t:t.replace(y3,"-$&").toLowerCase()}),p_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(_3,function(r,i,o){return zi={name:i,styles:o,next:zi},i})}return jb[e]!==1&&!LS(e)&&typeof n=="number"&&n!==0?n+"px":n};function qu(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return zi={name:n.name,styles:n.styles,next:zi},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)zi={name:r.name,styles:r.styles,next:zi},r=r.next;var i=n.styles+";";return i}return x3(t,e,n)}case"function":{if(t!==void 0){var o=zi,s=n(t);return zi=o,qu(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function x3(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qu(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":h_(s)&&(r+=gp(o)+":"+p_(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)h_(s[a])&&(r+=gp(o)+":"+p_(o,s[a])+";");else{var l=qu(t,e,s);switch(o){case"animation":case"animationName":{r+=gp(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var m_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,zi,w3=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";zi=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=qu(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=qu(r,n,e[a]),i&&(o+=s[a]);m_.lastIndex=0;for(var l="",c;(c=m_.exec(o))!==null;)l+="-"+c[1];var f=v3(o)+l;return{name:f,styles:o,next:zi}},b3=function(e){return e()},S3=Bf["useInsertionEffect"]?Bf["useInsertionEffect"]:!1,k3=S3||b3,$S=L.createContext(typeof HTMLElement<"u"?h3({key:"css"}):null);$S.Provider;var C3=function(e){return L.forwardRef(function(n,r){var i=L.useContext($S);return e(n,i,r)})},zS=L.createContext({});const E3="/assets/cyberevent-a83abfc2.png",T3="/assets/tinkering101ep2-af648a49.png",P3="/assets/tinkering101ep1-49f7c69f.png",O3="/assets/tinkerersnight-7a7d2eb8.png",A3=()=>{const t={backgroundImage:`url(${E3})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},e={backgroundImage:`url(${T3})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},n={backgroundImage:`url(${P3})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"},r={backgroundImage:`url(${O3})`,transform:"translate3d(0, 0, 0)",position:"relative",width:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"filter 0.5s ease",aspectRatio:"1.72",borderRadius:"67.5px"};return x.jsxs(N3,{children:[x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"}),x.jsx("div",{className:"circle5"}),x.jsx("div",{className:"circle6"}),x.jsx("div",{className:"circle7"}),x.jsx("div",{className:"circle8"}),x.jsx("div",{className:"circle9"}),x.jsx("div",{className:"circle10"}),x.jsx("div",{className:"circle11"}),x.jsx("div",{className:"circle12"}),x.jsx("div",{className:"circle13"}),x.jsx("div",{className:"circle14"}),x.jsx("div",{className:"circle15"}),x.jsx("div",{className:"circle16"}),x.jsx("div",{className:"circle17"}),x.jsxs("div",{className:"container grid grid-two-column",children:[x.jsxs("div",{className:"section-hero-data",children:[x.jsx("h2",{className:"hero-heading",children:"Events"}),x.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),x.jsx("h4",{className:"hero-bottom",children:"Think Tinker Transform."})]}),x.jsx("div",{className:"section-hero-image",children:x.jsx("picture",{children:x.jsx("img",{src:"./images/Event.svg",alt:"image",className:"hero-img"})})})]}),x.jsxs("div",{className:"flex-container",children:[x.jsx("div",{className:"flex-item",children:x.jsxs("div",{className:"image",children:[x.jsx("div",{className:"Effect",style:t,children:x.jsx("div",{className:"Content",children:x.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),x.jsxs("div",{className:"Left-Img",children:[x.jsx("div",{className:"image-name",children:"CyberCon-2023"}),x.jsx("div",{className:"decoration"})]})]})}),x.jsx("div",{className:"flex-item",children:x.jsxs("div",{className:"image",children:[x.jsx("div",{className:"Effect",style:e,children:x.jsx("div",{className:"Content",children:x.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),x.jsxs("div",{className:"Right-Img",children:[x.jsx("div",{className:"image-name-2",children:"Tinkering-101-Episode-02"}),x.jsx("div",{className:"decoration-2"})]})]})}),x.jsx("div",{className:"flex-item",children:x.jsxs("div",{className:"image",children:[x.jsx("div",{className:"Effect",style:n,children:x.jsx("div",{className:"Content",children:x.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors. "})})}),x.jsxs("div",{className:"Left-Img",children:[x.jsx("div",{className:"image-name-3",children:"Tinkering-101-Episode-01"}),x.jsx("div",{className:"decoration-3"})]})]})}),x.jsx("div",{className:"flex-item",children:x.jsxs("div",{className:"image",children:[x.jsx("div",{className:"Effect",style:r,children:x.jsx("div",{className:"Content",children:x.jsx("p",{children:"PRO and Events of Tinkerers’ Lab is the face of our lab. It handles relations with contingents and clubs across the country along with some of the finest professors and incubators to go along with. The PRO end of the lab will target to collaborate with such bodies and other companies this year to set up mini R&D for such bodies in the lab. The lab will also deal with clubs inside the college which will be a fantastic opportunity to interact with Alumni and Seniors."})})}),x.jsxs("div",{className:"Right-Img",children:[x.jsx("div",{className:"image-name-4",children:"Tinkerers-Night"}),x.jsx("div",{className:"decoration-4"})]})]})})]})]})},N3=Lt.section`
  padding: 9rem 0;

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }
 
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1%;
    gap:25%;
  }

  .flex-item {
    padding: 10px;
    text-align: center;
    align-items: center;
    width:75%;
    animation: fade-in 2.5s ease-in;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .Right-Img {
    position: relative;
    display: inline-block;
    align-items: center;
    left:50%;
     
    
  }
  .Left-Img{
    position: relative;
    display: inline-block;
    align-items: center;
    right:50%;
  }

  .image-name {
    align-items:center;
    position: relative;
    width: 100%;
    height: 135px;
    bottom:6vh;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 35px;
    padding-left: 20%;
    text-align: left;
    margin-bottom: 20px;
  }
  .image-name-2 {
    align-items:center;
    position: relative;
    width: 120%;
    height: 135px;
    bottom:60px;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 5%;
    padding-right:8%;
    text-align: left;
    margin-bottom: 20px;
    right:18%;
    padding-left:3%;
  }
  .image-name-3{
  align-items:center;
  position: relative;
  width: 120%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:15%;
  text-align: left;
  margin-bottom: 20px;
  left:6%;
  }
  .image-name-4 {
  align-items:center;
  position: relative;
  width: 100%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:20%;
  text-align: left;
  margin-bottom: 20px;
  right:2%;
  }
  .decoration {
    width: 110%;
    height: 100%;
    background: #6C10C6;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    border-radius: 79.5px;
    aspect-ratio: 3.96;
    position:absolute;
    bottom:30%;
    right:6%;
  }
  .decoration-2 {
  width: 110%;
  height: 159px;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:35%;
  right:4%;
  }
  .decoration-3{
    width: 120%;
  height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:10%;
  left:2%;
  }
  .decoration-4{
    width: 110%;
    height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:15px;
  }
  @media (max-width: 1200px) {
    .flex-container {
      padding: 0%;
      gap: 25px;;
    }
  
    .flex-item {
      width: 100%;
      left:20%;
    }
  
    .Right-Img,
    .Left-Img {
      left: auto;
      right: auto;
    }
  
    .image-name{
      font-size: 32px;
      padding-top: 4%;
      padding-left:25%;
      width:110%;
      height:100px;
      top:2px;
      left:-5%;
    }
   
    .image-name-3{
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:14%;
      width:110%;
      left:-4%;
      height:100px;
      top:2px;
    }
    .image-name-4 {
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:25%;
      width:110%;
      left:-4%;
      height:100px;
      top:2px;
    }
    .image-name-2{
      font-size: 30px;
      padding-top: 4%;
      padding-left:15%;
      width:110%;
      left:-4%;
      top:2px;
      height:100px;
    }
    .decoration{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-2{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-3{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    }
    .decoration-4{
      width:110%;
      height:100px;
      top:7%;
      left:-4%;
    } 

  }
  @media (max-width: 320px){
    
    .decoration-2,
    .decoration-3{
      width:95%;
      height:100px;
      top:7%;
      left:3%;
    }
    .decoration,
    .decoration-4{
      width:80%;
      height:100px;
      top:7%;
      left:5%;
    }
    .image-name{
      font-size: 32px;
      padding-top: 4%;
      padding-left:15%;
      width:80%;
      height:100px;
      top:2px;
      left:4%;
    }
    .image-name-3{
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:04%;
      width:95%;
      left:2.5%;
      height:100px;
      top:2px;
    }
    .image-name-4 {
      font-size: 32px;
      padding-top: 4.5%;
      padding-left:15%;
      width:80%;
      left:5%;
      height:100px;
      top:2px;
    }
    .image-name-2{
      font-size: 30px;
      padding-top: 4%;
      padding-left:4%;
      width:95%;
      left:2.5%;
      top:2px;
      height:100px;
    }
    .Effect{
      left:20%;
    }
  }
  
  
  
  
  
  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom{
    position:  absolute;
    width: 1008px;
    height: 525px;
    left: 15rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 5.5rem;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 4rem;
    line-height: 4rem;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 39px;
    width: auto;
    height: auto;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .section-hero-image {
      display: none;
    }
  }

  .hero-img{
    width: 100%;
  }
 
  .circle6{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 53px;
    top: 941px;
    border-radius: 50%;
    background: #6C10C6;
    }
    
.circle7{
 position: absolute;
width: 12px;
height: 12px;
left: 561px;
top: 1612px;
background: #6C10C6;
border-radius:50%;
}
.circle8{

position: absolute;
width: 20px;
height: 20px;
left: 494px;
top: 1649px;
border-radius:50%;
background: #6C10C6;

}
.circle9{
  

position: absolute;
width: 20px;
height: 20px;
left: 63px;
top: 1873px;
border-radius:50%;
background: #6C10C6;

}
.circle10{
 

position: absolute;
width: 12px;
height: 12px;
left: 499px;
top: 2544px;
border-radius:50%;
background: #6C10C6;

}
.circle11{
position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 2591px;
border-radius:50%;
background: #6C10C6;

}
.circle12{

position: absolute;
width: 20px;
height: 20px;
left: 53px;
top: 2829px;
border-radius:50%;
background: #6C10C6;

}
.circle13{
 

position: absolute;
width: 12px;
height: 12px;
left: 507px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle14{
position: absolute;
width: 12px;
height: 12px;
left: 707px;
top: 3180px;

background: #6C10C6;
border-radius:50%;
}
.circle15{
position: absolute;
width: 20px;
height: 20px;
left: 103px;
top: 3825px;

background: #6C10C6;
border-radius:50%;
}
.circle16{

  position: absolute;
  width: 12px;
  height: 12px;
  left: 499px;
  top: 3996px;
  border-radius:50%;
  background: #6C10C6;
  
}
.circle17{

position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 4043px;
border-radius:50%;
background: #6C10C6;

}
.Effect {
  transform: translate3d(0, 0, 0);
  position: relative;
 width: 72%; 
  aspect-ratio: 1.72;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  z-index:0.5;
}
.Effect:before,
.Effect:after {
  transform: translate3d(0, 0, 0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // border-radius:67.5px;
}
.Effect:after {
  background: transparentize(#031625, 0.15);
  opacity: 1;
  transition: opacity 0.5s ease;
}
.Effect:before {
  background: rgba(104, 50, 172, 0.6); 
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 10, 0) translateY(100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.Effect:hover {
  width: 72.5%;
}
.Effect:hover:after {
  opacity: 0;
}

.Effect:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}
.Effect:hover .Content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}
.Effect:hover .Effect {
  filter: grayscale(0);
}
.Content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 10;
  text-align: center;
  margin: 0 1.618em;
  top: 50%; 
  opacity: 0;
  color: white; 
  font-size: 20px;
}
@media (max-width: 1000px) {
  .circle6,
  .circle7,
  .circle8,
  .circle9,
  .circle10,
  .circle11,
  .circle12,
  .circle13,
  .circle14,
  .circle15,
  .circle16,
  .circle17
  {
    display: none;
  }
}
`,I3=["Think","Tinker","Transform"],j3=200,R3=2e3,M3=100,D3=()=>x.jsxs(L3,{children:[x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"}),x.jsx("div",{className:"circle5"}),x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"row",children:[x.jsxs("div",{className:"col-xl",id:"left",children:[x.jsx("h2",{className:"hero-heading",children:"Inventory"}),x.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),x.jsx("h4",{className:"hero-bottom",children:x.jsx(kl,{words:I3,interval:j3,typingDelay:R3,erasingDelay:M3})})]}),x.jsx("div",{className:"col-xl",id:"right",children:x.jsx("picture",{children:x.jsx("img",{src:"./images/Inventory.svg",alt:"image",className:"hero-img"})})})]}),x.jsxs("div",{className:"wip",children:[x.jsx("h2",{children:"Work in Progress"}),x.jsx("picture",{children:x.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),L3=Lt.section`
  padding: 9rem 0;
  .col-xl {
    text-align: center;
  }
  .wip {
    padding-top: 9rem;
  }
  .wip .hero-img {
    width: 10rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 100%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }

    .wip h2{
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,$3=["Think","Tinker","Transform"],z3=200,F3=2e3,B3=100,H3=()=>x.jsxs(U3,{children:[x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"}),x.jsx("div",{className:"circle5"}),x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"row",children:[x.jsxs("div",{className:"col-xl",id:"left",children:[x.jsx("h2",{className:"hero-heading",children:"Projects"}),x.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),x.jsx("h4",{className:"hero-bottom",children:x.jsx(kl,{words:$3,interval:z3,typingDelay:F3,erasingDelay:B3})})]}),x.jsx("div",{className:"col-xl",id:"right",children:x.jsx("picture",{children:x.jsx("img",{src:"./images/Project1.svg",alt:"image",className:"hero-img"})})})]}),x.jsxs("div",{className:"wip",children:[x.jsx("h2",{children:"Work in Progress"}),x.jsx("picture",{children:x.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),U3=Lt.section`
  padding: 9rem 0;
  .col-xl {
    text-align: center;
  }
  .wip {
    padding-top: 9rem;
  }
  .wip .hero-img {
    width: 10rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 70%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }
    .wip h2{
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`;function _a(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function FS(t){if(!_a(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=FS(t[n])}),e}function fo(t,e,n={clone:!0}){const r=n.clone?Oe({},t):t;return _a(t)&&_a(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(_a(e[i])&&i in t&&_a(t[i])?r[i]=fo(t[i],e[i],n):n.clone?r[i]=_a(e[i])?FS(e[i]):e[i]:r[i]=e[i])}),r}function dl(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function Ki(t){if(typeof t!="string")throw new Error(dl(7));return t.charAt(0).toUpperCase()+t.slice(1)}function W3(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function V3(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function Y3(t,e){return()=>null}function K3(t,e){return L.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function BS(t){return t&&t.ownerDocument||document}function X3(t){return BS(t).defaultView||window}function G3(t,e){return()=>null}function HS(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const q3=typeof window<"u"?L.useLayoutEffect:L.useEffect,US=q3;let g_=0;function Q3(t){const[e,n]=L.useState(t),r=t||e;return L.useEffect(()=>{e==null&&(g_+=1,n(`mui-${g_}`))},[e]),r}const v_=Bf["useId".toString()];function Z3(t){if(v_!==void 0){const e=v_();return t??e}return Q3(t)}function J3(t,e,n,r,i){return null}function eN({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=L.useRef(t!==void 0),[o,s]=L.useState(e),a=i?t:o,l=L.useCallback(c=>{i||s(c)},[]);return[a,l]}function tN(t){const e=L.useRef(t);return US(()=>{e.current=t}),L.useCallback((...n)=>(0,e.current)(...n),[])}function nN(...t){return L.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{HS(n,e)})},t)}let fh=!0,Ym=!1,y_;const rN={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function iN(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&rN[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function oN(t){t.metaKey||t.altKey||t.ctrlKey||(fh=!0)}function vp(){fh=!1}function sN(){this.visibilityState==="hidden"&&Ym&&(fh=!0)}function aN(t){t.addEventListener("keydown",oN,!0),t.addEventListener("mousedown",vp,!0),t.addEventListener("pointerdown",vp,!0),t.addEventListener("touchstart",vp,!0),t.addEventListener("visibilitychange",sN,!0)}function lN(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return fh||iN(e)}function uN(){const t=L.useCallback(i=>{i!=null&&aN(i.ownerDocument)},[]),e=L.useRef(!1);function n(){return e.current?(Ym=!0,window.clearTimeout(y_),y_=window.setTimeout(()=>{Ym=!1},100),e.current=!1,!0):!1}function r(i){return lN(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function WS(t,e){const n=Oe({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=Oe({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},o=e[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=Oe({},o),Object.keys(i).forEach(s=>{n[r][s]=WS(i[s],o[s])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function cN(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>{if(s){const a=e(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const __=t=>t,fN=()=>{let t=__;return{configure(e){t=e},generate(e){return t(e)},reset(){t=__}}},dN=fN(),VS=dN,hN={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function YS(t,e,n="Mui"){const r=hN[e];return r?`${n}-${r}`:`${VS.generate(t)}-${e}`}function pN(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=YS(t,i,n)}),r}function bo(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=KS(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function mN(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=KS(t))&&(r&&(r+=" "),r+=e);return r}var gN=sP,vN=function(e){return e!=="theme"},x_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?gN:vN},w_=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},yN=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return DS(n,r,i),k3(function(){return g3(n,r,i)}),null},_N=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=w_(e,n,r),l=a||x_(i),c=!l("as");return function(){var f=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)h.push.apply(h,f);else{h.push(f[0][0]);for(var d=f.length,p=1;p<d;p++)h.push(f[p],f[0][p])}var v=C3(function(g,C,_){var y=c&&g.as||i,b="",E=[],P=g;if(g.theme==null){P={};for(var O in g)P[O]=g[O];P.theme=L.useContext(zS)}typeof g.className=="string"?b=m3(C.registered,E,g.className):g.className!=null&&(b=g.className+" ");var T=w3(h.concat(E),C.registered,P);b+=C.key+"-"+T.name,s!==void 0&&(b+=" "+s);var j=c&&a===void 0?x_(y):l,R={};for(var I in g)c&&I==="as"||j(I)&&(R[I]=g[I]);return R.className=b,R.ref=_,L.createElement(L.Fragment,null,L.createElement(yN,{cache:C,serialized:T,isStringTag:typeof y=="string"}),L.createElement(y,R))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=h,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(g,C){return t(g,Oe({},n,C,{shouldForwardProp:w_(v,C,!0)})).apply(void 0,h)},v}},xN=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Km=_N.bind();xN.forEach(function(t){Km[t]=Km(t)});/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function wN(t,e){return Km(t,e)}const bN=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},SN=["values","unit","step"],kN=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>Oe({},n,{[r.key]:r.val}),{})};function CN(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=bo(t,SN),o=kN(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function c(d,p){const v=s.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(v!==-1&&typeof e[s[v]]=="number"?e[s[v]]:p)-r/100}${n})`}function f(d){return s.indexOf(d)+1<s.length?c(d,s[s.indexOf(d)+1]):a(d)}function h(d){const p=s.indexOf(d);return p===0?a(s[1]):p===s.length-1?l(s[p]):c(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return Oe({keys:s,values:o,up:a,down:l,between:c,only:f,not:h,unit:n},i)}const EN={borderRadius:4},TN=EN;function pu(t,e){return e?fo(t,e,{clone:!1}):t}const D0={xs:0,sm:600,md:900,lg:1200,xl:1536},b_={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${D0[t]}px)`};function yo(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||b_;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||b_;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||D0).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function PN(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function ON(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function dh(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Sd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=dh(t,n)||r,e&&(i=e(i,r,t)),i}function Ye(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,c=dh(l,r)||{};return yo(s,a,h=>{let d=Sd(c,i,h);return h===d&&typeof h=="string"&&(d=Sd(c,i,`${e}${h==="default"?"":Ki(h)}`,h)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function AN(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const NN={m:"margin",p:"padding"},IN={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},S_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},jN=AN(t=>{if(t.length>2)if(S_[t])t=S_[t];else return[t];const[e,n]=t.split(""),r=NN[e],i=IN[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),L0=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],$0=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...L0,...$0];function pc(t,e,n,r){var i;const o=(i=dh(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function XS(t){return pc(t,"spacing",8)}function mc(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function RN(t,e){return n=>t.reduce((r,i)=>(r[i]=mc(e,n),r),{})}function MN(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=jN(n),o=RN(i,r),s=t[n];return yo(t,s,o)}function GS(t,e){const n=XS(t.theme);return Object.keys(t).map(r=>MN(t,e,r,n)).reduce(pu,{})}function It(t){return GS(t,L0)}It.propTypes={};It.filterProps=L0;function jt(t){return GS(t,$0)}jt.propTypes={};jt.filterProps=$0;function DN(t=8){if(t.mui)return t;const e=XS({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function hh(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?pu(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Bi(t){return typeof t!="number"?t:`${t}px solid`}const LN=Ye({prop:"border",themeKey:"borders",transform:Bi}),$N=Ye({prop:"borderTop",themeKey:"borders",transform:Bi}),zN=Ye({prop:"borderRight",themeKey:"borders",transform:Bi}),FN=Ye({prop:"borderBottom",themeKey:"borders",transform:Bi}),BN=Ye({prop:"borderLeft",themeKey:"borders",transform:Bi}),HN=Ye({prop:"borderColor",themeKey:"palette"}),UN=Ye({prop:"borderTopColor",themeKey:"palette"}),WN=Ye({prop:"borderRightColor",themeKey:"palette"}),VN=Ye({prop:"borderBottomColor",themeKey:"palette"}),YN=Ye({prop:"borderLeftColor",themeKey:"palette"}),ph=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=pc(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:mc(e,r)});return yo(t,t.borderRadius,n)}return null};ph.propTypes={};ph.filterProps=["borderRadius"];hh(LN,$N,zN,FN,BN,HN,UN,WN,VN,YN,ph);const mh=t=>{if(t.gap!==void 0&&t.gap!==null){const e=pc(t.theme,"spacing",8),n=r=>({gap:mc(e,r)});return yo(t,t.gap,n)}return null};mh.propTypes={};mh.filterProps=["gap"];const gh=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=pc(t.theme,"spacing",8),n=r=>({columnGap:mc(e,r)});return yo(t,t.columnGap,n)}return null};gh.propTypes={};gh.filterProps=["columnGap"];const vh=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=pc(t.theme,"spacing",8),n=r=>({rowGap:mc(e,r)});return yo(t,t.rowGap,n)}return null};vh.propTypes={};vh.filterProps=["rowGap"];const KN=Ye({prop:"gridColumn"}),XN=Ye({prop:"gridRow"}),GN=Ye({prop:"gridAutoFlow"}),qN=Ye({prop:"gridAutoColumns"}),QN=Ye({prop:"gridAutoRows"}),ZN=Ye({prop:"gridTemplateColumns"}),JN=Ye({prop:"gridTemplateRows"}),eI=Ye({prop:"gridTemplateAreas"}),tI=Ye({prop:"gridArea"});hh(mh,gh,vh,KN,XN,GN,qN,QN,ZN,JN,eI,tI);function Ya(t,e){return e==="grey"?e:t}const nI=Ye({prop:"color",themeKey:"palette",transform:Ya}),rI=Ye({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ya}),iI=Ye({prop:"backgroundColor",themeKey:"palette",transform:Ya});hh(nI,rI,iI);function Or(t){return t<=1&&t!==0?`${t*100}%`:t}const oI=Ye({prop:"width",transform:Or}),z0=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,o;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||D0[n]||Or(n)}};return yo(t,t.maxWidth,e)}return null};z0.filterProps=["maxWidth"];const sI=Ye({prop:"minWidth",transform:Or}),aI=Ye({prop:"height",transform:Or}),lI=Ye({prop:"maxHeight",transform:Or}),uI=Ye({prop:"minHeight",transform:Or});Ye({prop:"size",cssProperty:"width",transform:Or});Ye({prop:"size",cssProperty:"height",transform:Or});const cI=Ye({prop:"boxSizing"});hh(oI,z0,sI,aI,lI,uI,cI);const fI={border:{themeKey:"borders",transform:Bi},borderTop:{themeKey:"borders",transform:Bi},borderRight:{themeKey:"borders",transform:Bi},borderBottom:{themeKey:"borders",transform:Bi},borderLeft:{themeKey:"borders",transform:Bi},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ph},color:{themeKey:"palette",transform:Ya},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ya},backgroundColor:{themeKey:"palette",transform:Ya},p:{style:jt},pt:{style:jt},pr:{style:jt},pb:{style:jt},pl:{style:jt},px:{style:jt},py:{style:jt},padding:{style:jt},paddingTop:{style:jt},paddingRight:{style:jt},paddingBottom:{style:jt},paddingLeft:{style:jt},paddingX:{style:jt},paddingY:{style:jt},paddingInline:{style:jt},paddingInlineStart:{style:jt},paddingInlineEnd:{style:jt},paddingBlock:{style:jt},paddingBlockStart:{style:jt},paddingBlockEnd:{style:jt},m:{style:It},mt:{style:It},mr:{style:It},mb:{style:It},ml:{style:It},mx:{style:It},my:{style:It},margin:{style:It},marginTop:{style:It},marginRight:{style:It},marginBottom:{style:It},marginLeft:{style:It},marginX:{style:It},marginY:{style:It},marginInline:{style:It},marginInlineStart:{style:It},marginInlineEnd:{style:It},marginBlock:{style:It},marginBlockStart:{style:It},marginBlockEnd:{style:It},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:mh},rowGap:{style:vh},columnGap:{style:gh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Or},maxWidth:{style:z0},minWidth:{transform:Or},height:{transform:Or},maxHeight:{transform:Or},minHeight:{transform:Or},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},F0=fI;function dI(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function hI(t,e){return typeof t=="function"?t(e):t}function pI(){function t(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:f,style:h}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const d=dh(i,c)||{};return h?h(s):yo(s,r,v=>{let g=Sd(d,f,v);return v===g&&typeof v=="string"&&(g=Sd(d,f,`${n}${v==="default"?"":Ki(v)}`,v)),l===!1?g:{[l]:g}})}function e(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:F0;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const f=PN(o.breakpoints),h=Object.keys(f);let d=f;return Object.keys(c).forEach(p=>{const v=hI(c[p],o);if(v!=null)if(typeof v=="object")if(s[p])d=pu(d,t(p,v,o,s));else{const g=yo({theme:o},v,C=>({[p]:C}));dI(g,v)?d[p]=e({sx:v,theme:o}):d=pu(d,g)}else d=pu(d,t(p,v,o,s))}),ON(h,d)}return Array.isArray(i)?i.map(a):a(i)}return e}const qS=pI();qS.filterProps=["sx"];const B0=qS,mI=["breakpoints","palette","spacing","shape"];function H0(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=bo(t,mI),a=CN(n),l=DN(i);let c=fo({breakpoints:a,direction:"ltr",components:{},palette:Oe({mode:"light"},r),spacing:l,shape:Oe({},TN,o)},s);return c=e.reduce((f,h)=>fo(f,h),c),c.unstable_sxConfig=Oe({},F0,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(h){return B0({sx:h,theme:this})},c}function gI(t){return Object.keys(t).length===0}function vI(t=null){const e=L.useContext(zS);return!e||gI(e)?t:e}const yI=H0();function _I(t=yI){return vI(t)}const xI=["variant"];function k_(t){return t.length===0}function QS(t){const{variant:e}=t,n=bo(t,xI);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=k_(r)?t[i]:Ki(t[i]):r+=`${k_(r)?i:Ki(i)}${Ki(t[i].toString())}`}),r}const wI=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function bI(t){return Object.keys(t).length===0}function SI(t){return typeof t=="string"&&t.charCodeAt(0)>96}const kI=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,CI=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const o=QS(i.props);r[o]=i.style}),r},EI=(t,e,n,r)=>{var i,o;const{ownerState:s={}}=t,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(c=>{let f=!0;Object.keys(c.props).forEach(h=>{s[h]!==c.props[h]&&t[h]!==c.props[h]&&(f=!1)}),f&&a.push(e[QS(c.props)])}),a};function Af(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const TI=H0();function Hl({defaultTheme:t,theme:e,themeId:n}){return bI(e)?t:e[n]||e}function PI(t={}){const{themeId:e,defaultTheme:n=TI,rootShouldForwardProp:r=Af,slotShouldForwardProp:i=Af}=t,o=s=>B0(Oe({},s,{theme:Hl(Oe({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{bN(s,E=>E.filter(P=>!(P!=null&&P.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:f,skipSx:h,overridesResolver:d}=a,p=bo(a,wI),v=f!==void 0?f:c&&c!=="Root"||!1,g=h||!1;let C,_=Af;c==="Root"?_=r:c?_=i:SI(s)&&(_=void 0);const y=wN(s,Oe({shouldForwardProp:_,label:C},p)),b=(E,...P)=>{const O=P?P.map(I=>typeof I=="function"&&I.__emotion_real!==I?W=>I(Oe({},W,{theme:Hl(Oe({},W,{defaultTheme:n,themeId:e}))})):I):[];let T=E;l&&d&&O.push(I=>{const W=Hl(Oe({},I,{defaultTheme:n,themeId:e})),F=kI(l,W);if(F){const re={};return Object.entries(F).forEach(([ee,ne])=>{re[ee]=typeof ne=="function"?ne(Oe({},I,{theme:W})):ne}),d(I,re)}return null}),l&&!v&&O.push(I=>{const W=Hl(Oe({},I,{defaultTheme:n,themeId:e}));return EI(I,CI(l,W),W,l)}),g||O.push(o);const j=O.length-P.length;if(Array.isArray(E)&&j>0){const I=new Array(j).fill("");T=[...E,...I],T.raw=[...E.raw,...I]}else typeof E=="function"&&E.__emotion_real!==E&&(T=I=>E(Oe({},I,{theme:Hl(Oe({},I,{defaultTheme:n,themeId:e}))})));const R=y(T,...O);return s.muiName&&(R.muiName=s.muiName),R};return y.withConfig&&(b.withConfig=y.withConfig),b}}function OI(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:WS(e.components[n].defaultProps,r)}function AI({props:t,name:e,defaultTheme:n,themeId:r}){let i=_I(n);return r&&(i=i[r]||i),OI({theme:i,name:e,props:t})}function ZS(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function NI(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function hl(t){if(t.type)return t;if(t.charAt(0)==="#")return hl(NI(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(dl(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(dl(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function U0(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function II(t){t=hl(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(c,f=(c+n/30)%12)=>i-o*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),U0({type:a,values:l})}function C_(t){t=hl(t);let e=t.type==="hsl"||t.type==="hsla"?hl(II(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function jI(t,e){const n=C_(t),r=C_(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function RI(t,e){if(t=hl(t),e=ZS(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return U0(t)}function MI(t,e){if(t=hl(t),e=ZS(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return U0(t)}function DI(t,e){return Oe({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const LI={black:"#000",white:"#fff"},Qu=LI,$I={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},zI=$I,FI={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},ca=FI,BI={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},fa=BI,HI={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ul=HI,UI={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},da=UI,WI={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ha=WI,VI={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},pa=VI,YI=["mode","contrastThreshold","tonalOffset"],E_={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Qu.white,default:Qu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},yp={text:{primary:Qu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Qu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T_(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=MI(t.main,i):e==="dark"&&(t.dark=RI(t.main,o)))}function KI(t="light"){return t==="dark"?{main:da[200],light:da[50],dark:da[400]}:{main:da[700],light:da[400],dark:da[800]}}function XI(t="light"){return t==="dark"?{main:ca[200],light:ca[50],dark:ca[400]}:{main:ca[500],light:ca[300],dark:ca[700]}}function GI(t="light"){return t==="dark"?{main:fa[500],light:fa[300],dark:fa[700]}:{main:fa[700],light:fa[400],dark:fa[800]}}function qI(t="light"){return t==="dark"?{main:ha[400],light:ha[300],dark:ha[700]}:{main:ha[700],light:ha[500],dark:ha[900]}}function QI(t="light"){return t==="dark"?{main:pa[400],light:pa[300],dark:pa[700]}:{main:pa[800],light:pa[500],dark:pa[900]}}function ZI(t="light"){return t==="dark"?{main:Ul[400],light:Ul[300],dark:Ul[700]}:{main:"#ed6c02",light:Ul[500],dark:Ul[900]}}function JI(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=bo(t,YI),o=t.primary||KI(e),s=t.secondary||XI(e),a=t.error||GI(e),l=t.info||qI(e),c=t.success||QI(e),f=t.warning||ZI(e);function h(g){return jI(g,yp.text.primary)>=n?yp.text.primary:E_.text.primary}const d=({color:g,name:C,mainShade:_=500,lightShade:y=300,darkShade:b=700})=>{if(g=Oe({},g),!g.main&&g[_]&&(g.main=g[_]),!g.hasOwnProperty("main"))throw new Error(dl(11,C?` (${C})`:"",_));if(typeof g.main!="string")throw new Error(dl(12,C?` (${C})`:"",JSON.stringify(g.main)));return T_(g,"light",y,r),T_(g,"dark",b,r),g.contrastText||(g.contrastText=h(g.main)),g},p={dark:yp,light:E_};return fo(Oe({common:Oe({},Qu),mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:f,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:zI,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},p[e]),i)}const e4=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function t4(t){return Math.round(t*1e5)/1e5}const P_={textTransform:"uppercase"},O_='"Roboto", "Helvetica", "Arial", sans-serif';function n4(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=O_,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:f,pxToRem:h}=n,d=bo(n,e4),p=i/14,v=h||(_=>`${_/c*p}rem`),g=(_,y,b,E,P)=>Oe({fontFamily:r,fontWeight:_,fontSize:v(y),lineHeight:b},r===O_?{letterSpacing:`${t4(E/y)}em`}:{},P,f),C={h1:g(o,96,1.167,-1.5),h2:g(o,60,1.2,-.5),h3:g(s,48,1.167,0),h4:g(s,34,1.235,.25),h5:g(s,24,1.334,0),h6:g(a,20,1.6,.15),subtitle1:g(s,16,1.75,.15),subtitle2:g(a,14,1.57,.1),body1:g(s,16,1.5,.15),body2:g(s,14,1.43,.15),button:g(a,14,1.75,.4,P_),caption:g(s,12,1.66,.4),overline:g(s,12,2.66,1,P_),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return fo(Oe({htmlFontSize:c,pxToRem:v,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},C),d,{clone:!1})}const r4=.2,i4=.14,o4=.12;function yt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${r4})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${i4})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${o4})`].join(",")}const s4=["none",yt(0,2,1,-1,0,1,1,0,0,1,3,0),yt(0,3,1,-2,0,2,2,0,0,1,5,0),yt(0,3,3,-2,0,3,4,0,0,1,8,0),yt(0,2,4,-1,0,4,5,0,0,1,10,0),yt(0,3,5,-1,0,5,8,0,0,1,14,0),yt(0,3,5,-1,0,6,10,0,0,1,18,0),yt(0,4,5,-2,0,7,10,1,0,2,16,1),yt(0,5,5,-3,0,8,10,1,0,3,14,2),yt(0,5,6,-3,0,9,12,1,0,3,16,2),yt(0,6,6,-3,0,10,14,1,0,4,18,3),yt(0,6,7,-4,0,11,15,1,0,4,20,3),yt(0,7,8,-4,0,12,17,2,0,5,22,4),yt(0,7,8,-4,0,13,19,2,0,5,24,4),yt(0,7,9,-4,0,14,21,2,0,5,26,4),yt(0,8,9,-5,0,15,22,2,0,6,28,5),yt(0,8,10,-5,0,16,24,2,0,6,30,5),yt(0,8,11,-5,0,17,26,2,0,6,32,5),yt(0,9,11,-5,0,18,28,2,0,7,34,6),yt(0,9,12,-6,0,19,29,2,0,7,36,6),yt(0,10,13,-6,0,20,31,3,0,8,38,7),yt(0,10,13,-6,0,21,33,3,0,8,40,7),yt(0,10,14,-6,0,22,35,3,0,8,42,7),yt(0,11,14,-7,0,23,36,3,0,9,44,8),yt(0,11,15,-7,0,24,38,3,0,9,46,8)],a4=s4,l4=["duration","easing","delay"],u4={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},c4={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function A_(t){return`${Math.round(t)}ms`}function f4(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function d4(t){const e=Oe({},u4,t.easing),n=Oe({},c4,t.duration);return Oe({getAutoHeightDuration:f4,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return bo(o,l4),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof s=="string"?s:A_(s)} ${a} ${typeof l=="string"?l:A_(l)}`).join(",")}},t,{easing:e,duration:n})}const h4={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},p4=h4,m4=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function g4(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=bo(t,m4);if(t.vars)throw new Error(dl(18));const a=JI(r),l=H0(t);let c=fo(l,{mixins:DI(l.breakpoints,n),palette:a,shadows:a4.slice(),typography:n4(a,o),transitions:d4(i),zIndex:Oe({},p4)});return c=fo(c,s),c=e.reduce((f,h)=>fo(f,h),c),c.unstable_sxConfig=Oe({},F0,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(h){return B0({sx:h,theme:this})},c}const v4=g4(),JS=v4,e2="$$material";function y4({props:t,name:e}){return AI({props:t,name:e,defaultTheme:JS,themeId:e2})}const _4=t=>Af(t)&&t!=="classes",x4=PI({themeId:e2,defaultTheme:JS,rootShouldForwardProp:_4}),w4=x4;function b4(t){return YS("MuiSvgIcon",t)}pN("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const S4=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],k4=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Ki(e)}`,`fontSize${Ki(n)}`]};return cN(i,b4,r)},C4=w4("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Ki(n.color)}`],e[`fontSize${Ki(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,c,f,h,d,p,v,g,C,_,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=t.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((f=t.typography)==null||(h=f.pxToRem)==null?void 0:h.call(f,35))||"2.1875rem"}[e.fontSize],color:(d=(p=(t.vars||t).palette)==null||(v=p[e.color])==null?void 0:v.main)!=null?d:{action:(g=(t.vars||t).palette)==null||(C=g.action)==null?void 0:C.active,disabled:(_=(t.vars||t).palette)==null||(y=_.action)==null?void 0:y.disabled,inherit:void 0}[e.color]}}),t2=L.forwardRef(function(e,n){const r=y4({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:f=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,p=bo(r,S4),v=L.isValidElement(i)&&i.type==="svg",g=Oe({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:d,hasSvgAsChild:v}),C={};f||(C.viewBox=d);const _=k4(g);return x.jsxs(C4,Oe({as:a,className:mN(_.root,o),focusable:"false",color:c,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},C,p,v&&i.props,{ownerState:g,children:[v?i.props.children:i,h?x.jsx("title",{children:h}):null]}))});t2.muiName="SvgIcon";const N_=t2;function E4(t,e){function n(r,i){return x.jsx(N_,Oe({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=N_.muiName,L.memo(L.forwardRef(n))}const T4={configure:t=>{VS.configure(t)}},P4=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ki,createChainedFunction:W3,createSvgIcon:E4,debounce:V3,deprecatedPropType:Y3,isMuiElement:K3,ownerDocument:BS,ownerWindow:X3,requirePropFactory:G3,setRef:HS,unstable_ClassNameGenerator:T4,unstable_useEnhancedEffect:US,unstable_useId:Z3,unsupportedProp:J3,useControlled:eN,useEventCallback:tN,useForkRef:nN,useIsFocusVisible:uN},Symbol.toStringTag,{value:"Module"}));function no(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pl={duration:.5,overwrite:!1,delay:0},W0,Mn,Mt,ti=1e8,rt=1/ti,Xm=Math.PI*2,O4=Xm/4,A4=0,r2=Math.sqrt,N4=Math.cos,I4=Math.sin,_n=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},_o=function(e){return typeof e=="number"},V0=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},dr=function(e){return e!==!1},Y0=function(){return typeof window<"u"},Qc=function(e){return Dt(e)||_n(e)},i2=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Gm=/(?:-?\.?\d|\.)+/gi,o2=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_p=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,s2=/[+-]=-?[.\d]+/,a2=/[^,'"\[\]\s]+/gi,j4=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,Kr,qm,K0,Lr={},kd={},l2,u2=function(e){return(kd=qs(e,Lr))&&gr},X0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Cd=function(e,n){return!n&&console.warn(e)},c2=function(e,n){return e&&(Lr[e]=n)&&kd&&(kd[e]=n)||Lr},Zu=function(){return 0},R4={suppressEvents:!0,isStart:!0,kill:!1},Nf={suppressEvents:!0,kill:!1},M4={suppressEvents:!0},G0={},Zo=[],Qm={},f2,Er={},xp={},I_=30,If=[],q0="",Q0=function(e){var n=e[0],r,i;if(qi(n)||Dt(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=If.length;i--&&!If[i].targetTest(n););r=If[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new M2(e[i],r)))||e.splice(i,1);return e},Ds=function(e){return e._gsap||Q0(ni(e))[0]._gsap},d2=function(e,n,r){return(r=e[n])&&Dt(r)?e[n]():V0(r)&&e.getAttribute&&e.getAttribute(n)||r},hr=function(e,n){return(e=e.split(",")).forEach(n)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Sn=function(e){return Math.round(e*1e7)/1e7||0},Ka=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},D4=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},Ed=function(){var e=Zo.length,n=Zo.slice(0),r,i;for(Qm={},Zo.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},h2=function(e,n,r,i){Zo.length&&!Mn&&Ed(),e.render(n,r,i||Mn&&n<0&&(e._initted||e._startAt)),Zo.length&&!Mn&&Ed()},p2=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(a2).length<2?n:_n(e)?e.trim():e},m2=function(e){return e},ui=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},L4=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},qs=function(e,n){for(var r in n)e[r]=n[r];return e},j_=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=qi(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Td=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},mu=function(e){var n=e.parent||St,r=e.keyframes?L4(Dn(e.keyframes)):ui;if(dr(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},$4=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},g2=function(e,n,r,i,o){r===void 0&&(r="_first"),i===void 0&&(i="_last");var s=e[i],a;if(o)for(a=n[o];s&&s[o]>a;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=s,n.parent=n._dp=e,n},yh=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=n._prev,s=n._next;o?o._next=s:e[r]===n&&(e[r]=s),s?s._prev=o:e[i]===n&&(e[i]=o),n._next=n._prev=n.parent=null},rs=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ls=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},z4=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Zm=function(e,n,r,i){return e._startAt&&(Mn?e._startAt.revert(Nf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},F4=function t(e){return!e||e._ts&&t(e.parent)},R_=function(e){return e._repeat?ml(e._tTime,e=e.duration()+e._rDelay)*e:0},ml=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},Pd=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},_h=function(e){return e._end=Sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},xh=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Sn(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),_h(e),r._dirty||Ls(r,e)),e},v2=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=Pd(e.rawTime(),n),(!n._dur||gc(0,n.totalDuration(),r)-n._tTime>rt)&&n.render(r,!0)),Ls(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-rt}},Hi=function(e,n,r,i){return n.parent&&rs(n),n._start=Sn((_o(r)?r:r||e!==St?Yr(e,r,n):e._time)+n._delay),n._end=Sn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),g2(e,n,"_first","_last",e._sort?"_start":0),Jm(n)||(e._recent=n),i||v2(e,n),e._ts<0&&xh(e,e._tTime),e},y2=function(e,n){return(Lr.ScrollTrigger||X0("scrollTrigger",n))&&Lr.ScrollTrigger.create(n,e)},_2=function(e,n,r,i,o){if(J0(e,n,o),!e._initted)return 1;if(!r&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&f2!==Ar.frame)return Zo.push(e),e._lazy=[o,i],1},B4=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Jm=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},H4=function(e,n,r,i){var o=e.ratio,s=n<0||!n&&(!e._start&&B4(e)&&!(!e._initted&&Jm(e))||(e._ts<0||e._dp._ts<0)&&!Jm(e))?0:1,a=e._rDelay,l=0,c,f,h;if(a&&e._repeat&&(l=gc(0,e._tDur,n),f=ml(l,a),e._yoyo&&f&1&&(s=1-s),f!==ml(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Mn||i||e._zTime===rt||!n&&e._zTime){if(!e._initted&&_2(e,n,i,r,l))return;for(h=e._zTime,e._zTime=n||(r?rt:0),r||(r=n&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;n<0&&Zm(e,n,r,!0),e._onUpdate&&!r&&ri(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&ri(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&rs(e,1),!r&&!Mn&&(ri(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},U4=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},gl=function(e,n,r,i){var o=e._repeat,s=Sn(n)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Sn(s*(o+1)+e._rDelay*o):s,a>0&&!i&&xh(e,e._tTime=e._tDur*a),e.parent&&_h(e),r||Ls(e.parent,e),e},M_=function(e){return e instanceof ar?Ls(e):gl(e,e._dur)},W4={_start:0,endTime:Zu,totalDuration:Zu},Yr=function t(e,n,r){var i=e.labels,o=e._recent||W4,s=e.duration()>=ti?o.endTime(!1):e._dur,a,l,c;return _n(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),c=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(a<0?o:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=s),i[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),c&&r&&(l=l/100*(Dn(r)?r[0]:r).totalDuration()),a>1?t(e,n.substr(0,a-1),r)+l:s+l)):n==null?s:+n},gu=function(e,n,r){var i=_o(n[1]),o=(i?2:1)+(e<2?0:1),s=n[o],a,l;if(i&&(s.duration=n[1]),s.parent=r,e){for(a=s,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dr(l.vars.inherit)&&l.parent;s.immediateRender=dr(a.immediateRender),e<2?s.runBackwards=1:s.startAt=n[o-1]}return new Gt(n[0],s,n[o+1])},fs=function(e,n){return e||e===0?n(e):n},gc=function(e,n,r){return r<e?e:r>n?n:r},Rn=function(e,n){return!_n(e)||!(n=j4.exec(e))?"":n[1]},V4=function(e,n,r){return fs(r,function(i){return gc(e,n,i)})},eg=[].slice,x2=function(e,n){return e&&qi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Kr},Y4=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return _n(i)&&!n||x2(i,1)?(o=r).push.apply(o,ni(i)):r.push(i)})||r},ni=function(e,n,r){return Mt&&!n&&Mt.selector?Mt.selector(e):_n(e)&&!r&&(qm||!vl())?eg.call((n||K0).querySelectorAll(e),0):Dn(e)?Y4(e,r):x2(e)?eg.call(e,0):e?[e]:[]},tg=function(e){return e=ni(e)[0]||Cd("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return ni(n,r.querySelectorAll?r:r===e?Cd("Invalid scope")||K0.createElement("div"):e)}},w2=function(e){return e.sort(function(){return .5-Math.random()})},b2=function(e){if(Dt(e))return e;var n=qi(e)?e:{each:e},r=$s(n.ease),i=n.from||0,o=parseFloat(n.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=n.axis,f=i,h=i;return _n(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(f=i[0],h=i[1]),function(d,p,v){var g=(v||n).length,C=s[g],_,y,b,E,P,O,T,j,R;if(!C){if(R=n.grid==="auto"?0:(n.grid||[1,ti])[1],!R){for(T=-ti;T<(T=v[R++].getBoundingClientRect().left)&&R<g;);R--}for(C=s[g]=[],_=l?Math.min(R,g)*f-.5:i%R,y=R===ti?0:l?g*h/R-.5:i/R|0,T=0,j=ti,O=0;O<g;O++)b=O%R-_,E=y-(O/R|0),C[O]=P=c?Math.abs(c==="y"?E:b):r2(b*b+E*E),P>T&&(T=P),P<j&&(j=P);i==="random"&&w2(C),C.max=T-j,C.min=j,C.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(R>g?g-1:c?c==="y"?g/R:R:Math.max(R,g/R))||0)*(i==="edges"?-1:1),C.b=g<0?o-g:o,C.u=Rn(n.amount||n.each)||0,r=r&&g<0?I2(r):r}return g=(C[d]-C.min)/C.max||0,Sn(C.b+(r?r(g):g)*C.v)+C.u}},ng=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=Sn(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(_o(r)?0:Rn(r))}},S2=function(e,n){var r=Dn(e),i,o;return!r&&qi(e)&&(i=r=e.radius||ti,e.values?(e=ni(e.values),(o=!_o(e[0]))&&(i*=i)):e=ng(e.increment)),fs(n,r?Dt(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=ti,f=0,h=e.length,d,p;h--;)o?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<c&&(c=d,f=h);return f=!i||c<=i?e[f]:s,o||f===s||_o(s)?f:f+Rn(s)}:ng(e))},k2=function(e,n,r,i){return fs(Dn(e)?!n:r===!0?!!(r=0):!i,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},K4=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,s){return s(o)},i)}},X4=function(e,n){return function(r){return e(parseFloat(r))+(n||Rn(r))}},G4=function(e,n,r){return E2(e,n,0,1,r)},C2=function(e,n,r){return fs(r,function(i){return e[~~n(i)]})},q4=function t(e,n,r){var i=n-e;return Dn(e)?C2(e,t(0,e.length),n):fs(r,function(o){return(i+(o-e)%i)%i+e})},Q4=function t(e,n,r){var i=n-e,o=i*2;return Dn(e)?C2(e,t(0,e.length-1),n):fs(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},Ju=function(e){for(var n=0,r="",i,o,s,a;~(i=e.indexOf("random(",n));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(a?a2:Gm),r+=e.substr(n,i-n)+k2(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),n=s+1;return r+e.substr(n,e.length-n)},E2=function(e,n,r,i,o){var s=n-e,a=i-r;return fs(o,function(l){return r+((l-e)/s*a||0)})},Z4=function t(e,n,r,i){var o=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!o){var s=_n(e),a={},l,c,f,h,d;if(r===!0&&(i=1)&&(r=null),s)e={p:e},n={p:n};else if(Dn(e)&&!Dn(n)){for(f=[],h=e.length,d=h-2,c=1;c<h;c++)f.push(t(e[c-1],e[c]));h--,o=function(v){v*=h;var g=Math.min(d,~~v);return f[g](v-g)},r=n}else i||(e=qs(Dn(e)?[]:{},e));if(!f){for(l in n)Z0.call(a,e,l,"get",n[l]);o=function(v){return nv(v,a)||(s?e.p:e)}}}return fs(r,o)},D_=function(e,n,r){var i=e.labels,o=ti,s,a,l;for(s in i)a=i[s]-n,a<0==!!r&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ri=function(e,n,r){var i=e.vars,o=i[n],s=Mt,a=e._ctx,l,c,f;if(o)return l=i[n+"Params"],c=i.callbackScope||e,r&&Zo.length&&Ed(),a&&(Mt=a),f=l?o.apply(c,l):o.call(c),Mt=s,f},Zl=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&ri(e,"onInterrupt"),e},Da,T2=[],P2=function(e){if(Y0()&&e){e=!e.name&&e.default||e;var n=e.name,r=Dt(e),i=n&&!r&&e.init?function(){this._props=[]}:e,o={init:Zu,render:nv,add:Z0,kill:pj,modifier:hj,rawVars:0},s={targetTest:0,get:0,getSetter:tv,aliases:{},register:0};if(vl(),e!==i){if(Er[n])return;ui(i,ui(Td(e,o),s)),qs(i.prototype,qs(o,Td(e,s))),Er[i.prop=n]=i,e.targetTest&&(If.push(i),G0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}c2(n,i),e.register&&e.register(gr,i,pr)}else e&&T2.push(e)},nt=255,Jl={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},wp=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*nt+.5|0},O2=function(e,n,r){var i=e?_o(e)?[e>>16,e>>8&nt,e&nt]:0:Jl.black,o,s,a,l,c,f,h,d,p,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Jl[e])i=Jl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(Gm),!n)l=+i[0]%360/360,c=+i[1]/100,f=+i[2]/100,s=f<=.5?f*(c+1):f+c-f*c,o=f*2-s,i.length>3&&(i[3]*=1),i[0]=wp(l+1/3,o,s),i[1]=wp(l,o,s),i[2]=wp(l-1/3,o,s);else if(~e.indexOf("="))return i=e.match(o2),r&&i.length<4&&(i[3]=1),i}else i=e.match(Gm)||Jl.transparent;i=i.map(Number)}return n&&!v&&(o=i[0]/nt,s=i[1]/nt,a=i[2]/nt,h=Math.max(o,s,a),d=Math.min(o,s,a),f=(h+d)/2,h===d?l=c=0:(p=h-d,c=f>.5?p/(2-h-d):p/(h+d),l=h===o?(s-a)/p+(s<a?6:0):h===s?(a-o)/p+2:(o-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(f*100+.5)),r&&i.length<4&&(i[3]=1),i},A2=function(e){var n=[],r=[],i=-1;return e.split(Jo).forEach(function(o){var s=o.match(Ma)||[];n.push.apply(n,s),r.push(i+=s.length+1)}),n.c=r,n},L_=function(e,n,r){var i="",o=(e+i).match(Jo),s=n?"hsla(":"rgba(",a=0,l,c,f,h;if(!o)return e;if(o=o.map(function(d){return(d=O2(d,n,1))&&s+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(f=A2(e),l=r.c,l.join(i)!==f.c.join(i)))for(c=e.replace(Jo,"1").split(Ma),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(f.length?f:o.length?o:r).shift());if(!c)for(c=e.split(Jo),h=c.length-1;a<h;a++)i+=c[a]+o[a];return i+c[h]},Jo=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Jl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),J4=/hsl[a]?\(/,N2=function(e){var n=e.join(" "),r;if(Jo.lastIndex=0,Jo.test(n))return r=J4.test(n),e[1]=L_(e[1],r),e[0]=L_(e[0],r,A2(e[1])),!0},ec,Ar=function(){var t=Date.now,e=500,n=33,r=t(),i=r,o=1e3/240,s=o,a=[],l,c,f,h,d,p,v=function g(C){var _=t()-i,y=C===!0,b,E,P,O;if(_>e&&(r+=_-n),i+=_,P=i-r,b=P-s,(b>0||y)&&(O=++h.frame,d=P-h.time*1e3,h.time=P=P/1e3,s+=b+(b>=o?4:o-b),E=1),y||(l=c(g)),E)for(p=0;p<a.length;p++)a[p](P,d,O,C)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(C){return d/(1e3/(C||60))},wake:function(){l2&&(!qm&&Y0()&&(Kr=qm=window,K0=Kr.document||{},Lr.gsap=gr,(Kr.gsapVersions||(Kr.gsapVersions=[])).push(gr.version),u2(kd||Kr.GreenSockGlobals||!Kr.gsap&&Kr||{}),f=Kr.requestAnimationFrame,T2.forEach(P2)),l&&h.sleep(),c=f||function(C){return setTimeout(C,s-h.time*1e3+1|0)},ec=1,v(2))},sleep:function(){(f?Kr.cancelAnimationFrame:clearTimeout)(l),ec=0,c=Zu},lagSmoothing:function(C,_){e=C||1/0,n=Math.min(_||33,e)},fps:function(C){o=1e3/(C||240),s=h.time*1e3+o},add:function(C,_,y){var b=_?function(E,P,O,T){C(E,P,O,T),h.remove(b)}:C;return h.remove(C),a[y?"unshift":"push"](b),vl(),b},remove:function(C,_){~(_=a.indexOf(C))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),vl=function(){return!ec&&Ar.wake()},Re={},ej=/^[\d.\-M][\d.\-,\s]/,tj=/["']/g,nj=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,a,l,c;o<s;o++)l=r[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),n[i]=isNaN(c)?c.replace(tj,"").trim():+c,i=l.substr(a+1).trim();return n},rj=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},ij=function(e){var n=(e+"").split("("),r=Re[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[nj(n[1])]:rj(e).split(",").map(p2)):Re._CE&&ej.test(e)?Re._CE("",e):r},I2=function(e){return function(n){return 1-e(1-n)}},j2=function t(e,n){for(var r=e._first,i;r;)r instanceof ar?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},$s=function(e,n){return e&&(Dt(e)?e:Re[e]||ij(e))||n},ia=function(e,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var o={easeIn:n,easeOut:r,easeInOut:i},s;return hr(e,function(a){Re[a]=Lr[a]=o,Re[s=a.toLowerCase()]=r;for(var l in o)Re[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Re[a+"."+l]=o[l]}),o},R2=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},bp=function t(e,n,r){var i=n>=1?n:1,o=(r||(e?.3:.45))/(n<1?n:1),s=o/Xm*(Math.asin(1/i)||0),a=function(f){return f===1?1:i*Math.pow(2,-10*f)*I4((f-s)*o)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:R2(a);return o=Xm/o,l.config=function(c,f){return t(e,c,f)},l},Sp=function t(e,n){n===void 0&&(n=1.70158);var r=function(s){return s?--s*s*((n+1)*s+n)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:R2(r);return i.config=function(o){return t(e,o)},i};hr("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;ia(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});Re.Linear.easeNone=Re.none=Re.Linear.easeIn;ia("Elastic",bp("in"),bp("out"),bp());(function(t,e){var n=1/e,r=2*n,i=2.5*n,o=function(a){return a<n?t*a*a:a<r?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};ia("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);ia("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});ia("Circ",function(t){return-(r2(1-t*t)-1)});ia("Sine",function(t){return t===1?1:-N4(t*O4)+1});ia("Back",Sp("in"),Sp("out"),Sp());Re.SteppedEase=Re.steps=Lr.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),o=n?1:0,s=1-rt;return function(a){return((i*gc(0,s,a)|0)+o)*r}}};pl.ease=Re["quad.out"];hr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return q0+=t+","+t+"Params,"});var M2=function(e,n){this.id=A4++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:d2,this.set=n?n.getSetter:tv},tc=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,gl(this,+n.duration,1,1),this.data=n.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),ec||Ar.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,gl(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(vl(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(xh(this,r),!o._dp||o.parent||v2(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===rt||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),h2(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+R_(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+R_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?ml(this._tTime,o)+1:1},e.timeScale=function(r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===r)return this;var i=this.parent&&this._ts?Pd(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-rt?0:this._rts,this.totalTime(gc(-Math.abs(this._delay),this._tDur,i),!0),_h(this),z4(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(dr(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pd(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=M4);var i=Mn;return Mn=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,M_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,M_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(Yr(this,r),dr(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,dr(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-rt)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=Dt(r)?r:m2,a=function(){var c=i.then;i.then=null,Dt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Zl(this)},t}();ui(tc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var ar=function(t){n2(e,t);function e(r,i){var o;return r===void 0&&(r={}),o=t.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=dr(r.sortChildren),St&&Hi(r.parent||St,no(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&y2(no(o),r.scrollTrigger),o}var n=e.prototype;return n.to=function(i,o,s){return gu(0,arguments,this),this},n.from=function(i,o,s){return gu(1,arguments,this),this},n.fromTo=function(i,o,s,a){return gu(2,arguments,this),this},n.set=function(i,o,s){return o.duration=0,o.parent=this,mu(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Gt(i,o,Yr(this,s),1),this},n.call=function(i,o,s){return Hi(this,Gt.delayedCall(0,i,o),s)},n.staggerTo=function(i,o,s,a,l,c,f){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=f,s.parent=this,new Gt(i,s,Yr(this,l)),this},n.staggerFrom=function(i,o,s,a,l,c,f){return s.runBackwards=1,mu(s).immediateRender=dr(s.immediateRender),this.staggerTo(i,o,s,a,l,c,f)},n.staggerFromTo=function(i,o,s,a,l,c,f,h){return a.startAt=s,mu(a).immediateRender=dr(a.immediateRender),this.staggerTo(i,o,a,l,c,f,h)},n.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=i<=0?0:Sn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,v,g,C,_,y,b,E,P,O,T;if(this!==St&&f>l&&i>=0&&(f=l),f!==this._tTime||s||h){if(a!==this._time&&c&&(f+=this._time-a,i+=this._time-a),d=f,E=this._start,b=this._ts,_=!b,h&&(c||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(O=this._yoyo,C=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(C*100+i,o,s);if(d=Sn(f%C),f===l?(g=this._repeat,d=c):(g=~~(f/C),g&&g===f/C&&(d=c,g--),d>c&&(d=c)),P=ml(this._tTime,C),!a&&this._tTime&&P!==g&&this._tTime-P*C-this._dur<=0&&(P=g),O&&g&1&&(d=c-d,T=1),g!==P&&!this._lock){var j=O&&P&1,R=j===(O&&g&1);if(g<P&&(j=!j),a=j?0:f%c?c:f,this._lock=1,this.render(a||(T?0:Sn(g*C)),o,!c)._lock=0,this._tTime=f,!o&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=j?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;j2(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=U4(this,Sn(a),Sn(d)),y&&(f-=d-(d=y._start))),this._tTime=f,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!o&&!g&&(ri(this,"onStart"),this._tTime!==f))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(v=p._next,(p._act||d>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,o,s);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,o,s),d!==this._time||!this._ts&&!_){y=0,v&&(f+=this._zTime=-rt);break}}p=v}else{p=this._last;for(var I=i<0?i:d;p;){if(v=p._prev,(p._act||I<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,o,s);if(p.render(p._ts>0?(I-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(I-p._start)*p._ts,o,s||Mn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){y=0,v&&(f+=this._zTime=I?-rt:rt);break}}p=v}}if(y&&!o&&(this.pause(),y.render(d>=a?0:-rt)._zTime=d>=a?1:-1,this._ts))return this._start=E,_h(this),this.render(i,o,s);this._onUpdate&&!o&&ri(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(E===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(f===l&&this._ts>0||!f&&this._ts<0)&&rs(this,1),!o&&!(i<0&&!a)&&(f||a||!l)&&(ri(this,f===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,o){var s=this;if(_o(o)||(o=Yr(this,o,i)),!(i instanceof tc)){if(Dn(i))return i.forEach(function(a){return s.add(a,o)}),this;if(_n(i))return this.addLabel(i,o);if(Dt(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Hi(this,i,o):this},n.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Gt?o&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},n.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},n.remove=function(i){return _n(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(yh(this,i),i===this._recent&&(this._recent=this._last),Ls(this))},n.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Sn(Ar.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},n.addLabel=function(i,o){return this.labels[i]=Yr(this,o),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,o,s){var a=Gt.delayedCall(0,o||Zu,s);return a.data="isPause",this._hasPause=1,Hi(this,a,Yr(this,i))},n.removePause=function(i){var o=this._first;for(i=Yr(this,i);o;)o._start===i&&o.data==="isPause"&&rs(o),o=o._next},n.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Lo!==a[l]&&a[l].kill(i,o);return this},n.getTweensOf=function(i,o){for(var s=[],a=ni(i),l=this._first,c=_o(o),f;l;)l instanceof Gt?D4(l._targets,a)&&(c?(!Lo||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(f=l.getTweensOf(a,o)).length&&s.push.apply(s,f),l=l._next;return s},n.tweenTo=function(i,o){o=o||{};var s=this,a=Yr(s,i),l=o,c=l.startAt,f=l.onStart,h=l.onStartParams,d=l.immediateRender,p,v=Gt.to(s,ui({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||rt,onStart:function(){if(s.pause(),!p){var C=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==C&&gl(v,C,0,1).render(v._time,!0,!0),p=1}f&&f.apply(v,h||[])}},o));return d?v.render(0):v},n.tweenFromTo=function(i,o,s){return this.tweenTo(o,ui({startAt:{time:Yr(this,i)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),D_(this,Yr(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),D_(this,Yr(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+rt)},n.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=i);return Ls(this)},n.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ls(this)},n.totalDuration=function(i){var o=0,s=this,a=s._last,l=ti,c,f,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Hi(s,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(o-=f,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=f/s._ts,s._time-=f,s._tTime-=f),s.shiftChildren(-f,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;gl(s,s===St&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(St._ts&&(h2(St,Pd(i,St)),f2=Ar.frame),Ar.frame>=I_){I_+=Mr.autoSleep||120;var o=St._first;if((!o||!o._ts)&&Mr.autoSleep&&Ar._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Ar.sleep()}}},e}(tc);ui(ar.prototype,{_lock:0,_hasPause:0,_forcing:0});var oj=function(e,n,r,i,o,s,a){var l=new pr(this._pt,e,n,0,1,B2,null,o),c=0,f=0,h,d,p,v,g,C,_,y;for(l.b=r,l.e=i,r+="",i+="",(_=~i.indexOf("random("))&&(i=Ju(i)),s&&(y=[r,i],s(y,e,n),r=y[0],i=y[1]),d=r.match(_p)||[];h=_p.exec(i);)v=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),v!==d[f++]&&(C=parseFloat(d[f-1])||0,l._pt={_next:l._pt,p:g||f===1?g:",",s:C,c:v.charAt(1)==="="?Ka(C,v)-C:parseFloat(v)-C,m:p&&p<4?Math.round:0},c=_p.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(s2.test(i)||_)&&(l.e=0),this._pt=l,l},Z0=function(e,n,r,i,o,s,a,l,c,f){Dt(i)&&(i=i(o||0,e,s));var h=e[n],d=r!=="get"?r:Dt(h)?c?e[n.indexOf("set")||!Dt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():h,p=Dt(h)?c?cj:z2:ev,v;if(_n(i)&&(~i.indexOf("random(")&&(i=Ju(i)),i.charAt(1)==="="&&(v=Ka(d,i)+(Rn(d)||0),(v||v===0)&&(i=v))),!f||d!==i||rg)return!isNaN(d*i)&&i!==""?(v=new pr(this._pt,e,n,+d||0,i-(d||0),typeof h=="boolean"?dj:F2,0,p),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!h&&!(n in e)&&X0(n,i),oj.call(this,e,n,d,i,p,l||Mr.stringFilter,c))},sj=function(e,n,r,i,o){if(Dt(e)&&(e=vu(e,o,n,r,i)),!qi(e)||e.style&&e.nodeType||Dn(e)||i2(e))return _n(e)?vu(e,o,n,r,i):e;var s={},a;for(a in e)s[a]=vu(e[a],o,n,r,i);return s},D2=function(e,n,r,i,o,s){var a,l,c,f;if(Er[e]&&(a=new Er[e]).init(o,a.rawVars?n[e]:sj(n[e],i,o,s,r),r,i,s)!==!1&&(r._pt=l=new pr(r._pt,o,e,0,1,a.render,a,0,a.priority),r!==Da))for(c=r._ptLookup[r._targets.indexOf(o)],f=a._props.length;f--;)c[a._props[f]]=l;return a},Lo,rg,J0=function t(e,n,r){var i=e.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,f=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,p=i.yoyoEase,v=i.keyframes,g=i.autoRevert,C=e._dur,_=e._startAt,y=e._targets,b=e.parent,E=b&&b.data==="nested"?b.vars.targets:y,P=e._overwrite==="auto"&&!W0,O=e.timeline,T,j,R,I,W,F,re,ee,ne,oe,te,$,H;if(O&&(!v||!o)&&(o="none"),e._ease=$s(o,pl.ease),e._yEase=p?I2($s(p===!0?o:p,pl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!O&&!!i.runBackwards,!O||v&&!i.stagger){if(ee=y[0]?Ds(y[0]).harness:0,$=ee&&i[ee.prop],T=Td(i,G0),_&&(_._zTime<0&&_.progress(1),n<0&&d&&a&&!g?_.render(-1,!0):_.revert(d&&C?Nf:R4),_._lazy=0),s){if(rs(e._startAt=Gt.set(y,ui({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!_&&dr(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:f,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Mn||!a&&!g)&&e._startAt.revert(Nf),a&&C&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(d&&C&&!_){if(n&&(a=!1),R=ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&dr(l),immediateRender:a,stagger:0,parent:b},T),$&&(R[ee.prop]=$),rs(e._startAt=Gt.set(y,R)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Mn?e._startAt.revert(Nf):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,rt,rt);else if(!n)return}for(e._pt=e._ptCache=0,l=C&&dr(l)||l&&!C,j=0;j<y.length;j++){if(W=y[j],re=W._gsap||Q0(y)[j]._gsap,e._ptLookup[j]=oe={},Qm[re.id]&&Zo.length&&Ed(),te=E===y?j:E.indexOf(W),ee&&(ne=new ee).init(W,$||T,e,te,E)!==!1&&(e._pt=I=new pr(e._pt,W,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(S){oe[S]=I}),ne.priority&&(F=1)),!ee||$)for(R in T)Er[R]&&(ne=D2(R,T,e,te,W,E))?ne.priority&&(F=1):oe[R]=I=Z0.call(e,W,R,"get",T[R],te,E,0,i.stringFilter);e._op&&e._op[j]&&e.kill(W,e._op[j]),P&&e._pt&&(Lo=e,St.killTweensOf(W,oe,e.globalTime(n)),H=!e.parent,Lo=0),e._pt&&l&&(Qm[re.id]=1)}F&&H2(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,v&&n<=0&&O.render(ti,!0,!0)},aj=function(e,n,r,i,o,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,f,h,d;if(!l)for(l=e._ptCache[n]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return rg=1,e.vars[n]="+=0",J0(e,a),rg=0,1;l.push(c)}for(d=l.length;d--;)f=l[d],c=f._pt||f,c.s=(i||i===0)&&!o?i:c.s+(i||0)+s*c.c,c.c=r-c.s,f.e&&(f.e=Bt(r)+Rn(f.e)),f.b&&(f.b=c.s+Rn(f.b))},lj=function(e,n){var r=e[0]?Ds(e[0]).harness:0,i=r&&r.aliases,o,s,a,l;if(!i)return n;o=qs({},n);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},uj=function(e,n,r,i){var o=n.ease||i||"power1.inOut",s,a;if(Dn(n))a=r[e]||(r[e]=[]),n.forEach(function(l,c){return a.push({t:c/(n.length-1)*100,v:l,e:o})});else for(s in n)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:n[s],e:o})},vu=function(e,n,r,i,o){return Dt(e)?e.call(n,r,i,o):_n(e)&&~e.indexOf("random(")?Ju(e):e},L2=q0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$2={};hr(L2+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return $2[t]=1});var Gt=function(t){n2(e,t);function e(r,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=t.call(this,s?i:mu(i))||this;var l=a.vars,c=l.duration,f=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,v=l.keyframes,g=l.defaults,C=l.scrollTrigger,_=l.yoyoEase,y=i.parent||St,b=(Dn(r)||i2(r)?_o(r[0]):"length"in i)?[r]:ni(r),E,P,O,T,j,R,I,W;if(a._targets=b.length?Q0(b):Cd("GSAP target "+r+" not found. https://greensock.com",!Mr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||d||Qc(c)||Qc(f)){if(i=a.vars,E=a.timeline=new ar({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:b}),E.kill(),E.parent=E._dp=no(a),E._start=0,d||Qc(c)||Qc(f)){if(T=b.length,I=d&&b2(d),qi(d))for(j in d)~L2.indexOf(j)&&(W||(W={}),W[j]=d[j]);for(P=0;P<T;P++)O=Td(i,$2),O.stagger=0,_&&(O.yoyoEase=_),W&&qs(O,W),R=b[P],O.duration=+vu(c,no(a),P,R,b),O.delay=(+vu(f,no(a),P,R,b)||0)-a._delay,!d&&T===1&&O.delay&&(a._delay=f=O.delay,a._start+=f,O.delay=0),E.to(R,O,I?I(P,R,b):0),E._ease=Re.none;E.duration()?c=f=0:a.timeline=0}else if(v){mu(ui(E.vars.defaults,{ease:"none"})),E._ease=$s(v.ease||i.ease||"none");var F=0,re,ee,ne;if(Dn(v))v.forEach(function(oe){return E.to(b,oe,">")}),E.duration();else{O={};for(j in v)j==="ease"||j==="easeEach"||uj(j,v[j],O,v.easeEach);for(j in O)for(re=O[j].sort(function(oe,te){return oe.t-te.t}),F=0,P=0;P<re.length;P++)ee=re[P],ne={ease:ee.e,duration:(ee.t-(P?re[P-1].t:0))/100*c},ne[j]=ee.v,E.to(b,ne,F),F+=ne.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return p===!0&&!W0&&(Lo=no(a),St.killTweensOf(b),Lo=0),Hi(y,no(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!v&&a._start===Sn(y._time)&&dr(h)&&F4(no(a))&&y.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-f)||0)),C&&y2(no(a),C),a}var n=e.prototype;return n.render=function(i,o,s){var a=this._time,l=this._tDur,c=this._dur,f=i<0,h=i>l-rt&&!f?l:i<rt?0:i,d,p,v,g,C,_,y,b,E;if(!c)H4(this,i,o,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(d=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(g*100+i,o,s);if(d=Sn(h%g),h===l?(v=this._repeat,d=c):(v=~~(h/g),v&&v===h/g&&(d=c,v--),d>c&&(d=c)),_=this._yoyo&&v&1,_&&(E=this._yEase,d=c-d),C=ml(this._tTime,g),d===a&&!s&&this._initted)return this._tTime=h,this;v!==C&&(b&&this._yEase&&j2(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Sn(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(_2(this,f?i:d,s,o,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,o,s)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!o&&!v&&(ri(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;b&&b.render(i<0?i:!d&&_?-rt:b._dur*b._ease(d/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(f&&Zm(this,i,o,s),ri(this,"onUpdate")),this._repeat&&v!==C&&this.vars.onRepeat&&!o&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&Zm(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!o&&!(f&&!a)&&(h||a||_)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,o,s,a){ec||Ar.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||J0(this,l),c=this._ease(l/this._dur),aj(this,i,o,s,a,c,l)?this.resetTo(i,o,s,a):(xh(this,0),this.parent||g2(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Zl(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Lo&&Lo.vars.overwrite!==!0)._first||Zl(this),this.parent&&s!==this.timeline.totalDuration()&&gl(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,f=this._pt,h,d,p,v,g,C,_;if((!o||o==="all")&&$4(a,l))return o==="all"&&(this._pt=0),Zl(this);for(h=this._op=this._op||[],o!=="all"&&(_n(o)&&(g={},hr(o,function(y){return g[y]=1}),o=g),o=lj(a,o)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],o==="all"?(h[_]=o,v=d,p={}):(p=h[_]=h[_]||{},v=o);for(g in v)C=d&&d[g],C&&((!("kill"in C.d)||C.d.kill(g)===!0)&&yh(this,C,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&f&&Zl(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return gu(1,arguments)},e.delayedCall=function(i,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,o,s){return gu(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return St.killTweensOf(i,o,s)},e}(tc);ui(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hr("staggerTo,staggerFrom,staggerFromTo",function(t){Gt[t]=function(){var e=new ar,n=eg.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var ev=function(e,n,r){return e[n]=r},z2=function(e,n,r){return e[n](r)},cj=function(e,n,r,i){return e[n](i.fp,r)},fj=function(e,n,r){return e.setAttribute(n,r)},tv=function(e,n){return Dt(e[n])?z2:V0(e[n])&&e.setAttribute?fj:ev},F2=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},dj=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},B2=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},nv=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},hj=function(e,n,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,n,r),o=s},pj=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?yh(this,n,"_pt"):n.dep||(r=1),n=i;return!r},mj=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},H2=function(e){for(var n=e._pt,r,i,o,s;n;){for(r=n._next,i=o;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:s)?n._prev._next=n:o=n,(n._next=i)?i._prev=n:s=n,n=r}e._pt=o},pr=function(){function t(n,r,i,o,s,a,l,c,f){this.t=r,this.s=o,this.c=s,this.p=i,this.r=a||F2,this.d=l||this,this.set=c||ev,this.pr=f||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=mj,this.m=r,this.mt=o,this.tween=i},t}();hr(q0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return G0[t]=1});Lr.TweenMax=Lr.TweenLite=Gt;Lr.TimelineLite=Lr.TimelineMax=ar;St=new ar({sortChildren:!1,defaults:pl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mr.stringFilter=N2;var zs=[],jf={},gj=[],$_=0,vj=0,kp=function(e){return(jf[e]||gj).map(function(n){return n()})},ig=function(){var e=Date.now(),n=[];e-$_>2&&(kp("matchMediaInit"),zs.forEach(function(r){var i=r.queries,o=r.conditions,s,a,l,c;for(a in i)s=Kr.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(r.revert(),l&&n.push(r))}),kp("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r)}),$_=e,kp("matchMedia"))},U2=function(){function t(n,r){this.selector=r&&tg(r),this.data=[],this._r=[],this.isReverted=!1,this.id=vj++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,o){Dt(r)&&(o=i,i=r,r=Dt);var s=this,a=function(){var c=Mt,f=s.selector,h;return c&&c!==s&&c.data.push(s),o&&(s.selector=tg(o)),Mt=s,h=i.apply(s,arguments),Dt(h)&&s._r.push(h),Mt=c,s.selector=f,s.isReverted=!1,h};return s.last=a,r===Dt?a(s):r?s[r]=a:a},e.ignore=function(r){var i=Mt;Mt=null,r(this),Mt=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(r)}),this.data.forEach(function(l){return!(l instanceof Gt)&&l.revert&&l.revert(r)}),this._r.forEach(function(l){return l(r,o)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=zs.length;a--;)zs[a].id===this.id&&zs.splice(a,1)},e.revert=function(r){this.kill(r||{})},t}(),yj=function(){function t(n){this.contexts=[],this.scope=n}var e=t.prototype;return e.add=function(r,i,o){qi(r)||(r={matches:r});var s=new U2(0,o||this.scope),a=s.conditions={},l,c,f;Mt&&!s.selector&&(s.selector=Mt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(c in r)c==="all"?f=1:(l=Kr.matchMedia(r[c]),l&&(zs.indexOf(s)<0&&zs.push(s),(a[c]=l.matches)&&(f=1),l.addListener?l.addListener(ig):l.addEventListener("change",ig)));return f&&i(s),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),Od={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return P2(i)})},timeline:function(e){return new ar(e)},getTweensOf:function(e,n){return St.getTweensOf(e,n)},getProperty:function(e,n,r,i){_n(e)&&(e=ni(e)[0]);var o=Ds(e||{}).get,s=r?m2:p2;return r==="native"&&(r=""),e&&(n?s((Er[n]&&Er[n].get||o)(e,n,r,i)):function(a,l,c){return s((Er[a]&&Er[a].get||o)(e,a,l,c))})},quickSetter:function(e,n,r){if(e=ni(e),e.length>1){var i=e.map(function(f){return gr.quickSetter(f,n,r)}),o=i.length;return function(f){for(var h=o;h--;)i[h](f)}}e=e[0]||{};var s=Er[n],a=Ds(e),l=a.harness&&(a.harness.aliases||{})[n]||n,c=s?function(f){var h=new s;Da._pt=0,h.init(e,r?f+r:f,Da,0,[e]),h.render(1,h),Da._pt&&nv(1,Da)}:a.set(e,l);return s?c:function(f){return c(e,l,r?f+r:f,a,1)}},quickTo:function(e,n,r){var i,o=gr.to(e,qs((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),s=function(l,c,f){return o.resetTo(n,l,c,f)};return s.tween=o,s},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$s(e.ease,pl.ease)),j_(pl,e||{})},config:function(e){return j_(Mr,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Er[a]&&!Lr[a]&&Cd(n+" effect requires "+a+" plugin.")}),xp[n]=function(a,l,c){return r(ni(a),ui(l||{},o),c)},s&&(ar.prototype[n]=function(a,l,c){return this.add(xp[n](a,qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Re[e]=$s(n)},parseEase:function(e,n){return arguments.length?$s(e,n):Re},getById:function(e){return St.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new ar(e),i,o;for(r.smoothChildTiming=dr(e.smoothChildTiming),St.remove(r),r._dp=0,r._time=r._tTime=St._time,i=St._first;i;)o=i._next,(n||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Hi(r,i,i._start-i._delay),i=o;return Hi(St,r,0),r},context:function(e,n){return e?new U2(e,n):Mt},matchMedia:function(e){return new yj(e)},matchMediaRefresh:function(){return zs.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||ig()},addEventListener:function(e,n){var r=jf[e]||(jf[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=jf[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:q4,wrapYoyo:Q4,distribute:b2,random:k2,snap:S2,normalize:G4,getUnit:Rn,clamp:V4,splitColor:O2,toArray:ni,selector:tg,mapRange:E2,pipe:K4,unitize:X4,interpolate:Z4,shuffle:w2},install:u2,effects:xp,ticker:Ar,updateRoot:ar.updateRoot,plugins:Er,globalTimeline:St,core:{PropTween:pr,globals:c2,Tween:Gt,Timeline:ar,Animation:tc,getCache:Ds,_removeLinkedListItem:yh,reverting:function(){return Mn},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return W0=e}}};hr("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Od[t]=Gt[t]});Ar.add(ar.updateRoot);Da=Od.to({},{duration:0});var _j=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},xj=function(e,n){var r=e._targets,i,o,s;for(i in n)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=_j(s,i)),s&&s.modifier&&s.modifier(n[i],e,r[o],i))},Cp=function(e,n){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,c;if(_n(o)&&(l={},hr(o,function(f){return l[f]=1}),o=l),n){l={};for(c in o)l[c]=n(o[c]);o=l}xj(a,o)}}}},gr=Od.registerPlugin({name:"attr",init:function(e,n,r,i,o){var s,a,l;this.tween=r;for(s in n)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",n[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,n){for(var r=n._pt;r;)Mn?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Cp("roundProps",ng),Cp("modifiers"),Cp("snap",S2))||Od;Gt.version=ar.version=gr.version="3.12.2";l2=1;Y0()&&vl();Re.Power0;Re.Power1;Re.Power2;Re.Power3;Re.Power4;Re.Linear;Re.Quad;Re.Cubic;Re.Quart;Re.Quint;Re.Strong;Re.Elastic;Re.Back;Re.SteppedEase;Re.Bounce;Re.Sine;Re.Expo;Re.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var z_,$o,Xa,rv,Ns,F_,iv,wj=function(){return typeof window<"u"},xo={},Ss=180/Math.PI,Ga=Math.PI/180,ma=Math.atan2,B_=1e8,ov=/([A-Z])/g,bj=/(left|right|width|margin|padding|x)/i,Sj=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},og=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},kj=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Cj=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Ej=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},W2=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},V2=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},Tj=function(e,n,r){return e.style[n]=r},Pj=function(e,n,r){return e.style.setProperty(n,r)},Oj=function(e,n,r){return e._gsap[n]=r},Aj=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},Nj=function(e,n,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},Ij=function(e,n,r,i,o){var s=e._gsap;s[n]=r,s.renderTransform(o,s)},kt="transform",Ti=kt+"Origin",jj=function t(e,n){var r=this,i=this.target,o=i.style;if(e in xo&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return r.tfm[s]=io(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:io(i,e);else return Ui.transform.split(",").forEach(function(s){return t.call(r,s,n)});if(this.props.indexOf(kt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ti,n,"")),e=kt}(o||n)&&this.props.push(e,n,o[e])},Y2=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rj=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?n[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(ov,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=iv(),(!o||!o.isStart)&&!r[kt]&&(Y2(r),i.uncache=1)}},K2=function(e,n){var r={target:e,props:[],revert:Rj,save:jj};return e._gsap||gr.core.getCache(e),n&&n.split(",").forEach(function(i){return r.save(i)}),r},X2,sg=function(e,n){var r=$o.createElementNS?$o.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$o.createElement(e);return r.style?r:$o.createElement(e)},Xi=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(ov,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,yl(n)||n,1)||""},H_="O,Moz,ms,Ms,Webkit".split(","),yl=function(e,n,r){var i=n||Ns,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(H_[s]+e in o););return s<0?null:(s===3?"ms":s>=0?H_[s]:"")+e},ag=function(){wj()&&window.document&&(z_=window,$o=z_.document,Xa=$o.documentElement,Ns=sg("div")||{style:{}},sg("div"),kt=yl(kt),Ti=kt+"Origin",Ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",X2=!!yl("perspective"),iv=gr.core.reverting,rv=1)},Ep=function t(e){var n=sg("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,o=this.style.cssText,s;if(Xa.appendChild(n),n.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(s=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),Xa.removeChild(n),this.style.cssText=o,s},U_=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},G2=function(e){var n;try{n=e.getBBox()}catch{n=Ep.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Ep||(n=Ep.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+U_(e,["x","cx","x1"])||0,y:+U_(e,["y","cy","y1"])||0,width:0,height:0}:n},q2=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&G2(e))},nc=function(e,n){if(n){var r=e.style;n in xo&&n!==Ti&&(n=kt),r.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(n.replace(ov,"-$1").toLowerCase())):r.removeAttribute(n)}},zo=function(e,n,r,i,o,s){var a=new pr(e._pt,n,r,0,1,s?V2:W2);return e._pt=a,a.b=i,a.e=o,e._props.push(r),a},W_={deg:1,rad:1,turn:1},Mj={grid:1,flex:1},is=function t(e,n,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",a=Ns.style,l=bj.test(n),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",v,g,C,_;return i===s||!o||W_[i]||W_[s]?o:(s!=="px"&&!d&&(o=t(e,n,r,"px")),_=e.getCTM&&q2(e),(p||s==="%")&&(xo[n]||~n.indexOf("adius"))?(v=_?e.getBBox()[l?"width":"height"]:e[f],Bt(p?o/v*h:o/100*v)):(a[l?"width":"height"]=h+(d?s:i),g=~n.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===$o||!g.appendChild)&&(g=$o.body),C=g._gsap,C&&p&&C.width&&l&&C.time===Ar.time&&!C.uncache?Bt(o/C.width*h):((p||s==="%")&&!Mj[Xi(g,"display")]&&(a.position=Xi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ns),v=Ns[f],g.removeChild(Ns),a.position="absolute",l&&p&&(C=Ds(g),C.time=Ar.time,C.width=g[f]),Bt(d?v*o/h:v&&o?h/v*o:0))))},io=function(e,n,r,i){var o;return rv||ag(),n in Ui&&n!=="transform"&&(n=Ui[n],~n.indexOf(",")&&(n=n.split(",")[0])),xo[n]&&n!=="transform"?(o=ic(e,i),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:Nd(Xi(e,Ti))+" "+o.zOrigin+"px"):(o=e.style[n],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Ad[n]&&Ad[n](e,n,r)||Xi(e,n)||d2(e,n)||(n==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?is(e,n,o,r)+r:o},Dj=function(e,n,r,i){if(!r||r==="none"){var o=yl(n,e,1),s=o&&Xi(e,o,1);s&&s!==r?(n=o,r=s):n==="borderColor"&&(r=Xi(e,"borderTopColor"))}var a=new pr(this._pt,e.style,n,0,1,B2),l=0,c=0,f,h,d,p,v,g,C,_,y,b,E,P;if(a.b=r,a.e=i,r+="",i+="",i==="auto"&&(e.style[n]=i,i=Xi(e,n)||i,e.style[n]=r),f=[r,i],N2(f),r=f[0],i=f[1],d=r.match(Ma)||[],P=i.match(Ma)||[],P.length){for(;h=Ma.exec(i);)C=h[0],y=i.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),C!==(g=d[c++]||"")&&(p=parseFloat(g)||0,E=g.substr((p+"").length),C.charAt(1)==="="&&(C=Ka(p,C)+E),_=parseFloat(C),b=C.substr((_+"").length),l=Ma.lastIndex-b.length,b||(b=b||Mr.units[n]||E,l===i.length&&(i+=b,a.e+=b)),E!==b&&(p=is(e,n,g,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:p,c:_-p,m:v&&v<4||n==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=n==="display"&&i==="none"?V2:W2;return s2.test(i)&&(a.e=0),this._pt=a,a},V_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lj=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=V_[r]||r,n[1]=V_[i]||i,n.join(" ")},$j=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,o=n.u,s=r._gsap,a,l,c;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],xo[a]&&(l=1,a=a==="transformOrigin"?Ti:kt),nc(r,a);l&&(nc(r,kt),s&&(s.svg&&r.removeAttribute("transform"),ic(r,1),s.uncache=1,Y2(i)))}},Ad={clearProps:function(e,n,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new pr(e._pt,n,r,0,0,$j);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},rc=[1,0,0,1,0,0],Q2={},Z2=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Y_=function(e){var n=Xi(e,kt);return Z2(n)?rc:n.substr(7).match(o2).map(Bt)},sv=function(e,n){var r=e._gsap||Ds(e),i=e.style,o=Y_(e),s,a,l,c;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?rc:o):(o===rc&&!e.offsetParent&&e!==Xa&&!r.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Xa.appendChild(e)),o=Y_(e),l?i.display=l:nc(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Xa.removeChild(e))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},lg=function(e,n,r,i,o,s){var a=e._gsap,l=o||sv(e,!0),c=a.xOrigin||0,f=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],v=l[1],g=l[2],C=l[3],_=l[4],y=l[5],b=n.split(" "),E=parseFloat(b[0])||0,P=parseFloat(b[1])||0,O,T,j,R;r?l!==rc&&(T=p*C-v*g)&&(j=E*(C/T)+P*(-g/T)+(g*y-C*_)/T,R=E*(-v/T)+P*(p/T)-(p*y-v*_)/T,E=j,P=R):(O=G2(e),E=O.x+(~b[0].indexOf("%")?E/100*O.width:E),P=O.y+(~(b[1]||b[0]).indexOf("%")?P/100*O.height:P)),i||i!==!1&&a.smooth?(_=E-c,y=P-f,a.xOffset=h+(_*p+y*g)-_,a.yOffset=d+(_*v+y*C)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=P,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,e.style[Ti]="0px 0px",s&&(zo(s,a,"xOrigin",c,E),zo(s,a,"yOrigin",f,P),zo(s,a,"xOffset",h,a.xOffset),zo(s,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+P)},ic=function(e,n){var r=e._gsap||new M2(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Xi(e,Ti)||"0",f,h,d,p,v,g,C,_,y,b,E,P,O,T,j,R,I,W,F,re,ee,ne,oe,te,$,H,S,Q,ae,it,ue,Me;return f=h=d=g=C=_=y=b=E=0,p=v=1,r.svg=!!(e.getCTM&&q2(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),T=sv(e,r.svg),r.svg&&(r.uncache?($=e.getBBox(),c=r.xOrigin-$.x+"px "+(r.yOrigin-$.y)+"px",te=""):te=!n&&e.getAttribute("data-svg-origin"),lg(e,te||c,!!te||r.originIsAbsolute,r.smooth!==!1,T)),P=r.xOrigin||0,O=r.yOrigin||0,T!==rc&&(W=T[0],F=T[1],re=T[2],ee=T[3],f=ne=T[4],h=oe=T[5],T.length===6?(p=Math.sqrt(W*W+F*F),v=Math.sqrt(ee*ee+re*re),g=W||F?ma(F,W)*Ss:0,y=re||ee?ma(re,ee)*Ss+g:0,y&&(v*=Math.abs(Math.cos(y*Ga))),r.svg&&(f-=P-(P*W+O*re),h-=O-(P*F+O*ee))):(Me=T[6],it=T[7],S=T[8],Q=T[9],ae=T[10],ue=T[11],f=T[12],h=T[13],d=T[14],j=ma(Me,ae),C=j*Ss,j&&(R=Math.cos(-j),I=Math.sin(-j),te=ne*R+S*I,$=oe*R+Q*I,H=Me*R+ae*I,S=ne*-I+S*R,Q=oe*-I+Q*R,ae=Me*-I+ae*R,ue=it*-I+ue*R,ne=te,oe=$,Me=H),j=ma(-re,ae),_=j*Ss,j&&(R=Math.cos(-j),I=Math.sin(-j),te=W*R-S*I,$=F*R-Q*I,H=re*R-ae*I,ue=ee*I+ue*R,W=te,F=$,re=H),j=ma(F,W),g=j*Ss,j&&(R=Math.cos(j),I=Math.sin(j),te=W*R+F*I,$=ne*R+oe*I,F=F*R-W*I,oe=oe*R-ne*I,W=te,ne=$),C&&Math.abs(C)+Math.abs(g)>359.9&&(C=g=0,_=180-_),p=Bt(Math.sqrt(W*W+F*F+re*re)),v=Bt(Math.sqrt(oe*oe+Me*Me)),j=ma(ne,oe),y=Math.abs(j)>2e-4?j*Ss:0,E=ue?1/(ue<0?-ue:ue):0),r.svg&&(te=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Z2(Xi(e,kt)),te&&e.setAttribute("transform",te))),Math.abs(y)>90&&Math.abs(y)<270&&(o?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),n=n||r.uncache,r.x=f-((r.xPercent=f&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=h-((r.yPercent=h&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=d+s,r.scaleX=Bt(p),r.scaleY=Bt(v),r.rotation=Bt(g)+a,r.rotationX=Bt(C)+a,r.rotationY=Bt(_)+a,r.skewX=y+a,r.skewY=b+a,r.transformPerspective=E+s,(r.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Ti]=Nd(c)),r.xOffset=r.yOffset=0,r.force3D=Mr.force3D,r.renderTransform=r.svg?Fj:X2?J2:zj,r.uncache=0,r},Nd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tp=function(e,n,r){var i=Rn(n);return Bt(parseFloat(n)+parseFloat(is(e,"x",r+"px",i)))+i},zj=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,J2(e,n)},ys="0deg",Wl="0px",_s=") ",J2=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.z,c=r.rotation,f=r.rotationY,h=r.rotationX,d=r.skewX,p=r.skewY,v=r.scaleX,g=r.scaleY,C=r.transformPerspective,_=r.force3D,y=r.target,b=r.zOrigin,E="",P=_==="auto"&&e&&e!==1||_===!0;if(b&&(h!==ys||f!==ys)){var O=parseFloat(f)*Ga,T=Math.sin(O),j=Math.cos(O),R;O=parseFloat(h)*Ga,R=Math.cos(O),s=Tp(y,s,T*R*-b),a=Tp(y,a,-Math.sin(O)*-b),l=Tp(y,l,j*R*-b+b)}C!==Wl&&(E+="perspective("+C+_s),(i||o)&&(E+="translate("+i+"%, "+o+"%) "),(P||s!==Wl||a!==Wl||l!==Wl)&&(E+=l!==Wl||P?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+_s),c!==ys&&(E+="rotate("+c+_s),f!==ys&&(E+="rotateY("+f+_s),h!==ys&&(E+="rotateX("+h+_s),(d!==ys||p!==ys)&&(E+="skew("+d+", "+p+_s),(v!==1||g!==1)&&(E+="scale("+v+", "+g+_s),y.style[kt]=E||"translate(0, 0)"},Fj=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.rotation,c=r.skewX,f=r.skewY,h=r.scaleX,d=r.scaleY,p=r.target,v=r.xOrigin,g=r.yOrigin,C=r.xOffset,_=r.yOffset,y=r.forceCSS,b=parseFloat(s),E=parseFloat(a),P,O,T,j,R;l=parseFloat(l),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,l+=f),l||c?(l*=Ga,c*=Ga,P=Math.cos(l)*h,O=Math.sin(l)*h,T=Math.sin(l-c)*-d,j=Math.cos(l-c)*d,c&&(f*=Ga,R=Math.tan(c-f),R=Math.sqrt(1+R*R),T*=R,j*=R,f&&(R=Math.tan(f),R=Math.sqrt(1+R*R),P*=R,O*=R)),P=Bt(P),O=Bt(O),T=Bt(T),j=Bt(j)):(P=h,j=d,O=T=0),(b&&!~(s+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(b=is(p,"x",s,"px"),E=is(p,"y",a,"px")),(v||g||C||_)&&(b=Bt(b+v-(v*P+g*T)+C),E=Bt(E+g-(v*O+g*j)+_)),(i||o)&&(R=p.getBBox(),b=Bt(b+i/100*R.width),E=Bt(E+o/100*R.height)),R="matrix("+P+","+O+","+T+","+j+","+b+","+E+")",p.setAttribute("transform",R),y&&(p.style[kt]=R)},Bj=function(e,n,r,i,o){var s=360,a=_n(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Ss:1),c=l-i,f=i+c+"deg",h,d;return a&&(h=o.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*B_)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*B_)%s-~~(c/s)*s)),e._pt=d=new pr(e._pt,n,r,i,c,kj),d.e=f,d.u="deg",e._props.push(r),d},K_=function(e,n){for(var r in n)e[r]=n[r];return e},Hj=function(e,n,r){var i=K_({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,l,c,f,h,d,p,v;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),s[kt]=n,a=ic(r,1),nc(r,kt),r.setAttribute("transform",c)):(c=getComputedStyle(r)[kt],s[kt]=n,a=ic(r,1),s[kt]=c);for(l in xo)c=i[l],f=a[l],c!==f&&o.indexOf(l)<0&&(p=Rn(c),v=Rn(f),h=p!==v?is(r,l,c,v):parseFloat(c),d=parseFloat(f),e._pt=new pr(e._pt,a,l,h,d-h,og),e._pt.u=v||0,e._props.push(l));K_(a,i)};hr("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",o="Left",s=(e<3?[n,r,i,o]:[n+o,n+r,i+r,i+o]).map(function(a){return e<2?t+a:"border"+a+t});Ad[e>1?"border"+t:t]=function(a,l,c,f,h){var d,p;if(arguments.length<4)return d=s.map(function(v){return io(a,v,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(f+"").split(" "),p={},s.forEach(function(v,g){return p[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,h)}});var ek={name:"css",register:ag,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,o){var s=this._props,a=e.style,l=r.vars.startAt,c,f,h,d,p,v,g,C,_,y,b,E,P,O,T,j;rv||ag(),this.styles=this.styles||K2(e),j=this.styles.props,this.tween=r;for(g in n)if(g!=="autoRound"&&(f=n[g],!(Er[g]&&D2(g,n,r,i,e,o)))){if(p=typeof f,v=Ad[g],p==="function"&&(f=f.call(r,i,e,o),p=typeof f),p==="string"&&~f.indexOf("random(")&&(f=Ju(f)),v)v(this,e,g,f,r)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),f+="",Jo.lastIndex=0,Jo.test(c)||(C=Rn(c),_=Rn(f)),_?C!==_&&(c=is(e,g,c,_)+_):C&&(f+=C),this.add(a,"setProperty",c,f,i,o,0,0,g),s.push(g),j.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(r,i,e,o):l[g],_n(c)&&~c.indexOf("random(")&&(c=Ju(c)),Rn(c+"")||(c+=Mr.units[g]||Rn(io(e,g))||""),(c+"").charAt(1)==="="&&(c=io(e,g))):c=io(e,g),d=parseFloat(c),y=p==="string"&&f.charAt(1)==="="&&f.substr(0,2),y&&(f=f.substr(2)),h=parseFloat(f),g in Ui&&(g==="autoAlpha"&&(d===1&&io(e,"visibility")==="hidden"&&h&&(d=0),j.push("visibility",0,a.visibility),zo(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in xo,b){if(this.styles.save(g),E||(P=e._gsap,P.renderTransform&&!n.parseTransform||ic(e,n.parseTransform),O=n.smoothOrigin!==!1&&P.smooth,E=this._pt=new pr(this._pt,a,kt,0,1,P.renderTransform,P,0,-1),E.dep=1),g==="scale")this._pt=new pr(this._pt,P,"scaleY",P.scaleY,(y?Ka(P.scaleY,y+h):h)-P.scaleY||0,og),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){j.push(Ti,0,a[Ti]),f=Lj(f),P.svg?lg(e,f,0,O,0,this):(_=parseFloat(f.split(" ")[2])||0,_!==P.zOrigin&&zo(this,P,"zOrigin",P.zOrigin,_),zo(this,a,g,Nd(c),Nd(f)));continue}else if(g==="svgOrigin"){lg(e,f,1,O,0,this);continue}else if(g in Q2){Bj(this,P,g,d,y?Ka(d,y+f):f);continue}else if(g==="smoothOrigin"){zo(this,P,"smooth",P.smooth,f);continue}else if(g==="force3D"){P[g]=f;continue}else if(g==="transform"){Hj(this,f,e);continue}}else g in a||(g=yl(g)||g);if(b||(h||h===0)&&(d||d===0)&&!Sj.test(f)&&g in a)C=(c+"").substr((d+"").length),h||(h=0),_=Rn(f)||(g in Mr.units?Mr.units[g]:C),C!==_&&(d=is(e,g,c,_)),this._pt=new pr(this._pt,b?P:a,g,d,(y?Ka(d,y+h):h)-d,!b&&(_==="px"||g==="zIndex")&&n.autoRound!==!1?Ej:og),this._pt.u=_||0,C!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Cj);else if(g in a)Dj.call(this,e,g,c,y?y+f:f);else if(g in e)this.add(e,g,c||e[g],y?y+f:f,i,o);else if(g!=="parseTransform"){X0(g,f);continue}b||(g in a?j.push(g,0,a[g]):j.push(g,1,c||e[g])),s.push(g)}}T&&H2(this)},render:function(e,n){if(n.tween._time||!iv())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:io,aliases:Ui,getSetter:function(e,n,r){var i=Ui[n];return i&&i.indexOf(",")<0&&(n=i),n in xo&&n!==Ti&&(e._gsap.x||io(e,"x"))?r&&F_===r?n==="scale"?Aj:Oj:(F_=r||{})&&(n==="scale"?Nj:Ij):e.style&&!V0(e.style[n])?Tj:~n.indexOf("-")?Pj:tv(e,n)},core:{_removeProperty:nc,_getMatrix:sv}};gr.utils.checkPrefix=yl;gr.core.getStyleSaver=K2;(function(t,e,n,r){var i=hr(t+","+e+","+n,function(o){xo[o]=1});hr(e,function(o){Mr.units[o]="deg",Q2[o]=1}),Ui[i[13]]=t+","+e,hr(r,function(o){var s=o.split(":");Ui[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Mr.units[t]="px"});gr.registerPlugin(ek);var To=gr.registerPlugin(ek)||gr;To.core.Tween;function X_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Uj(t,e,n){return e&&X_(t.prototype,e),n&&X_(t,n),t}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn,ug,Nr,Fo,Bo,qa,tk,ks,yu,nk,lo,yi,rk,ik=function(){return kn||typeof window<"u"&&(kn=window.gsap)&&kn.registerPlugin&&kn},ok=1,La=[],Ce=[],Gi=[],_u=Date.now,cg=function(e,n){return n},Wj=function(){var e=yu.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,Ce),i.push.apply(i,Gi),Ce=r,Gi=i,cg=function(s,a){return n[s](a)}},es=function(e,n){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][n]},xu=function(e){return!!~nk.indexOf(e)},Vn=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:!i,capture:!!o})},Wn=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},Zc="scrollLeft",Jc="scrollTop",fg=function(){return lo&&lo.isPressed||Ce.cache++},Id=function(e,n){var r=function i(o){if(o||o===0){ok&&(Nr.history.scrollRestoration="manual");var s=lo&&lo.isPressed;o=i.v=Math.round(o)||(lo&&lo.iOS?1:0),e(o),i.cacheID=Ce.cache,s&&cg("ss",o)}else(n||Ce.cache!==i.cacheID||cg("ref"))&&(i.cacheID=Ce.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},qn={s:Zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Id(function(t){return arguments.length?Nr.scrollTo(t,sn.sc()):Nr.pageXOffset||Fo[Zc]||Bo[Zc]||qa[Zc]||0})},sn={s:Jc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:Id(function(t){return arguments.length?Nr.scrollTo(qn.sc(),t):Nr.pageYOffset||Fo[Jc]||Bo[Jc]||qa[Jc]||0})},or=function(e,n){return(n&&n._ctx&&n._ctx.selector||kn.utils.toArray)(e)[0]||(typeof e=="string"&&kn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},os=function(e,n){var r=n.s,i=n.sc;xu(e)&&(e=Fo.scrollingElement||Bo);var o=Ce.indexOf(e),s=i===sn.sc?1:2;!~o&&(o=Ce.push(e)-1),Ce[o+s]||Vn(e,"scroll",fg);var a=Ce[o+s],l=a||(Ce[o+s]=Id(es(e,r),!0)||(xu(e)?i:Id(function(c){return arguments.length?e[r]=c:e[r]})));return l.target=e,a||(l.smooth=kn.getProperty(e,"scrollBehavior")==="smooth"),l},dg=function(e,n,r){var i=e,o=e,s=_u(),a=s,l=n||50,c=Math.max(500,l*3),f=function(v,g){var C=_u();g||C-s>l?(o=i,i=v,a=s,s=C):r?i+=v:i=o+(v-o)/(C-a)*(s-a)},h=function(){o=i=r?0:i,a=s=0},d=function(v){var g=a,C=o,_=_u();return(v||v===0)&&v!==i&&f(v),s===a||_-a>c?0:(i+(r?C:-C))/((r?_:s)-g)*1e3};return{update:f,reset:h,getVelocity:d}},Vl=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},G_=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},sk=function(){yu=kn.core.globals().ScrollTrigger,yu&&yu.core&&Wj()},ak=function(e){return kn=e||ik(),kn&&typeof document<"u"&&document.body&&(Nr=window,Fo=document,Bo=Fo.documentElement,qa=Fo.body,nk=[Nr,Fo,Bo,qa],kn.utils.clamp,rk=kn.core.context||function(){},ks="onpointerenter"in qa?"pointer":"mouse",tk=en.isTouch=Nr.matchMedia&&Nr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=en.eventTypes=("ontouchstart"in Bo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ok=0},500),sk(),ug=1),ug};qn.op=sn;Ce.cache=0;var en=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){ug||ak(kn)||console.warn("Please gsap.registerPlugin(Observer)"),yu||sk();var i=r.tolerance,o=r.dragMinimum,s=r.type,a=r.target,l=r.lineHeight,c=r.debounce,f=r.preventDefault,h=r.onStop,d=r.onStopDelay,p=r.ignore,v=r.wheelSpeed,g=r.event,C=r.onDragStart,_=r.onDragEnd,y=r.onDrag,b=r.onPress,E=r.onRelease,P=r.onRight,O=r.onLeft,T=r.onUp,j=r.onDown,R=r.onChangeX,I=r.onChangeY,W=r.onChange,F=r.onToggleX,re=r.onToggleY,ee=r.onHover,ne=r.onHoverEnd,oe=r.onMove,te=r.ignoreCheck,$=r.isNormalizer,H=r.onGestureStart,S=r.onGestureEnd,Q=r.onWheel,ae=r.onEnable,it=r.onDisable,ue=r.onClick,Me=r.scrollSpeed,me=r.capture,De=r.allowClicks,Y=r.lockAxis,Ke=r.onLockAxis;this.target=a=or(a)||Bo,this.vars=r,p&&(p=kn.utils.toArray(p)),i=i||1e-9,o=o||0,v=v||1,Me=Me||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nr.getComputedStyle(qa).lineHeight)||22);var ln,Tt,lt,Le,Pt,tn,nn,M=this,Ut=0,tr=0,ci=os(a,qn),xt=os(a,sn),Fr=ci(),Qi=xt(),ds=~s.indexOf("touch")&&!~s.indexOf("pointer")&&yi[0]==="pointerdown",rn=xu(a),Qe=a.ownerDocument||Fo,$n=[0,0,0],Tn=[0,0,0],Br=0,vr=function(){return Br=_u()},Hr=function(ie,$e){return(M.event=ie)&&p&&~p.indexOf(ie.target)||$e&&ds&&ie.pointerType!=="touch"||te&&te(ie,$e)},Pn=function(){M._vx.reset(),M._vy.reset(),Tt.pause(),h&&h(M)},nr=function(){var ie=M.deltaX=G_($n),$e=M.deltaY=G_(Tn),ut=Math.abs(ie)>=i,X=Math.abs($e)>=i;W&&(ut||X)&&W(M,ie,$e,$n,Tn),ut&&(P&&M.deltaX>0&&P(M),O&&M.deltaX<0&&O(M),R&&R(M),F&&M.deltaX<0!=Ut<0&&F(M),Ut=M.deltaX,$n[0]=$n[1]=$n[2]=0),X&&(j&&M.deltaY>0&&j(M),T&&M.deltaY<0&&T(M),I&&I(M),re&&M.deltaY<0!=tr<0&&re(M),tr=M.deltaY,Tn[0]=Tn[1]=Tn[2]=0),(Le||lt)&&(oe&&oe(M),lt&&(y(M),lt=!1),Le=!1),tn&&!(tn=!1)&&Ke&&Ke(M),Pt&&(Q(M),Pt=!1),ln=0},Ot=function(ie,$e,ut){$n[ut]+=ie,Tn[ut]+=$e,M._vx.update(ie),M._vy.update($e),c?ln||(ln=requestAnimationFrame(nr)):nr()},Wt=function(ie,$e){Y&&!nn&&(M.axis=nn=Math.abs(ie)>Math.abs($e)?"x":"y",tn=!0),nn!=="y"&&($n[2]+=ie,M._vx.update(ie,!0)),nn!=="x"&&(Tn[2]+=$e,M._vy.update($e,!0)),c?ln||(ln=requestAnimationFrame(nr)):nr()},$t=function(ie){if(!Hr(ie,1)){ie=Vl(ie,f);var $e=ie.clientX,ut=ie.clientY,X=$e-M.x,ke=ut-M.y,se=M.isDragging;M.x=$e,M.y=ut,(se||Math.abs(M.startX-$e)>=o||Math.abs(M.startY-ut)>=o)&&(y&&(lt=!0),se||(M.isDragging=!0),Wt(X,ke),se||C&&C(M))}},pt=M.onPress=function(ce){Hr(ce,1)||ce&&ce.button||(M.axis=nn=null,Tt.pause(),M.isPressed=!0,ce=Vl(ce),Ut=tr=0,M.startX=M.x=ce.clientX,M.startY=M.y=ce.clientY,M._vx.reset(),M._vy.reset(),Vn($?a:Qe,yi[1],$t,f,!0),M.deltaX=M.deltaY=0,b&&b(M))},yr=M.onRelease=function(ce){if(!Hr(ce,1)){Wn($?a:Qe,yi[1],$t,!0);var ie=!isNaN(M.y-M.startY),$e=M.isDragging&&(Math.abs(M.x-M.startX)>3||Math.abs(M.y-M.startY)>3),ut=Vl(ce);!$e&&ie&&(M._vx.reset(),M._vy.reset(),f&&De&&kn.delayedCall(.08,function(){if(_u()-Br>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(Qe.createEvent){var X=Qe.createEvent("MouseEvents");X.initMouseEvent("click",!0,!0,Nr,1,ut.screenX,ut.screenY,ut.clientX,ut.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(X)}}})),M.isDragging=M.isGesturing=M.isPressed=!1,h&&!$&&Tt.restart(!0),_&&$e&&_(M),E&&E(M,$e)}},ve=function(ie){return ie.touches&&ie.touches.length>1&&(M.isGesturing=!0)&&H(ie,M.isDragging)},zn=function(){return(M.isGesturing=!1)||S(M)},un=function(ie){if(!Hr(ie)){var $e=ci(),ut=xt();Ot(($e-Fr)*Me,(ut-Qi)*Me,1),Fr=$e,Qi=ut,h&&Tt.restart(!0)}},rr=function(ie){if(!Hr(ie)){ie=Vl(ie,f),Q&&(Pt=!0);var $e=(ie.deltaMode===1?l:ie.deltaMode===2?Nr.innerHeight:1)*v;Ot(ie.deltaX*$e,ie.deltaY*$e,0),h&&!$&&Tt.restart(!0)}},Fn=function(ie){if(!Hr(ie)){var $e=ie.clientX,ut=ie.clientY,X=$e-M.x,ke=ut-M.y;M.x=$e,M.y=ut,Le=!0,(X||ke)&&Wt(X,ke)}},ir=function(ie){M.event=ie,ee(M)},Zi=function(ie){M.event=ie,ne(M)},_r=function(ie){return Hr(ie)||Vl(ie,f)&&ue(M)};Tt=M._dc=kn.delayedCall(d||.25,Pn).pause(),M.deltaX=M.deltaY=0,M._vx=dg(0,50,!0),M._vy=dg(0,50,!0),M.scrollX=ci,M.scrollY=xt,M.isDragging=M.isGesturing=M.isPressed=!1,rk(this),M.enable=function(ce){return M.isEnabled||(Vn(rn?Qe:a,"scroll",fg),s.indexOf("scroll")>=0&&Vn(rn?Qe:a,"scroll",un,f,me),s.indexOf("wheel")>=0&&Vn(a,"wheel",rr,f,me),(s.indexOf("touch")>=0&&tk||s.indexOf("pointer")>=0)&&(Vn(a,yi[0],pt,f,me),Vn(Qe,yi[2],yr),Vn(Qe,yi[3],yr),De&&Vn(a,"click",vr,!1,!0),ue&&Vn(a,"click",_r),H&&Vn(Qe,"gesturestart",ve),S&&Vn(Qe,"gestureend",zn),ee&&Vn(a,ks+"enter",ir),ne&&Vn(a,ks+"leave",Zi),oe&&Vn(a,ks+"move",Fn)),M.isEnabled=!0,ce&&ce.type&&pt(ce),ae&&ae(M)),M},M.disable=function(){M.isEnabled&&(La.filter(function(ce){return ce!==M&&xu(ce.target)}).length||Wn(rn?Qe:a,"scroll",fg),M.isPressed&&(M._vx.reset(),M._vy.reset(),Wn($?a:Qe,yi[1],$t,!0)),Wn(rn?Qe:a,"scroll",un,me),Wn(a,"wheel",rr,me),Wn(a,yi[0],pt,me),Wn(Qe,yi[2],yr),Wn(Qe,yi[3],yr),Wn(a,"click",vr,!0),Wn(a,"click",_r),Wn(Qe,"gesturestart",ve),Wn(Qe,"gestureend",zn),Wn(a,ks+"enter",ir),Wn(a,ks+"leave",Zi),Wn(a,ks+"move",Fn),M.isEnabled=M.isPressed=M.isDragging=!1,it&&it(M))},M.kill=M.revert=function(){M.disable();var ce=La.indexOf(M);ce>=0&&La.splice(ce,1),lo===M&&(lo=0)},La.push(M),$&&xu(a)&&(lo=M),M.enable(g)},Uj(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();en.version="3.12.2";en.create=function(t){return new en(t)};en.register=ak;en.getAll=function(){return La.slice()};en.getById=function(t){return La.filter(function(e){return e.vars.id===t})[0]};ik()&&kn.registerPlugin(en);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var J,xa,je,wt,bi,dt,lk,jd,Rd,$a,Rf,ef,In,wh,hg,Kn,q_,Q_,wa,uk,Pp,ck,br,fk,dk,hk,Po,pg,av,Qa,lv,Op,tf=1,Gn=Date.now,Ap=Gn(),oi=0,eu=0,Z_=function(e,n,r){var i=Cr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},J_=function(e,n){return n&&(!Cr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Vj=function t(){return eu&&requestAnimationFrame(t)},ex=function(){return wh=1},tx=function(){return wh=0},Di=function(e){return e},tu=function(e){return Math.round(e*1e5)/1e5||0},pk=function(){return typeof window<"u"},mk=function(){return J||pk()&&(J=window.gsap)&&J.registerPlugin&&J},Qs=function(e){return!!~lk.indexOf(e)},gk=function(e){return(e==="Height"?lv:je["inner"+e])||bi["client"+e]||dt["client"+e]},vk=function(e){return es(e,"getBoundingClientRect")||(Qs(e)?function(){return Ff.width=je.innerWidth,Ff.height=lv,Ff}:function(){return oo(e)})},Yj=function(e,n,r){var i=r.d,o=r.d2,s=r.a;return(s=es(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(n?gk(o):e["client"+o])||0}},Kj=function(e,n){return!n||~Gi.indexOf(e)?vk(e):function(){return Ff}},uo=function(e,n){var r=n.s,i=n.d2,o=n.d,s=n.a;return Math.max(0,(r="scroll"+i)&&(s=es(e,r))?s()-vk(e)()[o]:Qs(e)?(bi[r]||dt[r])-gk(i):e[r]-e["offset"+i])},nf=function(e,n){for(var r=0;r<wa.length;r+=3)(!n||~n.indexOf(wa[r+1]))&&e(wa[r],wa[r+1],wa[r+2])},Cr=function(e){return typeof e=="string"},Qn=function(e){return typeof e=="function"},Mf=function(e){return typeof e=="number"},Cs=function(e){return typeof e=="object"},Yl=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},Np=function(e,n){if(e.enabled){var r=n(e);r&&r.totalTime&&(e.callbackAnimation=r)}},ga=Math.abs,yk="left",_k="top",uv="right",cv="bottom",Fs="width",Bs="height",wu="Right",bu="Left",Su="Top",ku="Bottom",Xt="padding",Zr="margin",_l="Width",fv="Height",xn="px",Jr=function(e){return je.getComputedStyle(e)},Xj=function(e){var n=Jr(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},nx=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},oo=function(e,n){var r=n&&Jr(e)[hg]!=="matrix(1, 0, 0, 1, 0, 0)"&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},mg=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},xk=function(e){var n=[],r=e.labels,i=e.duration(),o;for(o in r)n.push(r[o]/i);return n},Gj=function(e){return function(n){return J.utils.snap(xk(e),n)}},dv=function(e){var n=J.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return r?function(i,o,s){s===void 0&&(s=.001);var a;if(!o)return n(i);if(o>0){for(i-=s,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=s;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,o,s){s===void 0&&(s=.001);var a=n(i);return!o||Math.abs(a-i)<s||a-i<0==o<0?a:n(o<0?i-e:i+e)}},qj=function(e){return function(n,r){return dv(xk(e))(n,r.direction)}},rf=function(e,n,r,i){return r.split(",").forEach(function(o){return e(n,o,i)})},pn=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:!i,capture:!!o})},hn=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},of=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},rx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sf={toggleActions:"play",anticipatePin:0},Md={top:0,left:0,center:.5,bottom:1,right:1},Df=function(e,n){if(Cr(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in Md?Md[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},af=function(e,n,r,i,o,s,a,l){var c=o.startColor,f=o.endColor,h=o.fontSize,d=o.indent,p=o.fontWeight,v=wt.createElement("div"),g=Qs(r)||es(r,"pinType")==="fixed",C=e.indexOf("scroller")!==-1,_=g?dt:r,y=e.indexOf("start")!==-1,b=y?c:f,E="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((C||l)&&g?"fixed;":"absolute;"),(C||l||!g)&&(E+=(i===sn?uv:cv)+":"+(s+parseFloat(d))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=y,v.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),v.style.cssText=E,v.innerText=n||n===0?e+"-"+n:e,_.children[0]?_.insertBefore(v,_.children[0]):_.appendChild(v),v._offset=v["offset"+i.op.d2],Lf(v,0,i,y),v},Lf=function(e,n,r,i){var o={display:"block"},s=r[i?"os2":"p2"],a=r[i?"p2":"os2"];e._isFlipped=i,o[r.a+"Percent"]=i?-100:0,o[r.a]=i?"1px":0,o["border"+s+_l]=1,o["border"+a+_l]=0,o[r.p]=n+"px",J.set(e,o)},Se=[],gg={},oc,ix=function(){return Gn()-oi>34&&(oc||(oc=requestAnimationFrame(ho)))},va=function(){(!br||!br.isPressed||br.startX>dt.clientWidth)&&(Ce.cache++,br?oc||(oc=requestAnimationFrame(ho)):ho(),oi||Js("scrollStart"),oi=Gn())},Ip=function(){hk=je.innerWidth,dk=je.innerHeight},nu=function(){Ce.cache++,!In&&!ck&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!fk||hk!==je.innerWidth||Math.abs(je.innerHeight-dk)>je.innerHeight*.25)&&jd.restart(!0)},Zs={},Qj=[],wk=function t(){return hn(Ae,"scrollEnd",t)||Is(!0)},Js=function(e){return Zs[e]&&Zs[e].map(function(n){return n()})||Qj},Sr=[],bk=function(e){for(var n=0;n<Sr.length;n+=5)(!e||Sr[n+4]&&Sr[n+4].query===e)&&(Sr[n].style.cssText=Sr[n+1],Sr[n].getBBox&&Sr[n].setAttribute("transform",Sr[n+2]||""),Sr[n+3].uncache=1)},hv=function(e,n){var r;for(Kn=0;Kn<Se.length;Kn++)r=Se[Kn],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));n&&bk(n),n||Js("revert")},Sk=function(e,n){Ce.cache++,(n||!Xn)&&Ce.forEach(function(r){return Qn(r)&&r.cacheID++&&(r.rec=0)}),Cr(e)&&(je.history.scrollRestoration=av=e)},Xn,Hs=0,ox,Zj=function(){if(ox!==Hs){var e=ox=Hs;requestAnimationFrame(function(){return e===Hs&&Is(!0)})}},kk=function(){dt.appendChild(Qa),lv=Qa.offsetHeight||je.innerHeight,dt.removeChild(Qa)},Is=function(e,n){if(oi&&!e){pn(Ae,"scrollEnd",wk);return}kk(),Xn=Ae.isRefreshing=!0,Ce.forEach(function(i){return Qn(i)&&++i.cacheID&&(i.rec=i())});var r=Js("refreshInit");uk&&Ae.sort(),n||hv(),Ce.forEach(function(i){Qn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Se.slice(0).forEach(function(i){return i.refresh()}),Se.forEach(function(i,o){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Se.forEach(function(i){var o=uo(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>o)&&i.setPositions(i.start,Math.max(i.start+1,o),!0)}),r.forEach(function(i){return i&&i.render&&i.render(-1)}),Ce.forEach(function(i){Qn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Sk(av,1),jd.pause(),Hs++,Xn=2,ho(2),Se.forEach(function(i){return Qn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Ae.isRefreshing=!1,Js("refresh")},vg=0,$f=1,Cu,ho=function(e){if(!Xn||e===2){Ae.isUpdating=!0,Cu&&Cu.update(0);var n=Se.length,r=Gn(),i=r-Ap>=50,o=n&&Se[0].scroll();if($f=vg>o?-1:1,Xn||(vg=o),i&&(oi&&!wh&&r-oi>200&&(oi=0,Js("scrollEnd")),Rf=Ap,Ap=r),$f<0){for(Kn=n;Kn-- >0;)Se[Kn]&&Se[Kn].update(0,i);$f=1}else for(Kn=0;Kn<n;Kn++)Se[Kn]&&Se[Kn].update(0,i);Ae.isUpdating=!1}oc=0},yg=[yk,_k,cv,uv,Zr+ku,Zr+wu,Zr+Su,Zr+bu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zf=yg.concat([Fs,Bs,"boxSizing","max"+_l,"max"+fv,"position",Zr,Xt,Xt+Su,Xt+wu,Xt+ku,Xt+bu]),Jj=function(e,n,r){Za(r);var i=e._gsap;if(i.spacerIsNative)Za(i.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},jp=function(e,n,r,i){if(!e._gsap.swappedIn){for(var o=yg.length,s=n.style,a=e.style,l;o--;)l=yg[o],s[l]=r[l];s.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(s.display="inline-block"),a[cv]=a[uv]="auto",s.flexBasis=r.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Fs]=mg(e,qn)+xn,s[Bs]=mg(e,sn)+xn,s[Xt]=a[Zr]=a[_k]=a[yk]="0",Za(i),a[Fs]=a["max"+_l]=r[Fs],a[Bs]=a["max"+fv]=r[Bs],a[Xt]=r[Xt],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},eR=/([A-Z])/g,Za=function(e){if(e){var n=e.t.style,r=e.length,i=0,o,s;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;i<r;i+=2)s=e[i+1],o=e[i],s?n[o]=s:n[o]&&n.removeProperty(o.replace(eR,"-$1").toLowerCase())}},lf=function(e){for(var n=zf.length,r=e.style,i=[],o=0;o<n;o++)i.push(zf[o],r[zf[o]]);return i.t=e,i},tR=function(e,n,r){for(var i=[],o=e.length,s=r?8:0,a;s<o;s+=2)a=e[s],i.push(a,a in n?n[a]:e[s+1]);return i.t=e.t,i},Ff={left:0,top:0},sx=function(e,n,r,i,o,s,a,l,c,f,h,d,p,v){Qn(e)&&(e=e(l)),Cr(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Df("0"+e.substr(3),r):0));var g=p?p.time():0,C,_,y;if(p&&p.seek(0),isNaN(e)||(e=+e),Mf(e))p&&(e=J.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&Lf(a,r,i,!0);else{Qn(n)&&(n=n(l));var b=(e||"0").split(" "),E,P,O,T;y=or(n,l)||dt,E=oo(y)||{},(!E||!E.left&&!E.top)&&Jr(y).display==="none"&&(T=y.style.display,y.style.display="block",E=oo(y),T?y.style.display=T:y.style.removeProperty("display")),P=Df(b[0],E[i.d]),O=Df(b[1]||"0",r),e=E[i.p]-c[i.p]-f+P+o-O,a&&Lf(a,O,i,r-O<20||a._isStart&&O>20),r-=r-O}if(v&&(l[v]=e||-.001,e<0&&(e=0)),s){var j=e+r,R=s._isStart;C="scroll"+i.d2,Lf(s,j,i,R&&j>20||!R&&(h?Math.max(dt[C],bi[C]):s.parentNode[C])<=j+1),h&&(c=oo(a),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+xn))}return p&&y&&(C=oo(y),p.seek(d),_=oo(y),p._caScrollDist=C[i.p]-_[i.p],e=e/p._caScrollDist*d),p&&p.seek(g),p?e:Math.round(e)},nR=/(webkit|moz|length|cssText|inset)/i,ax=function(e,n,r,i){if(e.parentNode!==n){var o=e.style,s,a;if(n===dt){e._stOrig=o.cssText,a=Jr(e);for(s in a)!+s&&!nR.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=r,o.left=i}else o.cssText=e._stOrig;J.core.getCache(e).uncache=1,n.appendChild(e)}},Ck=function(e,n,r){var i=n,o=i;return function(s){var a=Math.round(e());return a!==i&&a!==o&&Math.abs(a-i)>3&&Math.abs(a-o)>3&&(s=a,r&&r()),o=i,i=s,s}},uf=function(e,n,r){var i={};i[n.p]="+="+r,J.set(e,i)},lx=function(e,n){var r=os(e,n),i="_scroll"+n.p2,o=function s(a,l,c,f,h){var d=s.tween,p=l.onComplete,v={};c=c||r();var g=Ck(r,c,function(){d.kill(),s.tween=0});return h=f&&h||0,f=f||a-c,d&&d.kill(),l[i]=a,l.modifiers=v,v[i]=function(){return g(c+f*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){Ce.cache++,ho()},l.onComplete=function(){s.tween=0,p&&p.call(d)},d=s.tween=J.to(e,l),d};return e[i]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},pn(e,"wheel",r.wheelHandler),Ae.isTouch&&pn(e,"touchmove",r.wheelHandler),o},Ae=function(){function t(n,r){xa||t.register(J)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pg(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eu){this.update=this.refresh=this.kill=Di;return}r=nx(Cr(r)||Mf(r)||r.nodeType?{trigger:r}:r,sf);var o=r,s=o.onUpdate,a=o.toggleClass,l=o.id,c=o.onToggle,f=o.onRefresh,h=o.scrub,d=o.trigger,p=o.pin,v=o.pinSpacing,g=o.invalidateOnRefresh,C=o.anticipatePin,_=o.onScrubComplete,y=o.onSnapComplete,b=o.once,E=o.snap,P=o.pinReparent,O=o.pinSpacer,T=o.containerAnimation,j=o.fastScrollEnd,R=o.preventOverlaps,I=r.horizontal||r.containerAnimation&&r.horizontal!==!1?qn:sn,W=!h&&h!==0,F=or(r.scroller||je),re=J.core.getCache(F),ee=Qs(F),ne=("pinType"in r?r.pinType:es(F,"pinType")||ee&&"fixed")==="fixed",oe=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],te=W&&r.toggleActions.split(" "),$="markers"in r?r.markers:sf.markers,H=ee?0:parseFloat(Jr(F)["border"+I.p2+_l])||0,S=this,Q=r.onRefreshInit&&function(){return r.onRefreshInit(S)},ae=Yj(F,ee,I),it=Kj(F,ee),ue=0,Me=0,me=0,De=os(F,I),Y,Ke,ln,Tt,lt,Le,Pt,tn,nn,M,Ut,tr,ci,xt,Fr,Qi,ds,rn,Qe,$n,Tn,Br,vr,Hr,Pn,nr,Ot,Wt,$t,pt,yr,ve,zn,un,rr,Fn,ir,Zi,_r;if(S._startClamp=S._endClamp=!1,S._dir=I,C*=45,S.scroller=F,S.scroll=T?T.time.bind(T):De,Tt=De(),S.vars=r,i=i||r.animation,"refreshPriority"in r&&(uk=1,r.refreshPriority===-9999&&(Cu=S)),re.tweenScroll=re.tweenScroll||{top:lx(F,sn),left:lx(F,qn)},S.tweenTo=Y=re.tweenScroll[I.p],S.scrubDuration=function(X){zn=Mf(X)&&X,zn?ve?ve.duration(X):ve=J.to(i,{ease:"expo",totalProgress:"+=0",duration:zn,paused:!0,onComplete:function(){return _&&_(S)}}):(ve&&ve.progress(1).kill(),ve=0)},i&&(i.vars.lazy=!1,i._initted&&!S.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),S.animation=i.pause(),i.scrollTrigger=S,S.scrubDuration(h),pt=0,l||(l=i.vars.id)),E&&((!Cs(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in dt.style&&J.set(ee?[dt,bi]:F,{scrollBehavior:"auto"}),Ce.forEach(function(X){return Qn(X)&&X.target===(ee?wt.scrollingElement||bi:F)&&(X.smooth=!1)}),ln=Qn(E.snapTo)?E.snapTo:E.snapTo==="labels"?Gj(i):E.snapTo==="labelsDirectional"?qj(i):E.directional!==!1?function(X,ke){return dv(E.snapTo)(X,Gn()-Me<500?0:ke.direction)}:J.utils.snap(E.snapTo),un=E.duration||{min:.1,max:2},un=Cs(un)?$a(un.min,un.max):$a(un,un),rr=J.delayedCall(E.delay||zn/2||.1,function(){var X=De(),ke=Gn()-Me<500,se=Y.tween;if((ke||Math.abs(S.getVelocity())<10)&&!se&&!wh&&ue!==X){var ye=(X-Le)/xt,zt=i&&!W?i.totalProgress():ye,Ee=ke?0:(zt-yr)/(Gn()-Rf)*1e3||0,mt=J.utils.clamp(-ye,1-ye,ga(Ee/2)*Ee/.185),ot=ye+(E.inertia===!1?0:mt),Fe=$a(0,1,ln(ot,S)),Be=Math.round(Le+Fe*xt),_e=E,Bn=_e.onStart,et=_e.onInterrupt,gt=_e.onComplete;if(X<=Pt&&X>=Le&&Be!==X){if(se&&!se._initted&&se.data<=ga(Be-X))return;E.inertia===!1&&(mt=Fe-ye),Y(Be,{duration:un(ga(Math.max(ga(ot-zt),ga(Fe-zt))*.185/Ee/.05||0)),ease:E.ease||"power3",data:ga(Be-X),onInterrupt:function(){return rr.restart(!0)&&et&&et(S)},onComplete:function(){S.update(),ue=De(),pt=yr=i&&!W?i.totalProgress():S.progress,y&&y(S),gt&&gt(S)}},X,mt*xt,Be-X-mt*xt),Bn&&Bn(S,Y.tween)}}else S.isActive&&ue!==X&&rr.restart(!0)}).pause()),l&&(gg[l]=S),d=S.trigger=or(d||p!==!0&&p),_r=d&&d._gsap&&d._gsap.stRevert,_r&&(_r=_r(S)),p=p===!0?d:or(p),Cr(a)&&(a={targets:d,className:a}),p&&(v===!1||v===Zr||(v=!v&&p.parentNode&&p.parentNode.style&&Jr(p.parentNode).display==="flex"?!1:Xt),S.pin=p,Ke=J.core.getCache(p),Ke.spacer?Fr=Ke.pinState:(O&&(O=or(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),Ke.spacerIsNative=!!O,O&&(Ke.spacerState=lf(O))),Ke.spacer=rn=O||wt.createElement("div"),rn.classList.add("pin-spacer"),l&&rn.classList.add("pin-spacer-"+l),Ke.pinState=Fr=lf(p)),r.force3D!==!1&&J.set(p,{force3D:!0}),S.spacer=rn=Ke.spacer,$t=Jr(p),Hr=$t[v+I.os2],$n=J.getProperty(p),Tn=J.quickSetter(p,I.a,xn),jp(p,rn,$t),ds=lf(p)),$){tr=Cs($)?nx($,rx):rx,M=af("scroller-start",l,F,I,tr,0),Ut=af("scroller-end",l,F,I,tr,0,M),Qe=M["offset"+I.op.d2];var ce=or(es(F,"content")||F);tn=this.markerStart=af("start",l,ce,I,tr,Qe,0,T),nn=this.markerEnd=af("end",l,ce,I,tr,Qe,0,T),T&&(Zi=J.quickSetter([tn,nn],I.a,xn)),!ne&&!(Gi.length&&es(F,"fixedMarkers")===!0)&&(Xj(ee?dt:F),J.set([M,Ut],{force3D:!0}),nr=J.quickSetter(M,I.a,xn),Wt=J.quickSetter(Ut,I.a,xn))}if(T){var ie=T.vars.onUpdate,$e=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){S.update(0,0,1),ie&&ie.apply(T,$e||[])})}if(S.previous=function(){return Se[Se.indexOf(S)-1]},S.next=function(){return Se[Se.indexOf(S)+1]},S.revert=function(X,ke){if(!ke)return S.kill(!0);var se=X!==!1||!S.enabled,ye=In;se!==S.isReverted&&(se&&(Fn=Math.max(De(),S.scroll.rec||0),me=S.progress,ir=i&&i.progress()),tn&&[tn,nn,M,Ut].forEach(function(zt){return zt.style.display=se?"none":"block"}),se&&(In=S,S.update(se)),p&&(!P||!S.isActive)&&(se?Jj(p,rn,Fr):jp(p,rn,Jr(p),Pn)),se||S.update(se),In=ye,S.isReverted=se)},S.refresh=function(X,ke,se,ye){if(!((In||!S.enabled)&&!ke)){if(p&&X&&oi){pn(t,"scrollEnd",wk);return}!Xn&&Q&&Q(S),In=S,Y.tween&&!se&&(Y.tween.kill(),Y.tween=0),ve&&ve.pause(),g&&i&&i.revert({kill:!1}).invalidate(),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var zt=ae(),Ee=it(),mt=T?T.duration():uo(F,I),ot=xt<=.01,Fe=0,Be=ye||0,_e=Cs(se)?se.end:r.end,Bn=r.endTrigger||d,et=Cs(se)?se.start:r.start||(r.start===0||!d?0:p?"0 0":"0 100%"),gt=S.pinnedContainer=r.pinnedContainer&&or(r.pinnedContainer,S),cn=d&&Math.max(0,Se.indexOf(S))||0,fn=cn,vt,Vt,Ai,fi,Yt,At,Kt,Tl,di,Ni,xr,hi,So;for($&&Cs(se)&&(hi=J.getProperty(M,I.p),So=J.getProperty(Ut,I.p));fn--;)At=Se[fn],At.end||At.refresh(0,1)||(In=S),Kt=At.pin,Kt&&(Kt===d||Kt===p||Kt===gt)&&!At.isReverted&&(Ni||(Ni=[]),Ni.unshift(At),At.revert(!0,!0)),At!==Se[fn]&&(cn--,fn--);for(Qn(et)&&(et=et(S)),et=Z_(et,"start",S),Le=sx(et,d,zt,I,De(),tn,M,S,Ee,H,ne,mt,T,S._startClamp&&"_startClamp")||(p?-.001:0),Qn(_e)&&(_e=_e(S)),Cr(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Cr(et)?et.split(" ")[0]:"")+_e:(Fe=Df(_e.substr(2),zt),_e=Cr(et)?et:(T?J.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Le):Le)+Fe,Bn=d)),_e=Z_(_e,"end",S),Pt=Math.max(Le,sx(_e||(Bn?"100% 0":mt),Bn,zt,I,De()+Fe,nn,Ut,S,Ee,H,ne,mt,T,S._endClamp&&"_endClamp"))||-.001,Fe=0,fn=cn;fn--;)At=Se[fn],Kt=At.pin,Kt&&At.start-At._pinPush<=Le&&!T&&At.end>0&&(vt=At.end-(S._startClamp?Math.max(0,At.start):At.start),(Kt===d&&At.start-At._pinPush<Le||Kt===gt)&&isNaN(et)&&(Fe+=vt*(1-At.progress)),Kt===p&&(Be+=vt));if(Le+=Fe,Pt+=Fe,S._startClamp&&(S._startClamp+=Fe),S._endClamp&&!Xn&&(S._endClamp=Pt||-.001,Pt=Math.min(Pt,uo(F,I))),xt=Pt-Le||(Le-=.01)&&.001,ot&&(me=J.utils.clamp(0,1,J.utils.normalize(Le,Pt,Fn))),S._pinPush=Be,tn&&Fe&&(vt={},vt[I.a]="+="+Fe,gt&&(vt[I.p]="-="+De()),J.set([tn,nn],vt)),p)vt=Jr(p),fi=I===sn,Ai=De(),Br=parseFloat($n(I.a))+Be,!mt&&Pt>1&&(xr=(ee?wt.scrollingElement||bi:F).style,xr={style:xr,value:xr["overflow"+I.a.toUpperCase()]},ee&&Jr(dt)["overflow"+I.a.toUpperCase()]!=="scroll"&&(xr.style["overflow"+I.a.toUpperCase()]="scroll")),jp(p,rn,vt),ds=lf(p),Vt=oo(p,!0),Tl=ne&&os(F,fi?qn:sn)(),v&&(Pn=[v+I.os2,xt+Be+xn],Pn.t=rn,fn=v===Xt?mg(p,I)+xt+Be:0,fn&&Pn.push(I.d,fn+xn),Za(Pn),gt&&Se.forEach(function(pi){pi.pin===gt&&pi.vars.pinSpacing!==!1&&(pi._subPinOffset=!0)}),ne&&De(Fn)),ne&&(Yt={top:Vt.top+(fi?Ai-Le:Tl)+xn,left:Vt.left+(fi?Tl:Ai-Le)+xn,boxSizing:"border-box",position:"fixed"},Yt[Fs]=Yt["max"+_l]=Math.ceil(Vt.width)+xn,Yt[Bs]=Yt["max"+fv]=Math.ceil(Vt.height)+xn,Yt[Zr]=Yt[Zr+Su]=Yt[Zr+wu]=Yt[Zr+ku]=Yt[Zr+bu]="0",Yt[Xt]=vt[Xt],Yt[Xt+Su]=vt[Xt+Su],Yt[Xt+wu]=vt[Xt+wu],Yt[Xt+ku]=vt[Xt+ku],Yt[Xt+bu]=vt[Xt+bu],Qi=tR(Fr,Yt,P),Xn&&De(0)),i?(di=i._initted,Pp(1),i.render(i.duration(),!0,!0),vr=$n(I.a)-Br+xt+Be,Ot=Math.abs(xt-vr)>1,ne&&Ot&&Qi.splice(Qi.length-2,2),i.render(0,!0,!0),di||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Pp(0)):vr=xt,xr&&(xr.value?xr.style["overflow"+I.a.toUpperCase()]=xr.value:xr.style.removeProperty("overflow-"+I.a));else if(d&&De()&&!T)for(Vt=d.parentNode;Vt&&Vt!==dt;)Vt._pinOffset&&(Le-=Vt._pinOffset,Pt-=Vt._pinOffset),Vt=Vt.parentNode;Ni&&Ni.forEach(function(pi){return pi.revert(!1,!0)}),S.start=Le,S.end=Pt,Tt=lt=Xn?Fn:De(),!T&&!Xn&&(Tt<Fn&&De(Fn),S.scroll.rec=0),S.revert(!1,!0),Me=Gn(),rr&&(ue=-1,rr.restart(!0)),In=0,i&&W&&(i._initted||ir)&&i.progress()!==ir&&i.progress(ir||0,!0).render(i.time(),!0,!0),(ot||me!==S.progress||T)&&(i&&!W&&i.totalProgress(T&&Le<-.001&&!me?J.utils.normalize(Le,Pt,0):me,!0),S.progress=ot||(Tt-Le)/xt===me?0:me),p&&v&&(rn._pinOffset=Math.round(S.progress*vr)),ve&&ve.invalidate(),isNaN(hi)||(hi-=J.getProperty(M,I.p),So-=J.getProperty(Ut,I.p),uf(M,I,hi),uf(tn,I,hi-(ye||0)),uf(Ut,I,So),uf(nn,I,So-(ye||0))),ot&&!Xn&&S.update(),f&&!Xn&&!ci&&(ci=!0,f(S),ci=!1)}},S.getVelocity=function(){return(De()-lt)/(Gn()-Rf)*1e3||0},S.endAnimation=function(){Yl(S.callbackAnimation),i&&(ve?ve.progress(1):i.paused()?W||Yl(i,S.direction<0,1):Yl(i,i.reversed()))},S.labelToScroll=function(X){return i&&i.labels&&(Le||S.refresh()||Le)+i.labels[X]/i.duration()*xt||0},S.getTrailing=function(X){var ke=Se.indexOf(S),se=S.direction>0?Se.slice(0,ke).reverse():Se.slice(ke+1);return(Cr(X)?se.filter(function(ye){return ye.vars.preventOverlaps===X}):se).filter(function(ye){return S.direction>0?ye.end<=Le:ye.start>=Pt})},S.update=function(X,ke,se){if(!(T&&!se&&!X)){var ye=Xn===!0?Fn:S.scroll(),zt=X?0:(ye-Le)/xt,Ee=zt<0?0:zt>1?1:zt||0,mt=S.progress,ot,Fe,Be,_e,Bn,et,gt,cn;if(ke&&(lt=Tt,Tt=T?De():ye,E&&(yr=pt,pt=i&&!W?i.totalProgress():Ee)),C&&!Ee&&p&&!In&&!tf&&oi&&Le<ye+(ye-lt)/(Gn()-Rf)*C&&(Ee=1e-4),Ee!==mt&&S.enabled){if(ot=S.isActive=!!Ee&&Ee<1,Fe=!!mt&&mt<1,et=ot!==Fe,Bn=et||!!Ee!=!!mt,S.direction=Ee>mt?1:-1,S.progress=Ee,Bn&&!In&&(Be=Ee&&!mt?0:Ee===1?1:mt===1?2:3,W&&(_e=!et&&te[Be+1]!=="none"&&te[Be+1]||te[Be],cn=i&&(_e==="complete"||_e==="reset"||_e in i))),R&&(et||cn)&&(cn||h||!i)&&(Qn(R)?R(S):S.getTrailing(R).forEach(function(Ai){return Ai.endAnimation()})),W||(ve&&!In&&!tf?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",Ee,i._tTime/i._tDur):(ve.vars.totalProgress=Ee,ve.invalidate().restart())):i&&i.totalProgress(Ee,!!(In&&(Me||X)))),p){if(X&&v&&(rn.style[v+I.os2]=Hr),!ne)Tn(tu(Br+vr*Ee));else if(Bn){if(gt=!X&&Ee>mt&&Pt+1>ye&&ye+1>=uo(F,I),P)if(!X&&(ot||gt)){var fn=oo(p,!0),vt=ye-Le;ax(p,dt,fn.top+(I===sn?vt:0)+xn,fn.left+(I===sn?0:vt)+xn)}else ax(p,rn);Za(ot||gt?Qi:ds),Ot&&Ee<1&&ot||Tn(Br+(Ee===1&&!gt?vr:0))}}E&&!Y.tween&&!In&&!tf&&rr.restart(!0),a&&(et||b&&Ee&&(Ee<1||!Op))&&Rd(a.targets).forEach(function(Ai){return Ai.classList[ot||b?"add":"remove"](a.className)}),s&&!W&&!X&&s(S),Bn&&!In?(W&&(cn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),s&&s(S)),(et||!Op)&&(c&&et&&Np(S,c),oe[Be]&&Np(S,oe[Be]),b&&(Ee===1?S.kill(!1,1):oe[Be]=0),et||(Be=Ee===1?1:3,oe[Be]&&Np(S,oe[Be]))),j&&!ot&&Math.abs(S.getVelocity())>(Mf(j)?j:2500)&&(Yl(S.callbackAnimation),ve?ve.progress(1):Yl(i,_e==="reverse"?1:!Ee,1))):W&&s&&!In&&s(S)}if(Wt){var Vt=T?ye/T.duration()*(T._caScrollDist||0):ye;nr(Vt+(M._isFlipped?1:0)),Wt(Vt)}Zi&&Zi(-ye/T.duration()*(T._caScrollDist||0))}},S.enable=function(X,ke){S.enabled||(S.enabled=!0,pn(F,"resize",nu),ee||pn(F,"scroll",va),Q&&pn(t,"refreshInit",Q),X!==!1&&(S.progress=me=0,Tt=lt=ue=De()),ke!==!1&&S.refresh())},S.getTween=function(X){return X&&Y?Y.tween:ve},S.setPositions=function(X,ke,se,ye){if(T){var zt=T.scrollTrigger,Ee=T.duration(),mt=zt.end-zt.start;X=zt.start+mt*X/Ee,ke=zt.start+mt*ke/Ee}S.refresh(!1,!1,{start:J_(X,se&&!!S._startClamp),end:J_(ke,se&&!!S._endClamp)},ye),S.update()},S.adjustPinSpacing=function(X){if(Pn&&X){var ke=Pn.indexOf(I.d)+1;Pn[ke]=parseFloat(Pn[ke])+X+xn,Pn[1]=parseFloat(Pn[1])+X+xn,Za(Pn)}},S.disable=function(X,ke){if(S.enabled&&(X!==!1&&S.revert(!0,!0),S.enabled=S.isActive=!1,ke||ve&&ve.pause(),Fn=0,Ke&&(Ke.uncache=1),Q&&hn(t,"refreshInit",Q),rr&&(rr.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!ee)){for(var se=Se.length;se--;)if(Se[se].scroller===F&&Se[se]!==S)return;hn(F,"resize",nu),ee||hn(F,"scroll",va)}},S.kill=function(X,ke){S.disable(X,ke),ve&&!ke&&ve.kill(),l&&delete gg[l];var se=Se.indexOf(S);se>=0&&Se.splice(se,1),se===Kn&&$f>0&&Kn--,se=0,Se.forEach(function(ye){return ye.scroller===S.scroller&&(se=1)}),se||Xn||(S.scroll.rec=0),i&&(i.scrollTrigger=null,X&&i.revert({kill:!1}),ke||i.kill()),tn&&[tn,nn,M,Ut].forEach(function(ye){return ye.parentNode&&ye.parentNode.removeChild(ye)}),Cu===S&&(Cu=0),p&&(Ke&&(Ke.uncache=1),se=0,Se.forEach(function(ye){return ye.pin===p&&se++}),se||(Ke.spacer=0)),r.onKill&&r.onKill(S)},Se.push(S),S.enable(!1,!1),_r&&_r(S),i&&i.add&&!xt){var ut=S.update;S.update=function(){S.update=ut,Le||Pt||S.refresh()},J.delayedCall(.01,S.update),xt=.01,Le=Pt=0}else S.refresh();p&&Zj()},t.register=function(r){return xa||(J=r||mk(),pk()&&window.document&&t.enable(),xa=eu),xa},t.defaults=function(r){if(r)for(var i in r)sf[i]=r[i];return sf},t.disable=function(r,i){eu=0,Se.forEach(function(s){return s[i?"kill":"disable"](r)}),hn(je,"wheel",va),hn(wt,"scroll",va),clearInterval(ef),hn(wt,"touchcancel",Di),hn(dt,"touchstart",Di),rf(hn,wt,"pointerdown,touchstart,mousedown",ex),rf(hn,wt,"pointerup,touchend,mouseup",tx),jd.kill(),nf(hn);for(var o=0;o<Ce.length;o+=3)of(hn,Ce[o],Ce[o+1]),of(hn,Ce[o],Ce[o+2])},t.enable=function(){if(je=window,wt=document,bi=wt.documentElement,dt=wt.body,J&&(Rd=J.utils.toArray,$a=J.utils.clamp,pg=J.core.context||Di,Pp=J.core.suppressOverwrites||Di,av=je.history.scrollRestoration||"auto",vg=je.pageYOffset,J.core.globals("ScrollTrigger",t),dt)){eu=1,Qa=document.createElement("div"),Qa.style.height="100vh",Qa.style.position="absolute",kk(),Vj(),en.register(J),t.isTouch=en.isTouch,Po=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pn(je,"wheel",va),lk=[je,wt,bi,dt],J.matchMedia?(t.matchMedia=function(l){var c=J.matchMedia(),f;for(f in l)c.add(f,l[f]);return c},J.addEventListener("matchMediaInit",function(){return hv()}),J.addEventListener("matchMediaRevert",function(){return bk()}),J.addEventListener("matchMedia",function(){Is(0,1),Js("matchMedia")}),J.matchMedia("(orientation: portrait)",function(){return Ip(),Ip})):console.warn("Requires GSAP 3.11.0 or later"),Ip(),pn(wt,"scroll",va);var r=dt.style,i=r.borderTopStyle,o=J.core.Animation.prototype,s,a;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=oo(dt),sn.m=Math.round(s.top+sn.sc())||0,qn.m=Math.round(s.left+qn.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),ef=setInterval(ix,250),J.delayedCall(.5,function(){return tf=0}),pn(wt,"touchcancel",Di),pn(dt,"touchstart",Di),rf(pn,wt,"pointerdown,touchstart,mousedown",ex),rf(pn,wt,"pointerup,touchend,mouseup",tx),hg=J.utils.checkPrefix("transform"),zf.push(hg),xa=Gn(),jd=J.delayedCall(.2,Is).pause(),wa=[wt,"visibilitychange",function(){var l=je.innerWidth,c=je.innerHeight;wt.hidden?(q_=l,Q_=c):(q_!==l||Q_!==c)&&nu()},wt,"DOMContentLoaded",Is,je,"load",Is,je,"resize",nu],nf(pn),Se.forEach(function(l){return l.enable(0,1)}),a=0;a<Ce.length;a+=3)of(hn,Ce[a],Ce[a+1]),of(hn,Ce[a],Ce[a+2])}},t.config=function(r){"limitCallbacks"in r&&(Op=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(ef)||(ef=i)&&setInterval(ix,i),"ignoreMobileResize"in r&&(fk=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(nf(hn)||nf(pn,r.autoRefreshEvents||"none"),ck=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var o=or(r),s=Ce.indexOf(o),a=Qs(o);~s&&Ce.splice(s,a?6:2),i&&(a?Gi.unshift(je,i,dt,i,bi,i):Gi.unshift(o,i))},t.clearMatchMedia=function(r){Se.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,o){var s=(Cr(r)?or(r):r).getBoundingClientRect(),a=s[o?Fs:Bs]*i||0;return o?s.right-a>0&&s.left+a<je.innerWidth:s.bottom-a>0&&s.top+a<je.innerHeight},t.positionInViewport=function(r,i,o){Cr(r)&&(r=or(r));var s=r.getBoundingClientRect(),a=s[o?Fs:Bs],l=i==null?a/2:i in Md?Md[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return o?(s.left+l)/je.innerWidth:(s.top+l)/je.innerHeight},t.killAll=function(r){if(Se.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var i=Zs.killAll||[];Zs={},i.forEach(function(o){return o()})}},t}();Ae.version="3.12.2";Ae.saveStyles=function(t){return t?Rd(t).forEach(function(e){if(e&&e.style){var n=Sr.indexOf(e);n>=0&&Sr.splice(n,5),Sr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),J.core.getCache(e),pg())}}):Sr};Ae.revert=function(t,e){return hv(!t,e)};Ae.create=function(t,e){return new Ae(t,e)};Ae.refresh=function(t){return t?nu():(xa||Ae.register())&&Is(!0)};Ae.update=function(t){return++Ce.cache&&ho(t===!0?2:0)};Ae.clearScrollMemory=Sk;Ae.maxScroll=function(t,e){return uo(t,e?qn:sn)};Ae.getScrollFunc=function(t,e){return os(or(t),e?qn:sn)};Ae.getById=function(t){return gg[t]};Ae.getAll=function(){return Se.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Ae.isScrolling=function(){return!!oi};Ae.snapDirectional=dv;Ae.addEventListener=function(t,e){var n=Zs[t]||(Zs[t]=[]);~n.indexOf(e)||n.push(e)};Ae.removeEventListener=function(t,e){var n=Zs[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};Ae.batch=function(t,e){var n=[],r={},i=e.interval||.016,o=e.batchMax||1e9,s=function(c,f){var h=[],d=[],p=J.delayedCall(i,function(){f(h,d),h=[],d=[]}).pause();return function(v){h.length||p.restart(!0),h.push(v.trigger),d.push(v),o<=h.length&&p.progress(1)}},a;for(a in e)r[a]=a.substr(0,2)==="on"&&Qn(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return Qn(o)&&(o=o(),pn(Ae,"refresh",function(){return o=e.batchMax()})),Rd(t).forEach(function(l){var c={};for(a in r)c[a]=r[a];c.trigger=l,n.push(Ae.create(c))}),n};var ux=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},Rp=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(en.isTouch?" pinch-zoom":""):"none",e===bi&&t(dt,n)},cf={auto:1,scroll:1},rR=function(e){var n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,s=o._gsap||J.core.getCache(o),a=Gn(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==dt&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(cf[(l=Jr(o)).overflowY]||cf[l.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==r&&!Qs(o)&&(cf[(l=Jr(o)).overflowY]||cf[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Ek=function(e,n,r,i){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&rR,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&pn(wt,en.eventTypes[0],fx,!1,!0)},onDisable:function(){return hn(wt,en.eventTypes[0],fx,!0)}})},iR=/(input|label|select|textarea)/i,cx,fx=function(e){var n=iR.test(e.target.tagName);(n||cx)&&(e._gsapAllow=!0,cx=n)},oR=function(e){Cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,o=n.allowNestedScroll,s=n.onRelease,a,l,c=or(e.target)||bi,f=J.core.globals().ScrollSmoother,h=f&&f.get(),d=Po&&(e.content&&or(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=os(c,sn),v=os(c,qn),g=1,C=(en.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,_=0,y=Qn(i)?function(){return i(a)}:function(){return i||2.8},b,E,P=Ek(c,e.type,!0,o),O=function(){return E=!1},T=Di,j=Di,R=function(){l=uo(c,sn),j=$a(Po?1:0,l),r&&(T=$a(0,uo(c,qn))),b=Hs},I=function(){d._gsap.y=tu(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},W=function(){if(E){requestAnimationFrame(O);var $=tu(a.deltaY/2),H=j(p.v-$);if(d&&H!==p.v+p.offset){p.offset=H-p.v;var S=tu((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",d._gsap.y=S+"px",p.cacheID=Ce.cache,ho()}return!0}p.offset&&I(),E=!0},F,re,ee,ne,oe=function(){R(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return d&&J.set(d,{y:"+=0"}),e.ignoreCheck=function(te){return Po&&te.type==="touchmove"&&W()||g>1.05&&te.type!=="touchstart"||a.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){E=!1;var te=g;g=tu((je.visualViewport&&je.visualViewport.scale||1)/C),F.pause(),te!==g&&Rp(c,g>1.01?!0:r?!1:"x"),re=v(),ee=p(),R(),b=Hs},e.onRelease=e.onGestureStart=function(te,$){if(p.offset&&I(),!$)ne.restart(!0);else{Ce.cache++;var H=y(),S,Q;r&&(S=v(),Q=S+H*.05*-te.velocityX/.227,H*=ux(v,S,Q,uo(c,qn)),F.vars.scrollX=T(Q)),S=p(),Q=S+H*.05*-te.velocityY/.227,H*=ux(p,S,Q,uo(c,sn)),F.vars.scrollY=j(Q),F.invalidate().duration(H).play(.01),(Po&&F.vars.scrollY>=l||S>=l-1)&&J.to({},{onUpdate:oe,duration:H})}s&&s(te)},e.onWheel=function(){F._ts&&F.pause(),Gn()-_>1e3&&(b=0,_=Gn())},e.onChange=function(te,$,H,S,Q){if(Hs!==b&&R(),$&&r&&v(T(S[2]===$?re+(te.startX-te.x):v()+$-S[1])),H){p.offset&&I();var ae=Q[2]===H,it=ae?ee+te.startY-te.y:p()+H-Q[1],ue=j(it);ae&&it!==ue&&(ee+=ue-it),p(ue)}(H||$)&&ho()},e.onEnable=function(){Rp(c,r?!1:"x"),Ae.addEventListener("refresh",oe),pn(je,"resize",oe),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=v.smooth=!1),P.enable()},e.onDisable=function(){Rp(c,!0),hn(je,"resize",oe),Ae.removeEventListener("refresh",oe),P.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=Po,Po&&!p()&&p(1),Po&&J.ticker.add(Di),ne=a._dc,F=J.to(a,{ease:"power4",paused:!0,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ck(p,p(),function(){return F.pause()})},onUpdate:ho,onComplete:ne.vars.onComplete}),a};Ae.sort=function(t){return Se.sort(t||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};Ae.observe=function(t){return new en(t)};Ae.normalizeScroll=function(t){if(typeof t>"u")return br;if(t===!0&&br)return br.enable();if(t===!1)return br&&br.kill();var e=t instanceof en?t:oR(t);return br&&br.target===e.target&&br.kill(),Qs(e.target)&&(br=e),e};Ae.core={_getVelocityProp:dg,_inputObserver:Ek,_scrollers:Ce,_proxies:Gi,bridge:{ss:function(){oi||Js("scrollStart"),oi=Gn()},ref:function(){return In}}};mk()&&J.registerPlugin(Ae);const sR=["Think","Tinker","Transform"],aR=200,lR=2e3,uR=100,cR=()=>{const[t,e]=L.useState({name:"",email:"",message:"",send:!1}),[n,r]=L.useState({name:!1,email:!1,message:!1,send:!1});function i(v){const{name:g,value:C}=v.target;e(_=>({..._,[g]:C}))}const o=L.useRef(null);function s(v){const g=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;v.preventDefault(),r({name:!t.name,email:!(t.email&&g.test(t.email)),message:!t.message,send:!!(t.name&&t.email&&g.test(t.email)&&t.message)}),t.name&&t.email&&g.test(t.email)&&t.message&&fetch("https://script.google.com/macros/s/AKfycbweHBn46bB_ikYWUgVWtfV1S-IAB3bxLCA5eV0zHFKaDArWNECVvsr05AESUfj8A-St/exec",{method:"POST",body:new FormData(o.current)}).then(C=>e({name:"",email:"",message:"",send:!0}),setTimeout(()=>{e({name:"",email:"",message:"",send:!1})},8e3)).catch(C=>console.log(C))}const a=x.jsxs("div",{className:"send-confirm",children:[x.jsx("p",{children:"Thanks for filling the form"}),x.jsx("p",{children:"We will reach out to you soon!"})]}),[l,c]=L.useState(f());function f(){return{width:window.innerWidth,height:window.innerHeight}}L.useEffect(()=>{const v=()=>{c(f())};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}},[l]),To.registerPlugin(Ae);const h=L.useRef(null),d=L.useRef(null),p=L.useRef(null);return l.width>=1200?L.useEffect(()=>{const v=h.current;To.fromTo(v,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:v,start:"50px 45%",end:"+=1290"}});const g=d.current;To.fromTo(g,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:g,start:"50px 45%",end:"+=1250"}})},[]):l.width<=770?L.useEffect(()=>{const v=h.current;To.fromTo(v,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:v,start:"-55% 50%",end:"+=1280"}});const g=d.current;To.fromTo(g,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:g,start:"-65% 50%",end:"+=1250"}})},[]):L.useEffect(()=>{const v=h.current;To.fromTo(v,{autoAlpha:0,translateX:"10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:v,start:"-60% 50%",end:"+=1320"}});const g=d.current;To.fromTo(g,{autoAlpha:0,translateX:"-10%"},{autoAlpha:1,translateX:"0",duration:2,scrollTrigger:{trigger:g,start:"-60% 50%",end:"+=1300"}})},[]),x.jsxs(fR,{children:[x.jsx("div",{className:"ellipse1"}),x.jsx("div",{className:"ellipse2"}),x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"}),x.jsx("div",{className:"circle5"}),x.jsxs("div",{className:"container grid grid-two-column",children:[x.jsxs("div",{className:"section-hero-data",children:[x.jsx("h2",{className:"hero-heading",children:"Contact us!"}),x.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),x.jsx("div",{className:"hero-bottom",children:x.jsx(kl,{words:sR,interval:aR,typingDelay:lR,erasingDelay:uR})})]}),x.jsx("div",{className:"section-hero-image",children:x.jsx("picture",{children:x.jsx("img",{src:"./images/Contacts.svg",alt:"image",className:"hero-img",ref:p})})})]}),x.jsxs("div",{className:"section-map-message",children:[x.jsx("div",{className:"section-map",ref:d,children:x.jsx("div",{className:"map-iframe",children:x.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.1025061004142!2d78.12566068992736!3d17.597490805694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf706d15f396d%3A0xd8767eda72322c70!2sTinkerers'%20Laboratory%20IITH!5e0!3m2!1sen!2sin!4v1688018342297!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})}),x.jsxs("div",{className:"section-message",ref:h,children:[x.jsx("h4",{children:"Message Us"}),x.jsxs("form",{className:"section-message-box",onSubmit:s,noValidate:!0,ref:o,children:[x.jsxs("div",{className:"section-message-box-wraps",children:[x.jsx("label",{htmlFor:"message-name",children:"Name"}),x.jsx("input",{type:"text",placeholder:"Enter here",id:"message-name",name:"name",value:t.name,onChange:i})]}),n.name&&x.jsx("div",{className:"message-warning",children:"Enter your name"}),x.jsxs("div",{className:"section-message-box-wraps",children:[x.jsx("label",{htmlFor:"message-email",children:"Mail ID"}),x.jsx("input",{type:"email",placeholder:"Enter here",id:"message-email",name:"email",value:t.email,onChange:i}),n.email&&x.jsx("div",{className:"message-warning",children:"Enter your email"})]}),x.jsxs("div",{className:"section-message-box-wraps",children:[x.jsx("label",{htmlFor:"message-message",children:"Enter your Message"}),x.jsx("textarea",{placeholder:"Enter here",id:"message-message",name:"message",value:t.message,onChange:i}),n.message&&x.jsx("div",{className:"message-warning",children:"Enter your message"})]}),x.jsx("div",{className:"section-message-submit",children:x.jsx("button",{children:"Submit"})}),t.send&&a]})]})]})]})},fR=Lt.section`
  padding: 9rem 0;

  .ellipse2 {
    position: absolute;
    width: 681px;
    height: 669px;
    left: 0;
    top: -441px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .ellipse1 {
    position: absolute;
    width: 808px;

    @media (max-width: 1200px) {
      width: 700px;
    }
    height: 794px;
    left: -363px;
    top: -349px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 8rem;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 5rem;
    line-height: 7rem;
  }

  .hero-bottom{
    position: absolute;
    width: 1008px;
    height: 525px;
    left: 32rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  picture {
    animation: leftright 6s infinite linear;
  }

  @keyframes leftright {
    0%,
    100% {
      transform: translateX(3%);
    }
    50% {
      transform: translateX(1%);
    }
  }

  .section-map-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    height: 105vh;
  }
  .section-map {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-left: -7vw;
    margin-top: 12vh;
  }

  .section-message {
    height: 80vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-message-box {
    width: 40vw;
    max-width: 49rem;
    height: max-content;
    border-radius: 68px;
    background: #FFF;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    margin-top: 1.5rem;

  }

  .section-message h4 {
    color: #6C10C6;
    font-size: 4rem;
    font-family: Inter;
  }

  .section-message-box label {
    font-size: 1.65rem;
    font-weight: 700;
    font-family: Inter;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }

  .section-message-box-wraps {
    display: flex;
    flex-direction: column;
  }

  #message-name, #message-email {
    width: 100%;
    height: 4.6rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    line-height: 5.3125rem;
    padding:  0.65rem 1.5rem;
    border: none;
    outline: none;
    font-family: Inter;
    margin-top: 0.2rem;
  }

  #message-message {
    width: 100%;
    height: 16rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    resize: none;
    padding:  0.9rem 1.6rem;
    border: none;
    outline:none;
    font-family: Inter;
    margin-top: 0.1rem;
  }

  .section-message-submit button {
    margin-top: 1.5rem;
    width: 100%;
    height: 5.5rem;
    background: #6C10C6;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 16px;
    line-height: 5.3125rem;
    font-family: Inter;
    border: none;
  } 

  .map-iframe {
    z-index: 999;
    margin-left: 10rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    width: 35vw;
    height: 69vh;
    min-width: 300px;
    min-height: 410px;
    max-width: 500px;
    max-height: 700px;
  }

  .message-warning {
    color: red;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: -0.7rem;
    font-size: 1.15rem;
  }

  .send-confirm {
    color: #4CAF50;
    font-size: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    visibility: hidden;
    animation-name:confirm;
    animation-duration: 4s;
    transition: 2s;
    margin-bottom: -6rem;
  }

  .send-confirm p{
    margin: 0;
    
  }
  @keyframes confirm {
  0% {
    visibility:hidden;
    opacity:0;
    margin-bottom: -6rem;
  }
  50% {
    visibility:visible;
    margin-bottom: 0;
    opacity:1;
  }
  100% {
    visibility:hidden;
    margin-bottom: -6rem;
    opacity: 0;
  }
}

  @media (max-width: 1400px){
    .circle4,.circle5 {
      visibility: hidden;
    }
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 5.5rem;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 3rem;
    line-height: 4rem;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 39px;
    width: auto;
    height: 1rem;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }

    .section-map-message {
      height: 100vh;
    }
    .section-map {
      margin: 23vh 0 0 0;
      
    }

    .section-message {
      margin: 0;
      margin-top: 10vh;
      width: 100%;
    }

    .section-message-box {
      width: 100%;
    }
  }

    @media (max-width:768px){

      .section-map-message {
        display: flex;
        flex-direction: column;
        height: 180vh;
        padding: 0;
        margin-top: 8vh;
      }

      .map-iframe {
        width: 80vw;
        margin-left: -3vw;
      }

      .section-message {
        width: 84vw;
        order:1;
      }
      .section-message-box {
        width: 100%;
        /* padding:3.5rem 3rem;
        border-radius: 6rem; */
      }
      .section-map {
        width: 100%;
        order:2;
      }
      .ellipse1, .ellipse2 {
        display:none;
      }
    }

    @media (max-height: 600px) {
      .section-map{
        margin-top: 40vh;
      }
    }
`,dR=()=>{const[t,e]=L.useState(!1),n=()=>{e(!t)};return x.jsxs(hR,{children:[x.jsx(pR,{children:x.jsx("img",{src:"./images/LogoNav.svg",alt:""})}),x.jsxs(mR,{onClick:n,className:t?"active":"",children:[x.jsx("div",{}),x.jsx("div",{}),x.jsx("div",{})]}),x.jsx(gR,{showMenu:t,className:t?"active":"",children:x.jsxs(vR,{children:[x.jsx(ya,{children:x.jsx(Qr,{to:"/",onClick:n,children:"Home"})}),x.jsx(ya,{children:x.jsx(Qr,{to:"/team",onClick:n,children:"Team"})}),x.jsx(ya,{children:x.jsx(Qr,{to:"/events",onClick:n,children:"Events"})}),x.jsx(ya,{children:x.jsx(Qr,{to:"/inventory",onClick:n,children:"Inventory"})}),x.jsx(ya,{children:x.jsx(Qr,{to:"/projects",onClick:n,children:"Projects"})}),x.jsx(ya,{children:x.jsx(Qr,{to:"/contacts",onClick:n,children:"Contacts"})})]})})]})},hR=Lt.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`,pR=Lt.div`
  font-weight: bold;
  font-size: 24px;
  padding-left: 5rem;
`,mR=Lt.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: fixed;
    top: 4rem;
    right: 2rem;
    display: flex;
    z-index: 15;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
    transition: transform 0.3s, background-color 0.3s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.active {
    div:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`,gR=Lt.div`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
    transform: ${({showMenu:t})=>t?"translateY(0%)":"translateY(-100%)"};
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`,vR=Lt.ul`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem;
  }
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,ya=Lt.li`
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    display: flex;
    align-items: center;

    transition: color 0.3s;
    padding: 2vw;

    &:hover,
    &:active {
      color: ${({theme:t})=>t.colors.nav_color};
    }
    color: #484848;
  }
`;var pv={},Tk={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(Tk);var Pk=Tk.exports,Mp={};const yR=IC(P4);var dx;function Ok(){return dx||(dx=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=yR}(Mp)),Mp}var _R=Pk;Object.defineProperty(pv,"__esModule",{value:!0});var Ak=pv.default=void 0,xR=_R(Ok()),wR=x,bR=(0,xR.default)((0,wR.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");Ak=pv.default=bR;var mv={},SR=Pk;Object.defineProperty(mv,"__esModule",{value:!0});var _g=mv.default=void 0,kR=SR(Ok()),CR=x,ER=(0,kR.default)((0,CR.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");_g=mv.default=ER;const TR=["hink","inker","ransform"],PR=300,OR=2e3,AR=150,NR=()=>x.jsxs(IR,{children:[x.jsxs("div",{className:"top",children:[x.jsxs("div",{className:"subfooter",children:[x.jsx("img",{src:"./images/Vector.svg",alt:"logo"}),x.jsx("div",{className:"line"}),x.jsxs("div",{className:"names",children:[x.jsx("div",{children:"Tinkerers' Lab"}),x.jsx("div",{children:"IIT Hyderabad"})]})]}),x.jsxs("div",{className:"tagline",children:["T",x.jsx(kl,{words:TR,interval:PR,typingDelay:OR,erasingDelay:AR})]})]}),x.jsxs("footer",{children:[x.jsxs("div",{className:"container grid grid-three-column",children:[x.jsxs("div",{className:"location",children:[x.jsx("div",{className:"bold",children:x.jsx("b",{children:"Location"})}),x.jsx("div",{children:x.jsx("p",{children:"Beside Aryabatta Hostel. Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India."})})]}),x.jsxs("div",{className:"handels",children:[x.jsx("div",{className:"bold",children:x.jsx("b",{children:"Reach us"})}),x.jsxs("div",{className:"accounts",children:[x.jsx("picture",{children:x.jsx(Qr,{to:"https://www.facebook.com/tl.iith/",target:"_blank",children:x.jsx("img",{src:"./images/img1.svg",alt:"facebook"})})}),x.jsx("picture",{children:x.jsx(Qr,{to:"https://www.instagram.com/tinkererslab_iith",target:"_blank",children:x.jsx("img",{src:"./images/img5.svg",alt:"instagram"})})}),x.jsx("picture",{children:x.jsx(Qr,{to:"https://www.linkedin.com/in/tinkerers-lab-iith/",target:"_blank",children:x.jsx("img",{src:"./images/img2.svg",alt:"linkedin"})})}),x.jsx("picture",{children:x.jsx(Qr,{to:"https://discord.gg/cZFaRjyw",target:"_blank",children:x.jsx("img",{src:"./images/img4.svg",alt:"discord"})})}),x.jsx("picture",{children:x.jsx(Qr,{to:"https://github.com/TinkerersLabIITH",target:"_blank",children:x.jsx("img",{src:"./images/img3.svg",alt:"github"})})})]})]}),x.jsxs("div",{className:"contacts",children:[x.jsxs("div",{children:[x.jsx(Ak,{}),"+91 97992 98098"]}),x.jsxs("div",{children:[x.jsx(_g,{}),"tl@iith.ac.in"]}),x.jsxs("div",{children:[x.jsx(_g,{}),"ms20btech11019@iith.ac.in"]})]})]}),x.jsx("div",{className:"copyright",children:"Copyright © 2023 All Rights Reserved | IIT Hyderabad"})]})]}),IR=Lt.footer`
  .top {
    border-top: 1px solid #6c10c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subfooter {
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      width: 3px;
      height: 12rem;
      background: #6c10c6;
    }
    img {
      left: 2rem;
      height: 12rem;
      width: 12rem;
    }

    .names {
      padding: 0 2rem;
      color: #6c10c6;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
    }
  }

  .tagline {
    align-items: center;
    justify-content: center;
    color: #6c10c6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
  }

  footer {
    padding-top: 5rem;
  }

  .copyright {
    padding-top: 5rem;
    padding-bottom: 2rem;
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;
  }

  .location {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    margin: 0 6rem;
    text-align: center;
  }

  .handels {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;

    .accounts {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
      gap: 2rem;
    }
  }

  .contacts {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    padding-left: 6.5rem;

    svg {
      font-size: 25px;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;

      .grid {
      }
    }

    .subfooter {
      img {
        margin-left: 2rem;
        height: 10rem;
        width: 10rem;
      }

      .names {
        font-size: 25px;
      }
    }
    .tagline {
      font-size: 20px;
    }

    .handels {
      .accounts {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        gap: 0.1rem;
      }
    }

    .contacts {
      color: #6c10c6;
      font-size: 15px;
      font-family: Inter;
      padding-left: 2rem;
    }
  }
`,jR=l5`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    color:${({theme:t})=>t.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h2{
    color:${({theme:t})=>t.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h3{
    color:${({theme:t})=>t.colors.text_heading};
    font-size: 4rem;
    font-weight: 700;
}
h4{
    color:${({theme:t})=>t.colors.heading};
    font-size: 3.2rem;
    font-weight: 700;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.container{
    max-width: 190rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

`,RR=()=>{const t={colors:{heading:"#001824",text_heading:"#6C10C6",nav_color:"#484848",white:"#fff",gradient:"radial-gradient(40.83% 40.83% at 50% 50%, rgba(108, 16, 198, 0.5) 0%, rgba(186, 104, 200, 0) 100%) ",media:{mobile:"768px",tab:"1127px"}}};return x.jsxs(o5,{theme:t,children:[x.jsx(jR,{}),x.jsxs(bA,{children:[x.jsx(dR,{}),x.jsxs(gA,{children:[x.jsx(bs,{path:"/",element:x.jsx(NA,{})}),x.jsx(bs,{path:"/team",element:x.jsx(LA,{})}),x.jsx(bs,{path:"/events",element:x.jsx(A3,{})}),x.jsx(bs,{path:"/inventory",element:x.jsx(D3,{})}),x.jsx(bs,{path:"/projects",element:x.jsx(H3,{})}),x.jsx(bs,{path:"/contacts",element:x.jsx(cR,{})})]}),x.jsx(NR,{})]})]})};Dp.createRoot(document.getElementById("root")).render(x.jsx(pe.StrictMode,{children:x.jsx(RR,{})}));