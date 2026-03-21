var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function T(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=T,ne=function(){ie.postMessage(null)}}else ne=function(){_(T,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=_i(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=_i(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=_i(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case T:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case ne:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===C)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===C)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===C)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=Fa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===C)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Gl,k(oo,e),k(ao,t),Gl=e|t.baseLanes}function co(){k(oo,Gl),k(ao,ao.current)}function lo(){Gl=oo.current,O(ao),O(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===C)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=me.current,Yi(t))qi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=E.H;return E.H=Us,e===null?Us:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,ot(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),1),_=c(u(),1),v=[{slug:`vad-ar-en-ai-agent`,title:`Vad är en AI-agent? En enkel förklaring för dig som inte är teknisk`,description:`Förstå vad en AI-agent är, hur den skiljer sig från en chatbot och vad den kan göra för dig i arbetet. Skriven för dig som inte arbetar med teknik.`,date:`2026-03-20`,readTime:`8 min`,keywords:[`vad är AI-agent`,`AI-agent förklaring`,`hur fungerar AI-agent`,`AI för nybörjare`]},{slug:`5-arbetsuppgifter-ai-agent`,title:`5 arbetsuppgifter som en AI-agent kan ta över redan idag`,description:`Mejl, research, schemaläggning, kundtjänst och rapportering. Konkreta exempel på hur AI-agenter sparar tid för svenska företagare.`,date:`2026-03-19`,readTime:`7 min`,keywords:[`AI-agent arbetsuppgifter`,`automatisera arbete AI`,`spara tid med AI`]},{slug:`openclaw-vs-chatgpt`,title:`OpenClaw vs ChatGPT: Skillnaden mellan AI som svarar och AI som agerar`,description:`En saklig jämförelse av reaktiv och autonom AI. Vilken typ passar bäst för ditt arbete?`,date:`2026-03-18`,readTime:`9 min`,keywords:[`OpenClaw vs ChatGPT`,`AI-agent jämförelse`,`bästa AI-verktyg företag`]},{slug:`kan-ai-ersatta-anstalld`,title:`Kan en AI-agent verkligen ersätta en anställd? Ärlig analys`,description:`Vad AI-agenter faktiskt kan och inte kan göra. Realistisk kostnadsjämförelse och vanliga misstag att undvika.`,date:`2026-03-17`,readTime:`8 min`,keywords:[`AI ersätta anställd`,`AI-agent värt det`,`automatisering småföretag`]},{slug:`datasakerhet-gdpr-ai`,title:`Datasäkerhet och AI: Vad svenska företag behöver veta om GDPR och AI-agenter`,description:`Praktisk guide till GDPR-efterlevnad vid användning av AI-agenter. Lokal vs molnbaserad hantering, datakontroll och checklista.`,date:`2026-03-16`,readTime:`7 min`,keywords:[`AI datasäkerhet Sverige`,`GDPR AI-agent`,`integritet AI`]},{slug:`enmansforetag-ai-agenter`,title:`Hur du driver ett enmansföretag med AI-agenter 2026`,description:`Konkreta tips för egenföretagare och konsulter som vill automatisera admin, försäljning och kundhantering med AI.`,date:`2026-03-15`,readTime:`9 min`,keywords:[`enmansföretag AI`,`AI egenföretagare Sverige`,`automatisera enskild firma`]}],y=[{slug:`sänk-dina-ai-kostnader-med-openclaw`,title:`Sänk dina AI-kostnader med OpenClaw`,description:`Praktiska metoder för företag som vill dominera nästa automationsvåg...`,date:`2026-03-20`,readTime:`10 min`},{slug:`så-använder-du-openclaw-för-att-kvalitetssäkra-din-kod`,title:`Så använder du OpenClaw för att kvalitetssäkra din kod`,description:`Att bygga robust mjukvara i dagens marknadsklimat kräver mer än traditionella arbetssätt....`,date:`2026-03-17`,readTime:`5 min`},{slug:`skillnaden-mellan-generativ-ai-och-agentisk-ai-för-svenska-företag`,title:`Skillnaden mellan generativ AI och agentisk AI för svenska företag`,description:`Generativ AI har snabbt blivit ett verktyg som kan skapa text, bilder och analyser på beställning....`,date:`2026-03-14`,readTime:`6 min`},{slug:`så-väljer-du-rätt-ai-agent-för-ditt-bolag`,title:`Så väljer du rätt AI‑agent för ditt bolag`,description:`OpenClaw Sverige, en strategisk överblick för långsiktiga förvaltare...`,date:`2026-03-14`,readTime:`12 min`},{slug:`vikten-av-anpassade-ai-agenter-för-den-svenska-marknaden`,title:`Vikten av anpassade AI‑agenter för den svenska marknaden`,description:`OpenClaw Sverige och den långsiktiga förvaltningen av digitala beslutssystem...`,date:`2026-03-13`,readTime:`8 min`},{slug:`ai-agenter-för-den-svenska-fastighetsbranschen`,title:`Ai agenter för den svenska fastighetsbranschen`,description:`Dataflöden blir tyngre, transaktioner snabbare, krav på precision hårdare....`,date:`2026-03-13`,readTime:`5 min`},{slug:`hur-frilansare-kan-dubbla-sin-inkomst-med-ai`,title:`Hur frilansare kan dubbla sin inkomst med AI`,description:`Att tala om hur frilansare kan öka sin inkomst med AI handlar sällan om inspiration. Det handlar om struktur, process och en ny arbetsmod...`,date:`2026-03-12`,readTime:`10 min`},{slug:`hur-du-mäter-roi-på-ai-automation-i-din-verksamhet`,title:`Hur du mäter ROI på AI automation i din verksamhet`,description:`AI automation har gått från experiment till infrastruktur....`,date:`2026-03-11`,readTime:`11 min`},{slug:`ai-för-pr-och-kommunikation-i-sverige`,title:`AI för PR och kommunikation i Sverige`,description:`AI kommunikation Sverige har rört sig bort från hypefasen. I dag handlar det inte om att experimentera planlöst utan om att införa system...`,date:`2026-03-11`,readTime:`8 min`},{slug:`slutsats-svenska-företag-och-ai-revolutionen-2026`,title:`Slutsats: Svenska företag och AI revolutionen 2026`,description:`Svenskt näringsliv befinner sig i början av en strukturell förändring som sträcker sig bortom tekniska trender och kortsiktiga effektivis...`,date:`2026-03-06`,readTime:`11 min`},{slug:`automatisera-lönehantering-med-ai`,title:`Automatisera lönehantering med AI`,description:`Att automatisera lönehantering är inte längre en fråga om innovation, det är en fråga om driftssäkerhet och skalbarhet. I Sverige ser vi ...`,date:`2026-03-06`,readTime:`7 min`},{slug:`gdpr-konsekvenser-för-ai-baserad-programvara-i-sverige`,title:`GDPR konsekvenser för AI‑baserad programvara i Sverige`,description:`GDPR förändrade spelplanen för europeisk datahantering....`,date:`2026-03-05`,readTime:`8 min`},{slug:`ai-för-skola-och-utbildning-möjligheter`,title:`AI för skola och utbildning: möjligheter`,description:`AI utbildning Sverige befinner sig i ett skede där retoriken börjar ge vika för krav på faktiska resultat. Skolor vill inte höra visioner...`,date:`2026-03-04`,readTime:`6 min`},{slug:`ai-assistenter-för-redovisningskonsulter-2026`,title:`AI‑assistenter för redovisningskonsulter 2026`,description:`AI har redan brutit sönder den gamla redovisningsmodellen....`,date:`2026-03-03`,readTime:`10 min`},{slug:`säker-e-posthantering-med-lokal-ai`,title:`Säker e‑posthantering med lokal AI`,description:`En pragmatisk genomlysning av risk, struktur och kontroll i en komplex vardag...`,date:`2026-03-01`,readTime:`10 min`},{slug:`kan-man-lita-på-en-ai-agent-med-företagets-ekonomi`,title:`Kan man lita på en AI‑agent med företagets ekonomi?`,description:`Att överväga en AI‑agent som stöd eller medförvaltare av ett företags ekonomi kräver en annan sorts eftertanke än att välja ett tradition...`,date:`2026-02-28`,readTime:`6 min`},{slug:`kan-ai-agenter-förbättra-ledtider-inom-logistik`,title:`Kan AI‑agenter förbättra ledtider inom logistik`,description:`Ledtider har blivit den mest kritiska konkurrensparametern i modern logistik....`,date:`2026-02-28`,readTime:`12 min`},{slug:`minska-administrationen-med-ai-för-vårdbolag`,title:`Minska administrationen med AI för vårdbolag`,description:`Att driva ett vårdbolag i Sverige innebär en vardag fylld av krav, regulatoriska förändringar och en administrativ tyngd som växer snabba...`,date:`2026-02-26`,readTime:`6 min`},{slug:`maskininlärning-för-kundtjänstbolag-i-sverige-med-fokus-på-openclaw-sverige`,title:`Maskininlärning för kundtjänstbolag i Sverige, med fokus på OpenClaw Sverige`,description:`Kundtjänst i Sverige befinner sig i en av sina mest disruptiva faser någonsin....`,date:`2026-02-21`,readTime:`10 min`},{slug:`vilka-processer-bör-du-automatisera-med-ai-först`,title:`Vilka processer bör du automatisera med AI först`,description:`En vägledning för långsiktig förvaltning och beslutsro för HNWI och Family Offices...`,date:`2026-02-18`,readTime:`12 min`},{slug:`en-praktisk-guide-till-datahantering-och-ai-för-svensk-handel`,title:`En praktisk guide till datahantering och AI för svensk handel`,description:`En strategisk väg framåt med OpenClaw för långsiktiga ägare...`,date:`2026-02-17`,readTime:`12 min`},{slug:`analysera-big-data-med-openclaw`,title:`Analysera Big Data med OpenClaw`,description:`Pragmatisk översikt för beslutsfattare i mid-market M&A och vårdtjänster...`,date:`2026-02-15`,readTime:`8 min`},{slug:`case-study-ai-agenter-i-byggbranschen`,title:`Case study: AI‑agenter i byggbranschen`,description:`Byggsektorn befinner sig i ett skede där marginaler pressas hårt, projektcykler blir allt mer fragmenterade och konkurrensen förflyttas f...`,date:`2026-02-14`,readTime:`6 min`},{slug:`openclaw-för-e-handelns-kundsupport`,title:`OpenClaw för e‑handelns kundsupport`,description:`E‑handelns kundsupport är idag en komplex, kostnadsdriven och ofta underinvesterad funktion. För medelstora bolag som vill växa genom för...`,date:`2026-02-13`,readTime:`11 min`},{slug:`automatisera-kunders-supportärenden-under-nätter`,title:`Automatisera kunders supportärenden under nätter`,description:`Att bygga en långsiktig och stabil förvaltningsstruktur för digitala tillgångar kräver en lika genomtänkt strategi för kundinteraktion. I...`,date:`2026-02-13`,readTime:`7 min`},{slug:`guide-till-intern-effektivisering-för-konsulter-med-fokus-på-långsiktigt-värdeskapande`,title:`Guide till intern effektivisering för konsulter med fokus på långsiktigt värdeskapande`,description:`Intern effektivisering har blivit en av de mest avgörande konkurrensfaktorerna för konsulter som verkar i en marknad präglad av ökad komp...`,date:`2026-02-13`,readTime:`5 min`},{slug:`moral-enterprises-downturn-outperformance`,title:`moral enterprises downturn outperformance`,description:`description: "Why value‑anchored family enterprises with covenantal ethics outperform during contractionary cycles; an analyst‑grade dist...`,date:`2026-02-13`,readTime:`9 min`},{slug:`hur-mycket-tid-sparar-en-ai-agent-i-veckan`,title:`Hur mycket tid sparar en AI‑agent i veckan`,description:`I svenska småföretag är tiden ofta den mest underskattade tillgången....`,date:`2026-02-12`,readTime:`10 min`},{slug:`lokal-ai-drift-mot-molnbaserad-ai`,title:`Lokal AI drift mot molnbaserad AI`,description:`Svenska företag befinner sig i en tid där artificiell intelligens inte längre är ett val. Det är en nödvändig del av modern konkurrenskra...`,date:`2026-02-11`,readTime:`9 min`},{slug:`ai-lösningar-för-logistik-och-supply-chain-i-sverige`,title:`AI‑lösningar för logistik och supply chain i Sverige`,description:`Logistik och supply chain i Sverige befinner sig i ett skede av strukturell omvandling....`,date:`2026-02-11`,readTime:`8 min`},{slug:`automation-för-svenska-bostadsutvecklare-2026-en-strategisk-översikt-för-långsiktigt-ägaransvar`,title:`Automation för svenska bostadsutvecklare 2026, en strategisk översikt för långsiktigt ägaransvar`,description:`Svensk bostadsutveckling går in i en period av strukturell förändring....`,date:`2026-02-10`,readTime:`8 min`},{slug:`använd-ai-för-att-granska-legala-dokument-och-avtal`,title:`Använd AI för att granska legala dokument och avtal`,description:`En strategi för långsiktig förvaltning inom Hylten-Invests ekosystem...`,date:`2026-02-09`,readTime:`7 min`},{slug:`framtidens-ai-för-e-handlare-i-sverige`,title:`Framtidens AI för e‑handlare i Sverige`,description:`Fokus på OpenClaw och långsiktigt värdeskapande för förmögna ägare och familjekontor...`,date:`2026-02-07`,readTime:`9 min`},{slug:`optimerad-logistik-med-openclaw`,title:`Optimerad logistik med OpenClaw`,description:`Att skapa optimerad logistik med AI är inte längre en framtidsvision. I Sverige utvecklas området snabbt, särskilt när bolag i mellansegm...`,date:`2026-02-05`,readTime:`10 min`},{slug:`hur-ai-agenter-förbättrar-kundresan-för-b2b-i-sverige`,title:`Hur AI‑agenter förbättrar kundresan för B2B i Sverige`,description:`En analys för långsiktig förvaltning och strukturerad tillväxt...`,date:`2026-02-04`,readTime:`9 min`},{slug:`guide-till-ai-för-lokal-marknadsföring-i-sverige`,title:`Guide till AI för lokal marknadsföring i Sverige`,description:`AI har redan förändrat hur företag driver sin lokala närvaro i Sverige, och förändringen går snabbare än vad många hinner absorbera....`,date:`2026-02-04`,readTime:`6 min`},{slug:`ai-och-kundlojalitet-så-bygger-du-starkare-band-2026`,title:`AI och kundlojalitet: Så bygger du starkare band 2026`,description:`Kundlojalitet har aldrig varit en stabil grund att luta sig mot, särskilt inte i segment där transaktioner är komplexa och relationerna o...`,date:`2026-02-03`,readTime:`9 min`},{slug:`hur-ai-förändrar-svensk-bankverksamhet`,title:`Hur AI förändrar svensk bankverksamhet`,description:`AI har gått från att vara en teknisk fotnot till att bli en strategisk kärnfråga inom svensk bankverksamhet....`,date:`2026-02-03`,readTime:`5 min`},{slug:`risker-med-obeprövad-ai-för-småföretag`,title:`Risker med obeprövad AI för småföretag`,description:`Minimalistisk analys för långsiktig förvaltning och trygg OpenClaw‑drift...`,date:`2026-02-01`,readTime:`8 min`},{slug:`automatisera-onboarding-av-kunder-med-ai-agenter`,title:`Automatisera onboarding av kunder med AI‑agenter`,description:`En strategisk genomlysning för långsiktiga förvaltare inom HNWI och Family Office...`,date:`2026-02-01`,readTime:`5 min`},{slug:`så-pitchar-du-ai-internt-till-ledningsgruppen`,title:`Så pitchar du AI internt till ledningsgruppen`,description:`En strategisk vägledning för långsiktigt värdeskapande...`,date:`2026-01-31`,readTime:`10 min`},{slug:`sänk-företagets-elkostnader-med-smart-ai`,title:`Sänk företagets elkostnader med smart AI`,description:`Att optimera energiförbrukningen har blivit en av de mest strategiskt viktiga frågorna för svenska företag, särskilt för verksamheter som...`,date:`2026-01-28`,readTime:`12 min`},{slug:`automation-for-swedish-consulting-firms`,title:`Automation for Swedish Consulting Firms`,description:`A strategic guide to OpenClaw for consultants in Sweden...`,date:`2026-01-27`,readTime:`7 min`},{slug:`framtiden-för-ai-i-svensk-tillverkningsindustri`,title:`Framtiden för AI i svensk tillverkningsindustri`,description:`AI tillverkning Sverige har länge betraktats som ett tekniskt språng som tillhör världens mest avancerade industrinationer. Men svensk ti...`,date:`2026-01-25`,readTime:`6 min`}],b={"sänk-dina-ai-kostnader-med-openclaw":`Praktiska metoder för företag som vill dominera nästa automationsvåg



## Varför OpenClaw Sverige förändrar kostnadsmodellen för AI

Företag som bygger på traditionella AI‑stackar bränner onödigt kapital.  
Inte på innovation, utan på överprovisionerade molnresurser, ineffektiv modellanvändning och manuellt underhåll som borde vara bortautomatiserat.

OpenClaw Sverige angriper problemet fundamentalt.  
Genom en agentisk infrastruktur som orkestrerar arbetsflöden, automatiserar modellval och optimerar resursförbrukning går kostnaderna ner samtidigt som kapaciteten ökar.

Det är en förflyttning från manuell modellhantering till självjusterande AI‑ekosystem.



## Kärnan: Agentiska pipelines som minimerar spill

De flesta företag låter stora modeller tugga igenom varje förfrågan, oavsett om en mindre modell hade räckt.  
OpenClaw bryter detta mönster.

Systemet analyserar varje uppgift.  
Det väljer sedan den modell, den konfiguration och den beräkningsstrategi som ger stabilt resultat till lägsta möjliga kostnad.

Inget överutnyttjande.  
Inget slentrianmässigt kall av tunga modeller.  
Endast precisionsstyrd exekvering.



## Auto‑routing mellan modeller: Grunden för kostnadsreduktion

Hantverksmässig modellrouting är död.  
Automatiken i OpenClaw Sverige följer tre principer:

1. Minimal modell först  
2. Eskalering endast vi fel eller osäkerhet  
3. Lokal inferens när möjligt  

Resultatet är drastiskt lägre API‑förbrukning och fler tasks per krona.

Det här är den typ av optimering som aldrig sker i organisationer som förlitar sig på manuella val eller statiska pipelines.



## Hybridinferens som bryter kostnadskurvan

Ren molnbaserad inferens skalar linjärt i kostnad.  
Lokal inferens skalar i princip inte alls efter initial investering.

OpenClaw Sverige kombinerar båda.  
Systemet bedömer om en uppgift lämpar sig för on‑prem, edge eller moln.  
Detta möjliggör:

- Nerskärningar av inferenskostnader med 40 till 70 procent  
- Stabilare svarstider  
- Minskad belastning på extern API‑infrastruktur  

Hybridinferens är branschens sämst bevarade hemlighet.  
De som implementerar det först får ett massivt försprång.



## Kontinuerlig kvantisering och modellkomprimering

Modeller förändras.  
Företagsbehov förändras snabbare.

OpenClaw komprimerar automatiskt modeller som visar sig vara överdimensionerade.  
Systemet använder:

- Dynamisk kvantisering  
- Strukturpruning  
- Distillation baserat på verkliga dataprofiler  

Detta gör modeller snabbare, billigare och mer responsiva mot specifika dataset.

Företag som undviker komprimering betalar för beräkningsutrymme de inte behöver.  
OpenClaw eliminerar detta.



## Eliminering av hallucinationskostnader

Hallucinationer är inte bara ett kvalitetsproblem.  
De är ett kostnadsproblem.

Felaktiga svar leder till nya förfrågningar.  
Nya förfrågningar leder till fler tokens.  
Fler tokens ger ökade kostnader.

OpenClaw Sverige använder multiagentisk verifikation.  
En agent producerar, en annan granskar och en tredje validerar mot företagsdata.

Det betyder:

- Färre fel  
- Färre omkörningar  
- Färre förbrukade tokens  

Precision är den snabbaste vägen till kostnadsoptimering.



## Tokenbudgetering som faktiskt fungerar

Tokenbudgetering är ett område där många organisationer misslyckas.  
De skapar statiska max‑gränser som ignorera kontextlängd, dokumentstruktur och användarintention.

OpenClaw använder adaptiv budgetering.  
Systemet analyserar varje dataset innan bearbetning och komprimerar prompten intelligent:

- Automatisk sammanfattning  
- Kontextseparation  
- Dokumentprioritering  

Det innebär att stora dokument kan behandlas av mindre modeller utan att förlora kritiska datapunkter.

Företag som implementerar detta ser omedelbar minskning av tokenförbrukning.



## Modellkaskader som minskar processkostnader i varje steg

En modell är inte en pipeline.  
En pipeline är inte intelligent förrän den lär sig av sig själv.

OpenClaw Sverige använder modellkaskader som utvärderar varje steg i processen och justerar flödet efter resultatnivå.

Detta innebär att enkla uppgifter aldrig fastnar i avancerade stadier.  
Det innebär också att komplexa uppgifter eskaleras utan att manuell handpåläggning krävs.

Det här är automatiserad effektivitet som fungerar i alla vertikaler:

- Kundtjänst  
- Dokumentanalys  
- Internt beslutsstöd  
- Automatisering av operationer  
- Kodgenerering och QA  



## Kontinuerlig profilering av arbetslaster

De flesta organisationer saknar realtidsinsikter om hur deras AI faktiskt konsumerar resurser.  
De kör i mörker.

OpenClaw Sverige profilerar allt:

- Tokenförbrukning  
- Modellfördröjning  
- Minnesanvändning  
- Routingfrekvens  
- Felgrad per agent  

Därifrån byggs en dynamisk optimeringsprofil som anpassas över tid.

Det är som att ge sin AI en ekonomiansvarig som aldrig sover.



## Caching som minskar kostnaderna över tid

OpenClaw implementerar flera nivåer av caching:

- Prompt‑cache  
- Embedding‑cache  
- Kontextcache  
- Resultatcache  

Företag som arbetar med liknande datamönster, och det gör nästan alla, reducerar kostnaderna för repetitiva frågor till nära noll.

Caching är en av de mest förbisedda strategierna, eftersom de flesta system saknar en arkitektur som klarar av deterministisk återanvändning av outputs.  
OpenClaw gör det enkelt.



## Lokal embeddingmotor för långsiktig besparing

Att generera embeddings via moln‑API är en dold kostnadsfälla.  
OpenClaw Sverige stödjer lokala embeddingmodeller optimerade för semantisk sökning.

Detta sänker kostnader samtidigt som kontrollen över datan ökar.

Embeddingmotorer är den tysta kostnadsdrivaren i många organisationer.  
Att flytta dem on‑prem är en av de mest kostnadseffektiva åtgärder ett företag kan ta.



## Automatiserad datasanering och pre‑processing

Rådata är dyrt att bearbeta.  
Dåligt förbehandlad data leder till sämre resultat.  
Sämre resultat leder till fler körningar.  
Fler körningar leder till högre kostnader.

OpenClaw använder automatiserad pre‑processing:

- Deduplikering  
- Formatstandardisering  
- Automatisk klassning  
- Selektiv filtrering  

Detta minskar mängden data som modellerna måste hantera och höjer kvaliteten i varje steg.

Ett renare datastråk är ett billigare datastråk.



## Automatiserad orkestrering av arbetsflöden

Många företag försöker knyta ihop AI‑steg med manuellt byggda scripts eller fragmenterade tjänster.  
Det leder till driftskostnader och mänskliga flaskhalsar.

OpenClaw Sverige är agentiskt från grunden.  
Systemet styr arbetsflöden genom autonoma agenter som tar ansvar för:

- Planering  
- Exekvering  
- Optimering  
- Eskalering  
- Korrigering  

Detta eliminerar behovet av dyr DevOps‑underhåll.

Det är automatiseringsnivån som skiljer nästa generations AI‑drivna företag från de som fortfarande sitter fast i traditionella pipeline‑modeller.



## Resultatet: En AI‑stack som betalar för värdet, inte resurserna

När OpenClaw Sverige implementeras korrekt uppstår tre effekter:

1. Kostnaden per uppgift sjunker dramatiskt  
2. Modellkapaciteten skalar utan att infrastrukturen behöver växa  
3. Organisationens AI blir mer förutsägbar och snabbare  

Det är en ny kostnadsmodell, styrd av intelligens snarare än rå beräkning.

Det är så modern AI ska fungera.



## Detta är vad organisationer vinner när de implementerar OpenClaw Sverige

- 40 till 80 procent lägre löpande AI‑kostnader  
- Kortare inferenstider  
- Fler automatiserade arbetsflöden  
- Mindre beroende av molnleverantörer  
- Framtidssäker infrastruktur baserad på agentisk automation  

Det är inte en produkt.  
Det är ett ramverk för att styra hela företagets AI‑ekonomi.



## Slutord

Att sänka AI‑kostnader är inte ett sparprojekt.  
Det är ett strategiskt skifte mot självoptimerande system, agentiska pipelines och intelligent resursförbrukning.

OpenClaw Sverige är byggt för företag som vill leda i stället för att följa.



Inquire about agentic infrastructure`,"så-använder-du-openclaw-för-att-kvalitetssäkra-din-kod":`


Att bygga robust mjukvara i dagens marknadsklimat kräver mer än traditionella arbetssätt.  
Mellansegmentet inom tech präglas av konsolideringar, strukturella effektiviseringar och en allt hårdare konkurrens om både kapital och kompetens.  
Det gäller även inom vårdnära system och carve outs i hälsosektorn där varje fel i kodbasen kan slå direkt mot integrationskostnader, regulatoriska risker och driftsäkerhet.  



Mot den bakgrunden har verktyg som OpenClaw blivit centrala för organisationer som vill minska teknisk skuld, lyfta produktiviteten och få snabbare signaler om kvalitetsbrister.  
OpenClaw kodgranskning har etablerat sig som en lösning som passar både produktbolag och bolag i transaktionsfas, särskilt där AI-utvecklare ska driva modernisering av äldre plattformar.



Den här artikeln ger en strukturerad genomgång av hur du använder OpenClaw för att kvalitetssäkra kod i ett läge där marginalerna för fel är små.  
Fokus ligger på praktisk nytta, skalbarhet och riskreducering, inte romantiska bilder av turnaround-resor.  





## Vad OpenClaw löser i en modern utvecklingsmiljö



Kodbaser växer, team förändras och affärskraven skiftar snabbare än någonsin.  
När system ska separeras i carve outs eller integreras i en koncernarkitektur är det sällan tid till stora omtag.  
OpenClaw adresserar tre typiska svagheter som ofta orsakar fördyringar.



Först: begränsad överblick över kvalitetsnivån i stora kodbaser.  
Det gör det svårt att bedöma risk, uppskatta teknisk skuld eller avgöra vad som behöver moderniseras.



Sedan: ojämn kvalitet mellan team och leverantörer, något som blir särskilt tydligt vid M&A där flera tekniska kulturer ska förenas.  
Här kan OpenClaw kodgranskning skapa en gemensam standard och ett gemensamt språk runt kodkvalitet.



Till sist: avsaknad av automatiserade rutiner för test och kontroll.  
Många bolag i Sverige arbetar fortfarande manuellt eller med lösningar som inte skalar.  
Med OpenClaw kan testautomation Sverige lyfta till en nivå där AI driver både analys och uppföljning.  





## Hur OpenClaw fungerar i praktiken



OpenClaw är i grunden ett analysverktyg som läser och förstår kod på ett sätt som liknar hur en erfaren utvecklare arbetar, men med snabbare och mer konsekvent output.  
Det bygger inte på lösa heuristiker utan på djup semantisk analys.  
För organisationer i transaktion eller omstrukturering innebär det mindre beroende av nyckelpersoner och bättre kontroll över teknisk risk.



Processen är enkel.



Först laddas kodbasen upp i ett säkert arbetsflöde.  
Därefter kartlägger OpenClaw arkitektur, beroenden, säkerhetsbrister, dupliceringar och mönster som tenderar att skapa fel över tid.  
Svaren är inte ytliga, utan förklarar varför ett problem uppstår och vilka konsekvenser det får i driftsatt miljö.



Sedan genereras konkreta rekommendationer, prioriterade efter påverkan och arbetsinsats.  
Det gör att team kan fokusera på åtgärder som faktiskt minskar risk och inte försvinner i kosmetiska förbättringar.  





## Integrering med teamets arbetssätt



För att få ut maxvärde krävs inte stora omorganisationer.  
OpenClaw kan vävas in i befintliga arbetsflöden utan att störa leveranser.  
Det gäller även i bolag med komplex leverantörsstruktur eller distribuerade team.



Det första steget är alltid att etablera en grundnivå.  
När OpenClaw körs första gången får teamet en hälsorapport.  
Den blir utgångspunkten för allt fortsatt arbete.



Nästa steg är att skapa rutin.  
Genom att köra OpenClaw kontinuerligt, gärna som en del av CI, får teamet en tidig varning för försämringar.  
Det minskar behovet av sena brandkårsutryckningar och skapar ett lugnare utvecklingstempo.



Till sist är det viktigt att visualisera framstegen.  
Både utvecklare och ledning behöver se hur riskbilden förändras.  
OpenClaw ger tydliga grafer och sammanfattningar som hela organisationen kan förstå.  





## När OpenClaw gör störst nytta



Många bolag inför OpenClaw som ett generellt förbättringsverktyg.  
Men effekten blir som störst i specifika situationer där kravbilden är högre än vanligt.



### Carve outs inom vård och hälsosektor



Här handlar det ofta om kod som ska frikopplas från större system.  
Risken är att dolda beroenden följer med och orsakar driftstörningar eller regulatoriska problem.  
OpenClaw identifierar dessa beroenden i förväg och minskar risken för dyra överraskningar.



I en miljö där system måste vara stabila och spårbara är det en viktig försäkring.  



### Mid-market M&A



I transaktioner i mellansegmentet är tidspress en konstant faktor.  
Teknisk due diligence ska helst vara djup, men får inte dra ut på tiden.  
OpenClaw ger en snabb men ändå rigorös bild av kodbasens tillstånd.  



Det skapar trygghet för både köpare och säljare och minskar behovet av efterhandsinsatser.  



### Modernisering av äldre plattformar



Många svenska bolag sitter fast i kod som fungerar tillräckligt bra för att ingen vill ta risken att röra den.  
OpenClaw kan här spela rollen som oberoende granskare.  
Det ger ledningen en konkret bild av vad som går att modernisera, vad som kan ligga kvar och vad som behöver fasas ut.  





## Så använder AI-utvecklare OpenClaw i vardagen



AI-utvecklare har en annan arbetsrytm än traditionella utvecklare, eftersom de bygger på kontinuerlig experimentering och tydliga återkopplingsloopar.  
OpenClaw passar väl in i det sättet att arbeta.



Först ger det snabb bekräftelse att nya modeller eller automatiska genereringar inte skapar subtila buggar.  
Sedan kan det användas för att säkerställa att kod som genereras av olika AI-hjälpmedel följer organisationens standard.  
Slutligen kan OpenClaw användas som bas för att automatiskt skapa testfall, något som gör att testautomation Sverige får en stabilare grund.  





## Vanliga arbetssätt som kombineras med OpenClaw



Det finns tre praktiska rutiner som brukar ge snabb effekt.



Först: koppla OpenClaw till kodgranskningar.  
Det gör att mänsklig granskning fokuserar på affärslogik och inte på triviala misstag.



Sedan: använd OpenClaw i samband med sprintavslut.  
Det ger en tydlig bild av om teamet rör sig åt rätt håll.



Till sist: inför en enkel policy.  
När en fil ändras ska den vara renare när den lämnas än när den togs upp.  
Med OpenClaw blir det lätt att mäta.  





## Riskreducering i transaktionsintensiva miljöer



Bolag som befinner sig i en kedja av förvärv eller avyttringar behöver särskilt robust kodkvalitetskontroll.  
OpenClaw hjälper genom att skapa en konsekvent process oavsett vilket team eller vilken plattform som hanterar koden.



Sådana organisationer måste ofta balansera leveranstakt med risk.  
När en kodbas ska över till en ny ägare är det inte ovanligt att historiska beslut plötsligt blir kostnadsdrivande.  
OpenClaw kan här fungera som tidig signal om delar av systemet som kan behöva omförhandlas eller adresseras innan signering.  





## Effekt på ledningens styrning och rapportering



För ledningen är OpenClaw mer än ett utvecklarverktyg.  
Det är ett sätt att få löpande kontroll över en stor riskpost i verksamheten.  
Det gäller både i tillväxtfaser och i perioder av konsolidering.



Genom att koppla resultat från OpenClaw till KPI:er för driftstabilitet, utvecklingstakt och investeringsbehov får ledningen en mer faktabaserad styrning.  
Det minskar behovet av kostsam reaktivitet, och öppnar för mer långsiktiga beslut.  





## Implementeringsstrategi för organisationer som vill börja direkt



En framgångsrik implementering kan genomföras i tre steg.



### Steg ett: teknisk kartläggning



Starta med att låta OpenClaw analysera hela kodbasen.  
Det är viktigt att inte filtrera bort delar som känns jobbiga.  
Ju mer data som läses in, desto bättre helhetsbild.  



### Steg två: etablera standard för kodkvalitet



När analysen är klar bör organisationen enas om vad som är godtagbar nivå.  
Det ger både utvecklare och ledare en enkel referensram.  



### Steg tre: automatisera uppföljningen



Det sista steget är att låta OpenClaw ingå i utvecklingskedjan.  
När förändringar mäts löpande blir förbättringarna stabila, även om team eller leverantörer byts ut.  





## Slutsats



OpenClaw är inte en snabb lösning utan en strukturerad metod för att bygga kvalitetskontroll i en miljö som präglas av förvärv, effektiviseringar och höga regulatoriska krav.  
Det passar organisationer som behöver tydliga svar och som vill arbeta metodiskt snarare än reaktivt.  
För AI-utvecklare, team inom hälsosektorn eller bolag som navigerar mid-market M&A kan det vara skillnaden mellan en stabil integration och en utdragen teknisk skuld.  



Book a strategic consultation`,"skillnaden-mellan-generativ-ai-och-agentisk-ai-för-svenska-företag":`  

## En ny teknologisk skiljelinje  
  

Svenska företag står inför ett vägskifte.  

Generativ AI har snabbt blivit ett verktyg som kan skapa text, bilder och analyser på beställning.  

Men en ny kategori växer fram. Agentisk AI. System som inte bara producerar innehåll utan även utför arbete, fattar beslut inom givna ramar och agerar utifrån mål.  

För förmögna familjer, långsiktiga investerare och ledningar med ansvar över flera generationer, innebär denna skillnad inte bara en teknologisk fråga. Det är en fråga om förvaltning, risk och strategisk kontroll.  

OpenClaw är en central plattform för denna utveckling.  

Den gör det möjligt för svenska företag att gå från experiment till strukturerad användning av agentiska system, med tydliga gränser och säker styrning.  
  

## Varför denna skillnad är avgörande för svenska verksamheter  
  

Generativ AI är hjälpsam.  

Agentisk AI är verksamhetskritisk.  

Det är denna skillnad som avgör hur företag bör investera, organisera och skydda sina digitala tillgångar.  

I en tid av global konkurrens, ökande kostnader och snabb teknikutveckling, behöver svenska företag vara selektiva. Kapital och fokus ska läggas där avkastningen är hög, riskerna kontrollerade och nyttan långsiktig.  

Här blir förståelsen för de två AI‑kategorierna en del av modern företagsstyrning.  
  

  

## En förklarande överblick  
  

Generativ AI producerar något.  

Text.  

Bilder.  

Kod.  

Sammanfattningar.  

Idéer.  

Modellen startar när du ger en prompt och den stannar när svaret är färdigt.  

Det är ett verktyg för människan. Inte en aktör.  

Systemet förstår inte mål, tid, ekonomi eller konsekvens. Det fyller bara på med nästa mest sannolika ord.  
  

## Typiska användningar för svenska företag  
  

- Marknadstexter  
- Kundserviceutkast  
- Analysförslag  
- Interna presentationer  
- Enkla kodsnuttar  
  

Det är användbart. Men det driver sällan direkt värde i kärnverksamheten. Det är snarare en effektiviseringsmotor.  
  

## Begränsningar  
  

Generativ AI saknar minne över tid.  

Den saknar förståelse för kontext, relationer och ansvar.  

Den kan inte fatta egna beslut.  

Den är passiv.  
  

  

## System som arbetar självständigt  
  

Agentisk AI är något annat.  

Det är system som agerar utifrån definierade mål, med kontinuerligt minne, med arbetsflöden och med förmågan att utföra uppgifter över tid.  

Den kan arbeta som en digital medarbetare.  

Den kan koordinera andra system.  

Den kan fatta beslut inom givna ramar.  

Den kan skapa, följa upp, agera, rapportera och förbättra.  
  

## Exempel på agentiskt arbete  
  

- Automatiserad kvalificering av kunddata  
- Kontrollerad portföljrapportering  
- Ekonomiska arbetsflöden med revision och loggning  
- Strukturerad marknadsbevakning  
- Riskmonitorering  
- Interaktion med interna API:er och databaser  
  

Det är inte längre bara textgenerering.  

Det är arbete.  
  

  

## Behovet av kontroll och säkerhet  
  

När AI börjar fatta beslut och agera i verksamheten, förändras kraven.  

Det räcker inte med en modell.  

Företag behöver struktur. Kontroll. Revisionsloggar. Begränsningar. Roller.  

OpenClaw erbjuder en sådan arkitektur, med fokus på säkerhet och styrning.  
  

## Vad OpenClaw tillför  
  

- Ett kontrollerat ekosystem för agentiska arbetsflöden  
- Full spårbarhet  
- Klara gränssnitt mot interna och externa system  
- Möjlighet att definiera företagsanpassade mål och regler  
- Skalbarhet utan att tappa styrning  
  

Det är agentisk AI utan att tappa greppet.  

Det är AI som kan växa med verksamheten.  
  

  

## En strukturell förändring för svenska företag  
  

Det handlar inte om snabbare textskrivning.  

Det handlar om automatiserat beslutsstöd, reducerad personalbelastning, snabbare rapportering och möjligheten att skala utan att öka kostnaderna linjärt.  

Det handlar om att frigöra mänsklig tid.  

Det handlar om att skapa en digital arbetskraft med full spårbarhet.  
  

## Effekter i praktiken  
  

- Kortare ledtider  
- Bättre kvalitetskontroll  
- Mindre manuellt arbete  
- Lägre kostnader  
- Högre precision  
- Ökad förutsägbarhet  
  

Det skapar ett mer resilient företag.  
  

  

## En fråga om förvaltning över generationer  
  

Teknikskiften skapar möjligheter men också risker.  

Generativ AI är ett verktyg som varje medarbetare snabbt kan lära sig.  

Agentisk AI är annorlunda.  

Det kräver governance.  

Det kräver tydliga strukturer.  

Det kräver val av rätt plattform.  

För Family Offices handlar detta om långsiktigt värde, riskhantering, datasuveränitet och operational excellence.  
  

## Tre principer för klok förvaltning  
  

### 1. Börja med styrning  
Definiera mål, informationsgränser och ansvar.  

Agentisk AI måste hållas inom kontrollerade ramar.  
  

### 2. Välj en plattform som är byggd för revisionskrav  
Säkerhet och transparens är centralt för familjeförvaltning och större kapital.  

Här är OpenClaw ett lämpligt val.  
  

### 3. Satsa på långsiktig kompetens  
Att arbeta med agentiska system kräver nya roller och nya rutiner.  

Det är inte ett projekt, det är en omställning av digital kapacitet.  
  

  

## Direkta nyttor för bolag i olika sektorer  
  

### Fastigheter  
Automatiserad bevakning av nyckeltal.  
Hyresflöden.  
Kontraktsuppföljning.  
Rapportering.  
  

### Industri  
Predictive maintenance.  
Leverantörsoptimering.  
Automatiserade kvalitetsprocesser.  
  

### Finans  
Transaction monitoring.  
Riskkontroller.  
Portföljanalys.  
Compliance‑flöden.  
  

### Handel  
Lageroptimering.  
Prisjusteringar.  
Prognosarbete.  
  

Det gemensamma är att agentiska system driver värde utan att belasta personalen.  
  

  

## Från verktyg till arbetskraft  
  

Generativ AI är fortfarande värdefullt.  

Men företag som stannar där, riskerar att halka efter.  

Agentisk AI är ett strukturellt skifte.  

Det skapar skalbarhet, precision och motståndskraft.  

För investerare och förvaltare som arbetar med långa tidshorisonter, är detta en möjlighet att modernisera verksamheter på ett kontrollerat sätt.  

OpenClaw är en plattform som gör denna resa möjlig.  
  

  

Svenska företag behöver förstå skillnaden mellan generativ AI och agentisk AI.  

Det är skillnaden mellan ett verktyg och en digital arbetskraft.  

Det är skillnaden mellan experiment och strategiskt värdeskapande.  

Det är skillnaden mellan kortsiktig effektivisering och långsiktig förvaltning.  

OpenClaw erbjuder en struktur som gör det möjligt att införa agentisk AI med full kontroll, hög säkerhet och tydlig styrning.  

För verksamheter som vill vara relevanta om fem, tio och tjugo år, är detta en strategisk investering.  
  

Contact for stewardship discussion`,"så-väljer-du-rätt-ai-agent-för-ditt-bolag":`OpenClaw Sverige, en strategisk överblick för långsiktiga förvaltare



## Inledning

Valet av en AI‑agent är i dag en fråga som sträcker sig långt bortom teknik och funktion.

Det handlar om risk, kontroll, kontinuitet, och ett ledarskap som strävar efter att bevara värde över generationer.

För bolag med ett förvaltarpräglat synsätt, särskilt inom HNWI‑ och Family Office‑miljöer, blir frågan ännu mer central.

Vilka system kan man lita på. Vilka strukturer skalar utan att skapa informationsläckor. Vilka plattformar agerar verktyg och inte ytterligare ett lager av beroenden.

OpenClaw Sverige har vuxit fram som ett av de få alternativ som kombinerar operativ intelligens, datakontroll och tydlig styrning.

Denna artikel hjälper dig att förstå hur du väljer rätt AI‑agent för ditt bolag, vilka kriterier som bör styra ditt beslut, och hur du undviker de största fallgroparna.



## H2: Förstå skillnaden mellan en AI‑produkt och en AI‑agent

De flesta företag utgår från fel begrepp.

En AI‑produkt är ett verktyg. Det utför ett avgränsat moment.

En AI‑agent är en digital aktör. Den samlar data, gör bedömningar, tar initiativ och driver arbete framåt.

Skillnaden är avgörande.

Det är först när bolag förstår agentens roll som det blir möjligt att göra strategiska val.



### H3: Varför agentmodellen är mer kraftfull

En agent är inte en funktion, den är en process.

Den kan:

- Hämta information från interna och externa källor  
- Initiera aktiviteter utan att bli tillsagd  
- Agera efter regler och interna policys  
- Dokumentera arbetsflöden  
- Upptäcka avvikelser och rapportera risk  

Detta gör agenten till mer än ett verktyg. Den blir en del av verksamheten.

Just därför kräver den rätt val från början.



## H2: Säkerhet och datakontroll måste komma först

I en miljö med kapitalförvaltning, juridiska strukturer och långsiktig riskexponering är säkerhet inte en funktion, det är en grundpelare.

Val av AI‑agent innebär att du väljer vilka data som ska vara rörelseenergi för systemet.

Här är tre frågor som är avgörande.



### H3: 1. Var lagras data

Kontroll över lagring är kontroll över framtiden.

Extern molnlagring utan garanti för jurisdiktion innebär risk för läckor, korsdelning och oönskade beroenden.



### H3: 2. Vem tränar på datan

Många kommersiella AI‑plattformar tränar modeller på användares innehåll.

Det skapar två problem:

- Kunskap lämnar organisationen  
- Konkurrenter kan indirekt få del av din interna logik  

OpenClaw Sverige är uppbyggt för bolag som inte accepterar dessa risker.



### H3: 3. Kan agenten isoleras

En agent ska inte vara en del av ett öppet nätverk.

Den ska vara kontrollerbar, loggbar, och isolerbar.

Bolag med långsiktig kapitalförvaltning behöver en agent som går att ringfencea. Allt annat är kortsiktigt.



## H2: Funktioner du bör kräva av en modern AI‑agent

Valet av agent handlar om mer än enkel uppgiftshantering.

Det handlar om operativ styrkraft.



### H3: Automatiserade arbetsflöden

Agenten ska själv kunna initiera arbetsmoment när villkor uppfylls.

Det gör att organisationer kan frigöra tid, minska fel och skapa stabilitet.



### H3: Tydlig dokumentation

All aktivitet ska gå att spåra.

Varje beslut. Varje datakälla. Varje steg.

Det är först när dokumentationen är automatiserad som agenten blir en del av styrningen.



### H3: Kontinuerlig analys

En agent ska löpande kunna utvärdera:

- risk  
- kostnad  
- avvikelser  
- efterlevnad  

Detta gör att agenten blir ett analysverktyg, inte bara ett verktyg för utförande.



## H2: OpenClaw Sverige, en arkitektur framtagen för förvaltare

OpenClaw Sverige skiljer sig genom att det är skapat för bolag som prioriterar:

- kontroll  
- långsiktighet  
- sekretess  
- intern konsekvens  

Arkitekturen gör att agenten:

- kan köras isolerat  
- kan följa interna policys  
- kan integreras med flerlagersbeslut  
- kan skalas utan dataläckage  

Detta gör att plattformen lämpar sig för Family Offices, diskreta investeringsbolag och strukturer som inte vill binda sig till offentliga moln.



## H2: De fem stegen för att välja rätt AI‑agent

Många bolag gör misstaget att börja med funktioner.

Rätt ordning är en annan.



### H3: 1. Definiera vilka arbetsflöden som får automatiseras

Inte allt ska automatiseras.

Fokus ska ligga på moment som är repetitiva, sekventiella och riskkänsliga.

Detta skapar en tydlig baslinje.



### H3: 2. Identifiera datakällor som agenten får beröra

Segmentering är centralt.

En agent ska inte ha mer åtkomst än den behöver.

Detta är en fråga om styrning, inte om teknik.



### H3: 3. Välj plattform efter säkerhetskrav, inte trend

Trenden pekar mot öppna, breda modeller.

Men långsiktiga bolag väljer alltid kontroll först.

OpenClaw Sverige är ett resultat av just den prioriteringen.



### H3: 4. Testa agenten i isolerade miljöer

Innan implementering bör agenten köras i ett slutet testsystem.

Detta säkerställer:

- att arbetsflöden är stabila  
- att policys efterlevs  
- att analysen är korrekt  

Detta minskar risk innan skarp drift.



### H3: 5. Implementera stegvis och med tydliga loggningsrutiner

Det finns ingen anledning att implementera allt på en gång.

En agent ska växa tillsammans med organisationen.

Dokumentation ska alltid gå att granska.

Detta är särskilt viktigt för bolag som förvaltar kapital över generationer.



## H2: Vanliga misstag och hur du undviker dem

Att välja fel AI‑agent kan skapa stora strukturella problem.

Här är de tre vanligaste misstagen.



### H3: Misstag 1, Att välja en plattform med för bred åtkomst

En agent som kan nå allt blir snabbt ett säkerhetsproblem.



### H3: Misstag 2, Att välja funktion före strategi

Bolag som fokuserar på funktioner tappar kontroll över helheten.

En agent måste passa in i strukturen, inte tvärtom.



### H3: Misstag 3, Att implementera utan förvaltning

En AI‑agent kräver vård, uppdatering och kontroll.

Det är en del av drift, inte ett engångsköp.



## H2: Slutsats, AI‑agenter är ett strategiskt beslut

Valet av AI‑agent är ett av de viktigaste strukturella beslut ett modernt bolag tar.

Det påverkar:

- informationsflöden  
- arbetsprocesser  
- risk  
- styrning  
- kontinuitet  

OpenClaw Sverige representerar en modell där kontroll och stabilitet är grunden.

För bolag som värnar integritet, förutsägbarhet och långsiktig förvaltning är det en naturlig riktning.



Contact for stewardship discussion`,"vikten-av-anpassade-ai-agenter-för-den-svenska-marknaden":`OpenClaw Sverige och den långsiktiga förvaltningen av digitala beslutssystem



  
Svenska företag och förmögna familjer står inför en strukturell förändring.  

  
Beslutsfattande, analys och operativ hantering förflyttas snabbt från manuella processer till autonoma system.  

  
I centrum för denna utveckling finns anpassade AI‑agenter, byggda för lokala regler, svensk affärskultur och den förutsägbara stabilitet som präglat landets ekonomi i decennier.  

  
För ägare med långsiktigt perspektiv är frågan inte om tekniken ska implementeras, utan hur den ska styras och förvaltas.  



## Varför svenska AI‑agenter skiljer sig från globala standardlösningar



Sverige har ett unikt regelverk, en särskild språklig struktur och en förtroendebaserad affärslogik.  

  
Det innebär att generiska globala AI‑lösningar ofta missar tonlägen, systemkrav och risker som är självklara för en svensk aktör.  

  
För HNWI och Family Offices blir detta särskilt kännbart eftersom förvaltningen kräver precision, kontinuitet och diskretion.  

  
Det är därför anpassade AI‑agenter, utvecklade med svensk data och svenska processer som grund, får en särskild betydelse.  

  
OpenClaw Sverige ligger i centrum för denna utveckling, med en modell som betonar offentligt verifierbar logik, transparens och kontroll.  



## Kultur och språk: två avgörande komponenter



AI‑agenter som verkar på den svenska marknaden måste förstå:

  
• Det svenska språket, inklusive undertext, ton och juridiska nyanser.  
  
• Den formella men lågmälda kommunikationsstil som präglar allt från bolagsstämmor till myndighetskontakt.  
  
• Balansen mellan innovation och riskmedvetenhet, ett nordiskt signum.  
  
  
Detta är inte enbart lingvistiska detaljer.  

  
Det handlar om hur beslutslogik formas.  

  
En global generisk agent tenderar att prioritera skalbarhet framför försiktighet.  

  
En svensk agent däremot måste vara kalibrerad för stabilitet, proportionalitet och långsiktigt ägarskap.  



## Varför OpenClaw Sveriges modell passar svenska ägare



OpenClaw erbjuder ett strukturerat ekosystem för att skapa och drifta AI‑agenter.  

  
Den svenska versionen av plattformen lägger dock särskild vikt vid tre områden:

  
• Datadisciplin, där lokala regler och svenska sekretesskrav styr arkitekturen.  
  
• Agentlogik som utformas med tydliga gränser, spårbarhet och ansvar.  
  
• Automatisering som inte ersätter ägarkontroll, utan förstärker den.  
  
  
Detta är avgörande för investerare och familjer som ser AI som ett verktyg för bevarande, inte spekulation.  

  
Tekniken blir en förlängning av ägarens vilja, inte en extern störning.  



## Riskminimering som kärnprincip



I den svenska marknaden är riskhantering centralt.  

  
Regulatoriska förändringar, skatteregler och offentlig insyn gör att varje ny teknik måste granskas med försiktighet.  

  
Anpassade AI‑agenter hjälper till genom:

  
• Automatiserad regelövervakning.  
  
• Kontinuerlig analys av avvikelser i portföljer och verksamheter.  
  
• Tidiga varningar vid förändringar i myndighetskrav.  
  
  
Detta ger svenska ägare ett övertag.  

  
Inte genom hastighet, utan genom robusthet.  



## Diskretion och digital integritet



För förmögna familjer är integritet centralt.  

  
Det gäller både privatliv och kapitalstruktur.  

  
En AI‑agent måste därför kunna:

  
• Drivas i isolerade miljöer.  
  
• Hantera data på ett sätt som följer svenska och europeiska sekretesskrav.  
  
• Minimera exponerade gränssnitt.  
  
  
OpenClaw Sveriges styrka ligger i denna kontrollerade arkitektur, där varje modul är byggd för ägaren snarare än massmarknaden.  

  
I praktiken innebär detta att agenten arbetar diskret, förutsägbart och helt i linje med nordiska krav på trygghet och förvaltning.  



## Autonomi utan att tappa kontroll



En vanlig missuppfattning är att AI‑agenter innebär att beslutsfattande ska lämnas över.  

  
För svenska ägare är detta aldrig aktuellt.  

  
AI‑agenter ska fungera som strukturerade exekutörer, inte som självständiga aktörer.  

  
Det betyder:

  
• Alla beslut ska kunna härledas.  
  
• Det ska finnas tydliga spärrar och gränser.  
  
• Mänsklig styrning ska vara den överordnade mekanismen.  
  
  
OpenClaw Sveriges ramverk bygger på just denna filosofi.  

  
Autonomi tolkas som operativ förmåga, inte som strategisk frihet.  



## Kapitalförvaltning och agentdrivna analyser



Förvaltning av kapital i svenska miljöer kräver noggrannhet.  

  
Likelihood‑modeller, kassaflödesanalyser och riskscenarier lämpar sig mycket väl för automatisering, men bara om logiken är anpassad efter svensk marknadsdynamik.  

  
En anpassad AI‑agent kan:

  
• Övervaka både lokal och global makrodata med svensk riskprofil.  
  
• Identifiera strukturella skiften i realtid.  
  
• Skapa beslutsunderlag som behåller den nordiska försiktigheten.  
  
  
Det handlar inte om att maximera kortsiktiga vinster.  

  
Det handlar om att bevara generationskapital och säkerställa att exponering aldrig överstiger ägarens toleransnivå.  



## Operativ effektivitet i ägarledda bolag



I Sverige drivs många företag av familjer eller enskilda ägare som prioriterar stabilitet över aggressiv tillväxt.  

  
AI‑agenter kan här ge betydande värde genom att:

  
• Automatisera rapportering.  
  
• Förbättra processdisciplin.  
  
• Identifiera flaskhalsar innan de påverkar resultatet.  
  
  
Detta sker utan att förändra kulturen eller driva fram externa managementlager.  

  
Tekniken verkar i bakgrunden, som ett tyst stöd.  



## Efterlevnad, dokumentation och spårbarhet



Svensk dokumentationskultur är både en styrka och en belastning.  

  
En AI‑agent kan avsevärt förenkla efterlevnad genom:

  
• Löpande rapportgeneration.  
  
• Systematiserad arkivering.  
  
• Automatiska kontroller och verifieringar.  
  
  
Istället för att administration växer i takt med verksamheten, minskar den gradvis.  

  
Detta frigör tid och resurser för strategiskt arbete och styrning.  



## En modell för långsiktig stabilitet



I internationella sammanhang domineras AI‑utvecklingen av snabb lansering, korta produktcykler och aggressiv optimering.  

  
Den svenska modellen är annorlunda.  

  
Här premieras kontinuitet, förtroende och gradvisa förbättringar.  

  
OpenClaw Sverige följer denna linje genom att bygga agenter som:

  
• Är hållbara över decennier.  
  
• Lätt kan revideras vid regeländringar.  
  
• Integreras med befintliga system utan att skapa störningar.  
  
  
Detta är i linje med hur svenska ägare traditionellt skapar värde.  



## Familjekontinuitet och kunskapsöverföring



När ägande passerar mellan generationer uppstår ofta kunskapsluckor.  

  
AI‑agenter kan mildra detta genom:

  
• Att bevara historiska beslutsmönster.  
  
• Att ge nya generationer en tydlig bild av hur verksamheten styrts.  
  
• Att fungera som en neutral rådgivande struktur.  
  
  
Detta är särskilt värdefullt i diskreta familjemiljöer där mycket kunskap är muntlig och informell.  

  
Med rätt implementering blir agenten ett arkiv, en verktygslåda och en stabil följeslagare genom ägarskiften.  



## Varför Hylten‑Invest lyfter fram OpenClaw Sverige



För HNWI och Family Offices är målet långsiktig förvaltning snarare än teknisk experimentlusta.  

  
OpenClaw Sverige erbjuder en balanserad plattform där:

  
• Risk är kontrollerad.  
  
• Data är skyddad.  
  
• Logik är transparent.  
  
• Beslutsprocesser är spårbara.  
  
  
Detta är förenligt med de värden som styr svensk privat förvaltning.  

  
Det är också förenligt med den lågmälda men konsekventa innovationskraft som kännetecknar landet.  



## Sammanfattning: Anpassade AI‑agenter är nästa naturliga steg för stabilt svenskt ägande



Den svenska marknaden kräver AI‑system som är skapade med förståelse för:

  
• Lokal lagstiftning.  
  
• Svensk kultur.  
  
• Diskret förvaltning.  
  
• Långsiktigt ägaransvar.  
  
  
Generiska internationella lösningar saknar detta djup.  

  
OpenClaw Sverige erbjuder däremot ett ramverk där teknik och ägarfilosofi går i linje med varandra.  

  
För svenska ägare blir AI inte ett riskmoment, utan ett verktyg för stabilitet, struktur och bevarande av värde över generationer.  



Contact for stewardship discussion`,"ai-agenter-för-den-svenska-fastighetsbranschen":`Roials Alpha OpenClaw Guide



## Inledning: Marknadens skifte mot agentisk automation  

Den svenska fastighetsmarknaden förändras snabbt.  

Dataflöden blir tyngre, transaktioner snabbare, krav på precision hårdare.  

Människostyrda processer når sin gräns.  

Det är här Ai agenter tar över.  

Inte som verktyg, utan som autonoma operativa system som arbetar kontinuerligt, förutser behov, optimerar kapitalflöden och driver affärsbeslut med maskinprecision.  

Det är grunden för Roials Alpha agentic infrastruktur i fastighetssektorn.  



## Varför Ai agenter nu  

Fastighetsbolag sitter på stora datavolymer, men mycket av datan ligger inlåst i system, pdf:er, mejl, utspridda avtal och manuella rutiner.  

Det gör att:  

- beslutsunderlag blir reaktiva i stället för prediktiva  
- värdeutveckling bedöms för sent  
- driftkostnader optimeras i efterhand  
- riskbedömning blir en långsam mänsklig process  

Ai agenter förändrar detta genom att agera konstant och självständigt.  

De konsumerar datan.  
De förstår den.  
De agerar utifrån den.  

Resultat: Fastighetsvärde, flöden, drift, hyresrelationer och investeringsbeslut får en helt annan skärpa.  



## Vad definierar en äkta agentisk lösning  

Det räcker inte med chatbotar, API anrop eller dashboards.  

En Ai agent:  

- tar initiativ  
- driver arbetsflöden själv  
- koordinerar mellan system  
- rapporterar endast när beslut krävs  
- optimerar sina egna processer baserat på resultaten  

En agent är en digital medarbetare, inte en funktion.  



## Var fastighetsbranschen tjänar mest på agentik  

### Driftekonomi  
Agenter analyserar energiförbrukning, fjärrvärme, eltaxor, sensordata och ventilationsmönster i realtid.  

De identifierar avvikelser och föreslår åtgärder eller initierar automatisering direkt via kopplade styrsystem.  

Effekt: 8 till 22 procent lägre driftkostnader enligt interna Roials Alpha analyser.  



### Hyresgästresor  
Autonoma kundresor kan skapa helt nya nivåer av service och retention.  

Agenter hanterar:  

- onboarding  
- ärendeflöden  
- prediktiv behovsanalys  
- renoveringsinformation  
- kontraktshantering  
- betalningspåminnelser  
- förlängningsoptimering  

Hyresgästens upplevelse går från väntetid till friktionslös hantering.  



### Värdering och portföljprediktion  

Med agentisk analys får fastighetsägare en realtidsuppdaterad helhetsbild av:  

- värdeutveckling  
- marknadspåverkan  
- riskzoner  
- ränteexponering  
- kassaflödesstabilitet  
- investeringsfönster  

Det gör att kapitalallokering sker snabbare och mer träffsäkert.  



### Transaktioner och due diligence  

Agenter konsumerar material, jämför mot standardiserade riskmodeller och genererar:  

- avtalssammanfattningar  
- ekonomiska riskkartor  
- avvikelserapporter  
- rekommenderade åtgärder  

Det som tidigare tog veckor kan nu ske på timmar.  



### Underhåll och fastighetsdrift  

Med mönsteranalys och prediktiva modeller kan agenter:  

- flagga risk för skador  
- optimera rondering  
- koordinera leverantörer  
- följa upp SLA i realtid  
- ge beslutsunderlag för långsiktig livscykeloptimering  

Resultat: mindre akuta fel, lägre driftkostnader och planerat underhåll som håller budget.  



## OpenClaw: Navet i agentisk fastighetsautomatisering  

OpenClaw är Roials Alpha kärnstruktur för att bygga, orkestrera och skala agenter över alla enheter i fastighetsorganisationen.  

Tekniskt sett är OpenClaw inte en traditionell plattform.  

Det är en agentisk orkestreringsmotor som:  

- kopplar ihop LLM, RAG, verktyg och proprietära modeller  
- hämtar data från befintliga system  
- skapar operationella loopar  
- hanterar mål, kontext och exekvering  
- driver kontinuerlig förbättring  

Allt sker i realtid och utan behov av manuell initiering.  



## Hur en agentkedja byggs i OpenClaw  

### Steg 1: Datainläsning  
Agenten skannar av system, mappar källor och skapar en intern datamodell.  

### Steg 2: Mål och policy  
Agenten får affärsmål och begränsningar, inte steg för steg instruktioner.  

### Steg 3: Verktygsbindning  
APIer, databaser, interna mallar och automationsflöden kopplas på.  

### Steg 4: Operationell loop  
Agenten genomför ett löpande cykliskt arbete, där varje beslut påverkar nästa iteration.  

### Steg 5: Rapportering  
Endast relevant output skickas till mänskliga användare.  

Det skalar från en agent till femhundra utan att tappa struktur.  



## Strategiska agenttyper för fastighetssektorn  

### Portfolio Analyst Agent  
Analyserar hela beståndet och genererar strukturerad kapitalallokering baserat på data, marknadstrender och riskmodeller.  

### Tenant Interaction Agent  
Driver all kommunikation, ärendehantering och kundservice.  

### Maintenance Prediction Agent  
Identifierar mönster som indikerar framtida fel, prioriterar och koordinerar.  

### Energy Optimization Agent  
Monitorerar energidata och justerar drift efter pris, belastning och historik.  

### Transaction Intelligence Agent  
Automatiserar finansiell och juridisk genomlysning inför affärer.  

### Compliance Agent  
Säkerställer att dokumentation, lagkrav och tillsyn följs utan manuell kontroll.  



## Branschens osynliga flaskhalsar  

De flesta fastighetsbolag sitter på tre centrala problem som hämmar tillväxt:  

- fragmenterade system  
- manuella processer  
- reaktiv beslutsmodell  

Agentisk infrastruktur löser dessa tre samtidigt.  

Det är därför adoptionstakten har ökat kraftigt bland institutionella investerare och större portföljägare.  



## Den kommersiella effekten  

När agenter driver datatunga arbetsflöden skapas:  

- lägre kostnader  
- snabbare affärsbeslut  
- högre avkastning per enhet  
- bättre hyresgästrelationer  
- en mer förutsägbar drift  

Det är inte en produktivitetsökning, det är ett nytt operativt ramverk.  



## Implementering: Från pilot till full agentisk drift  

### Fas 1: Kartläggning  
Identifiering av datakällor, processer och värdeflöden.  

### Fas 2: Agentdesign  
Skapande av agentprofiler, mål och styrparametrar.  

### Fas 3: Deployment  
Agenter integreras i verksamheten och börjar köra i begränsad skala.  

### Fas 4: Skalning  
Fler agenter kopplas på och processer automatiseras vertikalt och horisontellt.  

### Fas 5: Optimering  
Agenternas egna resultat används för att finjustera modeller och arbetsflöden.  



## Ett nytt sätt att arbeta  

Agentisk drift förändrar organisationens struktur.  

Människor går från att vara utförare till att vara övervakare, koordinatorer och beslutsfattare.  

Det skapar:  

- färre fel  
- snabbare flöden  
- bättre datadrivet ledarskap  

Det är lika mycket ett kulturellt skifte som ett tekniskt.  



## Framtiden för agentisk fastighetsautomation  

Inom tre år kommer de flesta större svenska fastighetsbolag att ha:  

- autonoma driftkedjor  
- prediktiva underhållsprogram  
- automatiserade hyresgästflöden  
- transaktionsanalyser utan mänsklig bearbetning  
- realtidsoptimering av portföljer  

Agentik är inte nästa steg.  
Det är det nya nuläget.  



## Sammanfattning  

Ai agenter ger fastighetsägare ett operativt övertag genom att kombinera datadriven precision, autonom exekvering och kontinuerlig optimering.  

OpenClaw från Roials Alpha möjliggör verklig agentisk drift i hela värdekedjan.  

Bolag som implementerar agentisk infrastruktur kommer att ligga på en helt annan nivå i effektivitet, marginal och marknadskraft.  



Inquire about agentic infrastructure`,"hur-frilansare-kan-dubbla-sin-inkomst-med-ai":`
  

Att tala om hur frilansare kan öka sin inkomst med AI handlar sällan om inspiration. Det handlar om struktur, process och en ny arbetsmodell som påminner mer om hur medelstora bolag hanterar sina carve outs inom vårdsektorn än hur kreatörer brukar sköta sina arbetsflöden.  

  

Frilansare som vill tjäna mer, särskilt i Sverige där konkurrensen är hög och marginalerna pressade, behöver ett nytt angreppssätt. Nyckeln är att arbeta som en operativ ägare av en egen portfölj av mini-processer. Det är exakt här AI, särskilt AI-agenter, förändrar spelplanen.  

  

Den här texten går igenom hur en frilansare kan dubbla sin inkomst med hjälp av AI utan romantiska löften, utan magiska genvägar och utan överdrifter. Bara mekanik, optimering och metod. Nyckelorden frilansare tjäna mer AI, AI-agent frilans Sverige och öka produktivitet AI används som en del av helheten.  

  

---

  

## Varför frilansare fastnar i inkomsttaket  

  

De flesta frilansare gör samma misstag som underpresterande mellanstora bolag. De försöker lösa allt manuellt. Inget system. Inga processteg. Ingen kapacitetsskala.  

  

Resultatet blir ett naturligt tak. Varje timme är bunden till ett manuellt uppdrag. Varje leverans kräver en ny start. Varje ny kund innebär en ny börda snarare än en ny möjlighet.  

  

Inom mid-market M&A hade det varit otänkbart. Där vinner man inte på att jaga varje aktivitet för hand. Man vinner på att standardisera processer, isolera det som skapar värde och automatisera resten.  

  

Frilansare som vill tjäna mer behöver samma logik.  

  

---

  

## Var AI förändrar spelplanen för frilansare  

  

AI är inte magi. Det är inte en genväg. Det är en arbetskraftsmultiplikator.  

  

När AI sätts upp rätt fungerar det mer som ett team av junioranalytiker som jobbar i bakgrunden, dygnet runt, med extremt låg kostnad.  

  

Det är därför frilansare i Sverige nu börjar använda AI-agenter som operativa verktyg. Inte som leksaker. Inte som kreativa experiment. Utan som faktiska produktionslinjer.  

  

---

  

## De tre områden där AI snabbt fördubblar frilansarens inkomst  

  

Nedan följer områden där den faktiska effekten blir störst. Det är också här man tydligast ser hur frilansare kan tjäna mer med AI utan att öka sin egen arbetsbelastning.  

  

### 1. Systematiserat förarbete och research  

  

I carve outs inom vårdsektorn läggs stora resurser på detaljerad due diligence. Ingen senior konsult gör research för hand. Det gör juniorer och system.  

  

Som frilansare bör du arbeta likadant.  

  

AI-agenter kan:  

  
- analysera marknader  
- kartlägga konkurrenter  
- skapa underlag för offerter  
- sammanfatta kundmaterial  
- sammanställa underlag inför möten  

  
Den tid som tidigare tog timmar går nu på minuter. Produkten blir jämnare och mer stabil. Resultatet blir högre produktivitet, fler kunder och bättre marginaler.  

  

Det här är inte ett kreativt experiment. Det är ren operativ effektivitet.  

  

### 2. Skalbar leveransstruktur  

  

De flesta frilansare jobbar sekventiellt. Ett projekt åt gången. En leverans åt gången.  

  

AI möjliggör parallella spår.  

  
En frilansare inom text, design, analys eller marknadsföring kan sätta upp AI-agenter som:  

  
- producerar första utkast  
- förbereder kundmaterial  
- skapar alternativa versioner  
- strukturerar data  
- genererar modeller eller förslag  

  
Frilansaren själv går sedan in och gör den värdeskapande granskningen. Det liknar hur seniora konsulter går igenom material från analytiker i M&A-processer.  

  

Det innebär i praktiken att frilansaren kan producera tre till fem gånger mer material utan att arbeta mer. Marginaleffekten är direkt.  

  

### 3. Försäljning och lead-generering som faktiskt fungerar  

  

Det största bortfallet för svenska frilansare sker i lead-flödet. De flesta gör lite sporadiska inlägg, lite LinkedIn, lite mail.  

Resultatet blir slumpmässigt.  

  

AI kan här skapa ett system som liknar ett automatiserat deal-flow.  

  
AI-agenter kan:  

  
- kartlägga potentiella kunder  
- skriva relevanta outreach-meddelanden  
- skapa personliga upplägg baserat på kundens data  
- följa upp enligt en fast sekvens  
- analysera vilka leads som är varmast  

  
Det här är exakt hur mid-market-aktörer arbetar när de bygger pipelines. Metoden fungerar även för en enskild frilansare.  

  

När lead-flödet blir stabilt, försvinner inkomstvariationen. Inkomsten ökar, inte bara genom volym utan genom bättre klienter och högre prispunkt.  

  

---

  

## Därför dubblas inkomsten först när leveranskapaciteten och säljsystemet hänger ihop  

  

En vanlig missuppfattning är att inkomstdubblering kommer från fler kunder.  

I praktiken kommer den från ett sammanhängande system.  

  

I M&A ser man detta tydligt. En carve out lyckas inte för att en enskild del är optimerad. Den lyckas för att helheten fungerar.  

  

Som frilansare krävs samma logik.  

  
De tre systemen måste samspela:  

  
- automatiserat förarbete  
- skalbar leverans  
- stabil lead-generering  

  
Det är först när dessa tre områden är operativt kopplade som kapaciteten ökar utan att arbetsbördan exploderar.  

  

När modellen implementeras korrekt är det vanligt att frilansare ser en 2x ökning i omsättning på 6 till 18 månader. Inte för att de jobbar mer, utan för att deras arbetsmodell liknar hur riktiga transaktionsteam arbetar.  

  

---

  

## Konkreta exempel på hur frilansare i Sverige använder AI idag  

  

Det här är inte teoretiskt. Nedan följer faktiska scenarion från svenska frilansare som implementerat AI-agenter.  

  

### Exempel 1: Frilanscopywriter  

  

Tidigare arbetssätt:  

  
- 8 till 10 timmar per långformad text  
- manuellt researcharbete  
- låg skalbarhet  

  

Arbetssätt med AI:  

  
- AI-agent gör research och sammanställer material  
- agent skapar tre olika strukturer  
- copywritern gör slutbearbetning och tonalitet  

  

Resultat:  

  
- tidsåtgång per text: 2 till 3 timmar  
- högre kvalitet  
- fler kunder och högre prisnivå  



### Exempel 2: Frilanskonsult inom marknadsstrategi  

  

Tidigare arbetssätt:  

  
- manuella analyser  
- tidskrävande onboarding  
- oregelbundet lead-flöde  

  

Arbetssätt med AI:  

  
- agent skapar standardiserade onboarding-paket  
- agent sammanställer analyser från kunddata  
- agent driver automatiserad outreach till nya leads  

  

Resultat:  

  
- bättre struktur  
- stabil pipeline  
- mer strategisk tid och mindre administration  



### Exempel 3: Frilansdesigner  

  

Tidigare arbetssätt:  

  
- mycket manuellt idégenererande  
- högt mentalt slitage  
- få parallella projekt  

  

Arbetssätt med AI:  

  
- agent producerar inspirationsunderlag  
- agent tar fram layoutförslag  
- designern gör kvalitetsgranskning och finess  

  

Resultat:  

  
- bättre kundupplevelse  
- fler projekt  
- kortare leveranscykler  

  

---

  

## Den verkliga poängen med AI är inte automatisering utan avlastning  

  

Frilansare som lyckas med AI har förstått en sak.  

De använder AI för att avlasta sin egen hjärnkapacitet. Inte för att ersätta sig själva.  

  

Det är samma logik som seniora M&A-partners använder. De ägnar sig åt de 10 procent som är värdeskapande, medan analysteamet tar hand om resterande 90 procent.  

  

AI gör att en frilansare får ett eget analysteam. Det är därför det fungerar.  

  

---

  

## Hur en frilansare bygger sitt första AI-system som faktiskt fungerar  

  

Här följer ett minimalt men effektivt angreppssätt.  

  

### Steg 1: Identifiera dina tre mest återkommande uppgifter  

  

Det är ofta:  

  
- research  
- administration  
- förberedande produktion  

  

Dessa uppgifter är perfekta för AI.  

  

  

### Steg 2: Sätt upp en AI-agent för varje uppgift  

  

En agent för research.  

En agent för leveransförberedelser.  

En agent för lead-generering.  

  

Varje agent ska ha tydliga instruktioner och fasta indata.  

  

  

### Steg 3: Mät effekten i tid, inte i känsla  

  

Effekt ska mätas som:  

  
- timmar sparade  
- antal leveranser per vecka  
- kvalitet per leverans  
- stabilitet i pipeline  

  

Det är samma metodik som används i due diligence och operativ effektivisering.  

  

  

### Steg 4: Standardisera dina arbetsflöden  

  

Ett arbetsflöde ska kunna köras utan kreativt tänkande.  

Kreativitet används sedan för den sista justeringen.  

  

  

### Steg 5: Optimera prissättningen efter din nya kapacitet  

  

När outputen ökar kan du justera priserna.  

Inte aggressivt.  

Bara rimligt i relation till den kvalitet och stabilitet du nu erbjuder.  

  

---

  

## Varför svenska frilansare är extra lämpade för AI-drive modeller  

  

Sverige har tre strukturella fördelar:  

  

- hög teknisk mognad  
- vana vid självständigt arbete  
- marknader med tydligt processfokus  

  

Det innebär att svenska frilansare kan implementera AI snabbare än många andra europeiska marknader.  

  

Dessutom är allt mer av uppdragen datadrivna eller digitala, vilket gör AI både naturligt och förväntat i kundleveranser.  

  

---

  

## Vad som skiljer framgångsrika frilansare från resten  

  

Det är inte deras kreativitet. Inte deras talang. Inte deras marknadsföring.  

  

Det är deras förmåga att skapa ett system där AI gör grovarbetet.  

Där frilansaren gör det som skapar värde.  

  

De arbetar mer som ett transaktionsteam än som en solokreatör.  

  

Det är därför de tjänar mer.  

  

---

  

## Frilansare kan dubbla sin inkomst med AI men bara med rätt arbetsmodell  

  

Att dubbla sin inkomst kräver inte mer arbete.  

Det kräver ett nytt arbetssätt.  

  

När AI används som en integrerad del av ett system, inte som ett verktyg vid sidan av, skapas den produktivitetsökning som gör inkomstdubblering realistisk.  

  

Det handlar om disciplin. Process. Och en operativ struktur som liknar de modeller som visat sig fungera i mid-market M&A och carve outs inom vårdsektorn.  

  

Och den fungerar lika bra för en frilansare i Sverige.  

  

---

  

Book a strategic consultation`,"hur-du-mäter-roi-på-ai-automation-i-din-verksamhet":`Guide for OpenClaw Sverige



  
AI automation har gått från experiment till infrastruktur.  

Det betyder att varje beslut om investering måste kunna kopplas till ett mätbart, återkommande värde.  

Ändå står de flesta företag utan en metod för att beräkna ROI på sina AI flöden.  

Den här guiden ger en tekniskt dominant, operationsfokuserad modell för att mäta och optimera ROI från AI automation i realtid.



  
## Varför ROI på AI automation kräver en ny metodik



  
AI är inte en traditionell investering.  

Det är inte en kampanj, ett verktyg eller en mjukvara med fast output.  

Det är en systemisk uppgradering av hur verksamheten arbetar, kommunicerar och exekverar.  

ROI måste därför mätas på tre nivåer:  
1, Processnivå  
2, Systemnivå  
3, Organisationsnivå  



  
Företag som bara följer en av nivåerna underskattar effekten med 30 till 70 procent.



  
## Nivå 1: Processnivå  
Grunden för datadriven ROI



  
Här mäts direkta besparingar och direkta produktivitetsvinster.  

All beräkning börjar med en enkel ekvation:



  
### Formel: Tid före minus tid efter gånger kostnad per timme



  
Det är kärnan.  

Fast och enkel.  

Men den verkliga styrkan ligger i att utöka den med tre variabler:  
1, Felreducering  
2, Kvalitetshöjning  
3, Genomströmning  



  
När AI automation reducerar fel minskar rekylkostnader.  

När kvaliteten ökar minskar behovet av revision och manuell justering.  

När genomströmningen ökar kan fler kunder hanteras med samma resursbas.



  
### Exempel på ROI i processer  
- Kundtjänst svarstid före 90 sekunder, efter 12 sekunder  
- Databehandlingstid före 45 minuter, efter 1 minut  
- Leadkvalificering före 2 timmar, efter 6 minuter



  
AI automation betalar sig själv så fort den frigör mer än två timmar kvalificerat arbete per vecka.  



  
Det är tröskelpunkten som de flesta företag förbiser.



  
## Nivå 2: Systemnivå  
När AI skapar compound effects



  
Här börjar verklig ROI ta form.  

Systemnivå mäter hur flera automatiserade flöden interagerar.  

Det är den nivå där många företag plötsligt ser exponentiella effekter.  



  
### Tre systemeffekter bör alltid beräknas:  
1, Eliminering av flaskhalsar  
2, Parallellisering av arbetssteg  
3, Självlärande optimering från agentiska modeller  



  
Processer som tidigare behövde köras i sekvens blir nu parallella.  

Manuella och kognitivt tunga moment löser sig i realtid.  

Dataflöden som tidigare varit ostrukturerade struktureras innan de når mänskliga team.



  
### Mätmetod på systemnivå  
- Mät genomströmning före och efter  
- Identifiera avlägsnade beroendepunkter  
- Beräkna minskad latency per system  
- Summera besparingar över 30 dagar  
- Korrigera för skalning över 12 månader  



  
Systemnivå är där ROI ofta ökar med 5 till 15 gånger jämfört med isolerad processautomation.



  
## Nivå 3: Organisationsnivå  
ROI som förändrar affärsmodellen



  
AI automation förändrar hur verksamheten fungerar strukturellt.  

Det betyder att traditionella ROI modeller inte längre räcker.  

Här utvärderas:  
- Kapacitetstillväxt utan personalexpansion  
- Omsättningsökning från snabbare leveranskapacitet  
- Bättre marginaler från automatiserad produktion  
- Förmågan att skala utan friktion  



  
Det här är den nivå som investerare följer.  

Det är också här ledningen ser hur AI förändrar hela kostnadsstrukturen.



  
### Tre mätpunkter på organisationsnivå  
1, Från kapacitetsinjektioner till autonoma leveranskedjor  
2, Från manuella avdelningar till agentiska arbetsmodeller  
3, Från linjär kostnadstillväxt till exponentiell outputtillväxt  



  
Ett företag som bygger agentiska arbetsflöden kan öka output med 300 till 1200 procent utan att öka headcount.



  
Det är här ROI blir strategiskt, inte taktiskt.



  
## Hur du bygger en ROI dashboard för AI automation



  
Syftet är inte att mäta allt.  

Syftet är att mäta rätt punkter med hög precision.  



  
### Din dashboard behöver fem huvudvärden:  
1, Minskad manuell tid per process  
2, Minskad felprocent  
3, Ökad genomströmning  
4, Kostnad per flöde före och efter  
5, Intäktseffekt från ökad hastighet  



  
När dessa värden uppdateras automatiskt kan du se ROI dag för dag.  



  
### En tekniskt robust setup innefattar:  
- En central händelselogger  
- Processspårning per nod  
- Integrerade kostnadskoefficienter  
- API koppling mot agentisk infrastruktur  
- Historiska jämförelser per sprint  



  
Det är så du bygger en ROI modell som inte bara är rapportering utan styrning.



  
## Mätpunkter många företag missar  
Trade secrets för korrekt ROI



  
### 1. Latenta kostnader  
Tid som förloras i mikromoment.  

Den är osynlig men försvinner snabbast med AI.



  
### 2. Kommunikationskostnader  
Intern kommunikation minskar med 30 till 60 procent när AI hanterar överlämningar.



  
### 3. Kognitiv belastning  
Det är en av de dyraste faktorerna.  

När den minskar ökar produktiviteten mer än någon timkostnad kan visa.



  
### 4. Scalability delta  
Hur mycket mer output varje ny AI modul genererar utan ytterligare kostnad.



  
### 5. Ökning av datastrukturkvalitet  
Ju bättre struktur, desto bättre beslut.  

Det är en multiplikator som få företag mäter.



  
## ROI på agentiska system  
Nästa nivå av automatisering



  
Agentiska AI system arbetar inte i sekvenser, de opererar i loopar.  

Det betyder att ROI mäts på andra dimensioner:  
- Uppgiftskompletteringsgrad  
- Självjusteringsfaktor  
- Resursoptimering i realtid  
- Felkorrigering utan mänsklig input  



  
Ett agentiskt system förbättrar sin egen ROI medan det körs.  



  
Det är nästa steg för företag som vill ta sig bortom traditionell automation.



  
## Vanliga fallgropar i ROI analys av AI automation



  
### Felräkning 1  
Att bara mäta sparad tid.  

Det underskattar alltid effekten.



  
### Felräkning 2  
Att bortse från kvalitetshöjning och felreducering.  



  
### Felräkning 3  
Att inte räkna kapacitetsvinster, bara kostnadsbesparingar.  



  
### Felräkning 4  
Att mäta ROI innan arbetsflödet stabiliserats.  



  
### Felräkning 5  
Att försöka pressa AI att replikerar gamla processer istället för att designa nya.



  
## Hur du maximerar ROI på bara 90 dagar



  
### Steg 1  
Identifiera tre kritiska flaskhalsar.  

Inte fler, inte färre.



  
### Steg 2  
Bygg automatiserade pipelines runt datan som flödar genom dessa moment.



  
### Steg 3  
Implementera agentiska noder som tar autonoma beslut inom definierade ramar.



  
### Steg 4  
Mät output per dag och justera promptlogiken eller modellvalet.



  
### Steg 5  
Skala vertikalt, inte horisontellt.  

Ett djupt automatiserat område slår tio ytliga.



  
### Steg 6  
Lägg till prediktiva lager för att eliminera framtida flaskhalsar.



  
På 90 dagar är ROI ofta tydligare än i vilken digital investeringsplan som helst.



  
## Sammanfattning  
ROI på AI automation är en fråga om precision och struktur



  
Du mäter inte bara tid.  

Du mäter kapacitet.  

Du mäter kvalitet.  

Du mäter systemeffekter.  

Du mäter hur verksamheten börjar operera på en nivå som tidigare krävt hela team.  



  
AI automation är inte ett verktyg.  

Det är kärninfrastruktur.  



  
Inquire about agentic infrastructure`,"ai-för-pr-och-kommunikation-i-sverige":`


AI kommunikation Sverige har rört sig bort från hypefasen. I dag handlar det inte om att experimentera planlöst utan om att införa system som verkligen avlastar organisationer som arbetar under tidspress, regulatoriska krav och återkommande förvärv eller avknoppningar.



Det gäller särskilt företag i mittensegmentet, vårdbolag som går igenom carve outs och verksamheter som sällan har lyxen av överdimensionerade kommunikationsteam. Där får AI inte bli en leksak, det måste bli en stabil produktionskomponent.



Nedan följer en strategisk och realistisk genomgång av hur AI nu förändrar svensk PR och kommunikation. Utan romantik. Utan teknofantasier. Fokus ligger på det som fungerar och det som genererar värde.



  

## Varför AI nu är kärnan i modern PR och kommunikation i Sverige



Under de senaste två åren har AI i praktiken blivit ett nytt produktionslager i kommunikationsarbetet. Detta beror på tre konkreta skäl.



  

För det första ökar volymkraven. Marknader som tidigare hanterade tre pressmeddelanden per månad producerar i dag två i veckan. Detta gäller särskilt företag med tät transaktionstakt, som private equity­ägda vårdgrupper, industribolag mitt i avyttringar och koncerner som förbereder listningar. Kommunikationsarbetet pressas och skalbarhet blir centralt.



  

För det andra stiger tempot. När en transaktion släpps till marknaden behöver information kontrolleras, kvalitetssäkras och distribueras inom timmar, inte dagar. AI möjliggör snabbare syntes av underlag, bättre riskkontroll och mer konsekvent tonalitet.



  

För det tredje minskar toleransen för produktionsfel. En felaktig formulering i ett pressmeddelande kan påverka relationer med banker, förvaltare och myndigheter. AI kan användas som en första revisionsmekanism som fångar upp logiska luckor, terminologiska fel och otydlig riktning.



  

Det är dessa realiteter som driver adoptionen av PR automatisering i Sverige. Inte fascination för ny teknik, utan konkret operativ press.



  

## AI som förstärker strategiskt PR-arbete



AI ersätter inte kommunikatörer. Det är ett uttjatat påstående men fortfarande sant. Vad AI däremot gör är att frigöra tid till det som människor är bäst på: scenariobedömning, kontextanalys, stakeholder management och riskvärdering.



  

När AI agentbaserade verktyg används korrekt kan organisationer:



  

- korta produktionscyklerna för pressmeddelanden med 40 till 70 procent  

- hantera mer komplex information utan att sänka kvaliteten  

- bygga robustare kommunikationspaket inför M&A-processer  

- öka konsekvensen i tonalitet och faktagranskning  

- skapa mer värde i efterkommunikation och intern förankring  



  

För bolag som kontinuerligt genomför carve outs eller integrationer blir detta särskilt viktigt. Där måste kommunikationen vara synkroniserad med juridik, ekonomi och operativ ledning. AI kan agera nav för informationsflödet, inte som beslutsfattare, utan som strukturerande kraft.



  

## Pressmeddelande AI-agent som realtidsstöd för transaktionsdrivna organisationer



Den mest praktiska användningen av AI idag är pressmeddelande AI-agent som kan ta över förberedelserna inför publika utskick.



  

En sådan agent kan exempelvis:



  

- läsa in avtalsunderlag och bakgrundsdokument  

- extrahera fakta utan att förvränga  

- skapa ett första utkast i korrekt tonalitet  

- föreslå formuleringar som följer branschstandard  

- anpassa språk efter målgrupper, från investerare till patienter  

- kontrollera konsekvens mot tidigare kommunikation  



  

Detta sparar tid. Men viktigare, det reducerar risken för att kommunikationen hamnar i fel riktning när tempot är ansträngt och organisationen är splittrad mellan legala spår, operativa frågor och finansiella deadlines.



  

AI agenten kan även användas för att producera kringmaterial. Detta inkluderar intern Q&A inför fusioner, kundinformation efter avyttringar och uppdateringar till styrelse och kreditgivare. Samma kärnunderlag återanvänds och anpassas utan att tappa precision.



  

## PR automatisering som verktyg för vårdsektorn



Vårdsektorn i Sverige står inför en ovanlig kombination av regulatorisk tyngd och fragmenterad ägarstruktur. Många bolag går igenom förvärv och uppdelningar, samtidigt som all kommunikation granskas hårt av politiska intressenter, regioner, fackförbund och patienter.



  

Här är AI särskilt användbart, inte som ersättare, utan som stabil stödstruktur.



  

AI kan:



  

- säkerställa konsekvens i patientnära texter  

- hjälpa till att synka kommunikation mellan flera enheter  

- ta fram parallella underlag för olika regionkrav  

- kvalitetssäkra medicinsk terminologi  

- producera dokumentation snabbare inför styrelsebeslut  



  

När vårdbolag genomför carve outs blir det kommunikativa trycket extremt. Där kan AI fungera som buffert. Inte genom att göra jobbet åt organisationen, utan genom att frigöra resurser så att kommunikationschefen kan fokusera på relationer, risker och dirigering.



  

## AI kommunikation Sverige och den förändrade externa medielogiken



Medielandskapet har förändrats. Journalister arbetar med kortare cykler och hårdare urval. Redaktionerna vill ha data, klara vinklar och relevans.



  

AI kan hjälpa organisationer att snabbt testa olika vinklar. Detta görs genom att låta modellen ta materialet och generera alternativa dispositionsförslag. Analysen visar vilken vinkel som är minst riskabel och mest mottaglig för publicering.



  

Detta är ingen kreativ ersättning. Det är en praktisk metod för att korta ner tiden mellan insikt och handling.



  

AI kan också användas för att kartlägga vilka delar av materialet som saknar underbyggnad. Denna funktion är särskilt värdefull i pressade förvärvssituationer där datarensning sker sent i processen och där kommunikationen riskerar att luta sig mot antaganden som ännu inte är verifierade.



  

## Internkommunikation utan sentimentalitet



Det finns en tendens att överromantisera internkommunikation. I verkligheten består den ofta av krisande tidplaner, tröga beslutsprocesser och medarbetare som får information för sent.



  

AI kan inte skapa kultur, men AI kan ge struktur. Detta gör internkommunikation mer konsekvent under perioder av operativ stress.



  

Exempel på tillämpningar:



  

- sammanfattning av ledningsmöten i tydlig strukturerad form  

- snabb produktion av underlag för town halls  

- konsekvent tonalitet i all personalinformation  

- snabbare faktakontroll när flera affärsområden påverkas  



  

När organisationer genomgår M&A-förändringar blir detta avgörande. Ledningen måste kommunicera snabbt och säkert. AI hjälper inte genom kreativitet, utan genom ren produktionseffektivitet.



  

## Hur AI integreras utan att skapa nya risker



AI bör införas som en del av befintliga processer, inte som ett parallellt system. Det finns tre principer som minskar riskerna.



  

För det första: använd AI som förberedande verktyg, inte som ensam producent. Det första utkastet kan vara AI-genererat, men den slutliga texten ska alltid granskas av expert.



  

För det andra: begränsa modellernas åtkomst till känslig data. Använd endast system som är anpassade för företagsbruk. Undvik öppna publika modeller för konfidentiellt material.



  

För det tredje: dokumentera arbetsflödena. AI får inte bli ett svart hål i processen. Varje steg ska gå att följa i efterhand.



  

Det är denna typ av disciplin som skapar verkligt värde i verksamheter där tidspress och komplexitet är norm.



  

## Framtiden för AI kommunikation Sverige



Vi kommer att se färre generella AI-verktyg och fler specialiserade AI-agenter som arbetar inom snäva områden. Detta är relevant för kommunikationsavdelningar eftersom det minskar risken för fel och ökar precisionen.



  

Pressmeddelande AI-agent är bara första steget. Framöver kommer även följande att bli standard:



  

- AI som automatiskt skapar riskanalyser inför publika uttalanden  

- AI som jämför tonalitet mellan alla externa dokument  

- AI som upptäcker inkonsistenser mellan budskap i olika marknader  

- AI som genererar kompletta baspaket inför transaktioner  



  

Tekniken går från generell assistans till specialiserade arbetsroller. Det förändrar inte kommunikationschefens uppdrag. Det ökar däremot kapaciteten och lyfter kvaliteten när trycket är som högst.



  

## Slutsats



AI i svensk PR och kommunikation utvecklas snabbt, men inte på ett spektakulärt sätt. Det sker genom vardagliga förbättringar av processer som tidigare varit för långsamma, för manuella och för sårbara.



  

För vårdbolag, M&A-drivna organisationer och verksamheter med höga regulatoriska krav skapar detta ett robustare kommunikationsflöde. AI ger struktur, inte magi. Stabilitet, inte kreativ eufori. Och i en marknad där förtroende och precision är hårdvaluta är det just detta som behövs.



  

Book a strategic consultation`,"slutsats-svenska-företag-och-ai-revolutionen-2026":`## Översikt över OpenClaw och den växande vågen av intelligent automatisering  



Svenskt näringsliv befinner sig i början av en strukturell förändring som sträcker sig bortom tekniska trender och kortsiktiga effektiviseringar.  


Utvecklingen av avancerade AI system, med OpenClaw som ett av de mest centrala ekosystemen under 2026, skapar en ny spelplan för ägarstyrning, riskkontroll och långsiktigt kapitalbevarande.  


Denna artikel ger en fördjupad och strategiskt orienterad slutsats kring hur svenska företag påverkas, vilka möjligheter som nu uppstår och vad privata ägare, familjekontrollerade bolag och diskreta investerarstrukturer bör ta fasta på inför nästa decennium.  



## AI revolutionen 2026 i ett svenskt perspektiv  



AI är inte längre ett teknikval, det är en ägarfråga.  


Sverige har historiskt varit snabbt att adoptera digitala lösningar, men AI revolutionen 2026 innebär ett paradigmskifte som går djupare än tidigare digitalisering.  


Vi ser tre huvudsakliga fenomen:  

- Styrningsansvar och kontroll över datadrivna beslut när AI system får ökande autonomi.  
- Omställning av processer som tidigare betraktats som immateriella eller beroende av mänsklig erfarenhet.  
- Uppkomsten av nya konkurrensfördelar som endast blir tillgängliga för verksamheter med robust datakvalitet och långsiktig kapitaldisciplin.  


I centrum av denna utveckling finns ekosystem som OpenClaw, som gör det möjligt för företag att bygga säkra, skalbara och modulära AI flöden utan att kompromissa med ägarkontroll eller integritet.  



## OpenClaw som strategiskt ekosystem  



OpenClaw representerar en ny generation av AI plattformar som kombinerar automatisering, modellstyrning och verksamhetslogik i en sammanhållen struktur.  


Till skillnad från traditionella AI ramverk fokuserar OpenClaw på:  

- Transparens i beslutsflöden.  
- Styrbarhet och kontroll över modellernas beteende.  
- Integration med existerande system utan att skapa tekniskt beroende.  
- Möjlighet till lokal körning för ägare som kräver sekretess och datasuveränitet.  


För svenska företag innebär detta följande strategiska fördelar:  

- Möjlighet att bygga AI system som är anpassade för långsiktig ägarstruktur, inte enbart kortsiktig operativ effektivitet.  
- Minskad risk för dataläckage och externa beroenden.  
- Förutsägbar investeringstakt där kapital kan styras utifrån ägarens tidshorisont.  



## Risker för företag som avvaktar  



Att stå utanför AI revolutionen 2026 innebär i praktiken stigande strukturell risk.  


Det handlar inte om att investera i teknik, det handlar om att undvika urholkning av konkurrenskraft och marginaler.  


Tre risker är särskilt tydliga:  

- Kostnadsstrukturen blir allt mer ofördelaktig i relation till konkurrenter som använder AI för att automatisera beslutsprocesser.  
- Rekrytering och talangutveckling försvåras eftersom yngre kompetenser förväntar sig AI assistans i sin arbetsmiljö.  
- Beslutsfattande blir långsammare, vilket påverkar allt från leverantörsförhandlingar till produktutveckling.  



## Möjligheter för ägarledda företag och familjekontrollerade grupper  



För ägarstrukturer med lång horisont innebär AI revolutionen en ovanligt gynnsam situation.  


Anledningen är enkel.  


Kapital som kan planeras över tio eller tjugo år får en exponentiell effekt när AI används för att bygga systematiska beslutsstöd, operativ effektivitet och förutsägbara processer.  


Tre områden är särskilt attraktiva:  

- Förvaltning av industriella tillgångar där prediktiva modeller kan minska stillestånd och förbättra kassaflöden.  
- Automatiserad analys inom förvärvsstrategier där datadrivna jämförelser och modellbaserade scenarier skapar bättre beslutsunderlag.  
- Intern kunskapshantering där historik, manualer, processer och erfarenheter blir sökbara och operativt användbara.  



## OpenClaw som grund för långsiktigt ägande  



Det som särskiljer OpenClaw i ett svenskt HNWI och Family Office perspektiv är dess fokus på ägarkontroll.  


Det innebär att:  

- Alla beslut kan spåras tillbaka till modeller och regler som ägaren definierar.  
- Systemet kan skalas utan att skapa teknisk skuldsättning.  
- Det går att hålla datan intern, något som är centralt för diskreta strukturer.  


I praktiken innebär detta att OpenClaw kan fungera som ett nav i företagets digitala infrastruktur.  


Inte som ett modeord, utan som ett tyst och långsiktigt verktyg för robust drift.  



## Steg för att svenska företag ska ta ledningen  



För att fullt ut dra nytta av AI revolutionen 2026 bör företag fokusera på tre fundament:  


### 1. Datarenhet och ordnad struktur  
Utan korrekt datakvalitet minskar AI systemens värde markant.  



### 2. Långsiktig styrning  
AI bör integreras med samma disciplin som finansiell styrning och ägarplanering.  



### 3. Modularitet  
Systemen bör byggas modulärt så att varje del kan bytas ut utan att hela infrastrukturen riskeras.  
Detta är en av kärnprinciperna inom OpenClaw ekosystemet.  



## Slutsats: AI som en ny form av industriellt kapital  



AI revolutionen 2026 är inte en våg som passerar.  


Den är början på en ny era där intelligenta system blir en del av företagets kärnstruktur, på samma sätt som elektricitet, logistik eller finansiering tidigare varit.  


Svenska företag står väl rustade att ta ledningen, men endast om tekniken implementeras med disciplin, struktur och ett långsiktigt ägarfokus.  


OpenClaw erbjuder just den stabilitet och kontroll som denna typ av mognad kräver.  


Frågan är inte längre om AI bör användas.  
Frågan är hur ägare säkerställer att tekniken tjänar det långsiktiga syftet, och inte skapar nya osynliga risker.  



Contact for stewardship discussion`,"automatisera-lönehantering-med-ai":`
   
   
Att automatisera lönehantering är inte längre en fråga om innovation, det är en fråga om driftssäkerhet och skalbarhet. I Sverige ser vi att allt fler bolag inom vård, omsorg och teknikdriven tjänsteproduktion börjar pressas av ökande krav på transparens, kortare ledtider och en allt mer fragmenterad arbetsstyrka.  

   
   
När löneprocesserna blir komplexa och bemanningen skiftar snabbt, blir manuella rutiner en direkt risk, både operationellt och finansiellt. Här har AI inte blivit en lyx utan ett arbetsredskap som eliminerar flaskhalsar och minskar fel.  

   
   
I denna text går vi igenom hur företag i svensk mid-market kan använda AI för att ta kontroll över lönehantering, särskilt i kontexter som carve outs, förvärv, integrationer och sköra HR-funktioner. Vi använder exempel från Pathmakers erfarenhet av att bygga AI-stödda HR automation bots och plattformar som OpenClaw löner.  

   
   
Det är en pragmatisk genomgång, riktad till ledare som behöver stabila lösningar utan kosmetiska löften.  


## Varför automatisera lönehantering nu

   
   
Företag som verkar i svensk mid-market möter kombinationen av ökad reglering, fler kollektivavtal och högre krav på revision.  

   
   
För bolag som genomför förvärv eller avyttringar är lönehanteringen ofta den mest riskutsatta infrastrukturen. Under ett carve out-förlopp ska data extraheras, valideras och migreras samtidigt som driftstopp är oacceptabelt.  

   
   
AI-stödd lönehantering minskar beroendet av enskilda nyckelpersoner, något som är avgörande i situationer där personalomsättning och informationsförluster är vanliga.  

   
   
Med verktyg som HR automation bot och OpenClaw löner kan företag skapa processer som är snabbare, mer konsekventa och betydligt mindre känsliga för mänskliga felbeslut.  


## Vad AI faktiskt gör i löneprocessen

   
   
Det råder ofta en missuppfattning att AI endast är ett analysverktyg. I praktiken fungerar moderna lösningar som operativa motorer som både kör, kontrollerar och dokumenterar arbetet.  

   
   
Här är de centrala funktioner som företag i Sverige använder idag.  

   
   
### Automatisk insamling av tidrapporter

   
   
AI-baserade bots kan hämta tiddata från flera källor, validera dem och flagga avvikelser före körning.  

   
   
Detta är värdefullt i verksamheter med skiftarbete, hyrpersonal och konsultpooler där pappersrapporter och manuella korrigeringar annars stoppar upp flödet.  


### Regelmotor som tolkar kollektivavtal

   
   
Den största risken ligger inte i beräkningen, utan i att tolka regelverket korrekt.  

   
   
AI-moduler kan läsa, strukturera och tillämpa avtalsregler på individnivå. Det innebär att jour, övertid, OB och helgersättning beräknas konsekvent även vid komplex bemanning.  

   
   
Detta minskar både lönekostnadsavvikelser och risken för tvister.  


### Avvikelsehantering med precision

   
   
I stället för att överbelasta löneavdelningen med manuella kontroller kan en HR automation bot sortera avvikelser i relevanta grupper.  

   
   
Den kan identifiera uteblivna tidrapporter, felaktiga schemaändringar eller spår som tyder på dubbelregistrering.  

   
   
Det sparar tid, men viktigare är att det ger en strukturerad arbetsprocess där det är tydligt vad som kräver mänsklig bedömning.  


### Fullständig dokumentation

   
   
Vid revision och due diligence blir dokumentation ofta en flaskhals.  

   
   
AI genererar automatiskt loggar, beslutsträd och beräkningsunderlag. Det gör att bolag slipper lägga veckor på att återskapa processer som egentligen borde varit standardiserade från början.  


## Hur detta påverkar svenska företag i tillväxt och omställning

   
   
I mid-market är lönehantering inte bara en HR-procedur, det är en finansiell datastruktur som påverkar värdering, riskbedömning och integrationskostnader.  

   
   
Här är tre verkliga scenarier där AI-lösningar som OpenClaw löner förändrar utfallen.  


### Scenario 1: Carve out av vårdverksamhet

   
   
När en region säljer en verksamhet till en privat aktör uppstår ofta dataluckor. Avtal är varierade. Tidrapporter saknas. Gamla system har inte exporterbara register.  

   
   
En AI-baserad löneplattform kan återskapa historik genom mönsteranalys och datarensning.  

   
   
Det innebär att företaget kan få en driftsklar lönefunktion på veckor i stället för månader.  


### Scenario 2: Integrering av multisite-bolag

   
   
Företag med flera enheter, ofta med egen kultur och egna system, får svårt att skapa helhetssyn.  

   
   
Genom att centralisera löneprocesserna i en AI-driven motor får ledningen en gemensam databas och enhetliga rutiner.  

   
   
Förvärvsresan blir mindre friktionstung och CFO får snabbare rapportering.  


### Scenario 3: Konsolidering inom omsorg och bemanning

   
   
Verksamheter med timanställda och hyrpersonal är särskilt sårbara. Små fel i schemaläggningen landar på sista raden.  

   
   
AI-lösningar ger här bättre kontroll över arbetstid, frånvaromönster och överkostnader.  

   
   
Det bidrar till att skapa stabilare marginaler i en bransch där variationer annars äter upp lönsamheten.  


## Hur AI förbättrar operativ stabilitet

   
   
Operativ stabilitet är en av de mest underskattade vinsterna.  

   
   
När ett bolag inte vet exakt hur löneprocessen ser ut, vem som äger vilken del eller hur data flödar, ökar risken för driftstopp.  

   
   
AI-baserad lönehantering skapar standardiserade rutiner som inte förändras när personal byts ut.  


### Mindre personberoende

   
   
Företag som genomgår ägarförändringar upplever ofta att en eller två personer sitter på nyckelkunskapen.  

   
   
Med automatisering flyttas processintelligensen till systemet, inte individen.  


### Förutsägbara körningar

   
   
AI kan simulera kommande perioder, varna för förändringar och generera kostnadsprognoser.  

   
   
Detta är särskilt viktigt i vårdbolag där lönekostnaden står för majoriteten av utgifterna.  


### Snabbare onboarding efter förvärv

   
   
Vid M&A är det vanligt att lokala team inte är utbildade i det förvärvande bolagets processer.  

   
   
Med AI blir utbildningsbehovet mindre eftersom mycket av arbetsflödet sker automatiskt och följer systemens logik.  


## Kostnadseffektivisering utan friktion

   
   
Automatisering av löneprocesser handlar inte primärt om personalreduktion. Det handlar om att frigöra tid från repetitiva moment och göra HR-funktionen mer strategisk.  

   
   
Typiska förbättringar i svenska bolag:  

   
   
• färre fel som leder till retroaktiva korrigeringar  
• färre sena inlämningar av tiddata  
• mindre tidsåtgång vid revision  
• bättre underlag för budget och bemanningsplanering  


### Minskad risk för sanktioner

   
   
Fel löner innebär ofta försenade skatter och avgifter. Det kan leda till sanktioner, förseningsavgifter och i värsta fall skada bolagets relation med myndigheter.  

   
   
AI gör att dessa fel fångas tidigt och hanteras före utbetalning.  


## Implementering utan att störa verksamheten

   
   
Ett vanligt problem i traditionella systemprojekt är att driften störs.  

   
   
Pathmakers modell fokuserar på parallell migrering där AI successivt lär sig företagets datapunkter innan den går live.  

   
   
Det innebär att verksamheten fortsätter som vanligt medan automationen byggs upp i bakgrunden.  


### Stegvis metod

   
   
1. Kartläggning av data och regler.  
2. Uppbyggnad av regelmotor i OpenClaw löner eller annan AI-kompatibel plattform.  
3. Testkörning med historisk data.  
4. Justeringar tillsammans med löneavdelningen.  
5. Full drift utan avbrott.  


## Hur HR automation bot förändrar arbetssättet

   
   
En HR automation bot är i praktiken en intelligens som hanterar flödena mellan system, medarbetare och lönefunktionen.  

   
   
Den kan exempelvis:  

   
   
• skicka påminnelser inför varje period  
• hämta in kompletterande data  
• uppdatera scheman  
• validera underlag  
• kommunicera med medarbetare vid avvikelser  

   
   
Det gör att löneavdelningen inte längre behöver agera supportcenter. De kan fokusera på kvalitetskontroll och exceptionella ärenden i stället.  


## AI och datakvalitet i svensk lönehantering

   
   
Datakvalitet är avgörande.  

   
   
AI kan endast skapa stabilitet om den får tillgång till strukturerad och fullständig data.  

   
   
Därför är ett av de första stegen att identifiera dataluckor, skapa nya rutiner och säkerställa att verksamheten matar in informationen korrekt.  

   
   
I många fall har AI också möjlighet att bygga upp saknade datapunkter genom statistiska mönster och regler.  


## Etablerade effekter i svenska mid-market-bolag

   
   
Bolag som redan har infört AI i lönehanteringen rapporterar flera konsekventa resultat.  

   
   
• Kortare ledtider vid månadsskifte  
• Mindre stress på HR-teamet  
• Bättre kostnadskontroll  
• Högre datakvalitet inför rapportering  
• Färre tvister med personal och fack  

   
   
Det viktigaste är dock att ledningen får ett löneflöde som är förutsägbart och skyddat från personberoenden.  


## Slutsats: Automatisering av lönehantering är en strategisk nödvändighet

   
   
Företag som arbetar i en miljö präglad av förvärv, omstrukturering och hård konkurrens behöver stabila och skalbara processer.  

   
   
AI-baserad lönehantering ger bolagen verktygen att standardisera, dokumentera och effektivisera sin mest kritiska operativa funktion.  

   
   
Med lösningar som HR automation bot och OpenClaw löner kan företag i Sverige skapa processer som är robusta nog för expansion och samtidigt flexibla nog för snabba förändringar.  

   
   
Det är ett verktyg för bolag som inte har råd med driftstörningar, dataluckor eller oförutsägbarhet.  

   
   
Vill du veta hur detta kan se ut i praktiken för just ditt bolag, boka en genomgång.  

   
   
**Book a strategic consultation**`,"gdpr-konsekvenser-för-ai-baserad-programvara-i-sverige":`


## Inledning: När AI möter svensk dataskyddsverklighet

GDPR förändrade spelplanen för europeisk datahantering.

  

AI förändrar spelplanen för global programvara.

  

När dessa två krafter kolliderar i Sverige uppstår en ny typ av regulatoriskt landskap, ett område där traditionella juridiska tolkningar inte räcker och där teknisk arkitektur plötsligt blir juridisk arkitektur.

  

För OpenClaw Sverige betyder detta en sak: det är dags att driva AI på ett sätt som är både aggressivt skalbart och juridiskt ogenomträngligt.



## AI i Sverige: Varför GDPR träffar hårdare än man tror

Många företag underskattar hur hårt GDPR slår mot AI‑baserade system.

  

I traditionell mjukvara är data statisk.

  

I AI‑driven programvara är data motorn, bränslet, råvaran och produktionskedjan. Det innebär att varje datapunkt, varje träningskorpus, varje embedding och varje intern logg är en potentiell juridisk risk.

  

GDPR i Sverige tillämpas striktare än i många andra EU‑länder. Tillsynsmyndigheten IMY har ett tydligt fokus: AI får inte använda persondata utan full kontroll, full transparens och full spårbarhet.

  

Detta är problematiskt för AI‑system som:

- tränar på användardata  
- loggar promptar  
- bygger profiler  
- använder externa APIer som vidarebefordrar data utanför EU  
- genererar derivat som fortfarande klassas som personuppgifter  

AI‑företag som agerar som om detta vore “bara en funktion” kommer att brännas. De som förstår exponentiell compliance‑design kommer att dominera.



## Konsekvens 1: Träningsdata blir ett riskkapitalområde

I Sverige betraktas träningsdata som en juridisk tillgång, inte bara teknisk.

  

Det innebär att företag måste:

- *bevisa* att all data har laglig grund  
- *bevisa* att ingen känslig data läckt in  
- *bevisa* att modellen inte kan återskapa personuppgifter  

  

Detta gäller även om modellen inte explicit lagrar data. Bara möjligheten att återskapa eller härleda information kan vara tillräcklig för att IMY ska ingripa.

  

Detta pressar fram två strategiska lösningar:

- syntetiska dataset som ersätter rådata  
- separata träningspipelines med “legal firewalls”  

  

Företag som bygger AI i Sverige utan dessa två pelare spelar i praktiken med regulatoriskt dynamit.



## Konsekvens 2: API‑kedjor blir juridiska transportleder

AI‑system använder ofta externa APIer för modellkörning, vektorlagring, textgenerering eller databerikning.

  

Under GDPR gäller följande princip:

Persondata som lämnar Sveriges eller EU:s jurisdiktion kräver specifik juridisk grund och tekniska skydd.

  

Det innebär att:

- amerikanska LLM‑APIer är riskabla  
- loggade prompts kan vara olagliga  
- telemetry kan klassas som persondata  
- embeddings kan räknas som personaliserad information  

  

Svenska företag som okritiskt använder globala AI‑leverantörer utan lokal datagaranti kan drabbas av massiva böter.

  

OpenClaw‑modellen förespråkar därför:

- lokal inferens  
- EU‑hostade modeller  
- zero retention‑policy  
- prompt intermediation proxies  

  

Detta skapar både snabbare prestanda och juridisk immunitet.



## Konsekvens 3: Automatiserade beslut kräver mänsklig redundans

GDPR förbjuder automatiserade beslut som påverkar individer på ett betydande sätt utan:

- transparens  
- rätt att överklaga  
- mänskligt överinseende  

  

Problemet: moderna AI‑system *är* automatisering. Det är hela syftet.

  

Svenska företag kan inte längre bygga helautomatiserade pipelines utan att inkludera mänskliga knutpunkter, även om de bara fungerar som formella godkännare.

  

För AI‑arkitektur innebär detta:

- kontrollpunkter i agentkedjor  
- mänskliga granskningsnoder  
- audit‑vänlig logging  
- begränsade autonominivåer i känsliga flöden  

  

Det innebär också att företag som bygger agentiska AI‑system måste designa mänskliga inspektionspunkter som är snabba, tekniskt integrerade och minimalinvasiva.

  

Automation kvarstår, men syns mindre.



## Konsekvens 4: Modellens minne är en juridisk attackyta

Persistent memory är en kritisk funktion i moderna AI‑agenter.

  

Men i Sverige tolkas detta som potentiell långtidslagring av persondata.

  

Det spelar ingen roll om datan är komprimerad eller abstraherad. Om det finns en teoretisk möjlighet att knyta en datapunkt tillbaka till en person kan det klassas som personuppgift.

  

Det innebär att AI‑baserade agentarkitekturer i Sverige måste:

- isolera sessionsdata  
- rensa minne regelbundet  
- ha raderingslogik som är kryptografiskt verifierbar  
- skapa separata datadomäner för olika användare  

  

Detta är inte bara overhead. Det är marknadsfördel.

  

Företag som bygger säkra minnesmodeller vinner de största kunderna, särskilt inom myndigheter, bank, telekom och industri.



## Konsekvens 5: Transparenskrav kolliderar med modellens opacitet

Neurala nätverk är inte transparenta.

  

GDPR kräver transparens.

  

Detta är en inbyggd konflikt i AI‑teknologin. Svenska företag måste kunna förklara:

- hur modellen fattar beslut  
- varför användardata används  
- hur länge den lagras  
- vilka interna representationer som skapas  

  

Detta driver fram en ny disciplin:

explainability‑by‑design.

  

Modeller som inte kan förklaras kommer inte vara lagliga i Sverige om de används i högriskbeslut.

  

Företag som äger denna disciplin kommer kunna leverera AI som accepteras av både juridik och marknad.



## Konsekvens 6: Dataminimering tvingar fram modulära AI‑system

GDPR kräver att företag endast samlar in data som är absolut nödvändig.

  

AI vill samla in allt data den får.

  

Svenska företag måste därför bygga modulär AI:

- vissa funktioner körs lokalt  
- vissa körs centralt  
- vissa körs helt utan datalagring  

  

Detta skapar en arkitekturell fördel: modulär AI är snabbare, lättare att optimera, lättare att uppgradera och lättare att segmentera för prestanda.

  

Det som börjar som compliance slutar i bättre produkt.



## Konsekvens 7: Risk för böter och operativ kollaps

IMY har mandat att:

- stoppa system  
- blockera APIer  
- tvinga bort modeller  
- kräva radering av träningsdata  
- utfärda böter upp till 4 procent av global omsättning  

  

Detta är existentiellt för AI‑företag.

  

Men den verkliga risken är operativ:

Om AI‑modellen måste raderas eller dras tillbaka kollapsar hela produktens värdekedja.

  

Det är därför långsiktiga AI‑spelare i Sverige bygger “audit‑resilienta” arkitekturer som kan granskas, justeras och uppdateras utan att förstöra modellen.



## Strategisk väg framåt för svenska AI‑organisationer

Företag som vill vinna med AI i Sverige måste se GDPR som:

- designprincip  
- arkitekturell restriktion  
- konkurrensfördel  
- inträdesbarriär för konkurrenter  

  

Det finns en pattern som fungerar, gång på gång:

- bygg agentkedjor med mänskliga inspektionspunkter  
- separera användardata från modellkörning  
- implementera lokala EU‑hostade modeller  
- skapa syntetiska träningspipelines  
- automatisera allt juridiskt som kan automatiseras  

  

Företag som arbetar så här kommer att dominera när lagens tyngd faller över de mindre förberedda aktörerna.



## OpenClaw Sveriges rekommendation: Agentisk infrastruktur med legal kärna

Den moderna svenska AI‑stacken kräver tre lager:

- ett tekniskt lager med snabb, lokalt körd inferens  
- ett juridiskt lager integrerat i automatiseringen  
- ett intelligence‑lager som optimerar dataminimering, säkerhet och funktionalitet  

  

Detta är den modell som Roials‑Alpha utvecklar. Den är inte kosmetisk. Den är strukturell. Den gör att svenska företag kan skala AI aggressivt utan att kompromissa med lagstiftning.



## Slutsats: Det nya AI‑landskapet är svenskt, strikt och möjlighetstätt

GDPR är inte ett hinder.

  

Det är en kraft som formar marknaden.

  

AI i Sverige måste vara:

- snabb  
- lokal  
- spårbar  
- modulär  
- förklarbar  
- juridiskt immun  

  

De företag som bygger AI på detta sätt kommer att äga nästa decennium.



Inquire about agentic infrastructure`,"ai-för-skola-och-utbildning-möjligheter":`
AI utbildning Sverige befinner sig i ett skede där retoriken börjar ge vika för krav på faktiska resultat. Skolor vill inte höra visioner. Rektorer vill se avlastning. Lärare vill se hur tekniken minskar planeringstid lärare AI utan att skapa nya administrativa sidospår som dränerar deras energi.

  

Det här är en marknad som länge präglats av pilotprojekt som aldrig skalat, höga förväntningar som landat platt och leverantörer som underskattat hur trögrörliga offentliga strukturer faktiskt är. Samtidigt är trycket på förändring större än någonsin. Kompetensbrist. Rekryteringssvårigheter. Ökade krav på individualisering. Budgetar som pressas åt alla håll.

  

Det skapar en situation där skolor och utbildningsaktörer letar efter något som faktiskt håller för operativ verklighet. Som minskar arbetsbördan och höjer kvaliteten utan att rubba hela organisationen.

  

Och det är här AI hittar sin mest konkreta plats i svensk utbildning.



## Den praktiska nyttan är viktigare än tekniken

Utbildningssektorn har historiskt haft en tendens att förälska sig i koncept. Digitalisering. Gamification. 1‑1‑initiativ. Men de mest hållbara investeringarna är de som integreras utan dramatik.

  

AI skola lärare handlar inte om att ersätta pedagoger. Det handlar om att ta bort de delar av deras arbetsdag som aldrig borde ha landat på deras bord.

  

De flesta skolor sitter med samma utmaningar.

  

• Lärarna lägger för mycket tid på planering, administration och dokumentation  
• Elevunderlaget är mer komplext än någonsin  
• Ledningsgrupper saknar data som stödjer beslut i realtid  
• Det saknas strukturerade arbetssätt som kan skalas mellan enheter

  

AI kan adressera alla dessa punkter. Men bara om implementeringen sker med samma precision som vid ett tydligt strukturerat carve out‑projekt inom vårdsektorn. Processerna måste kartläggas. Riskerna måste hanteras. Och verksamheten måste fortgå utan avbrott.



## Var AI gör mest nytta i skolan

Här är de områden där AI levererar tydlig och mätbar nytta i svensk utbildning i dag.



### 1. Minskad planeringstid för lärare

Det här är den mest direkta effekten och den som driver mest efterfrågan.

  

Lärare lägger i snitt 30 till 40 procent av sin arbetstid på planering. AI kan reducera den tiden utan att sänka kvaliteten.

  

Det handlar inte om automatiska lektionsupplägg utan om verktyg som förstår kursplaner, elevförutsättningar och regionala krav. System som hjälper läraren att skapa genomtänkta, differentierade upplägg på minuter i stället för timmar.

  

För en skola med hög personalomsättning eller brist på behöriga lärare kan det här vara avgörande. Det skapar stabilitet i undervisningen oavsett individberoende.



### 2. Stöd för individualisering

Individualisering är ett av de mest belastande kraven på dagens lärare. Förväntan är att varje elev ska möta rätt nivå och rätt typ av stöd.

  

AI kan analysera elevsvar, uppgifter och progression och skapa strukturerad återkoppling som hjälper lärare att ge mer träffsäker undervisning. Det frigör tid för relationellt arbete som ingen teknik kan ersätta.

  

För huvudmän blir effekten ökad kvalitet utan proportionellt ökade kostnader.



### 3. Administrativ avlastning på riktigt

Det här är ett område där många leverantörer lovat mer än de kunnat leverera. Men med rätt system går det att avlasta allt från dokumentation till analys av frånvaro och elevhälsodata.

  

I verksamheter med högt tryck eller fragmenterade stödfunktioner är detta en tydlig stabiliserande faktor. Det minskar friktion och ger lärare mer tid med eleverna.



### 4. Bättre beslutsunderlag för skolledare och huvudmän

De flesta skolledare arbetar i dag reaktivt. Beslutsunderlaget är ofta för sent, för osammanhängande eller för manuellt framtaget.

  

AI‑baserade analysverktyg kan ge realtidsöversikt över resultat, progression, arbetsbelastning och resurser. Det gör det möjligt att fatta snabbare beslut, något som skolor som driver flera enheter ofta saknar.

  

För huvudmän som arbetar med expansion eller effektiviseringsprogram är detta direkt strategiskt.



## Implementering kräver disciplin och realistiska förväntningar

Här faller många projekt. AI i skolan kräver samma strukturella angreppssätt som ett väl genomfört M&A‑arbete. Det måste finnas tydlig målbild, riskhantering och ansvarsfördelning.

  

Några centrala principer.



### 1. Börja med processerna, inte med tekniken

Att stoppa in AI i otydliga arbetssätt ökar bara kaoset. Skolor måste först definiera:

  

• Hur planering ska gå till  
• Hur uppföljning sker  
• Vilka beslut som ska baseras på data  
• Vem som ansvarar för vad

  

AI ska sedan stärka dessa processer, inte ersätta dem.



### 2. Sätt mätbara mål

Följande mål fungerar bättre än fluffiga ambitioner:

  

• Minskad planeringstid med 20 till 40 procent  
• Ökad kvalitet i lektionsstruktur enligt intern granskning  
• Kortare ledtider för elevuppföljning  
• Förbättrade resultat i form av progression, inte bara betygsutfall

  

Det här gör investeringen förutsägbar och hanterbar, särskilt för huvudmän som balanserar begränsade budgetar.



### 3. Undvik lösningar som låser in verksamheten

Många leverantörer bygger system som är svåra att lämna. Långsiktigt är det en risk. Skolor och utbildningsorganisationer behöver lösningar som är modulära, datadrivna och som kan integreras med befintliga system.

  

Det skapar handlingsfrihet och minskar framtida kostnader.



### 4. Avsätt tid för förändringsledning

Teknik som ska minska belastningen skapar ofta motstånd initialt. När implementeringen struktureras som ett förändringsprojekt blir övergången betydligt smidigare.

  

Det handlar inte om stora insatser utan om tydlighet. Vem gör vad. Vad förändras. Vad försvinner. Vad blir enklare.



## Risker som måste hanteras

Precis som vid ett carve out i hälsosektorn finns risker som är enkla att ignorera men dyra att reparera. Här är de vanligaste.



### 1. Överberoende av generiska modeller

Många skolor använder öppna verktyg som inte är anpassade för svensk lagstiftning eller svenska kursplaner. Det skapar risker både för dataskydd och undervisningskvalitet.

  

Modellerna måste vara lokalt anpassade och säkrade.



### 2. Tappad pedagogisk kontroll

Om AI‑verktyg styr undervisningen för mycket finns risk att den professionella bedömningen urholkas. Systemen ska ge beslutsstöd, inte styra.

  

Det kräver tydliga riktlinjer som förankras i kollegiet.



### 3. Kostnadsdrivande implementering

Ett vanligt misstag är att köpa för breda lösningar med för snabb utrullning. Det är mer kostnadseffektivt att börja med:

  

• planering  
• bedömning  
• elevuppföljning

  

Dessa områden ger snabbast avkastning och bygger förtroende för nästa steg.



## Hur huvudmän kan arbeta strategiskt med AI

Framgångsrik AI‑användning i utbildning handlar mindre om teknisk briljans och mer om strukturellt arbete. Särskilt för aktörer som driver flera skolor.

  

Några rekommendationer.



### 1. Centralisera analys och standardisera arbetssätt

Låt inte varje skola uppfinna egna modeller. Bygg centrala strukturer som sedan implementeras lokalt. Det minskar kostnader och skapar konsekvens.



### 2. Involvera lärare i utvecklingen

De lärare som får prova och ge input blir naturliga ambassadörer. Detta minskar motstånd och ökar användningen.



### 3. Skapa en tydlig governance‑modell

Det behövs en struktur som klargör:

  

• vem som äger datan  
• hur AI‑verktyg utvärderas  
• hur risker hanteras  
• hur kvalitet följs upp

  

Det skapar trygghet både för personal och för huvudman.



### 4. Bygg långsiktiga partnerskap

Tekniken förändras snabbt men verksamhetens behov ligger kvar. Leverantörer som klarar kontinuerlig anpassning och leverans är mer värdefulla än de som fokuserar på snabba lanseringar.



## Slutsats

AI utbildning Sverige är inne i ett skifte från vision till operativ nytta. Den verkliga styrkan ligger inte i avancerade modeller utan i hur de används för att avlasta lärare, stabilisera organisationer och skapa förutsättningar för kvalitet som håller även under press.

  

För skolor som vill arbeta långsiktigt, strukturerat och med tydlig effekt är det nu rätt tid att ta steg från experiment till struktur.

  

AI skola lärare är ingen snabb lösning men det är ett av få verktyg som faktiskt kan minska belastningen samtidigt som kvaliteten ökar.

  

Det kräver disciplin, realistiska mål och en tydlig strategi. När dessa komponenter är på plats kan tekniken leverera värde som håller över tid.

  

Book a strategic consultation`,"ai-assistenter-för-redovisningskonsulter-2026":`Roials‑Alpha och OpenClaw Sverige

  
  
AI har redan brutit sönder den gamla redovisningsmodellen.  

2026 är året då redovisningskonsultens arbete inte längre drivs av manuella rutiner, utan av autonoma AI‑assistenter som arbetar i bakgrunden, dygnet runt, med en precision som tidigare bara var teori.

  
  
Roials‑Alpha har blivit kärnan.  

OpenClaw har blivit verktygslådan.  

Det svenska redovisningslandskapet är nu en arena för automatiserade arbetsflöden, agentiska system och AI‑drivna kontrollstrukturer som eliminerar flaskhalsar innan de ens uppstår.

  
  
Den här artikeln är inte en översikt.  

Det är en teknisk genomgång av hur redovisningskonsulter i Sverige 2026 använder nästa generations agentiska AI‑assistenter för att skala, säkra och dominera sina processer.

  
  

## Varför 2026 är brytpunkten  
Redovisningsbranschen byggde i årtionden på sekventiellt manuellt arbete.  

2026 bröts kedjan.  

  
Tre faktorer förändrade allt:

  
1. Agentisk AI, autonoma system som tar egna initiativ och driver flöden.  
2. Serverbaserade redovisningsmotorer, djupt integrerade med bokföringssystem.  
3. Infrastruktur som standardiserade API‑åtkomst till ekonomiska datakällor i Sverige.

  
Resultatet blev ett ekosystem där redovisningskonsulter inte längre utför arbetet själva.  

De orkestrerar AI‑agenter som utför arbetet åt dem.

  
  

## Hur AI‑assistenter fungerar i praktiken  
En modern redovisningsassistents kärna är tre delar:

  
1. **Perception**, AI som tolkar data: kvitton, fakturor, kontoutdrag, e‑post.  
2. **Resonemang**, modeller tränade för att förstå svenska redovisningsregler, K1 till K4.  
3. **Exekvering**, agentiska moduler som skickar data, utför bokningar och hanterar avvikelser.

  
Allt detta binds samman med OpenClaw, Roials‑Alpha och system som Fortnox, Visma och Björn Lundén via API.

  
  

## Den nya arbetsdagen för en redovisningskonsult  
Det som tidigare tog timmar tar nu minuter.  

Eller noll minuter, eftersom en AI‑agent ofta gör jobbet innan någon hinner notera att det behövde göras.

  
Ett exempel:

  
Ett kvitto dyker upp i en kunds mejl.  

OpenClaw läser in det, tolkar belopp, säljare, datum och moms.  

Roials‑Alpha klassificerar verifikationen, kontrollerar konto, kostnadsställe och jämför med tidigare beteendemönster.  

Sedan bokförs det.  

Helt autonomt.

  
Konsulten får bara en notis: *Åtgärdat, matchat och reviderat.*

  
  

## Varför Roials‑Alpha dominerar 2026  
Roials‑Alpha är inte en AI som svarar på frågor.  

Det är en distribuerad redovisningsmotor med:

  
* autonom felhantering  
* revisorlogik  
* prediktiv skattestrukturering  
* internkontroll i realtid  
* kontinuerlig avstämning av balanskonton  

  
Den kör parallella arbetsflöden, granskar sig själv och utlöser nya agenter vid avvikelse.  

  
2026 är det här den faktiska standarden för premiumbyråer i Sverige.  

Alla andra kommer efter.

  
  

## OpenClaw som svensk AI‑infrastruktur  
OpenClaw används för:

  
* dokumenttolkning  
* dataextraktion  
* automatiska korrigeringar  
* avvikelseanalys  
* API‑kopplingar  
* agent‑till‑system‑kommunikation  

  
OpenClaw är också optimerat för svenska skatteregler och svensk bokföringskultur.  

Det ger ett tekniskt övertag.  

Det är därför många byråer i Sverige byter till OpenClaw som sitt automatiseringslager.

  
  

## Trade secrets: de tre systemkombinationerna som ger maximal effekt 2026  
Här är det som skiljer topp 1 procent från alla andra byråer.

  
### Kombination 1: Autonom pre‑bokföring  
OpenClaw + Roials‑Alpha + kundens mejlinbox.

  
Allt som rör ekonomi fångas upp, sorteras och körs genom en självanpassande klassificeringsmotor.  

Det här eliminerar upp till 70 procent av allt basarbete.

  
  

### Kombination 2: Kontinuerlig moms och skatt  
Roials‑Alpha kör en ständig loop som:

  
* beräknar kommande moms  
* justerar momsavvikelser  
* kontrollerar EU‑handel  
* hanterar datumförskjutningar och periodiseringar  

  
Det gör att ingen deadline längre blir en överraskning.

  
  

### Kombination 3: Agentisk avstämning  
AI‑agenter kör kontroller som tidigare bara revisorer gjorde.

  
Bankkonton.  
Skattekonton.  
Kundfordringar.  
Leverantörsskulder.  
Periodiseringskonton.  

  
Minsta avvikelse triggar en åtgärdsagent som fixar felet eller skickar notis till konsulten.

  
Det här är det närmaste branschen har kommit till självkorrigerande bokföring.

  
  

## Hur AI‑assistenter minskar revisionstid  
Revisorer i Sverige rapporterar att organisationer som använder Roials‑Alpha minskar revisionstiden med upp till 40 procent.

  
Varför?  

För att:

  
* avvikelser är redan åtgärdade  
* dokumentation är redan strukturerad  
* arbetsflöden loggas automatiskt  
* allt är spårbart, versionerat och signerat  

  
Det innebär att redovisningskonsulter inte längre “förbereder material för revision”.  

Det är redan klart.

  
  

## Redovisningskonsultens nya roll  
Konsultens värde 2026 ligger i:

  
* systemdesign  
* agentorkestrering  
* processkalibrering  
* rådgivning  
* analys av affärsdata  

  
Det som försvinner är:

  
* kvittohantering  
* manuell kontering  
* manuell avstämning  
* felsökning av kontoplan  
* korrigeringar i efterhand  

  
Därför är redovisningskonsulter 2026 inte längre en administrativ resurs.  

De är AI‑först yrkesutövare som driver automatiserade ekonomiflöden.

  
  

## Certifiering och säkerhet  
Säkerhetsstrukturen ligger på tre nivåer:

  
1. Kryptering av samtliga datakällor.  
2. Separata agentidentiteter för spårbarhet.  
3. Regulatorisk loggning även vid autonoma beslut.

  
2026 är detta krav för att använda avancerade AI‑assistenter i Sverige.  

Roials‑Alpha och OpenClaw uppfyller alla tre.

  
  

## Case: Svensk byrå som tredubblade kapaciteten  
En byrå i Malmö skiftade till full agentisk drift i januari 2026.

  
Resultat efter tre månader:

  
* 72 procent mindre manuellt arbete  
* 3 gånger fler kunder per konsult  
* 92 procent färre sena rapporteringar  
* 100 procent automatiserade avstämningar  
* 7 minuters hanteringstid per månad för en genomsnittlig kund  

  
Detta är inte ett undantag.  

Det är normen där Roials‑Alpha och OpenClaw implementeras korrekt.

  
  

## Varför kunderna märker skillnad  
Kunder som får AI‑driven redovisning märker:

  
* snabbare rapportering  
* färre frågor  
* färre fel  
* konsekvent analys  
* proaktiv varning innan problem uppstår  

  
AI är inte bara effektivare.  

Det är jämnare.  

Det är exakt där människor tidigare tappade fart.

  
  

## Kostnadsmodeller 2026  
AI‑assistenter gör att byråer skiftar från timdebitering till:

  
* flödesbaserad prissättning  
* värdebaserad rådgivning  
* fasta agentiska paket  

  
Det gör det enkelt att skala.  

Det gör det möjligt att sälja tjänster som tidigare var olönsamma.  

Det gör att konsulter tjänar mer, även när de jobbar mindre.

  
  

## Den verkliga vinsten: kontroll i realtid  
AI‑assistenter skapar en helt ny nivå av kontroll.  

Inte bara balanskontroll.  

Affärskontroll.  

  
Roials‑Alpha bygger dashboards där:

  
* omsättning, marginaler och kassaflöden analyseras kontinuerligt  
* trender identifieras innan de syns i rapporterna  
* beslut föreslås, inte bara bokföring  

  
Det är därför företag 2026 vill ha AI‑drivna byråer.  

De vill ha fart.  

De vill ha kontroll.  

De vill ha proaktivitet.

  
  

## Varför det här är framtiden för hela Sverige  
För att AI‑assistenter skapar:

  
* säkrare bokföring  
* snabbare rapportering  
* färre fel  
* högre produktivitet  
* jämnare kvalitet  
* mer strategisk rådgivning  

  
Det är bara en tidsfråga innan detta blir lagstadgat.  

Inte för att tvinga branschen.  

Utan för att det är det enda sättet att hålla jämna steg med den ekonomiska utvecklingen.

  
  

## Slutsats  
2026 är året då redovisningskonsulter inte arbetar med redovisning.  

De arbetar med redovisningssystem.  

De arbetar med agentiska AI‑assistenter.  

De arbetar i en automatiserad infrastruktur där manuellt arbete hör till historien.

  
Roials‑Alpha och OpenClaw är navet.  

Det är så svenska byråer skalar, dominerar och levererar en kvalitet som tidigare var omöjlig.

  
  

**Inquire about agentic infrastructure**`,"säker-e-posthantering-med-lokal-ai":`En pragmatisk genomlysning av risk, struktur och kontroll i en komplex vardag

  
  
  
E‑postmiljön i nordiska bolag har länge varit en blind fläck.  
Trots att inkorgen är den mest frekventa kontaktpunkten med omvärlden är den samtidigt den mest sårbara.  
Det gäller särskilt inom segment där informationsflödet är känsligt, transaktionsdrivet eller regulatoriskt belastat, som i mid‑market M&A och i carve‑outs inom vård och omsorg.  

  
  
  
Under de senaste åren har många organisationer lutat sig tungt på molnbaserade verktyg för att effektivisera hanteringen av stora mängder mejl.  
Problemet är att dessa verktyg ofta innebär datadelning som inte är förenlig med vare sig europeisk datarätt, kundernas krav eller interna riskramverk.  

  
  
  
Lokal AI, som behandlar all information direkt på enheten eller i den egna infrastrukturen, har därför gått från experimentell teknik till en nödvändighet.  
Det är i det här landskapet som Pathmaker och OpenClaw säkert mejl erbjuder ett praktiskt, robust och realistiskt sätt att höja säkerhetsnivån utan att tumma på hastighet eller användbarhet.  

  
  
  
## Varför säker e‑post AI blivit en strategisk fråga  
Traditionellt har e‑post setts som ett verktyg, inte som en strategisk tillgång.  
I dagens informationsintensiva miljö är det ett riskant antagande.  

  
  
  
För företag som hanterar transaktionsmaterial, patientnära uppgifter eller interna omstruktureringsplaner räcker det inte längre att filtrera bort phishing.  
Det handlar om att förstå, kategorisera och kontrollera ett flöde som ofta är både fragmenterat och tidskritiskt.  

  
  
  
Säker e‑post AI, i synnerhet när den körs lokalt, lyfter tre centrala möjligheter.  

  
  
  
### Minskad exponering av känslig information  
När all bearbetning sker lokalt minskar ytan som kan angripas.  
Inga externa servrar får åtkomst till innehållet.  
Inga tredjepartssystem används för analysen.  
Det är en skillnad som blir avgörande i allt från due diligence till vårddokumentation.  

  
  
  
### Stabilare arbetsflöden  
En lokal AI inkorg gör det möjligt att snabbt prioritera hundratals mejl utan att behöva lita på en extern molntjänsts driftsmiljö.  
Driften ligger i organisationens kontroll.  
Det innebär färre störningar och en mer konsekvent hantering.  

  
  
  
### Bättre efterlevnad  
Regelverken kring data har skärpts.  
Framför allt vid vårdrelaterade carve‑outs eller transaktioner som berör känsliga personuppgifter finns ofta höga krav från både köpare, säljare och myndigheter.  
Lokal AI möter kraven utan att arbetsflöden behöver omformas.  

  
  
  
## E‑posthantering i mid‑market M&A  
I mid‑market M&A är informationsflödet ofta mer stökigt än i stora transaktioner.  
Små och medelstora verksamheter saknar sammanhängande datastrukturer och kommunikation sker via dokument, bilder, zip‑filer och direkt skickad känslig information.  

  
  
  
Det skapar tre specifika problem.  

  
  
  
### 1. Oöverskådlig kommunikation  
Parter, rådgivare och interna resurser arbetar i olika plattformar.  
Mejl blir det minsta gemensamma nämnaren och därmed också flaskhalsen.  

  
  
  
### 2. Beroenden till enskilda nyckelpersoner  
Om en CFO eller projektledare sitter på all mailkorrespondens eller all dokumentation blir organisationen sårbar.  
En lokal AI inkorg kan extrahera strukturer utan att behöva skicka ut datan till molnet.  

  
  
  
### 3. Felmarginaler som sprider sig snabbt  
Ett missat mejl kan leda till en försenad Q&A, vilket i sin tur påverkar en hel transaktionsplan.  
Säker e‑post AI reducerar sådana marginaler genom att kontinuerligt strukturera inkorgen.  

  
  
  
## Vårdens särskilda behov  
Healthcare carve‑outs skiljer sig från andra transaktioner genom att de omfattas av ett regelverk som många generella molnverktyg inte kan uppfylla.  
Patientnära kommunikation, journalnära bilagor och avtal med informationsklassning rör sig ofta genom mejl eftersom systemen kan vara fragmenterade.  

  
  
  
Här blir lokal AI inte bara en teknisk preferens, det blir ett sätt att undvika regulatoriska avvikelser.  

  
  
  
### Känsliga bilagor  
Många vårdverksamheter skickar fortfarande känslig information som bilagor.  
Att en molnleverantör får åtkomst till dessa genom AI‑bearbetning kan innebära en direkt överträdelse av lagstiftningen.  

  
  
  
### Strukturella brister i informationsmiljöer  
Under carve‑outs förekommer ofta parallella IT‑miljöer.  
En lokal lösning kan köras inom båda utan att data lämnar respektive miljö.  

  
  
  
### Höga krav från köpare  
Private equity‑aktörer som köper ut vårdverksamheter vill ha full kontroll över vilka dataströmmar som lämnar organisationen.  
Lokal AI blir ett bevisbart svar.  

  
  
  
## Vad OpenClaw säkert mejl tillför  
OpenClaw erbjuder en modell som håller sig inom gränserna för lokal databehandling.  
Det innebär att alla analyser, sammanfattningar, prioriteringar och kategoriseringar sker på enheten eller på en intern server.  

  
  
  
Tre aspekter gör lösningen praktiskt användbar i miljöer som inte har tid för experiment.  

  
  
  
### Stabilitet  
Verktyget är byggt för att fungera under hög belastning.  
Det klarar långa trådar, många bilagor och röriga inkorgar.  

  
  
  
### Säkerhet  
Allt stannar inom organisationen.  
Det finns ingen extern datapipeline.  

  
  
  
### Förutsägbarhet  
Metoden är konsekvent.  
Det gör att den fungerar lika bra i löpande drift som i ett carve‑outfönster.  

  
  
  
## Lokal AI inkorg som arbetsverktyg  
En lokal AI inkorg förändrar inte bara säkerhetsnivån.  
Den förändrar vardagen för analytiker, projektledare och verksamhetsansvariga.  

  
  
  
### Tydligare prioritering  
AI‑modellen identifierar vilka mejl som kräver omedelbar åtgärd.  

  
  
  
### Automatisk sammanfattning  
Långa trådar kondenseras lokalt.  
Ingen extern hantering sker.  

  
  
  
### Kategorisering och taggning  
Systemet bygger en egen struktur över pågående processer.  

  
  
  
### Minskad kognitiv belastning  
När inkorgen hanteras mer konsekvent får organisationen mer kraft att arbeta med kärnfrågorna.  

  
  
  
## Varför molnbaserad AI inte räcker  
Många företag använder redan AI‑stödda funktioner i sina mejlklienter.  
Problemet är att dessa funktioner baseras på molnmodeller.  

  
  
  
För mid‑market M&A och vårdrelaterade carve‑outs innebär det tre risknivåer.  

  
  
  
### Risknivå 1: Exponering av innehåll  
Molnbaserade funktioner behöver analysera datan på externa servrar.  
Det är ofta oförenligt med avtal och regulatoriska krav.  

  
  
  
### Risknivå 2: Låg kontroll  
Organisationen styr inte själv över hur datan används, lagras eller delas inom leverantörens ekosystem.  

  
  
  
### Risknivå 3: Beroende  
Vid driftstörningar hos leverantören förloras funktioner som blivit centrala för arbetsflödet.  

  
  
  
Lokal AI eliminerar dessa tre risker.  

  
  
  
## Implementering utan omtag  
Ett vanligt hinder vid införande av nya verktyg är att de kräver nya rutiner.  
Lokal AI kan däremot läggas ovanpå befintliga processer.  

  
  
  
Det innebär att:  
- inga nya databaser behöver skapas  
- inga nya åtkomstlager behöver införas  
- inga nya externa riskbedömningar behöver göras  

  
  
  
Verktyget fungerar direkt på den befintliga inkorgen.  

  
  
  
## När resultat blir viktigare än teknik  
I mid‑market M&A och healthcare carve‑outs är tekniken bara ett medel.  
Det som räknas är att data stannar där den ska.  
Att arbetet flyter.  
Att riskerna är under kontroll.  

  
  
  
Säker e‑post AI, i lokal form, är därför inte ett tekniskt projekt.  
Det är en operationell förbättring som skyddar processens kärna.  

  
  
  
## Rekommendationer för verksamheter med höga krav  
Följande tre steg ger en stabil grund utan att bromsa verksamheten.  

  
  
  
### Inventera informationsflöden  
Identifiera var känsliga mejl passerar.  
Det räcker ofta med en vecka av genomlysning för att förstå mönstren.  

  
  
  
### Implementera lokal AI successivt  
Börja med avdelningar där risken är högst eller där flödet är mest rörigt.  
Vanligtvis är det ekonomi, juridik, HR eller kliniskt närliggande funktioner.  

  
  
  
### Sätt en intern policy för AI i e‑postmiljöer  
Den behöver inte vara avancerad.  
Den ska tydligt beskriva att känslig mejldata endast får behandlas av lokal AI.  

  
  
  
## Framtiden  
Lokal AI kommer att spela en allt större roll i organisationer där informationsflödet är en konkurrensfaktor.  
Molnlösningar förblir relevanta för generella användningsfall men när datan är känslig eller tidskritisk är den lokala modellen det enda systematiskt hållbara alternativet.  

  
  
  
Pathmaker och OpenClaw säkert mejl står i centrum av den förflyttningen, inte för att tekniken är ny utan för att den är byggd för verkligheten som den ser ut.  

  
  
  
## Nästa steg  
Företag som arbetar med transaktioner, vårdverksamheter eller integritetskänsliga processer behöver inte längre kompromissa mellan säkerhet och produktivitet.  
Lokal AI gör att båda kan uppnås samtidigt.  

  
  
  
Book a strategic consultation`,"kan-man-lita-på-en-ai-agent-med-företagets-ekonomi":`


  
Att överväga en AI‑agent som stöd eller medförvaltare av ett företags ekonomi kräver en annan sorts eftertanke än att välja ett traditionellt ekonomisystem.  

För ett familjeföretag.  

För en ägarledd struktur.  

För en förmögenhetsförvaltare eller ett Family Office, där generationsansvar och riskkontroll är centrala värden, är frågan större än teknik.  

Det handlar om förtroende.  

Det handlar om datasäkerhet.  

Och det handlar om vem som bär det långsiktiga ansvaret.



  
I denna text utforskas hur en AI‑agent kan användas som stöd i ekonomisk styrning, samtidigt som man behåller kontroll, integritet, sekretess och långsiktig stabilitet.  

Frågan är inte bara om tekniken fungerar.  

Frågan är om förvaltningen av data håller samma standard som förvaltningen av kapital.



  
## Vad innebär det att anförtro ekonomiska data till en AI‑agent



  
Många företag använder redan AI i någon form. Det kan vara kategorisering, bokföringsautomation, fakturagranskning eller kassaflödesprognoser.  

Men en AI‑agent är något annat.  

En AI‑agent kan agera.  

Den kan hämta data, analysera dem, föreslå åtgärder och i vissa fall utföra transaktioner om den ges tillstånd.  

Det innebär snabbhet och precision.  

Det innebär effektivitet.  

Men det innebär också att företaget behöver formulera en tydlig policy för vilka typer av data som lagras, hur de lagras, hur de skyddas och hur man säkerställer att modellen aldrig använder eller exponerar känslig information på ett sätt som inte är avsett.



  
En AI‑agent blir en medförvaltare av strukturen.  

Det innebär att företaget behöver samma typ av rigorös kontroll som när en ny mänsklig aktör ansluts till ekonomifunktionen.  



  
## Centrala risker som företag ofta underskattar



  
### Exponering av rådata



  
En AI‑agent tränas inte på företagsdata i traditionell mening, men den bearbetar stora mängder information.  

Om infrastrukturen inte är korrekt konfigurerad kan rådata exponeras för tjänsteleverantörer eller tredjepartsleverantörer.  

Det är sällan avsiktligt.  

Men det sker.  

Och för många familjeföretag eller diskreta strukturer är det oacceptabelt.  



  
### Metadata som avslöjar mer än innehållet



  
Även om innehållet är krypterat kan metadata ge signaler som är känsliga.  

Ett kontonummer.  

En betalningsfrekvens.  

Ett ovanligt leverantörsmönster.  

Metadata är ofta mer avslöjande än råa dokument.  

En AI‑agent måste därför hanteras inom en arkitektur där även metadata är skyddade och aldrig lämnar kontrollerade ytor.  



  
### Felaktiga automatiska beslut



  
AI‑agenter kan agera snabbt.  

För snabbt.  

Ett felaktigt beslutsunderlag kan resultera i felaktiga transaktioner, felklassificeringar eller oönskade notifieringar.  

Därför bör en AI‑agent inom ekonomi arbeta med en strikt tvåstegsmodell.  

AI föreslår.  

Människa godkänner.  

Detta är särskilt viktigt i familjeföretag där värdebevarelse går före snabbhet.  



  
### Långsiktiga sekretessrisker



  
Ekonomiska data är inte branschhemligheter.  

De är familjehemligheter.  

De speglar mönster, relationer och strukturer som kan sträcka sig över decennier.  

En läcka kan skada mer än ett kvartalsresultat.  

Den kan påverka generationer.  



  
Därför måste en AI‑agent för företagets ekonomi alltid användas inom en säkerhetsfilosofi där skyddet inte bara gäller idag utan över lång tid.  



  
## Varför företag trots riskerna överväger AI‑agenter



  
Det finns verkliga fördelar, särskilt för företag med komplexa strukturer eller höga krav på kontroll och snabb transparens.  



  
### Omedelbar tillgång till finansiell insikt



  
En AI‑agent kan sammanställa kassaflöde, likviditet, investeringsdata och riskexponering på sekunder.  

I familjeföretag eller förvaltningsstrukturer innebär detta att ägare får snabb överblick utan att belasta ekonomiteamen.



  
### Minskad operativ risk



  
Handpåläggning skapar fel.  

AI‑stödda kontroller kan tidigt upptäcka avvikelser, dubbletter, bedrägeriförsök eller mönster som annars tar månader att identifiera.



  
### Stabilitet i administrationen



  
Familjeföretag befinner sig i generationsskiften.  

Ny personal tillkommer.  

Administrativa system byts ut.  

En AI‑agent som är korrekt konfigurerad skapar kontinuitet över tid, oberoende av personalomsättning.  



  
### En neutral struktur



  
En AI‑agent driver inga agendor.  

Den är inte part i interna diskussioner.  

Den är inte kopplad till interna lojaliteter.  

För vissa ägarfamiljer är denna neutralitet en styrka.  



  
## Den avgörande frågan: datasäkerhet



  
Det centrala kriteriet är inte funktionalitet, utan säkerhet.  

Och säkerhet är inte en inställning, utan ett system.



  
### Tre säkerhetsprinciper som måste följas



  
**Minimal datadelning**  
AI‑agenten bör endast ges exakt den information som krävs för uppgiften.  

Inga öppna mappar.  

Inga generella åtkomster.



  
**Lokal eller isolerad körning när möjligt**  
AI‑agenter kan köras i miljöer där data aldrig lämnar företagets egna system.  

Detta är särskilt viktigt för Family Offices och företag med låg extern transparens.



  
**Absolut loggning och full spårbarhet**  
Varje åtgärd måste kunna granskas, oavsett om den är initierad av användare, system eller agent.  

Spårbarhet är försäkringen mot fel.  

Spårbarhet är den verkliga säkerheten.  



  
### En AI‑agent får aldrig bli en svart låda



  
Det är avgörande att alltid kunna granska:  

Vilken data lästes in.  

Vilken slutsats drogs.  

Varför agenten rekommenderade eller utförde ett steg.  

Transparens är inte bara en trygghetsfråga.  

Det är en styrningsfråga.  



  
## Riskavlastning genom strukturerad IA‑styrning



  
AI‑styrning, eller IA Governance, är ramverket som avgör om ett företag kan använda AI‑agenter på ett säkert sätt.  

Det handlar om att etablera tydliga ramar.  

Inte om att förlita sig på tekniken.  



  
### De viktigaste styrningskomponenterna



  
**Rolldefinition**  
Agenten ska ha tydligt definierade och avgränsade roller.  

Aldrig mer än vad som behövs.



  
**Manuella godkännanden i varje nyckelprocess**  
Alla transaktioner.  

Alla förändringar av data.  

Alla riskexponeringar.  



  
**Regelbunden revision av agentens beteende**  
Loggar behöver granskas.  

Rättigheter behöver omvärderas.  

Modellen kan behöva omtränas eller begränsas.



  
**Kryptering som standard, inte som tillval**  
Allt som passerar agenten bör vara skyddat även inom interna nätverk.  

Det finns ingen anledning att ta risker.



  
## Hur familjeföretag bör tänka långsiktigt



  
Familjeföretag planerar inte för nästa kvartal.  

De planerar för nästa generation.  

De planerar för förvaltning, inte för fluktuation.



  
Det innebär att en AI‑agent måste införas som en del av en flerårig strategi.  

Inte som ett experiment.  

Inte som en snabb lösning.  



  
### Tre frågor varje ägare bör ställa



  
**Skyddar denna teknik mig eller utsätter den mig för beroenden jag inte kan kontrollera**



  
**Är datan säker även om leverantören förändras i framtiden**



  
**Kan nästa generation ta över systemet utan att förlora kompetens eller kunskap**



  
Att integrera en AI‑agent i ekonomifunktionen är därför ett ägarbeslut.  

Inte ett IT‑beslut.  



  
## När AI‑agenter blir ett konkurrensmedel



  
Företag med ordnad datainfrastruktur kan använda AI‑agenter som strategiska verktyg.  

De kan skapa:  

Snabbare riskanalyser.  

Bättre beslutsunderlag.  

Tydligare rapportering.  

Och ökad robusthet över tid.



  
Men det kräver att tryggheten kommer först.  



  
En AI‑agent som är korrekt hanterad blir aldrig en risk.  

Den blir en del av det långsiktiga kontrollsystemet.  



  
## Slutsats: Ja, man kan lita på en AI‑agent men bara under rätt villkor



  
En AI‑agent är inte ett egenintresse.  

Den har ingen vilja.  

Den har inga motiv.  

Den är en struktur som måste styras.  

Den kan ge kraftfulla fördelar men endast om säkerhet och integritet hålls som högsta prioritet.  



  
För familjeföretag och förvaltningsstrukturer är grundprincipen enkel.  

Tekniken är ett verktyg.  

Förtroendet måste byggas med processer, inte med löften.  



  
När policys är tydliga.  

När data är isolerad.  

När agerandet är spårbart.  

När ägarstyrningen är ordnad.  

Då kan en AI‑agent bli ett värdefullt stöd för ekonomin.  

Inte som ersättare, utan som medförvaltare i en trygg och kontrollerad struktur.  



  
Contact for stewardship discussion`,"kan-ai-agenter-förbättra-ledtider-inom-logistik":`OpenClaw fallstudie



## Introduktion: När logistik inte längre tål friktion

Ledtider har blivit den mest kritiska konkurrensparametern i modern logistik.  
Kunder accepterar inte längre variationer, manuella fel eller långsam informationssynk.  

AI‑agenter förändrar just nu kärnan av hur logistikflöden styrs.  
Inte som dashboards.  
Inte som RPA.  
Utan som autonoma system som förstår, förutser och agerar.  

Roials‑Alpha har analyserat ett av de mest aggressiva casen i Norden.  
OpenClaw.  
En aktör som skiftade från reaktiv drift till agentstyrd logistik.  
Resultatet var mer än förbättrade ledtider.  
Det var en total omkalibrering av hur kapacitet, kostnader och beslut hanteras.



## Varför traditionell logistikstyrning är för långsam

Innan vi går in i caset behöver vi klargöra ett faktum.  
Manuella logistikprocesser är inte designade för realtid.  

De är designade för människor.  
Och människor saknar två element.  
Konstant situational awareness och omedelbar mikro‑optimering.

De flesta organisationer hamnar i samma mönster.

  
• För mycket data som ingen behandlar i rätt tid.  
  
• Avdelningar som agerar sekventiellt istället för simultant.  
  
• Oförmåga att se beroenden mellan lager, transporter och kundflöden.  
  
• Ständiga brandkårsutryckningar som ses som normala.  


Problemet är inte kompetens.  
Problemet är systemets fysik.  
Mänsklig koordination skalar inte i komplexa flöden.  

AI‑agenter gör det.



## Vad är en AI‑agent i logistikkontext

En AI‑agent är inte en chatbot.  
Det är ett autonomt beslutsobjekt som kan:

  
• Läsa data i realtid.  
  
• Förstå kapacitetsbegränsningar och beroenden.  
  
• Initiera åtgärder utan mänskligt godkännande.  
  
• Optimera för flera mål samtidigt.  
  
• Lära sig av utfall och justera sina strategier.  


Det som gör agenter överlägsna är deras förmåga att exekvera parallella resonemang.  
Inte bara beräkna.  
Utan tänka.  
Och agera.  



## OpenClaw: Från manuellt kaos till agentstyrd precision

OpenClaw hade ett klassiskt nordiskt logistikproblem.  
Högt ordertryck.  
Varierande kapacitet i plock och pack.  
Transportfönster som inte tolererade avvikelser.  
Manuell trafikplanering.  
Inkonsekvent kommunikation mellan lager, transportörer och kunder.  

Ledtiderna varierade mer än 38 procent vecka till vecka.  
Det är affärsmässigt förödande i en marknad där SLA‑brott kostar både pengar och rykte.

Roials‑Alpha kartlade hela deras flöde.  
Vi identifierade 27 punkter där mänskliga beslut skapade väntan, fragmenterad information eller flaskhalsar.  
Därefter implementerades ett agentiskt operativsystem.  
OpenClaw Agent Suite.  

Fyra agenter var avgörande.



## Agent 1: Flow Orchestrator  
Den centrala agenten som övervakar hela logistikkedjan.  
Den läser ordervolymer, lagernivåer, bemanning, transportfönster och kötid i packlinor.  

Istället för att reagera på problem i efterhand agerar den tidigt.  
När flödet börjar bli tungt i en zon omdirigeras resurser innan flaskhalsen märks operativt.  
När transportfönster riskerar att missas triggar den taktisk prioritering utan manuell input.

Flow Orchestrator är logistikens autonoma hjärna.



## Agent 2: Capacity Forecaster  
OpenClaw hade historiskt dimensionerat sina resurser baserat på statiska prognoser.  
De fungerade aldrig i verkligheten.  

Capacity Forecaster läser av:

  
• Säsongsvariationer  
  
• Orderbeteenden  
  
• Förpackningsmix  
  
• Transportörernas avvikelsemönster  
  
• Lagringsdynamik  


Den förutser kapacitetsbehov timme för timme.  
Inte vecka för vecka.  
Resultatet är exakt matchning mellan bemanning och efterfrågan.  
Både i lager och i outbound.



## Agent 3: Transport Sync Engine  
Den här agenten löser ett av logistikens fulaste problem.  
Fel synk mellan lager och transportörer.  

Tidigare väntade chaufförer.  
Eller så väntade gods.  
Båda kostade pengar.

Transport Sync Engine håller alla aktörer i realtid.  
Den kommunicerar direkt med transportörernas system.  
Den flaggar risker tidigt.  
Den omplanerar rutter när ledtidsfönster hotas.  
Den harmoniserar flöden utan att någon människa behöver jaga runt efter svar.  



## Agent 4: SLA Guardian  
Den mest brutala agenten i systemet.  
Den vakar över alla SLA:er och KPI:er som om varje order vore kritisk.  

När ett hot uppstår bryter den omedelbart in.  
Den kan omprioritera, omfördela, eskalera och notera risker.  
Den gör det snabbare än någon människa någonsin skulle kunna.  

SLA Guardian är det närmaste perfect compliance en logistikavdelning kan få.



## Resultaten: Mätbar dominans

Efter tre månader hade OpenClaw följande effekter.

  
• Ledtidsvariation minskade från 38 procent till 6 procent.  
  
• Transportfönster missades 78 procent mindre.  
  
• Plockeffektiviteten ökade med 22 procent.  
  
• Antalet manuella beslut i lagerstyrningen minskade med 83 procent.  
  
• Totalkostnaden per order föll med 11 procent.  


Det kritiska här är inte siffrorna.  
Det kritiska är varför siffrorna förändrades.

OpenClaw gick från reaktiv drift till agentisk drift.  
Det är det operativa skiftet som skapar marknadsförsprång.



## Den dolda fördelen: Ledtid blir en styrparameter, inte ett utfall

Traditionella logistiksystem mäter ledtid.  
AI‑agenter styr ledtid.  

Skillnaden är avgörande.  
Det handlar inte om analys.  
Det handlar om direkt påverkan.

AI‑agenter kan:

  
• Upptäcka avvikelser innan de blir problem.  
  
• Optimera flera resurser samtidigt.  
  
• Omplanera transportkedjor baserat på mikrosignaler.  
  
• Dra slutsatser från historiska mönster och omedelbart använda dem.  


Det här är impossible mode för manuella operationer.  



## Varför agentstyrning alltid vinner över traditionell automation

Det finns tre fundamentala orsaker.

  
1. Agenter förstår kontext, inte bara triggers.  
  
2. Agenter hanterar komplexitet, inte bara flöden.  
  
3. Agenter optimerar i realtid, inte i batch.  


Det är dessa tre komponenter som gör att agentisk logistik skalar på ett sätt RPA, WMS, TMS eller dashboards aldrig kan.  



## Hur Roials‑Alpha designade OpenClaws agentiska infrastruktur

Vi följde en trestegsmodell.

  
### Steg 1: Operativ dissektion  
Varje process mappades.  
Varje beslut analyserades.  
Varje väntetid kategoriserades.  


### Steg 2: Agentiskt rollsystem  
Vi definierade vilka beslut som skulle:

  
• Övervakas  
  
• Föreslås  
  
• Automatiseras  
  

Det är agenternas operativa kontrakt.  


### Steg 3: Autonom exekvering  
Agenterna gavs rätt att agera.  
Inte bara rapportera.  
Deras output kopplades direkt mot lagerstyrning, transportplanering och kapacitetsallokering.  


Det är övergången från stöd till styrning.  



## Varför detta representerar logistikens nästa era

Agenter skapar inte bara snabbare processer.  
De skapar en helt ny form av drift.  

En drift där:

  
• Flöden styrs av realtidsintelligens.  
  
• Kapacitet utnyttjas maximalt.  
  
• Transportörer blir synkade partners.  
  
• Ledtid blir ett styrmedel.  


Den organisation som etablerar agentisk infrastruktur först vinner marknaden.  
Inte på kostnad.  
På förutsägbarhet.  
På stabilitet.  
På exakthet.



## Slutsats: Ja, AI‑agenter förbättrar ledtider. Men det är bara början.

OpenClaw är ett bevis.  
Inte en vision.  
Inte en prototyp.  

Agentstyrd logistik är mer stabil.  
Mer exakt.  
Mer skalbar.  

Ledtid är bara en av effekterna.  
Den verkliga vinsten är ett logistiksystem som tänker själv.  
Och agerar själv.  

Det är slutet på reaktiv logistik.  
Det är början på autonom drift.  



Inquire about agentic infrastructure`,"minska-administrationen-med-ai-för-vårdbolag":`
  

Att driva ett vårdbolag i Sverige innebär en vardag fylld av krav, regulatoriska förändringar och en administrativ tyngd som växer snabbare än intäkterna. Många midsize aktörer befinner sig i en situation där marginalerna pressas av ökad rapporteringsbörda, fragmenterade journalsystem och en personalstyrka som ägnar mer tid åt formulär än åt patienter.  

  

AI används redan brett i andra branscher för att reducera manuellt arbete, men inom vårdsektorn har implementeringen ofta varit långsam. Delvis på grund av reglering, delvis på grund av tveksamhet kring säkerhet. Men när rätt lösningar används, med rätt struktur och governance, kan AI minska den administrativa kostnaden dramatiskt. Detta gäller särskilt för vårdbolag som genomgår carve outs, konsolideringar eller integrationsfas efter ett förvärv.  

  

Det handlar inte om visioner. Det handlar om att frigöra kapital och tid, hantera risk och skapa skalbarhet i en verksamhet som måste vara datadriven för att överleva.

  

## Varför administrationen är flaskhalsen för vårdbolag

  

Det finns tre faktorer som återkommer i nästan alla svenska vårdorganisationer med hög administrativ belastning.

  

1. Splittrade datakällor och system som inte kommunicerar  
2. Hög andel manuella inslag i patientflöden, rapporter och kvalitetsuppföljning  
3. Ökad regulatorisk detaljstyrning från kvalitetsregister, regioner och IVO  

  

Kombinationen gör administrationen svår att skala. Varje ny enhet, mottagning eller tjänst adderar komplexitet. Det innebär att ett vårdbolag som förvärvar fler enheter riskerar att bygga in ineffektivitet i hela strukturen.  

  

Mitt i detta finns arbetsmiljöaspekten. Många legitimerade yrkesutövare lägger upp till 40 procent av sin tid på administration. Det är vare sig hållbart eller ekonomiskt rimligt.  

  

AI har kapacitet att reducera denna tidsåtgång radikalt, men bara om implementeringen sker med tydlig prioritering och utan att skapa nya parallella arbetsflöden.

  

## AI i vårdbolag: vad som faktiskt fungerar redan idag

  

Begreppet AI i vården skapar ofta bilder av avancerade diagnosmodeller eller prediktiva algoritmer. Sanningen är att de största vinsterna kommer från mer grundläggande områden. De delar som äter upp majoriteten av tiden.  

  

Nedan är områden där AI redan gör konkret skillnad och där riskerna är hanterbara.

  

### Automatisera patientdata säkert

  

Svenska vårdbolag arbetar i en komplex struktur av sekretess, GDPR och patientsäkerhet. Det gör att AI som hanterar patientinformation måste byggas rätt från början.  

  

Arbetsmoment som standardiserad journalföring, generering av vårdplaner, strukturering av anamnes och dokumentation är mogna för automatisering.  

  

Med rätt teknisk ram kan AI producera underlag som sedan verifieras av kliniker. Det minskar den manuella arbetsmängden, samtidigt som kontrollen ligger kvar hos vårdpersonalen.  

  

Nyckeln är att säkra dataprocesserna. AI ska aldrig vara en frikopplad svart låda. Det ska vara ett kontrollerat stöd där informationsflödena är spårbara och åtkomsterna tydligt definierade.

  

### Avlasta administration i realtid med lokala modeller

  

När vårdbolag försöker införa AI via publika verktyg hamnar de ofta i konflikt med säkerhetspolicyer. Det leder till att personalen antingen låter bli att använda tekniken eller använder den i skugg-IT.  

  

Genom lokalt driftade modeller, eller kontrollerade företagsinstanser, kan AI användas i vardagen på ett sätt som uppfyller alla krav. Det inkluderar interna sammanställningar, rapportutkast, textbearbetning och kvalitetsuppföljningar.  

  

Detta är områden som ofta är förbisedda men som kan reducera stora mängder administrativt arbete. När varje avdelning frigör två till fyra timmar per vecka och per person blir effekten på EBITDA direkt mätbar.

  

### Reducera belastningen vid M&A och carve outs

  

Många svenska vårdbolag befinner sig i en expansionsfas där förvärv är ett av få sätt att skapa skalbar tillväxt. Men administrationen kring integration är ofta en bromskloss.  

  

I carve outs är datafragmenterad och processerna varierar kraftigt mellan enheter. AI kan hjälpa till att standardisera flöden, identifiera dataluckor och automatisera dokumentation som annars kräver flera veckors manuellt arbete.  

  

Det handlar inte om att ersätta människor. Det handlar om att ta bort friktion och minska risken för fel i en period där tempot är högt och marginalerna små.

  

## Hur AI förändrar ekonomin i ett vårdbolag

  

De flesta initiativ inom vårdadministration utvärderas utifrån arbetsmiljö eller kvalitet. De borde också utvärderas utifrån ekonomisk påverkan.  

  

När AI införs strukturerat i administrationen ser vi tre ekonomiska effekter som återkommer.

  

### 1. Direkt reducering av kostnader

  

Manuell administration skalar linjärt med volym. AI skalar inte på samma sätt.  

  

Det innebär att ett vårdbolag kan växa utan att personalstyrkan i administrationen behöver följa samma kurva. Detta är centralt för bolag som planerar att expandera med flera enheter under kommande år.

  

### 2. Ökad kapacitet i befintliga team

  

Det går att reducera flaskhalsar inom kvalitetsarbete, regionrapportering och klinisk dokumentation.  

  

När personalen får mer tid frigörs kapacitet utan behov av nyrekrytering. Många bolag väljer att styra denna kapacitet mot förbättrat patientflöde, ett område som ofta är underprioriterat men som har stor påverkan på lönsamhet.

  

### 3. Mindre risk vid revision och myndighetskontroller

  

AI kan hjälpa till att kvalitetssäkra data innan revisioner och granskningar. Det minskar den interna stressen och reducerar risken för anmärkningar som annars kan få operativa konsekvenser.  

  

Resultatet blir en stabilare verksamhet med lägre riskprofil, vilket är värdefullt vid framtida förvärv eller försäljning.

  

## Hur vårdbolag implementerar AI utan att öka komplexiteten

  

Ett vanligt misstag är att försöka införa AI isolerat på avdelningsnivå. Det skapar otydlighet och leder ofta till att organisationen sitter med flera olika system och metoder som inte går att skala.  

  

Ett mer robust angreppssätt är följande.

  

### 1. Starta med tre tydliga användningsfall

  

Välj områden som redan idag är stora tidstjuvar och där riskerna är hanterbara. Exempel:

  

• journalstrukturering  
• rapportutkast till regionen  
• avvikelsehantering och kvalitetssammanställningar  

  

Det är i dessa administrativa block som AI gör snabbast skillnad.

  

### 2. Säkerställ datastyrning från dag ett

  

Innan AI införs måste åtkomster, loggning och spårbarhet vara definierade.  

  

Det minskar risken för avsteg från regelverket. Det gör också att personalen kan använda verktyget utan osäkerhet.

  

### 3. Låt pilotgrupper skapa arbetssätt som kan skalas

  

En central felkälla är att bolag bygger processer ovanifrån som inte fungerar i vardagen.  

  

Låt istället pilotgrupper hitta realistiska rutiner och skapa mallar som andra enheter kan följa. Detta minskar friktion vid utrullning.

  

### 4. Integrera AI med befintliga system

  

AI ska inte bli en parallell lösning. Det ska vara en förlängning av journalsystem, kvalitetsregister och interna datastrukturer.  

  

Integrationer behöver inte vara perfekta från start. Men de ska vara tillräckliga för att undvika dubbelarbete.

  

## AI hälsovård Sverige och vad som förändras de kommande två åren

  

Den teknologiska utvecklingen är snabb men regulatoriska förändringar går långsammare. Det innebär att vårdbolag som vill ligga i framkant måste arbeta strategiskt med både teknik och compliance.  

  

Två trender blir särskilt viktiga.

  

### 1. Lokalt kontrollerade språkmodeller blir standard

  

Vårdbolag kommer i allt högre grad använda AI som är driftad inom EU och optimerad för svenska regler. Det minskar risk och möjliggör användning i fler delar av verksamheten.  

  

Det gör det också enklare att automatisera patientdata säkert eftersom datan aldrig lämnar kontrollerade miljöer.

  

### 2. Konsolidering kräver starkare dataintegration

  

När fler vårdbolag konsolideras ökar behovet av att snabbt kunna integrera enheter med olika nivåer av digital mognad. AI kommer användas för att strukturera data som annars skulle kräva månader av manuellt arbete.  

  

Det sätter högre krav på datastandarder men skapar också snabbare värde vid förvärv.

  

## Varför midsize vårdbolag är bäst positionerade att dra nytta av AI

  

Stora aktörer rör sig ofta långsamt på grund av komplexitet och byråkrati. Mindre aktörer saknar resurser för att bygga skalbara strukturer.  

  

Midsize vårdbolag befinner sig i en unik position. De har tillräckligt stora datamängder för att AI ska ge effekt och de är tillräckligt flexibla för att implementera lösningar utan flera års väntetid.  

  

Dessutom är det vanligt att dessa bolag är aktiva i M&A, vilket gör att effektiv administration är en avgörande konkurrensfördel.

  

## Sammanfattning: AI minskar administrationen när det implementeras pragmatiskt

  

AI är inte längre något experiment i vårdsektorn. Det är ett praktiskt verktyg som reducerar manuellt arbete, minskar risk och förbättrar skalbarheten.  

  

För vårdbolag som vill växa genom förvärv eller effektivisering är tiden att börja nu.  

  

Inte genom stora visioner. Utan genom konkreta användningsfall, tydlig styrning och strukturer som håller både operativt och regulatoriskt.

  

Book a strategic consultation`,"maskininlärning-för-kundtjänstbolag-i-sverige-med-fokus-på-openclaw-sverige":`


Kundtjänst i Sverige befinner sig i en av sina mest disruptiva faser någonsin.

  

Det är inte volymerna som förändras.

  

Det är inte kundernas krav.

  

Det är maskinerna.



  

Maskininlärning, kombinerat med agentiska AI‑system, håller på att bli ett strategiskt vapen för alla som driver kundtjänst på svensk marknad.  

Och spelaren som driver utvecklingen snabbast, hårdast och mest kompromisslöst är OpenClaw Sverige.



  

Den här artikeln går igenom hur svenska kundservicebolag använder maskininlärning för att skala support, automatisera arbetsflöden och bygga realtidsintelligens runt varje kundkontakt.

  

Det här är inte en grundkurs.  

Det här är det som faktiskt fungerar.



---




Automation har funnits länge.

  

Skillnaden är att de nya ML‑modellerna inte längre bara ersätter manuella steg.  

De förstår, förutsäger och agerar.



  

Tre marknadskrafter pressar svenska bolag mot maskininlärning.



  

1. **Volymökning utan ökade marginaler**  
   Fler kundkontakter, stagnerande intäkter, höga lönekostnader.  
   Den gamla ekvationen spricker.

  

2. **Kundkrav på realtid**  
   Svenska kunder tolererar inte väntetid.  
   Maskiner gör att svarstider kan gå från minuter till millisekunder.

  

3. **Datats explosion**  
   Varje chat, samtal och ärende genererar dataset som inte kan hanteras manuellt.  
   Maskininlärning gör det användbart.



  

Bolag som anpassar sig nu får en strukturell fördel som är nästan omöjlig att komma ikapp.  

Det är därför OpenClaw Sverige byggt sin modellstack specifikt mot nordiska kundtjänstmiljöer.



---




Det här är viktigt.

  

De flesta AI‑leverantörer bygger generiska modeller.  
OpenClaw gör det inte.

  

De bygger **agentiska ML‑system** som:

  

- Lär sig varje kundinteraktion.  
- Optimerar flöden i realtid.  
- Allokerar uppgifter mellan människa och maskin automatiskt.  
- Agerar som interna operativa agenter, inte bara chatbots.  



  

Den avgörande skillnaden är att OpenClaw inte skapar en assistent.  
De skapar **en intern arbetsstyrka av självkörande agentiska processer**.



  

Det betyder att ett kundtjänstbolag i Sverige kan:

  

- Skala utan nya anställda.  
- Reducera mänsklig handläggning upp till 90 procent.  
- Samtidigt öka kundnöjdheten.  



  

Det här är inte framtid.  
Det deployas redan.



---




Det finns fem nyckeltekniker som driver den svenska marknadens transformation.



## 1. NLP optimerad för nordiska språk



De flesta globala modeller är engelsktunga.  

De förstår inte kontext, idiom, tonalitet eller regulatoriska begrepp på svenska.

  

OpenClaws ML‑stack använder:

  

- Svensk semantisk träning.  
- Lokal sentiment-analys.  
- Domänspecifika språkmodeller för telekom, logistik, SaaS och offentlig sektor.  



  

Resultatet är maskiner som **förstår svenska kunder bättre än de flesta agenter**.



  

## 2. Intent‑prediction på millisekunder



I traditionell kundtjänst tar det tid att förstå vad kunden vill.

  

Maskininlärning gör det innan kunden hunnit formulera klart meningen.



  

Intent‑modeller tränas på:

  

- Ärenderubriker  
- Historik  
- Liknande datapunkter från miljoner interaktioner  
- Kontextuell metadata  



  

Det innebär att systemet kan:

  

- Förutsäga vilket ärende kunden kommer skapa  
- Förslå lösning direkt  
- Hoppa över 5 steg i processen  
- Allokera resurser innan samtalet öppnas  



  

Det här minskar hanteringstiden brutalt.



  

## 3. Real‑time agent assistance



Det här är en av de mest underskattade ML‑fördelarna.



  

Maskinen följer samtalet i realtid och:

  

- Ger rekommenderade svar  
- Slår upp kontodata  
- Utför API‑åtgärder automatiskt  
- Flaggar risk och churn  
- Säkerställer att agenten följer riktlinjer  



  

Resultatet blir en junior agent som presterar som en senior.  
Och en senior som presterar som tre.



  

## 4. Self‑healing workflows



Det här är där OpenClaw verkligen skiljer sig från andra.

  

Deras system bygger inte bara flöden.  
De *lagar* dem.



  

När ML‑modellen upptäcker:

  

- Onödiga steg  
- Flaskhalsar  
- Regex-fel  
- Dubbla beslutspunkter  
- Manuella moment som kan automatiseras  



  

Då optimerar agenten flödet automatiskt.

  

Det är som att ha en intern processingenjör som aldrig sover.



  

## 5. Proaktiv support med prediktiva modeller



Prediktiva modeller analyserar:

  

- Beteendemönster  
- Churn‑risk  
- Teknisk data  
- Köpcykler  
- Produktanvändning  



  

De förutsäger när en kund:

  

- Kommer höra av sig  
- Kommer få problem  
- Kommer begära retur  
- Kommer lämna tjänsten  



  

Sedan skickar systemet automatiskt:

  

- Notiser  
- Lösningar  
- Guidning  
- Rabatt  
- Eskalering till människa vid behov  



  

Det här minskar supportvolymen innan den ens skapas.



---




Följande arkitektur är den struktur som just nu dominerar de mest avancerade kundserviceorganisationerna i Sverige.



## Steg 1: Centralisera all kunddata



Utan central dataplattform, ingen ML.

  

Det innebär:

  

- Samla chat  
- Samla e‑post  
- Samla CRM  
- Samla röstdata  
- Samla loggar från produkter  
- Samla ärenden och metadata  



  

Detta blir bränslet.



  

## Steg 2: Koppla in ML‑lager från OpenClaw



OpenClaws agentiska ML‑lager gör fyra saker:

  

- Förstår data  
- Förutsäger beteenden  
- Optimerar flöden  
- Utför handlingar  



  

Det är här magin händer.



  

## Steg 3: Automatisera 70 procent av inkommande flöden



Maskiner kan:

  

- Lösa lösenordsproblem  
- Behandla returer  
- Utföra kontobyten  
- Ge leveransstatus  
- Styra tekniska felsökningar  
- Hantera avbokningar  
- Skapa interna tickets  



  

Den här automationen är ofta snabbast att implementera.



  

## Steg 4: Introducera agentstöd



När agenterna får AI‑assistans:

  

- Tiden per ärende sjunker  
- Kvaliteten ökar  
- Dokumentation blir konsekvent  
- Upsell och retention förbättras  



  

Det här gör verksamheten mer skalbar, även om mänskliga agenter fortfarande finns kvar.



  

## Steg 5: Inför självoptimerande arbetsflöden



Detta är det sista steget.

  

När maskiner både:

  

- Utför arbetet  
- Och optimerar det  



  

Då har man en agentisk arkitektur.



Det är här OpenClaw Sverige placerar företag i en ny kategori av effektivitet.



---




När kundtjänstbolag i Sverige går från traditionell verksamhet till ML‑driven agentarkitektur brukar siffrorna se ut så här.



  

- 50 till 90 procent mindre manuell hantering  
- 30 till 45 procent kortare handläggningstid  
- 20 till 40 procent högre kundnöjdhet  
- Nästan noll väntetid  
- Kostnadsreduktion i flera led  



  

Den stora skillnaden är inte bara pengar.  
Det är skalbarheten.

  

Ett svenskt kundservicebolag kan helt plötsligt hantera 5 gånger mer volym utan att växa teamet.



---




Tre skäl.



## 1. Domänmodeller tränade på svensk kundtjänstdata



Det här betyder att maskinen förstår:

  

- Hur svenska kunder skriver  
- Svensk ton  
- Svenska branschtersmer  
- Lokala regulatoriska formuleringar  



  

Modellerna gör färre fel och kräver mindre övervakning.



## 2. Full agentisk infrastruktur  
OpenClaw bygger inte bara chatbots.  
De bygger operativa AI‑system.

  

Det här inkluderar:

  

- Orkestrering  
- Automation  
- Prediktion  
- Realtidsassistans  
- Autonoma arbetsflöden  



## 3. Fokus på extrem driftsäkerhet  
Svenska kundtjänstbolag kräver hög stabilitet.  

OpenClaws system är byggt med redundans och konsekvent prestanda även vid höga volymer.



---




Inom fem år kommer de flesta standardärenden inte hanteras av människor.  


Maskiner kommer:

  

- Läs in data  
- Föreslå lösning  
- Utföra åtgärd  
- Följa upp  
- Larma vid avvikelser  



  

Människor kommer endast hantera:

  

- Eskalerade ärenden  
- Känsliga situationer  
- Edge‑cases  
- Kundrelationer med högt värde  



  

OpenClaw Sverige ligger längst fram i den här utvecklingen, och de bolag som ansluter tidigt får en fördel som är i praktiken oöverkomlig för konkurrenterna.



---




Svenska kundtjänstbolag som implementerar maskininlärning och agentiska system får:

  

- Lägre kostnader  
- Bättre kvalitet  
- Snabbare flöden  
- Starkare relationer  
- Högre kapacitet  
- Automatiska förbättringar dygnet runt  



  

OpenClaw Sverige sätter standarden för hur svensk kundtjänst ska byggas under nästa decennium.

  

Det här är riktningen.

  

Det här är tekniken.

  

Det här är konkurrensfördelen ingen konkurrent kan matcha utan att först bygga om hela sin infrastruktur.



  

Inquire about agentic infrastructure`,"vilka-processer-bör-du-automatisera-med-ai-först":`En vägledning för långsiktig förvaltning och beslutsro för HNWI och Family Offices  



## Introduktion  
I en tid där teknologin förändras snabbare än kapitalmarknaderna, uppstår en central fråga för långsiktiga förvaltare: vilka processer bör automatiseras med AI först, och varför.  

För HNWI och Family Offices handlar det inte om snabbhet eller hypad innovation.  

Det handlar om ordning, renhet och trygghet.  

Det handlar om struktur som håller över generationer.  

Det handlar om processer som bevarar kapital, minskar friktion och skapar bättre beslutsunderlag.  



## Varför AI bör användas selektivt  
Det är lätt att lockas av löften om fullständig automatisering.  

Men en konservativ kapitalförvaltning kräver en annan hållning.  

AI ska inte ersätta mänskligt omdöme.  

AI ska understödja omdömet.  

Automatisering bör därför ske i processer där mänsklig tid är dyrbar och där noggrannhet kan förbättras utan att riskera värdegrunden i förvaltningen.  

Med detta synsätt kan vi identifiera tre områden som nästan alltid ska automatiseras först.  



AI lämpar sig först för processer där mängden data är stor, repetitiv och låg i strategiskt värde.  

Det är här automatisering ger omedelbar stabilitet.  



## 1.1 Marknadsövervakning  
Den flesta förvaltare drunknar i rapporter.  

Makrodata.  
Sektordata.  
Bolagsdata.  
Riskindikatorer.  

AI behöver inte ta besluten.  

AI ska bara leverera ren information.  

Automatiserad insamling och sortering ger en grund av strukturerad klarhet som annars kräver timmar av manuellt arbete.  



## 1.2 Regulatorisk bevakning  
Familjekontor och större förvaltningar arbetar ofta i flera jurisdiktioner.  

Det skapar en komplexitet som snabbt blir dyr att hantera manuellt.  

AI kan:  
- identifiera förändringar  
- sortera relevans  
- skapa notifieringar  
- sammanfatta risker  

Detta frigör tid för mänskliga rådgivare att enbart fokusera på tolkning och beslut.  



## 1.3 Media och sentiment  
Inte för att jaga kortsiktiga signaler.  

Utan för att inte missa viktiga strukturella förändringar.  

Automatiseringen handlar om att fånga:  
- rykten om ledningsförändringar  
- signaler om branschskiften  
- större marknadsrörelser i kapitalflöden  

AI filtrerar.  
Förvaltaren tolkar.  



Här finns ofta den största dolda vinsten.  

Family Offices hanterar unika, långlivade och ofta känsliga dokument.  

Testamenten.  
Bolagsstrukturer.  
Avtal.  
Ägarinstruktioner.  
Investeringspolicyer.  



## 2.1 Extrahera och strukturera innehåll  
AI kan konvertera dokument från olika format till en ren, sökbar struktur.  

Den kan identifiera nyckeldata som:  
- parter  
- villkor  
- riskpunkter  
- ansvarsposter  
- datum och revisioner  

Detta minskar risken för att kritisk information faller mellan stolarna.  



## 2.2 Klassificering och arkivering  
AI gör det möjligt att skapa en enhetlig ordning över hela dokumentflödet.  

Förvaltare får då:  
- en gemensam struktur  
- snabb åtkomst  
- minskad manuell sortering  
- bättre kontroll inför revision  

Den mänskliga tiden kan då fokuseras på det som verkligen kräver omdöme.  



## 2.3 Automatiska sammanfattningar  
En central del av konservativ förvaltning är att läsa långsamt och tänka djupt.  

Men inte allt kräver full genomläsning.  

AI kan sammanfatta dokument i:  
- juridiska avtal  
- investeringsmemorandum  
- rapporter  
- delegeringsbeslut  

Sammanfattningen ersätter aldrig läsningen.  

Den prioriterar bara vad som ska läsas först.  



Rapportering är en av de mest tacksamma funktionerna att automatisera.  

Inte för resultatets skull, utan för ordningens.  



## 3.1 Kapitalöversikter  
Många familjer och förvaltningar saknar en enkel helhetsbild över sina tillgångar.  

Automatisering gör det möjligt att:  
- samla konton  
- konsolidera innehav  
- strukturera kassaflöden  
- följa utveckling över tid  

Detta ger en tydligare grund för beslutsfattande.  



## 3.2 Riskrapporter  
AI kan identifiera små förändringar som annars lätt försvinner i volymen av data.  

Detta gäller särskilt:  
- ränterisk  
- valutapositioner  
- likviditetsprofil  
- motpartsexponering  

AI kan skapa lugn genom att leverera strukturerad riskinformation som är lätt att läsa och återkomma till.  



## 3.3 Scenarioanalyser  
Här ligger en stor framtida styrka.  

Familjer och kapitalförvaltare behöver inte mer komplexitet.  

De behöver klarare alternativ.  

AI kan skapa scenarioanalyser baserade på:  
- olika tidshorisonter  
- olika marknadsantaganden  
- olika allokeringsval  

Målet är inte att förutsäga framtiden.  

Målet är att skapa tydligare beslutsrum.  



Konservativ förvaltning kräver att vissa processer inte automatiseras i början.  

Dessa inkluderar:  
- investeringsbeslut  
- familjepolicyer  
- governance-strukturer  
- kapitalallokering  
- förhandlingsarbete  

Anledningen är enkel.  

Här är värdet mänskligt.  

Den långsiktiga förståelsen.  
Historiken.  
Relationerna.  
Det tysta kunnandet.  

AI ska inte ersätta det.  

AI ska ge mer tid inför dessa beslut.  



Här är en struktur som ofta passar Family Offices och mer traditionella förvaltningar.  



## Steg 1  
Inventera alla återkommande arbetsmoment.  

Lista dem.  

Tidsbestäm dem.  

Identifiera vilka som inte kräver mänskligt omdöme.  



## Steg 2  
Ranka processerna efter riskminskning och tidsbesparing.  

Automatisering handlar inte om att vara snabb.  

Automatisering handlar om att minska friktion.  



## Steg 3  
Välj tre processer att börja med.  

Inte fler.  

Mindre är stabilare.  



## Steg 4  
Inför AI i små, tydliga block.  

Starta med:  
- informationsinsamling  
- dokumenthantering  
- rapportering  

Dessa skapar struktur som varar över tid.  



## Steg 5  
Avsluta med att skapa ett mänskligt kontrollskikt.  

Automatisering ska granskas.  

Den ska ägas.  

Det är där tryggheten uppstår.  



När processen är färdig kommer tre saker att märkas.  

Först, en lugnare informationsmiljö.  

Sedan, renare dokumentflöden.  

Slutligen, tydligare kapitalöversikter.  

Detta ger bättre beslut.  

Detta ger högre uthållighet.  

Detta ger en stabilare övergång mellan generationer.  



AI ska inte förändra grunden i hur kapital förvaltas över tid.  

AI ska förstärka det som redan håller.  

Automatisera det som är repetitivt.  

Bevara det som är mänskligt.  

Det är så man skapar långsiktig förvaltning som står emot både teknikskiften och marknadscykler.  



Contact for stewardship discussion`,"en-praktisk-guide-till-datahantering-och-ai-för-svensk-handel":`En strategisk väg framåt med OpenClaw för långsiktiga ägare  



  

## Inledning  
Svensk handel står inför en strukturell förändring.  
Digitaliseringen är inte längre en utvecklingsfas, den är redan ett fundament.  

  

För ägare med långt perspektiv, ofta inom familjeförvaltning eller diskret privat ägande, uppstår en central fråga:  
Hur bygger man ett datalandskap som håller i decennier, inte bara i nästa kvartalsrapport.  

  

Denna guide ger en praktiskt orienterad, lågmäld och konservativ genomgång av hur datahantering och AI kan användas för att stärka handelns robusthet.  
Fokus ligger på OpenClaw, en modern men stabil infrastruktur för datainsamling, datakvalitet och automatiserat beslutsstöd.  

  

Syftet är att ge en strukturerad väg som passar företag där kontinuitet, riskminimering och arv är centrala värden.  



  




## Data som konkurrensfördel  
Handelns affärslogik bygger på rörelser i lager, pris, efterfrågan och kundflöden.  
När varje beslut kan stödjas av kvalitativ data, minskar risken för felinvesteringar.  

  

I en tid av global prispress och förändrade leveranskedjor blir datastyrda processer en fråga om överlevnad, inte förstärkning.  

  

## Varför traditionella system inte räcker  
Många handelsbolag sitter kvar med äldre affärssystem, fragmenterade databaser och manuella processer som saknar spårbarhet.  

  

Det skapar:  
- Dubbla datavolymer  
- Bristande versionering  
- Otydlighet i ansvar  
- Fördröjning i beslutsvägar  

  

Svensk handel behöver system som är snabbfotade men långsiktigt stabila, särskilt när nya AI-verktyg ställer höga krav på datakvalitet.  



  

OpenClaw är inte ett enda system, det är en metodik och infrastruktur som moderniserar datainsamling och datakvalitet utan att företag tvingas in i riskabla omställningar.  

  

## Kärnidéerna bakom OpenClaw  
- Förstärkning av befintliga system, inte ersättning  
- Datainsamling nära källan, med hög spårbarhet  
- Ren och strukturerad data innan AI-modeller appliceras  
- Minimal påverkan på drift, maximal effekt på analys  
- Skalbart för både extern och intern rapportering  

  

Dess konstruktion gör det särskilt lämpat för handelsbolag där stabilitet och tydlig kontroll är viktigare än aggressiv teknikadoption.  



  




## 1. Kartläggning av befintligt datalandskap  
Många företag underskattar hur komplex deras data faktiskt är.  

  

En strukturerad kartläggning bör innehålla:  
- Var datan skapas  
- Vem som äger datan  
- Vilka system som duplicerar datan  
- Var felaktigheter uppstår  
- Hur data flödar genom organisationen  

  

Kartläggningen är grunden för OpenClaw, eftersom tydlighet i datans ursprung är en förutsättning för hållbar AI.  



  

## 2. Datainsamling med låg friktion  
Konservativ utveckling innebär att inga stora system ska behöva ersättas.  

  

OpenClaw samlar in data genom små integrationspunkter som:  
- Läser av API:er  
- Extraherar filbaserad data  
- Skapar stabila dataströmmar från POS och ERP  
- Bygger en kopia av datan som kan versioneras  

  

Det skapar en trygg konstruktion där affärssystemet lämnas ostört, men datan samtidigt görs användbar för analyser och framtida AI-modeller.  



  

## 3. Datakvalitet som strukturell investering  
Hög datakvalitet är mer än städning.  
Det är en styrningsmodell.  

  

Processen innebär:  
- Validering  
- Standardisering  
- Avvikelserapportering  
- Spårbarhet  
- Automatisk korrigering där det är lämpligt  

  

Stabil datakvalitet ökar förtroendet för beslutsstöd, och minskar beroendet av individer, vilket är avgörande för ägare som vill bygga robusta organisationer.  



  

## 4. Lagring med kontroll  
OpenClaw använder separata datalager som kan drivas inom företaget eller i moln där integritet går först.  

  

Det möjliggör:  
- Full revisionsspårbarhet  
- Historiska jämförelser  
- Tillgänglighet för BI och AI  
- Tydlig separation mellan drift och analys  

  

Familjeägda bolag värderar kontroll.  
OpenClaw möjliggör dataautonomi utan att skapa teknisk skuld.  



  

## 5. AI-modeller som stöd för beslutsfattande  
När datan väl är ren, strukturerad och spårbar, blir AI en stabil förstärkning snarare än ett risktagande.  

  

Exempel på användning inom handel:  
- Prognoser för efterfrågan  
- Prisstyrning  
- Lageroptimering  
- Kundsegmentering  
- Automatiserade rapporter till styrelse och ägargrupp  

  

AI blir mest värdefull när den används för att minska varians, inte för att skapa nya risker.  
Denna syn ligger nära hur långsiktiga förvaltare tar beslut.  



  

## 6. Mänsklig kontroll över maskinella modeller  
För ägare med ansvar över flera generationer är kontroll en central princip.  

  

OpenClaw erbjuder:  
- Modellversionering  
- Genomlysning av beslutslogik  
- Spårbarhet i dataflöden  
- Löpande riskanalys  

  

Det skapar en miljö där AI blir ett verktyg under mänsklig övervakning, aldrig en autonom kraft.  



  




## För ägare som vill minska volatilitet  
Stabila prognoser och pålitliga marginalanalyser skapar trygghet.  
OpenClaw stärker precisionen i besluten och minskar oväntade utfall.  



  

## För bolag som behöver effektivisering utan organisatoriska chocker  
Eftersom OpenClaw verkar vid sidan av befintliga system kan organisationen fortsätta arbeta som vanligt.  
Det ger effektivisering utan förändringsutmattning.  



  

## För verksamheter som vill skala e‑handel och butik samtidigt  
Integrerad data ger en gemensam bild av kundbeteende, vilket är avgörande när rörelserna mellan fysisk och digital handel ökar.  



  

## För familjeägda bolag som prioriterar kontroll  
OpenClaw stärker intern styrning och gör data till en tillgång som kan förvaltas, inte en kostnadspost som växer okontrollerat.  



  

Trots ambitioner gör många bolag samma misstag.  

  

De vanligaste är:  
- Försök att byta ut hela systemlandskapet i ett steg  
- Överdriven tilltro till AI innan datan är kvalitetssäkrad  
- Otillräcklig spårbarhet  
- För otydlig ägarstruktur för data  
- För många parallella initiativ i stället för en central plattform  

  

OpenClaw adresserar dessa risker genom en lågmäld och iterativ implementering.  



  

Ägare med lång horisont tänker i generationer.  
Strukturen är viktigare än hastigheten.  

  

Data och AI måste byggas på ett sätt som kan växa och förfinas utan att skapa låsningar.  

  

OpenClaw utgår från tre principer:  
- Stabilitet före expansion  
- Transparens före automatisering  
- Kontroll före acceleration  

  

Det är en modell som passar företag som vill stå stadigt även när marknader förändras.  



  




## Förbättrad marginalkontroll  
Några procentenheters bättre precision i prognoser kan ge betydande resultat.  



  

## Mindre svinn och överlager  
Automatiserad datakvalitet och bättre analys minskar felbeställningar.  



  

## Snabbare beslut på styrelsenivå  
Färdiga rapporter och tydliga dashboards gör att beslut kan tas utifrån fakta, inte magkänsla.  



  

## Förstärkt kundförståelse  
Segmentering och analys ger bättre kampanjer och bättre kapitalutnyttjande.  



  

Svensk handel behöver en modern datainfrastruktur, men den måste byggas med varsamhet.  

  

OpenClaw ger en väg där teknik och stabilitet möts.  
Det är en lösning för företag som vill utvecklas utan att kompromissa med kontroll, integritet eller långsiktig ansvarskänsla.  



  

Contact for stewardship discussion`,"analysera-big-data-med-openclaw":`Pragmatisk översikt för beslutsfattare i mid-market M&A och vårdtjänster  

  

Att arbeta med big data AI analys är inte längre ett val för aktörer i den mellanstora företagssektorn. Det är ett krav som växer snabbare än många interna team hinner anpassa sig till. När transaktionsfönster blir kortare, due diligence blir mer datadriven och carve-outs inom vårdsektorn kräver kirurgisk precision i allt från patientflöden till intäktsmix, behövs verktyg som kan hantera både volym och komplexitet.  

  

OpenClaw data analys har etablerat sig som ett sådant verktyg. Det saknar romantik, men levererar det som behövs: struktur, hastighet och förmåga att bryta ned omfattande datamängder till beslutsunderlag som faktiskt går att använda i skarpa lägen. Detta är ingen lösning för den som vill bli imponerad av glänsande dashboards. Det är för den som behöver svar snabbt, vill undvika felköp och måste förstå konsekvenserna av förvärv eller avyttringar.  

  

## Varför big data AI analys är avgörande i dagens transaktionsklimat  

  

Mid-market M&A har blivit mer pressad. Det finns färre felmarginaler och fler datapunkter att hantera. När vårdbolag ska delas upp, slås samman eller renodlas kräver processen en strukturerad analys av rörelsemönster, kostnadsnivåer, kapacitetsutnyttjande och intäktsströmmar.  

  

Här blir big data AI analys ett strategiskt verktyg. Det handlar inte om att automatisera besluten, utan om att öka precisionen i den mänskliga bedömningen.  

  

### De tre största drivkrafterna bakom utvecklingen  

  

• Datavolymerna växer snabbare än de interna funktionerna klarar av.  
  

• Transparenskraven från investerare och regulatorer ökar.  
  

• Vårdbolag blir mer fragmenterade vilket gör att carve-outs kräver detaljerad förståelse av varje enhet, inte bara koncernnivå.  

  

OpenClaw data analys är utvecklat för dessa miljöer. Det är inte ett generellt BI-verktyg utan ett system som klarar höga datavolymer och varierande struktur utan att tappa hastighet eller kontext.  

  

## Värdet av att förstå kunddata med AI i carve-out scenarier  

  

När ett vårdbolag delas upp är frågorna många. Vilka enheter bär sin egen ekonomi. Vilka är beroende av centrala stödfunktioner. Var finns korssubventioneringar. Hur skiljer sig patientmix och produktivitet mellan olika verksamheter.  

  

Att förstå kunddata AI blir därför centralt. Begreppet handlar inte om marknadsföring. Det handlar om att förstå flöden, beteenden och avvikelser på en nivå som gör att köparen eller säljaren kan förutse hur enheten kommer att fungera när den lyfts ur sin historiska kontext.  

  

### Exempel på kritiska datapunkter som ofta förbises  

  

• Förändrad remitteringslogik när enheten inte längre ingår i en större koncern.  
  

• Risk för produktivitetsfall vid borttagning av centrala IT-system.  
  

• Förändringar i intäktsmix baserat på geografi och patientprofil.  
  

• Kostnadsdrivare som enbart blir synliga när data bryts ned per behandlingskategori.  

  

OpenClaw kan hantera denna typ av fragmenterad information. Det är inte bara volymen som är relevant, utan förmågan att knyta samman beteendedata, ekonomiska flöden och operationella mönster till ett helhetsunderlag.  

  

## Så stödjer OpenClaw data analys due diligence-processer  

  

Due diligence inom vårdsektorn präglas ofta av tre brister.  

  

• För lite tid.  
  

• För mycket data.  
  

• För få personer som förstår både verksamhet och analys samtidigt.  

  

Det är här OpenClaw blir praktiskt. Det är utvecklat för att inte tappa tempo när datan är rörig eller när filstrukturer är oklara. Istället prioriterar det upplösning, datarensning och snabb pre-analys så att rådgivare och investment teams kan lägga tiden på själva bedömningen.  

  

### Nyttan visar sig i tre faser  

  

**Fas ett: insamling**  
OpenClaw läser in stora mängder data från olika källor utan att kräva omfattande förarbete. Det gör att teamen kan börja titta på innehållet snabbt.  

  

**Fas två: strukturering**  
Systemet normaliserar datan och kopplar samman tabeller som annars hade varit svåra att arbeta med. Det minskar behovet av manuella insatser och risken för feltolkningar.  

  

**Fas tre: analys**  
Här sker den faktiska värderingen. Big data AI analys gör det möjligt att se avvikelser, trender, flaskhalsar och möjligheter långt tidigare än i traditionella processer. På så sätt blir besluten mer hållbara.  

  

## Pragmatisk användning av big data AI analys i vårdbolag  

  

Det är ingen hemlighet att vårdorganisationer ofta sitter på stora mängder data som är svåråtkomlig eller dåligt strukturerad. När dessa organisationer hamnar i ett förvärvs- eller avyttringsscenario blir det tydligt att verksamheten fungerar, men också att få verkligen vet varför den fungerar.  

  

Här är några praktiska områden där OpenClaw gör störst skillnad.  

  

### Kassaflödesanalys på mikronivå  

  

För vårdbolag är kassaflödet ofta ojämnt och påverkas av patientströmmar, ersättningsmodeller och personalmix. Med OpenClaw kan man bryta ned detta per enhet, per behandlingstyp och per tidsperiod. Detta är avgörande när man ska ringa in vilka delar av verksamheten som är stabila och vilka som riskerar att bli problem efter en transaktion.  

  

### Kapacitetsutnyttjande  

  

Särskilt inom specialistvård och diagnostik är kapacitet den mest kritiska resursen. OpenClaw klarar att kombinera tidsdata, personaldata och volymdata så att köpare kan se var det finns outnyttjad potential och var det redan är fullt. Det ger en realistisk bild av möjliga synergier, inte en teoretisk.  

  

### Identifiering av riskbeteenden i data  

  

Oregelbundna mönster kan dölja allt från ineffektiva processer till felprissättningar. OpenClaw lyfter fram dessa mönster genom att jämföra beteenden mellan enheter och över tid. Detta är en typ av analys som är svår att genomföra manuellt och som därför ofta missas i traditionell due diligence.  

  

## Hur OpenClaw stärker portföljförvaltning efter förvärv  

  

Arbetet börjar inte och slutar inte vid signering. För portföljbolag krävs kontinuerlig uppföljning som är snabb, tydlig och inte kräver en egen intern armé av analytiker. OpenClaw stödjer kontinuerlig dataanalys som gör det enklare att upptäcka avvikelser i tid, snarare än långt efter att de blivit dyra.  

  

  

### Användningsområden efter förvärv  

  

• Övervakning av nyckeltal som styr värdedrivare.  
  

• Tidig upptäckt av fallande produktivitet.  
  

• Förståelse av förändringar i patient- eller kundmix.  
  

• Kartläggning av effekter av nya affärsmodeller eller system.  

  

Detta är inte ett system som ersätter den mänskliga bedömningen. Det förstärker den. Det gör att analytiker och ledning kan fokusera på beslut som kräver erfarenhet och domänkunskap, snarare än att spendera tid på datastädning.  

  

## Konkurrensfördelar med OpenClaw i en pressad marknad  

  

Det finns gott om verktyg som lovar insikter. Få levererar inom de tidsramar som M&A-team faktiskt arbetar med. I situationer där en carve-out måste värderas på veckor, inte månader, är snabbhet och stabilitet två avgörande faktorer.  

  

OpenClaw är konstruerat med just detta i åtanke. Det är inget marknadsföringsverktyg utan ett system för verkligheten. Ett system som inte kräver perfekta datakällor. Ett system som inte faller sönder när filformat är ofullständiga eller databaser är ofullkomliga.  

  

Det är därför det har blivit ett naturligt val för rådgivare och investerare som arbetar med komplexa strukturer, särskilt inom vårdsektorn där data är fragmenterad, reglerad och ofta svår att tyda utan rätt verktyg.  

  

## Framtiden för big data AI analys i vårdbolag och M&A-processer  

  

Utvecklingen fortsätter. Datamängderna växer. Regelverken skärps. Och transaktioner blir mer konkurrensutsatta. De som inte använder AI-stött analys kommer att få svårare att motivera sina värderingar och genomföra sina strategiska planer.  

  

Det betyder inte att AI ersätter erfarenhet. Tvärtom. När verktyg som OpenClaw tar över den tunga databearbetningen kan erfarna analytiker fokusera på det som verkligen avgör utfallet i en M&A-process. Mönsterigenkänning. Riskbedömning. Strategisk tolkning.  

  

  
`,"case-study-ai-agenter-i-byggbranschen":`
   
   
Byggsektorn befinner sig i ett skede där marginaler pressas hårt, projektcykler blir allt mer fragmenterade och konkurrensen förflyttas från ren kapacitet till strukturerad exekvering. I denna miljö uppstår ett praktiskt behov av AI‑lösningar som kan driva projektdisciplin, kostnadskontroll och datastyrda beslut. Inte som visioner, utan som verktyg integrerade i vardagliga arbetsflöden.

   
   
Denna case study AI bygg är baserad på ett konkret uppdrag där Pathmaker implementerade en uppsättning specialiserade AI‑agenter i en svensk byggkoncern med fokus på industriella fastigheter. Syftet var tydligt. Ingen innovationsteater, inga pilotprojekt som rynkar ihop sig efter två månader. Kunden behövde mätbara effekter. Mindre friktion. Bättre projektdrift. Förutsägbara ledtider.

   
   
I centrum för lösningen stod OpenClaw projektledning AI, en agentarkitektur som byggdes för att hantera just den typ av fragmenterad och dokumenttung miljö som kännetecknar byggbranschen.

   
   
Detta är en genomgång utan romantisering. Inga berättelser om magiska vändningar, utan en nökternt genomförd automatisering i en bransch där mycket fortfarande sköts med manuella filer och personberoende rutiner.



## Utgångsläge och problemdefinition

   
   
Vid projektstart saknades inte ambitioner hos kunden. Däremot saknades strukturen som skulle förvandla ambitionerna till faktiska resultat.

   
   
I praktiken såg situationen ut så här:

   
   
- Projektledare satt fast i dokumentadministration  
- Data låg utspridd över mejltrådar, PDF:er, Wordfiler och äldre projektsystem  
- Prognoser baserades ofta på känsla istället för flödesdata  
- Oförutsedda störningar drev kostnader, eftersom de inte fångades tidigt  

   
   
Teamet beskrev arbetsmiljön som ett konstant jagande efter nästa uppdatering. Det fanns ingen sammanhållen struktur för att kontrollera risker eller prioritera insatser.

   
   
För en aktör som arbetar i mitten av marknaden, där transaktionsfönster är snäva och kassaflöden inte får överraska, blev detta en tydlig flaskhals. Kunden efterfrågade en lösning som minskade personberoendet och skapade förutsägbarhet i projekten, utan att kräva ett helt nytt IT‑landskap.

   
   
Det var utgångspunkten för implementationen av OpenClaw projektledning AI.



## Målsättning för automation och agentbaserad styrning

   
   
Tre mål formulerades tillsammans med kunden:

   
   
- Automatisera de mest tidskrävande delarna av projektadministrationen  
- Förbättra riskidentifieringen i realtid genom datakopplingar  
- Skapa konsekvent rapportering utan att öka arbetsbördan  

   
   
Med andra ord, ta bort manuellt brus och ersätta det med operativ skärpa.

   
   
Det var tydligt från dag ett att fokus inte låg på innovation som mål i sig, utan på operativ nytta. För att lyckas behövdes en agentstruktur som kunde arbeta parallellt, ta emot inkommande data och sköta arbetet diskret i bakgrunden.



## Tekniken bakom, utan teknologisk romantik

   
   
Byggbranschen automation tenderar ofta att förkläs i futuristiska visioner. Men i praktiken handlar det om något enklare. Gör det operativa arbetet renare och mer förutsägbart.

   
   
OpenClaw projektledning AI bestod av följande komponenter:

   
   
- En insamlingsagent som importerade alla dokumenttyper  
- En tolkningsagent som extraherade struktur ur filer och mejl  
- En riskagent som flaggade tidiga avvikelser  
- En rapportagent som levererade sammanställda lägesrapporter  

   
   
Agentsystemet integrerades utan att ersätta befintliga system. Detta var ett krav från kunden, eftersom tidigare försök att införa nya plattformar resulterade i övergivna implementeringar.

   
   
Det centrala var att agenternas output kunde konsumeras direkt av projektledarna. Kort, koncist och utan drivrutiner som skapade extra arbetsmoment.



## Fallstudie, fas 1: Automatiserad dokumenttolkning

   
   
Den första fasen hanterade en av kundens mest tidskrävande arbetsuppgifter. Den regelbundna genomgången av inkommande filer.

   
   
Agenten byggdes för att tolka:

   
   
- ÄTA‑underlag  
- Leverantörsofferter  
- Projektrapporter  
- Tekniska bilagor  
- Leveransbesked  

   
   
Före automation tog denna process upp till sex timmar per vecka per projektledare. Efter implementeringen tog den några minuter.

   
   
Alla filer drogs automatiskt in i systemet. Agenten kategoriserade dem, läste igenom innehållet, plockade ut nyckeltal och lade underlagen till rätt projektkategori.

   
   
Den största vinsten var inte tidsbesparingen. Den största vinsten var att information inte längre föll mellan stolar.

   
   
Det var denna fas som etablerade förtroendet internt. Medarbetare såg att tekniken gjorde vad den skulle, utan att skapa extra friktion.



## Fallstudie, fas 2: Riskagenten och tidiga varningssignaler

   
   
Nästa steg var riskhantering. Här kom agenternas samlade datagrund till sin rätt.

   
   
Riskagenten analyserade:

   
   
- Avvikelser i tidplaner  
- Förändringar i leveransdatum  
- Kostnadssignaler i inkommande offertunderlag  
- Textbaserade riskindikationer i mejl  
- Ordval kopplat till konfliktpotential i kommunikation  

   
   
Detta skapade en helt ny typ av risksynlighet.

   
   
Projektledarna rapporterade att agenten fångade upp risker som tidigare upptäcktes först vid månadsbokslut, ibland ännu senare. Detta gav två konkreta resultat.

   
   
- Mindre brandsläckning  
- Färre kostnadsöverraskningar  

   
   
För en koncern som hanterar många parallella projekt var detta en direkt kostnadsbesparing, men ännu viktigare, en stabilisering av rapporteringen till styrelsen.



## Fallstudie, fas 3: Automatiserad rapportering

   
   
Rapporter är en central del av byggstyrning. Problemet var att de tog tid att producera och ofta byggde på osäker data.

   
   
OpenClaw projektledning AI levererade automatiskt:

   
   
- Veckorapporter  
- Avvikelseuppföljning  
- Kostnadsprognoser  
- Försäkringsunderlag vid störningar  
- Tidslinjeöversikter  

   
   
Detta gjordes utan manuell sammanställning. Agenten gick igenom alla projektflöden och producerade en konsekvent rapportstruktur för alla projektledare.

   
   
Efter tre månader hade rapporteringsdisciplinen förändrats. Inte genom utbildningsinsatser, utan genom att rapporterna byggde på data som redan fanns i agenternas flöden.



## Verkliga resultat efter sex månader

   
   
Resultaten dokumenterades i tre dimensioner.

   
   
### Operativa effekter

   
   
- Projektledarna sparade i snitt 6–8 timmar per vecka  
- Riskavvikelser upptäcktes i snitt 9 dagar tidigare än tidigare  
- Rapporteringstiden minskade med 80 procent  

   
   
Detta gav tydliga, kvantifierbara effekter utan organisatoriska omställningar.



### Finansiella effekter

   
   
- Lägre störningskostnader  
- Stabilare kostnadsprognoser  
- Färre personbundna risker  

   
   
Detta är effekter som direkt påverkar kassaflöde och marginaler, särskilt i projektportföljer där förseningar snabbt blir dyra.



### Strategiska effekter

   
   
- Data blev en faktisk tillgång, inte ett önskemål  
- Projektledarna tog snabbare och mer konsekventa beslut  
- Ledningen fick en mer pålitlig översikt av hela projektportföljen  

   
   
Detta är kanske den mest långsiktiga effekten. Integrerad AI har potential att forma en kultur där beslutsfattande blir mer faktabaserat och mindre reaktivt.



## Lärdomar som andra byggbolag bör ta med sig

   
   
Det finns flera insikter från detta case som kan hjälpa andra aktörer.

   
   
### 1. Börja med det monotona, inte det komplexa

   
   
De största effekterna kom från att automatisera uppgifter som ingen egentligen vill göra. Dokumenttolkning. Sortering. Sammanställning.

   
   
Det frigör bandbredd för riktig projektledning.



### 2. Agentarkitektur fungerar bättre än monolitiska plattformar

   
   
I byggmiljö är flöden rörliga och information är spretig. Detta gör agentbaserade lösningar mer flexibla än traditionella ERP‑tillägg.



### 3. Små vinster sprider acceptans

   
   
När projektledarna såg att systemet fungerade ökade viljan att bredda användningen. Det skedde naturligt. Ingen förändringsledning behövdes.



### 4. Automation fungerar bäst när den inte märks

   
   
Den största styrkan med OpenClaw projektledning AI var att den arbetade i bakgrunden. Medarbetarna fortsatte arbeta i sina vanliga verktyg. Systemet bara förbättrade flödet.



## Slutsats

   
   
Denna case study AI bygg visar hur en bransch som länge betraktats som trögföränderlig kan ta konkreta steg mot automation utan dramatik. Framgången låg inte i tekniken i sig, utan i hur tekniken användes. Utan överdrivna ambitioner. Utan komplexa implementeringar.

   
   
Byggbranschen automation handlar inte om att ersätta människor. Det handlar om att ge projektledare mer tid att faktiskt leda projekt. När tekniken implementeras med pragmatism och operativ disciplin kan effekterna bli både stabila och mätbara.

   
   
OpenClaw projektledning AI visade att AI‑agenter inte är en vision. De är ett verktyg som redan idag kan skapa värde i svenska byggprojekt.

   
   
Book a strategic consultation`,"openclaw-för-e-handelns-kundsupport":`


## En pragmatisk genomgång av hur AI skapar stabilitet, kontroll och skalbarhet i moderna handelsmiljöer



E‑handelns kundsupport är idag en komplex, kostnadsdriven och ofta underinvesterad funktion. För medelstora bolag som vill växa genom förvärv, konsolidering eller selektiva carve outs inom exempelvis retail och vårdrelaterad försäljning, blir kundsupporten en gömd flaskhals som riskerar att bromsa multiplar och integreringstakt.  

  

OpenClaw adresserar just denna problematik. Inte genom visioner om perfekta kundresor, utan genom att ge en robust, driftssäker och finansiellt rationell modell för hur man bygger kundsupport e‑handel AI som faktiskt levererar.  

  

Detta är en genomlysning av hur OpenClaw fungerar i praktiken. Fokus ligger på motståndskraft, riskreducering och konsekvent operativ förbättring, inte romantiserade transformationsresor.



---




## Belasta inte teamet med repetitiva frågor



Majoriteten av all kundsupport i e‑handel gäller samma tre områden: leveransstatus, returer och produktfrågor.  

  

Dessa är inte värdeskapande samtal. De är kostnadsdrivande. De är repetitiva. De är trösklar mellan kund och köp.  

  

OpenClaw identifierar dessa mönster och löser dem med dygnet runt svar AI, utan att bygga komplexa interna automationskedjor som kräver eget utvecklingsteam.  

  

En stabil AI-modell avlastar inte bara supporten, den gör väntetider irrelevanta. Det skapar en mer förutsägbar driftsmiljö som är enklare att budgetera och skala.



## Returprocesser måste industrialiseras, inte romantiseras



Automatisera returer AI är ett av de områden där OpenClaw har störst påverkan. Många e‑handlare tror att returer är en del av kundrelationens finrum.  

  

I realiteten är returer en ren logistisk funktion. Kunden vill lösa problemet så snabbt som möjligt, och företaget vill minimera friktion och felkostnader.  

  

OpenClaw tar hand om detta med en kombination av regelbaserat beslutsstöd och dynamisk AI, vilket gör att:

- Kunden får sitt svar direkt.  
- Företaget får färre manuella ärenden.  
- Returhantering följer samma regler oavsett belastning.  

  

Detta är den typ av standardiserad kvalitet som investerare vill se i en bolagsgrupp som bygger synergier genom konsolidering.



---




## 1. Avlastning som kan mätas



OpenClaw minskar antalet manuella ärenden med mellan 40 och 80 procent beroende på sortimentbredd och ordervolym.  

  

Detta går att mäta direkt i tre dimensioner:

- Minskad tid per ärende.  
- Lägre bemanningskostnader.  
- Kortare svarstider utan ökade fasta kostnader.  

  

För bolag som genomgår en carve out eller ska integreras i en större struktur är detta värdefullt. Supportkostnaderna blir mer förutsägbara och betydligt enklare att centralisera.



## 2. Dygnet runt svar utan jourkostnader



Många bolag överinvesterar i kvälls- och helgpersonal för att de vill behålla kundnöjdhet.  

  

I praktiken innebär det dyra timmar och låg output.  

  

OpenClaw levererar dygnet runt svar AI som fungerar utan mänsklig övervakning, vilket gör att man kan:

- Hålla nere timkostnader.  
- Styra toppar och dalar i belastning.  
- Ge kunderna en konsekvent upplevelse oavsett tid på dygnet.  

  

Det är inte fråga om en idealiserad kundresa. Det är ren kostnadskontroll.



## 3. Standardiserad kunskap utan interna silos



I många e‑handelsbolag finns kunskapen hos enskilda medarbetare. Det gör supporten känslig för sjukfrånvaro och personalomsättning.  

  

Med OpenClaw blir allt dokumenterat och återanvändbart. Modellens kunskapsbas är centraliserad och kan tränas med:

- Produktsortiment  
- Leveransvillkor  
- Returpolicy  
- Garantiinformation  

  

Detta är en stabilare lösning än traditionell onboarding. Den är också betydligt lättare att skala upp när bolaget växer eller integreras i en koncern.



---




## Varför operativ stabilitet är kritiskt i uppköpta e‑handelsbolag



Vid förvärv av mellanstora e‑handelsbolag är kundsupporten en av de funktioner som ofta saknar struktur, processer och mätbarhet.  

  

Det gör integrationen långsammare än nödvändigt.  

  

OpenClaw löser detta genom att:

- Ge en snabbare harmonisering av kundsupport mellan bolag.  
- Eliminera skillnader i servicenivå och arbetssätt.  
- Skapa en enhetlig databas av kundinteraktioner.  

  

När koncernen sedan ska fatta beslut om logistik, returrutiner eller servicepolicy är datan redan strukturerad, jämförbar och användbar.  



## Hur AI minskar risken vid carve outs



Vid carve outs är tid och kontroll avgörande. Övergången från en större struktur till fristående verksamhet skapar ofta operativ turbulens.  

  

Supporten är en av de första funktionerna som blir lidande.  

  

OpenClaw minskar risken genom att:

- Leverera en fullt fungerande supportstruktur från dag ett.  
- Ersätta behovet av att snabbrekrytera supportpersonal.  
- Ge en skalbar lösning som är oberoende av tidigare verksamhetssystem.  

  

Detta skapar en stabil bas för den nya enheten, utan att man behöver bygga upp ett helt team innan intäkterna hunnit stabiliseras.



---




## Ingen långdragen onboarding



OpenClaw implementeras på veckor, inte månader.  

  

Det kräver i praktiken tre steg:

- Import av befintlig knowledge base och supporthistorik.  
- Kartläggning av returregler och policyer.  
- Integration mot shop‑plattform och orderhantering.  

  

Detta är ett mer realistiskt arbetssätt än AI‑projekt som lovar transformation men fastnar i processkartläggning utan slutdatum.



## Inga beroenden av eget teknikteam



Organisationer som är vana vid traditionella IT‑projekt förväntar sig ofta att AI‑införande kräver interna utvecklare.  

  

OpenClaw är utformat för att undvika just det.  

  

All drift, modelluppdatering och automatisering sker externt. Företaget fokuserar på sin kärna, inte på att bygga AI‑kompetens internt.



## Kontinuerlig förbättring utan friktion



E‑handel förändras snabbt, särskilt inom sortiment och leveransmetoder.  

  

OpenClaw uppdateras löpande genom:

- Automatisk inhämtning av supportmönster.  
- Förslag till förbättrad routing av ärenden.  
- Periodisk trimning av svarskvalitet.  

  

Detta ger en långsiktigt hållbar modell utan att kräva ständig handpåläggning från kundens sida.



---




## Kostnadsreduktion utan att försämra servicenivån



Det centrala värdet i kundsupport e‑handel AI ligger inte i att skapa en bättre kundupplevelse, även om det ofta blir konsekvensen.  

  

Det primära värdet är:

- Färre timmar.  
- Jämnare flöde.  
- Lägre felkostnader i returhantering.  

  

Det är effekter som är direkt mätbara och uppskattas högt av investerare och styrelser.



## Mindre risk tack vare mer enhetliga processer



När alla kunder får konsekventa svar minskar risken för:

- Felaktiga löften om leverans.  
- Felhanterade reklamationer.  
- Speciallösningar som skapar problem längre fram.  

  

I en koncerngrupp där flera e‑handlare ska fungera under samma paraply skapar detta en tydlig kvalitetsnivå som är enklare att styra.



## Förbättrade marginaler vid skalning



När volymen ökar är supportkostnader normalt en av de första funktionerna som skenar.  

  

Med OpenClaw sker detta betydligt långsammare, vilket förbättrar marginalerna vid tillväxt.  

  

Det här är en av de mest underskattade faktorerna vid transaktioner i mellanskiktet av e‑handelsmarknaden. Ett bolag som kan skala utan att kraftigt öka personalstyrkan värderas högre.



---




OpenClaw är inte en lösning för företag som vill ha glättiga dashboards eller visioner om perfekta kundresor.  

  

Det är en produkt för bolag som vill få kontroll över supportkostnader, säkra sina processer inför expansion eller integrera e‑handelsverksamheter med färre riskmoment.  

  

En stabil AI‑baserad supportlösning är inte längre en nice to have. Den är en av de mest effektiva åtgärderna för att göra ett e‑handelsbolag mer skalbart, mer förutsägbart och mer attraktivt i en M&A‑miljö.  



Book a strategic consultation`,"automatisera-kunders-supportärenden-under-nätter":`En strategisk OpenClaw guide för Hylten-Invest



  
Att bygga en långsiktig och stabil förvaltningsstruktur för digitala tillgångar kräver en lika genomtänkt strategi för kundinteraktion. I en tid där marknaderna rör sig dygnet runt och där större förmögenheter ofta förväntar sig sömlös service oberoende av tid på dygnet, blir nattautomatisering av supportärenden en central byggsten i professionell förvaltning.  

  
  
För Hylten-Invest och dess klienter, särskilt de som söker diskretion, robusthet och kontinuitet, är automatiserad nattlig support mer än bara effektivisering. Det är ett verktyg för att skapa trygghet, förutseende och skydd av långsiktiga värden.  

  
  
Denna guide beskriver hur avancerad automatisering via OpenClaw kan byggas in i en större förvaltningsstrategi, utan att kompromissa med stabilitet eller integritet.  



## Varför nattlig automatisering är en del av modern förvaltning  

  
Kapital sover aldrig. De digitala verksamheter som familjekontor och förmögenhetsägare ofta ansvarar för, fortsätter att generera aktivitet långt efter att traditionella arbetstider passerat. Supportärenden uppstår, incidenter behöver loggas, och kunder vill ha omedelbara svar.  

  
  
Att hantera denna rytm manuellt är inte hållbart. Det skapar trötthet, risk för felbedömningar och svagheter i säkerhetskedjan.  

  
  
Automatisering under nätter erbjuder:  

  
• Förutsägbarhet i svarstider  
• Reducerad operativ risk  
• Högre kundnöjdhet utan ökad bemanning  
• Möjlighet till diskret hantering av känsliga ärenden  
• Ett stabilt fundament som stödjer organisationens övriga processer  

  
  
När allt sker innan morgonen anländer, frigörs också mänsklig tid till strategiskt arbete. För HNWI och familjekontor är tid ofta en lika värdefull tillgång som kapital.  



## Ett minimalistiskt och konservativt tillvägagångssätt  

  
Automatisering måste vara kontrollerad. Den får inte bli en frikopplad teknologisk experimentyta, utan ska istället fungera som en diskret förlängning av verksamhetens kärna.  

  
  
Principerna som styr implementationen bör därför vara:  

  
• Enkelhet över komplexitet  
• Stabilitet över snabbhet  
• Transparens över förtroendeantaganden  
• Långsiktig arkitektur över kortsiktig innovation  

  
  
Målet är inte att skapa avancerade system som kräver kontinuerlig övervakning, utan att utforma en struktur som står stabil över tid och kan bära både tillväxt och tillfällig stress.  



## Vad OpenClaw tillför ekosystemet  

  
OpenClaw är ett verktyg för att skapa autonoma arbetsflöden där AI-modeller, API-strömmar och regelstyrda logiker samverkar.  

  
  
För nattlig support innebär detta att systemet:  

  
• Hämtar inkommande ärenden från valfri kanal  
• Analyserar innehåll och klassificerar händelsen  
• Utför fördefinierade steg utan mänsklig inblandning  
• Uppdaterar interna system och loggar  
• Förbereder sammanfattningar för morgonens manuella granskning  

  
  
Strukturen bygger på små, tydliga regler, snarare än breda och oförutsägbara AI-beslut. Det innebär att resultatet blir mätbart, stabilt och lätt att förvalta.  

  
  
OpenClaw fungerar därför som ett skyddande ramverk runt automationen, snarare än en central intelligens som själv fattar oförutsägbara beslut.  



## Hur en nattlig supportstruktur kan konstrueras  

  
Nedan följer en arkitekturmodell anpassad för Hylten-Invest och dess klienter. Den är utformad för skalbarhet, diskretion och minimal attackyta.  



### 1. Datainsamling  
Alla ärenden passerar genom en kontrollerad gateway. Här standardiseras formatet, känsliga nycklar anonymiseras och metadata extraheras.  

  
  
Detta skapar:  

  
• Stabil struktur för maskinell analys  
• Reducerad risk för exponerad data  
• Bättre prioriteringsunderlag  

  
  
En stabil grund är avgörande innan automationen tar vid.  



### 2. Klassificering och prioritering  
OpenClaw använder här regler som definieras av verksamheten, inte modeller som improviserar.  

  
  
Exempel på klassificering:  

  
• Fakturafrågor  
• Teknisk incident  
• Kontoåtgärd  
• Säkerhetsrelaterat  
• Allmänt informationsbehov  

  
  
Varje kategori leder till ett tydligt definierat flöde och saknar gråzoner.  



### 3. Automatiserad resolution  
Det är här värdet uppstår.  

  
  
OpenClaw utför åtgärder baserat på regler och tillgängliga API:er. Det kan exempelvis innebära:  

  
• Kontroll av kontostatus  
• Justering av inställningar  
• Hämtning av loggar  
• Utskick av verifierad information  
• Registrering av incidenter i säkerhetsplattformar  

  
  
Automatiseringen hanterar upp till 80 procent av nattens totala ärenden. Det innebär att morgonens team endast hanterar de mest värdefulla fallen.  



### 4. Dokumentation  
En nattlig rapport genereras automatiskt.  

  
  
Rapporten innehåller:  

  
• Översikt av alla ärenden  
• Åtgärder som genomförts  
• Identifierade risker  
• Avvikelser från standardflöden  
• Rekommendationer för uppföljning  

  
  
Det är denna rapport som skapar trygghet och som blir basen för den morgonliga riskgenomgången.  



## Informationssäkerhet och diskretion  

  
HNWI och familjekontor kräver högsta nivå av integritet. Därför måste automatiseringen struktureras med strikt åtkomstkontroll och minimal exponering.  

  
  
Nyckelprinciper:  

  
• Endast nödvändiga datapunkter exponeras för automatiseringen  
• Reglerna är transparenta och statiska  
• Alla åtgärder loggas i krypterade loggar  
• Systemet kan isoleras vid misstänkt aktivitet  

  
  
Detta säkerställer att digital automation aldrig blir en riskfaktor. Istället förstärker den den övergripande säkerhetsstrukturen.  



## Hur Hylten-Invest stärker kundupplevelsen genom automatisering  

  
Automatiseringens främsta värde ligger inte i effektivitet, utan i förtroende.  

  
  
När en kund kan få svar 03.15 utan att vänta till morgonen, och samtidigt veta att svaret är korrekt och tryggt levererat, stärks relationen mellan förvaltare och klient.  

  
  
Hylten-Invest kan därmed:  

  
• Leverera service dygnet runt utan att öka bemanningen  
• Skapa en marknadsposition där trygghet är central  
• Ge sina klienter ett skydd mot nattliga driftstörningar  
• Förvandla support till en del av förmögenhetsförvaltningens infrastruktur  
• Minska operativt brus och frigöra strategisk tid  

  
  
Denna typ av långsiktig stabilitet är en konkurrensfördel som inte kan imiteras snabbt.  



## Minimalism som metod  

  
I en tid där många företag bygger komplexa AI-lösningar, väljer Hylten-Invest en annan väg.  

  
  
Genom att fokusera på regler, stabilitet och tydligt definierade flöden blir resultatet:  

  
• Färre fel  
• Lättare revision  
• Långsiktig hållbarhet  
• Ökad tydlighet för alla användare  

  
  
Det är en modell som åldras väl.  



## Nattautomation som en del av ett större ekosystem  

  
Det är viktigt att se nattlig automatisering inte som ett isolerat projekt, utan som en nod i en större digital struktur.  

  
  
När denna nod är korrekt implementerad kan den integreras med:  

  
• Riskhanteringssystem  
• Finansiella plattformar  
• Kommunikationsverktyg  
• Incidenthantering  
• Intern rapportering  

  
  
På så sätt blir automatiseringen inte bara ett verktyg, utan en del av förvaltningsarkitekturen.  



## En framtid med mindre friktion och fler möjligheter  

  
Automatisering handlar inte om att byta ut människor. Det handlar om att förstärka kvaliteten på mänskliga beslut.  

  
  
När natten hanteras av en strukturerad logik, frigörs dagen för relationer, strategier och långsiktigt arbete.  

  
  
Familjekontor och större privata verksamheter som arbetar med Hylten-Invest får därmed:  

  
• En lugnare arbetsmiljö  
• En stabilare kundupplevelse  
• Högre precision i beslutsunderlag  
• En reduktion av driftbaserad stress  

  
  
Det är så digital infrastruktur bör byggas. Med respekt för tiden och kapitalet den ska förvalta.  




  
Automatisering av nattliga supportärenden är inte ett tekniskt projekt. Det är en investering i stabilitet, förtroende och långsiktig förvaltning.  

  
  
Genom att använda OpenClaw som ramverk kan Hylten-Invest skapa en diskret, robust och minimalistisk automatisering som stärker relationerna med deras klienter och skyddar verksamhetens integritet.  

  
  
Det är ett steg mot en digital infrastruktur som håller i decennier.  

  
  
Contact for stewardship discussion`,"guide-till-intern-effektivisering-för-konsulter-med-fokus-på-långsiktigt-värdeskapande":`


  

Intern effektivisering har blivit en av de mest avgörande konkurrensfaktorerna för konsulter som verkar i en marknad präglad av ökad komplexitet, ökade klientkrav och press på leveransprecision.

  

I en miljö där relationer, förtroende och kontinuitet är centrala värden behöver effektivisering ske med stor hänsyn till stabilitet och långsiktighet.

  

För professionella tjänsteföretag, särskilt de som samarbetar med förmögna familjer, entreprenörer och ägarledda bolag, blir intern effektivitet inte bara en kostnadsfråga utan en fråga om förvaltarskap.



  

Nedan följer en strukturerad och djuplodande vägledning, framtagen för konsulter som vill stärka sin interna kärna, skapa hållbara processer och frigöra tid för det mänskliga värde som formar de mest betydelsefulla kundrelationerna.



  
  

En väg mot stabilitet, förtroende och långsiktigt resultat



  
  

## H2: Varför intern effektivisering är avgörande för konsultverksamheter



  

Intern effektivitet handlar ytterst om att skapa ett ramverk där konsulter kan lägga sin tid på det som skapar störst värde.

  

Det innebär att minska friktion i arbetsflöden, att eliminera återkommande manuellt arbete och att skapa strukturer som skyddar fokus, omdöme och kvalitet.

  

För konsulter som arbetar nära beslutsfattare, styrelser och ägare blir interna processer ett sätt att säkra stabilitet. Det handlar om att alltid kunna leverera rätt kunskap vid rätt tidpunkt utan att belasta organisationen med onödiga steg.



  

När interna processer är effektiva ökar leveransens jämnhet. Det stärker förtroendet och ger en förutsägbarhet som är särskilt värdefull i miljöer där långsiktigt kapital, förmögenhetsförvaltning eller strategiska ägarfrågor står i fokus.



  
  

## H2: Kärnprinciper för effektivisering inom konsultverksamhet



  
  

### H3: 1. Eliminera informationsbrus och skapa tydliga kunskapsflöden



  

Många konsultorganisationer drabbas av stillastående information, duplicerat arbete och brist på sammanhängande kunskapsförvaring.

  

Ett effektivt system innebär att kunskap inte ska upprepas eller omformuleras av flera personer.

  

Det ska vara lätt att söka. Lätt att förstå. Lätt att använda.

  

Strukturerad dokumentation, gemensamma mallar, sammanhållna arbetsytor och tydliga kunskapsbibliotek skapar en stabil kärna som bär verksamheten.



  
  

### H3: 2. Automatisera repetitiva moment med AI agenter



  

Moderna AI agenter, särskilt de som utvecklas inom plattformar som OpenClaw, gör det möjligt att automatisera en rad interna processer.

  

Det handlar inte om att ersätta expertis, det handlar om att förstärka den.

  

Konkreta användningsområden inkluderar:

  
• Förberedelse av kundmaterial och agendor  
• Strukturering av research  
• Kvalitetssäkring av interna anteckningar  
• Sammanställning av beslut och nästa steg  
• Kontroll av compliance-relaterade dokument  

  
AI agenter gör det möjligt att standardisera delar av kedjan, samtidigt som de frigör tid åt konsulten att fokusera på analys, relationer och långsiktighet.



  
  

### H3: 3. Minska intern mötestid med tydliga beslutsramar



  

Möten är nödvändiga men ofta överrepresenterade.

  

Effektiva konsultbolag arbetar med förmöten, tydliga agendaformat, beslutssammanfattningar och fasta mötesfönster.

  

Det skapar en rytm som minimerar spontana avbrott och gör det lättare att hålla djupare fokus i arbetsdagen.

  

När möten är kortare och mer strukturerade blir besluten bättre och arbetsmiljön stabilare.



  
  

### H3: 4. Skapa en kultur av långsamhet i analys och snabbhet i logistik



  

Långsamhet i analys betyder tid för reflektion och kvalitet.

  

Snabbhet i logistik innebär att allt administrativt och repetitivt sker utan fördröjning.

  

Detta är kärnan i långsiktigt förvaltarskap.

  

En konsult som har tiden att tänka längre kan skapa strategiska råd som formar en kundrelation i många år framåt.



  
  

## H2: Så bygger du ett processramverk som håller över tid



  
  

### H3: 1. Kartlägg nuvarande arbetsflöden



  

Det första steget är att identifiera vad som faktiskt sker i organisationen. Det innebär att beskriva hur uppdrag startar, hur de genomförs och hur de avslutas.

  

Det innebär också att identifiera flaskhalsar. Oavsett om dessa är manuella moment, informationsberoenden eller brist på struktur.

  

När flödena är kartlagda blir det möjligt att se vilka steg som kan standardiseras, automatiseras eller förenklas.



  
  

### H3: 2. Identifiera områden där AI agenter kan integreras



  

AI agenter fungerar bäst när de får en tydlig roll i processen.

  

Det kan vara:

  
• Förhandsanalys inför möten  
• Tolka och sammanfatta stora mängder dokument  
• Skapa förstautkast baserat på definierade mallar  
• Hantera kvalitetskontroller  
• Koordinera och strukturera kommunikationstrådar  

  
När dessa steg integreras rätt skapas ett system som gör konsulten både snabbare och mer konsekvent utan att offra kvalitet.



  
  

### H3: 3. Standardisera centrala klientleveranser



  

Inom konsultverksamhet finns en rad återkommande dokumenttyper som alltid följer samma struktur.

  

Till exempel:

  
• Mötessammanfattningar  
• Analysrapporter  
• Workshopdokumentation  
• Ägarrelaterade beslutsunderlag  
• Statusrapporter över pågående initiative  

  
Genom att skapa mallar som är minimalistiska och rena blir det möjligt att producera konsekvent och med hög kvalitet vid varje tillfälle.

  

AI agenter kan sedan fylla dessa mallar med innehåll baserat på information från research, interna anteckningar eller systemdata.



  
  

### H3: 4. Etablera styrning och uppföljning



  

Effektivisering handlar inte om att göra saker snabbare, det handlar om att göra dem mer pålitliga.

  

Det kräver rutiner för uppföljning. Det kräver konsekvent styrning. Det kräver att någon bär ansvaret för att processer inte eroderar över tid.

  

Företag som betjänar högförmögna klienter vet att stabilitet är ett resultat av noggrannhet.

  

Därför behöver processerna ägas, vårdas och utvärderas.



  
  

## H2: Hur AI agenter från OpenClaw särskiljer effektivisering för konsulter



  

AI agenter från OpenClaw är utformade för professionella tjänstemiljöer som kräver diskretion, precision och hög informationssäkerhet.

  

De är byggda för att arbeta i bakgrunden, utan att märkas, och skapa en intern struktur som känns självklar.

  

De fungerar som digitala assistenter med tydliga instruktioner, processkedjor och ansvarsfördelningar.

  

Resultatet är en organisation där konsulter rör sig snabbare, men där kundupplevelsen är lugnare, mer samlad och mer förtroendeingivande.

  

Det är en kombination som passar familjekontor, privata investmentbolag, ägarledda verksamheter och konsulter som arbetar med multigenerationella relationer.



  
  

## H2: Den mänskliga dimensionen i intern effektivisering



  

Effektivisering får aldrig leda till att verksamheten förlorar sin mänskliga kärna.

  

Det får aldrig leda till att relationer förenklas eller att rådgivning reduceras till transaktioner.

  

Istället ska effektivisering skapa mer tid för det mänskliga.  
Mer tid för dialoger som bygger förtroende.  
Mer tid för strategiska samtal.  
Mer tid för att förstå familjers och ägares långsiktiga ambitionsnivåer.

  

När AI och struktur tar hand om det repetitiva, kan konsulter ge sin fulla uppmärksamhet åt det som inte kan automatiseras, nämligen omdöme och närvaro.



  
  

## H2: En framtid där konsulter arbetar med högre precision och mindre friktion



  

Konsultbranschen förändras.  

Kunderna förväntar sig större tydlighet, snabbare utfall och mer holistiska perspektiv.

  

Intern effektivisering är därför inte en valfri förbättring, det är en nödvändighet för att skapa en stabil och långsiktig verksamhet.

  

Genom att kombinera strukturerade arbetsflöden, minimalistiska processer och AI agenter som hanterar det monotona, blir organisationen mer förutsägbar och mer hållfast.

  

Det är en grund som bär långt in i framtiden.



  
  
`,"moral-enterprises-downturn-outperformance":`---
title: "The Moral Engine That Outlasts Cycles"
description: "Why value‑anchored family enterprises with covenantal ethics outperform during contractionary cycles; an analyst‑grade distillation of moral authority, industrial continuity, and generational stewardship."
date: "2025-12-25"
author: "Hylten-Invest"
slug: "moral-enterprises-downturn-outperformance"
--- 

Decline tests foundations.

Froth evaporates.

Speculators scatter.

Principled houses stand.

Family enterprises with moral philosophies do not “react” to downturns.

They remain.

Covenant-first.

Stewardship-driven.

They carry the long memory of industry.

That memory gives an unfair advantage.

Short-term operators chase margin.

Principled families defend vocation.

Different universe.

Different physics.

Direct line from the forge to the future.

Purpose over panic.

Duty over noise.

The Spirit of Gnosjö built this reflex.

Work as worship.

Enterprise as calling.

Capital as responsibility, not indulgence. *"

Access is restricted to approved mandates.

Minimum target size: $5M+.`,"hur-mycket-tid-sparar-en-ai-agent-i-veckan":`\`\`\`markdown
En strategisk analys för svenska småföretag

  
  
  
I svenska småföretag är tiden ofta den mest underskattade tillgången.  
Den är dyr, begränsad och svår att öka.  
Samtidigt växer kraven på ordning, kommunikation, dokumentation och kundhantering.  
Det skapar en situation där företagare tvingas agera både operativt och administrativt, ofta långt utanför sin kärnkompetens.

  
  
  
AI‑agenter har de senaste två åren blivit en konkret resurs, inte ett framtidslöfte.  
Frågan som uppstår är därför enkel och central för ett litet bolag med begränsade timmar och höga kvalitetskrav:  
Hur mycket tid sparar en AI‑agent i veckan, och vad betyder den besparingen i ett längre ägarperspektiv?

  
  
  
Det här är en genomgång av vad den faktiska tidsbesparingen innebär, hur den uppstår och hur den påverkar ett företag som vill arbeta långsiktigt, förvalta resurser med omsorg och undvika överkomplexitet.



## Den nuvarande tidsläckan i små bolag

  
  
  
Svenska småföretag uppger återkommande samma problemområden.  
De kräver mycket tid, men ger lite värde.  
Fyra av dem dominerar:

  
  
  
### Administrativa uppgifter  
Fakturering, påminnelser, sortering av kvitton, enklare budgetuppdateringar och basala rapporter.  
Detta är monotont arbete som kräver precision men ingen kreativitet.

  
  
  
### Kundkommunikation  
Mailsvar, uppdateringar, förtydliganden och tidsbokningar.  
Ofta tar det längre tid att administrera en kundrelation än att leverera själva tjänsten.

  
  
  
### Intern koordinering  
Mötesanteckningar, uppföljning, dokumentstruktur och kontinuerlig informationssynkning.  
Småföretag saknar stödstrukturer och tvingas därför hantera allt manuellt.

  
  
  
### Informationssökning  
Att ta reda på regler, skattefrågor, leverantörspriser eller trenddata tar oproportionerligt mycket tid.  
Mycket av detta är repetitivt och borde automatiseras.

  
  
  
För ett traditionellt svenskt småföretag ligger detta ofta mellan 12 och 22 timmar per vecka.  
Det är tid som inte skapar tillväxt, inte stärker relationer och inte ökar värdet på verksamheten.



## Vad en AI‑agent faktiskt gör i ett svenskt småföretag

  
  
  
En modern AI‑agent är inte samma sak som en chatbot.  
Den arbetar i bakgrunden, följer instruktioner, strukturerar material och agerar i system som företaget redan använder.  
Den utför uppgifter som idag ligger på en assistent, projektkoordinator eller administratör.

  
  
  
Tre områden utmärker sig:

  
  
  
### 1. Kontinuerlig dokumenthantering  
AI‑agenten skapar, strukturerar och namnger dokument.  
Den sammanfattar möten, håller ordning på beslutsloggar och genererar material utifrån korta instruktioner.  
Detta ersätter stora mängder manuellt arbete.

  
  
  
### 2. Proaktiv kundhantering  
Den skriver utkast till mailsvar, föreslår uppföljningar och ser till att inget glöms.  
Den ger en lugn och förutsägbar rytm i kommunikationen, vilket stärker relationerna utan att kräva mer tid från ägaren.

  
  
  
### 3. Analys och informationsinsamling  
Agenten läser, jämför, filtrerar och prioriterar information.  
Den presenterar endast det som är relevant och sparar därmed timmar av sökande.

  
  
  
Resultatet är att företaget får en arbetskraft som aldrig stannar, aldrig glömmer och alltid arbetar konsekvent.  
Det skapar ordning och riktning.



## Den faktiska tidsbesparingen per vecka

  
  
  
Efter analys av svenska småföretag inom konsulttjänster, bygg, hantverk, fastighetsförvaltning, marknadsföring och specialistyrken ser man ett tydligt mönster.  
Besparingen hamnar stabilt inom ett relativt snävt intervall.

  
  
  
En AI‑agent sparar i genomsnitt:

  
**8 till 18 timmar per vecka.**

  
  
  
Skillnaderna beror främst på tre faktorer:  
hur många system bolaget använder, hur dokumentintensiv verksamheten är och hur mycket kundkommunikation som förekommer.

  
  
  
Nedan följer en mer detaljerad fördelning:

  
  
  
### 8 timmar per vecka  
Företag med låg administrativ belastning.  
Ofta soloföretagare med begränsat behov av rapportering och kundkontakt.

  
  
  
### 12 timmar per vecka  
Små bolag med löpande kunddialog, offertarbete och enklare dokumenthantering.

  
  
  
### 18 timmar per vecka  
Verksamheter med återkommande rapportering, interna möten, större dokumentflöden och högre krav på struktur.  
Detta gäller många konsultbolag och små förvaltningsenheter.

  
  
  
Besparingen sker inte genom några komplexa automatiseringar.  
Den sker genom systematisk avlastning av arbetsuppgifter som aldrig borde ha utförts manuellt.



## Den strategiska effekten av tidsbesparing

  
  
  
AI‑agentens värde ligger inte i att göra saker snabbare, utan i att frigöra en annan typ av tid.  
Tid som möjliggör lugnare beslut, bättre kundrelationer och mer kontroll över ekonomin.

  
  
  
Tre långsiktiga effekter är särskilt tydliga:

  
  
  
### 1. Förstärkt kvalitet i ägarbeslut  
När operativ belastning minskar ökar kvaliteten i de strategiska valen.  
Ägaren får tid att tänka, inte bara reagera.  
Det skapar stabilitet över år, inte över dagar.

  
  
  
### 2. Ökad ordning i verksamheten  
AI‑agenten tvingar fram konsekvens i dokumentation, struktur och kommunikation.  
Ordning är inte ett självändamål, den är grunden för låg risk och hög resiliens.

  
  
  
### 3. Bättre kundrelationer med mindre ansträngning  
När svar, uppföljningar och material levereras i tid ökar kundernas förtroende.  
Det bygger relationer som håller över längre cykler.  
Det skapar ett företag som känns större, mer stabilt och mer professionellt än det är.

  
  
  
I ett HNWI‑ eller förvaltningsperspektiv är detta centralt.  
Det handlar inte om att springa snabbare.  
Det handlar om att skapa en verksamhet som håller i många år utan att äta upp ägarens tid.



## Vad 8–18 timmar per vecka betyder i kronor

  
  
  
Ett svenskt småföretag värderar normalt sin ägartid mellan 900 och 2 500 kronor per timme, beroende på bransch.  
Även om vi tar den lägre nivån blir effekten tydlig.

  
  
  
Vid 8 timmar sparad tid:  
cirka 7 200 kronor per vecka.  
cirka 345 600 kronor per år.

  
  
  
Vid 18 timmar sparad tid:  
cirka 16 200 kronor per vecka.  
cirka 777 600 kronor per år.

  
  
  
Detta är konservativt räknat och bortser helt från värdet av förbättrad kvalitet, mindre stress och minskad risk.  
Sätter man ett långsiktigt ägarperspektiv på detta blir det snabbt uppenbart att en AI‑agent inte är en kostnad, utan en investering i tid, ordning och motståndskraft.



## Den mest underskattade effekten: rytm och kontinuitet

  
  
  
Svenska småföretag drabbas sällan av stora kriser.  
De drabbas av små störningar som samlas över tid.  
Glömda uppföljningar.  
Ostrukturerade dokument.  
Småsaker som aldrig blir gjorda men som skapar friktion i systemet.

  
  
  
En AI‑agent eliminerar en stor del av denna friktion.  
Den skapar en rytm där allt sker i tid och i rätt ordning.  
Det är just rytmen som gör att företaget känns större och mer organiserat än det egentligen är.  
Det är också rytmen som skapar trygghet för kunder och leverantörer.

  
  
  
I små företag är rytm en konkurrensfördel.



## Implementering utan överkomplexitet

  
  
  
En AI‑agent fungerar bäst i miljöer där man undviker stora tekniska projekt.  
Det som krävs är ofta bara tre enkla steg:

  
  
  
1. Klargöra vilka återkommande uppgifter som bör avlastas.  
2. Definiera tydliga instruktioner för hur dessa ska utföras.  
3. Låta agenten arbeta i befintliga system, utan omfattande förändringar.

  
  
  
Det är en minimalistisk metod.  
Den bygger på stabilitet och långsiktighet, inte snabb implementering av nya verktyg.  
Det passar familjebolag, byråer, mindre konsultverksamheter och ägarledda bolag där kontinuitet är viktigare än snabb expansion.



## Slutsats: Hur mycket tid sparar en AI‑agent i veckan?

  
  
  
Den faktiska tidsbesparingen för svenska småföretag ligger stabilt mellan 8 och 18 timmar per vecka.  
Det motsvarar mellan en och två hela arbetsdagar.  
Det är tid som kan flyttas från administration till värdeskapande arbete, kunddialog och strategiska beslut.  
Det är tid som bygger ett företag med lägre risk och högre kvalitet.  
Och framför allt är det tid som frigör ägaren, så att verksamheten kan styras med lugn och långsiktighet.



## Contact for stewardship discussion
\`\`\``,"lokal-ai-drift-mot-molnbaserad-ai":`## En strategisk jämförelse för svenska VD ar  
## Med särskilt fokus på OpenClaw



Svenska företag befinner sig i en tid där artificiell intelligens inte längre är ett val. Det är en nödvändig del av modern konkurrenskraft.  

Det gäller särskilt företag med höga krav på sekretess, kontinuitet och långsiktig kapitalförvaltning.  

Hylten Invest arbetar därför med en tydlig princip. AI ska drivas som en tillgång, inte som en risk.  



I denna artikel följer en fördjupad analys av två huvudvägar. Lokal AI drift och molnbaserad AI.  

Artikeln är skriven för svenska VD ar, styrelser och ägare inom HNWI segmentet och familjeägda bolag.  

Särskilt fokus läggs på OpenClaw, en modell för att skapa trygg AI kapacitet i den egna infrastrukturen.  



---

## En långsiktig investering i kontroll och förvaltning



Lokal AI drift innebär att modeller, träningspipelines och datalager körs i den egna miljön.  

Det kan ske i den befintliga serverhallen, i en privat colocation eller i en hybridarkitektur med egenägda resurser.  



### Närhet till data



För svenska företag med känsliga data är lokal AI ofta den mest rimliga vägen.  

Data behöver inte lämna organisationens sfär.  

Säkerhetsmodellerna hålls intakta.  

Det som stannar i huset, stannar i huset.  



### Förutsägbar kostnadsstruktur



Molnbaserad AI innebär ofta rörliga kostnader.  

Lokal AI innebär däremot en mer förutsägbar ekonomisk livscykel.  

Kapitalet binds i tillgångar som kan skrivas av och som får en tydlig ROI horisont.  

Detta resonemang ligger i linje med hur familjeföretag och HNWI ägare traditionellt tänker kring kapitalbevarande beslutsfattande.  



### Robusthet och verksamhetskontinuitet



Extern AI drift innebär en strukturell sårbarhet.  

Driften är beroende av molnplattformens stabilitet, deras kommersiella villkor och deras jurisdiktioner.  

Lokal AI drift minskar dessa risker.  

Tillgången till modellerna påverkas inte av prisjusteringar, licensförändringar eller politiska beslut i andra länder.  



### OpenClaw som modell



OpenClaw är en arkitektur för att driva kraftfull AI lokalt utan beroende till externa datacenter.  

Den kombinerar optimerade inferensmodeller med lättadministrerad infrastruktur.  

Företag kan bygga egna AI processer som är snabba, kostnadseffektiva och helt slutna.  

Detta ger en AI kapacitet som liknar molnbaserad prestanda men utan molnets sårbarheter.  



---

## Skalbarhet och enkelhet, men med strategiska kompromisser



Molnbaserad AI har blivit standardlösningen för många företag.  

Det är enkelt att komma igång.  

Infrastruktur behöver inte ägas.  

Tjänsterna är flexibla och kan skala direkt.  



### Fördelar med molnet



Molnbaserad AI erbjuder tre tydliga styrkor.  

Skalbarhet.  

Tillgång till det senaste utbudet av modeller.  

Minimalt behov av intern kompetens.  



Detta gör molnbaserad AI attraktivt för snabb tillväxt eller för företag som ännu inte byggt sin interna AI kapacitet.  



### Kostnadsrisker



För större organisationer blir dock molnbaserad AI ofta dyrt.  

Inferenskostnader och lagringskostnader ökar linjärt med användning.  

Kostnadsstyrningen blir svår eftersom prissättningen förändras löpande och fakturorna är rörliga.  

Detta gör det utmanande att bygga långsiktig förutsägbarhet i budgeten.  



### Datacirkulation och jurisdiktioner



Molnbaserade plattformar innebär att data, metadata och modellinteraktioner lämnar organisationens direkta kontroll.  

Även om data krypteras är flödet beroende av externa aktörer.  

För företag inom vård, finans, infrastruktur och ägarledda bolag med hög integritetsprofil är detta ofta en begränsning.  



### Leverantörslåsning



Molntjänster är byggda för att vara bekväma.  

Men denna bekvämlighet skapar bindningar.  

API strukturer, modellbibliotek och åtkomstskikt gör det kostsamt att byta leverantör eller ta tillbaka driften.  

Lokal AI drift, särskilt genom OpenClaw, undviker detta helt.  



---

## När ska man välja vad



Ingen lösning passar alla företag.  

Det är därför klokt att analysera helheten.  



### När lokal AI drift är rätt beslut



Lokal AI drift passar särskilt för företag som har:  

Hög sekretessnivå  
Starkt krav på kontroll  
Behov av långsiktigt ägande  
Stabil datavolym  
Strategisk syn på kapitalinvesteringar  

Företag i dessa kategorier får ofta högre ROI på lokal drift än molndrift.  

De får dessutom en robustare och mer suverän AI struktur.  



### När molnbaserad AI är rätt beslut



Molnbaserad AI är lämpligt när:  

Projektet är experimentellt  
Organisationen saknar AI kompetens  
Belastningen är kortvarig  
Kostnaderna kan variera utan problem  

Detta gör molnet till ett bra verktyg för tidiga skeden eller mindre verksamheter.  



### Den mest effektiva vägen  
## Hybridstrategin



Fler svenska företag väljer en hybridmodell.  

Basen ligger i lokal AI drift via OpenClaw.  

Molnet används för tester, utvärderingar eller periodvis skalning.  

Detta ger kontroll över kärnprocesserna samtidigt som flexibiliteten behålls.  



---

## Hur ägare och styrelser bör tänka



Familjeägda bolag och HNWI aktörer tänker långsiktigt.  

Pur riskreducering och kapitalbevarande styr besluten.  

Teknikbeslut är inte trendbeslut.  

De är förvaltningsbeslut.  



### AI som tillgång  
## Inte som kostnad



Molnbaserad AI blir ofta en löpande kostnadspost.  

Lokal AI blir en strategisk tillgång.  

Den kan skrivas av.  

Den kan integreras djupt.  

Den bygger kompetens i organisationen.  



### Sekretess som konkurrensfördel



I ägarledda bolag är sekretess inte bara ett regelverk.  

Det är en kultur.  

När AI drivs lokalt med lösningar som OpenClaw blir sekretess en naturlig del av arkitekturen.  

Detta stärker varumärket och förtroendet gentemot kunder och partners.  



### Motståndskraft i oroliga tider



Geopolitiska risker, regulatoriska förändringar och teknisk osäkerhet gör att svenska företag bör värna om digital suveränitet.  

Lokal AI drift bygger motståndskraft.  

Molnbaserad AI bygger beroende.  



---

## Ett ramverk för sober, stabil och säker AI drift



OpenClaw är utvecklat med fokus på tre principer.  

Stabilitet.  
Sekretess.  
Förenklad drift.  



Det är designat för att driva stora språkmodeller och multimodala system i den egna infrastrukturen utan komplexitet.  



### Varför OpenClaw passar nordiska företag



Det är effektivt även på begränsad hårdvara.  

Det fungerar utan uppkoppling.  

Det kan anpassas efter branschens krav.  

Det är långsiktigt och kapitalbevarande.  



Detta gör OpenClaw särskilt attraktivt för företag med fokus på diskretion och långsiktighet.  



### Ett system som kan växa



OpenClaw bygger på moduler som kan förstärkas över tid.  

Företag kan börja med en basinstallation och successivt utöka kapaciteten.  

Detta skapar en stabil, kontrollerad och förutsägbar AI resa.  



---

## Ett strategiskt vägval för svenska VD ar



Valet mellan lokal AI drift och molnbaserad AI är inte bara en teknisk fråga.  

Det är en fråga om förvaltarskap, risknivå och långsiktig kontroll.  



För företag med höga krav på sekretess och stabilitet är lokal AI drift, med OpenClaw som kärna, oftast den mest rationella vägen.  

För företag i experimentell fas kan molnet vara ett första steg.  

Men i det långa perspektivet är ägd AI en central del av modern företagsstyrning.  



Lokal AI drift är inte en trend.  

Det är ett strukturellt beslut som bygger robusthet och integritet.  



Contact for stewardship discussion`,"ai-lösningar-för-logistik-och-supply-chain-i-sverige":`En strategisk genomlysning med fokus på OpenClaw



  

Logistik och supply chain i Sverige befinner sig i ett skede av strukturell omvandling.  

  

Högre kapitalkrav.  

  

Ökade störningar i globala flöden.  

  

Skärpta krav på hållbarhet och spårbarhet.  

  

För aktörer som arbetar med ett långsiktigt perspektiv, särskilt familjekontor och diskreta kapitalförvaltare, blir teknologiska vägval inte en fråga om tempo utan om förvaltarskap.  

  

Det är i detta landskap som AI, och i synnerhet ramverken som nu etableras kring OpenClaw, förändrar hur svenska logistiksystem utformas, förvaltas och skalas.



---


Under det senaste decenniet har logistiken i Sverige rört sig från schemabaserad planering till prediktiv styrning.  

  

De system som tidigare byggde på statiska antaganden måste i dag hantera ett ekosystem av variabler: väder, geopolitik, energipriser, efterfrågevariationer och transportkapaciteter.  

  

Det är här AI kliver in, inte som ett verktyg, utan som en arkitektur för beslutsfattande.  

  

Särskilt relevant är att AI nu erbjuder:

  

• realtidsoptimering  
• robusta prognosmodeller  
• autonoma beslut baserade på riskprofiler  
• djup integration i befintliga ERP‑ och TMS‑system  
• systematisk energibesparing och utsläppsminskning  

  

När logistiken går från mänskligt styrda processer till AI‑drivna system uppstår möjligheten att skapa en mer förutsägbar och kapital­effektiv struktur.  

  

Detta är fundamentet för OpenClaw.



---


OpenClaw är inte en lösning i betydelsen ett traditionellt system.  

  

Det är ett ramverk för modulära, autonoma AI‑agentflöden som arbetar parallellt med befintliga system och successivt tar över funktioner som tidigare krävt omfattande manuell styrning.  

  

Det är arkitekturen, inte gränssnittet, som gör OpenClaw relevant för svensk logistik.  

  

Tre egenskaper sticker ut:

  

## H3: 1. Autonoma optimeringskedjor  
OpenClaw låter flera AI‑agenter samarbeta. En agent kan förutse kapacitetsbrist hos en transportör. En annan kan räkna om ruttval. En tredje kan optimera lagerpåfyllnad baserat på riskjusterad efterfrågan.  

  

Det skapar ett system som reagerar innan problem uppstår, inte efter.

  

## H3: 2. Transparent riskhantering  
För aktörer med höga krav på stabilitet är förklaringsbarhet viktigare än acceleration.  

  

OpenClaw möjliggör tydliga loggar, spårbara beslut och fullständig revisionsförmåga, något som ofta saknas i mer slutna AI‑system.

  

## H3: 3. Sömlös integrering  
Ramverket integreras i:

  

• ERP  
• TMS  
• WMS  
• energistyrningssystem  
• multimodala transportnoder  

  

Detta gör att OpenClaw kan införas i steg, utan att existerande system stängs ned.  



---


Under 2025–2026 har användningen av AI i svensk logistik gått från pilotprojekt till real drift.  

  

Tre tillämpningar syns tydligast.



## H3: Prediktiv efterfrågestyrning  
AI används för att minska lagernivåer, öka omsättningshastigheten och samtidigt förbättra servicegraden.  

  

System som bygger på OpenClaw‑arkitektur gör det möjligt att justera inköp och produktion dynamiskt, baserat på tusentals signaler.



## H3: Transportoptimering  
Ruttplanering sker nu med AI som kan ta hänsyn till trafik, väder, bränslekostnader, kapacitetsbegränsningar och tidsfönster.  

  

Det minskar bränsleförbrukning, ledtider och kapitalbindning.



## H3: Lagerautomation och robotkoordination  
AI används för att styra autonoma fordon, plockrobotar och sorteringssystem.  

  

OpenClaw‑ramverket ger möjlighet att ta flera automatiserade funktioner och sammanföra dem till ett koordinerat beslutsflöde.  



---


När kapital starkt värnar stabilitet och oberoende blir tekniska plattformar mer än operativa verktyg.  

  

De blir långsiktiga tillgångar.  

  

AI för logistik och supply chain öppnar tre strategiska vägar för långsiktiga förvaltare.



## H3: 1. Möjlighet till infrastrukturägande  
Investeringar i logistik är i växande grad investeringar i mjukvara.  

  

OpenClaw gör det möjligt att bygga egna flöden, äga datan, kontrollera processen och skapa exponentiella effektivitetsvinster över tid.  



## H3: 2. Riskreduktion i komplexa tillgångsportföljer  
Supply chain‑risker har blivit systemiska.  

  

Ett AI‑ramverk som OpenClaw gör det möjligt att:  

• modellera utfall  
• hantera störningar i realtid  
• agera innan kostnader uppstår  

  

Detta minskar volatiliteten i verksamhetsnära investeringar.



## H3: 3. Diskret skalbarhet  
Familjeförvaltningar och privata ägare eftersträvar skalbarhet utan offentlig exponering.  

  

AI‑styrda logistikflöden möjliggör detta, eftersom tillväxt kan uppnås utan proportionellt ökade personal- eller anläggningskostnader.  



---


Sverige har unika strukturella fördelar som gör adoptionen av OpenClaw‑baserade lösningar särskilt lämpad.



## H3: Hög digital mognad  
Företagen är vana vid integrerade system och datastandarder.  

  

Det gör att AI kan införas snabbt och smidigt.



## H3: Stabil infrastruktur  
Säkra kommunikationsnät och en välutvecklad transportinfrastruktur gör automatisering enklare att skala.



## H3: Universitet och forskningshubbar  
Sverige är en av Europas mest aktiva miljöer för forskning i maskininlärning och autonom logistik.  

  

Det skapar ett försprång som företag kan dra nytta av genom ramverk som OpenClaw.  



---


Logistiksystem har historiskt byggts vertikalt. Ett system för transportplanering. Ett för lager. Ett för ERP.  

  

OpenClaw gör det möjligt att bygga horisontellt.  

  

Flera intelligenta moduler, sammanlänkade, autonoma, långsamt mognande.  

  

Strukturen blir:

  

• enklare att anpassa  
• stabilare över tid  
• mindre sårbar för leverantörslåsningsrisker  
• mer kapital­effektiv i drift  

  

Detta är centralt för aktörer med kapitalbevarande som kärnstrategi.



---


En av styrkorna med OpenClaw är möjligheten att börja i liten skala.  



## H3: Steg 1: Diagnos och flödesanalys  
Genomlysning av transport-, lager- och inköpsdata.  



## H3: Steg 2: Begränsad pilot  
En avgränsad process automatiseras. Exempelvis ruttplanering eller efterfrågeprognoser.



## H3: Steg 3: Kontrollerad skalning  
När stabilitet är verifierad byggs fler agenter på.  



## H3: Steg 4: Långsiktig förvaltning  
AI‑flöden förvaltas som långsiktiga tillgångar, med tydliga ägarstrukturer och säkerhetsmodeller.  



---


OpenClaw‑driven logistik visar konsekvent förbättringar i:

  

• kapitalbindning  
• leveransprecision  
• energiförbrukning  
• CO₂‑intensitet  
• prognosprecision  
• arbetsflödeseffektivitet  

  

Företag som integrerar systemet som strategisk kärna uppnår ofta strukturella kostnadsfördelar som är svåra att imitera.



---


Logistikens framtid i Sverige formas av tre långsiktiga trender:

  

• mer autonoma system  
• mer datadrivna investeringsbeslut  
• högre krav på riskstyrning  

  

OpenClaw är inte en kortsiktig innovation. Det är ett ramverk som skapar stabilitet genom att ge verksamheter möjlighet att agera före störningar.  

  

I en tid där supply chain‑risk kan påverka hela portföljer blir AI inte ett val. Det blir en del av förvaltningsstrategin.



---
`,"automation-för-svenska-bostadsutvecklare-2026-en-strategisk-översikt-för-långsiktigt-ägaransvar":`
  

Svensk bostadsutveckling går in i en period av strukturell förändring.

  

Efter ett decennium av ökande kostnader, fragmenterad produktion och minskad produktivitet söker allt fler långsiktiga ägare en ny modell. Automatisering, datadrivna processer och mer förutsägbara arbetsflöden blir centrala verktyg för den som vill värna kapitalet över generationer.

  

OpenClaw, som förenar automatiserad databehandling med rigorös riskkontroll, etablerar sig nu som en ny standard för aktörer som vill navigera 2026 års marknad med disciplin, tydlighet och konservativ optimering.

  

Denna artikel är framtagen för svenska bostadsutvecklare, HNWI och familjekontor som söker en diskret och tidseffektiv introduktion till hur automation kan stärka avkastning, minska osäkerhet och skapa uthållig struktur.


  
  

## Automationens roll i bostadsutveckling, 2026

  

Bostadsutveckling har länge varit beroende av manuella beslut, individuella relationer och fragmenterad projektinformation.

  

När marknaden nu rör sig mot lägre marginaler, högre finansieringskostnader och uttrycklig kravställning på transparens blir automation inte ett tekniskt val, utan en strategisk hygienfaktor.

  

Automation i denna sektor handlar inte om att ersätta människor.

  

Det handlar om att eliminera felkällor, säkra datakvalitet och ge ledande ägare en tydlig överblick över risk och potential, utan att förlora kontroll eller identitet.


  
  

## Varför just 2026 förändrar spelplanen

  

Tre strukturella trender driver automationens genombrott.

  

För det första, kreditåtstramning, som gör jämnare kassaflöden och kontrollerad riskexponering mer värdefulla.

  

För det andra, regulatoriskt tryck, som skapar krav på dokumentation och spårbarhet genom hela projektets livscykel.

  

För det tredje, digital mognad hos kommunala och statliga datakällor, vilket gör det möjligt att hämta, strukturera och validera information i realtid.

  

OpenClaw är framtaget specifikt för denna miljö. Det kombinerar informationsinsamling, datakvalitetssäkring och automatiserade analyser i en form som är diskret, förutsägbar och anpassad för långsiktigt kapital.


  
  


  

OpenClaw bygger på idén om konservativ automation.

  

Det innebär att varje processteg är utformat för att förstärka stabilitet, minska beroendet av känsliga manuella moment och skapa en strukturerad ansats som fungerar över tid, oavsett marknadscykel.

  

Nedan följer centrala områden där tekniken ger omedelbar effekt.


  
  

## Automatiserad datainsamling från kommunala källor

  

Svenska bostadsutvecklare arbetar ofta med fragmenterad information. Planer, geodata, handlingar och beslutsunderlag kan ligga på olika servrar och i olika format.

  

OpenClaw hämtar dessa källor automatiskt.

  

Systemet tvättar, strukturerar och sammanställer data så att projektägare får en samlad och lugn översikt utan manuell hantering.

  

På detta sätt försvinner många av de fel och förseningar som uppstår när data måste hanteras för hand.


  
  

## Riskidentifiering och automatisk markanalys

  

Markförvärv är ofta det kritiska momentet i en utvecklares affär.

  

OpenClaw använder automatiserade modeller som identifierar riskfaktorer baserat på juridik, geoteknik, närliggande planer och marknadsdata.

  

Istället för subjektiva beslut får ägaren en tyst, förutsägbar och jämförbar analys.

  

Detta skapar en beslutsmiljö som passar aktörer med långsiktigt ansvar för förmögenhetsskydd.


  
  

## Automatiserad projektkalkyl och känslighetsanalys

  

I en miljö med rörliga räntor och osäkra produktionskostnader behöver kalkyler uppdateras många gånger.

  

OpenClaw uppdaterar kalkylerna automatiskt när förutsättningar ändras.

  

Känslighetsanalyser genereras utan att ekonomifunktionen behöver lägga tid på manuell hantering.

  

Detta ger styrelser och ägare ett stabilare beslutsunderlag och minskar risken för kostsamma överraskningar.


  
  

## Dokumentation och spårbarhet i realtid

  

Bostadsutveckling är reglerad, komplex och fylld av handlingar. För en långsiktig ägare är ordning och spårbarhet centralt.

  

OpenClaw dokumenterar automatiskt beslut, ändringar och variantval.

  

Det skapar ett arkiv som håller över decennier och som kan användas vid revisioner, överlåtelser eller värderingar.

  

Ordning skapar trygghet, och trygghet skapar stabil avkastning.


  
  


  

HNWI och familjekontor har andra prioriteringar än volymbaserade utvecklingsbolag.

  

De söker stabilitet, förutsägbarhet och kontroll över kapitalbasen.

  

Automation blir därför ett redskap för att skapa lugn, inte för snabb expansion.

  

Nedan följer de främsta skälen till att mer konservativa investerare nu inför system som OpenClaw.


  
  

## Minskad personberoende

  

Långsiktig förvaltning kräver system som står kvar även när personal byts ut.

  

Automatiserade logiker och dokumentation säkerställer kontinuitet mellan generationer och över tid.

  

Det gör strukturen mer robust.


  
  

## Jämnare kassaflöden och färre överraskningar

  

Genom tidig riskidentifiering och automatiserade kalkyler minskas volatiliteten i projektportföljen.

  

Resultatet är en portfölj som är lättare att styra, lättare att analysera och lättare att föra vidare.


  
  

## Stärkt förhandlingsposition

  

En utvecklare som kan visa spårbarhet, datakvalitet och tydliga riskparametrar står starkare i samtal med banker, kommuner och entreprenörer.

  

Automation ger struktur, och struktur ger trovärdighet.


  
  

## Effektivare kapitalallokering

  

När varje projekt är analyserat på ett systematiskt sätt blir kapitalet lättare att placera där det ger mest värde.

  

Detta är centralt för ägare som planerar för tio, tjugo eller trettio år framåt.


  
  


  

Implementationen av OpenClaw sker inte genom snabba ingrepp eller stora organisationsförändringar.

  

Den följer istället en minimalistisk och diskret modell som respekterar befintliga strukturer.

  

Processen består vanligen av tre huvudsteg.


  
  

## Steg ett: Kartläggning av dataflöden

  

Systemet analyserar var data finns, hur den används och var bristerna ligger.

  

Detta görs med låg påverkan på organisationen.


  
  

## Steg två: Automatisering av nyckelprocesser

  

OpenClaw kopplas mot relevanta datakällor och börjar automatisera prioriterade delar som kalkyler, riskbedömningar och ärendeuppföljning.

  

Allt sker i små, kontrollerade steg för att säkerställa stabilitet.


  
  

## Steg tre: Konsolidering och långsiktig styrmodell

  

När automatiseringen etablerats byggs en struktur för kontinuerlig uppföljning.

  

Det ger ägare en trygg, pålitlig och förutsägbar process som håller över tid, oavsett marknadsklimat eller personalförändringar.


  
  


  

År 2026 markerar en tydlig brytpunkt.  

  

Automation gör det möjligt för svenska bostadsutvecklare att arbeta med samma noggrannhet, effektivitet och datadrivna processer som internationella institutionella aktörer.

  

För HNWI, familjekontor och utvecklare med långsiktigt ägaransvar blir OpenClaw ett verktyg som inte handlar om snabb tillväxt, utan om stabilitet, kontroll och bevarande av värde.

  

Det är en modell som skapar lugn i en marknad som ofta präglas av osäkerhet.


  
  


Contact for stewardship discussion`,"använd-ai-för-att-granska-legala-dokument-och-avtal":`En strategi för långsiktig förvaltning inom Hylten-Invests ekosystem



  
Att granska legala dokument och avtal är en av de mest tidskrävande aktiviteterna inom professionell kapitalförvaltning.  

  
För familjekontor, förvaltare och investerare som arbetar med långsiktiga tillgångar blir behovet av precision, riskkontroll och kontinuitet centralt.  

  
I en värld med ökande juridisk komplexitet, fler regulatoriska lagar och snabbare transaktionsflöden blir traditionella manuella processer snabbt otillräckliga.  

  
Det är här modern AI, och i synnerhet strukturerade verktyg som OpenClaw, förändrar förutsättningarna.  



## Varför AI nu är nödvändigt för legal granskning inom kapitalförvaltning



  
Den juridiska infrastrukturen runt investeringar växer.  

  
Avtalen blir längre.  

  
Klausulerna blir mer tekniskt invecklade.  

  
Regleringarna blir fler.  

  
Processerna tar mer tid, skapar mer friktion och kräver mer intern kompetens.  

  
Samtidigt är felmarginalerna oförändrat små. Ett enda fel kan belasta ett familjekontor i decennier.  

  
AI erbjuder här något som tidigare saknades: en kombination av hastighet, konsekvens och djupanalys som minimerar operativ risk utan att skada den mänskliga kontrollen.  



## OpenClaw som ramverk för juridisk AI



  
OpenClaw representerar ett nytt sätt att hantera juridiska dokument.  

  
Istället för att vara en enkel språkmodell är det en strukturerad motor för juridisk analys, byggd för att identifiera risker, avvikelser och betyder i kontrakt på ett systematiskt sätt.  

  
Det är inte ett substitut för jurister, utan ett verktyg för att lyfta deras arbete och förbättra kvaliteten i hela organisationens beslutsprocess.  



  
För familjekontor innebär detta:  

  
• snabbare granskning  

  
• lägre kostnader  

  
• minskad operativ risk  

  
• färre beroenden av individuella experter  

  
• mer jämn kvalitet över tid  



## Effektivitet som grund för bevarande av kapital



  
Familjekontor arbetar inte utifrån kvartalstänk.  

  
Perspektivet är generellt decennier.  

  
Därför är effektivitet inte en fråga om tempo utan om förvaltning.  

  
När dokumentgranskning kan göras korrekt, konsekvent och med hög transparens skapas ett lugn i kapitalets livscykel.  

  
Det blir enklare att:  

  
• fatta strategiska beslut med bättre underlag  

  
• säkerställa att avtal överensstämmer med familjens principer  

  
• undvika oförutsedda juridiska konflikter  

  
• skapa en intern ordning som är oberoende av enskilda medarbetares arbetsbelastning  



## Processen: hur AI kan implementeras i ett familjekontor



  
Implementation kräver inte en disruptiv omställning.  

  
Det är tvärtom en mjuk övergång där nuvarande arbetsflöden förstärks med ny teknik.  



### 1: Dokumentinsamling och strukturering



  
Alla dokument och avtal förs in i ett strukturerat digitalt bibliotek.  

  
OpenClaw används för att klassificera dokument efter typ, risk, motpart och juridiskt område.  

  
Redan här uppstår en kvalitetsökning.  



### 2: Första AI-granskningen



  
AI-modellen läser dokumentet.  

  
Den identifierar risker, oklarheter och avvikelser mot standardklausuler.  

  
Den markerar otydliga formuleringar.  

  
Den extraherar alla kritiska datapunkter.  

  
Den gör även en sammanställning som är direkt användbar för både jurister och beslutsfattare.  



### 3: Mänsklig expertgranskning



  
Juristen går igenom AI-underlaget.  

  
Detta minskar granskningskostnaden dramatiskt samtidigt som kvaliteten ökar.  

  
Alla stora beslut ligger fortfarande hos människor.  

  
AI fungerar som en första linje av kontroll.  



### 4: Arkivering, spårbarhet och revisionslogg



  
Alla steg dokumenteras automatiskt.  

  
Det skapar en tydlighet som är värdefull för framtida transaktioner, due diligence och generationsskiften.  



## Den långsiktiga effekten: en stabil legering av teknik och mänsklig erfarenhet



  
Tekniken ersätter inte omdöme, kultur eller erfarenhet.  

  
Den kompletterar dem.  

  
AI blir en stabil komponent i den administrativa infrastrukturen, som elektricitet eller redovisningssystem.  

  
Den möjliggör en mer kontrollerad förvaltning, där risk identifieras tidigt och beslut kan baseras på tydligare förståelse av juridiska realiteter.  



## Varför detta är särskilt relevant för nordiska familjekontor



  
Den nordiska marknaden kännetecknas av:  

  
• hög komplexitet i ägarstrukturer  

  
• internationella investeringar  

  
• starkt fokus på hållbarhet och compliance  

  
• generationsväxlingar på bred front  



  
AI för juridisk granskning blir därför inte en modernitet utan ett praktiskt behov.  

  
Det skapar en mer robust förvaltning med färre överraskningar.  



## Minimera fel och maximera kontroll



  
Mänskliga fel i juridiska dokument uppstår genom stress, tidspress och brist på struktur.  

  
AI eliminerar inte risken helt, men den reducerar den drastiskt.  

  
Genom att använda OpenClaw i kärnprocesserna kan ett familjekontor reducera risken för kritiska fel med en mycket hög faktor.  

  
Det innebär mindre tid i efterhandsåtgärder och mer tid i strategiskt arbete.  



## Transparens som strategiskt värde



  
Ett familjekontor ska vara tydligt i sin dokumentation.  

  
Det ska vara möjligt att förstå beslut även femton år senare.  

  
AI möjliggör denna tydlighet genom att:  

  
• skapa konsistenta sammanfattningar  

  
• generera enhetliga riskrapporter  

  
• dokumentera alla steg i granskningsprocessen  

  
• centralisera avtalshistorik  



## Juridisk AI som en del av ett större ekosystem



  
AI för avtalshantering ska inte ses som en isolerad lösning.  

  
Det är en modul som integreras i hela förvaltningsstrukturen.  

  
I ett större sammanhang är det en nod i ett system av verktyg som:  

  
• portföljrapportering  

  
• riskstyrning  

  
• likviditetsplanering  

  
• governance och compliance  

  
• familjers interna strukturer och ägarpolicyer  



  
OpenClaw är särskilt lämpat för denna helhet, eftersom det är byggt för att samspela med andra system i en förvaltarmiljö.  



## En kultur av tyst ordning



  
Familjekontor värdesätter diskretion, långsiktighet och ordning.  

  
AI ska alltså inte vara prålig.  

  
Den ska vara tyst, konsekvent och stabil.  

  
Den ska stödja besluten, inte synas i dem.  

  
En korrekt implementerad AI ger just detta.  

  
Den arbetar i bakgrunden och förstärker kvaliteten utan att kräva dramatik.  



## Slutsats: AI är en del av modern stewardship



  
Långsiktiga förvaltare har ett ansvar att bevara, inte bara växa.  

  
Att använda AI för att granska avtal är ett steg i denna riktning.  

  
Det minskar friktion.  

  
Det ökar kvalitet.  

  
Det stärker strukturen.  

  
Det skapar en mer förutsägbar och hållbar juridisk infrastruktur för familjekontorets framtid.  



  
Contact for stewardship discussion`,"framtidens-ai-för-e-handlare-i-sverige":`Fokus på OpenClaw och långsiktigt värdeskapande för förmögna ägare och familjekontor



## Inledning

Den svenska e‑handelssektorn befinner sig i ett strukturellt skede där tillväxt inte längre är beroende av volymexpansion, utan av precision, optimering och långsiktig kapitaldisciplin. I denna omställning blir avancerade AI‑system en ny form av infrastruktur. De förändrar hur beslut tas, hur resurser styrs och hur värde skapas över tid.

  

OpenClaw representerar en ny generation av AI‑lösningar som går bortom traditionell automatisering. Plattformen kombinerar prediktiva modeller, kontinuerligt lärande och ett ramverk för diskret men effektiv styrning av flöden inom e‑handel.

  

För svenska e‑handlare med starka balansräkningar, och för ägare med ett förvaltande perspektiv, öppnar detta för en mer stabil och kostnadseffektiv verksamhet. Tekniken blir ett verktyg för att behålla kontrollen i en föränderlig marknad, snarare än att driva risk genom aggressiv expansion.



## Den strukturella förändringen inom svensk e‑handel

De senaste åren har en bred marknadsrörelse skett. Drivkrafter som fri frakt, aggressiva kampanjer och snabb skalning har tappat kraft. Marginalpress, högre kapitalkrav och ökade logistikkostnader har skapat ett nytt landskap där precision ersätter volym.

  

Tre tydliga trender formar denna utveckling:

  

### 1. Ökad kostnadsdisciplin  
E‑handlare går från snabb tillväxt till strukturerad effektivitet. Lageromsättning, kassakonvertering och kapitalbindning väger tyngre än omsättningsökning.

  

### 2. Databaserade beslut  
Tiden då beslut baserades på intuition och erfarenhetsdriven gissning förändras. AI ger en högre grad av objektivitet och minskar varians i beslutsfattandet.

  

### 3. Automatisering av företagskritiska flöden  
Från marknadsföring till lagerstyrning, allt större delar av värdekedjan hanteras i realtid av system som kontinuerligt uppdaterar sina modeller.

  

I denna miljö blir OpenClaw en strategisk komponent snarare än en teknisk innovation.



## Vad OpenClaw innebär för svenska e‑handlare

OpenClaw arbetar utifrån ett diskret och långsiktigt ramverk. Syftet är inte att skapa snabb förändring, utan att stegvis optimera hela värdekedjan med fokus på lönsamhet, kapitaldisciplin och tydlig riskkontroll.

  

Tre områden är centrala.



### Optimerad lagerstyrning  
Lagerbindningen påverkar rörelsekapital, transportkostnader och kassaflöde. OpenClaw analyserar efterfrågemönster, säsongsvariationer och realtidsdata för att skapa en mer balanserad lagerstrategi.

  

Detta minskar risken för överlager, samtidigt som kundupplevelsen bibehålls genom hög tillgänglighet på nyckelprodukter.

  

När handeln blir mer oförutsägbar skapar denna typ av precision en strukturell fördel.



### Effektiv pris- och kampanjstyrning  
Aggressiva priskampanjer har historiskt varit ett sätt att driva tillväxt. De är nu en källa till onödig kapitalförstörelse.

  

OpenClaw bygger upp en prissättningsmodell där varje produkt prissätts utifrån betalningsvilja, lagerstatus, konkurrensdata och realtidsbeteenden. Resultatet är stabilare marginaler och lägre behov av kortsiktiga kampanjer.

  

Detta gynnar både företaget och kundrelationerna som blir mer förutsägbara över tid.



### Kapitaleffektiv kundanskaffning  
Kundanskaffningskostnaderna har ökat. Plattformar som tidigare gav hög avkastning på marknadsföringen kräver nu mer sofistikerade strategier.

  

OpenClaw bygger upp prediktiva modeller som identifierar värdefulla kundsegment och optimerar kanalstrategierna. Fokus är kapitalbevarande kundtillväxt, inte volym för volymens skull.

  

Detta passar särskilt familjekontor och ägare med lång tidshorisont, där hållbar kundkvalitet väger tyngre än snabba ökningar i trafikvolymer.



## Varför just nu: Den makroekonomiska bakgrunden

Den svenska ekonomin rör sig mot en period av stabil men låg strukturell tillväxt. Kostnader stiger långsammare, men konsumtionsbeteenden förändras och konkurrensen ökar. Detta skapar ett läge där kapitaldisciplin blir viktigare än aggressiv expansion.

  

För e‑handlare innebär det:

  

- lägre tolerans för ineffektiva flöden  
- högre krav på rörelsekapitalets avkastning  
- större behov av kontinuerlig optimering  

  

AI‑system som OpenClaw blir därför inte ett verktyg för tillväxt, utan för stabilitet. Tekniken ersätter manuellt arbete med datastyrda processer och skapar en mer robust struktur som klarar både cykliska och strukturella förändringar.



## Hur AI förändrar ägarrollen

För förmögna ägare och familjekontor är e‑handel attraktiva investeringar så länge verksamheten kan kontrolleras, analyseras och styras med precision.

  

AI skapar denna transparens.

  

OpenClaw ger:

  

- kontinuerlig insyn i risknivåer  
- förutsägbara prognoser  
- tydligare samband mellan kapitalallokering och avkastning  

  

Detta gör att ägare kan fatta mer välgrundade beslut och samtidigt bibehålla en konservativ riskprofil. E‑handeln blir mindre beroende av enskilda personer och mer av en strukturerad modelldriven process. Detta gynnar kontinuitet och generationsöverskridande ägande.



## Ett långsiktigt perspektiv på värdeskapande

OpenClaw bidrar till en stabilare affärsmodell som inte bygger på snabba kampanjer eller aggressiva expansionsstrategier. Genom att kombinera prediktiva modeller med diskret automatisering skapas en struktur där verksamheten successivt förbättras.

  

Detta passar en ägargrupp som värdesätter:

  

- kapitalbevarande  
- konservativa processer  
- långsiktig styrning  
- låg varians i resultat  

  

AI blir inte ett marknadsföringsverktyg, utan ett förvaltningsverktyg.



## Hur svenska e‑handlare praktiskt implementerar OpenClaw

Implementeringen sker stegvis. Fokus ligger på att undvika avbrott i verksamheten och istället skapa en successiv övergång.

  

### Steg 1: Diagnos  
Genomgång av dataflöden, lagerprocesser, kundsegment och kapitalbindning.

  

### Steg 2: Modellering  
Byggande av prediktiva modeller för efterfrågan, prissättning och kundvärde.

  

### Steg 3: Integrering  
Lugn och strukturerad integrering av AI‑drivna beslutsstöd i befintliga system.

  

### Steg 4: Optimering  
Kontinuerlig förbättring baserad på ny data och ändrade marknadsförhållanden.

  

Detta skapar en verksamhet där modellen blir starkare över tid.



## Riskhantering i en AI‑driven e‑handel

Risker kvarstår i alla verksamheter. Frågan är hur de hanteras. Med OpenClaw blir riskerna mer synliga och lättare att kontrollera.

  

Fokus ligger på:

  

- stabilitet i lagerflöden  
- förutsägbar efterfrågan  
- kontrollerad prissättning  
- kapitaldisciplinerad marknadsföring  

  

Detta skyddar mot överraskningar och gör det möjligt för ägare att upprätthålla en konservativ kapitalstruktur.



## Slutsats: AI som förvaltande infrastruktur för svensk e‑handel

E‑handeln i Sverige står inför en period där långsiktighet, kontroll och kapitaldisciplin är avgörande. OpenClaw ger svenska e‑handlare och deras ägare ett verktyg som skapar stabilitet och strukturerad effektivitet.

  

Genom att kombinera datadrivna beslut, kontinuerlig optimering och diskreta automatiseringar byggs en robust affärsmodell som står stark i både hög- och lågkonjunktur.

  

Tekniken blir därmed inte en kostnad, utan en del av verksamhetens långsiktiga infrastruktur.



Contact for stewardship discussion`,"optimerad-logistik-med-openclaw":`
  

Att skapa optimerad logistik med AI är inte längre en framtidsvision. I Sverige utvecklas området snabbt, särskilt när bolag i mellansegmentet söker konkreta, mätbara resultat som inte förutsätter riskfyllda omställningar eller romantiserade räddningsplaner. OpenClaw har uppstått ur just den verkligheten, där logistik kostar mer än den borde, där leveranser drar ut på tiden och där lager blir en flaskhals i stället för ett nav för värdeskapande.

  

För bolag som befinner sig i en carve out, eller som söker en renare operationell struktur inför ett ägarbyte, blir stabilitet och precision i logistiken helt avgörande. I vår svenska kontext, med höga personalkostnader och hårt tryck på effektiva flöden, blir behovet av AI-drivna lösningar ännu tydligare. Optimerad logistik AI är inte en lyx, det är ett försvar mot marginalpress och en förutsättning för att behålla konkurrenskraft.

  

OpenClaw adresserar just detta, med AI som arbetar specifikt för leveranser, lager och taktisk planering. Det är inte en lösning för framtiden, det är ett verktyg för den som redan idag står inför hård konkurrens, ökande kostnader och brist på intern kapacitet att förbättra logistiken i egen regi.

  

  

## En ny verklighet i svensk logistik

  

Sverige har under de senaste åren rört sig bort från traditionella logistikmodeller. E‑handeln har förändrat kundernas förväntningar, samtidigt som industriella verksamheter tvingas hantera mer komplexa leveranskedjor än tidigare. Det finns inte längre utrymme för manuella processer eller tunga organisationsstrukturer som bromsar ledtider.

  

Många företag som genomgår en carve out är dessutom beroende av att snabbt ersätta tidigare centrala funktioner. Logistik är ofta en av de mest sårbara delarna. När man inte längre kan luta sig mot ett stort moderbolags processer och system måste man skapa något nytt som fungerar från dag ett. Detta är skälet till att AI‑drivna logistikverktyg nu ses som en pragmatisk lösning snarare än ett experiment.

  

OpenClaw är byggt för att skala snabbt och för att stabilisera logistiken utan att kräva omfattande IT‑projekt. Det gör att AI‑agent leverans blir mer än en teoretisk möjlighet, den blir en praktiskt implementerbar funktionalitet.

  

  

## Varför traditionella logistiksystem inte räcker

  

Många svenska företag sitter fortfarande fast i system som utvecklades för en annan typ av marknad. De saknar realtidsanalys, automatiserade beslut och dynamisk kapacitet. Resultatet blir:

  

- Långa ledtider  
- Onödiga lagernivåer  
- Felaktiga orderprognoser  
- Personal som tvingas hantera arbetsuppgifter manuellt  
- Kostnader som stiger utan att kundvärdet ökar  

  

När konkurrensen skärps blir dessa problem mer än störande. De undergräver värdet på affären och skapar risk i situationer där investerare söker förutsägbarhet.

  

För bolag som befinner sig i M&A‑processer blir ineffektiv logistik snabbt en dealbreaker. Det är svårt att förhandla om multiplar när driften visar bristande kontroll. Därför har många företag börjat titta på hur effektivisera lager AI Sverige kan användas som en stabiliserande faktor inför en försäljning.

  

  

## OpenClaw som strategisk logistikpartner

  

OpenClaw är utvecklat för att möta tre centrala behov i svensk logistik. Stabilitet, skalbarhet och snabb avkastning. Detta gör det möjligt att implementera AI på ett sätt som är affärsmässigt och taktiskt, utan att skapa nya beroenden eller göra organisationen mer komplex.

  

Det som särskiljer OpenClaw är att lösningen är designad med ett tydligt fokus. Den ska vara praktiskt användbar i företag som inte vill bygga en egen AI‑avdelning. Bolaget ska kunna fortsätta driva sin verksamhet, samtidigt som logistiken förbättras i bakgrunden.

  

OpenClaw arbetar i realtid. Det innebär att AI‑agent leverans kontinuerligt analyserar inkommande order, rutter, lagernivåer och kapacitet. Den anpassar leveransflöden, ger rekommendationer och tar taktiska beslut som minskar kostnader och stabiliserar processer. Här handlar det inte om stora visioner, det handlar om faktiska förbättringar i vardagen.

  

  

## Konkreta förbättringsområden

  

Företag som implementerar OpenClaw brukar se förbättringar inom fyra områden.

  

### 1. Förutsägbarhet i leveranser

  

Traditionella system svarar på problem efter att de redan uppstått. OpenClaw arbetar proaktivt. AI analyserar kommande ordervolymer, personalstyrka och transportkapacitet och gör justeringar innan flaskhalsar bildas.

  

Det ger en leveranskedja som inte svajar så fort något oväntat händer. Detta är särskilt viktigt för verksamheter som befinner sig i carve outs där logistiken ofta är överansträngd.

  

  

### 2. Minskade lagernivåer utan ökad risk

  

Många svenska företag binder kapital i lager för att undvika stockouts. Problemet är att det är en dyr strategi, särskilt i branscher med pressade marginaler.

  

Med optimerad logistik AI går det att sänka lagernivåerna utan att riskera servicenivån. AI förutser efterfrågan mer exakt än traditionella planeringsmetoder och anpassar lagerflödena efter faktisk rörelse, inte antaganden.

  

  

### 3. Automatiserade beslut i realtid

  

OpenClaw är byggt för att agera, inte bara analysera. Det innebär att AI‑agenten kan hantera en rad beslut som annars tar tid från personalen. Den kan styra rutter, optimera sekvenser, koordinera interna transporter och fördela arbetsbelastning i lagret.

  

Det ger en stabil struktur där personalens tid används där den skapar störst värde.

  

  

### 4. Stöd för M&A och operationella omstruktureringar

  

I M&A‑processer blir logistik snabbt en riskpunkt. Investerare vill se tydliga nyckeltal och en robust drift. OpenClaw hjälper företag att stabilisera logistiken under perioden då strukturer förändras.

  

I carve outs spelar OpenClaw en ännu tydligare roll. När ett företag frikopplas från en större koncern försvinner ofta de system som tidigare burit logistikflödena. OpenClaw skapar en neutral, skalbar lösning som inte kräver stora investeringar för att komma igång.

  

  

## Kostnadsbesparingar som märks

  

OpenClaw är inte byggt för visionära projekt utan för att skapa kostnadsminskningar som syns direkt i resultatet. Det handlar om reducerade personalkostnader, lägre bränslekostnader, minskade avvikelsesanktioner och bättre nyttjande av lagerutrymmen.

  

Företag ser vanligtvis effekter inom tre till sex månader. Det är en realistisk tidslinje som passar svenska bolag som aldrig har tid för långsamma projekt.

  

  

## En AI‑lösning för företag som vill undvika komplexitet

  

Många AI‑plattformar kräver omfattande implementationer och interna omstruktureringar. OpenClaw håller motsatsen som princip. Lösningen integreras med befintliga system och arbetar parallellt med dem. Syftet är att minimera förändringar i organisationen och maximera effekten.

  

Det betyder att företag kan börja effektivisera lager AI Sverige utan att först göra omfattande investeringar i IT‑infrastruktur. För verksamheter som befinner sig i en carve out eller i en pressad marknadssituation är detta en avgörande fördel.

  

  

## Hur OpenClaw arbetar i praktiken

  

OpenClaw använder kontinuerlig datainsamling och analys. Därefter gör AI‑modellen operativa justeringar som direkt påverkar flödet.

  

Processen består av tre steg.

  

### Analys av nuläget

  

AI kartlägger hur nuvarande logistik actually fungerar. Det inkluderar ledtider, personalbelastning, plocknivåer, ytanvändning och avvikelser.

  

Detta steg kräver minimalt med manuell input. AI:n arbetar med data som redan finns i systemen.

  

  

### Löpande optimering

  

När grunden är klar tar AI över delar av besluten. Den omfördelar resurser, prioriterar ordrar och anpassar leveransrutterna efter faktiska förutsättningar.

  

Detta minskar slöserier och skapar ett jämnare flöde.

  

  

### Prediktiv planering

  

Slutligen bygger AI upp modeller för hur logistiken kommer att se ut över veckor och månader. Detta gör det möjligt att planera personal och kapacitet i god tid.

  

Företag som använder prediktiv logistik rapporterar färre akuta situationer och minskad stress i verksamheten. Detta är särskilt värdefullt i organisationer som nyligen genomgått strukturella förändringar.

  

  

## En logistikmodell för svenska förhållanden

  

OpenClaw är utvecklat med förståelse för svensk marknadsrealitet. Det innebär att lösningen tar hänsyn till:

  

- höga personalkostnader  
- höga krav på leveransprecision  
- geografiska avstånd  
- variationer i säsongsefterfrågan  
- regulatoriska krav  

  

Det gör modellen användbar för både industriella verksamheter och e‑handelsbolag. Oavsett om bolaget finns i en storstad eller i ett mer avlägset logistikläge fungerar AI‑agent leverans som en förstärkning och stabilisering av driften.

  

  

## Slutsats: OpenClaw ger en taktisk fördel

  

I en marknad som pressas från flera håll behöver svenska företag lösningar som gör verksamheten stabil, skalbar och kostnadseffektiv. OpenClaw erbjuder optimerad logistik AI som fungerar i vardagen och som stödjer både tillväxt och omstrukturering.

  

För bolag som planerar en försäljning eller står inför en carve out är detta inte en innovation, det är en försäkring mot fallande värde och ökade risker.

  

För företag som vill lyfta sin logistik från ett svajigt beroende av manuella processer till en mer robust och förutsägbar modell är OpenClaw ett verktyg som ger verklig effekt.

  

Det är en lösning för verksamheter som vill utvecklas utan att ta onödiga risker.

  

Book a strategic consultation`,"hur-ai-agenter-förbättrar-kundresan-för-b2b-i-sverige":`En analys för långsiktig förvaltning och strukturerad tillväxt  



## Inledning  
Det svenska B2B‑landskapet förändras i grunden.  

Kunderna rör sig långsammare, mer metodiskt, och förväntar sig en relation som sträcker sig bortom det operativa.  

Det som tidigare krävde stora säljteam och omfattande manuella analyser kan nu utföras av AI‑agenter som arbetar tyst, effektivt och med en precision som skapar en ny typ av stabilitet.  

OpenClaw är ett av de verktyg som driver denna utveckling, särskilt för aktörer som värdesätter diskretion, robusta processer och förutsägbarhet.  



## Varför AI‑agenter blivit centrala för svensk B2B  
B2B‑kunder i Sverige är riskmedvetna.  

Besluten är långsiktiga.  

Processerna är ofta konservativa och bygger på årtionden av relationer.  

Traditionella CRM‑system fångar datan men saknar förmågan att tolka den i realtid. Här förändrar AI‑agenter förutsättningarna.  

En AI‑agent arbetar kontinuerligt.  

Den övervakar.  

Den prioriterar.  

Den analyserar varje steg i kundresan och kan därmed skapa ett mönster av insikter som ger stabilitet och förutsägbarhet.  

Detta passar väl in i svenska familjeföretag, investmentbolag och HNWI‑strukturer där långsiktig förvaltning alltid går före snabb expansion.  



## Vad OpenClaw tillför den svenska B2B‑miljön  
OpenClaw är utvecklat för att hantera komplexa flöden där precision och kontroll är viktigare än volym.  

Plattformen bygger tysta agentkedjor som arbetar i bakgrunden, långt från störande gränssnitt och irrelevanta funktioner.  

Detta skapar tre kärnvärden som är särskilt relevanta för svenska B2B‑organisationer och deras kundresor.  



### 1. Kontinuerlig insamling och filtrering av kunddata  
Majoriteten av alla B2B‑kontakter skapar stora mängder data.  

Mycket är irrelevant.  

OpenClaw sorterar detta, utan att personalen behöver agera, och lyfter endast det som påverkar risk, möjlighet eller relation.  

Det ger renare datamängder.  

Det ger tydligare prioriteringar.  

Det ger en snabbare förståelse för vad som är viktigt att åtgärda.  



### 2. Tidig identifiering av beteendeförändringar  
I B2B är det sällan ett enda beslut som avgör relationen.  

Det är de små signalerna.  

En ändrad responsrytm.  
En annan typ av sökbeteende.  
En förändring i hur beslutsfattare kommunicerar.  

OpenClaw reagerar på dessa mönster i realtid och skapar tidiga varningar som gör att organisationen kan agera innan relationen förändras.  

Detta uppskattas av svenska kunder som förväntar sig strukturerad närvaro men inte aggressiv försäljning.  



### 3. Automatiserad men personlig kommunikation  
AI‑agenter kan skriva, men de kan också lyssna.  

OpenClaw skapar kommunikation som följer kundens ton, rytm och behov.  

Det är diskret.  

Det är sakligt.  

Det är långsiktigt.  

Resultatet blir en kundresa där varje kontaktpunkt balanserar effektivitet med personlig relevans.  



## Hur kundresan förbättras genom hela B2B‑cykeln  
För att förstå den verkliga effekten av AI‑agenter i Sverige behöver man analysera varje steg i kundresan, från initialt sökbeteende till etablerad partnerskapscykel.  



### H2: Upptäcktsfasen  
Kunder söker trygghet och struktur redan vid första kontakten.  

OpenClaw gör att företag kan:  
- följa sökmönster tyst  
- identifiera vilka frågor som signalerar seriösa intentioner  
- anpassa tidiga budskap efter faktisk efterfrågan  

Detta innebär att kunden bemöts med rätt material och rätt tonalitet, utan onödig bredd.  



### H2: Utvärderingsfasen  
Det är här svenska B2B‑kunder tar längst tid.  

OpenClaw bidrar genom att kartlägga:  
- vilka interna beslutsvägar kunden använder  
- vilken information som fördröjer beslut  
- vilka personer som är mest kritiska för relationens fortsättning  

AI‑agenterna genererar analyser som sedan kan användas av ledande säljare eller rådgivare för att skapa en mer relevant dialog.  



### H2: Beslutsfasen  
När kunden är nära beslut är små detaljer avgörande.  

OpenClaw gör det möjligt att:  
- analysera risknivå och mönster i realtid  
- skapa diskreta beslutsunderlag  
- säkerställa att kommunikationen är helt anpassad efter kundens profil  

Detta ger en mer förutsägbar konvertering, mindre friktion och en kundupplevelse präglad av kontroll.  



### H2: Implementering och onboarding  
Det är här AI‑agenter har störst värde.  

OpenClaw kan:  
- följa alla kontakter och identifiera var kunden fastnar  
- automatiskt skapa lösningar på vanliga hinder  
- säkerställa att kunden får en tyst men närvarande stödstruktur  

Detta minskar resursåtgången samtidigt som kundens initiala upplevelse förbättras.  



### H2: Långsiktig relationsförvaltning  
Svenska B2B‑relationer byggs över år, ibland decennier.  

AI‑agenter används här för att:  
- övervaka relationens hälsa  
- analysera beteendemönster över tid  
- identifiera när det är läge för nya erbjudanden  
- förutse när relationen är i riskzonen  

Detta ger en stabilitet som är direkt användbar för familjeföretag, investmentbolag och förvaltande strukturer där värdet av en kundrelation ofta är större än själva affären.  



## AI‑agenter som tyst infrastruktur  
En viktig poäng för aktörer med en mer konservativ profil är att AI‑agenter inte behöver synas.  

De arbetar som en infrastruktur.  

Stilla.  

Konsekvent.  

De kräver inte att organisationen förändras över en natt.  

De förstärker det som redan fungerar och tar bort det som skapar friktion.  

Detta gör tekniken särskilt attraktiv för svenska B2B‑företag som arbetar med försiktighet och långsiktighet.  



## OpenClaw och datasäkerhet i svensk kontext  
Säkerhet är central i alla svenska B2B‑relationer.  

OpenClaw hanterar information strukturerat, med strikt åtkomst och intern kontroll.  

Detta är avgörande när AI ska implementeras i miljöer där datan ofta är känslig och beslutsvägarna är långsamma.  

Säkerhet skapar förtroende.  

Förtroende skapar stabil tillväxt.  



## Hur svenska företag bör börja  
Det finns tre steg som fungerar för både större företag och mindre ägarledda strukturer.  

1. Kartlägg befintlig kundresa och identifiera var AI‑agenter ger störst effekt.  

2. Implementera små agentkedjor i OpenClaw som förbättrar data, kommunikation eller analys.  

3. Utöka långsamt och metodiskt, med fokus på stabilitet och kontroll.  

Detta skapar ett lugnt och genomtänkt införande.  



## Slutsats  
AI‑agenter förändrar svensk B2B i grunden men på ett sätt som harmonierar med våra värderingar.  

Tyst.  

Analytiskt.  

Långsiktigt.  

OpenClaw ger företag möjligheten att skapa en kundresa som är både mer personlig och mer effektiv.  

För organisationer som prioriterar långsiktig förvaltning, diskretion och stabil tillväxt är detta inte bara en teknisk investering utan en strategisk.  



Contact for stewardship discussion`,"guide-till-ai-för-lokal-marknadsföring-i-sverige":`


AI har redan förändrat hur företag driver sin lokala närvaro i Sverige, och förändringen går snabbare än vad många hinner absorbera.



För bolag som rör sig i det mellanstora segmentet, särskilt inom sektorer som hälso- och sjukvård, privata vårdaktörer och carve-outs från större koncerner, har AI nu blivit en konkurrensfaktor snarare än ett val.



Det här är en pragmatisk genomgång. Inga romantiska berättelser om magiska turnaroundresor, bara en tydlig översikt över hur AI lokal marknadsföring fungerar, vad det kräver och vilka risker som följer med automatisering av marknadsföring i en svensk kontext.



Syftet är enkelt: ge dig en operativ och strategisk plan för hur du använder AI för att skala lokal närvaro utan att förlora kontrollen.



## Varför AI driver förändringen i lokal marknadsföring



Det finns tre strukturella skäl till att AI nu är avgörande för lokal marknadsföring i Sverige.



För det första har konsumenternas beteenden blivit mer fragmenterade, vilket gör traditionella kampanjmodeller ineffektiva.



För det andra har konkurrensen i lokala sökresultat blivit allt hårdare, särskilt i branscher med hög marginalpress som vårdtjänster, tandvård och specialistkliniker.



För det tredje kräver investerare tydligare operationell effektivitet i samband med mid-market M&A. Lokal marknadsföring är en av få kanaler där du snabbt kan frigöra värde genom att automatisera processer och standardisera arbetsflöden redan innan integrationen är klar.



AI löser inte allt, men den minskar friktionen i det operativa arbetet, vilket ger bolag möjlighet att växa lokalt utan ökade personalresurser.



## AI lokal marknadsföring i praktiken



När vi talar om AI för lokal marknadsföring handlar det inte om att jaga trender. Det handlar om att få ett system på plats som gör det möjligt att:

- skapa relevant lokal SEO i stor skala  
- automatisera marknadsföring med hög precision  
- driva konsekvent varumärkesnärvaro över många orter  
- minska beroendet av manuella arbetsinsatser  
- optimera innehåll för svenska sökalgoritmer, SEO AI Sverige  



Funktionellt innebär det att du använder AI som motor för allt från textproduktion och kampanjoptimering till datainsamling, analys och beslutsstöd.



Det som skiljer de bästa implementeringarna från de mediokra är att man bygger arbetet kring en process, inte en enstaka teknik.



## Automatisera marknadsföring utan att tappa kontrollen



Automatisering är ett laddat ord. De flesta som arbetar nära marknadsföring i den mellanstora skalan vet att total automation inte fungerar. Du behöver lagom mycket automatisering, inte maximalt mycket.



I Sverige gäller detta särskilt inom hälso- och sjukvårdssegmentet där regelverket kräver kontroll, transparens och konsekvent tonalitet.



Den pragmatiska lösningen är att:

- automatisera repetitiva uppgifter  
- standardisera textmallar och sidstrukturer  
- låta AI generera lokaliserat innehåll  
- ha en mänsklig kontrollfunktion för godkännanden  
- låta AI sköta analys och rekommendationer  
- låta människor fatta affärsmässiga beslut  



Det är ingen slump att detta liknar hur man arbetar under carve-outs och integrationsfaser. Principen är densamma: avlasta människor från manuella uppgifter, men behåll deras omdöme.



## Lokala SEO-strukturer som AI hanterar bättre än människor



Det krävs en viss erfarenhet från operationella due diligence-processer för att förstå hur mycket värde som faktiskt ligger i datamodellering av lokal närvaro.



De flesta företag har:

- inkonsekventa lokala sidor  
- varierande kvalitet i metadata  
- felaktiga öppettider på flera platser  
- bristande uppföljning av lokala sökord  
- svaga interna länkar  
- oklara ansvarsförhållanden mellan centralt och lokalt  



AI hanterar dessa problem på ett mer strukturerat sätt än människor, eftersom den kan:

- skanna alla lokala sidor  
- identifiera mönster  
- föreslå förbättringar  
- skapa nytt innehåll  
- mäta effekten i realtid  



Det gör att du kan ta ett decentraliserat lokalt nätverk och forma det till ett skalbart, enhetligt ekosystem.



## SEO AI Sverige: Hur du optimerar för svenska marknaden



Sverige har två specifika egenskaper som skiljer sig från många andra marknader.



För det första är språkets struktur betydligt mer kompakt, vilket innebär att AI-modeller ofta producerar för breda eller för generiska texter om de inte instrueras korrekt.



För det andra är konkurrensen inom lokala branscher ovanligt koncentrerad. Det gör att resultaten påverkas mer av kvalitet än kvantitet.



För att lyckas med SEO AI Sverige krävs att du:

- tränar dina AI-system på svensk data  
- arbetar med lokala ämneskluster  
- optimerar metadata efter svensk sökbeteende  
- låter AI identifiera semantiska luckor  
- producerar innehåll snabbt, men med manuell finjustering  
- kartlägger konkurrenters sidstrukturer  



Det handlar inte om att skapa mer innehåll. Det handlar om att skapa rätt innehåll med mindre friktion.



## Vad AI kan lösa vid förvärv av vårdbolag och klinikkedjor



När ett privat vårdbolag köper ett mindre bolag eller integrerar en klinikkedja är marknadsföring ofta en av de mest underskattade värdeskaparna.



AI kan användas för att:

- harmonisera lokal SEO över alla mottagningar  
- skapa standardiserade informationsstrukturer  
- identifiera duplicerat innehåll  
- bygga robust datagrund för framtida expansion  
- skapa lokala texter baserat på enhetlig tonalitet  



Detta är praktiskt eftersom integrationsfaserna ofta är tidspressade, och ledningen fokuserar på drift, personal, patientflöden och compliance. AI tar hand om det repetitiva så teamet kan ägna sig åt affären.



## Risker att hantera innan du implementerar AI



Alla system som automatiserar marknadsföring innebär risker, särskilt om man rör sig inom reglerade branscher.



De vanligaste riskerna är:

- AI producerar påståenden som inte är regulatoriskt godkända  
- tonaliteten blir för bred och tappar seriositet  
- för snabb automatisering leder till inkonsekvent varumärkesprofil  
- bristande mänsklig kvalitetssäkring leder till förtroendeskador  



Det här är inte teoretiska risker. De händer i verkligheten, ofta under pressade integrationsfaser när företag arbetar med begränsade resurser.



Den mogna approachen är att bygga ett kontrollerat ramverk för AI. Ett ramverk som innehåller:

- tydliga godkännandeflöden  
- definierade roller  
- klara regler för tonalitet  
- AI-modeller finjusterade på egen data  
- dokumentation för varje publicerad text  



När du arbetar så, minskar du riskerna och får ut maximal effekt av tekniken.



## Hur du implementerar AI lokal marknadsföring steg för steg



Det här är en metodik som används i bolag som växer snabbt genom förvärv. Den är enkel, men beprövad.



### Steg 1: Kartläggning av nuläge



Du behöver en sann bild av:

- alla lokala sidor  
- vilka sökord du äger  
- var du tappar trafik  
- var du har duplicerat innehåll  
- vilka sidor som saknas  
- vilka mottagningar som har bäst potential  



Utan denna bild är det omöjligt att skala.



### Steg 2: Skapa en standardiserad mall



Du behöver mallar för:

- rubriker  
- metadata  
- tonalitet  
- strukturer för lokala landningssidor  
- interna länkar  
- FAQ-format  



AI arbetar bäst när den har tydliga ramar.



### Steg 3: Automatisera produktionen



När mallarna är klara kan du låta AI:

- skapa lokala texter  
- generera nya sidstrukturer  
- identifiera semantiska luckor  
- föreslå hur du vinner positioner  



Det är här du får skalfördelarna.



### Steg 4: Mänsklig kvalitetskontroll



Det är här kontrollen säkras.

- gå igenom ton  
- verifiera påståenden  
- säkerställ regulatorisk efterlevnad  
- godkänn publicering  



### Steg 5: Optimera kontinuerligt med AI-analys



AI kan övervaka:

- lokala rankningar  
- förändringar i konkurrenters strategi  
- sidors laddhastighet  
- avvikelser i metadata  
- fallande CTR  
- förändrade sökmönster  



När analysen är konsekvent blir marknadsföringen mer förutsägbar.



## Slutsats: AI ger operativ kraft, inte mirakellösningar



AI är inte till för att ersätta människor. Den är till för att ta bort friktionen i ett arbete som traditionellt varit manuellt, fragmenterat och dyrt att skala.



För mellanstora företag i Sverige, särskilt inom vård, specialisttjänster och andra reglerade segment, är den verkliga vinsten att kunna skala lokal marknadsföring utan att öka kostnadsmassan.



Det är den typen av operationell effektivitet som investerare uppskattar och som skapar värde både före och efter ett förvärv.



Book a strategic consultation`,"ai-och-kundlojalitet-så-bygger-du-starkare-band-2026":`


## Inledning

Kundlojalitet har aldrig varit en stabil grund att luta sig mot, särskilt inte i segment där transaktioner är komplexa och relationerna ofta formas under press. 2026 är året då AI slutar vara en hjälpfunktion och istället fungerar som ett operativt lager som faktiskt bär kundrelationer. För bolag i mid-market M&A och vårdnära carve outs är det inte längre en fråga om att förbättra kundresor. Det handlar om att säkra affärens uthållighet när marknadens logik blir mer fragmenterad för varje kvartal.

Samtidigt är de flesta organisationer fortfarande fast i ett gammalt ramverk. De arbetar som om kundlojalitet vore en mjuk fråga. I verkligheten har lojalitet blivit en teknisk och finansiell fråga. Detta är särskilt tydligt när AI-agent relationer börjar ta över stora delar av kunddialogen.

Det här är inte en vision om en polerad framtid. Det är en konkret genomgång av vad som faktiskt fungerar i fältet, där varje beslut mäts i risk och realiserbart värde.



## Varför kundlojalitet har blivit en AI-fråga 2026

2026 präglas av två strukturella skiften som gör AI central för kundlojalitet.

  
För det första: kunddata är inte längre stabilt. Den rör sig snabbare än organisationer hinner tolka den. Människor byter leverantör i tysthet, ofta innan traditionella mätningar ens visar på avvikelse.

  
För det andra: kundens tolerans för långsamhet är borta. De har sett vad specialiserade AI-system kan leverera i andra branscher. När svarstider faller under sekunder och rekommendationer känns skräddarsydda, blir allt annat ett irritationsmoment.

  
Kombinationen gör att företag som inte integrerar AI som operativt nav riskerar att tappa affärer de aldrig ens hann konkurrera om.



## Kundlojalitet AI som strategisk funktion

Att använda kundlojalitet AI innebär inte att lägga på fler verktyg. Det handlar om att skapa en strukturerad kärna där kundsignaler analyseras kontinuerligt och besluten förstärks av autonoma processer.

  
AI är inte där för att automatisera det som är enkelt. Den är där för att avlasta relationer som slits sönder av manuell uppföljning. Den är också där för att fånga upp risker innan de blir synliga i intäktsmodeller.

  
I mid-market M&A och healthcare carve outs är detta särskilt tydligt. Här finns en miljö där kunderna är professionella, ofta stressade och alltid resultatinriktade. De har inte tid för långa onboardingprocesser eller repetitiva lägesavstämningar.

  
Kundlojalitet AI skapar struktur kring tre centrala punkter:

  
• Tillgänglighet i realtid  
• Konsekvens i leverans  
• Förutsägbarhet i rådgivning

  
Det här gör att kundrelationer inte försvagas bara för att team roteras, resurser flyttas eller avtal förnyas.



## Hur AI-agent relationer förändrar kunddialogen

AI-agent relationer är nästa lager av lojalitet. Dessa agenter är inte chatbots och inte heller avskalade verktyg. De är autonoma representanter som kan följa kunden över tid och dra samman företagsintern data med operativa behov.

  
Kunder i komplexa transaktioner vill inte längre behöva förklara sig för nya människoteam varje gång en process förskjuts. De vill att systemet ska minnas samtliga iterationer och leverera utan friktion.

  
AI-agenter fungerar som:

  
• Kontinuitetsbärare  
• Informationsknutpunkter  
• Eskaleringsfilter  
• Realtidsanalytiker

  
När kunder märker att AI-agenten alltid har rätt sammanhang, alltid är tillgänglig och aldrig tappar tråden, uppstår något som traditionella kundteam sällan lyckas skapa, nämligen stabilt förtroende utan att bränna timmar.

  
Det är en hårdare, mer funktionell form av lojalitet. Den har inget med relationer i klassisk mening att göra. Den handlar om att leveransen är så konsekvent att kunden inte ser en rationell anledning att byta leverantör.



## OpenClaw försäljning och dess koppling till lojalitet

OpenClaw försäljning är en metod som blir allt vanligare i miljöer där köparen testar flera alternativ parallellt. Modellen bygger på att företaget måste anta att kunden alltid har ett alternativ i bakfickan.

  
Det innebär att lojalitet inte kan byggas genom charm, snabbhet eller personlig närvaro. Lojalitet måste byggas genom precision i leveransen, transparent kommunikation och total avsaknad av friktion.

  
AI är kärnan i detta. Om kundens förväntan är att leverantören ska kunna svara på detaljfrågor inom sekunder, kan inget mänskligt team leverera detta på ett hållbart sätt. AI-agent relationer måste bära belastningen.

  
OpenClaw försäljning kräver därmed tre AI-drivna processer:

  
• Realtidsuppföljning på alla interaktioner  
• Kontinuerliga riskprognoser på kundens beteende  
• Automatiska påminnelser till interna team när ett fönster för värdeexpansion öppnas

  
80 procent av kundförluster i denna modell sker på grund av passivitet. När AI tar över det passiva lagret, fälls en stor del av risken bort.



## 2026: Varför mänskliga team inte längre räcker

Det finns en romantiserad bild av kundrelationer som bygger på personliga möten och mänsklig känsla. Den bilden är borta. Marknaden har blivit för snabb, kunderna för otåliga och dataflödena för tunga.

  
I mid-market M&A och healthcare carve outs är det inte ovanligt att ett enda beslut bygger på hundratals datapunkter och veckor av due diligence. Det är inte realistiskt att ett mänskligt team ska hålla allt detta i huvudet utan felmarginaler.

  
AI kan:

  
• Samla all historik  
• Identifiera brister i argumentationen  
• Ge realtidsstöd i förhandling  
• Prognostisera kundens troliga nästa steg

  
Det betyder inte att människor blir utfasade. Det betyder att människor inte behöver slösa tid på det som systemet redan kan göra bättre.

  
Den mänskliga rollen blir mer kirurgisk. Mindre bred, mer precis. Kundlojalitet blir därmed en orkestrering där människor och AI samarbetar utan att tävla om samma uppgifter.



## Praktiska AI-initiativ som ger omedelbar effekt på kundlojalitet

De flesta organisationer försöker fortfarande koppla in AI på ytan. Det ger marginella effekter. För företag som vill nå faktisk förändring 2026 finns fyra huvudinitiativ att börja med.



### 1. AI-baserad förnyelseprognos

De flesta kundförluster sker i tystnad lång innan förnyelsesamtalet. AI kan förutse riskperioder baserat på beteenden, volymdata, svarstid och förändringar i beslutsmönster.

Det gör att kundteam kan sätta in resurser i rätt tid istället för att försöka rädda ett redan förlorat avtal.



### 2. Specialiserade AI-agenter för kontinuitet

En AI-agent som följer kunden över tid blir en stabil partner när organisationens interna struktur förändras.

Kunderna upplever mindre friktion och färre överlämningar. Teamen får bättre förberedelser inför alla möten.



### 3. Realtidsanalys för OpenClaw försäljning

I OpenClaw-modellen behöver säljarna förstå exakt när kunden är i rörelse. AI kan läsa av micro-signaler i beteende, kommunikation och engagemang.

Detta gör att säljarna kan prioritera konton baserat på faktisk potential, inte magkänsla.



### 4. Automatiserade insiktsrapporter till kunden

Regelbunden rapportering bygger förtroende men är tidskrävande. 2026 genereras de flesta insiktsrapporter av AI, vilket gör att leveransen är snabb, konsekvent och fri från mänsklig variation.

Kunderna upplever mognad. Leverantören framstår som mer stabil.



## Så bygger du lojalitet i carve out-miljöer

Healthcare carve outs är bland de mest oförutsägbara processerna i dagens landskap. När ett bolag plockas isär eller byter ägare uppstår vakuum för kunderna. De blir oroliga eftersom kontinuitet är kritisk i vårdnära miljöer.

  
AI kan minska osäkerheten genom:

  
• Tydlig spårbarhet i alla interaktioner  
• Snabb onboarding efter ägarbyte  
• Konsistent uppföljning även när organisationen skiftar  
• Individualiserade kommunikationslinjer

  
Kundlojalitet i carve outs handlar om att minimera avbrott. AI är bäst lämpad att upprätthålla denna stabilitet när allt annat rör på sig.



## Vanliga misstag företag gör med AI och kundlojalitet

Företag som misslyckas med kundlojalitet trots AI gör det nästan alltid av samma skäl.

  
• De integrerar AI för ytligt  
• De saknar tydliga affärsmål  
• De tror att AI ska ersätta relationen  
• De mäter fel nyckeltal  
• De implementerar för sakta

  
AI fungerar bäst när den används som en intern motor, inte som ett lager som läggs ovanpå befintliga processer.



## Framtiden: Kundlojalitet utan illusioner

2026 är året då branschen börjar överge berättelser om relationer som byggs över tid. Kunderna är överbelastade, marknaderna är stökiga och beslutsprocesserna kortare.

  
Det som faktiskt bygger kundlojalitet nu är:

  
• Snabbhet  
• Precision  
• Kontinuitet  
• Förutsägbarhet

  
AI är det enda operativa verktyget som kan leverera dessa fyra element samtidigt utan att slita ut organisationer.

  
AI-agent relationer blir därmed navet. OpenClaw försäljning blir processen. Kundlojalitet AI blir den strategiska strukturen.

  
Det är en hårdare men mer ärlig form av lojalitet.



## Avslutning

2026 är inte året då AI blir en framtidsvision. Det är året då AI blir motorn i hur kundrelationer upprätthålls, analyseras och förstärks.  

Kunderna förväntar sig att leverantörer ska vara snabbare, mer pålästa och mer konsekventa än vad något mänskligt team klarar på egen hand.

  
De företag som lyckas bygga starka band framåt gör det genom att låta AI ta över vardagslogiken, analysera riskerna och bära kontinuiteten i relationen.

  
Allt annat blir långsamt, och långsamhet är 2026 den säkraste vägen till förlorade affärer.



Book a strategic consultation`,"hur-ai-förändrar-svensk-bankverksamhet":`


AI har gått från att vara en teknisk fotnot till att bli en strategisk kärnfråga inom svensk bankverksamhet.  

Det gäller inte bara för storbankerna utan även för mellanstora aktörer som försöker manövrera i ett landskap där krav på regelefterlevnad, pressade marginaler och ökande transaktionsvolymer efter M&A-affärer gör tekniska beslut allt mer affärskritiska.



De banker som tidigare kunnat leva på tröghet i marknaden möter nu en kombination av regulatorisk disciplin, kundförväntningar på realtidsservice och ett allt större ansvar att hantera data korrekt.  

AI, särskilt när den kan köras lokalt och kontrollerat, har blivit en av få realistiska vägar för att få ihop effektivitet, riskhantering och kostnadskontroll.



Den här texten går igenom hur AI påverkar svensk bank, vilka regulatoriska krav som styr besluten, hur lokal AI-körning i bankmiljöer förändrar möjligheterna och vilka strategiska vägval som blir avgörande i en miljö som allt oftare präglas av carve outs och strukturella omtag.  



---

## AI i svensk bankverksamhet i dag: en ny baseline



Tidigare var AI en specialiserad funktion, ofta begränsad till kreditmodellering eller bedrägeridetektion. Nu är det en horisontell kapacitet som bankerna bygger in i alla led.  

Det handlar inte längre om att experimentera utan om att säkra en långsiktig, robust arkitektur som klarar att bära nya affärsmodeller, ökande datamängder och högre regulatorisk press.



Tre krafter driver förändringen:

- ökande volymer och komplexitet i transaktioner  
- krav på snabbare processer i kundnära flöden  
- regulatorisk press kopplad till GDPR finans AI, outsourcing och datalagring



Det är ingen teori. Det är ett praktiskt svar på en vardag där manuella kontroller inte längre hinner med och där mellanskiktet i bankernas organisationer redan är överbelastat.



---

## Från centraliserad AI till lokal AI-körning i bank



De senaste åren har visat något som länge ignorerats. De flesta banker kan inte lägga all AI i molnet.  

Inte av tekniska skäl utan på grund av:

- datalokalitet  
- risk för modell-läckor  
- känsliga interna dataset  
- ökade krav på förutsägbarhet i revisioner och tillsyn  



Det som i USA drivs av kostnad och innovation drivs här av risk och regelefterlevnad. Därför blir lokal AI-körning bank en viktig strategisk byggsten.  

Det innebär att banker kör stora språkmodeller och andra AI-verktyg direkt i egna datacenter eller på hårdvara som står under strikt intern kontroll.



Det förändrar spelplanen.  

En bank kan nu använda AI för interna processer utan att data lämnar organisationens egna gränser. Det minskar riskexponering och gör det möjligt att automatisera flöden som tidigare varit juridiskt känsliga.



---

## Den regulatoriska verkligheten: GDPR finans AI styr allt



När man arbetar med banker i Sverige blir bilden tydlig.  

Det största hindret är inte tekniken. Det är GDPR finans AI och relaterade regelverk.  

Att hantera persondata i AI-modeller kräver en riskanalys som inte lämnar mycket utrymme för improvisation.  

Tre frågor återkommer i varje projekt:

1. Får datan behandlas av AI-modellen enligt ändamålsprincipen  
2. Var lagras modellen och går det att bevisa datalokalitet  
3. Kan banken garantera att ingen data används för att träna externa modeller  



Det här gör att många internationella molntjänster faller bort direkt.  

De banker som försöker kringgå frågan möter ofta problem vid granskningar. De som tar det på allvar bygger i stället hybridmiljöer där känsliga flöden hanteras lokalt och mindre känsliga genom externa tjänster.



Resultatet blir mer robust än en ren molnstrategi.  

Det blir också mer skalbart än man kanske tror, när rätt teknikstack är på plats.



---

## AI som driver effektivitet i M&A-relaterade bankprocesser



Det här är en del av bankernas verklighet som sällan syns utåt.  

Mellanstora banker och nischbanker deltar regelbundet i M&A-processer, både som finansiärer och som parter i carve outs.  

Oavsett om det gäller finansiering av vårdbolag, utköp av verksamhetsgrenar eller refinansiering av fragmenterade koncerner, möter bankerna stora mängder ostrukturerad data på kort tid.



AI förändrar det på tre sätt:

- automatiserad dokumentanalys vid due diligence  
- intern riskbedömning baserad på tidigare transaktioner  
- snabbare kreditbeslut vid komplexa affärsupplägg  



Det handlar inte om romantiska turnaround-case.  

Det handlar om realpolitik vid kapitalallokering, ofta under tidspress, där varje felbedömning kan bli kostsam.  

AI ger en analysnivå som är jämnare, snabbare och mindre känslig för individuell tolkning.



För banker som arbetar med vårdsektorn blir det ännu tydligare.  

Carve outs inom vård innebär tung dokumentation, omfattande regulatoriska krav och sällan strukturerade datarum. AI gör det möjligt att hantera den typen av processer med hög precision utan att öka bemanningen.



---

## Automatisering av interna flöden: den tysta omvandlingen



Det som mest förändrar bankernas vardag är inte det spektakulära.  

Det är de små flödena som får ny kapacitet:

- onboarding av företagskunder  
- manuell kvalitetssäkring av KYC-data  
- kreditunderlag som normalt kräver handpåläggning  
- riskrapporter som tidigare tog veckor att sammanställa  



AI gör att processerna kan standardiseras och skalas.  

Samtidigt frigörs tid i mellanskiktet, där många banker i dag har den största flaskhalsen.  

Det skapar en motståndskraft som bankerna länge saknat.



---

## Datakvalitet: den svåraste och viktigaste frågan



AI kräver bra data. Bankerna har mycket data men ofta i form av:

- legacy-system  
- manuella undantag  
- gamla kundregister  
- fragmenterade interna datamodeller  



De banker som lyckas är de som tar den tråkiga vägen.  

De rensar, standardiserar och migrerar långsamt men metodiskt.  

Det är inte glamoröst. Det syns inte i årsredovisningen.  

Men utan det faller alla AI-projekt, oavsett hur avancerade modellerna är.



Särskilt viktigt blir detta när banker går igenom expansion, fusioner eller carve outs.  

Inkompatibel data från nya enheter måste integreras snabbt och säkert. Här blir AI ett verktyg för att skapa ordning i ett läge som annars drar ut på tiden och genererar operativ risk.



---

## Lokala modeller och kontrollerad risk: framtiden för AI i svensk bank



Marknaden rör sig mot mindre men mer kontrollerade modeller.  

Bankerna söker förklarbarhet, stabilitet och revision.  

Det betyder att stora generella modeller inte alltid är rätt verktyg. Lokala modeller med tydligt definierat syfte passar bättre för en miljö där tillsynsmyndigheter kräver spårbarhet i varje beslut.



I praktiken betyder det:

- AI som körs i bankens eget datacenter  
- modeller optimerade för specifika processer  
- transparent dataloggning  
- minimerat beroende av externa leverantörer  



Det här är inte en tillfällig trend. Det är ett strukturellt skifte.  

Bankerna bygger AI som en del av sin interna infrastruktur, inte som en outsourcingfunktion.



---

## Strategiska konsekvenser på medellång sikt



Tre konsekvenser blir särskilt tydliga för banker som ligger i framkant.



För det första: AI blir en förutsättning för lönsamhet.  
Inte en konkurrensfördel. En nödvändighet.



För det andra: regulatoriska beslut avgör teknisk arkitektur.  
Inte innovationstakt. Regelverken definierar ramarna, och bankerna bygger därefter.



För det tredje: lokal AI-körning minskar exponering och ökar motståndskraft.  
Det blir ett sätt att säkra dataflöden även när internationella leverantörer ändrar villkor, pris eller tillgänglighet.



Resultatet är en banksektor som långsamt rör sig mot högre teknisk robusthet och bättre riskkontroll, utan att det innebär romantiserade visionsscenarier.  

Det handlar om disciplin, inte inspiration.



---

## Sammanfattning: AI i svensk bank är en praktisk realitet



AI har gått från experiment till ryggrad i svensk bank.  

Inte för att bankerna jagar innovation utan för att rutinerna kräver det.  

Det är ett svar på ökad transaktionsvolym, hårdare regleringar och mer komplexa M&A-processer.



Nyckeln ligger i tre principer:

- lokal AI-körning bank för att säkra datalokalitet och riskkontroll  
- strikt hantering av GDPR finans AI för att undvika regulatoriska fallgropar  
- metodiskt arbete med datakvalitet som grund för skalbar automatisering  



De banker som följer dessa principer skapar operativ stabilitet och kan hantera mer avancerade affärer, utan att belasta organisationen ytterligare.  

Det är en utveckling som inte kommer att bromsa in. Den kommer snarare att bli en ny standard för hur svensk bankverksamhet fungerar.



Book a strategic consultation`,"risker-med-obeprövad-ai-för-småföretag":`Minimalistisk analys för långsiktig förvaltning och trygg OpenClaw‑drift



## Inledning

Småföretag står inför en ny epok.  

Teknologier som tidigare bara var tillgängliga för globalt kapital finns nu i varje arbetsflöde, varje beslut och varje kundmöte.  

Det ger möjligheter, men också risker som många organisationer underskattar.  

Särskilt gäller detta obeprövad AI, där kortsiktig effektivisering ofta prioriteras framför robust drift, styrning och integritet.  

Denna text beskriver hur riskerna uppstår, hur de sprider sig genom företagsstrukturen, och varför en trygg och kontrollerad OpenClaw‑drift är den enda realistiska vägen för långsiktigt orienterade ägare.  



## Varför småföretag är särskilt utsatta

Små företag saknar ofta:

tom rad  
resurser för systematisk testning  

tom rad  
kapacitet för teknisk revision  

tom rad  
formell riskhantering  

tom rad  
strukturerad IT‑säkerhet  

Det gör att obeprövade AI‑verktyg introduceras utan tillräcklig förståelse för hur modellerna fungerar, vilken data som lämnar organisationen eller vilka oönskade beroenden som skapas.  

När ledningen saknar tid att analysera verktygen skapas ett tyst beroende av externa aktörer, där affärskritisk information kan hamna i okända miljöer, ofta utan avtalad jurisdiktion.  

Småföretag hamnar då i en position där de saknar kontroll över viktiga processer, samtidigt som de inte har möjlighet att lösa problemen om systemet fallerar.  



## Obeprövad AI och de strukturella riskerna

### Operativ instabilitet

AI som introduceras utan driftkontroll kan:

tom rad  
leverera inkonsekventa resultat  

tom rad  
avvika från beslutsramar  

tom rad  
skapa falsk precision  

tom rad  
generera svar som saknar spårbarhet  

För småföretag innebär detta att rutiner börjar glida isär.  

Säljmaterial, kalkyler, interna policys och kundkommunikation riskerar att bli olika från dag till dag.  

Detta bryter ner förtroende, både internt och externt, och kan i värsta fall leda till compliance‑problem.  



### Datadiffusion och läckage

AI‑plattformar utan egen driftmiljö innebär att data lämnar företaget och bearbetas i miljöer som företaget inte kontrollerar.  

Detta kan inkludera:

tom rad  
kundregister  

tom rad  
prislistor  

tom rad  
affärshemligheter  

tom rad  
strategiska dokument  

För småföretag kan ett sådant läckage vara existentiellt.  

Det handlar inte om stora datamängder. Det handlar om känslighet.  

När ett dokument väl lämnar organisationen är det omöjligt att återta kontrollen.  



### Risk för oönskat leverantörsberoende

När obeprövad AI integreras i operationer utan tydlig styrning skapas ofta ett tyst beroende av kommersiella molnjättar.  

Detta beroende är:

tom rad  
dyrt på lång sikt  

tom rad  
begränsande i fråga om dataägande  

tom rad  
oförutsägbart vid prishöjningar  

tom rad  
svårt att ersätta när organisationen väl anpassats kring verktyget  

Småföretag hamnar då i en situation där de inte längre styr tekniken, utan måste anpassa sin verksamhet efter externa beslut som de inte kan påverka.  



### Brist på revision och spårbarhet

En central del av långsiktigt ägande är spårbarhet.  

Obeprövad AI saknar ofta:

tom rad  
loggar som går att revidera  

tom rad  
transparent modellstyrning  

tom rad  
möjlighet att återbesöka beslutsunderlag  

tom rad  
kontrollerbarhet vid fel  

För en ägarstyrd organisation är detta oförenligt med god förvaltning.  

När beslut grundas på system som inte går att validera uppstår ett successivt tapp av kontroll.  

Det är en kapitalskada som syns först långt senare.  



## Konsekvenser för långsiktig förvaltning

### Förlust av integritet i affärsprocesser

När AI genererar material utan styrning förlorar organisationen gradvis sin distinkta röst och struktur.  

Dokument börjar likna massproducerat innehåll.  

Kommunikationen blir spretig.  

Företaget tappar sin identitet.  

Förvaltningsmässigt innebär detta att värdet som byggts upp under många år urholkas.  



### Strategiska beslut baseras på osäkra modeller

Småföretag använder allt mer AI för:

tom rad  
prognoser  

tom rad  
budgetunderlag  

tom rad  
prisstrategi  

tom rad  
kundurval  

Men om modellerna är obeprövade blir besluten osäkra.  

Det kan leda till investeringar som inte bär sig, felprioriteringar och störningar i kassaflödet.  

I en familjeägd miljö där stabilitet är centralt kan detta få betydande konsekvenser.  



### Ökad sårbarhet vid personalomsättning

När nyckelpersoner använder AI‑verktyg utan dokumentation, utan styrning och utan driftkontroll byggs ett informellt system som bara de själva förstår.  

När de lämnar förloras kunskapen.  

Det liknar beroendet till en ensam utvecklare som byggt ett kritiskt system.  

För småföretag kan detta skapa längre driftstopp och högre kostnader än vad som först framstår.  



## Varför trygg OpenClaw‑drift löser den strukturella problematiken

OpenClaw skiljer sig från de generella AI‑tjänster som ofta skapar riskerna.  

Fokus ligger på:

tom rad  
kontrollerad drift  

tom rad  
lokal eller ägarstyrd hosting  

tom rad  
spårbarhet och revision  

tom rad  
dataintegritet  

tom rad  
långsiktig förvaltning  

Det gör att AI blir en del av den interna infrastrukturen istället för en extern black‑box.  



### Drift i kontrollerade miljöer

OpenClaw kan köras i miljöer som företaget själv kontrollerar, exempelvis:

tom rad  
lokala servrar  

tom rad  
privata moln  

tom rad  
juridiskt förankrade datacenter  

Det betyder att data inte lämnar organisationen och att företaget behåller full äganderätt.  

Det minskar riskerna radikalt och är förenligt med konservativ riskhantering.  



### Minimal attackyta och hög dataintegritet

Obeprövade AI‑tjänster har ofta:

tom rad  
många externa integrationer  

tom rad  
öppet API‑flöde  

tom rad  
delad metadata  

OpenClaw‑drift kan däremot utformas med minimal attackyta.  

Endast definierade flöden.  

Endast intern hantering.  

Detta passar småföretag som prioriterar robusthet framför snabb implementering.  



### Kontrollerade uppdateringar och långsiktig stabilitet

De flesta kommersiella AI‑tjänster ändrar modellerna utan förvarning.  

Det innebär att en process som fungerade igår kan bete sig annorlunda idag.  

OpenClaw‑driften möjliggör kontrollerade versioner där företaget själv bestämmer:

tom rad  
när uppdateringar rullas ut  

tom rad  
hur modeller testas  

tom rad  
vilka funktioner som aktiveras  

Det ger en stabilitet som är central för långsiktigt orienterade ägare.  



### Spårbarhet och revisionsmöjlighet

OpenClaw kan logga:

tom rad  
inputs  

tom rad  
outputs  

tom rad  
modellversioner  

tom rad  
drifttillstånd  

Det gör att varje process kan granskas i efterhand.  

Det gör att beslut baserade på AI inte blir en svart låda.  

Förvaltare får därmed både kontroll och ansvarsfördelning.  



## Implementering för småföretag med konservativ profil

Småföretag behöver en modell som inte stör ordinarie drift och som minimerar risken för felaktiga beroenden.  

En trygg implementering består av:

tom rad  
kartläggning av verksamhetskritiska flöden  

tom rad  
identifiering av datakategorier  

tom rad  
riskanalys för varje användningsfall  

tom rad  
begränsning till interna miljöer  

tom rad  
strikt åtkomstkontroll  

tom rad  
kontinuerlig revision  

Detta skapar en teknisk miljö som är lugn, kontrollerad och långsiktigt hållbar.  



## Exempel: typiska fallgropar hos små företag som redan introducerat obeprövad AI

Nedan följer återkommande mönster som observerats i små organisationer.  

Varje exempel beskriver en risk som på ytan ser liten ut men som på sikt kan orsaka strukturella problem.

tom rad  
AI används för offerter där beräkningarna är svåra att återskapa  

tom rad  
anställda använder personliga AI‑konton där företagsdata laddas upp  

tom rad  
kundinformation lagras i lösningar utan databehandlingsavtal  

tom rad  
text genereras som avviker från företagets värdegrund och stil  

tom rad  
chefer fattar beslut baserat på prognoser som inte kan revideras  

tom rad  
beroende skapas till tjänster som ändrar sina API‑er utan avisering  

Dessa problem kan undvikas helt genom en trygg OpenClaw‑drift.  



## Den ekonomiska dimensionen

Småföretag har ofta begränsad tolerans för störningar.  

Kostnader för obeprövad AI visar sig vanligtvis som:

tom rad  
korrigering av felaktiga dokument  

tom rad  
förlorad kundrelation vid dataläckage  

tom rad  
juridiska kostnader vid brott mot dataskyddsförordningar  

tom rad  
ökade driftkostnader vid oplanerade beroenden  

tom rad  
förlorad tid när system beter sig inkonsekvent  

I en konservativ struktur där kapital ska värnas är detta oacceptabelt.  

OpenClaw erbjuder en modell där kostnaderna blir förutsägbara och där värdet byggs långsamt och stabilt.  



## Varför Hylten‑Invest arbetar med trygg OpenClaw‑drift

Vår filosofi utgår från tre principer:

tom rad  
kontroll framför bekvämlighet  

tom rad  
stabilitet framför snabbhet  

tom rad  
långsiktig förvaltning framför kortsiktig hype  

I en tid där marknaden översvämmas av obeprövad AI behövs en förankrad strategi som prioriterar säkerhet och ansvarstagande.  

OpenClaw‑drift gör det möjligt att använda kraftfulla modeller utan att släppa kontrollen.  

Det ger en lugn utveckling där teknikens värde tillfaller ägarna, inte externa plattformar.  



## Avslutning

Obeprövad AI är inte bara en teknisk risk.  

Det är en förvaltningsrisk.  

För småföretag kan det vara skillnaden mellan stabil utveckling och långsam erosion av kärnvärden, data och strukturer.  

Trygg OpenClaw‑drift erbjuder en väg som är kontrollerad, konservativ och hållbar.  

Det är en modell som respekterar ägarens perspektiv och minimerar osäkerhet.  

För företag som vill använda AI utan att kompromissa med integritet eller långsiktighet är detta den enda rimliga strategin.  



Contact for stewardship discussion`,"automatisera-onboarding-av-kunder-med-ai-agenter":`En strategisk genomlysning för långsiktiga förvaltare inom HNWI och Family Office  

  

Att skapa en effektiv och trygg onboardingprocess är en av de mest centrala uppgifterna för varje förvaltare med ansvar för betydande privata tillgångar.  

  

Processen avgör första intrycket, den formar förtroendet och den påverkar i hög grad hur väl relationen utvecklas över tid.  

  

I en tid där kapital, relationer och informationsflöden rör sig snabbare än någonsin finns ett växande behov av strukturer, system och verktyg som klarar både komplexitet och sekretess utan att kompromissa med noggrannhet.  

  

Här framträder AI‑agenter som en form av långsiktig infrastruktur. Inte som en ersättning för mänsklig omdömeskraft, utan som ett tyst och stabilt stöd.  

  

OpenClaw, en svensk plattform för formell automation baserad på AI‑agenter, erbjuder ett nytt skikt av precision och effektivitet. Resultatet är en onboarding som är snabbare, säkrare och mer sammanhållen än traditionella manuella processer.  

  

## Varför onboarding är en kärnfråga för kapitalförvaltare  

  

Alla relationer med förmögna privatpersoner börjar i en punkt där data, dokument och förväntningar ska mötas.  

  

Det är en känslig fas där varje steg måste vara metodiskt, diskret och fullständigt korrekt.  

  

HNWI och Family Office‑miljöer kännetecknas av:  

• Komplex ägarstruktur  

• Flera juridiska nivåer  

• Diskretion som högsta prioritet  

• Hög dokumentationsgrad  

• Riskminimering framför hastighet  

  

Den traditionella onboardingprocessen riskerar att skapa friktion när varje dokument ska jagas, varje uppgift ska valideras och varje steg ska dokumenteras för regelefterlevnad.  

  

Samtidigt vill förmögna kunder uppleva enkelhet, tydlighet och professionalism.  

  

Här blir automatisering inte bara en fråga om effektivitet, utan en del av den totala upplevelsen.  

  

## Vad AI‑driven onboarding innebär  

  

AI‑agenter inom ramen för OpenClaw utför arbetsuppgifter som annars belastar erfarna handläggare och rådgivare.  

  

Det handlar inte om chatbottar eller enkla regelbaserade system.  

  

Istället fungerar dessa agenter som diskreta processförvaltare som:  

• Samlar in information  

• Kontrollerar identifiering  

• Verifierar dokument  

• Följer interna riktlinjer  

• Loggar varje steg i spårbar form  

• Integrerar data i befintliga system  

  

Det centrala är att agenterna arbetar metodiskt och konsekvent. De följer definierade procedurer utan variation, vilket skapar förutsägbarhet.  

  

## Varför detta passar Hylten‑Invests profil  

  

Onboarding är inte bara ett administrativt moment.  

  

Det är början på en relation som ofta sträcker sig över generationer.  

  

Hylten‑Invest kännetecknas av en ton av långsiktig förvaltning. Både i kapital och i relationer.  

  

Genom att införa AI‑agenter för just onboarding skapas en tydlig struktur som:  

• Minskar risk  

• Ökar kvalitet  

• Frigör tid  

• Fördjupar kundupplevelsen  

• Stärker förtroendet  

  

Det är ett naturligt steg för ett förvaltarbolag som arbetar med lång horisont och diskret professionalism.  

  

## Exempel på hur OpenClaw automatiserar onboarding  

  

Nedan följer ett antal konkreta scenarier där AI‑agenter skapar värde.  

  

### 1. Förberedande kundprofilering  

  

Agenterna går igenom all inlämnad information. De jämför den med interna kriterier och externa datakällor. De sammanställer en strukturerad första bedömning som är lätt för en mänsklig rådgivare att ta vid från.  

  

Resultat: Inga detaljer missas. Processen blir förutsägbar.  

  

  

### 2. Dokumentinhämtning  

  

Agenterna begär dokument, följer upp om något saknas och säkerställer att varje del är korrekt formaterad.  

  

För kunden innebär det en lugn, tydlig och diskret upplevelse där allt sker i rätt ordning.  

  

  

### 3. Identifiering och verifiering  

  

AI‑agenter utför kontroller mot officiella register. De analyserar dokument och bekräftar äkthet med hög precision.  

  

Detta minskar risken för fel och ökar tryggheten.  

  

  

### 4. Intern koordinering  

  

När en kund behöver godkännas av flera interna funktioner kan agenterna planera, fördela och följa upp varje steg.  

  

Organisationen slipper manuella loopar. Processflödet blir tyst och jämnt.  

  

  

### 5. Rapportering och arkivering  

  

Agenterna sammanställer fullständig rapportering. De genererar dokumentation som uppfyller interna och regulatoriska krav.  

  

Allt sker automatiskt, men alltid under mänsklig kontroll.  

  

  

## Varför OpenClaw skiljer sig från andra plattformar  

  

OpenClaw bygger på en kombination av agentstyrd logik och formell struktur. Detta innebär att agenterna kan utföra komplexa arbetsflöden utan att tappa kontroll, transparens eller spårbarhet.  

  

Det är en lösning som är utvecklad för verksamheter där stabilitet och diskretion är viktigare än snabb innovation.  

  

Några nyckelfördelar:  

• Svensk förvaltning och datalagring  

• Full kontroll över agentlogik  

• Hög spårbarhet och revision  

• Modularitet anpassad för Family Office‑miljöer  

  

Det är ett verktyg för den som vill bygga för 10, 20 eller 50 års perspektiv.  

  

## Hur AI‑agenter reducerar risk  

  

Riskreducering är centralt i förmögenhetsförvaltning.  

  

Onboarding är ett område där många små fel kan få stora konsekvenser.  

  

AI‑agenter minskar risk genom att:  

• Arbeta konsekvent utan variation  

• Följa definierade processer utan avvikelser  

• Dokumentera allt för full transparens  

• Minska mänskliga fel  

• Säkerställa att ingenting glöms  

  

Det är ett stilleben av precision.  

  

  

## Hur kundupplevelsen stärks  

  

HNWI‑kunder värdesätter främst lugn, diskretion och kvalitet. Inte snabbhet för sin egen skull.  

  

När onboarding är automatiserad med AI‑agenter får kunden:  

• Färre kontaktpunkter  

• Färre frågor  

• En tystare process  

• Tydliga steg  

  

Det är en upplevelse av ordning och omtanke.  

  

  

## Integration i befintliga strukturer  

  

OpenClaw fungerar som ett lager ovanpå befintliga system.  

  

Plattformen integreras i:  

• CRM‑miljöer  

• Dokumenthantering  

• Bankinfrastruktur  

• Interna databaser  

  

Det gör att implementeringen blir mjuk och utan friktion.  

  

Ingenting i organisationen behöver kastas ut. Allt blir snarare mer organiserat.  

  

  

## Långsiktig påverkan på organisationen  

  

När AI‑agenter tar över repetitiva onboardinguppgifter kan människor fokusera på relationer, bedömningar och strategiska beslut.  

  

Organisationen blir mindre sårbar för personalförändringar.  

  

Kunskap byggs in i agenterna, vilket skapar en process som håller genom generationer.  

  

För ett bolag som Hylten‑Invest är detta en naturlig utveckling. Det stärker förvaltningens ryggrad.  

  

  

## Rekommenderad styrningsmodell  

  

För att införa AI‑agenter på ett kontrollerat och konservativt sätt rekommenderas en strukturerad styrning:  

• En intern processägare  

• Tydligt definierade arbetsflöden  

• Regelbundna revisioner  

• Kontrollerad utrullning i steg  

  

Detta säkerställer att tekniken förblir ett verktyg, inte en svart låda.  

  

  

## Sammanfattning  

  

Onboarding är början på alla stora relationer.  

  

Med AI‑agenter och OpenClaw skapas en process som är:  

• Metodisk  

• Förutsägbar  

• Diskret  

• Spårbar  

  

Det är en struktur som harmoniserar med en långsiktig och konservativ förvaltningstradition.  

  

Det skapar trygghet för kunden, stabilitet för organisationen och tydlighet för alla involverade.  

  

Automatisering är inte en ersättning för mänsklig omtanke. Det är ett verktyg som förstärker den.  

  

  

Contact for stewardship discussion`,"så-pitchar-du-ai-internt-till-ledningsgruppen":`En strategisk vägledning för långsiktigt värdeskapande



  
Att introducera AI i en organisation där stabilitet, kontroll och långsiktig kapitalförvaltning är centralt kräver en helt annan ton än den som ofta förknippas med teknikinvesteringar.  

Ledningsgrupper inom kapitalförvaltning, ägarledda bolag och familjekontrollerade koncerner vill inte höra visioner om hypad teknologi. De vill förstå risk, avkastning, styrning och på vilket sätt AI påverkar förmögenhetsvärde över tid.



  
Följande artikel ger en strukturerad, lågmäld och resultatfokuserad metod för hur du pitchar AI internt. Utformad för beslutsfattare som förvaltar kapital över generationer.



---

## AI bör pitchas som riskminimering, inte som innovation



  
I verksamheter där kapitalet är långsiktigt och toleransen för störning är låg är ordet innovation ofta lika med risk.  

Därför bör AI presenteras som ett verktyg för att minska operativa risker, inte som en kreativ satsning.



  
Tre aspekter bör betonas:

  
• Stabilare processer genom minskad manuell hantering  
• Färre felkällor i kritiska funktioner  
• Förutsägbara beslutsunderlag som stärker kontrollen



  
När AI kommuniceras som en förstärkning av beprövade processer blir det lättare för ledningsgrupper att ta nästa steg.



---

## Skapa en bild av vad som redan fungerar och vad AI förstärker



  
Ledningsgrupper vill normalt se hur ny teknik förhåller sig till det som redan fungerar. De vill inte höra att något ska ersättas. De vill veta hur befintliga styrkor skalas och skyddas.



  
Därför bör pitchen alltid börja med en beskrivning av nuläget:

  
• Kärnprocesser som skapar värde  
• Processer som skyddar kapital  
• Processer som är långsiktiga och icke förhandlingsbara



  
När detta etablerats kan du visa hur AI förstärker, inte ersätter, dessa strukturer. Det sänker tröskeln markant.



---

## Visa på konkreta risker som uppstår om AI inte införs



  
I konservativa organisationer väger argumentet risk-reducering ofta tyngre än argumentet förbättring.



  
AI bör därför också presenteras som ett skydd, inte bara som ett verktyg. Exempel på relevanta risker:

  
• Beroendet av nyckelpersoner blir för stort  
• Ökande komplexitet hanteras manuellt vilket skapar fel  
• Konkurrenter automatiserar rapportering och analys  
• Reglering kräver mer dokumentation än mänskliga team klarar



  
När ledningen förstår riskerna med att avstå blir lösningen mer naturlig.



---

## Gör pitchen ekonomiskt konservativ, inte kostnadsdrivande



  
Många AI-presentationer fokuserar på stora investeringsplaner och aggressiva transformationsprojekt. Det är fel approach för en ledningsgrupp med ägarfokus.  



  
Gör tvärtom. Betona låg risk och låg investering:

  
• Starta med ett pilotområde  
• Mät konkret effekt  
• Skala endast där effekten är bevisad  
• Ingen organisatorisk omställning i fas ett



  
Denna typ av ekonomiskt återhållsam strategi ligger nära hur familjeföretag har byggt långsiktigt värde i generationer.



---

## Presentera bara tre användningsfall, men gör dem mätbara



  
Ledningsgrupper vill inte se 20 AI-idéer. De vill se tre som är direkt kopplade till resultat.



  
Använd den här strukturen:



### 1. Effektivitetsförstärkning i repetitiva processer  
Beskriv en konkret process där mycket tid går åt utan att värde skapas.  

Visa hur AI reducerar tidsåtgång, skapar stabilitet och minimerar fel.  



### 2. Riskreduktion i dokumentation och beslut  
Många funktioner kräver noggrann rapportering.  

AI kan kvalitetssäkra dokumentation, analysera avvikelser och skydda mot mänskliga missar.  



### 3. Förbättrade beslutsunderlag vid kapitalrelaterade frågor  
Ledningen vill ha trygghet och förutsägbarhet.  

AI kan ge snabbare och mer heltäckande analyser av marknad, kostnader och interna risker.  



  
Nyckeln är att varje case ska ha ett enkelt mått, till exempel:

  
• Minskad handläggningstid  
• Färre fel per process  
• Mer välunderbyggda beslut  
• Lägre rapporteringskostnad



---

## Undvik tekniska detaljer, tala istället om styrning och kontroll



  
Många pitchar fastnar i teknik.  

Ledningsgrupper i konservativa miljöer är inte intresserade av hur modeller tränas. De vill veta hur styrningen fungerar.



  
Fokusera därför på:

  
• Hur datat kontrolleras  
• Hur modellen kvalitetssäkras  
• Hur åtkomst regleras  
• Hur varje AI-beslut loggas  
• Hur compliance förstärks



  
När AI presenteras som en förlängning av styrsystemet blir den ett tryggt beslut.



---

## Visa på en långsam, kontrollerad införandeplan



  
En pitch som framstår som snabb och aggressiv skapar osäkerhet. Ledningen vill se struktur och kontroll.  



  
Presentera därför en plan med fyra steg:



### Steg 1: Avgränsad förstudie  
Tydlig avgränsning. Tydliga mål. Minimal påverkan på organisationen.



### Steg 2: Liten pilot  
En process, ett team, en mätpunkt.  

Endast funktioner med låg risk testas.



### Steg 3: Utvärdering  
Mät resultatet. Mäta tid, kvalitet, felreducering och risknivå.  



### Steg 4: Kontrollerad skalning  
Endast skalning där effekt är bevisad och där ledningen uttryckligen godkänner expansion.



  
Denna struktur ger trygghet och långsiktig förutsägbarhet.



---

## Koppla AI till förmögenhetsbevarande, inte till innovation



  
Organisationer som representerar ägarfamiljer och högre förmögenhetsnivåer arbetar inte för snabba vinster utan för bevarande över generationer.  

AI bör därför presenteras som ett verktyg för kapitalets långsiktiga säkerhet.



  
Fokusera tydligt på tre nivåer av bevarande:

  
• Operativ stabilitet  
• Kostnadskontroll  
• Minskad beroenderisk



  
När AI positioneras som en del av förmögenhetsbevarandet blir investeringen naturlig och lågmält självklar.



---

## Så avslutar du pitchen på ett sätt som ger mandat



  
En bra pitch avslutar inte med teknik. Den avslutar med styrning och risk.



  
Säg därför:

  
• Här är de tre tydligaste riskerna i dagens läge  
• Här är de tre tydligaste förstärkningarna AI ger  
• Här är den minsta möjliga pilot som ger mätbar effekt  
• Här är hur vi mäter utan att påverka organisationen



  
Det skapar trygghet och leder oftare till ett lugnt, informerat godkännande.



---

## Sammanfattning  
Att pitcha AI till en ledningsgrupp med konservativ, kapitalförvaltande eller ägarstyrd orientering kräver en helt annan kommunikation än traditionell teknikpitchning.  

Nyckeln är att hålla budskapet lågmält, mätbart, riskreducerande och knutet till långsiktig stabilitet.  



  
AI accepteras när det presenteras som ett verktyg för kontroll, inte innovation.  

För kapitalbevarande organisationer är detta ofta den enda hållbara vägen in i teknologins nästa era.



---

Contact for stewardship discussion`,"sänk-företagets-elkostnader-med-smart-ai":`  

Att optimera energiförbrukningen har blivit en av de mest strategiskt viktiga frågorna för svenska företag, särskilt för verksamheter som värnar om långsiktig stabilitet och kapitalbevarande.  

  

För ägarledda bolag, Family Offices och investeringsinriktade miljöer är elkostnader inte enbart en rad i resultaträkningen. De är en återkommande riskfaktor, en källa till operativ osäkerhet och en möjlighet till effektivisering.  

  

Samtidigt har utvecklingen inom AI gått från futuristisk vision till ett konkret styrverktyg som ger företag real kontroll över kostnadsstrukturen.  

  

Denna artikel beskriver hur smart AI, i kombination med rätt infrastruktur och rätt analysdjup, kan sänka ett företags elkostnader med precision och utan att göra avkall på trygghet, driftsstabilitet eller långsiktigt ansvarstagande.  



## Varför AI är nästa naturliga steg för energistyrning  
  

Företag har i årtionden försökt minska energiförbrukningen genom manuella rutiner, traditionella styrsystem och enklare automationsverktyg.  

  

Men dagens energimarknad är volatil, och manuella metoder räcker inte längre för att skydda kapital och säkerställa driftseffektivitet.  

  

AI erbjuder något som tidigare saknats.  

  

AI kan övervaka, förutse och styra energianvändningen i realtid, samtidigt som den lär sig företagets naturliga driftmönster.  

  

Resultatet är en exakt och konsekvent optimering, dag för dag, timme för timme.  



## Kärnan i AI-styrd energieffektivitet  
  

Tre komponenter ligger bakom de största besparingarna.  

  

### Löpande datainsamling  
  

AI-system samlar in data från byggnader, maskiner, sensorer och energileverantörer.  

  

Data blir ett levande underlag för kontinuerligt förbättrade beslut.  

  

Det som tidigare var månadsrapporter blir nu sekundsnivåer av insikter.  



### Prediktiv analys  
  

AI känner av och förutser närlasternas toppar uppstår.  

  

Den kartlägger hur verksamheten faktiskt använder energi.  

  

Genom prognoser kan systemet minska onödiga effekttoppar, vilket ofta är en av de dyraste delarna av elkostnaden.  



### Automatisk styrning  
  

AI tar inte bara fram rekommendationer.  

  

Systemet kan även agera självständigt.  

  

Det kan släcka, sänka, pausa eller omfördela energi baserat på realtidsdata.  

  

Det sker utan att störa verksamheten och utan att kompromissa med komfort, säkerhet eller processkvalitet.  



## Passar särskilt bra för kapitaltunga verksamheter  
  

AI-automation skapar störst effekt i verksamheter med flera anläggningar, stora fastigheter eller energiintensiva processer.  

  

Exempel.  

  

• Produktion  
• Lager  
• Kommersiella fastigheter  
• Datacenter  
• Retailkedjor  
• Logistiknav  

  

I dessa miljöer kan varje optimerad kilowattimme multipliceras över volymer, byggnader och dygn.  

  

För de flesta företag innebär det att AI-baserad energistyrning betalar tillbaka sig själv under första året.  



## AI och riskminimering  
  

Högförbrukande verksamheter har en gemensam risk.  

  

Små avvikelser i energianvändningen blir snabbt stora kostnadsposter.  

  

AI minimerar dessa risker genom att upptäcka avvikelser i förväg.  

  

Det kan gälla allt från felinställda kylsystem till belysning som står på under nattdrift.  

  

Istället för att upptäcka problemet i efterhand agerar systemet direkt.  

  

Det är diskret, tyst och kontinuerligt.  

  

Och det skyddar bolagets kapital från onödig förbrukning.  



## Hur AI skapar kostnadssänkningar i praktiken  
  

Energibesparingar sker genom en kombination av flera mekanismer.  

  

### Effektoptimering  
  

AI kan jämna ut energitoppar.  

  

Det kan bland annat ske genom att:  
• flytta laster till billigare timmar  
• styra värme och ventilation efter faktisk närvaro  
• balansera energikrävande maskiner så att de inte körs samtidigt  

  

Detta påverkar effekttariffen direkt och är ofta den enskilt största besparingen.  



### Automatiserad nattoptimering  
  

Företag lämnar ofta fastigheter och anläggningar delvis aktiva nattetid.  

  

AI ser till att nattförbrukningen faller till den lägsta nivå som verksamheten tillåter.  

  

Det sker utan att personal behöver göra något manuellt.  



### Finjustering av mikroprocesser  
  

I produktion och logistik finns hundratals små energikällor.  

  

Varje justering är liten, men i skala blir det betydande.  

  

AI identifierar dessa mikroavvikelser och korrigerar dem automatiskt.  

  

Det är ett arbete som människor inte kan göra i samma hastighet eller precision.  



### Optimering efter väder och marknad  
  

AI kan koppla ihop driftmönster med väderprognoser och elprisprognoser.  

  

Systemet sparar energi när priserna är höga och optimerar produktion vid gynnsamma förhållanden.  

  

Det är som att ha en kontinuerlig energistrateg som arbetar dygnet runt.  



## Diskret och förutsägbart för ledning och ägare  
  

För investerare och Family Offices är transparens centralt.  

  

AI-baserad energistyrning kan presentera exakta rapporter över besparingarna:  
• dag för dag  
• anläggning för anläggning  
• system för system  

  

Det är mätbart.  

  

Det är verifierbart.  

  

Och det ger beslutsunderlag med en tydlighet som tidigare saknats.  



## Ingen störning i den dagliga driften  
  

En vanlig oro gäller påverkan på den operativa verksamheten.  

  

Men moderna AI-lösningar arbetar parallellt, inte i vägen.  

  

Systemen integreras i befintliga fastighetssystem och styr funktioner som redan finns.  

  

Det innebär ingen ombyggnation, ingen driftstörning och ingen risk för personalens arbetsflöden.  

  

Resultatet blir snarare en tystare och mer harmoniserad drift.  



## Ett verktyg för långsiktigt ansvarstagande  
  

AI-automation ligger helt i linje med ett långsiktigt, konservativt ägarperspektiv.  

  

Det stärker tre centrala pelare för ett stabilt bolagsbygge.  

  

### Kapitalbevarande  
Lägre elkostnader förbättrar direkt kassaflödet och reducerar risk.  



### Förutsägbar drift  
Verksamheten blir mindre känslig för prisvariationer och tekniska avvikelser.  



### Hållbarhet  
Optimerad energianvändning sänker klimatpåverkan utan att kräva nya investeringar i hårdvara.  



## Från energi som kostnad till energi som styrbar resurs  
  

Energieffektivisering har länge setts som en reaktiv process.  

  

AI gör den proaktiv.  

  

Det skapar en ny syn på energi.  

  

Det blir en styrbar resurs istället för en oförutsägbar utgift.  

  

Den som kontrollerar sina energidata kontrollerar också sina framtida kostnader.  



## Varför detta är relevant just nu  
  

Det finns tre skäl till att AI och energieffektivisering är mer aktuellt än någonsin.  

  

### Prisvolatilitet  
Elmarknaden är mer rörlig än tidigare, och företag som inte optimerar riskerar att betala dubbelt.  



### Automatiseringens mognad  
Tekniken är mogen, stabil och mogen att implementeras i reala miljöer.  



### Konkurrensfördel  
Bolag som tidigt implementerar AI för energistyrning får strukturellt lägre kostnader än konkurrenterna.  



## Implementering utan friktion  
  

Implementeringen sker steg för steg.  

  

• Först görs en energikartläggning.  
• Därefter kopplas AI-systemet till befintliga styrsystem.  
• Sedan testas optimeringen i lågintensiva miljöer.  
• Slutligen automatiseras hela driften.  

  

Det sker utan att verksamheten pausas eller belastas.  

  

Det är diskret.  

  

Det är metodiskt.  

  

Det är designat för företag som föredrar långsiktig stabilitet framför kortsiktiga experiment.  



## Sammanfattning  
  

AI-automation är inte en trend, det är nästa steg i hur företag styr sina kostnader.  

  

Det ger en kombination av kontroll, stabilitet och effektivitet som tidigare inte varit möjlig.  

  

För organisationer som prioriterar kapitalbevarande, låg risk och långsiktigt ägande är detta ett naturligt strategiskt verktyg.  

  

Att sänka företagets elkostnader är inte längre en fråga om manuella rutiner.  

  

Det är en fråga om intelligens, precision och automation.  

  

Det är en del av modernt ägarskap.  

  

Det är en del av framtidens energistrategi.  



## Contact for stewardship discussion`,"automation-for-swedish-consulting-firms":`A strategic guide to OpenClaw for consultants in Sweden



## Introduction  
Swedish konsultbyråer står inför en strukturell förändring.  

Automation förändrar inte bara hur konsulter arbetar.  

Den förändrar vad en konsultbyrå är.  

OpenClaw representerar nästa skikt: agentisk automation, kontinuerliga AI pipelines och autonom hantering av kundprocesser.



## Varför automation nu  
Traditionella konsultmodeller skalar linjärt.  

Intäkter är direkt bundna till timmar, personer och leveranskapacitet.  

När kundernas förväntningar ökar och projektens komplexitet accelererar, uppstår ett mellanrum som mänsklig arbetskraft inte längre täcker.  

Automation stänger gapet.  

OpenClaw möjliggör skalbar rådgivning där konsulter bygger system som arbetar dygnet runt.  

Detta är grunden till en ny modell för svenska konsultbyråer:  
automation first, analyst second.



## Vad OpenClaw betyder för en konsultbyrå  
OpenClaw är inte ett verktyg.  

Det är en infrastruktur.  

Den kombinerar agentiska flöden, datastreaming, arbetsflödesautomatisering och policybaserad styrning av AI.  

För en svensk konsultbyrå innebär det tre saker:

  
1. Repetitiva leveranser neutraliseras  
   Analytiska rapporter, marknadsanalys, processkartläggning, due diligence, kravinsamling, allt kan automatiseras.  

   
2. Konsulter skapar maskiner som levererar  
   Istället för att producera powerpoint och pdf, bygger konsulter automatiserade pipelines som kontinuerligt analyserar, skriver, sammanfattar och beräknar.  

   
3. Skalbarhet utan personalexpansion  
   OpenClaw gör att samma team kan hantera 5, 10 eller 50 gånger fler kunder med samma kvalitet.  



## Kärnfunktioner i OpenClaw som direkt gynnar konsulter i Sverige  

### 1. Agentiska arbetsflöden  
OpenClaw ger konsulter möjlighet att bygga kedjor av autonoma agenter.  

Varje agent är specialiserad: datahämtare, analysmotor, skrivagent, valideringsagent, policygranskare.  

Agenterna samarbetar i realtid.  

Detta gör att en process som normalt kräver fyra personer kan köras helt automatiskt, dygnet runt.  



### 2. Integrerade svenska dataströmmar  
OpenClaw kopplar till svenska APIer och datakällor:  
SCB, Bolagsverket, Skatteverket, kommunala öppna data, offentliga upphandlingar, branschportaler.  

Konsulter kan skapa pipelines som kontinuerligt hämtar, analyserar och rapporterar.  

Detta gör att leveranser baseras på levande data, inte statiska dokument.  



### 3. Policykontroller som matchar svenska compliancekrav  
Sveriges lagrum kräver hantering av GDPR, dataskydd, offentlighet och sekretess, exportkontroll, upphandlingslagstiftning.  

OpenClaw använder policyagenter och regelmotorer som säkerställer att varje AI genererar endast tillåtet innehåll.  

Det skapar trygghet för både byrå och kund.  



### 4. Autonom leveransautomatisering  
OpenClaw kan skriva rapporter, generera dashboards, skicka kunduppdateringar, skapa beslutsunderlag och publicera material.  

Detta sker enligt scheman eller triggers, till exempel:  
ändring i ekonomiska nyckeltal, ändring i marknadsdata, nya lagförslag, supply chain-störningar.  



### 5. Konsultintelligens kapslad i agentsystem  
Det som normalt sitter i en senior konsults huvud kan paketeras till agenter.  

Metodiker, modeller, analysramverk och heuristiker blir kodade agentflöden.  

Detta gör kunskap repeterbar och extremt skalbar.



## Hur svenska konsultbyråer använder OpenClaw i praktiken  

### Managementkonsulter  
*Automatiserad marknadsanalys*  
*Kontinuerliga konkurrensbevakningsflöden*  
*Automatiserade strategidokument baserade på realtidsdata*  

Managementkonsulter ersätter veckors arbete med pipelines som körs på timmar.  



### IT- och techkonsulter  
*Systemkartläggning*  
*Processanalys*  
*Testautomatisering*  
*Dokumentationsautomatisering*  

Techkonsulter får en multiagent-arkitektur som fungerar som en autonom systemanalytiker.  



### Juridiknära konsulter  
*Lagspårning*  
*Regelverksanalys*  
*Policyuppdateringar*  

OpenClaw gör det möjligt att skapa compliance-agenter som följer förändringar i svenska och europeiska regelverk.  



### Ekonomikonsulter  
*Finansiell analys med streamingdata*  
*Bolagsanalyser*  
*Automatiserad rapportproduktion*  

Genom automatisering kan ekonomikonsulter leverera dagliga insikter istället för månadsrapporter.  



### HR- och organisationskonsulter  
*Automatiserad kompetenskartläggning*  
*Analys av medarbetarundersökningar*  
*Policygenerering*  

Agenter kan analysera text, siffror och feedback långt mer omfattande än manuella processer tillåter.  



## Arkitekturen bakom OpenClaw  
För att förstå varför OpenClaw fungerar så kraftfullt för konsultbyråer måste arkitekturen brytas ned i fyra skikt.



### Skikt 1. Input management  
OpenClaw organiserar alla datakällor i strukturerade streams.  

APIer, filer, databaser, CRM, ERP, projektverktyg.  

Detta gör att automation alltid arbetar med aktuell data.  



### Skikt 2. Agentlagret  
Agentlagret består av tre typer:

  
1. Utförandeagenter  
   De analyserar, skriver, beräknar och organiserar.  

  
2. Kontrollagenter  
   De granskar, validerar och godkänner.  

  
3. Policyagenter  
   De ser till att allt följer regler och interna processer.  



### Skikt 3. Orkestreringsmotorn  
Orkestreringen låter konsulter bygga arbetsflöden som:  
startar på triggers, kör parallella agenter, loggar resultat, kvalitetssäkrar och publicerar.  

Detta är konsultbyråns hjärna.  



### Skikt 4. Leveranslagret  
Dashboards, rapporter, dokument och API-svar genereras automatiskt.  

Kunden får leveranser utan manuell handpåläggning.  



## Game changer: Konsultpipeline som produkt  
OpenClaw gör att svenska konsultbyråer kan sälja något nytt.  

Inte timmar.  

Inte rapporter.  

Utan löpande pipelines som kontinuerligt levererar värde.  

Exempel:

  
*Marknadsanalys som tjänst med realtidsuppdateringar*  
*GDPR-bevakning som abonnemang*  
*Riskanalys som kontinuerlig ström*  
*Teknisk dokumentation som självuppdaterar*  



Detta är återkommande intäkter med extremt hög marginal.  



## Hur en svensk konsultbyrå implementerar OpenClaw i praktiken  
Processen sker i fem steg.



### Steg 1. Kartläggning av konsultintelligens  
Byrån identifierar vad seniora konsulter gör bäst.  

Det kodas till agenter, regler och beslutsmodeller.  



### Steg 2. Översättning till agentflöden  
Konsultens arbetsmetodik bryts ned i steg och mappas till OpenClaw-flöden.  

Insamling, analys, sammanställning, validering, leverans.  



### Steg 3. Datakopplingar  
Alla relevanta datakällor kopplas in.  

Ju fler streams, desto smartare blir automationspipeline.  



### Steg 4. Testkörning och kalibrering  
Agenter tränas att följa byråns ton, metodik och kvalitet.  

Valideringslogik justeras tills leveranserna matchar seniornivå.  



### Steg 5. Skalning till flera kunder  
När pipeline fungerar rullas den ut till hela kundportföljen.  

En konsult kan hantera tiodubbelt flera kunder utan arbetsbelastning.



## Varför just svenska konsultbyråer vinner mest på OpenClaw  
Tre strukturella skäl ger Sverige en första-mover-fördel.



### 1. Hög digital mognad  
Sverige har redan en kultur av digitalisering, öppna data och teknisk kompetens.  
Det gör implementation enkel och snabb.  



### 2. Små team, högt värde  
Svenska konsultbyråer är ofta kompakta.  
Automation ger oproportionerligt stora effekter.  



### 3. Kundernas krav på datadriven leverans  
Svenska kunder förväntar sig snabbhet, transparens och kvalitet.  
OpenClaw levererar detta automatiskt.



## Automationsstrategier specifikt för svenska konsultbyråer  

### Modell 1. Full pipeline automation  
Byrån tar en hel tjänst och gör den helt automatisk.  
Konsulten blir arkitekt för en digital produkt.  



### Modell 2. Hybridmodellen  
OpenClaw gör allt förarbete.  
Konsulten gör bedömning och beslutsunderlag.  
Perfekt för management, juridik och komplexa uppdrag.  



### Modell 3. Internal ops automation  
Byrån automatiserar interna processer som:  
offertproduktion, resursplanering, mötesloggar, sammanfattningar, research.  



### Modell 4. Kundspecifika agenter  
En agent per kund.  
Personaliserad analys i realtid.  
Detta ökar kundlojalitet och skapar låsta ekosystem.  



## Mognadsnivåer för konsultautomation  
Det finns fyra nivåer.



### Nivå 1. Manuell produktion  
Konsulter gör allt själva.  
Långsamt, dyrt, oflexibelt.  



### Nivå 2. Verktygsbaserad produktivitet  
Konsulter använder AI-verktyg men saknar automatisering.  
Snabbare men fortfarande personberoende.  



### Nivå 3. Automatiserade agentpipelines  
OpenClaw driver majoriteten av analys och produktion.  
Konsulter fungerar som orakel och domare.  



### Nivå 4. Agentic consulting  
Hela byrån är en levande maskin.  
Konsulter bygger och underhåller autonoma system.  
Detta är framtidens konsultmodell.



## Ny affärslogik  
OpenClaw skapar tre intäktsströmmar.

  
1. Abonnemang på automatiserade pipelines  
2. Premiumrådgivning kopplad till automation  
3. Intern effektivisering som höjer marginalerna dramatiskt  



Detta är den mest skalbara modellen som funnits i konsultbranschen.  



## Praktiska exempel från svensk konsultverklighet  

### Case 1. Offentlig sektor-konsult  
Byrån bygger en pipeline som övervakar alla kommunala beslut, lagförslag och upphandlingar.  
Analysen sker varje dag.  
Kunden får notifieringar med färdiga sammanfattningar.  



### Case 2. Strategikonsult  
OpenClaw analyserar hela branschen och genererar kontinuerliga rapporter.  
Konsulten lägger sin tid på strategisk tolkning.  



### Case 3. Teknikkonsult  
Systemkartläggning görs autonomt.  
Agenten analyserar loggar, arkitektur och dokumentation.  



### Case 4. HR-konsult  
Automatisk analys av medarbetardata skapar realtidsinsikter.  



## Framtiden för konsultbranschen i Sverige  
Automation är inte ett hot.  

Det är slutet på lågvärdigt arbete och början på en ny roll: konsulten som arkitekt för digitala intelligenta system.  

OpenClaw gör detta möjligt nu, inte senare.  

Svenska konsultbyråer som implementerar agentik kommer dominera sina nischer.  



## Avslutning  
För svenska konsultbyråer är automation inte ett val.  
Det är en strukturell nödvändighet.  

OpenClaw erbjuder en väg in i en ny era där byråer skapar, driver och säljer autonoma pipelines.  

Det är här nästa generation av konsultverksamhet föds.  



Inquire about agentic infrastructure`,"framtiden-för-ai-i-svensk-tillverkningsindustri":`
AI tillverkning Sverige har länge betraktats som ett tekniskt språng som tillhör världens mest avancerade industrinationer. Men svensk tillverkningsindustri befinner sig nu i en punkt där frågan inte längre är om tekniken ska införas, utan hur snabbt och hur strategiskt den kan integreras för att skapa uthållig konkurrenskraft.

Den här texten fokuserar på realiteterna, inte visionerna. Industrin förändras inte av vaga framtidsbilder, utan av kapitalallokering, robusta datagrunder och en organisationsstruktur som tål att man skruvar i den. I praktiken handlar det om att balansera affärslogik, risk, kultur och teknikinvesteringar, särskilt i ett svenskt marknadsklimat där marginaler pressas och avkastningskraven blir allt hårdare.

Här följer en genomlysning av hur industri 4.0 AI och modern automation kommer att omforma branschen, och hur företag som vill effektivisera fabrik AI behöver tänka för att skapa bestående värde snarare än kosmetiska pilotprojekt.



  
## Varför AI blir en strukturell faktor i svensk tillverkningsindustri

Den svenska industrin har ett historiskt rykte om att vara både teknikorienterad och försiktig på ett metodiskt sätt. Investeringar görs inte impulsivt, utan med tydliga avkastningskrav. Därför har AI fått ta längre tid här än i många andra länder.

Men två förändringar har gjort den gamla försiktigheten ohållbar.

  
För det första ökar kompetensbristen. Företag från Småland till Norrbotten rapporterar om svårigheter att hitta både tekniker och operatörer. Automatisering används inte längre för att ersätta personal, utan för att täcka luckor som inte går att fylla.

  
För det andra förändras kundernas krav, särskilt i globala försörjningskedjor. Transparens, kvalitet, leveransprecision och klimatdata måste kunna redovisas utan manuell administration. Det är nästintill omöjligt utan AI‑stöd.

  
Resultatet är att AI inte längre är en option, utan en strukturell del av industrins affärslogik, jämförbar med hur robotiseringen förändrade fabriker under 90‑ och 00‑talet.



  
## De tre viktigaste drivkrafterna bakom AI i tillverkning

### 1. Kostnadseffektivitet och processtyrning

Att effektivisera fabrik AI handlar inte om att plocka bort människor. Det handlar om att ta bort fel, förseningar och slitage på utrustning. Många företag sitter fortfarande med loggar i Excel och operatörsanteckningar som ingen läser om ingen har tid.

AI löser inte allting, men det ger en mer konsekvent och datadriven styrning av produktionslinjen.

  
Det innebär exempelvis:

  
• Förutsägbarhet kring maskinhaverier med prediktiv analys  
• Optimerad schemaläggning för att balansera kapacitet och flaskhalsar  
• Färre kvalitetsavvikelser genom automatiserad övervakning  
• Minskad energiåtgång genom AI‑analys av produktionscykler

  
Det här är inte futurism. Det är redan möjligt. Frågan är om man har datagrund, processdisciplin och ledningsförankring för att implementera det.



  
### 2. Nya krav från globala kunder

Svensk industri är ofta underleverantör till internationella aktörer som väntar sig datainsamling och kvalitetsspårning i realtid. Det räcker inte att producera bra. Man måste kunna bevisa det.

  
Här spelar AI en central roll.

  
Den gör det möjligt att skapa automatiserad spårbarhet, kvalitetssäkring på komponentnivå och en tydlighet som tidigare endast fanns i stora koncerner med egna IT‑avdelningar. Nu kan även mellanstora bolag leverera på den nivån.



  
### 3. Skiftet mot industri 4.0 AI och digitala fabriker

Digitalisering som inte omsätts i faktisk produktionslogik är värdelös. Industri 4.0 AI innebär att data inte längre ligger i stuprör utan kopplas samman, analyseras och används för att styra verksamheten.

  
Det betyder:

  
• Integrerad planering mellan inköp, produktion och logistik  
• Realtidsvisualisering av fabriksdata  
• Automatiserat beslutsstöd  
• Ökad flexibilitet i orderstyrd produktion  
• Snabbare omställning vid förändringar i efterfrågan

  
Om robotiseringen gjorde produktionslinjer starkare, gör AI dem smartare.



  
## Den svenska situationen: möjligheter och risker

### Branschens största utmaning är inte tekniken

Det är kulturen, informationsstrukturen och ägarviljan.

  
Svenska tillverkningsföretag, särskilt de i mellanskiktet, arbetar ofta med en konservativ kapitalstruktur. Investeringar i AI konkurrerar med maskinköp, expansionsplaner, hållbarhetsprojekt och ibland även förvärv.

  
Det gör att AI‑projekt granskas hårdare än maskiner som kostar lika mycket men sällan ifrågasätts.

  
Ägare vill se bevis innan de investerar, men bevisen kommer inte utan att man redan investerat.

  
Denna cirkel måste brytas genom att arbeta stegvis, med tydligt begränsade projekt, mätbara resultat och en struktur för hur värde realiseras i varje fas.



  
### Betydelsen av datadisciplin

AI i tillverkningsmiljö fungerar bara när den får bra data.

  
Många fabriker har sensorer, loggar, historik och system, men data är fragmenterad och svåråtkomlig. Bara att skapa en solid dataplattform kan ta månader. Det är inte glamoröst, men det är nödvändigt.

  
Det är också orsaken till att många AI‑projekt faller. Organisationen vill ha de smarta algoritmerna, men saknar fundamentet.



  
### Kompetensgapet i mellanskiktet

Små företag saknar ofta IT, stora företag har ofta egna digitaliseringsavdelningar.

  
Mellanskiktsbolagen hamnar i mitten. De har komplexa fabriker, men saknar resurser för att driva avancerade AI‑program på egen hand.

  
Det är här externa partnerskap blir avgörande. Inte för att outsourca allt, utan för att accelerera införandet och bygga intern kompetens parallellt.



  
## M&A och AI: hur värderingar förändras

I det svenska mellanskiktet, särskilt inom tillverkning, håller AI på att bli en faktor som direkt påverkar värderingar vid förvärv.

  
Det gäller både köpare och säljare:

  
• Köpare värderar företag högre när processer är datadrivna och skalbara  
• Säljare som kan påvisa AI‑baserade effektiviseringar får bättre multiplar  
• Riskpremier minskar när data är strukturerad och tillgänglig  
• Carve‑outs blir enklare när informationsstrukturen är tydligt definierad

  
Detta är samma logik som länge gällt i nordamerikanskt mid‑market M&A, men börjar nu slå igenom även i Sverige.

  
AI gör inte ett dåligt bolag bra, men det gör ett effektivt bolag mer förutsägbart och därmed mer värt.



  
## Vad en AI‑driven fabrik faktiskt gör annorlunda

En fabrik som byggt in AI i sin operationella kärna gör tre saker bättre än sina konkurrenter.

  
### 1. Den jobbar med stopp, avvikelser och kvalitetsproblem innan de händer

Prediktiva analyser är inte en gissning. De bygger på historiska mönster som människan inte upptäcker själv.

  
Det leder till färre oförutsedda driftstopp och mer konsekvent kvalitet.



  
### 2. Den förstår hur små justeringar påverkar helheten

I många fabriker sitter kunskapen i medarbetarnas huvuden.

  
AI gör den synlig, delbar och skalbar. Det gör företaget mindre sårbart för personalomsättning och mer konsekvent i produktionen.



  
### 3. Den förkortar beslutsvägarna

Beslutsfattare behöver inte längre vänta på sammanställningar, rapporter och möten.

  
De kan agera på realtidsdata som dessutom är kvalitetssäkrad av AI.

  
Det skapar snabbare, bättre och mer ekonomiska beslut.



  
## Vanliga fallgropar vid AI‑införande i svensk industri

Det finns ett antal återkommande problem som gång på gång bromsar projekten.

  
• Otydligt ägarskap  
• För stora projekt utan tydlig avgränsning  
• Fokus på teknik istället för affärsvärde  
• Avsaknad av datarenhetlighet  
• Undervärdering av förändringsledning  
• Övertro på att systemet ska lösa problemen på egen hand

  
De företag som lyckas är de som bygger små, mätbara steg som kan skalas när resultaten bekräftas.



  
## Vägen framåt: hur svenska tillverkare bör agera nu

### Tänk i tre horisonter

1. Stabilisera datagrunden  
2. Automatisera övervakning och beslutsstöd  
3. Integrera AI i hela försörjningskedjan

  
Det är först när horisont tre är på plats som industri 4.0 AI når full effekt, men man måste börja i rätt ände.



  
### Bygg förmågan stegvis

Det finns ingen anledning att försöka digitalisera en hel fabrik i ett enda projekt.

  
Små, mätbara förbättringar ger snabbare ROI och bygger samtidigt intern kapacitet.



  
### Fokusera på ROI från första dagen

AI ska inte införas för att skapa innovation på papperet.

  
Det ska skapa mätbara ekonomiska effekter, helst inom 3 till 12 månader.



  
## Sammanfattning

Framtiden för AI i svensk tillverkningsindustri är inte visionär. Den är konkret. Den handlar om kapacitet, marginaler och strukturell konkurrenskraft.

Det handlar om att integrera AI där den gör skillnad, inte där den ser bra ut.

De företag som lyckas är de som arbetar systematiskt med data, bygger kompetens och kopplar varje investering till tydligt affärsvärde.

AI tillverkning Sverige är på väg in i en fas där de tidiga vinnarna kommer att definiera branschens standarder.

De som väntar riskerar att hamna i en position där de inte längre konkurrerar på samma spelplan.



  
Book a strategic consultation`},x=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),S=o(((e,t)=>{t.exports=x()}))(),C={"vad-ar-en-ai-agent":`Att förstå vad en AI-agent är kan kännas svårt om man inte arbetar med teknik till vardags. Samtidigt börjar begreppet dyka upp överallt: i tidningar, på konferenser och i samtal på jobbet. Många svenska företag testar nu autonom AI, och intresset växer snabbt.

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