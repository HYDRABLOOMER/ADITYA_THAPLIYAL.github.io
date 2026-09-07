(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function y_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function cy(){if(ug)return To;ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var fg;function uy(){return fg||(fg=1,kf.exports=cy()),kf.exports}var E=uy(),jf={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function fy(){if(dg)return lt;dg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,S={};function _(M,V,se){this.props=M,this.context=V,this.refs=S,this.updater=se||A}_.prototype.isReactComponent={},_.prototype.setState=function(M,V){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,V,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function P(){}P.prototype=_.prototype;function L(M,V,se){this.props=M,this.context=V,this.refs=S,this.updater=se||A}var N=L.prototype=new P;N.constructor=L,D(N,_.prototype),N.isPureReactComponent=!0;var W=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function U(M,V,se){var k=se.ref;return{$$typeof:o,type:M,key:V,ref:k!==void 0?k:null,props:se}}function w(M,V){return U(M.type,V,M.props)}function j(M){return typeof M=="object"&&M!==null&&M.$$typeof===o}function de(M){var V={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(se){return V[se]})}var ue=/\/+/g;function ye(M,V){return typeof M=="object"&&M!==null&&M.key!=null?de(""+M.key):V.toString(36)}function ve(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(G,G):(M.status="pending",M.then(function(V){M.status==="pending"&&(M.status="fulfilled",M.value=V)},function(V){M.status==="pending"&&(M.status="rejected",M.reason=V)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,V,se,k,ee){var he=typeof M;(he==="undefined"||he==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case o:case t:le=!0;break;case g:return le=M._init,B(le(M._payload),V,se,k,ee)}}if(le)return ee=ee(M),le=k===""?"."+ye(M,0):k,W(ee)?(se="",le!=null&&(se=le.replace(ue,"$&/")+"/"),B(ee,V,se,"",function(Ue){return Ue})):ee!=null&&(j(ee)&&(ee=w(ee,se+(ee.key==null||M&&M.key===ee.key?"":(""+ee.key).replace(ue,"$&/")+"/")+le)),V.push(ee)),1;le=0;var Te=k===""?".":k+":";if(W(M))for(var Ce=0;Ce<M.length;Ce++)k=M[Ce],he=Te+ye(k,Ce),le+=B(k,V,se,he,ee);else if(Ce=b(M),typeof Ce=="function")for(M=Ce.call(M),Ce=0;!(k=M.next()).done;)k=k.value,he=Te+ye(k,Ce++),le+=B(k,V,se,he,ee);else if(he==="object"){if(typeof M.then=="function")return B(ve(M),V,se,k,ee);throw V=String(M),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return le}function $(M,V,se){if(M==null)return M;var k=[],ee=0;return B(M,k,"","",function(he){return V.call(se,he,ee++)}),k}function Q(M){if(M._status===-1){var V=M._result;V=V(),V.then(function(se){(M._status===0||M._status===-1)&&(M._status=1,M._result=se)},function(se){(M._status===0||M._status===-1)&&(M._status=2,M._result=se)}),M._status===-1&&(M._status=0,M._result=V)}if(M._status===1)return M._result.default;throw M._result}var be=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},F={map:$,forEach:function(M,V,se){$(M,function(){V.apply(this,arguments)},se)},count:function(M){var V=0;return $(M,function(){V++}),V},toArray:function(M){return $(M,function(V){return V})||[]},only:function(M){if(!j(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return lt.Activity=x,lt.Children=F,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},lt.cache=function(M){return function(){return M.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(M,V,se){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var k=D({},M.props),ee=M.key;if(V!=null)for(he in V.key!==void 0&&(ee=""+V.key),V)!q.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(k[he]=V[he]);var he=arguments.length-2;if(he===1)k.children=se;else if(1<he){for(var le=Array(he),Te=0;Te<he;Te++)le[Te]=arguments[Te+2];k.children=le}return U(M.type,ee,k)},lt.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},lt.createElement=function(M,V,se){var k,ee={},he=null;if(V!=null)for(k in V.key!==void 0&&(he=""+V.key),V)q.call(V,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(ee[k]=V[k]);var le=arguments.length-2;if(le===1)ee.children=se;else if(1<le){for(var Te=Array(le),Ce=0;Ce<le;Ce++)Te[Ce]=arguments[Ce+2];ee.children=Te}if(M&&M.defaultProps)for(k in le=M.defaultProps,le)ee[k]===void 0&&(ee[k]=le[k]);return U(M,he,ee)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(M){return{$$typeof:h,render:M}},lt.isValidElement=j,lt.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:Q}},lt.memo=function(M,V){return{$$typeof:p,type:M,compare:V===void 0?null:V}},lt.startTransition=function(M){var V=z.T,se={};z.T=se;try{var k=M(),ee=z.S;ee!==null&&ee(se,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(G,be)}catch(he){be(he)}finally{V!==null&&se.types!==null&&(V.types=se.types),z.T=V}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(M){return z.H.use(M)},lt.useActionState=function(M,V,se){return z.H.useActionState(M,V,se)},lt.useCallback=function(M,V){return z.H.useCallback(M,V)},lt.useContext=function(M){return z.H.useContext(M)},lt.useDebugValue=function(){},lt.useDeferredValue=function(M,V){return z.H.useDeferredValue(M,V)},lt.useEffect=function(M,V){return z.H.useEffect(M,V)},lt.useEffectEvent=function(M){return z.H.useEffectEvent(M)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(M,V,se){return z.H.useImperativeHandle(M,V,se)},lt.useInsertionEffect=function(M,V){return z.H.useInsertionEffect(M,V)},lt.useLayoutEffect=function(M,V){return z.H.useLayoutEffect(M,V)},lt.useMemo=function(M,V){return z.H.useMemo(M,V)},lt.useOptimistic=function(M,V){return z.H.useOptimistic(M,V)},lt.useReducer=function(M,V,se){return z.H.useReducer(M,V,se)},lt.useRef=function(M){return z.H.useRef(M)},lt.useState=function(M){return z.H.useState(M)},lt.useSyncExternalStore=function(M,V,se){return z.H.useSyncExternalStore(M,V,se)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.8",lt}var hg;function mh(){return hg||(hg=1,jf.exports=fy()),jf.exports}var Zt=mh();const dy=y_(Zt);var Xf={exports:{}},Ao={},qf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function hy(){return pg||(pg=1,(function(o){function t(B,$){var Q=B.length;B.push($);e:for(;0<Q;){var be=Q-1>>>1,F=B[be];if(0<l(F,$))B[be]=$,B[Q]=F,Q=be;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],Q=B.pop();if(Q!==$){B[0]=Q;e:for(var be=0,F=B.length,M=F>>>1;be<M;){var V=2*(be+1)-1,se=B[V],k=V+1,ee=B[k];if(0>l(se,Q))k<F&&0>l(ee,se)?(B[be]=ee,B[k]=Q,be=k):(B[be]=se,B[V]=Q,be=V);else if(k<F&&0>l(ee,Q))B[be]=ee,B[k]=Q,be=k;else break e}}return $}function l(B,$){var Q=B.sortIndex-$.sortIndex;return Q!==0?Q:B.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,y=3,b=!1,A=!1,D=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var $=i(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=B)r(p),$.sortIndex=$.expirationTime,t(m,$);else break;$=i(p)}}function W(B){if(D=!1,N(B),!A)if(i(m)!==null)A=!0,G||(G=!0,de());else{var $=i(p);$!==null&&ve(W,$.startTime-B)}}var G=!1,z=-1,q=5,U=-1;function w(){return S?!0:!(o.unstable_now()-U<q)}function j(){if(S=!1,G){var B=o.unstable_now();U=B;var $=!0;try{e:{A=!1,D&&(D=!1,P(z),z=-1),b=!0;var Q=y;try{t:{for(N(B),x=i(m);x!==null&&!(x.expirationTime>B&&w());){var be=x.callback;if(typeof be=="function"){x.callback=null,y=x.priorityLevel;var F=be(x.expirationTime<=B);if(B=o.unstable_now(),typeof F=="function"){x.callback=F,N(B),$=!0;break t}x===i(m)&&r(m),N(B)}else r(m);x=i(m)}if(x!==null)$=!0;else{var M=i(p);M!==null&&ve(W,M.startTime-B),$=!1}}break e}finally{x=null,y=Q,b=!1}$=void 0}}finally{$?de():G=!1}}}var de;if(typeof L=="function")de=function(){L(j)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ye=ue.port2;ue.port1.onmessage=j,de=function(){ye.postMessage(null)}}else de=function(){_(j,0)};function ve(B,$){z=_(function(){B(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(B){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var Q=y;y=$;try{return B()}finally{y=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=y;y=B;try{return $()}finally{y=Q}},o.unstable_scheduleCallback=function(B,$,Q){var be=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?be+Q:be):Q=be,B){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Q+F,B={id:g++,callback:$,priorityLevel:B,startTime:Q,expirationTime:F,sortIndex:-1},Q>be?(B.sortIndex=Q,t(p,B),i(m)===null&&B===i(p)&&(D?(P(z),z=-1):D=!0,ve(W,Q-be))):(B.sortIndex=F,t(m,B),A||b||(A=!0,G||(G=!0,de()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var $=y;return function(){var Q=y;y=$;try{return B.apply(this,arguments)}finally{y=Q}}}})(Wf)),Wf}var mg;function py(){return mg||(mg=1,qf.exports=hy()),qf.exports}var Yf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function my(){if(gg)return An;gg=1;var o=mh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},An.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.8",An}var _g;function gy(){if(_g)return Yf.exports;_g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=my(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function _y(){if(vg)return Ao;vg=1;var o=py(),t=mh(),i=gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case W:return"Suspense";case G:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}var ve=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},be=[],F=-1;function M(e){return{current:e}}function V(e){0>F||(e.current=be[F],be[F]=null,F--)}function se(e,n){F++,be[F]=e.current,e.current=n}var k=M(null),ee=M(null),he=M(null),le=M(null);function Te(e,n){switch(se(he,n),se(ee,e),se(k,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L0(n),e=O0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(k),se(k,e)}function Ce(){V(k),V(ee),V(he)}function Ue(e){e.memoizedState!==null&&se(le,e);var n=k.current,a=O0(n,e.type);n!==a&&(se(ee,e),se(k,a))}function Je(e){ee.current===e&&(V(k),V(ee)),le.current===e&&(V(le),So._currentValue=Q)}var et,Ye;function I(e){if(et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",Ye=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+e+Ye}var Ut=!1;function tt(e,n){if(!e||Ut)return"";Ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(fe){var re=fe}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(fe){re=fe}e.call(Se.prototype)}}else{try{throw Error()}catch(fe){re=fe}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(fe){if(fe&&re&&typeof fe.stack=="string")return[fe.stack,re.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var H=v.split(`
`),ne=T.split(`
`);for(c=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(s===H.length||c===ne.length)for(s=H.length-1,c=ne.length-1;1<=s&&0<=c&&H[s]!==ne[c];)c--;for(;1<=s&&0<=c;s--,c--)if(H[s]!==ne[c]){if(s!==1||c!==1)do if(s--,c--,0>c||H[s]!==ne[c]){var me=`
`+H[s].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=s&&0<=c);break}}}finally{Ut=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function nt(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return tt(e.type,!1);case 11:return tt(e.type.render,!1);case 1:return tt(e.type,!0);case 31:return I("Activity");default:return""}}function Ve(e){try{var n="",a=null;do n+=nt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var mt=Object.prototype.hasOwnProperty,Fe=o.unstable_scheduleCallback,O=o.unstable_cancelCallback,R=o.unstable_shouldYield,ie=o.unstable_requestPaint,ge=o.unstable_now,Ee=o.unstable_getCurrentPriorityLevel,xe=o.unstable_ImmediatePriority,je=o.unstable_UserBlockingPriority,we=o.unstable_NormalPriority,He=o.unstable_LowPriority,pt=o.unstable_IdlePriority,Re=o.log,Ge=o.unstable_setDisableYieldValue,We=null,qe=null;function Ie(e){if(typeof Re=="function"&&Ge(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(We,e)}catch{}}var it=Math.clz32?Math.clz32:Z,ct=Math.log,It=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(ct(e)/It|0)|0}var De=256,pe=262144,Me=4194304;function Ne(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Le(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Ne(s):(v&=T,v!==0?c=Ne(v):a||(a=T&~e,a!==0&&(c=Ne(a))))):(T=s&~f,T!==0?c=Ne(T):v!==0?c=Ne(v):a||(a=s&~e,a!==0&&(c=Ne(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function at(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=Me;return Me<<=1,(Me&62914560)===0&&(Me=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,a,s,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,H=e.expirationTimes,ne=e.hiddenUpdates;for(a=v&~a;0<a;){var me=31-it(a),Se=1<<me;T[me]=0,H[me]=-1;var re=ne[me];if(re!==null)for(ne[me]=null,me=0;me<re.length;me++){var fe=re[me];fe!==null&&(fe.lane&=-536870913)}a&=~Se}s!==0&&Us(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Us(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-it(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ls(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-it(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ri(e,n){var a=n&-n;return a=(a&42)!==0?1:ja(a),(a&(e.suspendedLanes|n))!==0?0:a}function ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Er(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Os(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:ig(e.type))}function Xa(e,n){var a=$.p;try{return $.p=e,n()}finally{$.p=a}}var gi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+gi,xn="__reactProps$"+gi,Oi="__reactContainer$"+gi,Ps="__reactEvents$"+gi,zc="__reactListeners$"+gi,Ic="__reactHandles$"+gi,Go="__reactResources$"+gi,qa="__reactMarker$"+gi;function zs(e){delete e[Kt],delete e[xn],delete e[Ps],delete e[zc],delete e[Ic]}function C(e){var n=e[Kt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[Kt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=G0(e);e!==null;){if(a=e[Kt])return a;e=G0(e)}return n}e=a,a=e.parentNode}return null}function K(e){if(e=e[Kt]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ce(e){var n=e[Go];return n||(n=e[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[qa]=!0}var Ae=new Set,Oe={};function ze(e,n){Be(e,n),Be(e+"Capture",n)}function Be(e,n){for(Oe[e]=n,e=0;e<n.length;e++)Ae.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Ze={};function yt(e){return mt.call(Ze,e)?!0:mt.call(st,e)?!1:rt.test(e)?Ze[e]=!0:(st[e]=!0,!1)}function St(e,n,a){if(yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Et(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=fn(e,n,""+e[n])}}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Qe(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function mn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,s,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ot(n)):e.value!==""+ot(n)&&(e.value=""+ot(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,v,ot(n)):a!=null?Tn(e,v,ot(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ot(T):e.removeAttribute("name")}function Nn(e,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Et(e);return}a=a!=null?""+ot(a):"",n=n!=null?""+ot(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Et(e)}function Tn(e,n,a){n==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qt(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+ot(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ot(a):""}function Tr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ve(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ot(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Et(e)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var av=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||av.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Dh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Dh(e,f,n[f])}function Bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Fc=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ar=null,Rr=null;function Uh(e){var n=K(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Bt(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&On(s)}break e;case"textarea":yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Qt(e,!!a.multiple,n,!1)}}}var Gc=!1;function Lh(e,n,a){if(Gc)return e(n,a);Gc=!0;try{var s=e(n);return s}finally{if(Gc=!1,(Ar!==null||Rr!==null)&&(wl(),Ar&&(n=Ar,e=Rr,Rr=Ar=null,Uh(n),e)))for(n=0;n<e.length;n++)Uh(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(zi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Vc=!1}var ua=null,kc=null,ko=null;function Oh(){if(ko)return ko;var e,n=kc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return ko=c.slice(e,1<s?1-s:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Ph(){return!1}function zn(e){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Ph,this.isPropagationStopped=Ph,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=zn(Wa),Fs=x({},Wa,{view:0,detail:0}),ov=zn(Fs),jc,Xc,Hs,Wo=x({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(jc=e.screenX-Hs.screenX,Xc=e.screenY-Hs.screenY):Xc=jc=0,Hs=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:Xc}}),zh=zn(Wo),lv=x({},Wo,{dataTransfer:0}),cv=zn(lv),uv=x({},Fs,{relatedTarget:0}),qc=zn(uv),fv=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=zn(fv),hv=x({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pv=zn(hv),mv=x({},Wa,{data:0}),Ih=zn(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vv[e])?!!n[e]:!1}function Wc(){return xv}var yv=x({},Fs,{key:function(e){if(e.key){var n=gv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sv=zn(yv),Mv=x({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=zn(Mv),bv=x({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Ev=zn(bv),Tv=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=zn(Tv),Rv=x({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=zn(Rv),wv=x({},Wa,{newState:0,oldState:0}),Dv=zn(wv),Nv=[9,13,27,32],Yc=zi&&"CompositionEvent"in window,Gs=null;zi&&"documentMode"in document&&(Gs=document.documentMode);var Uv=zi&&"TextEvent"in window&&!Gs,Fh=zi&&(!Yc||Gs&&8<Gs&&11>=Gs),Hh=" ",Gh=!1;function Vh(e,n){switch(e){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function Lv(e,n){switch(e){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Gh=!0,Hh);case"textInput":return e=n.data,e===Hh&&Gh?null:e;default:return null}}function Ov(e,n){if(Cr)return e==="compositionend"||!Yc&&Vh(e,n)?(e=Oh(),ko=kc=ua=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fh&&n.locale!=="ko"?null:n.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pv[e.type]:n==="textarea"}function Xh(e,n,a,s){Ar?Rr?Rr.push(s):Rr=[s]:Ar=s,n=zl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function zv(e){R0(e,0)}function Yo(e){var n=oe(e);if(On(n))return e}function qh(e,n){if(e==="change")return n}var Wh=!1;if(zi){var Zc;if(zi){var Kc="oninput"in document;if(!Kc){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),Kc=typeof Yh.oninput=="function"}Zc=Kc}else Zc=!1;Wh=Zc&&(!document.documentMode||9<document.documentMode)}function Zh(){Vs&&(Vs.detachEvent("onpropertychange",Kh),ks=Vs=null)}function Kh(e){if(e.propertyName==="value"&&Yo(ks)){var n=[];Xh(n,ks,e,Hc(e)),Lh(zv,n)}}function Iv(e,n,a){e==="focusin"?(Zh(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",Kh)):e==="focusout"&&Zh()}function Bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(ks)}function Fv(e,n){if(e==="click")return Yo(n)}function Hv(e,n){if(e==="input"||e==="change")return Yo(n)}function Gv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Gv;function js(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!mt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jh(e,n){var a=Qh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function $h(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$h(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_i(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_i(e.document)}return n}function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vv=zi&&"documentMode"in document&&11>=document.documentMode,wr=null,Jc=null,Xs=null,$c=!1;function tp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||wr==null||wr!==_i(s)||(s=wr,"selectionStart"in s&&Qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&js(Xs,s)||(Xs=s,s=zl(Jc,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=wr)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Dr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},eu={},np={};zi&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Za(e){if(eu[e])return eu[e];if(!Dr[e])return e;var n=Dr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return eu[e]=n[a];return e}var ip=Za("animationend"),ap=Za("animationiteration"),rp=Za("animationstart"),kv=Za("transitionrun"),jv=Za("transitionstart"),Xv=Za("transitioncancel"),sp=Za("transitionend"),op=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function vi(e,n){op.set(e,n),ze(n,[e])}var Zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Nr=0,nu=0;function Ko(){for(var e=Nr,n=nu=Nr=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&lp(a,c,f)}}function Qo(e,n,a,s){ni[Nr++]=e,ni[Nr++]=n,ni[Nr++]=a,ni[Nr++]=s,nu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function iu(e,n,a,s){return Qo(e,n,a,s),Jo(e)}function Ka(e,n){return Qo(e,null,null,n),Jo(e)}function lp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-it(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<po)throw po=0,hf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ur={};function qv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,s){return new qv(e,n,a,s)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,s,c,f){var v=0;if(s=e,typeof e=="function")au(e)&&(v=1);else if(typeof e=="string")v=Qx(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=Yn(31,a,n,c),e.elementType=U,e.lanes=f,e;case D:return Qa(a.children,c,f,n);case S:v=8,c|=24;break;case _:return e=Yn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case W:return e=Yn(13,a,n,c),e.elementType=W,e.lanes=f,e;case G:return e=Yn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case P:v=9;break e;case N:v=11;break e;case z:v=14;break e;case q:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Yn(v,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Qa(e,n,a,s){return e=Yn(7,e,s,n),e.lanes=a,e}function ru(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function up(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function su(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},fp.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var Lr=[],Or=0,el=null,qs=0,ai=[],ri=0,fa=null,Ci=1,wi="";function Bi(e,n){Lr[Or++]=qs,Lr[Or++]=el,el=e,qs=n}function dp(e,n,a){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=fa,fa=e;var s=Ci;e=wi;var c=32-it(s)-1;s&=~(1<<c),a+=1;var f=32-it(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Ci=1<<32-it(n)+c|a<<c|s,wi=f+e}else Ci=1<<f|a<<c|s,wi=e}function ou(e){e.return!==null&&(Bi(e,1),dp(e,1,0))}function lu(e){for(;e===el;)el=Lr[--Or],Lr[Or]=null,qs=Lr[--Or],Lr[Or]=null;for(;e===fa;)fa=ai[--ri],ai[ri]=null,wi=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null}function hp(e,n){ai[ri++]=Ci,ai[ri++]=wi,ai[ri++]=fa,Ci=n.id,wi=n.overflow,fa=e}var Sn=null,Xt=null,Mt=!1,da=null,si=!1,cu=Error(r(519));function ha(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ii(n,e)),cu}function pp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Kt]=e,n[xn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)_t(go[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Nn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Tr(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||N0(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ha(e,!0)}function mp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Sn=Sn.return}}function Pr(e){if(e!==Sn)return!1;if(!Mt)return mp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&Xt&&ha(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xt=H0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xt=H0(e)}else n===27?(n=Xt,Ra(e.type)?(e=Lf,Lf=null,Xt=e):Xt=n):Xt=Sn?li(e.stateNode.nextSibling):null;return!0}function Ja(){Xt=Sn=null,Mt=!1}function uu(){var e=da;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),da=null),e}function Ws(e){da===null?da=[e]:da.push(e)}var fu=M(null),$a=null,Fi=null;function pa(e,n,a){se(fu,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=fu.current,V(fu)}function du(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function hu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var H=0;H<n.length;H++)if(T.context===n[H]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),du(f.return,a,e),s||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),du(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function zr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Wn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===le.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}c=c.return}e!==null&&hu(n,e,a,s),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){$a=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return gp($a,e)}function nl(e,n){return $a===null&&er(e),gp(e,n)}function gp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var Wv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yv=o.unstable_scheduleCallback,Zv=o.unstable_NormalPriority,rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new Wv,data:new Map,refCount:0}}function Ys(e){e.refCount--,e.refCount===0&&Yv(Zv,function(){e.controller.abort()})}var Zs=null,mu=0,Ir=0,Br=null;function Kv(e,n){if(Zs===null){var a=Zs=[];mu=0,Ir=xf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mu++,n.then(_p,_p),n}function _p(){if(--mu===0&&Zs!==null){Br!==null&&(Br.status="fulfilled");var e=Zs;Zs=null,Ir=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var vp=B.S;B.S=function(e,n){t0=ge(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kv(e,n),vp!==null&&vp(e,n)};var tr=M(null);function gu(){var e=tr.current;return e!==null?e:kt.pooledCache}function il(e,n){n===null?se(tr,tr.current):se(tr,n.pool)}function xp(){var e=gu();return e===null?null:{parent:rn._currentValue,pool:e}}var Fr=Error(r(460)),_u=Error(r(474)),al=Error(r(542)),rl={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e}throw ir=n,Fr}}function nr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ir=a,Fr):a}}var ir=null;function Mp(){if(ir===null)throw Error(r(459));var e=ir;return ir=null,e}function bp(e){if(e===Fr||e===al)throw Error(r(483))}var Hr=null,Ks=0;function sl(e){var n=Ks;return Ks+=1,Hr===null&&(Hr=[]),Sp(Hr,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ol(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ep(e){function n(J,X){if(e){var te=J.deletions;te===null?(J.deletions=[X],J.flags|=16):te.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function s(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function c(J,X){return J=Ii(J,X),J.index=0,J.sibling=null,J}function f(J,X,te){return J.index=te,e?(te=J.alternate,te!==null?(te=te.index,te<X?(J.flags|=67108866,X):te):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function T(J,X,te,_e){return X===null||X.tag!==6?(X=ru(te,J.mode,_e),X.return=J,X):(X=c(X,te),X.return=J,X)}function H(J,X,te,_e){var Ke=te.type;return Ke===D?me(J,X,te.props.children,_e,te.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===q&&nr(Ke)===X.type)?(X=c(X,te.props),Qs(X,te),X.return=J,X):(X=$o(te.type,te.key,te.props,null,J.mode,_e),Qs(X,te),X.return=J,X)}function ne(J,X,te,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=su(te,J.mode,_e),X.return=J,X):(X=c(X,te.children||[]),X.return=J,X)}function me(J,X,te,_e,Ke){return X===null||X.tag!==7?(X=Qa(te,J.mode,_e,Ke),X.return=J,X):(X=c(X,te),X.return=J,X)}function Se(J,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ru(""+X,J.mode,te),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return te=$o(X.type,X.key,X.props,null,J.mode,te),Qs(te,X),te.return=J,te;case A:return X=su(X,J.mode,te),X.return=J,X;case q:return X=nr(X),Se(J,X,te)}if(ve(X)||de(X))return X=Qa(X,J.mode,te,null),X.return=J,X;if(typeof X.then=="function")return Se(J,sl(X),te);if(X.$$typeof===L)return Se(J,nl(J,X),te);ol(J,X)}return null}function re(J,X,te,_e){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ke!==null?null:T(J,X,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case b:return te.key===Ke?H(J,X,te,_e):null;case A:return te.key===Ke?ne(J,X,te,_e):null;case q:return te=nr(te),re(J,X,te,_e)}if(ve(te)||de(te))return Ke!==null?null:me(J,X,te,_e,null);if(typeof te.then=="function")return re(J,X,sl(te),_e);if(te.$$typeof===L)return re(J,X,nl(J,te),_e);ol(J,te)}return null}function fe(J,X,te,_e,Ke){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return J=J.get(te)||null,T(X,J,""+_e,Ke);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case b:return J=J.get(_e.key===null?te:_e.key)||null,H(X,J,_e,Ke);case A:return J=J.get(_e.key===null?te:_e.key)||null,ne(X,J,_e,Ke);case q:return _e=nr(_e),fe(J,X,te,_e,Ke)}if(ve(_e)||de(_e))return J=J.get(te)||null,me(X,J,_e,Ke,null);if(typeof _e.then=="function")return fe(J,X,te,sl(_e),Ke);if(_e.$$typeof===L)return fe(J,X,te,nl(X,_e),Ke);ol(X,_e)}return null}function ke(J,X,te,_e){for(var Ke=null,Ct=null,Xe=X,ft=X=0,xt=null;Xe!==null&&ft<te.length;ft++){Xe.index>ft?(xt=Xe,Xe=null):xt=Xe.sibling;var wt=re(J,Xe,te[ft],_e);if(wt===null){Xe===null&&(Xe=xt);break}e&&Xe&&wt.alternate===null&&n(J,Xe),X=f(wt,X,ft),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt,Xe=xt}if(ft===te.length)return a(J,Xe),Mt&&Bi(J,ft),Ke;if(Xe===null){for(;ft<te.length;ft++)Xe=Se(J,te[ft],_e),Xe!==null&&(X=f(Xe,X,ft),Ct===null?Ke=Xe:Ct.sibling=Xe,Ct=Xe);return Mt&&Bi(J,ft),Ke}for(Xe=s(Xe);ft<te.length;ft++)xt=fe(Xe,J,ft,te[ft],_e),xt!==null&&(e&&xt.alternate!==null&&Xe.delete(xt.key===null?ft:xt.key),X=f(xt,X,ft),Ct===null?Ke=xt:Ct.sibling=xt,Ct=xt);return e&&Xe.forEach(function(Ua){return n(J,Ua)}),Mt&&Bi(J,ft),Ke}function $e(J,X,te,_e){if(te==null)throw Error(r(151));for(var Ke=null,Ct=null,Xe=X,ft=X=0,xt=null,wt=te.next();Xe!==null&&!wt.done;ft++,wt=te.next()){Xe.index>ft?(xt=Xe,Xe=null):xt=Xe.sibling;var Ua=re(J,Xe,wt.value,_e);if(Ua===null){Xe===null&&(Xe=xt);break}e&&Xe&&Ua.alternate===null&&n(J,Xe),X=f(Ua,X,ft),Ct===null?Ke=Ua:Ct.sibling=Ua,Ct=Ua,Xe=xt}if(wt.done)return a(J,Xe),Mt&&Bi(J,ft),Ke;if(Xe===null){for(;!wt.done;ft++,wt=te.next())wt=Se(J,wt.value,_e),wt!==null&&(X=f(wt,X,ft),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return Mt&&Bi(J,ft),Ke}for(Xe=s(Xe);!wt.done;ft++,wt=te.next())wt=fe(Xe,J,ft,wt.value,_e),wt!==null&&(e&&wt.alternate!==null&&Xe.delete(wt.key===null?ft:wt.key),X=f(wt,X,ft),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return e&&Xe.forEach(function(ly){return n(J,ly)}),Mt&&Bi(J,ft),Ke}function Gt(J,X,te,_e){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case b:e:{for(var Ke=te.key;X!==null;){if(X.key===Ke){if(Ke=te.type,Ke===D){if(X.tag===7){a(J,X.sibling),_e=c(X,te.props.children),_e.return=J,J=_e;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===q&&nr(Ke)===X.type){a(J,X.sibling),_e=c(X,te.props),Qs(_e,te),_e.return=J,J=_e;break e}a(J,X);break}else n(J,X);X=X.sibling}te.type===D?(_e=Qa(te.props.children,J.mode,_e,te.key),_e.return=J,J=_e):(_e=$o(te.type,te.key,te.props,null,J.mode,_e),Qs(_e,te),_e.return=J,J=_e)}return v(J);case A:e:{for(Ke=te.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(J,X.sibling),_e=c(X,te.children||[]),_e.return=J,J=_e;break e}else{a(J,X);break}else n(J,X);X=X.sibling}_e=su(te,J.mode,_e),_e.return=J,J=_e}return v(J);case q:return te=nr(te),Gt(J,X,te,_e)}if(ve(te))return ke(J,X,te,_e);if(de(te)){if(Ke=de(te),typeof Ke!="function")throw Error(r(150));return te=Ke.call(te),$e(J,X,te,_e)}if(typeof te.then=="function")return Gt(J,X,sl(te),_e);if(te.$$typeof===L)return Gt(J,X,nl(J,te),_e);ol(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(J,X.sibling),_e=c(X,te),_e.return=J,J=_e):(a(J,X),_e=ru(te,J.mode,_e),_e.return=J,J=_e),v(J)):a(J,X)}return function(J,X,te,_e){try{Ks=0;var Ke=Gt(J,X,te,_e);return Hr=null,Ke}catch(Xe){if(Xe===Fr||Xe===al)throw Xe;var Ct=Yn(29,Xe,null,J.mode);return Ct.lanes=_e,Ct.return=J,Ct}finally{}}}var ar=Ep(!0),Tp=Ep(!1),ma=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Lt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(e),lp(e,null,a),n}return Qo(e,s,n,a),Jo(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}function yu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Su=!1;function $s(){if(Su){var e=Br;if(e!==null)throw e}}function eo(e,n,a,s){Su=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var H=T,ne=H.next;H.next=null,v===null?f=ne:v.next=ne,v=H;var me=e.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==v&&(T===null?me.firstBaseUpdate=ne:T.next=ne,me.lastBaseUpdate=H))}if(f!==null){var Se=c.baseState;v=0,me=ne=H=null,T=f;do{var re=T.lane&-536870913,fe=re!==T.lane;if(fe?(vt&re)===re:(s&re)===re){re!==0&&re===Ir&&(Su=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=e,$e=T;re=n;var Gt=a;switch($e.tag){case 1:if(ke=$e.payload,typeof ke=="function"){Se=ke.call(Gt,Se,re);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=$e.payload,re=typeof ke=="function"?ke.call(Gt,Se,re):ke,re==null)break e;Se=x({},Se,re);break e;case 2:ma=!0}}re=T.callback,re!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=c.callbacks,fe===null?c.callbacks=[re]:fe.push(re))}else fe={lane:re,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?(ne=me=fe,H=Se):me=me.next=fe,v|=re;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;fe=T,T=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);me===null&&(H=Se),c.baseState=H,c.firstBaseUpdate=ne,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),Ma|=v,e.lanes=v,e.memoizedState=Se}}function Ap(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var Gr=M(null),ll=M(0);function Cp(e,n){e=Zi,se(ll,e),se(Gr,n),Zi=e|n.baseLanes}function Mu(){se(ll,Zi),se(Gr,Gr.current)}function bu(){Zi=ll.current,V(Gr),V(ll)}var Zn=M(null),oi=null;function va(e){var n=e.alternate;se(en,en.current&1),se(Zn,e),oi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(oi=e)}function Eu(e){se(en,en.current),se(Zn,e),oi===null&&(oi=e)}function wp(e){e.tag===22?(se(en,en.current),se(Zn,e),oi===null&&(oi=e)):xa()}function xa(){se(en,en.current),se(Zn,Zn.current)}function Kn(e){V(Zn),oi===e&&(oi=null),V(en)}var en=M(0);function cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Uf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,ut=null,Ft=null,sn=null,ul=!1,Vr=!1,rr=!1,fl=0,to=0,kr=null,Jv=0;function Jt(){throw Error(r(321))}function Tu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Au(e,n,a,s,c,f){return Gi=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?dm:Gu,rr=!1,f=a(s,c),rr=!1,Vr&&(f=Np(n,a,s,c)),Dp(e),f}function Dp(e){B.H=ao;var n=Ft!==null&&Ft.next!==null;if(Gi=0,sn=Ft=ut=null,ul=!1,to=0,kr=null,n)throw Error(r(300));e===null||on||(e=e.dependencies,e!==null&&tl(e)&&(on=!0))}function Np(e,n,a,s){ut=e;var c=0;do{if(Vr&&(kr=null),to=0,Vr=!1,25<=c)throw Error(r(301));if(c+=1,sn=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=hm,f=n(a,s)}while(Vr);return f}function $v(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ut.flags|=1024),n}function Ru(){var e=fl!==0;return fl=0,e}function Cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ul=!1}Gi=0,sn=Ft=ut=null,Vr=!1,to=fl=0,kr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?ut.memoizedState=sn=e:sn=sn.next=e,sn}function tn(){if(Ft===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=sn===null?ut.memoizedState:sn.next;if(n!==null)sn=n,Ft=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},sn===null?ut.memoizedState=sn=e:sn=sn.next=e}return sn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,kr===null&&(kr=[]),e=Sp(kr,e,n),n=ut,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?dm:Gu),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===L)return Mn(e)}throw Error(r(438,String(e)))}function Du(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ut.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=tn();return Nu(n,Ft,e)}function Nu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,H=null,ne=n,me=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(vt&Se)===Se:(Gi&Se)===Se){var re=ne.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===Ir&&(me=!0);else if((Gi&re)===re){ne=ne.next,re===Ir&&(me=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(T=H=Se,v=f):H=H.next=Se,ut.lanes|=re,Ma|=re;Se=ne.action,rr&&a(f,Se),f=ne.hasEagerState?ne.eagerState:a(f,Se)}else re={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(T=H=re,v=f):H=H.next=re,ut.lanes|=Se,Ma|=Se;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?v=f:H.next=T,!Wn(f,e.memoizedState)&&(on=!0,me&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Uu(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Up(e,n,a){var s=ut,c=tn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((Ft||c).memoizedState,a);if(v&&(c.memoizedState=a,on=!0),c=c.queue,Pu(Pp.bind(null,s,c,e),[e]),c.getSnapshot!==n||v||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,jr(9,{destroy:void 0},Op.bind(null,s,c,a,n),null),kt===null)throw Error(r(349));f||(Gi&127)!==0||Lp(s,n,a)}return a}function Lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=dl(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Op(e,n,a,s){n.value=a,n.getSnapshot=s,zp(n)&&Ip(e)}function Pp(e,n,a){return a(function(){zp(n)&&Ip(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Ip(e){var n=Ka(e,2);n!==null&&Gn(n,e,2)}function Lu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),rr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function Bp(e,n,a,s){return e.baseState=a,Nu(e,Ft,typeof s=="function"?s:Vi)}function ex(e,n,a,s,c){if(_l(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var T=a(c,s),H=B.S;H!==null&&H(v,T),Hp(e,n,T)}catch(ne){Ou(e,n,ne)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(c,s),Hp(e,n,f)}catch(ne){Ou(e,n,ne)}}function Hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Gp(e,n,s)},function(s){return Ou(e,n,s)}):Gp(e,n,a)}function Gp(e,n,a){n.status="fulfilled",n.value=a,Vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fp(e,a)))}function Ou(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==s)}e.action=null}function Vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function jp(e,n){if(Mt){var a=kt.formState;if(a!==null){e:{var s=ut;if(Mt){if(Xt){t:{for(var c=Xt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xt=li(c.nextSibling),s=c.data==="F!";break e}}ha(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=s,a=cm.bind(null,ut,s),s.dispatch=a,s=Lu(!1),f=Hu.bind(null,ut,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ex.bind(null,ut,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Xp(e){var n=tn();return qp(n,Ft,e)}function qp(e,n,a){if(n=Nu(e,n,kp)[0],e=pl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=no(n)}catch(v){throw v===Fr?al:v}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,jr(9,{destroy:void 0},tx.bind(null,c,a),null)),[s,f,e]}function tx(e,n){e.action=n}function Wp(e){var n=tn(),a=Ft;if(a!==null)return qp(n,a,e);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function jr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ut.updateQueue,n===null&&(n=dl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Yp(){return tn().memoizedState}function ml(e,n,a,s){var c=Un();ut.flags|=e,c.memoizedState=jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(e,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Tu(s,Ft.memoizedState.deps)?c.memoizedState=jr(n,f,a,s):(ut.flags|=e,c.memoizedState=jr(1|n,f,a,s))}function Zp(e,n){ml(8390656,8,e,n)}function Pu(e,n){gl(2048,8,e,n)}function nx(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=dl(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Kp(e){var n=tn().memoizedState;return nx({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qp(e,n){return gl(4,2,e,n)}function Jp(e,n){return gl(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function em(e,n,a){a=a!=null?a.concat([e]):null,gl(4,4,$p.bind(null,n,e),a)}function zu(){}function tm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Tu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function nm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Tu(n,s[1]))return s[0];if(s=e(),rr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[s,n],s}function Iu(e,n,a){return a===void 0||(Gi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=i0(),ut.lanes|=e,Ma|=e,a)}function im(e,n,a,s){return Wn(a,n)?a:Gr.current!==null?(e=Iu(e,a,s),Wn(e,n)||(on=!0),e):(Gi&42)===0||(Gi&1073741824)!==0&&(vt&261930)===0?(on=!0,e.memoizedState=a):(e=i0(),ut.lanes|=e,Ma|=e,n)}function am(e,n,a,s,c){var f=$.p;$.p=f!==0&&8>f?f:8;var v=B.T,T={};B.T=T,Hu(e,!1,n,a);try{var H=c(),ne=B.S;if(ne!==null&&ne(T,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=Qv(H,s);io(e,n,me,$n(e))}else io(e,n,s,$n(e))}catch(Se){io(e,n,{then:function(){},status:"rejected",reason:Se},$n())}finally{$.p=f,v!==null&&T.types!==null&&(v.types=T.types),B.T=v}}function ix(){}function Bu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=rm(e).queue;am(e,c,n,Q,a===null?ix:function(){return sm(e),a(s)})}function rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sm(e){var n=rm(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},$n())}function Fu(){return Mn(So)}function om(){return tn().memoizedState}function lm(){return tn().memoizedState}function ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=ga(a);var s=_a(n,e,a);s!==null&&(Gn(s,n,a),Js(s,n,a)),n={cache:pu()},e.payload=n;return}n=n.return}}function rx(e,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(e)?um(n,a):(a=iu(e,n,a,s),a!==null&&(Gn(a,e,s),fm(a,n,s)))}function cm(e,n,a){var s=$n();io(e,n,a,s)}function io(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(e))um(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,v))return Qo(e,n,c,0),kt===null&&Ko(),!1}catch{}finally{}if(a=iu(e,n,c,s),a!==null)return Gn(a,e,s),fm(a,n,s),!0}return!1}function Hu(e,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(n)throw Error(r(479))}else n=iu(e,a,s,2),n!==null&&Gn(n,e,2)}function _l(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function um(e,n){Vr=ul=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}var ao={readContext:Mn,use:hl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};ao.useEffectEvent=Jt;var dm={readContext:Mn,use:hl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ml(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){ml(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(rr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(rr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=rx.bind(null,ut,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Lu(e);var n=e.queue,a=cm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=Un();return Iu(a,e,n)},useTransition:function(){var e=Lu(!1);return e=am.bind(null,ut,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ut,c=Un();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(vt&127)!==0||Lp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Zp(Pp.bind(null,s,f,e),[e]),s.flags|=2048,jr(9,{destroy:void 0},Op.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=kt.identifierPrefix;if(Mt){var a=wi,s=Ci;a=(s&~(1<<32-it(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Fu,useFormState:jp,useActionState:jp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Du,useCacheRefresh:function(){return Un().memoizedState=ax.bind(null,ut)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:Mn,use:hl,useCallback:tm,useContext:Mn,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:pl,useRef:Yp,useState:function(){return pl(Vi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=tn();return im(a,Ft.memoizedState,e,n)},useTransition:function(){var e=pl(Vi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Up,useId:om,useHostTransitionStatus:Fu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=tn();return Bp(a,Ft,e,n)},useMemoCache:Du,useCacheRefresh:lm};Gu.useEffectEvent=Kp;var hm={readContext:Mn,use:hl,useCallback:tm,useContext:Mn,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:Uu,useRef:Yp,useState:function(){return Uu(Vi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=tn();return Ft===null?Iu(a,e,n):im(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Uu(Vi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Up,useId:om,useHostTransitionStatus:Fu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=tn();return Ft!==null?Bp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:lm};hm.useEffectEvent=Kp;function Vu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ga(s);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Gn(n,e,s),Js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=ga(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Gn(n,e,s),Js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(Gn(n,e,a),Js(n,e,a))}};function pm(e,n,a,s,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!js(a,s)||!js(c,f):!0}function mm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&ku.enqueueReplaceState(n,n.state,null)}function sr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function gm(e){Zo(e)}function _m(e){console.error(e)}function vm(e){Zo(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function ym(e){return e=ga(e),e.tag=3,e}function Sm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){xm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){xm(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function sx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Dl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(e,s,c)),!1;case 22:return a.flags|=65536,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(e,s,c)),!1}throw Error(r(435,a.tag))}return gf(e,s,c),Dl(),!1}if(Mt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==cu&&(e=Error(r(422),{cause:s}),Ws(ii(e,a)))):(s!==cu&&(n=Error(r(423),{cause:s}),Ws(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=ju(e.stateNode,s,c),yu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),$t!==4&&($t=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ju(a.stateNode,s,e),yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ym(c),Sm(c,e,a,s),yu(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),on=!1;function bn(e,n,a,s){n.child=e===null?Tp(n,null,a,s):ar(n,e.child,a,s)}function Mm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return er(n),s=Au(e,n,a,v,f,c),T=Ru(),e!==null&&!on?(Cu(e,n,c),ki(e,n,c)):(Mt&&T&&ou(n),n.flags|=1,bn(e,n,s,c),n.child)}function bm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Em(e,n,f,s,c)):(e=$o(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!$u(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(v,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Ii(f,s),e.ref=n.ref,e.return=n,n.child=e}function Em(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(js(f,s)&&e.ref===n.ref)if(on=!1,n.pendingProps=s=f,$u(e,c))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,ki(e,n,c)}return qu(e,n,a,s,c)}function Tm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Am(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Mu(),wp(n);else return s=n.lanes=536870912,Am(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(il(n,f.cachePool),Cp(n,f),xa(),n.memoizedState=null):(e!==null&&il(n,null),Mu(),xa());return bn(e,n,c,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Am(e,n,a,s,c){var f=gu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&il(n,null),Mu(),wp(n),e!==null&&zr(e,n,s,!0),n.childLanes=c,null}function xl(e,n){return n=Sl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rm(e,n,a){return ar(n,e.child,null,a),e=xl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function ox(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(s.mode==="hidden")return e=xl(n,s),n.lanes=536870912,ro(null,e);if(Eu(n),(e=Xt)?(e=F0(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Sn=n,Xt=null)):e=null,e===null)throw ha(n);return n.lanes=536870912,null}return xl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Eu(n),c)if(n.flags&256)n.flags&=-257,n=Rm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||zr(e,n,a,!1),c=(a&e.childLanes)!==0,on||c){if(s=kt,s!==null&&(v=Ri(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ka(e,v),Gn(s,e,v),Xu;Dl(),n=Rm(e,n,a)}else e=f.treeContext,Xt=li(v.nextSibling),Sn=n,Mt=!0,da=null,si=!1,e!==null&&hp(n,e),n=xl(n,s),n.flags|=4096;return n}return e=Ii(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function qu(e,n,a,s,c){return er(n),a=Au(e,n,a,s,void 0,c),s=Ru(),e!==null&&!on?(Cu(e,n,c),ki(e,n,c)):(Mt&&s&&ou(n),n.flags|=1,bn(e,n,a,c),n.child)}function Cm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Np(n,s,a,c),Dp(e),s=Ru(),e!==null&&!on?(Cu(e,n,f),ki(e,n,f)):(Mt&&s&&ou(n),n.flags|=1,bn(e,n,a,f),n.child)}function wm(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Ur,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):Ur,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Vu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ku.enqueueReplaceState(f,f.state,null),eo(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,H=sr(a,T);f.props=H;var ne=f.context,me=a.contextType;v=Ur,typeof me=="object"&&me!==null&&(v=Mn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ne!==v)&&mm(n,f,s,v),ma=!1;var re=n.memoizedState;f.state=re,eo(n,s,f,c),$s(),ne=n.memoizedState,T||re!==ne||ma?(typeof Se=="function"&&(Vu(n,a,Se,s),ne=n.memoizedState),(H=ma||pm(n,a,H,s,re,ne,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ne),f.props=s,f.state=ne,f.context=v,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xu(e,n),v=n.memoizedProps,me=sr(a,v),f.props=me,Se=n.pendingProps,re=f.context,ne=a.contextType,H=Ur,typeof ne=="object"&&ne!==null&&(H=Mn(ne)),T=a.getDerivedStateFromProps,(ne=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Se||re!==H)&&mm(n,f,s,H),ma=!1,re=n.memoizedState,f.state=re,eo(n,s,f,c),$s();var fe=n.memoizedState;v!==Se||re!==fe||ma||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof T=="function"&&(Vu(n,a,T,s),fe=n.memoizedState),(me=ma||pm(n,a,me,s,re,fe,H)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=fe),f.props=s,f.state=fe,f.context=H,s=me):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ar(n,e.child,null,c),n.child=ar(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Dm(e,n,a,s){return Ja(),n.flags|=256,bn(e,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:xp()}}function Zu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Nm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?va(n):xa(),(e=Xt)?(e=F0(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Sn=n,Xt=null)):e=null,e===null)throw ha(n);return Uf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(xa(),c=n.mode,T=Sl({mode:"hidden",children:T},c),s=Qa(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Yu(a),s.childLanes=Zu(e,v,a),n.memoizedState=Wu,ro(null,s)):(va(n),Ku(n,T))}var H=e.memoizedState;if(H!==null&&(T=H.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Qu(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),T=s.fallback,c=n.mode,s=Sl({mode:"visible",children:s.children},c),T=Qa(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,ar(n,e.child,null,a),s=n.child,s.memoizedState=Yu(a),s.childLanes=Zu(e,v,a),n.memoizedState=Wu,n=ro(null,s));else if(va(n),Uf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var ne=v.dgst;v=ne,s=Error(r(419)),s.stack="",s.digest=v,Ws({value:s,source:null,stack:null}),n=Qu(e,n,a)}else if(on||zr(e,n,a,!1),v=(a&e.childLanes)!==0,on||v){if(v=kt,v!==null&&(s=Ri(v,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,Ka(e,s),Gn(v,e,s),Xu;Nf(T)||Dl(),n=Qu(e,n,a)}else Nf(T)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Xt=li(T.nextSibling),Sn=n,Mt=!0,da=null,si=!1,e!==null&&hp(n,e),n=Ku(n,s.children),n.flags|=4096);return n}return c?(xa(),T=s.fallback,c=n.mode,H=e.child,ne=H.sibling,s=Ii(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,ne!==null?T=Ii(ne,T):(T=Qa(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,ro(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Yu(a):(c=T.cachePool,c!==null?(H=rn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=xp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Zu(e,v,a),n.memoizedState=Wu,ro(e.child,s)):(va(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Ku(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Qu(e,n,a){return ar(n,e.child,null,a),e=Ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Um(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),du(e.return,n,a)}function Ju(e,n,a,s,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Lm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=en.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,se(en,v),bn(e,n,s,a),s=Mt?qs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,a,n);else if(e.tag===19)Um(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ju(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ju(n,!0,a,null,f,s);break;case"together":Ju(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function lx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),pa(n,rn,e.memoizedState.cache),Ja();break;case 27:case 5:Ue(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Eu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(e,n,a):(va(n),e=ki(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Lm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),se(en,en.current),s)break;return null;case 22:return n.lanes=0,Tm(e,n,a,n.pendingProps);case 24:pa(n,rn,e.memoizedState.cache)}return ki(e,n,a)}function Om(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!$u(e,a)&&(n.flags&128)===0)return on=!1,lx(e,n,a);on=(e.flags&131072)!==0}else on=!1,Mt&&(n.flags&1048576)!==0&&dp(n,qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=nr(n.elementType),n.type=e,typeof e=="function")au(e)?(s=sr(e,s),n.tag=1,n=wm(null,n,e,s,a)):(n.tag=0,n=qu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=Mm(null,n,e,s,a);break e}else if(c===z){n.tag=14,n=bm(null,n,e,s,a);break e}}throw n=ye(e)||e,Error(r(306,n,""))}}return n;case 0:return qu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=sr(s,n.pendingProps),wm(e,n,s,c,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,xu(e,n),eo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,pa(n,rn,s),s!==f.cache&&hu(n,[rn],a,!0),$s(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dm(e,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),Ws(c),n=Dm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xt=li(e.firstChild),Sn=n,Mt=!0,da=null,si=!0,a=Tp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),s===c){n=ki(e,n,a);break e}bn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,s=Il(he.current).createElement(a),s[Kt]=n,s[xn]=e,En(s,a,e),Y(s),n.stateNode=s):n.memoizedState=X0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ue(n),e===null&&Mt&&(s=n.stateNode=V0(n.type,n.pendingProps,he.current),Sn=n,si=!0,c=Xt,Ra(n.type)?(Lf=c,Xt=li(s.firstChild)):Xt=c),bn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=s=Xt)&&(s=Bx(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,Sn=n,Xt=li(s.firstChild),si=!1,c=!0):c=!1),c||ha(n)),Ue(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Cf(c,f)?s=null:v!==null&&Cf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Au(e,n,$v,null,null,a),So._currentValue=c),yl(e,n),bn(e,n,s,a),n.child;case 6:return e===null&&Mt&&((e=a=Xt)&&(a=Fx(a,n.pendingProps,si),a!==null?(n.stateNode=a,Sn=n,Xt=null,e=!0):e=!1),e||ha(n)),null;case 13:return Nm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ar(n,null,s,a):bn(e,n,s,a),n.child;case 11:return Mm(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),bn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=Mn(c),s=s(c),n.flags|=1,bn(e,n,s,a),n.child;case 14:return bm(e,n,n.type,n.pendingProps,a);case 15:return Em(e,n,n.type,n.pendingProps,a);case 19:return Lm(e,n,a);case 31:return ox(e,n,a);case 22:return Tm(e,n,a,n.pendingProps);case 24:return er(n),s=Mn(rn),e===null?(c=gu(),c===null&&(c=kt,f=pu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},vu(n),pa(n,rn,c)):((e.lanes&a)!==0&&(xu(e,n),eo(n,null,null,a),$s()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,rn,s)):(s=f.cache,pa(n,rn,s),s!==c.cache&&hu(n,[rn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function ef(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(o0())e.flags|=8192;else throw ir=rl,_u}else e.flags&=-16777217}function Pm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(n))if(o0())e.flags|=8192;else throw ir=rl,_u}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?un():536870912,e.lanes|=n,Yr|=n)}function so(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function cx(e,n,a){var s=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(rn),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(qt(n),Pm(n,f)):(qt(n),ef(n,c,null,s,a))):f?f!==e.memoizedState?(ji(n),qt(n),Pm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ji(n),qt(n),ef(n,c,e,s,a)),null;case 27:if(Je(n),a=he.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=k.current,Pr(n)?pp(n):(e=V0(c,s,a),n.stateNode=e,ji(n))}return qt(n),null;case 5:if(Je(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=k.current,Pr(n))pp(n);else{var v=Il(he.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[Kt]=n,f[xn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(En(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ji(n)}}return qt(n),ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=he.current,Pr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Kt]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||N0(e.nodeValue,a)),e||ha(n,!0)}else e=Il(e).createTextNode(s),e[Kt]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Pr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Kt]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Pr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Kt]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),qt(n),null);case 4:return Ce(),e===null&&bf(n.stateNode.containerInfo),qt(n),null;case 10:return Hi(n.type),qt(n),null;case 19:if(V(en),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)so(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=cl(e),f!==null){for(n.flags|=128,so(s,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cp(a,e),a=a.sibling;return se(en,en.current&1|2),Mt&&Bi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&ge()>Rl&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304)}else{if(!c)if(e=cl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Mt)return qt(n),null}else 2*ge()-s.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,a=en.current,se(en,c?a&1|2:a&1),Mt&&Bi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return Kn(n),bu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&V(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(rn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(e,n){switch(lu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(rn),Ce(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));Ja()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ja()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(en),null;case 4:return Ce(),null;case 10:return Hi(n.type),null;case 22:case 23:return Kn(n),bu(),e!==null&&V(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(rn),null;case 25:return null;default:return null}}function zm(e,n){switch(lu(n),n.tag){case 3:Hi(rn),Ce();break;case 26:case 27:case 5:Je(n);break;case 4:Ce();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:V(en);break;case 10:Hi(n.type);break;case 22:case 23:Kn(n),bu(),e!==null&&V(tr);break;case 24:Hi(rn)}}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var H=a,ne=T;try{ne()}catch(me){zt(c,H,me)}}}s=s.next}while(s!==f)}}catch(me){zt(n,n.return,me)}}function Im(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(s){zt(e,e.return,s)}}}function Bm(e,n,a){a.props=sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Fm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function tf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[xn]=n}catch(c){zt(e,e.return,c)}}function Hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(af(e,n,a),e=e.sibling;e!==null;)af(e,n,a),e=e.sibling}function bl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Gm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,s,a),n[Kt]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var Xi=!1,ln=!1,rf=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function fx(e,n){if(e=e.containerInfo,Af=jl,e=ep(e),Qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,H=-1,ne=0,me=0,Se=e,re=null;t:for(;;){for(var fe;Se!==a||c!==0&&Se.nodeType!==3||(T=v+c),Se!==f||s!==0&&Se.nodeType!==3||(H=v+s),Se.nodeType===3&&(v+=Se.nodeValue.length),(fe=Se.firstChild)!==null;)re=Se,Se=fe;for(;;){if(Se===e)break t;if(re===a&&++ne===c&&(T=v),re===f&&++me===s&&(H=v),(fe=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=fe}a=T===-1||H===-1?null:{start:T,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},jl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ke=sr(a.type,c);e=s.getSnapshotBeforeUpdate(ke,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($e){zt(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Df(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function km(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),s&4&&oo(5,a);break;case 1:if(Wi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){zt(a,a.return,v)}else{var c=sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){zt(a,a.return,v)}}s&64&&Im(a),s&512&&lo(a,a.return);break;case 3:if(Wi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(v){zt(a,a.return,v)}}break;case 27:n===null&&s&4&&Gm(a);case 26:case 5:Wi(e,a),n===null&&s&4&&Fm(a),s&512&&lo(a,a.return);break;case 12:Wi(e,a);break;case 31:Wi(e,a),s&4&&qm(e,a);break;case 13:Wi(e,a),s&4&&Wm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),Hx(e,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||ln,c=Xi;var f=ln;Xi=s,(ln=n)&&!f?Yi(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),Xi=c,ln=f}break;case 30:break;default:Wi(e,a)}}function jm(e){var n=e.alternate;n!==null&&(e.alternate=null,jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&zs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Yt=null,In=!1;function qi(e,n,a){for(a=a.child;a!==null;)Xm(e,n,a),a=a.sibling}function Xm(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(We,a)}catch{}switch(a.tag){case 26:ln||Di(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Di(a,n);var s=Yt,c=In;Ra(a.type)&&(Yt=a.stateNode,In=!1),qi(e,n,a),vo(a.stateNode),Yt=s,In=c;break;case 5:ln||Di(a,n);case 6:if(s=Yt,c=In,Yt=null,qi(e,n,a),Yt=s,In=c,Yt!==null)if(In)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Yt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Yt!==null&&(In?(e=Yt,I0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ns(e)):I0(Yt,a.stateNode));break;case 4:s=Yt,c=In,Yt=a.stateNode.containerInfo,In=!0,qi(e,n,a),Yt=s,In=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),ln||ya(4,a,n),qi(e,n,a);break;case 1:ln||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bm(a,n,s)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,qi(e,n,a),ln=s;break;default:qi(e,n,a)}}function qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ns(e)}catch(a){zt(n,n.return,a)}}}function Wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ns(e)}catch(a){zt(n,n.return,a)}}function dx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vm),n;default:throw Error(r(435,e.tag))}}function El(e,n){var a=dx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Sx.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){Yt=T.stateNode,In=!1;break e}break;case 5:Yt=T.stateNode,In=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(Yt===null)throw Error(r(160));Xm(f,v,c),Yt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ym(n,e),n=n.sibling}var xi=null;function Ym(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),s&4&&(ya(3,e,e.return),oo(3,e),ya(5,e,e.return));break;case 1:Bn(n,e),Fn(e),s&512&&(ln||a===null||Di(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(Bn(n,e),Fn(e),s&512&&(ln||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[Kt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[Kt]=e,Y(f),s=f;break e;case"link":var v=Y0("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(v=Y0("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Kt]=e,Y(f),s=f}e.stateNode=s}else Z0(c,e.type,e.stateNode);else e.stateNode=W0(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Z0(c,e.type,e.stateNode):W0(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),s&512&&(ln||a===null||Di(a,a.return)),a!==null&&s&4&&tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),s&512&&(ln||a===null||Di(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(ke){zt(e,e.return,ke)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,tf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(rf=!0);break;case 6:if(Bn(n,e),Fn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ke){zt(e,e.return,ke)}}break;case 3:if(Hl=null,c=xi,xi=Bl(n.containerInfo),Bn(n,e),xi=c,Fn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ns(n.containerInfo)}catch(ke){zt(e,e.return,ke)}rf&&(rf=!1,Zm(e));break;case 4:s=xi,xi=Bl(e.stateNode.containerInfo),Bn(n,e),Fn(e),xi=s;break;case 12:Bn(n,e),Fn(e);break;case 31:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,El(e,s)));break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=ge()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,El(e,s)));break;case 22:c=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=Xi,me=ln;if(Xi=ne||c,ln=me||H,Bn(n,e),ln=me,Xi=ne,Fn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||Xi||ln||or(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=H.stateNode;var Se=H.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;T.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(ke){zt(H,H.return,ke)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(ke){zt(H,H.return,ke)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;c?B0(fe,!0):B0(H.stateNode,!1)}catch(ke){zt(H,H.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,El(e,a))));break;case 19:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,El(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=nf(e);bl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Pn(v,""),a.flags&=-33);var T=nf(e);bl(e,T,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=nf(e);af(e,ne,H);break;default:throw Error(r(161))}}catch(me){zt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(e,n.alternate,n),n=n.sibling}function or(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),or(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),or(n);break;case 27:vo(n.stateNode);case 26:case 5:Di(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}e=e.sibling}}function Yi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),oo(4,f);break;case 1:if(Yi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){zt(s,s.return,ne)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)Ap(H[c],T)}catch(ne){zt(s,s.return,ne)}}a&&v&64&&Im(f),lo(f,f.return);break;case 27:Gm(f);case 26:case 5:Yi(c,f,a),a&&s===null&&v&4&&Fm(f),lo(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&v&4&&qm(c,f);break;case 13:Yi(c,f,a),a&&v&4&&Wm(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),lo(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ys(a))}function of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e))}function yi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Km(e,n,a,s),n=n.sibling}function Km(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,s),c&2048&&oo(9,n);break;case 1:yi(e,n,a,s);break;case 3:yi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e)));break;case 12:if(c&2048){yi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else yi(e,n,a,s);break;case 31:yi(e,n,a,s);break;case 13:yi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,s):co(e,n):f._visibility&2?yi(e,n,a,s):(f._visibility|=2,Xr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&sf(v,n);break;case 24:yi(e,n,a,s),c&2048&&of(n.alternate,n);break;default:yi(e,n,a,s)}}function Xr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,H=s,ne=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(f,v,T,H,c),oo(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?Xr(f,v,T,H,c):co(f,v):(me._visibility|=2,Xr(f,v,T,H,c)),c&&ne&2048&&sf(v.alternate,v);break;case 24:Xr(f,v,T,H,c),c&&ne&2048&&of(v.alternate,v);break;default:Xr(f,v,T,H,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&sf(s.alternate,s);break;case 24:co(a,s),c&2048&&of(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function qr(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)Qm(e,n,a),e=e.sibling}function Qm(e,n,a){switch(e.tag){case 26:qr(e,n,a),e.flags&uo&&e.memoizedState!==null&&Jx(a,xi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,n,a);break;case 3:case 4:var s=xi;xi=Bl(e.stateNode.containerInfo),qr(e,n,a),xi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=uo,uo=16777216,qr(e,n,a),uo=s):qr(e,n,a));break;default:qr(e,n,a)}}function Jm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,e0(s,e)}Jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):fo(e);break;default:fo(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,e0(s,e)}Jm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function e0(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(jm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var hx={getCacheForType:function(e){var n=Mn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(rn).controller.signal}},px=typeof WeakMap=="function"?WeakMap:Map,Lt=0,kt=null,gt=null,vt=0,Pt=0,Qn=null,Sa=!1,Wr=!1,lf=!1,Zi=0,$t=0,Ma=0,lr=0,cf=0,Jn=0,Yr=0,ho=null,Hn=null,uf=!1,Al=0,t0=0,Rl=1/0,Cl=null,ba=null,dn=0,Ea=null,Zr=null,Ki=0,ff=0,df=null,n0=null,po=0,hf=null;function $n(){return(Lt&2)!==0&&vt!==0?vt&-vt:B.T!==null?xf():Os()}function i0(){if(Jn===0)if((vt&536870912)===0||Mt){var e=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Gn(e,n,a){(e===kt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(Kr(e,0),Ta(e,vt,Jn,!1)),vn(e,a),((Lt&2)===0||e!==kt)&&(e===kt&&((Lt&2)===0&&(lr|=a),$t===4&&Ta(e,vt,Jn,!1)),Ni(e))}function a0(e,n,a){if((Lt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||at(e,n),c=s?_x(e,n):mf(e,n,!0),f=s;do{if(c===0){Wr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mx(a)){c=mf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=ho;var H=T.current.memoizedState.isDehydrated;if(H&&(Kr(T,v).flags|=256),v=mf(T,v,!1),v!==2){if(lf&&!H){T.errorRecoveryDisabledLanes|=f,lr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Kr(e,0),Ta(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,Jn,!Sa);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Al+300-ge(),10<c)){if(Ta(s,n,Jn,!Sa),Le(s,0,!0)!==0)break e;Ki=n,s.timeoutHandle=P0(r0.bind(null,s,a,Hn,Cl,uf,n,Jn,lr,Yr,Sa,f,"Throttled",-0,0),c);break e}r0(s,a,Hn,Cl,uf,n,Jn,lr,Yr,Sa,f,null,-0,0)}}break}while(!0);Ni(e)}function r0(e,n,a,s,c,f,v,T,H,ne,me,Se,re,fe){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Qm(n,f,Se);var ke=(f&62914560)===f?Al-ge():(f&4194048)===f?t0-ge():0;if(ke=$x(Se,ke),ke!==null){Ki=f,e.cancelPendingCommit=ke(h0.bind(null,e,n,f,a,s,c,v,T,H,me,Se,null,re,fe)),Ta(e,f,v,!ne);return}}h0(e,n,f,a,s,c,v,T,H)}function mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~cf,n&=~lr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-it(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Us(e,a,n)}function wl(){return(Lt&6)===0?(mo(0),!1):!0}function pf(){if(gt!==null){if(Pt===0)var e=gt.return;else e=gt,Fi=$a=null,wu(e),Hr=null,Ks=0,e=gt;for(;e!==null;)zm(e.alternate,e),e=e.return;gt=null}}function Kr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,pf(),kt=e,gt=a=Ii(e.current,null),vt=n,Pt=0,Qn=null,Sa=!1,Wr=at(e,n),lf=!1,Yr=Jn=cf=lr=Ma=$t=0,Hn=ho=null,uf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-it(s),f=1<<c;n|=e[c],s&=~f}return Zi=n,Ko(),a}function s0(e,n){ut=null,B.H=ao,n===Fr||n===al?(n=Mp(),Pt=3):n===_u?(n=Mp(),Pt=4):Pt=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,vl(e,ii(n,e.current)))}function o0(){var e=Zn.current;return e===null?!0:(vt&4194048)===vt?oi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===oi:!1}function l0(){var e=B.H;return B.H=ao,e===null?ao:e}function c0(){var e=B.A;return B.A=hx,e}function Dl(){$t=4,Sa||(vt&4194048)!==vt&&Zn.current!==null||(Wr=!0),(Ma&134217727)===0&&(lr&134217727)===0||kt===null||Ta(kt,vt,Jn,!1)}function mf(e,n,a){var s=Lt;Lt|=2;var c=l0(),f=c0();(kt!==e||vt!==n)&&(Cl=null,Kr(e,n)),n=!1;var v=$t;e:do try{if(Pt!==0&&gt!==null){var T=gt,H=Qn;switch(Pt){case 8:pf(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ne=Pt;if(Pt=0,Qn=null,Qr(e,T,H,ne),a&&Wr){v=0;break e}break;default:ne=Pt,Pt=0,Qn=null,Qr(e,T,H,ne)}}gx(),v=$t;break}catch(me){s0(e,me)}while(!0);return n&&e.shellSuspendCounter++,Fi=$a=null,Lt=s,B.H=c,B.A=f,gt===null&&(kt=null,vt=0,Ko()),v}function gx(){for(;gt!==null;)u0(gt)}function _x(e,n){var a=Lt;Lt|=2;var s=l0(),c=c0();kt!==e||vt!==n?(Cl=null,Rl=ge()+500,Kr(e,n)):Wr=at(e,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=Qn;t:switch(Pt){case 1:Pt=0,Qn=null,Qr(e,n,f,1);break;case 2:case 9:if(yp(f)){Pt=0,Qn=null,f0(n);break}n=function(){Pt!==2&&Pt!==9||kt!==e||(Pt=7),Ni(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:yp(f)?(Pt=0,Qn=null,f0(n)):(Pt=0,Qn=null,Qr(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var T=gt;if(v?K0(v):T.stateNode.complete){Pt=0,Qn=null;var H=T.sibling;if(H!==null)gt=H;else{var ne=T.return;ne!==null?(gt=ne,Nl(ne)):gt=null}break t}}Pt=0,Qn=null,Qr(e,n,f,5);break;case 6:Pt=0,Qn=null,Qr(e,n,f,6);break;case 8:pf(),$t=6;break e;default:throw Error(r(462))}}vx();break}catch(me){s0(e,me)}while(!0);return Fi=$a=null,B.H=s,B.A=c,Lt=a,gt!==null?0:(kt=null,vt=0,Ko(),$t)}function vx(){for(;gt!==null&&!R();)u0(gt)}function u0(e){var n=Om(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Nl(e):gt=n}function f0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:wu(n);default:zm(a,n),n=gt=cp(n,Zi),n=Om(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):gt=n}function Qr(e,n,a,s){Fi=$a=null,wu(n),Hr=null,Ks=0;var c=n.return;try{if(sx(e,c,n,a,vt)){$t=1,vl(e,ii(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,vl(e,ii(a,e.current)),gt=null;return}n.flags&32768?(Mt||s===1?e=!0:Wr||(vt&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),d0(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){d0(n,Sa);return}e=n.return;var a=cx(n.alternate,n,Zi);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function d0(e,n){do{var a=ux(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function h0(e,n,a,s,c,f,v,T,H){e.cancelPendingCommit=null;do Ul();while(dn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=nu,mi(e,a,f,v,T,H),e===kt&&(gt=kt=null,vt=0),Zr=n,Ea=e,Ki=a,ff=f,df=c,n0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mx(we,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=$.p,$.p=2,v=Lt,Lt|=4;try{fx(e,n,a)}finally{Lt=v,$.p=c,B.T=s}}dn=1,p0(),m0(),g0()}}function p0(){if(dn===1){dn=0;var e=Ea,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var c=Lt;Lt|=4;try{Ym(n,e);var f=Rf,v=ep(e.containerInfo),T=f.focusedElem,H=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&$h(T.ownerDocument.documentElement,T)){if(H!==null&&Qc(T)){var ne=H.start,me=H.end;if(me===void 0&&(me=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(me,T.value.length);else{var Se=T.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var fe=re.getSelection(),ke=T.textContent.length,$e=Math.min(H.start,ke),Gt=H.end===void 0?$e:Math.min(H.end,ke);!fe.extend&&$e>Gt&&(v=Gt,Gt=$e,$e=v);var J=Jh(T,$e),X=Jh(T,Gt);if(J&&X&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var te=Se.createRange();te.setStart(J.node,J.offset),fe.removeAllRanges(),$e>Gt?(fe.addRange(te),fe.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),fe.addRange(te))}}}}for(Se=[],fe=T;fe=fe.parentNode;)fe.nodeType===1&&Se.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Se.length;T++){var _e=Se[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}jl=!!Af,Rf=Af=null}finally{Lt=c,$.p=s,B.T=a}}e.current=n,dn=2}}function m0(){if(dn===2){dn=0;var e=Ea,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var c=Lt;Lt|=4;try{km(e,n.alternate,n)}finally{Lt=c,$.p=s,B.T=a}}dn=3}}function g0(){if(dn===4||dn===3){dn=0,ie();var e=Ea,n=Zr,a=Ki,s=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,Zr=Ea=null,_0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),Er(a),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(We,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=$.p,$.p=2,B.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{B.T=n,$.p=c}}(Ki&3)!==0&&Ul(),Ni(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===hf?po++:(po=0,hf=e):po=0,mo(0)}}function _0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ys(n)))}function Ul(){return p0(),m0(),g0(),v0()}function v0(){if(dn!==5)return!1;var e=Ea,n=ff;ff=0;var a=Er(Ki),s=B.T,c=$.p;try{$.p=32>a?32:a,B.T=null,a=df,df=null;var f=Ea,v=Ki;if(dn=0,Zr=Ea=null,Ki=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,$m(f.current),Km(f,f.current,v,a),Lt=T,mo(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(We,f)}catch{}return!0}finally{$.p=c,B.T=s,_0(e,n)}}function x0(e,n,a){n=ii(a,n),n=ju(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(vn(e,2),Ni(e))}function zt(e,n,a){if(e.tag===3)x0(e,e,a);else for(;n!==null;){if(n.tag===3){x0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=ii(a,e),a=ym(2),s=_a(n,a,2),s!==null&&(Sm(a,s,n,e),vn(s,2),Ni(s));break}}n=n.return}}function gf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(lf=!0,c.add(a),e=xx.bind(null,e,n,a),n.then(e,e))}function xx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(vt&a)===a&&($t===4||$t===3&&(vt&62914560)===vt&&300>ge()-Al?(Lt&2)===0&&Kr(e,0):cf|=a,Yr===vt&&(Yr=0)),Ni(e)}function y0(e,n){n===0&&(n=un()),e=Ka(e,n),e!==null&&(vn(e,n),Ni(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),y0(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),y0(e,a)}function Mx(e,n){return Fe(e,n)}var Ll=null,Jr=null,_f=!1,Ol=!1,vf=!1,Aa=0;function Ni(e){e!==Jr&&e.next===null&&(Jr===null?Ll=Jr=e:Jr=Jr.next=e),Ol=!0,_f||(_f=!0,Ex())}function mo(e,n){if(!vf&&Ol){vf=!0;do for(var a=!1,s=Ll;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-it(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,E0(s,f))}else f=vt,f=Le(s,s===kt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||at(s,f)||(a=!0,E0(s,f));s=s.next}while(a);vf=!1}}function bx(){S0()}function S0(){Ol=_f=!1;var e=0;Aa!==0&&Ox()&&(e=Aa);for(var n=ge(),a=null,s=Ll;s!==null;){var c=s.next,f=M0(s,n);f===0?(s.next=null,a===null?Ll=c:a.next=c,c===null&&(Jr=a)):(a=s,(e!==0||(f&3)!==0)&&(Ol=!0)),s=c}dn!==0&&dn!==5||mo(e),Aa!==0&&(Aa=0)}function M0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-it(f),T=1<<v,H=c[v];H===-1?((T&a)===0||(T&s)!==0)&&(c[v]=Wt(T,n)):H<=n&&(e.expiredLanes|=T),f&=~T}if(n=kt,a=vt,a=Le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&O(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||at(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&O(s),Er(a)){case 2:case 8:a=je;break;case 32:a=we;break;case 268435456:a=pt;break;default:a=we}return s=b0.bind(null,e),a=Fe(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&O(s),e.callbackPriority=2,e.callbackNode=null,2}function b0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ul()&&e.callbackNode!==a)return null;var s=vt;return s=Le(e,e===kt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(a0(e,s,n),M0(e,ge()),e.callbackNode!=null&&e.callbackNode===a?b0.bind(null,e):null)}function E0(e,n){if(Ul())return null;a0(e,n,!0)}function Ex(){zx(function(){(Lt&6)!==0?Fe(xe,bx):S0()})}function xf(){if(Aa===0){var e=Ir;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Aa=e}return Aa}function T0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function A0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=T0((c[xn]||null).action),v=s.submitter;v&&(n=(n=v[xn]||null)?T0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new qo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Aa!==0){var H=v?A0(c,v):new FormData(c);Bu(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(T.preventDefault(),H=v?A0(c,v):new FormData(c),Bu(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var yf=0;yf<tu.length;yf++){var Sf=tu[yf],Ax=Sf.toLowerCase(),Rx=Sf[0].toUpperCase()+Sf.slice(1);vi(Ax,"on"+Rx)}vi(ip,"onAnimationEnd"),vi(ap,"onAnimationIteration"),vi(rp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(kv,"onTransitionRun"),vi(jv,"onTransitionStart"),vi(Xv,"onTransitionCancel"),vi(sp,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function R0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],H=T.instance,ne=T.currentTarget;if(T=T.listener,H!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(me){Zo(me)}c.currentTarget=null,f=H}else for(v=0;v<s.length;v++){if(T=s[v],H=T.instance,ne=T.currentTarget,T=T.listener,H!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(me){Zo(me)}c.currentTarget=null,f=H}}}}function _t(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var s=e+"__bubble";a.has(s)||(C0(n,e,2,!1),a.add(s))}function Mf(e,n,a){var s=0;n&&(s|=4),C0(a,e,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function bf(e){if(!e[Pl]){e[Pl]=!0,Ae.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,Mf("selectionchange",!1,n))}}function C0(e,n,a,s){switch(ig(n)){case 2:var c=ny;break;case 8:c=iy;break;default:c=Bf}a=c.bind(null,n,a,e),c=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Ef(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=s.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=C(T),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){s=f=v;continue e}T=T.parentNode}}s=s.return}Lh(function(){var ne=f,me=Hc(a),Se=[];e:{var re=op.get(e);if(re!==void 0){var fe=qo,ke=e;switch(e){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":fe=Sv;break;case"focusin":ke="focus",fe=qc;break;case"focusout":ke="blur",fe=qc;break;case"beforeblur":case"afterblur":fe=qc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Ev;break;case ip:case ap:case rp:fe=dv;break;case sp:fe=Av;break;case"scroll":case"scrollend":fe=ov;break;case"wheel":fe=Cv;break;case"copy":case"cut":case"paste":fe=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Bh;break;case"toggle":case"beforetoggle":fe=Dv}var $e=(n&4)!==0,Gt=!$e&&(e==="scroll"||e==="scrollend"),J=$e?re!==null?re+"Capture":null:re;$e=[];for(var X=ne,te;X!==null;){var _e=X;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||J===null||(_e=Is(X,J),_e!=null&&$e.push(_o(X,_e,te))),Gt)break;X=X.return}0<$e.length&&(re=new fe(re,ke,null,a,me),Se.push({event:re,listeners:$e}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",re&&a!==Fc&&(ke=a.relatedTarget||a.fromElement)&&(C(ke)||ke[Oi]))break e;if((fe||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(ke=a.relatedTarget||a.toElement,fe=ne,ke=ke?C(ke):null,ke!==null&&(Gt=u(ke),$e=ke.tag,ke!==Gt||$e!==5&&$e!==27&&$e!==6)&&(ke=null)):(fe=null,ke=ne),fe!==ke)){if($e=zh,_e="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&($e=Bh,_e="onPointerLeave",J="onPointerEnter",X="pointer"),Gt=fe==null?re:oe(fe),te=ke==null?re:oe(ke),re=new $e(_e,X+"leave",fe,a,me),re.target=Gt,re.relatedTarget=te,_e=null,C(me)===ne&&($e=new $e(J,X+"enter",ke,a,me),$e.target=te,$e.relatedTarget=Gt,_e=$e),Gt=_e,fe&&ke)t:{for($e=wx,J=fe,X=ke,te=0,_e=J;_e;_e=$e(_e))te++;_e=0;for(var Ke=X;Ke;Ke=$e(Ke))_e++;for(;0<te-_e;)J=$e(J),te--;for(;0<_e-te;)X=$e(X),_e--;for(;te--;){if(J===X||X!==null&&J===X.alternate){$e=J;break t}J=$e(J),X=$e(X)}$e=null}else $e=null;fe!==null&&w0(Se,re,fe,$e,!1),ke!==null&&Gt!==null&&w0(Se,Gt,ke,$e,!0)}}e:{if(re=ne?oe(ne):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var Ct=qh;else if(jh(re))if(Wh)Ct=Hv;else{Ct=Bv;var Xe=Iv}else fe=re.nodeName,!fe||fe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Bc(ne.elementType)&&(Ct=qh):Ct=Fv;if(Ct&&(Ct=Ct(e,ne))){Xh(Se,Ct,a,me);break e}Xe&&Xe(e,re,ne),e==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&Tn(re,"number",re.value)}switch(Xe=ne?oe(ne):window,e){case"focusin":(jh(Xe)||Xe.contentEditable==="true")&&(wr=Xe,Jc=ne,Xs=null);break;case"focusout":Xs=Jc=wr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,tp(Se,a,me);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":tp(Se,a,me)}var ft;if(Yc)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Cr?Vh(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Fh&&a.locale!=="ko"&&(Cr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Cr&&(ft=Oh()):(ua=me,kc="value"in ua?ua.value:ua.textContent,Cr=!0)),Xe=zl(ne,xt),0<Xe.length&&(xt=new Ih(xt,e,null,a,me),Se.push({event:xt,listeners:Xe}),ft?xt.data=ft:(ft=kh(a),ft!==null&&(xt.data=ft)))),(ft=Uv?Lv(e,a):Ov(e,a))&&(xt=zl(ne,"onBeforeInput"),0<xt.length&&(Xe=new Ih("onBeforeInput","beforeinput",null,a,me),Se.push({event:Xe,listeners:xt}),Xe.data=ft)),Tx(Se,e,ne,a,me)}R0(Se,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(e,a),c!=null&&s.unshift(_o(e,c,f)),c=Is(e,n),c!=null&&s.push(_o(e,c,f))),e.tag===3)return s;e=e.return}return[]}function wx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w0(e,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,H=T.alternate,ne=T.stateNode;if(T=T.tag,H!==null&&H===s)break;T!==5&&T!==26&&T!==27||ne===null||(H=ne,c?(ne=Is(a,f),ne!=null&&v.unshift(_o(a,ne,H))):c||(ne=Is(a,f),ne!=null&&v.push(_o(a,ne,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Dx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(Dx,`
`).replace(Nx,"")}function N0(e,n){return n=D0(n),D0(e)===n}function Ht(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pn(e,""+s);break;case"className":jt(e,"class",s);break;case"tabIndex":jt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,a,s);break;case"style":Nh(e,s,f);break;case"data":if(n!=="object"){jt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),St(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":St(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rv.get(a)||a,St(e,a,s))}}function Tf(e,n,a,s,c,f){switch(a){case"style":Nh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&Pn(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):St(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,f,v,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),s&&Ht(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=v=c=null,H=null,ne=null;for(s in a)if(a.hasOwnProperty(s)){var me=a[s];if(me!=null)switch(s){case"name":c=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Ht(e,n,s,me,a,null)}}Nn(e,f,T,H,ne,v,c,!1);return;case"select":_t("invalid",e),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Ht(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!s,n!=null?Qt(e,!!s,n,!1):a!=null&&Qt(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ht(e,n,v,T,a,null)}Tr(e,s,c,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(s=a[H],s!=null))switch(H){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ht(e,n,H,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<go.length;s++)_t(go[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(s=a[ne],s!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,ne,s,a,null)}return;default:if(Bc(n)){for(me in a)a.hasOwnProperty(me)&&(s=a[me],s!==void 0&&Tf(e,n,me,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ht(e,n,T,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,H=null,ne=null,me=null;for(fe in a){var Se=a[fe];if(a.hasOwnProperty(fe)&&Se!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Se;default:s.hasOwnProperty(fe)||Ht(e,n,fe,null,s,Se)}}for(var re in s){var fe=s[re];if(Se=a[re],s.hasOwnProperty(re)&&(fe!=null||Se!=null))switch(re){case"type":f=fe;break;case"name":c=fe;break;case"checked":ne=fe;break;case"defaultChecked":me=fe;break;case"value":v=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Se&&Ht(e,n,re,fe,s,Se)}}Bt(e,v,T,H,ne,me,f,c);return;case"select":fe=v=T=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:s.hasOwnProperty(f)||Ht(e,n,f,null,s,H)}for(c in s)if(f=s[c],H=a[c],s.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":re=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==H&&Ht(e,n,c,f,s,H)}n=T,a=v,s=fe,re!=null?Qt(e,!!a,re,!1):!!s!=!!a&&(n!=null?Qt(e,!!a,n,!0):Qt(e,!!a,a?[]:"",!1));return;case"textarea":fe=re=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ht(e,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":re=c;break;case"defaultValue":fe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ht(e,n,v,c,s,f)}yn(e,re,fe);return;case"option":for(var ke in a)if(re=a[ke],a.hasOwnProperty(ke)&&re!=null&&!s.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:Ht(e,n,ke,null,s,re)}for(H in s)if(re=s[H],fe=a[H],s.hasOwnProperty(H)&&re!==fe&&(re!=null||fe!=null))switch(H){case"selected":e.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ht(e,n,H,re,s,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)re=a[$e],a.hasOwnProperty($e)&&re!=null&&!s.hasOwnProperty($e)&&Ht(e,n,$e,null,s,re);for(ne in s)if(re=s[ne],fe=a[ne],s.hasOwnProperty(ne)&&re!==fe&&(re!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Ht(e,n,ne,re,s,fe)}return;default:if(Bc(n)){for(var Gt in a)re=a[Gt],a.hasOwnProperty(Gt)&&re!==void 0&&!s.hasOwnProperty(Gt)&&Tf(e,n,Gt,void 0,s,re);for(me in s)re=s[me],fe=a[me],!s.hasOwnProperty(me)||re===fe||re===void 0&&fe===void 0||Tf(e,n,me,re,s,fe);return}}for(var J in a)re=a[J],a.hasOwnProperty(J)&&re!=null&&!s.hasOwnProperty(J)&&Ht(e,n,J,null,s,re);for(Se in s)re=s[Se],fe=a[Se],!s.hasOwnProperty(Se)||re===fe||re==null&&fe==null||Ht(e,n,Se,re,s,fe)}function U0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&U0(v)){for(v=0,T=c.responseEnd,s+=1;s<a.length;s++){var H=a[s],ne=H.startTime;if(ne>T)break;var me=H.transferSize,Se=H.initiatorType;me&&U0(Se)&&(H=H.responseEnd,v+=me*(H<T?1:(T-ne)/(H-ne)))}if(--s,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Af=null,Rf=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(Ix)}:P0;function Ix(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function I0(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ns(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")vo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[qa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&vo(e.ownerDocument.body);a=c}while(a);ns(n)}function B0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Df(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function Fx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function F0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Nf(e){return e.data==="$?"||e.data==="$~"}function Uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Lf=null;function H0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function V0(e,n,a){switch(n=Il(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);zs(e)}var ci=new Map,k0=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=$.d;$.d={f:Gx,r:Vx,D:kx,C:jx,L:Xx,m:qx,X:Yx,S:Wx,M:Zx};function Gx(){var e=Qi.f(),n=wl();return e||n}function Vx(e){var n=K(e);n!==null&&n.tag===5&&n.type==="form"?sm(n):Qi.r(e)}var $r=typeof document>"u"?null:document;function j0(e,n,a){var s=$r;if(s&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),k0.has(c)||(k0.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",e),Y(n),s.head.appendChild(n)))}}function kx(e){Qi.D(e),j0("dns-prefetch",e,null)}function jx(e,n){Qi.C(e,n),j0("preconnect",e,n)}function Xx(e,n,a){Qi.L(e,n,a);var s=$r;if(s&&e&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(e)+'"]';var f=c;switch(n){case"style":f=es(e);break;case"script":f=ts(e)}ci.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(yo(f))||(n=s.createElement("link"),En(n,"link",e),Y(n),s.head.appendChild(n)))}}function qx(e,n){Qi.m(e,n);var a=$r;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(s)+'"][href="'+mn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(e)}if(!ci.has(f)&&(e=x({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}s=a.createElement("link"),En(s,"link",e),Y(s),a.head.appendChild(s)}}}function Wx(e,n,a){Qi.S(e,n,a);var s=$r;if(s&&e){var c=ce(s).hoistableStyles,f=es(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(xo(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Of(e,a);var H=v=s.createElement("link");Y(H),En(H,"link",e),H._p=new Promise(function(ne,me){H.onload=ne,H.onerror=me}),H.addEventListener("load",function(){T.loading|=1}),H.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Fl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function Yx(e,n){Qi.X(e,n);var a=$r;if(a&&e){var s=ce(a).hoistableScripts,c=ts(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=x({src:e,async:!0},n),(n=ci.get(c))&&Pf(e,n),f=a.createElement("script"),Y(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zx(e,n){Qi.M(e,n);var a=$r;if(a&&e){var s=ce(a).hoistableScripts,c=ts(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Pf(e,n),f=a.createElement("script"),Y(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function X0(e,n,a,s){var c=(c=he.current)?Bl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=ce(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=es(a.href);var f=ce(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(xo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Kx(c,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=ce(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function es(e){return'href="'+mn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),Y(n),e.head.appendChild(n))}function ts(e){return'[src="'+mn(e)+'"]'}function yo(e){return"script[async]"+e}function W0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(s)return n.instance=s,Y(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Y(s),En(s,"style",c),Fl(s,a.precedence,e),n.instance=s;case"stylesheet":c=es(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;s=q0(a),(c=ci.get(c))&&Of(s,c),f=(e.ownerDocument||e).createElement("link"),Y(f);var v=f;return v._p=new Promise(function(T,H){v.onload=T,v.onerror=H}),En(f,"link",s),n.state.loading|=4,Fl(f,a.precedence,e),n.instance=f;case"script":return f=ts(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,Y(c),c):(s=a,(c=ci.get(f))&&(s=x({},a),Pf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Y(c),En(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fl(s,a.precedence,e));return n.instance}function Fl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function Y0(e,n,a){if(Hl===null){var s=new Map,c=Hl=new Map;c.set(a,s)}else c=Hl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[Kt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function Z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(s.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Gl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,s=q0(s),(c=ci.get(c))&&Of(s,c),f=f.createElement("link"),Y(f);var v=f;v._p=new Promise(function(T,H){v.onload=T,v.onerror=H}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function $x(e,n){return e.stylesheets&&e.count===0&&kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&zf===0&&(zf=62500*Lx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,n.forEach(ey,e),Vl=null,Gl.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=Vl.get(e);if(a)var s=a.get(null);else{a=new Map,Vl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function ty(e,n,a,s,c,f,v,T,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Q0(e,n,a,s,c,f,v,T,H,ne,me,Se){return e=new ty(e,n,a,v,H,ne,me,Se,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vu(f),e}function J0(e){return e?(e=Ur,e):Ur}function $0(e,n,a,s,c,f){c=J0(c),s.context===null?s.context=c:s.pendingContext=c,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(e,s,n),a!==null&&(Gn(a,e,n),Js(a,e,n))}function eg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function If(e,n){eg(e,n),(e=e.alternate)&&eg(e,n)}function tg(e){if(e.tag===13||e.tag===31){var n=Ka(e,67108864);n!==null&&Gn(n,e,67108864),If(e,67108864)}}function ng(e){if(e.tag===13||e.tag===31){var n=$n();n=ja(n);var a=Ka(e,n);a!==null&&Gn(a,e,n),If(e,n)}}var jl=!0;function ny(e,n,a,s){var c=B.T;B.T=null;var f=$.p;try{$.p=2,Bf(e,n,a,s)}finally{$.p=f,B.T=c}}function iy(e,n,a,s){var c=B.T;B.T=null;var f=$.p;try{$.p=8,Bf(e,n,a,s)}finally{$.p=f,B.T=c}}function Bf(e,n,a,s){if(jl){var c=Ff(s);if(c===null)Ef(e,n,s,Xl,a),ag(e,s);else if(ry(c,e,n,a,s))s.stopPropagation();else if(ag(e,s),n&4&&-1<ay.indexOf(e)){for(;c!==null;){var f=K(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ne(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var H=1<<31-it(v);T.entanglements[1]|=H,v&=~H}Ni(f),(Lt&6)===0&&(Rl=ge()+500,mo(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&Gn(T,f,2),wl(),If(f,2)}if(f=Ff(s),f===null&&Ef(e,n,s,Xl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Ef(e,n,s,null,a)}}function Ff(e){return e=Hc(e),Hf(e)}var Xl=null;function Hf(e){if(Xl=null,e=C(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function ig(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case xe:return 2;case je:return 8;case we:case He:return 32;case pt:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ca=null,wa=null,Da=null,Mo=new Map,bo=new Map,Na=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Eo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=K(n),n!==null&&tg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ry(e,n,a,s,c){switch(n){case"focusin":return Ca=Eo(Ca,e,n,a,s,c),!0;case"dragenter":return wa=Eo(wa,e,n,a,s,c),!0;case"mouseover":return Da=Eo(Da,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Eo(bo.get(f)||null,e,n,a,s,c)),!0}return!1}function rg(e){var n=C(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){ng(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){ng(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ff(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=K(a),n!==null&&tg(n),e.blockedOn=a,!1;n.shift()}return!0}function sg(e,n,a){ql(e)&&a.delete(n)}function sy(){Gf=!1,Ca!==null&&ql(Ca)&&(Ca=null),wa!==null&&ql(wa)&&(wa=null),Da!==null&&ql(Da)&&(Da=null),Mo.forEach(sg),bo.forEach(sg)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sy)))}var Yl=null;function og(e){Yl!==e&&(Yl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=K(a);f!==null&&(e.splice(n,3),n-=3,Bu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ns(e){function n(H){return Wl(H,e)}Ca!==null&&Wl(Ca,e),wa!==null&&Wl(wa,e),Da!==null&&Wl(Da,e),Mo.forEach(n),bo.forEach(n);for(var a=0;a<Na.length;a++){var s=Na[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)rg(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[xn]||null;if(typeof f=="function")v||og(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)T=v.formAction;else if(Hf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),og(a)}}}function lg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Vf(e){this._internalRoot=e}Zl.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();$0(a,s,e,n,null,null)},Zl.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$0(e.current,2,null,e,null,null),wl(),n[Oi]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&rg(e)}};var cg=t.version;if(cg!=="19.2.8")throw Error(r(527,cg,"19.2.8"));$.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var oy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{We=Kl.inject(oy),qe=Kl}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=gm,f=_m,v=vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Q0(e,1,!1,null,null,a,s,null,c,f,v,lg),e[Oi]=n.current,bf(e),new Vf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=gm,v=_m,T=vm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Q0(e,1,!0,n,a??null,s,c,H,f,v,T,lg),n.context=J0(null),a=n.current,s=$n(),s=ja(s),c=ga(s),c.callback=null,_a(a,c,s),a=s,n.current.lanes=a,vn(n,a),Ni(n),e[Oi]=n.current,bf(e),new Zl(n)},Ao.version="19.2.8",Ao}var xg;function vy(){if(xg)return Xf.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=_y(),Xf.exports}var xy=vy();const yy=y_(xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var My={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=Zt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},m)=>Zt.createElement("svg",{ref:m,...My,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:S_("lucide",l),...h},[...d.map(([p,g])=>Zt.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(o,t)=>{const i=Zt.forwardRef(({className:r,...l},u)=>Zt.createElement(by,{ref:u,iconNode:t,className:S_(`lucide-${Sy(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ty=Tt("ArrowRight",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],gh=Tt("Award",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cy=Tt("BookOpen",Ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Dy=Tt("Brain",wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zf=Tt("Check",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ly=Tt("CircleCheckBig",Uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Py=Tt("CircleCheck",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Iy=Tt("Cloud",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],M_=Tt("Code",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],yg=Tt("Copy",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],Gy=Tt("CornerDownLeft",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],b_=Tt("Cpu",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],jy=Tt("Database",ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],qy=Tt("Download",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yy=Tt("ExternalLink",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xs=Tt("FileText",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Qy=Tt("Flame",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],E_=Tt("Github",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Sg=Tt("GraduationCap",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],tS=Tt("Info",eS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],iS=Tt("Layers",nS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],rS=Tt("Linkedin",aS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],oS=Tt("Mail",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],cS=Tt("MapPin",lS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],fS=Tt("Menu",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],hS=Tt("Phone",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],mS=Tt("Send",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],_S=Tt("Server",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xS=Tt("ShieldCheck",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ac=Tt("Sparkles",yS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Ad=Tt("Terminal",SS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],bS=Tt("Trash2",MS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Mg=Tt("Trophy",ES);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_h=Tt("X",TS);function AS({onOpenResumeModal:o}){const[t,i]=Zt.useState(!1),[r,l]=Zt.useState(!1);Zt.useEffect(()=>{const d=()=>{i(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Overview",href:"#hero"},{name:"Academic",href:"#academic"},{name:"Grimoire (Skills)",href:"#skills"},{name:"Chronicles (Projects)",href:"#projects"},{name:"Achievements",href:"#achievements"},{name:"REPL Terminal",href:"#terminal"},{name:"Contact",href:"#contact"}];return E.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-[#08070c]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-black/50":"bg-transparent py-5"}`,children:[E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[E.jsxs("a",{href:"#hero",className:"flex items-center gap-3 group",children:[E.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(223,177,91,0.4)] transition-all",children:E.jsx("span",{className:"font-cinzel text-amber-400 font-bold text-lg group-hover:scale-110 transition-transform",children:"AT"})}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("span",{className:"font-cinzel font-bold text-slate-100 tracking-wider text-sm sm:text-base group-hover:text-amber-300 transition-colors",children:"ADITYA THAPLIYAL"}),E.jsx("span",{className:"text-[10px] text-amber-500/70 tracking-widest uppercase font-mono",children:"Arcane Systems • CSE"})]})]}),E.jsx("nav",{className:"hidden lg:flex items-center gap-6 text-sm font-medium",children:u.map(d=>E.jsx("a",{href:d.href,className:"text-slate-300 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all",children:d.name},d.name))}),E.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[E.jsxs("a",{href:"#terminal",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-slate-900/80 border border-slate-700 text-teal-400 hover:border-teal-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.3)] transition-all",children:[E.jsx(Ad,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"CLI Shell"})]}),E.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-semibold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-[0_0_15px_rgba(223,177,91,0.3)] hover:shadow-[0_0_22px_rgba(223,177,91,0.5)] transition-all",children:[E.jsx(xs,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"Resume PDF"})]})]}),E.jsxs("div",{className:"lg:hidden flex items-center gap-2",children:[E.jsx("button",{onClick:o,className:"sm:hidden p-2 text-amber-400 hover:text-amber-300",title:"Resume PDF",children:E.jsx(xs,{className:"w-5 h-5"})}),E.jsx("button",{onClick:()=>l(!r),className:"p-2 text-slate-300 hover:text-amber-400 transition-colors","aria-label":"Toggle menu",children:r?E.jsx(_h,{className:"w-6 h-6"}):E.jsx(fS,{className:"w-6 h-6"})})]})]}),r&&E.jsx("div",{className:"lg:hidden bg-[#0a090f]/95 border-b border-amber-500/20 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl",children:E.jsxs("div",{className:"flex flex-col gap-3",children:[u.map(d=>E.jsx("a",{href:d.href,onClick:()=>l(!1),className:"text-slate-200 hover:text-amber-400 py-2 text-base font-medium border-b border-slate-800/60",children:d.name},d.name)),E.jsxs("div",{className:"pt-2 flex flex-col gap-2",children:[E.jsxs("a",{href:"#terminal",onClick:()=>l(!1),className:"flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-mono bg-slate-900 border border-teal-500/40 text-teal-400",children:[E.jsx(Ad,{className:"w-4 h-4"}),E.jsx("span",{children:"Launch Interactive REPL"})]}),E.jsxs("button",{onClick:()=>{l(!1),o()},className:"flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold bg-amber-500 text-slate-950 shadow-md",children:[E.jsx(xs,{className:"w-4 h-4"}),E.jsx("span",{children:"View & Download Resume PDF"})]})]})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="173",RS=0,bg=1,CS=2,T_=1,wS=2,ia=3,Va=0,jn=1,aa=2,Ha=0,ys=1,Eg=2,Tg=3,Ag=4,DS=5,_r=100,NS=101,US=102,LS=103,OS=104,PS=200,zS=201,IS=202,BS=203,Rd=204,Cd=205,FS=206,HS=207,GS=208,VS=209,kS=210,jS=211,XS=212,qS=213,WS=214,wd=0,Dd=1,Nd=2,bs=3,Ud=4,Ld=5,Od=6,Pd=7,A_=0,YS=1,ZS=2,Ga=0,KS=1,QS=2,JS=3,$S=4,eM=5,tM=6,nM=7,R_=300,Es=301,Ts=302,zd=303,Id=304,Nc=306,Bd=1e3,yr=1001,Fd=1002,Ai=1003,iM=1004,Ql=1005,Li=1006,Kf=1007,Sr=1008,la=1009,C_=1010,w_=1011,Oo=1012,xh=1013,Mr=1014,ra=1015,Po=1016,yh=1017,Sh=1018,As=1020,D_=35902,N_=1021,U_=1022,Ti=1023,L_=1024,O_=1025,Ss=1026,Rs=1027,P_=1028,Mh=1029,z_=1030,bh=1031,Eh=1033,yc=33776,Sc=33777,Mc=33778,bc=33779,Hd=35840,Gd=35841,Vd=35842,kd=35843,jd=36196,Xd=37492,qd=37496,Wd=37808,Yd=37809,Zd=37810,Kd=37811,Qd=37812,Jd=37813,$d=37814,eh=37815,th=37816,nh=37817,ih=37818,ah=37819,rh=37820,sh=37821,Ec=36492,oh=36494,lh=36495,I_=36283,ch=36284,uh=36285,fh=36286,aM=3200,rM=3201,sM=0,oM=1,Fa="",fi="srgb",Cs="srgb-linear",Rc="linear",Vt="srgb",is=7680,Rg=519,lM=512,cM=513,uM=514,B_=515,fM=516,dM=517,hM=518,pM=519,Cg=35044,wg="300 es",sa=2e3,Cc=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,dh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function bt(o,t,i){return Math.max(t,Math.min(i,o))}function mM(o,t){return(o%t+t)%t}function Jf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,i=0){Ot.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(t,i,r,l,u,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],y=r[2],b=r[5],A=r[8],D=l[0],S=l[3],_=l[6],P=l[1],L=l[4],N=l[7],W=l[2],G=l[5],z=l[8];return u[0]=d*D+h*P+m*W,u[3]=d*S+h*L+m*G,u[6]=d*_+h*N+m*z,u[1]=p*D+g*P+x*W,u[4]=p*S+g*L+x*G,u[7]=p*_+g*N+x*z,u[2]=y*D+b*P+A*W,u[5]=y*S+b*L+A*G,u[8]=y*_+b*N+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*d-h*p,y=h*m-g*u,b=p*u-d*m,A=i*x+r*y+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=x*D,t[1]=(l*p-g*r)*D,t[2]=(h*r-l*d)*D,t[3]=y*D,t[4]=(g*i-l*m)*D,t[5]=(l*u-h*i)*D,t[6]=b*D,t[7]=(r*m-p*i)*D,t[8]=(d*i-r*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply($f.makeScale(t,i)),this}rotate(t){return this.premultiply($f.makeRotation(-t)),this}translate(t,i){return this.premultiply($f.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new dt;function F_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gM(){const o=wc("canvas");return o.style.display="block",o}const Dg={};function _s(o){o in Dg||(Dg[o]=!0,console.warn(o))}function _M(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function vM(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xM(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ng=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const o={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Vt&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Cs]:{primaries:t,whitePoint:r,transfer:Rc,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Dt=yM();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class SM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{as===void 0&&(as=wc("canvas")),as.width=t.width,as.height=t.height;const r=as.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=as}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=wc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=oa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let MM=0;class H_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ed(l[d].image)):u.push(ed(l[d]))}else u=ed(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class Xn extends Ds{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=yr,l=yr,u=Li,d=Sr,h=Ti,m=la,p=Xn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=zo(),this.name="",this.source=new H_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bd:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case Fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bd:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case Fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=R_;Xn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],y=m[1],b=m[5],A=m[9],D=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-D)<.01&&Math.abs(A-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+D)<.1&&Math.abs(A+S)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(b+1)/2,W=(_+1)/2,G=(g+y)/4,z=(x+D)/4,q=(A+S)/4;return L>N&&L>W?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=G/r,u=z/r):N>W?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=G/l,u=q/l):W<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(W),r=z/u,l=q/u),this.set(r,l,u,i),this}let P=Math.sqrt((S-A)*(S-A)+(x-D)*(x-D)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(S-A)/P,this.y=(x-D)/P,this.z=(y-g)/P,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this.w=bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this.w=bt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends Ds{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new H_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends EM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class G_ extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const y=u[d+0],b=u[d+1],A=u[d+2],D=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=b,t[i+2]=A,t[i+3]=D;return}if(x!==D||m!==y||p!==b||g!==A){let S=1-h;const _=m*y+p*b+g*A+x*D,P=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const W=Math.sqrt(L),G=Math.atan2(W,_*P);S=Math.sin(S*G)/W,h=Math.sin(h*G)/W}const N=h*P;if(m=m*S+y*N,p=p*S+b*N,g=g*S+A*N,x=x*S+D*N,S===1-h){const W=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=W,p*=W,g*=W,x*=W}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[d],y=u[d+1],b=u[d+2],A=u[d+3];return t[i]=h*A+g*x+m*b-p*y,t[i+1]=m*A+g*y+p*x-h*b,t[i+2]=p*A+g*b+h*y-m*x,t[i+3]=g*A-h*x-m*y-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(u/2),y=m(r/2),b=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*g*x+p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x-y*b*A;break;case"YXZ":this._x=y*g*x+p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x+y*b*A;break;case"ZXY":this._x=y*g*x-p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x-y*b*A;break;case"ZYX":this._x=y*g*x-p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x+y*b*A;break;case"YZX":this._x=y*g*x+p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x-y*b*A;break;case"XZY":this._x=y*g*x-p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x+y*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=r+h+x;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>x){const b=2*Math.sqrt(1+r-h-x);this._w=(g-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>x){const b=2*Math.sqrt(1+h-r-x);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+x-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(t=0,i=0,r=0){ae.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Lg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Lg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*g,this.y=r+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new ae,Lg=new Io;class Bo{constructor(t=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Si):Si.fromBufferAttribute(u,d),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jl.copy(r.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),$l.subVectors(this.max,Co),rs.subVectors(t.a,Co),ss.subVectors(t.b,Co),os.subVectors(t.c,Co),La.subVectors(ss,rs),Oa.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cr.z,cr.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cr.z,0,-cr.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cr.y,cr.x,0];return!nd(i,rs,ss,os,$l)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,rs,ss,os,$l))?!1:(ec.crossVectors(La,Oa),i=[ec.x,ec.y,ec.z],nd(i,rs,ss,os,$l))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Si=new ae,Jl=new Bo,rs=new ae,ss=new ae,os=new ae,La=new ae,Oa=new ae,cr=new ae,Co=new ae,$l=new ae,ec=new ae,ur=new ae;function nd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=t.dot(ur),p=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const AM=new Bo,wo=new ae,id=new ae;class Uc{constructor(t=new ae,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):AM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(id)),this.expandByPoint(wo.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new ae,ad=new ae,tc=new ae,Pa=new ae,rd=new ae,nc=new ae,sd=new ae;class V_{constructor(t=new ae,i=new ae(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ad.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(ad);const u=t.distanceTo(i)*.5,d=-this.direction.dot(tc),h=Pa.dot(this.direction),m=-Pa.dot(tc),p=Pa.lengthSq(),g=Math.abs(1-d*d);let x,y,b,A;if(g>0)if(x=d*m-h,y=d*h-m,A=u*g,x>=0)if(y>=-A)if(y<=A){const D=1/g;x*=D,y*=D,b=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*m)+p;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-m),u),b=y*(y+2*m)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ad).addScaledVector(tc,y),b}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,d=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,d=(t.min.y-y.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){rd.subVectors(i,t),nc.subVectors(r,t),sd.crossVectors(rd,nc);let d=this.direction.dot(sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,t);const m=h*this.direction.dot(nc.crossVectors(Pa,nc));if(m<0)return null;const p=h*this.direction.dot(rd.cross(Pa));if(p<0||m+p>d)return null;const g=-h*Pa.dot(sd);return g<0?null:this.at(g/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,r,l,u,d,h,m,p,g,x,y,b,A,D,S){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,g,x,y,b,A,D,S)}set(t,i,r,l,u,d,h,m,p,g,x,y,b,A,D,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=b,_[7]=A,_[11]=D,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ls.setFromMatrixColumn(t,0).length(),u=1/ls.setFromMatrixColumn(t,1).length(),d=1/ls.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=d*g,b=d*x,A=h*g,D=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=b+A*p,i[5]=y-D*p,i[9]=-h*m,i[2]=D-y*p,i[6]=A+b*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*g,b=m*x,A=p*g,D=p*x;i[0]=y+D*h,i[4]=A*h-b,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=b*h-A,i[6]=D+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*g,b=m*x,A=p*g,D=p*x;i[0]=y-D*h,i[4]=-d*x,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*g,i[9]=D-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*g,b=d*x,A=h*g,D=h*x;i[0]=m*g,i[4]=A*p-b,i[8]=y*p+D,i[1]=m*x,i[5]=D*p+y,i[9]=b*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,b=d*p,A=h*m,D=h*p;i[0]=m*g,i[4]=D-y*x,i[8]=A*x+b,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=b*x+A,i[10]=y-D*x}else if(t.order==="XZY"){const y=d*m,b=d*p,A=h*m,D=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+D,i[5]=d*g,i[9]=b*x-A,i[2]=A*x-b,i[6]=h*g,i[10]=D*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RM,t,CM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),za.crossVectors(r,ei),za.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),za.crossVectors(r,ei)),za.normalize(),ic.crossVectors(ei,za),l[0]=za.x,l[4]=ic.x,l[8]=ei.x,l[1]=za.y,l[5]=ic.y,l[9]=ei.y,l[2]=za.z,l[6]=ic.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],y=r[9],b=r[13],A=r[2],D=r[6],S=r[10],_=r[14],P=r[3],L=r[7],N=r[11],W=r[15],G=l[0],z=l[4],q=l[8],U=l[12],w=l[1],j=l[5],de=l[9],ue=l[13],ye=l[2],ve=l[6],B=l[10],$=l[14],Q=l[3],be=l[7],F=l[11],M=l[15];return u[0]=d*G+h*w+m*ye+p*Q,u[4]=d*z+h*j+m*ve+p*be,u[8]=d*q+h*de+m*B+p*F,u[12]=d*U+h*ue+m*$+p*M,u[1]=g*G+x*w+y*ye+b*Q,u[5]=g*z+x*j+y*ve+b*be,u[9]=g*q+x*de+y*B+b*F,u[13]=g*U+x*ue+y*$+b*M,u[2]=A*G+D*w+S*ye+_*Q,u[6]=A*z+D*j+S*ve+_*be,u[10]=A*q+D*de+S*B+_*F,u[14]=A*U+D*ue+S*$+_*M,u[3]=P*G+L*w+N*ye+W*Q,u[7]=P*z+L*j+N*ve+W*be,u[11]=P*q+L*de+N*B+W*F,u[15]=P*U+L*ue+N*$+W*M,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],y=t[10],b=t[14],A=t[3],D=t[7],S=t[11],_=t[15];return A*(+u*m*x-l*p*x-u*h*y+r*p*y+l*h*b-r*m*b)+D*(+i*m*b-i*p*y+u*d*y-l*d*b+l*p*g-u*m*g)+S*(+i*p*x-i*h*b-u*d*x+r*d*b+u*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*y+l*d*x-r*d*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],y=t[10],b=t[11],A=t[12],D=t[13],S=t[14],_=t[15],P=x*S*p-D*y*p+D*m*b-h*S*b-x*m*_+h*y*_,L=A*y*p-g*S*p-A*m*b+d*S*b+g*m*_-d*y*_,N=g*D*p-A*x*p+A*h*b-d*D*b-g*h*_+d*x*_,W=A*x*m-g*D*m-A*h*y+d*D*y+g*h*S-d*x*S,G=i*P+r*L+l*N+u*W;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=P*z,t[1]=(D*y*u-x*S*u-D*l*b+r*S*b+x*l*_-r*y*_)*z,t[2]=(h*S*u-D*m*u+D*l*p-r*S*p-h*l*_+r*m*_)*z,t[3]=(x*m*u-h*y*u-x*l*p+r*y*p+h*l*b-r*m*b)*z,t[4]=L*z,t[5]=(g*S*u-A*y*u+A*l*b-i*S*b-g*l*_+i*y*_)*z,t[6]=(A*m*u-d*S*u-A*l*p+i*S*p+d*l*_-i*m*_)*z,t[7]=(d*y*u-g*m*u+g*l*p-i*y*p-d*l*b+i*m*b)*z,t[8]=N*z,t[9]=(A*x*u-g*D*u-A*r*b+i*D*b+g*r*_-i*x*_)*z,t[10]=(d*D*u-A*h*u+A*r*p-i*D*p-d*r*_+i*h*_)*z,t[11]=(g*h*u-d*x*u-g*r*p+i*x*p+d*r*b-i*h*b)*z,t[12]=W*z,t[13]=(g*D*l-A*x*l+A*r*y-i*D*y-g*r*S+i*x*S)*z,t[14]=(A*h*l-d*D*l-A*r*m+i*D*m+d*r*S-i*h*S)*z,t[15]=(d*x*l-g*h*l+g*r*m-i*x*m-d*r*y+i*h*y)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,y=u*p,b=u*g,A=u*x,D=d*g,S=d*x,_=h*x,P=m*p,L=m*g,N=m*x,W=r.x,G=r.y,z=r.z;return l[0]=(1-(D+_))*W,l[1]=(b+N)*W,l[2]=(A-L)*W,l[3]=0,l[4]=(b-N)*G,l[5]=(1-(y+_))*G,l[6]=(S+P)*G,l[7]=0,l[8]=(A+L)*z,l[9]=(S-P)*z,l[10]=(1-(y+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),h=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/u,g=1/d,x=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,i.setFromRotationMatrix(Mi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=sa){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,A;if(h===sa)b=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Cc)b=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=sa){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(d-u),y=(i+t)*p,b=(r+l)*g;let A,D;if(h===sa)A=(d+u)*x,D=-2*x;else if(h===Cc)A=u*x,D=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-b,m[2]=0,m[6]=0,m[10]=D,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ls=new ae,Mi=new an,RM=new ae(0,0,0),CM=new ae(1,1,1),za=new ae,ic=new ae,ei=new ae,Og=new an,Pg=new Io;class ca{constructor(t=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Og.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Og,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wM=0;const zg=new ae,cs=new Io,ea=new an,ac=new ae,Do=new ae,DM=new ae,NM=new Io,Ig=new ae(1,0,0),Bg=new ae(0,1,0),Fg=new ae(0,0,1),Hg={type:"added"},UM={type:"removed"},us={type:"childadded",child:null},od={type:"childremoved",child:null};class qn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new ae,i=new ca,r=new Io,l=new ae(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new dt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Ig,t)}rotateY(t){return this.rotateOnAxis(Bg,t)}rotateZ(t){return this.rotateOnAxis(Fg,t)}translateOnAxis(t,i){return zg.copy(t).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ig,t)}translateY(t){return this.translateOnAxis(Bg,t)}translateZ(t){return this.translateOnAxis(Fg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ac.copy(t):ac.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Do,ac,this.up):ea.lookAt(ac,Do,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ea),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hg),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UM),od.child=t,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hg),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,DM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,NM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),x=d(t.shapes),y=d(t.skeletons),b=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ae(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new ae,ta=new ae,ld=new ae,na=new ae,fs=new ae,ds=new ae,Gg=new ae,cd=new ae,ud=new ae,fd=new ae,dd=new nn,hd=new nn,pd=new nn;class Ei{constructor(t=new ae,i=new ae,r=new ae){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){bi.subVectors(l,i),ta.subVectors(r,i),ld.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(ta),m=bi.dot(ld),p=ta.dot(ta),g=ta.dot(ld),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,b=(p*m-h*g)*y,A=(d*g-h*m)*y;return u.set(1-b-A,A,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,r),pd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(dd,u.x),d.addScaledVector(hd,u.y),d.addScaledVector(pd,u.z),d}static isFrontFacing(t,i,r,l){return bi.subVectors(r,i),ta.subVectors(t,i),bi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),bi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;fs.subVectors(l,r),ds.subVectors(u,r),cd.subVectors(t,r);const m=fs.dot(cd),p=ds.dot(cd);if(m<=0&&p<=0)return i.copy(r);ud.subVectors(t,l);const g=fs.dot(ud),x=ds.dot(ud);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(fs,d);fd.subVectors(t,u);const b=fs.dot(fd),A=ds.dot(fd);if(A>=0&&b<=A)return i.copy(u);const D=b*p-m*A;if(D<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ds,h);const S=g*A-b*x;if(S<=0&&x-g>=0&&b-A>=0)return Gg.subVectors(u,l),h=(x-g)/(x-g+(b-A)),i.copy(l).addScaledVector(Gg,h);const _=1/(S+D+y);return d=D*_,h=y*_,i.copy(r).addScaledVector(fs,d).addScaledVector(ds,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function md(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Nt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=mM(t,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=md(d,u,t+1/3),this.g=md(d,u,t),this.b=md(d,u,t-1/3)}return Dt.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=j_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Dt.fromWorkingColorSpace(Cn.copy(this),t),Math.round(bt(Cn.r*255,0,255))*65536+Math.round(bt(Cn.g*255,0,255))*256+Math.round(bt(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Dt.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(rc);const r=Jf(Ia.h,rc.h,i),l=Jf(Ia.s,rc.s,i),u=Jf(Ia.l,rc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Nt;Nt.NAMES=j_;let LM=0;class Fo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ys,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Cd&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vr extends Fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new ae,sc=new Ot;let OM=0;class hi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Cg,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(t),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cg&&(t.usage=this.usage),t}}class X_ extends hi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class q_ extends hi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class wn extends hi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let PM=0;const ui=new an,gd=new qn,hs=new ae,ti=new Bo,No=new Bo,_n=new ae;class pi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F_(t)?q_:X_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];No.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ti.min,No.min),ti.expandByPoint(_n),_n.addVectors(ti.max,No.max),ti.expandByPoint(_n)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),m&&(hs.fromBufferAttribute(t,p),_n.add(hs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<r.count;q++)h[q]=new ae,m[q]=new ae;const p=new ae,g=new ae,x=new ae,y=new Ot,b=new Ot,A=new Ot,D=new ae,S=new ae;function _(q,U,w){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,w),y.fromBufferAttribute(u,q),b.fromBufferAttribute(u,U),A.fromBufferAttribute(u,w),g.sub(p),x.sub(p),b.sub(y),A.sub(y);const j=1/(b.x*A.y-A.x*b.y);isFinite(j)&&(D.copy(g).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(j),S.copy(x).multiplyScalar(b.x).addScaledVector(g,-A.x).multiplyScalar(j),h[q].add(D),h[U].add(D),h[w].add(D),m[q].add(S),m[U].add(S),m[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,U=P.length;q<U;++q){const w=P[q],j=w.start,de=w.count;for(let ue=j,ye=j+de;ue<ye;ue+=3)_(t.getX(ue+0),t.getX(ue+1),t.getX(ue+2))}const L=new ae,N=new ae,W=new ae,G=new ae;function z(q){W.fromBufferAttribute(l,q),G.copy(W);const U=h[q];L.copy(U),L.sub(W.multiplyScalar(W.dot(U))).normalize(),N.crossVectors(G,U);const j=N.dot(m[q])<0?-1:1;d.setXYZW(q,L.x,L.y,L.z,j)}for(let q=0,U=P.length;q<U;++q){const w=P[q],j=w.start,de=w.count;for(let ue=j,ye=j+de;ue<ye;ue+=3)z(t.getX(ue+0)),z(t.getX(ue+1)),z(t.getX(ue+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,b=r.count;y<b;y++)r.setXYZ(y,0,0,0);const l=new ae,u=new ae,d=new ae,h=new ae,m=new ae,p=new ae,g=new ae,x=new ae;if(t)for(let y=0,b=t.count;y<b;y+=3){const A=t.getX(y+0),D=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let b=0,A=0;for(let D=0,S=m.length;D<S;D++){h.isInterleavedBufferAttribute?b=m[D]*h.data.stride+h.offset:b=m[D]*g;for(let _=0;_<g;_++)y[A++]=p[b++]}return new hi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],b=t(y,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const b=p[x];g.push(b.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,b=x.length;y<b;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new an,fr=new V_,oc=new Uc,kg=new ae,lc=new ae,cc=new ae,uc=new ae,_d=new ae,fc=new ae,jg=new ae,dc=new ae;class kn extends qn{constructor(t=new pi,i=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(_d.fromBufferAttribute(x,t),d?fc.addScaledVector(_d,g):fc.addScaledVector(_d.sub(i),g))}i.add(fc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(oc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(oc,kg)===null||fr.origin.distanceToSquared(kg)>(t.far-t.near)**2))&&(Vg.copy(u).invert(),fr.copy(t.ray).applyMatrix4(Vg),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,D=y.length;A<D;A++){const S=y[A],_=d[S.materialIndex],P=Math.max(S.start,b.start),L=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let N=P,W=L;N<W;N+=3){const G=h.getX(N),z=h.getX(N+1),q=h.getX(N+2);l=hc(this,_,t,r,p,g,x,G,z,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(h.count,b.start+b.count);for(let S=A,_=D;S<_;S+=3){const P=h.getX(S),L=h.getX(S+1),N=h.getX(S+2);l=hc(this,d,t,r,p,g,x,P,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,D=y.length;A<D;A++){const S=y[A],_=d[S.materialIndex],P=Math.max(S.start,b.start),L=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let N=P,W=L;N<W;N+=3){const G=N,z=N+1,q=N+2;l=hc(this,_,t,r,p,g,x,G,z,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let S=A,_=D;S<_;S+=3){const P=S,L=S+1,N=S+2;l=hc(this,d,t,r,p,g,x,P,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function zM(o,t,i,r,l,u,d,h){let m;if(t.side===jn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===Va,h),m===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function hc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const g=zM(o,t,i,r,lc,cc,uc,jg);if(g){const x=new ae;Ei.getBarycoord(jg,lc,cc,uc,x),l&&(g.uv=Ei.getInterpolatedAttribute(l,h,m,p,x,new Ot)),u&&(g.uv1=Ei.getInterpolatedAttribute(u,h,m,p,x,new Ot)),d&&(g.normal=Ei.getInterpolatedAttribute(d,h,m,p,x,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new ae,materialIndex:0};Ei.getNormal(lc,cc,uc,y.normal),g.face=y,g.barycoord=x}return g}class Ho extends pi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let y=0,b=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(x,2));function A(D,S,_,P,L,N,W,G,z,q,U){const w=N/z,j=W/q,de=N/2,ue=W/2,ye=G/2,ve=z+1,B=q+1;let $=0,Q=0;const be=new ae;for(let F=0;F<B;F++){const M=F*j-ue;for(let V=0;V<ve;V++){const se=V*w-de;be[D]=se*P,be[S]=M*L,be[_]=ye,p.push(be.x,be.y,be.z),be[D]=0,be[S]=0,be[_]=G>0?1:-1,g.push(be.x,be.y,be.z),x.push(V/z),x.push(1-F/q),$+=1}}for(let F=0;F<q;F++)for(let M=0;M<z;M++){const V=y+M+ve*F,se=y+M+ve*(F+1),k=y+(M+1)+ve*(F+1),ee=y+(M+1)+ve*F;m.push(V,se,ee),m.push(se,k,ee),Q+=6}h.addGroup(b,Q,U),b+=Q,y+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const r=ws(o[i]);for(const l in r)t[l]=r[l]}return t}function IM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function W_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const BM={clone:ws,merge:Ln};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=IM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new ae,Xg=new Ot,qg=new Ot;class di extends Y_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,Xg,qg),i.subVectors(qg,Xg)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ps=-90,ms=1;class GM extends qn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(ps,ms,t,i);l.layers=this.layers,this.add(l);const u=new di(ps,ms,t,i);u.layers=this.layers,this.add(u);const d=new di(ps,ms,t,i);d.layers=this.layers,this.add(d);const h=new di(ps,ms,t,i);h.layers=this.layers,this.add(h);const m=new di(ps,ms,t,i);m.layers=this.layers,this.add(m);const p=new di(ps,ms,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Z_ extends Xn{constructor(t,i,r,l,u,d,h,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Es,super(t,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class VM extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Z_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new kn(l,u),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Li),new GM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Uo extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const D of t.hand.values()){const S=i.getJointPose(D,r),_=this._getHandJoint(p,D);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),b=.02,A=.005;p.inputState.pinching&&y>b+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=b-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Uo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class jM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const xd=new ae,XM=new ae,qM=new dt;class mr{constructor(t=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=xd.subVectors(r,i).cross(XM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||qM.getNormalMatrix(t),l=this.coplanarPoint(xd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Uc,pc=new ae;class K_{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,d=new mr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],b=l[8],A=l[9],D=l[10],S=l[11],_=l[12],P=l[13],L=l[14],N=l[15];if(r[0].setComponents(m-u,y-p,S-b,N-_).normalize(),r[1].setComponents(m+u,y+p,S+b,N+_).normalize(),r[2].setComponents(m+d,y+g,S+A,N+P).normalize(),r[3].setComponents(m-d,y-g,S-A,N-P).normalize(),r[4].setComponents(m-h,y-x,S-D,N-L).normalize(),i===sa)r[5].setComponents(m+h,y+x,S+D,N+L).normalize();else if(i===Cc)r[5].setComponents(h,x,D,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(pc.x=l.normal.x>0?t.max.x:t.min.x,pc.y=l.normal.y>0?t.max.y:t.min.y,pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q_ extends Fo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wg=new an,hh=new V_,mc=new Uc,gc=new ae;class WM extends qn{constructor(t=new pi,i=new Q_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(l),mc.radius+=u,t.ray.intersectsSphere(mc)===!1)return;Wg.copy(l).invert(),hh.copy(t.ray).applyMatrix4(Wg);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const y=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let A=y,D=b;A<D;A++){const S=p.getX(A);gc.fromBufferAttribute(x,S),Yg(gc,S,m,l,t,i,this)}}else{const y=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let A=y,D=b;A<D;A++)gc.fromBufferAttribute(x,A),Yg(gc,A,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Yg(o,t,i,r,l,u,d){const h=hh.distanceSqToPoint(o);if(h<i){const m=new ae;hh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class J_ extends Xn{constructor(t,i,r,l,u,d,h,m,p,g=Ss){if(g!==Ss&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ss&&(r=Mr),r===void 0&&g===Rs&&(r=As),super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:Ai,this.minFilter=m!==void 0?m:Ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends pi{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const u=[],d=[];h(l),p(r),g(),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(u.slice(),3)),this.setAttribute("uv",new wn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(P){const L=new ae,N=new ae,W=new ae;for(let G=0;G<i.length;G+=3)b(i[G+0],L),b(i[G+1],N),b(i[G+2],W),m(L,N,W,P)}function m(P,L,N,W){const G=W+1,z=[];for(let q=0;q<=G;q++){z[q]=[];const U=P.clone().lerp(N,q/G),w=L.clone().lerp(N,q/G),j=G-q;for(let de=0;de<=j;de++)de===0&&q===G?z[q][de]=U:z[q][de]=U.clone().lerp(w,de/j)}for(let q=0;q<G;q++)for(let U=0;U<2*(G-q)-1;U++){const w=Math.floor(U/2);U%2===0?(y(z[q][w+1]),y(z[q+1][w]),y(z[q][w])):(y(z[q][w+1]),y(z[q+1][w+1]),y(z[q+1][w]))}}function p(P){const L=new ae;for(let N=0;N<u.length;N+=3)L.x=u[N+0],L.y=u[N+1],L.z=u[N+2],L.normalize().multiplyScalar(P),u[N+0]=L.x,u[N+1]=L.y,u[N+2]=L.z}function g(){const P=new ae;for(let L=0;L<u.length;L+=3){P.x=u[L+0],P.y=u[L+1],P.z=u[L+2];const N=S(P)/2/Math.PI+.5,W=_(P)/Math.PI+.5;d.push(N,1-W)}A(),x()}function x(){for(let P=0;P<d.length;P+=6){const L=d[P+0],N=d[P+2],W=d[P+4],G=Math.max(L,N,W),z=Math.min(L,N,W);G>.9&&z<.1&&(L<.2&&(d[P+0]+=1),N<.2&&(d[P+2]+=1),W<.2&&(d[P+4]+=1))}}function y(P){u.push(P.x,P.y,P.z)}function b(P,L){const N=P*3;L.x=t[N+0],L.y=t[N+1],L.z=t[N+2]}function A(){const P=new ae,L=new ae,N=new ae,W=new ae,G=new Ot,z=new Ot,q=new Ot;for(let U=0,w=0;U<u.length;U+=9,w+=6){P.set(u[U+0],u[U+1],u[U+2]),L.set(u[U+3],u[U+4],u[U+5]),N.set(u[U+6],u[U+7],u[U+8]),G.set(d[w+0],d[w+1]),z.set(d[w+2],d[w+3]),q.set(d[w+4],d[w+5]),W.copy(P).add(L).add(N).divideScalar(3);const j=S(W);D(G,w+0,P,j),D(z,w+2,L,j),D(q,w+4,N,j)}}function D(P,L,N,W){W<0&&P.x===1&&(d[L]=P.x-1),N.x===0&&N.z===0&&(d[L]=W/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function _(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.vertices,t.indices,t.radius,t.details)}}class Th extends Lc{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Th(t.radius,t.detail)}}class Ah extends Lc{constructor(t=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ah(t.radius,t.detail)}}class Oc extends pi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=t/h,y=i/m,b=[],A=[],D=[],S=[];for(let _=0;_<g;_++){const P=_*y-d;for(let L=0;L<p;L++){const N=L*x-u;A.push(N,-P,0),D.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const L=P+p*_,N=P+p*(_+1),W=P+1+p*(_+1),G=P+1+p*_;b.push(L,N,G),b.push(N,W,G)}this.setIndex(b),this.setAttribute("position",new wn(A,3)),this.setAttribute("normal",new wn(D,3)),this.setAttribute("uv",new wn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rh extends pi{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new ae,y=new ae,b=[],A=[],D=[],S=[];for(let _=0;_<=r;_++){const P=[],L=_/r;let N=0;_===0&&d===0?N=.5/i:_===r&&m===Math.PI&&(N=-.5/i);for(let W=0;W<=i;W++){const G=W/i;x.x=-t*Math.cos(l+G*u)*Math.sin(d+L*h),x.y=t*Math.cos(d+L*h),x.z=t*Math.sin(l+G*u)*Math.sin(d+L*h),A.push(x.x,x.y,x.z),y.copy(x).normalize(),D.push(y.x,y.y,y.z),S.push(G+N,1-L),P.push(p++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const L=g[_][P+1],N=g[_][P],W=g[_+1][P],G=g[_+1][P+1];(_!==0||d>0)&&b.push(L,N,G),(_!==r-1||m<Math.PI)&&b.push(N,W,G)}this.setIndex(b),this.setAttribute("position",new wn(A,3)),this.setAttribute("normal",new wn(D,3)),this.setAttribute("uv",new wn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dc extends pi{constructor(t=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],g=new ae,x=new ae,y=new ae;for(let b=0;b<=r;b++)for(let A=0;A<=l;A++){const D=A/l*u,S=b/r*Math.PI*2;x.x=(t+i*Math.cos(S))*Math.cos(D),x.y=(t+i*Math.cos(S))*Math.sin(D),x.z=i*Math.sin(S),h.push(x.x,x.y,x.z),g.x=t*Math.cos(D),g.y=t*Math.sin(D),y.subVectors(x,g).normalize(),m.push(y.x,y.y,y.z),p.push(A/l),p.push(b/r)}for(let b=1;b<=r;b++)for(let A=1;A<=l;A++){const D=(l+1)*b+A-1,S=(l+1)*(b-1)+A-1,_=(l+1)*(b-1)+A,P=(l+1)*b+A;d.push(D,S,P),d.push(S,_,P)}this.setIndex(d),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(m,3)),this.setAttribute("uv",new wn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class YM extends Fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZM extends Fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class KM extends Y_{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class QM extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Zg(o,t,i,r){const l=JM(r);switch(i){case N_:return o*t;case L_:return o*t;case O_:return o*t*2;case P_:return o*t/l.components*l.byteLength;case Mh:return o*t/l.components*l.byteLength;case z_:return o*t*2/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case U_:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Eh:return o*t*4/l.components*l.byteLength;case yc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:case kd:return Math.max(o,16)*Math.max(t,8)/4;case Hd:case Vd:return Math.max(o,8)*Math.max(t,8)/2;case jd:case Xd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case $d:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case sh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ec:case oh:case lh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case I_:case ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case uh:case fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(o){switch(o){case la:case C_:return{byteLength:1,components:1};case Oo:case w_:case Po:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case Mr:case xh:case ra:return{byteLength:4,components:1};case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $M(o){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,g);else{x.sort((b,A)=>b.start-A.start);let y=0;for(let b=1;b<x.length;b++){const A=x[y],D=x[b];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++y,x[y]=D)}x.length=y+1;for(let b=0,A=x.length;b<A;b++){const D=x[b];o.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:ab,alphatest_pars_fragment:rb,aomap_fragment:sb,aomap_pars_fragment:ob,batching_pars_vertex:lb,batching_vertex:cb,begin_vertex:ub,beginnormal_vertex:fb,bsdfs:db,iridescence_fragment:hb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:yb,color_pars_vertex:Sb,color_vertex:Mb,common:bb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Rb,emissivemap_fragment:Cb,emissivemap_pars_fragment:wb,colorspace_fragment:Db,colorspace_pars_fragment:Nb,envmap_fragment:Ub,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Ob,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:qb,envmap_vertex:zb,fog_vertex:Ib,fog_pars_vertex:Bb,fog_fragment:Fb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Vb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:jb,lights_pars_begin:Xb,lights_toon_fragment:Wb,lights_toon_pars_fragment:Yb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Qb,lights_physical_pars_fragment:Jb,lights_fragment_begin:$b,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:o1,map_particle_fragment:l1,map_particle_pars_fragment:c1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:f1,morphinstance_vertex:d1,morphcolor_vertex:h1,morphnormal_vertex:p1,morphtarget_pars_vertex:m1,morphtarget_vertex:g1,normal_fragment_begin:_1,normal_fragment_maps:v1,normal_pars_fragment:x1,normal_pars_vertex:y1,normal_vertex:S1,normalmap_pars_fragment:M1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:A1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:w1,project_vertex:D1,dithering_fragment:N1,dithering_pars_fragment:U1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:z1,shadowmap_vertex:I1,shadowmask_pars_fragment:B1,skinbase_vertex:F1,skinning_pars_vertex:H1,skinning_vertex:G1,skinnormal_vertex:V1,specularmap_fragment:k1,specularmap_pars_fragment:j1,tonemapping_fragment:X1,tonemapping_pars_fragment:q1,transmission_fragment:W1,transmission_pars_fragment:Y1,uv_pars_fragment:Z1,uv_pars_vertex:K1,uv_vertex:Q1,worldpos_vertex:J1,background_vert:$1,background_frag:eE,backgroundCube_vert:tE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:aE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:lE,equirect_vert:cE,equirect_frag:uE,linedashed_vert:fE,linedashed_frag:dE,meshbasic_vert:hE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:gE,meshmatcap_vert:_E,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:yE,meshphong_vert:SE,meshphong_frag:ME,meshphysical_vert:bE,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:AE,points_vert:RE,points_frag:CE,shadow_vert:wE,shadow_frag:DE,sprite_vert:NE,sprite_frag:UE},Pe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ln([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ln([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ln([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ln([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ln([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ln([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ln([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ln([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Ln([Pe.common,Pe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Ln([Pe.lights,Pe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _c={r:0,b:0,g:0},hr=new ca,LE=new an;function OE(o,t,i,r,l,u,d){const h=new Nt(0);let m=u===!0?0:1,p,g,x=null,y=0,b=null;function A(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function D(L){let N=!1;const W=A(L);W===null?_(h,m):W&&W.isColor&&(_(W,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,N){const W=A(N);W&&(W.isCubeTexture||W.mapping===Nc)?(g===void 0&&(g=new kn(new Ho(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:ws(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(N.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(hr)),g.material.toneMapped=Dt.getTransfer(W.colorSpace)!==Vt,(x!==W||y!==W.version||b!==o.toneMapping)&&(g.material.needsUpdate=!0,x=W,y=W.version,b=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new kn(new Oc(2,2),new ka({name:"BackgroundMaterial",uniforms:ws(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(W.colorSpace)!==Vt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(x!==W||y!==W.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,x=W,y=W.version,b=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,N){L.getRGB(_c,W_(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,N,d)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),m=N,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:D,addToRenderList:S,dispose:P}}function PE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(w,j,de,ue,ye){let ve=!1;const B=x(ue,de,j);u!==B&&(u=B,p(u.object)),ve=b(w,ue,de,ye),ve&&A(w,ue,de,ye),ye!==null&&t.update(ye,o.ELEMENT_ARRAY_BUFFER),(ve||d)&&(d=!1,N(w,j,de,ue),ye!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ye).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function x(w,j,de){const ue=de.wireframe===!0;let ye=r[w.id];ye===void 0&&(ye={},r[w.id]=ye);let ve=ye[j.id];ve===void 0&&(ve={},ye[j.id]=ve);let B=ve[ue];return B===void 0&&(B=y(m()),ve[ue]=B),B}function y(w){const j=[],de=[],ue=[];for(let ye=0;ye<i;ye++)j[ye]=0,de[ye]=0,ue[ye]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:de,attributeDivisors:ue,object:w,attributes:{},index:null}}function b(w,j,de,ue){const ye=u.attributes,ve=j.attributes;let B=0;const $=de.getAttributes();for(const Q in $)if($[Q].location>=0){const F=ye[Q];let M=ve[Q];if(M===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(M=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(M=w.instanceColor)),F===void 0||F.attribute!==M||M&&F.data!==M.data)return!0;B++}return u.attributesNum!==B||u.index!==ue}function A(w,j,de,ue){const ye={},ve=j.attributes;let B=0;const $=de.getAttributes();for(const Q in $)if($[Q].location>=0){let F=ve[Q];F===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(F=w.instanceColor));const M={};M.attribute=F,F&&F.data&&(M.data=F.data),ye[Q]=M,B++}u.attributes=ye,u.attributesNum=B,u.index=ue}function D(){const w=u.newAttributes;for(let j=0,de=w.length;j<de;j++)w[j]=0}function S(w){_(w,0)}function _(w,j){const de=u.newAttributes,ue=u.enabledAttributes,ye=u.attributeDivisors;de[w]=1,ue[w]===0&&(o.enableVertexAttribArray(w),ue[w]=1),ye[w]!==j&&(o.vertexAttribDivisor(w,j),ye[w]=j)}function P(){const w=u.newAttributes,j=u.enabledAttributes;for(let de=0,ue=j.length;de<ue;de++)j[de]!==w[de]&&(o.disableVertexAttribArray(de),j[de]=0)}function L(w,j,de,ue,ye,ve,B){B===!0?o.vertexAttribIPointer(w,j,de,ye,ve):o.vertexAttribPointer(w,j,de,ue,ye,ve)}function N(w,j,de,ue){D();const ye=ue.attributes,ve=de.getAttributes(),B=j.defaultAttributeValues;for(const $ in ve){const Q=ve[$];if(Q.location>=0){let be=ye[$];if(be===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),be!==void 0){const F=be.normalized,M=be.itemSize,V=t.get(be);if(V===void 0)continue;const se=V.buffer,k=V.type,ee=V.bytesPerElement,he=k===o.INT||k===o.UNSIGNED_INT||be.gpuType===xh;if(be.isInterleavedBufferAttribute){const le=be.data,Te=le.stride,Ce=be.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)_(Q.location+Ue,le.meshPerAttribute);w.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)S(Q.location+Ue);o.bindBuffer(o.ARRAY_BUFFER,se);for(let Ue=0;Ue<Q.locationSize;Ue++)L(Q.location+Ue,M/Q.locationSize,k,F,Te*ee,(Ce+M/Q.locationSize*Ue)*ee,he)}else{if(be.isInstancedBufferAttribute){for(let le=0;le<Q.locationSize;le++)_(Q.location+le,be.meshPerAttribute);w.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let le=0;le<Q.locationSize;le++)S(Q.location+le);o.bindBuffer(o.ARRAY_BUFFER,se);for(let le=0;le<Q.locationSize;le++)L(Q.location+le,M/Q.locationSize,k,F,M*ee,M/Q.locationSize*le*ee,he)}}else if(B!==void 0){const F=B[$];if(F!==void 0)switch(F.length){case 2:o.vertexAttrib2fv(Q.location,F);break;case 3:o.vertexAttrib3fv(Q.location,F);break;case 4:o.vertexAttrib4fv(Q.location,F);break;default:o.vertexAttrib1fv(Q.location,F)}}}}P()}function W(){q();for(const w in r){const j=r[w];for(const de in j){const ue=j[de];for(const ye in ue)g(ue[ye].object),delete ue[ye];delete j[de]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const j=r[w.id];for(const de in j){const ue=j[de];for(const ye in ue)g(ue[ye].object),delete ue[ye];delete j[de]}delete r[w.id]}function z(w){for(const j in r){const de=r[j];if(de[w.id]===void 0)continue;const ue=de[w.id];for(const ye in ue)g(ue[ye].object),delete ue[ye];delete de[w.id]}}function q(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:U,dispose:W,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:S,disableUnusedAttributes:P}}function zE(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,x){x!==0&&(o.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let b=0;for(let A=0;A<x;A++)b+=g[A];i.update(b,r,1)}function m(p,g,x,y){if(x===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<p.length;A++)d(p[A],g[A],y[A]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,x);let A=0;for(let D=0;D<x;D++)A+=g[D]*y[D];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function IE(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ti&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==la&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!q)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:W,maxSamples:G}}function BE(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new mr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const b=x.length!==0||y||r!==0||l;return l=y,r=x.length,b},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,b){const A=x.clippingPlanes,D=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?g(null):p();else{const P=u?0:r,L=P*4;let N=_.clippingState||null;m.value=N,N=g(A,y,L,b);for(let W=0;W!==L;++W)N[W]=i[W];_.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,b,A){const D=x!==null?x.length:0;let S=null;if(D!==0){if(S=m.value,A!==!0||S===null){const _=b+D*4,P=y.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,N=b;L!==D;++L,N+=4)d.copy(x[L]).applyMatrix4(P,h),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,S}}function FE(o){let t=new WeakMap;function i(d,h){return h===zd?d.mapping=Es:h===Id&&(d.mapping=Ts),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zd||h===Id)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new VM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const vs=4,Kg=[.125,.215,.35,.446,.526,.582],xr=20,yd=new KM,Qg=new Nt;let Sd=null,Md=0,bd=0,Ed=!1;const gr=(1+Math.sqrt(5))/2,gs=1/gr,Jg=[new ae(-gr,gs,0),new ae(gr,gs,0),new ae(-gs,0,gr),new ae(gs,0,gr),new ae(0,gr,-gs),new ae(0,gr,gs),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class $g{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sd,Md,bd),this._renderer.xr.enabled=Ed,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Po,format:Ti,colorSpace:Cs,depthBuffer:!1},l=e_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(u)),this._blurMaterial=GE(u,t,i)}return l}_compileMaterial(t){const i=new kn(this._lodPlanes[0],t);this._renderer.compile(i,yd)}_sceneToCubeUV(t,i,r,l){const h=new di(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(Qg),g.toneMapping=Ga,g.autoClear=!1;const b=new vr({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),A=new kn(new Ho,b);let D=!1;const S=t.background;S?S.isColor&&(b.color.copy(S),t.background=null,D=!0):(b.color.copy(Qg),D=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):P===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const L=this._cubeSize;vc(l,P*L,_>2?L:0,L,L),g.setRenderTarget(l),D&&g.render(A,h),g.render(t,h)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Es||t.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new kn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;vc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,yd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Jg[(l-u-1)%Jg.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new kn(this._lodPlanes[l],p),y=p.uniforms,b=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*xr-1),D=u/A,S=isFinite(u)?1+Math.floor(g*D):xr;S>xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xr}`);const _=[];let P=0;for(let z=0;z<xr;++z){const q=z/D,U=Math.exp(-q*q/2);_.push(U),z===0?P+=U:z<S&&(P+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=A,y.mipInt.value=L-r;const N=this._sizeLods[l],W=3*N*(l>L-vs?l-L+vs:0),G=4*(this._cubeSize-N);vc(i,W,G,3*N,2*N),m.setRenderTarget(i),m.render(x,yd)}}function HE(o){const t=[],i=[],r=[];let l=o;const u=o-vs+1+Kg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-vs?m=Kg[d-o+vs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,A=6,D=3,S=2,_=1,P=new Float32Array(D*A*b),L=new Float32Array(S*A*b),N=new Float32Array(_*A*b);for(let G=0;G<b;G++){const z=G%3*2/3-1,q=G>2?0:-1,U=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];P.set(U,D*A*G),L.set(y,S*A*G);const w=[G,G,G,G,G,G];N.set(w,_*A*G)}const W=new pi;W.setAttribute("position",new hi(P,D)),W.setAttribute("uv",new hi(L,S)),W.setAttribute("faceIndex",new hi(N,_)),t.push(W),l>vs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function e_(o,t,i){const r=new br(o,t,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function GE(o,t,i){const r=new Float32Array(xr),l=new ae(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function t_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function n_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VE(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zd||m===Id,g=m===Es||m===Ts;if(p||g){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new $g(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return p&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new $g(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function kE(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function jE(o,t,i,r){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const b=u.get(y);b&&(t.remove(b),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const b in y)t.update(y[b],o.ARRAY_BUFFER)}function p(x){const y=[],b=x.index,A=x.attributes.position;let D=0;if(b!==null){const P=b.array;D=b.version;for(let L=0,N=P.length;L<N;L+=3){const W=P[L+0],G=P[L+1],z=P[L+2];y.push(W,G,G,z,z,W)}}else if(A!==void 0){const P=A.array;D=A.version;for(let L=0,N=P.length/3-1;L<N;L+=3){const W=L+0,G=L+1,z=L+2;y.push(W,G,G,z,z,W)}}else return;const S=new(F_(y)?q_:X_)(y,1);S.version=D;const _=u.get(x);_&&t.remove(_),u.set(x,S)}function g(x){const y=u.get(x);if(y){const b=x.index;b!==null&&y.version<b.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function XE(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,b){o.drawElements(r,b,u,y*d),i.update(b,r,1)}function p(y,b,A){A!==0&&(o.drawElementsInstanced(r,b,u,y*d,A),i.update(b,r,A))}function g(y,b,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,y,0,A);let S=0;for(let _=0;_<A;_++)S+=b[_];i.update(S,r,1)}function x(y,b,A,D){if(A===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/d,b[_],D[_]);else{S.multiDrawElementsInstancedWEBGL(r,b,0,u,y,0,D,0,A);let _=0;for(let P=0;P<A;P++)_+=b[P]*D[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function qE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WE(o,t,i){const r=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let w=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var b=w;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;A===!0&&(N=1),D===!0&&(N=2),S===!0&&(N=3);let W=h.attributes.position.count*N,G=1;W>t.maxTextureSize&&(G=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const z=new Float32Array(W*G*4*x),q=new G_(z,W,G,x);q.type=ra,q.needsUpdate=!0;const U=N*4;for(let j=0;j<x;j++){const de=_[j],ue=P[j],ye=L[j],ve=W*G*4*j;for(let B=0;B<de.count;B++){const $=B*U;A===!0&&(l.fromBufferAttribute(de,B),z[ve+$+0]=l.x,z[ve+$+1]=l.y,z[ve+$+2]=l.z,z[ve+$+3]=0),D===!0&&(l.fromBufferAttribute(ue,B),z[ve+$+4]=l.x,z[ve+$+5]=l.y,z[ve+$+6]=l.z,z[ve+$+7]=0),S===!0&&(l.fromBufferAttribute(ye,B),z[ve+$+8]=l.x,z[ve+$+9]=l.y,z[ve+$+10]=l.z,z[ve+$+11]=ye.itemSize===4?l.w:1)}}y={count:x,texture:q,size:new Ot(W,G)},r.set(h,y),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const D=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function YE(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const ev=new Xn,i_=new J_(1,1),tv=new G_,nv=new TM,iv=new Z_,a_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Ns(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=a_[l];if(u===void 0&&(u=new Float32Array(l),a_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Pc(o,t){let i=r_[t];i===void 0&&(i=new Int32Array(t),r_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ZE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function KE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function QE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function JE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function $E(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;l_.set(r),o.uniformMatrix2fv(this.addr,!1,l_),pn(i,r)}}function eT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;o_.set(r),o.uniformMatrix3fv(this.addr,!1,o_),pn(i,r)}}function tT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;s_.set(r),o.uniformMatrix4fv(this.addr,!1,s_),pn(i,r)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function sT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function uT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(i_.compareFunction=B_,u=i_):u=ev,i.setTexture2D(t||u,l)}function fT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function dT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function hT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||tv,l)}function pT(o){switch(o){case 5126:return ZE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return $E;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Ns(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Ns(t,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,t){const i=Ns(t,this.size,4);o.uniform4fv(this.addr,i)}function xT(o,t){const i=Ns(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,t){const i=Ns(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ST(o,t){const i=Ns(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function bT(o,t){o.uniform2iv(this.addr,t)}function ET(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function DT(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||ev,u[d])}function NT(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,u[d])}function UT(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,u[d])}function LT(o,t,i){const r=this.cache,l=t.length,u=Pc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||tv,u[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return bT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}class PT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class zT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function c_(o,t){o.seq.push(t),o.map[t.id]=t}function BT(o,t,i){const r=o.name,l=r.length;for(Td.lastIndex=0;;){const u=Td.exec(r),d=Td.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){c_(i,p===void 0?new PT(h,o,t):new zT(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new IT(h),c_(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);BT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function u_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const f_=new dt;function VT(o){Dt._getMatrix(f_,Dt.workingColorSpace,o);const t=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function d_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+GT(o.getShaderSource(t),d)}else return l}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jT(o,t){let i;switch(t){case KS:i="Linear";break;case QS:i="Reinhard";break;case JS:i="Cineon";break;case $S:i="ACESFilmic";break;case tM:i="AgX";break;case nM:i="Neutral";break;case eM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new ae;function XT(){Dt.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),t=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function WT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function YT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Lo(o){return o!==""}function h_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(o){return o.replace(ZT,QT)}const KT=new Map;function QT(o,t){let i=ht[t];if(i===void 0){const r=KT.get(t);if(r!==void 0)i=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ph(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(o){return o.replace(JT,$T)}function $T(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===wS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function tA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:t="ENVMAP_BLENDING_MULTIPLY";break;case YS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=eA(i),p=tA(i),g=nA(i),x=iA(i),y=aA(i),b=qT(i),A=WT(u),D=l.createProgram();let S,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ga?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),XT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=ph(d),d=h_(d,i),d=p_(d,i),h=ph(h),h=h_(h,i),h=p_(h,i),d=m_(d),h=m_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=P+S+d,N=P+_+h,W=u_(l,l.VERTEX_SHADER,L),G=u_(l,l.FRAGMENT_SHADER,N);l.attachShader(D,W),l.attachShader(D,G),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(j){if(o.debug.checkShaderErrors){const de=l.getProgramInfoLog(D).trim(),ue=l.getShaderInfoLog(W).trim(),ye=l.getShaderInfoLog(G).trim();let ve=!0,B=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ve=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,W,G);else{const $=d_(l,W,"vertex"),Q=d_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+de+`
`+$+`
`+Q)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(ue===""||ye==="")&&(B=!1);B&&(j.diagnostics={runnable:ve,programLog:de,vertexShader:{log:ue,prefix:S},fragmentShader:{log:ye,prefix:_}})}l.deleteShader(W),l.deleteShader(G),q=new Tc(l,D),U=YT(l,D)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(D,FT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=W,this.fragmentShader=G,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new lA(t),i.set(t,r)),r}}class lA{constructor(t){this.id=sA++,this.code=t,this.usedTimes=0}}function cA(o,t,i,r,l,u,d){const h=new k_,m=new oA,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,w,j,de,ue){const ye=de.fog,ve=ue.geometry,B=U.isMeshStandardMaterial?de.environment:null,$=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),Q=$&&$.mapping===Nc?$.image.height:null,be=A[U.type];U.precision!==null&&(b=l.getMaxPrecision(U.precision),b!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",b,"instead."));const F=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,M=F!==void 0?F.length:0;let V=0;ve.morphAttributes.position!==void 0&&(V=1),ve.morphAttributes.normal!==void 0&&(V=2),ve.morphAttributes.color!==void 0&&(V=3);let se,k,ee,he;if(be){const At=Ui[be];se=At.vertexShader,k=At.fragmentShader}else se=U.vertexShader,k=U.fragmentShader,m.update(U),ee=m.getVertexShaderID(U),he=m.getFragmentShaderID(U);const le=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ce=ue.isInstancedMesh===!0,Ue=ue.isBatchedMesh===!0,Je=!!U.map,et=!!U.matcap,Ye=!!$,I=!!U.aoMap,Ut=!!U.lightMap,tt=!!U.bumpMap,nt=!!U.normalMap,Ve=!!U.displacementMap,mt=!!U.emissiveMap,Fe=!!U.metalnessMap,O=!!U.roughnessMap,R=U.anisotropy>0,ie=U.clearcoat>0,ge=U.dispersion>0,Ee=U.iridescence>0,xe=U.sheen>0,je=U.transmission>0,we=R&&!!U.anisotropyMap,He=ie&&!!U.clearcoatMap,pt=ie&&!!U.clearcoatNormalMap,Re=ie&&!!U.clearcoatRoughnessMap,Ge=Ee&&!!U.iridescenceMap,We=Ee&&!!U.iridescenceThicknessMap,qe=xe&&!!U.sheenColorMap,Ie=xe&&!!U.sheenRoughnessMap,it=!!U.specularMap,ct=!!U.specularColorMap,It=!!U.specularIntensityMap,Z=je&&!!U.transmissionMap,De=je&&!!U.thicknessMap,pe=!!U.gradientMap,Me=!!U.alphaMap,Ne=U.alphaTest>0,Le=!!U.alphaHash,at=!!U.extensions;let Wt=Ga;U.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Wt=o.toneMapping);const un={shaderID:be,shaderType:U.type,shaderName:U.name,vertexShader:se,fragmentShader:k,defines:U.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:b,batching:Ue,batchingColor:Ue&&ue._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&ue.instanceColor!==null,instancingMorph:Ce&&ue.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Cs,alphaToCoverage:!!U.alphaToCoverage,map:Je,matcap:et,envMap:Ye,envMapMode:Ye&&$.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:Ut,bumpMap:tt,normalMap:nt,displacementMap:y&&Ve,emissiveMap:mt,normalMapObjectSpace:nt&&U.normalMapType===oM,normalMapTangentSpace:nt&&U.normalMapType===sM,metalnessMap:Fe,roughnessMap:O,anisotropy:R,anisotropyMap:we,clearcoat:ie,clearcoatMap:He,clearcoatNormalMap:pt,clearcoatRoughnessMap:Re,dispersion:ge,iridescence:Ee,iridescenceMap:Ge,iridescenceThicknessMap:We,sheen:xe,sheenColorMap:qe,sheenRoughnessMap:Ie,specularMap:it,specularColorMap:ct,specularIntensityMap:It,transmission:je,transmissionMap:Z,thicknessMap:De,gradientMap:pe,opaque:U.transparent===!1&&U.blending===ys&&U.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Le,combine:U.combine,mapUv:Je&&D(U.map.channel),aoMapUv:I&&D(U.aoMap.channel),lightMapUv:Ut&&D(U.lightMap.channel),bumpMapUv:tt&&D(U.bumpMap.channel),normalMapUv:nt&&D(U.normalMap.channel),displacementMapUv:Ve&&D(U.displacementMap.channel),emissiveMapUv:mt&&D(U.emissiveMap.channel),metalnessMapUv:Fe&&D(U.metalnessMap.channel),roughnessMapUv:O&&D(U.roughnessMap.channel),anisotropyMapUv:we&&D(U.anisotropyMap.channel),clearcoatMapUv:He&&D(U.clearcoatMap.channel),clearcoatNormalMapUv:pt&&D(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&D(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&D(U.iridescenceMap.channel),iridescenceThicknessMapUv:We&&D(U.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&D(U.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&D(U.sheenRoughnessMap.channel),specularMapUv:it&&D(U.specularMap.channel),specularColorMapUv:ct&&D(U.specularColorMap.channel),specularIntensityMapUv:It&&D(U.specularIntensityMap.channel),transmissionMapUv:Z&&D(U.transmissionMap.channel),thicknessMapUv:De&&D(U.thicknessMap.channel),alphaMapUv:Me&&D(U.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(nt||R),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!ve.attributes.uv&&(Je||Me),fog:!!ye,useFog:U.fog===!0,fogExp2:!!ye&&ye.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:ue.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Je&&U.map.isVideoTexture===!0&&Dt.getTransfer(U.map.colorSpace)===Vt,decodeVideoTextureEmissive:mt&&U.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(U.emissiveMap.colorSpace)===Vt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===aa,flipSided:U.side===jn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:at&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&U.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return un.vertexUv1s=p.has(1),un.vertexUv2s=p.has(2),un.vertexUv3s=p.has(3),p.clear(),un}function _(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const j in U.defines)w.push(j),w.push(U.defines[j]);return U.isRawShaderMaterial===!1&&(P(w,U),L(w,U),w.push(o.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function P(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function L(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),U.push(h.mask)}function N(U){const w=A[U.type];let j;if(w){const de=Ui[w];j=BM.clone(de.uniforms)}else j=U.uniforms;return j}function W(U,w){let j;for(let de=0,ue=g.length;de<ue;de++){const ye=g[de];if(ye.cacheKey===w){j=ye,++j.usedTimes;break}}return j===void 0&&(j=new rA(o,w,U,u),g.push(j)),j}function G(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function z(U){m.remove(U)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:W,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:q}}function uA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function __(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function v_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,y,b,A,D,S){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:b,groupOrder:A,renderOrder:x.renderOrder,z:D,group:S},o[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=b,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=D,_.group=S),t++,_}function h(x,y,b,A,D,S){const _=d(x,y,b,A,D,S);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(x,y,b,A,D,S){const _=d(x,y,b,A,D,S);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||fA),r.length>1&&r.sort(y||__),l.length>1&&l.sort(y||__)}function g(){for(let x=t,y=o.length;x<y;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function dA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new v_,o.set(r,[d])):l>=u.length?(d=new v_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function hA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ae,color:new Nt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new hA,i=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const l=new ae,u=new an,d=new an;function h(p){let g=0,x=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let b=0,A=0,D=0,S=0,_=0,P=0,L=0,N=0,W=0,G=0,z=0;p.sort(gA);for(let U=0,w=p.length;U<w;U++){const j=p[U],de=j.color,ue=j.intensity,ye=j.distance,ve=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=de.r*ue,x+=de.g*ue,y+=de.b*ue;else if(j.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(j.sh.coefficients[B],ue);z++}else if(j.isDirectionalLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const $=j.shadow,Q=i.get(j);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.directionalShadow[b]=Q,r.directionalShadowMap[b]=ve,r.directionalShadowMatrix[b]=j.shadow.matrix,P++}r.directional[b]=B,b++}else if(j.isSpotLight){const B=t.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(de).multiplyScalar(ue),B.distance=ye,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,r.spot[D]=B;const $=j.shadow;if(j.map&&(r.spotLightMap[W]=j.map,W++,$.updateMatrices(j),j.castShadow&&G++),r.spotLightMatrix[D]=$.matrix,j.castShadow){const Q=i.get(j);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.spotShadow[D]=Q,r.spotShadowMap[D]=ve,N++}D++}else if(j.isRectAreaLight){const B=t.get(j);B.color.copy(de).multiplyScalar(ue),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=B,S++}else if(j.isPointLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const $=j.shadow,Q=i.get(j);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,r.pointShadow[A]=Q,r.pointShadowMap[A]=ve,r.pointShadowMatrix[A]=j.shadow.matrix,L++}r.point[A]=B,A++}else if(j.isHemisphereLight){const B=t.get(j);B.skyColor.copy(j.color).multiplyScalar(ue),B.groundColor.copy(j.groundColor).multiplyScalar(ue),r.hemi[_]=B,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==b||q.pointLength!==A||q.spotLength!==D||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==P||q.numPointShadows!==L||q.numSpotShadows!==N||q.numSpotMaps!==W||q.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=D,r.rectArea.length=S,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+W-G,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,q.directionalLength=b,q.pointLength=A,q.spotLength=D,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=P,q.numPointShadows=L,q.numSpotShadows=N,q.numSpotMaps=W,q.numLightProbes=z,r.version=mA++)}function m(p,g){let x=0,y=0,b=0,A=0,D=0;const S=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const L=p[_];if(L.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),x++}else if(L.isSpotLight){const N=r.spot[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),b++}else if(L.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),d.identity(),u.copy(L.matrixWorld),u.premultiply(S),d.extractRotation(u),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const N=r.hemi[D];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),D++}}}return{setup:h,setupView:m,state:r}}function x_(o){const t=new _A(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function vA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new x_(o),t.set(l,[h])):u>=d.length?(h=new x_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(o,t,i){let r=new K_;const l=new Ot,u=new Ot,d=new nn,h=new YM({depthPacking:rM}),m=new ZM,p={},g=i.maxTextureSize,x={[Va]:jn,[jn]:Va,[aa]:aa},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const A=new pi;A.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new kn(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let _=this.type;this.render=function(G,z,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const U=o.getRenderTarget(),w=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),de=o.state;de.setBlending(Ha),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ue=_!==ia&&this.type===ia,ye=_===ia&&this.type!==ia;for(let ve=0,B=G.length;ve<B;ve++){const $=G[ve],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const be=Q.getFrameExtents();if(l.multiply(be),u.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/be.x),l.x=u.x*be.x,Q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/be.y),l.y=u.y*be.y,Q.mapSize.y=u.y)),Q.map===null||ue===!0||ye===!0){const M=this.type!==ia?{minFilter:Ai,magFilter:Ai}:{};Q.map!==null&&Q.map.dispose(),Q.map=new br(l.x,l.y,M),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const F=Q.getViewportCount();for(let M=0;M<F;M++){const V=Q.getViewport(M);d.set(u.x*V.x,u.y*V.y,u.x*V.z,u.y*V.w),de.viewport(d),Q.updateMatrices($,M),r=Q.getFrustum(),N(z,q,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===ia&&P(Q,q),Q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(U,w,j)};function P(G,z){const q=t.update(D);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new br(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,q,y,D,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,q,b,D,null)}function L(G,z,q,U){let w=null;const j=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(j!==void 0)w=j;else if(w=q.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const de=w.uuid,ue=z.uuid;let ye=p[de];ye===void 0&&(ye={},p[de]=ye);let ve=ye[ue];ve===void 0&&(ve=w.clone(),ye[ue]=ve,z.addEventListener("dispose",W)),w=ve}if(w.visible=z.visible,w.wireframe=z.wireframe,U===ia?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:x[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const de=o.properties.get(w);de.light=q}return w}function N(G,z,q,U,w){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ia)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const ue=t.update(G),ye=G.material;if(Array.isArray(ye)){const ve=ue.groups;for(let B=0,$=ve.length;B<$;B++){const Q=ve[B],be=ye[Q.materialIndex];if(be&&be.visible){const F=L(G,be,U,w);G.onBeforeShadow(o,G,z,q,ue,F,Q),o.renderBufferDirect(q,null,ue,F,G,Q),G.onAfterShadow(o,G,z,q,ue,F,Q)}}}else if(ye.visible){const ve=L(G,ye,U,w);G.onBeforeShadow(o,G,z,q,ue,ve,null),o.renderBufferDirect(q,null,ue,ve,G,null),G.onAfterShadow(o,G,z,q,ue,ve,null)}}const de=G.children;for(let ue=0,ye=de.length;ue<ye;ue++)N(de[ue],z,q,U,w)}function W(G){G.target.removeEventListener("dispose",W);for(const q in p){const U=p[q],w=G.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const MA={[wd]:Dd,[Nd]:Od,[Ud]:Pd,[bs]:Ld,[Dd]:wd,[Od]:Nd,[Pd]:Ud,[Ld]:bs};function bA(o,t){function i(){let Z=!1;const De=new nn;let pe=null;const Me=new nn(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!Z&&(o.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){Z=Ne},setClear:function(Ne,Le,at,Wt,un){un===!0&&(Ne*=Wt,Le*=Wt,at*=Wt),De.set(Ne,Le,at,Wt),Me.equals(De)===!1&&(o.clearColor(Ne,Le,at,Wt),Me.copy(De))},reset:function(){Z=!1,pe=null,Me.set(-1,0,0,0)}}}function r(){let Z=!1,De=!1,pe=null,Me=null,Ne=null;return{setReversed:function(Le){if(De!==Le){const at=t.get("EXT_clip_control");De?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Wt=Ne;Ne=null,this.setClear(Wt)}De=Le},getReversed:function(){return De},setTest:function(Le){Le?le(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!Z&&(o.depthMask(Le),pe=Le)},setFunc:function(Le){if(De&&(Le=MA[Le]),Me!==Le){switch(Le){case wd:o.depthFunc(o.NEVER);break;case Dd:o.depthFunc(o.ALWAYS);break;case Nd:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Ud:o.depthFunc(o.EQUAL);break;case Ld:o.depthFunc(o.GEQUAL);break;case Od:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Me=Le}},setLocked:function(Le){Z=Le},setClear:function(Le){Ne!==Le&&(De&&(Le=1-Le),o.clearDepth(Le),Ne=Le)},reset:function(){Z=!1,pe=null,Me=null,Ne=null,De=!1}}}function l(){let Z=!1,De=null,pe=null,Me=null,Ne=null,Le=null,at=null,Wt=null,un=null;return{setTest:function(At){Z||(At?le(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(At){De!==At&&!Z&&(o.stencilMask(At),De=At)},setFunc:function(At,vn,mi){(pe!==At||Me!==vn||Ne!==mi)&&(o.stencilFunc(At,vn,mi),pe=At,Me=vn,Ne=mi)},setOp:function(At,vn,mi){(Le!==At||at!==vn||Wt!==mi)&&(o.stencilOp(At,vn,mi),Le=At,at=vn,Wt=mi)},setLocked:function(At){Z=At},setClear:function(At){un!==At&&(o.clearStencil(At),un=At)},reset:function(){Z=!1,De=null,pe=null,Me=null,Ne=null,Le=null,at=null,Wt=null,un=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,b=[],A=null,D=!1,S=null,_=null,P=null,L=null,N=null,W=null,G=null,z=new Nt(0,0,0),q=0,U=!1,w=null,j=null,de=null,ue=null,ye=null;const ve=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=$>=2);let be=null,F={};const M=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),se=new nn().fromArray(M),k=new nn().fromArray(V);function ee(Z,De,pe,Me){const Ne=new Uint8Array(4),Le=o.createTexture();o.bindTexture(Z,Le),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let at=0;at<pe;at++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,Me,0,o.RGBA,o.UNSIGNED_BYTE,Ne):o.texImage2D(De+at,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ne);return Le}const he={};he[o.TEXTURE_2D]=ee(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(bs),tt(!1),nt(bg),le(o.CULL_FACE),I(Ha);function le(Z){g[Z]!==!0&&(o.enable(Z),g[Z]=!0)}function Te(Z){g[Z]!==!1&&(o.disable(Z),g[Z]=!1)}function Ce(Z,De){return x[Z]!==De?(o.bindFramebuffer(Z,De),x[Z]=De,Z===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=De),Z===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Ue(Z,De){let pe=b,Me=!1;if(Z){pe=y.get(De),pe===void 0&&(pe=[],y.set(De,pe));const Ne=Z.textures;if(pe.length!==Ne.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Le=0,at=Ne.length;Le<at;Le++)pe[Le]=o.COLOR_ATTACHMENT0+Le;pe.length=Ne.length,Me=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Me=!0);Me&&o.drawBuffers(pe)}function Je(Z){return A!==Z?(o.useProgram(Z),A=Z,!0):!1}const et={[_r]:o.FUNC_ADD,[NS]:o.FUNC_SUBTRACT,[US]:o.FUNC_REVERSE_SUBTRACT};et[LS]=o.MIN,et[OS]=o.MAX;const Ye={[PS]:o.ZERO,[zS]:o.ONE,[IS]:o.SRC_COLOR,[Rd]:o.SRC_ALPHA,[kS]:o.SRC_ALPHA_SATURATE,[GS]:o.DST_COLOR,[FS]:o.DST_ALPHA,[BS]:o.ONE_MINUS_SRC_COLOR,[Cd]:o.ONE_MINUS_SRC_ALPHA,[VS]:o.ONE_MINUS_DST_COLOR,[HS]:o.ONE_MINUS_DST_ALPHA,[jS]:o.CONSTANT_COLOR,[XS]:o.ONE_MINUS_CONSTANT_COLOR,[qS]:o.CONSTANT_ALPHA,[WS]:o.ONE_MINUS_CONSTANT_ALPHA};function I(Z,De,pe,Me,Ne,Le,at,Wt,un,At){if(Z===Ha){D===!0&&(Te(o.BLEND),D=!1);return}if(D===!1&&(le(o.BLEND),D=!0),Z!==DS){if(Z!==S||At!==U){if((_!==_r||N!==_r)&&(o.blendEquation(o.FUNC_ADD),_=_r,N=_r),At)switch(Z){case ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eg:o.blendFunc(o.ONE,o.ONE);break;case Tg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ag:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Tg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ag:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}P=null,L=null,W=null,G=null,z.set(0,0,0),q=0,S=Z,U=At}return}Ne=Ne||De,Le=Le||pe,at=at||Me,(De!==_||Ne!==N)&&(o.blendEquationSeparate(et[De],et[Ne]),_=De,N=Ne),(pe!==P||Me!==L||Le!==W||at!==G)&&(o.blendFuncSeparate(Ye[pe],Ye[Me],Ye[Le],Ye[at]),P=pe,L=Me,W=Le,G=at),(Wt.equals(z)===!1||un!==q)&&(o.blendColor(Wt.r,Wt.g,Wt.b,un),z.copy(Wt),q=un),S=Z,U=!1}function Ut(Z,De){Z.side===aa?Te(o.CULL_FACE):le(o.CULL_FACE);let pe=Z.side===jn;De&&(pe=!pe),tt(pe),Z.blending===ys&&Z.transparent===!1?I(Ha):I(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),u.setMask(Z.colorWrite);const Me=Z.stencilWrite;h.setTest(Me),Me&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),mt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(Z){w!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),w=Z)}function nt(Z){Z!==RS?(le(o.CULL_FACE),Z!==j&&(Z===bg?o.cullFace(o.BACK):Z===CS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),j=Z}function Ve(Z){Z!==de&&(B&&o.lineWidth(Z),de=Z)}function mt(Z,De,pe){Z?(le(o.POLYGON_OFFSET_FILL),(ue!==De||ye!==pe)&&(o.polygonOffset(De,pe),ue=De,ye=pe)):Te(o.POLYGON_OFFSET_FILL)}function Fe(Z){Z?le(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function O(Z){Z===void 0&&(Z=o.TEXTURE0+ve-1),be!==Z&&(o.activeTexture(Z),be=Z)}function R(Z,De,pe){pe===void 0&&(be===null?pe=o.TEXTURE0+ve-1:pe=be);let Me=F[pe];Me===void 0&&(Me={type:void 0,texture:void 0},F[pe]=Me),(Me.type!==Z||Me.texture!==De)&&(be!==pe&&(o.activeTexture(pe),be=pe),o.bindTexture(Z,De||he[Z]),Me.type=Z,Me.texture=De)}function ie(){const Z=F[be];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ge(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{o.texSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function je(){try{o.texSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function He(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{o.texStorage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{o.texStorage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ge(){try{o.texImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function We(){try{o.texImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function qe(Z){se.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),se.copy(Z))}function Ie(Z){k.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),k.copy(Z))}function it(Z,De){let pe=p.get(De);pe===void 0&&(pe=new WeakMap,p.set(De,pe));let Me=pe.get(Z);Me===void 0&&(Me=o.getUniformBlockIndex(De,Z.name),pe.set(Z,Me))}function ct(Z,De){const Me=p.get(De).get(Z);m.get(De)!==Me&&(o.uniformBlockBinding(De,Me,Z.__bindingPointIndex),m.set(De,Me))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},be=null,F={},x={},y=new WeakMap,b=[],A=null,D=!1,S=null,_=null,P=null,L=null,N=null,W=null,G=null,z=new Nt(0,0,0),q=0,U=!1,w=null,j=null,de=null,ue=null,ye=null,se.set(0,0,o.canvas.width,o.canvas.height),k.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:le,disable:Te,bindFramebuffer:Ce,drawBuffers:Ue,useProgram:Je,setBlending:I,setMaterial:Ut,setFlipSided:tt,setCullFace:nt,setLineWidth:Ve,setPolygonOffset:mt,setScissorTest:Fe,activeTexture:O,bindTexture:R,unbindTexture:ie,compressedTexImage2D:ge,compressedTexImage3D:Ee,texImage2D:Ge,texImage3D:We,updateUBOMapping:it,uniformBlockBinding:ct,texStorage2D:pt,texStorage3D:Re,texSubImage2D:xe,texSubImage3D:je,compressedTexSubImage2D:we,compressedTexSubImage3D:He,scissor:qe,viewport:Ie,reset:It}}function EA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,g=new WeakMap;let x;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,R){return b?new OffscreenCanvas(O,R):wc("canvas")}function D(O,R,ie){let ge=1;const Ee=Fe(O);if((Ee.width>ie||Ee.height>ie)&&(ge=ie/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(ge*Ee.width),je=Math.floor(ge*Ee.height);x===void 0&&(x=A(xe,je));const we=R?A(xe,je):x;return we.width=xe,we.height=je,we.getContext("2d").drawImage(O,0,0,xe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+xe+"x"+je+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,R,ie,ge,Ee=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=R;if(R===o.RED&&(ie===o.FLOAT&&(xe=o.R32F),ie===o.HALF_FLOAT&&(xe=o.R16F),ie===o.UNSIGNED_BYTE&&(xe=o.R8)),R===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(xe=o.R8UI),ie===o.UNSIGNED_SHORT&&(xe=o.R16UI),ie===o.UNSIGNED_INT&&(xe=o.R32UI),ie===o.BYTE&&(xe=o.R8I),ie===o.SHORT&&(xe=o.R16I),ie===o.INT&&(xe=o.R32I)),R===o.RG&&(ie===o.FLOAT&&(xe=o.RG32F),ie===o.HALF_FLOAT&&(xe=o.RG16F),ie===o.UNSIGNED_BYTE&&(xe=o.RG8)),R===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(xe=o.RG8UI),ie===o.UNSIGNED_SHORT&&(xe=o.RG16UI),ie===o.UNSIGNED_INT&&(xe=o.RG32UI),ie===o.BYTE&&(xe=o.RG8I),ie===o.SHORT&&(xe=o.RG16I),ie===o.INT&&(xe=o.RG32I)),R===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(xe=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(xe=o.RGB16UI),ie===o.UNSIGNED_INT&&(xe=o.RGB32UI),ie===o.BYTE&&(xe=o.RGB8I),ie===o.SHORT&&(xe=o.RGB16I),ie===o.INT&&(xe=o.RGB32I)),R===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(xe=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(xe=o.RGBA16UI),ie===o.UNSIGNED_INT&&(xe=o.RGBA32UI),ie===o.BYTE&&(xe=o.RGBA8I),ie===o.SHORT&&(xe=o.RGBA16I),ie===o.INT&&(xe=o.RGBA32I)),R===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),R===o.RGBA){const je=Ee?Rc:Dt.getTransfer(ge);ie===o.FLOAT&&(xe=o.RGBA32F),ie===o.HALF_FLOAT&&(xe=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(xe=je===Vt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function N(O,R){let ie;return O?R===null||R===Mr||R===As?ie=o.DEPTH24_STENCIL8:R===ra?ie=o.DEPTH32F_STENCIL8:R===Oo&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Mr||R===As?ie=o.DEPTH_COMPONENT24:R===ra?ie=o.DEPTH_COMPONENT32F:R===Oo&&(ie=o.DEPTH_COMPONENT16),ie}function W(O,R){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ai&&O.minFilter!==Li?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function G(O){const R=O.target;R.removeEventListener("dispose",G),q(R),R.isVideoTexture&&g.delete(R)}function z(O){const R=O.target;R.removeEventListener("dispose",z),w(R)}function q(O){const R=r.get(O);if(R.__webglInit===void 0)return;const ie=O.source,ge=y.get(ie);if(ge){const Ee=ge[R.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(O),Object.keys(ge).length===0&&y.delete(ie)}r.remove(O)}function U(O){const R=r.get(O);o.deleteTexture(R.__webglTexture);const ie=O.source,ge=y.get(ie);delete ge[R.__cacheKey],d.memory.textures--}function w(O){const R=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(R.__webglFramebuffer[ge]))for(let Ee=0;Ee<R.__webglFramebuffer[ge].length;Ee++)o.deleteFramebuffer(R.__webglFramebuffer[ge][Ee]);else o.deleteFramebuffer(R.__webglFramebuffer[ge]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ge])}else{if(Array.isArray(R.__webglFramebuffer))for(let ge=0;ge<R.__webglFramebuffer.length;ge++)o.deleteFramebuffer(R.__webglFramebuffer[ge]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ge=0;ge<R.__webglColorRenderbuffer.length;ge++)R.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ge]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ie=O.textures;for(let ge=0,Ee=ie.length;ge<Ee;ge++){const xe=r.get(ie[ge]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),d.memory.textures--),r.remove(ie[ge])}r.remove(O)}let j=0;function de(){j=0}function ue(){const O=j;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),j+=1,O}function ye(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function ve(O,R){const ie=r.get(O);if(O.isVideoTexture&&Ve(O),O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(ie,O,R);return}}i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+R)}function B(O,R){const ie=r.get(O);if(O.version>0&&ie.__version!==O.version){k(ie,O,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+R)}function $(O,R){const ie=r.get(O);if(O.version>0&&ie.__version!==O.version){k(ie,O,R);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+R)}function Q(O,R){const ie=r.get(O);if(O.version>0&&ie.__version!==O.version){ee(ie,O,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+R)}const be={[Bd]:o.REPEAT,[yr]:o.CLAMP_TO_EDGE,[Fd]:o.MIRRORED_REPEAT},F={[Ai]:o.NEAREST,[iM]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},M={[lM]:o.NEVER,[pM]:o.ALWAYS,[cM]:o.LESS,[B_]:o.LEQUAL,[uM]:o.EQUAL,[hM]:o.GEQUAL,[fM]:o.GREATER,[dM]:o.NOTEQUAL};function V(O,R){if(R.type===ra&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Li||R.magFilter===Kf||R.magFilter===Ql||R.magFilter===Sr||R.minFilter===Li||R.minFilter===Kf||R.minFilter===Ql||R.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,be[R.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,be[R.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,be[R.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,F[R.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,F[R.minFilter]),R.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,M[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ai||R.minFilter!==Ql&&R.minFilter!==Sr||R.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function se(O,R){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",G));const ge=R.source;let Ee=y.get(ge);Ee===void 0&&(Ee={},y.set(ge,Ee));const xe=ye(R);if(xe!==O.__cacheKey){Ee[xe]===void 0&&(Ee[xe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Ee[xe].usedTimes++;const je=Ee[O.__cacheKey];je!==void 0&&(Ee[O.__cacheKey].usedTimes--,je.usedTimes===0&&U(R)),O.__cacheKey=xe,O.__webglTexture=Ee[xe].texture}return ie}function k(O,R,ie){let ge=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=o.TEXTURE_3D);const Ee=se(O,R),xe=R.source;i.bindTexture(ge,O.__webglTexture,o.TEXTURE0+ie);const je=r.get(xe);if(xe.version!==je.__version||Ee===!0){i.activeTexture(o.TEXTURE0+ie);const we=Dt.getPrimaries(Dt.workingColorSpace),He=R.colorSpace===Fa?null:Dt.getPrimaries(R.colorSpace),pt=R.colorSpace===Fa||we===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Re=D(R.image,!1,l.maxTextureSize);Re=mt(R,Re);const Ge=u.convert(R.format,R.colorSpace),We=u.convert(R.type);let qe=L(R.internalFormat,Ge,We,R.colorSpace,R.isVideoTexture);V(ge,R);let Ie;const it=R.mipmaps,ct=R.isVideoTexture!==!0,It=je.__version===void 0||Ee===!0,Z=xe.dataReady,De=W(R,Re);if(R.isDepthTexture)qe=N(R.format===Rs,R.type),It&&(ct?i.texStorage2D(o.TEXTURE_2D,1,qe,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,qe,Re.width,Re.height,0,Ge,We,null));else if(R.isDataTexture)if(it.length>0){ct&&It&&i.texStorage2D(o.TEXTURE_2D,De,qe,it[0].width,it[0].height);for(let pe=0,Me=it.length;pe<Me;pe++)Ie=it[pe],ct?Z&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ie.width,Ie.height,Ge,We,Ie.data):i.texImage2D(o.TEXTURE_2D,pe,qe,Ie.width,Ie.height,0,Ge,We,Ie.data);R.generateMipmaps=!1}else ct?(It&&i.texStorage2D(o.TEXTURE_2D,De,qe,Re.width,Re.height),Z&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Re.width,Re.height,Ge,We,Re.data)):i.texImage2D(o.TEXTURE_2D,0,qe,Re.width,Re.height,0,Ge,We,Re.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ct&&It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,qe,it[0].width,it[0].height,Re.depth);for(let pe=0,Me=it.length;pe<Me;pe++)if(Ie=it[pe],R.format!==Ti)if(Ge!==null)if(ct){if(Z)if(R.layerUpdates.size>0){const Ne=Zg(Ie.width,Ie.height,R.format,R.type);for(const Le of R.layerUpdates){const at=Ie.data.subarray(Le*Ne/Ie.data.BYTES_PER_ELEMENT,(Le+1)*Ne/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Le,Ie.width,Ie.height,1,Ge,at)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ie.width,Ie.height,Re.depth,Ge,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,qe,Ie.width,Ie.height,Re.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Z&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ie.width,Ie.height,Re.depth,Ge,We,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,qe,Ie.width,Ie.height,Re.depth,0,Ge,We,Ie.data)}else{ct&&It&&i.texStorage2D(o.TEXTURE_2D,De,qe,it[0].width,it[0].height);for(let pe=0,Me=it.length;pe<Me;pe++)Ie=it[pe],R.format!==Ti?Ge!==null?ct?Z&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Ie.width,Ie.height,Ge,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Z&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ie.width,Ie.height,Ge,We,Ie.data):i.texImage2D(o.TEXTURE_2D,pe,qe,Ie.width,Ie.height,0,Ge,We,Ie.data)}else if(R.isDataArrayTexture)if(ct){if(It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,qe,Re.width,Re.height,Re.depth),Z)if(R.layerUpdates.size>0){const pe=Zg(Re.width,Re.height,R.format,R.type);for(const Me of R.layerUpdates){const Ne=Re.data.subarray(Me*pe/Re.data.BYTES_PER_ELEMENT,(Me+1)*pe/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Me,Re.width,Re.height,1,Ge,We,Ne)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ge,We,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,Re.width,Re.height,Re.depth,0,Ge,We,Re.data);else if(R.isData3DTexture)ct?(It&&i.texStorage3D(o.TEXTURE_3D,De,qe,Re.width,Re.height,Re.depth),Z&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ge,We,Re.data)):i.texImage3D(o.TEXTURE_3D,0,qe,Re.width,Re.height,Re.depth,0,Ge,We,Re.data);else if(R.isFramebufferTexture){if(It)if(ct)i.texStorage2D(o.TEXTURE_2D,De,qe,Re.width,Re.height);else{let pe=Re.width,Me=Re.height;for(let Ne=0;Ne<De;Ne++)i.texImage2D(o.TEXTURE_2D,Ne,qe,pe,Me,0,Ge,We,null),pe>>=1,Me>>=1}}else if(it.length>0){if(ct&&It){const pe=Fe(it[0]);i.texStorage2D(o.TEXTURE_2D,De,qe,pe.width,pe.height)}for(let pe=0,Me=it.length;pe<Me;pe++)Ie=it[pe],ct?Z&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ge,We,Ie):i.texImage2D(o.TEXTURE_2D,pe,qe,Ge,We,Ie);R.generateMipmaps=!1}else if(ct){if(It){const pe=Fe(Re);i.texStorage2D(o.TEXTURE_2D,De,qe,pe.width,pe.height)}Z&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ge,We,Re)}else i.texImage2D(o.TEXTURE_2D,0,qe,Ge,We,Re);S(R)&&_(ge),je.__version=xe.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function ee(O,R,ie){if(R.image.length!==6)return;const ge=se(O,R),Ee=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ie);const xe=r.get(Ee);if(Ee.version!==xe.__version||ge===!0){i.activeTexture(o.TEXTURE0+ie);const je=Dt.getPrimaries(Dt.workingColorSpace),we=R.colorSpace===Fa?null:Dt.getPrimaries(R.colorSpace),He=R.colorSpace===Fa||je===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Re=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let Me=0;Me<6;Me++)!pt&&!Re?Ge[Me]=D(R.image[Me],!0,l.maxCubemapSize):Ge[Me]=Re?R.image[Me].image:R.image[Me],Ge[Me]=mt(R,Ge[Me]);const We=Ge[0],qe=u.convert(R.format,R.colorSpace),Ie=u.convert(R.type),it=L(R.internalFormat,qe,Ie,R.colorSpace),ct=R.isVideoTexture!==!0,It=xe.__version===void 0||ge===!0,Z=Ee.dataReady;let De=W(R,We);V(o.TEXTURE_CUBE_MAP,R);let pe;if(pt){ct&&It&&i.texStorage2D(o.TEXTURE_CUBE_MAP,De,it,We.width,We.height);for(let Me=0;Me<6;Me++){pe=Ge[Me].mipmaps;for(let Ne=0;Ne<pe.length;Ne++){const Le=pe[Ne];R.format!==Ti?qe!==null?ct?Z&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,0,0,Le.width,Le.height,qe,Le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,it,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Z&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,0,0,Le.width,Le.height,qe,Ie,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,it,Le.width,Le.height,0,qe,Ie,Le.data)}}}else{if(pe=R.mipmaps,ct&&It){pe.length>0&&De++;const Me=Fe(Ge[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,De,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Re){ct?Z&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ge[Me].width,Ge[Me].height,qe,Ie,Ge[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ge[Me].width,Ge[Me].height,0,qe,Ie,Ge[Me].data);for(let Ne=0;Ne<pe.length;Ne++){const at=pe[Ne].image[Me].image;ct?Z&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,0,0,at.width,at.height,qe,Ie,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,it,at.width,at.height,0,qe,Ie,at.data)}}else{ct?Z&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,qe,Ie,Ge[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,qe,Ie,Ge[Me]);for(let Ne=0;Ne<pe.length;Ne++){const Le=pe[Ne];ct?Z&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,0,0,qe,Ie,Le.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,it,qe,Ie,Le.image[Me])}}}S(R)&&_(o.TEXTURE_CUBE_MAP),xe.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function he(O,R,ie,ge,Ee,xe){const je=u.convert(ie.format,ie.colorSpace),we=u.convert(ie.type),He=L(ie.internalFormat,je,we,ie.colorSpace),pt=r.get(R),Re=r.get(ie);if(Re.__renderTarget=R,!pt.__hasExternalTextures){const Ge=Math.max(1,R.width>>xe),We=Math.max(1,R.height>>xe);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,xe,He,Ge,We,R.depth,0,je,we,null):i.texImage2D(Ee,xe,He,Ge,We,0,je,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),nt(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,Ee,Re.__webglTexture,0,tt(R)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,Ee,Re.__webglTexture,xe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function le(O,R,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,O),R.depthBuffer){const ge=R.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,xe=N(R.stencilBuffer,Ee),je=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=tt(R);nt(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,xe,R.width,R.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,xe,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,xe,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,O)}else{const ge=R.textures;for(let Ee=0;Ee<ge.length;Ee++){const xe=ge[Ee],je=u.convert(xe.format,xe.colorSpace),we=u.convert(xe.type),He=L(xe.internalFormat,je,we,xe.colorSpace),pt=tt(R);ie&&nt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,He,R.width,R.height):nt(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,He,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,He,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(R.depthTexture);ge.__renderTarget=R,(!ge.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ve(R.depthTexture,0);const Ee=ge.__webglTexture,xe=tt(R);if(R.depthTexture.format===Ss)nt(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(R.depthTexture.format===Rs)nt(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ce(O){const R=r.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ge){const Ee=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),R.__depthDisposeCallback=Ee}R.__boundDepthTexture=ge}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Te(R.__webglFramebuffer,O)}else if(ie){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]===void 0)R.__webglDepthbuffer[ge]=o.createRenderbuffer(),le(R.__webglDepthbuffer[ge],O,!1);else{const Ee=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,xe)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),le(R.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ee)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(O,R,ie){const ge=r.get(O);R!==void 0&&he(ge.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Ce(O)}function Je(O){const R=O.texture,ie=r.get(O),ge=r.get(R);O.addEventListener("dispose",z);const Ee=O.textures,xe=O.isWebGLCubeRenderTarget===!0,je=Ee.length>1;if(je||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=R.version,d.memory.textures++),xe){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let He=0;He<R.mipmaps.length;He++)ie.__webglFramebuffer[we][He]=o.createFramebuffer()}else ie.__webglFramebuffer[we]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)ie.__webglFramebuffer[we]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(je)for(let we=0,He=Ee.length;we<He;we++){const pt=r.get(Ee[we]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&nt(O)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const He=Ee[we];ie.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);const pt=u.convert(He.format,He.colorSpace),Re=u.convert(He.type),Ge=L(He.internalFormat,pt,Re,He.colorSpace,O.isXRRenderTarget===!0),We=tt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Ge,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,ie.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),le(ie.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),V(o.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let He=0;He<R.mipmaps.length;He++)he(ie.__webglFramebuffer[we][He],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,He);else he(ie.__webglFramebuffer[we],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(R)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let we=0,He=Ee.length;we<He;we++){const pt=Ee[we],Re=r.get(pt);i.bindTexture(o.TEXTURE_2D,Re.__webglTexture),V(o.TEXTURE_2D,pt),he(ie.__webglFramebuffer,O,pt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(pt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,ge.__webglTexture),V(we,R),R.mipmaps&&R.mipmaps.length>0)for(let He=0;He<R.mipmaps.length;He++)he(ie.__webglFramebuffer[He],O,R,o.COLOR_ATTACHMENT0,we,He);else he(ie.__webglFramebuffer,O,R,o.COLOR_ATTACHMENT0,we,0);S(R)&&_(we),i.unbindTexture()}O.depthBuffer&&Ce(O)}function et(O){const R=O.textures;for(let ie=0,ge=R.length;ie<ge;ie++){const Ee=R[ie];if(S(Ee)){const xe=P(O),je=r.get(Ee).__webglTexture;i.bindTexture(xe,je),_(xe),i.unbindTexture()}}}const Ye=[],I=[];function Ut(O){if(O.samples>0){if(nt(O)===!1){const R=O.textures,ie=O.width,ge=O.height;let Ee=o.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=r.get(O),we=R.length>1;if(we)for(let He=0;He<R.length;He++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let He=0;He<R.length;He++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const pt=r.get(R[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pt,0)}o.blitFramebuffer(0,0,ie,ge,0,0,ie,ge,Ee,o.NEAREST),m===!0&&(Ye.length=0,I.length=0,Ye.push(o.COLOR_ATTACHMENT0+He),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ye.push(xe),I.push(xe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let He=0;He<R.length;He++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const pt=r.get(R[He]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const R=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function tt(O){return Math.min(l.maxSamples,O.samples)}function nt(O){const R=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ve(O){const R=d.render.frame;g.get(O)!==R&&(g.set(O,R),O.update())}function mt(O,R){const ie=O.colorSpace,ge=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Cs&&ie!==Fa&&(Dt.getTransfer(ie)===Vt?(ge!==Ti||Ee!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),R}function Fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=de,this.setTexture2D=ve,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=he,this.useMultisampledRTT=nt}function TA(o,t){function i(r,l=Fa){let u;const d=Dt.getTransfer(l);if(r===la)return o.UNSIGNED_BYTE;if(r===yh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Sh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===D_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===C_)return o.BYTE;if(r===w_)return o.SHORT;if(r===Oo)return o.UNSIGNED_SHORT;if(r===xh)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===ra)return o.FLOAT;if(r===Po)return o.HALF_FLOAT;if(r===N_)return o.ALPHA;if(r===U_)return o.RGB;if(r===Ti)return o.RGBA;if(r===L_)return o.LUMINANCE;if(r===O_)return o.LUMINANCE_ALPHA;if(r===Ss)return o.DEPTH_COMPONENT;if(r===Rs)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Mh)return o.RED_INTEGER;if(r===z_)return o.RG;if(r===bh)return o.RG_INTEGER;if(r===Eh)return o.RGBA_INTEGER;if(r===yc||r===Sc||r===Mc||r===bc)if(d===Vt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===Vd||r===kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Hd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Xd||r===qd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Xd)return d===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Wd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===th)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ih)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ec||r===oh||r===lh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Ec)return d===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===I_||r===ch||r===uh||r===fh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ec)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ch)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Xn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new kn(new Oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,b=null,A=null;const D=new CA,S=i.getContextAttributes();let _=null,P=null;const L=[],N=[],W=new Ot;let G=null;const z=new di;z.viewport=new nn;const q=new di;q.viewport=new nn;const U=[z,q],w=new QM;let j=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=L[k];return ee===void 0&&(ee=new vd,L[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=L[k];return ee===void 0&&(ee=new vd,L[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=L[k];return ee===void 0&&(ee=new vd,L[k]=ee),ee.getHandSpace()};function ue(k){const ee=N.indexOf(k.inputSource);if(ee===-1)return;const he=L[ee];he!==void 0&&(he.update(k.inputSource,k.frame,p||d),he.dispatchEvent({type:k.type,data:k.inputSource}))}function ye(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",ye),l.removeEventListener("inputsourceschange",ve);for(let k=0;k<L.length;k++){const ee=N[k];ee!==null&&(N[k]=null,L[k].disconnect(ee))}j=null,de=null,D.reset(),t.setRenderTarget(_),b=null,y=null,x=null,l=null,P=null,se.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",ye),l.addEventListener("inputsourceschange",ve),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,le=null,Te=null;S.depth&&(Te=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,he=S.stencil?Rs:Ss,le=S.stencil?As:Mr);const Ce={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Ce),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),P=new br(y.textureWidth,y.textureHeight,{format:Ti,type:la,depthTexture:new J_(y.textureWidth,y.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,he),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new br(b.framebufferWidth,b.framebufferHeight,{format:Ti,type:la,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),se.setContext(l),se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function ve(k){for(let ee=0;ee<k.removed.length;ee++){const he=k.removed[ee],le=N.indexOf(he);le>=0&&(N[le]=null,L[le].disconnect(he))}for(let ee=0;ee<k.added.length;ee++){const he=k.added[ee];let le=N.indexOf(he);if(le===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=N.length){N.push(he),le=Ce;break}else if(N[Ce]===null){N[Ce]=he,le=Ce;break}if(le===-1)break}const Te=L[le];Te&&Te.connect(he)}}const B=new ae,$=new ae;function Q(k,ee,he){B.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const le=B.distanceTo($),Te=ee.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),Je=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],Ye=(Te[9]-1)/Te[5],I=(Te[8]-1)/Te[0],Ut=(Ce[8]+1)/Ce[0],tt=Ue*I,nt=Ue*Ut,Ve=le/(-I+Ut),mt=Ve*-I;if(ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(mt),k.translateZ(Ve),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Te[10]===-1)k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Fe=Ue+Ve,O=Je+Ve,R=tt-mt,ie=nt+(le-mt),ge=et*Je/O*Fe,Ee=Ye*Je/O*Fe;k.projectionMatrix.makePerspective(R,ie,ge,Ee,Fe,O),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function be(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;let ee=k.near,he=k.far;D.texture!==null&&(D.depthNear>0&&(ee=D.depthNear),D.depthFar>0&&(he=D.depthFar)),w.near=q.near=z.near=ee,w.far=q.far=z.far=he,(j!==w.near||de!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),j=w.near,de=w.far),z.layers.mask=k.layers.mask|2,q.layers.mask=k.layers.mask|4,w.layers.mask=z.layers.mask|q.layers.mask;const le=k.parent,Te=w.cameras;be(w,le);for(let Ce=0;Ce<Te.length;Ce++)be(Te[Ce],le);Te.length===2?Q(w,z,q):w.projectionMatrix.copy(z.projectionMatrix),F(k,w,le)};function F(k,ee,he){he===null?k.matrix.copy(ee.matrixWorld):(k.matrix.copy(he.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=dh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(k){m=k,y!==null&&(y.fixedFoveation=k),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=k)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(w)};let M=null;function V(k,ee){if(g=ee.getViewerPose(p||d),A=ee,g!==null){const he=g.views;b!==null&&(t.setRenderTargetFramebuffer(P,b.framebuffer),t.setRenderTarget(P));let le=!1;he.length!==w.cameras.length&&(w.cameras.length=0,le=!0);for(let Ue=0;Ue<he.length;Ue++){const Je=he[Ue];let et=null;if(b!==null)et=b.getViewport(Je);else{const I=x.getViewSubImage(y,Je);et=I.viewport,Ue===0&&(t.setRenderTargetTextures(P,I.colorTexture,y.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(P))}let Ye=U[Ue];Ye===void 0&&(Ye=new di,Ye.layers.enable(Ue),Ye.viewport=new nn,U[Ue]=Ye),Ye.matrix.fromArray(Je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),Ue===0&&(w.matrix.copy(Ye.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),le===!0&&w.cameras.push(Ye)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ue=x.getDepthInformation(he[0]);Ue&&Ue.isValid&&Ue.texture&&D.init(t,Ue,l.renderState)}}for(let he=0;he<L.length;he++){const le=N[he],Te=L[he];le!==null&&Te!==void 0&&Te.update(le,ee,p||d)}M&&M(k,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),A=null}const se=new $_;se.setAnimationLoop(V),this.setAnimationLoop=function(k){M=k},this.dispose=function(){}}}const pr=new ca,DA=new an;function NA(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,W_(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,P,L,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&b(S,_,N)):_.isMeshMatcapMaterial?(u(S,_),A(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),D(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,P,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=t.get(_),L=P.envMap,N=P.envMapRotation;L&&(S.envMap.value=L,pr.copy(N),pr.x*=-1,pr.y*=-1,pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),S.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(pr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function D(S,_){const P=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function UA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const N=L.program;r.uniformBlockBinding(P,N)}function p(P,L){let N=l[P.id];N===void 0&&(A(P),N=g(P),l[P.id]=N,P.addEventListener("dispose",S));const W=L.program;r.updateUBOMapping(P,W);const G=t.render.frame;u[P.id]!==G&&(y(P),u[P.id]=G)}function g(P){const L=x();P.__bindingPointIndex=L;const N=o.createBuffer(),W=P.__size,G=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,W,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function x(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const L=l[P.id],N=P.uniforms,W=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,z=N.length;G<z;G++){const q=Array.isArray(N[G])?N[G]:[N[G]];for(let U=0,w=q.length;U<w;U++){const j=q[U];if(b(j,G,U,W)===!0){const de=j.__offset,ue=Array.isArray(j.value)?j.value:[j.value];let ye=0;for(let ve=0;ve<ue.length;ve++){const B=ue[ve],$=D(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,de+ye,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,ye),ye+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,de,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(P,L,N,W){const G=P.value,z=L+"_"+N;if(W[z]===void 0)return typeof G=="number"||typeof G=="boolean"?W[z]=G:W[z]=G.clone(),!0;{const q=W[z];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return W[z]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function A(P){const L=P.uniforms;let N=0;const W=16;for(let z=0,q=L.length;z<q;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,j=U.length;w<j;w++){const de=U[w],ue=Array.isArray(de.value)?de.value:[de.value];for(let ye=0,ve=ue.length;ye<ve;ye++){const B=ue[ye],$=D(B),Q=N%W,be=Q%$.boundary,F=Q+be;N+=be,F!==0&&W-F<$.storage&&(N+=W-F),de.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=N,N+=$.storage}}}const G=N%W;return G>0&&(N+=W-G),P.__size=N,P.__cache={},this}function D(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function S(P){const L=P.target;L.removeEventListener("dispose",S);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class LA{constructor(t={}){const{canvas:i=gM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const A=new Uint32Array(4),D=new Int32Array(4);let S=null,_=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Ga,this.toneMappingExposure=1;const N=this;let W=!1,G=0,z=0,q=null,U=-1,w=null;const j=new nn,de=new nn;let ue=null;const ye=new Nt(0);let ve=0,B=i.width,$=i.height,Q=1,be=null,F=null;const M=new nn(0,0,B,$),V=new nn(0,0,B,$);let se=!1;const k=new K_;let ee=!1,he=!1;this.transmissionResolutionScale=1;const le=new an,Te=new an,Ce=new ae,Ue=new nn,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ye(){return q===null?Q:1}let I=r;function Ut(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",Ne,!1),i.addEventListener("webglcontextcreationerror",Le,!1),I===null){const K="webgl2";if(I=Ut(K,C),I===null)throw Ut(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,nt,Ve,mt,Fe,O,R,ie,ge,Ee,xe,je,we,He,pt,Re,Ge,We,qe,Ie,it,ct,It,Z;function De(){tt=new kE(I),tt.init(),ct=new TA(I,tt),nt=new IE(I,tt,t,ct),Ve=new bA(I,tt),nt.reverseDepthBuffer&&y&&Ve.buffers.depth.setReversed(!0),mt=new qE(I),Fe=new uA,O=new EA(I,tt,Ve,Fe,nt,ct,mt),R=new FE(N),ie=new VE(N),ge=new $M(I),It=new PE(I,ge),Ee=new jE(I,ge,mt,It),xe=new YE(I,Ee,ge,mt),qe=new WE(I,nt,O),Re=new BE(Fe),je=new cA(N,R,ie,tt,nt,It,Re),we=new NA(N,Fe),He=new dA,pt=new vA(tt),We=new OE(N,R,ie,Ve,xe,b,m),Ge=new SA(N,xe,nt),Z=new UA(I,mt,nt,Ve),Ie=new zE(I,tt,mt),it=new XE(I,tt,mt),mt.programs=je.programs,N.capabilities=nt,N.extensions=tt,N.properties=Fe,N.renderLists=He,N.shadowMap=Ge,N.state=Ve,N.info=mt}De();const pe=new wA(N,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(B,$,!1))},this.getSize=function(C){return C.set(B,$)},this.setSize=function(C,K,oe=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,$=K,i.width=Math.floor(C*Q),i.height=Math.floor(K*Q),oe===!0&&(i.style.width=C+"px",i.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(B*Q,$*Q).floor()},this.setDrawingBufferSize=function(C,K,oe){B=C,$=K,Q=oe,i.width=Math.floor(C*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(M)},this.setViewport=function(C,K,oe,ce){C.isVector4?M.set(C.x,C.y,C.z,C.w):M.set(C,K,oe,ce),Ve.viewport(j.copy(M).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,K,oe,ce){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,K,oe,ce),Ve.scissor(de.copy(V).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){Ve.setScissorTest(se=C)},this.setOpaqueSort=function(C){be=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,K=!0,oe=!0){let ce=0;if(C){let Y=!1;if(q!==null){const Ae=q.texture.format;Y=Ae===Eh||Ae===bh||Ae===Mh}if(Y){const Ae=q.texture.type,Oe=Ae===la||Ae===Mr||Ae===Oo||Ae===As||Ae===yh||Ae===Sh,ze=We.getClearColor(),Be=We.getClearAlpha(),rt=ze.r,st=ze.g,Ze=ze.b;Oe?(A[0]=rt,A[1]=st,A[2]=Ze,A[3]=Be,I.clearBufferuiv(I.COLOR,0,A)):(D[0]=rt,D[1]=st,D[2]=Ze,D[3]=Be,I.clearBufferiv(I.COLOR,0,D))}else ce|=I.COLOR_BUFFER_BIT}K&&(ce|=I.DEPTH_BUFFER_BIT),oe&&(ce|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",Ne,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),We.dispose(),He.dispose(),pt.dispose(),Fe.dispose(),R.dispose(),ie.dispose(),xe.dispose(),It.dispose(),Z.dispose(),je.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Us),pe.removeEventListener("sessionend",Ls),Ri.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=mt.autoReset,K=Ge.enabled,oe=Ge.autoUpdate,ce=Ge.needsUpdate,Y=Ge.type;De(),mt.autoReset=C,Ge.enabled=K,Ge.autoUpdate=oe,Ge.needsUpdate=ce,Ge.type=Y}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const K=C.target;K.removeEventListener("dispose",at),Wt(K)}function Wt(C){un(C),Fe.remove(C)}function un(C){const K=Fe.get(C).programs;K!==void 0&&(K.forEach(function(oe){je.releaseProgram(oe)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,oe,ce,Y,Ae){K===null&&(K=Je);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=Ps(C,K,oe,ce,Y);Ve.setMaterial(ce,Oe);let Be=oe.index,rt=1;if(ce.wireframe===!0){if(Be=Ee.getWireframeAttribute(oe),Be===void 0)return;rt=2}const st=oe.drawRange,Ze=oe.attributes.position;let yt=st.start*rt,St=(st.start+st.count)*rt;Ae!==null&&(yt=Math.max(yt,Ae.start*rt),St=Math.min(St,(Ae.start+Ae.count)*rt)),Be!==null?(yt=Math.max(yt,0),St=Math.min(St,Be.count)):Ze!=null&&(yt=Math.max(yt,0),St=Math.min(St,Ze.count));const jt=St-yt;if(jt<0||jt===1/0)return;It.setup(Y,ce,ze,oe,Be);let Rt,ot=Ie;if(Be!==null&&(Rt=ge.get(Be),ot=it,ot.setIndex(Rt)),Y.isMesh)ce.wireframe===!0?(Ve.setLineWidth(ce.wireframeLinewidth*Ye()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(Y.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),Ve.setLineWidth(Qe*Ye()),Y.isLineSegments?ot.setMode(I.LINES):Y.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else Y.isPoints?ot.setMode(I.POINTS):Y.isSprite&&ot.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ot.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,fn=Y._multiDrawCounts,Et=Y._multiDrawCount,On=Be?ge.get(Be).bytesPerElement:1,_i=Fe.get(ce).currentProgram.getUniforms();for(let Dn=0;Dn<Et;Dn++)_i.setValue(I,"_gl_DrawID",Dn),ot.render(Qe[Dn]/On,fn[Dn])}else if(Y.isInstancedMesh)ot.renderInstances(yt,jt,Y.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,fn=Math.min(oe.instanceCount,Qe);ot.renderInstances(yt,jt,fn)}else ot.render(yt,jt)};function At(C,K,oe){C.transparent===!0&&C.side===aa&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Kt(C,K,oe),C.side=Va,C.needsUpdate=!0,Kt(C,K,oe),C.side=aa):Kt(C,K,oe)}this.compile=function(C,K,oe=null){oe===null&&(oe=C),_=pt.get(oe),_.init(K),L.push(_),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==oe&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const ce=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const ze=Ae[Oe];At(ze,oe,Y),ce.add(ze)}else At(Ae,oe,Y),ce.add(Ae)}),L.pop(),_=null,ce},this.compileAsync=function(C,K,oe=null){const ce=this.compile(C,K,oe);return new Promise(Y=>{function Ae(){if(ce.forEach(function(Oe){Fe.get(Oe).currentProgram.isReady()&&ce.delete(Oe)}),ce.size===0){Y(C);return}setTimeout(Ae,10)}tt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let vn=null;function mi(C){vn&&vn(C)}function Us(){Ri.stop()}function Ls(){Ri.start()}const Ri=new $_;Ri.setAnimationLoop(mi),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){vn=C,pe.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},pe.addEventListener("sessionstart",Us),pe.addEventListener("sessionend",Ls),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(K),K=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,K,q),_=pt.get(C,L.length),_.init(K),L.push(_),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k.setFromProjectionMatrix(Te),he=this.localClippingEnabled,ee=Re.init(this.clippingPlanes,he),S=He.get(C,P.length),S.init(),P.push(S),pe.enabled===!0&&pe.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&ja(Ae,K,-1/0,N.sortObjects)}ja(C,K,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(be,F),et=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,et&&We.addToRenderList(S,C),this.info.render.frame++,ee===!0&&Re.beginShadows();const oe=_.state.shadowsArray;Ge.render(oe,C,K),ee===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,Y=S.transmissive;if(_.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Y.length>0)for(let Oe=0,ze=Ae.length;Oe<ze;Oe++){const Be=Ae[Oe];Os(ce,Y,C,Be)}et&&We.render(C);for(let Oe=0,ze=Ae.length;Oe<ze;Oe++){const Be=Ae[Oe];Er(S,C,Be,Be.viewport)}}else Y.length>0&&Os(ce,Y,C,K),et&&We.render(C),Er(S,C,K);q!==null&&z===0&&(O.updateMultisampleRenderTarget(q),O.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(N,C,K),It.resetDefaultState(),U=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],ee===!0&&Re.setGlobalState(N.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function ja(C,K,oe,ce){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){ce&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const Oe=xe.update(C),ze=C.material;ze.visible&&S.push(C,Oe,ze,oe,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const Oe=xe.update(C),ze=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ue.copy(Oe.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(ze)){const Be=Oe.groups;for(let rt=0,st=Be.length;rt<st;rt++){const Ze=Be[rt],yt=ze[Ze.materialIndex];yt&&yt.visible&&S.push(C,Oe,yt,oe,Ue.z,Ze)}}else ze.visible&&S.push(C,Oe,ze,oe,Ue.z,null)}}const Ae=C.children;for(let Oe=0,ze=Ae.length;Oe<ze;Oe++)ja(Ae[Oe],K,oe,ce)}function Er(C,K,oe,ce){const Y=C.opaque,Ae=C.transmissive,Oe=C.transparent;_.setupLightsView(oe),ee===!0&&Re.setGlobalState(N.clippingPlanes,oe),ce&&Ve.viewport(j.copy(ce)),Y.length>0&&Xa(Y,K,oe),Ae.length>0&&Xa(Ae,K,oe),Oe.length>0&&Xa(Oe,K,oe),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Os(C,K,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new br(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Po:la,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[ce.id],Oe=ce.viewport||j;Ae.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const ze=N.getRenderTarget();N.setRenderTarget(Ae),N.getClearColor(ye),ve=N.getClearAlpha(),ve<1&&N.setClearColor(16777215,.5),N.clear(),et&&We.render(oe);const Be=N.toneMapping;N.toneMapping=Ga;const rt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),ee===!0&&Re.setGlobalState(N.clippingPlanes,ce),Xa(C,oe,ce),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),tt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ze=0,yt=K.length;Ze<yt;Ze++){const St=K[Ze],jt=St.object,Rt=St.geometry,ot=St.material,Qe=St.group;if(ot.side===aa&&jt.layers.test(ce.layers)){const fn=ot.side;ot.side=jn,ot.needsUpdate=!0,gi(jt,oe,ce,Rt,ot,Qe),ot.side=fn,ot.needsUpdate=!0,st=!0}}st===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}N.setRenderTarget(ze),N.setClearColor(ye,ve),rt!==void 0&&(ce.viewport=rt),N.toneMapping=Be}function Xa(C,K,oe){const ce=K.isScene===!0?K.overrideMaterial:null;for(let Y=0,Ae=C.length;Y<Ae;Y++){const Oe=C[Y],ze=Oe.object,Be=Oe.geometry,rt=ce===null?Oe.material:ce,st=Oe.group;ze.layers.test(oe.layers)&&gi(ze,K,oe,Be,rt,st)}}function gi(C,K,oe,ce,Y,Ae){C.onBeforeRender(N,K,oe,ce,Y,Ae),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(N,K,oe,ce,C,Ae),Y.transparent===!0&&Y.side===aa&&Y.forceSinglePass===!1?(Y.side=jn,Y.needsUpdate=!0,N.renderBufferDirect(oe,K,ce,Y,C,Ae),Y.side=Va,Y.needsUpdate=!0,N.renderBufferDirect(oe,K,ce,Y,C,Ae),Y.side=aa):N.renderBufferDirect(oe,K,ce,Y,C,Ae),C.onAfterRender(N,K,oe,ce,Y,Ae)}function Kt(C,K,oe){K.isScene!==!0&&(K=Je);const ce=Fe.get(C),Y=_.state.lights,Ae=_.state.shadowsArray,Oe=Y.state.version,ze=je.getParameters(C,Y.state,Ae,K,oe),Be=je.getProgramCacheKey(ze);let rt=ce.programs;ce.environment=C.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(C.isMeshStandardMaterial?ie:R).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",at),rt=new Map,ce.programs=rt);let st=rt.get(Be);if(st!==void 0){if(ce.currentProgram===st&&ce.lightsStateVersion===Oe)return Oi(C,ze),st}else ze.uniforms=je.getUniforms(C),C.onBeforeCompile(ze,N),st=je.acquireProgram(ze,Be),rt.set(Be,st),ce.uniforms=ze.uniforms;const Ze=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Re.uniform),Oi(C,ze),ce.needsLights=Ic(C),ce.lightsStateVersion=Oe,ce.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ce.currentProgram=st,ce.uniformsList=null,st}function xn(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Tc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Oi(C,K){const oe=Fe.get(C);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function Ps(C,K,oe,ce,Y){K.isScene!==!0&&(K=Je),O.resetTextureUnits();const Ae=K.fog,Oe=ce.isMeshStandardMaterial?K.environment:null,ze=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cs,Be=(ce.isMeshStandardMaterial?ie:R).get(ce.envMap||Oe),rt=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ze=!!oe.morphAttributes.position,yt=!!oe.morphAttributes.normal,St=!!oe.morphAttributes.color;let jt=Ga;ce.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(jt=N.toneMapping);const Rt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ot=Rt!==void 0?Rt.length:0,Qe=Fe.get(ce),fn=_.state.lights;if(ee===!0&&(he===!0||C!==w)){const Qt=C===w&&ce.id===U;Re.setState(ce,C,Qt)}let Et=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==fn.state.version||Qe.outputColorSpace!==ze||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Be||ce.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==st||Qe.morphTargets!==Ze||Qe.morphNormals!==yt||Qe.morphColors!==St||Qe.toneMapping!==jt||Qe.morphTargetsCount!==ot)&&(Et=!0):(Et=!0,Qe.__version=ce.version);let On=Qe.currentProgram;Et===!0&&(On=Kt(ce,K,Y));let _i=!1,Dn=!1,mn=!1;const Bt=On.getUniforms(),Nn=Qe.uniforms;if(Ve.useProgram(On.program)&&(_i=!0,Dn=!0,mn=!0),ce.id!==U&&(U=ce.id,Dn=!0),_i||w!==C){Ve.buffers.depth.getReversed()?(le.copy(C.projectionMatrix),vM(le),xM(le),Bt.setValue(I,"projectionMatrix",le)):Bt.setValue(I,"projectionMatrix",C.projectionMatrix),Bt.setValue(I,"viewMatrix",C.matrixWorldInverse);const yn=Bt.map.cameraPosition;yn!==void 0&&yn.setValue(I,Ce.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Dn=!0,mn=!0)}if(Y.isSkinnedMesh){Bt.setOptional(I,Y,"bindMatrix"),Bt.setOptional(I,Y,"bindMatrixInverse");const Qt=Y.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Bt.setValue(I,"boneTexture",Qt.boneTexture,O))}Y.isBatchedMesh&&(Bt.setOptional(I,Y,"batchingTexture"),Bt.setValue(I,"batchingTexture",Y._matricesTexture,O),Bt.setOptional(I,Y,"batchingIdTexture"),Bt.setValue(I,"batchingIdTexture",Y._indirectTexture,O),Bt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Bt.setValue(I,"batchingColorTexture",Y._colorsTexture,O));const Tn=oe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&qe.update(Y,oe,On),(Dn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Bt.setValue(I,"receiveShadow",Y.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Nn.envMap.value=Be,Nn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(Nn.envMapIntensity.value=K.environmentIntensity),Dn&&(Bt.setValue(I,"toneMappingExposure",N.toneMappingExposure),Qe.needsLights&&zc(Nn,mn),Ae&&ce.fog===!0&&we.refreshFogUniforms(Nn,Ae),we.refreshMaterialUniforms(Nn,ce,Q,$,_.state.transmissionRenderTarget[C.id]),Tc.upload(I,xn(Qe),Nn,O)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Tc.upload(I,xn(Qe),Nn,O),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Bt.setValue(I,"center",Y.center),Bt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Bt.setValue(I,"normalMatrix",Y.normalMatrix),Bt.setValue(I,"modelMatrix",Y.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Qt=ce.uniformsGroups;for(let yn=0,Tr=Qt.length;yn<Tr;yn++){const Pn=Qt[yn];Z.update(Pn,On),Z.bind(Pn,On)}}return On}function zc(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Ic(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,K,oe){Fe.get(C.texture).__webglTexture=K,Fe.get(C.depthTexture).__webglTexture=oe;const ce=Fe.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){const oe=Fe.get(C);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};const Go=I.createFramebuffer();this.setRenderTarget=function(C,K=0,oe=0){q=C,G=K,z=oe;let ce=!0,Y=null,Ae=!1,Oe=!1;if(C){const Be=Fe.get(C);if(Be.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(I.FRAMEBUFFER,null),ce=!1;else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(Be.__hasExternalTextures)O.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&Fe.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Oe=!0);const st=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[K])?Y=st[K][oe]:Y=st[K],Ae=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?Y=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[oe]:Y=st,j.copy(C.viewport),de.copy(C.scissor),ue=C.scissorTest}else j.copy(M).multiplyScalar(Q).floor(),de.copy(V).multiplyScalar(Q).floor(),ue=se;if(oe!==0&&(Y=Go),Ve.bindFramebuffer(I.FRAMEBUFFER,Y)&&ce&&Ve.drawBuffers(C,Y),Ve.viewport(j),Ve.scissor(de),Ve.setScissorTest(ue),Ae){const Be=Fe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,oe)}else if(Oe){const Be=Fe.get(C.texture),rt=K;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,oe,rt)}else if(C!==null&&oe!==0){const Be=Fe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Be.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(C,K,oe,ce,Y,Ae,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Ve.bindFramebuffer(I.FRAMEBUFFER,ze);try{const Be=C.texture,rt=Be.format,st=Be.type;if(!nt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ce&&oe>=0&&oe<=C.height-Y&&I.readPixels(K,oe,ce,Y,ct.convert(rt),ct.convert(st),Ae)}finally{const Be=q!==null?Fe.get(q).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,K,oe,ce,Y,Ae,Oe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){const Be=C.texture,rt=Be.format,st=Be.type;if(!nt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-ce&&oe>=0&&oe<=C.height-Y){Ve.bindFramebuffer(I.FRAMEBUFFER,ze);const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,Ae.byteLength,I.STREAM_READ),I.readPixels(K,oe,ce,Y,ct.convert(rt),ct.convert(st),0);const yt=q!==null?Fe.get(q).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,yt);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _M(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ae),I.deleteBuffer(Ze),I.deleteSync(St),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,oe=0){C.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);const ce=Math.pow(2,-oe),Y=Math.floor(C.image.width*ce),Ae=Math.floor(C.image.height*ce),Oe=K!==null?K.x:0,ze=K!==null?K.y:0;O.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,oe,0,0,Oe,ze,Y,Ae),Ve.unbindTexture()};const qa=I.createFramebuffer(),zs=I.createFramebuffer();this.copyTextureToTexture=function(C,K,oe=null,ce=null,Y=0,Ae=null){C.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,C=arguments[1],K=arguments[2],Ae=arguments[3]||0,oe=null),Ae===null&&(Y!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Oe,ze,Be,rt,st,Ze,yt,St,jt;const Rt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(oe!==null)Oe=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,rt=oe.min.x,st=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Tn=Math.pow(2,-Y);Oe=Math.floor(Rt.width*Tn),ze=Math.floor(Rt.height*Tn),C.isDataArrayTexture?Be=Rt.depth:C.isData3DTexture?Be=Math.floor(Rt.depth*Tn):Be=1,rt=0,st=0,Ze=0}ce!==null?(yt=ce.x,St=ce.y,jt=ce.z):(yt=0,St=0,jt=0);const ot=ct.convert(K.format),Qe=ct.convert(K.type);let fn;K.isData3DTexture?(O.setTexture3D(K,0),fn=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(O.setTexture2DArray(K,0),fn=I.TEXTURE_2D_ARRAY):(O.setTexture2D(K,0),fn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),Dn=I.getParameter(I.UNPACK_SKIP_ROWS),mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Bt=C.isDataArrayTexture||C.isData3DTexture,Nn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Tn=Fe.get(C),Qt=Fe.get(K),yn=Fe.get(Tn.__renderTarget),Tr=Fe.get(Qt.__renderTarget);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Pn=0;Pn<Be;Pn++)Bt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,Y,Ze+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(K).__webglTexture,Ae,jt+Pn)),I.blitFramebuffer(rt,st,Oe,ze,yt,St,Oe,ze,I.DEPTH_BUFFER_BIT,I.NEAREST);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Fe.has(C)){const Tn=Fe.get(C),Qt=Fe.get(K);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,qa),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,zs);for(let yn=0;yn<Be;yn++)Bt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tn.__webglTexture,Y,Ze+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tn.__webglTexture,Y),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qt.__webglTexture,Ae,jt+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qt.__webglTexture,Ae),Y!==0?I.blitFramebuffer(rt,st,Oe,ze,yt,St,Oe,ze,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(fn,Ae,yt,St,jt+yn,rt,st,Oe,ze):I.copyTexSubImage2D(fn,Ae,yt,St,rt,st,Oe,ze);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(fn,Ae,yt,St,jt,Oe,ze,Be,ot,Qe,Rt.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(fn,Ae,yt,St,jt,Oe,ze,Be,ot,Rt.data):I.texSubImage3D(fn,Ae,yt,St,jt,Oe,ze,Be,ot,Qe,Rt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ae,yt,St,Oe,ze,ot,Qe,Rt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ae,yt,St,Rt.width,Rt.height,ot,Rt.data):I.texSubImage2D(I.TEXTURE_2D,Ae,yt,St,Oe,ze,ot,Qe,Rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mn),Ae===0&&K.generateMipmaps&&I.generateMipmap(fn),Ve.unbindTexture()},this.copyTextureToTexture3D=function(C,K,oe=null,ce=null,Y=0){return C.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ce=arguments[1]||null,C=arguments[2],K=arguments[3],Y=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,oe,ce,Y)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){G=0,z=0,q=null,Ve.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}function OA(){const o=Zt.useRef(null);return Zt.useEffect(()=>{const t=o.current;if(!t)return;const i=new jM,r=new di(60,t.clientWidth/t.clientHeight,.1,1e3);r.position.z=7;const l=new LA({alpha:!0,antialias:!0});l.setSize(t.clientWidth,t.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(l.domElement);const u=new Uo;i.add(u);const d=new Th(2.2,1),h=new vr({color:14659931,wireframe:!0,transparent:!0,opacity:.35}),m=new kn(d,h);u.add(m);const p=new Ah(1.3,0),g=new vr({color:3003583,wireframe:!0,transparent:!0,opacity:.6}),x=new kn(p,g);u.add(x);const y=new Rh(.15,16,16),b=new vr({color:16777215}),A=new kn(y,b);u.add(A);const D=new Dc(3,.015,16,100),S=new vr({color:14659931,transparent:!0,opacity:.4}),_=new kn(D,S);_.rotation.x=Math.PI/3,u.add(_);const P=new Dc(3.6,.012,16,100),L=new vr({color:11032055,transparent:!0,opacity:.3}),N=new kn(P,L);N.rotation.y=Math.PI/4,N.rotation.x=Math.PI/6,u.add(N);const W=200,G=new pi,z=new Float32Array(W*3),q=new Float32Array(W*3),U=new Nt(14659931),w=new Nt(3003583),j=new Nt(11032055);for(let V=0;V<W;V++){z[V*3]=(Math.random()-.5)*18,z[V*3+1]=(Math.random()-.5)*18,z[V*3+2]=(Math.random()-.5)*18;const se=Math.random()<.5?U:Math.random()<.5?w:j;q[V*3]=se.r,q[V*3+1]=se.g,q[V*3+2]=se.b}G.setAttribute("position",new hi(z,3)),G.setAttribute("color",new hi(q,3));const de=new Q_({size:.06,vertexColors:!0,transparent:!0,opacity:.7}),ue=new WM(G,de);i.add(ue);let ye=0,ve=0,B=0,$=0;const Q=V=>{ye=(V.clientX/window.innerWidth-.5)*2,ve=(V.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",Q);const be=()=>{t&&(r.aspect=t.clientWidth/t.clientHeight,r.updateProjectionMatrix(),l.setSize(t.clientWidth,t.clientHeight))};window.addEventListener("resize",be);let F;const M=()=>{F=requestAnimationFrame(M),B+=(ye-B)*.05,$+=(ve-$)*.05,m.rotation.x+=.003,m.rotation.y+=.005,x.rotation.x-=.006,x.rotation.y-=.008,_.rotation.z+=.002,N.rotation.z-=.003,ue.rotation.y+=8e-4,u.rotation.y=B*.6,u.rotation.x=-$*.6,l.render(i,r)};return M(),()=>{window.removeEventListener("mousemove",Q),window.removeEventListener("resize",be),cancelAnimationFrame(F),t&&l.domElement&&t.removeChild(l.domElement),l.dispose()}},[]),E.jsx("div",{ref:o,className:"absolute inset-0 z-0 pointer-events-none opacity-80"})}function PA({onOpenResumeModal:o}){return E.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden",children:[E.jsx(OA,{}),E.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"}),E.jsx("div",{className:"absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"}),E.jsx("div",{className:"absolute top-1/3 left-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"}),E.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_rgba(223,177,91,0.2)] mb-8 animate-pulse-glow",children:[E.jsx(gh,{className:"w-4 h-4 text-amber-400"}),E.jsx("span",{children:"Qualified GATE 2026 (Computer Science) • AIR: 5820 (97.24 Percentile)"}),E.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"})]}),E.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4",children:[E.jsx("span",{className:"block text-slate-100 font-cinzel",children:"ADITYA THAPLIYAL"}),E.jsx("span",{className:"block arcane-gold-text font-cinzel mt-1",children:"FORGING SYSTEMS & AI"})]}),E.jsxs("p",{className:"max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8",children:["4th-Year B.Tech Computer Science & Engineering Undergrad at Graphic Era Hill University, Dehradun. Crafting high-performance ",E.jsx("span",{className:"text-amber-300 font-normal",children:"C++ systems"}),", ",E.jsx("span",{className:"text-teal-300 font-normal",children:"scalable full-stack web applications"}),", and ",E.jsx("span",{className:"text-purple-300 font-normal",children:"vector-search AI microservices"}),"."]}),E.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-14",children:[E.jsxs("a",{href:"#projects",className:"flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(223,177,91,0.4)] hover:shadow-[0_0_30px_rgba(223,177,91,0.7)] hover:scale-105 transition-all",children:[E.jsx("span",{children:"Explore Chronicles (Projects)"}),E.jsx(Ty,{className:"w-4 h-4"})]}),E.jsxs("a",{href:"#contact",className:"flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 border border-teal-500/50 text-teal-300 hover:border-teal-400 hover:text-teal-200 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all text-sm font-semibold backdrop-blur-sm",children:[E.jsx(Ac,{className:"w-4 h-4 text-teal-400"}),E.jsx("span",{children:"Summon Contact"})]}),E.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-sm font-medium backdrop-blur-sm",children:[E.jsx(xs,{className:"w-4 h-4 text-amber-400"}),E.jsx("span",{children:"View Resume PDF"})]})]}),E.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto",children:[E.jsxs("div",{className:"arcane-card p-4 rounded-xl text-center",children:[E.jsx("div",{className:"text-2xl sm:text-3xl font-bold font-cinzel text-amber-400",children:"8.7 / 10"}),E.jsx("div",{className:"text-xs text-slate-400 font-mono mt-1",children:"B.Tech CSE CGPA"})]}),E.jsxs("div",{className:"arcane-card p-4 rounded-xl text-center",children:[E.jsx("div",{className:"text-2xl sm:text-3xl font-bold font-cinzel text-teal-400",children:"AIR 5820"}),E.jsx("div",{className:"text-xs text-slate-400 font-mono mt-1",children:"GATE 2026 CS (97.24%)"})]}),E.jsxs("div",{className:"arcane-card p-4 rounded-xl text-center",children:[E.jsx("div",{className:"text-2xl sm:text-3xl font-bold font-cinzel text-purple-400",children:"Top-15"}),E.jsx("div",{className:"text-xs text-slate-400 font-mono mt-1",children:"Graphethon 2025 (100+ Teams)"})]}),E.jsxs("div",{className:"arcane-card p-4 rounded-xl text-center",children:[E.jsx("div",{className:"text-2xl sm:text-3xl font-bold font-cinzel text-amber-300",children:"Salesforce"}),E.jsx("div",{className:"text-xs text-slate-400 font-mono mt-1",children:"Agentblazer Champion"})]})]})]})]})}function zA(){const o=[{name:"Data Structures & Algorithms",desc:"Mastery in trees, graphs, heaps, dynamic programming & time complexity analysis."},{name:"Operating Systems",desc:"Process management, multithreading, memory management, scheduling & POSIX systems."},{name:"Database Management (DBMS)",desc:"Relational schema design, SQL optimization, ACID transactions & indexing."},{name:"Computer Networks",desc:"TCP/IP stack, HTTP/HTTPS protocols, sockets, routing algorithms & network security."},{name:"Theory of Computation",desc:"Finite automata, context-free grammars, Turing machines & computability."},{name:"Object-Oriented Programming",desc:"Abstraction, inheritance, polymorphism, design patterns & clean code architecture."}];return E.jsx("section",{id:"academic",className:"py-20 relative",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3",children:[E.jsx(Sg,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"KNOWLEDGE FOUNDATION"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"ACADEMIC SANCTUM"}),E.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:[E.jsxs("div",{className:"arcane-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group",children:[E.jsx("div",{className:"absolute top-0 right-0 p-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors",children:E.jsx(Sg,{className:"w-24 h-24"})}),E.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[E.jsx("span",{className:"px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40",children:"2023 – Present"}),E.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"B.Tech 4th Year"})]}),E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors",children:"Graphic Era Hill University"}),E.jsx("p",{className:"text-amber-400 font-medium text-sm mb-4",children:"Dehradun, Uttarakhand, India"}),E.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed mb-6",children:["Bachelor of Technology in ",E.jsx("strong",{className:"text-slate-100",children:"Computer Science and Engineering"}),". Demonstrating consistent academic excellence and rigorous algorithmic mastery."]}),E.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30",children:[E.jsx(gh,{className:"w-5 h-5 text-amber-400"}),E.jsxs("div",{children:[E.jsx("span",{className:"text-xs text-slate-400 block font-mono",children:"Cumulative Grade Point Average"}),E.jsx("span",{className:"text-xl font-bold font-cinzel text-amber-300",children:"CGPA: 8.7 / 10"})]})]})]}),E.jsxs("div",{className:"arcane-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group",children:[E.jsx("div",{className:"absolute top-0 right-0 p-6 text-teal-500/10 group-hover:text-teal-500/20 transition-colors",children:E.jsx(Cy,{className:"w-24 h-24"})}),E.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[E.jsx("span",{className:"px-3 py-1 rounded-md text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40",children:"Schooling (CBSE)"}),E.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"APS Jodhpur"})]}),E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 group-hover:text-teal-300 transition-colors",children:"Army Public School, Jodhpur"}),E.jsx("p",{className:"text-teal-400 font-medium text-sm mb-6",children:"Senior Secondary & Secondary Education"}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-teal-500/30",children:[E.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Class XII (CBSE 2022)"}),E.jsx("div",{className:"text-2xl font-bold font-cinzel text-teal-300 mt-1",children:"96.00%"}),E.jsx("div",{className:"text-[11px] text-teal-400/80 mt-1",children:"Mathematics & Science"})]}),E.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-teal-500/30",children:[E.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Class X (CBSE 2020)"}),E.jsx("div",{className:"text-2xl font-bold font-cinzel text-teal-300 mt-1",children:"95.67%"}),E.jsx("div",{className:"text-[11px] text-teal-400/80 mt-1",children:"Distinction Honors"})]})]})]})]}),E.jsxs("div",{children:[E.jsxs("h3",{className:"text-xl font-bold font-cinzel text-slate-200 text-center mb-8 flex items-center justify-center gap-2",children:[E.jsx(b_,{className:"w-5 h-5 text-amber-400"}),E.jsx("span",{children:"RELEVANT CSE COURSEWORK & CORE PILLARS"})]}),E.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:o.map((t,i)=>E.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 flex items-start gap-3.5 group",children:[E.jsx(Py,{className:"w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-semibold text-slate-200 group-hover:text-amber-300 text-sm transition-colors",children:t.name}),E.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mt-1",children:t.desc})]})]},i))})]})]})})}function IA(){const[o,t]=Zt.useState("All"),i=[{id:"All",label:"All Artifacts",icon:Ac},{id:"Languages",label:"Languages",icon:M_},{id:"Web",label:"Web & Backend",icon:_S},{id:"Databases",label:"Databases & Storage",icon:jy},{id:"Cloud",label:"Cloud & Tools",icon:Iy},{id:"ML",label:"ML & Data Science",icon:Dy}],r=[{name:"C++ (17/20)",category:"Languages",level:95,detail:"DSA, STL, Custom Allocators, Min-Heap, Serializers, REPL",color:"amber"},{name:"JavaScript (ES6+)",category:"Languages",level:90,detail:"Async/Await, Promises, Closures, Functional Paradigm",color:"amber"},{name:"SQL",category:"Languages",level:85,detail:"Complex Queries, Indexing, Joins, Transactions",color:"amber"},{name:"Java",category:"Languages",level:80,detail:"OOP Concepts, Collections Framework, Multithreading",color:"amber"},{name:"Python",category:"Languages",level:88,detail:"FastAPI, ML pipelines, Data Wrangling, Pandas",color:"amber"},{name:"React.js",category:"Web",level:92,detail:"State Management, Hooks, Component Lifecycle, Virtual DOM",color:"cyan"},{name:"Node.js",category:"Web",level:90,detail:"Event Loop, Streams, Non-blocking I/O, REST APIs",color:"cyan"},{name:"Express.js",category:"Web",level:88,detail:"Middleware Architecture, Routing, JWT Auth, API Design",color:"cyan"},{name:"FastAPI",category:"Web",level:85,detail:"Async Endpoints, Pydantic, Microservices, Vector Search",color:"cyan"},{name:"HTML5 & CSS3",category:"Web",level:95,detail:"Modern Flexbox/Grid, Glassmorphism, Responsive UI",color:"cyan"},{name:"MongoDB",category:"Databases",level:88,detail:"NoSQL Schema Design, Aggregation Pipelines, Mongoose",color:"purple"},{name:"MySQL",category:"Databases",level:85,detail:"Relational Schemas, Foreign Keys, Normalization",color:"purple"},{name:"ChromaDB",category:"Databases",level:85,detail:"Vector Database, Dense Vector Indexing, Semantic Match",color:"purple"},{name:"MinIO",category:"Databases",level:82,detail:"S3-Compatible Object Storage, Pre-signed URLs",color:"purple"},{name:"AWS (EC2, S3, VPC)",category:"Cloud",level:80,detail:"Cloud Hosting, Object Buckets, Virtual Networks",color:"amber"},{name:"Git & GitHub",category:"Cloud",level:92,detail:"Version Control, Branching Workflows, Actions",color:"amber"},{name:"Linux / Unix",category:"Cloud",level:88,detail:"Shell Scripting, POSIX CLI, Process Monitoring",color:"amber"},{name:"Postman & VS Code",category:"Cloud",level:90,detail:"API Automation Testing, Extensions, Debugging",color:"amber"},{name:"Pandas & NumPy",category:"ML",level:88,detail:"Data Preprocessing, Outlier Removal, Matrices",color:"cyan"},{name:"Scikit-Learn",category:"ML",level:85,detail:"Linear Regression, Lasso, Decision Trees, GridSearchCV",color:"cyan"},{name:"SentenceTransformers",category:"ML",level:84,detail:"Dense Vector Embeddings, Cosine Similarity",color:"cyan"},{name:"Matplotlib",category:"ML",level:80,detail:"Exploratory Data Visualizations & Charts",color:"cyan"}],l=o==="All"?r:r.filter(u=>u.category===o);return E.jsx("section",{id:"skills",className:"py-20 relative bg-slate-950/40",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3",children:[E.jsx(Ac,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"MASTERY & SPELLBOOK"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"TECHNICAL SKILLS GRIMOIRE"}),E.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-4"})]}),E.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-12",children:i.map(u=>{const d=u.icon,h=o===u.id;return E.jsxs("button",{onClick:()=>t(u.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${h?"bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(223,177,91,0.4)] scale-105":"bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-amber-300"}`,children:[E.jsx(d,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:u.label})]},u.id)})}),E.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((u,d)=>E.jsxs("div",{className:"arcane-card p-5 rounded-xl flex flex-col justify-between group",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("h3",{className:"font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors",children:u.name}),E.jsxs("span",{className:"text-xs font-mono font-semibold text-amber-400",children:[u.level,"%"]})]}),E.jsx("p",{className:"text-xs text-slate-400 mb-4 leading-relaxed",children:u.detail})]}),E.jsx("div",{className:"w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800",children:E.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${u.color==="amber"?"bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_8px_rgba(223,177,91,0.6)]":u.color==="cyan"?"bg-gradient-to-r from-teal-600 to-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]":"bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]"}`,style:{width:`${u.level}%`}})})]},d))})]})})}function BA(){const[o,t]=Zt.useState(null),i=[{id:"connect-v",title:"Connect-V-2.0",subtitle:"AI-Powered Student Collaboration & Vector Recommendation Platform",timeline:"Jan 2026 – Aug 2026",badge:"Full-Stack & Vector AI",color:"amber",techStack:["React","Node.js","Express.js","FastAPI","MongoDB","ChromaDB","MinIO","SentenceTransformers"],summary:"Built a full-stack student collaboration platform using React, Node.js, Express, FastAPI, MongoDB, and ChromaDB for AI-powered team formation and project collaboration.",highlights:["Developed a semantic recommendation engine using SentenceTransformers, ChromaDB, dense vector embeddings, and cosine similarity to match users beyond exact keyword searches.","Integrated MinIO pre-signed URL uploads for scalable media storage and developed a dedicated FastAPI microservice for vector indexing and semantic search.","Engineered non-blocking REST APIs and MongoDB schemas for real-time collaboration and project team matching."],architectureDetails:"Connect-V-2.0 utilizes a dual microservices architecture: the Node.js/Express core backend manages authentication, MongoDB CRUD operations, and pre-signed MinIO media links, while a lightweight Python FastAPI microservice computes 384-dimensional dense vector embeddings via SentenceTransformers and queries ChromaDB for semantic cosine similarity matching."},{id:"redislite",title:"RedisLite",subtitle:"High-Performance C++ In-Memory Key-Value Store with TTL & Persistence",timeline:"May 2026 – Aug 2026",badge:"C++ Systems Engine",color:"cyan",techStack:["C++17","STL","std::unordered_map","std::priority_queue","std::chrono","Custom Serialization"],summary:"Built a Redis-inspired in-memory key-value store in C++ supporting CRUD operations, TTL-based key expiration, snapshot persistence, and an interactive command-line REPL.",highlights:["Implemented a hybrid TTL expiration strategy combining lazy deletion with a min-heap scheduler while preserving expiration accuracy across restarts using absolute epoch timestamps.","Designed a snapshot manager that serializes database state to disk and automatically restores it on startup using a custom serialization format with robust recovery from malformed records.","Features an interactive CLI shell supporting standard commands (SET, GET, DEL, EXPIRE, PERSIST, SAVE, RESTORE)."],architectureDetails:"RedisLite pairs an std::unordered_map for O(1) average lookup with a min-heap std::priority_queue tracking smallest TTL epoch timestamps. The snapshot manager writes atomic binary database dumps to disk, using magic header bytes and CRC checksum verification for crash recovery."},{id:"esti-mate",title:"Esti-MATE",subtitle:"Machine Learning Real-Estate House Price Predictor Engine",timeline:"Jul 2026 – Aug 2026",badge:"ML & Analytics",color:"purple",techStack:["Python","Pandas","NumPy","Scikit-learn","Flask","Streamlit","HTML","CSS","JavaScript"],summary:"Built an end-to-end ML web application to predict Bengaluru house prices using Linear Regression on a Kaggle dataset (13,000+ records), achieving an 84.52% R² score.",highlights:["Performed data preprocessing and feature engineering including missing value handling, BHK extraction, one-hot encoding, and statistical outlier removal using Pandas.","Compared Linear Regression, Lasso, and Decision Tree using GridSearchCV with 5-fold cross-validation, selecting Linear Regression as the best-performing model.","Deployed dual UI interfaces (Flask REST API + Streamlit Web App) for real-time price estimation."],architectureDetails:"The Esti-MATE pipeline cleans 13,000+ raw records by removing price-per-sqft statistical outliers beyond 2 standard deviations per location, encoding categorical locations with One-Hot encoding, and serializing the trained model to a `.pickle` file consumed by Flask."}];return E.jsxs("section",{id:"projects",className:"py-20 relative",children:[E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3",children:[E.jsx(iS,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"PORTFOLIO CHRONICLES"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"FEATURED ENGINEERING WORKS"}),E.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"})]}),E.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:i.map(r=>E.jsxs("div",{className:`arcane-card ${r.color==="cyan"?"arcane-card-cyan":""} p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative`,children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[E.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-mono font-bold ${r.color==="amber"?"bg-amber-500/20 text-amber-300 border border-amber-500/40":r.color==="cyan"?"bg-teal-500/20 text-teal-300 border border-teal-500/40":"bg-purple-500/20 text-purple-300 border border-purple-500/40"}`,children:r.badge}),E.jsx("span",{className:"text-xs text-slate-400 font-mono",children:r.timeline})]}),E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors mb-2",children:r.title}),E.jsx("p",{className:"text-xs text-amber-400/90 font-medium mb-4",children:r.subtitle}),E.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:r.summary}),E.jsx("ul",{className:"space-y-2 mb-6 text-xs text-slate-400",children:r.highlights.slice(0,2).map((l,u)=>E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx(Ly,{className:"w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5"}),E.jsx("span",{children:l})]},u))}),E.jsx("div",{className:"flex flex-wrap gap-1.5 mb-8",children:r.techStack.map((l,u)=>E.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300",children:l},u))})]}),E.jsxs("div",{className:"flex items-center gap-3 pt-4 border-t border-slate-800/80",children:[E.jsxs("button",{onClick:()=>t(r),className:"flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs transition-all shadow-[0_0_10px_rgba(223,177,91,0.2)]",children:[E.jsx(tS,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"Architecture Deep Dive"})]}),E.jsx("a",{href:"https://github.com/HYDRABLOOMER",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors",title:"View GitHub Repository",children:E.jsx(E_,{className:"w-4 h-4"})})]})]},r.id))})]}),o&&E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:E.jsxs("div",{className:"arcane-card max-w-2xl w-full p-6 sm:p-8 rounded-2xl relative max-h-[90vh] overflow-y-auto border border-amber-500/50 shadow-2xl",children:[E.jsx("button",{onClick:()=>t(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 transition-colors",children:E.jsx(_h,{className:"w-6 h-6"})}),E.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-amber-400 mb-2",children:[E.jsx(b_,{className:"w-4 h-4"}),E.jsx("span",{children:"ARCHITECTURE SPECIFICATION"})]}),E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 mb-1",children:o.title}),E.jsx("p",{className:"text-xs text-slate-400 font-mono mb-6",children:o.subtitle}),E.jsxs("div",{className:"space-y-6 text-sm text-slate-300",children:[E.jsxs("div",{children:[E.jsx("h4",{className:"font-semibold text-amber-300 font-cinzel text-base mb-2",children:"System Architecture Breakdown"}),E.jsx("p",{className:"p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 font-mono text-xs leading-relaxed text-slate-200",children:o.architectureDetails})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-semibold text-amber-300 font-cinzel text-base mb-2",children:"Engineering Highlights & Features"}),E.jsx("ul",{className:"space-y-2 text-xs",children:o.highlights.map((r,l)=>E.jsxs("li",{className:"flex items-start gap-2.5",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"}),E.jsx("span",{className:"leading-relaxed",children:r})]},l))})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-semibold text-amber-300 font-cinzel text-base mb-2",children:"Technologies Used"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:o.techStack.map((r,l)=>E.jsx("span",{className:"px-3 py-1 rounded-md text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300",children:r},l))})]})]}),E.jsx("div",{className:"mt-8 pt-4 border-t border-slate-800 flex justify-end",children:E.jsx("button",{onClick:()=>t(null),className:"px-5 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs",children:"Close Specification"})})]})})]})}function FA(){const o=[{title:"Qualified GATE 2026 (Computer Science)",category:"National Competitive Exam",stat:"AIR 5820",detail:"Score: 529 | 97.24 Percentile",desc:"Achieved high national standing in the Graduate Aptitude Test in Engineering for CS/IT, validating deep expertise in CS algorithms, theory of computation, operating systems, and computer organization.",badgeColor:"amber",icon:Mg},{title:"Salesforce Developer & Automation Agentblazer Champion",category:"Industry Certification & Challenge",stat:"Champion",detail:"Salesforce Automation & Agentic AI",desc:"Recognized as an Agentblazer Champion for excellence in Salesforce development, workflow automation, custom Apex, and AI agent integration.",badgeColor:"teal",icon:gh},{title:"Top-15 Finalist at Graphethon 2025",category:"National Hackathon",stat:"Top-15",detail:"Selected out of 100+ Teams",desc:"Designed and presented an AI-driven memory-assistance solution for Alzheimer’s patients, earning top recognition among 100+ competing engineering teams.",badgeColor:"purple",icon:Qy}];return E.jsx("section",{id:"achievements",className:"py-20 relative bg-slate-950/60",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3",children:[E.jsx(Mg,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"HONORS & QUEST ACCOLADES"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"ACHIEVEMENTS & RECOGNITION"}),E.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"})]}),E.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:o.map((t,i)=>{const r=t.icon;return E.jsxs("div",{className:"arcane-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between gap-2 mb-6",children:[E.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${t.badgeColor==="amber"?"bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-[0_0_15px_rgba(223,177,91,0.3)]":t.badgeColor==="teal"?"bg-teal-500/20 text-teal-400 border border-teal-500/40 shadow-[0_0_15px_rgba(45,212,191,0.3)]":"bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]"}`,children:E.jsx(r,{className:"w-6 h-6"})}),E.jsxs("div",{className:"text-right",children:[E.jsx("span",{className:"text-2xl font-extrabold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors",children:t.stat}),E.jsx("span",{className:"block text-[11px] font-mono text-slate-400",children:t.detail})]})]}),E.jsx("span",{className:"text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1",children:t.category}),E.jsx("h3",{className:"text-xl font-bold font-cinzel text-slate-100 mb-3 group-hover:text-amber-300 transition-colors",children:t.title}),E.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-6",children:t.desc})]}),E.jsx("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400",children:E.jsxs("span",{className:"flex items-center gap-1.5 text-amber-300",children:[E.jsx(xS,{className:"w-4 h-4"})," Verified Honor"]})})]},i)})})]})})}function HA(){const[o,t]=Zt.useState([{text:"Arcane OS v2.4 (x86_64-systems-linux-cpp17)",type:"system"},{text:`Type "help" or "redislite" to interact with Aditya's system REPL.`,type:"system"}]),[i,r]=Zt.useState(""),[l,u]=Zt.useState({author:"Aditya Thapliyal",gate_air:"5820",cgpa:"8.7",favorite_lang:"C++"}),d=Zt.useRef(null);Zt.useEffect(()=>{var m;(m=d.current)==null||m.scrollIntoView({behavior:"smooth"})},[o]);const h=m=>{m.preventDefault();const p=i.trim();if(!p)return;const g=[...o,{text:`at@arcane-shell:~$ ${p}`,type:"user"}],x=p.split(" ");switch(x[0].toLowerCase()){case"help":g.push({text:`AVAILABLE ARCANE COMMANDS:
  • help           - Show this help menu
  • about          - Display bio & education
  • skills         - Print technical skills & mastery
  • projects       - List major engineering works
  • gate           - Show GATE 2026 CS scorecard details
  • redislite      - Interactive C++ Key-Value store demo
                     Usage: redislite set <key> <value>
                            redislite get <key>
                            redislite keys
  • contact        - Display contact channels
  • clear          - Clear terminal history`,type:"output"});break;case"about":g.push({text:`NAME: Aditya Thapliyal
LOCATION: Dehradun, India
DEGREE: B.Tech CSE (4th Year) @ Graphic Era Hill University (CGPA 8.7/10)
SPECIALIZATION: C++ High Performance Systems, Full-Stack Web Development, Vector AI Microservices.`,type:"output"});break;case"skills":g.push({text:`LANGUAGES: C++17 (DSA/STL), JavaScript, SQL, Java, Python
WEB & BACKEND: React.js, Node.js, Express.js, FastAPI, HTML5/CSS3
DATABASES & VECTOR: MongoDB, MySQL, ChromaDB (Vector DB), MinIO
ML & DATA SCIENCE: SentenceTransformers, Pandas, NumPy, Scikit-learn`,type:"output"});break;case"projects":g.push({text:`1. Connect-V-2.0  [React + FastAPI + ChromaDB + MinIO]
   -> AI-powered team formation with dense vector cosine similarity.
2. RedisLite       [C++17 + STL + Custom Binary Serialization]
   -> In-memory key-value store with TTL min-heap & lazy expiration.
3. Esti-MATE       [Python + Scikit-learn + Flask + Streamlit]
   -> Bengaluru house price prediction with 84.52% R2 score.`,type:"output"});break;case"gate":g.push({text:`GATE 2026 (Computer Science & Information Technology)
Status: QUALIFIED
All India Rank (AIR): 5820
GATE Score: 529
Percentile: 97.24%`,type:"output"});break;case"redislite":if(x[1]==="set"&&x[2]&&x[3]){const b=x[2],A=x.slice(3).join(" ");u(D=>({...D,[b]:A})),g.push({text:`[RedisLite REPL] OK: Key '${b}' stored successfully in memory heap.`,type:"success"})}else if(x[1]==="get"&&x[2]){const b=x[2],A=l[b];A!==void 0?g.push({text:`[RedisLite REPL] "${A}"`,type:"success"}):g.push({text:`[RedisLite REPL] (nil) - Key '${b}' not found or expired.`,type:"error"})}else if(x[1]==="keys"){const b=Object.keys(l).join(", ");g.push({text:`[RedisLite REPL] Existing Keys: [ ${b} ]`,type:"output"})}else g.push({text:`[RedisLite C++ Store Usage]:
  • redislite set <key> <val>
  • redislite get <key>
  • redislite keys`,type:"output"});break;case"contact":g.push({text:`EMAIL: athapliyaal1234@gmail.com
PHONE: +91 8171349541
GITHUB: github.com/HYDRABLOOMER
LINKEDIN: linkedin.com/in/aditya-thapliyal
LEETCODE: leetcode.com/ADITYA_THAPLIYAL`,type:"output"});break;case"clear":t([]),r("");return;default:g.push({text:`Command not recognized: "${p}". Type "help" for available commands.`,type:"error"});break}t(g),r("")};return E.jsx("section",{id:"terminal",className:"py-20 relative",children:E.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3",children:[E.jsx(Ad,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"SYSTEM INTERACTIVE REPL"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"INTERACTIVE RUNIC TERMINAL"}),E.jsxs("p",{className:"text-xs text-slate-400 font-mono mt-2",children:["Try standard commands or test ",E.jsx("span",{className:"text-amber-400",children:"redislite set/get"})," C++ in-memory REPL commands below."]})]}),E.jsxs("div",{className:"arcane-card rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl",children:[E.jsxs("div",{className:"bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/80 inline-block"}),E.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500/80 inline-block"}),E.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500/80 inline-block"}),E.jsx("span",{className:"text-xs font-mono text-slate-400 ml-2",children:"aditya@arcane-system-shell ~ (zsh / c++)"})]}),E.jsxs("button",{onClick:()=>t([]),className:"text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors",children:[E.jsx(bS,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"Clear"})]})]}),E.jsxs("div",{className:"p-4 sm:p-6 bg-slate-950/95 font-mono text-xs sm:text-sm min-h-[320px] max-h-[450px] overflow-y-auto space-y-3",children:[o.map((m,p)=>E.jsx("div",{className:m.type==="user"?"text-amber-300 font-semibold":m.type==="success"?"text-teal-400":m.type==="error"?"text-rose-400":"text-slate-300 whitespace-pre-wrap",children:m.text},p)),E.jsx("div",{ref:d})]}),E.jsxs("form",{onSubmit:h,className:"bg-slate-900/90 border-t border-slate-800 px-4 py-3 flex items-center gap-2",children:[E.jsx("span",{className:"text-amber-400 font-mono font-bold text-xs sm:text-sm",children:"at@arcane-shell:~$"}),E.jsx("input",{type:"text",value:i,onChange:m=>r(m.target.value),placeholder:"Type 'help' or 'redislite set key val'...",className:"flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-600"}),E.jsx("button",{type:"submit",className:"text-amber-400 hover:text-amber-300 p-1",children:E.jsx(Gy,{className:"w-4 h-4"})})]})]})]})})}var wh={};(function o(t,i,r,l){var u=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!t.OffscreenCanvas)return!1;try{var F=new OffscreenCanvas(1,1),M=F.getContext("2d");M.fillRect(0,0,1,1);var V=F.transferToImageBitmap();M.createPattern(V,"no-repeat")}catch{return!1}return!0})();function m(){}function p(F){var M=i.exports.Promise,V=M!==void 0?M:t.Promise;return typeof V=="function"?new V(F):(F(m,m),null)}var g=(function(F,M){return{transform:function(V){if(F)return V;if(M.has(V))return M.get(V);var se=new OffscreenCanvas(V.width,V.height),k=se.getContext("2d");return k.drawImage(V,0,0),M.set(V,se),se},clear:function(){M.clear()}}})(h,new Map),x=(function(){var F=Math.floor(16.666666666666668),M,V,se={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(ee){var he=Math.random();return se[he]=requestAnimationFrame(function le(Te){k===Te||k+F-1<Te?(k=Te,delete se[he],ee()):se[he]=requestAnimationFrame(le)}),he},V=function(ee){se[ee]&&cancelAnimationFrame(se[ee])}):(M=function(ee){return setTimeout(ee,F)},V=function(ee){return clearTimeout(ee)}),{frame:M,cancel:V}})(),y=(function(){var F,M,V={};function se(k){function ee(he,le){k.postMessage({options:he||{},callback:le})}k.init=function(le){var Te=le.transferControlToOffscreen();k.postMessage({canvas:Te},[Te])},k.fire=function(le,Te,Ce){if(M)return ee(le,null),M;var Ue=Math.random().toString(36).slice(2);return M=p(function(Je){function et(Ye){Ye.data.callback===Ue&&(delete V[Ue],k.removeEventListener("message",et),M=null,g.clear(),Ce(),Je())}k.addEventListener("message",et),ee(le,Ue),V[Ue]=et.bind(null,{data:{callback:Ue}})}),M},k.reset=function(){k.postMessage({reset:!0});for(var le in V)V[le](),delete V[le]}}return function(){if(F)return F;if(!r&&u){var k=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{F=new Worker(URL.createObjectURL(new Blob([k])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}se(F)}return F}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(F,M){return M?M(F):F}function D(F){return F!=null}function S(F,M,V){return A(F&&D(F[M])?F[M]:b[M],V)}function _(F){return F<0?0:Math.floor(F)}function P(F,M){return Math.floor(Math.random()*(M-F))+F}function L(F){return parseInt(F,16)}function N(F){return F.map(W)}function W(F){var M=String(F).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:L(M.substring(0,2)),g:L(M.substring(2,4)),b:L(M.substring(4,6))}}function G(F){var M=S(F,"origin",Object);return M.x=S(M,"x",Number),M.y=S(M,"y",Number),M}function z(F){F.width=document.documentElement.clientWidth,F.height=document.documentElement.clientHeight}function q(F){var M=F.getBoundingClientRect();F.width=M.width,F.height=M.height}function U(F){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=F,M}function w(F,M,V,se,k,ee,he,le,Te){F.save(),F.translate(M,V),F.rotate(ee),F.scale(se,k),F.arc(0,0,1,he,le,Te),F.restore()}function j(F){var M=F.angle*(Math.PI/180),V=F.spread*(Math.PI/180);return{x:F.x,y:F.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:F.startVelocity*.5+Math.random()*F.startVelocity,angle2D:-M+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:F.color,shape:F.shape,tick:0,totalTicks:F.ticks,decay:F.decay,drift:F.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:F.gravity*3,ovalScalar:.6,scalar:F.scalar,flat:F.flat}}function de(F,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var V=M.tick++/M.totalTicks,se=M.x+M.random*M.tiltCos,k=M.y+M.random*M.tiltSin,ee=M.wobbleX+M.random*M.tiltCos,he=M.wobbleY+M.random*M.tiltSin;if(F.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-V)+")",F.beginPath(),d&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))F.fill($(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(ee-se)*.1,Math.abs(he-k)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var le=Math.PI/10*M.wobble,Te=Math.abs(ee-se)*.1,Ce=Math.abs(he-k)*.1,Ue=M.shape.bitmap.width*M.scalar,Je=M.shape.bitmap.height*M.scalar,et=new DOMMatrix([Math.cos(le)*Te,Math.sin(le)*Te,-Math.sin(le)*Ce,Math.cos(le)*Ce,M.x,M.y]);et.multiplySelf(new DOMMatrix(M.shape.matrix));var Ye=F.createPattern(g.transform(M.shape.bitmap),"no-repeat");Ye.setTransform(et),F.globalAlpha=1-V,F.fillStyle=Ye,F.fillRect(M.x-Ue/2,M.y-Je/2,Ue,Je),F.globalAlpha=1}else if(M.shape==="circle")F.ellipse?F.ellipse(M.x,M.y,Math.abs(ee-se)*M.ovalScalar,Math.abs(he-k)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):w(F,M.x,M.y,Math.abs(ee-se)*M.ovalScalar,Math.abs(he-k)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var I=Math.PI/2*3,Ut=4*M.scalar,tt=8*M.scalar,nt=M.x,Ve=M.y,mt=5,Fe=Math.PI/mt;mt--;)nt=M.x+Math.cos(I)*tt,Ve=M.y+Math.sin(I)*tt,F.lineTo(nt,Ve),I+=Fe,nt=M.x+Math.cos(I)*Ut,Ve=M.y+Math.sin(I)*Ut,F.lineTo(nt,Ve),I+=Fe;else F.moveTo(Math.floor(M.x),Math.floor(M.y)),F.lineTo(Math.floor(M.wobbleX),Math.floor(k)),F.lineTo(Math.floor(ee),Math.floor(he)),F.lineTo(Math.floor(se),Math.floor(M.wobbleY));return F.closePath(),F.fill(),M.tick<M.totalTicks}function ue(F,M,V,se,k){var ee=M.slice(),he=F.getContext("2d"),le,Te,Ce=p(function(Ue){function Je(){le=Te=null,he.clearRect(0,0,se.width,se.height),g.clear(),k(),Ue()}function et(){r&&!(se.width===l.width&&se.height===l.height)&&(se.width=F.width=l.width,se.height=F.height=l.height),!se.width&&!se.height&&(V(F),se.width=F.width,se.height=F.height),he.clearRect(0,0,se.width,se.height),ee=ee.filter(function(Ye){return de(he,Ye)}),ee.length?le=x.frame(et):Je()}le=x.frame(et),Te=Je});return{addFettis:function(Ue){return ee=ee.concat(Ue),Ce},canvas:F,promise:Ce,reset:function(){le&&x.cancel(le),Te&&Te()}}}function ye(F,M){var V=!F,se=!!S(M||{},"resize"),k=!1,ee=S(M,"disableForReducedMotion",Boolean),he=u&&!!S(M||{},"useWorker"),le=he?y():null,Te=V?z:q,Ce=F&&le?!!F.__confetti_initialized:!1,Ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function et(I,Ut,tt){for(var nt=S(I,"particleCount",_),Ve=S(I,"angle",Number),mt=S(I,"spread",Number),Fe=S(I,"startVelocity",Number),O=S(I,"decay",Number),R=S(I,"gravity",Number),ie=S(I,"drift",Number),ge=S(I,"colors",N),Ee=S(I,"ticks",Number),xe=S(I,"shapes"),je=S(I,"scalar"),we=!!S(I,"flat"),He=G(I),pt=nt,Re=[],Ge=F.width*He.x,We=F.height*He.y;pt--;)Re.push(j({x:Ge,y:We,angle:Ve,spread:mt,startVelocity:Fe,color:ge[pt%ge.length],shape:xe[P(0,xe.length)],ticks:Ee,decay:O,gravity:R,drift:ie,scalar:je,flat:we}));return Je?Je.addFettis(Re):(Je=ue(F,Re,Te,Ut,tt),Je.promise)}function Ye(I){var Ut=ee||S(I,"disableForReducedMotion",Boolean),tt=S(I,"zIndex",Number);if(Ut&&Ue)return p(function(Fe){Fe()});V&&Je?F=Je.canvas:V&&!F&&(F=U(tt),document.body.appendChild(F)),se&&!Ce&&Te(F);var nt={width:F.width,height:F.height};le&&!Ce&&le.init(F),Ce=!0,le&&(F.__confetti_initialized=!0);function Ve(){if(le){var Fe={getBoundingClientRect:function(){if(!V)return F.getBoundingClientRect()}};Te(Fe),le.postMessage({resize:{width:Fe.width,height:Fe.height}});return}nt.width=nt.height=null}function mt(){Je=null,se&&(k=!1,t.removeEventListener("resize",Ve)),V&&F&&(document.body.contains(F)&&document.body.removeChild(F),F=null,Ce=!1)}return se&&!k&&(k=!0,t.addEventListener("resize",Ve,!1)),le?le.fire(I,nt,mt):et(I,nt,mt)}return Ye.reset=function(){le&&le.reset(),Je&&Je.reset()},Ye}var ve;function B(){return ve||(ve=ye(null,{useWorker:!0,resize:!0})),ve}function $(F,M,V,se,k,ee,he){var le=new Path2D(F),Te=new Path2D;Te.addPath(le,new DOMMatrix(M));var Ce=new Path2D;return Ce.addPath(Te,new DOMMatrix([Math.cos(he)*k,Math.sin(he)*k,-Math.sin(he)*ee,Math.cos(he)*ee,V,se])),Ce}function Q(F){if(!d)throw new Error("path confetti are not supported in this browser");var M,V;typeof F=="string"?M=F:(M=F.path,V=F.matrix);var se=new Path2D(M),k=document.createElement("canvas"),ee=k.getContext("2d");if(!V){for(var he=1e3,le=he,Te=he,Ce=0,Ue=0,Je,et,Ye=0;Ye<he;Ye+=2)for(var I=0;I<he;I+=2)ee.isPointInPath(se,Ye,I,"nonzero")&&(le=Math.min(le,Ye),Te=Math.min(Te,I),Ce=Math.max(Ce,Ye),Ue=Math.max(Ue,I));Je=Ce-le,et=Ue-Te;var Ut=10,tt=Math.min(Ut/Je,Ut/et);V=[tt,0,0,tt,-Math.round(Je/2+le)*tt,-Math.round(et/2+Te)*tt]}return{type:"path",path:M,matrix:V}}function be(F){var M,V=1,se="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof F=="string"?M=F:(M=F.text,V="scalar"in F?F.scalar:V,k="fontFamily"in F?F.fontFamily:k,se="color"in F?F.color:se);var ee=10*V,he=""+ee+"px "+k,le=new OffscreenCanvas(ee,ee),Te=le.getContext("2d");Te.font=he;var Ce=Te.measureText(M),Ue=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),Je=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),et=2,Ye=Ce.actualBoundingBoxLeft+et,I=Ce.actualBoundingBoxAscent+et;Ue+=et+et,Je+=et+et,le=new OffscreenCanvas(Ue,Je),Te=le.getContext("2d"),Te.font=he,Te.fillStyle=se,Te.fillText(M,Ye,I);var Ut=1/V;return{type:"bitmap",bitmap:le.transferToImageBitmap(),matrix:[Ut,0,0,Ut,-Ue*Ut/2,-Je*Ut/2]}}i.exports=function(){return B().apply(this,arguments)},i.exports.reset=function(){B().reset()},i.exports.create=ye,i.exports.shapeFromPath=Q,i.exports.shapeFromText=be})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),wh,!1);const GA=wh.exports;wh.exports.create;function VA({onOpenResumeModal:o}){const[t,i]=Zt.useState(!1),[r,l]=Zt.useState(!1),[u,d]=Zt.useState({name:"",email:"",message:""}),[h,m]=Zt.useState(!1),p=()=>{navigator.clipboard.writeText("athapliyaal1234@gmail.com"),i(!0),setTimeout(()=>i(!1),2e3)},g=()=>{navigator.clipboard.writeText("+91 8171349541"),l(!0),setTimeout(()=>l(!1),2e3)},x=y=>{y.preventDefault(),!(!u.name||!u.email||!u.message)&&(m(!0),GA({particleCount:80,spread:70,origin:{y:.7},colors:["#dfb15b","#2dd4bf","#a855f7"]}),setTimeout(()=>{m(!1),d({name:"",email:"",message:""})},4e3))};return E.jsx("section",{id:"contact",className:"py-20 relative bg-slate-950/80",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3",children:[E.jsx(Ac,{className:"w-3.5 h-3.5"}),E.jsx("span",{children:"SUMMONING SHRINE"})]}),E.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100",children:"INITIATE CONTACT"}),E.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"})]}),E.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto",children:[E.jsxs("div",{className:"space-y-6",children:[E.jsxs("div",{className:"arcane-card p-6 sm:p-8 rounded-2xl",children:[E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 mb-2",children:"Let's Build Something Exceptional"}),E.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-8",children:"Open for full-stack engineering roles, systems C++ development, ML research collaborations, or technical discussions."}),E.jsxs("div",{className:"space-y-4 mb-8",children:[E.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-amber-500/20",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400",children:E.jsx(oS,{className:"w-5 h-5"})}),E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase",children:"Email Channel"}),E.jsx("span",{className:"block text-sm font-semibold text-slate-100",children:"athapliyaal1234@gmail.com"})]})]}),E.jsx("button",{onClick:p,className:"p-2 text-slate-400 hover:text-amber-400 transition-colors",title:"Copy Email",children:t?E.jsx(Zf,{className:"w-4 h-4 text-teal-400"}):E.jsx(yg,{className:"w-4 h-4"})})]}),E.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-teal-500/20",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400",children:E.jsx(hS,{className:"w-5 h-5"})}),E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase",children:"Phone / WhatsApp"}),E.jsx("span",{className:"block text-sm font-semibold text-slate-100",children:"+91 8171349541"})]})]}),E.jsx("button",{onClick:g,className:"p-2 text-slate-400 hover:text-teal-400 transition-colors",title:"Copy Phone Number",children:r?E.jsx(Zf,{className:"w-4 h-4 text-teal-400"}):E.jsx(yg,{className:"w-4 h-4"})})]}),E.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-purple-500/20",children:[E.jsx("div",{className:"w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400",children:E.jsx(cS,{className:"w-5 h-5"})}),E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase",children:"Current Location"}),E.jsx("span",{className:"block text-sm font-semibold text-slate-100",children:"Dehradun, Uttarakhand, India"})]})]})]}),E.jsxs("div",{children:[E.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase block mb-3",children:"Professional Profiles"}),E.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[E.jsxs("a",{href:"https://github.com/HYDRABLOOMER",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-xs font-medium",children:[E.jsx(E_,{className:"w-4 h-4 text-amber-400"}),E.jsx("span",{children:"GitHub"})]}),E.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-all text-xs font-medium",children:[E.jsx(rS,{className:"w-4 h-4 text-teal-400"}),E.jsx("span",{children:"LinkedIn"})]}),E.jsxs("a",{href:"https://leetcode.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-purple-500/40 hover:text-purple-300 transition-all text-xs font-medium",children:[E.jsx(M_,{className:"w-4 h-4 text-purple-400"}),E.jsx("span",{children:"LeetCode"})]})]})]})]}),E.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 flex items-center justify-between",children:[E.jsxs("div",{children:[E.jsx("h4",{className:"font-cinzel font-bold text-amber-300 text-base",children:"Aditya's Resume PDF"}),E.jsx("p",{className:"text-xs text-slate-300",children:"View or download complete resume document"})]}),E.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-md",children:[E.jsx(xs,{className:"w-4 h-4"}),E.jsx("span",{children:"Open PDF"})]})]})]}),E.jsxs("div",{className:"arcane-card p-6 sm:p-8 rounded-2xl",children:[E.jsx("h3",{className:"text-2xl font-bold font-cinzel text-slate-100 mb-2",children:"Send a Transmission"}),E.jsx("p",{className:"text-xs text-slate-400 mb-6",children:"Fill out the form below to reach Aditya directly."}),h?E.jsxs("div",{className:"p-6 rounded-xl bg-teal-500/10 border border-teal-500/40 text-center space-y-2 my-8",children:[E.jsx(Zf,{className:"w-10 h-10 text-teal-400 mx-auto"}),E.jsx("h4",{className:"font-cinzel text-lg font-bold text-teal-300",children:"Transmission Sent!"}),E.jsx("p",{className:"text-xs text-slate-300",children:"Thank you for reaching out. Aditya will get back to you shortly."})]}):E.jsxs("form",{onSubmit:x,className:"space-y-5",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-mono text-slate-300 uppercase mb-2",children:"Your Name"}),E.jsx("input",{type:"text",required:!0,value:u.name,onChange:y=>d({...u,name:y.target.value}),placeholder:"e.g. Alex Mercer",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-mono text-slate-300 uppercase mb-2",children:"Email Address"}),E.jsx("input",{type:"email",required:!0,value:u.email,onChange:y=>d({...u,email:y.target.value}),placeholder:"e.g. alex@company.com",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-mono text-slate-300 uppercase mb-2",children:"Message"}),E.jsx("textarea",{required:!0,rows:5,value:u.message,onChange:y=>d({...u,message:y.target.value}),placeholder:"Write your message or inquiry here...",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors resize-none"})]}),E.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(223,177,91,0.4)] hover:shadow-[0_0_28px_rgba(223,177,91,0.6)] transition-all",children:[E.jsx(mS,{className:"w-4 h-4"}),E.jsx("span",{children:"Transmit Message"})]})]})]})]})]})})}function kA({isOpen:o,onClose:t}){return o?E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md",children:E.jsxs("div",{className:"arcane-card max-w-4xl w-full h-[90vh] rounded-2xl flex flex-col relative border border-amber-500/50 shadow-2xl overflow-hidden",children:[E.jsxs("div",{className:"bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400",children:E.jsx(xs,{className:"w-4 h-4"})}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-cinzel font-bold text-slate-100 text-sm sm:text-base",children:"ADITYA THAPLIYAL — RESUME"}),E.jsx("span",{className:"text-[11px] font-mono text-amber-400/80",children:"ADITYA UL.pdf"})]})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs("a",{href:"./ADITYA UL.pdf",download:"Aditya_Thapliyal_Resume.pdf",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-md",children:[E.jsx(qy,{className:"w-3.5 h-3.5"}),E.jsx("span",{className:"hidden sm:inline",children:"Download PDF"})]}),E.jsx("a",{href:"./ADITYA UL.pdf",target:"_blank",rel:"noopener noreferrer",className:"p-2 text-slate-400 hover:text-amber-300 transition-colors",title:"Open in new tab",children:E.jsx(Yy,{className:"w-4 h-4"})}),E.jsx("button",{onClick:t,className:"p-2 text-slate-400 hover:text-amber-400 transition-colors",title:"Close modal",children:E.jsx(_h,{className:"w-5 h-5"})})]})]}),E.jsx("div",{className:"flex-1 bg-slate-900 w-full h-full relative",children:E.jsx("iframe",{src:"./ADITYA UL.pdf",title:"Aditya Thapliyal Resume PDF",className:"w-full h-full border-none"})})]})}):null}function jA(){const[o,t]=Zt.useState(!1);return E.jsxs("div",{className:"min-h-screen bg-[#08070c] text-slate-100 relative selection:bg-amber-500/30 selection:text-amber-200",children:[E.jsx(AS,{onOpenResumeModal:()=>t(!0)}),E.jsxs("main",{children:[E.jsx(PA,{onOpenResumeModal:()=>t(!0)}),E.jsx(zA,{}),E.jsx(IA,{}),E.jsx(BA,{}),E.jsx(FA,{}),E.jsx(HA,{}),E.jsx(VA,{onOpenResumeModal:()=>t(!0)})]}),E.jsx("footer",{className:"py-8 border-t border-slate-900 bg-[#050408] text-center text-xs text-slate-500 font-mono",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"font-cinzel text-amber-400 font-bold text-sm",children:"ADITYA THAPLIYAL"}),E.jsx("span",{children:"•"}),E.jsx("span",{children:"Arcane Tech Portfolio"})]}),E.jsx("div",{children:"Built with React, Three.js, Vite & Tailwind CSS. Designed for GitHub Pages."}),E.jsxs("div",{children:["© ",new Date().getFullYear()," Aditya Thapliyal. All rights reserved."]})]})}),E.jsx(kA,{isOpen:o,onClose:()=>t(!1)})]})}yy.createRoot(document.getElementById("root")).render(E.jsx(dy.StrictMode,{children:E.jsx(jA,{})}));
