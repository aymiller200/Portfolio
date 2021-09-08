(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[41],{"UT5+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return W}))
var a=n("rePB")
var r=n("Ff2n")
var i=n("ODXe")
var o=n("1OyB")
var l=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var d=n("q1tI")
var u=n.n(d)
var p=n("17x9")
var h=n.n(p)
var f=n("TSYQ")
var g=n.n(f)
var m=n("3zPy")
var b=n.n(m)
var v=n("sTNg")
var y=n("n12J")
var B=n("BTe1")
var L=n("J2CL")
var D=n("oXx0")
var _=n("nAyT")
var S=n("E+IV")
var P=n("jtGx")
var k=n("tCl5")
var w=n("8S//")
function j(e,t){if(e&&t&&"application/x-moz-file"!==e.type){var n=E(t)
var a=e.type||""
var r=a.replace(/\/.*$/,"")
return n.some((function(t){if("."===t.charAt(0)){if(!e.name)return a.endsWith(t.slice(1))
return e.name.toLowerCase().endsWith(t.toLowerCase())}if(/\/\*$/.test(t))return r===t.replace(/\/.*$/,"")
return a===t}))}return true}function E(e){var t=Array.isArray(e)?e:e.split(",")
return t.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function O(e,t){var n=e.dataTransfer
if(n){if(n.files&&n.files.length)return n.files
if(n.items&&n.items.length)return n.items}else if(t&&t.files)return t.files
return[]}function C(e){var t=e.borders,n=e.colors
return{backgroundColor:n.backgroundLightest,borderRadius:t.radiusLarge,borderWidth:t.widthMedium,borderStyle:"dashed",borderColor:n.borderMedium,hoverBorderColor:n.borderBrand,acceptedColor:n.textBrand,rejectedColor:n.textDanger}}C.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
var x,A,z,F,R,I
var M={componentId:"emSEn",template:function(e){return"\n\n.emSEn_blJt,.emSEn_bGBk{position:relative}\n\n.emSEn_blJt{box-sizing:border-box;display:block}\n\n.emSEn_blJt.emSEn_JSXc{height:100%}\n\n.emSEn_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.emSEn_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .emSEn_QUBp,[dir=rtl] .emSEn_QUBp{text-align:center}\n\n.emSEn_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.emSEn_QUBp.emSEn_JSXc{height:100%}\n\n.emSEn_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.emSEn_byIz.emSEn_JSXc{height:100%}\n\n.emSEn_cbYS .emSEn_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.emSEn_cvQK .emSEn_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.emSEn_cFXB{cursor:not-allowed;pointer-events:none}\n\n.emSEn_eXzv{opacity:0.5}")},label:"emSEn_blJt",root:"emSEn_bGBk",withHeight:"emSEn_JSXc",input:"emSEn_cwos",labelContent:"emSEn_QUBp",layout:"emSEn_byIz",dragAccepted:"emSEn_cbYS",dragRejected:"emSEn_cvQK",functionallyDisabled:"emSEn_cFXB",visuallyDisabled:"emSEn_eXzv"}
function T(e){return e.keyCode===b.a.codes.space||e.keyCode===b.a.codes.enter}function G(){var e=false
try{e=document.documentMode||w["a"]}catch(e){}return e}var U=G()
var W=(x=Object(_["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),A=Object(D["a"])(),z=Object(L["l"])(C,M),x(F=A(F=z(F=(I=R=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var a
Object(o["a"])(this,n)
a=t.call(this,e)
a.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
a.enterCounter=0
a.fileInputEl=null
a.defaultId=null
a.handleDragEnter=function(e){e.preventDefault()
a.enterCounter+=1
if(a.enterCounter>1)return
var t=a.allFilesAccepted(a.getDataTransferItems(e))
a.setState({isDragAccepted:t,isDragRejected:!t})
a.props.onDragEnter(e)}
a.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var t=e
t.dataTransfer.dropEffect="copy"}catch(e){}a.props.onDragOver(e)
return false}
a.handleDragLeave=function(e){e.preventDefault()
a.enterCounter-=1
if(a.enterCounter>0)return
a.setState({isDragAccepted:false,isDragRejected:false})
a.props.onDragLeave(e)}
a.handleChange=function(e){var t=a.props,n=t.onDrop,r=t.onDropAccepted,o=t.onDropRejected
var l=a.getDataTransferItems(e,a.shouldEnablePreview)
var s=a.parseFiles(l),c=Object(i["a"])(s,2),d=c[0],u=c[1]
e.preventDefault()
a.enterCounter=0
n(d,u,e)
u.length>0&&o(u,e)
d.length>0&&r(d,e)
a.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
a.fileAccepted=function(e){return j(e,a.props.accept)}
a.handleRef=function(e){a.fileInputEl=e}
a.handleBlur=function(){a.setState({isFocused:false,isFileBrowserDisplayed:false})}
a.handleFocus=function(){a.setState({isFocused:true,isFileBrowserDisplayed:false})}
a.handleClick=function(e){a.fileInputEl.value&&a.shouldAllowRepeats&&(a.fileInputEl.value=null)
a.fileInputEl.focus()
a.props.onClick(e)
a.setState({isFileBrowserDisplayed:true})}
a.handleKeyDown=function(e){if(a.state.isFocused&&T(e)){a.shouldAllowRepeats&&(a.fileInputEl.value=null)
if(U){e.stopPropagation()
e.preventDefault()
a.fileInputEl.click()}}}
a.handleKeyUp=function(e){if(e.keyCode===b.a.codes.esc&&a.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
a.setState({isFileBrowserDisplayed:false})}}
a.defaultId=Object(B["a"])("FileDrop")
a.messagesId=Object(B["a"])("FileDrop-messages")
return a}Object(l["a"])(n,[{key:"getDataTransferItems",value:function(e,t){var n=Array.from(O(e,this.fileInputEl))
n.length>1&&(n=this.shouldAllowMultiple?n:[n[0]])
if(t)return n.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return n}},{key:"parseFiles",value:function(e){var t=this
var n=[]
var a=[]
e.forEach((function(e){t.fileAccepted(e)&&t.fileMatchSize(e)?n.push(e):a.push(e)}))
return[n,a]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?E(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.renderLabel
return Object(S["a"])(t||n,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e,t,n
var i=this.props,o=i.display,l=i.height,s=i.width,c=i.minWidth,d=i.maxWidth,p=i.margin,h=(i.onDropAccepted,i.onDropRejected,Object(r["a"])(i,["display","height","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var f=this.props.id||this.defaultId
var m="disabled"===this.interaction||"readonly"===this.interaction
var b=this.state.isDragRejected||this.invalid?"danger":void 0
var B=(e={},Object(a["a"])(e,M.label,true),Object(a["a"])(e,M.functionallyDisabled,m),Object(a["a"])(e,M.visuallyDisabled,"disabled"===this.interaction),Object(a["a"])(e,M.dragRejected,this.state.isDragRejected||this.invalid),Object(a["a"])(e,M.dragAccepted,this.state.isDragAccepted),Object(a["a"])(e,M.withHeight,l),e)
return u.a.createElement(y["a"],{display:o,position:"relative",width:s,minWidth:c,maxWidth:d,margin:p,height:l},u.a.createElement("label",{className:g()(B),htmlFor:f,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},u.a.createElement(y["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:b,height:l},u.a.createElement("span",{className:g()((t={},Object(a["a"])(t,M.labelContent,true),Object(a["a"])(t,M.withHeight,l),t))},u.a.createElement("span",{className:g()((n={},Object(a["a"])(n,M.layout,true),Object(a["a"])(n,M.withHeight,l),n))},u.a.createElement(y["a"],{height:l},this.renderLabel()))))),u.a.createElement("input",Object.assign({},Object(P["b"])(h),{onClick:this.handleClick,type:"file",className:M.input,id:f,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:m})),this.hasMessages?u.a.createElement(y["a"],{display:"block",margin:"small 0 0"},u.a.createElement(v["d"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(k["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
n.displayName="FileDrop"
return n}(d["Component"]),R.propTypes={id:h.a.string,renderLabel:h.a.oneOfType([h.a.func,h.a.node]).isRequired,accept:h.a.oneOfType([h.a.string,h.a.arrayOf(h.a.string)]),messages:h.a.arrayOf(v["e"].message),onClick:h.a.func,onDrop:h.a.func,onDropAccepted:h.a.func,onDropRejected:h.a.func,onDragEnter:h.a.func,onDragOver:h.a.func,onDragLeave:h.a.func,shouldEnablePreview:h.a.bool,shouldAllowMultiple:h.a.bool,shouldAllowRepeats:h.a.bool,maxSize:h.a.number,minSize:h.a.number,interaction:h.a.oneOf(["enabled","disabled","readonly"]),display:h.a.oneOf(["block","inline-block"]),height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),margin:L["c"].spacing,label:h.a.oneOfType([h.a.func,h.a.node]),enablePreview:h.a.bool,allowRepeatFileSelection:h.a.bool,allowMultiple:h.a.bool},R.defaultProps={onClick:function(e){},onDrop:function(e,t,n){},onDropAccepted:function(e,t){},onDropRejected:function(e,t){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",height:void 0,width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},I))||F)||F)||F)},agq5:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w}))
var a=n("VTBJ")
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var l=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var f=n.n(h)
var g=n("msMH")
var m=n("n12J")
var b=n("J2CL")
var v=n("E+IV")
var y=n("KgFQ")
var B=n("jtGx")
function L(e){var t=e.borders,n=e.colors,a=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,paddingSmall:a.small,paddingMedium:a.medium,paddingLarge:a.medium,iconColor:n.textDark,mediumMargin:a.small,largeMargin:a.medium,iconHoverColor:n.textLink,backgroundColor:n.backgroundLightest,iconHoverColorInverse:n.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:n.textDark,messageColorClickable:n.textLink,messageColorInverse:n.textLight,messageFontSizeSmall:r.fontSizeSmall,messageFontSizeMedium:r.fontSizeMedium,messageFontSizeLarge:r.fontSizeLarge,clickableActiveBg:n.backgroundBrand,clickableActiveText:n.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}L.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
var D,_,S,P
var k={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var w=(D=Object(b["l"])(L,k),D(_=(P=S=function(e){Object(l["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e.handleClick=function(t){var n=e.props,a=n.readOnly,r=n.onClick
if(a){t.preventDefault()
t.stopPropagation()}else"function"===typeof r&&r(t)}
return e}Object(o["a"])(n,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,n=e.headingAs,a=e.heading
return d.a.createElement("span",{className:k.heading},d.a.createElement(g["a"],{level:t,as:n,color:"primary"},a))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,n=e.message,a=e.hero
return d.a.createElement("span",{className:k.content},a&&d.a.createElement("span",{className:k.hero},this.renderHero()),t&&this.renderHeading(),n&&d.a.createElement("span",{className:k.message},Object(v["a"])(n)))}},{key:"render",value:function(){var e
var t=this.props,i=t.href,o=t.disabled,l=t.readOnly,s=t.onClick,c=t.size,u=t.margin,p=t.elementRef
var h=(e={},Object(r["a"])(e,k.root,true),Object(r["a"])(e,k[c],true),Object(r["a"])(e,k.clickable,i||s),Object(r["a"])(e,k.disabled,o),e)
var g=Object(y["a"])(n,this.props)
return d.a.createElement(m["a"],{as:"div",margin:u},d.a.createElement(m["a"],Object.assign({},Object(B["a"])(this.props,Object(a["a"])({},n.propTypes,{},m["a"].propTypes)),{type:"button"===g?"button":null,as:g,elementRef:p,className:f()(h),href:i,onClick:this.handleClick,disabled:o,"aria-disabled":o||l?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
n.displayName="Billboard"
return n}(c["Component"]),S.propTypes={hero:p.a.oneOfType([p.a.element,p.a.func]),size:p.a.oneOf(["small","medium","large"]),as:p.a.elementType,elementRef:p.a.func,heading:p.a.string,headingAs:p.a.oneOf(["h1","h2","h3","span"]),headingLevel:p.a.oneOf(["h1","h2","h3","h4"]),message:p.a.oneOfType([p.a.node,p.a.func]),onClick:p.a.func,href:p.a.string,disabled:p.a.bool,readOnly:p.a.bool,margin:b["c"].spacing},S.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},P))||_)}}])

//# sourceMappingURL=41-c-c1c12477ca.js.map