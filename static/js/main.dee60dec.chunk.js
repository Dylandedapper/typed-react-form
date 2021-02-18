(this["webpackJsonptyped-react-form-example"]=this["webpackJsonptyped-react-form-example"]||[]).push([[0],{1:function(e,t,r){var n,a=r(0),l=(n=a)&&"object"===typeof n&&"default"in n?n.default:n;function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function s(e){if(Array.isArray(e))return[].concat(e);if("object"===typeof e)return o({},e);throw new Error("Can only memberCopy() arrays and objects.")}function c(e,t){if(!e||!t)return e===t;for(var r=Object.keys(e),n=Object.keys(t),a=r.length>n.length?r:n,l=0;l<a.length;l++){var i=a[l],o=e[i],u=t[i];if("object"===typeof o&&null!==o||"object"===typeof u&&null!==u)return;if(o!==u)return!0}return!1}var m=function(){function e(t,r,n,a,l,i){this.formId=++e.formCounter,this.childMap={},this.dirtyMap={},this.errorMap={},this.listeners={},this.anyListeners={},this.counter=0,this.values=s(t),this.defaultValues=s(r),this._state=s(n),this.validator=a,this.validateOnMount=l,this.validateOnChange=i}var t,r,n,a=e.prototype;return a.setValueInternal=function(e,t,r,n,a,l,i,o){void 0===n&&(n=!0),void 0===a&&(a=!1),void 0===l&&(l=!0),void 0===i&&(i=!0),void 0===o&&(o=!0);var u=a?this.defaultValues:this.values;if(void 0===t?Array.isArray(u)?u.splice(e,1):delete u[e]:u[e]=t,this.dirtyMap[e]=r,l){var s=this.childMap[e];s&&void 0!==t&&null!==t&&(s.setValues(t,!0,a,!0,!1),this.dirtyMap[e]=s.dirty)}this.fireListeners(e),i&&this.updateParentValues(a),o&&this.fireAnyListeners(),n&&this.validateOnChange&&this.validator&&this.validate()},a.setValue=function(e,t,r,n,a,l,i){if(void 0===r&&(r=!0),void 0===n&&(n=!1),void 0===a&&(a=!0),void 0===l&&(l=!0),void 0===i&&(i=!0),"object"===typeof t&&null!==t){var o,u=!1;if(t instanceof Date)u=(null===t||void 0===t?void 0:t.getTime())!==(null===(o=n?this.values[e]:this.defaultValues[e])||void 0===o?void 0:o.getTime());else i&&void 0===(u=c(t,n?this.values[e]:this.defaultValues[e]))&&(console.warn("Do not use setValue for object in object fields, use setValueInternal instead (dirty value can not be determined), ",e,t),u=!0);this.setValueInternal(e,t,u,r,n,a,l,i)}else{var s=n?t!==this.values[e]:t!==this.defaultValues[e];if((n&&this.defaultValues[e]===t||!n&&this.values[e]===t)&&this.dirtyMap[e]===s)return;this.setValueInternal(e,t,s,r,n,a,l,i)}},a.setValues=function(e,t,r,n,a){void 0===t&&(t=!0),void 0===r&&(r=!1),void 0===n&&(n=!0),void 0===a&&(a=!0);for(var l=Object.keys(r?this.defaultValues:this.values),i=Object.keys(e),o=l.length>i.length?l:i,u=0;u<o.length;u++){var s=o[u];this.setValue(s,e[s],!1,r,n,!1,!1)}a&&this.updateParentValues(r),this.fireAnyListeners(),t&&this.validateOnChange&&this.validator&&this.validate()},a.setDefaultValues=function(e,t,r,n){void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===n&&(n=!0),this.setValues(e,t,!0,r,n)},a.validate=function(){try{var e=this;if(!e.validator)return console.warn("validate() was called on a form which does not have a validator set."),Promise.resolve();var t=e.setErrors;return Promise.resolve(e.validator(e.values)).then((function(r){t.call(e,r)}))}catch(r){return Promise.reject(r)}},a.setError=function(e,t,r,n,a){if(void 0===r&&(r=!0),void 0===n&&(n=!0),void 0===a&&(a=!0),"object"!==typeof t&&this.errorMap[e]===t)return!1;if((t?this.errorMap[e]=t:delete this.errorMap[e],r&&this.childMap[e])&&(!this.childMap[e].setErrors("object"===typeof t&&null!=t?t:{},!0,!1)&&"object"===typeof t))return!1;return this.fireListeners(e),n&&this.updateParentErrors(),a&&this.fireAnyListeners(),!0},a.setErrors=function(e,t,r){void 0===t&&(t=!0),void 0===r&&(r=!0);for(var n=Object.keys(this.errorMap),a=Object.keys(e),l=a.length>n.length?a:n,i=!1,o=0;o<l.length;o++){var u=l[o];i=i||this.setError(u,e[u],t,!1,!1)}return!!i&&(r&&this.updateParentErrors(),this.fireAnyListeners(),!0)},a.resetAll=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0),this.setValues(this.defaultValues,!0,!1,e,t)},a.reset=function(e,t,r){void 0===t&&(t=!0),void 0===r&&(r=!0),this.setValue(e,this.defaultValues[e],!0,!1,t,r)},a.setState=function(e,t,r){var n=this;void 0===t&&(t=!0),void 0===r&&(r=!0),this._state=e;var a=Object.keys(this.values);t&&a.forEach((function(a){var l;return null===(l=n.childMap[a])||void 0===l?void 0:l.setState(e,t,r)})),a.forEach((function(e){return n.fireListeners(e)})),r&&this.updateParentState(),this.fireAnyListeners()},a.listen=function(e,t){this.listeners||(this.listeners={});var r=this.listeners[e];r||(r={},this.listeners[e]=r);var n=""+this.counter++;return r[n]=t,n},a.listenAny=function(e){this.anyListeners||(this.anyListeners={});var t=""+this.counter++;return this.anyListeners[t]=e,t},a.ignore=function(e,t){if(this.listeners){var r=this.listeners[e];r?delete r[t]:console.warn("Ignore was called for no reason",e,t)}},a.ignoreAny=function(e){this.anyListeners&&delete this.anyListeners[e]},a.fireListeners=function(e){var t=this.listeners[e];t&&Object.keys(t).forEach((function(e){return t[e]()}))},a.fireAnyListeners=function(){var e=this;Object.keys(this.anyListeners).forEach((function(t){return e.anyListeners[t]()}))},a.updateParentValues=function(e){},a.updateParentErrors=function(){},a.updateParentState=function(){},t=e,(r=[{key:"state",get:function(){return this._state}},{key:"dirty",get:function(){var e=this;return Object.keys(this.dirtyMap).some((function(t){return e.dirtyMap[t]}))}},{key:"error",get:function(){var e=this;return Object.keys(this.errorMap).some((function(t){return e.errorMap[t]}))}},{key:"empty",get:function(){return 0===Object.keys(this.values).length}}])&&i(t.prototype,r),n&&i(t,n),e}();m.formCounter=0;var d=function(e){var t,r;function n(t,r){var n,a,l;return(l=e.call(this,null!=(n=t.values[r])?n:{},null!=(a=t.defaultValues[r])?a:{},t.state,void 0,t.validateOnMount,t.validateOnChange)||this).parent=t,l.name=r,l}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.updateParentValues=function(e){this.parent.setValueInternal(this.name,s(e?this.defaultValues:this.values),this.dirty,!0,e,!1,!0,!0)},a.updateParentErrors=function(){this.parent.setError(this.name,this.error?s(this.errorMap):void 0,!1,!0)},a.updateParentState=function(){this.parent.setState(s(this.state),!1,!0)},n}(m);function f(e,t){var r=a.useRef(null);return r.current||(r.current=new d(e,t)),a.useEffect((function(){var n,a;return e.childMap[t]=r.current,r.current.name=t,r.current.setValues(null!=(n=e.defaultValues[t])?n:{},!1,!0,!1,!1),r.current.setValues(null!=(a=e.values[t])?a:{},r.current.validateOnMount,!1,!0,!1),function(){e.childMap[t]===r.current&&(delete e.childMap[t],delete e.errorMap[t],delete e.dirtyMap[t])}}),[e,t]),r.current}function h(e,t){var r=a.useState(0)[1];return a.useEffect((function(){var n=e.listen(t,(function(){r((function(e){return e+1}))}));return function(){return e.ignore(t,n)}}),[e,t]),{value:e.values[t],defaultValue:e.defaultValues[t],setValue:function(r){return e.setValue(t,r)},dirty:e.dirtyMap[t],error:e.errorMap[t],state:e.state,form:e}}function v(e){var t=a.useState(0)[1];return a.useEffect((function(){var r=e.listenAny((function(){t((function(e){return e+1}))}));return function(){return e.ignoreAny(r)}}),[e]),e}function p(e){this.setValues([].concat(this.values,[e]))}function y(e){var t=[].concat(this.values);t.splice(e,1),this.setValues(t)}function E(){this.setValues([])}function b(e,t){if(t!==e){for(var r=[].concat(this.values),n=r[e],a=t<e?-1:1,l=e;l!==t;l+=a)r[l]=r[l+a];r[t]=n,this.setValues(r)}}function g(e,t){if(e!==t){var r=[].concat(this.values),n=[r[t],r[e]];r[e]=n[0],r[t]=n[1],this.setValues(r)}}function k(e,t){var r=f(e,t),n=a.useRef(-1),l=a.useState(0)[1];return a.useEffect((function(){var r=e.listen(t,(function(){var r=e.values[t];r.length!==n.current&&(l((function(e){return e+1})),n.current=r.length)}));return function(){return e.ignore(t,r)}}),[]),{remove:y.bind(r),move:b.bind(r),swap:g.bind(r),clear:E.bind(r),append:p.bind(r),form:r,values:r.values,setValues:r.setValues.bind(r)}}function S(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return[].concat(t).filter((function(e){return!!e})).join(" ")}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function O(e,t){for(var r=e.path?[e]:e.inner,n={},a=0;a<r.length;a++){var l=r[a];if(l.path&&l.message)for(var i=Array.from(l.path.matchAll(/(\w+)/gi)).map((function(e){return e[0]})),o=n,u=0;u<i.length;u++){var s=i[u],c=o[s];c||(c={},o[s]=c),u===i.length-1?o[s]=t(l.message):o=c}}return n}t.AnyListener=function(e){var t,r,n=v(e.form);return l.createElement(l.Fragment,null,null!=(t=null===(r=e.render)||void 0===r?void 0:r.call(e,n))?t:n.values+"")},t.ArrayForm=function(e){var t,r,n=k(e.form,e.name),i=a.useRef(!!e.form.values[e.name]),o=a.useState(0)[1];return a.useEffect((function(){var t=e.form.listen(e.name,(function(){var t=!!e.form.values[e.name];t!==i.current&&(o((function(e){return e+1})),i.current=t)}));return function(){return e.form.ignore(e.name,t)}}),[]),e.form.values[e.name]?l.createElement(l.Fragment,null,null!=(t=null===(r=e.render)||void 0===r?void 0:r.call(e,n))?t:n.values+""):null},t.ChildForm=function(e){var t,r=f(e.form,e.name),n=a.useRef(!!e.form.values[e.name]),i=a.useState(0)[1];return a.useEffect((function(){var t=e.form.listen(e.name,(function(){var t=!!e.form.values[e.name];t!==n.current&&(i((function(e){return e+1})),n.current=t)}));return function(){return e.form.ignore(e.name,t)}}),[]),e.form.values[e.name]?l.createElement(l.Fragment,null,null===(t=e.render)||void 0===t?void 0:t.call(e,r)):null},t.ChildFormState=d,t.DEFAULT_DIRTY_CLASS="typed-form-dirty",t.DEFAULT_ERROR_CLASS="typed-form-error",t.FormError=function(e){var t=e.form,r=e.name,n=u(e,["form","name"]),a=h(t,r).error;return a&&"object"!==typeof a?l.createElement("p",n,a+""):null},t.FormInput=function(e){var t=e.form,r=e.name,n=e.style,i=e.className,s=e.disableOnSubmitting,c=e.dateAsNumber,m=e.errorClassName,d=e.errorStyle,f=e.dirtyClassName,v=e.dirtyStyle,p=e.setUndefinedOnUncheck,y=e.setNullOnUncheck,E=e.hideWhenNull,b=e.value,g=u(e,["form","name","style","className","disableOnSubmitting","dateAsNumber","errorClassName","errorStyle","dirtyClassName","dirtyStyle","setUndefinedOnUncheck","setNullOnUncheck","hideWhenNull","value","checked"]),k=h(t,r),O=k.value,V=k.error,j=k.dirty,C=k.state,M=k.setValue,F=k.defaultValue,N=a.useMemo((function(){var e=void 0,t=void 0;switch(g.type){case"number":e=(null!=O?O:"")+"";break;case"datetime-local":case"date":var r=O;if("string"===typeof r){var n=parseInt(r);isNaN(n)||(r=n)}var a,l=new Date(r);if(l.getTime()===l.getTime())e=null!=(a=null===l||void 0===l?void 0:l.toISOString().split("T")[0])?a:"";else e="";break;case"radio":t=O===b;break;case"checkbox":t=y?null!==O:p?void 0!==O:void 0!==b?(Array.isArray(O)?O:[]).includes(b):!!O;break;default:e=(null!=O?O:"")+""}return[e,t]}),[g.type,O,b]),A=N[0],w=N[1];return!E||null!==O&&void 0!==O?((y||p)&&"checkbox"!==g.type&&console.warn("setNullOnUncheck/setUndefinedOnUncheck only has an effect on checkboxes."),l.createElement("input",o({style:o({},n,j&&v,V&&d),className:S(i,j&&(null!=f?f:"typed-form-dirty"),V&&(null!=m?m:"typed-form-error")),disabled:(null==s||s)&&C.isSubmitting,value:A,checked:w,onChange:function(e){var t=e.target.value,r=e.target.checked;switch(g.type){case"number":return void M(parseFloat(t));case"datetime-local":case"date":if(t){var n=new Date(t);M(c?n.getTime():n)}else M(null);return;case"radio":return void(r&&M(b));case"checkbox":if(y||p)r&&void 0===b&&!F&&console.warn("Toggling checkbox using setNullOnUncheck got checked but a value to set was not found, please provide the value prop"),M(r?void 0!==b?b:F:y?null:void 0);else if(void 0!==b){var a=Array.isArray(O)?[].concat(O):[];r?a.push(b):a.splice(a.indexOf(b),1),M(a)}else M(r);return;default:return void M(t)}},name:r},g))):null},t.FormSelect=function(e){var t=e.form,r=e.name,n=e.errorClassName,a=e.errorStyle,i=e.dirtyClassName,s=e.dirtyStyle,c=e.disableOnSubmitting,m=e.hideWhenNull,d=e.children,f=e.className,v=e.style,p=u(e,["form","name","errorClassName","errorStyle","dirtyClassName","dirtyStyle","disableOnSubmitting","hideWhenNull","children","className","style"]),y=h(t,r),E=y.value,b=y.setValue,g=y.state,k=y.dirty,O=y.error;return!m||null!==E&&void 0!==E?l.createElement("select",o({style:o({},v,k&&s,O&&a),className:S(f,k&&(null!=i?i:"typed-form-dirty"),O&&(null!=n?n:"typed-form-error")),disabled:(null==c||c)&&g.isSubmitting,value:E,onChange:function(e){p.multiple?b(Array.from(e.target.selectedOptions).map((function(e){return e.value}))):b(e.target.value)}},p),d):null},t.FormState=m,t.FormTextArea=function(e){var t=e.form,r=e.name,n=e.errorClassName,a=e.errorStyle,i=e.dirtyClassName,s=e.dirtyStyle,c=e.disableOnSubmitting,m=e.children,d=e.className,f=e.hideWhenNull,v=e.style,p=u(e,["form","name","errorClassName","errorStyle","dirtyClassName","dirtyStyle","disableOnSubmitting","children","className","hideWhenNull","style"]),y=h(t,r),E=y.value,b=y.setValue,g=y.state,k=y.dirty,O=y.error;return!f||null!==E&&void 0!==E?l.createElement("textarea",o({style:o({},v,k&&s,O&&a),className:S(d,k&&(null!=i?i:"typed-form-dirty"),O&&(null!=n?n:"typed-form-error")),disabled:(null==c||c)&&g.isSubmitting,value:E,onChange:function(e){return b(e.target.value)}},p),m):null},t.Listener=function(e){var t,r,n=h(e.form,e.name);return l.createElement(l.Fragment,null,null!=(t=null===(r=e.render)||void 0===r?void 0:r.call(e,n))?t:n.value+"")},t.comparePrimitiveObject=c,t.getClassName=S,t.memberCopy=s,t.useAnyListener=v,t.useArrayForm=k,t.useChildForm=f,t.useForm=function(e,t,r,n,l){void 0===t&&(t={isSubmitting:!1}),void 0===n&&(n=!1),void 0===l&&(l=!0);var i=a.useRef(null);return i.current||(i.current=new m(e,e,t,r,n,l)),a.useEffect((function(){i.current.setValues(e,i.current.validateOnMount,!0)}),[e]),i.current},t.useListener=h,t.yupErrorToErrorMap=O,t.yupValidator=function(e,t,r){return void 0===r&&(r=function(e){return e}),function(n){try{return Promise.resolve(function(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}((function(){return Promise.resolve(e.validate(n,t)).then((function(){return{}}))}),(function(e){return O(e,r)})))}catch(a){return Promise.reject(a)}}}},11:function(e,t,r){e.exports=r(18)},12:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);r(12);var n=r(0),a=r.n(n),l=r(8),i=r.n(l),o=r(2),u=r(10),s=r(6),c=r(5),m=r.n(c),d=r(9),f=r(1);function h(e){var t=Object(n.useRef)(null),r=Object(n.useRef)(null);return t.current&&(t.current.className="",r.current&&clearTimeout(r.current),r.current=window.setTimeout((function(){t.current&&(t.current.className="blink")}),100)),a.a.createElement("div",{className:"blink",ref:t},e.children)}function v(){return a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"2em",background:"#333",color:"white"}},a.a.createElement("h1",null,"Example form created using"," ",a.a.createElement("a",{style:{color:"#3793ee"},href:"https://github.com/CodeStix/typed-react-form"},"typed-react-form")),a.a.createElement("p",null,"The ",a.a.createElement("strong",{style:{color:"red"}},"red flash")," indicates which parts of the form are being rerendered. The"," ",a.a.createElement("strong",{style:{outline:"3px solid gray"}},"gray outline")," indicates that a field is dirty (modified) and the"," ",a.a.createElement("strong",{style:{outline:"3px solid red"}},"red outline")," indicates an error."),a.a.createElement("p",null,"Every part of this form's"," ",a.a.createElement("a",{style:{color:"#3793ee"},href:"https://github.com/CodeStix/typed-react-form/blob/master/example/src/App.tsx"},"source code")," ","is type-checked.")),a.a.createElement(y,null))}var p={id:Math.ceil(1e5*Math.random()),name:"My todo list",description:"this is a testing form",author:null,public:!0,date:(new Date).getTime(),dateObject:new Date,tags:["test"],language:"en",todos:[{message:"This is todo",priority:"normal"}]};function y(){var e=Object(f.useForm)(p,{isSubmitting:!1},g,!1,!0);return a.a.createElement("form",{onSubmit:function(){var t=Object(d.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),e.validate(),!e.error){t.next=4;break}return t.abrupt("return");case 4:return e.setState({isSubmitting:!0}),t.next=7,new Promise((function(e){return setTimeout(e,1e3)}));case 7:e.setState({isSubmitting:!1}),e.setDefaultValues(e.values);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"60% 40%",gridTemplateRows:"100%",gap:"2em",margin:"2em"}},a.a.createElement(h,null,a.a.createElement("h3",null,"Id ",a.a.createElement("small",null,"number")),a.a.createElement(f.FormInput,{type:"number",form:e,name:"id"}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Name ",a.a.createElement("small",null,"string")),a.a.createElement(f.FormInput,{form:e,name:"name"}),a.a.createElement(f.FormError,{form:e,name:"name"}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Public? ",a.a.createElement("small",null,"boolean")),a.a.createElement("p",null,"Using radio buttons"),a.a.createElement(f.FormInput,{type:"radio",form:e,name:"public",value:!1})," no",a.a.createElement(f.FormInput,{type:"radio",form:e,name:"public",value:!0})," yes",a.a.createElement("p",null,"Using checkbox"),a.a.createElement(f.FormInput,{type:"checkbox",form:e,name:"public"}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Language ",a.a.createElement("small",null,"enum")),a.a.createElement("p",null,"Using select"),a.a.createElement(f.FormSelect,{form:e,name:"language"},a.a.createElement("option",{value:"en"},"English"),a.a.createElement("option",{value:"nl"},"Dutch"),a.a.createElement("option",{value:"fr"},"French")),a.a.createElement("p",null,"Using radio buttons"),a.a.createElement(f.FormInput,{type:"radio",form:e,name:"language",value:"en"})," English",a.a.createElement(f.FormInput,{type:"radio",form:e,name:"language",value:"nl"})," Dutch",a.a.createElement(f.FormInput,{type:"radio",form:e,name:"language",value:"fr"})," French",a.a.createElement("hr",null),a.a.createElement("h3",null,"Todo's ",a.a.createElement("small",null,"dynamic array")),a.a.createElement(f.FormError,{form:e,name:"todos"}),a.a.createElement(f.ArrayForm,{form:e,name:"todos",render:function(e){var t=e.form,r=e.swap,n=e.remove,l=e.append,i=e.values,o=e.setValues;return a.a.createElement(h,null,a.a.createElement("ul",null,t.values.map((function(e,l){return a.a.createElement(E,{onMoveTop:function(){return r(l,0)},onRemove:function(){return n(l)},key:l,parent:t,index:l})}))),a.a.createElement("button",{type:"button",onClick:function(){l({message:"",priority:"normal"})}},"Add item"),a.a.createElement("button",{type:"button",onClick:function(){o([].concat(Object(s.a)(i),Object(s.a)(Array(50).fill(0).map((function(e,t){return{message:"Fix this "+t,priority:"normal"}})))))}},"Add 50 items"))}}),a.a.createElement("button",{type:"button",onClick:function(){return e.setError("todos","There is something wrong with the array")}},"Set array error"),a.a.createElement("hr",null),a.a.createElement("h3",null,"Date ",a.a.createElement("small",null,"timestamp number")),a.a.createElement(f.FormInput,{type:"date",form:e,name:"date",dateAsNumber:!0}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Date ",a.a.createElement("small",null,"date object")),a.a.createElement(f.FormInput,{type:"date",form:e,name:"dateObject"}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Tags ",a.a.createElement("small",null,"string array")),a.a.createElement("p",null,"Using select with ",a.a.createElement("code",null,"multiple=true")),a.a.createElement(f.FormSelect,{form:e,name:"tags",multiple:!0},a.a.createElement("option",{value:"test"},"Test"),a.a.createElement("option",{value:"fun"},"Fun"),a.a.createElement("option",{value:"school"},"School")),a.a.createElement("p",null,"Using checkboxes"),a.a.createElement("label",null,a.a.createElement(f.FormInput,{form:e,name:"tags",type:"checkbox",value:"test"}),"Test"),a.a.createElement("label",null,a.a.createElement(f.FormInput,{form:e,name:"tags",type:"checkbox",value:"fun"}),"Fun"),a.a.createElement("label",null,a.a.createElement(f.FormInput,{form:e,name:"tags",type:"checkbox",value:"school"}),"School"),a.a.createElement("hr",null),a.a.createElement("h3",null,"Description ",a.a.createElement("small",null,"string")),a.a.createElement("p",null,"Using ",a.a.createElement("code",null,"FormTextArea")),a.a.createElement(f.FormTextArea,{form:e,name:"description",rows:5,cols:50}),a.a.createElement("p",null,"Using ",a.a.createElement("code",null,"Listener")," around ",a.a.createElement("code",null,"textarea")),a.a.createElement(f.Listener,{form:e,name:"description",render:function(e){var t=e.value,r=e.setValue;return a.a.createElement("textarea",{rows:5,cols:50,value:t,onChange:function(e){return r(e.target.value)}})}}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Author ",a.a.createElement("small",null,"string")),a.a.createElement("p",null,"Togglable object field"),a.a.createElement(f.FormInput,{form:e,name:"author",type:"checkbox",setNullOnUncheck:!0,value:{name:"",age:0}}),a.a.createElement(f.ChildForm,{form:e,name:"author",render:function(e){return a.a.createElement(h,null,a.a.createElement(f.FormInput,{form:e,name:"name"}),a.a.createElement(f.FormInput,{form:e,name:"age",type:"number"}))}})),a.a.createElement("div",{style:{position:"sticky",top:"0",height:"500px"}},a.a.createElement("h2",null,"Output"),a.a.createElement(b,{form:e}),a.a.createElement(f.AnyListener,{form:e,render:function(t){var r=t.state,n=t.dirty;return a.a.createElement("div",{style:{margin:"0.5em 0"}},a.a.createElement("button",{style:{fontSize:"1.3em"},disabled:r.isSubmitting||!n},"Submit"),a.a.createElement("button",{style:{fontSize:"1.3em"},disabled:r.isSubmitting||!n,type:"button",onClick:function(){return e.resetAll()}},"Reset"))}}),a.a.createElement("div",null,a.a.createElement("button",{style:{fontSize:"1.3em"},type:"button",onClick:function(){return e.validate()}},"Validate"),a.a.createElement("label",null,a.a.createElement("code",null,"validateOnChange"),a.a.createElement("input",{type:"checkbox",defaultChecked:e.validateOnChange,onChange:function(t){return e.validateOnChange=t.target.checked}}))))))}function E(e){var t=Object(f.useChildForm)(e.parent,e.index);return a.a.createElement("li",{style:{padding:"0.5em"}},a.a.createElement(h,null,a.a.createElement(f.FormInput,{form:t,name:"message"}),a.a.createElement(f.FormSelect,{form:t,name:"priority"},a.a.createElement("option",{value:"low"},"Low"),a.a.createElement("option",{value:"normal"},"Normal"),a.a.createElement("option",{value:"high"},"High")),a.a.createElement("button",{type:"button",onClick:e.onMoveTop},"Go to top"),a.a.createElement("button",{type:"button",onClick:e.onRemove},"Remove")))}function b(e){var t=Object(f.useAnyListener)(e.form),r=Object(n.useState)({values:!0,defaultValues:!1,errorMap:!0,dirtyMap:!0,state:!1}),l=Object(u.a)(r,2),i=l[0],s=l[1];return a.a.createElement(h,null,a.a.createElement("div",{style:{background:"#0001",overflow:"hidden",padding:"1em",borderRadius:"1em"}},a.a.createElement("p",null,a.a.createElement("strong",{style:{color:t.dirty?"blue":void 0}},t.dirty?"Modified":"Unmodified")),a.a.createElement("p",null,a.a.createElement("strong",{style:{color:t.error?"red":void 0}},t.error?"Has error":"No errors")),a.a.createElement("div",null,a.a.createElement("strong",null,"Show: "),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:i.values,onChange:function(e){return s(Object(o.a)(Object(o.a)({},i),{},{values:e.target.checked}))}}),a.a.createElement("code",null,"values")),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:i.defaultValues,onChange:function(e){return s(Object(o.a)(Object(o.a)({},i),{},{defaultValues:e.target.checked}))}}),a.a.createElement("code",null,"defaultValues")),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:i.errorMap,onChange:function(e){return s(Object(o.a)(Object(o.a)({},i),{},{errorMap:e.target.checked}))}}),a.a.createElement("code",null,"errorMap")),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:i.dirtyMap,onChange:function(e){return s(Object(o.a)(Object(o.a)({},i),{},{dirtyMap:e.target.checked}))}}),a.a.createElement("code",null,"dirtyMap")),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:i.state,onChange:function(e){return s(Object(o.a)(Object(o.a)({},i),{},{state:e.target.checked}))}}),a.a.createElement("code",null,"state"))),i.values&&a.a.createElement("pre",null,"values = ",JSON.stringify(t.values,null,2)),i.defaultValues&&a.a.createElement("pre",null,"defaultValues = ",JSON.stringify(t.defaultValues,null,2)),i.errorMap&&a.a.createElement("pre",null,"errorMap = ",JSON.stringify(t.errorMap,null,2)),i.dirtyMap&&a.a.createElement("pre",null,"dirtyMap = ",JSON.stringify(t.dirtyMap,null,2)),i.state&&a.a.createElement("pre",null,"state = ",JSON.stringify(t.state,null,2))))}function g(e){var t=e.todos.reduce((function(e,t,r){return t.message.length<5&&(e[r]={message:"Todo message should be longer!"}),e}),[]);return{name:e.name.length<3?"Title is too short.":void 0,todos:t.length>0?t:void 0}}i.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.dee60dec.chunk.js.map