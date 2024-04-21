/*! For license information please see smart.ui.menuitemsgroup.js.LICENSE.txt */
(()=>{"use strict";class t extends HTMLElement{get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get checkable(){return this.nativeElement?this.nativeElement.checkable:void 0}set checkable(t){if(this.nativeElement){this.nativeElement.checkable=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("checkable");this.nativeElement.hasAttribute("checkable")?this.setAttribute("checkable",e):this.removeAttribute("checkable"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get checked(){return this.nativeElement?this.nativeElement.checked:void 0}set checked(t){if(this.nativeElement){this.nativeElement.checked=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("checked");this.nativeElement.hasAttribute("checked")?this.setAttribute("checked",e):this.removeAttribute("checked"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get checkMode(){return this.nativeElement?this.nativeElement.checkMode:void 0}set checkMode(t){if(this.nativeElement){this.nativeElement.checkMode=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("check-mode");this.nativeElement.hasAttribute("check-mode")?this.setAttribute("check-mode",e):this.removeAttribute("check-mode"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get disabled(){return this.nativeElement?this.nativeElement.disabled:void 0}set disabled(t){if(this.nativeElement){this.nativeElement.disabled=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("disabled");this.nativeElement.hasAttribute("disabled")?this.setAttribute("disabled",e):this.removeAttribute("disabled"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get dropDownHeight(){return this.nativeElement?this.nativeElement.dropDownHeight:void 0}set dropDownHeight(t){if(this.nativeElement){this.nativeElement.dropDownHeight=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("drop-down-height");this.nativeElement.hasAttribute("drop-down-height")?this.setAttribute("drop-down-height",e):this.removeAttribute("drop-down-height"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get expanded(){return this.nativeElement?this.nativeElement.expanded:void 0}set expanded(t){if(this.nativeElement){this.nativeElement.expanded=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("expanded");this.nativeElement.hasAttribute("expanded")?this.setAttribute("expanded",e):this.removeAttribute("expanded"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get label(){return this.nativeElement?this.nativeElement.label:void 0}set label(t){if(this.nativeElement){this.nativeElement.label=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("label");this.nativeElement.hasAttribute("label")?this.setAttribute("label",e):this.removeAttribute("label"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get level(){return this.nativeElement?this.nativeElement.level:void 0}set level(t){if(this.nativeElement){this.nativeElement.level=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("level");this.nativeElement.hasAttribute("level")?this.setAttribute("level",e):this.removeAttribute("level"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get separator(){return this.nativeElement?this.nativeElement.separator:void 0}set separator(t){if(this.nativeElement){this.nativeElement.separator=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("separator");this.nativeElement.hasAttribute("separator")?this.setAttribute("separator",e):this.removeAttribute("separator"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get value(){return this.nativeElement?this.nativeElement.value:void 0}set value(t){if(this.nativeElement){this.nativeElement.value=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("value");this.nativeElement.hasAttribute("value")?this.setAttribute("value",e):this.removeAttribute("value"),this._isUpdatingAttribute=!1}}static get observedAttributes(){return["style","class","checkable","checked","check-mode","disabled","drop-down-height","expanded","label","level","separator","value"]}get properties(){return["checkable","checked","checkMode","disabled","dropDownHeight","expanded","label","level","separator","value"]}constructor(){super()}get eventListeners(){return[]}componentDidRender(t){const e=this,i={},n={};let s=null;for(let t in e.props)"children"!==t&&("style"!==t?t.startsWith("on")&&-1===e.properties.indexOf(t)?n[t]=e.props[t]:i[t]=e.props[t]:s=e.props[t]);for(let t in e.attributes){const i=e.attributes[t].name;if(i)if("class"!==i)"style"===i&&e.nativeElement.setAttribute(i,e.getAttribute(i)),-1!==e.properties.indexOf(i.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))&&e.nativeElement.setAttribute(i,e.getAttribute(i));else{const t=e.getAttribute(i).trim().split(" ");for(let i in t)e.nativeElement.classList.contains(t[i])||""===t[i]||e.nativeElement.classList.add(t[i])}}for(let t in i)if("class"!==t&&"className"!==t){if(i[t]!==e.nativeElement[t]){const n=t=>t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}));"hover"!==t&&"active"!==t&&"focus"!==t&&"selected"!==t||e.nativeElement.setAttribute(t,"");const s=n(t);e.nativeElement[s]=i[t]}}else{const n=i[t].trim().split(" ");for(let t in n)e.nativeElement.classList.contains(n[t])||""===n[t]||e.nativeElement.classList.add(n[t])}for(let t in n)e[t]=n[t],e.nativeElement[t.toLowerCase()]=n[t];if(s)for(let t in s)e.nativeElement.style[t]=s[t]}componentDidMount(){this.componentDidRender(!0)}componentDidUpdate(){this.componentDidRender(!1)}componentWillUnmount(){const t=this;if(t.nativeElement){t.nativeElement.whenRenderedCallbacks=[];for(let e=0;e<t.eventListeners.length;e++){const i=t.eventListeners[e];t.nativeElement.removeEventListener(i.substring(2).toLowerCase(),t[i])}}}connectedCallback(){this.shadowRoot||this._render()}disconnectedCallback(){this.componentWillUnmount()}addStylesToElement(t,e){const i=document.createElement("style");i.type="text/css";for(let t=0;t<e.length;t++){let n=document.createTextNode(e[t]);n.textContent=n.textContent.replace(":root",":host"),i.appendChild(n)}if(document.adoptedStyleSheets){const e=new CSSStyleSheet;e.replaceSync(i.innerHTML),t.adoptedStyleSheets?t.adoptedStyleSheets=[...t.adoptedStyleSheets,e]:-1===document.adoptedStyleSheets.indexOf(e)&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,e])}else t.appendChild(i)}addStyle(t){const e=this.shadowRoot;if("string"==typeof t){const i=document.createElement("style");i.type="text/css";const n=document.createTextNode(t);i.appendChild(n),e.appendChild(i)}else e.appendChild(t)}attributeChangedCallback(t,e,i){const n=this;if(n.shadowRoot&&n.isReady&&!n._isUpdatingAttribute)if("class"!==t)n.nativeElement.setAttribute(t,i);else{const t=i.trim().split(" "),s=e.trim().split(" ");for(let t in s)""!==s[t]&&n.nativeElement.classList.remove(s[t]);for(let e in t)n.nativeElement.classList.contains(t[e])||""===t[e]||n.nativeElement.classList.add(t[e])}}_render(){const t=this;if(t.parentNode){const e=document.createElement("smart-menu-items-group");t.parentNode?t.parentNode.replaceChild(e,t):t.getRootNode().host.shadowRoot.replaceChild(e,t),t.nativeElement=e,t.componentDidMount(),t.isReady=!0,t.classList.add("smart-ui-component")}}}window.customElements.get("smart-ui-menu-items-group")||window.customElements.define("smart-ui-menu-items-group",t)})();