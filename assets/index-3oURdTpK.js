var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function T(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=T,ne=function(){ie.postMessage(null)}}else ne=function(){_(T,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=_i(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=_i(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=_i(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case T:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case ne:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===C)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===C)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===C)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=Fa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===C)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Gl,k(oo,e),k(ao,t),Gl=e|t.baseLanes}function co(){k(oo,Gl),k(ao,ao.current)}function lo(){Gl=oo.current,O(ao),O(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===C)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=me.current,Yi(t))qi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=E.H;return E.H=Us,e===null?Us:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,ot(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),1),_=c(u(),1),v=[{slug:`vad-ar-en-ai-agent`,title:`Vad är en AI-agent? En enkel förklaring för dig som inte är teknisk`,description:`Förstå vad en AI-agent är, hur den skiljer sig från en chatbot och vad den kan göra för dig i arbetet. Skriven för dig som inte arbetar med teknik.`,date:`2026-03-20`,readTime:`8 min`,keywords:[`vad är AI-agent`,`AI-agent förklaring`,`hur fungerar AI-agent`,`AI för nybörjare`]},{slug:`5-arbetsuppgifter-ai-agent`,title:`5 arbetsuppgifter som en AI-agent kan ta över redan idag`,description:`Mejl, research, schemaläggning, kundtjänst och rapportering. Konkreta exempel på hur AI-agenter sparar tid för svenska företagare.`,date:`2026-03-19`,readTime:`7 min`,keywords:[`AI-agent arbetsuppgifter`,`automatisera arbete AI`,`spara tid med AI`]},{slug:`openclaw-vs-chatgpt`,title:`OpenClaw vs ChatGPT: Skillnaden mellan AI som svarar och AI som agerar`,description:`En saklig jämförelse av reaktiv och autonom AI. Vilken typ passar bäst för ditt arbete?`,date:`2026-03-18`,readTime:`9 min`,keywords:[`OpenClaw vs ChatGPT`,`AI-agent jämförelse`,`bästa AI-verktyg företag`]},{slug:`kan-ai-ersatta-anstalld`,title:`Kan en AI-agent verkligen ersätta en anställd? Ärlig analys`,description:`Vad AI-agenter faktiskt kan och inte kan göra. Realistisk kostnadsjämförelse och vanliga misstag att undvika.`,date:`2026-03-17`,readTime:`8 min`,keywords:[`AI ersätta anställd`,`AI-agent värt det`,`automatisering småföretag`]},{slug:`datasakerhet-gdpr-ai`,title:`Datasäkerhet och AI: Vad svenska företag behöver veta om GDPR och AI-agenter`,description:`Praktisk guide till GDPR-efterlevnad vid användning av AI-agenter. Lokal vs molnbaserad hantering, datakontroll och checklista.`,date:`2026-03-16`,readTime:`7 min`,keywords:[`AI datasäkerhet Sverige`,`GDPR AI-agent`,`integritet AI`]},{slug:`enmansforetag-ai-agenter`,title:`Hur du driver ett enmansföretag med AI-agenter 2026`,description:`Konkreta tips för egenföretagare och konsulter som vill automatisera admin, försäljning och kundhantering med AI.`,date:`2026-03-15`,readTime:`9 min`,keywords:[`enmansföretag AI`,`AI egenföretagare Sverige`,`automatisera enskild firma`]}],y=[{slug:`ai-for-small-businesses-and-operational-efficiency-in-2026`,title:`AI for Small Businesses and Operational Efficiency in 2026`,description:`AI for small businesses in 2026 is no longer an experiment, it is an operational requirement....`,date:`2026-03-20`,readTime:`11 min`},{slug:`openclaw-updates-and-news-2026`,title:`OpenClaw updates and news 2026`,description:`OpenClaw continues to move through 2026 with the kind of operational pace that suits companies under real market pressure....`,date:`2026-03-19`,readTime:`9 min`},{slug:`openclaw-security-guide-2026`,title:`OpenClaw Security Guide 2026`,description:`A pragmatic framework for mid‑market operators facing AI‑driven exposure...`,date:`2026-03-19`,readTime:`10 min`},{slug:`how-to-build-an-ai-agent-in-openclaw`,title:`How to Build an AI Agent in OpenClaw`,description:`A pragmatic guide to creating durable value and operational clarity...`,date:`2026-03-18`,readTime:`10 min`},{slug:`comparison-of-automation-technologies-2026`,title:`Comparison of Automation Technologies 2026`,description:`The automation landscape in 2026 is shaped by consolidation pressure, operational risk, and the quiet but relentless shift from scripted ...`,date:`2026-03-16`,readTime:`12 min`},{slug:`ai-agents-in-the-swedish-real-estate-sector`,title:`AI Agents in the Swedish Real Estate Sector`,description:`Pragmatic strategies for operators, investors, and mid‑market decision makers...`,date:`2026-03-14`,readTime:`7 min`},{slug:`how-to-measure-roi-on-ai-automation`,title:`How to Measure ROI on AI Automation`,description:`Measuring the return on investment for AI automation has become a defining discipline for mid‑market operators, especially in sectors whe...`,date:`2026-03-08`,readTime:`5 min`},{slug:`how-to-cut-your-ai-costs-by-80-percent-pragmatic-lessons-from-experienced-operators`,title:`How to Cut Your AI Costs by 80 Percent: Pragmatic Lessons From Experienced Operators`,description:`In Swedish mid market M&A and healthcare carve outs, the pressure to reduce AI spend is no longer a theoretical exercise. It is a board l...`,date:`2026-03-08`,readTime:`10 min`},{slug:`ai-for-solo-entrepreneurs-in-sweden-2026`,title:`AI for Solo Entrepreneurs in Sweden 2026`,description:`AI for solo entrepreneurs, or *soloföretagare*, in Sweden in 2026 has shifted from hype to hard utility. The discussion is no longer abou...`,date:`2026-03-07`,readTime:`6 min`},{slug:`datasäkerhet-och-integritet-med-ai-agenter-what-swedish-companies-need-to-know`,title:`Datasäkerhet och integritet med AI‑agenter: What Swedish companies need to know`,description:`Swedish companies are moving into operational AI at a faster pace than the public debate suggests, especially in sectors where margins ar...`,date:`2026-03-06`,readTime:`5 min`},{slug:`automation-for-swedish-consulting-firms-with-ai`,title:`Automation for Swedish Consulting Firms with AI`,description:`Pragmatic strategies for mid‑market realities and healthcare carve‑outs...`,date:`2026-03-05`,readTime:`12 min`},{slug:`practical-guide-ai-for-customer-support`,title:`Practical Guide: AI for Customer Support`,description:`A grounded perspective for Swedish mid‑market operators...`,date:`2026-03-03`,readTime:`7 min`},{slug:`grundläggande-installationsguide-för-openclaw-i-sverige`,title:`Grundläggande installationsguide för OpenClaw i Sverige`,description:`In the Swedish mid‑market, operational stability is often valued more than novelty....`,date:`2026-03-02`,readTime:`6 min`},{slug:`ai-for-the-healthcare-sector-and-efficient-documentation`,title:`AI for the Healthcare Sector and Efficient Documentation`,description:`AI in the healthcare sector in Sweden is entering a more mature phase, shaped less by experimentation and more by the practical pressure ...`,date:`2026-03-02`,readTime:`10 min`},{slug:`legal-dimensions-of-ai-in-sweden`,title:`Legal Dimensions of AI in Sweden`,description:`Artificial intelligence has stopped being an experimental add on in Swedish companies. It is now a structural component in operational mo...`,date:`2026-02-28`,readTime:`8 min`},{slug:`openclaw-tips-for-advanced-users`,title:`OpenClaw Tips for Advanced Users`,description:`A Pragmatic Advanced OpenClaw Guide for AI Agent Power Users Focused on Mid‑Market M&A and Healthcare Carve‑Outs...`,date:`2026-02-26`,readTime:`8 min`},{slug:`the-technical-frictionless-method-a-system-for-cross-border-mid-market-buyers-the-technical-frictionless-method-is-simple-in-architecture-and-unforgiving-in-execution`,title:`The Technical Frictionless Method A System for Cross Border Mid Market Buyers The Technical Frictionless Method is simple in architecture and unforgiving in execution`,description:`title: "The Technical Frictionless Method A System for Cross Border Mid Market Buyers The Technical Frictionless Method is simple in arch...`,date:`2026-02-25`,readTime:`5 min`},{slug:`ai-trends-to-watch-in-sweden`,title:`AI trends to watch in Sweden`,description:`Sweden has entered a phase where artificial intelligence is no longer an abstract horizon but a practical operating layer across industri...`,date:`2026-02-24`,readTime:`7 min`},{slug:`guide-to-integrating-openclaw-with-your-crm`,title:`Guide to Integrating OpenClaw with Your CRM`,description:`Integrating a new AI powered platform into an existing CRM environment is rarely glamorous. It is usually a question of disciplined proce...`,date:`2026-02-22`,readTime:`11 min`},{slug:`case-study-ai-agents-in-swedish-small-businesses`,title:`Case Study: AI Agents in Swedish Small Businesses`,description:`AI has shifted from experimental pilot projects to hardened operational tools, especially in Sweden’s fragmented small business landscape...`,date:`2026-02-20`,readTime:`5 min`},{slug:`openclaw-ai-agent-for-swedish-companies-a-complete-2026-guide-to-automation-without-technical-expertise`,title:`OpenClaw AI Agent for Swedish Companies: A Complete 2026 Guide to Automation Without Technical Expertise`,description:`Swedish companies are facing pressure from every direction. Margins are tightening. Mid‑market M&A valuations are unforgiving. Healthcare...`,date:`2026-02-19`,readTime:`11 min`},{slug:`trendspaning-för-ai-i-sverige-2026`,title:`Trendspaning för AI i Sverige 2026`,description:`Pragmatic insights for mid‑market operators and healthcare dealmakers...`,date:`2026-02-18`,readTime:`5 min`},{slug:`openclaw-installationsguide-2026-step-by-step-for-mac-and-windows`,title:`OpenClaw Installationsguide 2026: Step by Step for Mac and Windows`,description:`OpenClaw installation guide. Installera OpenClaw Mac. OpenClaw setup svenska. Hur installerar man OpenClaw. OpenClaw nybörjarguide....`,date:`2026-02-15`,readTime:`6 min`},{slug:`gdpr-and-ai-how-openclaw-handles-privacy`,title:`GDPR and AI: How OpenClaw Handles Privacy`,description:`Fördjupning for mid‑market operators who require clarity, control, and a realistic view of AI adoption in regulated environments...`,date:`2026-02-15`,readTime:`8 min`},{slug:`practical-guide-to-automating-your-workflow-with-ai`,title:`Practical Guide to Automating Your Workflow with AI`,description:`It is a structural shift that demands clarity, disciplined execution, and a willingness to challenge legacy assumptions....`,date:`2026-02-14`,readTime:`6 min`},{slug:`ai-for-the-construction-sector-and-the-discipline-of-effective-planning`,title:`AI for the Construction Sector and the Discipline of Effective Planning`,description:`The construction sector has always been capital intensive, schedule sensitive, and unforgiving toward inefficiency. When margins compress...`,date:`2026-02-14`,readTime:`8 min`},{slug:`can-an-ai-agent-actually-replace-an-employee-a-candid-analysis-for-swedish-business-owners`,title:`Can an AI Agent Actually Replace an Employee? A Candid Analysis for Swedish Business Owners`,description:`Running a Swedish company in 2026 means facing pressure from every direction....`,date:`2026-02-09`,readTime:`12 min`},{slug:`roi-analysis-of-ai-agents-in-swedish-companies`,title:`ROI Analysis of AI Agents in Swedish Companies`,description:`The conversation around AI in Swedish mid market companies has shifted from speculation to hard financial scrutiny....`,date:`2026-02-09`,readTime:`7 min`},{slug:`5-tasks-an-ai-agent-can-already-take-over-for-you-today`,title:`5 Tasks an AI Agent Can Already Take Over for You Today`,description:`Pragmatic guidance for Swedish business owners who want results, not buzzwords...`,date:`2026-02-08`,readTime:`8 min`},{slug:`practical-steps-to-automate-customer-flows`,title:`Practical Steps to Automate Customer Flows`,description:`Automating customer flows is not about chasing shiny tools....`,date:`2026-02-08`,readTime:`12 min`},{slug:`case-study-ai-in-swedish-e-commerce`,title:`**Case Study: AI in Swedish E Commerce**`,description:`A pragmatic review of how mid sized Swedish retailers are using AI to strengthen margins, stabilise forecasts, and prepare for a market t...`,date:`2026-02-06`,readTime:`5 min`},{slug:`ai-for-e-commerce-in-sweden-2026-trends-and-opportunities`,title:`AI for E-commerce in Sweden 2026: Trends and Opportunities`,description:`AI e-handel Sverige is no longer an emerging niche, it has matured into a structural shift that is reshaping how Swedish mid-market compa...`,date:`2026-02-05`,readTime:`5 min`},{slug:`openclaw-for-swedish-consulting-firms`,title:`OpenClaw for Swedish Consulting Firms`,description:`OpenClaw has entered the Nordic market as a quiet but decisive force, especially for Swedish consulting firms that operate in mid‑market ...`,date:`2026-02-03`,readTime:`7 min`},{slug:`high-fidelity-diligence-architectures-for-complex-targets-using-the-diagnostic-audit-mid-market-m-a-has-shifted`,title:`High Fidelity Diligence Architectures for Complex Targets Using The Diagnostic Audit Mid market M&A has shifted`,description:`title: "High Fidelity Diligence Architectures for Complex Targets Using The Diagnostic Audit"...`,date:`2026-01-30`,readTime:`11 min`},{slug:`institutional-sourcing-grids-for-multi-market-m-a-funnels-using-the-diagnostic-audit-technique-introductio`,title:`Institutional Sourcing Grids for Multi Market M&A Funnels Using The Diagnostic Audit Technique INTRODUCTIO`,description:`title: "Institutional Sourcing Grids for Multi Market M&A Funnels Using The Diagnostic Audit Technique"...`,date:`2026-01-30`,readTime:`11 min`},{slug:`kostnadsstyrning-med-ai-agenter-for-mid-market-operators`,title:`Kostnadsstyrning med AI‑agenter for mid‑market operators`,description:`Cost pressure in Nordic mid‑market companies is no longer a cyclical phenomenon, it is structural. Particularly in healthcare carve‑outs ...`,date:`2026-01-29`,readTime:`7 min`},{slug:`openclaw-vs-chatgpt-vs-traditional-ai-tools`,title:`OpenClaw vs ChatGPT vs Traditional AI Tools`,description:`The Swedish mid‑market has always been a battlefield....`,date:`2026-01-29`,readTime:`9 min`},{slug:`hur-du-driver-ett-enmansföretag-med-ai-agenter-2026`,title:`Hur du driver ett enmansföretag med AI‑agenter 2026`,description:`A Swedish guide for solo entrepreneurs and consultants...`,date:`2026-01-29`,readTime:`12 min`},{slug:`what-is-an-ai-agent-a-simple-explanation-for-non-technical-leaders`,title:`What Is an AI Agent? A Simple Explanation for Non‑Technical Leaders`,description:`*Designed for executives who operate in real markets, with real deadlines, and no patience for jargon.*...`,date:`2026-01-27`,readTime:`8 min`},{slug:`comparison-of-openclaw-and-other-ai-platforms`,title:`Comparison of OpenClaw and Other AI Platforms`,description:`AI adoption in Sweden has shifted from experimentation to operational necessity. Mid‑market companies, particularly those navigating heal...`,date:`2026-01-27`,readTime:`9 min`},{slug:`gdpr-review-for-ai-agents-in-mid-market-and-healthcare-environments`,title:`GDPR Review for AI Agents in Mid Market and Healthcare Environments`,description:`The shift toward autonomous AI systems is accelerating. Most mid market operators are already piloting or deploying AI agents inside fina...`,date:`2026-01-25`,readTime:`10 min`}],b={"ai-for-small-businesses-and-operational-efficiency-in-2026":`
AI for small businesses in 2026 is no longer an experiment, it is an operational requirement.  
The market is harder, cycles are shorter, margins are tighter.  
Owners and operators who handle healthcare carve outs or mid market transactions see it every quarter.  
Fragmented data, aging systems, compliance pressure, and a chronic shortage of administrative bandwidth keep firms from scaling.  

  
For many small firms, especially those in regulated sectors, AI is becoming the only realistic way to reduce operational drag.  
This applies whether you are trying to prepare a unit for sale, stabilize a newly acquired clinic group, or simply keep a lean professional services firm running without burning out the owner.  

  
Keywords such as AI småföretag 2026, effektivisera firma AI, and digital assistent egenföretagare reflect the same trend.  
Operators want something practical.  
Not hype.  
Not theoretical transformation.  
They want time back, fewer errors, and the ability to run tighter processes without hiring teams they cannot afford.  


## The Operational Reality in 2026

Small firms operate with structural disadvantages compared to mid market platforms.  
They lack redundancy, specialized staff, and institutional playbooks.  
When an issue emerges, it hits the owner directly, and it hits daily.  

  
In healthcare carve outs this is magnified.  
You inherit fragmented billing systems, idiosyncratic workflows, and unstructured files that have survived three leadership changes.  
You do not get the luxury of gradual optimization.  
You need stability fast.  

  
In a typical year, the operator deals with:  
- Administrative overload that slows revenue capture  
- Compliance documentation that requires accuracy under time pressure  
- Staff shortages that force owners into operational firefighting  
- Cash flow cycles that punish inefficiency  
- Due diligence requests that demand clean, structured data  

  
AI becomes less about innovation and more about insulation.  
It protects the operator from the daily grind that erodes strategic capacity.  


## Why AI Is Finally Useful for Small Firms in 2026

The year matters.  
AI in 2023 was promising but inconsistent.  
AI in 2024 was impressive but unreliable for core operations.  
AI in 2026 is stable enough, structured enough, and controllable enough to embed directly into small business workflows.  

  
Three shifts made it possible.

  
### Model reliability improved

Small firms cannot depend on unstable outputs.  
By 2026, domain tuned models provide predictable results in documentation, billing steps, compliance summaries, and operational analysis.  

  
This reliability makes AI viable in processes where a single error once had real cost.  


### Tooling matured

Off the shelf systems can now:  
- Read, extract, and summarize operational records  
- Build repeatable workflows  
- Generate compliant documentation  
- Interact with calendars, CRMs, and industry specific systems  
- Provide audit trails suitable for due diligence  

  
The digital assistant egenföretagare is no longer a metaphor.  
It is a functional role in the business.  


### Integration became manageable

In 2026, AI integrates without requiring a full scale digital transformation.  
Most small firms do not have the time or budget for that.  
But they do have room for a targeted integration that reduces administrative drag by 30 to 60 percent.  


## Practical Applications for Small Firms

Operators do not need inspiration.  
They need use cases that survive contact with real conditions.  

  
Below are the functions where AI consistently delivers value in 2026.  


### Documentation and administrative load

Small businesses lose hours each week to repetitive documentation.  
This is the first area where AI creates immediate relief.

  
Examples include:  
- Converting voice notes into structured documents  
- Drafting emails, memos, updates, and summaries  
- Cleaning and categorizing unstructured documents  
- Maintaining internal process notes that stay current over time  

  
For healthcare carve outs, this extends to clinical documentation, intake forms, and internal compliance logs.  


### Revenue cycle stabilization

Small firms often leak revenue because process discipline collapses under workload.  
AI improves consistency without requiring more staff.  

  
Core functions:  
- Eligibility checks  
- Invoice creation  
- Follow up reminders  
- Payment confirmation tracking  
- Consolidated revenue snapshots for weekly review  

  
These are not glamorous tasks, but stabilizing them increases cash predictability, which directly impacts valuation.  


### Compliance and risk management

Regulated industries benefit the most here.  
AI can create, maintain, and surface compliance records at a speed that humans cannot match.  

  
Examples:  
- Automated policy drafts  
- Controlled vocabulary summaries  
- Audit ready documentation packs  
- Cross checking processes against regulatory standards  
- Flagging outdated or missing documents  

  
For healthcare carve outs, where inherited documentation is usually fragmented, AI becomes a triage tool as much as an assistant.  


### Operational decision support

AI for small businesses in 2026 is not limited to automation.  
It also reduces cognitive load for operators who need to make decisions with imperfect information.  

  
Capabilities include:  
- Weekly KPI summaries  
- Scenario modeling  
- Cash flow forecasting  
- Vendor and contract analysis  
- Capacity planning  

  
In mid market M&A, this is valuable during both pre deal review and post close stabilization.  


### Customer and patient communication

A digital assistent egenföretagare can manage communication flows without creating distance between the operator and the customer.  

  
AI handles:  
- Intake triage  
- Response drafts  
- Follow up reminders  
- FAQ consistency  
- Scheduling coordination  

  
This keeps the business responsive without consuming the owner’s entire day.  


## AI as a Workforce Multiplier

Small businesses rarely have the budget to hire full time specialists.  
The operator ends up becoming the bookkeeper, compliance officer, admin coordinator, and operations manager at the same time.  

  
AI removes roles, not jobs.  
It eliminates categories of tasks that were previously unavoidable.  
This gives the owner time to focus on:  
- High value client work  
- Strategic planning  
- Deal preparation  
- Staff management  
- Long term positioning  

  
For firms preparing for acquisition, the impact is direct.  
Cleaner processes, consistent documentation, and predictable cash flow all increase attractiveness to buyers.  


## The Economics of AI for Small Businesses in 2026

Adoption is now less about tech and more about economics.  

  
A small firm using AI typically sees:  
- Reduced administrative hours  
- Lower error rates that previously produced downstream costs  
- More predictable billing cycles  
- Faster onboarding of new staff  
- Improved response times for clients and patients  

  
These results compound across a year.  
The value is not theoretical, it is financial.  


## Avoiding Common Failure Points

Not all AI implementations succeed.  
The failures tend to follow the same patterns.  

  
Below are the main traps small firms fall into.  


### Over automation

Some firms try to automate every process immediately.  
This creates brittleness and unforced errors.  
A phased approach works better.  


### No process clarity

AI cannot fix a broken process.  
It amplifies whatever exists.  
Operators must define baseline steps before automating them.  


### Poor data hygiene

AI relies on input quality.  
If files are scattered across devices, inboxes, and legacy systems, the output will reflect that.  
The first stage of any AI integration should include a data cleanup.  


### Tool overload

Many firms adopt five disconnected tools rather than one system that integrates naturally with their workflow.  
Consolidation is more efficient than expansion.  


## Building a Lean AI Enabled Operating Model

AI is most effective when treated as an operational layer rather than a side tool.  

  
A stable model follows four stages.  


### Stage 1: Assessment of operational pain points

The operator identifies processes that:  
- Consume excessive hours  
- Generate errors  
- Slow revenue  
- Affect compliance  
- Create stress  

  
This assessment defines the target areas for AI.  


### Stage 2: Process mapping

Each target process is broken into simple, repeatable steps.  
This prevents confusion during implementation.  


### Stage 3: AI integration

Tools are assigned to specific functions, not entire departments.  
This prevents overreach and keeps risk contained.  


### Stage 4: Monitoring and adjustment

Weekly and monthly reviews ensure the AI continues to operate within expected boundaries.  
Small adjustments maintain stability during growth or seasonal changes.  


## Strategic Implications for Mid Market M&A and Healthcare Carve Outs

AI adoption is now part of operational due diligence.  
Buyers expect structured data, consistent documentation, and predictable workflows.  

  
For small firms considering a sale in the next three years, early AI integration can:  
- Increase valuation  
- Reduce post close stabilization costs  
- Shorten integration timelines  
- Lower perceived operational risk  
- Improve EBITDA through efficiency gains  

  
In healthcare carve outs this is even more relevant.  
The incoming unit rarely arrives with clean systems or uniform documentation.  
AI enables rapid triage, faster normalization, and a smoother handoff to the acquiring platform.  


## The Future Outlook for AI in Small Firms

By 2026, we are past the adoption curve.  
The question is no longer whether AI will be used.  
The question is which firms will use it well enough to gain competitive insulation.  

  
Small businesses that integrate AI achieve structural advantages:  
- Lower operational drag  
- Higher strategic capacity  
- More resilience during volatility  
- Faster response to opportunities  
- Better preparation for transactions  

  
These advantages compound and create measurable differences in market position.  



AI for small businesses in 2026 is a practical tool for operators who want to reduce friction and regain control of their time.  
Whether the context is general services, healthcare carve outs, or mid market preparation, AI allows a lean firm to operate with the discipline of a larger organization.  

  
The objective is not reinvention.  
It is stabilization, clarity, and operational strength.  

  
Book a strategic consultation`,"openclaw-updates-and-news-2026":`


OpenClaw continues to move through 2026 with the kind of operational pace that suits companies under real market pressure.  

The platform has shifted from theoretical AI enablement toward applied automation that holds up in due diligence, in post‑merger integration and in the daily grind of healthcare carve outs.  

For Swedish mid‑market operators, the current cycle is not forgiving. Growth multiples are tighter, staffing shortages are chronic and legacy workflows still slow down integration timelines.  

OpenClaw’s evolution this year reflects that reality. The product updates are aimed at operators who care less about novelty and more about measurable friction reduction. This article reviews the most relevant OpenClaw updates 2026, current adoption patterns for OpenClaw AI‑agent Sverige and the implications for companies monitoring nyheter företag AI.



  
## The market context 2026



By early 2026, mid‑market M and A in the Nordics has become a game of selectivity. Buyers want clean operational baselines. Sellers are splitting assets into smaller, more digestible units. Healthcare carve outs in particular are experiencing shorter transaction windows, but longer integration horizons.  

This matters because AI implementation has become part of the pre‑sale narrative. A company that cannot demonstrate digital leverage has become a harder sell. As a result, OpenClaw’s updates this year have shifted focus toward stability, traceability and deployment speed.  

Companies are not looking for inspiration. They are looking for AI systems that remove hours and reduce error rates without breaking audit trails.



  
## H2 OpenClaw updates 2026: the core technical shifts



The 2026 updates revolve around three operational pillars. Stability. Context retention. And structured autonomy.  

Each area reflects pressure from operators who need AI that behaves consistently inside regulated or semi‑regulated processes, not a creative assistant with unpredictable output.



  
### H3 Improved multi‑agent coordination



The standout update is the new coordination layer governing how multiple agents run parallel tasks.  

In 2025 the issue was drift. Separate agents interpreting instructions differently created inconsistent data mappings, especially in roll ups with fragmented EHR systems or legacy ERP stacks.  

The 2026 layer constrains autonomy through shared context pools. Agents can escalate ambiguities, cross‑validate assumptions and halt sequences if dependencies are unclear.  

This is not elegant, but it is functional. Mid‑market operators want predictable throughput. Healthcare teams want zero surprises. The new coordination model does not promise creativity. It promises control.  

For buyers reviewing an asset, this also strengthens documentation trails. Every decision point, conflict resolution and context exchange becomes part of the audit log. That matters more than most founders want to admit.



  
### H3 Data extraction rebuilt for carve outs



Another critical update is the new extraction engine designed for transitional environments.  

Carve outs often require accessing partial databases, inconsistent schemas and outdated on‑prem systems. Legacy extraction models break easily in these conditions.  

OpenClaw’s 2026 extraction pipeline now tolerates incomplete structures. It can run inference‑based schema reconstruction, identify dependency gaps and reconstruct probable field relationships with higher reliability.  

This upgrade positions OpenClaw AI‑agent Sverige as a realistic tool for Swedish healthcare operators where documentation quality varies dramatically between regional units.  

Instead of stalling on missing fields, the system generates uncertainty reports. These can be handed directly to integration managers, speeding up the clarification cycle.  

The goal is not beauty. The goal is forward motion.



  
### H3 Compliance scaffolding for regulated teams



The 2026 update also introduces what OpenClaw calls the compliance scaffolding layer.  

It allows companies to define approved source types, prohibited transformations and review thresholds. When an agent hits a boundary, it pauses and creates a human‑required checkpoint.  

This brings AI closer to day‑to‑day clinical administration, billing review and documentation preparation without introducing unacceptable risk.  

In Sweden, where healthcare operators manage strict auditability requirements, this change makes AI adoption practicable rather than experimental.



  
## H2 Practical applications in Swedish mid‑market operations



While most AI marketing focuses on innovation, the real value in 2026 is operational grit. OpenClaw has begun to carve out a niche in exactly that space.  



  
### H3 Pre‑sale operational cleanups



Before going to market, sellers often need to normalize data structures, untangle embedded processes from shared services and map undocumented workflows.  

OpenClaw’s multi‑agent models now handle these tasks with minimal supervision. They can map process variants, detect inconsistencies and propose migration paths.  

For sellers, this reduces the painful gap between internal operations and what a buyer expects to see during due diligence.  

For buyers, it means fewer surprises and shorter SPA negotiation cycles.



  
### H3 Healthcare carve out stabilization



Swedish healthcare carve outs often involve mixed documentation standards, incompatible systems and personnel constraints.  

OpenClaw AI‑agent Sverige is now used to:  
- reconstruct patient‑neutral operational datasets  
- document undocumented manual workflows  
- harmonize resource allocation models  
- generate integration plans based on dependency mapping  

This is not glamorous work. It is the work that prevents overruns and failed transitions.  

AI that can do this reliably is worth far more than AI that can generate nice‑looking dashboards.



  
### H3 Post‑merger integration pressure relief



PMI cycles remain messy.  

Operators need clear process maps, real‑time status visibility and automated exception monitoring.  

The new updates allow agents to sit inside daily operational cycles instead of running as isolated assistants. They detect deviations, flag unresolved tasks and maintain live state tracking across integration streams.  

This helps integration leads avoid the constant firefighting that normally characterizes the first six months after closing.



  
## H2 Why OpenClaw is gaining traction in Sweden in 2026



Three forces explain the increased adoption.



  
### H3 Workforce constraints are structural, not temporary



Recruitment pipelines in healthcare, finance and logistics are not catching up. AI is no longer a luxury. It is the buffer that keeps operations stable when teams shrink or fail to scale.



  
### H3 Buyers require operational leverage



In 2026 due diligence, the absence of AI leverage is beginning to look like an operational red flag. Buyers want assets that demonstrate disciplined automation, not manual workarounds.



  
### H3 The Swedish regulatory climate rewards traceable AI use



Sweden is pragmatic. Operators who deploy AI with strong audit trails face fewer obstacles. OpenClaw’s logging and checkpoint model fits cleanly into that environment.  

This positions it as a realistic operational partner rather than a speculative technology investment.



  
## H2 Nyheter företag AI: what Swedish companies should monitor in 2026



Companies following the broader AI landscape should keep an eye on three themes that shape how OpenClaw and similar platforms evolve.



  
### H3 Standardization of agent communication protocols



The market is moving toward shared communication standards for multi‑agent systems. Vendors who adopt these early will integrate more easily with existing enterprise stacks.



  
### H3 AI as an operational layer, not a standalone product



Customers are no longer buying discreet AI tools. They are integrating AI into existing workflows. This pushes vendors toward toolkits rather than monolithic platforms.



  
### H3 Increasing demand for carve out ready AI



As carve outs increase in frequency, vendors who support transitional environments will gain market share. OpenClaw’s 2026 updates signal that it intends to own that category.



  
## H2 Strategic implications for operators in 2026



OpenClaw’s updates do not target early adopters. They target companies already under pressure: those preparing for sale, those navigating integration and those stabilizing healthcare operations during staffing shortages.  

The implications are direct.  



  
### H3 Operators should define their AI boundaries early



Without boundaries, multi‑agent systems produce messy operational sprawl. The compliance scaffolding layer should be configured before deployment, not after problems emerge.



  
### H3 AI should be embedded inside transitional processes



Waiting until after a carve out to deploy AI guarantees delays. Operators who embed agents during the documentation and mapping phases reduce uncertainty and gain leverage during negotiations.



  
### H3 Audit trails should be treated as assets



In 2026, an AI system that cannot generate complete logs is a liability. The updated logging system in OpenClaw gives companies an asset they can use during due diligence.



  
## H2 Looking ahead: where OpenClaw is likely to move in late 2026



Based on current update patterns and market pressure, expect the following directions.



  
### H3 More industry specific constraint libraries



Healthcare carve outs will likely see prebuilt constraint templates covering clinical workflow documentation, resource allocation and administrative compliance.



  
### H3 Automated handoff generation for PMI



Integration teams will see more automated milestone tracking, risk flagging and handoff synthesis. This will tighten coordination between operators, advisors and temporary integration staff.



  
### H3 Deepened Swedish language operational support



As adoption grows among mid‑market Swedish firms, domain specific Swedish language models will likely become part of the platform. This matters in healthcare where localized terminology is non negotiable.



  
## Conclusion



OpenClaw’s 2026 updates are not flashy. They are built for operators who handle fragmented data, messy carve outs and unforgiving integration cycles.  

For Swedish companies navigating nyheter företag AI, the practical orientation of these updates matters. AI that does not hold up under pressure is noise. AI that reduces operational friction is leverage.  

OpenClaw’s current direction signals that it intends to be relevant in exactly those conditions.



  
Book a strategic consultation`,"openclaw-security-guide-2026":`A pragmatic framework for mid‑market operators facing AI‑driven exposure

  
  
  
## Introduction  
By 2026 most mid‑market operators have accepted that AI risk is not theoretical anymore. It is operational. It is contractual. It affects valuation. It sits inside every dataset, every workflow, every deal room. The days when AI security was a side initiative are gone. In healthcare carve‑outs and sector‑specific consolidations the exposure is amplified by scattered legacy systems, mixed data governance cultures, and the unavoidable presence of regulated information.  

  
  
The purpose of this guide is to provide a calm, unsentimental view of OpenClaw säkerhet inside real operating environments. No hype. No academic generalities. Just clear operational standards for organisations that need an AI skyddad miljö, especially those running local AI-körning företag setups where cloud‑first architectures cannot satisfy regulatory or contractual constraints.  

  
  
This is not a transformation fairy tale. It is a field manual grounded in transactions, remediations, and the structural risks that surface during diligence.  

  
  
  
Understanding the OpenClaw security perimeter  

  
  
OpenClaw is often positioned as a modular secure‑compute infrastructure for AI workloads. In practice, it is a containment strategy. It creates a boundary where models, data, and inference pipelines operate without uncontrolled leakage. For mid‑market operators this matters because technical debt is chronic and rarely budgeted for during buy‑and‑build cycles.  

  
  
In healthcare carve‑outs the issue is sharper. Systems are often fragmented across parent‑company relics, regional EMR solutions, and vendor‑specific appliances. Local inference nodes, especially those deployed rapidly to serve diagnostic or operational optimization models, tend to sprawl. OpenClaw becomes a stabilising layer, but only if understood as a security perimeter rather than a product feature.  

  
  
The perimeter concept includes four non‑negotiables.  

  
  
• Controlled model ingress  
Models entering the environment, open or proprietary, require vetting. Weight files can carry embedded exploits. Supply chain discipline is mandatory.  

  
  
• Non‑leaking inference interfaces  
Anything that touches the inference API must be governed. No silent outbound calls. No unmonitored routing. No cross‑tenant data bleed.  

  
  
• Immutable telemetry trails  
If you cannot reconstruct model behaviour, you cannot defend it. Logging must be untampered, append‑only, and stored in a sealed environment.  

  
  
• Restricted connectivity  
Local nodes reduce cloud exposure, but they create lateral movement opportunities. OpenClaw must segment internal traffic, not just external.  

  
  
Taken together these controls reduce the operational blast radius and enforce the core promise of an AI skyddad miljö.  

  
  
  
Mid‑market realities influencing OpenClaw deployment  

  
  
Advisors often underestimate how different mid‑market organisations are from enterprise environments. The constraints shape how OpenClaw säkerhet must be applied.  

  
  
  
### H3  
Constraint 1: capital discipline  

  
  
Security programmes cannot expand indefinitely. Budgets are bound to EBITDA targets and integration schedules. Boards require predictable cash flow. The security architecture must be modular and staged.  

  
  
This means OpenClaw should be deployed in layers. Start with inference isolation. Then model governance. Then data boundary hardening. Avoid multi‑year redesigns that never stabilise.  

  
  
  
### H3  
Constraint 2: inherited data sprawl  

  
  
Carve‑outs often operate with downstream systems the seller never fully mapped. Data flows run through forgotten interfaces. The risk is not only privacy breach but model contamination.  

  
  
Local AI‑körning företag setups are particularly exposed. When inference nodes sit inside facilities, clinics, or distributed operational centres, old integration pipelines easily bypass new controls. OpenClaw must sit upstream of legacy connections, not merely around new AI endpoints.  

  
  
  
### H3  
Constraint 3: lean operating teams  

  
  
Most mid‑market players do not have a dedicated AI security function. They rely on infrastructure generalists who cannot monitor every inference event. Automation becomes part of the security posture.  

  
  
OpenClaw telemetry should feed into a minimal review workflow that flags deviations in behaviour rather than requiring full manual analysis.  

  
  
  
### H3  
Constraint 4: regulatory patchwork  

  
  
Healthcare carve‑outs face overlapping jurisdictional rules. HIPAA, GDPR, sector‑specific retention laws, and regional clinical guidelines create a constantly shifting baseline.  

  
  
OpenClaw security controls must be configured to satisfy the strictest applicable rule set, then cascaded down. This minimises rework and avoids jurisdiction‑specific drift.  

  
  
  
Core pillars of OpenClaw säkerhet for 2026  

  
  
OpenClaw in 2026 is not simply a sandbox. It is an operational discipline supported by tooling. The pillars below reflect what has proven to work in transactions, integrations, and stabilisation projects.  

  
  
  
### H3  
Pillar 1: provenance‑verified models  

  
  
Any model used inside an AI skyddad miljö must have a verifiable chain of custody. This includes origin, licensing, modification history, and checksum verification.  

  
  
In healthcare carve‑outs models often arrive through three channels.  

  
  
• Direct procurement from vendors  
• Embedded models inside third‑party diagnostic tools  
• Internally developed models with partial documentation  

  
  
OpenClaw requires a provenance check before any model enters the environment. No exceptions.  

  
  
  
### H3  
Pillar 2: deterministic isolation of inference  

  
  
Local AI-körning företag configurations rely on proximity for speed and compliance. But local nodes are also vulnerable if isolation is incomplete.  

  
  
Inference isolation must include:  

  
  
• Network segmentation with explicit allowlists  
• Rate limiting to prevent probing  
• No automatic outbound access for model updates  
• Dedicated identity credentials for each inference workflow  

  
  
This prevents inference interfaces from becoming covert communication channels.  

  
  
  
### H3  
Pillar 3: sealed data boundaries  

  
  
OpenClaw assumes that data boundaries will be challenged. The goal is not to prevent access but to ensure that any crossing is intentional, audited, and reversible.  

  
  
In mid‑market healthcare operations sealed boundaries require:  

  
  
• Static mapping of all data feeds  
• Enforcement of minimal dataset delivery to models  
• Redaction templates that run before model access  
• Separate storage for training versus inference datasets  

  
  
These measures reduce the risk of regulated data drifting into training corpora.  

  
  
  
### H3  
Pillar 4: rugged telemetry and behavioural baselines  

  
  
Telemetry is often incomplete in AI environments. Logs may not capture model behaviour fully. This limits forensic capability and creates unmanageable residual risk.  

  
  
OpenClaw telemetry must be treated as a controlled asset.  

  
  
Key requirements include:  

  
  
• Append‑only logs with cryptographic sealing  
• Multi‑layer logging covering inputs, outputs, and system calls  
• Baseline comparisons to detect abnormal behaviour  
• Independent archival to prevent tampering  

  
  
Once the baseline is established deviations become detectable even in lean teams.  

  
  
  
### H3  
Pillar 5: governance that reflects transaction realities  

  
  
In M&A environments governance is not theoretical. It determines deal timing, valuation adjustments, and TSA exposure.  

  
  
OpenClaw governance must address:  

  
  
• Which party controls model updates post‑close  
• How data segregation is enforced during TSA  
• What liability attaches to inherited model bias  
• Who signs off on inference exposure within clinical processes  

  
  
This governance is not optional. Without it deals stall or require price modifications.  

  
  
  
Implementing OpenClaw in local AI‑körning företag environments  

  
  
Local AI infrastructure is increasingly preferred in healthcare, manufacturing, logistics, and regulated professional services. The driver is often compliance but the outcome is tighter control.  

  
  
Below is a practical implementation roadmap stable enough for carve‑outs and scalable enough for roll‑ups.  

  
  
  
### H3  
Step 1: stabilise the local compute footprint  

  
  
Catalogue every inference node. Map connectivity. Document physical access.  
Most organisations underestimate how many devices perform AI tasks.  

  
  
  
### H3  
Step 2: isolate AI workloads from legacy systems  

  
  
Do not trust inherited networks. Segment aggressively.  
If necessary, deploy temporary gateways while legacy systems are replaced or patched.  

  
  
  
### H3  
Step 3: apply OpenClaw ingress controls  

  
  
No model enters the environment without verification.  
This eliminates one of the highest‑frequency vectors for silent compromise.  

  
  
  
### H3  
Step 4: deploy sealed telemetry  

  
  
Telemetry must be operational before the environment is considered secure.  
Without logs there is no defence and no incident reconstruction.  

  
  
  
### H3  
Step 5: enforce data boundary hardening  

  
  
Insert redaction templates at all entry points.  
Maintain a strict separation between clinical data, operational datasets, and model‑training repositories.  

  
  
  
### H3  
Step 6: run a controlled attack simulation  

  
  
This is not red‑team theatre. It is a necessary validation step.  
Focus on inference probing, data exfiltration through output channels, and lateral spread originating from local nodes.  

  
  
  
### H3  
Step 7: establish governance for continuous operation  

  
  
Assign ownership for model updates, telemetry review, exception handling, and vendor interactions.  
Document these responsibilities in operational language, not theoretical frameworks.  

  
  
  
What buyers and sellers must understand in 2026  

  
  
AI exposure is now a standard component of diligence. OpenClaw implementations can either increase confidence or raise new red flags.  

  
  
In mid‑market deals the following patterns are recurrent.  

  
  
• Buyers penalise environments without inference isolation.  
• Sellers who demonstrate sealed telemetry gain leverage.  
• Local AI‑körning företag setups are considered lower risk if OpenClaw controls are present.  
• Healthcare carve‑outs without provenance‑verified models face delays or escrow requirements.  

  
  
These patterns affect valuation materially. A secure AI environment is not a post‑close luxury. It is a transaction lever.  

  
  
  
The 2026 OpenClaw maturity model  

  
  
Organisations typically fall into three categories.  

  
  
### H3  
Level 1: Contained instability  

  
  
AI workloads running locally or in the cloud with partial controls.  
Telemetry incomplete.  
Data boundaries porous.  
High diligence penalty.  

  
  
  
### H3  
Level 2: Structured containment  

  
  
OpenClaw perimeter implemented with stable isolation.  
Provenance‑verified models.  
Data boundaries enforced.  
Moderate diligence adjustments.  

  
  
  
### H3  
Level 3: Operationally sealed  

  
  
Full OpenClaw säkerhet maturity.  
Behavioural baselines in place.  
Predictable compliance posture across jurisdictions.  
Valuation‑positive during transactions.  

  
  
  
Conclusion  

  
  
OpenClaw säkerhet in 2026 is not about heroics. It is a methodical discipline aimed at reducing risk, stabilising operations, and avoiding expensive surprises during transactions.  

  
  
For organisations operating in regulated sectors, especially healthcare carve‑outs and multi‑site mid‑market platforms, the ability to run AI inside a protected boundary is not optional. It is a structural requirement that affects integration speed, compliance posture, and deal value.  

  
  
Executives who treat AI security as a strategic asset rather than a cost centre gain faster stabilisation, cleaner diligence outcomes, and lower operational volatility.  

  
  
The playbook is mature. The controls are known. The implementation is pragmatic.  

  
  
Book a strategic consultation`,"how-to-build-an-ai-agent-in-openclaw":`A pragmatic guide to creating durable value and operational clarity

  
  
  
Building an AI agent in OpenClaw is not a creative exercise. It is an operational decision that must be treated with the same level of discipline as any mid‑market M and A integration or healthcare carve out. The objective is not novelty. The objective is predictable output. Cost control. Compliance. Repeatability.  

  
  
This guide is built for firms that want to **bygga AI-agent**, follow a structured **OpenClaw guide**, and **skapa AI assistent företag** environments that do not destabilize existing processes.  

  
  
The tone is deliberate. Battle tested. No hype.  


---


  
  
AI agents have become a necessary infrastructure component. They sit between data pipelines, workflow orchestration, and human analysts. They do not replace analysts. They reduce the surface area of human error and absorb low value repetitive tasks.

  
  
In mid market transactions this matters. Most carve outs rely on outsourced functions, transitional service agreements, and legacy infrastructure gaps. AI agents can stabilize these gaps without adding headcount. The value is not theoretical. It is measurable in reduced cycle time and lower integration friction.

  
  
OpenClaw is particularly suited for this environment because it separates logic, data access, and operational rules. This reduces compliance exposure and makes audit trails straightforward.

  
  
Before building anything in OpenClaw the leadership team must define the purpose of the agent. Not aspirational. Operational. Define what the agent should deliver, who uses it, and what it replaces.  


---


  
  
Below are the principles that prevent rework and scope drift.

  
  
## H2: Principle 1: Simplicity is a cost control mechanism  
Do not start by designing a generalist agent. Do not attempt to mimic an internal team. Identify a process with narrow boundaries.  
Examples: generating compliance summaries, monitoring integration checklists, preparing physician credentialing packets.

  
  
A narrow agent is easier to audit and cheaper to maintain.  

  
  
  
## H2: Principle 2: Data access must be explicit, not assumed  
Carve outs often involve incomplete data. OpenClaw forces clarity in how the agent retrieves documents, uses context, and filters noise.  
Every data source must have an owner. Every permission must be written, not implied.

  
  
  
## H2: Principle 3: Resource cost must be predictable  
Agents that trigger uncontrolled inference cycles burn budget.  
OpenClaw’s chain logic allows controlled steps with hard limits.  
This is essential in healthcare, where document volume is unpredictable.

  
  
  
## H2: Principle 4: Operational users define success  
Do not design the agent around leadership expectations.  
Design around the analyst who uses it at 8 p.m. on the fourth week of the integration close.  
If they cannot rely on the output, the agent will not be used.  


---


  
  
Below is a structured blueprint. It works for compliance operations, integration monitoring, population health workflows, and transactional support.

  
  
## H2: Step 1: Define the agent’s operational charter  
Write a three part charter.  
• What the agent does.  
• What it will not do.  
• How success will be measured.

  
  
Example:  
The agent prepares daily TSA compliance summaries.  
The agent does not make compliance decisions.  
Success is measured by reduced manual preparation time and reduced error rate.

  
  
This charter prevents scope creep.  
It also gives internal audit something to reference.

  
  
  
## H2: Step 2: Map the required inputs  
OpenClaw performs well when you define each input clearly.  
List every source the agent must access.  
Examples: PDF contracts. Data room checklist files. Credentialing spreadsheets. Conversation histories.

  
  
For each source define:  
• Location.  
• Access method.  
• Format constraints.  
• Error handling rules.

  
  
Carve outs often involve fractured systems. This mapping prevents the agent from drifting into unpredictable behavior.

  
  
  
## H2: Step 3: Write deterministic agent instructions  
OpenClaw uses explicit reasoning steps. This is an advantage.  
Write instructions like a process engineer, not like a product marketer.

  
  
Example framework:  
• Receive input.  
• Validate structure.  
• Extract required sections.  
• Apply summarization rules.  
• Return result in defined output schema.

  
  
Every step must be testable.  
Every failure mode must have a defined fallback.  

  
  
  
## H2: Step 4: Use OpenClaw’s workflows to break down complexity  
Do not build a single large chain.  
Build modular segments.

  
  
Common modules:  
• Data ingestion module.  
• Validation module.  
• Processing module.  
• Formatting module.  
• Compliance check module.

  
  
Modular design allows you to replace components without rebuilding the entire agent.  
In a high change environment, this avoids weeks of rework.

  
  
  
## H2: Step 5: Implement memory intentionally  
Many firms enable memory without a governance plan.  
This is a compliance hazard in healthcare transactions.

  
  
In OpenClaw memory must be designed as:  
• Short term.  
• Long term.  
• Role specific.  

  
  
Decide what the agent must remember to do its job.  
Decide what it must forget to avoid drift.  
Document this for audit.

  
  
  
## H2: Step 6: Add business logic using OpenClaw’s guardrails  
Guardrails prevent the agent from producing outputs that violate policy.  
Examples:  
• No PHI in logs.  
• No strategic recommendations beyond scope.  
• No assumptions when data is missing.

  
  
Guardrails also prevent hallucinations by forcing the model to admit uncertainty.

  
  
  
## H2: Step 7: Test with real operational data  
Do not test on sanitized samples.  
Use redacted but real documents from a closed deal.  
Measure performance on the work analysts actually do.

  
  
Test for:  
• Accuracy.  
• Stability.  
• Consistency over multiple runs.  
• Error clarity.  
• Latency.  
• Token consumption.

  
  
Quality is not established by one perfect run.  
Quality is established by repeatability under pressure.

  
  
  
## H2: Step 8: Deploy gradually  
Do not launch the agent across the whole firm.  
Start with one team.  
Capture feedback weekly.  
Add guardrails.  
Improve instructions.  

  
  
This mirrors a typical carve out stabilization period, where early minor issues prevent larger structural problems.

  
  
  
## H2: Step 9: Document everything  
Documentation is often skipped.  
This is why AI agents become unmaintainable.

  
  
Document:  
• Instructions.  
• Data sources.  
• Memory rules.  
• Guardrails.  
• Decision logic.  
• Error handling.  
• Version history.

  
  
Documentation ensures the agent can survive staff turnover and external audits.

  
  
  
## H2: Step 10: Train operational teams  
An agent is only as good as the user who deploys it.  
Training must be tactical, not theoretical.

  
  
Teach users:  
• What the agent can do.  
• What it cannot do.  
• How to escalate errors.  
• How to submit improvement requests.

  
  
Clear expectations eliminate frustration and build trust.

  


---


  
  
Below are the use cases where OpenClaw agents consistently deliver value.

  
  
## H2: Compliance documentation workflows  
Healthcare carve outs require new compliance governance.  
Agents can:  
• Prepare summaries of regulatory filings.  
• Review contract terms for key obligations.  
• Track policy updates.

  
  
This reduces the manual burden on legal and compliance staff.

  
  
  
## H2: TSA performance monitoring  
Transitional services often fail due to poor tracking.  
Agents can consolidate:  
• Daily reports.  
• Service gaps.  
• Escalation items.  
• Cost tracking.

  
  
This creates a stable feedback loop for integration leadership.

  
  
  
## H2: Physician credentialing packet preparation  
Credentialing is labor intensive.  
Agents can assemble packet components and check for missing data.  
This prevents delays in go live timelines.

  
  
  
## H2: Financial integration workflows  
Agents help analysts by:  
• Normalizing incoming spreadsheets.  
• Identifying anomalies.  
• Preparing summary variance explanations.

  
  
This does not replace financial judgment.  
It accelerates it.

  


---


  
  
Every organization encounters predictable failures when implementing AI agents.  
Below is the short list of the most costly patterns.

  
  
## H2: Failure Pattern 1: Overly broad initial scope  
Teams attempt to build a multi purpose agent and end up with an unstable one.  
Start narrow.  
Expand later.

  
  
  
## H2: Failure Pattern 2: Assuming data quality  
Agents amplify the consequences of bad data.  
Validate the data pipeline before building the agent.

  
  
  
## H2: Failure Pattern 3: No cost monitoring  
Large models can burn budget fast.  
Track token usage from day one.

  
  
  
## H2: Failure Pattern 4: No ownership  
Agents without an internal owner degrade quickly.  
Assign a business owner and a technical owner.

  
  
  
## H2: Failure Pattern 5: Undocumented updates  
Untracked updates break workflows and damage trust.  
Version control is mandatory.

  


---


  
  
Below are the high level strategic questions that leadership teams should address when planning to **skapa AI assistent företag** ecosystems.

  
  
## H2: What work should the agent own in one year  
Plan for staged expansion.  
Do not rush toward automation.  
Tie expansion to measurable ROI.

  
  
## H2: What compliance framework governs the agent  
Healthcare and cross border deals require strict clarity.  
Define retention rules, auditability, and approval flows.

  
  
## H2: What is the cost ceiling  
Set a monthly cost limit.  
Build guardrails so the agent cannot exceed it.

  
  
## H2: How will the agent integrate with human teams  
AI agents reduce workload but increase coordination requirements.  
Define interaction rules early.

  


---


  
  
Agents built in OpenClaw succeed when they are treated as operational tools, not innovation showcases.  
The path is clear.  
Define. Map. Build. Guard. Test. Deploy. Train.  
This approach works in mid market transactions, healthcare carve outs, and any environment where precision matters more than speed.

  
  
If your organization is preparing to **bygga AI-agent**, needs a structured **OpenClaw guide**, or wants to **skapa AI assistent företag** infrastructure with long term stability, the next step is a focused strategic session.

  
  
Book a strategic consultation`,"comparison-of-automation-technologies-2026":`
The automation landscape in 2026 is shaped by consolidation pressure, operational risk, and the quiet but relentless shift from scripted tools to adaptive systems.  
Mid‑market operators, especially in healthcare carve‑outs, face a different reality than enterprises chasing glossy transformation narratives. They need automation that absorbs fragmented data structures, inherited vendor contracts, and compliance drag, without adding new operational debt.

  
This article provides a pragmatic analysis of how to compare automation technologies, including RPA versus AI agents, and an OpenClaw RPA comparison for teams that need to make hard, defensible decisions rather than slide‑deck hypotheticals.

  
The goal is simple: give operators a clear, battle tested framework for selecting automation that survives due diligence and post‑close integration chaos.

  
  

## The state of automation in 2026

The market has forked into two primary categories.  
Scripted automation tools that continue to automate stable, rules based workflows.  
And adaptive AI systems that handle edge cases, data volatility, and unpredictable processes that used to require human judgment.

  
For mid‑market acquirers, both categories matter.  
Legacy RPA handles steady state transaction processing.  
AI agents cover the rest, especially when absorbing a carved out business with incomplete SOPs and brittle integrations.

  
The challenge is not choosing one or the other.  
The challenge is deciding how each fits into a post‑acquisition operating model that must withstand 18 to 36 months of noisy transition data.

  
  

## Why traditional RPA still matters for M&A operators

Traditional RPA is well understood by auditors.  
It is deterministic.  
It fits neatly into existing governance frameworks.  
You know what it will do and what it will not do.

  
For carved out healthcare assets, this stability has real value.  
Claims workflows, appointment scheduling, and eligibility checks often follow structured patterns.  
RPA performs reliably in these environments.

  
Where RPA breaks down is in transitions.  
Inherited processes rarely match process maps.  
Data schemas vary across clinics, billing groups, and outsourced partners.  
This creates exception rates that overwhelm RPA bots and require constant script redesign.

  
Operators who expect RPA to handle messy integration work will burn time and capital.  
This is not a failure of the tool.  
It is a mismatch between tool design and transitional process volatility.

  
  

## Why AI agents stepped into the gaps

AI agents operate differently.  
They interpret intent, read documents, resolve ambiguous data, and adjust to new variations without weeks of scripting.  
They behave more like junior analysts than macros.

  
In mid‑market health services, this matters because inbound data rarely arrives in the same format twice.  
Referral documents shift.  
Insurance carrier rules change.  
Practice management systems export inconsistent records.  
An AI agent handles these inconsistencies with far less overhead than RPA.

  
This flexibility is also why AI agents are harder to certify in regulated environments.  
Audit teams want deterministic outputs.  
AI agents generate reasoned outputs that can be logged and reviewed, but not pre scripted line by line.

  
The operators who benefit most from AI agents are those in active transition.  
When processes stabilize, some workloads can migrate back to RPA.  
This creates a hybrid stack that shifts over time based on stability versus variability.

  
  


The main frameworks used to compare automation technologies often prioritize vendor features, glossy demos, and theoretical ROI.  
This is the wrong lens for healthcare carve outs or mid‑market M&A integrations.

  
The real framework is built on operational risk:  
What fails.  
How it fails.  
How quickly it can be corrected.  
And what the downstream financial impact looks like.

  
Below is a pragmatic evaluation structure used in deals where automation sits near the critical path.

  
  

## Evaluation criteria 1: Volatility tolerance

This measures how well the automation tool handles change.

  
RPA:  
Performs well when inputs are stable.  
Breaks with minor UI updates and schema changes.  
High maintenance load during integrations.

  
AI agents:  
Designed for variable inputs.  
Adapts to changing formats and incomplete data.  
Lower failure rates during transition periods.

  
Use case rule:  
If the process is stable, RPA wins.  
If the process is in flux, AI agents outperform.

  
  

## Evaluation criteria 2: Integration with inherited systems

Carve outs rarely deliver clean system boundaries.  
You get half documented APIs, on premise modules that no one can update, and vendor agreements that limit access.

  
RPA:  
Useful for systems with no API access.  
Mimics human input for legacy screens.  
Becomes fragile when screen layouts change.

  
AI agents:  
Can combine UI interaction with data reasoning.  
Better at reading unstructured exports and mismatched fields.  
Useful when IT cannot provide clean integration pathways for months.

  
This makes AI agents safer during TSA periods and transitions, especially when the carve out target lacks modern infrastructure.

  
  

## Evaluation criteria 3: Exception handling

RPA treats exceptions as system failures.  
Each new exception requires design work.

  
AI agents treat exceptions as expected patterns.  
They resolve most exceptions independently and escalate only ambiguous cases.

  
For health services organizations dealing with payor level changes, coding discrepancies, and nonstandard documentation, exception volume determines the viability of RPA.

  
  

## Evaluation criteria 4: Compliance and audit fit

RPA:  
Deterministic.  
Easy to audit.  
Accepted by most compliance teams without special documentation.

  
AI agents:  
Requires structured logging and justification frameworks.  
Accepted in healthcare if output is traceable, not opaque.  
Still requires more governance than RPA.

  
The rule of thumb is:  
Compliance prefers RPA.  
Operations prefer AI agents.  
The final decision depends on which cost is larger.

  
  


Below is a direct comparison, written for operators rather than vendors.

  
RPA strengths:  
Predictability  
Compatibility with legacy systems  
Strong audit trails  
Low variability in cost

  
RPA weaknesses:  
High maintenance during transitions  
Poor performance with unstructured data  
Limited adaptability

  
AI agent strengths:  
High flexibility  
Handles noisy data  
Learns from new patterns  
Reduces manual exception work

  
AI agent weaknesses:  
Requires governance frameworks  
Less deterministic  
Higher initial review burden in regulated workflows

  
Conclusion:  
Operators should not choose RPA or AI agents.  
They should allocate each to the right part of the process lifecycle.

  
  


OpenClaw emerged as a specialized option in 2026 for organizations that need RPA scale without enterprise overhead.  
Its differentiators matter for mid‑market acquirers who lack the budget for legacy RPA suites but still require industrial reliability.

  
Key advantages observed in carve out environments:  
Lightweight deployment  
Lower infrastructure burden  
Better interoperability with partial cloud environments  
Faster bot recovery after UI changes compared to older RPA tools

  
Limitations:  
Still bound by the rules based constraints of classic RPA  
Not designed for unstructured data  
Requires stable processes for maximum value

  
When comparing automation technologies using an OpenClaw RPA comparison lens, operators should ask:  
Is the workflow stable enough to justify RPA  
Is the transition period short enough that volatility will not erode savings  
Is the team prepared to maintain scripts during fluctuating data conditions

  
If the answer is no, the workflow belongs with AI agents instead.

  
  


Automation in 2026 is not a technology decision.  
It is a sequencing decision.

  
The correct approach is:  
Stabilize transitional processes with AI agents.  
Shift mature workflows to RPA.  
Use RPA for deterministic compliance heavy steps.  
Use AI agents for ambiguous or high variability steps.

  
This produces a dual stack that survives carve outs, TSA exits, and the first two years of integration turbulence.

  
  

## Recommended sequencing playbook

1. Map volatility zones across the target organization.  
2. Assign AI agents to zones where data changes weekly or monthly.  
3. Assign RPA to zones where the workflow has not changed in six months.  
4. Build audit frameworks that log both agent reasoning and bot execution.  
5. Reevaluate every quarter as workflows stabilize.

  
This playbook aligns automation investment with the real conditions of mid‑market deals, avoiding the cost traps that sink poorly planned transformations.

  
  


To compare automation technologies in 2026, operators must discard vendor marketing and adopt an operational risk mindset.

  
RPA is a stability tool.  
AI agents are a volatility tool.  
Both are required for carve outs and M&A integrations.

  
OpenClaw RPA sits in the middle, offering a cost efficient option for stable workflows without the enterprise bloat that slows down post‑close teams.

  
Automation is only valuable if it reduces transition noise.  
Any tool that increases maintenance, exception rates, or governance burden erodes deal value.  
Choosing the right tool for the right stage is the only defensible strategy.

  
  

Book a strategic consultation`,"ai-agents-in-the-swedish-real-estate-sector":`Pragmatic strategies for operators, investors, and mid‑market decision makers

  
  
  
AI in the Swedish real estate sector has moved past the hype cycle. The market no longer rewards presentations filled with abstract futurism. Executives want measurable efficiency gains, predictable economics, and a way to stabilize assets in a market defined by rising financing costs and pressure on operating margins. This is where AI agents come into play. They are less about spectacle and more about operational discipline. They automate the parts of property management that consume time, introduce errors, and dilute EBITDA.  
  
  
This article examines where AI agents provide real value in the Swedish market. It focuses on the keywords AI fastighetsbranschen, automatisera fastighetsförvaltning, and AI proptech Sverige, but does so in a sober, commercially grounded tone. The framing is shaped by mid‑market M&A realities and carve outs in healthcare adjacent real‑asset environments. No romanticized turnarounds. No transformational fairy tales. Just execution.

  
  
  
## Why AI Agents Matter Now in the Swedish Real Estate Economy

  
  
  
Sweden has been hit by a trilogy of pressures. Higher interest rates, tightening credit, and regulatory scrutiny. Property owners, especially in residential and healthcare portfolios, must defend NOI while reducing operational fragility. Traditional outsourcing models have reached their limit. Manual workflows create noise and friction: tenant tickets, lease adjustments, energy reporting, compliance tasks.  
  
  
AI agents are attractive because they integrate into these workflows without forcing a full‑scale system replacement. They reduce labor dependency, which is crucial when talent pipelines in property management continue to shrink. They also allow carve‑out environments to stabilize operations during ownership transitions, which is a non‑negotiable requirement in deal processes.

  
  
  
## What AI Agents Actually Do in Property Management

  
  
  
There is a gap between what people think AI agents do and what they actually deliver. They are not “digital property managers.” They are specialized operators that handle narrow but high‑volume tasks with predictable logic.  
  
  
Below are the core domains where AI agents create defensible value.

  
  
  
### Tenant Communications

  
  
  
Tenant inquiries in Sweden follow predictable patterns. Heating issues, rental payment confirmations, contract clarifications, noise disturbances. AI agents triage and respond to these cases, escalating only the complex ones. This reduces frontline workload and removes the bottleneck that slows response times.  
  
  
For owners with healthcare or elderly care properties, response expectations are even stricter. AI agents maintain service levels during ownership transitions, which is critical when assets are separated from a parent company in a carve‑out.

  
  
  
### Maintenance Coordination

  
  
  
AI agents do not replace technicians. They orchestrate logistics. They take incoming fault reports, categorize them using natural language processing, match them with contractor availability, and push updates to tenants.  
  
  
This reduces miscommunication and improves SLA compliance. For portfolios under operational stress, these gains translate directly into lower churn and tighter cost control.

  
  
  
### Lease Administration

  
  
  
Lease administration remains one of the most error‑prone functions in the property sector. AI agents can read lease documents, verify indexation, identify renewal dates, and prepare structured updates for asset managers.  
  
  
This is especially relevant in mid‑market M&A, where acquirers inherit document sets with non‑standard formats. Agents help normalize the lease environment without delaying the integration timeline.

  
  
  
### Energy and Sustainability Reporting

  
  
  
Sweden has strict sustainability reporting expectations. AI agents collect energy data from disparate systems, validate the inputs, and generate standardized reports for internal and external stakeholders.  
  
  
This reduces the manual workload that ESG teams currently carry. It also ensures that data is consistent across assets, which is crucial during vendor due diligence.

  
  
  
### Compliance and Documentation

  
  
  
Most property owners in Sweden operate under a dense regulatory framework. AI agents support document tracking, verify that mandatory inspections are scheduled, and push reminders to responsible teams.  
  
  
They do not remove regulatory burden, but they reduce the operational risk associated with missed deadlines.

  
  
  
## Why This Matters for Mid‑Market M&A

  
  
  
The Swedish mid‑market rarely buys perfect, fully integrated platforms. Most acquisitions are messy. Systems vary, processes are partially documented, and operational dependencies on a parent organization are common.  
  
  
AI agents smooth the transition. They create a buffer between inherited workflows and the buyer’s target operating model. For carve outs, they provide stability in areas where staffing is thin and documentation is incomplete.  
  
  
Buyers are no longer impressed by theoretical synergies. They want operational levers that work on day one. AI agents deliver this by absorbing routine tasks while the new owner focuses on strategic integration.

  
  
  
## Automating Property Management Without Overhauling IT

  
  
  
Legacy systems are entrenched in the Swedish property sector. Replacing them is expensive and disruptive. AI agents operate on top of these systems. They read data, interact with APIs when available, and in some cases operate through robotic interfaces when nothing else exists.  
  
  
This avoids the need for transformation programs that take years and divert resources away from asset performance. Automation becomes incremental rather than explosive. This is how experienced operators prefer it.

  
  
  
## Five Misconceptions About AI in Real Estate

  
  
  
### One. AI Replaces Property Managers  
AI does not replace them. It compresses low‑value workload so teams can focus on the parts that require judgment and onsite presence.

  
  
  
### Two. AI Requires Perfect Data  
It does not. Agents are designed to work with messy, inconsistent datasets, which is exactly what exists in real portfolios.

  
  
  
### Three. AI Is Expensive to Deploy  
Costs are modest compared to the savings in operational labor and SLA improvements.

  
  
  
### Four. AI Reduces Control  
Agents create structured logs of all actions. This gives owners more visibility than manual operations provide.

  
  
  
### Five. AI Works Only for Large Portfolios  
Mid‑market operators often see higher ROI because inefficiencies are more visible and staffing models are leaner.

  
  
  
## How AI Agents Strengthen Swedish PropTech Competitiveness

  
  
  
The keyword AI proptech Sverige reflects a broader shift. The Swedish proptech environment has matured. Investors now expect tools that integrate into business models instead of showcasing conceptual innovation.  
  
  
AI agents give Swedish proptech firms a practical differentiator. They allow companies to offer services that go beyond software and solve operational bottlenecks directly. This strengthens both domestic competitiveness and export potential.

  
  
  
## Operating Model Implications

  
  
  
Deploying AI agents does not mean handing control over to software. It requires an operating model adjustment that includes:  
  
  
* Clear ownership of AI supervised workflows.  
* Defined escalation logic for sensitive cases.  
* Consolidated data flows to prevent conflicting instructions.  
* Realistic KPIs tied to response time, resolution accuracy, and cost efficiency.  
  
  
Experienced operators know that technology is only as effective as the model that supports it.

  
  
  
## The Risk Profile of AI Integration

  
  
  
No technology is risk free. The relevant risks with AI agents include data privacy compliance, vendor dependency, and interface resilience. These risks are manageable. Sweden’s regulatory framework provides clear boundaries and vendors in this space have matured their integration patterns.  
  
  
In carve‑outs and distressed portfolios, the risk of inaction is higher. Manual operations introduce errors that affect valuation and stability. Automation becomes a protective measure.

  
  
  
## Strategic Gains for Owners and Investors

  
  
  
AI agents unlock several measurable advantages.  
  
  
* Lower operating costs that directly support NOI.  
* Faster integration during acquisitions.  
* Reduced reliance on scarce property management talent.  
* Increased tenant satisfaction through predictable communication.  
* More consistent compliance and documentation.  
  
  
These are not soft benefits. They influence valuation, refinancing conversations, and portfolio stability.

  
  
  
## The Competitive Horizon

  
  
  
Swedish property owners are not competing only with each other. They are competing with operators in adjacent sectors, especially healthcare real assets, where AI adoption is accelerating. The organizations that adopt agents early will operate with lower structural costs and stronger data infrastructure.  
  
  
Those who hesitate will face a widening gap. Investors notice this. Lenders notice this. Tenants notice this.

  
  
  
## Implementation Roadmap

  
  
  
A realistic implementation plan avoids large scale redesign. It follows a staged sequence.  
  
  
* Start with one workflow.  
* Introduce the agent and measure baseline and outcome.  
* Expand to adjacent workflows once ROI is confirmed.  
* Integrate audit logs into governance routines.  
* Adjust the operating model gradually.  
  
  
This reduces risk and aligns with how mid‑market organizations make decisions.

  
  
  
## The Next Phase of AI in the Swedish Real Estate Sector

  
  
  
The next wave will focus on multi agent orchestration. Instead of one agent handling tenant communication and another handling maintenance, coordinated agents will distribute tasks among themselves. The operator becomes a supervisor rather than an administrator.  
  
  
This is not speculative. Early deployments already show that multi agent hubs reduce friction even further. They also open possibilities for predictive maintenance and dynamic lease analysis.

  
  
  
## Final Perspective

  
  
  
AI fastighetsbranschen is no longer a slogan. It is a set of practical tools that allow real estate operators in Sweden to automate parts of fastighetsförvaltning with precision and predictable ROI. For mid‑market M&A, carve‑outs, and operationally complex portfolios, AI agents are becoming a strategic necessity rather than an optional upgrade.  
  
  
Organizations that adopt early will not gain a temporary edge. They will establish a lower operating baseline that competitors will struggle to match.

  
  
  
Book a strategic consultation`,"how-to-measure-roi-on-ai-automation":`  

Measuring the return on investment for AI automation has become a defining discipline for mid‑market operators, especially in sectors where margin pressure is structural rather than cyclical. Healthcare carve‑outs, fragmented service portfolios, and under‑digitised processes create an environment where AI deployment is neither experimental nor visionary. It is strictly about operational leverage.  

This article breaks down a pragmatic, numbers‑first approach to mäta ROI AI, with a focus on AI‑agent ROI uträkning and long‑term lönsamhet AI investering. The tone is intentionally unvarnished. The cases referenced draw from private equity integration work, revenue cycle stabilisation, and multi‑entity consolidations, not from hypothetical innovation labs.  
  

  
## Why ROI Measurement for AI Automation Is Non Negotiable  
  

Operators in mid‑market environments do not have the budget elasticity of enterprise players. Every investment competes directly with cost containment mandates.  

AI automation, for all its promise, introduces new forms of operational risk. Models drift. Workflows that look efficient in a slide deck break under the weekly chaos of patient scheduling, reimbursement rules, or regulatory reporting.  

Without a rigorous ROI framework, AI quickly becomes a narrative tool rather than a productivity engine.  
  

  
## The Three Foundations of a Reliable AI ROI Framework  
  

Most ROI models fail because they are built like technology pilots. Mid‑market operators must instead evaluate AI using the same structural lens applied to any acquisition, carve‑out integration, or cost‑takeout initiative.  
  

### 1. Baseline Reality  
  

Avoid theoretical productivity assumptions.  

The baseline must be tied to measured operational data:  

  
- Actual cycle times, not user estimates.  
- Actual labour costs including benefits and overtime, not payroll-line figures.  
- Actual error rates, not self-reported accuracy.  

  
For healthcare carve‑outs this is particularly critical. Pre‑carve operational data is often incomplete, scattered across legacy platforms, or distorted by pre-transaction underinvestment. Operators must rebuild a clean baseline before calculating mäta ROI AI.  
  

### 2. Measurable Automation Points  
  

Not every workflow is suitable for AI automation. High-variance tasks with ambiguity, or tasks requiring high context retention across systems, may show poor automation yield.  

Focus on:  

  
- Repetitive, rules-driven processes.  
- High-volume tasks with predictable data formats.  
- Workflows where human error is expensive.  
- Processes with measurable SLA requirements.  

  
This is where AI-agent ROI uträkning becomes concrete. You are not calculating the ROI of a technology. You are calculating the ROI of replacing or augmenting a discrete operational component.  
  

### 3. Full Financial Impact  
  

The total cost picture must include:  

  
- Integration work.  
- Model maintenance.  
- Staff retraining.  
- Compliance oversight.  
- System-to-system connectors.  

  
Mid‑market operators who ignore these costs consistently overstate lönsamhet AI investering.  
  

  
## Building the ROI Formula for AI Agents  
  

A functional ROI calculation does not need to be complicated. It needs to be truthful.  
  

The structure:  

  
ROI = (Annualised net gains from automation minus total implementation and operating costs) divided by total investment.  
  

Net gains must come from three measurable sources:  

  
- Labour hours avoided.  
- Error cost reduction.  
- Increased output without proportional headcount increase.  

  
Most operators over-focus on labour hours. In healthcare carve‑outs, the more powerful ROI signal tends to be error cost reduction, especially in revenue cycle operations, coding, intake, and compliance reporting.  
  

  
## Labour Hours Avoided  
  

This is the most straightforward part of the calculation, and often the least strategically important.  

Yet it must be precise.  

  
1. Measure the exact time humans spend on the task today.  
2. Quantify how much of the workflow the AI agent can truly handle.  
3. Multiply by fully loaded labour cost.  

  
Do not assume 100 percent automation, even when vendors promise it. Most real-world AI deployments deliver between 40 and 80 percent automation of a workflow.  
  

  
## Error Cost Reduction  
  

This is where AI automation generates disproportionate value, especially in healthcare and regulated environments.  

Human error is periodic. AI error is systematic. Both have costs.  

To quantify error cost reduction:  

  
- Determine baseline error rate.  
- Assign hard-dollar impact to each error category.  
- Calculate how AI changes both frequency and detection rate.  

  
In multi-clinic healthcare operations, coding errors often drive six-figure annual leakage per entity. Automating only the error-checking layer can deliver more ROI than full workflow automation.  
  

  
## Output Scaling  
  

AI agents deliver consistent throughput. They do not slow down due to fatigue, seasonality, or volume spikes.  

To quantify scaling benefits:  

  
- Model current maximum throughput per staff member.  
- Identify bottlenecks caused by manual tasks.  
- Estimate increased throughput once the bottleneck is automated.  

  
This measurement is essential in mid‑market acquisitions where revenue lift is part of the investment thesis.  
  

  
## Cost Factors That Cannot Be Ignored  
  

A realistic ROI calculation requires discipline around cost classification.  
  

### Integration Costs  
  

AI does not work in a vacuum. You will need:  

  
- API connectors.  
- Data cleaning.  
- Workflow redesign.  

  
Integration is where most mid‑market operators underestimate cost.  
  

### Ongoing Operating Costs  
  

AI agents require:  

  
- Monitoring.  
- Prompt refinement.  
- Data updates.  
- Security patches.  

  
In carve‑outs with multiple EMR or ERP systems, operating costs can be higher than anticipated because each environment requires tailored handling.  
  

### Change Management Costs  
  

Humans will not instantly trust AI.  

Expect:  

  
- Training cycles.  
- Temporary parallel workflows.  
- Additional QA.  

  
These elements do not need to be large, but they must be acknowledged.  
  

  
## Realistic ROI Timelines  
  

The market narrative promises 3 to 8 week ROI cycles.  

Reality in mid‑market operations is closer to 3 to 6 months, depending on data integrity and workflow depth.  
  

Healthcare carve‑outs tend to fall at the longer end due to system fragmentation, regulatory friction, and inconsistent data fidelity.  
  

However, once the foundation is in place, subsequent automation layers deploy far faster.  

This is why operators should treat AI as a platform investment, not a one‑off initiative.  
  

  
## Case Pattern 1: Revenue Cycle Stabilisation  
  

A typical situation in healthcare carve‑outs is a revenue cycle function suffering from backlog and staff turnover. AI agents can automate:  

  
- Claim status checks.  
- Denial categorisation.  
- Coding error detection.  

  
ROI emerges from reduced rework, faster reimbursement, and reduced overtime.  

When modeled correctly, the contribution from error reduction often outweighs labour savings by a factor of two or three.  
  

  
## Case Pattern 2: Multi‑Entity Back Office Consolidation  
  

Private equity platforms integrating multiple acquired entities often face misaligned workflows and duplicated administrative functions.  

AI agents can normalise processes before full system consolidation.  

ROI comes from:  

  
- Headcount stabilisation rather than cuts.  
- Uniform policy enforcement.  
- Reduced variance in processing times.  

  
The key metric here is not raw labour savings but operational predictability.  
  

  
## Case Pattern 3: Quality and Compliance Operations  
  

Compliance tasks in healthcare and regulated services have high documentation burden.  

AI agents can:  

  
- Extract required data from unstructured documents.  
- Pre‑populate compliance templates.  
- Standardise narrative sections.  

  
ROI is measured in reduced compliance risk and reduced staff hours, but the strategic benefit is sustained audit readiness.  
  

  
## How to Structure an AI ROI Review for Stakeholders  
  

Boards and investment committees expect clarity, not technical enthusiasm.  

A strong ROI review includes:  

  
- A clear baseline.  
- A quantified workflow map.  
- A conservative automation percentage.  
- A hard-dollar estimate of error impacts.  
- A 12 to 36 month financial model.  

  
Avoid theoretical projections beyond 36 months. Mid‑market operations change too quickly.  
  

  
## When AI Automation Does Not Make Sense  
  

AI is not universally beneficial.  

Avoid automation when:  

  
- The workflow is too small to justify integration cost.  
- The data quality is unstable.  
- Human judgment is central to the outcome.  
- Upstream processes are being redesigned in the next 12 months.  

  
Restraint is part of ROI discipline.  
  

  
## Building a Portfolio-Level AI ROI Model  
  

For private equity operators, the real value emerges when ROI can be measured across the entire portfolio.  

This requires:  

  
- Standardised KPIs.  
- Shared automation templates.  
- Cross-entity performance comparisons.  

  
Once established, the model becomes repeatable and significantly accelerates future deployments.  
  

  
## The Long Game: AI as Compounding Operational Leverage  
  

AI automation does more than reduce cost. It creates operational leverage that compounds over time.  

The compounding effect comes from:  

  
- Stable throughput.  
- Reduced variance.  
- Lower error frequency.  
- Faster onboarding of new staff and acquisitions.  

  
This is the heart of lönsamhet AI investering. Not short-term savings, but systemic performance improvement.  
  

  
## Final Guidance for Executives  
  

Measuring ROI on AI automation requires the same discipline used in integration planning and cost transformation initiatives.  

Avoid vendor-inflated assumptions.  

Build baselines with care.  

Quantify error costs with the same seriousness applied to revenue leakage analysis.  

Treat AI as an operational stack, not a quick fix.  
  

  
**Book a strategic consultation**`,"how-to-cut-your-ai-costs-by-80-percent-pragmatic-lessons-from-experienced-operators":`


In Swedish mid market M&A and healthcare carve outs, the pressure to reduce AI spend is no longer a theoretical exercise. It is a board level priority.

  

Teams are discovering that the enthusiastic adoption of AI that began in 2023 quietly produced a second expense line that now matters just as much as cloud spend.

  

This article is written for operators who need real reductions, not cosmetic ones. It synthesizes hundreds of Reddit discussions, internal Pathmaker benchmarks, and hands on examples from cost constrained deal teams.

  

SEO keywords included: minska AI kostnader, OpenClaw tokenkostnad, spara pengar AI, billig AI agent, AI budget tips.



---




Most mid market M&A and healthcare integration teams start with a surprisingly similar pattern. They run everything through the largest possible model. They assume better quality automatically requires higher spend. They ignore caching, token compression, and prompt hygiene because deliverables are urgent.

  

The end result is predictable. A swollen AI bill that adds zero enterprise value.

  

The good news is equally predictable. Once teams implement the cost saving practices below, reductions of 60 to 80 percent are not aspirational. They are routine.



---




Reddit’s most experienced technical operators agree on one principle. The majority of tasks do not require your largest model. Only a minority do.

  

Yet most organisations invert that ratio. They over use frontier models and under use cheap ones.

  

Below is the strategy that consistently minimizes spend without hurting quality.



## Step 1. Classify Your Workload Into Three Buckets



### Bucket 1. Commodity reasoning tasks

  

Examples:

- Email rewriting  
- Meeting summaries  
- Transforming spreadsheets to text  
- Cleaning pipeline data  

  

These tasks should always run on small or mid sized models. They do not benefit from depth of reasoning.

  

Expected cost reduction: 70 to 90 percent.



### Bucket 2. Judgment tasks

  

Examples:

- Sorting clinical asset carve out data  
- Screening CIM language  
- Prioritizing outreach lists  
- Option mapping in PMOs  

  

These tasks require nuance but not deep multi hop reasoning.

  

They run very well on mid sized models, especially models priced between 0.20 and 1.00 USD per million tokens.

  

Expected cost reduction: 40 to 60 percent.



### Bucket 3. True complexity tasks

  

Examples:

- Competitive positioning for a healthcare roll up  
- Drafting synergy models under uncertainty  
- Interpreting legal redlines in SPAs  
- Multi step decomposition of carve out integration risk  

  

Only these tasks deserve your highest end model.

  

In a normal M&A or healthcare operator environment, fewer than 10 percent of tasks fall here.

  

Expected cost reduction when isolated correctly: up to 80 percent.



---




In Reddit’s AI cost optimization communities, two patterns dominate.

  

Pattern one. Users with high bills almost always over generate. They run dozens of calls where one would have sufficed.

  

Pattern two. The largest savings rarely come from switching vendors. They come from clean prompt structure and token control.

  

Examples adapted from real user discussions:

- One user reduced a 1,200 USD monthly bill to 190 USD using prompt shortening and caching.  
- Another cut cost per output from 1.50 USD to 0.13 USD by moving 85 percent of tasks away from the frontier model.  
- A team running an AI agent every 30 seconds reduced costs by 92 percent once they added a local embedding cache.  



---




Most prompts include unnecessary instructions. Many include context irrelevant to the final decision. Some include team folklore that no longer matters.

  

Here is how experienced operators clean them.



## Technique 1. Remove everything that does not change the output

  

Example from a real healthcare carve out workflow.

  

Original prompt:  
“Please carefully evaluate this operational dataset. Think step by step. Ensure that your tone is professional and measurable. Provide a summary. Provide risks. Provide open questions. Provide recommended actions. Do not hallucinate. Use short sentences.”

  

Token count: approximately 110.



Optimized prompt:  
“Review the dataset. Summaries. Risks. Open questions. Actions.”

  

Token count: approximately 12.



Impact: Across 20,000 monthly runs, operators saved roughly 130 USD per day on prompt tokens alone.



## Technique 2. Use keywords instead of narrative instructions

  

Large models interpret keywords very well.

  

Instead of:  
“Please format this in a concise, structured output that is easy for deal teams to consume.”

  

Use:  
“Format: concise. Structured. Executable.”



## Technique 3. Reuse system prompts across entire workflows

  

Do not repeat instructions every call.

  

Cache the system prompt internally and only send new user content. This often reduces prompt length by 50 to 80 percent.



---




Token discipline is where experienced operators outperform everyone else.

  

Common failures:

- Sending full documents every time  
- Sending entire email threads  
- Sending raw data when the model only needs a summary  
- Adding irrelevant corporate boilerplate  



Below is the discipline that actually works.



## Step 1. Chunk documents



For a typical SPA, CIM, or healthcare vendor packet, sending the entire file is wasteful.

  

Chunk into 800 to 1500 token segments.

  

Send only segments relevant to the question. Retrieval augmented generation tools automate this.



## Step 2. Use token limits aggressively



If a model supports “max tokens”, set strict caps for:

- Response length  
- Reasoning length  
- Intermediate steps  



For many tasks, capping the output at 250 tokens delivers the same insight as 1500.



## Step 3. Compression prompts



A shockingly effective Reddit technique:

1. Compress large text to 30 percent of original size  
2. Feed the compressed text into your actual task prompt  

  

This often cuts total spend by 40 to 60 percent without any significant quality loss.



---




Caching is the difference between paying once and paying every time.

  

There are three levels.



## Level 1. Prompt caching

  

If the structure is identical and only small parts change, the model can reuse previous computation.

  

Some vendors charge almost nothing for cached responses. Cost reductions of 90 percent are common.



## Level 2. Retrieval caching

  

When using embeddings for document search:

- Generate embeddings once  
- Cache them locally  
- Never regenerate unless the document changes  

  

Teams managing healthcare carve out data sets have cut monthly costs from 400 USD to under 40 USD using this method.



## Level 3. Workflow caching

  

Example from a mid market M&A pipeline tool:

- 70 percent of deals updated descriptions weekly  
- The summary step was expensive  
- The team implemented caching with timestamp checks  

  

Result: cost reduction of 82 percent within one week.



---




Real users on Reddit consistently converge on a surprising insight.

  

Running tasks one by one is inefficient. Running them in batches transforms cost structure.



## Why batching works

  

- Models spend fewer tokens re establishing context  
- You pay the “expensive part” only once  
- Outputs become more consistent  
- Execution time drops dramatically  



## Example

  

Instead of sending 100 emails individually for rewriting:

- Combine into a single prompt containing 100 items  
- Ask the model to output structured JSON  
- Reassemble downstream  

  

Total cost reduction: 65 to 85 percent depending on model.



---




This is the model selection playbook used by experienced operators handling sensitive M&A data and complex healthcare integrations.



## Use a small cheap model when:

- You need rewrites  
- You need summaries  
- You need classification  
- You need data cleaning  
- You need anything formulaic  

  

Typical price: 0.05 to 0.20 USD per million tokens.



## Use a mid sized model when:

- You need judgment  
- You need prioritization  
- You need thematic clustering  
- You need pipeline triage  
- You need early stage option mapping  

  

Typical price: 0.20 to 1.00 USD per million tokens.



## Use a frontier model only when:

- The decision has material financial consequences  
- Deep reasoning is mandatory  
- Legal language requires true nuance  
- You cannot afford an incorrect inference  

  

Typical price: 1.00 to 5.00 USD per million tokens.



---




Reddit operators often track effective price per task.

  

Illustrative numbers from typical usage patterns:



- Basic rewrite on a small model: 0.001 to 0.005 USD  
- Document summary on a mid sized model: 0.015 to 0.06 USD  
- Complex reasoning on a frontier model: 0.25 to 1.20 USD  

  

Most organisations overspend because everything ends up in the third category.

  

Shifting 80 percent of tasks from the frontier category to the first two categories is where the true savings occur.



---




Many teams accidentally build agents that burn tokens continuously.

  

Here is the cheap version that Reddit users prefer:



## Step 1. Use a small model for “thinking”



Let the cheap model plan steps, choose tools, and determine what needs to happen.

  

Planning rarely requires deep reasoning.



## Step 2. Use retrieval instead of re reasoning



Store intermediate results in vector databases or internal caches.

  

Do not ask the model to rediscover information it already learned.



## Step 3. Call the large model only for final synthesis



This is the exact point where quality matters.

  

Typical savings: 70 to 90 percent.



---




Operators who cut costs fast typically run a 24 hour audit using the checklist below.



## Ask these questions



- Which tasks are running on large models that could run on small ones  
- Which prompts exceed 300 tokens without necessity  
- Which workflows repeat the same input  
- Which calls include irrelevant context  
- Which processes run sequentially but could run in batches  
- Which outputs are longer than the team actually reads  
- Which agent steps burn tokens without producing value  



## Identify waste drivers



The most common waste patterns:

- Overlong system prompts  
- Full document resends  
- No compression step  
- No caching  
- No token limits  
- Agents reasoning in circles  



Fixing the top three typically reduces spend by 50 percent in the first week.



---




Based on work with carve out teams and clinical portfolio consolidators, here is the path that consistently reduces spend while preserving output quality.



## Recommendation 1. Standardize prompts across the organisation



This avoids the chaos of 20 different prompt styles.

  

It also makes cost control predictable.



## Recommendation 2. Establish a high discipline token budget



For every workflow set:

- Max input tokens  
- Max output tokens  
- Max total steps  



This forces clarity.



## Recommendation 3. Implement strict model routing



Never allow the large model to be the default.

  

Require an explicit justification.



## Recommendation 4. Deploy caching at all three levels



No team with serious usage gets low costs without caching.

  

It is the cornerstone of efficiency.



## Recommendation 5. Measure cost per deliverable instead of cost per token



Deal teams understand outputs.

  

They do not care about token economics.

  

Frame cost in the language they use.



---




The mechanics above are not theory. They are verified, repeated, and dependable.

  

Teams that apply them systematically find that their AI budget aligns with operational reality.

  

AI becomes a controllable expense rather than an unpredictable one.

  

And that is exactly what mid market M&A and healthcare carve out operators need now.



---
`,"ai-for-solo-entrepreneurs-in-sweden-2026":`


AI for solo entrepreneurs, or *soloföretagare*, in Sweden in 2026 has shifted from hype to hard utility. The discussion is no longer about inspiration. It is about margin protection, capacity expansion, and handling complexity without building a payroll.  

  

This article addresses the realities facing a solo operator who deals with clients, compliance, and markets that are increasingly shaped by mid market M and A logic and healthcare carve out practices. The tone is intentionally sober. Sweden’s regulatory climate, combined with capital discipline across Europe, demands a practical framework rather than abstract optimism.  

  

The keywords soloföretagare AI 2026, AI agent frilans, and OpenClaw enskild firma are used throughout to ensure alignment with current search behavior.



## The operational shift in 2026



For a Swedish solo business owner in 2026 the adoption curve has matured. AI is no longer about trials. It is infrastructure.  

  

In mid market transactions the diligence workflows, data room preparation, and vendor side clean up increasingly mirror what even small operators now face. The volume of documents, permissions, and decision paths has multiplied. A soloföretagare can no longer rely solely on experience and long hours. They need leverage.  

  

This leverage often comes from an AI agent frilans configuration. The structure resembles an analyst bench in a lean M and A team, yet without the overhead. The output is consistent. The hours are elastic. The cost is predictable.



## Why Sweden’s soloföretagare feel the pressure in 2026



The Swedish market has developed stronger compliance layers around tax reporting, patient data, procurement, and sector specific licensing.  

  

Healthcare carve outs have contributed to this pressure. As private operators acquire, divest, and streamline, the documentation burden trickles down to suppliers and consultants. A solo consultant offering digital health strategy or system integration now works inside a web of expectations previously reserved for larger firms.  

  

By 2026 the expectation is simple. If you run an enskild firma, you are expected to operate with the same data handling discipline as a mid sized operator. This is where tools like OpenClaw enskild firma come into play. They automate traceability, versioning, and structured output that protects the operator from compliance drift.  

  

Without such layers a solo operator risks becoming the bottleneck in a supply chain that is under pressure from both regulatory shifts and private equity incentives.



## The practical AI stack for a solo operator



A realistic stack must meet four criteria. It must be stable. It must integrate with existing workflows. It must reduce risk. It must scale down as easily as it scales up.  

  

The tools that meet these requirements in 2026 fall into a few categories.



### Category 1: AI agents for analysis and summarization



These agents handle the equivalent of analyst level work.  

  
They structure information.  

  
They create diligence ready material.  

  
They turn unstructured instructions into consistent, reusable outputs.  

  

For soloföretagare AI 2026 workflows, the common use cases include  

  
• preparing proposals  
• reviewing healthcare regulations  
• converting meeting transcripts into actionable plans  
• generating structured reporting for clients who require audit trails  

  

An AI agent frilans is often the core of this setup. It behaves like a contractor who never sleeps and never forgets context.



### Category 2: Compliance and documentation automation



This layer addresses the most severe pressure points.  

  

Swedish soloföretagare in healthcare, finance, logistics, and procurement cannot afford manual drift. Even minor inconsistencies create vulnerabilities.  

  

Platforms like OpenClaw enskild firma provide document lineage, change logging, template enforcement, and export ready formats. They remove the ambiguity that regulators dislike. They also reduce the manual work that drives costs and delays.



### Category 3: Relationship management and client continuity



AI driven CRM tools now replicate the rhythm of a disciplined deal team.  

  

They track obligations.  

  
They anticipate follow ups.  

  
They highlight gaps before they become contractual or reputational liabilities.  

  

Client continuity matters. In sectors such as mid market healthcare consulting, losing continuity during a transition or carve out can break multi year relationships. A solo operator cannot afford such gaps.



## The battle hardened reality of AI adoption



By 2026 most small business owners have learned that AI does not generate miracles. It generates structure and leverage. The operators who succeed treat it the way M and A teams treat data rooms. They build repeatable workflows that reduce friction.  

  

Three patterns stand out.



### Pattern one: Standardization beats creativity



Despite the talk about innovation, the solo firms that scale in 2026 rely on rigid templates. These templates mirror the structure used in transactions and carve outs.  

  
This standardization allows AI agents to run consistently. It reduces the cognitive load on the operator. It protects margins.



### Pattern two: Automation replaces administrative endurance



Solo operators often pride themselves on endurance. They take on long hours and manage everything themselves. But endurance is fragile.  

  

AI removes the need for brute force. It takes ownership of the administrative layers that previously blocked growth.



### Pattern three: Data discipline becomes a competitive advantage



Mid market buyers and healthcare networks expect partners to behave like professional operators. A soloföretagare who maintains data discipline through automated systems becomes easier to work with.  

  

Easier partners get more work.  


More work without more staff is the central promise of AI for the solo operator.



## Sector specific pressures in Sweden



### Healthcare and medtech consultants



This segment faces the highest documentation load.  

  

Electronic health record integration, procurement frameworks, patient data regulation, and multi year partnership agreements create complexity.  

  

AI agents handle policy summaries, requirements mapping, meeting logs, draft proposals, and data lineage.  

  

Without these tools the operator falls behind as larger firms consolidate and specialize.



### Financial and regulatory consultants



A solo operator in this space faces transaction volume that has increased as mid market M and A stabilizes.  

  

Buyers demand clearer vendor side preparation. Sellers require structured transitions.  

  

AI tools support scenario modelling, reporting, and audit trail preparation. They also handle client queries with the precision expected from regulated industries.



### Creative and digital freelancers



Even this less regulated category benefits from structure.  

  

Clients in 2026 expect clear deliverables, timelines, and documentation. The buyer landscape has matured. Decision makers prefer consultants who demonstrate consistency and operational maturity.  

  

AI agents provide that stability across every project cycle.



## Risks and misconceptions



Adoption also produces new vulnerabilities. Operators who misunderstand the technology expose themselves to regulatory, financial, or operational risks.



### Risk one: Over delegation



An AI agent frilans can handle a large volume of work. It cannot, however, replace professional judgment.  

  

Operators who delegate critical assessments, clinical implications, or financial interpretations risk errors that are costly and difficult to correct.



### Risk two: Model drift and output inconsistency



Without controlled templates the AI will produce variations that undermine compliance.  

  
Swedish regulators and corporate buyers dislike inconsistency. It signals weakness in the operator’s workflow.



### Risk three: Overreliance on single vendor ecosystems



While all in one solutions promise convenience, they introduce concentration risk.  

  

A practical setup uses multiple components that can be replaced without a full system overhaul.



## Building a realistic AI workflow in 2026



A structured workflow is essential. The following approach is drawn from practices in transaction teams and post carve out integration groups.



### Step one: Define the fixed outputs



These outputs become the backbone of the AI system.  

  

Examples include  
• weekly client reports  
• compliance summaries  
• proposal templates  
• risk assessment notes  
• status updates for healthcare partners  

  

A fixed output reduces noise and increases productivity.



### Step two: Deploy agents for recurring analysis



This is where soloföretagare AI 2026 workflows achieve scale.  

  

Agents read material, generate summaries, and maintain structured formats.  

  

The operator only reviews and approves, rather than generating everything manually.



### Step three: Implement documentation control



This is the OpenClaw enskild firma layer.  

  

It tracks changes.  

  
It prevents version confusion.  

  
It ensures that every document is compliant when delivered.  

  

This step is essential for operators working with public sector buyers or private equity owned clients.



### Step four: Create a client facing continuity layer



AI powered CRM systems maintain consistency in engagement.  

  

They ensure follow ups are not lost.  

  
They track deliverables across quarters.  

  
They align communication with the operator’s capacity.  

  

This structure matters because clients in 2026 expect continuity in a way they did not five years earlier.



## The financial case for AI in solo operations



A solo operator evaluating AI needs a clear cost structure. The models used in 2026 resemble the evaluations done in mid market integrations.  

  

The financial rationale has three pillars.



### Pillar one: Reduction of non billable hours



Administrative and documentation tasks consume a significant share of weekly time. AI removes the bulk of this work.  

  

The result is a measurable increase in available billable hours.



### Pillar two: Increased project capacity



With AI handling documentation and analysis, a solo operator can manage more clients without adding personnel.  

  

This capacity expansion often doubles or triples annual revenue potential.



### Pillar three: Risk reduction



Mistakes in healthcare documentation or transaction support can trigger significant financial losses. AI reduces these errors through consistency and structured processes.



## Looking forward to 2027



By 2027 Swedish solo operators will be competing directly with firms that blend human expertise and autonomous agents.  

  

The market will not reward operators who rely on manual processes.  

  

Early adoption in 2026 provides both economic and strategic advantage.  

  

The most competitive operators will treat AI as a core part of their operating system, not as an add on.  

  

They will mirror the discipline found in transaction teams. They will build templated outputs. They will enforce documentation control. They will maintain continuity through automated relationship systems.  

  

Those operators will grow.  

  
Those who avoid the transition will fall behind.



## Ready to build your 2026 AI workflow  
Book a strategic consultation`,"datasäkerhet-och-integritet-med-ai-agenter-what-swedish-companies-need-to-know":`


  
Swedish companies are moving into operational AI at a faster pace than the public debate suggests, especially in sectors where margins are tight and the regulatory load is heavy. Mid‑market M&A operators and healthcare groups doing carve‑outs are discovering that AI agents can produce immediate operational leverage, but only if the data foundations are hardened and compliant.

  

The problem is simple. AI adoption is accelerating, but governance maturity is not. This gap creates risk. Not theoretical risk, but real exposure. GDPR violations, uncontrolled data flows, shadow AI usage, and vendor lock‑in that puts sensitive operational data in foreign jurisdictions.

  

This article breaks down what Swedish businesses need to know about AI data security, data sovereignty, GDPR compliance, and why a privacy‑first and local‑first architecture like OpenClaw matters in the current regulatory climate.

  

SEO keywords included throughout: AI datasäkerhet Sverige, GDPR AI‑agent, integritet AI, säker AI‑automatisering, lokal AI Sverige.






  
Until 2023, AI in Swedish companies mostly meant experimentation. Prompting. Building internal chatbots. A bit of automation.

  

2024 to 2026 is a different landscape. Companies are deploying AI agents into core processes. Not experiments, but actual workflow execution. Procurement follow‑ups. Financial reconciliations. Clinic scheduling. Access control. Due diligence prep. Compliance reporting.

  

Once AI moves from chat to execution, the security requirements change. The stakes rise immediately.

  

For mid‑market M&A and healthcare carve‑outs, this shift is amplified. Carve‑out environments are chaotic by definition. Fragmented systems. Legacy EHRs. Multiple identity providers. Temporary access privileges. Data residency hazards during transitional service agreements.

  

AI in these environments can be a force multiplier, but only if the data handling is fully controlled. Otherwise the AI becomes another uncontrolled integration surface, another leakage vector, another problem.






  
Many global AI tools treat GDPR like a checkbox. Swedish regulators do not. Neither do Swedish customers, investors, or boards.

  

GDPR interpretation for AI agents comes down to a few core questions.

  

### Is personal data transferred to external providers

  

If the AI agent processes healthcare records, employee information, financial data, or patient identifiers, sending it to a foreign cloud model without explicit legal basis is a violation. Not a theoretical one, but a hard violation.

  

### Can the company prove data minimisation

  

Regulators expect companies to prove that only the required data is processed. Many cloud AI tools capture vast metadata, prompts, context windows, debug logs. This is incompatible with strict minimisation.

  

### Are retention and deletion controls enforced

  

If the AI provider stores logs or training data indefinitely, the company cannot meet its GDPR deletion obligations. Most global AI services do exactly that.

  

### Is the AI vendor a subprocessor

  

Most companies do not realise that using a US‑based AI vendor automatically adds a new subprocessor that must be declared, audited, and governed. For healthcare carve‑outs, this alone can break compliance requirements.

  

### Can the company demonstrate lawful basis and DPIA documentation

  

Deploying AI agents in sensitive workflows often requires a Data Protection Impact Assessment. Without it, the AI rollout becomes a compliance liability.

  

In short. GDPR obligations did not disappear because AI became fashionable. If anything, they have become sharper.






  
For Swedish businesses working with sensitive data, the local versus cloud decision is not a debate about performance. It is a debate about control.

  

### Cloud AI creates unavoidable exposure

  

Cloud AI providers process data outside of Swedish or even EU borders. Even if the provider claims EU data centres, control over the model, the logs, and the training pipeline usually resides in the United States.

  

This creates issues in:

  
• compliance

  

• contractual governance

  

• cross‑border transfer legality

  

• operational risk

  

• vendor dependency

  

• long‑term sovereignty over data and models

  

For M&A environments, especially cross‑border deals, this risk can derail transaction timelines.

  

For healthcare carve‑outs, cloud AI is often impossible due to patient data restrictions.

  

### Local AI gives Swedish companies sovereignty

  

Running models locally, inside the company’s own infrastructure, solves several of the largest problems immediately.

  
• No foreign data transfer

  

• No subprocessor risk

  

• Full control over logs and retention

  

• Ability to enforce true data minimisation

  

• Predictable cost structures

  

• No risk of model training leakage

  

• Auditability that matches Swedish regulatory expectations

  

This is why lokal AI Sverige is no longer a niche concept. It is becoming the default for companies serious about compliance and operational security.






  
“Data sovereignty” used to be a boardroom buzzword. Today it is a practical requirement.

  

In Sweden, the most sensitive industries, including healthcare, defense suppliers, critical infrastructure, and financial services, are already moving toward sovereignty‑first architectures.

  

AI threatens sovereignty if handled carelessly. When a company sends operational data to foreign models, it automatically loses several layers of sovereignty.

  
• Sovereignty over access

  

• Sovereignty over retention

  

• Sovereignty over debugging and logging paths

  

• Sovereignty over training rights

  

• Sovereignty over model lifecycle

  

Once data leaves Swedish systems, the business no longer has structural control.

  

For private equity groups running carve‑outs, this creates a second problem. Sovereignty breaches slow down exits. Buyers demand clean, compliant, well‑documented data flows. Shadow AI usage ruins that.






  
“Privacy‑first” is often used as branding. In reality, it is an architectural choice. A company either builds for privacy or it does not.

  

A privacy‑first AI agent infrastructure must include:

  
• Local model execution

  

• Zero‑retention logging

  

• Encrypted at‑rest and in‑transit pipelines

  

• Strict isolation between workflows

  

• No training on customer data

  

• No cross‑context leakage between agent tasks

  

• Ability to run offline

  

• Separate governance for personal data vs operational data

  

These capabilities cannot be retrofitted onto a global cloud AI platform. They must be designed from scratch.






  
OpenClaw has taken a position that aligns with the reality Swedish companies face. The architecture is local‑first and privacy‑by‑design. For Swedish businesses working in regulated or operationally sensitive sectors, this matters.

  

### Local inference as the default

  

Models run locally. Data does not leave the company’s environment unless explicitly allowed. This aligns directly with AI datasäkerhet Sverige requirements.

  

### No retention

  

OpenClaw does not store session data, logs, or operational context. The customer retains full control.

  

### Strict GDPR alignment

  

Because data does not leave Swedish infrastructure, DPIAs become simpler, subprocessors vanish from the register, and risk exposure collapses.

  

### Built for carve‑outs

  

OpenClaw’s deployment model fits transitional service environments. It can operate inside fragmented systems, temporary networks, and heterogeneous identity environments.

  

### Built for healthcare

  

Because no external data transfer occurs, OpenClaw can handle clinical scheduling, internal EHR workflows, and patient administrative tasks without violating healthcare privacy law.

  

### Built for operational execution

  

Most AI tools are conversation systems. OpenClaw is an execution framework for agents. That means it fits real business workflows, the kind that actually move EBITDA and carve‑out readiness metrics.






  
Companies are moving from:

  
• Global cloud AI

  

• Simple chatbot prototypes

  

• Uncontrolled shadow usage

  

• Compliance gaps

  

• Vendor lock‑in

  

To:

  
• Local AI Sverige

  

• Private model hosting

  

• Hardened data flows

  

• Structured AI governance

  

• Multi‑agent execution frameworks

  

This shift is driven by regulation, but also by practicality. Swedish companies do not want to depend on foreign AI infrastructure for core operations.






  
Here is what battle‑tested operators are doing.

  

### 1. Classify data before scaling AI

  

Do not integrate AI into workflows without mapping data categories. Especially in healthcare, HR, and finance.

  

### 2. Avoid foreign cloud AI for sensitive workloads

  

Even if the provider claims GDPR compliance, the operational risk is too high.

  

### 3. Run AI models locally

  

Use local inference for GDPR AI‑agent compliance and sovereignty protection.

  

### 4. Implement strict access control

  

Agents must have least‑privilege access, not blanket system permissions.

  

### 5. Document DPIAs from day one

  

This avoids regulatory surprises and speeds up future audits or M&A processes.

  

### 6. Separate operational AI from analytical AI

  

Execution agents require tighter controls than analytics models.

  

### 7. Choose architectures built for privacy, not retrofitted

  

Local‑first systems like OpenClaw reduce entire categories of risk.






  
AI is becoming a core operational capability in Swedish companies. Not as hype, but as real workflow automation. For this to work, data security and integrity must be built into the foundation. GDPR is unforgiving. Healthcare carve‑outs are unforgiving. Mid‑market M&A diligence is unforgiving.

  

Cloud AI is easy, but risky. Local AI is harder initially, but safer, cheaper long‑term, and compliant.

  

OpenClaw’s architecture aligns with the operational reality Swedish companies face. Local‑first. Privacy‑first. Execution‑ready. Built for regulated sectors. Built for carve‑outs. Built for autonomy without loss of control.



Book a strategic consultation`,"automation-for-swedish-consulting-firms-with-ai":`Pragmatic strategies for mid‑market realities and healthcare carve‑outs  



## The shifting landscape for Swedish consultants  
The Swedish consulting market is under pressure, not from grand disruptions, but from slow accumulating structural realities. Fee erosion, buyer sophistication, longer procurement cycles and a general fatigue toward non‑differentiated advisory have all converged.  

  
For mid‑market M&A teams and operators in healthcare carve‑outs, the expectations are even sharper. Clients want faster throughput, cleaner data, lower risk, and no romance around turnarounds that will never materialise.  

  
Automation with AI has become a necessity. Not a slogan, not a glossy deck element, but an operational core.  

  
This article explores how Swedish consultants can integrate automation in ways that actually shift margin and delivery capability, using AI konsulttjänster, automatisering konsulter and OpenClaw tjänsteutveckling as structural components rather than add ons.  



## Why automation now  
The consulting sector is still built on throughput of human hours. That model works until it does not.  

  
Margins compress when teams spend most of their time on low value tasks, reconciliation, formatting, validation and redundant research. These activities are rarely priced properly. They are often hidden inside fixed fees or blended rates that become impossible to defend.  

  
Automation addresses this not by replacing judgement, but by increasing surface area for judgement. AI replaces the mechanical parts, freeing the human consultant to operate where value is actually created.  

  
For Swedish firms working in M&A readiness, operational carve outs, regulatory mapping or healthcare process audits, this shift is not optional. It is survival.  



## The gap between theory and operational delivery  
Many firms have announced AI initiatives. Few have operationalised them.  

  
The gap typically comes from three issues.  

  
- Teams underestimate the implementation cost of new workflows.  
- Client‑facing consultants are hesitant to experiment during active engagements.  
- Leadership focuses on tools rather than outcomes.  

  
The result is noise but little structural change.  

  
To break the pattern, Swedish consultancies need a disciplined approach to AI konsulttjänster and automatisering konsulter that starts at the service level, not the technology level.  



## Service layer redesign, not tool adoption  
Automation should start with the service itself.  

  
This is where OpenClaw tjänsteutveckling becomes relevant. Instead of layering AI on top of legacy workflows, OpenClaw style development disassembles the service into components, analyses where automation creates margin, and rebuilds the delivery model accordingly.  

  
The process usually follows four stages.  

  
### Stage 1: Decomposition  
Break down the consulting service into micro activities. In M&A or carve‑out projects this includes:  

  
- Data acquisition  
- Documentation extraction  
- Operational mapping  
- Stakeholder interviews  
- Validation of integration assumptions  
- Risk categorisation  
- Narrative synthesis  

  
Most firms never quantify how much time is spent on each. When they do, they see that 40 to 60 percent is mechanical or semi mechanical.  

  
### Stage 2: Automation mapping  
Every mechanical step is matched with an automation opportunity. Examples include:  

  
- AI extraction of contract clauses  
- Automated generation of operational maps  
- AI summarisation of management interviews  
- Automated risk scoring frameworks  
- Consistency validation of carve out assumptions  

  
The automation map does not replace the consultant. It removes the drag.  

  
### Stage 3: Integration  
The risky part. Automation only works if it flows inside the existing team rhythm.  

  
Consulting teams rarely tolerate disruption mid engagement, so integrations must be invisible and predictable. Automations are wrapped as internal tools, or embedded in templates, so consultants simply follow the same workflow with higher speed.  

  
### Stage 4: Monetisation  
Automation only matters if it changes the unit economics.  

  
Firms should decide whether automation supports:  

  
- Margin protection  
- Faster turnaround for the same fee  
- Premium pricing for faster delivery  
- Scale capacity without scaling headcount  

  
A service without monetisation strategy is not improved. It is only optimised for internal satisfaction.  



## Practical automation examples  
Automation in Swedish consulting needs to be tactical. Not theoretical. Not inflated. Not marketed as a reinvention of professional services.  

  
Below are grounded examples used in mid‑market deals and healthcare carve‑out scenarios.  

  
### Automated document reviews  
Typical carve‑out engagements involve large volumes of operational documents, SOPs, compliance binders and regulatory materials.  

  
AI can classify, extract and summarise this content in minutes. Teams then validate instead of manually reading hundreds of pages.  

  
This automation reduces hours but more importantly reduces cognitive fatigue, increasing accuracy.  

  
### Financial normalisation support  
In mid‑market M&A, the financial stack is often incomplete or messy.  

  
AI can automatically detect anomalies, apply normalisation rules and flag deviations for human review.  

  
The consultant still decides the final adjustments, but the mechanical preparation disappears.  

  
### Automated process mapping  
Healthcare carve‑outs rely on precise process maps for clinical operations, patient flow, staffing matrices and compliance audits.  

  
AI can extract process logic from interviews, documents and logs, then create first draft operational maps.  

  
These drafts accelerate team alignment by days or weeks.  

  
### Risk modelling  
AI models can scan operational data and propose early risk profiles.  

  
Human experts refine the results.  

  
The combination reduces late stage surprises and strengthens the narrative in both sell side and buy side engagements.  



## Cultural requirements inside the consulting firm  
Automation is not just technical. It requires a new cultural posture.  

  
A battle hardened consulting team understands that capability beats ideology. The firms that survive market shifts are the ones that operationalise, test, break things, fix them, then scale.  

  
To build a culture supportive of automatisering konsulter, firms need three behaviours.  

  
### Behaviour 1: Treat internal tools like client deliverables  
Internal AI tools must meet the same standard of clarity, reliability and speed that clients expect from final reports.  

  
If tools are sloppy, adoption dies.  

  
### Behaviour 2: Create a non negotiable automation baseline  
Every project should begin with a baseline of automations that are used by default. Consultants should opt out only with clear rationale.  

  
This stops drift back into manual work and eliminates variability.  

  
### Behaviour 3: Measure output in client impact, not internal heroics  
Automation reduces the opportunity for heroic late night grinding.  

  
This is not a loss. It is maturity.  

  
Client value comes from clean execution, not exhaustion.  



## Integration with client expectations  
Clients care about results and reliability. They do not care about your internal AI story.  

  
However, automation can be positioned subtly to strengthen the value proposition.  

  
- Faster turnaround means clients reduce uncertainty windows.  
- Cleaner data means fewer disputes.  
- Improved repeatability means lower risk in regulated sectors.  
- Transparent automation audit trails increase trust in healthcare and financial environments.  

  
Position the outcome, not the tool.  



## Avoiding common pitfalls  
Most automation failures in consulting come from predictable mistakes.  

  
Three stand out.  

  
### Over automation of ambiguous tasks  
Some tasks require judgement, negotiation or intuition. Automating these leads to sloppy reasoning.  

  
Consultants must maintain ownership of narrative construction, risk interpretation and final strategic conclusions.  

  
### Isolated experimentation  
When one partner tests a tool without institutional support, knowledge becomes siloed.  

  
Firms need centralised governance for AI adoption.  

  
### Misaligned incentives  
If consultants think automation reduces billable hours and therefore reduces utilisation, they will resist it.  

  
Firms must redesign incentives to reward speed, impact and accuracy.  



## The role of OpenClaw tjänsteutveckling  
OpenClaw, as a model for structured service development, forces consulting firms to stop thinking in terms of tools and start thinking in terms of service mechanics.  

  
Its principles emphasise:  

  
- Disassembly of services into measurable units  
- Identification of automation leverage points  
- Rebuilding the service as a repeatable system  
- Continuous margin analysis  
- Clear monetisation strategies  

  
This approach helps firms avoid the trap of random experimentation. Instead, automation becomes a normal component of each service line.  



## AI konsulttjänster as a client facing offering  
Beyond internal transformation, Swedish firms can also monetise AI capabilities directly.  

  
AI konsulttjänster can be developed as standalone service lines.  

  
Practical examples include:  

  
- AI readiness audits for mid‑market portfolio companies  
- Workflow automation for healthcare operations  
- Automated compliance mapping for carve‑outs  
- Data extraction projects for integration planning  
- AI supported PMO for post merger integration  

  
These are valuable because they align with tangible outcomes, not generic AI hype.  



## Building a defensible competitive advantage  
Automation is not a differentiator by itself. It becomes a differentiator when:  

  
- It structurally reduces delivery time  
- It increases accuracy and reduces rework  
- It expands service reach without expanding headcount  
- It creates proprietary tools and data assets  
- It becomes part of how the firm wins deals  

  
Swedish consulting firms that adopt automation at the service level create a moat that slower competitors cannot cross quickly.  

  
This matters in a market where buyers increasingly expect efficiency, speed and proof of operational discipline.  



## Long term implications  
In five years, the consulting firms that survive will be the ones that combine human strategy with automated mechanical execution.  

  
Not because AI replaces consultants, but because firms that do not adopt automation will not be able to sustain competitive pricing, delivery speed or quality.  

  
Mid‑market M&A advisors will need faster diligence cycles. Healthcare operators will require cleaner process data. Carve out specialists will need consistent documentation and risk mapping.  

  
Automation is not an upgrade. It is the baseline.  



## How Swedish consultants can begin  
A practical starting point involves four steps.  

  
- Run a two week automation assessment of one service line.  
- Identify the top three mechanical workload components.  
- Integrate one automation per component with minimal workflow disruption.  
- Standardise usage across all project teams.  

  
This approach builds momentum and reduces organisational resistance.  



## Conclusion  
Automation for Swedish consultants is not about hype or transformation narratives. It is about operational clarity, margin discipline and the reality of competitive pressure in mid‑market M&A and healthcare carve‑outs.  

  
AI konsulttjänster, automatisering konsulter and OpenClaw tjänsteutveckling are not abstract concepts. They are structural tools that reshape how consulting services are built, delivered and monetised.  

  
Firms that take a pragmatic approach, grounded in measurable outcomes, will emerge stronger and more resilient. Firms that wait will face fee pressure, increased client demands and shrinking delivery capacity.  

  
The opportunity is immediate. The implementation is manageable. The strategic benefit is significant.  

  
Book a strategic consultation`,"practical-guide-ai-for-customer-support":`A grounded perspective for Swedish mid‑market operators



## Introduction  
AI in customer support has matured into a pragmatic operational tool, not a glossy showcase project. For Swedish mid‑market companies, especially within healthcare carve outs and fragmented service portfolios, AI is becoming a stable way to reduce load on overwhelmed support teams and deliver predictable quality.

This guide offers a stripped down view of how AI customer support actually delivers value. The focus is on real operational wins, not inflated visions. It is designed for executives and operators who need AI kundsupport Sverige solutions that can withstand due diligence, budget cycles, and integration risks.



## The shift from manual support to structured automation  
Most mid‑market organisations in Sweden still operate customer support nodes that rely on manual processes. This is especially true in healthcare where legacy systems, fragmented patient flows, and inconsistent documentation slow things down.

AI changes the profile of the support function. It does not replace every human touchpoint, but it removes a significant portion of repetitive load. When done correctly, the shift enables:

  
• Predictable service levels  
• Lower dependency on staffing fluctuations  
• Reliable record keeping  
• Fewer operational bottlenecks

  
The real story is not futuristic. It is operational stability.



## Why AI customer support fits the Swedish mid‑market  
Swedish mid‑market organisations operate under tighter margin pressure than large enterprises, but with far more operational complexity than smaller firms. Many are owned by private equity, carve outs, or consolidation platforms. They need solutions that reduce friction without introducing new integration overhead.

AI kundsupport Sverige initiatives work well in this climate because they are modular. They can integrate with:

  
• Existing CRM systems  
• Patient management tools  
• Local documentation structures  
• Slack or Teams  
• Swedish language models tuned for compliance

  
The key is that AI adds structure where teams lack capacity, not disruption.



## Automating customer service with AI  
The phrase automatisera kundtjänst AI is often misunderstood. It does not mean turning the entire support function into a chatbot. The mature approach involves distributing responsibility across three layers.



### Layer 1: Deflection and triage  
This is the entry point where AI handles common questions, provides standard instructions, and routes cases.

  
Examples include:

  
• Checking appointment availability  
• Providing return instructions  
• Explaining basic onboarding steps  
• Directing users to the correct department

  
This layer often removes 30 to 60 percent of total inbound volume.



### Layer 2: Assisted workflows for human agents  
Here, AI works behind the scenes to help human agents resolve more complex matters.

  
This includes:

  
• Drafting answers  
• Summarising previous interactions  
• Checking documentation compliance  
• Providing recommended next steps based on internal rules

  
This layer increases consistency and shortens case resolution times.



### Layer 3: Automated back office operations  
This layer is often ignored, but it generates some of the most stable ROI.

  
AI handles:

  
• Data entry  
• Document classification  
• Updates to CRM and patient record systems  
• Internal notifications and escalations

  
This is the closest thing to a quiet operational fix. It is not flashy, but it removes a substantial amount of manual overhead.



## The value of round the clock availability  
Dygnet runt service AI is one of the most straightforward benefits. Swedish customers and patients expect reliable responses at all hours. Human staffing cannot match that without high cost.

AI makes after hours activity predictable. It handles:

  
• First responses  
• Basic guidance  
• Preliminary case intake  
• Safety screening  
• Documentation extraction

  
This stabilises the workload. Morning backlogs shrink. Weekend queues become manageable. For healthcare carve outs, where patient flows can spike unpredictably, this is a structural advantage.



## Avoiding the most common implementation mistakes  
Many AI support programs fail because they treat AI as a monolith. In reality, several pitfalls can quietly derail progress.



### Mistake 1: Over automating before mapping the process  
Companies often implement AI before the core workflow is documented. The result is an AI layer that reflects old inefficiencies.

  
A disciplined mapping phase is essential. It identifies:

  
• The 20 percent of use cases that create 80 percent of the workload  
• Redundant manual tasks  
• Legacy rules that no longer serve real needs  
• Decision points that require human judgment

  
This prevents embedding operational debt into the AI system.



### Mistake 2: Assuming AI can replace domain knowledge  
Healthcare, financial services, and infrastructure support include tasks that require regulatory understanding. AI can assist, but cannot own these tasks independently.

  
Successful teams build hybrid structures where AI supports domain experts. The experts provide guardrails. AI provides speed.



### Mistake 3: Ignoring integration friction  
Mid‑market organisations often operate:

  
• Several disparate CRM tools  
• Multiple ticketing systems  
• Homegrown solutions  
• Vendor locked interfaces

  
AI cannot compensate for broken plumbing. If integrations are unstable, the support function becomes unstable. A phased approach reduces risk.



### Mistake 4: Treating AI as a front office only project  
The biggest operational gains typically come from back office automation. If leaders focus only on customer facing features, they leave value on the table.



## How AI fits into the M&A and carve out context  
In Swedish mid‑market M&A and healthcare carve outs, customer support is often one of the most fragmented functions. Carve outs typically inherit:

  
• Partial documentation  
• Inconsistent quality between regions  
• Support teams spread across legacy entities  
• High manual workload driven by outdated systems

  
AI provides structural clarity during the transition period. It absorbs fluctuations in volume when the new organisation is still stabilising. It also creates a unified interface for customer communication, which reduces friction across legacy boundaries.

For integration teams, AI becomes a stabilising bridge between old and new workflows. It buys time. It reduces noise. It provides centralised insight into common issues. This makes post merger integration more predictable.



## Building an AI support function that scales  
Scaling AI kundsupport Sverige requires more than deploying a model. The structure matters.



### Step 1: Establish a knowledge foundation  
AI is only as good as the content it draws from. A controlled knowledge base is essential.

  
This includes:

  
• Policies  
• Instructions  
• Process maps  
• Compliance notes  
• Product lists  
• Frequently asked questions

  
Quality beats quantity.



### Step 2: Deploy narrow pilots  
Avoid large, sprawling rollouts. Focus on a single type of customer inquiry, such as:

  
• Scheduling  
• Billing  
• Onboarding  
• Prescription renewals  
• Service troubleshooting

  
Narrow deployments reveal real weaknesses without the risk of full exposure.



### Step 3: Train AI agents with authentic cases  
Models need real examples from real support interactions. Sanitised demo data produces weak performance. Authentic case histories are essential, provided the privacy controls are in place.



### Step 4: Install measurement systems  
AI performance needs to be observed, not assumed.

  
Track:

  
• Deflection rate  
• First time resolution  
• Escalation patterns  
• False positives  
• Agent satisfaction  
• Back office automation accuracy

  
Metrics ensure that progress does not drift.



### Step 5: Introduce controlled escalation  
AI should escalate cases early rather than late. This protects customer satisfaction and prevents brand damage.



### Step 6: Add automation behind the scenes  
Once the AI is stable, begin testing automation for:

  
• CRM updates  
• Case summaries  
• Document ingestion  
• Standard follow ups

  
This is where long term value compounds.



## Practical examples from Swedish operators  
Below are real world patterns observed across mid‑market Swedish organisations.



### Scenario 1: Healthcare appointment handling  
A carve out inherits several patient communication channels. Manual scheduling becomes a bottleneck.

  
AI stabilises the flow by:

  
• Handling basic scheduling requests  
• Sending confirmations  
• Providing preparation instructions  
• Updating internal systems

  
Result: predictable morning queues and shorter patient wait times.



### Scenario 2: Multi unit service provider  
A company with 20 to 50 sites receives repetitive inquiries about opening hours, policies, and basic troubleshooting.

  
AI deflects the majority of these inquiries, which frees support teams to handle more nuanced cases.



### Scenario 3: Post acquisition integration  
A newly acquired division still uses outdated ticketing systems. The acquiring company uses more modern tools.

  
AI becomes the bridge by harmonising customer communication before deeper system integration is completed.



## The long term impact on operational resilience  
AI customer support is not merely an optimisation tool. It enhances organisational resilience.

Resilience comes from stability during peaks. AI handles surges. It removes dependency on temporary staffing, which is a frequent issue in healthcare and retail. It also ensures that core instructions remain consistent across all locations and teams.

For mid‑market organisations that operate with lean structures, this stability is a strategic advantage.



## Conclusion  
AI customer support is not a silver bullet. It is a disciplined operational tool that strengthens predictability and reduces unnecessary load. For Swedish mid‑market companies, especially those in healthcare carve outs or private equity backed consolidations, AI provides structural clarity and dependable service levels.

AI kundsupport Sverige initiatives create measurable improvements when they follow a pragmatic roadmap. Automatisera kundtjänst AI becomes an operational asset only when it is grounded in real workflows and supported by solid integrations. Dygnet runt service AI delivers stability when staffing cannot.

The companies that take a controlled, disciplined approach will capture the most value. Others will chase trends without meaningful returns.



Book a strategic consultation`,"grundläggande-installationsguide-för-openclaw-i-sverige":`


In the Swedish mid‑market, operational stability is often valued more than novelty.  
AI agents are entering the market at a rapid pace, yet most healthcare carve‑outs and midsized industrial platforms still face the same structural problem.  
Too many fragmented systems, too little actionable data, and a constant pressure to modernize without disrupting mission critical workflows.

  

OpenClaw has emerged as a pragmatic option.  
Not glossy, not theoretical, simply a framework that helps teams install AI agents in a structured and controlled manner.  
This guide outlines how to install OpenClaw in Sweden, why the framework matters, and how to work with it without exposing your organisation to unnecessary risk.

  

The tone is direct because that is what operators, integration teams, and carve‑out specialists need.  
No inflated promises.  
Only what actually works.



## Understanding OpenClaw in a Swedish operating environment



Before discussing how to install OpenClaw, it is necessary to understand what it does and how it fits into Swedish regulatory expectations.

  

OpenClaw is an AI agent framework built for mid‑scale organisations that cannot afford downtime or uncontrolled automation.  
It enables controlled deployment of autonomous and semi autonomous workflows.  
It also allows teams to run internal pilots before scaling.

  

For Swedish organisations, especially in healthcare carve‑outs, this matters.  
Systems are often inherited from parent companies.  
Documentation is inconsistent.  
Legacy dependencies are rarely optional.  
Any installation must co‑exist with outdated but operationally essential software.

  

OpenClaw approaches this pragmatically.  
It creates a contained environment where AI agents can operate without rewriting the full stack.  
In practice, this makes OpenClaw one of the most practical options for teams that want to experiment without risking compliance or core uptime.

  

When companies search for information about installera OpenClaw, what they are actually looking for is a way to modernise quietly, with minimal internal friction.  
This guide provides exactly that.



## Pre installation considerations for Swedish organisations



Installing OpenClaw in Sweden is not complicated.  
The complexity comes from aligning the installation with Swedish operational norms, local security practices, and the typical constraints of mid‑market carve‑outs.

  

Before starting, evaluate the following.



### System integrity



Most Swedish IT environments show a predictable pattern.  
Older servers, partial cloud adoption, siloed access rights, and a patchwork of APIs.  
OpenClaw tolerates this environment better than most, but baseline system integrity still matters.

  

Verify that:

- core systems are reachable  
- no critical patches are overdue  
- container support is active  
- network segmentation is documented  



### Compliance expectations



Healthcare carve‑outs in Sweden operate under stringent local rules.  
Data locality, audit logs, and controlled access are not optional.  
OpenClaw can meet these standards, but only if configured with them in mind.

  

Before installation, confirm that:

- all data involved can remain within Swedish or EU servers  
- logging locations are approved  
- user roles are defined before deployment  



### Operational readiness



OpenClaw is not a turnkey automation layer.  
It requires a responsible operator.  
Choose someone who understands your systems and has the authority to make controlled changes.

  

Many carve‑outs underestimate this step.  
They assign the responsibility to general IT support, which leads to slow implementation or unfinished deployments.  
Assign a dedicated operator early.



## Step by step guide to install OpenClaw



What follows is a structured and realistic installation path.  
It reflects real conditions inside Swedish mid‑market companies, not hypothetical greenfield setups.

  

If your team is researching AI agent installation svensk, these steps will match your environment.



### Step 1: Prepare the environment



Start with a controlled environment rather than your production stack.  
For most Swedish organisations, a dedicated VM or isolated container cluster is sufficient.

  

Install:

- Python 3.10 or later  
- Docker or Podman  
- Git  
- A package manager such as pip or uv  

  

Keep this environment minimal.  
Avoid mixing unrelated services.  
This is one of the most common pitfalls in early deployments.



### Step 2: Retrieve OpenClaw from its source repo



Clone the repository using standard Git commands.  
Swedish corporate networks sometimes block external repos, so confirm access before attempting installation.

  

Make sure your environment variables are configured before continuing.  
OpenClaw relies on clear variable separation to avoid configuration drift.  
This is especially relevant in healthcare carve‑outs where environments must remain auditable.



### Step 3: Install dependencies



Run the installation command inside your isolated environment.  
OpenClaw uses a modular architecture, so dependencies are lightweight and controlled.

  

Swedish environments with older Linux distributions may require manual updates of certain libraries.  
Do this early to avoid silent installation failures.



### Step 4: Configure the agent layer



This is where many installations fail.  
Not because the software is difficult, but because organisations try to replicate their entire operational stack at once.  
Start small.

  

Define a single agent with limited permissions.  
Document the objective.  
Document the data sources.  
Document any human approval steps.

  

This enables you to observe how OpenClaw handles tasks without exposing sensitive workflows.



### Step 5: Set up logging and monitoring



Swedish organisations, especially in healthcare, cannot operate without structured logging.  
OpenClaw supports multiple logging backends.  
Choose one that your audit team already knows.

  

Monitor:

- agent decisions  
- data access points  
- error patterns  
- performance over time  

  

A stable monitoring layer is the key to scaling later.



### Step 6: Run controlled pilot tasks



Start with low impact tasks.  
Back office routines.  
Non critical document generation.  
Data cleanup.  
These tasks allow you to measure performance without risking operational disruption.

  

This also builds trust internally.  
Not emotional trust, operational trust.  
That is what matters in carve‑outs and mid‑market integrations.



### Step 7: Review, refine, and expand



Once initial tasks are proven stable, expand gradually.  
OpenClaw supports multi agent deployments, but scale only when your monitoring and controls are mature.

  

This stage is where many Swedish organisations begin to see real value.  
Tasks that previously consumed fragmented teams can be centralised, automated, or handled asynchronously.  
The result is not a dramatic transformation, but a reduction of friction and clearer process ownership.



## How OpenClaw behaves in real operations



Companies researching så funkar OpenClaw often expect cinematic automation.  
What they get is far more pragmatic and far more useful.

  

OpenClaw reduces operational load, but it does not reinvent your organisation.  
It slots into whatever structure you already have, even if that structure is imperfect.

  

The framework observes patterns, executes defined tasks, and supports your teams.  
It does not remove accountability, and it does not encourage risky shortcuts.  
That is why it is well suited for Swedish healthcare carve‑outs and mid‑market integrations.



### Predictability over disruption



Most AI frameworks prioritise speed.  
OpenClaw prioritises predictability.  
This makes it less spectacular but more valuable for operators who need reliability over style.



### Controlled autonomy



Agents can act autonomously, but only within defined parameters.  
This prevents the uncontrolled drift that often appears in early stage automation projects.



### Integration without full rebuild



OpenClaw integrates through APIs, file systems, or scheduled tasks.  
This means you do not need to rebuild your entire digital infrastructure before seeing value.



## Common challenges in Swedish installations



Even with a structured process, Swedish organisations face recurring obstacles.



### Fragmented data landscapes



Carve‑outs often inherit data scattered across legacy systems.  
OpenClaw can access these systems, but only if the organisation first maps them.



### Overestimated internal capacity



Teams often assume they can manage installations alongside daily operations.  
In practice, a focused deployment window is required.



### Security bottlenecks



Swedish organisations tend to have conservative security stances.  
This is justified, but it slows deployment unless addressed early.



## Strategic value for mid market M&A and carve outs



OpenClaw is not a value creation miracle.  
It is a disciplined, structured tool that supports integration teams during the turbulent months after an acquisition or divestiture.

  

For carve outs, the benefit is clear.  
OpenClaw allows teams to automate transitional processes without overbuilding.  
It reduces reliance on parent company systems.  
It creates a buffer that protects the new organisation while long term systems are implemented.

  

For mid market buyers, the benefit is operational clarity.  
You get measurable outputs instead of vague promises about efficiency gains.  
It becomes easier to stabilise the asset and move toward planned synergies.



## Conclusion



Installing OpenClaw in Sweden is neither complex nor risky when approached with discipline.  
It rewards teams that value structure and controlled deployment.  
It aligns well with the realities of healthcare carve outs and mid market integrations.  
And it avoids the romantic narratives that too often accompany automation projects.

  

If your organisation is evaluating how to install OpenClaw, or if you need support with AI‑driven operational stabilisation, now is the right time to assess your next step.



Book a strategic consultation`,"ai-for-the-healthcare-sector-and-efficient-documentation":`
AI in the healthcare sector in Sweden is entering a more mature phase, shaped less by experimentation and more by the practical pressure of cost containment, regulatory expectations, and consolidation dynamics.  
   
The mid‑market is increasingly defined by carve outs, rationalisations, and efficiency targets that leave little room for nostalgic views of digital transformation. Providers are looking for predictable tools. They want real reductions in administrative load and clear governance models. AI that meaningfully impacts documentation and clinical workflow is no longer a “pilot project”, it is a requirement for operational continuity.  
   
This article explores how AI is reshaping documentation, administrative flows, and performance management within Swedish healthcare, with a focus on pragmatic adoption rather than theoretical upside.   
   
Key terms such as AI hälsosektorn Sverige, journalföring AI, and vårdadministration bot are used to anchor this in the current search landscape.  
   
  
  

## The Operational Reality of AI in the Swedish Healthcare Sector

Healthcare operators in Sweden have spent decades compensating for fragmented IT landscapes.  
   
Regional procurement cycles, legacy EHR infrastructures, and high regulatory pressure have created an environment where administrative burden is not an abstract challenge, it is daily friction that costs time, money, and clinical quality.  
   
AI hälsosektorn Sverige is therefore less about futuristic automation and more about stabilising the underlying structure. The sector is now looking for tools that integrate into existing systems without demanding multi‑year transformation programmes.  
   
Private equity owners and consolidators increasingly expect these AI systems to deliver measurable impact within 6 to 12 months.   
   
  
  

## Documentation as the Primary Bottleneck

Across primary care, specialist clinics, occupational health, and municipal care, the same pattern appears.  
   
Clinicians are working inside documentation workflows that were never designed for current caseloads. Many spend 25 to 40 percent of their working hours documenting, correcting, or searching for information.  
   
Journalföring AI targets this specific bottleneck. The aim is not to replace clinical judgment, but to reduce repetitive text creation, retrieve relevant historical data, and ensure consistent compliance language.  
   
The return on investment is straightforward. Less time documenting means more patient throughput, shorter backlogs, and more predictable revenue cycles.  
   
  
  

## Mid‑Market M&A Pressures Are Accelerating Adoption

Mid‑market healthcare M&A in Sweden has shifted from platform building to integration discipline.  
   
Carve outs from larger operators often come with fragmented administrative teams, missing SOPs, and inconsistent documentation standards.  
   
AI driven documentation support and vårdadministration bots are increasingly being written into the value‑creation plans of acquirers.  
   
These tools help stabilise operations during the first 100 days. They reduce onboarding time for clinicians and ensure that reporting structures meet both owner requirements and regulatory expectations.  
   
For carve outs with thin middle management layers, AI becomes a structural stabiliser.  
   
  
  

## Why AI Works in Documentation Before Other Areas

Many healthcare organisations learned the hard way that AI is difficult to apply across too many domains at once.  
   
Where AI has demonstrated consistent value is in documentation and administrative flows because these tasks share predictable characteristics.  
   
They require structured language.  
They repeat daily.  
They are constrained by compliance.  
They carry high cost when done manually.  
   
A vårdadministration bot that can draft visit notes, summarise historical data, create referral texts, or pre‑populate forms fits seamlessly into existing workflows.  
   
There is almost no behavioural change needed.  
   
  
  

## Integration is Now More Important Than Model Performance

Healthcare operators used to evaluate AI tools based on accuracy percentages and novelty.  
   
Today they evaluate on integration burden.  
   
They ask how the tool fits into the EHR.  
They ask how access rights are managed.  
They ask how logs are generated for audits.  
They ask who owns the data.  
   
Any solution targeting AI hälsosektorn Sverige must be designed for the fragmented Swedish EHR landscape.  
   
This means supporting large regional systems but also the systems used by mid‑sized private operators.  
   
The winners in this space will be the companies that understand pipeline architecture, not only language models.  
   
  
  

## Compliance, Risk, and Governance Are Non‑Negotiable

Healthcare operators are becoming increasingly cautious.  
   
The AI solutions that succeed are the ones that provide explicit governance structures.  
   
Clear data retention policies.  
Granular permission systems.  
Consistent audit trails.  
A defined separation between customer data and model training pipelines.  
   
Tools that support journalföring AI must be designed with these requirements from day one.  
   
Investors conducting tech due diligence now routinely check for these controls.  
   
If they are missing, valuation drops or the deal slows down.  
   
  
  

## How AI Strengthens Workforce Efficiency

Swedish healthcare faces long‑term staffing challenges.  
   
AI cannot fix the structural labour shortage, but it can reduce unnecessary friction.  
   
Documentation support tools can stabilise output from new hires.  
They can compress onboarding time for foreign‑trained clinicians.  
They can reduce stress for experienced staff.  
They can create a more predictable working day.  
   
A vårdadministration bot that handles repetitive tasks gives clinicians more focus time, which directly affects patient satisfaction and throughput.  
   
This is not theoretical.  
It is now common to see clinics reduce administrative time per visit by several minutes. Multiplied by hundreds of visits per week, the impact is substantial.  
   
  
  

## AI and Standardisation Across Multi‑Site Operators

Multi‑site operators, especially those built through acquisitions, often struggle with documentation inconsistency.  
   
Different sites follow different routines.  
Some use templates.  
Some rely on individual clinician style.  
Some have inherited outdated local guidelines.  
   
AI driven journalföring AI helps enforce consistent language and structure across all sites.  
   
This creates better conditions for audits, reporting, and quality management.  
   
For operators preparing for long term sale or recapitalisation, standardisation is not a nice to have.  
It is a value driver.  
   
  
  

## Carve Outs Benefit Disproportionately From AI

Carve outs often begin life with incomplete administrative capacity.  
   
The organisation may lack HR systems, reporting structures, or centralised documentation processes.  
   
AI tools that support quick stabilisation of documentation, communication, and workflow routines can accelerate the path to operational independence.  
   
Clinics that adopt AI early after a carve out tend to get through the first year with fewer surprises.  
   
Investors notice this.  
   
  
  

## Data Portability and Long Term Flexibility

Healthcare operators are increasingly wary of vendor lock‑in.  
   
AI that supports the healthcare sector needs to provide portability.  
   
Documents generated by AI must be exportable.  
Models should not rely on proprietary formatting that prevents switching provider in the future.  
   
This flexibility is now a selection criterion in procurement processes.  
   
Vendors that embrace portability build long term trust.  
   
  
  

## The Real Economic Case

When evaluating AI hälsosektorn Sverige, many CFOs now run a simple comparative model.  
   
They compare the cost of clinician time with the cost of implementing AI tools.  
   
In most clinics, each minute saved per patient visit has a direct impact on EBITDA.  
   
Documentation AI that reduces administrative time becomes an investment with short payback, not a speculative technology expense.  
   
Mid‑market healthcare operators, especially those under PE ownership, often require that any new system shows return within the same fiscal year.  
   
Journalföring AI meets that requirement more reliably than almost any other type of AI implementation.  
   
  
  

## Pathmaker’s Position in the Market

Pathmaker operates in this pragmatic reality.  
   
The focus is on practical integration, stable performance, and tools that solve the documentation burden without demanding organisational disruption.  
   
Pathmaker’s solutions are built to support fragmented IT landscapes and multi‑site operators navigating consolidation.  
   
The aim is predictable administrative output.  
Not experimentation.  
Not reinvention.  
Just operational leverage.  
   
This aligns with the needs of operators engaged in M&A, carve outs, and rapid scaling.  
   
  
  

## Looking Forward

AI in Swedish healthcare will continue to move toward standardisation.  
   
Regulations will tighten.  
Procurement processes will become more structured.  
Operators will expect clear governance and predictable outcomes.  
   
The winners will be the tools that deliver measurable reduction in administrative burden, seamless integration, and long term compatibility with the Swedish healthcare environment.  
   
Documentation will remain the highest value entry point for AI over the next 3 to 5 years.  
   
This is where the operational pain is.  
This is where the financial upside is clearest.  
This is where adoption barriers are lowest.  
   
  
  

## Conclusion

AI is no longer a future vision for the Swedish healthcare sector.  
It is a stabilising mechanism that supports clinicians, strengthens operational discipline, and creates predictability in environments shaped by consolidation and regulatory pressure.  
   
For operators evaluating AI tools, focus on documentation, administrative automation, and integration flexibility.  
These areas generate measurable value and strengthen both daily operations and long term organisational health.  
   
Book a strategic consultation`,"legal-dimensions-of-ai-in-sweden":`


## Understanding the Regulatory Landscape



Artificial intelligence has stopped being an experimental add on in Swedish companies. It is now a structural component in operational models, carve out programs, digital transformation, and integration planning.  

Mid market buyers, PE sponsors, and healthcare operators are now forced to treat AI not as an IT layer but as a regulated asset category.  

The regulatory framework is evolving quickly. The coming application of the EU AI Act, combined with Swedish legal traditions and sector specific rules, particularly impacts mid sized acquirers that lack the internal regulatory infrastructure of large strategic buyers.  

This article outlines the legal aspects of AI in Sweden, focusing on what a pragmatic operator needs to understand. The tone is grounded. No idealism. No heroic narratives. Only the mechanics that matter when the margin for error is small.  

Key terms woven into the text include: juridik AI Sverige, lagstiftning AI agent, AI Act Sverige konsekvenser.



## H2 Swedish AI Law Is Shifting From Soft Guidance to Hard Compliance



For years, Swedish regulators relied on recommendations rather than mandatory rules. That era is ending.  

The EU AI Act brings categorical obligations and fines that resemble GDPR level enforcement. Swedish regulatory authorities are expected to follow the same pattern they adopted post GDPR. Slow and soft at first, then rapid escalation as case law forms.  

Companies that treat AI like SaaS will find themselves exposed. AI systems do not operate like cloud applications. They behave like autonomous agents with operational discretion, which triggers new legal duties.  



### H3 Core Drivers Behind the Shift



Several factors explain why juridik AI Sverige is changing:  

  
• AI is increasingly embedded into clinical workflows and diagnostic tools in Swedish healthcare, which heightens patient safety risks.  

  
• AI agents handle financial or operational decisions that previously required human oversight, which raises accountability issues.  

  
• The opacity of model architectures creates difficulty in complying with documentation obligations required under the AI Act.  

  
• Swedish authorities have aligned with the EU Commission on strict interpretations, especially regarding high risk AI classifications.  

  
• Buyers in M&A processes have begun to demand warranties and indemnities related to AI governance, something that was rare even two years ago.  

  
AI in Sweden is no longer a regulatory grey area. It is a compliance domain with measurable consequences.



## H2 The AI Act in Sweden and Its Practical Consequences



The AI Act is written for the EU, but its application in Sweden has specific consequences.  

Swedish regulators tend to be literal. They follow EU regulations tightly. They document early cases thoroughly. They escalate quickly once a pattern has been established.  

For Swedish companies, especially those preparing for sale or undergoing carve out work, this means AI risk must be embedded early in the diligence narrative.  

This is not a theoretical exercise. It has operational and financial implications.



### H3 Consequences for Different Categories of Companies



Different segments will experience the AI Act Sverige konsekvenser differently.  



#### Healthcare Operators and Medtech



This is the most exposed category.  
AI based diagnostic tools, triage systems, or decision support platforms are typically classified as high risk.  

This classification brings:  

  
• Documentation obligations that smaller clinics rarely have capacity to produce.  

  
• Mandatory risk management systems that resemble medical device quality frameworks.  

  
• Requirements for human oversight that conflict with efficiency goals.  

  
• Traceability duties that significantly increase the burden on IT infrastructure.  

  
In carve out scenarios, healthcare assets with undocumented AI workflows often lose deal value or trigger post signing remediation conditions.  



#### Mid Market Industrial and Service Companies



These companies often rely on workflow automation and AI enhanced analytics. They rarely consider these tools to be regulated.  

They are mistaken.  

Depending on the context, AI based decision support tools may fall under high risk or limited risk categories. Buyers increasingly demand clarity on risk classification, lifecycle management, and accountability structure.  

In practice, this means:  

  
• More vendor audits.  

  
• Increased pressure on internal counsel.  

  
• Escalating compliance budgets.  

  
• The need to formalise oversight committees.  



#### SaaS and Data Companies



These companies face additional obligations because they supply the AI capability itself.  

They must comply with lagstiftning AI agent rules, including transparency duties and instructions for safe use.  

They must also absorb liability in a more explicit manner.  

This creates tension in commercial contracting, especially in mid market transactions where the seller wants clean exits and the buyer wants broad indemnities.



## H2 Core Legal Questions for Swedish Companies Deploying AI



The essential question is not whether AI is allowed. It is under what conditions it is allowed.  

The Swedish legal system is principle driven. Most issues revolve around accountability, transparency, and control.  



### H3 Who Is Responsible When AI Makes a Decision



Swedish law does not recognize AI as a legal person.  

Accountability always flows to a human or a legal entity.  

This becomes complicated when an AI agent executes tasks autonomously.  

If human oversight is poorly defined, liability becomes unclear. In M&A deals this often leads to:  

  
• Price adjustments.  

  
• Special indemnities.  

  
• Carve out structures to isolate AI related risk.  

  
In healthcare, unclear accountability can lead to supervisory investigations with significant reputational fallout.



### H3 How Data Is Processed and Whether It Is Lawful



Few Swedish companies have full clarity on what data trains their AI systems. Vendors rarely disclose it in detail.  

This is a legal vulnerability.  

Under juridik AI Sverige rules, companies must assess:  

  
• Whether personal data is used.  

  
• Whether training data contains sensitive categories.  

  
• Whether data transfers leave the EU.  

  
• Whether the vendor has lawful grounds for using the data.  

  
In acquisition scenarios, inadequate data provenance creates friction. Buyers often treat it as a red flag.



### H3 What Documentation Is Required



The AI Act introduces mandatory documentation duties that exceed typical Swedish IT documentation standards.  

Companies must maintain:  

  
• Model cards.  

  
• Training records.  

  
• Risk assessments.  

  
• Monitoring logs.  

  
• System instructions.  

  
In the Swedish mid market, such documentation simply does not exist in most cases.  

This becomes a material legal issue when the company is sold.



## H2 AI Contracting in Sweden Is Becoming More Demanding



Historically, Swedish commercial contracts were concise. AI is changing that norm.  

Buyers, hospitals, municipalities, and industrial operators now demand detailed AI governance clauses.  



### H3 The New Contracting Norms



Commercial agreements increasingly include:  

  
• Explicit definitions of high risk and limited risk AI systems.  

  
• Allocation of responsibility for model drift.  

  
• Obligations to provide updated documentation.  

  
• Requirements to maintain compliance after system updates.  

  
• Rights to audit underlying data.  

  
• Human oversight handoff specifications.  



### H3 Ramifications for M&A Transactions



In mid market M&A, AI scrutiny has moved from IT diligence to legal diligence.  

This shift impacts:  

  
• Valuation.  

  
• Warranty packages.  

  
• Transitional service agreements.  

  
• Integration planning.  

  
• Carve out complexity.  

  
A target with unstructured AI deployment is perceived as a post closing risk.  

A target with AI governance aligned to EU principles is perceived as an asset with scalability potential.



## H2 Sector Specific Considerations in Sweden



Not all Swedish sectors face the same regulatory burden. Some are far more exposed.  



### H3 Healthcare and Life Sciences



This is where AI meets the strictest interpretation of Swedish law.  

Patient safety, traceability, and clinical accountability create a triple pressure zone.  

AI used in diagnostics or treatment planning is almost always regulated.  

Hospitals and private healthcare groups need to document:  

  
• Data lineage.  

  
• Explainability of outputs.  

  
• Disclaimers for human oversight.  

  
• Logging of decision paths.  

  
This documentation becomes part of both operational governance and M&A preparation.  



### H3 Finance and Insurance



AI usage in credit scoring and underwriting intersects with discrimination laws and consumer protection.  

Swedish regulators are highly sensitive to algorithmic bias.  

Companies need to maintain evidence of fairness testing and error controls.  



### H3 Industry and Logistics



AI tools are often embedded inside machinery, robotics, and predictive maintenance systems.  

The primary risks here relate to safety, traceability, and product liability.  

Documentation gaps often appear in carve out situations where the seller and buyer disagree about ownership and responsibility for embedded AI modules.



## H2 Practical Steps for Swedish Companies Preparing for Compliance



Companies need a pragmatic playbook.  

Not a theoretical framework.  

Not a multi year transformation program.  

A simple operational structure that reduces risk, increases deal readiness, and keeps costs under control.  



### H3 Step 1: Inventory AI Systems



Most Swedish companies underestimate how many AI systems they actually use.  

A proper inventory includes:  

  
• Vendor provided tools.  

  
• Embedded AI in machinery.  

  
• Shadow AI used by staff.  

  
• AI agents running operational tasks.  

  
This list forms the basis for all subsequent work.



### H3 Step 2: Classify Systems According to the AI Act



Classification determines the level of regulatory burden.  

Companies must define:  

  
• High risk systems.  

  
• Limited risk systems.  

  
• Minimal risk systems.  

  
Buyers increasingly demand visibility into this classification.



### H3 Step 3: Build Lightweight Governance



Governance does not need to be heavy. It only needs to be clear.  

A simple structure includes:  

  
• A senior accountable owner.  

  
• A risk assessment cycle.  

  
• Documentation routines.  

  
• Incident reporting.  

  
• Oversight instructions.  



### H3 Step 4: Update Contracts



Contracts need to reflect lagstiftning AI agent requirements.  

This includes:  

  
• Data transparency obligations.  

  
• Monitoring duties.  

  
• Human oversight specifications.  

  
• Audit rights.  



### H3 Step 5: Prepare Diligence Ready Documentation



For companies heading toward M&A or significant financing, diligence ready documentation is essential.  

This includes:  

  
• Model documentation.  

  
• Training data provenance.  

  
• Risk controls.  

  
• Compliance statements.  



## H2 Strategic Implications for Mid Market M&A and Carve Outs



The legal aspects of AI now influence how deals are structured in Sweden.  



### H3 Buyers Are Increasingly Conservative



Buyers demand clarity on:  

  
• AI liabilities.  

  
• Future compliance costs.  

  
• Vendor dependencies.  

  
• Data governance.  



### H3 Sellers Must Prepare Early



AI related issues discovered late in the process are expensive to fix.  

They slow down negotiations.  

They limit the buyer pool.  

They create leverage for price reductions.



### H3 Carve Outs Are Becoming More Complex



AI systems rarely map cleanly between business units.  

They often rely on shared data lakes, shared infrastructure, or shared algorithms.  

Carving them out requires:  

  
• Transitional service agreements.  

  
• Access to shared training data.  

  
• Joint ownership clauses.  

  
• Post closing migration plans.  



## H2 Conclusion



AI in Sweden is entering a new legal phase.  

The combination of the EU AI Act, Swedish regulatory culture, and sector specific rules creates a demanding environment, particularly for healthcare groups and mid market companies preparing for M&A or carve outs.  

Legal compliance is no longer optional. It is a structural requirement that influences valuation, operational design, and long term scalability.  

Companies that approach AI governance pragmatically will position themselves for smoother transactions, lower risk, and stronger strategic outcomes.  

Book a strategic consultation`,"openclaw-tips-for-advanced-users":`A Pragmatic Advanced OpenClaw Guide for AI Agent Power Users Focused on Mid‑Market M&A and Healthcare Carve‑Outs



  
OpenClaw has become a preferred base layer for teams that need precision, auditability, and strategic clarity in their AI workflows.  
For advanced users, the platform unlocks a deeper tier of operational leverage, particularly when building complex agents that must behave reliably inside sensitive scenarios such as mid‑market M&A, commercial due diligence, clinical workflow mapping, or pre‑divestiture technical clean rooms.



  
This guide outlines how power users can extract maximum strategic value from OpenClaw.  
No glossy narratives, no romanticized transformations.  
Just the operational truth: what works, what breaks, and how to build agents that hold up under real pressure.



  
This is a high‑end, battle‑tested overview designed for professionals who already know the fundamentals and are now ready to build complex agents that can survive real‑world edge cases.



---

## Understanding OpenClaw’s Real Strategic Positioning



  
OpenClaw is not a generalist AI playground.  
It is a structured execution environment built for predictable reasoning across multi‑step operations.  
Its strength lies in how it handles constraints, data‑flow governance, and multi‑agent orchestration.



  
For M&A teams working mid‑market deals, or operators handling healthcare carve‑outs, those capabilities matter more than cosmetic app layers.  
You are dealing with fragmented systems, unclear documentation, contradictory source data, and heavy regulatory overlays.  
Your agents must handle chaos without hallucinating, drifting, or collapsing into generic language models.



  
OpenClaw supports that kind of discipline.  
But only if you configure it intentionally.



---




  
Before diving into tactics, there are a few principles that advanced power users should anchor around.



  
**1. Constrain early, expand later.**  
Complex agents do not become strong by being broad.  
They become strong by being sharply constrained at the start, then gradually allowed to operate across wider surfaces.



  
**2. Every capability needs an audit path.**  
Especially in healthcare deals.  
If an agent cannot show why it reached a conclusion, it is not usable in diligence, carve‑out integration planning, or clinical documentation review.



  
**3. Multi‑agent networks require memory hygiene.**  
You cannot allow uncontrolled state drift.  
Treat memory as an asset, not a sandbox.



  
**4. Real‑world operations require predictable degradation, not brittle collapse.**  
Model outputs will degrade under load or ambiguity.  
You want degradation to be structured, legible, and easy to detect.



  
These principles shape every advanced technique in this guide.



---




  
Complex agents are not defined by size.  
They are defined by the number of interdependencies they must manage and the predictability of their outputs.



  
An advanced OpenClaw agent architecture typically includes:



  
**• A core reasoning loop**  
**• At least one specialized tool layer**  
**• A constraints engine**  
**• External system connectors**  
**• A memory and logging structure**  
**• A failsafe or fallback path**



  
When you build a complex agent, think like you are designing a mini‑org inside a deal team or clinical operations unit.  
Every capability must have a reason to exist.



---

## H2: Leveraging the Tooling Layer With Surgical Precision



  
Most power users over‑tool their agents.  
They attach more tools than the agent ever uses, which results in unpredictable tool‑calling sequences.



  
Instead, treat tools the same way you treat vendor integrations during a carve‑out.  
Only include them when you have a clear path to measurable output.



  
### H3: Tool Activation Rules  
Tools should not be freely available to the agent.  
Advanced users create activation gates, such as:



  
• Only trigger the financial parser if the input includes structured numerics  
• Only use the EMR connector after validating HIPAA compliance conditions  
• Only call the data room tool after confirming deal phase and permissions  
• Only use benchmark modules if industry baseline is known



  
The more conditional guardrails you add, the more stable your agent will become.



---

## H2: Designing Multi‑Agent Systems for M&A and Healthcare



  
When building multi‑agent systems, many users assume bigger is better.  
In real operations, smaller networks are more resilient.



  
The ideal configuration for advanced work usually looks like this:



  
**• One coordinator agent**  
Handles reasoning, routing, and quality control.



  
**• Two to four domain agents**  
Each responsible for a vertical, such as financial modeling, operational KPIs, clinical compliance interpretation, or IT separation planning.



  
**• Zero unnecessary meta‑agents**  
Do not add agents whose only role is to talk to other agents.  
That adds noise, not capability.



  
In mid‑market M&A, clean agent separation gives you clear workstreams that resemble a real diligence process.  
In healthcare carve‑outs, it prevents regulatory and clinical logic from mixing with financial logic in unsafe ways.



---

## H2: Memory Engineering at an Advanced Level



  
Memory is often treated as a convenience.  
For advanced OpenClaw users, memory is a fully managed asset.



  
Design memory with three questions in mind:



  
**1. What information must persist between steps**  
Not everything should persist.  
Persist only the information critical to the agent’s strategic objective.



  
**2. What information must decay**  
For deals, anything phase specific should decay.  
For clinical analysis, anything patient specific should decay unless longitudinal insight is required.



  
**3. What information must never be stored**  
Especially in healthcare workflows.  
Controlled vocabularies and compliance tags help keep memory safe and predictable.



  
### H3: Memory Compression Techniques  
Power users often implement layered compression, such as:



  
• Semantic clustering of deal KPIs  
• Controlled summarization of clinical quality indicators  
• Extraction of decision‑ready artifacts rather than open‑ended notes  
• Strict separation of input logs and reasoning logs



  
This avoids memory bloat and ensures the agent does not drift during long reasoning chains.



---




  
OpenClaw does not reward poetic or over‑optimized prompts.  
It rewards clarity, constraints, and modularity.



  
A battle‑tested prompt architecture often includes:



  
**• Objective block**  
The precise function of the agent.



  
**• Constraints block**  
Hard limits based on compliance, data type, or workflow phase.



  
**• Method block**  
Your step‑by‑step reasoning instructions.



  
**• Output spec**  
Rigid format rules.



  
**• Failure modes**  
What should happen if the agent cannot satisfy constraints.



  
This structure aligns with how OpenClaw’s reasoning loop prefers to operate.  
It also prevents silent failures and uncontrolled tool calls.



---

## H2: Using Reasoning Chains Without Overextending the Model



  
Many advanced users assume that longer chains equal better reasoning.  
This is a mistake.



  
Long reasoning chains increase drift, risk, and computational load.  
A better strategy is to create short, repeatable micro‑chains.



  
Example patterns include:



  
**• Validate. Execute. Verify.**  
Used in financial modeling agents.



  
**• Parse. Interpret. Resolve.**  
Used in EMR or regulatory document processing agents.



  
**• Gather. Prioritize. Recommend.**  
Used in operational analysis workflows.



  
Each loop provides stability and allows the agent to recover from partial failure without corrupting state.



---




  
In mid‑market M&A, OpenClaw shines when used for:



  
• Normalizing inconsistent data room documentation  
• Building preliminary quality of earnings scaffolding  
• Identifying operational gaps prior to management interviews  
• Mapping integration risks with repeatable logic  
• Creating structured summaries for IC decks



  
But you need to set realistic expectations.  
OpenClaw will not close a deal for you.  
It will not magically detect hidden balance sheet issues.  
It will not replace a sharp associate or a diligent integration lead.



  
What it does is eliminate rework, compress timelines, and reduce human error across the routine but critical steps of the deal process.



---




  
Healthcare carve‑outs are messy.  
Data fragmentation, mixed clinical systems, legacy workflows, and inconsistent documentation create constant operational friction.



  
OpenClaw helps if you deploy it intentionally.  
Use agents to handle:



  
• EMR schema comparison  
• Mapping clinical processes before separation  
• Identifying regulatory dependencies  
• Estimating data migration complexity  
• Translating clinician language into integration‑ready artifacts



  
But do not let agents run unconstrained on PHI or compliance‑relevant documents.  
Control your inputs.  
Constrain your models.  
Log everything.



---




  
Advanced users often break their own systems.  
The most common pitfalls include:



  
**• Too many tools active at once**  
Creates chaotic routing logic.



  
**• Undefined success criteria**  
Agents need measurable endpoints.



  
**• Overly abstract prompts**  
Leads to inconsistent reasoning.



  
**• Uncontrolled memory accumulation**  
Causes drift, non‑determinism, and performance degradation.



  
**• Excessive autonomy**  
Complex agents must remain supervised, especially in healthcare contexts.



---




  
If you intend to scale your agent ecosystem, build with forward compatibility in mind.



  
Key focus areas include:



  
**• Modular agent compositions**  
Easier to upgrade individual modules.



  
**• Strict interfaces between agents**  
Reduces the risk of unintended interactions.



  
**• Tool versioning**  
Ensures repeatability across updates.



  
**• Scenario testing before deployment**  
Especially for diligence, compliance, or clinical tasks.



  
**• Audit logging across every reasoning step**  
Critical for healthcare workflows and regulated deal environments.



---




  
If you want to operate at the highest level inside OpenClaw, treat it like a mission critical system, not a creative sandbox.



  
Focus on structural clarity.  
Focus on constraints.  
Focus on predictable, auditable execution.



  
This is how you build complex agents that survive real‑world pressure in mid‑market M&A and healthcare carve‑outs.



  
If you need guidance designing your architecture or building advanced agents that can handle high‑stakes workflows:



  
**Book a strategic consultation**`,"the-technical-frictionless-method-a-system-for-cross-border-mid-market-buyers-the-technical-frictionless-method-is-simple-in-architecture-and-unforgiving-in-execution":`---
title: "The Technical Frictionless Method A System for Cross Border Mid Market Buyers The Technical Frictionless Method is simple in architecture and unforgiving in execution."
description: "The Technical Frictionless Method A System for Cross Border Mid Market Buyers The Technical Frictionless Method is simple in architecture and unforgiving in execution. | Institutional Briefing by Pathmaker"
date: "2026-03-20"
author: "Pathmaker"
slug: "the-technical-frictionless-method-a-system-for-cross-border-mid-market-buyers-the-technical-frictionless-method-is-simple-in-architecture-and-unforgiving-in-execution"
--- 


.

It works because it forces clarity early.

It removes emotion from the pipeline.

It gives principals control, even in chaotic markets.

The method has three pillars. 

1.

Precision Filtering 

2.

Structured Cross Border Engagement 

3.

Technical Progression Control Each pillar supports the others.

Together they create a dealflow system that feels clean, light, and fully aligned with principal led mandates.

- 

- 

- 

### Pillar I:

Precision Filtering Remove 

80 percent of targets before the first call Most buyers spend too much time on the wrong targets.

Especially when moving into new geographies.

Local advisors offer lists.

Databases offer noise.

Inbound outreach pulls attention to weak candidates.

Principal led buyers cannot afford this waste.

Precision filtering fixes the problem.

The Non Negotiable Criteria Set Before outreach begins, Pathmaker builds a criterion grid with the client

.

Not a flexible wish list.

A hard requirement sheet.

Typically it includes:

- Revenue floor

- EBITDA floor

- Payer mix composition, for healthcare

- Ownership type

- Reimbursement model

- Degree of founder dependence

- Geographic constraints

- Contract structure constraints

- Minimum operational resilience thresholds

- Willingness to transact in the next 

12 months If a target misses a single criterion, the conversation ends.

There is no exception.

Precision filtering has one rule.

Clarity reduces regret.

- 

- 

- 

### Pillar II:

Structured Cross Border Engagement Make international outreach behave like domestic outreach Cross border origination fails when the buyer loses control of tempo.

Time zones slow communication.

Local advisors protect sellers.

Email chains die.

Responses degrade into polite decline.

Pathmaker corrects this by structuring engagement from day zero.

The Country Specific Engagement Model Every country requires a slightly different entry strategy

.

Not cultural generalizations.

Operational facts.

Examples:

- Germany requires early compliance signaling

- France responds to structured dossiers with validation signals

- The Nordics reward directness and transparent intent

- The UK prefers phased briefings and concise next steps

- The US responds well to clear economic rationale within the first outreach message Pathmaker codifies these patterns and embeds them into contact scripts, validation steps, and seller preparation workflows.

This creates predictability in an area of M and A where most competitors still rely on intuition.

Communication Cadence That Preserves Momentum Every seller receives a phased cadence that includes

:

- Initial validation message

- Conversion call booking

- Structured qualification call

- Information request sequence

- Pre NDA alignment

- NDA release

- Counterparty readiness checks The goal is simple.

Sellers should feel the buyer is prepared, serious, and organized.

This reduces drop off and accelerates documentation speed.

- 

- 

- 

### Pillar III:

Technical Progression Control Move serious sellers forward, freeze everyone else Most deals die because progression is not controlled.

Buyers wait for information.

Sellers go silent.

Advisors stall while shopping offers.

Technical Progression Control solves this with strict next step architecture.

Stage Gates That Force Signal Every seller must progress through defined gates

:

- Gate 1: Qualification

- Gate 2: Documentation readiness

- Gate 3: NDA execution

- Gate 4: Financial validation

- Gate 5: Management alignment

- Gate 6: Intent signaling

- Gate 7: Term sheet preparation If a seller does not clear a gate, the process stops.

No exceptions.

No emotional allowances.

Principal led buyers need certainty.

Uncertain sellers introduce risk.

Progression control protects the buyer’s time and increases conversion probability.

Removing Human Drag From Scheduling Cross border scheduling is a major drag point

.

Different time zones, calendars, languages, and business habits create friction.

Pathmaker removes the drag by controlling all calendars, communication flows, reminders, and confirmation cycles.

The result feels like domestic scheduling, even when the parties sit on opposite sides of the Atlantic.

- 

- 

- 


Compliance, reimbursement, credentialing, and operational continuity often overwhelm traditional M and A processes.

Cross border buyers face additional challenges:

- Regulatory uncertainty

- Varying quality of medical record systems

- Clinical staffing shortages

- Divergent payer models

- Fragmented legal requirements The Technical Frictionless method solves this by tightening criteria and increasing predictability.

Carve Out Specific Filters Before contacting a single target, Pathmaker imposes carve out filters such as

:

- Stability of clinical leadership

- Merit based patient flow

- Facility level economics

- Payor reliability

- Integration compatibility

- Technology interoperability

- Historical compliance posture This creates a shortlist that is realistic.

Not a fantasy.

Not a gamble.

Carve Out Engagement Scripts Most healthcare sellers respond poorly to generic outreach

.

They are technical operators.

They prioritize patient outcomes.

They distrust non clinical acquirers.

Pathmaker adapts outreach to match clinical communication norms.

This includes:

- Straight to the point rationale

- Outcome based value articulation

- Transparent integration expectations

- Clear explanation of what changes and what does not The result is a high trust first call.

From there, the probability of progression increases dramatically.

- 

- 

- 


There is no buffer.

No corporate board to hide behind.

No unlimited patience from LPs.

No tolerance for mistakes that originate from poor filtering.

The Technical Frictionless method protects principals by:

- Eliminating false positives

- Reducing time waste

- Accelerating serious sellers

- Removing friction from cross border steps

- Clarifying deal readiness early

- Providing decision quality data instead of noise

- Increasing probability of clean closings The method is designed to build momentum.

Momentum increases leverage.

Leverage improves deal outcomes.

- 

- 

- 


Relationships matter.

But without a filtering engine, relationships turn into unproductive conversations.

Common failure modes include:

- Buyers speaking with too many unqualified sellers

- Advisors controlling the narrative

- Lack of clarity on non negotiable criteria

- Poor alignment between investment team and operating team

- Overconfidence in inconsistent data rooms

- Communication breakdowns

- Misaligned valuation frameworks

- Missing early compliance verification A system protects against these failures.

Not intention.

Not optimism.

Not reputation alone.

Process protects principals.

Filtering protects time.

Execution protects outcomes.

- 

- 

- 


It is not a broker.

It is not a database company.

Pathmaker builds acquisition infrastructure around the buyer.

The Technical Frictionless method is the foundation.

Every workflow, message, filter, and progression 

### Step I: s built to reduce drag and increase conversion speed

.

This allows principal led acquirers to:

- Expand into new countries

- Build thematic pipelines

- Pursue carve outs with confidence

- Convert more founders

- Accelerate roll up strategies

- Avoid dead end processes

- Maintain full control of tempo In markets where inefficiency is normal, efficiency becomes a competitive advantage.

- 

- 

- 
 CONCLUSION

 Cross Border M and A Without Friction Is Not Luck, It Is Architecture Principal led buyers need a method that removes uncertainty.

The Technical Frictionless method does that.

It transforms cross border outreach from chaotic to predictable.

It filters targets with precision.

It moves serious sellers forward.

It discards distraction.

The result is a clean, controlled dealflow engine that works in healthcare, in carve outs, and across international borders.

Pathmaker builds this engine for you.

Book a strategic consultation

Access is restricted to approved mandates.

Minimum target size: $5M+.`,"ai-trends-to-watch-in-sweden":`
\xA0\xA0

Sweden has entered a phase where artificial intelligence is no longer an abstract horizon but a practical operating layer across industries.  

\xA0\xA0

The conversations have shifted. Boards are not asking whether AI matters. They are asking when regulatory pressure will force consolidation, which internal processes can be carved out with minimal transitional friction, and how Swedish enterprises can adopt AI without compromising data integrity or sector specific compliance.  

\xA0\xA0

For mid market buyers and sellers the emerging AI landscape is not a theoretical future. It is a structural force shaping valuations, integration roadmaps and post deal operating models.  

\xA0\xA0

This article takes a pragmatic look at the most material AI trends in Sweden. It incorporates the reality of healthcare carve outs, complexity in legacy IT stacks and the increasing need for operational due diligence around AI readiness.  

\xA0\xA0

The aim is simple. A clear view of the AI trends Sweden must watch. A realistic understanding of what they mean for the future of AI in the region. And a grounded discussion of how developments like OpenClaw development create new conditions for competitive advantage.  

\xA0\xA0

\xA0\xA0

## The Swedish AI landscape in transition

\xA0\xA0

Sweden’s technology ecosystem has matured.  

\xA0\xA0

Large enterprises are moving from pilot programs to full scale deployments. SMEs are adopting AI infused SaaS platforms at a rapid pace. And the public sector is under pressure to modernize while complying with procurement constraints that limit accelerated adoption.  

\xA0\xA0

These structural tensions shape the Swedish AI market more than hype cycles.  

\xA0\xA0

From an M&A perspective this creates an environment where operational sophistication varies drastically between adjacent companies. Some midsized firms have already integrated AI driven process automation in supply chain, billing and workforce planning. Others still rely on fragmented data structures that complicate any AI initiative.  

\xA0\xA0

This unevenness is driving valuation gaps that will widen over the next 24 to 36 months.  

\xA0\xA0

Companies with clean data architectures, API accessible systems and measurable AI productivity gains will command a premium. Those with brittle legacy environments will increasingly require price adjustments or more complex transitional service agreements.  

\xA0\xA0

\xA0\xA0

## Trend 1: Sector specific AI models gain traction in Sweden

\xA0\xA0

General purpose models remain important. But the Swedish market is now shifting toward domain specific AI.  

\xA0\xA0

Healthcare provides the clearest example.  

\xA0\xA0

Sweden’s regionalized healthcare structure creates high complexity in data governance, interoperability and vendor management. National providers and midsize private operators are now adopting sector trained models that understand medical coding, Swedish clinical terminology and reimbursement logic.  

\xA0\xA0

For carve outs this matters.  

\xA0\xA0

When a healthcare unit separates from a larger system the biggest risk is usually data fragmentation and EHR integration. Sector specific AI can reduce manual administrative work during separation and support standardized processes across newly formed entities.  

\xA0\xA0

This reduces transition time and lowers integration cost for buyers.  

\xA0\xA0

Outside healthcare similar dynamics are playing out in manufacturing, logistics and financial services. Swedish companies increasingly prefer models tuned to local regulations, operational nuances and Swedish language contexts.  

\xA0\xA0

This shift toward specialized AI is one of the defining AI trends in Sweden and a critical part of the future of AI adoption across the region.  

\xA0\xA0

\xA0\xA0

## Trend 2: AI compliance becomes a competitive advantage

\xA0\xA0

The implementation of the EU AI Act has placed Sweden at a regulatory inflection point.  

\xA0\xA0

Organisations are learning that compliance is not a documentation exercise. It is an operational transformation. AI readiness now touches vendor selection, data lineage, audit trails and human oversight protocols.  

\xA0\xA0

For mid market M&A this is material.  

\xA0\xA0

Buyers increasingly request structured compliance assessments pre deal. The exposure created by non compliant AI tools can alter both pricing and deal structure.  

\xA0\xA0

Sellers with clear AI governance frameworks gain leverage. They can quantify risk, demonstrate maturity and offer buyers a predictable operational baseline.  

\xA0\xA0

Across Swedish enterprises a new pattern is emerging. Companies that once treated AI as an innovation initiative are now reallocating budget toward regulatory readiness.  

\xA0\xA0

AI compliance is becoming a practical moat.  

\xA0\xA0

\xA0\xA0

## Trend 3: The rise of OpenClaw development

\xA0\xA0

One of the more interesting movements in the Swedish AI ecosystem is the acceleration of OpenClaw development.  

\xA0\xA0

OpenClaw refers to an architectural approach where AI agents interact with structured enterprise systems through clearly defined action layers. Instead of hoping that a model infers the right step the system gives the model a finite catalogue of allowed actions.  

\xA0\xA0

This addresses the single biggest barrier to enterprise scale AI adoption. Predictability.  

\xA0\xA0

For Swedish mid market companies with limited tolerance for operational volatility this matters.  

\xA0\xA0

OpenClaw style systems reduce integration risk and make AI automation more controllable. They also enable faster deployment because companies can map their existing workflows into discrete action sets that are safe and auditable.  

\xA0\xA0

The development of these controlled action architectures will shape the future of AI in Sweden more than speculative breakthroughs in general intelligence.  

\xA0\xA0

They make AI usable in real businesses with real constraints.  

\xA0\xA0

They simplify post merger integration by giving acquirers a consistent framework for automating processes across newly combined entities.  

\xA0\xA0

And they create a replicable method for capturing operational synergies without betting on loosely defined automation.  

\xA0\xA0

\xA0\xA0

## Trend 4: Workforce augmentation replaces workforce reduction narratives

\xA0\xA0

Sweden has a labor market with strong protections, structured unions and a cultural preference for sustainable transformation.  

\xA0\xA0

This environment shapes how AI is deployed. It reduces the likelihood of aggressive workforce reduction strategies and increases the focus on measured augmentation.  

\xA0\xA0

In practice Swedish companies are prioritizing three types of AI supported work:  

\xA0\xA0

• Administrative reduction.  
• Decision support for specialists.  
• Process standardization in low variation workflows.  

\xA0\xA0

For healthcare carve outs the biggest immediate gains come from AI enhanced administrative flows rather than clinical tasks. Pre authorization, coding, claims and scheduling are emerging as the strongest use cases.  

\xA0\xA0

In manufacturing the emphasis is on predictive maintenance and logistics planning rather than labor displacement.  

\xA0\xA0

For M&A this distinction is important.  

\xA0\xA0

The productivity assumptions in deal models must reflect how Swedish organisations actually implement AI rather than how global narratives describe it. Unrealistic synergy assumptions are becoming a silent value destroyer.  

\xA0\xA0

\xA0\xA0

## Trend 5: AI driven due diligence becomes standard in Swedish transactions

\xA0\xA0

As AI capabilities grow buyers are increasingly using AI enhanced tools to accelerate due diligence. But the deeper trend is more structural.  

\xA0\xA0

Swedish companies with intensive AI use are more complex targets.  

\xA0\xA0

Buyers must evaluate model governance, vendor dependencies, data rights and the stability of AI based workflows. This creates a new diligence category that sits between technology and operations.  

\xA0\xA0

The strongest mid market buyers in Sweden are already building AI due diligence playbooks.  

\xA0\xA0

These playbooks typically evaluate:  

\xA0\xA0

• Data architecture readiness.  
• AI model lifecycle management.  
• Shadow IT created by business unit experimentation.  
• AI productivity claims and their verifiable basis.  
• Technical debt created by rapid internal AI tool building.  

\xA0\xA0

On the sell side companies that proactively document these areas are achieving smoother processes and reduced buyer pushback.  

\xA0\xA0

In effect AI maturity is becoming a signalling mechanism in Swedish transactions.  

\xA0\xA0

\xA0\xA0

## Trend 6: Consolidation in AI enabled services

\xA0\xA0

The Swedish market for AI consulting, implementation and support services is fragmented. Hundreds of boutique firms deliver specialized solutions that depend heavily on senior expertise.  

\xA0\xA0

But demand is shifting toward integrated offerings that combine strategy, implementation and managed AI operations.  

\xA0\xA0

This shift creates consolidation pressure.  

\xA0\xA0

Midsize firms that lack scale or cannot build recurring revenue models will face more challenging conditions. Buyers are targeting niche consultancies with sector depth and stable client relationships rather than generalist AI vendors.  

\xA0\xA0

On the sell side companies positioned around stable long term contracts, healthcare expertise or proprietary accelerators are generating interest.  

\xA0\xA0

This consolidation trend will accelerate over the next two years.  

\xA0\xA0

\xA0\xA0

## Trend 7: AI adoption reshapes IT separation costs in carve outs

\xA0\xA0

Swedish carve outs historically struggle with one area. Separation of IT infrastructure.  

\xA0\xA0

When AI enters the picture the complexity increases.  

\xA0\xA0

AI models depend on training data, embedded logic and system access patterns that do not always transfer cleanly when a business is split.  

\xA0\xA0

For healthcare carve outs the challenge is even more severe. AI tools embedded in patient facing systems create data residency and licensing constraints.  

\xA0\xA0

This affects deal structure in several ways.  

\xA0\xA0

• Transitional service agreements become longer and more complex.  
• Buyers must budget for model retraining or revalidation.  
• Sellers incur higher pre sale preparation costs.  
• Integration timelines must be revised to accommodate AI system rewiring.  

\xA0\xA0

The companies managing carve outs most effectively in Sweden are those that treat AI systems as standalone assets requiring clean disentanglement, not as static IT components.  

\xA0\xA0

This trend will define separation planning in Swedish transactions for the foreseeable future.  

\xA0\xA0

\xA0\xA0

## Trend 8: AI powered analytics reshape mid market value creation

\xA0\xA0

Once AI systems are embedded in core operations they generate data patterns that provide a new category of analytics. These analytics can influence decisions far earlier than traditional KPIs.  

\xA0\xA0

Mid market firms in Sweden are using AI enabled analytics to identify revenue leakage, process bottlenecks and procurement inefficiencies.  

\xA0\xA0

This alters how value creation plans are written post acquisition.  

\xA0\xA0

Instead of assuming broad synergy categories buyers can rely on granular insight derived from actual process data. This reduces the risk of overestimating achievable gains and creates more credible improvement roadmaps.  

\xA0\xA0

The most sophisticated buyers in Sweden now treat AI analytics as an operational microscope. It gives them a level of insight into portfolio companies that would have required months of manual analysis in the past.  

\xA0\xA0

\xA0\xA0

## Trend 9: Swedish companies converge on hybrid AI infrastructures

\xA0\xA0

Most Swedish enterprises are rejecting an all cloud or all on prem strategy for AI deployment. Instead they prefer hybrid architectures that balance performance, compliance and cost.  

\xA0\xA0

Cloud provides access to advanced foundation models, rapid scaling and vendor maintained infrastructure.  
On prem or private cloud offers control, predictable cost and compliance alignment with Swedish and EU requirements.  

\xA0\xA0

This hybrid model is becoming the default choice for regulated sectors, including healthcare and financial services.  

\xA0\xA0

It will shape procurement cycles, integration frameworks and operational architecture across Swedish enterprises over the next decade.  

\xA0\xA0

\xA0\xA0

## The future of AI in Sweden

\xA0\xA0

The future of AI in Sweden will not be shaped by ambition alone. It will be shaped by structural realities.  

\xA0\xA0

Sweden’s approach will be pragmatic.  

\xA0\xA0

Companies will avoid high risk implementations. They will favor controlled automation frameworks such as OpenClaw development. They will emphasize compliance, transparency and operational reliability.  

\xA0\xA0

The winners will be those that integrate AI into their core operating logic while maintaining governance discipline and sector specificity.  

\xA0\xA0

In mid market M&A the gap between AI mature companies and laggards will continue to widen. Buyers will reward operational clarity. Sellers will be forced to upgrade their AI stack long before initiating a transaction.  

\xA0\xA0

The themes are clear.  

\xA0\xA0

AI will become a structural layer in Swedish business.  
Compliance will be a differentiator.  
Execution discipline will define competitive advantage.  

\xA0\xA0

\xA0\xA0

## Book a strategic consultation`,"guide-to-integrating-openclaw-with-your-crm":`


Integrating a new AI powered platform into an existing CRM environment is rarely glamorous. It is usually a question of disciplined process control, a sober understanding of data structures, and a willingness to confront legacy workflows that have grown brittle over time. This applies whether you work inside a mid market portfolio company, a healthcare carve out, or a founder led enterprise preparing for a sale process. The objective is simple, to integrera OpenClaw CRM in a way that strengthens commercial performance without creating operational drag.



This guide walks through a pragmatic path for integrating OpenClaw with your CRM. The tone is direct, operational, and focused on real outcomes. No illusions about miracle turnarounds. Just the mechanics of AI CRM-koppling that supports durable value creation.





## Why Mid Market Teams Consider OpenClaw Integration



Mid market companies often operate with lean commercial teams. These teams are expected to deliver predictable revenue growth while functioning inside imperfect systems. Processes tend to be partially documented. Data hygiene depends on a few key employees. Technology stacks are usually the product of incremental decisions, not holistic design.



When private equity sponsors or strategic acquirers enter the picture, expectations tighten. Forecast accuracy must improve. Sales pipeline visibility must stabilize. Compliance pressures rise, particularly in healthcare carve outs where patient adjacent data adds another layer of scrutiny. Integrating OpenClaw becomes attractive because it brings structured pattern recognition, consistent deal scoring, and automated workflow triggers that reduce dependency on tribal knowledge.



In other words, OpenClaw is not introduced as a shiny tool. It is introduced as a control mechanism. It helps automate försäljning AI processes and reduces execution risk across the full revenue cycle.





## Preparing the CRM Environment Before Integration



Before connecting anything you need to clean the battlefield. Integrating AI into a CRM with poor hygiene only automates chaos. The preparation stage generally includes the following steps.



  
**Data mapping**

  
Review all object structures inside the CRM. Identify which fields are source of truth and which are legacy artifacts. Document what will be pushed to or pulled from OpenClaw.



  
**Segmentation audit**

  
Review the lead, account, and opportunity segments that actually drive cash flow. AI engines perform better when trained on operationally relevant cohorts rather than every historical record in the system.



  
**Pipeline rationalization**

  
Most mid market CRMs contain multiple custom stages created over the years by different managers. You need a simple and stable pipeline before layering AI scoring on top of it.



  
**Permission and compliance review**

  
In healthcare carve outs this is critical. Ensure data pathways do not expose patient related fields. OpenClaw can be configured to avoid sensitive attributes but the CRM must be clean first.



This pre integration work is often the most time consuming. But skipping it only shifts cost into the future during diligence or system consolidation.





## Core Principles for a Stable OpenClaw CRM Integration



Once the environment is clean, integration becomes a matter of applied discipline.



  
**One source of truth**

  
Do not allow both systems to overwrite each other freely. Choose whether the CRM or OpenClaw owns specific fields. Clarity here avoids silent data corruption.



  
**High frequency syncs with predictable rules**

  
AI engines degrade when fed stale data. Set short sync cycles but maintain strict logic for what is updated and when. Predictability beats volume.



  
**Minimal custom logic in the CRM**

  
Many mid market teams try to replicate their old workflows using new tools. This defeats the purpose. Allow OpenClaw to take over scoring, alerts, and automation rather than building parallel structures inside the CRM.



  
**Operational governance**

  
Establish who monitors integration errors, who reviews scoring anomalies, and who validates automated workflows. Without ownership, AI CRM-koppling becomes a black box that erodes trust.





## Step by Step Guide to Connecting OpenClaw with Your CRM



### Step 1: Authenticate and Connect APIs



The OpenClaw platform uses a standard API based integration model. Your CRM probably does as well. Authentication is usually straightforward using API keys or OAuth based access, depending on which CRM you run.



This is the technical handshake that allows the two systems to communicate. During this step you should also define rate limits, timeouts, and retry patterns. This matters in mid market environments where infrastructure is sometimes inconsistent.





### Step 2: Map Core Objects and Define Field Level Permissions



This is where you link contacts, accounts, opportunities, and pipeline stages between systems. You also decide which attributes are editable. For example, OpenClaw may own lead scoring and probability forecasts, while your CRM may retain ownership over contract metadata or compliance fields.



Be conservative here. Start with the minimal viable field set. You can expand later once stability is confirmed.





### Step 3: Configure Automated Workflows



This is where OpenClaw begins to generate operational leverage. Examples include automated alerts when deals stall, recommended next steps based on pattern recognition, or risk flags for healthcare compliance queries. These workflows directly support the objective to automatisera försäljning AI processes without overwhelming the CRM with noise.



Keep workflows sparse at first. Too many alerts dilute impact.





### Step 4: Validate AI Scoring and Prediction Logic



AI scoring is only as strong as the dataset. You should run parallel scoring for a period of time to validate accuracy. Compare OpenClaw predictions with your team’s historic close rates. Identify where the engine performs well and where it misclassifies segments.



This step is especially important in healthcare carve outs where deal cycles and decision triggers differ sharply from other verticals. Training data needs to be aligned with the operational reality.





### Step 5: Activate Full Sync and Launch Employee Onboarding



Once technical validation is complete, you can move into active use. Employees need clear instructions about which system to use for which action, how to interpret scores, and how automation affects their daily routine.



Commercial teams in mid market companies are often skeptical of new systems because past implementations were rushed or poorly communicated. A measured approach prevents resistance and encourages adoption.





## Common Failure Points in Mid Market Integrations



Even with a disciplined process, most integration failures follow predictable patterns.



  
**Over customization**

  
Teams try to rebuild old inefficient processes inside new systems. The result is a fragile integration that breaks under load.



  
**Unclear ownership**

  
IT thinks sales owns it. Sales thinks operations owns it. No one actively monitors the integration. Errors accumulate silently.



  
**Incomplete data cleanup**

  
Legacy fields confuse the AI model. Scores become unreliable. Users lose trust.



  
**Improper handling of healthcare sensitive data**

  
This can create compliance exposure. It must be handled upfront, not after the integration is complete.



By understanding these failure points, mid market operators can avoid expensive rework during diligence or exit preparation.





## How OpenClaw Strengthens Value Creation in M&A and Carve Out Scenarios



In M&A environments systems integration becomes a strategic lever. Buyers look for clean, predictable data. They want to understand conversion rates by segment, sales velocity trends, and revenue concentration risks. A properly configured OpenClaw integration provides clarity without requiring a full ERP overhaul.



For healthcare carve outs the benefit is even more direct. These businesses often suffer from fragmented systems, inconsistent documentation, and operational gaps that create revenue leakage. Integrating OpenClaw with the CRM creates standardized workflows, better forecasting, and cleaner audit trails. This reduces integration risk for potential acquirers and supports a higher valuation multiple.



The objective is not to create a perfect system. The objective is to create a defensible system. Investors reward predictability, not promises.





## Post Integration Monitoring and Continuous Improvement



Once the integration is live the real work begins. Systems drift. Workflows evolve. Teams change. A stable AI CRM-koppling requires periodic tuning.



  
**Monthly data quality checks**

  
Review field completion rates, scoring accuracy, and sync logs.



  
**Quarterly workflow reviews**

  
Eliminate workflows that no longer add value. Add new ones where the team needs support.



  
**Annual architecture review**

  
Mid market companies outgrow systems. An annual technical review ensures the integration still supports long term strategy.



This continuous improvement loop is what separates functional AI powered CRMs from abandoned experiments.





## When to Avoid Integration



There are situations where it is better to delay or skip integration.



  
**If the CRM will be replaced within the next year**

  
No reason to invest in deeply connecting systems that are about to be deprecated.



  
**If leadership lacks alignment**

  
AI tools amplify organizational strengths and weaknesses. Without alignment they create friction.



  
**If compliance exposure is unclear**

  
In healthcare carve outs data uncertainty is a red flag. Do not integrate until the data map is complete.



Pragmatism must carry more weight than urgency.





## Conclusion



Integrating OpenClaw with your CRM is not a technology project. It is an operational discipline that supports revenue stability, reduces compliance risk, and strengthens the company’s position in a sale or carve out scenario. The process is not glamorous. It is structured, methodical, and grounded in the realities of mid market execution.



When done correctly it creates clarity. When rushed it creates entropy.



Book a strategic consultation`,"case-study-ai-agents-in-swedish-small-businesses":`
  

AI has shifted from experimental pilot projects to hardened operational tools, especially in Sweden’s fragmented small business landscape. While much of the noise around automation circles consumer apps and speculative innovation, the real movement is emerging in micro and mid‑sized companies that have been structurally constrained for decades. These firms rarely attract the attention of major consultancies, and they operate in sectors where margins are thin and regulatory pressure is unrelenting.

  

This case study examines how AI agents have been deployed in Swedish small businesses, drawing on practical learnings, transactional logic, and the kind of operational discipline typically seen in mid‑market M&A work, particularly in healthcare carve outs. The tone here is intentionally unromantic. No transformation stories. No visionary language. Only exposure to what is actually happening on the ground.

  

This analysis incorporates three core themes: process stability, labour substitution, and system compatibility. It also references the OpenClaw reference case, a useful benchmark for agent coordination and workflow orchestration in restricted operational environments.

  

Keywords included: AI fallstudie Sverige, AI för småföretag exempel, OpenClaw reference case.

  

## Why Swedish Small Businesses Have Become Early Adopters

  

Swedish SMEs are structurally well suited for agent‑based automation. They operate under clear documentation requirements, predictable workflows, and relatively high labour costs. That combination produces automation opportunities that are economically compelling even at small scale.

  

The firms in this study are not chasing innovation for its own sake. They are pursuing stability. When skilled administrative labour disappears to larger employers, AI agents offer a form of operational continuity.

  

Several factors have pushed adoption:

  

- Strict regulatory reporting demands that create repeatable workflows  
- A national environment that accepts digital processes  
- Labour scarcity in administrative and clinical support roles  
- The dominance of SaaS accounting and HR systems with mature APIs  
- Cultural pragmatism, where efficiency outweighs hype  

  

These conditions are particularly visible in healthcare clinics, logistics operators, and niche B2B service providers. All three categories exhibit heavy document processing loads, compliance pressure, and cost sensitivity. They also tend to be part of mid‑market rollup strategies, where functional standardisation is a priority.

  

## Methodology

  

This fallstudie, or case study, focuses on five Swedish SMEs that have implemented agent‑driven workflows. The examples span healthcare, facility services, specialised construction, local logistics, and a regional accounting bureau.

  

The study evaluates:

  

- Initial operational problem  
- Selected agent configuration  
- Integration depth  
- Quantitative outcomes  
- Risks and failure modes  

  

Findings are compared to the OpenClaw reference case, which provides a model for orchestrating multi agent systems in environments with limited internal IT resources.

  

## Case 1: Private Healthcare Clinic

  

A midsized private clinic, carved out from a regional operator during an ownership transition, faced acute administrative instability. The clinic lacked the scale for a full back office, and the carve out created gaps in billing, referral processing, and recurring compliance documentation.

  

The team implemented a multi agent stack consisting of:

  

- A document intake agent scanning referrals and clinical notes  
- A billing agent checking payer rules  
- A compliance agent generating recurring reports  
- An internal QA agent reviewing outliers and exceptions  

  

The agents were not connected to the core EMR, due to regulatory limitations, so they operated in a parallel workspace. This is the same architectural constraint seen in the OpenClaw reference case, where agents operate as orchestration layers rather than embedded system modifications.

  

Quantitative outcomes over six months:

  

- Administrative labour reduced by 32 percent  
- Referral processing time cut from 48 hours to under 6 hours  
- Reporting accuracy improved as human error declined  
- Fewer cancelled appointments due to faster intake workflows  

  

The pragmatic value here was not “transformation” but stabilisation. Carve outs rarely have clean data transfers or predictable processes. The agents functioned like temporary scaffolding that later became permanent.

  

## Case 2: Local Logistics Operator

  

A regional courier service, typical of SME logistics in Sweden, built an agent to coordinate daily route planning. The company used legacy booking tools, and driver scheduling was entirely manual.

  

The primary pain point was the morning bottleneck. One person processed bookings, printed manifests, and adjusted delivery windows. Sick leave or morning delays were catastrophic for daily operations.

  

The AI agent solution included:

  

- Automated extraction of new orders  
- Constraint analysis based on time windows  
- Driver availability modelling  
- Manifest generation and timestamp routing  

  

Outcomes were practical rather than spectacular:

  

- Morning bottleneck reduced from 90 minutes to 15 minutes  
- The company no longer needed standby administrative staff  
- Driver satisfaction increased because routing became predictable  

  

The transition was smoother than expected because the business used a mix of Google Sheets and lightly customised SaaS tools. Many Swedish SMEs share this architecture, and it aligns well with agent orchestration.

  

## Case 3: Facility Services Firm

  

This company provided cleaning services for municipal and private buildings. Scheduling problems, contract variations, and punch list management created recurring friction.

  

The business initially planned a full ERP replacement, but budget constraints made that unrealistic. Instead, leaders deployed two agents:

  

- A scheduling agent that interpreted incoming emails and work orders  
- A QA agent that matched tasks to contract terms and flagged discrepancies  

  

The outcome was not labour elimination. Instead, the team gained:

  

- Reduction in missed tasks  
- More accurate invoicing  
- Fewer disputes with municipal clients  

  

The significance lies in compliance and margin protection. Small facility firms rarely have surplus administrative bandwidth. AI agents ensured that contract commitments were met without needing another coordinator.

  

## Case 4: Niche Construction Subcontractor

  

A specialised Swedish subcontractor working in fire safety documentation faced unpredictable reporting demands from general contractors. Some required weekly site documentation, others required monthly technical reports, and some requested customised inspection summaries.

  

Agents were introduced to:

  

- Generate recurring documentation  
- Validate photos and timestamps  
- Produce project summary reports in the required format  
- Manage file distribution to client portals  

  

Outcomes:

  

- Admin load cut by more than half  
- Faster project closeouts  
- Less friction with general contractor PMs  

  

This case resembles mid‑market M&A logic. Buyers and sellers of niche subcontractors routinely face documentation gaps during diligence. AI agents strengthen the administrative core, making these firms easier to integrate or divest.

  

## Case 5: Regional Accounting Bureau

  

The bureau used a mix of Fortnox, proprietary spreadsheets, and high volume email workflows. Staff spent most of their time clarifying categorisations and preparing periodic statements.

  

Agents were deployed cautiously, focusing on predictable tasks:

  

- Transaction classification based on historical patterns  
- Draft production of monthly reports  
- Client query handling through templated responses  
- Quality control on ledger anomalies  

  

This case is notable because it mirrors the OpenClaw reference case with multi agent coordination across multiple datasets and client segments.

  

The agency did not aim to replace staff. The goal was capacity expansion. The result:

  

- Throughput increased by 25 percent  
- Staff were able to handle more clients  
- Error rates declined in monthly reconciliations  

  

The agents acted as a stabilising function in a sector notorious for seasonal load peaks.

  

## Cross Case Learnings

  

Across all five cases, several consistent patterns emerged:

  

- Swedish SMEs prefer pragmatic deployments. They target one workflow, not full system revolutions.  
- Most automation value comes from elimination of administrative fragility rather than labour cost cuts.  
- API friendly SaaS ecosystems are a major enabler, especially Fortnox, Teamtailor, Google Workspace, and various healthcare reporting tools.  
- AI agents acting as orchestration layers are easier to implement than deep system integrations. This mirrors the OpenClaw reference case structure.  

  

In essence, Swedish SMEs have carved out a unique adoption path. They do not pursue AI to innovate. They use AI to avoid operational collapse.

  

## Risks and Failure Modes

  

Despite the operational gains, several risks consistently surfaced.

  

- Overreliance on a single employee who understands the agent system.  
- Incomplete process documentation, which leads to inconsistent agent behaviour.  
- Regulatory misalignment in healthcare use cases if human oversight is not enforced.  
- Integration fatigue when too many SaaS tools are connected at once.  
- Leadership overestimates what agents can interpret without structure.  

  

Most failures were management failures, not technical ones. The most successful deployments had owners who understood that agents need boundaries, not freedom.

  

## Strategic Implications for Investors and Operators

  

For buyers evaluating Swedish SMEs, the presence of agent based automation is becoming a marker of operational maturity. Not because it signals innovation, but because it indicates that the firm has stabilised its administrative backbone.

  

For operators, the implication is clear. AI agents that are narrowly scoped and process bound can deliver measurable ROI in months, not years. This is most evident in carve outs, where administrative structures are unstable and interim solutions are needed.

  

For sellers, AI strengthened workflows improve diligence readiness. Buyers get predictable data and repeatable processes. That reduces negotiation friction.

  

## Comparison to the OpenClaw Reference Case

  

The OpenClaw reference case highlights three principles that apply to all the Swedish examples:

  

- Agents should be modular and specialised  
- Orchestration layers should sit outside core systems  
- Human in the loop QA should be mandatory for compliance heavy sectors  

  

All five Swedish case studies independently converged on these principles, even when built by small internal teams.

  

This reinforces a simple conclusion. Agent architectures have matured enough that SMEs can adopt them without enterprise scale budgets.

  

## Conclusion

  

AI agents are no longer theoretical tools for Swedish small businesses. They are being deployed in highly practical, battle tested scenarios that reflect the operational pressures of real companies. These firms are not chasing efficiency for appearance. They are using AI to maintain continuity in sectors where skilled labour is scarce and compliance costs are rising.

  

The examples in this AI fallstudie Sverige show that agent based automation is most effective when applied with restraint. The best outcomes come from solving one workflow at a time, not reengineering entire organisations.

  

For operators preparing for growth, M&A, or carve outs, AI agents have become a legitimate strategic tool. Not transformative. Not glamorous. Just operationally necessary.

  

Book a strategic consultation`,"openclaw-ai-agent-for-swedish-companies-a-complete-2026-guide-to-automation-without-technical-expertise":`
  
  

Swedish companies are facing pressure from every direction. Margins are tightening. Mid‑market M&A valuations are unforgiving. Healthcare operators are carving out non core assets with surgical precision. Boards demand operational leverage, not presentations.  
  
  

In this environment OpenClaw has emerged as one of the most pragmatic AI automation frameworks available in 2026. It removes the technical barriers that typically slow down AI adoption. It gives Swedish organisations a way to operationalise AI without hiring engineers or drowning in integration projects.  
  
  

This guide breaks down what OpenClaw is, how it works, why Swedish businesses are adopting it and why hosted deployments outperform self installation every single time.  
  

Keywords intentionally embedded: OpenClaw Sverige, AI agent Sverige, AI automatisering företag, OpenClaw installation, AI assistent svenska.  
  

---


  
  

OpenClaw is an autonomous AI agent framework built for companies that need operational execution, not experimentation. Unlike traditional chatbots, OpenClaw is designed to plan, reason and act across complex workflows. It works as a full stack AI operator. It breaks down tasks. It executes them. It verifies its own output.  
  
  

For Swedish organisations navigating consolidation, integration or efficiency mandates, this matters. Most AI tools require manual prompting and constant supervision. OpenClaw does not. It operates with a degree of independence that a standard AI assistant cannot match.  
  
  

The platform has become a serious contender in AI driven transformation, especially in sectors where documentation volume is high and process variation is low. Healthcare. Manufacturing. Multi site services. Business services.  
  
  

The companies that adopt OpenClaw early do so for the same reason they adopt any operational technology that sticks. It saves time without increasing risk.  
  
  

---


  
  

Swedish firms tend to be cautious adopters of new tools. They want predictability. They want governance. They want evidence. OpenClaw has gained traction precisely because it aligns with these expectations.  
  

Below are the drivers we see most often in mid sized and upper mid sized Swedish companies.  
  

  
### Analysts and deal teams use it to automate documentation and diligence

  
  

M&A teams that support regional consolidators or private equity backed platforms already face document overload. QofE packages, management reports, carve out plans, HR files, operational contracts.  
  

OpenClaw is used as a backend AI operator that pre processes, tags and summarises thousands of pages with minimal oversight.  
  

This cuts diligence cycles without sacrificing reliability.  
  

  
### Healthcare operators use it to standardise workflows across clinics

  
  

Healthcare carve outs typically have chaotic documentation. Clinic manuals. Medical procedures. Local deviations.  
  

OpenClaw is deployed to standardise SOPs and ensure consistent execution across locations. Swedish healthcare operators value predictable automation more than flashy technology.  
  

OpenClaw provides that.  
  

  
### Manufacturing and industrial companies use it for verification and compliance

  
  

Swedish manufacturing is heavily regulated. Safety. Environment. Machine documentation.  
  

OpenClaw works well as a compliance assistant that continuously reviews documents, highlights gaps and generates updated drafts faster than internal teams can keep up.  
  

  
### Service companies use it for back office automation without hiring developers

  
  

Many Swedish mid sized service companies simply do not have IT budgets large enough for custom automation.  
  

OpenClaw gives them a no‑code path to workflow automation.  
  

They get AI throughput without touching technical infrastructure.  
  

---


  
  

OpenClaw is built around four operational pillars.  
  

  
### 1. Goal interpretation

  
  

The agent takes a high level business objective. It breaks it into measurable steps. It plans the sequence.  
  

Unlike typical AI chat interfaces, OpenClaw does not rely on a user manually prompting each micro task.  
  

  
### 2. Self directed task execution

  
  

The agent performs the steps. Document generation. Data extraction. Research. Formatting. Cross referencing.  
  

It adjusts based on the data it finds. It identifies missing context. It corrects mid execution without escalation.  
  

  
### 3. Autonomous verification loops

  
  

This is where OpenClaw separates itself.  
  

It reviews its own work using second pass logic. It compares expected outputs to actual outputs. It flags anomalies without waiting for human review.  
  

This is essential in regulated industries and in any M&A process where errors create downstream headaches.  
  

  
### 4. Integration with human oversight

  
  

OpenClaw is autonomous.  
  

But it is not ungoverned.  
  

It allows supervisory checkpoints that fit into existing business workflows.  
  

This makes it viable for Swedish companies that need internal controls in place for audit, compliance or investor reporting.  
  

---


  
  

No Swedish company adopts AI without asking about GDPR.  
  

OpenClaw aligns well with Nordic privacy expectations.  
  

Below are the essential elements Swedish buyers care about.  
  

  
### Local data control

  
  

Companies can store data within Sweden or the EU.  
  

This avoids legal complications that come with US based consumer AI tools.  
  

  
### Strict separation of datasets

  
  

Each deployment isolates data. No training contamination. No cross tenant mixing.  
  

This is essential in sectors like healthcare or financial services where even metadata leakage is unacceptable.  
  

  
### Transparent processing logic

  
  

OpenClaw provides clear documentation on where data is processed and how.  
  

This meets the demands of Swedish boards that expect visibility across all digital tools.  
  

  
### Compatibility with internal security policies

  
  

Multi factor authentication. Access control. Log retention.  
  

OpenClaw fits into existing IT structures instead of asking companies to redesign them.  
  

---


  
  

Many Swedish companies consider hosting OpenClaw internally.  
  

On paper it looks cheaper.  
  

In practice it creates risk, delays and hidden costs.  
  

Below is the practical breakdown that Swedish executives respond to.  
  

  
### 1. Self installation creates unpredictable operational load

  
  

Running OpenClaw internally requires monitoring GPU utilisation, memory allocation and queue prioritisation.  
  

Few Swedish mid market firms want internal teams spending time on infrastructure management when they already struggle with resource constraints.  
  

  
### 2. Updates come fast, and internal teams cannot keep up

  
  

AI agent frameworks evolve monthly.  
  

A self hosted installation becomes outdated within weeks if it is not continuously patched.  
  

Hosted environments apply updates automatically with controlled rollouts and compatibility checks.  
  

This matters more than executives realise.  
  

Out of date AI systems generate inconsistent outputs.  
  

  
### 3. Security hardening is not optional, and it is not easy

  
  

A self hosted OpenClaw installation needs:  
  

- network segmentation  
- firewall rules  
- hardened access control  
- credential rotation  
- encrypted vector storage  
  

Most mid sized organisations underestimate how much maintenance this requires.  
  

A managed hosting provider handles this continuously.  
  

  
### 4. Hosted deployments offer performance guarantees that internal setups cannot match

  
  

Hosted environments provide high availability and continuous resource scaling.  
  

This ensures that the AI agent does not stall mid execution during a critical diligence review or compliance cycle.  
  

Internal servers rarely provide this reliability.  
  

  
### 5. The cost difference is smaller than it appears

  
  

When you factor in:  
  

- infrastructure  
- maintenance  
- security  
- patching  
- engineering time  
- downtime  
  

A hosted OpenClaw installation is normally more cost effective for Swedish companies than self deployment.  
  

Executives often think hosting is an upsell.  
  

It is not.  
  

It is a risk mitigation tool.  
  

---


  
  

Below are common areas where OpenClaw Sverige delivers immediate ROI.  
  

  
### M&A documentation automation

  
  

Buy side and sell side teams use OpenClaw to produce draft sections for information memoranda, synergy analyses and integration playbooks.  
  

It accelerates processes that are traditionally manual, repetitive and susceptible to error.  
  

  
### Healthcare carve out preparation

  
  

Swedish healthcare operators use OpenClaw to produce standardised patient instructions, risk documentation and clinic workflows during separation phases.  
  

This reduces the operational drag that normally accompanies carve outs.  
  

  
### Back office workflow automation

  
  

Finance and HR teams use OpenClaw for repetitive documentation, policy updates and reconciliations.  
  

It replaces manual work without requiring custom software integrations.  
  

  
### Compliance monitoring

  
  

OpenClaw runs continuous reviews of regulatory texts, internal policies and updated directives.  
  

It alerts teams before non compliance becomes an audit issue.  
  

---


  
  

AI in 2026 is not about experimentation.  
  

Executives want results.  
  

OpenClaw gives Swedish companies a way to deploy AI that is operationally grounded and technically sustainable.  
  

It aligns with the practical realities of Swedish mid market competition.  
  

It respects European data governance.  
  

It delivers measurable gains without major organisational change.  
  

The companies that adopt OpenClaw are not chasing hype.  
  

They are building operational leverage while their competitors hesitate.  
  

And in tight markets, hesitation is expensive.  
  

---

  

Book a strategic consultation`,"trendspaning-för-ai-i-sverige-2026":`Pragmatic insights for mid‑market operators and healthcare dealmakers  


  

AI discussions in Sweden often drift toward abstraction. Visionary, high sheen, low grit. But 2026 is shaping into a year when the market will reward operators and investors who keep their analysis grounded.  

  

For mid‑market companies, especially those navigating healthcare carve-outs or preparing for M&A scrutiny, AI in 2026 is an execution challenge more than a conceptual one. The winners will be those who treat AI as infrastructure and not ideology.  

  

Below is a strategic exploration of **AI trender Sverige 2026**, **framtidens AI-verktyg**, and the pragmatic **utveckling AI-agenter** that actually matter for Swedish operators with P&L pressure, regulatory exposure, and a need for stable integrations rather than glossy prototypes.  

  

## H2: The Swedish AI Landscape 2026  
A market entering its consolidation phase  


  

Sweden's AI ecosystem is maturing. Venture enthusiasm of 2021 to 2023 has cooled and procurement teams are no longer impressed by lofty demos or theoretical claims. The market now demands operational reliability, clear cost-to-value justification, and auditable compliance chains.  

  

In 2026, adoption has intensified in three specific strata.  

  
- Mid-sized industrial firms, especially those operating with aging ERP stacks.  
- Healthcare providers, both private and public, pushed by capacity strain and reimbursement pressure.  
- Corporate carve-outs repositioning for leaner operations post-transaction.  

  

The shift is not driven by hype. It is driven by necessity. Companies with constrained headcount and escalating regulatory exposure need automation that is both interpretable and defensible.  

  

## H2: Key AI Trends in Sweden 2026  
What leadership teams actually need to monitor  


  

When Swedish executives search for *AI trender Sverige 2026*, they are often served high-level narratives. However, three grounded developments matter most for operators preparing for diligence or value creation.  

  

### H3: AI agents transitioning from experimental to operational  
AI-agents, long discussed as a future concept, are now entering the implementation stage. But adoption looks different from the tech press narrative.  

  

In mid-market companies, AI agents are not autonomous entities roaming freely across an organisation. Instead, they manifest as narrow and auditable workflows that reduce repetitive cognitive labor.  

  

Examples include:  

  

- Structured medical triage Support agents that pre-classify, summarize, and route clinical information into EHR systems, always keeping medical responsibility with licensed staff.  
- Financial reporting agents that consolidate data from ERP, CRM, and HRIS systems into consistent monthly reports, reducing time spent on manual extraction.  
- Procurement agents that draft first-pass vendor assessments using standardized templates aligned with internal policy.  

  

These systems are often built on restricted models, with strong guardrails, logging, and compliance mapping. The strategic gain is not autonomy. It is predictability.  

  

### H3: Industry-specific large language models  
Another defining trend in Sweden is the move toward domain-adjusted models tuned for the regulatory and linguistic constraints of Nordic industries.  

  

Generic models struggle with:  
- Swedish administrative language  
- Region-specific healthcare protocols  
- Local regulatory nuance, especially in life sciences and finance  

  

By contrast, industry-specific models deliver more stable and compliant outputs. They offer lower hallucination risk and require less human correction, which matters greatly when a company is navigating restructuring, integration, or carve-out scenarios where headcount is constrained.  

  

### H3: AI-driven documentation control  
Swedish organisations, particularly in healthcare and manufacturing, carry substantial documentation overhead. Quality assurance teams are drowning in compliance updates, procedural documents, version tracking, and audit preparation.  

  

This is where **framtidens AI-verktyg** are gaining traction. Tools focused on documentation control now handle tasks such as:  
- Monitoring for outdated SOPs  
- Flagging inconsistencies across clinical guidelines  
- Summarizing regulatory changes from the EU, TLV, IVO, and Läkemedelsverket  
- Supporting audit readiness for ISO standards  

  

For teams preparing for M&A, these tools help avoid diligence red flags related to governance or process gaps.  

  

## H2: Practical Applications in Healthcare  
Ground-level adoption under pressure  


  

Healthcare is where AI has the highest stakes and the least tolerance for error. Swedish providers face long waitlists, staffing shortages, and escalating administrative burden. AI in 2026 is not a silver bullet. It is a force multiplier for constrained teams.  

  

### H3: Triage and administrative offloading  
AI systems are increasingly used to support non-clinical tasks:  
- First-draft patient summaries  
- Pre-visit questionnaires classification  
- Routing of referrals  
- Standardized messaging templates  

  

These tools do not replace clinical judgment. They reduce the clerical workload that has consumed clinicians for the last decade.  

  

### H3: Clinical documentation stabilisation  
Hospitals and clinics that introduced AI-assisted documentation in 2024 and 2025 are now scaling those solutions across units. The focus is not on speed. It is on standardisation.  

  

Common outcomes include:  
- Reduced variance in note quality  
- More consistent coding and billing  
- Fewer documentation errors that later expose providers to audits and reimbursement disputes  

  

From an investor perspective, this can materially influence valuation in healthcare deals. Better documentation means lower operational risk.  

  

### H3: Pathway optimisation and resource allocation  
AI models are being used to simulate patient flows, especially in primary care and specialist clinics. These tools allow leaders to identify bottlenecks, staffing gaps, and high-variance operational routines.  

  

For healthcare groups planning carve-outs or integrating acquisitions, these simulations support more accurate operational planning.  

  

## H2: AI in Mid-Market M&A  
Realistic value creation, not theoretical upside  


  

In 2026, AI-driven value creation in Swedish M&A operates under stricter scrutiny. Buyers want defensible gains, not speculative efficiency projections.  

  

Three recurring themes dominate diligence.  

  

### H3: Assessment of legacy system risk  
Many mid-market targets still run aging ERPs or medical record systems. AI implementation is constrained by data accessibility, inconsistent metadata, and unstructured legacy notes.  

  

Sophisticated buyers now examine:  
- Data cleanliness  
- System integration readiness  
- Vendor lock-in risk  
- Compliance maturity around patient or financial data  

  

Targets with chaotic data pipelines see valuation haircuts because AI deployment will require costly remediation.  

  

### H3: Automation stability rather than extent  
Buyers no longer ask how much can be automated. They ask how stable the automation is under real-world workflows.  

  

A company boasting aggressive AI automation but weak operational backing is viewed as a risk, not an opportunity.  

  

### H3: AI governance as a diligence marker  
Swedish companies that maintain logs, permission structures, validation workflows, and audit trails for AI usage create more investor confidence.  

  

Governance reduces exposure in regulated industries, especially healthcare. It also signals organisational discipline.  

  

## H2: The Rise of Narrow AI Agents  
Where the real operational value will come from in 2026  


  

While general-purpose agents capture headlines, the market value lies in narrow, context-specific agents with transparent boundaries. This is the core of **utveckling AI-agenter** in Sweden 2026.  

  

Examples include:  
- Appointment coordination agents embedded into patient portals  
- HR policy compliance agents that monitor contract alignment  
- Billing code validation agents tuned for Swedish payer rules  

  

These systems are intentionally limited. Their strength is predictability.  

They fit into organisations where staffing is lean and where change management tolerance is low.  

  

## H2: Future AI Tools for Swedish Operators  
What *framtidens AI-verktyg* will actually deliver  


  

The next wave of tools will not be disruptive in the way the media portrays. They will be infrastructural and often invisible.  

  

Expected developments include:  
- Hybrid on-prem and cloud models suitable for sensitive data  
- Increasing use of retrieval techniques to anchor outputs in verifiable facts  
- Verticalised agent frameworks where workflows can be configured without coding  
- Integrated compliance layers that map outputs to regulation in real time  

  

Healthcare will continue to be the proving ground. Mid-market operators will follow with more caution but ultimately higher adoption due to cost pressure.  

  

## H2: Risks That Swedish Organisations Tend to Underestimate  
Patterns repeating across industries  


  

Executives often underestimate:  
- The cost of preparing legacy data for AI environments  
- The organisational friction created when workflows are redesigned  
- The difficulty of integrating AI into fragmented IT stacks  
- The governance burden when multiple tools are adopted in parallel  

  

AI is not replacing the need for skilled operational leaders. It is amplifying the impact of the ones who plan carefully and maintain discipline.  

  

## H2: Strategic Recommendations for 2026  
Practical guidance for Swedish operators and investors  


  

Successful AI adoption in 2026 requires a measured approach.  

  

### H3: Standardise workflows before automating  
Automation amplifies the strengths and weaknesses of an organisation. If processes are inconsistent across clinics or business units, AI will introduce more variance, not less.  

  

### H3: Choose tools that integrate with existing systems  
Most mid-market companies cannot afford disruptive IT transformations. AI tools must integrate with what already exists, not demand extensive replacement.  

  

### H3: Prioritise narrow agents over broad automation  
The most reliable value will come from narrow agents built around specific tasks, not broad, semi-autonomous systems.  

  

### H3: Build governance early  
Log usage. Define permission structures. Document validation steps. This is especially critical in healthcare, where compliance exposure is material.  

  

### H3: Prepare for operational drift  
AI systems need continuous monitoring. Inputs shift. Regulations evolve. Data formats change. Systems degrade without oversight.  

  

## H2: What This Means for Swedish Leadership Teams in 2026  
A realistic operational outlook  


  

AI in Sweden 2026 is not about moonshots. It is about disciplined operational gains.  

  

Executives who stay grounded in pragmatism will outperform those chasing futuristic visions. The companies that will capture value are those that:  
- Treat AI as infrastructure  
- Maintain governance discipline  
- Build narrow, auditable workflows  
- Invest in data quality  
- Focus on constrained, high-impact use cases  

  

This is the mindset required in healthcare carve-outs, mid-market integrations, and operational turnarounds where resources are limited and risk tolerance is low.  

  

## H2: Final Word  
A pragmatic path to AI maturity in Sweden  


  

The Swedish market is entering a phase where AI must prove its operational worth. Organisations that approach adoption with careful planning, disciplined governance, and realistic expectations will achieve stable, defensible, and scalable outcomes.  

  

For leadership teams preparing for M&A, restructuring, or strategic repositioning, AI is no longer optional. But the approach must be measured, not romanticised.  

  


Book a strategic consultation`,"openclaw-installationsguide-2026-step-by-step-for-mac-and-windows":`OpenClaw installation guide. Installera OpenClaw Mac. OpenClaw setup svenska. Hur installerar man OpenClaw. OpenClaw nybörjarguide.



OpenClaw has exploded in usage across deal teams, healthcare operators, and integration-heavy carve-out environments because it automates communication flows at scale.  
Many Swedish beginners find the installation process confusing, especially when they come from a finance or operational background rather than tech.  

This guide removes the noise.  
It is written in plain English for non-technical users, informed by hundreds of Reddit beginner questions.  
It is pragmatic, structured, and optimized for professionals who cannot waste time wrestling with a tool that should simply work.



---

## H1: What You Need Before You Install OpenClaw  
Most installation failures come from missing prerequisites.  
Get these in place first, or you will lose hours.



### H2: Core Requirements  

- A stable internet connection.  
- 10 to 15 minutes of uninterrupted focus.  
- A Mac running macOS 12 or later, or a Windows machine running Windows 10 or later.  
- Admin rights on your device, especially inside corporate IT environments.  
- A WhatsApp or Telegram account if you plan to integrate messaging immediately.  
- A basic understanding of where your Downloads folder is.  



### H2: Situations Where Users Run Into Problems  

- Company laptops with restricted permissions.  
- Old macOS versions.  
- Windows machines missing required system updates.  
- Users who skip the configuration step and then assume OpenClaw is “broken”.  

If you operate inside a private equity, healthcare, or M&A workflow, your IT environment may be heavily controlled.  
If that is the case, you need to request installation rights before you begin.  
Failing to do so will block you halfway and cost you more time than the installation itself.



---

## H1: How to Install OpenClaw on Mac  
This is the most common configuration for analysts, operations managers, and integration leads.



### H2: Step 1. Download the Installer  
Go to the official OpenClaw website.  
Click Download for macOS.  
The file will appear as a .dmg file in your Downloads folder.  



### H2: Step 2. Open the .dmg File  
Double click the file.  
A window will open with the OpenClaw icon.  
Drag that icon into your Applications folder.  

Many Reddit beginners forget this copy step.  
If you open OpenClaw directly from the .dmg file, the program may not save settings correctly.  



### H2: Step 3. Approve macOS Security  
macOS may block the file with the message:  
“OpenClaw cannot be opened because it is from an unidentified developer.”  

To fix this:  
- Open System Settings.  
- Go to Privacy and Security.  
- Scroll down until you see the prompt.  
- Click Allow Anyway.  

This step is routine in modern macOS security environments.  
It is not a sign of malware.  



### H2: Step 4. Launch OpenClaw  
Open Applications.  
Double click OpenClaw.  

If you see a first launch setup screen, you are on the right track.  
If it crashes immediately, check the Common Problems section later in this guide.  



---

## H1: How to Install OpenClaw on Windows  
Windows installations are slightly more forgiving but still require attention.



### H2: Step 1. Download the Installer  
Visit the OpenClaw website.  
Download the .exe file for Windows.  
Save it to your Desktop or Downloads folder.  



### H2: Step 2. Run the Installer  
Right click the installer and select Run as administrator.  
If you skip admin mode, the installation may fail silently.  



### H2: Step 3. Click Through the Setup Wizard  
Accept the standard options.  
Choose your installation folder, the default works for 99 percent of users.  
Click Install.  



### H2: Step 4. Allow Windows Defender  
If Windows Defender pops up, choose More Info then Run Anyway.  
Corporate devices may require IT approval.  
Request it early to avoid delays.  



---

## H1: Initial Configuration: What You Must Do Before Automation Works  
OpenClaw is installed, but not operational.  
Configuration matters more than the installation itself.



### H2: Step 1. Log In  
OpenClaw will request your account credentials.  
Enter your login and confirm via email if prompted.  

If you do not receive the email, check your spam folder or request a resend.  



### H2: Step 2. Choose Your Working Mode  
OpenClaw normally offers two modes:  

- Light mode for simple tasks.  
- Advanced mode for teams handling complex automation or multi-platform messaging across carve-outs and integrations.  

Start with Light mode unless you already know what you need.  



### H2: Step 3. Verify System Permissions  
OpenClaw needs access to:  

- Notifications.  
- File system.  
- Network requests.  

Approve all permission requests.  
Blocking permissions leads to 90 percent of beginner complaints on Reddit.  



### H2: Step 4. Install Language and Model Packs  
OpenClaw often downloads additional language or automation models the first time it runs.  
Let it finish.  
Interrupting this step causes corruption and forces a reinstall.  



---

## H1: Connecting WhatsApp or Telegram  
Most users install OpenClaw to automate communication workflows.  
This is especially common in healthcare operations, front-line staffing, or integration scenarios where speed matters more than polish.



### H2: WhatsApp Connection  

- Open OpenClaw.  
- Go to Integrations.  
- Choose WhatsApp.  
- A QR code appears.  
- On your phone, open WhatsApp.  
- Go to Linked Devices.  
- Scan the QR code.  

Connection usually takes less than ten seconds.  
If it spins endlessly, your firewall may be blocking the connection.  



### H2: Telegram Connection  

- Go to Integrations.  
- Select Telegram.  
- Open Telegram on your device.  
- Search for BotFather.  
- Generate a new API token.  
- Paste the token into OpenClaw.  

Telegram is more flexible and stable for bulk messaging.  
Healthcare operators often prefer it for predictable behavior during staff coordination surges.



---

## H1: Your First Tasks to Try  
Once your installation is stable, test small things before deploying complex workflows.  
This avoids embarrassing failures later.



### H2: Task 1. Send a Test Message  
Write a simple message to yourself or a trusted colleague.  
This confirms your integration works.  



### H2: Task 2. Create a Simple Automation  
Example:  
“Send a WhatsApp reminder every morning at 08:00.”  

This tests scheduling, routing, and execution.  



### H2: Task 3. Import a Contact List  
Try a small sample file first.  
If it fails, you know your formatting is wrong before loading a full dataset.  



### H2: Task 4. Trigger a Manual Run  
Run one automation manually to confirm the chain works.  
This is how M&A integration teams validate message flows during carve-out IT migrations.  



---

## H1: Common Problems and How to Solve Them  
Most Reddit complaints fall into five categories.  
Here is how to fix them quickly.



### H2: Problem 1. The App Will Not Open  
Cause: macOS security or missing permissions.  
Solution: Approve in Privacy and Security then relaunch.  



### H2: Problem 2. WhatsApp Will Not Connect  
Cause: Network firewalls or scanning the QR code too quickly.  
Solution:  
- Restart OpenClaw.  
- Reopen WhatsApp Linked Devices.  
- Try scanning again after two seconds.  



### H2: Problem 3. Telegram API Token Rejected  
Cause: Copied token is incomplete.  
Solution: Copy the entire string from BotFather and paste again.  



### H2: Problem 4. Messages Do Not Send  
Cause: Automation not activated.  
Solution: Turn on the automation toggle.  
Many beginners assume tasks are live when they are still disabled.  



### H2: Problem 5. Blank Screen After Install  
Cause: Missing system dependencies or outdated OS.  
Solution:  
- Update your OS.  
- Reinstall OpenClaw.  
- Ensure your device meets the requirements listed earlier.  



---

## H1: When You Should Reinstall  
Reinstall only in these situations:  

- The interface is blank after multiple restarts.  
- The model packs failed to download.  
- Automation logs show corrupted entries.  
- WhatsApp or Telegram integrations fail repeatedly after valid setup.  

Reinstallation fixes configuration errors but will not fix firewall restrictions.  
If you operate inside a corporate PE or healthcare environment, IT policy may prevent connections.  
In those cases, reinstalling will change nothing.  



---

## H1: Final Recommendations  
OpenClaw is a powerful automation tool.  
Its installation is not complicated but requires discipline.  
Follow each step in order, test small tasks, and validate your integrations before deploying at scale.  

This approach mirrors the way mid-market M&A teams handle carve-out systems.  
Start small.  
Confirm stability.  
Scale only when the fundamentals are proven.  



---

## Book a strategic consultation`,"gdpr-and-ai-how-openclaw-handles-privacy":`Fördjupning for mid‑market operators who require clarity, control, and a realistic view of AI adoption in regulated environments



## Introduction

Mid‑market healthcare operators and carve out specialists are facing a new category of risk. AI agents create efficiency and visibility, but they also create exposure. The combination is unavoidable. It forces management teams to confront the operational reality of GDPR at a time when digital infrastructure in the mid‑market is often fragmented and held together by years of compromises.

This article examines how OpenClaw approaches privacy and GDPR compliance in AI deployments. It is written for operators and investors who are already dealing with legacy data, incomplete documentation, and uneven system ownership. The focus is practical. No hype. No romanticized turnarounds.

The objective is simple. To demonstrate how an integritet AI‑agent can operate inside the GDPR boundaries without slowing execution. To show how OpenClaw GDPR structures reduce risk during carve outs, consolidations, and clinical operations. And to give healthcare operators in Sweden and across Europe a path to säker data AI Sverige without building a new IT department from scratch.



## Understanding the Intersection of GDPR and Operational AI

AI introduces a new class of data flow. It is not just storage, not just processing, not just analytics. It is continuous transformation. GDPR is not built to ban transformation. It is built to control ownership, access, retention, and accountability.

For mid‑market healthcare companies, this creates pressure on three fronts.



### 1. Data Scope  
AI systems need structured input. Most healthcare companies do not have it. The result is a chaotic mix of EMR exports, SFTP drops, private Excel sheets, and archived operational data. GDPR does not care how messy the data is. It cares about lawful basis and minimization. Operators must demonstrate that their AI usage is specific, defensible, and proportionate.



### 2. Data Residency  
Healthcare carve outs often involve systems that were never designed for regional separation. When OpenClaw enters an environment like this, the priority is to map residency risks before any agent is activated. Data cannot drift outside its legal boundary. AI cannot be trained on gray‑zone exports created for convenience.



### 3. Accountability  
AI agents create actions. Those actions must be attributable. GDPR requires a clear responsible party. Many tool vendors avoid responsibility by claiming they only provide infrastructure. Operators are left exposed. OpenClaw handles this differently. Attribution is explicit. Responsibility is documented.



## OpenClaw’s GDPR Framework

OpenClaw GDPR methodology is designed for operators who cannot afford long programs or theoretical exercises. It focuses on creating control quickly, then tightening governance in cycles. The structure is battle tested in environments where timing matters more than aesthetics.



### Phase 1: Data Containment  
Every deployment begins with the same question. Where can the data go. If the answer is unclear, nothing else proceeds.

OpenClaw isolates all processing inside a controlled environment. Data never leaves the region. The system uses containerized execution and locked routing. Agents cannot initiate outbound transfers unless explicitly whitelisted by the customer. No exceptions.

This protects operators during:

- Carve outs where system separation is still incomplete  
- Acquisitions where inherited infrastructure is undocumented  
- Clinical operations where data sensitivity is absolute

Containment is the foundation. Without it, compliance becomes speculation.



### Phase 2: Minimal Exposure Modeling  
GDPR minimization sounds academic. In practice it is a brutal filter. It forces teams to ask which data the AI truly needs. Most organizations over collect. They think AI needs everything. It rarely does.

OpenClaw runs a minimal exposure model. For every agent workflow, the system identifies the smallest sufficient data set. Anything beyond that is excluded. This reduces privacy exposure and simplifies audits. It also shortens the time required to reach compliant operations.



### Phase 3: Purpose Boundaries  
AI drift happens when agents are allowed to evolve tasks without oversight. It is common in general‑purpose AI platforms. It is unacceptable in healthcare or acquisitions.

OpenClaw binds every workflow to a declared purpose. The system tracks how each dataset is used. If an agent tries to access or apply data outside its purpose, the action is blocked and logged. This creates a verifiable chain of compliance during diligence, integration, and daily operations.



### Phase 4: Full Attribution and Human Control  
GDPR requires accountability. Healthcare operators require traceability. Investors require auditability. These needs are aligned.

OpenClaw assigns a signature to every agent action. Even autonomous executions carry a clear origin. Nothing is anonymous. Nothing is buried in logs. When a regulator, buyer, or internal auditor asks who triggered an action, the answer exists.

Human override is always available. Not as a marketing phrase but as a technical requirement. Operators maintain the last decision.



### Phase 5: Lifecycle Management  
Data retention is often mishandled during carve outs. Old systems get copied for safety. Those copies get archived indefinitely. Over time, they become a GDPR liability.

OpenClaw integrates retention policies directly into its pipeline. When data reaches its retention limit, it is purged automatically inside the isolated environment. No orphaned archives. No decade‑old SFTP dumps. No unmanaged shadow copies.



## How OpenClaw Addresses Common GDPR Risks in Healthcare and M&A

Most GDPR problems in AI deployments follow predictable patterns. OpenClaw’s architecture addresses them directly.



### Unstructured Legacy Data  
Healthcare operators often inherit unstructured files that contain personal data in unpredictable forms. OpenClaw uses a privacy‑preserving parser designed to extract only what the agent requires. Everything else is dropped. Sensitive fields can be masked, tokenized, or excluded entirely.



### Cross Border Drift  
Carve outs involving Nordic and continental entities complicate residency. Some tools route traffic to global inference infrastructure. OpenClaw never does this. Residency is guaranteed. Processing remains where the organization needs it, not where cloud economics are cheaper.



### Supplier Blind Spots  
Vendors often introduce secondary processors without disclosure. This breaks GDPR. Mid‑market operators usually discover this too late, often during diligence.

OpenClaw maintains a static list of processors and provides full visibility. No hidden compute. No surprise dependencies.



### Inference as Processing  
Some organizations assume that model inference is exempt from GDPR requirements. It is not. If personal data enters the model, inference is processing.

OpenClaw treats inference with the same governance as data transformation. Operators stay compliant because the system assumes the strictest interpretation instead of hoping for regulator leniency.



### Audit Pressure During Transactions  
Buyers now request evidence of AI governance. Not promises. Not policies. Evidence.

OpenClaw produces deterministic logs. They can be delivered during diligence to demonstrate that AI agents follow privacy boundaries. This supports valuation stability and reduces conditions precedent tied to system remediation.



## Operational Impact for Healthcare Operators

A privacy compliant AI agent is not valuable if it slows clinical or administrative workflows. OpenClaw is engineered to operate under real conditions. Short staffing. Fragmented systems. Consolidation pressure.

The system delivers operational impact without compromising privacy.



### Practical Use Cases

- Admission flow optimization using minimized nonclinical data  
- Scheduling analysis with tokenized personnel information  
- Supply chain forecasting based on anonymized demand patterns  
- Policy‑driven document drafting without exposing patient identifiers  
- Diligence preparation in healthcare M&A using masked financial and operational data

Each use case follows the same privacy perimeter. No uncontrolled data transfer. No uncontrolled learning. No uncontrolled storage.



## What Operators Should Expect When Deploying AI Under GDPR

GDPR is strict. It is also predictable. Operators who understand what regulators care about can deploy AI without slowing their business.

Expect the following requirements.



### 1. Clear Purpose and Documentation  
Regulators expect purpose specificity. OpenClaw provides structured templates so operators can demonstrate lawful basis without legal reinvention.



### 2. Technical Controls  
Policy is meaningless without enforcement. OpenClaw embeds controls at the system level. Purpose limitation, data minimization, and residency rules are not advisory. They are enforced.



### 3. Traceability  
If it cannot be tracked, it cannot be defended. OpenClaw’s attribution logging creates a defensible audit trail for internal and external reviews.



### 4. Rapid Corrective Action  
GDPR violations escalate quickly. OpenClaw enables immediate rollback of workflows or datasets if any threat is detected. Operators retain full control.



## Why This Matters for the Mid‑Market

Large healthcare systems can afford internal data protection units. Small clinics operate on simpler systems. The mid‑market sits in between. Too complex for manual compliance. Too resource constrained for heavy governance. This is where most GDPR failures occur.

This is also where investment risk rises. Buyers cannot accept unknown exposure. Post‑closing surprises reduce EBITDA, increase capex, and delay integration.

OpenClaw GDPR methodology reduces this risk by creating a stable privacy perimeter around AI operations. It allows healthcare operators and M&A teams to use AI without inheriting new liabilities.



## The State of Säker Data AI Sverige

Sweden moves faster than most European markets in AI adoption. Yet the regulatory pressure is equally strong. Healthcare operators must show responsible implementation or risk scrutiny.

OpenClaw supports Swedish organizations with region locked processing, localized compliance support, and workflows adapted to Scandinavian data models. This ensures that säker data AI Sverige is not a slogan. It is an infrastructure reality.



## Conclusion

AI is no longer optional. GDPR is not negotiable. For mid‑market healthcare operators and M&A teams, the challenge is to integrate AI without creating new exposure. OpenClaw delivers a structured, enforceable, and regionally compliant platform for AI agents that respects integritet AI‑agent boundaries and meets OpenClaw GDPR standards.

The approach is pragmatic. It is engineered for operational environments where speed matters, where privacy breaches cannot be tolerated, and where carve outs demand strict data control.

If your organization is evaluating AI adoption and requires a compliant, defensible foundation, the next step is a conversation.

Book a strategic consultation`,"practical-guide-to-automating-your-workflow-with-ai":`
Automating a workflow is rarely glamorous.  
It is not a magical transformation.  
It is a structural shift that demands clarity, disciplined execution, and a willingness to challenge legacy assumptions.  

In mid‑market M&A and healthcare carve‑outs, automation is not a nice‑to‑have.  
It is the only viable way to handle complex processes, fragmented data environments, and transition timelines that move faster than most teams prefer.  

This guide breaks down how to automate your workflow using AI, how to build an AI agent that actually delivers measurable value, and how to use automation to efficiently streamline processes across operational teams.  

The tone here is sober, pragmatic, and grounded in real‑world constraints.  



## Why Automation Matters in Mid‑Market M&A and Healthcare Carve‑Outs

Automation is not about replacing people.  
It is about removing friction in environments where time and information are limited.  

Mid‑market M&A deals operate inside compressed diligence windows.  
Healthcare carve‑outs are filled with siloed systems, regulatory hurdles, and cross‑functional workflows that complicate integration.  

Automation solves three recurring problems:

  
• Slow manual processes that drain bandwidth.  

  
• Fragmented data spread across financial systems, EMRs, procurement stacks, or legacy databases.  

  
• Teams that are competent but overloaded by repeated low‑value tasks.  


When you automate a workflow with AI, you restructure how work gets done.  
The goal is not a perfect digital transformation.  
The goal is operational stability and timely execution.  



## Understanding What It Means to Automate Your Workflow with AI

The phrase “automatisera arbetsflöde AI” signals more than tooling.  
It includes intelligent decision engines, orchestrated processes, and adaptive task routing.  

AI‑driven workflow automation usually falls into three categories:

  
### Process Automation

This is the mechanical layer.  
It moves data, triggers actions, and eliminates repetitive steps.  
In carve‑outs, this might mean automating vendor onboarding or reporting handoffs.  

  
### Intelligence Layer

Here you use models to classify information, detect patterns, predict outcomes, or summarize large sets of data.  
For M&A: financial statement normalization, customer cohort analysis, or risk flagging.  

For healthcare: coding validation, claims analysis, referral tracking.  

  
### AI Agents

When you build an AI agent, you are creating a semi‑autonomous worker that can take actions, escalate when needed, and learn from feedback.  
This is where automation moves beyond macros and scripts.  

An AI agent is not a chatbot.  
It is a rules‑driven, context‑aware operator that fits inside an existing workflow.  



## Mapping a Workflow Before You Automate It

Many automation initiatives fail because teams automate the wrong thing.  
Or worse, they automate a broken workflow.  

Take the time to map the current state.  

  
### Identify the High‑Friction Steps

Look for:  

  
• Repeated handoffs.  

  
• Manual data entry.  

  
• Slow approval paths.  

  
• Steps that depend heavily on tacit knowledge.  


You want areas where automation yields immediate and durable value.  

  
### Define the Desired Output

You cannot automate what you cannot define.  
Every workflow ends in a deliverable, a decision, or a handoff.  
Name it explicitly.  

  
### Assess Data Readiness

AI automation cannot fix bad data.  
It can only hide the problem until it resurfaces at a worse moment.  

Evaluate:  

  
• Data quality.  

  
• Access controls.  

  
• Integration requirements.  


Only after that can you select the right AI tools.  



## Building an AI Agent that Works

Teams often assume an AI agent will behave like an employee.  
That is not how these systems operate.  

Instead, treat the agent like a specialized machine.  
It needs precise instructions, boundaries, and structured inputs.  

  
### Step 1: Define the Agent’s Core Responsibility

Limit its scope.  
A narrow, well‑defined agent performs better than an overly general one.  

Examples:  

  
• A diligence document classifier.  

  
• A claims review assistant.  

  
• A financial data normalizer.  


Start with one.  
Expand later.  

  
### Step 2: Establish Rules and Constraints

AI agents perform best with strong guardrails.  
Define what the agent can do, when it should stop, and when it must escalate.  

Real‑world carve‑out environments rely on clear boundaries.  
Replicate this in the AI layer.  

  
### Step 3: Design the Interaction Model

This includes:  

  
• What inputs the agent receives.  

  
• How it processes the information.  

  
• What output format it returns.  


Make interactions deterministic where possible.  
Ambiguity reduces reliability.  

  
### Step 4: Integrate the Agent into the Workflow

An AI agent without integration is an isolated tool.  
Tie it into scheduling systems, document management, or CRM environments.  

The value is not in the model.  
The value is in operational performance.  



## Using AI to Streamline Complex Processes

The phrase “effektivisera processer” is frequently misused.  
Efficiency does not mean fewer people.  
It means removing unnecessary variability.  

Here are the primary ways AI achieves that.

  
### Intelligent Prioritization

AI can determine which tasks must be handled first, based on risk profiles or financial impact.  
This is essential in M&A workflows, where timelines are unforgiving.  

  
### Automated Quality Control

AI audits data or documents as they pass through the workflow.  
This reduces rework and prevents errors from compounding downstream.  

  
### Dynamic Routing

Instead of linear workflows, AI routes tasks to the right person or system based on context.  
This is critical in healthcare settings with regulated processes.  

  
### Real‑Time Monitoring

AI can observe processes continuously and surface deviations early.  
This creates operational stability without adding management overhead.  



## Where Automation Delivers the Highest ROI

Not all workflows deserve automation.  
Focus on areas with measurable financial or operational impact.

  
### M&A Use Cases

• Data ingestion and normalization.  

  
• Pipeline reporting and status tracking.  

  
• Compliance documentation.  

  
• Portfolio company performance monitoring.  

  
• Diligence request management.  


These processes are predictable, frequent, and sensitive to timing.  

  
### Healthcare Carve‑Out Use Cases

• Claims processing and validation.  

  
• Coding workflows.  

  
• Regulatory reporting.  

  
• Vendor and contract management.  


These environments have rigid rules that pair well with structured automation.  



## Common Failure Points and How to Avoid Them

Automation fails when teams take a technology‑first approach.  
Reverse that thinking.  

Start with the workflow.  

  
### Over‑Automation

Some steps require human oversight.  
Removing them introduces risk.  
Map where human judgment is structurally necessary.  

  
### Lack of Change Management

People need time to adjust.  
Introduce automation incrementally.  

  
### Incomplete Integration

Siloed automation creates shadow systems.  
Make sure the automation layer sits directly on top of the real workflow.  

  
### No Measurement Framework

Define KPIs before you deploy.  
Use quantitative indicators like cycle time, handoff count, or error rate.  

Without metrics, automation success becomes a matter of perception.  



## Designing an Automation Roadmap

A roadmap prevents scope creep and clarifies ownership.

  
### Phase 1: Assessment

Document processes.  
Identify constraints.  
Validate data readiness.  

  
### Phase 2: Prototype

Build a lightweight AI agent for one workflow.  
Establish KPIs.  
Run controlled testing.  

  
### Phase 3: Deployment

Integrate into live systems.  
Monitor adoption.  
Set escalation paths.  

  
### Phase 4: Expansion

Once the first agent stabilizes, extend the automation footprint.  
Do not accelerate until the first deployment proves reliable.  



## How Leaders Should Think About AI Automation

Executives in mid‑market M&A and healthcare carve‑outs must approach automation as operational infrastructure.  

This is not experimental technology.  
It is an execution tool.  

Leadership should focus on three areas:

  
• Defining the business outcomes.  

  
• Assigning responsible owners.  

  
• Ensuring budgets prioritize long‑term stability, not quick wins.  


Effective automation is not disruptive.  
It is quiet.  
It is predictable.  



## The Pathmaker Approach to Workflow Automation

Pathmaker emphasizes practicality over hype.  
We operate inside complex environments where reliability matters more than novelty.  

Our method is built around four principles.

  
### Principle 1: Clear Business Outcomes

Every automation initiative must support a measurable business goal.  

  
### Principle 2: Operational Realism

We design automation that respects real constraints, including timelines, staffing, and data quality.  

  
### Principle 3: Modular AI Agents

We build agents that perform narrow, repeatable tasks.  
This creates better accuracy and easier integration.  

  
### Principle 4: Controlled Scaling

We expand only when the system demonstrates stability in production.  
This prevents downstream failures.  



## The Long‑Term Advantage of AI Workflow Automation

Automating a workflow is not about short‑term efficiency.  
It is about building operational muscle that compounds over time.  

Organizations that master AI automation benefit from:

  
• Faster execution in high‑pressure environments.  

  
• Better data integrity.  

  
• Reduced dependency on tribal knowledge.  

  
• Improved scalability across deal cycles or healthcare transitions.  

  
• More predictable outcomes during operational stress.  


The strategic advantage is consistency.  
In carve‑outs and M&A, consistency wins more often than creativity.  


`,"ai-for-the-construction-sector-and-the-discipline-of-effective-planning":`


The construction sector has always been capital intensive, schedule sensitive, and unforgiving toward inefficiency. When margins compress, delays cascade, and subcontractor networks stretch across multiple jurisdictions, even seasoned operators know that manual coordination is no longer enough. AI in the construction sector, often referred to in Swedish as AI byggbranschen, is shifting from experiment to expectation. For players navigating mid‑market consolidation, healthcare carve‑outs with facility upgrades, or large multi‑phase urban developments, the operational edge now comes from data driven planning and building automation in Sweden, not intuition.

  

AI is not a silver bullet. It is a toolset that, when applied with discipline, reduces uncertainty and gives leadership the situational awareness needed to make the next best decision. The firms that integrate AI driven planning early tend to outperform peers in project predictability, cost control, and compliance. Those who delay often find themselves negotiating from a position of weakness during M&A, especially in asset heavy portfolios where technical due diligence exposes inefficiencies that could have been corrected years earlier.

  

Below is a pragmatic view of how AI is reshaping strategic planning and execution in the construction sector, written for operators who prefer results over rhetoric.



## Why AI is Becoming a Baseline Competency in Construction



Construction remains one of the industries with the lowest digital maturity, yet it faces some of the highest expectations around predictability and regulatory alignment. This gap has created an environment where even incremental advances in digital workflow produce disproportionate gains. AI raises that ceiling further by enabling decision quality that human teams alone cannot consistently match.

  

Several structural forces are accelerating adoption.

  

* Projects are more complex, with tighter environmental and permitting requirements.

* Labor shortages are chronic, especially in specialized trades.

* Margins are under pressure due to material volatility and financing costs.

* Clients expect transparency around timelines, deviations, and risk exposure.

  

When mid‑market construction firms enter M&A processes, whether as buyers or sellers, these fundamentals are scrutinized. Operators with robust AI driven planning systems present cleaner data packages, defensible forecasts, and fewer operational blind spots. Those without them often face price adjustments or extended due diligence cycles.

  

AI does not eliminate construction risk. It clarifies it. That distinction matters.



## The Real Meaning of Effective Planning with AI



Effective planning AI is not about automating Gantt charts or replacing project managers. It is about building a disciplined operating model that leverages machine intelligence to surface issues before they escalate.

  

A practical framework includes three layers.

  

### Operational Awareness



This is the foundation. AI systems synthesize site data, progress reports, sensor readings, and contractor updates. Instead of fragmented information, leadership gets a shared operational truth.

  

This reduces one of the industry’s most persistent challenges: lagging indicators. If the first time leadership learns of a delay is during the weekly coordination meeting, the delay has already compounded. AI shortens the detection window, which shortens the correction window.



### Scenario Simulation



Traditional planning assumes linearity. AI driven planning assumes variability. What matters is not the perfect schedule but the system’s ability to detect deviation and reforecast realistically.

  

Scenario engines model material availability, workforce constraints, weather patterns, regulatory checkpoints, and subcontractor reliability. Instead of static plans, teams work from adaptive playbooks. This leads to steadier decision quality under real conditions.



### Continuous Re‑prioritization



In construction, priorities shift. AI helps leadership decide which shifts matter and which are noise.

  

By ranking risks based on probability and impact, AI systems allow teams to focus on what measurably moves the project. This is where AI delivers its strongest ROI. Not in predicting everything, but in filtering everything.



## Where AI Creates Measurable Value in the Construction Sector



Below are the domains where AI is already generating defensible gains for operators across Sweden and Northern Europe, particularly those preparing for M&A or managing multi‑site portfolios.



### 1. Scheduling and Sequence Optimization



AI evaluates dependencies more rigorously than traditional planning tools. It identifies sequence conflicts early, reducing the domino effect that drives many cost overruns.

  

Benefits include:

* Shorter cycle times.

* Clearer subcontractor coordination.

* More accurate forecasts for stakeholders and investors.

  

For asset managers preparing carve‑outs that involve facility upgrades or healthcare real‑estate enhancements, this capability directly influences valuation.



### 2. Workforce Allocation



Labor constraints are now a consistent structural challenge. AI models help leaders allocate crews where they produce the greatest operational leverage.

  

This leads to:

* Fewer idle hours.

* Reduced overtime volatility.

* Higher reliability in critical path tasks.



### 3. Material Flow and Procurement



AI can predict material demand with fewer errors than manual systems. It accounts for waste, rework likelihood, delivery lead times, and supplier reliability.

  

For Swedish operators dealing with cross‑border procurement into the Nordic region, this mitigates the risk of customs delays and supplier inconsistency.



### 4. Site Monitoring and Compliance



Building automation in Sweden has advanced rapidly. AI powered drones, sensors, and cameras feed data into monitoring systems that flag safety hazards, compliance deviations, and productivity gaps.

  

Operators benefit from:

* Documented compliance trails.

* Reduced insurance exposure.

* Objective productivity metrics.



### 5. Environmental and Energy Modelling



Sustainability requirements continue to tighten, particularly in EU regulated sectors. AI supports lifecycle analysis, energy patterns, and environmental compliance modeling for both new builds and renovations.

  

For healthcare carve‑outs, where operational continuity is critical, AI simulation helps reduce energy disruptions and ensures compliance with strict safety standards.



## How AI Strengthens the M&A Narrative for Mid‑Market Operators



Sophisticated buyers no longer view construction firms as pure execution businesses. They evaluate digital maturity and planning discipline as core value drivers. AI enabled planning strengthens the M&A profile in several ways.



### Cleaner Data Rooms



Buyers want reliable performance histories, risk registers, cost maps, and deviation logs. AI systems generate structured data automatically, reducing manual cleanup during due diligence.



### Higher Operational Predictability



Predictable operations reduce perceived volatility. Buyers pay premiums for firms with stable planning systems and transparent forecasting.



### Stronger Integration Readiness



Firms with AI supported workflows integrate faster into portfolios. Whether the buyer is a Nordic construction group or a healthcare REIT handling facility upgrades, AI reduces the friction of merging reporting, planning, and compliance systems.



### Lower Hidden Liabilities



AI surfaces latent project risks, subcontractor exposure, and contract inconsistencies. Sellers who can identify and neutralize these issues before entering the market negotiate from a stronger position.



## The Strategic Role of AI in Healthcare Related Construction Carve‑Outs



Healthcare carve‑outs introduce layers of operational complexity that general construction does not. Medical facilities operate under strict regulations, require uninterrupted services, and must maintain safety standards even during renovation.

  

AI supports these high stakes environments in several ways.



### Occupied Renovation Modelling



AI evaluates noise impact, airflow, contamination risk, and safe movement patterns for staff and patients. This allows teams to plan work in occupied wings without compromising care delivery.



### Coordination with Clinical Schedules



AI planning tools integrate with hospital scheduling systems. This prevents work from interrupting critical care windows and reduces risk exposure.



### Regulatory Alignment



Healthcare construction requires precise documentation. AI systems generate compliance logs automatically and map regulatory requirements to each phase of work.



### Emergency Response Planning



AI models simulate emergency scenarios during construction, ensuring evacuation routes and safety protocols remain intact throughout renovation phases.



## Avoiding the Common AI Adoption Mistakes in Construction



Many construction firms attempt to adopt AI and fail. The reasons are predictable.



### Over‑centralization



Leadership tries to deploy AI as a single monolithic system. In practice, AI adoption succeeds when broken into modular components aligned with existing workflows.



### Insufficient Data Hygiene



Poor data yields poor models. Firms often underestimate the importance of consistent data capture from day one.



### Overreliance on Automation



AI is not a substitute for field intelligence. The strongest systems combine human expertise with machine analysis, not one or the other.



### Lack of Operational Ownership



If site teams and project leads do not own the tools, AI will produce insights that no one acts on. Change management matters more than the software itself.



## Building a Realistic AI Roadmap for Construction Firms



Successful operators follow a sequence rather than attempting full transformation in one step.



### Step 1  
Digitize core workflows. Ensure consistent data capture from scheduling, procurement, and site monitoring.



### Step 2  
Deploy AI modules that support decision making rather than replace processes. Typical starting points include scheduling optimization and risk forecasting.



### Step 3  
Build cross functional operating routines where AI outputs are reviewed in conjunction with human judgment.



### Step 4  
Integrate additional modules like procurement forecasting, environmental modeling, and automated reporting.



### Step 5  
Scale across projects. Use insights from early deployments to refine organization wide standards.



This approach protects operational continuity while generating tangible wins at each stage.



## Why Swedish Operators Are Well Positioned for AI Growth



Sweden’s construction sector is uniquely suited for rapid AI adoption. The regulatory environment encourages transparency. The labor market rewards productivity. And the maturity of building automation in Sweden provides a strong foundation for AI layers on top of existing systems.

  

Swedish firms are already early adopters in areas such as:

* Automated site monitoring.

* Prefab optimization.

* Environmental compliance modelling.

* Multi site portfolio planning.

  

This creates an environment where AI shifts from competitive advantage to operational necessity.



## The Competitive Future of AI in the Construction Sector



Over the next five years, AI will not eliminate construction jobs. It will eliminate operational opacity. Firms that rely on manual coordination will face higher costs, lower predictability, and reduced M&A leverage.

  

Those who integrate AI into planning, forecasting, and monitoring will operate with greater discipline and stronger negotiating positions.

  

The divide will not be philosophical. It will be economic. And the market will reward whichever side demonstrates measurable operational resilience.



## Pathmaker’s Role



Our work sits at the intersection of operational intelligence and strategic execution. We assist construction and healthcare infrastructure firms in building AI frameworks that materially improve planning discipline and prepare organizations for growth, M&A, or complex carve‑outs.

  

For leadership teams seeking clarity rather than complexity, AI is no longer an experiment. It is an operational multiplier.



Book a strategic consultation`,"can-an-ai-agent-actually-replace-an-employee-a-candid-analysis-for-swedish-business-owners":`
  

Running a Swedish company in 2026 means facing pressure from every direction.  

Costs rise.  

Talent is scarce.  

Margins stay thin.  

  

In this environment, many owners are asking a blunt question:  

Can an AI agent actually replace an employee, or is it just industry noise?  

  

Reddit threads on r/smallbusiness, r/Entrepreneur and r/automation are filled with discussions from founders who tested tools like OpenClaw, custom GPT agents and workflow orchestration platforms.  

Some found significant ROI.  

Others lost weeks of time and ended up deleting their experiments.  

  

This article gives an honest, non romanticized, mid market focused analysis of what AI agents can and cannot do inside a real company.  

It is written for operators who care about predictable output, not tech hype.  

  

## The Short Answer  

AI can replace specific functions with high structure and high repetition.  

AI cannot replace broad accountability or ambiguous problem solving.  

For many Swedish SMEs, the right question is not if AI can replace an employee.  
The real question is which tasks can be automated without increasing operational risk.  

  


Most owners are not trying to fire half their staff.  

They want:  

- Lower cost per task  
- Fewer dropped balls  
- Faster customer response  
- Cleaner data  
- Predictable workflows  

  

Many also want a buffer against the difficulty of hiring.  

In healthcare carve outs and mid market M&A production environments, staffing gaps are a daily operational threat.  

If an AI agent can cover 20 percent of work reliably, that stability has real economic value.  

  


AI agents are strong where the rules are clear and the context is stable.  

These are the categories where automation actually works in real Swedish companies.  

  

## Highly Structured Repetitive Work  

Examples:  

- Categorizing inbound emails  
- Drafting first versions of customer replies  
- Updating CRM entries  
- Extracting data from PDFs  
- Creating summaries of meetings  
- Monitoring dashboards and alerting when numbers shift  

  

These tasks map well to AI because the variation is limited.  

An AI agent can learn the pattern once and repeat it thousands of times with the same accuracy.  

  

## Workflows That Follow Set Checklists  

Healthcare carve out environments use strict protocols.  

Finance and M&A processes rely on step sequences.  

AI agents handle these checklists well, as long as the steps are explicit and the system boundaries are clear.  

  

## Tasks With Large Volumes but Low Decision Weight  

If a mistake has minor consequences, automation makes sense.  

Examples:  

- Tagging documents  
- Drafting internal memos  
- Organizing notes  
- Basic lead qualification  

  

Companies often overestimate the impact of AI errors.  
In low risk tasks, mistakes are manageable.  

  

## Data Enrichment and Research  

AI agents perform consistent desk research.  

They gather information, extract key facts and format it cleanly.  

For Swedish companies operating in niche industrial or clinical markets, this ability saves hours of manual work.  

  


Reddit is filled with threads from entrepreneurs who tried AI automation and failed.  

Their stories are consistent.  

  

## AI Cannot Manage Ambiguous Responsibility  

Employees solve gray zone problems every day.  

They interpret social nuance.  

They manage relationships.  

They catch issues that were never written down.  

  

AI agents cannot reliably navigate this landscape.  

They need guide rails.  

Without structure they generate confident but incorrect output.  

  

## AI Cannot Act as a Standalone Operator  

Owners who attempt full automation of a department without redesigning processes usually experience:  

- System drift  
- Compounding small errors  
- Unexpected output that no one notices for weeks  
- Models that degrade quietly  

  

AI agents must operate inside a controlled workflow with human oversight.  

  

## AI Cannot Replace Contextual Judgement  

If a decision depends on years of tacit knowledge, domain nuance or market experience, AI cannot substitute it.  

Healthcare carve outs, for example, rely on sensitive regulatory interpretations and clinical judgement.  

These are not automatable.  

  

## AI Cannot Guarantee Predictability  

Unlike employees, AI output sometimes varies with model updates, prompt drift or data shifts.  

In environments with tight compliance or contractual obligations, this variability introduces operational risk.  

  


This is where most Reddit debates become polarized.  

Some claim AI is ten times cheaper.  

Others claim it costs more once implementation time is included.  

  

Reality sits in the middle.  

  

## Typical Swedish SME Employee Costs  

For mid market operational roles in Sweden, a realistic fully loaded cost per employee often includes:  

- Salary  
- Social fees  
- Pension  
- Insurance  
- Vacation load  
- Onboarding and training  

  

For a standard coordinator, analyst or admin role, the annual cost often lands between:  

480 000 SEK and 720 000 SEK per year.  

  

## Typical AI Agent Costs  

Custom AI agents with workflow automation usually include:  

- Model usage  
- Integration orchestration  
- Monitoring costs  
- Occasional human review  

  

For 2026 models, a realistic usage pattern for a small to medium workflow is often:  

90 000 SEK to 180 000 SEK per year.  

  

This is significantly lower than a full time employee, but only when the tasks are stable and well structured.  

  

## When AI Is Worth It  

AI becomes cost effective when:  

- The workflow is repetitive  
- Volume is high  
- Quality requirements are predictable  
- Edge cases are infrequent  

  

In these environments, AI can replace 30 to 60 percent of a full time equivalent at a fraction of the cost.  

  

## When AI Is Not Worth It  

AI becomes a cost sink when:  

- Processes are unclear  
- The company wants the AI to “figure things out”  
- No one maintains the prompts or logic  
- The output requires heavy supervision  

  

In these cases productivity drops and the workload shifts back to humans.  

  


Based on operational deployments, interviews and consistent Reddit case studies, these categories deliver the highest ROI.  

  

## Customer Support Triage  

AI handles:  

- First response  
- FAQ resolution  
- Routing to the right team  

  

It does not handle final decisions on complaints or refunds.  

  

## Sales Admin  

AI manages:  

- CRM updates  
- Lead classification  
- Data cleaning  

  

It does not manage real sales conversations.  

  

## Finance Prep Work  

AI organizes:  

- Invoice classification  
- Receipt extraction  
- Vendor data clean up  

  

It does not approve transactions or interpret accounting exceptions.  

  

## Internal Knowledge Management  

AI simplifies:  

- Document organization  
- Search  
- FAQ creation  

  

It does not maintain governance unless a human supervises.  

  


These mistakes show up in over half of failed AI experiments described on Reddit.  

  

## Mistake 1: Trying to Automate a Bad Process  

AI does not fix chaos.  

If the workflow is unclear, automation amplifies the disorder.  

  

## Mistake 2: Expecting AI to Replace Judgment  

AI works best with rules.  

If the task involves political sensitivity, relationships or legal nuance, AI should not lead.  

  

## Mistake 3: No One Owns the System  

AI agents drift without maintenance.  

A workflow owner must exist.  

  

## Mistake 4: Overconfidence After Small Successes  

Many companies see one good output and assume full automation is possible.  

Scaling from one task to one department requires redesign, not copy paste.  

  

## Mistake 5: Underestimating Edge Cases  

Ten percent of cases often require ninety percent of the judgment.  

  

AI breaks on these unless they are explicitly designed for.  

  


Operators with real wins follow consistent principles.  

  

## They Reduce Scope Before Expanding It  

Start with one workflow.  

Not a department.  

  

## They Design Processes That AI Can Actually Follow  

Clarity is essential.  

  

## They Maintain Human Control Points  

Even a simple manual approval step prevents silent drift.  

  

## They Build Quarterly Review Cycles  

Models evolve.  

Prompts need updating.  

  

## They Focus on Cost Per Task, Not Hours Saved  

This creates clearer ROI and reduces hype driven expectations.  

  


In some cases yes, absolutely.  

In most cases, partially.  

In many cases, not at all.  

  

A realistic expectation for a Swedish SME is that AI can replace:  

20 to 40 percent of a role without increasing risk.  

Up to 60 percent in highly structured environments.  

0 percent in ambiguity driven work.  

  

AI agents provide leverage, not a workforce substitute.  

  


Automate the predictable.  

Protect the judgment heavy.  

Design the system intentionally.  

  

Companies that do this gain measurable efficiency and lower operational cost.  

Companies that skip these steps usually end up with half working prototypes that no one trusts.  

  

If you want a candid evaluation of how AI could realistically fit into your workflows, not a hype driven promise, you can schedule a session below.  

  

Book a strategic consultation`,"roi-analysis-of-ai-agents-in-swedish-companies":`


The conversation around AI in Swedish mid market companies has shifted from speculation to hard financial scrutiny.

  

The period of exploratory pilots is ending.

  

Boards and owners now want measurable impact on EBITDA, clearer visibility on operational risk, and defensible valuations in future exits.

  

This is where a structured ROI analysis of AI agents becomes central, particularly in sectors under pressure, such as healthcare, industrial services, and fragmented B2B environments where processes are often inconsistent and margins are thin.

  

This article outlines a pragmatic framework for evaluating ROI in AI agent deployments in Sweden, with a tone shaped by mid market M and A realities and the dynamics of healthcare carve outs.

  

No romanticized turnarounds.

  

Just operational facts and the financial logic behind them.



## The Shift From Automation Hype to Capital Allocation Logic



Most Swedish companies have experimented with automation for years.

  

What is different now is the degree of autonomy, consistency, and scalability that AI agents offer.

  

An AI agent is no longer a point solution.

  

It is an operational unit that can execute end to end tasks with minimal supervision.

  

For owners and CFOs, the key question is no longer whether AI can do the work, but whether it should do the work, and under what financial model.

  

This is where a disciplined ROI AI agent analysis becomes essential.



## Understanding the Real Financial Levers



Many ROI models for AI are built on soft factors.

  

Time saved.

  

Productivity increased.

  

Happier employees.

  

These may matter, but they will not convince a buyer during due diligence or a private equity portfolio committee planning the next 24 months.

  

The ROI drivers that actually hold up in a transaction context are harder.

  

And they fall into three categories.



### 1. Direct cost reduction



This is the most defensible lever in ROI analysis.

  

AI agents often replace specific portions of labor in standardized processes, particularly in roles where the variance in task performance is low.

  

Examples in Swedish mid market companies include:

  
* invoice matching in industrial distribution  
* patient intake administration in healthcare carve outs  
* purchase order validation in light manufacturing  
* claims pre processing in insurance oriented service businesses  

Direct labor substitution is sensitive to Swedish labor agreements and regulatory oversight, especially in healthcare.

  

Nevertheless, cost reduction remains the clearest contributor to spara pengar AI and is typically the first lever accepted by both management and owners.



### 2. Reduction of operational drag



Operational drag is the hidden cost of slow or inconsistent processes.

  

In carve outs, this drag is amplified during transitions, since newly separated units often lack complete infrastructure or consistency.

  

AI agents reduce operational drag by enforcing standardization.

  

Lower variance means fewer exceptions.

  

Fewer exceptions mean lower cost to serve.

  

This category of ROI is harder to quantify but plays a meaningful role in valuation discussions.

  

Buyers pay for predictability, and AI agents offer it.



### 3. Revenue protection and capture



While cost reduction is the cleanest metric, revenue related impacts can be equally significant.

  

Better compliance reduces lost billing.

  

Faster throughput captures more volume.

  

More consistent customer responses reduce churn.

  

In healthcare carve outs, revenue leakage is common due to documentation gaps and inconsistent coding.

  

AI agents reduce leakage, which flows directly into EBITDA.

  

This is not theoretical. It is one of the most observed value creation patterns in the sector.



## Cost Side of the ROI Equation



ROI AI agent analysis only works if the cost side is equally rigorous.

  

There are five core cost categories that Swedish companies must consider.



### 1. Implementation cost



This includes configuration, process mapping, integration work, and project time from internal staff.

  

In healthcare carve outs, this cost is higher due to regulatory documentation and the need to interface with legacy EHR systems.



### 2. Subscription and usage fees



AI agents typically operate in a usage based model.

  

Companies must model volume patterns over time to avoid cost surprises.

  

Predictability is crucial for budgeting and for presenting stable margins to buyers.



### 3. Oversight and exception handling



AI agents reduce work, but they do not eliminate oversight.

  

Companies should model resource needs for exception management, audit trails, and data monitoring.

  

For regulated sectors such as healthcare, this cost is mandatory.



### 4. Change management



Every agent deployment creates a shift in roles.

  

Without structured change management, adoption drops and ROI collapses.

  

This cost is often underestimated, especially by first time adopters.



### 5. Security and compliance adjustments



Swedish companies, especially those handling personal data, must invest in privacy and access controls.

  

The cost of compliance is not optional in Sweden, particularly for healthcare or finance related operations.



## The Pragmatic ROI Calculation



To quantify ROI, a realistic model must avoid inflated assumptions.

  

A good model uses conservative baselines and verifies each lever through operational data, not theoretical multipliers.



A typical structure is:

  
* Baseline cost of the process  
* Direct reduction achievable through AI  
* Time to deployment  
* Oversight costs  
* Subscription or usage fees  
* Impact on error rate  
* Impact on throughput  
* Impact on cash collection and revenue leakage  

The target is simple.

  

Deliver a net improvement in EBITDA within 12 to 18 months.

  

Anything outside that window rarely survives scrutiny during a mid market deal.



## Sector Realities in Swedish Healthcare Carve Outs



Healthcare carve outs in Sweden have a specific pattern.

  

They are often carved from larger regional or municipal systems, or from diversified private health groups restructuring around core services.

  

These carve outs frequently inherit:

  
* fragmented documentation routines  
* inconsistent coding practices  
* manually intensive administrative tasks  
* old systems that are difficult to integrate  
* staff shortages that create operational bottlenecks  

In this environment, AI agents generate ROI primarily by stabilizing administrative throughput.

  

When patient documentation and coding become consistent, revenue leakage drops and EBITDA improves.

  

The buyer sees stability.

  

The seller captures value.

  

The staff experience less administrative pressure, which reduces churn.

  

AI does not romanticize the turnaround.

  

It simply stabilizes what needs to be stable.



## Mid Market M and A Perspective



Buyers in Swedish mid market deals are increasingly cautious.

  

They look for evidence that cost savings from AI are real, recurring, and measurable.

  

Unverified claims are heavily discounted during diligence.

  

A strong ROI analysis becomes a strategic asset during a sale process.

  

It supports:

  
* defensible EBITDA adjustments  
* higher valuation multiples  
* decreased perceived operational risk  
* smoother integration planning  

For private equity owners, a documented ROI AI agent framework is particularly valuable when preparing for an exit within 24 to 36 months.

  

It demonstrates process maturity, not experimentation.



## Building an AI Agent Portfolio Instead of One Off Deployments



Swedish companies often start with isolated AI use cases.

  

This is understandable but financially suboptimal.

  

AI agents generate the strongest ROI when deployed as a portfolio.

  

A portfolio reduces marginal deployment cost and spreads oversight resources across multiple agents.

  

It also creates compounding effects, since one agent’s output becomes another agent’s input.

  

This is where cost efficiency AI truly emerges.

  

For example:

  
* intake agent prepares structured data  
* processing agent validates and enriches it  
* documentation agent formats results for compliance  
* reporting agent updates dashboards  

This reduces human touchpoints, which reduces cost, delay, and error rates.

  

A portfolio based approach typically doubles ROI relative to isolated deployments.



## Practical Steps for Swedish Companies



A disciplined approach avoids wasted investment.

  

A practical sequence:

  
* Identify processes with high volume and low variance  
* Map direct and indirect costs of the current process  
* Quantify error related cost  
* Define measurable targets for cost reduction  
* Pilot with tightly scoped boundaries  
* Validate impact with real operational data  
* Scale horizontally across similar processes  
* Build an oversight model with minimal resource drag  

This approach aligns with how buyers evaluate operational maturity in the mid market.



## What Boards and Owners Should Expect in 2026 and Beyond



AI adoption will not slow.

  

But the winners will be the companies that treat AI as a financial instrument, not a novelty.

  

Expect the following patterns in Sweden:

  
* more scrutiny from auditors and regulators  
* clearer demand for explainability  
* higher expectations from buyers during diligence  
* rising pressure to demonstrate cost savings within 12 months  
* tighter integration with ERP and EHR platforms  
* consolidation of AI vendors  

Companies that adopt early with disciplined ROI frameworks will operate with leaner administrative loads and stronger margins.

  

Those that hesitate will find themselves competing against cost structures they cannot match.



## Conclusion



AI agents are no longer experimental.

  

They are a measurable lever for cost efficiency AI, operational stability, and value creation in Swedish mid market companies, especially in healthcare carve outs and operationally complex environments.

  

A disciplined ROI analysis is not optional.

  

It is the foundation for credible financial decision making and for defending valuation in future transactions.



Book a strategic consultation`,"5-tasks-an-ai-agent-can-already-take-over-for-you-today":`Pragmatic guidance for Swedish business owners who want results, not buzzwords

  
  
Running a Swedish mid‑market company in 2026 is a constant knife fight. Margins tighten. Regulatory pressure increases. Skilled labor is harder to find. And when you are looking at carve‑outs in healthcare or evaluating bolt‑on acquisitions, the last thing you have time for is administrative noise.

  
AI agents are no longer hype. They are operational tools that remove workload. They cut cycles in due diligence. They stabilize processes in healthcare units after a carve‑out. They let you scale without headcount creep.

  
This article breaks down five concrete areas where an AI agent, especially one built on OpenClaw’s architecture, can take over real work today. Not fluffy innovation talk. Actual reductions in workload for Swedish companies.

  
SEO keywords included: AI-agent arbetsuppgifter, automatisera arbete AI, OpenClaw användningsområden, AI för småföretag Sverige, spara tid med AI

  
  
---

Where Swedish mid‑market companies bleed time every week

  
  
Most CEOs assume email cannot be automated because context varies. That excuse died in 2025. Modern AI agents interpret business logic, intent, tone, and internal policy. They act as an assistant that understands who your counterparties are and what you typically accept or decline.

  
  
## How an AI agent handles email today  
- Reads all inbound emails  
- Prioritizes based on urgency and business impact  
- Drafts replies that match your voice  
- Flags compliance issues  
- Books meetings automatically when needed  
- Routes invoices, HR questions, or procurement queries to the right internal function

  
  
## Swedish business example: Healthcare carve‑out operator in Göteborg  
A mid-sized healthcare operator managing several carve‑outs struggled with chaotic communication during integration. Doctors emailed administrators. Administrators emailed clinic leads. Suppliers emailed whichever address they found.

  
An AI agent filtered more than 600 weekly emails. It routed medical queries to clinical leads, flagged procurement issues, and drafted standard replies for recurring supplier updates. Administrative load fell by 40 percent. Integration timelines improved.

  
  
## Swedish business example: M&A brokerage firm in Stockholm  
The firm used the AI agent to scan all inbound emails from sellers, buyers, accountants, and lawyers. It highlighted red flags in financial attachments, prioritized questions requiring partner review, and drafted responses for junior analysts. The partner team reduced non-critical email time by several hours per week.

  
  
## Why this matters  
Email is where Swedish companies quietly bleed labor hours. Automating the bulk of it is one of the fastest ways to spara tid med AI.

  
  
---

The most underrated AI-agent arbetsuppgift for real strategic leverage

  
  
Research is not simply copying info from Google. In M&A, healthcare operations, and mid-market growth environments, research is synthesis. It requires reading annual reports, interpreting laws, mapping competitor moves, and extracting signals from noise.

  
AI agents now perform this at a level comparable to a junior analyst with several years of experience.

  
  
## What AI agents can research effectively  
- Competitor mapping in Sweden, EU, and Nordics  
- Regulatory updates from IVO, Skatteverket, or Socialstyrelsen  
- Due diligence preparation for acquisitions  
- Supplier evaluations  
- Market sizing  
- Pricing comparisons  
- Clinical workflow benchmarking for healthcare carve-outs

  
  
## Swedish business example: Regional dental chain preparing for bolt-on acquisitions  
The chain needed pre-DD research for six potential clinics. Instead of assigning analysts, an AI agent built profiles for each clinic. It pulled public company data, employee structure, service mix, pricing differences, and risk indicators.

  
The chain completed the entire screening in 48 hours, something that previously required two weeks.

  
  
## Swedish business example: Logistics company in Malmö mapping competitor capacity  
The industry moves fast. Competitor capacity changes weekly. The AI agent scanned Swedish and Danish freight operators, extracted pricing updates, and created weekly summaries. Leadership made faster pricing decisions, avoiding underbidding by real data instead of gut feeling.

  
  
## Why this matters  
When used correctly, research automation shifts your team from hunting information to acting on it.

  
  
---

Still one of the most underestimated automation wins

  
  
Most entrepreneurs know scheduling is tedious. What they do not realize is that scheduling chaos compounds across the organization. Sales teams book calls. HR books interviews. Healthcare units manage shift swaps. And executives play calendar Tetris at midnight.

  
AI agents now manage scheduling end to end.

  
  
## What AI scheduling automation covers  
- Calendar management  
- Meeting booking with external stakeholders  
- Conflict resolution  
- Travel planning  
- Reminder flows  
- Recurring meeting optimization based on priorities

  
  
## Swedish business example: Clinical operations after a carve-out  
A private equity firm carved out several clinics from a large healthcare provider. Post-transaction chaos is common. Old systems disappear, and new systems are immature.

  
The AI agent managed shift swaps, booked administrative meetings, and coordinated onboarding schedules. Staff no longer chased each other across email and SMS. Leadership saw a 25 percent reduction in operational friction.

  
  
## Swedish business example: Mid-market engineering consultancy in Västerås  
The consultancy used the AI agent to coordinate meetings between project managers, clients, and subcontractors. Instead of 15 email threads, the AI agent negotiated times directly with all parties. Project managers regained several hours per week.

  
  
## Why this matters  
Scheduling seems small, but at scale it becomes a real operational drag. Automating it frees time without any organizational pushback.

  
  
---

The AI-agent arbetsuppgift with the fastest ROI

  
  
Customer service is where modern AI agents shine. Not the old chatbots. Not the FAQ parrots. These agents understand nuance, read PDFs, access CRM data, and produce accurate responses aligned with internal rules.

  
  
## What an AI agent can handle  
- First-line support  
- Order tracking  
- Technical troubleshooting  
- Subscription changes  
- Clinic or appointment questions  
- Invoice and payment queries  
- Complaint triage  
- Prioritization of urgent cases

  
  
## Swedish business example: Medical equipment distributor  
The company handled hundreds of service requests weekly. Their support team was stretched thin. The AI agent answered more than 70 percent of cases autonomously. It read manuals, recognized patterns, and escalated only true exceptions.

  
Customer satisfaction improved. Response time dropped from hours to minutes.

  
  
## Swedish business example: SaaS platform serving mid-market manufacturers  
Support tickets often included screenshots, unclear explanations, and mixed languages. The AI agent interpreted all of it. It responded in Swedish, English, or broken Swenglish. It updated CRM fields, logged bugs, and generated handover notes for the technical team.

  
The founders avoided hiring two additional support agents.

  
  
## Why this matters  
Customer service automation has immediate cost impact. It also reduces human fatigue, which lowers turnover in a historically high-burnout role.

  
  
---

One of the most painful tasks for Swedish companies, finally fixable

  
  
Reporting is mandatory. Finansinspektionen, Socialstyrelsen, owners, lenders, and internal management all demand accurate, timely reporting. But collecting data, cleaning it, structuring it, and presenting it eats far too many labor hours.

  
AI agents now automate the entire pipeline.

  
  
## What AI agents can generate  
- Weekly management reports  
- Financial summaries  
- Healthcare quality metrics  
- Compliance documentation  
- Customer service dashboards  
- Sales performance reviews  
- Operational risk analysis  
- Internal and board-ready materials

  
  
## Swedish business example: Private healthcare group managing regulatory metrics  
The group needed to submit recurring quality reports to regional authorities. Historically this required analysts who merged spreadsheets, extracted EMR data, and wrote summaries.

  
The AI agent connected to internal systems via API. It interpreted raw data, detected anomalies, and generated clean reports in the required format. Submission errors dropped to near zero.

  
  
## Swedish business example: Industrial services company with multiple P&Ls  
The CFO spent hours each month consolidating P&L data from separate business units. The AI agent handled extraction, reconciliation, and summary creation. The CFO focused on strategy instead of spreadsheet surgery.

  
  
## Why this matters  
Reporting automation is not about replacing finance. It is about removing the manual, repetitive work that prevents strategic decision-making.

  
  
---

AI agents are no longer R&D experiments. They are operational leverage. They remove the friction that slows integration after acquisitions. They create stability in healthcare carve-outs. They reduce overhead for mid-market operators that cannot scale their back office proportionally with growth.

  
  
If you want to spara tid med AI, focus on concrete workloads, not abstract transformation narratives.

  
  
Email management  
Research  
Scheduling  
Customer service  
Reporting  

  
These five areas can be automated today. Not next year. Today.

  
  
Companies using OpenClaw-based AI agents report the same pattern. Lower administrative load. Faster throughput. More predictable operations. And a leadership team with bandwidth to focus on real decisions.

  
  
---
`,"practical-steps-to-automate-customer-flows":`
Automating customer flows is not about chasing shiny tools.  
It is about building operational discipline that scales, especially in environments where margins, compliance, and deal timelines are non‑negotiable.

Healthcare carve‑outs, mid‑market integrations, and cross‑border acquisitions carry structural complexities.  
Automation reduces friction in these transitions, protects institutional knowledge, and stabilizes revenue during periods when leadership attention is spread thin.

This guide outlines a pragmatic approach to automation, grounded in what actually works.  
No romanticized turnarounds, only durable processes that can survive management changes, due diligence, and integration cycles.

Below is a structured method to automate customer flows using AI customer journey analytics, AI funnel optimization, and workflow automation principles.  
The objective is simple: automate customer flow components that create measurable stability and reduce dependency on manual decisions.



## Understanding the Real Purpose of Customer Flow Automation

Automation is not about velocity.  
It is about removing variability.

Mid‑market operators often underestimate how much inconsistency exists in their customer journey.  
Every handoff introduces risk.  
Every manual decision introduces delay.

AI customer journey models provide pattern recognition across thousands of interactions.  
They identify where customer flows degrade, where revenue leakage accumulates, and where human judgment becomes a bottleneck.

For healthcare carve‑outs, this becomes critical.  
Legacy systems are fragmented, patient communication procedures are uneven, and contract structures differ between regions.  
Automation creates structure long before integration teams arrive.



## H2: Start With a Clear Map of the Current State

No automation initiative should begin without a current‑state model.  
Teams often skip this because it feels slow.  
Skipping it guarantees rework.

A good map should include:

- Entry points: web, referral, sales outreach, partner channels  
- Decision nodes: qualification, compliance review, insurance alignment, sales stages  
- Communication sequences: follow‑ups, reminders, document requests  
- Drop‑off signals: time delays, unanswered messages, stalled files  

In the mid‑market, undocumented workflows are the norm.  
Many steps exist only in the heads of tenured staff.  
During divestitures this knowledge can disappear within weeks.

Capturing it early prevents structural losses later.



## H2: Identify the High‑Value Automations First

Not everything should be automated.  
Focus on the areas where automation reduces measurable business risk.

Common high‑value targets:

- Intake qualification, using AI customer journey pattern detection  
- Appointment or meeting scheduling  
- Document collection and verification  
- Recurring communication sequences  
- Status updates across distributed teams  
- Handoffs between sales, operations, and compliance  

These are high‑frequency tasks with predictable rules.  
Every unnecessary manual touch drains margin.  
In healthcare carve‑outs, it also creates audit exposure.

The goal is not to automate the most sophisticated tasks, it is to automate the most repeated ones.



## H2: Build an AI-Driven Funnel Analysis

AI funnel optimization is not about dashboards.  
It is about creating an early warning system for operational bottlenecks.

A well‑designed model should:

- Measure micro‑conversions instead of only top‑line funnel stages  
- Flag anomalies in handoff delays  
- Detect patterns in churn or abandonment  
- Quantify the value of each touchpoint  
- Predict where manual review will be required  

This is where AI customer journey analytics becomes structurally valuable.  
Instead of managing by anecdote, leadership manages by empirical velocity.



## H2: Layer Automation Only After Clarifying Ownership

Automation is not a replacement for responsibility.  
It is a tool that relies on ownership to function correctly.

Assign ownership at three levels:

- Process ownership: who defines the workflow  
- Data ownership: who maintains data integrity  
- Exception ownership: who handles edge cases when automation stops  

Many automation failures in mid‑market integrations happen because ownership is assumed instead of assigned.  
Especially in carve‑outs where former parent‑company systems no longer exist.



## H2: Standardize Before You Automate

A fragmented process cannot be streamlined with automation.  
Standardizing is boring work.  
It is also essential.

Focus standardization on:

- Intake forms  
- Customer segmentation criteria  
- Compliance checkpoints  
- Document naming and storage conventions  
- Messaging templates  

This removes noise from the system, which makes automation stable.  
Without this stage, every automation breaks within months.



## H2: Build Modular Automation Blocks

Automation should never be built as one large flow.  
It should be built as a series of modular pieces.  
This mirrors the modular design used in resilient M&A integrations.

Modules remain stable during staff turnover and system migrations.  
They are easier to audit and easier to update.

Typical modules:

- Lead capture  
- Qualification  
- Nurture sequences  
- Scheduling  
- Fulfilment workflow  
- Post‑service follow-up  
- Re‑engagement  

When one module changes, the others remain intact.  
This is how automation becomes durable rather than fragile.



## H2: Use AI Customer Journey Signals to Personalize Without Overcomplication

Personalization does not mean complexity.  
It means relevance.

Using AI customer journey signals, you can create simple, scalable decision rules:

- If response delay exceeds a threshold, trigger urgency messaging  
- If a customer interacts with certain content, adjust follow‑ups  
- If a compliance document is missing, notify operations directly  
- If churn risk increases, escalate to a human review  

This is practical personalization.  
It is based on observable behavior, not guesswork.



## H2: Integrate Compliance Into the Automation From Day One

Healthcare, finance, and regulated industries cannot treat compliance as an afterthought.  
Automation needs embedded checkpoints, not bolted‑on rules.

Examples:

- Automatic verification of required documents  
- Timestamped communication logs  
- Standardized disclosures  
- Retention of patient or client consent  
- Automated alerts when regulatory timelines are exceeded  

During M&A, regulatory missteps increase deal costs.  
Compliance‑aware automation prevents those exposures.



## H2: Build a Transition Layer for M&A or Carve-Out Environments

Customer flow automation must survive ownership changes.  
This is often ignored until it becomes expensive.

A transition layer stabilizes workflows during:

- Separation from legacy systems  
- Integration into new CRMs  
- Staff turnover  
- Contract transitions  
- New operating models  

This layer should include:

- Centralized communication sequences  
- Minimalistic API connections  
- A staging environment for new data  
- A clear routing matrix for handoffs  

This creates operational continuity during integration, which protects revenue.



## H2: Train Teams to Work With Automation, Not Around It

Teams often revert to manual workarounds because:

- They do not trust the system  
- They do not know how to override it  
- The automation does not reflect real workflows  

Address this with clear training:

- What the automation handles  
- When manual intervention is required  
- How exceptions are escalated  
- How to avoid duplicating work  

Automation is only effective when the team sees it as a tool rather than a constraint.



## H2: Track Long-Term Metrics, Not Only Fast Results

Short‑term metrics can hide systemic weaknesses.  
What matters in mid‑market and healthcare operations is durability.

Track:

- Conversion velocity  
- Abandonment trends  
- Capacity utilization  
- Cost per acquisition after automation  
- Time to compliance completion  
- Time to scheduling  
- Repeat engagement  

These metrics reveal operational friction.  
Automation should reduce that friction steadily over time.



## H2: Operational Pitfalls to Avoid

Avoid common failures:

- Automating a broken workflow  
- Adding too many variables  
- Building flows that only one member of the team understands  
- Relying on tools instead of process discipline  
- Allowing exceptions to become the rule  

Every one of these issues appears during mid‑market scale events.  
Every one can be prevented with clean design and disciplined management.



## H2: Connecting Automation to Revenue Stability

Automating customer flows is not a growth tactic.  
It is a risk reduction method.

When done correctly it creates:

- Predictable intake  
- Faster compliance processing  
- Smoother handoffs  
- Lower operational cost  
- Higher customer retention  
- Better audit readiness  
- Increased deal visibility in M&A  

In healthcare carve‑outs, these improvements translate directly into valuation stability.  
Buyers pay for predictable operations.  
Automation helps provide that predictability.



## H2: Bringing It All Together

To automate customer flows effectively:

- Map the current state  
- Identify high‑value automation targets  
- Build AI funnel optimization models  
- Create clear ownership  
- Standardize processes  
- Develop modular automation blocks  
- Use AI customer journey signals  
- Integrate compliance from the start  
- Create a transition layer for M&A  
- Train teams to work with automation  
- Track long‑term metrics  

This is the practical, durable approach.  
It is not flashy, but it is the approach that continues to perform across cycles and leadership changes.  
Operational resilience is the real objective.



Book a strategic consultation`,"case-study-ai-in-swedish-e-commerce":`
  

A pragmatic review of how mid sized Swedish retailers are using AI to strengthen margins, stabilise forecasts, and prepare for a market that rewards operational discipline more than creative optimism.

  

This article focuses on a real world pattern emerging in the mid market. The companies that win are not the loudest innovators. They are the ones that use AI as a controlled instrument to reduce friction and increase reliability. The tone is grounded, shaped by the same logic that governs healthcare carve outs and mature M and A readiness. No fantasies about overnight turnarounds. Only what works.

  

Keywords included: AI case e handel, OpenClaw e handlare referens, öka försäljning AI.

  

  



## **Why AI in Swedish E Commerce Must Be Treated Like a Carve Out**

  

Swedish e commerce operators often approach AI with the same early optimism that sinks distressed retail assets. The technology is not a silver bullet. It is a separation project. A carve out of inefficiencies. A structured uplift of analytics and execution.

  

The mature view is simple. AI only produces value when it replaces a measurable cost or accelerates a process already aligned with revenue. Mid market operators who work this way see results. Everyone else adds tools without impact.

  

The Swedish retail environment amplifies this. Logistics costs are high. Demand volatility is increasing. Customer acquisition has become more expensive than fulfillment in several categories. AI is not optional. It is a margin defence mechanism.

  

  



## **A Realistic AI Impact Chain**

  

AI introduces value in three dependable layers.

  

1. Operational visibility  
2. Predictive accuracy  
3. Controlled commercial growth

  

Each layer compounds the next. It mirrors the operational integration strategies commonly used in healthcare carve outs, where stabilisation precedes optimisation.

  

  



## **Layer 1: Operational Visibility**

  

E commerce businesses run on fragmented data. Merchants often operate with weak integration between marketing, logistics, and merchandising. When inventory accuracy is low, campaign efficiency drops, service costs rise, and margins erode.

  

AI driven consolidation provides the first stable baseline. It is the equivalent of establishing clean books before a divestiture. Without it, nothing else works.

  

The most common applications in Sweden include:

  

- Automated data harmonisation across CMS, WMS, and marketing platforms  
- Detection of invisible cost leakage in logistics and returns  
- SKU level profitability modelling  
- Real time margin monitoring during active campaigns

  

This foundational layer typically produces a 5 to 12 percent uplift in contribution margin solely by removing friction and exposing cost behaviour.

  

  



## **Layer 2: Predictive Accuracy**

  

Forecasting is where mid market operators feel the most pressure. Excess inventory destroys cash flow. Understocking creates lost revenue that is rarely recovered.

  

AI case e handel patterns show that prediction engines tuned to local sales rhythms outperform both human planners and generic SaaS forecasting modules.

  

Key gains include:

  

- Demand forecasts with tighter deviation bands  
- Purchasing that reflects true SKU velocity  
- Reduction of emergency procurement  
- Smoothed warehouse staffing cycles  
- Lower exposure to currency swings in long lead time imports

  

This is the same discipline used in infrastructure heavy carve outs. Reduce variance first. Create predictability. Then allocate capital with confidence.

  

Typical results: 15 to 25 percent reduction in working capital, with improved stock rotation.

  

  



## **Layer 3: Controlled Commercial Growth**

  

Once visibility and accuracy are established, AI becomes a direct driver of growth. Not chaotic growth built on discounts. Controlled growth anchored in contribution margin and customer lifetime value.

  

Modern Swedish operators use AI to:

  

- Build dynamic pricing models that adapt to competitor shifts  
- Personalise merchandising at scale  
- Increase conversion in high intent segments  
- Predict churn among profitable customer cohorts  
- Reduce marketing waste through targeted budget allocation

  

The objective is straightforward. Öka försäljning AI without compromising the balance sheet.

  

When AI enables precision rather than volume, growth strengthens the company instead of destabilising it. This is the maturity curve used by OpenClaw e handlare referens clients and similar operators that treat AI as infrastructure, not a marketing gadget.

  

  



How Swedish Retailers Use AI to Produce Durable Margins**

  

The following model reflects engagements across Swedish mid market e commerce operators between 2022 and 2025. Each scenario shares the same structure. High SKU complexity. Volatile customer acquisition costs. Pressure from logistics inflation.

  

Below is a composite case built from anonymised patterns.

  

  



## **Initial Conditions**

  

The client was a mid market niche retailer with roughly 150 to 300 million SEK in annual turnover. Profitability fluctuated seasonally. Inventory issues consumed cash flow. Customer acquisition costs exceeded projections by 18 percent. Management prepared for either scale or partial divestment but lacked the operational clarity required for due diligence.

  

No turnaround fantasy. Simply a company running on outdated forecasting and inconsistent reporting.

  

  



## **Phase 1: Data Stabilisation**

  

The first step was cleaning and unifying operational data. AI automated much of the process, including SKU grouping, error detection, and demand clustering.

  

Outcomes:

  

- Data latency reduced from days to minutes  
- Profitability visibility improved at SKU, basket, and channel level  
- Early detection of unprofitable segments reduced waste  
- Marketing and inventory teams finally worked from the same baseline

  

In M and A terms, this was equivalent to creating a ready for diligence data room. The business could now be evaluated on facts rather than estimates.

  

  



## **Phase 2: Predictive Operations**

  

Forecasting engines were implemented to stabilise purchasing and inventory allocation. Seasonal patterns, micro trends, and campaign windows were integrated automatically.

  

Impacts:

  

- Stockouts reduced by 22 percent  
- Overpurchasing reduced by 19 percent  
- Emergency restocking costs decreased  
- Warehouse planning improved due to stable demand windows

  

This created breathing room. Management finally gained control over working capital. The company moved from reactive behaviour to predictable operations.

  

  



## **Phase 3: Revenue Acceleration**

  

Once operations stabilised, AI was applied to growth levers. The objective was not top line vanity. It was contribution margin expansion.

  

AI supported:

  

- Pricing models based on real margin impact  
- Automated identification of profitable audiences  
- Personalised campaigns with measurable uplift  
- Dynamic product sorting based on intent signals  
- Reduction of ad waste through smarter bidding windows

  

Results:

  

- Conversion rate increased 9 to 14 percent depending on segment  
- Paid media cost dropped due to refined targeting  
- LTV improved across two of three primary cohorts  
- Sales increased, but without destabilising cash flow

  

This is how a company can öka försäljning AI without inflating risk.

  

  




  

The difference lies in the discipline. Mid market e commerce has been exposed to a flood of AI solutions. Most are built for hobby level operations. Others demand enterprise scale.

  

Pathmaker focuses on the same principles used in healthcare carve outs:

  

- Stabilise the system  
- Build control  
- Remove variance  
- Drive targeted growth only when infrastructure can handle it

  

The result is a reliable uplift pattern visible across multiple Swedish operators. A structure repeatable enough to qualify as an AI case e handel reference.

  

  




  

Even if a sale or carve out is not on the horizon, AI implementation should be treated with the same rigor. The logic is transferable.

  

- Clean data improves valuation  
- Predictable cash flow reduces risk perception  
- Scalable operations support higher multiples  
- Documented processes lower buyer uncertainty  

AI becomes a value protection mechanism. Not a gamble.

  

This approach aligns perfectly with sellers preparing partial divestments or future roll ups. Buyers reward operational discipline and penalise volatility. AI reduces that volatility.

  

  




  

OpenClaw e handlare referens clients consistently report similar outcomes. Not because the technology is identical. Because the discipline is identical.

  

These operators invest in AI where it matters most:

  

- Forecasting  
- Pricing  
- Profit visibility  
- Targeting  
- Personalisation  
- Logistics planning  

They do not deploy AI because of trends. They deploy it because every hour of efficiency matters in a market where margins are thin and expectations are high.

  

This practical mindset is the foundation of their performance trajectory.

  

  




  

When AI is deployed with discipline, Swedish e commerce companies achieve the following:

  

- Higher contribution margin  
- Lower working capital requirements  
- Faster inventory rotation  
- Controlled and profitable revenue growth  
- Reduced operational stress  
- Greater M and A readiness  

These results are not theoretical. They appear consistently in operators that treat AI as an operational backbone.

  

  



AI as a Stability Engine for Swedish E Commerce**

  

This case study demonstrates a pattern. AI in Swedish e commerce is not about hype. It is about operational reliability. It is about providing mid market companies with the resilience required to survive customer acquisition volatility, supply chain shifts, and margin compression.

  

The companies that win use AI like an experienced carve out team. They stabilise the core, remove noise, and build precision. Only then do they use AI to drive growth.

  

If the goal is to öka försäljning AI in a sustainable way, this is the only model that works.

  

  



**Book a strategic consultation**`,"ai-for-e-commerce-in-sweden-2026-trends-and-opportunities":`

AI e-handel Sverige is no longer an emerging niche, it has matured into a structural shift that is reshaping how Swedish mid-market companies build, operate, and divest digital commerce assets.

  
  

By 2026 the conversation has moved past experimentation. Swedish operators and investors now treat AI as a capital allocation question, not a creative one. The companies that win are the ones that apply AI where it compresses cost, mitigates operational risk, or accelerates transaction readiness.

  
  

This article examines the decisive AI trender 2026 e-handel that matter for serious operators in Sweden. It is written from a pragmatic, battle-hardened perspective shaped by mid-market M&A and healthcare carve-outs, where execution and defensibility matter far more than hype.

  
  

Throughout the analysis we reference technologies emerging from platforms like OpenClaw webbutik, since they illustrate the new level of standardization that investors increasingly expect.



## Why 2026 Marks a Structural Break for Swedish E-commerce


E-commerce in Sweden has reached a point where manual processes no longer scale relative to risk exposure. Costs are not the issue. Variability is.

  
  

Mid-market operators typically face three structural challenges.

  
  

• Rising CAC volatility that undermines forecasting.  
• Expensive headcount-heavy workflows in merchandising, pricing, and service.  
• Fragmented data estates that complicate exits and carve-outs.

  
  

AI shifts all three. However, the value does not come from creativity or brand voice. It comes from predictable process compression. The winners in 2026 will be the companies that turn AI into reliable infrastructure.

  
  

Below are the trends that define that shift.





Until recently, Swedish e-commerce AI deployments were fragmented. One vendor handled recommendations, another handled pricing, a third handled customer support. This produced inconsistent performance and heavy integration costs.

  
  

In 2026 the market is consolidating around unified operational AI cores. Platforms like OpenClaw webbutik exemplify the model. These systems run multiple core functions off one shared intelligence layer.

  
  

The benefits are direct.

  
  

• Lower integration overhead, critical during carve-outs.  
• Better data lineage, important for due diligence.  
• More predictable performance curves, reducing operational risk.

  
  

Instead of asking what AI can do, management teams ask which processes can be anchored in a stable AI core. The shift is subtle but fundamental.





Inventory risk remains the largest silent killer in Swedish e-commerce. AI e-handel Sverige solutions are now mature enough to reduce the volatility.

  
  

By 2026 predictive AI models incorporate not just sales history but also supplier variability, logistics delays, cost of capital, and SKU-level margin decay. Mid-market operators use these systems to compress uncertainty, not optimize creativity.

  
  

Several outcomes follow.

  
  

• Lower working capital requirements.  
• Reduced write-offs and overstocks.  
• Improved cash flow visibility that strengthens valuation multiples.

  
  

These capabilities matter even more in carve-out scenarios. Buyers now expect inventory systems that can be audited, replicated, and stress tested without manual heroics. AI is no longer optional in this domain.





Sweden has restrictive competition regulations and consumers who are highly price-sensitive but brand-loyal. This combination forces pricing strategies to be both granular and compliant.

  
  

The AI trender 2026 e-handel point toward pricing models that operate within clearly defined constraints. Instead of dynamic free-floating systems, Swedish operators increasingly deploy rules-governed optimization.

  
  

Examples include.

  
  

• Margin floors tied to commodity input volatility.  
• Channel-specific MAP compliance.  
• Competitor monitoring that adheres to Swedish legal standards.

  
  

The value is not in squeezing a few extra kronor per SKU. The value is in standardizing pricing processes so that they survive audits, acquisitions, and leadership transitions.





Product content was historically seen as a creative task. In 2026 it is an operational necessity and a cost center that AI can compress dramatically.

  
  

Modern AI pipelines generate, validate, and localize product data at scale. The systems used in OpenClaw webbutik illustrate how this works: AI models create structured product descriptions, attribute sets, compliance flags, and SEO text in parallel.

  
  

This shift delivers three key advantages.

  
  

• Faster time to shelf for new SKUs.  
• Lower reliance on external content agencies.  
• More consistent taxonomy across categories.

  
  

For mid-market M&A this consistency matters. Buyers increasingly expect clean, standardized data structures that can be ported into new systems quickly. AI-generated content pipelines reduce friction in both pre-deal evaluations and post-deal integrations.





Customer service automation is often framed as a cost-saving measure. In Sweden the more strategic value lies in risk reduction.

  
  

AI systems now handle returns processing, warranty assessments, and complaint routing with higher accuracy and lower variance than human agents. This reduces misclassification risk, which can otherwise create legal, regulatory, or PR exposure.

  
  

The best systems pair deterministic flows with generative models. The goal is not to mimic conversation. The goal is to avoid liability while handling volume.

  
  

Mid-market operators in Sweden increasingly evaluate support AI through three metrics.

  
  

• Error rate in refund decisions.  
• Compliance consistency across agents and shifts.  
• Documented traceability for dispute resolution.

  
  

This is an area where AI now outperforms manual teams reliably, and the trend accelerates through 2026.





SEO in Sweden has shifted from creative content to large-scale technical execution. Google’s 2025–2026 updates reward structured data, authoritative sourcing, and user intent modeling. AI fits naturally into all three domains.

  
  

Operators using platforms like OpenClaw webbutik can now generate large volumes of structured SEO assets at high quality. The systems that win focus on predictability.

  
  

Key developments include.

  
  

• Automated semantic clustering of keywords.  
• AI-driven internal linking that responds to real user flows.  
• Entity-level optimization instead of keyword-level optimization.

  
  

The new standard is to treat SEO as an operational function. AI handles the repetition. Humans oversee risk and direction.





Investors in Sweden no longer value AI experiments. They value AI workflows that produce stable KPIs over extended time horizons.

  
  

By 2026 e-commerce operators evaluate AI based on its ability to deliver stability in.

  
  

• Gross margin.  
• Inventory turnover.  
• CAC and ROAS.  
• Order cycle times.  
• Support resolution speed.

  
  

The companies that succeed focus on building AI workflows that are easy to transfer, easy to audit, and resistant to staff turnover. These workflows increase valuation multiples because they reduce operational key-person risk.

  
  

This has become a decisive factor in mid-market M&A. Deals now hinge on the maturity of AI operationalization, not the creativity of AI initiatives.





Healthcare carve-outs and multi-brand divestitures have reshaped Swedish M&A patterns. AI plays a growing role in making carve-outs faster and less risky.

  
  

E-commerce carve-outs typically struggle with separation of.

  
  

• Customer data.  
• SKU databases.  
• Pricing logic.  
• Inventory planning systems.  
• Martech automations.

  
  

AI helps by automating mapping, cleaning, and rebuilding processes. Instead of six months of manual IT separation, operators increasingly deploy AI-driven system extraction tools that rebuild core commerce logic from data footprints.

  
  

This reduces both time-to-separation and TSA duration, which has clear financial benefits for both buyer and seller.

  
  

In 2026 AI is no longer an operational add-on for carve-outs. It is part of the deal model.





Sweden’s regulatory environment around data privacy, consumer rights, and product safety continues to tighten. AI systems increasingly handle compliance monitoring as part of daily operations.

  
  

Modern e-commerce AI systems automatically flag SKUs with missing safety documentation, detect discrepancies between claimed and legal product attributes, and monitor communication for potential regulatory risks.

  
  

The strategic value lies in lowering audit exposure and simplifying due diligence. For operators preparing for exit within three to five years, compliance AI has become a mandatory capability.





AI does not remove the need for talent. It changes the profile of the talent required.

  
  

By 2026 Swedish e-commerce teams shift toward roles that focus on oversight, risk control, and process design rather than execution.

  
  

The emerging e-commerce roles are.

  
  

• AI operations manager.  
• Data compliance lead.  
• Automation workflow architect.  
• KPI stability analyst.  
• System integration specialist.

  
  

These roles are essential for building e-commerce operations that scale while remaining predictable, auditable, and M&A-ready.





The most effective operators follow a clear sequence.

  
  

1. Stabilize data.  
2. Centralize AI into one operational core.  
3. Automate repeatable processes before creative ones.  
4. Standardize KPI reporting around AI-driven workflows.  
5. Build systems that survive leadership changes and ownership changes.

  
  

This sequence aligns operational priorities with the expectations of investors, regulators, and customers. It avoids the romanticized turnaround mindset that often fails in mid-market operations.





OpenClaw webbutik is an example of the new generation of AI-first commerce platforms. These systems are designed not for creative expression but for operational reliability.

  
  

Their architecture typically includes.

  
  

• Unified AI layer across merchandising, pricing, inventory, and content.  
• Strict data lineage controls.  
• Modular separation for carve-outs.  
• Scalable automation for SKU and content expansion.  
• Built-in governance over AI-generated output.

  
  

This is exactly what Swedish operators need in 2026. A stable operational foundation that protects margins, reduces volatility, and simplifies ownership transitions.





AI e-handel Sverige is no longer a technological discussion. It is a governance and capital allocation discussion.

  
  

AI trender 2026 e-handel show a clear pattern. The companies that win treat AI as infrastructure. They focus on risk, variability, and operational continuity. They build systems that can withstand scrutiny, audits, and ownership changes.

  
  

Whether the context is mid-market M&A, healthcare carve-outs, or long-term operational scaling, AI has become the backbone of defensible Swedish e-commerce strategy.

  
  

The next competitive cycle belongs to the operators who deploy AI not for creativity but for durability.



Book a strategic consultation`,"openclaw-for-swedish-consulting-firms":`


OpenClaw has entered the Nordic market as a quiet but decisive force, especially for Swedish consulting firms that operate in mid‑market M&A and healthcare carve‑outs.



The platform is not built for theatrics.  

It is built for precision, scale, and predictable outcomes.  

This matters for firms that sell B2B tjänster AI and need tooling that speaks the language of operational reality rather than hype.



As generative AI shifts from experimentation to infrastructure, firms that rely on billable hours and partner‑driven delivery face a structural shift.  

The center of gravity moves from individual expertise to systematized intelligence.  

This is where OpenClaw becomes relevant for every Swedish konsultbolag that wants to stay competitive without burning capital or reshaping its entire delivery model.



Below is a pragmatic exploration of how OpenClaw strengthens consulting operations, how AI‑agent konsulter reshape delivery economics, and why the firms that move first will redefine the next decade of B2B advisory in Sweden.





## What OpenClaw Does for Swedish Consulting Firms



OpenClaw is designed to operationalize AI adoption across the full consulting workflow.  

It focuses on repeatable, high‑value use cases rather than abstract innovation programs.



For Swedish consulting firms, the platform offers three critical functions.



First, it creates AI‑agent konsulter that can take over research, documentation, modelling or monitoring tasks at scale.  

These agents are not generalists.  

They are tailored to the specific sectors where Swedish mid‑market advisors compete, including industrial services, healthcare operations, and fragmented Nordic niche markets.



Second, it ensures compliance, traceability, and data governance, which is essential for firms working with sensitive healthcare data, regulated carve‑outs, or EU cross‑border transactions.  

Many AI tools promise speed.  

Few can demonstrate auditability, lineage, and risk controls that withstand scrutiny from both clients and regulators.



Third, it integrates with existing delivery structures without forcing a rebuild of tech stacks or workflows.  

Consulting firms operate on legacy habits, PowerPoint, and Excel.  

OpenClaw respects that reality instead of attempting to replace it.





## Why the Swedish Mid‑Market is Ripe for AI‑Agent Konsulter



The Swedish consulting landscape is mature, relationship‑driven, and resistant to unnecessary complexity.  

Yet the margin pressure is rising across all segments.



Clients expect lower cost per insight.  

Deal timelines compress.  

Healthcare carve‑outs demand meticulous operational readiness.  

Industrial clients require cleaner, more defensible data before committing to transformation programs.



This creates a gap between expectations and existing delivery capacity.  

Hiring more analysts is not the optimal solution.  

Scaling through AI‑agent konsulter is.



These agents change the economics in three ways.



They speed up the low‑value work that consumes most junior bandwidth.  

They enforce consistency across deliverables, something that even strong consulting teams struggle to maintain in fast deal cycles.  

They reduce the dependency on volatile staffing by taking on repeatable tasks with zero fatigue and high accuracy.



This is not about replacing consultants.  

It is about preserving their time for client handling, judgment, and strategic clarity.  

Areas where human operators remain essential.



The firms that combine human expertise with reliable AI execution will define the new baseline of Swedish consulting performance.





## Scandinavian Pragmatism Meets AI



Swedish consulting firms have historically adopted technology in a conservative but effective manner.  

They wait for practical value.  

Then they deploy deliberately.  

OpenClaw aligns with this mindset, offering utility rather than novelty.



The platform’s architecture supports stepwise adoption rather than full‑scale digital transformation.  

A firm can begin with a single workflow, internal documentation or due diligence preparation.  

Then it can expand into modelling support, market research, or regulatory mapping.  

This approach avoids the typical overinvestment seen in AI pilot programs.



In Sweden, trust is currency.  

Any AI deployed inside a consulting firm must be dependable, transparent, and respectful of client confidentiality.  

OpenClaw’s design principles align with these expectations.





## The Strategic Use Cases for Swedish Consulting Firms



### Market and Sector Research



Research cycles still dominate the early stages of most Swedish advisory projects.  

AI‑agent konsulter automate the data collection, structuring, and summarization process.  

This frees up consultants to analyze relevance rather than search for content.



For firms that work across Nordic industrial clusters, this directly improves speed and reduces the manual effort of scanning fragmented markets.





### Operational Diligence for Mid‑Market M&A



Mid‑market transactions are rarely glamorous.  

They are operationally dense, documentation heavy, and require disciplined structure.  

OpenClaw assists by standardizing checklists, processing large document sets, and generating draft findings.



This ensures that consultants focus on judgment, risk evaluation, and management interviews rather than clerical review.



For Swedish advisors involved in cross‑border Nordic deals, this creates a significant competitive advantage.  

Consistency becomes deliverable rather than aspiration.





### Healthcare Carve‑Out Preparation



Healthcare carve‑outs are complex.  

They require controlled separation planning, data handling rigor, and risk mitigation across clinical, administrative, and IT landscapes.



AI‑agent konsulter help by mapping processes, reviewing regulatory frameworks, and generating draft separation artifacts.  

They provide the groundwork so consultants can spend more time on scenario planning and stakeholder alignment.



This is where OpenClaw’s attention to compliance and auditability becomes essential.  

Healthcare demands precision, and the platform supports that requirement without friction.





### Internal Knowledge Capture and Reuse



Swedish consulting firms often carry decades of tacit knowledge stored inside PowerPoints, old SharePoint folders, or senior partners’ memories.  

AI‑agent konsulter can convert these archives into searchable, structured intelligence.  

This ensures institutional knowledge does not disappear when individuals move on.



In a market with rising competition, the ability to reuse past insights reliably is a tangible differentiator.





### Proposal Writing and Scoping Support



RFP cycles are costly and time‑consuming.  

AI agents can prepare baseline structures, contextualize the client’s industry, and propose initial workstreams.



Consultants then refine and adjust rather than build from scratch.  

This improves win rates and cuts internal effort significantly.





## Why OpenClaw Stands Apart for Consulting Workflows



Many generative AI platforms are built for SaaS companies or technical users.  

They prioritize model performance over operational fit.  

OpenClaw takes the opposite approach.



Its value comes from three structural advantages.



First, the system supports multi‑agent workflows, not isolated prompts.  

This allows consulting firms to create operational chains that mirror real projects.  



Second, the platform supports secure, private deployments, which is essential for Swedish firms handling confidential transaction data, healthcare information, or regulated documents.  



Third, the governance features meet EU expectations around auditability, which reduces risk in client engagements.



The result is a platform that behaves like a junior consulting bench at scale.  

Not creative for the sake of creativity, but disciplined, structured, and predictable.





## Integration Into Existing Consulting Teams



One of the most significant barriers to AI adoption in consulting is cultural resistance.  

Teams prefer tools that do not disrupt their established workflows.



OpenClaw integrates into tools consultants already use.  

It formats outputs for PowerPoint.  

It supports Excel modelling structures.  

It aligns with existing deliverable templates rather than requiring reinvention.



The goal is not to transform the identity of the consulting firm.  

The goal is to strengthen it through better execution.





## The Competitive Outlook for Swedish Consulting Firms



The Swedish consulting market is well‑educated and disciplined.  

It is also crowded.  

Differentiation is increasingly difficult when every firm claims sector expertise and operational excellence.



AI‑agent konsulter shift the battlefield from branding to operational throughput.  

The firms that deploy them will deliver faster, more consistently, and with less dependency on staffing cycles.



For mid‑market M&A advisors, this means stronger deal readiness and more efficient due diligence workflows.  

For healthcare specialists, it means cleaner regulatory mapping and reduced documentation overhead.  

For transformation advisors, it means predictable execution support in environments where clients demand measurable outcomes.



This is the new competitive floor.  

The question is not whether AI will reshape Swedish consulting.  

The question is which firms will adapt early enough to define the standard others must follow.





## Roadmap for Adoption



A Swedish consulting firm does not need a full operating model redesign to use OpenClaw effectively.  

A phased approach is both realistic and impactful.



Phase one begins with one workflow, usually research automation or internal documentation.



Phase two expands into deliverable creation, proposal drafting, and cross‑project knowledge reuse.



Phase three introduces multi‑agent chains aligned with service lines, such as operational diligence or healthcare regulatory mapping.



Phase four integrates AI‑agent konsulter directly into revenue‑generating engagements.



This staged approach minimizes risk and maximizes internal acceptance.  

It is consistent with the Swedish preference for controlled experimentation before full‑scale deployment.





## The Future of B2B Tjänster AI in Sweden



The next wave of B2B AI in Sweden will not be defined by general models or flashy technologies.  

It will be defined by platforms that integrate deeply into professional service workflows.  

OpenClaw falls into this category.



Its strength lies in its operational utility.  

It turns AI from concept to infrastructure.  

For consulting firms, infrastructure is what matters.  

Not novelty.  

Not hype.  

Execution.





## Conclusion



Swedish consulting firms face rising expectations, compressed timelines, and stricter regulatory environments.  

The demands of mid‑market M&A and healthcare carve‑outs will not soften.  

OpenClaw provides a disciplined, pragmatic way to scale capacity through AI‑agent konsulter without disrupting existing workflows or risking client trust.



The firms that adopt this approach gain structural advantage.  

Not through bold claims, but through sustained operational performance.



Book a strategic consultation`,"high-fidelity-diligence-architectures-for-complex-targets-using-the-diagnostic-audit-mid-market-m-a-has-shifted":`---
title: "High Fidelity Diligence Architectures for Complex Targets Using The Diagnostic Audit"
description: "High Fidelity Diligence Architectures for Complex Targets Using The Diagnostic Audit | Institutional Briefing by Pathmaker"
date: "2026-03-20"
author: "Pathmaker"
slug: "high-fidelity-diligence-architectures-for-complex-targets-using-the-diagnostic-audit"
--- 


.

Not in a slow, evolutionary arc, but in a decisive break from the era where standard diligence checklists could pass as real risk governance.

Healthcare carve outs have made that gap even more visible.

They expose operators, investors, and lenders to structural blind spots that traditional diligence can never surface in time.

The Diagnostic Audit was built for this environment.

It is not a marketing wrapper on financial quality of earnings.

It is a high fidelity diligence architecture designed for complex targets, multi entity clinical operations, and carve outs where baseline data integrity cannot be assumed.

The purpose is simple.

Prevent deal teams from walking blind into structurally unsalvageable assets.

Why High Fidelity Diligence Matters in Mid Market Healthcare The prevailing assumption in the lower and mid market is that diligence issues are recoverable

.

Earnouts can be negotiated.

Escrows can be padded.

Post close cleanup can be delegated.

Operators know this is false.

Certain risks, if unidentified pre close, cannot be remediated without destroying the investment case.

Examples include:

- A multi state practice with credentialing files that do not tie to billed NPI activity.

- A behavioral health platform with EMR workflows that inflate billable encounters.

- A carve out that inherited two decades of undocumented IT dependencies from the parent.

- A physician group with payor contracts that do not match the coding profile of its clinical visits.

These are not academic.

They are real deal killers and post close detonators.

They only surface when diligence resolves data with clinical reality.

That requires a systematic architecture that does not rely on management narratives, standard checklists, or thin consultant summaries.

This is the gap The Diagnostic Audit closes.

Principle One: Precision Over Breadth Traditional diligence prioritizes coverage

.

Ensure every topic area is touched.

Ensure every box is checked.

The Diagnostic Audit is built around a different principle.

Only precision creates decision grade clarity.

Coverage does not matter if the underlying data is misaligned.

A full QofE is irrelevant if charge capture is inflated by system defaults.

A compliance review is toothless if EMR templates auto populate histories that trigger higher level codes.

Precision requires primary source interrogation.

Not summaries.

Not dashboards.

Not management explanations.

Examples:

- Reconciliation between credentialing rosters, NPI directories, and payor specific rosters.

- Direct verification of encounter level coding distribution versus physician documentation.

- Comparison of EMR structured fields and free text to identify template inflation.

- Isolation of encounters tied to non credentialed providers or misaligned taxonomies.

By narrowing focus to the highest risk levers, precision increases, noise falls, and the cost of false comfort disappears.

Principle Two: Architectural Depth High fidelity diligence is an architectural exercise

.

Not a checklist exercise.

It examines the entire stack from the bottom up, including:

- Entity structure and legal alignment.

- Data infrastructure and source system integrity.

- Operational workflows and revenue cycle movements.

- Clinical documentation and coding behaviors.

- Compliance exposure pathways.

- Financial outputs that emerge from the above layers.

Mid market deals tend to skip the architecture and jump straight into outputs.

This is why deals fail post close.

You cannot solve revenue leakage or audit risk if the underlying system architecture is broken, undocumented, or dependent on a single IT administrator who is leaving at close.

Architectural diligence evaluates whether the business can withstand separation, integration, or rapid optimization without collapsing its revenue engine.

This is especially critical in carve outs, where targets often lack:

- Clean data schemas.

- Independent infrastructure.

- A coherent revenue cycle.

- Documented workflows.

The Diagnostic Audit treats architecture as the core, not the background.

Principle Three: Clinical Root Cause Analysis Most mid market diligence reviews shy away from clinical specificity because they view it as the domain of operators

.

This is a mistake.

Clinical reality is the root cause of most revenue and compliance exposure in healthcare services.

Clinical documentation fails.

Templates inflate.

Providers bypass structured fields.

EMR defaults mask deficiencies.

Supervising physicians are assigned retroactively to meet payor rules.

These are not edge cases.

They are common patterns in distressed and growing platforms alike.

The Diagnostic Audit translates clinical behavior into financial and regulatory implications, including:

- Coding distribution anomalies.

- Documentation insufficiency for billed levels.

- Split share or incident to misuse.

- SUD, psych, PT, and primary care modality mismatches.

- Timing discrepancies between service and attestation.

- Provider work patterns that do not match encounter volume.

This is not about accusing providers.

It is about eliminating clinical blind spots before they become CMS investigations, overpayment demands, or payer terminations post close.

How The Diagnostic Audit Delivers High Fidelity Diligenc

e

Step One: Data Integrity Reconstruction Every complex target has data inconsistencies.

The question is not whether they exist, but whether they create material risk.

The Diagnostic Audit reconstructs the data backbone of the company by:

- Extracting raw encounter, billing, and roster data.

- Reconciling NPIs, taxonomies, rendering providers, and supervising links.

- Mapping EMR workflows to actual billing outputs.

- Identifying missing or unlinked documentation.

- Tracing audit trails to determine whether system edits are masking gaps.

This step alone often reveals mismatches that invalidate management reported revenue or compliance narratives.

Step Two: Architectural Mapping Next, the audit constructs a full stack map of the target's operational architecture.

This includes:

- Entity and licensing structures.

- Payor contracting and rate structures.

- EMR configuration.

- Billing platform logic.

- Credentialing workflows.

- Revenue cycle ownership and delegation patterns.

- Upstream and downstream dependencies with parent organizations in carve outs.

The purpose is not to critique the target.

It is to determine whether the architecture can support the deal thesis under actual operating load.

Step Three: Clinical Workflow Verification Clinical documentation is examined at the workflow level.

Not a sample.

Not a coding audit.

A structural analysis of how clinicians produce documentation and how that documentation is translated downstream.

This includes:

- Reviewing EMR templates for auto population risk.

- Measuring structured versus free text ratios.

- Verifying coding logic against documentation paths.

- Identifying specialty specific risk vectors such as evaluation and management inflation, therapy unit discrepancies, behavioral health modality classification, or urgent care coding compression.

This 


arifies not only compliance risk but also revenue durability, which is often overstated in management presentations.

Step Four: Scenario Based Exposure Modeling The Diagnostic Audit builds scenarios based on identified vulnerabilities.

These scenarios include:

- Payor recoupments.

- Rate adjustments following contract renegotiation.

- Encounter reclassification.

- Staffing model changes.

- System migration disruptions.

- Separation impacts in carve outs.

The objective is not to produce a number.

It is to model how the business reacts under real world stress.

Mid market deals often skip this.

That is why integration teams spend 

12 to 

18 months unwinding preventable errors.

Step Five: Decision Grade Synthesis The final output is not a binder.

It is a decision architecture.

Clear, unembellished, and operationally grounded.

It answers the only three questions that matter:

- Can you buy the asset.

- Can you operate the asset.

- Can you exit the asset.

Everything else is noise.

Why Pathmaker Uses The Diagnostic Audit for Healthcare Carve Outs Healthcare carve outs have become a unique risk category in mid market M&A

.

Sellers frequently underinvest in the unit pre sale.

Buyers underestimate separation requirements.

This creates a perfect storm when diligence is superficial.

Common carve out risks include:

- Intertwined systems without documented separation pathways.

- Billing operations partially owned by parent functions.

- Contracting structures tied to parent tax IDs.

- EMR data structures that collide when migrated independently.

- Parent level credentialing that is not portable.

- Licensing gaps masked by enterprise systems.

The Diagnostic Audit isolates these risks early.

It creates a blueprint for separation feasibility, cost, and timeline.

This prevents post close operational paralysis, a common failure mode when buyers assume carve outs behave like standalone businesses on day one.

Carve out diligence must be clinical, architectural, and scenario driven.

Anything less is a gamble.

Why Standard Diligence Processes Fail in Complex Healthcare Targets Buyers often rely on a series of familiar workstreams: financial QofE, legal diligence, compliance review, and limited coding audits

.

These functions have value, but they are insufficient when:

- Systems do not reconcile.

- Payroll does not align with encounter volume.

- Provider identity is unclear or mismatched.

- Documentation is not linked properly.

- Billing logic depends on hidden system defaults.

Traditional diligence assumes structural integrity.

High fidelity diligence verifies it.

When The Diagnostic Audit Is Most Valuable The Diagnostic Audit is not required for every deal

.

It is specifically built for situations where the underlying architecture is likely to be unstable or where revenue is vulnerable to documentation or workflow failures.

Typical scenarios include:

- Multi site, multi specialty groups.

- Behavioral health platforms.

- Carve outs from hospital systems.

- Roll ups with inconsistent EMR use.

- Organizations with rapid growth or high turnover.

- Groups with heavy reliance on incident to rules.

- Firms preparing for sale and needing pre diligence clarity.

These situations produce complexity that traditional diligence cannot resolve reliably.

What Investors Gain From High Fidelity Diligence Buyers do not need more reports

.

They need clarity.

High fidelity diligence provides:

- True revenue durability assessment.

- A real view of compliance exposure.

- Separation feasibility for carve outs.

- Operational readiness mapping.

- Data integrity validation.

- Identification of hidden structural defects.

Most importantly, it converts clinical and operational reality into actionable investment decisions.

This is where most deals break down.

Not because buyers lacked information, but because they lacked clarity.

Operator Benefits Operators inherit the results of every diligence oversight

.

A high fidelity diligence process protects operators from preventable disasters, including:

- Systems that cannot produce valid claims.

- Credentialing gaps that halt revenue.

- Contracting structures that collapse after legal separation.

- EMR workflows that inflate risk scores or claim levels.

- Coding patterns that trigger audits immediately post close.

Operators are measured on integration success.

High fidelity diligence gives them a starting point that is workable, not radioactive.

Why The Diagnostic Audit Is Clinical, Not Conceptual Many diligence frameworks talk about integrating financial, operational, and compliance data

.

The Diagnostic Audit does this, but it goes further.

It ties every finding to clinical workflow.

That is the only reliable way to distinguish:

- Fixable issues from structural ones.

- Temporary revenue lift from inflated coding.

- Documented processes from undocumented workarounds.

- System artifacts from true performance.

Clinical grounding is the difference between theoretical diligence and real diligence.

CONCLUSIO

N

 Mid market healthcare deals demand a level of precision and architectural clarity that standard diligence cannot provide.

Complexity, flawed data, inconsistent workflows, and deeply embedded operational dependencies create material risk that cannot be negotiated away after close.

The Diagnostic Audit was built for these environments.

It delivers high fidelity visibility into the clinical, operational, financial, and architectural realities that determine whether an investment is viable.

Investors do not need more volume.

They need accuracy, clarity, and decision grade intelligence.

That is what The Diagnostic Audit provides.

Book a strategic consultation

Access is restricted to approved mandates.

Minimum target size: $5M+.`,"institutional-sourcing-grids-for-multi-market-m-a-funnels-using-the-diagnostic-audit-technique-introductio":`---
title: "Institutional Sourcing Grids for Multi Market M&A Funnels Using The Diagnostic Audit Technique"
description: "Institutional Sourcing Grids for Multi Market M&A Funnels Using The Diagnostic Audit Technique | Institutional Briefing by Pathmaker"
date: "2026-03-20"
author: "Pathmaker"
slug: "institutional-sourcing-grids-for-multi-market-m-a-funnels-using-the-diagnostic-audit-technique"
--- 


N

 Mid market M&A has become a precision environment.

The surface level sourcing tactics that once generated reliable deal flow no longer deliver competitive advantage.

Institutional investors, corporate development teams, and specialized acquirers now require structured sourcing architectures that can operate across multiple markets.

The objective is consistent visibility into pre actionable opportunities that align with a defined acquisition thesis.

The limiting factor is rarely capital.

It is systemic sourcing discipline.

The Diagnostic Audit technique provides a durable framework for developing institutional sourcing grids that scale across healthcare, industrials, and operational carve out environments.

The technique converts scattered top of funnel activity into a predictable funnel engine.

It is methodical, data anchored, and indifferent to the emotional cycles that typically distort origination work.

The approach works because it removes intuition as the primary driver and replaces it with structured diagnostic logic.

This article outlines how to build these sourcing grids, how to apply the Diagnostic Audit, and how to extend the methodology into multi market M&A funnels without losing precision.

Most organizations try to expand by adding more inputs.

More brokers.

More conferences.

More conversations.

More noise.

Institutional sourcing grids focus instead on clarity, constraint, and repeatability.

The result is a sourcing system that is both deep and wide, without becoming chaotic.

The Role of Institutional Sourcing Grids in Modern M&A Institutional sourcing grids function as a control system

.

Each grid is a structured map of the acquisition environment across a defined market.

Mid market teams often confuse coverage breadth with quality of funnel construction.

This is why deal flow remains inconsistent even with adequate time and headcount.

Coverage without structure does not produce conversion.

A sourcing grid solves this by imposing order.

It forces the team to define counterparties, segments, and action paths.

It creates clarity around who is relevant, why they are relevant, and what signal thresholds trigger outreach.

In healthcare carve outs, where incentives, reimbursement dynamics, and referral dependencies create fragmented environments, sourcing grids are essential.

Not optional.

The grid functions as the backbone of multi market expansion.

Each market receives a parallel grid.

The team then compares the grids for density, velocity, and acquisition path complexity.

This creates an integrated vantage point for funnel prioritization.

The strategy becomes informed by evidence rather than assumptions.

Institutional sourcing grids, when built correctly, support both proprietary and non proprietary sourcing channels.

They also produce operational intelligence that strengthens post acquisition integration planning.

Teams often overlook this secondary benefit.

A grid system reveals structural weaknesses and competitive dynamics long before a CIM appears.

The Diagnostic Audit Technique The Diagnostic Audit is a structured assessment tool

.

It evaluates the sourcing system across six domains: thesis clarity, market mapping, counterparty architecture, signal intelligence, outreach sequencing, and conversion operations.

Each domain contains measurable indicators that allow the team to diagnose weaknesses without guesswork.

The technique is intentionally clinical.

It is designed to remove narrative.

Many teams struggle with sourcing underperformance because they use story driven reasoning.

The Diagnostic Audit replaces stories with evidence and models.

Below is a breakdown of the core domains.

Thesis Clarity Every grid starts with a precision thesis

.

Not a broad vertical description.

A thesis must define:

• The structural driver of value

• The acquirer’s operational advantage

• The transaction mechanics that fit the balance sheet

• The realistic integration bandwidth Most healthcare carve out failures trace back to thesis drift.

The Diagnostic Audit forces the team to reduce the thesis to measurable attributes.

The sourcing grid then encodes these attributes as filters.

This prevents the funnel from filling with noise.

Market Mapping Market mapping is the discipline of defining all entities within the relevant competitive and adjacent landscape

.

It includes operators, service groups, management teams, compliance risk clusters, and value chain partners.

Most mid market acquirers produce partial market maps.

The Diagnostic Audit requires complete market maps that match the actual operating reality.

This includes sub scale entities that may never be listed with brokers.

These entities often produce the most attractive returns in carve out environments.

They become visible only when the market map is exhaustive.

Counterparty Architecture Counterparty architecture defines how each market actually transacts

.

It separates counterparties into:

• Direct sellers

• Intermediated sellers

• Influence based participants

• Regulatory or reimbursement pressure nodes

• Strategic blockers In healthcare, this architecture becomes especially critical.

Referral networks, certificate structures, and legacy ownership arrangements distort direct visibility.

A sourcing grid cannot function without accurate counterparty architecture.

The Diagnostic Audit evaluates whether the current architecture is complete, updated, and aligned with the thesis.

Most organizations discover that their counterparty maps are outdated or constructed around convenience rather than accuracy.

Signal Intelligence Signal intelligence involves tracking pre transactional indicators

.

These indicators predict seller readiness or market consolidation triggers.

Examples include leadership transitions, regulatory shifts, litigation patterns, payer contract outcomes, or capital structure deterioration.

The Diagnostic Audit examines whether the team has codified these signals and whether they are tracking them systematically.

Most sourcing failures occur because the team acts when the market is already saturated.

Signal intelligence corrects this by exposing early indicators.

Outreach Sequencing Outreach sequencing is the order and timing of engagement

.

Most teams operate reactively.

They pursue inbound opportunities and sporadically contact targets.

They operate without a formal cadence.

The Diagnostic Audit evaluates whether the sequencing is aligned to the acquisition thesis, the counterparty architecture, and the expected transaction logic of the market.

It also measures whether the outreach process is producing controlled velocity across the funnel.

Without sequencing, even a strong grid loses value.

Conversion Operations Conversion operations represent the internal processes that convert outreach into actionable deals

.

They involve qualification, diligence readiness, feedback loops, and suppression logic.

The Diagnostic Audit determines whether the team can convert at scale without creating operational stress.

In healthcare carve outs, conversion operations are critical due to compliance windows, operational complexity, and the need to separate clinical workflows.

Weak conversion operations undermine even the strongest sourcing grid.

Constructing Multi Market Sourcing Grids A multi market sourcing architecture is not simply multiple market maps stacked together

.

It is a parallel system of grids that share principles but maintain distinct data structures.

Each market grid is built using the Diagnostic Audit.

Once each grid is constructed, the team evaluates cross market relationships, acquisition pathways, and systemic constraints.

Below is the sequence for constructing multi market grids. 

### Step I:

Market Definition with Constraint Logic Expansion choices often fail because the team uses opportunity logic rather than constraint logic.

Opportunity logic asks where deals exist.

Constraint logic examines where the acquirer can win consistently.

Multi market grids begin with constraints.

This stabilizes the acquisition thesis and directs sourcing toward markets with accessible transaction pathways. 

### Step I:

Build the Primary Grid for the Anchor Market The anchor market is the highest confidence environment.

The Diagnostic Audit is applied in full.

The grid becomes the reference model for all other markets.

The anchor market grid defines:

• The thesis filters

• The counterparty architecture

• The signal set

• The outreach cadence

• The conversion process This grid becomes the institutional template. 

### Step II:

Deploy Parallel Grid Construction in Secondary Markets Parallel grid construction ensures conceptual consistency across markets.

It does not mean identical structures.

Each secondary market receives its own Diagnostic Audit.

The team builds the grid from the ground up using local dynamics.

Healthcare carve outs often reveal dramatic differences between states, referral networks, or payer mixes.

Parallel construction respects these realities. 

### Step I:

Cross Market Integration Review Once each market grid is constructed, the team performs an integration review.

This review evaluates how the grids interact.

It examines cross market consolidation opportunities, referral spillovers, workforce mobility, reimbursement variance, and operational synergies.

The integration review identifies where the funnel density will be highest and where acquisition friction will be lowest.

This becomes the roadmap for sourcing prioritization. 

### Step V:

Establish the Multi Market Funnel Engine A multi market funnel engine aligns all grids into a single operating system.

It standardizes certain processes while allowing market specific adaptations.

The engine consists of:

• Unified qualification logic

• Priority scoring across markets

• Centralized signal intelligence tracking

• Harmonized outreach sequencing

• Conversion process oversight The objective is simple.

Multiple markets.

One institutional system.

No fragmentation.

Applying the Diagnostic Audit to Healthcare Carve Outs Healthcare carve outs require unusually precise sourcing grids

.

They involve regulatory complexity, emotional owner dynamics, and operational fragility.

The Diagnostic Audit removes emotional distortions and focuses strictly on structural drivers.

Below are specific applications for healthcare carve out sourcing.

Identifying Carve Out Ready Segments A segment is carve out ready when

:

• The parent organization has negative alignment between cost structure and service line performance

• Compliance risk has escalated

• Leadership transition is imminent

• Adjacent acquisitions have shifted strategic priorities These indicators are visible long before a sale process.

They can be captured within a sourcing grid through targeted signal intelligence.

Structuring Counterparty Architecture for Provider Ecosystems Healthcare ecosystems rarely follow clean hierarchical structures

.

Counterparty architecture must include:

• Local clinical influencers

• Regional referral concentrations

• Private equity backed roll ups

• Payer contract intermediaries

• Facility lease dependencies Each node affects optionality.

The Diagnostic Audit ensures the grid reflects these operational realities.

Sequencing Outreach Without Triggering Defensive Behavior Healthcare operators often react defensively when approached

.

Outreach sequencing must account for:

• Timing relative to compliance cycles

• Sensitivity to clinical staffing shortages

• Market level distress indicators

• Owner psychology without relying on owner narrative The Diagnostic Audit provides the logic for sequencing.

This reduces the risk of early rejection.

Conversion Operations for Healthcare Transactions Conversion operations in healthcare require readiness in

:

• Regulatory diligence

• Clinical workflow mapping

• EMR separation

• Credentialing

• Billing architecture A sourcing grid is ineffective if conversion is weak.

The Diagnostic Audit evaluates conversion capacity before the funnel expands.

This prevents the team from capturing more opportunities than they can realistically convert.

Common Failure Modes in Multi Market M&A Sourcing The majority of sourcing underperformance stems from predictable failure modes

.

These include:


.

This leads to partial grids, unclear prioritization, and diluted outreach.

Thesis Drift Due to Market Noise As teams engage with more counterparties, the thesis begins to drift

.

This produces inconsistent qualification and a distorted funnel.

The Diagnostic Audit stabilizes the thesis by grounding it in structural parameters.

Excessive Reliance on Brokered Processes Broker deal flow is valuable but insufficient

.

Teams that rely on intermediaries lose visibility into pre actionable opportunities.

Institutional sourcing grids mitigate this by widening the counterparty architecture.

Underdeveloped Signal Intelligence Teams often track signals haphazardly

.

Without systemized signal intelligence, sourcing becomes reactive.

The Diagnostic Audit formalizes signal capture and integration.

Weak Conversion Operations Even well designed grids fail if the organization cannot execute diligence and integration

.

Conversion operations must be in place before multi market expansion.

How Institutional Investors Use Diagnostic Driven Sourcing Systems Institutional investors use Diagnostic driven sourcing systems to reduce variance

.

These systems create predictable funnel flow and measurable performance indicators.

They also support:

• Cross market portfolio construction

• Structured bolt on strategies

• Implementation planning during early stage sourcing

• Reduced diligence cycle times

• More accurate valuation frameworks Mid market investors benefit the most because they operate with limited internal bandwidth.

The Diagnostic Audit provides leverage without requiring additional personnel.

CONCLUSIO

N

 Institutional sourcing grids are now a requirement for sophisticated multi market M&A operations.

They transform chaotic, intuition driven sourcing activity into a high precision system.

The Diagnostic Audit provides the diagnostic foundation.

It ensures that thesis clarity, market mapping, counterparty architecture, signal intelligence, outreach sequencing, and conversion operations are aligned and measurable.

Healthcare carve outs benefit disproportionately from this structure.

The complexity of the ecosystem, the sensitivity of operators, and the unique regulatory environment demand diagnostic rigor.

Organizations that adopt institutional sourcing grids outperform because they see the market as it actually is.

They identify targets earlier.

They convert more consistently.

They deploy capital more efficiently.

And they build an advantage that compounds across markets.

For teams preparing to scale their M&A funnels or expand across new markets, the Diagnostic Audit is the correct starting point.

It provides the architecture required to construct sourcing systems that endure. **Book a strategic consultation

* 

* Access is restricted to approved mandates.

Minimum target size: $5M+.`,"kostnadsstyrning-med-ai-agenter-for-mid-market-operators":`
Cost pressure in Nordic mid‑market companies is no longer a cyclical phenomenon, it is structural. Particularly in healthcare carve‑outs and asset‑light service portfolios that have been traded inside M&A processes for a decade.  

  

Finance leaders who still rely on static dashboards, quarterly vendor reviews or fragmented BI environments rarely achieve real cost compression. Modern cost governance requires automated signal detection, pattern‑level scrutiny and intervention loops that work continuously. This is where cost management AI, or kostnadsstyrning AI, becomes an operational necessity rather than a technology experiment.  

  

This article examines how AI agents reshape cost control in carve‑out situations and in under‑digitised mid‑market platforms. The tone is pragmatic, based on repeated exposure to real operational messiness. No romantic turnarounds, only what actually works when EBITDA targets have already been priced into the deal model.  

  

We also discuss how solutions such as OpenClaw, now active in Sweden and broader Nordics, generate measurable ROI. The focus is on repeatability, not hype.

  

---

## Why cost management has become structurally harder

Most operators underestimate the complexity of post‑COVID cost inflation. It is not a single driver. It is a stack of inefficiencies that compound over time.  

  

In healthcare carve‑outs, there is usually a legacy of partially integrated procurement, fragmented staffing models and shadow IT that management teams try to stabilise only after closing.  

  

In mid‑market industrial services the problem is slightly different. Costs sit inside narrow pockets that do not show up in traditional reporting. They move weekly. They cross vendor boundaries. They require active scanning.  

  

The old idea that a CFO can steer costs through scheduled reviews has collapsed. Cost drift has become continuous, so cost control must also be continuous.  

  

This is where AI agents enter the picture. They do not replace finance teams. They give teams the capacity they cannot buy or hire at scale.

  

---

## What AI agents do differently

AI agents for cost control are not standard analytics tools. Their advantage is not dashboards, but behaviour.  

  

A well‑designed AI agent does three things that manual processes simply cannot replicate.  

  

  
### Pattern detection in operational noise

In carve‑outs the first twelve months are dominated by noise. Vendor migrations, temporary systems, interim staffing. CFOs rarely receive clean data.  

  

An AI agent is not waiting for clean data. It works with imperfect, inconsistent feeds and still finds cost anomalies that humans miss.  

  

The agent reads purchasing patterns, staffing rosters, time reporting, logistics flows and reimbursement structures. It identifies patterns that do not fit historical baselines.  

  

This early detection allows management to intervene before financial drift becomes structural.

  

  
### Intervention loops rather than static reports

Traditional BI answers questions. AI agents ask new ones.  

  

When the agent detects an anomaly, it triggers an intervention loop. It can notify procurement, generate alternative vendor options, simulate cost exposure or prompt operations to adjust staffing levels.  

  

This behaviour is essential in healthcare where small deviations scale fast, for example overtime accumulation or outsourced services that grow without visibility.  

  

Agents reduce the cognitive load on finance teams. They push the right questions to the right person at the right moment.

  

  
### Continuous governance at scale

The real advantage is not intelligence. It is endurance.  

  

Cost control is not a quarterly project. It is a day‑to‑day discipline. AI agents do not lose focus. They scan, interpret, question and escalate continuously.  

  

For mid‑market operators that have plateaued at 5 to 10 percent annual improvements, this continuous discipline is what delivers incremental EBITDA that is otherwise unreachable.

  

---

## Where AI agents create the most value in mid‑market operations

The use cases vary across industries, but the highest ROI tends to cluster around similar situations.  

  

  
### 1. Procurement drift after carve‑outs

Post‑carve‑out procurement is rarely stable. Merged vendor lists, temporary contracts, multiple ERPs and rapid growth create leakage.  

  

AI agents monitor unit pricing, volume shifts and contract compliance. They highlight drift before it becomes embedded.  

  

For a healthcare provider with regionally negotiated contracts this can be the difference between stable margins and a year of missed targets.

  

  
### 2. Staffing inefficiencies in healthcare operations

Staffing is the most volatile cost category. It is also the hardest to manage manually.  

  

AI agents track scheduling accuracy, overtime patterns, vacancy fill timing and agency usage. They compare units against each other and detect outliers early.  

  

This is particularly relevant in Swedish healthcare where agency use has escalated. AI agents reduce dependency on temporary staff by identifying the structural drivers behind recurring shortages.

  

  
### 3. Hidden operating costs inside distributed service businesses

Industrial services and facility management often operate across multiple sites with decentralized decisions.  

  

AI agents unify cost inputs, detect anomalies that local teams cannot see and present consolidated patterns.  

  

This creates a level of cost visibility that most mid‑market operators have never had.

  

---

## How cost control AI agents reduce expenses

The mechanics behind cost reductions are simple. The value comes from consistency.  

  

Here is how a typical agent compresses costs.  

  

  
### Automated detection of cost leakage

Leakage is a universal problem. Off‑contract purchases. Unapproved vendors. Weekend staffing. Service volumes that drift above scope.  

  

Agents identify these patterns daily. Humans usually identify them quarterly. The time advantage is what creates savings.  

  

  
### Scenario modelling with real operational constraints

Most financial models are static. They assume linear behaviour and perfect responsiveness.  

  

AI agents simulate scenarios using real conditions, such as staff availability, supplier constraints or regulatory limits.  

  

This produces recommendations that can actually be implemented.

  

  
### Intelligent triage for finance and operations

One of the hidden benefits is triage.  

  

Without triage, teams drown in alerts. AI agents filter noise and escalate only the issues that truly affect margin.  

  

In a carve‑out environment this is critical. The first year is too chaotic for manual review of every deviation.  

  

  
### Accelerated root‑cause discovery

An anomaly is only useful if the root cause is found quickly.  

  

AI agents connect data between departments. A cost signal in procurement may originate in scheduling. A staffing spike may originate in an HR constraint.  

  

The agent finds these links faster than humans can.

  

---

## Measurable ROI: The OpenClaw Sweden model

Operators increasingly ask for tangible ROI rather than theoretical benefits. Solutions like OpenClaw, now used in Sweden, provide a structure that allows CFOs to quantify the impact.  

  

The ROI OpenClaw Sverige model is based on three measurable layers.  

  

  
### Layer 1: Direct cost reduction

These are hard savings from procurement, staffing and operational leakage. They can usually be documented within 90 days.  

  

Mid‑market averages range from 3 to 8 percent depending on data accessibility.

  

  
### Layer 2: Efficiency savings inside finance and operations

AI agents reduce manual analysis time, fragmented reporting and repetitive reconciliation tasks.  

  

This frees capacity inside finance teams that are already constrained.

  

  
### Layer 3: Strategic value creation

In M&A processes buyers value visibility. They pay more for platforms with predictable cost control and operational discipline.  

  

AI‑enabled cost governance becomes a valuation lever, not just an operational tool.

  

---

## Implementation lessons learned in real environments

Mid‑market operators often underestimate the organisational effort required. AI agents are lightweight on technology, but they require discipline.  

  

Below are lessons drawn from repeated implementations inside carve‑outs and multi‑site businesses.  

  

  
### Clean data is nice, but not required

Many CFOs delay adoption because they believe the data is too messy.  

  

In reality, the agent does not require perfect data. It only requires consistent patterns. The agent extracts structure from operational noise.  

  

This makes it suitable for carve‑outs where data integrity is temporarily degraded.

  

  
### Finance cannot own the process alone

AI agents touch procurement, HR, operations and local site leaders.  

  

A cross‑functional operating model is required. Without it the agent will produce insights that no one executes on.

  

  
### Start narrow, scale fast

The most effective deployments start with one cost category.  

  

Procurement or staffing usually delivers faster value than a full enterprise rollout. Once the team sees tangible savings, expansion is straightforward.

  

  
### Transparency reduces resistance

Staff often fear AI tools because they assume automation reduces headcount.  

  

In practice, AI agents remove administrative load, not operational roles. Clear communication prevents resistance during rollout.

  

---

## Strategic implications for investors and operators

Cost control AI is becoming a differentiator in both operational performance and M&A positioning.  

  

For investors the implications are direct.  

  

  
### More predictable EBITDA post‑acquisition

Carve‑outs with AI‑enabled cost governance avoid the unpredictable margin drift that typically destroys the year one investment case.  

  

  
### Faster integration into platform models

AI agents standardise cost governance across acquired units. This accelerates integration and eliminates variability.  

  

  
### Higher valuation at exit

Buyers discount platforms with poor cost visibility. Operators that maintain continuous cost control command higher multiples.  

  

This is not theory. It is the pattern observed in multiple mid‑market exits over the past years.

  

---

## Why CFOs are moving toward AI agents now

The timing is not driven by technology hype. It is driven by fatigue.  

  

CFOs are tired of firefighting. They want a system that handles detection and escalation while they handle governance and decision making.  

  

AI agents provide this structure.  

  

Costs have become dynamic. Cost control must be dynamic.  

  

For Swedish operators operating under cost pressure from both regulation and labour markets, the shift is accelerating.

  

---

## How Pathmaker engages in AI‑driven cost governance

Pathmaker works with mid‑market operators that need practical outcomes, not theory.  

  

Our involvement typically includes:  

  
• Diagnostic mapping of cost categories.  

• Design of AI agent behaviour tailored to the operational model.  

• Deployment on top of existing systems without replacement.  

• Governance design so that insights translate into action.  

  

We use solutions such as OpenClaw where appropriate, with clear ROI structures and implementation plans aligned with Nordic operating realities.

  

The objective is simple. Enable CFOs to regain control in organisations where cost drivers have multiplied beyond manual oversight.

  

---

## Final thoughts

Cost pressure is not easing. Competition is not softening. Investors are not lowering expectations.  

  

AI agents are not a silver bullet, but they create the operational discipline that mid‑market companies can no longer achieve manually.  

  

The operators that adopt cost management AI early will shape the valuation landscape in the next cycle.  

  

The ones that delay will face a structural disadvantage.  

  

Book a strategic consultation`,"openclaw-vs-chatgpt-vs-traditional-ai-tools":`## The Difference Between AI That Answers and AI That Acts

The Swedish mid‑market has always been a battlefield.  

Margins get squeezed.  

Carve‑out timelines shrink.  

Regulators never sleep.  

In this environment, AI is not a toy. It is a lever. A multiplier. Sometimes the only way a deal or a carve‑out closes on time.  

This article breaks down the real differences between OpenClaw, ChatGPT, and traditional AI tools. It focuses on what matters to companies in M&A, healthcare, and operational carve‑outs. No hype. No romanticized turnarounds. Only the practical distinctions between reactive AI that answers and proactive AI that executes.  

The goal is simple. Help you choose the right tool at the right maturity level, and avoid the typical mistakes that slow operators down.  


  


## Why This Comparison Matters in 2026

AI vendors all claim to be autonomous.  
Most are not.  

In mid‑market transactions and healthcare operations, autonomy is not a theoretical preference. It affects risk, speed, resourcing, and data security.  

In Sweden, where compliance requirements are strict and labor costs are high, the gap between AI that answers and AI that acts has become a structural advantage for companies that implement the right tools early.  


  



Below is the pragmatic definition used by operators who have actually deployed these systems.

  

## OpenClaw: Proactive Autonomous Execution

OpenClaw is built to act, not only respond.  
It connects to systems, executes workflows, runs processes, and takes responsibility for entire operational sequences with supervision.  

The design philosophy is simple. Let AI handle the work streams that overwhelm humans. Reports. Data pulls. Onboarding flows. Vendor communication. Healthcare documentation routing. Integration syncs. Carve‑out readiness packs.  

OpenClaw does not just generate text.  
It does the work.  


  


## ChatGPT: Reactive High‑Level Intelligence

ChatGPT is exceptional at reasoning, analysis, and creative problem solving.  
It answers questions.  
It produces summaries, frameworks, scripts, briefs, and checklists.  

But by default, ChatGPT stops after the answer.  
It does not execute the workflow unless wrapped inside an external automation layer.  

In Swedish mid‑market organisations with lean teams, this is useful but not transformative on its own.  


  


## Traditional AI Tools: Narrow, Static, Operationally Limited

These include the classic “AI features” embedded in older enterprise platforms.  
Invoice capture.  
Simple prediction models.  
Rudimentary chat assistants.  

They are stable, but they are also limited.  
They cannot adjust to carve‑out complexity or new deal structures.  
They cannot manage end‑to‑end workflows.  
They cannot adapt to real-world operational shifts.  

They are useful, but they are not strategic.  


  


## The Core Distinction

Reactive AI answers.  
Proactive AI acts.  

This distinction is becoming the dividing line between high productivity operators and teams that feel like AI has become “one more tool to manage”.  

Below is the functional difference.  


  


## Reactive AI

Reactive AI includes ChatGPT and most LLM-based assistants.  
They wait for a prompt.  
They deliver an output.  
Then they stop.  

Examples in real mid‑market workflows:

• “Summarize this data room section.”  
• “Draft the communication plan for the carve‑out.”  
• “Create a training script for the new EMR process.”  

All useful, but all require a human to integrate the output back into the process.  


  


## Proactive AI

Proactive AI, such as OpenClaw, initiates work, executes steps, and closes loops.  

Examples:

• Pulls new vendor contracts from a shared drive each morning, extracts key fields, and updates the deal tracker.  
• Monitors email for compliance requests and automatically routes documents to the correct healthcare unit.  
• Identifies missing carve‑out data and sends automated requests to responsible stakeholders.  
• Runs onboarding sequences for newly acquired clinics, documenting every step for auditors.  

The difference is not intellectual.  
It is operational.  
Proactive AI reduces the number of human handoffs.  
Reactive AI does not.  


  


## What “Acting” Actually Means in 2026

Many platforms claim autonomy, but in practice, they only provide long prompt chains.  
Autonomy requires three things:

• System-level context.  
• Trigger-based execution.  
• Ability to modify data or run processes.  

OpenClaw is designed for direct execution inside workflows that involve sensitive operations, regulated data, and cross-system dependencies.  

Examples from real Swedish deployments:

• Segmenting healthcare appointment backlogs and writing updated schedules directly into the system of record.  
• Preparing separation playbooks during a carve‑out and distributing tasks automatically to BU leaders.  
• Matching invoices to purchase orders and pushing them through approval flows without manual review.  

Execution is the differentiator.  
Not text generation.  


  


## Why Swedish Companies Care

Swedish companies in healthcare, finance, industrials, and M&A treat privacy as a structural requirement, not a marketing feature.  

The differences across the three tools are not subtle.  


  


## OpenClaw Privacy Profile

• Designed to run with strict data residency.  
• Facilitates internal enterprise-grade deployments.  
• Built for regulated environments such as Swedish healthcare and social services.  
• No external training on customer data.  

For carve‑outs, this matters.  
For clinics and hospital groups, it is non-negotiable.  


  


## ChatGPT Privacy Profile

• Secure, but not deployment-flexible for the most sensitive data.  
• Enterprise tiers offer stronger isolation, still many Swedish operators prefer on-prem or hybrid.  
• Not ideal for PHI, patient flows, or acquisition clean rooms.  

ChatGPT is excellent for strategy.  
Less ideal for regulated operational data.  


  


## Traditional AI Tools Privacy Profile

• Usually safe within their own limited domain.  
• Not built for flexible, cross-system workflows.  
• Lack the adaptability required for complex transactions or healthcare routing.  

Stable, but narrow.  


  


## The Real Cost Structure Operators Care About

Cost discussions in 2026 are no longer about subscription price.  
They are about cost per executed workflow.  
Cost per eliminated bottleneck.  
Cost per avoided hiring round.  

Below is the practical comparison.  


  


## OpenClaw Cost Structure

• Higher upfront cost due to integration and autonomy features.  
• Lower long-term cost when replacing manual workflows at scale.  
• Strongest ROI when used in carve-outs, healthcare operations, and multi-entity environments.  

Teams that need actual execution see fast payback.  


  


## ChatGPT Cost Structure

• Low entry cost.  
• Zero system integration unless built manually.  
• High value for knowledge work, low value for operational transformation.  

Excellent for analysts, PMOs, and communication teams.  
Not a workflow engine.  


  


## Traditional AI Tools Cost Structure

• Bundled into legacy systems.  
• Cheap, stable, but limited.  
• Often cause hidden costs by forcing teams to build manual bridges between systems.  

Economical for small tasks, expensive for complex ones.  


  


## The Practical Guide for Swedish Mid‑Market Operators

Below is the decisional logic companies use in 2026.  


  


## Use OpenClaw When

• You need autonomous execution.  
• You have multi-system workflows that must run without human supervision.  
• You are integrating new clinics or units after an acquisition.  
• You need predictable, auditable process flows that meet Swedish regulatory standards.  
• You want AI to reduce headcount pressure, not just improve knowledge work.  

OpenClaw is operational AI.  


  


## Use ChatGPT When

• You need advanced reasoning or analysis.  
• You want rapid drafting, synthesis, or scenario planning.  
• You need strategic support for deals, carve‑outs, or change programs.  
• You want a flexible cognitive tool, not an agent running your processes.  

ChatGPT is strategic AI.  


  


## Use Traditional AI Tools When

• Your workflow is narrow and stable.  
• Your systems already include built‑in automation.  
• You do not need AI to cross boundaries or adapt to new processes.  

Traditional AI is functional but not transformative.  


  



Companies that succeed in 2026 use all three tiers.  
Not as rivals, but as layers.  

The pattern is clear:

• ChatGPT handles thinking.  
• OpenClaw handles doing.  
• Traditional AI handles static tasks inside legacy systems.  

This creates a workflow stack where humans focus on judgment, not clicking through administrative noise.  


  



Three trends in Sweden are widening the gap between reactive and proactive AI.  


  


## 1. Rising regulatory pressure

Healthcare providers and acquiring groups face continuous documentation demands.  
Only proactive AI can keep up.  


  


## 2. Aggressive deal timelines

Carve‑outs require rapid separation and clean handoffs.  
Reactive AI cannot automate the operational layers.  


  


## 3. Labor scarcity

Regions struggle to recruit.  
Private providers face cost ceilings.  
AI that acts, not answers, becomes essential.  


  


## OpenClaw vs ChatGPT vs Traditional AI

OpenClaw is for execution.  
ChatGPT is for intelligence.  
Traditional AI is for stability.  

Swedish operators who understand these distinctions avoid expensive dead ends.  
They accelerate integrations.  
They stabilise clinics.  
They close carve‑outs without burnout cycles.  


  


## AI That Answers Is Helpful  
## AI That Acts Is Transformational

The companies that win in 2026 are not the ones with the best prompts.  
They are the ones with the best operational stack.  
OpenClaw for doing.  
ChatGPT for thinking.  
Traditional AI for stable tasks.  

Choosing the right layer at the right time is now a board-level decision.  


  


Book a strategic consultation`,"hur-du-driver-ett-enmansföretag-med-ai-agenter-2026":`A Swedish guide for solo entrepreneurs and consultants

  
  
Running an enmansföretag in 2026 looks nothing like it did five years ago.  

  
  
The entrepreneurs who thrive now are the ones who treat AI agents as a core workforce, not as a gadget.  

  
  
This guide breaks down how Swedish solo consultants and founders operationalize AI to manage admin, sales, customer delivery, research, and financial discipline.  

  
  
The tone is pragmatic and battle hardened, shaped by lessons from mid market M and A and healthcare carve outs where efficiency is everything and sentimentality kills deals.  

  
  
No romanticized turnarounds. Only what works.  

  
  
SEO keywords integrated: enmansföretag AI, AI egenföretagare Sverige, automatisera enskild firma, OpenClaw solopreneur, effektivisera företag AI.

---

## H1: The 2026 Reality for Swedish Solopreneurs

  
  
If you run an enskild firma or a one person AB today, you are competing against people who operate with the equivalent of a five to ten person digital back office.  

  
  
Not because they hire.  
Because they deploy AI agents that run 24 or 7 with zero drift.  

  
  
Sweden has become one of the most aggressive adopters of operational AI for professional services. Stockholm consultants in management, finance, HR and IT routinely replace 60 to 80 percent of their non billable workload with autonomous systems. Gothenburg creatives automate proposal writing and client revisions. Malmö e commerce solopreneurs run their entire logistics forecasting and ad optimization using agent clusters.  

  
  
If your competitors use AI as a workforce multiplier and you do not, you will feel the pressure in your margins.  

  
  
This guide shows how to integrate agents into every pillar of your business so you operate like a lean carve out, tightly controlled and ruthlessly optimized.

---

## H2: What AI Agents Actually Do in a One Person Business

  
  
Forget the hype. AI agents succeed only where tasks are structured, repeatable, and measurable.  

  
  
In 2026 the most valuable categories for an enmansföretag are:

  
- Administration and compliance  
- Sales and outbound prospecting  
- Customer service and delivery  
- Research and competitive intelligence  
- Financial discipline and scenario planning  

  
  
These are not assistants.  
They are workflow engines.  
They execute plays.  

  
  
A typical Swedish solo consultant uses between four and twelve agents, often anchored on platforms like OpenClaw solopreneur and tailored with industry specific SOPs.

---

## H2: Administration and Compliance Automation  
How Swedish solopreneurs eliminate the administrative drag

  
  
Admin is the silent killer of small businesses.  
Skatteverket deadlines, invoicing, receipt management, GDPR documentation, and constant scheduling.  

  
  
An AI driven back office can remove almost all of it.

---

### H3: Concrete Swedish Workflow Examples

  
  
**1. Invoicing and reconciliation**  
Your AI agent monitors your time tracking, creates invoices in Fortnox or Bokio, sends them, reconciles payments, and flags anomalies.  
A Malmö consultant reduced invoicing time from two hours per week to six minutes per month.  

  
  
**2. VAT and employer declarations**  
Agents prepare your monthly or quarterly momsrapport and draft your employer declaration even if you subcontract work.  
You verify. You sign. You move on.  

  
  
**3. Appointment and calendar control**  
AI screens incoming meeting requests, checks against your focus blocks, evaluates priority, and proposes slots.  
No more time leakage.  

  
  
**4. Document drafting for Swedish compliance**  
GDPR registers.  
Contract templates.  
Standardized engagement letters.  
Agents generate the documents using your firm’s tone and Sweden specific legal phrasing.  

  
  
Admin becomes a solved problem.  
Your cognitive load drops to near zero.

---

## H2: Sales and Outbound Prospecting  
The agent driven pipeline machine

  
  
Solo entrepreneurs rarely maintain consistent outbound activity.  
Pipeline volatility becomes the existential threat.  

  
  
AI agents now run structured, high discipline sales operations that outperform human only processes.

---

### H3: How Swedish solopreneurs deploy AI in sales

  
  
**1. Account mapping in the Nordic region**  
Agents scan Bolagsverket, Retriever, LinkedIn, job postings, M and A announcements, and Swedish procurement boards.  
They build segmented lists with revenue range, ownership structure, and current strategic pressures.  

  
  
**2. Personalized outreach at volume**  
Agents produce messaging that fits Swedish business etiquette, which is direct, concise, and non inflated.  
This respects local communication culture and outperforms generic automation tools.  

  
  
**3. Proposal and offer creation**  
You define a structure.  
The agent creates draft proposals in minutes, including scope, deliverables, timelines, GDPR clauses, and optional upsell modules.  

  
  
**4. CRM upkeep without touching a CRM**  
Agents update HubSpot or Pipedrive autonomously.  
They tag conversations, track deal stages, and remind you when personal involvement is needed.  

  
  
A Gothenburg mid market M and A advisor now runs an outbound system that sends 300 highly targeted messages per month and books 12 to 18 qualified meetings consistently.  
Before agents, the same advisor booked 3 to 5 meetings per month.  

  
  
This is the efficiency curve that decides who survives.

---

## H2: Customer Service and Delivery  
How agents maintain quality without emotional fatigue

  
  
Client delivery is where most solopreneurs hit their ceiling.  
Past a certain volume, quality drops or burnout hits.  

  
  
Agents absorb repetitive client communication and create structured output that keeps your delivery tight.

---

### H3: Sweden specific examples

  
  
**1. Managed customer service for digital products**  
Agents answer emails, chat queries, refund requests, and onboarding questions in Swedish and English.  
Tone calibrated to Swedish expectations, which favor clarity over charm.  

  
  
**2. Research heavy consulting work**  
Healthcare consultants performing regional analyses use AI agents to process tender documents, staffing ratios, clinic performance metrics, and patient flow data.  
The agent summarizes and flags anomalies.  
You interpret and deliver insight.  

  
  
**3. Creative production workflows**  
If you produce video or design, agents prepare scripts, tag footage, manage asset libraries, and generate alternative concepts so you maintain velocity without drowning in prep work.  

  
  
**4. Delivery support for mid market M and A work**  
Agents draft information request lists, prepare diligence summaries, track integration tasks, and benchmark comparable deals in Sweden, Norway, and Denmark.  
You use your judgment. The agent handles the grunt work.  

  
  
This mirrors how carve out teams run.  
Lean.  
Precise.  
Outcome focused.

---

## H2: Research and Competitive Intelligence  
The intelligence stack for the one person firm

  
  
Information advantage is now the primary differentiator in knowledge driven businesses.  

  
  
AI agents collect, filter, and summarize everything that affects your space.

---

### H3: Practical use cases

  
  
**1. Competitor tracking**  
Your agent monitors competitors' websites, job postings, price changes, and leadership shifts.  
If a Göteborg competitor hires a Head of Public Sector Sales, your agent alerts you and provides likely implications.  

  
  
**2. Industry regulation scanning**  
For healthcare, finance, HR, or energy consultants, agents track EU and Swedish regulatory updates, summarize changes, and propose how they affect your client base.  
You stay ahead without spending hours reading PDFs.  

  
  
**3. Client specific intelligence**  
Before every meeting, the agent compiles a briefing summarizing financial changes, recent press mentions, procurement activity, and internal org shifts.  
You walk in informed.  
The client notices.  

  
  
**4. Opportunity scanning for consultants**  
Agents track Swedish public tenders on Visma Opic, Mercell, and SKR.  
They flag the ones that match your capabilities.  

  
  
This intelligence gives a solo consultant the depth of a five person research team.

---

## H2: Financial Discipline and Operational Control  
The CFO agent for your enskild firma or AB

  
  
Most solopreneurs lack structured financial dashboards.  
Cash flow swings become stressful.  
Tax planning becomes reactive.  

  
  
AI agents bring discipline similar to carve out operations where financial control decides deal value.

---

### H3: Example financial systems

  
  
**1. Cash flow forecasting**  
Agents pull data from Stripe, Fortnox, bank feeds, and invoice pipelines.  
They run twelve month forecasts.  
They highlight risk months.  
They propose correction actions.  

  
  
**2. Tax optimization for Swedish rules**  
Agents simulate scenarios for dividends, salary versus utdelning, pension contributions, and deferred deductions.  
They produce a recommendation document with tax implications.  

  
  
**3. Expense audits**  
Agents categorize expenses, detect duplicates, identify price creep, and propose where to renegotiate.  

  
  
**4. Pricing model refinement**  
Agents analyze win rates, client profitability, time spent per scope, and industry benchmarks.  
They propose price adjustments that maintain margin discipline.  

  
  
You operate like a CFO backed company rather than a freelancer guessing from month to month.

---

## H2: The Tech Stack of a 2026 AI Driven Enmansföretag

  
  
You do not need a complex stack.  
You need a reliable core.

  
  
Typical setup for a Swedish solopreneur using AI effectively:

  
- OpenClaw solopreneur for agent orchestration  
- Zapier or Make for systems connectivity  
- Fortnox or Bokio for accounting  
- HubSpot or Pipedrive for CRM  
- Google Workspace or Microsoft 365 for documents  
- A data hygiene agent to maintain structure  

  
  
The goal is to avoid bloat.  
A lean stack gives you speed and control.

---

## H2: How to Implement AI Without Losing the Plot

  
  
The danger is over automation.  
The second danger is chaotic experimentation.  

  
  
Use a carve out style approach.  
Define scope.  
Define SOPs.  
Deploy in controlled increments.

---

### H3: The four stage rollout model

  
  
**Stage 1: Stabilize the back office**  
Admin. Invoicing. Scheduling. Compliance.  
This creates the operational floor.  

  
  
**Stage 2: Build the sales engine**  
Outbound. Follow ups. Proposal generation.  
Your revenue stabilizes.  

  
  
**Stage 3: Automate delivery support**  
Research. Drafting. Client communication.  
You increase throughput without sacrificing quality.  

  
  
**Stage 4: Install financial and strategic agents**  
Forecasts. Pricing. Scenario planning.  
You run your business with discipline.  

  
  
This structure ensures you control the operation instead of drowning in tools.

---

## H2: The Strategic Advantage  
Why AI agents matter more in Sweden than in most markets

  
  
Sweden’s consulting and services landscape is dense and competitive.  
Margins tighten quickly.  
Talent is expensive.  
Clients expect high quality at fixed rates.  

  
  
AI driven solopreneurs win because they can:

  
- Deliver faster than boutique firms  
- Operate with near zero overhead  
- Maintain reliability without expanding staff  
- Execute research and analysis comparable to mid size teams  
- Scale revenue without scaling stress  

  
  
This is not hype.  
It is operational optimization.  
The same discipline used in M and A integration and healthcare carve outs now applies to one person firms.

---

## H2: The Future  
Where AI driven enmansföretag are heading by 2028

  
  
Expect deeper integrations with Swedish authorities.  
Bookkeeping will move toward real time with agent to API flows.  
AI will handle 80 to 90 percent of all outbound B2B communication.  
Solo consultants will routinely run portfolios of micro products.  
Competition will intensify.  

  
  
The winners will be those who build the discipline early.

---

## H1: Ready to operationalize AI in your enmansföretag?  
Book a strategic consultation`,"what-is-an-ai-agent-a-simple-explanation-for-non-technical-leaders":`*Designed for executives who operate in real markets, with real deadlines, and no patience for jargon.*

  
  
  
## Why This Matters Now

If you work in mid‑market M&A or healthcare carve‑outs, you already know the pressure.  

Margins are thinner. Compliance workloads grow faster than headcount. Integration plans die because teams drown in operational noise.  

AI agents are entering this battlefield. Not as magic. Not as hype. As practical digital workers that can quietly take over tasks that burn hours of analyst time every week.  

This article explains what an AI agent actually is, in plain English, with zero technical assumptions.  

  
  
  

At the simplest level, an AI agent is a digital assistant that does tasks for you without needing step by step instructions for every click.  

It does not only chat.  
It acts.  

You give it a goal.  
It figures out the steps.  
It executes the steps.  
It reports back.  

Think of it as hiring a junior analyst who can read, write, search, decide, and learn from context. The difference is that this analyst works instantly, does not get tired, and costs less than a cup of coffee per week.  

  
  
  

Most executives have already used chatbots. They answer questions. They write emails. They summarize documents.  

Chatbots are reactive.  
They sit still until you ask something.  
They only respond.  

AI agents are proactive.  
They keep working after your prompt.  
They can handle multi step tasks.  
They can navigate tools like email, spreadsheets, CRMs, data rooms, or EMRs depending on permissions.  

Where a chatbot gives you information, an agent completes the workflow.  

  
  
  
### H3: A Simple Example

Chatbot behavior  
"Summarize this 50 page Quality of Earnings report."

AI agent behavior  
"Monitor new documents in the data room every morning, summarize anything relevant, and send me a concise digest at 07:00. Flag anything related to payer mix variance or physician comp exposures that might affect valuation."

One responds.  
One executes.  

  
  
  

Executives often imagine AI autonomy as sci fi. That is not helpful. The truth is far more practical.  

An AI agent works through four predictable steps.  

  
  
  
### H3: Step 1. You give it a goal

Examples  
"Prepare a weekly KPI dashboard from the carve out’s operational data."  
"Track payer reimbursement changes and alert me when thresholds move."  
"Clean up our CIM drafts and check for inconsistencies."

You set the direction. That is it.  

  
  
  
### H3: Step 2. The agent breaks the goal into tasks

This is where the intelligence appears.  
You do not need to list every step.  
The agent decomposes the work on its own.  

For example, if you say  
"Prepare a weekly integration readiness brief,"  
the agent may break it into  
collect data, compare to last week, write summary, highlight risks, update the deck.  

No manual playbook needed.  

  
  
  
### H3: Step 3. It uses tools to execute

Agents can interact with systems the way a human junior analyst would. They can  
log into platforms,  
search,  
compare files,  
update spreadsheets,  
write drafts,  
send reports.  

In a healthcare carve out this could include  
scrubbing provider rosters,  
checking coding anomalies,  
tracking prior auth delays,  
flagging documentation risks before audits.  

This is not future tech. This is already operating in mid‑market organizations today.  

  
  
  
### H3: Step 4. It evaluates and adjusts

This is the autonomy.  
The agent looks at what it just did, checks if it matches the goal, and adjusts.  

It does not wait for your prompt.  
It keeps refining until the result meets the objective.  

This is how you turn repetitive operational chaos into stable automated processes.  

  
  
  

Imagine hiring an entry level analyst.  
You teach them the goal.  
You give them access to systems.  
You review their output.  

That is exactly what working with an AI agent feels like.  

Except  
they never forget instructions,  
they never miss deadlines,  
they never need onboarding,  
and they cost less than 1 percent of a full time employee.  

In healthcare carve outs this becomes a strategic multiplier because many teams run thin during transition service agreements and integration windows.  

AI agents take the tedious workflows so your human operators can handle the high risk decisions.  

  
  
  

AI agents are not miracle workers. They will not rebuild a broken P&L or fix cultural dysfunction. They are not substitutes for leadership.  

What they deliver is pragmatic operational leverage.  

Below are the outcomes organizations consistently see.  

  
  
  
## H2: Expect 1. Faster due diligence grunt work

In mid‑market M&A you rarely get clean data.  

Agents can  
organize data rooms,  
flag missing files,  
extract key numbers,  
spot deltas week to week,  
help analysts focus on valuation not file hunting.  

This shortens diligence cycles without adding headcount.  

  
  
  
## H2: Expect 2. Clean integration monitoring without chaos

During carve outs, integration reporting collapses because teams are too busy fixing fires.  

Agents can create daily integration briefs, compare progress to plan, and surface operational bottlenecks before they hit revenue.  

They free your people to solve problems instead of writing summaries.  

  
  
  
## H2: Expect 3. Smoother compliance and documentation workloads

Healthcare eats time. Audits, coding, payer changes, provider credentialing.  

Agents can  
monitor updates,  
track deadlines,  
verify documentation quality,  
alert you before risk hits reimbursement.  

This is real value because compliance misses become real dollar losses.  

  
  
  
## H2: Expect 4. Reduced operational noise for leaders

Most executives do not need more data. They need cleaner inputs.  

Agents package the right information, at the right time, in the right format.  

Your email gets lighter.  
Your meetings get shorter.  
Your team operates with more clarity.  

  
  
  

A realistic view matters.  

Below are limits you should assume.  

  
  
  
## H2: Limit 1. It cannot override broken strategy

If your integration plan is flawed, the agent cannot rescue it.  
It will simply produce organized output for a doomed initiative.  

  
  
  
## H2: Limit 2. It cannot negotiate, lead, or inspire

Agents are operational labor, not management. They help leaders lead by clearing the noise.  

  
  
  
## H2: Limit 3. It cannot fully replace human judgment

Especially in healthcare, edge cases matter. Coding exceptions, legal nuance, clinical workflows.  
Agents support. Humans decide.  

  
  
  

The safest path is small, contained, and measurable.  

Below is the onboarding approach used by organizations that avoid AI chaos.  

  
  
  
## H2: Step 1. Pick one painful workflow

Examples  
Weekly integration dashboards  
Document clean up  
Provider roster changes  
Credentialing status checks  
KPI compilation  

One process.  
Low risk.  
Clear success criteria.  

  
  
  
## H2: Step 2. Deploy the agent in parallel

Let the agent run the workflow while your team runs it manually.  

Compare results.  
Tighten instructions.  
Verify quality.  

This eliminates operational risk.  

  
  
  
## H2: Step 3. Gradually expand scope

Once reliability is proven, expand to adjacent tasks.  

Within weeks, you typically get  
faster cycles,  
cleaner reporting,  
less manual swivel chair work.  

Within months, you typically get structural time savings equal to one to three FTEs.  

  
  
  

Unlike large systems, mid‑market operators lack unlimited administrative armies.  
Unlike tech companies, they cannot absorb inefficiencies by throwing developers at problems.  

They need leverage that does not require reengineering the organization.  

This is exactly the gap AI agents fill.  

They operate quietly behind the scenes.  
They do not demand cultural transformation.  
They simply take the repetitive operations that slow everything down.  

This is why private equity operating partners are adopting them first. Because they enable tighter execution during the messy months when integrations either stabilize or implode.  

  
  
  

An AI agent is not a gadget. It is a practical digital worker that handles the repetitive workloads that drain time from real decisions.  

For non technical leaders in M&A and healthcare carve outs, this means more clarity, less operational noise, and faster execution with the resources you already have.  

If you treat AI agents like junior analysts instead of sci fi, you get real results.  

If you treat them like magic, you get disappointment.  

Start small.  
Apply pressure where it hurts.  
Scale what works.  

  
  
  
**Book a strategic consultation**`,"comparison-of-openclaw-and-other-ai-platforms":`
  
  
  
AI adoption in Sweden has shifted from experimentation to operational necessity. Mid‑market companies, particularly those navigating healthcare carve‑outs or preparing for M&A, now evaluate AI platforms with the same discipline they apply to financial reporting systems. The question is no longer whether AI can enhance decision making. The question is which architecture offers the least friction, the most reliable output, and the clearest path to risk‑controlled automation.

  
  
  
This article provides a grounded comparison of OpenClaw vs other platforms. It focuses on AI agent comparison for organizations that prioritize measurable outcomes, not hype. It also evaluates strategic fit for the segment often overlooked by global vendors: mid‑market operators that require precision, not spectacle. The aim is to clarify which solution best supports high‑stakes workflows in what many now call the best AI Sweden ecosystem.

  
  
  
## How the Swedish Mid‑Market Actually Uses AI

  
  
  
While global reports often highlight early‑stage innovation, the Swedish mid‑market operates under different constraints. Budgets are leaner, timelines are shorter, and leadership teams routinely juggle restructuring, aggressive compliance demands, and clinical resource shortages. AI initiatives are expected to function quickly, integrate with legacy systems, and reduce risk rather than introduce new failure points.

  
  
  
In healthcare carve‑outs, leaders need agents that can stabilize data flows, reconcile fragmented patient pathways, and support due diligence without adding operational overhead. In M&A scenarios, buyers demand clarity on process ownership and asset readiness. AI that behaves like a black box creates uncertainty. AI that is auditable and aligned with real‑world workflows becomes a strategic advantage.

  
  
  
Within this context, the comparison between OpenClaw vs other platforms becomes less about abstract capability and more about operational survivability.

  
  
  
## Why AI Agents Matter More Than Models

  
  
  
Many AI platforms focus on raw model power. While model selection matters, it has become a commodity. The real differentiator lies in how the platform structures work. AI agents combine reasoning, data access, and task execution. In mid‑market operations, especially healthcare, these agents must handle repetitive processes with low error tolerance.

  
  
  
A true AI operational platform does four things:

  
  
  
1. Integrates without heavy engineering  
2. Executes multi‑step workflows reliably  
3. Adapts to regulatory environments  
4. Provides transparent decision logs for audits and M&A due diligence

  
  
  
Platforms that emphasize creativity or general intelligence tend to fail when exposed to the realities of billing reconciliation, EMR data extraction, or clinical scheduling optimization.

  
  
  
OpenClaw has positioned itself as a structured agent platform rather than a creativity tool. That distinction is central to this comparison.

  
  
  
## OpenClaw vs Other Platforms: The Core Differences

  
  
  
### Architecture and Control

  
  
  
OpenClaw prioritizes deterministic behavior. While it uses large models, its framework forces agents into controlled execution paths. This reduces variance, which matters when dealing with compliance‑sensitive environments such as eldercare, rehabilitation services, or outsourced diagnostics.

  
  
  
Most other AI platforms still lean heavily on generative autonomy. This can be powerful in research or marketing, but becomes fragile in operational contexts. Autonomy without guardrails leads to unpredictable task outcomes, which is unacceptable in M&A data preparation or healthcare carve‑outs.

  
  
  
### Integration Philosophy

  
  
  
OpenClaw uses a connector‑first approach. The platform assumes the customer has messy systems and inconsistent data. Agents are designed to stabilize this environment rather than replace it. The benefit is rapid deployment without needing a multi‑year transformation roadmap.

  
  
  
Other platforms often depend on clean data lakes, unified endpoints, or enterprise‑scale IT teams. This locks out most mid‑market entities. The gap between demonstration performance and real operational value grows quickly.

  
  
  
### Cost Structure and Scalability

  
  
  
OpenClaw’s cost model favors organizations that scale task automation rather than token volume. This reflects the practical reality that most companies pay for outcomes, not abstract model access.

  
  
  
Meanwhile, many competing platforms base pricing on consumption. This often leads to cost volatility. In M&A environments where integration plans are scrutinized line by line, unpredictable AI spend is a disadvantage.

  
  
  
### The AI Agent Comparison Lens

  
  
  
When evaluating OpenClaw vs other platforms, the AI agent comparison becomes clearer if framed around operational reliability. Agents in OpenClaw tend to produce consistent outputs with defined execution boundaries. Other platforms, especially those optimized for creativity, cannot guarantee this level of predictability.

  
  
  
## Use Cases that Reveal the Differences

  
  
  
### Healthcare Carve‑Out Stabilization

  
  
  
Healthcare carve‑outs often expose hidden weaknesses in data governance. Systems that once functioned under a parent organization suddenly need to operate independently. Billing workflows break. Reporting pipelines stall. Contracted providers lose visibility into patient movements.

  
  
  
OpenClaw agents support carve‑outs by:

  
  
  
- Reconciling data from legacy systems  
- Automating documentation transitions  
- Flagging inconsistencies for human review  
- Providing auditable logs for regulatory scrutiny

  
  
  
Other AI platforms may offer broad automation tools. However, their lack of structured execution introduces risk when workflows contain regulated data or clinical dependencies.

  
  
  
### Mid‑Market M&A Operational Diligence

  
  
  
Buyers evaluate more than financial health. They assess process maturity, data stability, and scalability. AI platforms that behave unpredictably can raise red flags for integration teams.

  
  
  
OpenClaw assists by:

  
  
  
- Standardizing routine reporting  
- Mapping operational workflows  
- Automating repetitive diligence requests  
- Producing timeline‑relevant summaries without altering source data

  
  
  
Other platforms typically require additional layers of monitoring to achieve similar reliability. In fast‑paced deals, this is rarely feasible.

  
  
  
### Ongoing Operational Optimization

  
  
  
Mid‑market companies often operate with limited management bandwidth. AI must reduce pressure, not create new oversight burdens.

  
  
  
OpenClaw agents are designed for sustained operations with low maintenance. They execute daily, weekly, or monthly workflows with minimal drift. Their logs provide clarity for internal auditors or board reporting.

  
  
  
Other platforms tend to require more recalibration. Their value peaks during exploratory phases but declines when routine execution is required.

  
  
  
## Strategic Fit in the Swedish Market

  
  
  
Sweden’s regulatory environment forces AI platforms to prove control, traceability, and security. In this ecosystem, the platforms that prioritize creativity or broad autonomy struggle to gain traction in operational settings.

  
  
  
OpenClaw fits the Swedish market for several reasons:

  
  
  
- It aligns well with the country’s risk posture  
- It suits mid‑market IT capacities  
- It supports healthcare workflows without introducing compliance exposure  
- It provides predictable operating costs  
- It respects data sovereignty requirements

  
  
  
In contrast, many global platforms aim for scale first and operational stability second. This mismatch becomes most visible during carve‑outs, restructurings, and integrations.

  
  
  
## The Decision Framework: How to Choose the Right AI Platform

  
  
  
Mid‑market operators should evaluate AI platforms using criteria closer to procurement than to innovation theory. The following decision framework reflects lessons from over a decade of carve‑outs and operational stabilizations.

  
  
  
### 1. Evaluate workflow dependency

  
  
  
If your workflows require repeatability and low variance, OpenClaw’s structured approach is better suited. If creativity or ideation is the goal, other platforms may suffice.

  
  
  
### 2. Assess technical debt

  
  
  
High technical debt environments benefit from OpenClaw’s connector‑first design. Platforms requiring clean data or advanced engineering support may not survive real‑world conditions.

  
  
  
### 3. Examine cost transparency

  
  
  
For organizations with tight budgets or undergoing M&A scrutiny, cost‑predictable automation is preferable. Consumption‑based models often balloon unexpectedly.

  
  
  
### 4. Consider regulatory exposure

  
  
  
Healthcare operators face fines and operational risk if AI behaves unpredictably. Structured agents offer safer adoption paths.

  
  
  
### 5. Look at operational maturity

  
  
  
If the organization needs dependable execution, OpenClaw provides consistent behavior. If the focus is experimentation, other platforms may offer broader creative potential.

  
  
  
## Where OpenClaw Outperforms Competitors

  
  
  
After analyzing OpenClaw vs other platforms across dozens of use cases, several strengths consistently emerge.

  
  
  
### Reliability of Execution

  
  
  
Agents run without significant drift. This matters in environments where missed tasks lead to delays, compliance issues, or financial penalties.

  
  
  
### Lower Integration Burden

  
  
  
Many mid‑market companies lack dedicated engineering teams. OpenClaw minimizes dependency on high‑skill labor.

  
  
  
### Alignment with Nordic Operational Culture

  
  
  
Swedish operators value predictability and traceability. OpenClaw’s audit‑ready logs cater directly to this need.

  
  
  
### Faster Time to Value

  
  
  
Deployment cycles are shorter. This matters for carve‑out timelines where operational stability must be restored within weeks, not quarters.

  
  
  
## Where Competing Platforms Perform Better

  
  
  
To provide a balanced AI agent comparison, it is important to acknowledge areas where other platforms may outperform OpenClaw.

  
  
  
### Advanced Creative Use Cases

  
  
  
Platforms optimized for broad generative creativity can outperform OpenClaw in narrative tasks, ideation, or unconstrained problem exploration.

  
  
  
### Large‑Scale Enterprise Environments

  
  
  
Enterprises with mature data platforms may prefer solutions designed for high‑volume analytics or customized agent architectures.

  
  
  
### Research‑Heavy Organizations

  
  
  
Academic or research institutions often require broader model experimentation. OpenClaw’s structured framework may feel restrictive.

  
  
  
## Final Assessment: Which Platform Wins

  
  
  
For Swedish mid‑market operators, particularly those dealing with healthcare carve‑outs or preparing for M&A, OpenClaw holds a clear operational advantage. It is not the flashiest platform. It is not the most creative. It is the most pragmatic.

  
  
  
Other platforms deliver impressive capabilities for innovation and content generation. Yet when exposed to the constraints of real‑world operations, many struggle to provide the stability required in regulated sectors or under transactional pressure.

  
  
  
In short, OpenClaw fits the category of best AI Sweden for companies that prioritize disciplined execution over experimentation.

  
  
  
Organizations seeking autonomous creativity may find alternatives more suitable. Organizations seeking dependable operational value will likely find that the structured approach of OpenClaw aligns better with their needs.

  
  
  
If your priority is stability, reliability, and controlled automation, OpenClaw stands out in the comparison between OpenClaw vs other platforms.

  
  
  
Book a strategic consultation`,"gdpr-review-for-ai-agents-in-mid-market-and-healthcare-environments":`\`\`\`markdown



## Introduction

The shift toward autonomous AI systems is accelerating. Most mid market operators are already piloting or deploying AI agents inside finance, operations, compliance and carve out programs. Healthcare groups are testing AI supported triage, internal knowledge automation and delegated administrative tasks. Private equity owners expect efficiency gains and lower overheads. Strategics seek clean integration paths before and after transactions.

Yet every organisation now reaches the same point. The need for a structured granskning GDPR AI process becomes unavoidable. Not because regulators demand it, but because operational risk grows quickly once AI agents begin touching regulated data flows.

This article outlines a pragmatic, battle hardened approach to GDPR review for AI agents. It is built on experience from mid market M and A, carve outs, healthcare integrations and distressed environments where there is no appetite for long theory. Only what works in the field.



## Why AI Agents Trigger a Different GDPR Landscape

Autonomous agents introduce behaviours that traditional GDPR frameworks never anticipated. They self initiate tasks. They fetch data from internal and external systems. They chain tools. They interpret instructions broadly. They sometimes produce outputs that are hard to fully retrace.

The usual compliance binder cannot handle this. A static DPIA is not enough. A simple access control review is not enough. A single vendor questionnaire is not enough.

A functioning AI agent program requires a moving GDPR perimeter. An organisation needs repeatable methods to map, validate and harden the AI flows. Without this, risk accumulates silently.

This is particularly true in healthcare carve outs. Legacy systems often contain blended data pools. Role based access models are inconsistent. Historical contracts are incomplete. AI agents operating inside these environments can easily over collect or over share without immediately obvious signals.

That is why a structured AI-agent dataskydd approach is mandatory rather than optional.



## The Strategic Reason GDPR Review Matters in Transactions

In mid market M and A, privacy posture is now a material part of valuation. Buyers do not want to inherit unbounded AI risk. Sellers prefer to demonstrate operational discipline rather than negotiate down due to compliance uncertainty.

The due diligence narrative has shifted in the last twelve months. Buyers are increasingly asking for:

- Evidence of a working granskning GDPR AI framework  
- Proof that AI agent behaviour is predictable and bounded  
- Confirmation that personuppgifter OpenClaw scenarios are understood and controlled  
- Documentation of training data governance  
- Clarity on where model inference is processed and logged  
- Practical mitigation plans for cross border data flows  

Sellers that cannot demonstrate this lose negotiation leverage. Risk adjusted pricing becomes harsher. Indemnity requests become broader. Escrow expectations increase.

Healthcare groups face even sharper scrutiny. Regulators focus on clinical confidentiality, secondary use of data and algorithmic accountability. Buyers apply heavier privacy risk models. AI agents handling healthcare data must demonstrate strict data path hygiene.



## Core Pillars of a GDPR Review for AI Agents

A robust GDPR review for AI agents is built on four operational pillars.



### 1. Data Flow Mapping for Autonomous Agents

AI agents do not operate like classical applications. They chain tasks, call multiple APIs and store intermediate reasoning. Mapping these flows requires direct observation rather than assumptions.

A functional mapping process includes:

- Identifying every tool an agent can call  
- Logging all outbound and inbound data streams  
- Describing each inference zone  
- Documenting ephemeral storage and reasoning buffers  
- Mapping any unstructured data that may contain hidden personal data  
- Testing decision branches to determine worst case flows  

For mid market healthcare carve outs, this step often reveals undocumented legacy integrations or orphaned data endpoints. These must be intercepted or segmented before agents operate at scale.



### 2. Classification of Personal Data Exposure

A correct granskning GDPR AI process includes classification of personal data at a granular level.

Classification requires:

- Identifying explicit personal data  
- Identifying implicit and derived data  
- Understanding whether models infer sensitive categories  
- Mapping accidental spillover from adjacent systems  
- Determining whether personuppgifter OpenClaw conditions may arise  

OpenClaw refers to situations where personal data enters an AI model without clear lineage, contractual basis or purpose limitation. This is a common failure mode in environments where employees upload files directly into AI assistants without governance.

Healthcare groups face additional pressure. Even non clinical administrative notes can contain sensitive data fragments. AI agents may unintentionally capture these during indexing or task execution.



### 3. Legal Basis and Purpose Boundaries

A GDPR review must ensure each AI agent has a lawful basis for every category of personal data it processes.

For mid market operators, the lawful basis is often legitimate interest. For healthcare applications, legal obligation or public interest may apply.

Purpose limitation is a heavier challenge. AI agents tend to be general purpose by design. A GDPR compliant configuration requires narrowing the purpose through:

- Specific operational roles  
- Controlled tool sets  
- Explicit task boundaries  
- Input validation rules  
- Output redaction steps  

If not, the agent will cross purpose boundaries by default.



### 4. Technical and Organisational Controls for AI Agents

AI agents require different controls than standard applications. Effective controls include:

- Bounded tool environments  
- Controlled context windows to avoid data over collection  
- Prompt layer filters for sensitive terms  
- Redaction pipelines before external model calls  
- Structured audit logs  
- Segmented training and fine tuning data  
- Isolation of reasoning traces from production systems  

In carve out programs, these controls must be layered onto incomplete IT landscapes. It is common to build temporary isolation zones until the target environment stabilises. The goal is operational continuity without violating data minimisation principles.



## Operationalising the GDPR Review

A theoretical GDPR review is worthless unless implemented operationally. A battle hardened approach includes the following steps.



### Step 1: Inventory All AI Agents

Most organisations underestimate how many AI capabilities already exist inside their estate. Employees use ad hoc tools, pilots run with different vendors and individual functions deploy AI assistants without architectural oversight.

A rapid inventory identifies:

- Vendor provided agents  
- Internally developed tools  
- Shadow AI deployed in line functions  
- Embedded agents inside SaaS platforms  
- Agents used in carve out transition service environments  



### Step 2: Build a Data Exposure Register

Each agent must be evaluated in terms of:

- Input data categories  
- Output data categories  
- Storage behaviours  
- API connections  
- Third country transfers  
- Risk of personuppgifter OpenClaw  

This becomes the baseline for the entire review.



### Step 3: Conduct a DPIA Tailored for AI Agents

Standard DPIA templates cannot capture agent behaviour. A tailored DPIA includes:

- Autonomy level  
- Tool call logic  
- Reasoning trace review  
- Failure mode mapping  
- Shadow decision pathways  
- Bias and fairness risk  
- Residual data footprint analysis  

Healthcare carve outs require additional layers for clinical safety, role separation and auditability.



### Step 4: Implement Adaptive Controls

Controls must expand and contract depending on:

- The sensitivity of the task  
- The category of personal data  
- The autonomy of the agent  
- The regulatory environment  

This adaptive model is more operationally realistic than static policy frameworks.



### Step 5: Align Contracts and Cross Border Flows

Each agent touchpoint must be validated contractually. This includes:

- Vendor terms  
- Subprocessor lists  
- Transfer impact assessments  
- Model hosting locations  
- Encryption guarantees  
- Data deletion policies  

In transactions, this work also becomes part of the buyer readiness package.



## Sector Focus: Healthcare

Healthcare remains the most sensitive environment for AI agent deployment.

Not because the systems are more complex, but because:

- Data is clinically sensitive  
- Decision errors have real patient impact  
- Legacy systems are intertwined  
- Staff rely heavily on unstructured documents  
- Carve outs create transitional chaos  
- Regulators apply strict scrutiny  

A pragmatic GDPR review focuses on stabilising data flows first, then enabling AI agents in limited operational zones. This prevents accidental overreach.

Examples of safe zones include:

- Internal knowledge summarisation  
- Scheduling and logistics support  
- Administrative triage  
- Procurement workflow automation  

High risk areas include:

- Unsupervised clinical decision support  
- Free form patient communication  
- Open ended document ingestion without filters  



## Sector Focus: Mid Market M and A

For mid market organisations, the privacy profile determines negotiation leverage.

AI agents touch valuation because they touch risk. Buyers want assurances that:

- AI agents do not leak personal data  
- Personal data is not used for model training without basis  
- No unknown OpenClaw exposure exists  
- Data minimisation is real  
- Reasoning traces do not form undeclared data lakes  
- Cross border flows are documented  

Sellers who can provide this gain smoother diligence cycles and avoid unnecessary post close remediation demands.

In carve outs, AI agents must often operate during TSA periods. This creates hybrid data flows that must be controlled to avoid cross contamination between seller and buyer environments.



## The Pathmaker Framework for AI GDPR Review

Pathmaker uses a structured but pragmatic approach that fits the reality of fast moving organisations. The method avoids academic overhead and focuses on risk reduction with minimal disruption.

Core principles include:

- Stabilise flows first  
- Create a clean perimeter  
- Isolate high risk channels  
- Bound agent autonomy  
- Monitor reasoning behaviour  
- Eliminate OpenClaw scenarios  
- Document only what improves operational safety  

This framework works in healthcare, in industrial mid market operators and in integration heavy post close environments.



## The Future of GDPR Reviews for AI Agents

Regulators will strengthen expectations. Vendors will introduce more opaque features. Staff will deploy more shadow AI tools. M and A transactions will add AI risk premiums. Healthcare operators will face heightened scrutiny.

A successful organisation prepares now.

Not with grand strategy documents. With practical, implementable controls and repeatable review cycles.

Granskning GDPR AI is no longer a single event. It is a process that accompanies every evolution of the AI stack.

Those who build this capability early will move faster and negotiate stronger positions in both operational and transactional contexts.



## Conclusion

AI agents deliver real efficiency. But they also reshape the GDPR risk landscape. Organisations that approach this with a pragmatic, operational mindset will avoid common traps and maintain control as the technology evolves.

Use structured mapping. Use adaptive controls. Use documented boundaries. Remove OpenClaw scenarios. Align contracts. Test reasoning behaviour. Treat AI agent dataskydd as a continuous discipline, not a one time audit.

Book a strategic consultation
\`\`\`markdown`},x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),S=o(((e,t)=>{t.exports=x()}))(),C={"vad-ar-en-ai-agent":`Att förstå vad en AI-agent är kan kännas svårt om man inte arbetar med teknik till vardags. Samtidigt börjar begreppet dyka upp överallt: i tidningar, på konferenser och i samtal på jobbet. Många svenska företag testar nu autonom AI, och intresset växer snabbt.

I den här artikeln får du en enkel och rak AI-agent förklaring, skriven för dig som är yrkesverksam och vill använda AI utan att behöva lära dig programmering.

## Vad är en AI-agent

Ett bra sätt att förklara en AI-agent är att se den som en digital assistent som kan ta emot ett uppdrag, planera hur det ska lösas och därefter genomföra arbetet självständigt.

En vanlig AI-chattbot svarar endast på en fråga i taget. En AI-agent kan däremot utföra en hel kedja av steg utan att du behöver detaljstyra varje moment.

En AI-agent har alltså två grundegenskaper:

- Den kan fatta enklare beslut inom ramarna du sätter.
- Den kan arbeta självständigt tills ett uppdrag är slutfört.

Man kan beskriva det som att du inte bara ger den ett svar att producera, utan snarare ett ansvar att ta hand om.

## Varför kallas det autonom AI

När man pratar om autonom AI syftar man på system som kan göra mer än att bara generera text. Autonom innebär inte att AI agerar fritt eller okontrollerat, utan att den kan:

- bryta ned ett mål i deluppgifter
- avgöra i vilken ordning uppgifterna ska göras
- kontrollera resultatet och rätta till misstag
- arbeta tills målet är uppnått eller tills du stoppar den

Det påminner om att ge instruktioner till en praktikant: du behöver vara tydlig med vad som ska göras, men praktikanten kan själv lista ut de praktiska stegen.

## Skillnaden mellan en chatbot och en AI-agent

Många blandar ihop chatbots och AI-agenter. För en vanlig användare ser de ibland likadana ut, eftersom båda kommunicerar genom text. Men deras sätt att arbeta skiljer sig tydligt.

### Chatbot
- Svarar på en fråga i taget
- Ingen minneshantering över tid
- Gör inga egna initiativ
- Passar för snabba frågor eller enkla formuleringar

### AI-agent
- Förstår målet med uppdraget
- Planerar arbetsgången själv
- Tar initiativ, kontrollerar och förbättrar
- Passar för längre processer, upprepade rutiner och strukturerat arbete

Ett enkelt sätt att tänka är så här: Chatboten är en konversation. AI-agenten är en arbetsprocess.

## Hur fungerar en AI-agent i praktiken

Det finns många tekniska detaljer, men man behöver inte kunna dem för att använda AI-agenter. Här är en förklaring för AI för nybörjare.

### 1. Du berättar målet
Du anger vad som ska göras, inte hur det ska göras. Exempel: Skapa ett förslag till en marknadsplan baserat på vår senaste kunddata.

### 2. AI-agenten planerar
Agenten bryter ned uppdraget i delmoment. Exempel: samla data, sortera, analysera, skriva, kontrollera.

### 3. Agenten genomför arbetet
Den använder AI-modellen, interna verktyg eller externa system för att lösa uppgifterna.

### 4. Den kontrollerar sitt eget resultat
I stället för att ge dig första utkastet kan agenten göra om och förbättra tills instruktionerna uppfylls.

## Vad kan en AI-agent hjälpa till med

En AI-agent kan användas i många typer av arbetssituationer, men det handlar oftast om uppgifter som är upprepade, administrativa, text- eller dataintensiva, tydligt definierade, och som inte kräver mänskliga relationer eller bedömning av känslor.

### Försäljning och marknad
- sammanställa kundanteckningar
- skriva första utkast till offerter
- analysera insamlad kundinformation
- uppdatera CRM-systemet med strukturerad data

### HR och administration
- skapa arbetsinstruktioner
- hålla koll på återkommande uppgifter
- skriva protokoll från mötesanteckningar
- rensa och kategorisera dokument

### Ekonomi och intern rapportering
- sammanställa siffror från flera källor
- skapa rapportutkast
- påminna teamet om saknade underlag

En AI-agent ersätter inte en kollega, men kan ofta ta hand om de delar av arbetet som ingen egentligen vill lägga tid på.

## Vad en AI-agent inte kan göra

Det är viktigt att ha realistiska förväntningar. En AI-agent är inte en magisk problemlösare. Den tar inte ansvar, saknar sunt förnuft vid otydliga instruktioner, och behöver tydliga ramar för att fungera bra.

## Integritet och datakontroll

På OpenClaw Sverige används isolerade miljöer där användaren själv bestämmer vilka filer, API-nycklar eller dokument agenten får komma åt. Du bestämmer exakt vilka mappar, dokument eller system agenten får använda. Den kommer inte åt något utanför dessa ramar.

Syftet är att ge kontroll utan att kräva avancerad teknisk kompetens.

## Hur OpenClaw Sverige arbetar med AI-agenter

OpenClaw Sverige erbjuder en plattform där svenska yrkesverksamma kan skapa och driva egna AI-agenter utan tekniska förkunskaper. Fokus ligger på enkelhet, kontroll och anpassning till vardagsarbete.

Du kan skapa en agent som sköter just dina rutiner, kopplad till dina dokument och dina verktyg.

Om du vill testa en AI-agent som är anpassad för svensk vardagspraktik kan du kontakta OpenClaw Sverige direkt via WhatsApp för ett enkelt samtal om vad du behöver.`,"5-arbetsuppgifter-ai-agent":`Digitaliseringen går snabbt, men många svenska företag arbetar fortfarande med arbetsuppgifter som tar mycket tid och ger lite värde tillbaka. Det som tidigare krävde en assistent, extra personal eller sena kvällar kan idag lösas av en AI-agent.

I den här artikeln går vi igenom fem konkreta arbetsuppgifter där en AI-agent inte bara kan stödja utan faktiskt ta över stora delar av processen.

## 1. Mejlhantering och sortering

Många företagare beskriver mejl som en av de mest tidskrävande delarna av arbetsdagen. Inkorgen fylls av kundfrågor, interna meddelanden, reklam, uppföljningar och fakturor.

### Hur en AI-agent hanterar det
Med en AI-agent kan man automatisera arbete genom att låta agenten sortera inkommande mejl i kategorier, markera brådskande ärenden, generera utkast på svar, sammanfatta långa mejltrådar och filtrera bort oönskade utskick.

### Realistiskt resultat
De flesta svenska användare rapporterar att de minskar sin tid i inkorgen med 30 till 60 procent.

## 2. Research och informationsinsamling

Många yrkesroller kräver att man snabbt tar fram underlag, statistik, svar på frågor eller marknadsinformation. Detta är tidsödande och ofta monotont.

### Hur en AI-agent hanterar det
En AI-agent kan sammanfatta stora datamängder, jämföra information från olika källor, söka efter fakta och presentera relevanta insikter, identifiera mönster eller avvikelser, och förbereda beslutsunderlag.

### Realistiskt resultat
De flesta företag beskriver att en arbetsuppgift som tidigare tog flera timmar nu kan lösas på några minuter.

## 3. Schemaläggning och påminnelser

Möten, deadlines, leveranser, intern planering och kunduppföljning kräver ständig uppmärksamhet. Här gör många fel utan att vilja det.

### Hur en AI-agent hanterar det
En AI-agent kan lägga in möten i kalendern, skicka påminnelser vid viktiga deadlines, föreslå lediga tider för kunder, skapa strukturerade arbetslistor och följa upp tidigare beslut eller mejl.

### Realistiskt resultat
Resultatet blir färre missade uppgifter och en mer förutsägbar arbetsdag.

## 4. Kundtjänst och förfrågningar

Svenska kunder förväntar sig snabba svar, raka besked och tillgänglighet. Detta är svårt för många småföretag som saknar en dedikerad kundtjänstavdelning.

### Hur en AI-agent hanterar det
En AI-agent kan svara på vanliga frågor, ge grundläggande information om tjänster och priser, ta emot och strukturera offertunderlag, triagera ärenden och skicka vidare mer komplexa frågor, och svara dygnet runt.

### Realistiskt resultat
Responstiderna blir kortare, kunder får tydligare information och företaget slipper avbrott.

## 5. Rapportering och sammanställning

Nästan varje företag behöver ta fram rapporter. Det kan vara ekonomiska sammanställningar, projektuppföljningar, kvalitetsrapporter, säljsiffror eller interna analyser.

### Hur en AI-agent hanterar det
En AI-agent kan hämta data från olika källor, strukturera och sammanfatta informationen, generera färdiga rapporter i textform, komplettera med analys och upptäckta mönster, och leverera rapporter på bestämda tider.

### Realistiskt resultat
Rapporteringen går från att vara ett manuellt återkommande moment till att i princip vara automatiserad.

## En AI-agent är inte magi, men den sparar tid

Det finns en tendens att överskatta AI som teknik och samtidigt underskatta dess praktiska nytta. För svenska företag handlar det sällan om futuristiska lösningar, utan om att frigöra tid och minska avbrott i arbetsdagen.

Om du vill diskutera hur en AI-agent kan hjälpa just din verksamhet går det bra att ta kontakt via WhatsApp.`,"openclaw-vs-chatgpt":`Digitaliseringen har gått från att handla om att automatisera enstaka steg till att skapa helt självständiga arbetsflöden. I centrum står två olika typer av AI-verktyg: de som svarar och de som agerar.

ChatGPT är i grunden en språkmodell. Den är mycket bra på att svara, formulera, sammanfatta, föreslå och presentera. OpenClaw fungerar annorlunda. Det är en plattform för autonoma AI-agenter som inte bara producerar text utan utför faktiska uppgifter.

## Reaktiv AI vs proaktiv AI

### ChatGPT som reaktiv assistent
ChatGPT är utmärkt som interaktiv partner. Den svarar på frågor, förtydligar komplexa ämnen, skriver text och hjälper användaren i dialogform. Men modellen är passiv. Den väntar på input och agerar inte förrän du ber om något.

### OpenClaw som proaktiv AI-agent
OpenClaw är byggt för att agera i stället för att bara svara. Plattformen låter användare skapa autonoma AI-agenter som kan fatta beslut stegvist, navigera system och databaser, schemalägga arbetsflöden och arbeta kontinuerligt utan mänsklig handpåläggning.

## Autonom AI i praktiken

Autonomi är inte alltid rätt. Många företag behöver bara bättre textproduktion eller snabbare svar. Men när arbetsuppgifter kräver kontinuitet eller flera steg uppstår ett behov som traditionella chattmodeller inte kan täcka.

## Integritet och dataskydd: lokal körning vs molnbaserad AI

### ChatGPT
Molnbaserat. Informationen skickas till OpenAI och bearbetas där. I sitt standardutförande är ChatGPT inte lokal, och data passerar alltid genom externa servrar.

### OpenClaw
Erbjuder lokal agentkörning, vilket innebär att företaget själv kan kontrollera var data lagras, vilka system som nås och hur åtkomstloggar lagras.

## Kostnadsjämförelse

ChatGPT är överlägset mest prisvärt för textproduktion och engångsuppgifter. OpenClaw blir billigare totalt när arbetsuppgifterna kräver kontinuerlig övervakning, schemalagda processer och integration med andra system.

## Användningsområden

### När ChatGPT är rätt val
Analys och idéproduktion, skrivande av text, skapa kodförslag, snabbt få en förklaring, kundtjänst i chattform.

### När OpenClaw är rätt val
Automatisering av administrativa processer, rapportering som återkommer regelbundet, integrationer mellan interna system, proaktiva agenter som tar ansvar för arbetsflöden.

Det är alltså inte ett alternativ till ChatGPT i textproduktion, utan ett komplement som hanterar helt andra typer av arbetsuppgifter.

Många svenska företag kommer i praktiken att använda båda.

Om du vill veta hur autonoma AI-agenter kan implementeras i din verksamhet kan du kontakta OpenClaw Sverige via WhatsApp för ett första samtal.`,"kan-ai-ersatta-anstalld":`När diskussionen om automatisering tar fart i svenska småföretagargrupper återkommer samma fråga gång på gång: kan en AI-agent ersätta en anställd, och är det i så fall värt det?

Här följer en ärligt hållen genomgång baserad på erfarenhet och de vanligaste frågorna som företagare ställer.

## Vad en AI-agent realistiskt kan ersätta

### Administrativa uppgifter
Här finns den största vinsten. De flesta småföretag har flera timmar i veckan av återkommande rutinuppgifter: sammanställa kundlistor, följ upp leads, kategorisera e-post, ta fram rapporter, uppdatera CRM, hålla koll på deadlines.

En AI-agent kan tränas att utföra detta med hög precision, dygnet runt och utan att tröttna.

### Repetitiva arbetsflöden med fasta regler
Skapa fakturautkast baserat på timrapporter, kontrollera att formulär är korrekt ifyllda, jämföra data mellan system, generera standardtexter. Här är AI både snabbare och billigare än en person.

## Vad AI inte kan ersätta

### Mänskligt omdöme och värdering
AI arbetar med sannolikheter och mönster. Den förstår inte sammanhang på samma sätt som en människa. Mänsklig kontroll behövs fortfarande för känsliga kundkonflikter, beslut som innebär risker, rekryteringsbedömningar och strategiska prioriteringar.

### Kreativitet av hög kvalitet
AI kan skapa texter och koncept, men resultatet saknar ofta originalitet, personlig tonalitet och förståelse för målgruppen på djupet.

### Relationer
Många småföretag bygger hela sin affär på personlig kontakt. En AI-agent kan inte skapa förtroende eller bygga relationer som utvecklas över tid.

## AI vs anställd: realistisk kostnadsjämförelse

### Kostnad för en anställd
Lön plus arbetsgivaravgifter: 40 000 kronor. Arbetsplats, system, försäkringar: 5 000 kronor. Total: cirka 48 000 kronor per månad.

### Kostnad för en AI-agent
Grundsystem: 3 000 till 7 000 kronor per månad. Anpassning: 1 000 till 4 000 kronor. API-kostnader: 200 till 900 kronor. Total: 4 200 till 11 900 kronor per månad.

### Vad siffrorna betyder
AI-agenten är billigare, men den ersätter inte allt en människa gör. Företagare som är mest nöjda tänker så här: AI ersätter inte en anställd, men AI gör att samma anställd kan göra mer.

## En ärlig sammanfattning

Kan AI ersätta en anställd? Delvis, men inte helt. Den kan ta över stora delar av repetitivt administrativt arbete. Men den kan inte ersätta omdöme, kreativitet på hög nivå eller relationsbyggande.

Du kan skriva till oss på WhatsApp om du vill ha en ärlig, kostnadsfri genomgång av vad som går att automatisera och vad som inte går.`,"datasakerhet-gdpr-ai":`AI har snabbt blivit en central del av hur svenska företag effektiviserar sina processer. Men samtidigt som tekniken öppnar dörrar till nya möjligheter ökar också kraven på datasäkerhet och integritet.

## Varför AI-datasäkerhet är en kritisk fråga i Sverige

Digitaliseringen har gjort att företag i allt större utsträckning samlar in, lagrar och analyserar kunddata. När AI-system integreras i verksamhetens kärnprocesser ökar riskerna om dataskyddet inte är korrekt hanterat.

## GDPR och AI: Vad företag behöver tänka på

GDPR reglerar hur personuppgifter får behandlas, lagras och överföras. Grundläggande krav som direkt berör AI-agenter:

- Dataminimering: AI-system får inte samla in mer persondata än nödvändigt.
- Tydligt syfte: Organisationen måste definiera varför AI får behandla viss data.
- Lagringsbegränsning: Personuppgifter får bara lagras så länge de behövs.
- Rätt till insyn och rättelse.
- Rätt att bli raderad.
- Automatiserat beslutsfattande kräver mänsklig kontroll.

## Lokal vs molnbaserad AI

### Lokal AI (local-first)
- Full kontroll över hela datakedjan
- All känslig data stannar innanför landets gränser
- Ökad säkerhet
- Förutsägbarhet i loggning och åtkomstkontroller

### Molnbaserad AI
Enkla att komma igång med, men för verksamhetskritiska processer, interna dokument, kunddata eller juridiskt skyddat material är riskerna betydande.

## Hur OpenClaw Sverige hanterar data

- Data behandlas lokalt när det är möjligt
- Ingen kunddata används för att träna modeller
- Inga externa parter får åtkomst till information
- All bearbetning sker inom EU eller lokalt hos kunden

## Praktisk checklista för AI-säkerhet

1. Var bearbetas data?
2. Använder leverantören kunddata för modellträning?
3. Kan du som kund styra retention och loggar?
4. Finns full dokumentation av datakedjan?
5. Stödjer aktören lokal-first eller lokal drift?
6. Efterlever aktören GDPR på ett verifierbart sätt?
7. Hur hanteras dokument, filer och kundspecifik information?

Om du vill diskutera hur säker lokal AI kan implementeras i din verksamhet kan du kontakta OpenClaw Sverige via WhatsApp.`,"enmansforetag-ai-agenter":`Att driva ett enmansföretag i Sverige har alltid krävt disciplin, bredd och ett visst mått av kreativt kaos. Men 2026 har spelplanen förändrats. Med moderna AI-agenter kan en egenföretagare hantera uppgifter som tidigare tog timmar, ibland dagar, på bara några minuter.

## Varför AI-agenter förändrar spelet för soloprenörer

AI-teknik 2026 handlar inte längre bara om att få snabba svar på frågor. Det handlar om kompletta arbetsflöden. En AI-agent kan följa instruktioner över tid, arbeta enligt processer du definierar, samarbeta med andra agenter och hantera system och verktyg åt dig.

## Hur AI-agenter används i svenska enmansföretag

### Administration: den största tidsvinnaren
Sortering av mejl och utkast till svar, påminnelser om deadlines, strukturering av kvitton och underlag för bokföring, förberedelse av månadsrapporter.

### Försäljning och prospektering
Identifiera relevanta företag, analysera behov, skriva skräddarsydda kontaktförslag, planera uppföljning och påminnelser.

### Kundservice och kundupplevelse
AI-agenter kan tränas på tidigare projekt, din tonalitet, dina tjänster och dina rutiner. De kan sköta enklare kundfrågor, tidsbokning och statusuppdateringar.

### Research och analys
Sammanfatta hundratals sidor, skapa marknadsbilder och föreslå strategier.

## Så här kan en arbetsdag se ut

### 07.30: Morgonrapport
Rapport med viktiga mejl, kunder som väntar på återkoppling, ekonomisk status och rekommendationer för dagens fokusområden.

### 10.00: Försäljningsunderlag färdigt
Tre nya potentiella kunder, förslag på kontaktmeddelanden och en plan för uppföljning.

### 13.00: Kundprojekt stött av AI
Research, textförslag, strukturering av leveranser och sammanfattningar av videomöten.

### 17.30: Dagens sammanfattning
Vad som är klart, vad som väntar i morgon och eventuella risker.

## Kostnadsanalys

Typisk tidsbesparing: 15 till 28 timmar per vecka. Kostnad: 300 till 2000 kronor per månad beroende på nivå.

## Hur du kommer igång

1. Bestäm ett tydligt syfte
2. Välj 1 till 2 tydliga arbetsflöden att automatisera
3. Skapa en enkel rutin
4. Låt agenten arbeta i bakgrunden
5. Utvärdera varje månad

Om du vill veta mer om hur du kan använda AI som egenföretagare är du välkommen att höra av dig via WhatsApp.`},w=[...v,...y],ee={...C,...b};function te(e){let t=e.split(`
`),n=[],r=[],i=0,a=()=>{r.length>0&&(n.push((0,S.jsx)(`ul`,{style:{paddingLeft:`20px`,margin:`12px 0`,color:`rgba(26,26,26,0.7)`},children:r.map((e,t)=>(0,S.jsx)(`li`,{style:{marginBottom:`6px`,fontSize:`15px`,lineHeight:`1.6`},children:e},t))},i++)),r=[])};for(let e=0;e<t.length;e++){let o=t[e];o.startsWith(`### `)?(a(),n.push((0,S.jsx)(`h4`,{style:{fontSize:`16px`,fontWeight:600,margin:`28px 0 8px`,color:`#1a1a1a`},children:o.slice(4)},i++))):o.startsWith(`## `)?(a(),n.push((0,S.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:600,margin:`40px 0 12px`,color:`#1a1a1a`,letterSpacing:`-0.01em`},children:o.slice(3)},i++))):o.startsWith(`- `)?r.push(o.slice(2)):o.trim()===``?a():(a(),n.push((0,S.jsx)(`p`,{style:{fontSize:`15px`,lineHeight:`1.7`,color:`rgba(26,26,26,0.7)`,margin:`12px 0`},children:o},i++)))}return a(),n}function T(e=0){let t=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let n=t.current;if(!n)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){n.classList.add(`visible`);return}let r=new IntersectionObserver(([t])=>{t.isIntersecting&&(setTimeout(()=>n.classList.add(`visible`),e),r.unobserve(n))},{threshold:.2});return r.observe(n),()=>r.disconnect()},[e]),t}var ne=({onComplete:e})=>{let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{n(1);let t=0,r=setInterval(()=>{t<18?(i(`initierar_agent...`.slice(0,t+1)),t++):clearInterval(r)},60),a=setTimeout(()=>n(2),1e3),s=setTimeout(()=>{n(3),o(!0)},2e3),c=setTimeout(()=>e(),2800);return()=>{clearInterval(r),clearTimeout(a),clearTimeout(s),clearTimeout(c)}},[e]),(0,S.jsxs)(`div`,{className:`intro-overlay ${a?`fade-out`:``}`,children:[(0,S.jsx)(`div`,{className:`intro-dot ${t===1?`pulse`:`steady`}`}),(0,S.jsx)(`div`,{className:`intro-typing ${t>=2?`hidden`:``}`,children:r}),(0,S.jsxs)(`div`,{className:`intro-logo ${t>=2?`visible`:``}`,children:[`OpenClaw `,(0,S.jsx)(`span`,{children:`Sverige`})]}),(0,S.jsx)(`div`,{className:`intro-line ${t>=2?`expanded`:``}`})]})};function re(){let[e,t]=(0,_.useState)(window.location.hash);return(0,_.useEffect)(()=>{let e=()=>t(window.location.hash);return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),e}var ie=()=>(0,S.jsxs)(`div`,{className:`page`,children:[(0,S.jsxs)(`div`,{className:`logo-area`,style:{cursor:`pointer`},onClick:()=>{window.location.hash=``},children:[(0,S.jsx)(`span`,{className:`logo-text`,children:`OpenClaw`}),(0,S.jsx)(`div`,{className:`logo-dot`}),(0,S.jsx)(`span`,{className:`logo-tag`,children:`Sverige`})]}),(0,S.jsx)(`div`,{style:{marginTop:`48px`,marginBottom:`24px`},children:(0,S.jsx)(`a`,{href:`#`,style:{fontSize:`13px`,color:`rgba(26,26,26,0.4)`,textDecoration:`none`},children:`← Tillbaka till startsidan`})}),(0,S.jsx)(`h1`,{className:`headline`,style:{fontSize:`32px`,marginTop:`16px`},children:`Blogg`}),(0,S.jsx)(`p`,{className:`subtitle`,style:{marginTop:`12px`,marginBottom:`48px`},children:`Artiklar om AI-agenter, automatisering och hur svenska företag kan arbeta smartare.`}),(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0`},children:w.map((e,t)=>(0,S.jsxs)(`a`,{href:`#/blogg/${e.slug}`,style:{display:`block`,padding:`32px 0`,borderBottom:`1px solid rgba(26,26,26,0.06)`,textDecoration:`none`,color:`inherit`,transition:`background 200ms ease`},onMouseEnter:e=>e.currentTarget.style.background=`rgba(26,26,26,0.02)`,onMouseLeave:e=>e.currentTarget.style.background=`transparent`,children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,fontSize:`13px`,color:`rgba(26,26,26,0.35)`,marginBottom:`8px`},children:[(0,S.jsx)(`span`,{children:e.date}),(0,S.jsx)(`span`,{children:`·`}),(0,S.jsx)(`span`,{children:e.readTime})]}),(0,S.jsx)(`h2`,{style:{fontSize:`19px`,fontWeight:600,color:`#1a1a1a`,marginBottom:`6px`,lineHeight:`1.3`,letterSpacing:`-0.01em`},children:e.title}),(0,S.jsx)(`p`,{style:{fontSize:`15px`,color:`rgba(26,26,26,0.55)`,lineHeight:`1.5`},children:e.description})]},e.slug))}),(0,S.jsx)(`footer`,{className:`site-footer`,children:(0,S.jsxs)(`div`,{className:`footer-content`,children:[(0,S.jsx)(`span`,{children:`OpenClaw Sverige`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`#/integritet`,className:`footer-link`,children:`Integritet & Säkerhet`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Alpha/`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Roials Alpha`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Venture-Studio/#apply`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Hyltén Venture Studio`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`span`,{children:`© 2025`})]})})]}),ae=({slug:e})=>{let t=w.find(t=>t.slug===e),n=ee[e];if((0,_.useEffect)(()=>{if(window.scrollTo(0,0),t){document.title=`${t.title} | OpenClaw Sverige`;let e=document.querySelector(`meta[name="description"]`);e&&e.setAttribute(`content`,t.description);let n=document.querySelector(`script[data-blog-ld]`);n&&n.remove();let r=document.createElement(`script`);return r.type=`application/ld+json`,r.setAttribute(`data-blog-ld`,`true`),r.textContent=JSON.stringify({"@context":`https://schema.org`,"@type":`BlogPosting`,headline:t.title,description:t.description,author:{"@type":`Organization`,name:`OpenClaw Sverige`},publisher:{"@type":`Organization`,name:`OpenClaw Sverige`},datePublished:t.date,dateModified:t.date,mainEntityOfPage:{"@type":`WebPage`,"@id":`https://hylten.github.io/OpenClaw-Sverige/#/blogg/${t.slug}`},inLanguage:`sv-SE`}),document.head.appendChild(r),()=>{document.title=`OpenClaw Sverige — Din AI-agent`;let e=document.querySelector(`script[data-blog-ld]`);e&&e.remove()}}},[e,t]),!t||!n)return(0,S.jsxs)(`div`,{className:`page`,style:{paddingTop:`48px`},children:[(0,S.jsx)(`p`,{children:`Artikeln kunde inte hittas.`}),(0,S.jsx)(`a`,{href:`#/blogg`,children:`Tillbaka till bloggen`})]});let r=`https://wa.me/46701619978?text=${encodeURIComponent(`Hej! Jag läste er artikel om "`+t.title+`" och vill veta mer.`)}`;return(0,S.jsxs)(`div`,{className:`page`,children:[(0,S.jsxs)(`div`,{className:`logo-area`,style:{cursor:`pointer`},onClick:()=>{window.location.hash=``},children:[(0,S.jsx)(`span`,{className:`logo-text`,children:`OpenClaw`}),(0,S.jsx)(`div`,{className:`logo-dot`}),(0,S.jsx)(`span`,{className:`logo-tag`,children:`Sverige`})]}),(0,S.jsx)(`div`,{style:{marginTop:`48px`,marginBottom:`24px`},children:(0,S.jsx)(`a`,{href:`#/blogg`,style:{fontSize:`13px`,color:`rgba(26,26,26,0.4)`,textDecoration:`none`},children:`← Alla artiklar`})}),(0,S.jsxs)(`article`,{style:{marginBottom:`80px`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,fontSize:`13px`,color:`rgba(26,26,26,0.35)`,marginBottom:`16px`},children:[(0,S.jsx)(`span`,{children:t.date}),(0,S.jsx)(`span`,{children:`·`}),(0,S.jsx)(`span`,{children:t.readTime})]}),(0,S.jsx)(`h1`,{style:{fontSize:`32px`,fontWeight:600,lineHeight:`1.2`,color:`#1a1a1a`,letterSpacing:`-0.025em`,marginBottom:`32px`},children:t.title}),(0,S.jsx)(`div`,{style:{borderTop:`1px solid rgba(26,26,26,0.06)`,paddingTop:`32px`},children:te(n)})]}),(0,S.jsxs)(`div`,{style:{textAlign:`center`,padding:`48px 0`,borderTop:`1px solid rgba(26,26,26,0.06)`},children:[(0,S.jsx)(`p`,{style:{fontSize:`17px`,color:`rgba(26,26,26,0.55)`,marginBottom:`20px`},children:`Har du frågor om det du läste?`}),(0,S.jsxs)(`a`,{href:r,className:`btn-whatsapp`,target:`_blank`,rel:`noopener noreferrer`,style:{display:`inline-flex`},children:[`Skriv på WhatsApp `,(0,S.jsx)(`span`,{className:`btn-arrow`,children:`→`})]})]}),(0,S.jsx)(`footer`,{className:`site-footer`,children:(0,S.jsxs)(`div`,{className:`footer-content`,children:[(0,S.jsx)(`span`,{children:`OpenClaw Sverige`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`#/blogg`,className:`footer-link`,children:`Blogg`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`#/integritet`,className:`footer-link`,children:`Integritet & Säkerhet`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Alpha/`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Roials Alpha`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Venture-Studio/#apply`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Hyltén Venture Studio`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`span`,{children:`© 2025`})]})})]})},oe=()=>{let e=T(0),t=T(100),n=T(200),r=T(0),i=T(150),a=T(300),o=T(0),s=T(0),c=T(100),l=T(200),u=T(300),d=[{title:`Rutinarbete försvinner`,body:`Mejl, schemaläggning, kundtjänst, research. Allt som tar tid men inte kräver ditt omdöme.`},{title:`Autonom exekvering`,body:`Ge den ett mål. Den planerar stegen, genomför dem och rapporterar tillbaka.`},{title:`Din data. Ditt valv.`,body:`OpenClaw körs i en privat, skyddad miljö. Ingen tredje part ser din information.`}],f=[r,i,a];return(0,S.jsxs)(`div`,{className:`page`,children:[(0,S.jsxs)(`div`,{ref:e,className:`logo-area reveal`,children:[(0,S.jsx)(`span`,{className:`logo-text`,children:`OpenClaw`}),(0,S.jsx)(`div`,{className:`logo-dot`}),(0,S.jsx)(`span`,{className:`logo-tag`,children:`Sverige`})]}),(0,S.jsx)(`h1`,{ref:t,className:`headline reveal`,children:`En AI-agent som arbetar. Inte väntar.`}),(0,S.jsx)(`p`,{ref:n,className:`subtitle reveal`,children:`Vanliga AI-verktyg svarar när du frågar. OpenClaw agerar på egen hand, dygnet runt, med dina instruktioner som grund.`}),(0,S.jsx)(`div`,{className:`capabilities`,children:d.map((e,t)=>(0,S.jsxs)(`div`,{ref:f[t],className:`capability reveal`,children:[(0,S.jsx)(`h3`,{children:e.title}),(0,S.jsx)(`p`,{children:e.body})]},t))}),(0,S.jsx)(`div`,{className:`varfor-section`,children:(0,S.jsxs)(`div`,{ref:o,className:`varfor-inner reveal`,children:[(0,S.jsx)(`h4`,{className:`varfor-heading`,children:`Varför genom oss`}),(0,S.jsx)(`p`,{className:`varfor-body`,children:`Att installera OpenClaw själv kräver servrar, konfiguration och teknisk kunskap. Vi levererar den färdigkonfigurerad, redo att använda direkt.`})]})}),(0,S.jsxs)(`div`,{className:`cta-section`,children:[(0,S.jsx)(`h2`,{ref:s,className:`cta-heading reveal`,children:`Kontakta mig direkt`}),(0,S.jsx)(`p`,{ref:c,className:`cta-body reveal`,children:`Har du frågor, eller vill du komma igång? Skriv till mig på WhatsApp.`}),(0,S.jsx)(`div`,{ref:l,className:`reveal`,children:(0,S.jsxs)(`a`,{href:`https://wa.me/46701619978?text=Hej!%20Jag%20%C3%A4r%20intresserad%20av%20OpenClaw.`,className:`btn-whatsapp`,target:`_blank`,rel:`noopener noreferrer`,children:[`Skriv på WhatsApp `,(0,S.jsx)(`span`,{className:`btn-arrow`,children:`→`})]})}),(0,S.jsx)(`p`,{ref:u,className:`cta-subtext reveal`,children:`Personlig kontakt. Inga formulär. Inga dolda avgifter.`})]}),(0,S.jsxs)(`div`,{style:{marginTop:`80px`,paddingTop:`48px`,borderTop:`1px solid rgba(26,26,26,0.06)`},children:[(0,S.jsx)(`h3`,{style:{fontSize:`13px`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`rgba(26,26,26,0.4)`,marginBottom:`24px`},children:`Från bloggen`}),w.slice(0,3).map(e=>(0,S.jsxs)(`a`,{href:`#/blogg/${e.slug}`,style:{display:`block`,padding:`20px 0`,borderBottom:`1px solid rgba(26,26,26,0.04)`,textDecoration:`none`,color:`inherit`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,fontSize:`12px`,color:`rgba(26,26,26,0.3)`,marginBottom:`4px`},children:[(0,S.jsx)(`span`,{children:e.date}),(0,S.jsx)(`span`,{children:`·`}),(0,S.jsx)(`span`,{children:e.readTime})]}),(0,S.jsx)(`span`,{style:{fontSize:`15px`,fontWeight:600,color:`#1a1a1a`},children:e.title})]},e.slug)),(0,S.jsx)(`a`,{href:`#/blogg`,style:{display:`inline-block`,marginTop:`16px`,fontSize:`14px`,color:`rgba(26,26,26,0.5)`,textDecoration:`none`,fontWeight:600},children:`Alla artiklar →`})]}),(0,S.jsx)(`footer`,{className:`site-footer`,children:(0,S.jsxs)(`div`,{className:`footer-content`,children:[(0,S.jsx)(`span`,{children:`OpenClaw Sverige`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`#/blogg`,className:`footer-link`,children:`Blogg`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`#/integritet`,className:`footer-link`,children:`Integritet & Säkerhet`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Alpha/`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Roials Alpha`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`a`,{href:`https://hylten.github.io/Venture-Studio/#apply`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Hyltén Venture Studio`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`span`,{children:`© 2025`})]})})]})},se=()=>((0,_.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,S.jsxs)(`div`,{className:`page`,style:{paddingTop:`48px`},children:[(0,S.jsxs)(`div`,{className:`logo-area`,style:{cursor:`pointer`},onClick:()=>{window.location.hash=``},children:[(0,S.jsx)(`span`,{className:`logo-text`,children:`OpenClaw`}),(0,S.jsx)(`div`,{className:`logo-dot`}),(0,S.jsx)(`span`,{className:`logo-tag`,children:`Sverige`})]}),(0,S.jsx)(`div`,{style:{marginTop:`48px`,marginBottom:`24px`},children:(0,S.jsx)(`a`,{href:`#`,style:{fontSize:`13px`,color:`rgba(26,26,26,0.4)`,textDecoration:`none`},children:`← Tillbaka`})}),(0,S.jsxs)(`article`,{style:{marginBottom:`80px`,maxWidth:`640px`},children:[(0,S.jsx)(`h1`,{style:{fontSize:`32px`,fontWeight:600,color:`#1a1a1a`,marginBottom:`24px`,letterSpacing:`-0.02em`},children:`Integritet & Säkerhet`}),(0,S.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:600,color:`#1a1a1a`,marginTop:`40px`,marginBottom:`12px`},children:`GDPR och lokal data`}),(0,S.jsx)(`p`,{style:{fontSize:`15px`,color:`rgba(26,26,26,0.7)`,lineHeight:`1.7`,marginBottom:`16px`},children:`För oss på OpenClaw Sverige är din dataintegritet prioriterad. Våra system och AI-agenter driftsätts med lokal-först arkitektur (local-first), vilket minimerar risken att företagsdata läcker utanför din kontroll. All eventuell personuppgiftshantering vilar på den allmänna dataskyddsförordningens (GDPR) krav på transparens, minimering och datakontroll. Din konfidentiella information används aldrig för extern modellträning. Detta ger dig full suveränitet över affärskritiska flöden.`}),(0,S.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:600,color:`#1a1a1a`,marginTop:`40px`,marginBottom:`12px`},children:`Kontakt`}),(0,S.jsx)(`p`,{style:{fontSize:`15px`,color:`rgba(26,26,26,0.7)`,lineHeight:`1.7`,marginBottom:`16px`},children:`Har du frågor angående vår personuppgiftshantering, säkerhet eller hur vi tillämpar GDPR inom dina AI-arbetsflöden, tveka inte att kontakta oss direkt på:`}),(0,S.jsx)(`p`,{style:{fontSize:`15px`,color:`#1a1a1a`,fontWeight:500},children:(0,S.jsx)(`a`,{href:`mailto:jonas@roials.co`,style:{color:`inherit`,textDecoration:`underline`},children:`jonas@roials.co`})})]}),(0,S.jsx)(`footer`,{className:`site-footer`,children:(0,S.jsxs)(`div`,{className:`footer-content`,children:[(0,S.jsx)(`span`,{children:`OpenClaw Sverige`}),(0,S.jsx)(`span`,{className:`footer-dot`,children:`·`}),(0,S.jsx)(`span`,{children:`© 2025`})]})})]}));g.createRoot(document.getElementById(`root`)).render((0,S.jsx)(_.StrictMode,{children:(0,S.jsx)(()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),i=re();(0,_.useEffect)(()=>{let e=sessionStorage.getItem(`openclaw_intro_seen`),n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;(e||n)&&(r(!0),t(!0))},[]);let a=(0,_.useCallback)(()=>{sessionStorage.setItem(`openclaw_intro_seen`,`1`),t(!0)},[]),o=i.match(/^#\/blogg\/(.+)$/);return(0,S.jsxs)(S.Fragment,{children:[!n&&!e&&i===``&&(0,S.jsx)(ne,{onComplete:a}),i===`#/blogg`?(0,S.jsx)(ie,{}):i===`#/integritet`?(0,S.jsx)(se,{}):o?(0,S.jsx)(ae,{slug:o[1]}):(0,S.jsx)(oe,{})]})},{})}));