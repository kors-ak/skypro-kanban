var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Gd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Gd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),tp._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[mt])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(Cu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=m({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=m({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(m({},Fn,{dataTransfer:0})),Rn=Dn(m({},An,{relatedTarget:0})),zn=Dn(m({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(m({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(m({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(m({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(m({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(m({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(m({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(m({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(m({},On,{newState:0,oldState:0})),j=[9,13,27,32],$n=_n&&`CompositionEvent`in window,M=null;_n&&`documentMode`in document&&(M=document.documentMode);var er=_n&&`TextEvent`in window&&!M,tr=_n&&(!$n||M&&8<M&&11>=M),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return j.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!$n&&ir(e,t)?(e=Cn(),Sn=xn=bn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=kd(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,N=null;function pr(e){Sd(e,0)}function mr(e){if(Ut(Tt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(_n){var _r;if(_n){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){fr&&(fr.detachEvent(`onpropertychange`,xr),N=fr=null)}function xr(e){if(e.propertyName===`value`&&mr(N)){var t=[];dr(t,N,e,un(e)),hn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),fr=t,N=n,fr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(N)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=_n&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Wt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=kd(Ir,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};_n&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),At(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Kf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=pi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=pi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ge(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,zi=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Y(bd[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Fd(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Ri=Ri.return}}function Ki(e){if(e!==Ri)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Kd(e.type,e.memoizedProps)),n=!n),n&&zi&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=pf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=pf(e)}else t===27?(t=zi,ef(e.type)?(e=ff,ff=null,zi=e):zi=t):zi=Ri?df(e.stateNode.nextSibling):null;return!0}function qi(){zi=Ri=null,P=!1}function Ji(){var e=Bi;return e!==null&&(eu===null?eu=e:eu.push.apply(eu,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=de(null),Zi=null,Qi=null;function $i(e,t,n){A(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,fe(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[tp]:e.push(tp))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=md(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=O.S;O.S=function(e,t){ru=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=de(null);function wa(){var e=Ca.current;return e===null?H.pooledCache:e}function Ta(e,t){t===null?A(Ca,Ca.current):A(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:fa._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=H,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case D:return t=Na(t),f(e,t,n)}if(se(t)||ie(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Na(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Na(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Na(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function F(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(W&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=de(null),ro=de(0);function io(e,t){e=Jl,A(ro,e),A(no,t),Jl=e|t.baseLanes}function ao(){A(ro,Jl),A(no,no.current)}function oo(){Jl=ro.current,fe(no),fe(ro)}var so=de(null),co=null;function lo(e){var t=e.alternate;A(ho,ho.current&1),A(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){A(ho,ho.current),A(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(A(ho,ho.current),A(so,e),co===null&&(co=e)):po(e)}function po(){A(ho,ho.current),A(so,so.current)}function mo(e){fe(so),co===e&&(co=null),fe(ho)}var ho=de(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cf(n)||lf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function To(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ws:Gs,bo=!1,a=n(r,i),bo=!1,yo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){O.H=Us;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||sc||(e=e.dependencies,e!==null&&ia(e)&&(sc=!0))}function ko(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Ks,o=t(n,r)}while(yo);return o}function Ao(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function jo(){var e=xo!==0;return xo=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function Fo(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(Fo(),L,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Yl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(sc=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(sc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=I,a=Fo(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,sc=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),H===null)throw Error(i(349));o||_o&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Io(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Yo(e){var t=ci(e,2);t!==null&&vu(t,e,2)}function Xo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),bo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,L,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(P){var n=H.formState;if(n!==null){a:{var r=I;if(P){if(zi){b:{for(var i=zi,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=df(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){zi=df(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,I,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,I,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(Fo(),L,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===Da?ka:e}else r=t;t=Fo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=Fo(),n=L;if(n!==null)return ss(t,n,e);Fo(),t=t.memoizedState,n=Fo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Io(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return Fo().memoizedState}function fs(e,t,n,r){var i=Po();I.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&Eo(r,L.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(I.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Io(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=Fo().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(V&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||_o&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),I.lanes|=e,Yl|=e,n)}function Es(e,t,n,r){return Dr(n,t)?n:no.current===null?!(_o&42)||_o&1073741824&&!(W&261930)?(sc=!0,e.memoizedState=n):(e=_u(),I.lanes|=e,Yl|=e,t):(e=Ts(e,n,r),Dr(e,t)||(sc=!0),e)}function Ds(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,zs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,xa(c,r),gu(e)):Rs(e,t,r,gu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ce,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},gu())}function Ms(){return oa(tp)}function Ns(){return Fo().memoizedState}function Ps(){return Fo().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(vu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=si(e,t,n,r),n!==null&&(vu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,gu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),H===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return vu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&vu(t,e,2)}function Bs(e){var t=e.alternate;return e===I||t!==null&&t===I}function Vs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Us={readContext:oa,use:Ro,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To};Us.useEffectEvent=To;var Ws={readContext:oa,use:Ro,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(bo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Po(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,I,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=Po();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),H===null)throw Error(i(349));W&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=H.identifierPrefix;if(P){var n=Mi,r=ji;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Po().memoizedState=Fs.bind(null,I)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(V&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:oa,use:Ro,useCallback:Cs,useContext:oa,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(Fo(),L.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(Fo(),L,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:oa,use:Ro,useCallback:Cs,useContext:oa,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=Fo();return L===null?Ts(n,e,t):Es(n,L.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=Fo();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,L,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(vu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(vu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(vu(t,e,n),Xa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function z(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ti(e)}function Qs(e){console.error(e)}function $s(e){ti(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ja(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Au():n.alternate===null&&K===0&&(K=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Au(),!1}if(P)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=nc(e.stateNode,r,a),Za(e,a),K!==4&&(K=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),$l===null?$l=[o]:$l.push(o),K!==4&&(K=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),sc=!1;function cc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!sc?(Mo(e,t,i),Nc(e,t,i)):(P&&s&&Fi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(sc=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(sc=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),ao(),po(t)):(Ta(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),ao(),fo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ua(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(uo(t),(e=zi)?(e=sf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,zi=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(sc||ra(e,t,n,!1),a=(n&e.childLanes)!==0,sc||a){if(r=H,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),vu(r,e,s),oc;Au(),t=gc(e,t,n)}else e=o.treeContext,zi=df(s.nextSibling),Ri=t,P=!0,Bi=null,Vi=!1,e!==null&&Li(t,e),t=hc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return aa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!sc?(Mo(e,t,i),Nc(e,t,i)):(P&&r&&Fi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!sc?(Mo(e,t,a),Nc(e,t,a)):(P&&r&&Fi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),F(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&z(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,F(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=Ga||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&z(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,F(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=Ga||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return qi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Ea()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Zl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ho.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?lo(t):po(t),(e=zi)?(e=sf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,zi=null)):e=null,e===null)throw Ui(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(lo(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),lf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(sc||ra(e,t,n,!1),s=(n&e.childLanes)!==0,sc||s){if(s=H,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),vu(s,e,r),oc;cf(c)||Au(),t=kc(e,t,n)}else cf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,zi=df(c.nextSibling),Ri=t,P=!0,Bi=null,Vi=!1,e!==null&&Li(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Ea():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ua(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ho.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(ho,o),cc(e,t,r,n),r=P?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(ho,ho.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)sc=!0;else{if(!Pc(e,n)&&!(t.flags&128))return sc=!1,Fc(e,t,n);sc=!!(e.flags&131072)}else sc=!1,P&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Xs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),F(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Yi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(zi=df(e.firstChild),Ri=t,P=!0,Bi=null,Vi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Ud(he.current).createElement(n),r[mt]=t,r[ht]=e,Ld(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&P&&(r=t.stateNode=hf(t.type,t.pendingProps,he.current),Ri=t,Vi=!0,a=zi,ef(t.type)?(ff=a,zi=df(r.firstChild)):zi=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=zi)&&(r=af(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,Ri=t,zi=df(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Kd(a,o)?r=null:s!==null&&Kd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),tp._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=zi)&&(n=of(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,Ri=t,zi=null,e=!0)),e||Ui(t)),null;case 13:return Ec(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=wa(),a===null&&(a=H,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),$i(t,fa,a)):((e.lanes&n)!==0&&(qa(e,t),F(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qf(t))if(Du())e.flags|=8192;else throw Pa=Aa,Oa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Ql|=t)}function Vc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=pe.current,Ki(t)?Wi(t,e):(e=hf(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=pe.current,Ki(t))Wi(t,o);else{var s=Ud(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Ld(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Fd(e.nodeValue,n)),e||Ui(t,!0)}else e=Ud(e).createTextNode(r),e[mt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ve(),e===null&&Td(t.stateNode.containerInfo),B(t),null;case 10:return ea(t.type),B(t),null;case 19:if(fe(ho),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return A(ho,ho.current&1|2),P&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>iu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return B(t),null}else 2*Ne()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=ho.current,A(ho,a?n&1|2:n&1),P&&Ni(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ho),null;case 4:return ve(),null;case 10:return ea(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&fe(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Wc(e,t){switch(Ii(t),t.tag){case 3:ea(fa),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:fe(ho);break;case 10:ea(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&fe(Ca);break;case 24:ea(fa)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){J(e,e.return,t)}}}function Jc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[ht]=t}catch(t){J(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ef(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ef(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[mt]=e,t[ht]=n}catch(t){J(e,e.return,t)}}var il=!1,al=!1,ol=!1,sl=typeof WeakSet==`function`?WeakSet:Set,cl=null;function ll(e,t){if(e=e.containerInfo,Vd=Z,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},Z=!1,cl=t;cl!==null;)if(t=cl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,cl=e;else for(;cl!==null;){switch(t=cl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:rf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,cl=e;break}cl=t.return}}function ul(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Tl(e,n),r&4&&Gc(5,n);break;case 1:if(Tl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Tl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Tl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Tl(e,n);break;case 31:Tl(e,n),r&4&&gl(e,n);break;case 13:Tl(e,n),r&4&&_l(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),uf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||al,i=il;var a=al;il=r,(al=t)&&!a?Dl(e,n,(n.subtreeFlags&8772)!=0):Tl(e,n),il=i,al=a}break;case 30:break;default:Tl(e,n)}}function dl(e){var t=e.alternate;t!==null&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fl=null,pl=!1;function ml(e,t,n){for(n=n.child;n!==null;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:al||Xc(n,t),ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:al||Xc(n,t);var r=fl,i=pl;ef(n.type)&&(fl=n.stateNode,pl=!1),ml(e,t,n),gf(n.stateNode),fl=r,pl=i;break;case 5:al||Xc(n,t);case 6:if(r=fl,i=pl,fl=null,ml(e,t,n),fl=r,pl=i,fl!==null)if(pl)try{(fl.nodeType===9?fl.body:fl.nodeName===`HTML`?fl.ownerDocument.body:fl).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{fl.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:fl!==null&&(pl?(e=fl,tf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):tf(fl,n.stateNode));break;case 4:r=fl,i=pl,fl=n.stateNode.containerInfo,pl=!0,ml(e,t,n),fl=r,pl=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),al||Kc(4,n,t),ml(e,t,n);break;case 1:al||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),ml(e,t,n);break;case 21:ml(e,t,n);break;case 22:al=(r=al)||n.memoizedState!==null,ml(e,t,n),al=r;break;default:ml(e,t,n)}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){J(t,t.return,e)}}}function _l(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){J(t,t.return,e)}}function vl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sl),t;default:throw Error(i(435,e.tag))}}function yl(e,t){var n=vl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function bl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ef(c.type)){fl=c.stateNode,pl=!1;break a}break;case 5:fl=c.stateNode,pl=!1;break a;case 3:case 4:fl=c.stateNode.containerInfo,pl=!0;break a}c=c.return}if(fl===null)throw Error(i(160));hl(o,s,a),fl=null,pl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sl(t,e),t=t.sibling}var xl=null;function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bl(t,e),Cl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=xl;if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Ld(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Wf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Wf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Gf(a,e.type,e.stateNode);else e.stateNode=zf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Gf(a,e.type,e.stateNode):zf(a,r,e.memoizedProps))}break;case 27:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(ol=!0);break;case 6:if(bl(t,e),Cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Uf=null,a=xl,xl=yf(t.containerInfo),bl(t,e),xl=a,Cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){J(e,e.return,t)}ol&&(ol=!1,wl(e));break;case 4:r=xl,xl=yf(e.stateNode.containerInfo),bl(t,e),Cl(e),xl=r;break;case 12:bl(t,e),Cl(e);break;case 31:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 13:bl(t,e),Cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=al;if(il=u||a,al=d||l,bl(t,e),al=d,il=u,Cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||al||El(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?nf(m,!0):nf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,yl(e,n))));break;case 19:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 30:break;case 21:break;default:bl(t,e),Cl(e)}}function Cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ul(e,t.alternate,t),t=t.sibling}function El(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),El(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),El(t);break;case 27:gf(t.stateNode);case 26:case 5:Xc(t,t.return),El(t);break;case 22:t.memoizedState===null&&El(t);break;case 30:El(t);break;default:El(t)}e=e.sibling}}function Dl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Dl(i,a,n),Gc(4,a);break;case 1:if(Dl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:Dl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:Dl(i,a,n);break;case 31:Dl(i,a,n),n&&o&4&&gl(i,a);break;case 13:Dl(i,a,n),n&&o&4&&_l(i,a);break;case 22:a.memoizedState===null&&Dl(i,a,n),Yc(a,a.return);break;case 30:break;default:Dl(i,a,n)}t=t.sibling}}function Ol(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function kl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function Al(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jl(e,t,n,r),t=t.sibling}function jl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Al(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Al(e,t,n,r);break;case 3:Al(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){Al(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Al(e,t,n,r);break;case 31:Al(e,t,n,r);break;case 13:Al(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Al(e,t,n,r):(a._visibility|=2,Ml(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Al(e,t,n,r):Nl(e,t),i&2048&&Ol(o,t);break;case 24:Al(e,t,n,r),i&2048&&kl(t.alternate,t);break;default:Al(e,t,n,r)}}function Ml(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ml(a,o,s,c,i)):u._visibility&2?Ml(a,o,s,c,i):Nl(a,o),i&&l&2048&&Ol(o.alternate,o);break;case 24:Ml(a,o,s,c,i),i&&l&2048&&kl(o.alternate,o);break;default:Ml(a,o,s,c,i)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Nl(n,r),i&2048&&Ol(r.alternate,r);break;case 24:Nl(n,r),i&2048&&kl(r.alternate,r);break;default:Nl(n,r)}t=t.sibling}}var Pl=8192;function Fl(e,t,n){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Il(e,t,n),e=e.sibling}function Il(e,t,n){switch(e.tag){case 26:Fl(e,t,n),e.flags&Pl&&e.memoizedState!==null&&Jf(n,xl,e.memoizedState,e.memoizedProps);break;case 5:Fl(e,t,n);break;case 3:case 4:var r=xl;xl=yf(e.stateNode.containerInfo),Fl(e,t,n),xl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pl,Pl=16777216,Fl(e,t,n),Pl=r):Fl(e,t,n));break;default:Fl(e,t,n)}}function Ll(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Vl(r,e)}Ll(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zl(e),e=e.sibling}function zl(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bl(e)):Rl(e);break;default:Rl(e)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Vl(r,e)}Ll(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bl(t));break;default:Bl(t)}e=e.sibling}}function Vl(e,t){for(;cl!==null;){var n=cl;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cl=r;else a:for(n=e;cl!==null;){r=cl;var i=r.sibling,a=r.return;if(dl(r),r===n){cl=null;break a}if(i!==null){i.return=a,cl=i;break a}cl=a}}}var Hl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},Ul=typeof WeakMap==`function`?WeakMap:Map,V=0,H=null,U=null,W=0,G=0,Wl=null,Gl=!1,Kl=!1,ql=!1,Jl=0,K=0,Yl=0,Xl=0,q=0,Zl=0,Ql=0,$l=null,eu=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return V&2&&W!==0?W&-W:O.T===null?dt():md()}function _u(){if(Zl===0)if(!(W&536870912)||P){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Zl=e}else Zl=536870912;return e=so.current,e!==null&&(e.flags|=32),Zl}function vu(e,t,n){(e===H&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,W,Zl,!1)),it(e,n),(!(V&2)||e!==H)&&(e===H&&(!(V&2)&&(Xl|=n),K===4&&Su(e,W,Zl,!1)),od(e))}function yu(e,t,n){if(V&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Kl&&!r&&Su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=$l;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(ql&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,a=4;break a}o=eu,eu=a,o!==null&&(eu===null?eu=o:eu.push.apply(eu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Zl,!Gl);break a;case 2:eu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-Ne(),10<a)){if(Su(r,t,Zl,!Gl),$e(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Yd(bu.bind(null,r,n,eu,au,tu,t,Zl,Xl,Ql,Gl,o,`Throttled`,-0,0),a);break a}bu(r,n,eu,au,tu,t,Zl,Xl,Ql,Gl,o,null,-0,0)}}break}while(1);od(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Il(t,a,d);var m=(a&62914560)===a?nu-Ne():(a&4194048)===a?ru-Ne():0;if(m=Xf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~q,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function Cu(){return V&6?!0:(sd(0,!1),!1)}function wu(){if(U!==null){if(G===0)var e=U.return;else e=U,Qi=Zi=null,No(e),La=null,Ra=0,e=U;for(;e!==null;)Wc(e.alternate,e),e=e.return;U=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),H=e,U=n=hi(e.current,null),W=t,G=0,Wl=null,Gl=!1,Kl=et(e,t),ql=!1,Ql=Zl=q=Xl=Yl=K=0,eu=$l=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Jl=t,ai(),n}function Eu(e,t){I=null,O.H=Us,t===Da||t===ka?(t=Fa(),G=3):t===Oa?(t=Fa(),G=4):G=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Wl=t,U===null&&(K=1,ec(e,Ci(t,e.current)))}function Du(){var e=so.current;return e===null?!0:(W&4194048)===W?co===null:(W&62914560)===W||W&536870912?e===co:!1}function Ou(){var e=O.H;return O.H=Us,e===null?Us:e}function ku(){var e=O.A;return O.A=Hl,e}function Au(){K=4,Gl||(W&4194048)!==W&&so.current!==null||(Kl=!0),!(Yl&134217727)&&!(Xl&134217727)||H===null||Su(H,W,Zl,!1)}function ju(e,t,n){var r=V;V|=2;var i=Ou(),a=ku();(H!==e||W!==t)&&(au=null,Tu(e,t)),t=!1;var o=K;a:do try{if(G!==0&&U!==null){var s=U,c=Wl;switch(G){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=G;if(G=0,Wl=null,Lu(e,s,c,l),n&&Kl){o=0;break a}break;default:l=G,G=0,Wl=null,Lu(e,s,c,l)}}Mu(),o=K;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,V=r,O.H=i,O.A=a,U===null&&(H=null,W=0,ai()),o}function Mu(){for(;U!==null;)Fu(U)}function Nu(e,t){var n=V;V|=2;var r=Ou(),a=ku();H!==e||W!==t?(au=null,iu=Ne()+500,Tu(e,t)):Kl=et(e,t);a:do try{if(G!==0&&U!==null){t=U;var o=Wl;b:switch(G){case 1:G=0,Wl=null,Lu(e,t,o,1);break;case 2:case 9:if(ja(o)){G=0,Wl=null,Iu(t);break}t=function(){G!==2&&G!==9||H!==e||(G=7),od(e)},o.then(t,t);break a;case 3:G=7;break a;case 4:G=5;break a;case 7:ja(o)?(G=0,Wl=null,Iu(t)):(G=0,Wl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?qf(s):c.stateNode.complete){G=0,Wl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,Ru(u))}break b}}G=0,Wl=null,Lu(e,t,o,5);break;case 6:G=0,Wl=null,Lu(e,t,o,6);break;case 8:wu(),K=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Qi=Zi=null,O.H=r,O.A=a,V=n,U===null?(H=null,W=0,ai(),K):0}function Pu(){for(;U!==null&&!je();)Fu(U)}function Fu(e){var t=Ic(e.alternate,e,Jl);e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:No(t);default:Wc(n,t),t=U=gi(t,Jl),t=Ic(n,t,Jl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Lu(e,t,n,r){Qi=Zi=null,No(t),La=null,Ra=0;var i=t.return;try{if(ac(e,i,t,n,W)){K=1,ec(e,Ci(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;K=1,ec(e,Ci(n,e.current)),U=null;return}t.flags&32768?(P||r===1?e=!0:Kl||W&536870912?e=!1:(Gl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Gl);return}e=t.return;var n=Hc(t.alternate,t,Jl);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);K===0&&(K=5)}function zu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);K=6,U=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(su!==0);if(V&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,at(e,n,o,s,c,l),e===H&&(U=H=null,W=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Le,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=V,V|=4;try{ll(e,t,n)}finally{V=s,k.p=a,O.T=r}}su=1,Vu(),Hu(),Uu()}}function Vu(){if(su===1){su=0;var e=cu,t=lu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=V;V|=4;try{Sl(t,e);var a=Hd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Z=!!Vd,Hd=Vd=null}finally{V=i,k.p=r,O.T=n}}e.current=t,su=2}}function Hu(){if(su===2){su=0;var e=cu,t=lu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=V;V|=4;try{ul(e,t.alternate,t)}finally{V=i,k.p=r,O.T=n}}su=3}}function Uu(){if(su===4||su===3){su=0,Me();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}uu&3&&Gu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,sd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=ut(uu),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,V&6)throw Error(i(331));var c=V;if(V|=4,zl(o.current),jl(o,o.current,s,n),V=c,sd(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{k.p=a,O.T=r,Wu(e,t)}}function qu(e,t,n){t=Ci(n,t),t=nc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(it(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=Ci(n,e),n=rc(2),r=Ya(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ul;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ql=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,H===e&&(W&n)===n&&(K===4||K===3&&(W&62914560)===W&&300>Ne()-nu?!(V&2)&&Tu(e,0):q|=n,Ql===W&&(Ql=0)),od(e)}function Xu(e,t){t===0&&(t=nt()),e=ci(e,t),e!==null&&(it(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return ke(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=W,a=$e(r,r===H?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,fd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Jd()&&(e=ad);for(var t=Ne(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}su!==0&&su!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=H,n=W,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=dd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=W;return r=$e(e,e===H?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),ud(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(Gu())return null;yu(e,t,!0)}function pd(){Qd(function(){V&6?ke(Fe,cd):ld()})}function md(){if(ad===0){var e=_a;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<$r.length;vd++){var yd=$r[vd];ei(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var wd=`_reactListening`+Math.random().toString(36).slice(2);function Td(e){if(!e[wd]){e[wd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||Cd(t,!1,e),Cd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wd]||(t[wd]=!0,Cd(`selectionchange`,!1,t))}}function Ed(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Gr:case Kr:case qr:l=zn;break;case Zr:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Od(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ad,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&jd(s,c,l,d,!1),u!==null&&f!==null&&jd(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(ur(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,or=!0)),y=kd(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=kd(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function Od(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Od(e,i,a)),i=gn(e,t),i!=null&&r.push(Od(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ad(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Od(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Od(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function Pd(e){return(typeof e==`string`?e:``+e).replace(Md,`
`).replace(Nd,``)}function Fd(e,t){return t=Pd(t),Pd(e)===t}function X(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,a.name,a,null),X(e,t,`formEncType`,a.formEncType,a,null),X(e,t,`formMethod`,a.formMethod,a,null),X(e,t,`formTarget`,a.formTarget,a,null)):(X(e,t,`encType`,a.encType,a,null),X(e,t,`method`,a.method,a,null),X(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Id(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,o,s,n,null)}}a&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:X(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:X(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:X(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Y(bd[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||X(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&X(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&X(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Vd=null,Hd=null;function Ud(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qd=null;function Jd(){var e=window.event;return e&&e.type===`popstate`?e===qd?!1:(qd=e,!0):(qd=null,!1)}var Yd=typeof setTimeout==`function`?setTimeout:void 0,Xd=typeof clearTimeout==`function`?clearTimeout:void 0,Zd=typeof Promise==`function`?Promise:void 0,Qd=typeof queueMicrotask==`function`?queueMicrotask:Zd===void 0?Yd:function(e){return Zd.resolve(null).then(e).catch($d)};function $d(e){setTimeout(function(){throw e})}function ef(e){return e===`head`}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)gf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,gf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&gf(e.ownerDocument.body);n=i}while(n);Pp(t)}function nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function rf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rf(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function af(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=df(e.nextSibling),e===null)break}return null}function of(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=df(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=df(e.nextSibling),e===null))return null;return e}function cf(e){return e.data===`$?`||e.data===`$~`}function lf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function uf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function df(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var ff=null;function pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return df(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hf(e,t,n){switch(t=Ud(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var _f=new Map,vf=new Set;function yf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bf=k.d;k.d={f:xf,r:Sf,D:Tf,C:Ef,L:Df,m:Of,X:Af,S:kf,M:jf};function xf(){var e=bf.f(),t=Cu();return e||t}function Sf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):bf.r(e)}var Cf=typeof document>`u`?null:document;function wf(e,t,n){var r=Cf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),vf.has(i)||(vf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e){bf.D(e),wf(`dns-prefetch`,e,null)}function Ef(e,t){bf.C(e,t),wf(`preconnect`,e,t)}function Df(e,t,n){bf.L(e,t,n);var r=Cf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Nf(e);break;case`script`:a=Lf(e)}_f.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),_f.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Pf(a))||t===`script`&&r.querySelector(Rf(a))||(t=r.createElement(`link`),Ld(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Of(e,t){bf.m(e,t);var n=Cf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Lf(e)}if(!_f.has(a)&&(e=m({rel:`modulepreload`,href:e},t),_f.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Rf(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function kf(e,t,n){bf.S(e,t,n);var r=Cf;if(r&&e){var i=Et(r).hoistableStyles,a=Nf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Pf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=_f.get(a))&&Vf(e,n);var c=o=r.createElement(`link`);Dt(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Bf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Af(e,t){bf.X(e,t);var n=Cf;if(n&&e){var r=Et(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=m({src:e,async:!0},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),Dt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t){bf.M(e,t);var n=Cf;if(n&&e){var r=Et(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),Dt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t,n,r){var a=(a=he.current)?yf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Nf(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Nf(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Pf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_f.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_f.set(e,n),o||If(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Lf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Nf(e){return`href="`+Kt(e)+`"`}function Pf(e){return`link[rel="stylesheet"][`+e+`]`}function Ff(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function If(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),Dt(t),e.head.appendChild(t))}function Lf(e){return`[src="`+Kt(e)+`"]`}function Rf(e){return`script[async]`+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Ld(r,`style`,a),Bf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Nf(n.href);var o=e.querySelector(Pf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Ff(n),(a=_f.get(a))&&Vf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(o,`link`,r),t.state.loading|=4,Bf(o,n.precedence,e),t.instance=o;case`script`:return o=Lf(n.src),(a=e.querySelector(Rf(o)))?(t.instance=a,Dt(a),a):(r=n,(a=_f.get(o))&&(r=m({},n),Hf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Ld(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Bf(r,n.precedence,e));return t.instance}function Bf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Uf=null;function Wf(e,t,n){if(Uf===null){var r=new Map,i=Uf=new Map;i.set(n,r)}else i=Uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Kf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function qf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Jf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Nf(r.href),a=t.querySelector(Pf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Zf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Ff(r),(i=_f.get(i))&&Vf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Zf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Yf=0;function Xf(e,t){return e.stylesheets&&e.count===0&&$f(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Yf===0&&(Yf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qf=null;function $f(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qf=new Map,t.forEach(ep,e),Qf=null,Zf.call(e))}function ep(e,t){if(!(t.state.loading&4)){var n=Qf.get(e);if(n)var r=n.get(null);else{n=new Map,Qf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Zf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var tp={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function np(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function rp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new np(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function ip(e){return e?(e=di,e):di}function ap(e,t,n,r,i,a){i=ip(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(vu(n,e,t),Xa(n,e,t))}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sp(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function cp(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&vu(t,e,67108864),sp(e,67108864)}}function lp(e){if(e.tag===13||e.tag===31){var t=gu();t=lt(t);var n=ci(e,t);n!==null&&vu(n,e,t),sp(e,t)}}var Z=!0;function up(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,fp(e,t,n,r)}finally{k.p=a,O.T=i}}function dp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,fp(e,t,n,r)}finally{k.p=a,O.T=i}}function fp(e,t,n,r){if(Z){var i=pp(r);if(i===null)Dd(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}od(a),!(V&6)&&(iu=Ne()+500,sd(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&vu(s,a,2),Cu(),sp(a,2)}if(a=pp(r),a===null&&Dd(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}function pp(e){return e=un(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){lp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&cp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function Q(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Q)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp!==null&&jp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ap(n,gu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ap(e.current,2,null,e,null,null),Cu(),t[gt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var Rp=n.version;if(Rp!==`19.2.5`)throw Error(i(527,Rp,`19.2.5`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{He=Bp.inject(zp),Ue=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[gt]=t.current,Td(e),new Ip(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/skypro-kanban/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=y(t,n),t=s(t),t in b)return;b[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:v,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ie(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ne(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:re(t))}function r(e,t){E(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ae(t,n,r,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||D(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function se(e,t,n=`/`){return O(e,t,n,!1)}function O(e,t,n,r,i){let a=we((typeof t==`string`?ie(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Ce(a);for(let e=0;s==null&&e<o.length;++e)s=be(o[e],c,r);return s}function k(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e){let t=le(e);return de(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ne([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,A=3,pe=2,me=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=pe),n.filter(e=>!_e(e)).reduce((e,t)=>e+(fe.test(t)?A:t===``?me:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ne([a,u.pathname]),pathnameBase:Fe(Ne([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ne([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ee(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=Me(n),a=n.startsWith(`/`)?De(n.substring(1),`/`):De(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function De(e,t){let n=Pe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Oe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ke(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ae(e){let t=ke(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function je(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Oe(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Oe(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Oe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ee(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Me=e=>e.replace(/\/\/+/g,`/`),Ne=e=>Me(e.join(`/`)),Pe=e=>e.replace(/\/+$/,``),Fe=e=>Pe(e).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Be(e){return Ne(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ve=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function He(e,t){let n=e;if(typeof n!=`string`||!Te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ve)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=we(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ue=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ue);var We=[`GET`,...Ue];new Set(We);var Ge=S.createContext(null);Ge.displayName=`DataRouter`;var Ke=S.createContext(null);Ke.displayName=`DataRouterState`;var qe=S.createContext(!1);function Je(){return S.useContext(qe)}var Ye=S.createContext({isTransitioning:!1});Ye.displayName=`ViewTransition`;var Xe=S.createContext(new Map);Xe.displayName=`Fetchers`;var Ze=S.createContext(null);Ze.displayName=`Await`;var Qe=S.createContext(null);Qe.displayName=`Navigation`;var $e=S.createContext(null);$e.displayName=`Location`;var et=S.createContext({outlet:null,matches:[],isDataRoute:!1});et.displayName=`Route`;var tt=S.createContext(null);tt.displayName=`RouteError`;var nt=`REACT_ROUTER_ERROR`,rt=`REDIRECT`,it=`ROUTE_ERROR_RESPONSE`;function at(e){if(e.startsWith(`${nt}:${rt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ot(e){if(e.startsWith(`${nt}:${it}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function st(e,{relative:t}={}){T(ct(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(Qe),{hash:i,pathname:a,search:o}=_t(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ne([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ct(){return S.useContext($e)!=null}function lt(){return T(ct(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext($e).location}var ut=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function dt(e){S.useContext(Qe).static||S.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=S.useContext(et);return e?It():pt()}function pt(){T(ct(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Ge),{basename:t,navigator:n}=S.useContext(Qe),{matches:r}=S.useContext(et),{pathname:i}=lt(),a=JSON.stringify(Ae(r)),o=S.useRef(!1);return dt(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(E(o.current,ut),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=je(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ne([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var mt=S.createContext(null);function ht(e){let t=S.useContext(et).outlet;return S.useMemo(()=>t&&S.createElement(mt.Provider,{value:e},t),[t,e])}function gt(){let{matches:e}=S.useContext(et);return e[e.length-1]?.params??{}}function _t(e,{relative:t}={}){let{matches:n}=S.useContext(et),{pathname:r}=lt(),i=JSON.stringify(Ae(n));return S.useMemo(()=>je(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function vt(e,t){return yt(e,t)}function yt(e,t,n){T(ct(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(Qe),{matches:i}=S.useContext(et),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Rt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=lt(),d;if(t){let e=typeof t==`string`?ie(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):se(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Et(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ne([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ne([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement($e.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function bt(){let e=Ft(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var xt=S.createElement(bt,null),St=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ot(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(et.Provider,{value:this.props.routeContext},S.createElement(tt.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(wt,{error:e},t):t}};St.contextType=qe;var Ct=new WeakMap;function wt({children:e,error:t}){let{basename:n}=S.useContext(Qe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=at(t.digest);if(e){let r=Ct.get(t);if(r)throw r;let i=He(e.location,n);if(Ve&&!Ct.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ct.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Tt({routeContext:e,match:t,children:n}){let r=S.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(et.Provider,{value:e},n)}function Et(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Be(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||xt,o&&(s<0&&c===0?(Rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(Tt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(St,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Dt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ot(e){let t=S.useContext(Ge);return T(t,Dt(e)),t}function kt(e){let t=S.useContext(Ke);return T(t,Dt(e)),t}function At(e){let t=S.useContext(et);return T(t,Dt(e)),t}function jt(e){let t=At(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Mt(){return jt(`useRouteId`)}function Nt(){let e=kt(`useNavigation`);return S.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Pt(){let{matches:e,loaderData:t}=kt(`useMatches`);return S.useMemo(()=>e.map(e=>k(e,t)),[e,t])}function Ft(){let e=S.useContext(tt),t=kt(`useRouteError`),n=jt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function It(){let{router:e}=Ot(`useNavigate`),t=jt(`useNavigate`),n=S.useRef(!1);return dt(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{E(n.current,ut),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Lt={};function Rt(e,t,n){!t&&!Lt[e]&&(Lt[e]=!0,E(!1,n))}S.memo(zt);function zt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return yt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Bt({to:e,replace:t,state:n,relative:r}){T(ct(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=S.useContext(Qe);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=S.useContext(et),{pathname:o}=lt(),s=ft(),c=je(e,Ae(a),o,r===`path`),l=JSON.stringify(c);return S.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Vt(e){return ht(e.context)}function Ht(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!ct(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=we(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(Qe.Provider,{value:c},S.createElement($e.Provider,{children:t,value:h}))}function Wt({children:e,location:t}){return vt(Gt(e),t)}S.Component;function Gt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Gt(e.props.children,i));return}T(e.type===Ht,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Gt(e.props.children,i)),n.push(a)}),n}var Kt=`get`,qt=`application/x-www-form-urlencoded`;function Jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Yt(e){return Jt(e)&&e.tagName.toLowerCase()===`button`}function Xt(e){return Jt(e)&&e.tagName.toLowerCase()===`form`}function Zt(e){return Jt(e)&&e.tagName.toLowerCase()===`input`}function Qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $t(e,t){return e.button===0&&(!t||t===`_self`)&&!Qt(e)}var en=null;function tn(){if(en===null)try{new FormData(document.createElement(`form`),0),en=!1}catch{en=!0}return en}var nn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function rn(e){return e!=null&&!nn.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`),null):e}function an(e,t){let n,r,i,a,o;if(Xt(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`enctype`))||qt,a=new FormData(e)}else if(Yt(e)||Zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`formenctype`))||rn(o.getAttribute(`enctype`))||qt,a=new FormData(o,e),!tn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Kt,r=null,i=qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var on={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},sn=/[&><\u2028\u2029]/g;function cn(e){return e.replace(sn,e=>on[e])}function ln(e,t){if(e===!1||e==null)throw Error(t)}function un(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&we(i.pathname,t)===`/`?i.pathname=`${Pe(t)}/_root.${r}`:i.pathname=`${Pe(i.pathname)}.${r}`,i}async function dn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fn(e){return e!=null&&typeof e.page==`string`}function pn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function mn(e,t,n){return yn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await dn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(pn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function hn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function gn(e,t,{includeHydrateFallback:n}={}){return _n(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function _n(e){return[...new Set(e)]}function vn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function yn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!fn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(vn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function bn(){let e=S.useContext(Ge);return ln(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function xn(){let e=S.useContext(Ke);return ln(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Sn=S.createContext(void 0);Sn.displayName=`FrameworkContext`;function Cn(){let e=S.useContext(Sn);return ln(e,`You must render this element inside a <HydratedRouter> element`),e}function wn(e,t){let n=S.useContext(Sn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Tn(s,p),onBlur:Tn(c,m),onMouseEnter:Tn(l,p),onMouseLeave:Tn(u,m),onTouchStart:Tn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Tn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function En({page:e,...t}){let n=Je(),{router:r}=bn(),i=S.useMemo(()=>se(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?S.createElement(On,{page:e,matches:i,...t}):S.createElement(kn,{page:e,matches:i,...t}):null}function Dn(e){let{manifest:t,routeModules:n}=Cn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return mn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function On({page:e,matches:t,...n}){let r=lt(),{future:i}=Cn(),{basename:a}=bn(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=un(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function kn({page:e,matches:t,...n}){let r=lt(),{future:i,manifest:a,routeModules:o}=Cn(),{basename:s}=bn(),{loaderData:c,matches:l}=xn(),u=S.useMemo(()=>hn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>hn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=un(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>gn(d,a),[d,a]),m=Dn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function An(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{jn&&(window.__reactRouterVersion=`7.15.1`)}catch{}function Mn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Nn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=S.useState({action:n.action,location:n.location}),o=S.useCallback(e=>{r===!1?a(e):S.startTransition(()=>a(e))},[r]);return S.useLayoutEffect(()=>n.listen(o),[n,o]),S.createElement(Ut,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Nn.displayName=`unstable_HistoryRouter`;var Pn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fn=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(Qe),v=typeof l==`string`&&Pn.test(l),y=He(l,h);l=y.to;let b=st(l,{relative:r}),x=lt(),C=null;if(o){let e=je(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ne([h,e.pathname])),C=g.createHref(e)}let[w,ee,T]=wn(n,p),E=Hn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||E(t)}let te=!(y.isExternal||i),ne=S.createElement(`a`,{...p,...T,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:An(m,ee),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?S.createElement(S.Fragment,null,ne,S.createElement(En,{page:b})):ne});Fn.displayName=`Link`;var In=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=_t(a,{relative:c.relative}),d=lt(),f=S.useContext(Ke),{navigator:p,basename:m}=S.useContext(Qe),h=f!=null&&Qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=we(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(C):i;return S.createElement(Fn,{...c,"aria-current":w,className:ee,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(C):s)});In.displayName=`NavLink`;var Ln=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(Qe),g=Gn(),_=Kn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Pn.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Ln.displayName=`Form`;function Rn({getKey:e,storageKey:t,...n}){let r=S.useContext(Sn),{basename:i}=S.useContext(Qe),a=lt(),o=Pt();Xn({getKey:e,storageKey:t});let s=S.useMemo(()=>{if(!r||!e)return null;let t=Yn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return S.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${cn(JSON.stringify(t||qn))}, ${cn(JSON.stringify(s))})`}})}Rn.displayName=`ScrollRestoration`;function zn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=S.useContext(Ge);return T(t,zn(e)),t}function Vn(e){let t=S.useContext(Ke);return T(t,zn(e)),t}function Hn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ft(),d=lt(),f=_t(e,{relative:o});return S.useCallback(p=>{if($t(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Un=0,Wn=()=>`__${String(++Un)}__`;function Gn(){let{router:e}=Bn(`useSubmit`),{basename:t}=S.useContext(Qe),n=Mt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=an(e,t);a.navigate===!1?await r(a.fetcherKey||Wn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Kn(e,{relative:t}={}){let{basename:n}=S.useContext(Qe),r=S.useContext(et);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={..._t(e||`.`,{relative:t})},o=lt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ne([n,a.pathname])),re(a)}var qn=`react-router-scroll-positions`,Jn={};function Yn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Xn({getKey:e,storageKey:t}={}){let{router:n}=Bn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Vn(`useScrollRestoration`),{basename:a}=S.useContext(Qe),o=lt(),s=Pt(),c=Nt();S.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Zn(S.useCallback(()=>{if(c.state===`idle`){let t=Yn(o,s,a,e);Jn[t]=window.scrollY}try{sessionStorage.setItem(t||qn,JSON.stringify(Jn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(S.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||qn);e&&(Jn=JSON.parse(e))}catch{}},[t]),S.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Jn,()=>window.scrollY,e?(t,n)=>Yn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),S.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Zn(e,t){let{capture:n}=t||{};S.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Qn(e,{relative:t}={}){let n=S.useContext(Ye);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bn(`useViewTransitionState`),i=_t(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}var j=`-ms-`,$n=`-moz-`,M=`-webkit-`,er=`comm`,tr=`rule`,nr=`decl`,rr=`@import`,ir=`@namespace`,ar=`@keyframes`,or=`@layer`,sr=Math.abs,cr=String.fromCharCode,lr=Object.assign;function ur(e,t){return mr(e,0)^45?(((t<<2^mr(e,0))<<2^mr(e,1))<<2^mr(e,2))<<2^mr(e,3):0}function dr(e){return e.trim()}function fr(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function pr(e,t,n){return e.indexOf(t,n)}function mr(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function gr(e){return e.length}function _r(e){return e.length}function vr(e,t){return t.push(e),e}function yr(e,t){return e.map(t).join(``)}function br(e,t){return e.filter(function(e){return!fr(e,t)})}var xr=1,Sr=1,Cr=0,wr=0,Tr=0,Er=``;function Dr(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:xr,column:Sr,length:o,return:``,siblings:s}}function Or(e,t){return lr(Dr(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function kr(e){for(;e.root;)e=Or(e.root,{children:[e]});vr(e,e.siblings)}function Ar(){return Tr}function jr(){return Tr=wr>0?mr(Er,--wr):0,Sr--,Tr===10&&(Sr=1,xr--),Tr}function Mr(){return Tr=wr<Cr?mr(Er,wr++):0,Sr++,Tr===10&&(Sr=1,xr++),Tr}function Nr(){return mr(Er,wr)}function Pr(){return wr}function Fr(e,t){return hr(Er,e,t)}function Ir(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lr(e){return xr=Sr=1,Cr=gr(Er=e),wr=0,[]}function Rr(e){return Er=``,e}function zr(e){return dr(Fr(wr-1,Hr(e===91?e+2:e===40?e+1:e)))}function Br(e){for(;(Tr=Nr())&&Tr<33;)Mr();return Ir(e)>2||Ir(Tr)>3?``:` `}function Vr(e,t){for(;--t&&Mr()&&!(Tr<48||Tr>102||Tr>57&&Tr<65||Tr>70&&Tr<97););return Fr(e,Pr()+(t<6&&Nr()==32&&Mr()==32))}function Hr(e){for(;Mr();)switch(Tr){case e:return wr;case 34:case 39:e!==34&&e!==39&&Hr(Tr);break;case 40:e===41&&Hr(e);break;case 92:Mr();break}return wr}function Ur(e,t){for(;Mr()&&e+Tr!==57&&!(e+Tr===84&&Nr()===47););return`/*`+Fr(t,wr-1)+`*`+cr(e===47?e:Mr())}function Wr(e){for(;!Ir(Nr());)Mr();return Fr(e,wr)}function Gr(e){return Rr(Kr(``,null,null,null,[``],e=Lr(e),0,[0],e))}function Kr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Mr()){case 40:if(m!=108&&mr(C,d-1)==58){pr(C+=N(zr(v),`&`,`&\f`),`&\f`,sr(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=zr(v);break;case 9:case 10:case 13:case 32:C+=Br(m);break;case 92:C+=Vr(Pr()-1,7);continue;case 47:switch(Nr()){case 42:case 47:vr(Jr(Ur(Mr(),Pr()),t,n,c),c),(Ir(m||1)==5||Ir(Nr()||1)==5)&&gr(C)&&hr(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=gr(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(gr(C)-d||h===0&&m===47)&&vr(p>32?Yr(C+`;`,r,n,d-1,c):Yr(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(vr(S=qr(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Kr(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(mr(C,3)===110)break;case 108:if(mr(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Kr(e,S,S,r&&vr(qr(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Kr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+gr(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&jr()==125)continue}switch(C+=cr(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(gr(C)-1)*_,_=1;break;case 64:Nr()===45&&(C+=zr(Mr())),f=Nr(),u=d=gr(y=C+=Wr(Pr())),v++;break;case 45:m===45&&gr(C)==2&&(h=0)}}return a}function qr(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=_r(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=hr(e,f+1,f=sr(g=o[h])),b=e;v<m;++v)(b=dr(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return Dr(e,t,n,i===0?tr:s,c,l,u,d)}function Jr(e,t,n,r){return Dr(e,t,n,er,cr(Ar()),hr(e,2,-2),0,r)}function Yr(e,t,n,r,i){return Dr(e,t,n,nr,hr(e,0,r),hr(e,r+1,-1),r,i)}function Xr(e,t,n){switch(ur(e,t)){case 5103:return M+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return $n+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+$n+e+j+e+e;case 5936:switch(mr(e,t+11)){case 114:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return M+e+j+e+e;case 6165:return M+e+j+`flex-`+e+e;case 5187:return M+e+N(e,/(\w+).+(:[^]+)/,M+`box-$1$2`+j+`flex-$1$2`)+e;case 5443:return M+e+j+`flex-item-`+N(e,/flex-|-self/g,``)+(fr(e,/flex-|baseline/)?``:j+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return M+e+j+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return M+e+j+N(e,`shrink`,`negative`)+e;case 5292:return M+e+j+N(e,`basis`,`preferred-size`)+e;case 6060:return M+`box-`+N(e,`-grow`,``)+M+e+j+N(e,`grow`,`positive`)+e;case 4554:return M+N(e,/([^-])(transform)/g,`$1`+M+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,M+`$1`),/(image-set)/,M+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,M+`box-pack:$3`+j+`flex-pack:$3`),/space-between/,`justify`)+M+e+e;case 4200:if(!fr(e,/flex-|baseline/))return j+`grid-column-align`+hr(e,t)+e;break;case 2592:case 3360:return j+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,fr(e.props,/grid-\w+-end/)})?~pr(e+(n=n[t].value),`span`,0)?e:j+N(e,`-start`,``)+e+j+`grid-row-span:`+(~pr(n,`span`,0)?fr(n,/\d+/):fr(n,/\d+/)-+fr(e,/\d+/))+`;`:j+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return fr(e.props,/grid-\w+-start/)})?e:j+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,M+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gr(e)-1-t>6)switch(mr(e,t+1)){case 109:if(mr(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+M+`$2-$3$1`+$n+(mr(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~pr(e,`stretch`,0)?Xr(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return j+n+`:`+r+s+(i?j+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(mr(e,t+6)===121)return N(e,`:`,`:`+M)+e;break;case 6444:switch(mr(e,mr(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+M+(mr(e,14)===45?`inline-`:``)+`box$3$1`+M+`$2$3$1`+j+`$2box$3`)+e;case 100:return N(e,`:`,`:`+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Zr(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Qr(e,t,n,r){switch(e.type){case or:if(e.children.length)break;case rr:case ir:case nr:return e.return=e.return||e.value;case er:return``;case ar:return e.return=e.value+`{`+Zr(e.children,r)+`}`;case tr:if(!gr(e.value=e.props.join(`,`)))return``}return gr(n=Zr(e.children,r))?e.return=e.value+`{`+n+`}`:``}function $r(e){var t=_r(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ei(e){return function(t){t.root||(t=t.return)&&e(t)}}function ti(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nr:e.return=Xr(e.value,e.length,n);return;case ar:return Zr([Or(e,{value:N(e.value,`@`,`@`+M)})],r);case tr:if(e.length)return yr(n=e.props,function(t){switch(fr(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:kr(Or(e,{props:[N(t,/:(read-\w+)/,`:`+$n+`$1`)]})),kr(Or(e,{props:[t]})),lr(e,{props:br(n,r)});break;case`::placeholder`:kr(Or(e,{props:[N(t,/:(plac\w+)/,`:`+M+`input-$1`)]})),kr(Or(e,{props:[N(t,/:(plac\w+)/,`:`+$n+`$1`)]})),kr(Or(e,{props:[N(t,/:(plac\w+)/,j+`input-$1`)]})),kr(Or(e,{props:[t]})),lr(e,{props:br(n,r)});break}return``})}}var ni=_(),ri=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,ii=`active`,ai=`data-styled-version`,oi=`6.4.1`,si=`/*!sc*/
`,ci=typeof window<`u`&&typeof document<`u`;function li(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var ui=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:li(`REACT_APP_SC_DISABLE_SPEEDY`)??li(`SC_DISABLE_SPEEDY`)??(typeof process>`u`||!1)),di=`sc-keyframes-`,fi={};function pi(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var mi=new Map,hi=new Map,gi=1,_i=e=>{if(mi.has(e))return mi.get(e);for(;hi.has(gi);)gi++;let t=gi++;return mi.set(e,t),hi.set(t,e),t},vi=e=>hi.get(e),yi=(e,t)=>{gi=t+1,mi.set(e,t),hi.set(t,e)},bi=Object.freeze([]),xi=Object.freeze({});function Si(e,t,n=xi){return e.theme!==n.theme&&e.theme||t||n.theme}var Ci=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wi=/(^-|-$)/g;function Ti(e){return e.replace(Ci,`-`).replace(wi,``)}var Ei=/(a)(d)/gi,Di=e=>String.fromCharCode(e+(e>25?39:97));function Oi(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Di(t%52)+n;return(Di(t%52)+n).replace(Ei,`$1-$2`)}var ki=5381,Ai=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ji=e=>Ai(ki,e);function Mi(e){return Oi(ji(e)>>>0)}function Ni(e){return e.displayName||e.name||`Component`}function Pi(e){return typeof e==`string`&&!0}function Fi(e){return Pi(e)?`styled.${e}`:`Styled(${Ni(e)})`}var Ii=Symbol.for(`react.memo`),Li=Symbol.for(`react.forward_ref`),Ri={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},zi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},P={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bi={[Li]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ii]:P};function Vi(e){return(`type`in(t=e)&&t.type.$$typeof)===Ii?P:`$$typeof`in e?Bi[e.$$typeof]:Ri;var t}var Hi=Object.defineProperty,Ui=Object.getOwnPropertyNames,Wi=Object.getOwnPropertySymbols,Gi=Object.getOwnPropertyDescriptor,Ki=Object.getPrototypeOf,qi=Object.prototype;function Ji(e,t,n){if(typeof t!=`string`){let r=Ki(t);r&&r!==qi&&Ji(e,r,n);let i=Ui(t).concat(Wi(t)),a=Vi(e),o=Vi(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in zi||n&&n[s]||o&&s in o||a&&s in a)){let n=Gi(t,s);try{Hi(e,s,n)}catch{}}}}return e}function Yi(e){return typeof e==`function`}function Xi(e){return typeof e==`object`&&`styledComponentId`in e}function Zi(e,t){return e&&t?e+` `+t:e||t||``}function Qi(e,t){return e.join(t||``)}function $i(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function ea(e,t,n=!1){if(!n&&!$i(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=ea(e[n],t[n]);else if($i(t))for(let n in t)e[n]=ea(e[n],t[n]);return e}function ta(e,t){Object.defineProperty(e,"toString",{value:t})}var na=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw pi(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+si;return t}},ra=`style[${ri}][${ai}="${oi}"]`,ia=RegExp(`^${ri}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),aa=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,oa=e=>{if(!e)return document;if(aa(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(aa(t))return t}return document},sa=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},ca=(e,t)=>{let n=(t.textContent??``).split(si),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(ia);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(yi(n,t),sa(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},la=e=>{let t=oa(e.options.target).querySelectorAll(ra);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(ri)!==ii&&(ca(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ua=!1;function da(){if(!1!==ua)return ua;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ua=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ua=t.getAttribute(`content`)||void 0}return ua=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var fa=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${ri}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(ri,ii),i.setAttribute(ai,oi);let s=t||da();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},pa=class{constructor(e,t){this.element=fa(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw pi(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},ma=class{constructor(e,t){this.element=fa(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},ha=ci,ga={isServer:!ci,useCSSOMInjection:!ui},_a=class e{static registerId(e){return _i(e)}constructor(e=xi,t={},n){this.options=Object.assign(Object.assign({},ga),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ci&&ha&&(ha=!1,la(this)),ta(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=vi(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=ri+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&ci&&la(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&ci&&t.target!==this.options.target&&oa(this.options.target)!==oa(t.target)&&la(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new pa(t,n):new ma(t,n))(this.options),new na(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){_i(e),e.startsWith(di)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(_i(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(_i(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},va=new WeakSet,ya={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ba(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in ya||e.startsWith(`--`)?String(t).trim():t+`px`}var xa=47;function Sa(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Ca=Symbol.for(`sc-keyframes`);function wa(e){return typeof e==`object`&&!!e&&Ca in e}function Ta(e){return Yi(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Ea=e=>e==null||!1===e||e===``,Da=Symbol.for(`react.client.reference`);function Oa(e){return e.$$typeof===Da}function ka(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Ea(r)&&(Array.isArray(r)&&va.has(r)||Yi(r)?t.push(Sa(n)+`:`,r,`;`):$i(r)?(t.push(n+` {`),ka(r,t),t.push(`}`)):t.push(Sa(n)+`: `+ba(n,r)+`;`))}}function Aa(e,t,n,r,i=[]){if(Ea(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Oa(e)?i:Ta(e)&&t?Aa(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Aa(e[a],t,n,r,i);return i}return Xi(e)?(i.push(`.${e.styledComponentId}`),i):wa(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Oa(e)?i:$i(e)?(ka(e,i),i):(i.push(e.toString()),i)}var ja=ji(oi),Ma=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Ai(ja,t),this.baseStyle=n,_a.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Ta(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Qi(Aa(r,e,t,n)))}else i+=Qi(Aa(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Oi(Ai(Ai(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Zi(r,a)}}return r}},Na=/&/g;function Pa(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Fa(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==xa||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===xa&&(o=!1,c++);else if(l!==34&&l!==39||Pa(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Ia(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Ia(a.children,t)}return e}function La({options:e=xi,plugins:t=bi}=xi){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Na,r).replace(i,a))}),e.prefix&&o.push(ti),o.push(Qr);let s=[],c=$r(o.concat(ei(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Fa(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Pa(e,o))if(s===0)if(t===xa&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==xa);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===xa)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===xa&&o+1<r&&e.charCodeAt(o+1)===xa){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Fa(i)):l===0?e:Fa(e)}(t),d=Gr(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Ia(d,e.namespace)),s=[],Zr(d,c),s},u=e,d=ki;for(let e=0;e<t.length;e++)t[e].name||pi(15),d=Ai(d,t[e].name);return u!=null&&u.namespace&&(d=Ai(d,u.namespace)),u!=null&&u.prefix&&(d=Ai(d,`p`)),l.hash=d===ki?``:d.toString(),l}var Ra=new _a,za=La(),Ba=S.createContext({shouldForwardProp:void 0,styleSheet:Ra,stylis:za,stylisPlugins:void 0});Ba.Consumer;function Va(){return S.useContext(Ba)}var Ha=S.createContext(void 0);Ha.Consumer;function Ua(e){let t=S.useContext(Ha),n=S.useMemo(()=>function(e,t){if(!e)throw pi(14);if(Yi(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw pi(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?S.createElement(Ha.Provider,{value:n},e.children):null}var Wa=Object.prototype.hasOwnProperty,Ga={};function Ka(e,t){let n=typeof e==`string`?Ti(e):`sc`;Ga[n]=(Ga[n]||0)+1;let r=n+`-`+Mi(oi+n+Ga[n]);return t?t+`-`+r:r}function qa(e,t,n){let r=Xi(e),i=e,a=!Pi(e),{attrs:o=bi,componentId:s=Ka(t.displayName,t.parentComponentId),displayName:c=Fi(e)}=t,l=t.displayName&&t.componentId?Ti(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Ma(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=S.useContext(Ha),u=Va(),d=e.shouldForwardProp||u.shouldForwardProp,f=Si(t,l,a)||xi,p,m;{let e=S.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Wa.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Yi(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Zi(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Zi(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)Wa.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Zi(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[Pi(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,S.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=S.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Zi(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)ea(e,n,!0);return e}({},i.defaultProps,e):e}}),ta(m,()=>`.${m.styledComponentId}`),a&&Ji(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ja=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Ya(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Xa=e=>(va.add(e),e);function Za(e,...t){if(Yi(e)||$i(e))return Xa(Aa(Ya(bi,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Aa(n):Xa(Aa(Ya(n,t)))}function Qa(e,t,n=xi){if(!t)throw pi(1,t);let r=(r,...i)=>e(t,n,Za(r,...i));return r.attrs=r=>Qa(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Qa(e,t,Object.assign(Object.assign({},n),r)),r}var $a=e=>Qa(qa,e),F=$a;Ja.forEach(e=>{F[e]=$a(e)});var eo=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Yi(n)&&!Xi(n))return!1}return!0}(e),_a.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Qi(Aa(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function to(e,...t){let n=Za(e,...t),r=`sc-global-${Mi(JSON.stringify(n))}`,i=new eo(n,r),a=e=>{let t=Va(),n=S.useContext(Ha),a;{let e=S.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=S.useRef(i);S.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),S.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,fi,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Si(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return S.memo(a)}`${ri}`,`${ri}`,`${ri}`;var no=F.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.secondaryBg};

  @media screen and (max-width: 660px) {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`,ro=F.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`,io=F.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`,ao=F.div`
  img {
    width: 85px;
  }

  display: none;

  ${({$isVisible:e})=>e&&`
    display: block
  `};
`,oo=F.nav`
  position: relative;
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,so=F.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(86, 94, 239);
  color: rgb(255, 255, 255);
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: rgb(51, 57, 155);
  }

  a {
    color: rgb(255, 255, 255);
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`,co=F.div`
  p {
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${({theme:e})=>e.buttonBg};
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 1px;
      border-left: 1.9px solid ${({theme:e})=>e.buttonBg};
      border-bottom: 1.9px solid ${({theme:e})=>e.buttonBg};
      transform: rotate(-45deg);
      margin: -4px 0 0 5px;
      padding: 0;
    }

    &:hover {
      color: ${({theme:e})=>e.hover};

      &::after {
        border-left-color: ${({theme:e})=>e.hover};
        border-bottom-color: ${({theme:e})=>e.hover};
      }
    }
  }
`,lo=F.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,uo=F.div`
  display: block;
  position: absolute;
  top: 41px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({theme:e})=>e.secondaryBg};
  box-shadow: 0px 10px 39px 0px ${({theme:e})=>e.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${({theme:e})=>e.buttonBg};
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.buttonBg};

    a {
      color: ${({theme:e})=>e.buttonBg};
    }
  }
`,fo=F.div`
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`,po=F.div`
  color: rgb(148, 166, 190);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`,mo=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({theme:e})=>e.primaryText};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type='checkbox'] {
    cursor: pointer;
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: rgb(234, 238, 246);
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: rgb(148, 166, 190);
      transition: 0.5s;
    }
  }

  input:checked[type='checkbox'] {
    background: rgb(255, 255, 255);

    &::before {
      left: 12px;
      background-color: rgb(86, 94, 239);
    }
  }
`,ho=F.button`
  &:hover {
    border: 0.7px solid rgb(86, 94, 239);
    background-color: rgb(86, 94, 239);
    color: rgb(255, 255, 255);

    a {
      color: rgb(255, 255, 255);
    }
  }
`,go=(0,S.createContext)(),_o=(0,S.createContext)(),I=(0,S.createContext)(),L=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),R=o(((e,t)=>{t.exports=L()}))(),vo=({setIsPopupOpen:e})=>{let{user:t}=(0,S.useContext)(go),{theme:n,toggleTheme:r}=(0,S.useContext)(I);return(0,R.jsxs)(uo,{onClick:e=>e.stopPropagation(),children:[(0,R.jsx)(fo,{children:t.name}),(0,R.jsx)(po,{children:t.login}),(0,R.jsxs)(mo,{children:[(0,R.jsx)(`p`,{children:`Темная тема`}),(0,R.jsx)(`input`,{type:`checkbox`,name:`checkbox`,onChange:()=>r(),checked:n.mode===`dark`})]}),(0,R.jsx)(ho,{onClick:()=>e(!1),children:(0,R.jsx)(Fn,{to:`/exit`,children:`Выйти`})})]})},yo=()=>{let[e,t]=(0,S.useState)(!1),{user:n}=(0,S.useContext)(go),{setTask:r,setErrors:i}=(0,S.useContext)(_o),{theme:a}=(0,S.useContext)(I);return(0,R.jsxs)(no,{children:[(0,R.jsx)(ro,{children:(0,R.jsxs)(io,{children:[(0,R.jsx)(ao,{$isVisible:a.mode===`light`,children:(0,R.jsx)(Fn,{to:`/`,children:(0,R.jsx)(`img`,{src:`/skypro-kanban/images/logo.png`,alt:`logo`})})}),(0,R.jsx)(ao,{$isVisible:a.mode===`dark`,children:(0,R.jsx)(Fn,{to:`/`,children:(0,R.jsx)(`img`,{src:`/skypro-kanban/images/logo_dark.png`,alt:`logo`})})}),(0,R.jsxs)(oo,{children:[(0,R.jsx)(so,{id:`btnMainNew`,children:(0,R.jsx)(Fn,{to:`/task/add`,onClick:()=>{r({title:``,description:``,topic:``,date:``}),i({title:``,description:``,topic:``,date:``})},children:`Создать новую задачу`})}),(0,R.jsx)(co,{onClick:()=>t(!0),role:`button`,children:(0,R.jsx)(`p`,{children:n.name})}),e&&(0,R.jsx)(vo,{setIsPopupOpen:t,onClose:()=>t(!1)})]})]})}),e&&(0,R.jsx)(lo,{onClick:()=>t(!1)})]})},bo=h(),xo=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function So(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function Co(e){return`nodeType`in e}function wo(e){return e?So(e)?e:Co(e)?e.ownerDocument?.defaultView??window:window:window}function To(e){let{Document:t}=wo(e);return e instanceof t}function Eo(e){return So(e)?!1:e instanceof wo(e).HTMLElement}function Do(e){return e instanceof wo(e).SVGElement}function Oo(e){return e?So(e)?e.document:Co(e)?To(e)?e:Eo(e)||Do(e)?e.ownerDocument:document:document:document}var ko=xo?S.useLayoutEffect:S.useEffect;function Ao(e){let t=(0,S.useRef)(e);return ko(()=>{t.current=e}),(0,S.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function jo(){let e=(0,S.useRef)(null);return[(0,S.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,S.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function Mo(e,t){t===void 0&&(t=[e]);let n=(0,S.useRef)(e);return ko(()=>{n.current!==e&&(n.current=e)},t),n}function No(e,t){let n=(0,S.useRef)();return(0,S.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function Po(e){let t=Ao(e),n=(0,S.useRef)(null);return[n,(0,S.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function Fo(e){let t=(0,S.useRef)();return(0,S.useEffect)(()=>{t.current=e},[e]),t.current}var Io={};function Lo(e,t){return(0,S.useMemo)(()=>{if(t)return t;let n=Io[e]==null?0:Io[e]+1;return Io[e]=n,e+`-`+n},[e,t])}function Ro(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var zo=Ro(1),Bo=Ro(-1);function Vo(e){return`clientX`in e&&`clientY`in e}function Ho(e){if(!e)return!1;let{KeyboardEvent:t}=wo(e.target);return t&&e instanceof t}function Uo(e){if(!e)return!1;let{TouchEvent:t}=wo(e.target);return t&&e instanceof t}function Wo(e){if(Uo(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Vo(e)?{x:e.clientX,y:e.clientY}:null}var Go=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Go.Translate.toString(e),Go.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Ko=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function qo(e){return e.matches(Ko)?e:e.querySelector(Ko)}var Jo={display:`none`};function Yo(e){let{id:t,value:n}=e;return S.createElement(`div`,{id:t,style:Jo},n)}function Xo(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return S.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function Zo(){let[e,t]=(0,S.useState)(``);return{announce:(0,S.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var Qo=(0,S.createContext)(null);function $o(e){let t=(0,S.useContext)(Qo);(0,S.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function es(){let[e]=(0,S.useState)(()=>new Set),t=(0,S.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,S.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var ts={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},ns={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function rs(e){let{announcements:t=ns,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=ts}=e,{announce:a,announcement:o}=Zo(),s=Lo(`DndLiveRegion`),[c,l]=(0,S.useState)(!1);if((0,S.useEffect)(()=>{l(!0)},[]),$o((0,S.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=S.createElement(S.Fragment,null,S.createElement(Yo,{id:r,value:i.draggable}),S.createElement(Xo,{id:s,announcement:o}));return n?(0,bo.createPortal)(u,n):u}var is;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(is||={});function as(){}function os(e,t){return(0,S.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function ss(){var e=[...arguments];return(0,S.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var cs=Object.freeze({x:0,y:0});function ls(e,t){let n=Wo(e);if(!n)return`0 0`;let r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+`% `+r.y+`%`}function us(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ds(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function fs(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var ps=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=fs(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(us)};function ms(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function hs(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:cs}function gs(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var _s=gs(1);function vs(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function ys(e,t,n){let r=vs(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var bs={ignoreTransform:!1};function xs(e,t){t===void 0&&(t=bs);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=wo(e).getComputedStyle(e);t&&(n=ys(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Ss(e){return xs(e,{ignoreTransform:!0})}function Cs(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function ws(e,t){return t===void 0&&(t=wo(e).getComputedStyle(e)),t.position===`fixed`}function Ts(e,t){t===void 0&&(t=wo(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function Es(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(To(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Eo(i)||Do(i)||n.includes(i))return n;let a=wo(e).getComputedStyle(i);return i!==e&&Ts(i,a)&&n.push(i),ws(i,a)?n:r(i.parentNode)}return e?r(e):n}function Ds(e){let[t]=Es(e,1);return t??null}function Os(e){return!xo||!e?null:So(e)?e:Co(e)?To(e)||e===Oo(e).scrollingElement?window:Eo(e)?e:null:null}function ks(e){return So(e)?e.scrollX:e.scrollLeft}function As(e){return So(e)?e.scrollY:e.scrollTop}function js(e){return{x:ks(e),y:As(e)}}var Ms;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Ms||={});function Ns(e){return!xo||!e?!1:e===document.scrollingElement}function Ps(e){let t={x:0,y:0},n=Ns(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Fs={x:.2,y:.2};function Is(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Fs);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=Ps(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Ms.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Ms.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Ms.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Ms.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function Ls(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Rs(e){return e.reduce((e,t)=>zo(e,js(t)),cs)}function zs(e){return e.reduce((e,t)=>e+ks(t),0)}function Bs(e){return e.reduce((e,t)=>e+As(t),0)}function Vs(e,t){if(t===void 0&&(t=xs),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Ds(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var Hs=[[`x`,[`left`,`right`],zs],[`y`,[`top`,`bottom`],Bs]],Us=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Es(t),r=Rs(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of Hs)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Ws=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function Gs(e){let{EventTarget:t}=wo(e);return e instanceof t?e:Oo(e)}function Ks(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var qs;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(qs||={});function Js(e){e.preventDefault()}function Ys(e){e.stopPropagation()}var z;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(z||={});var Xs={start:[z.Space,z.Enter],cancel:[z.Esc],end:[z.Space,z.Enter,z.Tab]},Zs=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case z.Right:return{...n,x:n.x+25};case z.Left:return{...n,x:n.x-25};case z.Down:return{...n,y:n.y+25};case z.Up:return{...n,y:n.y-25}}},Qs=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Ws(Oo(t)),this.windowListeners=new Ws(wo(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(qs.Resize,this.handleCancel),this.windowListeners.add(qs.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(qs.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Vs(n),t(cs)}handleKeyDown(e){if(Ho(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Xs,coordinateGetter:a=Zs,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:cs;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Bo(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=Ps(n),p=Ls(n),m={x:Math.min(i===z.Right?p.right-p.width/2:p.right,Math.max(i===z.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===z.Down?p.bottom-p.height/2:p.bottom,Math.max(i===z.Down?p.top:p.top+p.height/2,u.y))},h=i===z.Right&&!s||i===z.Left&&!c,g=i===z.Down&&!l||i===z.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===z.Right&&e<=d.x||i===z.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===z.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===z.Down&&e<=d.y||i===z.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===z.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,zo(Bo(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Qs.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=Xs,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function $s(e){return!!(e&&`distance`in e)}function ec(e){return!!(e&&`delay`in e)}var tc=class{constructor(e,t,n){n===void 0&&(n=Gs(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Oo(i),this.documentListeners=new Ws(this.document),this.listeners=new Ws(n),this.windowListeners=new Ws(wo(i)),this.initialCoordinates=Wo(r)??cs,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(qs.Resize,this.handleCancel),this.windowListeners.add(qs.DragStart,Js),this.windowListeners.add(qs.VisibilityChange,this.handleCancel),this.windowListeners.add(qs.ContextMenu,Js),this.documentListeners.add(qs.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ec(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if($s(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(qs.Click,Ys,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(qs.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Wo(e)??cs,s=Bo(n,o);if(!t&&a){if($s(a)){if(a.tolerance!=null&&Ks(s,a.tolerance))return this.handleCancel();if(Ks(s,a.distance))return this.handleStart()}if(ec(a)&&Ks(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===z.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},nc={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},rc=class extends tc{constructor(e){let{event:t}=e,n=Oo(t.target);super(e,nc,n)}};rc.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var ic={move:{name:`mousemove`},end:{name:`mouseup`}},ac;(function(e){e[e.RightClick=2]=`RightClick`})(ac||={});var oc=class extends tc{constructor(e){super(e,ic,Oo(e.event.target))}};oc.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===ac.RightClick?!1:(r?.({event:n}),!0)}}];var sc={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},cc=class extends tc{constructor(e){super(e,sc)}static setup(){return window.addEventListener(sc.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(sc.move.name,e)};function e(){}}};cc.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var lc;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(lc||={});var uc;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(uc||={});function dc(e){let{acceleration:t,activator:n=lc.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=uc.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=pc({delta:d,disabled:!a}),[m,h]=jo(),g=(0,S.useRef)({x:0,y:0}),_=(0,S.useRef)({x:0,y:0}),v=(0,S.useMemo)(()=>{switch(n){case lc.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case lc.DraggableRect:return i}},[n,i,c]),y=(0,S.useRef)(null),b=(0,S.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,S.useMemo)(()=>s===uc.TreeOrder?[...l].reverse():l,[s,l]);(0,S.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=Is(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(b,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var fc={x:{[Ms.Backward]:!1,[Ms.Forward]:!1},y:{[Ms.Backward]:!1,[Ms.Forward]:!1}};function pc(e){let{delta:t,disabled:n}=e,r=Fo(t);return No(e=>{if(n||!r||!e)return fc;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Ms.Backward]:e.x[Ms.Backward]||i.x===-1,[Ms.Forward]:e.x[Ms.Forward]||i.x===1},y:{[Ms.Backward]:e.y[Ms.Backward]||i.y===-1,[Ms.Forward]:e.y[Ms.Forward]||i.y===1}}},[n,t,r])}function mc(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return No(e=>t==null?null:r??e??null,[r,t])}function hc(e,t){return(0,S.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var gc;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(gc||={});var _c;(function(e){e.Optimized=`optimized`})(_c||={});var vc=new Map;function yc(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,S.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,S.useRef)(e),d=g(),f=Mo(d),p=(0,S.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,S.useRef)(null),h=No(t=>{if(d&&!n)return vc;if(!t||t===vc||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Us(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,S.useEffect)(()=>{u.current=e},[e]),(0,S.useEffect)(()=>{d||p()},[n,d]),(0,S.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,S.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case gc.Always:return!1;case gc.BeforeDragging:return n;default:return!n}}}function bc(e,t){return No(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function xc(e,t){return bc(e,t)}function Sc(e){let{callback:t,disabled:n}=e,r=Ao(t),i=(0,S.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,S.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Cc(e){let{callback:t,disabled:n}=e,r=Ao(t),i=(0,S.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,S.useEffect)(()=>()=>i?.disconnect(),[i]),i}function wc(e){return new Us(xs(e),e)}function Tc(e,t,n){t===void 0&&(t=wc);let[r,i]=(0,S.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Sc({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Cc({callback:a});return ko(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Ec(e){return hs(e,bc(e))}var Dc=[];function Oc(e){let t=(0,S.useRef)(e),n=No(n=>e?n&&n!==Dc&&e&&t.current&&e.parentNode===t.current.parentNode?n:Es(e):Dc,[e]);return(0,S.useEffect)(()=>{t.current=e},[e]),n}function kc(e){let[t,n]=(0,S.useState)(null),r=(0,S.useRef)(e),i=(0,S.useCallback)(e=>{let t=Os(e.target);t&&n(e=>e?(e.set(t,js(t)),new Map(e)):null)},[]);return(0,S.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Os(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,js(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Os(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,S.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>zo(e,t),cs):Rs(e):cs,[e,t])}function Ac(e,t){t===void 0&&(t=[]);let n=(0,S.useRef)(null);return(0,S.useEffect)(()=>{n.current=null},t),(0,S.useEffect)(()=>{let t=e!==cs;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Bo(e,n.current):cs}function jc(e){(0,S.useEffect)(()=>{if(!xo)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Mc(e,t){return(0,S.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Nc(e){return(0,S.useMemo)(()=>e?Cs(e):null,[e])}var Pc=[];function Fc(e,t){t===void 0&&(t=xs);let[n]=e,r=Nc(n?wo(n):null),[i,a]=(0,S.useState)(Pc);function o(){a(()=>e.length?e.map(e=>Ns(e)?r:new Us(t(e),e)):Pc)}let s=Cc({callback:o});return ko(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Ic(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Eo(t)?t:e}function Lc(e){let{measure:t}=e,[n,r]=(0,S.useState)(null),i=Cc({callback:(0,S.useCallback)(e=>{for(let{target:n}of e)if(Eo(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=Po((0,S.useCallback)(e=>{let n=Ic(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,S.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Rc=[{sensor:rc,options:{}},{sensor:Qs,options:{}}],zc={current:{}},Bc={draggable:{measure:Ss},droppable:{measure:Ss,strategy:gc.WhileDragging,frequency:_c.Optimized},dragOverlay:{measure:xs}},Vc=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},B={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Vc,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:as},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Bc,measureDroppableContainers:as,windowRect:null,measuringScheduled:!1},Hc={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:as,draggableNodes:new Map,over:null,measureDroppableContainers:as},Uc=(0,S.createContext)(Hc),Wc=(0,S.createContext)(B);function Gc(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Vc}}}function Kc(e,t){switch(t.type){case is.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case is.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case is.DragEnd:case is.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case is.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new Vc(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case is.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new Vc(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case is.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new Vc(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function qc(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,S.useContext)(Uc),a=Fo(r),o=Fo(n?.id);return(0,S.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!Ho(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=qo(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function Jc(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function Yc(e){return(0,S.useMemo)(()=>({draggable:{...Bc.draggable,...e?.draggable},droppable:{...Bc.droppable,...e?.droppable},dragOverlay:{...Bc.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Xc(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,S.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ko(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=hs(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Ds(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var Zc=(0,S.createContext)({...cs,scaleX:1,scaleY:1}),Qc;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(Qc||={});var $c=(0,S.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Rc,collisionDetection:o=ps,measuring:s,modifiers:c,...l}=e,[u,d]=(0,S.useReducer)(Kc,void 0,Gc),[f,p]=es(),[m,h]=(0,S.useState)(Qc.Uninitialized),g=m===Qc.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),C=(0,S.useRef)({initial:null,translated:null}),w=(0,S.useMemo)(()=>_==null?null:{id:_,data:x?.data??zc,rect:C},[_,x]),ee=(0,S.useRef)(null),[T,E]=(0,S.useState)(null),[D,te]=(0,S.useState)(null),ne=Mo(l,Object.values(l)),re=Lo(`DndDescribedBy`,t),ie=(0,S.useMemo)(()=>b.getEnabled(),[b]),ae=Yc(s),{droppableRects:oe,measureDroppableContainers:se,measuringScheduled:O}=yc(ie,{dragging:g,dependencies:[y.x,y.y],config:ae.droppable}),k=mc(v,_),ce=(0,S.useMemo)(()=>D?Wo(D):null,[D]),le=ze(),ue=xc(k,ae.draggable.measure);Xc({activeNode:_==null?null:v.get(_),config:le.layoutShiftCompensation,initialRect:ue,measure:ae.draggable.measure});let de=Tc(k,ae.draggable.measure,ue),fe=Tc(k?k.parentElement:null),A=(0,S.useRef)({activatorEvent:null,active:null,activeNode:k,collisionRect:null,collisions:null,droppableRects:oe,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),pe=b.getNodeFor(A.current.over?.id),me=Lc({measure:ae.dragOverlay.measure}),he=me.nodeRef.current??k,ge=g?me.rect??de:null,_e=!!(me.nodeRef.current&&me.rect),ve=Ec(_e?null:de),ye=Nc(he?wo(he):null),be=Oc(g?pe??k:null),xe=Fc(be),Se=Jc(c,{transform:{x:y.x-ve.x,y:y.y-ve.y,scaleX:1,scaleY:1},activatorEvent:D,active:w,activeNodeRect:de,containerNodeRect:fe,draggingNodeRect:ge,over:A.current.over,overlayNodeRect:me.rect,scrollableAncestors:be,scrollableAncestorRects:xe,windowRect:ye}),Ce=ce?zo(ce,y):null,we=kc(be),Te=Ac(we),Ee=Ac(we,[de]),De=zo(Se,Te),Oe=ge?_s(ge,Se):null,ke=w&&Oe?o({active:w,collisionRect:Oe,droppableRects:oe,droppableContainers:ie,pointerCoordinates:Ce}):null,Ae=ds(ke,`id`),[je,Me]=(0,S.useState)(null),Ne=ms(_e?Se:zo(Se,Ee),je?.rect??null,de),Pe=(0,S.useRef)(null),Fe=(0,S.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(ee.current==null)return;let i=v.get(ee.current);if(!i)return;let a=e.nativeEvent;Pe.current=new n({active:ee.current,activeNode:i,event:a,options:r,context:A,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=ne.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=ne.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=ee.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=ne.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:C}};(0,bo.unstable_batchedUpdates)(()=>{r?.(i),h(Qc.Initializing),d({type:is.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(Pe.current),te(a)})},onMove(e){d({type:is.DragMove,coordinates:e})},onEnd:o(is.DragEnd),onCancel:o(is.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=A.current,o=null;if(t&&i){let{cancelDrop:s}=ne.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===is.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=is.DragCancel)}ee.current=null,(0,bo.unstable_batchedUpdates)(()=>{d({type:e}),h(Qc.Uninitialized),Me(null),E(null),te(null),Pe.current=null;let t=e===is.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=ne.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),Ie=hc(a,(0,S.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(ee.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},ee.current=r,Fe(n,t))},[v,Fe]));jc(a),ko(()=>{de&&m===Qc.Initializing&&h(Qc.Initialized)},[de,m]),(0,S.useEffect)(()=>{let{onDragMove:e}=ne.current,{active:t,activatorEvent:n,collisions:r,over:i}=A.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:De.x,y:De.y},over:i};(0,bo.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[De.x,De.y]),(0,S.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=A.current;if(!e||ee.current==null||!t||!i)return;let{onDragOver:a}=ne.current,o=r.get(Ae),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,bo.unstable_batchedUpdates)(()=>{Me(s),a?.(c),f({type:`onDragOver`,event:c})})},[Ae]),ko(()=>{A.current={activatorEvent:D,active:w,activeNode:k,collisionRect:Oe,collisions:ke,droppableRects:oe,draggableNodes:v,draggingNode:he,draggingNodeRect:ge,droppableContainers:b,over:je,scrollableAncestors:be,scrollAdjustedTranslate:De},C.current={initial:ge,translated:Oe}},[w,k,ke,Oe,v,he,ge,oe,b,je,be,De]),dc({...le,delta:y,draggingRect:Oe,pointerCoordinates:Ce,scrollableAncestors:be,scrollableAncestorRects:xe});let Le=(0,S.useMemo)(()=>({active:w,activeNode:k,activeNodeRect:de,activatorEvent:D,collisions:ke,containerNodeRect:fe,dragOverlay:me,draggableNodes:v,droppableContainers:b,droppableRects:oe,over:je,measureDroppableContainers:se,scrollableAncestors:be,scrollableAncestorRects:xe,measuringConfiguration:ae,measuringScheduled:O,windowRect:ye}),[w,k,de,D,ke,fe,me,v,b,oe,je,se,be,xe,ae,O,ye]),Re=(0,S.useMemo)(()=>({activatorEvent:D,activators:Ie,active:w,activeNodeRect:de,ariaDescribedById:{draggable:re},dispatch:d,draggableNodes:v,over:je,measureDroppableContainers:se}),[D,Ie,w,de,d,re,v,je,se]);return S.createElement(Qo.Provider,{value:p},S.createElement(Uc.Provider,{value:Re},S.createElement(Wc.Provider,{value:Le},S.createElement(Zc.Provider,{value:Ne},i)),S.createElement(qc,{disabled:n?.restoreFocus===!1})),S.createElement(rs,{...n,hiddenTextDescribedById:re}));function ze(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),el=(0,S.createContext)(null),tl=`button`,nl=`Draggable`;function rl(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=Lo(nl),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,S.useContext)(Uc),{role:p=tl,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,S.useContext)(g?Zc:el),[v,y]=Po(),[b,x]=Po(),C=Mc(o,t),w=Mo(n);return ko(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,S.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===tl?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function il(){return(0,S.useContext)(Wc)}var al=`Droppable`,ol={timeout:25};function sl(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=Lo(al),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,S.useContext)(Uc),u=(0,S.useRef)({disabled:n}),d=(0,S.useRef)(!1),f=(0,S.useRef)(null),p=(0,S.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...ol,...i},_=Mo(h??r),v=Cc({callback:(0,S.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=Po((0,S.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=Mo(t);return(0,S.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,S.useEffect)(()=>(s({type:is.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:is.UnregisterDroppable,key:a,id:r})),[r]),(0,S.useEffect)(()=>{n!==u.current.disabled&&(s({type:is.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}function cl(e){let{animation:t,children:n}=e,[r,i]=(0,S.useState)(null),[a,o]=(0,S.useState)(null),s=Fo(n);return!n&&!r&&s&&i(s),ko(()=>{if(!a)return;let e=r?.key,n=r?.props.id;if(e==null||n==null){i(null);return}Promise.resolve(t(n,a)).then(()=>{i(null)})},[t,r,a]),S.createElement(S.Fragment,null,n,r?(0,S.cloneElement)(r,{ref:o}):null)}var ll={x:0,y:0,scaleX:1,scaleY:1};function ul(e){let{children:t}=e;return S.createElement(Uc.Provider,{value:Hc},S.createElement(Zc.Provider,{value:ll},t))}var dl={position:`fixed`,touchAction:`none`},fl=e=>Ho(e)?`transform 250ms ease`:void 0,pl=(0,S.forwardRef)((e,t)=>{let{as:n,activatorEvent:r,adjustScale:i,children:a,className:o,rect:s,style:c,transform:l,transition:u=fl}=e;if(!s)return null;let d=i?l:{...l,scaleX:1,scaleY:1},f={...dl,width:s.width,height:s.height,top:s.top,left:s.left,transform:Go.Transform.toString(d),transformOrigin:i&&r?ls(r,s):void 0,transition:typeof u==`function`?u(r):u,...c};return S.createElement(n,{className:o,style:f,ref:t},a)}),ml={duration:250,easing:`ease`,keyframes:e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Go.Transform.toString(t)},{transform:Go.Transform.toString(n)}]},sideEffects:(e=>t=>{let{active:n,dragOverlay:r}=t,i={},{styles:a,className:o}=e;if(a!=null&&a.active)for(let[e,t]of Object.entries(a.active))t!==void 0&&(i[e]=n.node.style.getPropertyValue(e),n.node.style.setProperty(e,t));if(a!=null&&a.dragOverlay)for(let[e,t]of Object.entries(a.dragOverlay))t!==void 0&&r.node.style.setProperty(e,t);return o!=null&&o.active&&n.node.classList.add(o.active),o!=null&&o.dragOverlay&&r.node.classList.add(o.dragOverlay),function(){for(let[e,t]of Object.entries(i))n.node.style.setProperty(e,t);o!=null&&o.active&&n.node.classList.remove(o.active)}})({styles:{active:{opacity:`0`}}})};function hl(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:i}=e;return Ao((e,a)=>{if(t===null)return;let o=n.get(e);if(!o)return;let s=o.node.current;if(!s)return;let c=Ic(a);if(!c)return;let{transform:l}=wo(a).getComputedStyle(a),u=vs(l);if(!u)return;let d=typeof t==`function`?t:gl(t);return Vs(s,i.draggable.measure),d({active:{id:e,data:o.data,node:s,rect:i.draggable.measure(s)},draggableNodes:n,dragOverlay:{node:a,rect:i.dragOverlay.measure(c)},droppableContainers:r,measuringConfiguration:i,transform:u})})}function gl(e){let{duration:t,easing:n,sideEffects:r,keyframes:i}={...ml,...e};return e=>{let{active:a,dragOverlay:o,transform:s,...c}=e;if(!t)return;let l={x:o.rect.left-a.rect.left,y:o.rect.top-a.rect.top},u={scaleX:s.scaleX===1?1:a.rect.width*s.scaleX/o.rect.width,scaleY:s.scaleY===1?1:a.rect.height*s.scaleY/o.rect.height},d={x:s.x-l.x,y:s.y-l.y,...u},f=i({...c,active:a,dragOverlay:o,transform:{initial:s,final:d}}),[p]=f,m=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(m))return;let h=r?.({active:a,dragOverlay:o,...c}),g=o.node.animate(f,{duration:t,easing:n,fill:`forwards`});return new Promise(e=>{g.onfinish=()=>{h?.(),e()}})}}var _l=0;function vl(e){return(0,S.useMemo)(()=>{if(e!=null)return _l++,_l},[e])}var yl=S.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:i,transition:a,modifiers:o,wrapperElement:s=`div`,className:c,zIndex:l=999}=e,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:m,droppableContainers:h,dragOverlay:g,over:_,measuringConfiguration:v,scrollableAncestors:y,scrollableAncestorRects:b,windowRect:x}=il(),C=(0,S.useContext)(Zc),w=vl(d?.id),ee=Jc(o,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:g.rect,over:_,overlayNodeRect:g.rect,scrollableAncestors:y,scrollableAncestorRects:b,transform:C,windowRect:x}),T=bc(f),E=hl({config:r,draggableNodes:m,droppableContainers:h,measuringConfiguration:v}),D=T?g.setRef:void 0;return S.createElement(ul,null,S.createElement(cl,{animation:E},d&&w?S.createElement(pl,{key:w,id:d.id,ref:D,as:s,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:T,style:{zIndex:l,...i},transform:ee},n):null))});function bl(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=bl(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function xl(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=bl(e))&&(r&&(r+=` `),r+=t);return r}var Sl=e=>typeof e==`number`&&!isNaN(e),Cl=e=>typeof e==`string`,wl=e=>typeof e==`function`,Tl=e=>Cl(e)||Sl(e),El=e=>Cl(e)||wl(e)?e:null,Dl=(e,t)=>e===!1||Sl(e)&&e>0?e:t,Ol=e=>(0,S.isValidElement)(e)||Cl(e)||wl(e)||Sl(e);function kl(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function Al({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,S.useRef)(0);return(0,S.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,S.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?kl(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),S.createElement(S.Fragment,null,a)}}function jl(e,t){return{content:Ml(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Ml(e,t,n=!1){return(0,S.isValidElement)(e)&&!Cl(e.type)?(0,S.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):wl(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Nl({closeToast:e,theme:t,ariaLabel:n=`close`}){return S.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},S.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},S.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function Pl({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:o,progress:s,rtl:c,isIn:l,theme:u}){let d=i||o&&s===0,f={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};o&&(f.transform=`scaleX(${s})`);let p=xl(`Toastify__progress-bar`,o?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),m=wl(a)?a({rtl:c,type:r,defaultClassName:p}):xl(p,a),h={[o&&s>=1?`onTransitionEnd`:`onAnimationEnd`]:o&&s<1?null:()=>{l&&n()}};return S.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":d},S.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),S.createElement(`div`,{role:`progressbar`,"aria-hidden":d?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":o?Math.round(s*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:m,style:f,...h}))}var Fl=1,Il=()=>`${Fl++}`;function Ll(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(jl(e,`removed`)))},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(jl(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:n,updateId:o,data:l,staleId:u,delay:p}=t,m=o==null;m&&i++;let g={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:l,isIn:!1,className:El(t.className||s.toastClassName),progressClassName:El(t.progressClassName||s.progressClassName),autoClose:t.isLoading?!1:Dl(t.autoClose,s.autoClose),closeToast(e){let t=c.get(n);t&&(t.removalReason=e,h(n))},deleteToast(){if(c.get(n)!=null){if(c.delete(n),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};g.closeButton=s.closeButton,t.closeButton===!1||Ol(t.closeButton)?g.closeButton=t.closeButton:t.closeButton===!0&&(g.closeButton=Ol(s.closeButton)?s.closeButton:!0);let v={content:e,props:g,staleId:u};s.limit&&s.limit>0&&i>s.limit&&m?a.push(v):Sl(p)?setTimeout(()=>{_(v)},p):_(v)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var Rl=new Map,zl=[],Bl=new Set,Vl=e=>Bl.forEach(t=>t(e)),Hl=()=>Rl.size>0;function Ul(){zl.forEach(e=>G(e.content,e.options)),zl=[]}var V=(e,{containerId:t})=>Rl.get(t||1)?.toasts.get(e);function H(e,t){var n;if(t)return!!((n=Rl.get(t))!=null&&n.isToastActive(e));let r=!1;return Rl.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function U(e){if(!Hl()){zl=zl.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Tl(e))Rl.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=Rl.get(e.containerId);t?t.removeToast(e.id):Rl.forEach(t=>{t.removeToast(e.id)})}}var W=(e={})=>{Rl.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function G(e,t){Ol(e)&&(Hl()||zl.push({content:e,options:t}),Rl.forEach(n=>{n.buildToast(e,t)}))}function Wl(e){var t;(t=Rl.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Gl(e,t){Rl.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Kl(e){let t=e.containerId||1;return{subscribe(n){let r=Ll(t,e,Vl);Rl.set(t,r);let i=r.observe(n);return Ul(),()=>{i(),Rl.delete(t)}},setProps(e){var n;(n=Rl.get(t))==null||n.setProps(e)},getSnapshot(){return Rl.get(t)?.getSnapshot()}}}function ql(e){return Bl.add(e),()=>{Bl.delete(e)}}function Jl(e){return e&&(Cl(e.toastId)||Sl(e.toastId))?e.toastId:Il()}function K(e,t){return G(e,t),t.toastId}function Yl(e,t){return{...t,type:t&&t.type||e,toastId:Jl(t)}}function Xl(e){return(t,n)=>K(t,Yl(e,n))}function q(e,t){return K(e,Yl(`default`,t))}q.loading=(e,t)=>K(e,Yl(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Zl(e,{pending:t,error:n,success:r},i){let a;t&&(a=Cl(t)?q.loading(t,i):q.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){q.dismiss(a);return}let r={type:e,...o,...i,data:n},s=Cl(t)?{render:t}:t;return a?q.update(a,{...r,...s}):q(s.render,{...r,...s}),n},c=wl(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}q.promise=Zl,q.success=Xl(`success`),q.info=Xl(`info`),q.error=Xl(`error`),q.warning=Xl(`warning`),q.warn=q.warning,q.dark=(e,t)=>K(e,Yl(`default`,{theme:`dark`,...t}));function Ql(e){U(e)}q.dismiss=Ql,q.clearWaitingQueue=W,q.isActive=H,q.update=(e,t={})=>{let n=V(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Il()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,K(o,a)}},q.done=e=>{q.update(e,{progress:1})},q.onChange=ql,q.play=e=>Gl(!0,e),q.pause=e=>Gl(!1,e);function $l(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,S.useRef)(Kl(e)).current;r(e);let i=(0,S.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:H,count:i?.length}}function eu(e){let[t,n]=(0,S.useState)(!1),[r,i]=(0,S.useState)(!1),a=(0,S.useRef)(null),o=(0,S.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;Wl({id:e.toastId,containerId:e.containerId,fn:n}),(0,S.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||_(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,_)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,_)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){v();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?_():g()}function g(){n(!0)}function _(){n(!1)}function v(){o.didMove=!1,document.addEventListener(`pointermove`,b),document.addEventListener(`pointerup`,x)}function y(){document.removeEventListener(`pointermove`,b),document.removeEventListener(`pointerup`,x)}function b(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&_(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function x(){y();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=_,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var tu=typeof window<`u`?S.useLayoutEffect:S.useEffect,nu=({theme:e,type:t,isLoading:n,...r})=>S.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function ru(e){return S.createElement(nu,{...e},S.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function iu(e){return S.createElement(nu,{...e},S.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function au(e){return S.createElement(nu,{...e},S.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function ou(e){return S.createElement(nu,{...e},S.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function su(){return S.createElement(`div`,{className:`Toastify__spinner`})}var cu={info:iu,warning:ru,success:au,error:ou,spinner:su},lu=e=>e in cu;function uu({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(wl(r)?i=r({...a,isLoading:n}):(0,S.isValidElement)(r)?i=(0,S.cloneElement)(r,a):n?i=cu.spinner():lu(t)&&(i=cu[t](a))),i}var du=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=eu(e),{closeButton:o,children:s,autoClose:c,onClick:l,type:u,hideProgressBar:d,closeToast:f,transition:p,position:m,className:h,style:g,progressClassName:_,updateId:v,role:y,progress:b,rtl:x,toastId:C,deleteToast:w,isIn:ee,isLoading:T,closeOnClick:E,theme:D,ariaLabel:te}=e,ne=xl(`Toastify__toast`,`Toastify__toast-theme--${D}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":E}),re=wl(h)?h({rtl:x,position:m,type:u,defaultClassName:ne}):xl(ne,h),ie=uu(e),ae=!!b||!c,oe={closeToast:f,type:u,theme:D},se=null;return o===!1||(se=wl(o)?o(oe):(0,S.isValidElement)(o)?(0,S.cloneElement)(o,oe):Nl(oe)),S.createElement(p,{isIn:ee,done:w,position:m,preventExitTransition:n,nodeRef:r,playToast:a},S.createElement(`div`,{id:C,tabIndex:0,onClick:l,"data-in":ee,className:re,...i,style:g,ref:r,...ee&&{role:y,"aria-label":te}},ie!=null&&S.createElement(`div`,{className:xl(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!T})},ie),Ml(s,e,!t),se,!e.customProgressBar&&S.createElement(Pl,{...v&&!ae?{key:`p-${v}`}:{},rtl:x,theme:D,delay:c,isRunning:t,isIn:ee,closeToast:f,hide:d,type:u,className:_,controlledProgress:ae,progress:b||0})))},fu=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),pu=Al(fu(`bounce`,!0));Al(fu(`slide`,!0)),Al(fu(`zoom`)),Al(fu(`flip`));var mu={position:`top-right`,transition:pu,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function hu(e){let t={...mu,...e},n=e.stacked,[r,i]=(0,S.useState)(!0),a=(0,S.useRef)(null),{getToastToRender:o,isToastActive:s,count:c}=$l(t),{className:l,style:u,rtl:d,containerId:f,hotKeys:p}=t;function m(e){let t=xl(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return wl(l)?l({position:e,rtl:d,defaultClassName:t}):xl(t,El(l))}function h(){n&&(i(!0),q.play())}return tu(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t),c=Math.max(.5,1-(r?o:0));a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${c}`),i+=a.offsetHeight,o+=.025})}},[r,c,n]),(0,S.useEffect)(()=>{function e(e){var t;let n=a.current;p(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),q.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),q.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p]),S.createElement(`section`,{ref:a,className:`Toastify`,id:f,onMouseEnter:()=>{n&&(i(!1),q.pause())},onMouseLeave:h,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},o((e,t)=>{let r=t.length?{...u}:{...u,pointerEvents:`none`};return S.createElement(`div`,{tabIndex:-1,className:m(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>S.createElement(du,{...t,stacked:n,collapseAll:h,isIn:s(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var gu=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,_u=new Map,vu=(e,t)=>{tu(()=>{if(!e||typeof document>`u`)return;let n=document,r=_u.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),_u.set(n,i)},[t])};function yu(e){return vu(gu,e.nonce),S.createElement(hu,{...e})}var bu=[{title:`Без статуса`,loaders:5},{title:`Нужно сделать`,loaders:1},{title:`В работе`,loaders:3},{title:`Тестирование`,loaders:1},{title:`Готово`,loaders:1}],xu=F.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({theme:e})=>e.primaryBg};
`,Su=F.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`,Cu=F.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: ${({theme:e})=>e.secondaryBg};
  }
`,wu=F.div`
  display: block;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.secondaryBg};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({theme:e})=>e.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`,Tu=F.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`,Eu=F.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:not(:last-child) {
    margin-bottom: 7px;
  }
`,Du=F.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  background: transparent;
  color: ${({theme:e})=>e.primaryText};

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: rgb(148, 166, 190);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({theme:e})=>e.primaryText};
    caret-color: ${({theme:e})=>e.primaryText};
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 9999s ease-in-out 0s;
  }


  ${({$error:e})=>e&&`border: 0.7px solid rgba(248, 77, 77, 1)`}
`,Ou=F.button`
  width: 100%;
  height: 30px;
  background-color: rgb(86, 94, 239);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: rgb(255, 255, 255);

  ${({disabled:e})=>e&&`background-color: rgb(148, 166, 190);
    cursor: not-allowed;
`}

  a {
    width: 100%;
    height: 100%;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover:not(:disabled) {
    background-color: rgb(51, 57, 155);
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`,ku=F.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`,Au=F.p`
  font-family: Arial;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  color: rgb(248, 77, 77);
`;function ju(e){return String(e).replaceAll(`&`,``).replaceAll(`<`,``).replaceAll(`>`,``)}var Mu=e=>{let t=new Date(e);return`${String(t.getDate()).padStart(2,`0`)}.${String(t.getMonth()+1).padStart(2,`0`)}.${String(t.getFullYear()).slice(-2)}`},Nu=F.div`
  padding: 5px;
`,Pu=F.div`
  width: 220px;
  height: 130px;
  background-color: ${({theme:e})=>e.secondaryBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  ${({$isDragging:e})=>e&&`
    opacity: 0;
    cursor: grabbing;
  `}

  ${({$isDragging:e,$isOverlay:t,$isLoader:n})=>!e&&!t&&!n&&`
      &:hover {
        cursor: grab;
      }
    `}

  ${({$isOverlay:e})=>e&&`
    box-shadow: 0px 10px 39px rgba(148,166,190,0.4);
    cursor: grabbing;
  `}
`,Fu=F.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Iu=F.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.bg??e.cardThemes.default.bg};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.text??e.cardThemes.default.text};
  }
`,Lu=F.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`,Ru=F.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(148, 166, 190);
`,zu=F.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,Bu=F.div`
  display: block;
  width: 160px;
  height: 37px;
`,Vu=F.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({theme:e})=>e.primaryText};
  margin-bottom: 10px;
`,Hu=F.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    font-weight: 400;
    color: rgb(148, 166, 190);
    letter-spacing: 0.2px;
  }
`,Uu=({task:e,isOverlay:t=!1})=>{let{attributes:n,listeners:r,setNodeRef:i,transform:a,isDragging:o}=rl({id:e._id});return(0,R.jsx)(Nu,{ref:i,style:a?{transform:`translate3d(
        ${a.x}px,
        ${a.y}px,
        0
      )`}:void 0,...r,...n,children:(0,R.jsxs)(Pu,{$isDragging:o,$isOverlay:t,children:[(0,R.jsxs)(Fu,{children:[(0,R.jsx)(Iu,{$cardTheme:e.topic,children:(0,R.jsx)(`p`,{children:e.topic})}),(0,R.jsx)(Fn,{to:`/task/`+e?._id,children:(0,R.jsxs)(Lu,{children:[(0,R.jsx)(Ru,{}),(0,R.jsx)(Ru,{}),(0,R.jsx)(Ru,{})]})})]}),(0,R.jsxs)(zu,{children:[(0,R.jsx)(Fn,{to:`/task/`+e?._id,children:(0,R.jsx)(Bu,{children:(0,R.jsx)(Vu,{title:e.title.length>20?e.title:void 0,children:e.title.length>20?`${e.title.slice(0,18)}...`:e.title})})}),(0,R.jsxs)(Hu,{children:[(0,R.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,children:[(0,R.jsxs)(`g`,{clipPath:`url(#clip0_1_415)`,children:[(0,R.jsx)(`path`,{d:`M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z`,stroke:`#94A6BE`,strokeWidth:`0.8`,strokeLinejoin:`round`}),(0,R.jsx)(`path`,{d:`M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z`,stroke:`#94A6BE`,strokeWidth:`0.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,R.jsx)(`defs`,{children:(0,R.jsx)(`clipPath`,{id:`clip0_1_415`,children:(0,R.jsx)(`rect`,{width:`13`,height:`13`,fill:`white`})})})]}),(0,R.jsx)(`p`,{children:Mu(e.date)})]})]})]})})},Wu=F.div`
  width: 82px;
  height: 20px;
  border-radius: 18px;
  background: ${({theme:e})=>e.mode===`dark`?`linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)`:`linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)`};
`,Gu=F.div`
  width: 18px;
  height: 4px;
  background: ${({theme:e})=>e.mode===`dark`?`linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)`:`linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)`};
`,Ku=F.div`
  width: 113px;
  height: 13px;
  background: ${({theme:e})=>e.mode===`dark`?`linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)`:`linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)`};
`,qu=F.div`
  width: 58px;
  height: 13px;
  background: ${({theme:e})=>e.mode===`dark`?`linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)`:`linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%)`};
`,J=()=>(0,R.jsx)(Nu,{children:(0,R.jsxs)(Pu,{$isLoader:!0,children:[(0,R.jsxs)(Fu,{children:[(0,R.jsx)(Wu,{}),(0,R.jsx)(Gu,{})]}),(0,R.jsxs)(zu,{children:[(0,R.jsx)(Ku,{}),(0,R.jsx)(qu,{})]})]})}),Ju=F.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  transition: 0.2s;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  border-radius: 8px;

  ${({theme:e,$active:t})=>t&&`
    background-color: ${e.columnDrop}
  `};
`,Yu=F.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: rgb(148, 166, 190);
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`,Xu=F.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`,Zu=F.div`
  display: flex;
  width: 230px;
  height: 140px;
  justify-content: center;
  align-items: center;
`,Qu=F.svg`
  width: 220px;
  height: 130px;
  flex-shrink: 0;
`,$u=()=>(0,R.jsx)(Zu,{children:(0,R.jsx)(Qu,{viewBox:`0 0 220 130`,children:(0,R.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`219`,height:`129`,rx:`10`,fill:`transparent`,stroke:`rgb(148, 166, 190)`,strokeWidth:`1`,strokeDasharray:`6 4`})})}),ed=({column:e,activeTask:t})=>{let{tasks:n,loading:r}=(0,S.useContext)(_o),{setNodeRef:i,isOver:a}=sl({id:e.title}),o=n.find(e=>e._id===t);return(0,R.jsxs)(Ju,{ref:i,$active:a,children:[(0,R.jsx)(Yu,{children:(0,R.jsx)(`p`,{children:e.title})}),(0,R.jsxs)(Xu,{children:[r?Array.from({length:e.loaders},(e,t)=>(0,R.jsx)(J,{},t)):n.filter(t=>t.status===e.title).map(e=>e._id===t?(0,R.jsx)($u,{},e._id):(0,R.jsx)(Uu,{task:e,id:e._id},e._id)),t&&o?.status!==e.title&&(0,R.jsx)($u,{})]})]})},td=F.main`
  width: 100%;
`,nd=F.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 0 0 16px;
  }
`,rd=F.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`,id=F.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`,ad=()=>{let{getTasks:e,loadingErr:t,tasks:n,moveTask:r,loading:i}=(0,S.useContext)(_o);(0,S.useEffect)(()=>{async function t(){await e()}t()},[]);let{theme:a}=(0,S.useContext)(I),o=ss(os(rc,{activationConstraint:{distance:1}})),s=e=>{let{active:t,over:n}=e;if(!n)return;let i=t.id,a=n.id;r(i,a),l(null)},[c,l]=(0,S.useState)(null),u=n.length===0;return(0,R.jsxs)(td,{children:[(0,R.jsx)(nd,{children:(0,R.jsx)(rd,{children:(0,R.jsx)(id,{children:t?(0,R.jsx)(Tu,{style:{whiteSpace:`pre-wrap`},children:t}):!i&&u?(0,R.jsx)(Tu,{children:`Список задач пуст`}):(0,R.jsxs)($c,{sensors:o,onDragStart:e=>{l(e.active.id)},onDragEnd:s,children:[bu.map((e,t)=>(0,R.jsx)(ed,{id:e.title,column:e,activeTask:c},t)),(0,R.jsx)(yl,{children:c?(0,R.jsx)(Uu,{task:n.find(e=>e._id===c),isOverlay:!0}):null})]})})})}),(0,R.jsx)(yu,{position:`top-left`,autoClose:4e3,newestOnTop:!0,theme:a.mode})]})},od=F.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${({theme:e})=>e.primaryBg};
`;function sd(){return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(od,{children:[(0,R.jsx)(yo,{}),(0,R.jsx)(ad,{}),(0,R.jsx)(Vt,{})]})})}var cd=({IsSignUp:e})=>{let{loading:t,handleChange:n,formData:r,errors:i,error:a,handleSubmit:o,clearForm:s}=(0,S.useContext)(go);return(0,R.jsx)(xu,{children:(0,R.jsx)(Su,{children:(0,R.jsx)(Cu,{children:(0,R.jsxs)(wu,{children:[(0,R.jsx)(Tu,{children:(0,R.jsx)(`h2`,{children:e?`Регистрация`:`Вход`})}),(0,R.jsxs)(Eu,{disabled:t,children:[e&&(0,R.jsx)(Du,{type:`text`,name:`name`,id:`name`,placeholder:`Имя`,onChange:e=>n(e),value:r.name,$error:i.name}),(0,R.jsx)(Du,{type:`text`,name:`login`,id:`formlogin`,placeholder:`Эл. почта`,onChange:e=>n(e),value:r.login,$error:i.login}),(0,R.jsx)(Du,{type:`password`,name:`password`,id:`formpassword`,placeholder:`Пароль`,onChange:e=>n(e),value:r.password,$error:i.password}),(0,R.jsx)(Au,{children:a}),(0,R.jsx)(Ou,{disabled:!!a||t,onClick:t=>o(t,e),children:e?`Зарегистрироваться`:`Войти`}),e?(0,R.jsx)(ku,{children:(0,R.jsxs)(`p`,{children:[`Уже есть аккаунт?`,` `,(0,R.jsx)(Fn,{onClick:s,to:`/sign-in`,children:`Войдите здесь`})]})}):(0,R.jsxs)(ku,{children:[(0,R.jsx)(`p`,{children:`Нужно зарегистрироваться?`}),(0,R.jsx)(Fn,{onClick:s,to:`/sign-up`,children:`Регистрируйтесь здесь`})]})]})]})})})})},ld=()=>(0,R.jsx)(cd,{IsSignUp:!1}),ud=()=>(0,R.jsx)(cd,{IsSignUp:!0}),dd=F.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,fd=F.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.overlay};
`,pd=F.div`
  display: block;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.secondaryBg};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({theme:e})=>e.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  z-index: 6;

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`,md=F.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`,hd=F.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`,gd=F.button`
  width: 153px;
  height: 30px;
  background-color: rgb(86, 94, 239);
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: rgb(255, 255, 255);
  margin-right: 10px;

  &:hover {
    background-color: rgb(51, 57, 155);
  }

  a {
    width: 100%;
    height: 100%;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`,_d=F(gd)`
  background-color: transparent;
  border: 0.7px solid ${({theme:e})=>e.buttonBg};
  margin-right: 0;

  a {
    color: ${({theme:e})=>e.buttonBg};
  }

  &:hover {
    border: 0.7px solid rgb(86, 94, 239);
    background-color: rgb(86, 94, 239);
    color: rgb(255, 255, 255);

    a {
      color: rgb(255, 255, 255);
    }
  }

  @media only screen and (max-width: 375px) {
    margin-bottom: 0;
  }
`,vd=()=>{let{handleLogout:e}=(0,S.useContext)(go),{clearTasks:t}=(0,S.useContext)(_o),n=ft();return(0,R.jsx)(lo,{onClick:()=>n(`/`),children:(0,R.jsx)(dd,{children:(0,R.jsx)(fd,{children:(0,R.jsxs)(pd,{onClick:e=>e.stopPropagation(),children:[(0,R.jsx)(md,{children:(0,R.jsx)(`h2`,{children:`Выйти из аккаунта?`})}),(0,R.jsx)(`form`,{id:`formExit`,children:(0,R.jsxs)(hd,{children:[(0,R.jsx)(gd,{onClick:n=>{e(n),t()},children:(0,R.jsx)(Fn,{to:`/sign-in`,children:`Да, выйти`})}),(0,R.jsx)(_d,{children:(0,R.jsx)(Fn,{to:`/`,children:`Нет, остаться`})})]})})]})})})})},yd=()=>(0,R.jsx)(vd,{}),bd=F.div`
  width: 182px;
  margin-bottom: 20px;

  ${({$isPopCalendar:e})=>e&&`
    width: 100%;
  `}

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`,xd=F.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`,Sd=F.div`
  display: block;
`,Y=F.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`,Cd=F.div`
  color: rgb(148, 166, 190);
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`,wd=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Td=F.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: rgb(148, 166, 190);
  }
`,Ed=F.div`
  margin-bottom: 12px;
`,Dd=F.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`,Od=F.div`
  color: rgb(148, 166, 190);
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`,kd=F.div`
  width: 182px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -4px;

  @media screen and (max-width: 660px) {
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-self: self-start;
  }
`,Ad=F.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: rgb(148, 166, 190);
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: rgb(148, 166, 190);
    background-color: ${({theme:e})=>e.primaryBg};
  }

  @media screen and (max-width: 660px) {
    width: 12%;
    height: 0;
    padding-top: 6%;
    padding-bottom: 6%;
    font-size: 14px;
  }

  ${({$isOtherMonth:e})=>e&&`
    opacity: 0;
  `}

  ${({$isToday:e})=>e&&`
    font-weight: 700;
  `}

  ${({theme:e,$isSelected:t})=>t&&`
    background-color: rgb(148, 166, 190);
    color: ${e.secondaryBg};
  `}
`,jd=F.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`,Md=F.p`
  color: rgb(148, 166, 190);
  font-size: 10px;
  line-height: 1;

  span {
    color: ${({theme:e})=>e.primaryText};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }

  ${({$error:e})=>e&&`
      color: rgb(248, 77, 77); 
    `};
`,Nd=({dateControl:e=``,disable:t,onDateSelect:n,$error:r})=>{let[i,a]=(0,S.useState)(e?new Date(e):new Date),o=(0,S.useMemo)(()=>e?new Date(e):null,[e]),[s,c]=(0,S.useState)([]),l=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate();(0,S.useEffect)(()=>{(()=>{let e=i.getFullYear(),t=i.getMonth(),n=new Date(e,t,1),r=new Date(e,t+1,0),a=n.getDay()===0?6:n.getDay()-1,o=[],s=new Date(e,t,0).getDate();for(let n=a-1;n>=0;n--)o.push({day:s-n,isOtherMonth:!0,date:new Date(e,t-1,s-n)});for(let n=1;n<=r.getDate();n++){let r=new Date(e,t,n);o.push({day:n,isCurrentMonth:!0,isToday:l(r,new Date),date:r})}let u=o.length%7,d=u===0?0:7-u;if(d>0)for(let n=1;n<=d;n++)o.push({day:n,isOtherMonth:!0,date:new Date(e,t+1,n)});c(o)})()},[i,o]);let u=()=>{a(new Date(i.getFullYear(),i.getMonth()-1,1))},d=()=>{a(new Date(i.getFullYear(),i.getMonth()+1,1))},f=e=>{if(!(t||e.isOtherMonth)&&n){let t=e.date;n(t)}};return(0,R.jsxs)(bd,{children:[(0,R.jsx)(xd,{children:`Даты`}),(0,R.jsxs)(Sd,{children:[(0,R.jsxs)(Y,{children:[(0,R.jsx)(Cd,{children:i.toLocaleString(`ru`,{month:`long`,year:`numeric`})}),(0,R.jsxs)(wd,{children:[(0,R.jsx)(Td,{"data-action":`prev`,onClick:u,children:(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`11`,viewBox:`0 0 6 11`,children:(0,R.jsx)(`path`,{d:`M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z`})})}),(0,R.jsx)(Td,{"data-action":`next`,onClick:d,children:(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`6`,height:`11`,viewBox:`0 0 6 11`,children:(0,R.jsx)(`path`,{d:`M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z`})})})]})]}),(0,R.jsxs)(Ed,{children:[(0,R.jsxs)(Dd,{children:[(0,R.jsx)(Od,{children:`пн`}),(0,R.jsx)(Od,{children:`вт`}),(0,R.jsx)(Od,{children:`ср`}),(0,R.jsx)(Od,{children:`чт`}),(0,R.jsx)(Od,{children:`пт`}),(0,R.jsx)(Od,{children:`сб`}),(0,R.jsx)(Od,{children:`вс`})]}),(0,R.jsx)(kd,{children:s.map((e,t)=>(0,R.jsx)(Ad,{$isOtherMonth:e.isOtherMonth,$isToday:e.isToday,$isSelected:o!==null&&l(e.date,o),onClick:()=>f(e),style:{cursor:e.isOtherMonth?`default`:`pointer`},children:e.day},t))})]}),(0,R.jsx)(`input`,{type:`hidden`,id:`datepick_value`,value:o?o.toLocaleDateString(`ru-RU`,{day:`2-digit`,month:`2-digit`,year:`numeric`}).replace(/\./g,`.`):``}),(0,R.jsx)(jd,{children:(0,R.jsxs)(Md,{$error:r,children:[o?`Срок исполнения: `:`Выберите срок исполнения.`,(0,R.jsx)(`span`,{children:o?o.toLocaleDateString(`ru-RU`,{day:`2-digit`,month:`2-digit`,year:`numeric`}):``})]})})]})]})},Pd=F.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  height: 100vh;
  overflow-y: auto;

  @media screen and (max-width: 660px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;

    height: auto;
    min-height: 0;

    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`,Fd=F.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.overlay};

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
    height: auto;
    min-height: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`,X=F.div`
  display: block;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.secondaryBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({theme:e})=>e.border};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`,Id=F.div`
  display: block;
  text-align: left;
`,Ld=F.h3`
  color: ${({theme:e})=>e.primaryText};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`,Rd=F(Fn)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: rgb(148, 166, 190);
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.primaryText};
  }
`,zd=F.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,Bd=F.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`,Vd=F.div`
  display: flex;
  flex-direction: column;
`,Hd=F.label`
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,Ud=F.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  color: ${({theme:e})=>e.primaryText};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: rgb(148, 166, 190);
    letter-spacing: -0.14px;
  }
`,Wd=F.textarea`
  width: 100%;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({theme:e})=>e.primaryText};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: rgb(148, 166, 190);
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`,Gd=F.div`
  margin-bottom: 20px;
`,Kd=F.p`
  margin-bottom: 14px;
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,qd=F.div`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 495px) {
    flex-wrap: wrap;
    gap: 7px 0;
  }
`,Jd=F.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 0.4;
  cursor: pointer;
  background-color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.bg??e.cardThemes.default.bg};

  ${({$active:e})=>e&&`opacity: 1 !important;`};

  &:not(:last-child) {
    margin-right: 7px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.text??e.cardThemes.default.text};
  }
`,Yd=F.button`
  width: 132px;
  height: 30px;
  background-color: rgb(86, 94, 239);
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: rgb(255, 255, 255);
  float: right;

  &:hover {
    background-color: rgb(51, 57, 155);
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Xd=()=>{let{handlePostTask:e,posting:t,task:n,setTask:r,errors:i,setErrors:a}=(0,S.useContext)(_o),o=[{name:`Web Design`,color:`orange`},{name:`Research`,color:`green`},{name:`Copywriting`,color:`purple`}],s=e=>{r(t=>({...t,date:e})),a({...i,date:!1})},c=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n})),a({...i,[t]:!1})};return(0,R.jsx)(Pd,{children:(0,R.jsx)(Fd,{children:(0,R.jsx)(X,{children:(0,R.jsxs)(Id,{children:[(0,R.jsx)(Ld,{children:`Создание задачи`}),(0,R.jsx)(Rd,{to:`/`,onClick:()=>{a({title:``,description:``,topic:``,date:``}),r({title:``,description:``,topic:``,date:``})},children:`✖`}),(0,R.jsxs)(zd,{children:[(0,R.jsxs)(Bd,{disabled:t,children:[(0,R.jsxs)(Vd,{children:[(0,R.jsx)(Hd,{htmlFor:`formTitle`,children:`Название задачи`}),(0,R.jsx)(Ud,{type:`text`,name:`title`,id:`formTitle`,placeholder:`Введите название задачи...`,autoFocus:!0,onChange:e=>c(e),value:n.title,style:i.title?{border:`0.7px solid rgba(248, 77, 77, 1)`}:{},onChange:e=>c(e)})]}),(0,R.jsxs)(Vd,{children:[(0,R.jsx)(Hd,{htmlFor:`textArea`,children:`Описание задачи`}),(0,R.jsx)(Wd,{name:`description`,id:`textArea`,placeholder:`Введите описание задачи...`,onChange:e=>c(e),value:n.description,style:i.description?{border:`0.7px solid rgba(248, 77, 77, 1)`}:{}})]})]}),(0,R.jsx)(Nd,{$isPopCalendar:!0,dateControl:n.date,onDateSelect:s,$error:i.date})]}),(0,R.jsxs)(Gd,{children:[(0,R.jsx)(Kd,{children:`Категория`}),(0,R.jsx)(qd,{style:i.topic?{border:`0.7px solid rgba(248, 77, 77, 1)`,borderRadius:`16px`}:{},children:o.map(e=>(0,R.jsx)(Jd,{$cardTheme:e.name,$active:n.topic===e.name,onClick:()=>{r(t=>({...t,topic:e.name})),a({...i,topic:!1})},style:{cursor:`pointer`},children:(0,R.jsx)(`p`,{children:e.name})},e.name))})]}),(0,R.jsx)(Yd,{type:`button`,disabled:t,onClick:t=>{e(t,n)},children:t?`Создание...`:`Создать задачу`})]})})})})},Zd=()=>(0,R.jsx)(Xd,{});function Qd(e,t){return function(){return e.apply(t,arguments)}}var{toString:$d}=Object.prototype,{getPrototypeOf:ef}=Object,{iterator:tf,toStringTag:nf}=Symbol,rf=(e=>t=>{let n=$d.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),af=e=>(e=e.toLowerCase(),t=>rf(t)===e),of=e=>t=>typeof t===e,{isArray:sf}=Array,cf=of(`undefined`);function lf(e){return e!==null&&!cf(e)&&e.constructor!==null&&!cf(e.constructor)&&pf(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var uf=af(`ArrayBuffer`);function df(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&uf(e.buffer),t}var ff=of(`string`),pf=of(`function`),mf=of(`number`),hf=e=>typeof e==`object`&&!!e,gf=e=>e===!0||e===!1,_f=e=>{if(rf(e)!==`object`)return!1;let t=ef(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(nf in e)&&!(tf in e)},vf=e=>{if(!hf(e)||lf(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},yf=af(`Date`),bf=af(`File`),xf=e=>!!(e&&e.uri!==void 0),Sf=e=>e&&e.getParts!==void 0,Cf=af(`Blob`),wf=af(`FileList`),Tf=e=>hf(e)&&pf(e.pipe);function Ef(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Df=Ef(),Of=Df.FormData===void 0?void 0:Df.FormData,kf=e=>{if(!e)return!1;if(Of&&e instanceof Of)return!0;let t=ef(e);if(!t||t===Object.prototype||!pf(e.append))return!1;let n=rf(e);return n===`formdata`||n===`object`&&pf(e.toString)&&e.toString()===`[object FormData]`},Af=af(`URLSearchParams`),[jf,Mf,Nf,Pf]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(af),Ff=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function If(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),sf(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(lf(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Lf(e,t){if(lf(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Rf=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,zf=e=>!cf(e)&&e!==Rf;function Bf(...e){let{caseless:t,skipUndefined:n}=zf(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&Lf(r,i)||i,o=Qf(r,a)?r[a]:void 0;_f(o)&&_f(e)?r[a]=Bf(o,e):_f(e)?r[a]=Bf({},e):sf(e)?r[a]=e.slice():(!n||!cf(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++)e[t]&&If(e[t],i);return r}var Vf=(e,t,n,{allOwnKeys:r}={})=>(If(t,(t,r)=>{n&&pf(t)?Object.defineProperty(e,r,{__proto__:null,value:Qd(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Hf=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Uf=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Wf=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&ef(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gf=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Kf=e=>{if(!e)return null;if(sf(e))return e;let t=e.length;if(!mf(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},qf=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&ef(Uint8Array)),Jf=(e,t)=>{let n=(e&&e[tf]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Yf=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xf=af(`HTMLFormElement`),Zf=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Qf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$f=af(`RegExp`),ep=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};If(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},tp=e=>{ep(e,(t,n)=>{if(pf(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(pf(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},np=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return sf(e)?r(e):r(String(e).split(t)),n},rp=()=>{},ip=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ap(e){return!!(e&&pf(e.append)&&e[nf]===`FormData`&&e[tf])}var op=e=>{let t=new WeakSet,n=e=>{if(hf(e)){if(t.has(e))return;if(lf(e))return e;if(!(`toJSON`in e)){t.add(e);let r=sf(e)?[]:{};return If(e,(e,t)=>{let i=n(e);!cf(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},sp=af(`AsyncFunction`),cp=e=>e&&(hf(e)||pf(e))&&pf(e.then)&&pf(e.catch),lp=((e,t)=>e?setImmediate:t?((e,t)=>(Rf.addEventListener(`message`,({source:n,data:r})=>{n===Rf&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Rf.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,pf(Rf.postMessage)),Z={isArray:sf,isArrayBuffer:uf,isBuffer:lf,isFormData:kf,isArrayBufferView:df,isString:ff,isNumber:mf,isBoolean:gf,isObject:hf,isPlainObject:_f,isEmptyObject:vf,isReadableStream:jf,isRequest:Mf,isResponse:Nf,isHeaders:Pf,isUndefined:cf,isDate:yf,isFile:bf,isReactNativeBlob:xf,isReactNative:Sf,isBlob:Cf,isRegExp:$f,isFunction:pf,isStream:Tf,isURLSearchParams:Af,isTypedArray:qf,isFileList:wf,forEach:If,merge:Bf,extend:Vf,trim:Ff,stripBOM:Hf,inherits:Uf,toFlatObject:Wf,kindOf:rf,kindOfTest:af,endsWith:Gf,toArray:Kf,forEachEntry:Jf,matchAll:Yf,isHTMLForm:Xf,hasOwnProperty:Qf,hasOwnProp:Qf,reduceDescriptors:ep,freezeMethods:tp,toObjectSet:np,toCamelCase:Zf,noop:rp,toFiniteNumber:ip,findKey:Lf,global:Rf,isContextDefined:zf,isSpecCompliantForm:ap,toJSONObject:op,isAsyncFn:sp,isThenable:cp,setImmediate:lp,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(Rf):typeof process<`u`&&process.nextTick||lp,isIterable:e=>e!=null&&pf(e[tf])},up=Z.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),dp=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&up[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function fp(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var pp=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),mp=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function hp(e,t){return Z.isArray(e)?e.map(e=>hp(e,t)):fp(String(e).replace(t,``))}var gp=e=>hp(e,pp),_p=e=>hp(e,mp);function vp(e){let t=Object.create(null);return Z.forEach(e.toJSON(),(e,n)=>{t[n]=_p(e)}),t}var yp=Symbol(`internals`);function bp(e){return e&&String(e).trim().toLowerCase()}function xp(e){return e===!1||e==null?e:Z.isArray(e)?e.map(xp):gp(String(e))}function Sp(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Cp=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function wp(e,t,n,r,i){if(Z.isFunction(r))return r.call(this,t,n);if(i&&(t=n),Z.isString(t)){if(Z.isString(r))return t.indexOf(r)!==-1;if(Z.isRegExp(r))return r.test(t)}}function Tp(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ep(e,t){let n=Z.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Dp=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=bp(t);if(!i)throw Error(`header name must be a non-empty string`);let a=Z.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=xp(e))}let a=(e,t)=>Z.forEach(e,(e,n)=>i(e,n,t));if(Z.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Z.isString(e)&&(e=e.trim())&&!Cp(e))a(dp(e),t);else if(Z.isObject(e)&&Z.isIterable(e)){let n={},r,i;for(let t of e){if(!Z.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?Z.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=bp(e),e){let n=Z.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Sp(e);if(Z.isFunction(t))return t.call(this,e,n);if(Z.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=bp(e),e){let n=Z.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||wp(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=bp(e),e){let i=Z.findKey(n,e);i&&(!t||wp(n,n[i],i,t))&&(delete n[i],r=!0)}}return Z.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||wp(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return Z.forEach(this,(r,i)=>{let a=Z.findKey(n,i);if(a){t[a]=xp(r),delete t[i];return}let o=e?Tp(i):String(i).trim();o!==i&&delete t[i],t[o]=xp(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return Z.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&Z.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[yp]=this[yp]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=bp(e);t[r]||(Ep(n,e),t[r]=!0)}return Z.isArray(e)?e.forEach(r):r(e),this}};Dp.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),Z.reduceDescriptors(Dp.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),Z.freezeMethods(Dp);var Op=`[REDACTED ****]`;function kp(e){if(Z.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(Z.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Ap(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||Z.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Dp&&(e=e.toJSON()),r.push(e);let t;if(Z.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);Z.isUndefined(r)||(t[n]=r)});else{if(!Z.isPlainObject(e)&&kp(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Op:i(a);Z.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var Q=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&Z.hasOwnProp(e,`redact`)?e.redact:void 0,n=Z.isArray(t)&&t.length>0?Ap(e,t):Z.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};Q.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,Q.ERR_BAD_OPTION=`ERR_BAD_OPTION`,Q.ECONNABORTED=`ECONNABORTED`,Q.ETIMEDOUT=`ETIMEDOUT`,Q.ECONNREFUSED=`ECONNREFUSED`,Q.ERR_NETWORK=`ERR_NETWORK`,Q.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,Q.ERR_DEPRECATED=`ERR_DEPRECATED`,Q.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,Q.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,Q.ERR_CANCELED=`ERR_CANCELED`,Q.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,Q.ERR_INVALID_URL=`ERR_INVALID_URL`,Q.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function jp(e){return Z.isPlainObject(e)||Z.isArray(e)}function Mp(e){return Z.endsWith(e,`[]`)?e.slice(0,-2):e}function Np(e,t,n){return e?e.concat(t).map(function(e,t){return e=Mp(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Pp(e){return Z.isArray(e)&&!e.some(jp)}var Fp=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function Ip(e,t,n){if(!Z.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Z.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&Z.isSpecCompliantForm(t);if(!Z.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(Z.isDate(e))return e.toISOString();if(Z.isBoolean(e))return e.toString();if(!l&&Z.isBlob(e))throw new Q(`Blob is not supported. Use a Buffer instead.`);return Z.isArrayBuffer(e)||Z.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(Z.isReactNative(t)&&Z.isReactNativeBlob(e))return t.append(Np(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(Z.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Z.isArray(e)&&Pp(e)||(Z.isFileList(e)||Z.endsWith(n,`[]`))&&(s=Z.toArray(e)))return n=Mp(n),s.forEach(function(e,r){!(Z.isUndefined(e)||e===null)&&t.append(o===!0?Np([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return jp(e)?!0:(t.append(Np(i,n,a),u(e)),!1)}let f=[],p=Object.assign(Fp,{defaultVisitor:d,convertValue:u,isVisitable:jp});function m(e,n,r=0){if(!Z.isUndefined(e)){if(r>c)throw new Q(`Object is too deeply nested (`+r+` levels). Max depth: `+c,Q.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),Z.forEach(e,function(e,a){(!(Z.isUndefined(e)||e===null)&&i.call(t,e,Z.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!Z.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function Lp(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Rp(e,t){this._pairs=[],e&&Ip(e,this,t)}var zp=Rp.prototype;zp.append=function(e,t){this._pairs.push([e,t])},zp.toString=function(e){let t=e?function(t){return e.call(this,t,Lp)}:Lp;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Bp(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Vp(e,t,n){if(!t)return e;let r=n&&n.encode||Bp,i=Z.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):Z.isURLSearchParams(t)?t.toString():new Rp(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Hp=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){Z.forEach(this.handlers,function(t){t!==null&&e(t)})}},Up={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Wp={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Rp,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Gp=s({hasBrowserEnv:()=>Kp,hasStandardBrowserEnv:()=>Jp,hasStandardBrowserWebWorkerEnv:()=>Yp,navigator:()=>qp,origin:()=>Xp}),Kp=typeof window<`u`&&typeof document<`u`,qp=typeof navigator==`object`&&navigator||void 0,Jp=Kp&&(!qp||[`ReactNative`,`NativeScript`,`NS`].indexOf(qp.product)<0),Yp=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Xp=Kp&&window.location.href||`http://localhost`,Zp={...Gp,...Wp};function Qp(e,t){return Ip(e,new Zp.classes.URLSearchParams,{visitor:function(e,t,n,r){return Zp.isNode&&Z.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function $p(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function em(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function tm(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&Z.isArray(r)?r.length:a,s?(Z.hasOwnProp(r,a)?r[a]=Z.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!Z.hasOwnProp(r,a)||!Z.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&Z.isArray(r[a])&&(r[a]=em(r[a])),!o)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){let n={};return Z.forEachEntry(e,(e,r)=>{t($p(e),r,n,0)}),n}return null}var nm=(e,t)=>e!=null&&Z.hasOwnProp(e,t)?e[t]:void 0;function rm(e,t,n){if(Z.isString(e))try{return(t||JSON.parse)(e),Z.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var im={transitional:Up,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=Z.isObject(e);if(i&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return r?JSON.stringify(tm(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=nm(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return Qp(e,t).toString();if((a=Z.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=nm(this,`env`),r=n&&n.FormData;return Ip(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),rm(e)):e}],transformResponse:[function(e){let t=nm(this,`transitional`)||im.transitional,n=t&&t.forcedJSONParsing,r=nm(this,`responseType`),i=r===`json`;if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,nm(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?Q.from(e,Q.ERR_BAD_RESPONSE,this,null,nm(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zp.classes.FormData,Blob:Zp.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};Z.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{im.headers[e]={}});function am(e,t){let n=this||im,r=t||n,i=Dp.from(r.headers),a=r.data;return Z.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function om(e){return!!(e&&e.__CANCEL__)}var sm=class extends Q{constructor(e,t,n){super(e??`canceled`,Q.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function cm(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Q(`Request failed with status code `+n.status,n.status>=400&&n.status<500?Q.ERR_BAD_REQUEST:Q.ERR_BAD_RESPONSE,n.config,n.request,n))}function lm(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function um(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function dm(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var fm=(e,t,n=3)=>{let r=0,i=um(50,250);return dm(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},pm=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},mm=e=>(...t)=>Z.asap(()=>e(...t)),hm=Zp.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Zp.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Zp.origin),Zp.navigator&&/(msie|trident)/i.test(Zp.navigator.userAgent)):()=>!0,gm=Zp.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];Z.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),Z.isString(r)&&s.push(`path=${r}`),Z.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),Z.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function _m(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function vm(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function ym(e,t,n){let r=!_m(t);return e&&(r||n===!1)?vm(e,t):t}var bm=e=>e instanceof Dp?{...e}:e;function xm(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return Z.isPlainObject(e)&&Z.isPlainObject(t)?Z.merge.call({caseless:r},e,t):Z.isPlainObject(t)?Z.merge({},t):Z.isArray(t)?t.slice():t}function i(e,t,n,i){if(!Z.isUndefined(t))return r(e,t,n,i);if(!Z.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!Z.isUndefined(t))return r(void 0,t)}function o(e,t){if(!Z.isUndefined(t))return r(void 0,t);if(!Z.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(Z.hasOwnProp(t,a))return r(n,i);if(Z.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(bm(e),bm(t),n,!0)};return Z.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=Z.hasOwnProp(c,r)?c[r]:i,o=a(Z.hasOwnProp(e,r)?e[r]:void 0,Z.hasOwnProp(t,r)?t[r]:void 0,r);Z.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Sm=[`content-type`,`content-length`];function Cm(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{Sm.includes(t.toLowerCase())&&e.set(t,n)})}var wm=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Tm=e=>{let t=xm({},e),n=e=>Z.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Dp.from(s),t.url=Vp(ym(l,d,u),e.params,e.paramsSerializer),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?wm(c.password):``))),Z.isFormData(r)&&(Zp.hasStandardBrowserEnv||Zp.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):Z.isFunction(r.getHeaders)&&Cm(s,r.getHeaders(),n(`formDataHeaderPolicy`))),Zp.hasStandardBrowserEnv&&(Z.isFunction(i)&&(i=i(t)),i===!0||i==null&&hm(t.url))){let e=a&&o&&gm.read(o);e&&s.set(a,e)}return t},Em=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Tm(e),i=r.data,a=Dp.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Dp.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());cm(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new Q(`Request aborted`,Q.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new Q(t&&t.message?t.message:`Network Error`,Q.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||Up;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Q(t,i.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&Z.forEach(vp(a),function(e,t){h.setRequestHeader(t,e)}),Z.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=fm(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=fm(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new sm(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=lm(r.url);if(_&&!Zp.protocols.includes(_)){n(new Q(`Unsupported protocol `+_+`:`,Q.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Dm=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof Q?t:new sm(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new Q(`timeout of ${t}ms exceeded`,Q.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>Z.asap(o),s},Om=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},km=async function*(e,t){for await(let n of Am(e))yield*Om(n,t)},Am=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},jm=(e,t,n,r)=>{let i=km(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function Mm(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Nm=`1.16.1`,Pm=64*1024,{isFunction:Fm}=Z,Im=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Lm=e=>{let t=Z.global!==void 0&&Z.global!==null?Z.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=Z.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Fm(i):typeof fetch==`function`,c=Fm(a),l=Fm(o);if(!s)return!1;let u=s&&Fm(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Im(()=>{let e=!1,t=new a(Zp.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Im(()=>Z.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new Q(`Response type '${e}' is not supported`,Q.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(Z.isBlob(e))return e.size;if(Z.isSpecCompliantForm(e))return(await new a(Zp.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(e)||Z.isArrayBuffer(e))return e.byteLength;if(Z.isURLSearchParams(e)&&(e+=``),Z.isString(e))return(await d(e)).byteLength},g=async(e,t)=>Z.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:x,maxContentLength:S,maxBodyLength:C}=Tm(e),w=Z.isNumber(S)&&S>-1,ee=Z.isNumber(C)&&C>-1,T=i||fetch;v=v?(v+``).toLowerCase():`text`;let E=Dm([l,u&&u.toAbortSignal()],d),D=null,te=E&&E.unsubscribe&&(()=>{E.unsubscribe()}),ne;try{if(w&&typeof t==`string`&&t.startsWith(`data:`)&&Mm(t)>S)throw new Q(`maxContentLength size of `+S+` exceeded`,Q.ERR_BAD_RESPONSE,e,D);if(ee&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>C)throw new Q(`Request body larger than maxBodyLength limit`,Q.ERR_BAD_REQUEST,e,D)}if(_&&f&&n!==`get`&&n!==`head`&&(ne=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(Z.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=pm(ne,fm(mm(_)));s=jm(e.body,Pm,t,n)}}Z.isString(b)||(b=b?`include`:`omit`);let i=c&&`credentials`in a.prototype;if(Z.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/`+Nm,!1);let l={...x,signal:E,method:n.toUpperCase(),headers:vp(y.normalize()),body:s,duplex:`half`,credentials:i?b:void 0};D=c&&new a(t,l);let u=await(c?T(D,x):T(t,l));if(w){let t=Z.toFiniteNumber(u.headers.get(`content-length`));if(t!=null&&t>S)throw new Q(`maxContentLength size of `+S+` exceeded`,Q.ERR_BAD_RESPONSE,e,D)}let d=p&&(v===`stream`||v===`response`);if(p&&u.body&&(h||w||d&&te)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=u[e]});let n=Z.toFiniteNumber(u.headers.get(`content-length`)),[r,i]=h&&pm(n,fm(mm(h),!0))||[],a=0;u=new o(jm(u.body,Pm,t=>{if(w&&(a=t,a>S))throw new Q(`maxContentLength size of `+S+` exceeded`,Q.ERR_BAD_RESPONSE,e,D);r&&r(t)},()=>{i&&i(),te&&te()}),t)}v||=`text`;let re=await m[Z.findKey(m,v)||`text`](u,e);if(w&&!p&&!d){let t;if(re!=null&&(typeof re.byteLength==`number`?t=re.byteLength:typeof re.size==`number`?t=re.size:typeof re==`string`&&(t=typeof r==`function`?new r().encode(re).byteLength:re.length)),typeof t==`number`&&t>S)throw new Q(`maxContentLength size of `+S+` exceeded`,Q.ERR_BAD_RESPONSE,e,D)}return!d&&te&&te(),await new Promise((t,n)=>{cm(t,n,{data:re,headers:Dp.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:D})})}catch(t){if(te&&te(),E&&E.aborted&&E.reason instanceof Q){let n=E.reason;throw n.config=e,D&&(n.request=D),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new Q(`Network Error`,Q.ERR_NETWORK,e,D,t&&t.response),{cause:t.cause||t}):Q.from(t,t&&t.code,e,D,t&&t.response)}}},Rm=new Map,zm=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Rm;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Lm(t)),l=c;return c};zm();var Bm={http:null,xhr:Em,fetch:{get:zm}};Z.forEach(Bm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var Vm=e=>`- ${e}`,Hm=e=>Z.isFunction(e)||e===null||e===!1;function Um(e,t){e=Z.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Hm(r)&&(i=Bm[(n=String(r)).toLowerCase()],i===void 0))throw new Q(`Unknown adapter '${n}'`);if(i&&(Z.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new Q(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Vm).join(`
`):` `+Vm(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var Wm={getAdapter:Um,adapters:Bm};function Gm(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new sm(null,e)}function Km(e){return Gm(e),e.headers=Dp.from(e.headers),e.data=am.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Wm.getAdapter(e.adapter||im.adapter,e)(e).then(function(t){Gm(e),e.response=t;try{t.data=am.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Dp.from(t.headers),t},function(t){if(!om(t)&&(Gm(e),t&&t.response)){e.response=t.response;try{t.response.data=am.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Dp.from(t.response.headers)}return Promise.reject(t)})}var qm={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{qm[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Jm={};qm.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Nm+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new Q(r(i,` has been removed`+(t?` in `+t:``)),Q.ERR_DEPRECATED);return t&&!Jm[i]&&(Jm[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},qm.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Ym(e,t,n){if(typeof e!=`object`)throw new Q(`options must be an object`,Q.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new Q(`option `+a+` must be `+n,Q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Q(`Unknown option `+a,Q.ERR_BAD_OPTION)}}var Xm={assertOptions:Ym,validators:qm},Zm=Xm.validators,Qm=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Hp,response:new Hp}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=xm(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Xm.assertOptions(n,{silentJSONParsing:Zm.transitional(Zm.boolean),forcedJSONParsing:Zm.transitional(Zm.boolean),clarifyTimeoutError:Zm.transitional(Zm.boolean),legacyInterceptorReqResOrdering:Zm.transitional(Zm.boolean)},!1),r!=null&&(Z.isFunction(r)?t.paramsSerializer={serialize:r}:Xm.assertOptions(r,{encode:Zm.function,serialize:Zm.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Xm.assertOptions(t,{baseUrl:Zm.spelling(`baseURL`),withXsrfToken:Zm.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&Z.merge(i.common,i[t.method]);i&&Z.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Dp.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||Up;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Km.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Km.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=xm(this.defaults,e),Vp(ym(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};Z.forEach([`delete`,`get`,`head`,`options`],function(e){Qm.prototype[e]=function(t,n){return this.request(xm(n||{},{method:e,url:t,data:(n||{}).data}))}}),Z.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(xm(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Qm.prototype[e]=t(),e!==`query`&&(Qm.prototype[e+`Form`]=t(!0))});var $m=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new sm(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function eh(e){return function(t){return e.apply(null,t)}}function th(e){return Z.isObject(e)&&e.isAxiosError===!0}var nh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(nh).forEach(([e,t])=>{nh[t]=e});function rh(e){let t=new Qm(e),n=Qd(Qm.prototype.request,t);return Z.extend(n,Qm.prototype,t,{allOwnKeys:!0}),Z.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return rh(xm(e,t))},n}var $=rh(im);$.Axios=Qm,$.CanceledError=sm,$.CancelToken=$m,$.isCancel=om,$.VERSION=Nm,$.toFormData=Ip,$.AxiosError=Q,$.Cancel=$.CanceledError,$.all=function(e){return Promise.all(e)},$.spread=eh,$.isAxiosError=th,$.mergeConfig=xm,$.AxiosHeaders=Dp,$.formToJSON=e=>tm(Z.isHTMLForm(e)?new FormData(e):e),$.getAdapter=Wm.getAdapter,$.HttpStatusCode=nh,$.default=$;var ih=`https://wedev-api.sky.pro/api/kanban/`;async function ah({token:e}){return await $.get(ih,{headers:{Authorization:`Bearer ${e}`}})}async function oh({token:e,id:t}){return await $.get(ih+t,{headers:{Authorization:`Bearer ${e}`}})}async function sh({token:e,task:t}){return await $.post(ih,{...t.title?{title:t.title}:{},...t.description?{description:t.description}:{},...t.topic?{topic:t.topic}:{},...t.date?{date:t.date}:{}},{headers:{Authorization:`Bearer ${e}`,"Content-Type":``}})}async function ch({token:e,id:t,task:n}){return await $.put(ih+t,{...n.title?{title:n.title}:{},...n.status?{status:n.status}:{},...n.topic?{topic:n.topic}:{},...n.description?{description:n.description}:{},...n.date?{date:n.date}:{}},{headers:{Authorization:`Bearer ${e}`,"Content-Type":``}})}async function lh({token:e,id:t}){return await $.delete(ih+t,{headers:{Authorization:`Bearer ${e}`}})}var uh=F.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  overflow-y: auto;
  inset: 0;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;

    height: auto;
    min-height: 0;

    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`,dh=F.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.overlay};

  @media screen and (max-width: 660px) {
    max-width: 100vw;
    min-height: 0;
    padding: 0;
    justify-content: flex-start;
    height: auto;
  }
`,fh=F.div`
  display: block;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.secondaryBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({theme:e})=>e.border};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`,ph=F.div`
  display: block;
  text-align: left;
`,mh=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,hh=F.h3`
  color: ${({theme:e})=>e.primaryText};
  max-width: 400px;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (max-width: 660px) {
    max-width: 320px;
  }

  @media screen and (max-width: 495px) {
    max-width: 90vw;
  }
`,gh=F.div`
  display: block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  background-color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.bg??e.cardThemes.default.bg};

  &:not(:last-child) {
    margin-right: 7px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.text??e.cardThemes.default.text};
  }

  @media screen and (max-width: 495px) {
    display: none;
  }
`,_h=F.div`
  margin-bottom: 11px;
`,vh=F.div`
  margin-bottom: 14px;
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,yh=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`,bh=F.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: rgb(148, 166, 190);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    ${({theme:e,selected:t})=>t&&`
      color: ${e.secondaryBg};
    `}
  }

  ${({theme:e,$selected:t})=>t&&`background: rgb(148, 166, 190);
    color: ${e.secondaryBg};
  `};
`,xh=F.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,Sh=F.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`,Ch=F.div`
  display: flex;
  flex-direction: column;
`,wh=F.label`
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,Th=F.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({theme:e})=>e.primaryBg};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  font-weight: 400;
  color: ${({theme:e})=>e.primaryText};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: rgb(148, 166, 190);
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }

  ${({readOnly:e})=>e&&`border: none`}
`,Eh=F.div`
  display: none;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`,Dh=F.p`
  margin-bottom: 14px;
  color: ${({theme:e})=>e.primaryText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,Oh=F.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  background-color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.bg??e.cardThemes.default.bg};

  &:not(:last-child) {
    margin-right: 7px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({theme:e,$cardTheme:t})=>e.cardThemes[t]?.text??e.cardThemes.default.text};
  }
`,kh=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`,Ah=F.div`
  button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    width: 100%;

    button {
      margin-right: 0px;
    }
  }
`,jh=F.button`
  border-radius: 4px;
  background: rgb(86, 94, 239);
  border: none;
  outline: none;
  color: rgb(255, 255, 255);

  a {
    color: rgb(255, 255, 255);
  }

  &:hover {
    background-color: rgb(51, 57, 155);
  }
`,Mh=F.button`
  border-radius: 4px;
  border: 0.7px solid ${({theme:e})=>e.buttonBg};
  outline: none;
  background: transparent;
  color: ${({theme:e})=>e.buttonBg};

  a {
    color: ${({theme:e})=>e.buttonBg};
  }

  &:hover {
    border: 0.7px solid rgb(86, 94, 239);
    background-color: rgb(86, 94, 239);
    color: rgb(255, 255, 255);

    a {
      color: rgb(255, 255, 255);
    }
  }
`,Nh=()=>{let{user:e}=(0,S.useContext)(go),{handleDeleteTask:t,handleEditTask:n,task:r,setTask:i,posting:a}=(0,S.useContext)(_o),{id:o}=gt(),[s,c]=(0,S.useState)(null),[l,u]=(0,S.useState)(!0),[d,f]=(0,S.useState)(null),[p,m]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{(async()=>{try{u(!0),i((await oh({token:e.token,id:o})).data.task)}catch(e){e.status===404?f(`Задача не найдена.`):e.message===`Failed to fetch`||e.message===`Network Error`?f(`Кажется, у вас пропал интернет, попробуйте позже.`):f(`Что-то пошло не так, попробуйте позже.`)}finally{u(!1)}})()},[o,i,e]),l||d?(0,R.jsx)(uh,{children:(0,R.jsx)(dh,{children:(0,R.jsx)(fh,{children:(0,R.jsxs)(ph,{children:[(0,R.jsx)(hh,{children:d?`${d}`:`Загружаем задачу...`}),d&&(0,R.jsx)(kh,{children:(0,R.jsx)(jh,{children:(0,R.jsx)(Fn,{to:`/`,children:`Закрыть`})})})]})})})}):a?(0,R.jsx)(uh,{children:(0,R.jsx)(dh,{children:(0,R.jsx)(fh,{children:(0,R.jsx)(ph,{children:(0,R.jsx)(hh,{children:`Сохраняем изменения...`})})})})}):(0,R.jsx)(uh,{children:(0,R.jsx)(dh,{children:(0,R.jsx)(fh,{children:(0,R.jsxs)(ph,{children:[(0,R.jsxs)(mh,{children:[(0,R.jsx)(hh,{children:r.title}),(0,R.jsx)(gh,{$cardTheme:r.topic||`default`,children:(0,R.jsx)(`p`,{children:r.topic})})]}),(0,R.jsxs)(_h,{children:[(0,R.jsx)(vh,{children:`Статус`}),p?(0,R.jsx)(yh,{children:[`Без статуса`,`Нужно сделать`,`В работе`,`Тестирование`,`Готово`].map(e=>(0,R.jsx)(bh,{$selected:s.status===e,onClick:()=>c(t=>({...t,status:e})),children:(0,R.jsx)(`p`,{children:e})},e))}):(0,R.jsx)(yh,{children:(0,R.jsx)(bh,{$selected:!0,children:(0,R.jsx)(`p`,{children:r.status})})})]}),(0,R.jsxs)(xh,{children:[(0,R.jsx)(Sh,{children:(0,R.jsxs)(Ch,{children:[(0,R.jsx)(wh,{htmlFor:`textArea01`,children:`Описание задачи`}),(0,R.jsx)(Th,{name:`text`,id:`textArea01`,readOnly:!p,onChange:e=>c(t=>({...t,description:e.target.value})),value:p?s.description:r.description})]})}),(0,R.jsx)(Nd,{dateControl:p?s.date:r.date,onDateSelect:e=>{c(t=>({...t,date:e}))},disable:!p})]}),(0,R.jsxs)(Eh,{children:[(0,R.jsx)(Dh,{children:`Категория`}),(0,R.jsx)(Oh,{$cardTheme:r.topic||`default`,children:(0,R.jsx)(`p`,{children:r.topic})})]}),p?(0,R.jsxs)(kh,{children:[(0,R.jsxs)(Ah,{children:[(0,R.jsx)(jh,{children:(0,R.jsx)(`a`,{onClick:e=>{m(!1),i(s),n(e,o,s)},children:`Сохранить`})}),(0,R.jsx)(Mh,{children:(0,R.jsx)(`a`,{onClick:()=>{c({...r}),m(!1)},children:`Отменить`})}),(0,R.jsx)(Mh,{children:(0,R.jsx)(`a`,{onClick:e=>t(e,o,f),children:`Удалить задачу`})})]}),(0,R.jsx)(jh,{children:(0,R.jsx)(Fn,{to:`/`,onClick:()=>i({title:``,description:``,topic:``,date:``}),children:`Закрыть`})})]}):(0,R.jsxs)(kh,{children:[(0,R.jsxs)(Ah,{children:[(0,R.jsx)(Mh,{children:(0,R.jsx)(`a`,{onClick:()=>{m(!0),c({...r})},children:`Редактировать задачу`})}),(0,R.jsx)(Mh,{onClick:e=>t(e,o,f),children:`Удалить задачу`})]}),(0,R.jsx)(jh,{children:(0,R.jsx)(Fn,{to:`/`,onClick:()=>i({title:``,description:``,topic:``,date:``}),children:`Закрыть`})})]})]})})})})},Ph=({setTasks:e})=>(0,R.jsx)(Nh,{setTasks:e}),Fh=F.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.primaryBg};
`,Ih=F.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  h1 {
    font-size: 160px;
    color: rgb(248, 77, 77);
    animation: bounce 1s ease-in-out infinite alternate;
  }

  p {
    font-size: 24px;
    color: ${({theme:e})=>e.error404Text};
  }

  a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    color: rgb(255, 255, 255);
    background-color: rgb(86, 94, 239);
    border-radius: 5px;
  }

  a:hover {
    background-color: rgb(51, 57, 155);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
`,Lh=()=>{let{theme:e}=(0,S.useContext)(I);return(0,R.jsxs)(Fh,{children:[(0,R.jsx)(no,{children:(0,R.jsx)(ro,{children:(0,R.jsxs)(io,{children:[(0,R.jsx)(ao,{$isVisible:e.mode===`light`,children:(0,R.jsx)(Fn,{to:`/`,children:(0,R.jsx)(`img`,{src:`/images/logo.png`,alt:`logo`})})}),(0,R.jsx)(ao,{$isVisible:e.mode===`dark`,children:(0,R.jsx)(Fn,{to:`/`,children:(0,R.jsx)(`img`,{src:`/images/logo_dark.png`,alt:`logo`})})})]})})}),(0,R.jsxs)(Ih,{children:[(0,R.jsx)(`h1`,{children:`404`}),(0,R.jsxs)(`p`,{children:[`Страница не найдена.`,(0,R.jsx)(`br`,{}),`Возможно, вы ввели неправильный адрес.`]}),(0,R.jsx)(Fn,{to:`/`,children:`На главную`})]})]})};function Rh({isAuth:e}){return e?(0,R.jsx)(Vt,{}):(0,R.jsx)(Bt,{to:`/sign-in`})}function zh(){let{user:e}=(0,S.useContext)(go);return(0,R.jsxs)(Wt,{children:[(0,R.jsx)(Ht,{element:(0,R.jsx)(Rh,{isAuth:!!e}),children:(0,R.jsxs)(Ht,{path:`/`,element:(0,R.jsx)(sd,{}),children:[(0,R.jsx)(Ht,{path:`exit`,element:(0,R.jsx)(yd,{})}),(0,R.jsx)(Ht,{path:`task/add`,element:(0,R.jsx)(Zd,{})}),(0,R.jsx)(Ht,{path:`task/:id`,element:(0,R.jsx)(Ph,{})})]})}),(0,R.jsx)(Ht,{path:`/sign-in`,element:(0,R.jsx)(ld,{})}),(0,R.jsx)(Ht,{path:`/sign-up`,element:(0,R.jsx)(ud,{})}),(0,R.jsx)(Ht,{path:`/*`,element:(0,R.jsx)(Lh,{})})]})}function Bh(){return(0,R.jsx)(zh,{})}var Vh=`https://wedev-api.sky.pro/api/user`;async function Hh(e){return(await $.post(`https://wedev-api.sky.pro/api/user/login`,e,{headers:{"Content-Type":``}})).data.user}async function Uh(e){return(await $.post(Vh,e,{headers:{"Content-Type":``}})).data.user}var Wh=({children:e})=>{let[t,n]=(0,S.useState)(localStorage.getItem(`user`)?JSON.parse(localStorage.getItem(`user`)):null),r=ft(),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)({name:``,login:``,password:``}),[c,l]=(0,S.useState)({name:``,login:``,password:``}),[u,d]=(0,S.useState)(``),f=e=>{let t={name:``,login:``,password:``},n=!0,r=e?`Введенные вами данные некорректны. Чтобы завершить регистрацию, заполните все поля в форме.`:`Введенные вами данные некорректны. Чтобы войти, заполните все поля в форме.`;return e&&!o.name.trim()&&(t.name=!0,d(r),n=!1),o.login.trim()||(t.login=!0,d(r),n=!1),o.password.trim()||(t.password=!0,d(r),n=!1),l(t),n},p=e=>{let{name:t,value:n}=e.target;s({...o,[t]:ju(n)}),l({...c,[t]:!1}),d(``)},m=()=>{s({name:``,login:``,password:``}),l({name:``,login:``,password:``}),d(``)},h=async(e,t)=>{if(e.preventDefault(),f(t)){a(!0);try{let e=t?await Uh(o):await Hh({login:o.login,password:o.password});if(e){if(t)r(`/sign-in`);else{let t={_id:e._id,name:e.name,login:e.login,token:e.token};localStorage.setItem(`user`,JSON.stringify(t)),n(e),r(`/`)}m()}}catch(e){e.response.status===400&&t?d(`Пользователь с таким логином уже существует.`):e.response?.status===400?d(`Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.`):d(`Произошла непредвиденная ошибка. Попробуйте позже.`),!t&&l({login:!0,password:!0})}finally{a(!1)}}};function g(e){e.preventDefault(),localStorage.removeItem(`user`),n(null),r(`/sign-in`)}return(0,R.jsx)(go.Provider,{value:{user:t,loading:i,handleChange:p,formData:o,errors:c,error:u,handleSubmit:h,handleLogout:g,clearForm:m},children:e})},Gh=({children:e})=>{let t=ft(),{user:n}=(0,S.useContext)(go),[r,i]=(0,S.useState)([]),[a,o]=(0,S.useState)(!1),[s,c]=(0,S.useState)(``),[l,u]=(0,S.useState)(!1),d=async()=>{try{o(!0);let e=0;for(;e<3;){let t=await ah({token:n.token});if(t.status!==500){if(t.status===200){i(t.data.tasks);return}throw Error(`Что-то пошло не так, попробуйте позже.`)}e++,console.warn("Попытка ${retryCount} неудачна, повторяем запрос..."),await new Promise(e=>setTimeout(e,1e3))}throw Error(`Сервер недоступен, попробуйте позже.`)}catch(e){c(e.message===`Failed to fetch`||e.message===`Network Error`?`Кажется, у вас пропал интернет, попробуйте позже.`:`Что-то пошло не так. 
Обновите страницу или попробуйте позже.`)}finally{o(!1)}},f=()=>i([]),[p,m]=(0,S.useState)({title:``,description:``,topic:``,date:``}),[h,g]=(0,S.useState)({title:``,description:``,topic:``,date:``}),_=()=>{let e={title:``,description:``,topic:``,date:``},t=!0;return p.title.trim()||(e.title=!0,t=!1),p.description.trim()||(e.description=!0,t=!1),p.topic||(e.topic=!0,t=!1),p.date||(e.date=!0,t=!1),g(e),t};return(0,R.jsx)(_o.Provider,{value:{tasks:r,setTasks:i,loading:a,posting:l,loadingErr:s,task:p,setTask:m,getTasks:d,clearTasks:f,handlePostTask:async(e,r)=>{if(e.preventDefault(),!l){if(u(!0),!_()){q(`Все поля должны быть заполнены`),u(!1);return}try{e.preventDefault(),u(!0);let a=await sh({token:n.token,task:r});if(a){i(a.data.tasks),t(`/`);return}}catch{q.error(`Произошла непредвиденная ошибка. Попробуйте позже.`)}finally{u(!1)}}},handleDeleteTask:async(e,r,a)=>{e.preventDefault();try{i((await lh({token:n.token,id:r})).data.tasks),m({title:``,description:``,topic:``,date:``}),t(`/`)}catch(e){e.message===`Failed to fetch`||e.message===`Network Error`?a(`Кажется, у вас пропал интернет, попробуйте позже.`):a(`Что-то пошло не так, попробуйте позже.`)}},handleEditTask:async(e,r,a)=>{try{e.preventDefault(),u(!0);let o=await ch({token:n.token,id:r,task:a});o&&(i(o.data.tasks),t(`/task/`+r),g({title:``,description:``,topic:``,date:``}))}catch{q.error(`Произошла непредвиденная ошибка. Попробуйте позже.`)}finally{u(!1)}},validateForm:_,errors:h,setErrors:g,moveTask:async(e,t)=>{let a=r.find(t=>t._id===e);if(!a)return;let o={...a,status:t};i(n=>n.map(n=>n._id===e?{...n,status:t}:n));try{await ch({token:n.token,id:e,task:o})}catch{i(r),q.error(`Что-то пошло не так, попробуйте изменить статус задачи через редактирование карточки`)}}},children:e})},Kh=({children:e})=>{let[t,n]=(0,S.useState)(localStorage.getItem(`theme`)?localStorage.getItem(`theme`):`light`),r=t===`dark`?{mode:`dark`,primaryText:`rgb(255, 255, 255)`,border:`rgb(78, 85, 102)`,shadow:`rgba(148, 166, 190, 0.4)`,primaryBg:`rgb(21, 20, 25)`,secondaryBg:`rgb(32, 32, 44)`,buttonBg:`rgb(255, 255, 255)`,hover:`rgb(186, 186, 207)`,columnDrop:`rgba(40, 51, 92, 0.1)`,overlay:`rgba(0, 0, 0, 0.8)`,error404Text:`rgb(182, 187, 196)`,cardThemes:{"Web Design":{text:`rgb(255, 228, 194)`,bg:`rgb(255, 109, 0)`},Research:{text:`rgb(180, 253, 209)`,bg:`rgb(6, 177, 110)`},Copywriting:{text:`rgb(233, 212, 255)`,bg:`rgb(154, 72, 241)`},default:{bg:`rgb(148, 166, 190)`,text:`rgb(255, 255, 255)`}}}:{mode:`light`,primaryText:`rgb(0, 0, 0)`,border:`rgb(212, 219, 229)`,shadow:`rgba(26, 56, 101, 0.21)`,primaryBg:`rgb(234, 238, 246)`,secondaryBg:`rgb(255, 255, 255)`,buttonBg:`rgb(86, 94, 239)`,hover:`rgb(51, 57, 155)`,columnDrop:`rgba(207, 213, 234, 0.3)`,overlay:`rgba(0, 0, 0, 0.4)`,error404Text:`rgb(47, 53, 66)`,cardThemes:{"Web Design":{bg:`rgb(255, 228, 194)`,text:`rgb(255, 109, 0)`},Research:{bg:`rgb(180, 253, 209)`,text:`rgb(6, 177, 110)`},Copywriting:{bg:`rgb(233, 212, 255)`,text:`rgb(154, 72, 241)`},default:{bg:`rgb(148, 166, 190)`,text:`rgb(255, 255, 255)`}}};return(0,R.jsx)(I.Provider,{value:{toggleTheme:()=>{n(e=>{let t=e===`light`?`dark`:`light`;return localStorage.setItem(`theme`,t),t})},theme:r},children:(0,R.jsx)(Ua,{theme:r,children:e})})},qh=to`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif, Arial, Helvetica;
  transition: background-color 0.2s ease, color 0.4s ease;

  }

  *:before,
  *:after {
  box-sizing: border-box;
  transition: background-color 0.2s ease, color 0.4s ease;

  }

  a,
  a:visited {
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  }

  button,
  ._btn {
  cursor: pointer;
  outline: none;
  }

  ul li {
  list-style: none;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.primaryText};
  scroll-behavior: smooth;
  }
`;(0,ni.createRoot)(document.getElementById(`root`)).render((0,R.jsx)(S.StrictMode,{children:(0,R.jsx)(Mn,{children:(0,R.jsx)(Wh,{children:(0,R.jsx)(Gh,{children:(0,R.jsxs)(Kh,{children:[(0,R.jsx)(qh,{}),(0,R.jsx)(Bh,{})]})})})})}));