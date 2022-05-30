(function(o,s){typeof exports=="object"&&typeof module!="undefined"?module.exports=s(require("react")):typeof define=="function"&&define.amd?define(["react"],s):(o=typeof globalThis!="undefined"?globalThis:o||self,o["tawk-messenger-react"]=s(o.React))})(this,function(o){"use strict";var s={exports:{}},C="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",l=C,T=l;function c(){}function h(){}h.resetWarningCache=c;var k=function(){function e(u,r,t,i,m,p){if(p!==T){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function a(){return e}var d={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:h,resetWarningCache:c};return d.PropTypes=d,d};s.exports=k();var n=s.exports;const g=e=>!e||e.length===0?!1:e!=null&&typeof e=="string",y=({propertyId:e="",widgetId:a="",embedId:d="",basePath:u="tawk.to"})=>{if(d.length){if(!document.getElementById(d)){const i=document.createElement("div");i.id=d,document.body.appendChild(i)}window.Tawk_API.embedded=d}const r=document.createElement("script");r.async=!0,r.src=`https://embed.${u}/${e}/${a}`,r.charset="UTF-8",r.setAttribute("crossorigin","*");const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t)},w=o.forwardRef((e,a)=>{o.useEffect(()=>{d()},[]);const d=()=>{if(!g(e.propertyId)){console.error("[Tawk-messenger-react warn]: You didn't specified 'propertyId' property in the plugin.");return}if(!g(e.widgetId)){console.error("[Tawk-messenger-react warn]: You didn't specified 'widgetId' property in the plugin.");return}!window||!document||u()},u=()=>{window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,y({propertyId:e.propertyId,widgetId:e.widgetId,embedId:e.embedId,basePath:e.basePath}),e.customStyle&&typeof e.customStyle=="object"&&(window.Tawk_API.customStyle=e.customStyle),r()};o.useImperativeHandle(a,()=>({maximize:()=>window.Tawk_API.maximize(),minimize:()=>window.Tawk_API.minimize(),toggle:()=>window.Tawk_API.toggle(),popup:()=>window.Tawk_API.popup(),showWidget:()=>window.Tawk_API.showWidget(),hideWidget:()=>window.Tawk_API.hideWidget(),toggleVisibility:()=>window.Tawk_API.toggleVisibility(),endChat:()=>window.Tawk_API.endChat(),getWindowType:()=>window.Tawk_API.getWindowType(),getStatus:()=>window.Tawk_API.getStatus(),isChatMaximized:()=>window.Tawk_API.isChatMaximized(),isChatMinimized:()=>window.Tawk_API.isChatMinimized(),isChatHidden:()=>window.Tawk_API.isChatHidden(),isChatOngoing:()=>window.Tawk_API.isChatOngoing(),isVisitorEngaged:()=>window.Tawk_API.isVisitorEngaged(),onLoaded:()=>window.Tawk_API.onLoaded,onBeforeLoaded:()=>window.Tawk_API.onBeforeLoaded,widgetPosition:()=>window.Tawk_API.widgetPosition(),visitor:t=>{window.Tawk_API.visitor=t},setAttributes:(t,i)=>{window.Tawk_API.setAttributes(t,i)},addEvent:(t,i,m)=>{window.Tawk_API.addEvent(t,i,m)},addTags:(t,i)=>{window.Tawk_API.addTags(t,i)},removeTags:(t,i)=>{window.Tawk_API.removeTags(t,i)}}));const r=()=>{window.addEventListener("tawkLoad",()=>{e.onLoad()}),window.addEventListener("tawkStatusChange",t=>{e.onStatusChange(t.detail)}),window.addEventListener("tawkBeforeLoad",()=>{e.onBeforeLoad()}),window.addEventListener("tawkChatMaximized",()=>{e.onChatMaximized()}),window.addEventListener("tawkChatMinimized",()=>{e.onChatMinimized()}),window.addEventListener("tawkChatHidden",()=>{e.onChatHidden()}),window.addEventListener("tawkChatStarted",()=>{e.onChatStarted()}),window.addEventListener("tawkChatEnded",()=>{e.onChatEnded()}),window.addEventListener("tawkPrechatSubmit",t=>{e.onPrechatSubmit(t.detail)}),window.addEventListener("tawkOfflineSubmit",t=>{e.onOfflineSubmit(t.detail)}),window.addEventListener("tawkChatMessageVisitor",t=>{e.onChatMessageVisitor(t.detail)}),window.addEventListener("tawkChatMessageAgent",t=>{e.onChatMessageAgent(t.detail)}),window.addEventListener("tawkChatMessageSystem",t=>{e.onChatMessageSystem(t.detail)}),window.addEventListener("tawkAgentJoinChat",t=>{e.onAgentJoinChat(t.detail)}),window.addEventListener("tawkAgentLeaveChat",t=>{e.onAgentLeaveChat(t.detail)}),window.addEventListener("tawkChatSatisfaction",t=>{e.onChatSatisfaction(t.detail)}),window.addEventListener("tawkVisitorNameChanged",t=>{e.onVisitorNameChanged(t.detail)}),window.addEventListener("tawkFileUpload",t=>{e.onFileUpload(t.detail)}),window.addEventListener("tawkTagsUpdated",t=>{e.onTagsUpdated(t.detail)}),window.addEventListener("tawkUnreadCountChanged",t=>{e.onUnreadCountChanged(t.detail)})};return null});return w.displayName="TawkMessenger",w.defaultProps={customStyle:null,embedId:"",basePath:"tawk.to",onLoad:()=>{},onStatusChange:()=>{},onBeforeLoad:()=>{},onChatMaximized:()=>{},onChatMinimized:()=>{},onChatHidden:()=>{},onChatStarted:()=>{},onChatEnded:()=>{},onPrechatSubmit:()=>{},onOfflineSubmit:()=>{},onChatMessageVisitor:()=>{},onChatMessageAgent:()=>{},onChatMessageSystem:()=>{},onAgentJoinChat:()=>{},onAgentLeaveChat:()=>{},onChatSatisfaction:()=>{},onVisitorNameChanged:()=>{},onFileUpload:()=>{},onTagsUpdated:()=>{},onUnreadCountChanged:()=>{}},w.propTypes={propertyId:n.string.isRequired,widgetId:n.string.isRequired,customStyle:n.object,embedId:n.string,basePath:n.string,onLoad:n.func,onStatusChange:n.func,onBeforeLoad:n.func,onChatMaximized:n.func,onChatMinimized:n.func,onChatHidden:n.func,onChatStarted:n.func,onChatEnded:n.func,onPrechatSubmit:n.func,onOfflineSubmit:n.func,onChatMessageVisitor:n.func,onChatMessageAgent:n.func,onChatMessageSystem:n.func,onAgentJoinChat:n.func,onAgentLeaveChat:n.func,onChatSatisfaction:n.func,onVisitorNameChanged:n.func,onFileUpload:n.func,onTagsUpdated:n.func,onUnreadCountChanged:n.func},w});
