webpackJsonp([0],[function(e,t){e.exports=ReactRouter},function(e,t){e.exports=React},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(17)()},function(e,t,n){"use strict";var o=function(){};e.exports=o},function(e,t,n){"use strict";t.__esModule=!0;var o=(t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e},t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)});t.stripBasename=function(e,t){return o(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===o?"":o}},t.createPath=function(e){var t=e.pathname,n=e.search,o=e.hash,r=t||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}},function(e,t,n){"use strict";var o=function(e,t,n,o,r,a,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,a,i,u],l=0;c=new Error(t.replace(/%s/g,function(){return s[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(22),i=o(a),u=n(23),c=o(u),s=n(4);t.createLocation=function(e,t,n,o){var a=void 0;"string"==typeof e?(a=(0,s.parsePath)(e),a.state=t):(a=r({},e),void 0===a.pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,i.default)(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,c.default)(e.state,t.state)}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(3),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){var e=null,t=function(t){return(0,r.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},n=function(t,n,o,a){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof o?o(i,a):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),a(!0)):a(!1!==i)}else a(!0)},o=[];return{setPrompt:t,confirmTransitionTo:n,appendListener:function(e){var t=!0,n=function(){t&&e.apply(void 0,arguments)};return o.push(n),function(){t=!1,o=o.filter(function(e){return e!==n})}},notifyListeners:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o.forEach(function(e){return e.apply(void 0,t)})}}};t.default=a},function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),l=o(s),f=n(2),d=o(f),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var n,o,r;a(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=o=i(this,e.call.apply(e,[this].concat(c))),o.handleClick=function(e){if(o.props.onClick&&o.props.onClick(e),!e.defaultPrevented&&0===e.button&&!o.props.target&&!h(e)){e.preventDefault();var t=o.context.router.history,n=o.props,r=n.replace,a=n.to;r?t.replace(a):t.push(a)}},r=n,i(o,r)}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=r(e,["replace","to"]),o=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return l.default.createElement("a",p({},n,{onClick:this.handleClick,href:o}))},t}(l.default.Component);y.propTypes={onClick:d.default.func,target:d.default.string,replace:d.default.bool,to:d.default.oneOfType([d.default.string,d.default.object]).isRequired},y.defaultProps={replace:!1},y.contextTypes={router:d.default.shape({history:d.default.shape({push:d.default.func.isRequired,replace:d.default.func.isRequired,createHref:d.default.func.isRequired}).isRequired}).isRequired},t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=o(r),i=n(11),u=o(i),c=n(12),s=(o(c),n(13)),l=(o(s),n(14)),f=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(l),n(15)),d=n(36),p=o(d),h=n(40),y=o(h),m=a.default.createClass({displayName:"App",render:function(){return a.default.createElement("div",{className:y.default.container},this.props.children)}}),v=a.default.createClass({displayName:"About",render:function(){return a.default.createElement("h3",null,"About")}});a.default.createClass({displayName:"Admin",render:function(){return a.default.createElement("h3",null,"admin")}});u.default.render(a.default.createElement(f.BrowserRouter,null,a.default.createElement(m,null,a.default.createElement(f.Route,{exact:!0,path:"/",component:p.default}," "),a.default.createElement(f.Route,{path:"/teacher",component:p.default}," "),a.default.createElement(f.Route,{path:"/admin",component:v}," "))),document.getElementById("app"))},function(e,t){e.exports=ReactDOM},function(e,t){e.exports={colors:"_2l4dxDbyBfv45iWkT-0nrw"}},function(e,t){e.exports={color:"_3oZB8hRTFYz5d4ujr3OdYE"}},function(e,t,n){"use strict";function o(e,t){console.log("fantasitic")}Object.defineProperty(t,"__esModule",{value:!0}),t.add=o;t.nob=3},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.withRouter=t.matchPath=t.Switch=t.StaticRouter=t.Router=t.Route=t.Redirect=t.Prompt=t.NavLink=t.MemoryRouter=t.Link=t.HashRouter=t.BrowserRouter=void 0;var r=n(16),a=o(r),i=n(24),u=o(i),c=n(9),s=o(c),l=n(26),f=o(l),d=n(27),p=o(d),h=n(28),y=o(h),m=n(29),v=o(m),b=n(30),g=o(b),w=n(31),O=o(w),_=n(32),P=o(_),S=n(33),E=o(S),j=n(34),R=o(j),x=n(35),T=o(x);t.BrowserRouter=a.default,t.HashRouter=u.default,t.Link=s.default,t.MemoryRouter=f.default,t.NavLink=p.default,t.Prompt=y.default,t.Redirect=v.default,t.Route=g.default,t.Router=O.default,t.StaticRouter=P.default,t.Switch=E.default,t.matchPath=R.default,t.withRouter=T.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),s=o(c),l=n(2),f=o(l),d=n(21),p=o(d),h=n(0),y=function(e){function t(){var n,o,i;r(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=o=a(this,e.call.apply(e,[this].concat(c))),o.history=(0,p.default)(o.props),i=n,a(o,i)}return i(t,e),t.prototype.render=function(){return s.default.createElement(h.Router,{history:this.history,children:this.props.children})},t}(s.default.Component);y.propTypes={basename:f.default.string,forceRefresh:f.default.bool,getUserConfirmation:f.default.func,keyLength:f.default.number,children:f.default.node},t.default=y},function(e,t,n){"use strict";var o=n(18),r=n(19),a=n(20);e.exports=function(){function e(e,t,n,o,i,u){u!==a&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function o(e,t,n,o,a,i,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,u,c],f=0;s=new Error(t.replace(/%s/g,function(){return l[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};e.exports=o},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0;var a="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(3),c=o(u),s=n(5),l=o(s),f=n(6),d=n(4),p=n(7),h=o(p),y=n(8),m=function(){try{return window.history.state||{}}catch(e){return{}}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l.default)(y.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,y.supportsHistory)(),o=!(0,y.supportsPopStateOnHashChange)(),r=e.forceRefresh,u=void 0!==r&&r,s=e.getUserConfirmation,p=void 0===s?y.getConfirmation:s,v=e.keyLength,b=void 0===v?6:v,g=e.basename?(0,d.stripTrailingSlash)((0,d.addLeadingSlash)(e.basename)):"",w=function(e){var t=e||{},n=t.key,o=t.state,r=window.location,a=r.pathname,i=r.search,u=r.hash,s=a+i+u;return(0,c.default)(!g||(0,d.hasBasename)(s,g),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+g+'".'),g&&(s=(0,d.stripBasename)(s,g)),(0,f.createLocation)(s,o,n)},O=function(){return Math.random().toString(36).substr(2,b)},_=(0,h.default)(),P=function(e){i(F,e),F.length=t.length,_.notifyListeners(F.location,F.action)},S=function(e){(0,y.isExtraneousPopstateEvent)(e)||R(w(e.state))},E=function(){R(w(m()))},j=!1,R=function(e){if(j)j=!1,P();else{_.confirmTransitionTo(e,"POP",p,function(t){t?P({action:"POP",location:e}):x(e)})}},x=function(e){var t=F.location,n=L.indexOf(t.key);-1===n&&(n=0);var o=L.indexOf(e.key);-1===o&&(o=0);var r=n-o;r&&(j=!0,A(r))},T=w(m()),L=[T.key],k=function(e){return g+(0,d.createPath)(e)},M=function(e,o){(0,c.default)(!("object"===(void 0===e?"undefined":a(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=(0,f.createLocation)(e,o,O(),F.location);_.confirmTransitionTo(r,"PUSH",p,function(e){if(e){var o=k(r),a=r.key,i=r.state;if(n)if(t.pushState({key:a,state:i},null,o),u)window.location.href=o;else{var s=L.indexOf(F.location.key),l=L.slice(0,-1===s?0:s+1);l.push(r.key),L=l,P({action:"PUSH",location:r})}else(0,c.default)(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},C=function(e,o){(0,c.default)(!("object"===(void 0===e?"undefined":a(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=(0,f.createLocation)(e,o,O(),F.location);_.confirmTransitionTo(r,"REPLACE",p,function(e){if(e){var o=k(r),a=r.key,i=r.state;if(n)if(t.replaceState({key:a,state:i},null,o),u)window.location.replace(o);else{var s=L.indexOf(F.location.key);-1!==s&&(L[s]=r.key),P({action:"REPLACE",location:r})}else(0,c.default)(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},A=function(e){t.go(e)},N=function(){return A(-1)},H=function(){return A(1)},D=0,B=function(e){D+=e,1===D?((0,y.addEventListener)(window,"popstate",S),o&&(0,y.addEventListener)(window,"hashchange",E)):0===D&&((0,y.removeEventListener)(window,"popstate",S),o&&(0,y.removeEventListener)(window,"hashchange",E))},U=!1,I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=_.setPrompt(e);return U||(B(1),U=!0),function(){return U&&(U=!1,B(-1)),t()}},q=function(e){var t=_.appendListener(e);return B(1),function(){B(-1),t()}},F={length:t.length,action:"POP",location:T,createHref:k,push:M,replace:C,go:A,goBack:N,goForward:H,block:I,listen:q};return F};t.default=v},function(e,t,n){"use strict";var o=function(e){return"/"===e.charAt(0)},r=function(e,t){for(var n=t,o=n+1,r=e.length;o<r;n+=1,o+=1)e[n]=e[o];e.pop()},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],a=t&&t.split("/")||[],i=e&&o(e),u=t&&o(t),c=i||u;if(e&&o(e)?a=n:n.length&&(a.pop(),a=a.concat(n)),!a.length)return"/";var s=void 0;if(a.length){var l=a[a.length-1];s="."===l||".."===l||""===l}else s=!1;for(var f=0,d=a.length;d>=0;d--){var p=a[d];"."===p?r(a,d):".."===p?(r(a,d),f++):f&&(r(a,d),f--)}if(!c)for(;f--;f)a.unshift("..");!c||""===a[0]||a[0]&&o(a[0])||a.unshift("");var h=a.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h};e.exports=a},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},a=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,o){return e(t,n[o])});var o=void 0===t?"undefined":r(t);if(o!==(void 0===n?"undefined":r(n)))return!1;if("object"===o){var a=t.valueOf(),i=n.valueOf();if(a!==t||i!==n)return e(a,i);var u=Object.keys(t),c=Object.keys(n);return u.length===c.length&&u.every(function(o){return e(t[o],n[o])})}return!1};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),s=o(c),l=n(2),f=o(l),d=n(25),p=o(d),h=n(0),y=function(e){function t(){var n,o,i;r(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=o=a(this,e.call.apply(e,[this].concat(c))),o.history=(0,p.default)(o.props),i=n,a(o,i)}return i(t,e),t.prototype.render=function(){return s.default.createElement(h.Router,{history:this.history,children:this.props.children})},t}(s.default.Component);y.propTypes={basename:f.default.string,getUserConfirmation:f.default.func,hashType:f.default.oneOf(["hashbang","noslash","slash"]),children:f.default.node},t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(3),i=o(a),u=n(5),c=o(u),s=n(6),l=n(4),f=n(7),d=o(f),p=n(8),h={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+(0,l.stripLeadingSlash)(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:l.stripLeadingSlash,decodePath:l.addLeadingSlash},slash:{encodePath:l.addLeadingSlash,decodePath:l.addLeadingSlash}},y=function(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},m=function(e){return window.location.hash=e},v=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c.default)(p.canUseDOM,"Hash history needs a DOM");var t=window.history,n=(0,p.supportsGoWithoutReloadUsingHash)(),o=e.getUserConfirmation,a=void 0===o?p.getConfirmation:o,u=e.hashType,f=void 0===u?"slash":u,b=e.basename?(0,l.stripTrailingSlash)((0,l.addLeadingSlash)(e.basename)):"",g=h[f],w=g.encodePath,O=g.decodePath,_=function(){var e=O(y());return(0,i.default)(!b||(0,l.hasBasename)(e,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+b+'".'),b&&(e=(0,l.stripBasename)(e,b)),(0,s.createLocation)(e)},P=(0,d.default)(),S=function(e){r(G,e),G.length=t.length,P.notifyListeners(G.location,G.action)},E=!1,j=null,R=function(){var e=y(),t=w(e);if(e!==t)v(t);else{var n=_(),o=G.location;if(!E&&(0,s.locationsAreEqual)(o,n))return;if(j===(0,l.createPath)(n))return;j=null,x(n)}},x=function(e){if(E)E=!1,S();else{P.confirmTransitionTo(e,"POP",a,function(t){t?S({action:"POP",location:e}):T(e)})}},T=function(e){var t=G.location,n=C.lastIndexOf((0,l.createPath)(t));-1===n&&(n=0);var o=C.lastIndexOf((0,l.createPath)(e));-1===o&&(o=0);var r=n-o;r&&(E=!0,D(r))},L=y(),k=w(L);L!==k&&v(k);var M=_(),C=[(0,l.createPath)(M)],A=function(e){return"#"+w(b+(0,l.createPath)(e))},N=function(e,t){(0,i.default)(void 0===t,"Hash history cannot push state; it is ignored");var n=(0,s.createLocation)(e,void 0,void 0,G.location);P.confirmTransitionTo(n,"PUSH",a,function(e){if(e){var t=(0,l.createPath)(n),o=w(b+t);if(y()!==o){j=t,m(o);var r=C.lastIndexOf((0,l.createPath)(G.location)),a=C.slice(0,-1===r?0:r+1);a.push(t),C=a,S({action:"PUSH",location:n})}else(0,i.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),S()}})},H=function(e,t){(0,i.default)(void 0===t,"Hash history cannot replace state; it is ignored");var n=(0,s.createLocation)(e,void 0,void 0,G.location);P.confirmTransitionTo(n,"REPLACE",a,function(e){if(e){var t=(0,l.createPath)(n),o=w(b+t);y()!==o&&(j=t,v(o));var r=C.indexOf((0,l.createPath)(G.location));-1!==r&&(C[r]=t),S({action:"REPLACE",location:n})}})},D=function(e){(0,i.default)(n,"Hash history go(n) causes a full page reload in this browser"),t.go(e)},B=function(){return D(-1)},U=function(){return D(1)},I=0,q=function(e){I+=e,1===I?(0,p.addEventListener)(window,"hashchange",R):0===I&&(0,p.removeEventListener)(window,"hashchange",R)},F=!1,W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=P.setPrompt(e);return F||(q(1),F=!0),function(){return F&&(F=!1,q(-1)),t()}},Y=function(e){var t=P.appendListener(e);return q(1),function(){q(-1),t()}},G={length:t.length,action:"POP",location:M,createHref:A,push:N,replace:H,go:D,goBack:B,goForward:U,block:W,listen:Y};return G};t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.MemoryRouter}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(1),u=o(i),c=n(2),s=o(c),l=n(0),f=n(9),d=o(f),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)},y=function(e){var t=e.to,n=e.exact,o=e.strict,a=e.location,i=e.activeClassName,c=e.className,s=e.activeStyle,f=e.style,y=e.isActive,m=r(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive"]);return u.default.createElement(l.Route,{path:"object"===(void 0===t?"undefined":h(t))?t.pathname:t,exact:n,strict:o,location:a,children:function(e){var n=e.location,o=e.match,r=!!(y?y(o,n):o);return u.default.createElement(d.default,p({to:t,className:r?[i,c].filter(function(e){return e}).join(" "):c,style:r?p({},f,s):f},m))}})};y.propTypes={to:d.default.propTypes.to,exact:s.default.bool,strict:s.default.bool,location:s.default.object,activeClassName:s.default.string,className:s.default.string,activeStyle:s.default.object,style:s.default.object,isActive:s.default.func},y.defaultProps={activeClassName:"active"},t.default=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Prompt}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Redirect}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Route}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Router}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.StaticRouter}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Switch}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.matchPath}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.withRouter}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=o(r),i=n(37),u=o(i),c=n(39),s=o(c),l=a.default.createClass({displayName:"TeacherHome",render:function(){return a.default.createElement("div",{className:s.default.container},a.default.createElement("div",{className:s.default.innercontainer},a.default.createElement(u.default,null),a.default.createElement("div",{className:s.default.rightContainer})))}});e.exports=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=o(r),i=n(38),u=o(i),c=a.default.createClass({displayName:"LeftSide",getInitialState:function(){return{selectedItem:"aaa"}},itemSelect:function(e){this.setState({selectedItem:e})},renderItem:function(e){var t=this,n=u.default.itemWrapper;return e==this.state.selectedItem&&(console.log("aaaa"),n=n+" "+u.default.itemSelected),a.default.createElement("div",{className:n,onClick:function(){return t.itemSelect(e)}},e)},render:function(){var e=["aaa","vvv"],t=e.map(function(e,t){return this.renderItem(e)},this);return a.default.createElement("div",{className:u.default.container},a.default.createElement("div",{className:u.default.iconDiv},"dad"),a.default.createElement("div",{className:u.default.managerDiv},a.default.createElement("div",{className:u.default.blueBar}),a.default.createElement("p",{className:u.default.managerFont},"教师管理")),a.default.createElement("div",{className:u.default.selectDiv},t),a.default.createElement("div",{className:u.default.bottomDiv},a.default.createElement("pre",{className:u.default.bottomFontStyle},"欢迎您  教师123"),a.default.createElement("a",{href:"fdaf",className:u.default.aCSS},"退出")))}});e.exports=c},function(e,t){e.exports={font:"_2EEbLV_GwkPswF6_50QzDc",aCSS:"_3NI_pXLOHN0mSEaiaz3-GD",bottomFontStyle:"_2-sWXJCEvkrGEGimKHC-pA",managerFont:"_1SOZ2mZp-2GW4HSmTkQ3zZ",itemWrapper:"VA75rqTK2lnmDebdrvfpI",container:"_3pz7juDTdvNCDcbbvPaa52",iconDiv:"pZl2yxutcr38H5z9Xqp1O",managerDiv:"_1uBc6ZQvtrnUGz0c5DQxQ6",selectDiv:"_3muYgNPfUeEosZRaH-BGEx",bottomDiv:"cxMXuigY8BgNYlg1s_Wn7",blueBar:"TZVlxscD8aswaj68CRKxV",itemDiv:"_2tRk31Bsk_LnaGGJ8urm9j",itemSelected:"_2BTxT0LD-EgNkWC_KeOsTJ"}},function(e,t){e.exports={container:"_13Muu8QoLIlSgDDskpT2Jb",rightContainer:"_18BZ_V86Jk7jTKWQaoVTPC",innercontainer:"_121Fwjnt0ohzYY7Q6Lyzhs"}},function(e,t){e.exports={container:"_3zqyeTF36O_8qdPIQUUnxd"}}],[10]);