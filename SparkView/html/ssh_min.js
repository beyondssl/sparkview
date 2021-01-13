var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(k,p,n){if(null==k)throw new TypeError("The 'this' value for String.prototype."+n+" must not be null or undefined");if(p instanceof RegExp)throw new TypeError("First argument to String.prototype."+n+" must not be a regular expression");return k+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(k,p,n){if(k==Array.prototype||k==Object.prototype)return k;k[p]=n.value;return k};
$jscomp.getGlobal=function(k){k=["object"==typeof globalThis&&globalThis,k,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var p=0;p<k.length;++p){var n=k[p];if(n&&n.Math==Math)return n}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(k,p){var n=$jscomp.propertyToPolyfillSymbol[p];if(null==n)return k[p];n=k[n];return void 0!==n?n:k[p]};$jscomp.polyfill=function(k,p,n,w){p&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(k,p,n,w):$jscomp.polyfillUnisolated(k,p,n,w))};
$jscomp.polyfillUnisolated=function(k,p,n,w){n=$jscomp.global;k=k.split(".");for(w=0;w<k.length-1;w++){var A=k[w];if(!(A in n))return;n=n[A]}k=k[k.length-1];w=n[k];p=p(w);p!=w&&null!=p&&$jscomp.defineProperty(n,k,{configurable:!0,writable:!0,value:p})};
$jscomp.polyfillIsolated=function(k,p,n,w){var A=k.split(".");k=1===A.length;w=A[0];w=!k&&w in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var W=0;W<A.length-1;W++){var ia=A[W];if(!(ia in w))return;w=w[ia]}A=A[A.length-1];n=$jscomp.IS_SYMBOL_NATIVE&&"es6"===n?w[A]:null;p=p(n);null!=p&&(k?$jscomp.defineProperty($jscomp.polyfills,A,{configurable:!0,writable:!0,value:p}):p!==n&&($jscomp.propertyToPolyfillSymbol[A]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(A):$jscomp.POLYFILL_PREFIX+A,
A=$jscomp.propertyToPolyfillSymbol[A],$jscomp.defineProperty(w,A,{configurable:!0,writable:!0,value:p})))};$jscomp.polyfill("String.prototype.startsWith",function(k){return k?k:function(p,n){var w=$jscomp.checkStringArgs(this,p,"startsWith");p+="";var A=w.length,W=p.length;n=Math.max(0,Math.min(n|0,w.length));for(var ia=0;ia<W&&n<A;)if(w[n++]!=p[ia++])return!1;return ia>=W}},"es6","es3");
$jscomp.polyfill("Array.prototype.fill",function(k){return k?k:function(p,n,w){var A=this.length||0;0>n&&(n=Math.max(0,A+n));if(null==w||w>A)w=A;w=Number(w);0>w&&(w=Math.max(0,A+w));for(n=Number(n||0);n<w;n++)this[n]=p;return this}},"es6","es3");$jscomp.typedArrayFill=function(k){return k?k:Array.prototype.fill};$jscomp.polyfill("Int8Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint8Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Int16Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint16Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Int32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Float32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");
$jscomp.polyfill("Float64Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("String.prototype.trimRight",function(k){function p(){return this.replace(/[\s\xa0]+$/,"")}return k||p},"es_2019","es3");var svManager={getInstance:function(){var k=window.$ssh;return k&&k.running&&k.running()?k:null}};
function connvertServer(k){var p={};p.id=k.id;p.server=k.id;p.displayName=k.displayName||k.id;if(k=k.ssh){for(var n in k)p[n]=k[n];p.user=k.username||"";p.pwd=k.password||""}return p}
svGlobal.SSH=function(k,p,n,w){function A(a){return"on"==a||"true"==a||1==a}function W(){var a=k.indexOf("://"),b=k.substring(a+3);a=b.indexOf("/");0<a&&(b=b.substring(0,a));return location.protocol+"//"+b}function ia(a){if(!za)return"";var b=W(),e=Aa.clipboard,d=e.indexOf("://");b=(0<d&&11>d?e:b+e)+"s="+za+"&t="+Date.now()+"&type="+a;return hi5.browser.httpGet(h.modifyURL(b),!1)}function Ja(a,b){b&&(O=b);a&&(U=a,Ba=(U-1)*m);Qa=1==O&&U==Math.floor(n/m)}function Ca(a,b,e,d){var c=a,t=b;d=d||Math.floor(t/
m);b=e||Math.floor(c/z);a=null;e&&(c=M*z,t=P*m);F&&(a=q.getImageData(0,0,Math.min(b*z,L),Math.min(d*m,P*m)));p=c;n=t;e=p;c=n;B.setSize(e,c);X.width=e;X.height=c;q.textBaseline="top";e=r.fontFamily||r.fontName||"Courier New";0<e.indexOf(" ")&&(e="'"+e+"'");q.font=r.fontSize+"px "+e;Da();a&&(q.putImageData(a,0,0),ba());P=d;M=b;L=M*z;Ja(Math.floor(n/m));D?D.resize(M,P):D=new Ra(M,P);if(h.onresolutionchange)h.onresolutionchange(p,n)}function Ka(a){x.send(a)}function Sa(a,b,e){this.need=a;this.handler=
b;this.repeat=e||1}function nb(a){Y=new RecordingManager;Y.setHeader({name:"rec",width:a.width,height:a.height,color:a.fontSize,namesuffix:".sshv",filetag:"SSHV",duration:0})}function ob(a,b){var e=0,d=!1;this.width=a;this.interval=b;var c=0;this.start=function(){d||(d=!0,e=setInterval(function(){if(B&&F){var t=B.getThumbnail(a);t&&t.length!=c&&(x.send("8E7"+t),c=t.length)}},b))};this.stop=function(){clearInterval(e)}}function pb(a,b){!V||V.width==a&&V.interval==b||(V.stop(),V=null);V||(V=new ob(a,
b));V.start()}function qb(a){F&&x.send("5D"+a.join("\t"));G=null}function Ta(){if(G){var a=G.answer.length;a<G.prompt.length?(ca(G.prompt[a]),ba(),oa()):(x.send("5D"+G.answer.join("\t")),G=null)}}function rb(a){F&&x.send("5B"+a)}function sb(a){var b=parseInt(a.substring(0,1),16),e=a.substring(1);a=!1;var d=h.sessionInfo.appInfo;switch(b){case 1:var c=JSON.parse(e);h.onsessionjoin&&(a=h.onsessionjoin(c));if(a)break;h.showMessage(__svi18n.info.joinsession.applyArgs([c.numericId,c.__ip,c.name]));break;
case 2:c=JSON.parse(e);h.onsessionexit&&(a=h.onsessionexit(c));if(a)break;h.showMessage(__svi18n.info.exitsession.applyArgs([c.numericId,c.__ip,c.name]));break;case 3:c=JSON.parse(e);d.joinMode!=c.mode&&(d.joinMode=c.mode,b=hi5.$("joinSelect"))&&(b.value=c.mode);if(d.hasControl)break;B.setReadOnly(!1);if(b=hi5.$("requestControl"))b.disabled=!0;h.ongivecontrol&&(a=h.ongivecontrol());if(a)break;h.showMessage(__svi18n.info.givecontrol);break;case 4:B.setReadOnly(!0);d.hasControl=!1;if(b=hi5.$("requestControl"))b.disabled=
!1;h.ontakebackcontrol&&(a=h.ontakebackcontrol());if(a)break;h.showMessage(__svi18n.info.nocontrol);break;case 5:c=JSON.parse(e);h.onrequirecontrol&&(a=h.onrequirecontrol(c));if(a)break;a=__svi18n.info.title.applyArgs([c.name,c.numericId,c.__ip]);h.showMessage({title:a,msg:__svi18n.info.recontrol,cbYes:function(){h.giveControl(c.numericId);this.destroy()},cbNo:function(){h.refuseControl(c.numericId);this.destroy()}});break;case 6:B.setTouchRemoting(!0);break;case 7:c=JSON.parse(e);c.width&&c.height&&
Ca(0,0,c.cols,c.rows);break;case 8:c=JSON.parse(e);if(h.onrequestcredential&&h.onrequestcredential(c))break;B.requestCredential(c);break;case 9:c=JSON.parse(e);0<c.interval&&0<c.width?pb(c.width,c.interval):V&&(V.stop(),V=null);break;case 11:c=JSON.parse(e);h.onrequirejoin&&(a=h.onrequirejoin(c));if(a)break;a=__svi18n.info.title.applyArgs([c.name,c.numericId,c.__ip]);h.showMessage({title:a,msg:__svi18n.info.reqjoin,cbYes:function(){h.allowJoin(c.numericId,!0);this.destroy()},cbNo:function(){h.allowJoin(c.numericId,
!1);this.destroy()}});break;case 12:Ua=!0}}function tb(a){var b=C.page&&C.page.join||"";if(b.startsWith("http://")||b.startsWith("https://"))return b;if(b.startsWith("/"))return location.origin+b;var e=location.href,d=e.lastIndexOf("/");if(b)return e.substring(0,d+1)+b;b=W();e.toLowerCase().startsWith(b.toLowerCase())&&(b=e.substring(0,d));return b+"/"+a}function pa(a){ta.style.display=a?"none":"block"}function ub(a){svGlobal.logger.info("opened...");F=!0;x.send("87"+navigator.userAgent);if(h.onopen)h.onopen()}
function vb(a){svGlobal.logger.warn(a)}function Ea(a){svGlobal.logger.warn("closed ...");pa(!0);if(!F&&((a=__svi18n.errorCode.connection)||(a="error connection"),h)){if(h.onerror)h.onerror({name:"connection",message:a});h.showMessage(a);0<svGlobal.log&&console.error(a)}ua=F=!1;if(h&&h.onclose)h.onclose(Ua);try{null!=Y&&(Y.exit(),Y=null),B&&B.close()}catch(b){}ma&&(ma.release(),ma=null);X=q=null;x&&(x.onopen=null,x.onmessage=null,x.onclose=null,x=x.onerror=null);B=Q=null;h&&(h=null);window&&window.$ssh&&
(window.$ssh=null);null!=Y&&(Y.exit(),Y=null)}function Va(){10>r.fontSize&&(r.fontSize=10);13>r.fontSize?m=r.fontSize+6:12<r.fontSize&&19>r.fontSize?m=r.fontSize+8:18<r.fontSize&&25>r.fontSize?m=r.fontSize+12:24<r.fontSize&&(m=r.fontSize+16);r.lineHeight&&(m=parseInt(r.lineHeight));Wa=(m-r.fontSize)/2|0;q.textBaseline="top";var a=r.fontFamily||"Courier New";0<a.indexOf(" ")&&(a="'"+a+"'");q.font=r.fontSize+"px "+a;z=q.measureText("X").width;P=parseInt(n/m);M=parseInt(p/z);L=M*z;Ja(parseInt(n/m));
D?D.resize(M,P):D=new Ra(M,P)}function La(){Da();y=u=0;Va();ta.style.width=z+"px";ta.style.height=m+"px";ua=!0}function ba(){Xa||Ya.drawImage(X,0,0)}function Za(a){switch(a){case 0:break;case 5:break;case 7:break;case 8:Ma();break;case 9:a=u/z/8;a=parseInt(a)+1;u=8*a*z;qa();break;case 10:y+=m;qa(!0);break;case 11:y+=m;qa(void 0);break;case 12:break;case 13:$a();break;case 14:break;case 15:break;default:console.log("Unknown C0 control:"+a)}}function wb(a){var b=a.getPosition();if(!Z.parse(a))return a.setPosition(b-
2),!1;a=Z.count;b=Z.parameters;switch(Z.command){case 64:0==a&&(b[0]=1);a=b[0];b="";for(var e=a*z,d=q.getImageData(u,y,L-u-e,m),c=0;c<a;c++)b+=" ";ca(b);u-=e;q.putImageData(d,u+e,y);D.insertSpace(a,R(),N());break;case 65:0==a&&(b[0]=1);y-=(b[0]||1)*m;break;case 66:0==a&&(b[0]=1);y+=(b[0]||1)*m;break;case 67:0==a&&(b[0]=1);u+=(b[0]||1)*z;break;case 68:0==a&&(b[0]=1);u-=(b[0]||1)*z;break;case 69:0==a&&(b[0]=1);y+=b[0]*m;u=0;break;case 70:0==a&&(b[0]=1);y-=b[0]*m;u=0;break;case 71:0==a&&(b[0]=1);Fa(0,
b[0]);break;case 72:case 102:0==a&&(b[0]=b[1]=1);Fa(b[0]||1,b[1]||1);break;case 74:a||(b[0]=0);switch(b[0]){case 0:q.fillStyle=K;q.fillRect(u,y,L-u,P*m-y);q.fillStyle=I;D.clearEOS(R(),N());break;case 1:q.fillStyle=K;q.fillRect(0,0,u,y);q.fillStyle=I;D.clearBOS(R(),N());break;case 2:Da();y=u=0;D.cleanScreen();break;case 3:Da();y=u=0;D.cleanScreen();break;default:console.log("invalid CSI J:"+b[0])}break;case 75:a||(b[0]=0);switch(b[0]){case 0:ab();break;case 1:q.fillStyle=K;q.fillRect(0,y,u,m);q.fillStyle=
I;D.clearBOL(R(),N());break;case 2:q.fillStyle=K;q.fillRect(0,y,L,m);q.fillStyle=I;D.clearLine(N());break;default:console.log("invalid CSI K:"+b[0])}break;case 76:case 84:a||(b[0]=1);bb(b[0]);break;case 77:case 83:a||(b[0]=1);cb(b[0]);break;case 80:a||(b[0]=1);a=b[0];b=u+a*z;b=q.getImageData(b,y,L-b,m);ab();q.putImageData(b,u,y);D.deleteChars(R(),N(),a);break;case 88:a||(b[0]=1);a=b[0];q.fillStyle=K;q.fillRect(u,y,a*z,m);q.fillStyle=I;D.eraseChars(R(),N(),a);break;case 90:a||(b[0]=1);u=8*((u/z/8|
0)-b[0]+1)*z;qa();break;case 100:a||(b[0]=1);Fa(b[0]);break;case 101:a||(b[0]=1);Fa(N()+b[0]);break;case 104:if(63==Z.mode)switch(b[0]){case 1:na.setEscMode(1);break;case 5:console.log("Reversal screen mode");break;case 6:console.log("Relative origion mode");break;case 7:console.log("wraparound mode on");va=!0;break;case 25:pa(!1);break;case 45:console.log("reverse-wraparound mode on");break;case 1E3:case 1001:case 1002:case 1003:case 1005:case 1006:T=b[0];console.log("mouse tracking on:"+T);break;
default:console.log("TODO: CSI ? Pm h, Ps:"+b[0])}break;case 108:if(63==Z.mode)switch(b[0]){case 1:na.setEscMode(0);break;case 2:na.setEscMode(2);case 5:console.log("Normal screen mode");break;case 6:console.log("Absolute origion mode");break;case 7:va=!1;break;case 12:break;case 25:pa(!0);break;case 45:console.log("reverse-wraparound mode off");break;case 1E3:case 1001:case 1002:case 1003:case 1005:case 1006:T=0;break;default:console.log("TODO: CSI ? Pm l, Ps:"+b[0])}break;case 109:0==a&&(a=1,b[0]=
0);for(e=0;e<a;e++)switch(b[e]){case 0:wa(7);xa(0);Na(!1);break;case 1:Na(!0);break;case 2:break;case 4:break;case 5:case 8:break;case 7:wa(0);xa(7);break;case 27:wa(7);xa(0);break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:wa(b[e]-30);break;case 38:return 2==b[e+1]&&(I="rgb("+b[e+2]+","+b[e+3]+","+b[e+4]+")",q.fillStyle=I),!0;case 39:wa(7);break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:xa(b[e]-40);break;case 48:return 2==b[e+1]&&(K="rgb("+b[e+2]+","+b[e+
3]+","+b[e+4]+")"),!0;case 49:xa(0);1==e&&39==b[0]&&Na(!1);break;default:return console.log("TODO: SGR="+Z.toString()),!0}break;case 110:6==b[0]?63==Z.mode?J("\u001b[?"+N()+";"+R()+"R"):J("\u001b["+N()+";"+R()+"R"):5==b[0]&&J("\u001b[0n");break;case 114:Z.mode||Ja(b[1],b[0]);break;default:console.log("TODO: CSI="+Z.toString())}return!0}function bb(a){a||(a=1);var b=(O-1)*m,e=q.getImageData(0,b,L,(U-O-a+1)*m);q.fillStyle=K;q.fillRect(0,b,L,m*a);q.putImageData(e,0,(O+a-1)*m);q.fillStyle=I;D.scrollUp(a,
O,U)}function cb(a){a||(a=1);var b=(O-1)*m,e=U*m,d=a*m,c=b+d;c=q.getImageData(0,c,L,e-c);q.fillStyle=K;q.fillRect(0,e-d,L,d);q.fillStyle=I;q.putImageData(c,0,b);D.scrollDown(a,O,U)}function qa(a){va&&u>=L&&(u=0,y+=m);if((va||a)&&y>Ba){for(;y>Ba;)y-=m;Qa?(q.drawImage(X,0,-m),q.fillStyle=K,q.fillRect(0,Ba,p,m),D.appendLines(1)):(a=q.getImageData(0,(O-0)*m,L,(U-O)*m),q.fillStyle=K,q.fillRect(0,(O-1)*m,L,(U-O+1)*m),q.putImageData(a,0,(O-1)*m));q.fillStyle=I}}function Ma(){u-=z;0>u&&(u=0)}function N(){return parseInt(y/
m)+1}function R(){return parseInt(u/z)+1}function Fa(a,b){b&&(u=(b-1)*z,0>u&&(u=0));a&&(y=(a-1)*m)}function xa(a){K=Ga[a];K||(K=r.bgColor||"black",console.log("xx colorIndex:"+a))}function wa(a){db=a;I=ya[a];I||(I=r.fgColor||"white",console.log("xx colorIndex:"+a));q.fillStyle=I}function Na(a){ya=a?eb:Ga;I=ya[db]}function ab(){q.fillStyle=K;q.fillRect(u,y,L-u,m);q.fillStyle=I;D.clearEOL(R(),N())}function Da(){q.fillStyle=K;q.fillRect(0,0,X.width,X.height);q.fillStyle=I}function oa(){ta.style.top=
y+"px";ta.style.left=u+"px"}function ca(a){S.on&&(a.startsWith(S.prompt)?(S.on=!1,setTimeout(S.process,30)):S.text+=a);var b=a.length,e=(u/z|0)+b-M;0<e?(b-=e,fb(a.substring(0,b),b),qa(),ca(a.substring(b))):fb(a,b)}function fb(a,b){a&&(D.writeText(R(),N(),a),b*=z,q.fillStyle=K,q.fillRect(Math.floor(u),y,Math.ceil(b),m),q.fillStyle=I,q.fillText(a,u,y+Wa),u+=b)}function gb(a){da+=a;ja?(ca(a),ba(),oa()):G&&G.echo[G.answer.length]&&(ca(a),ba(),oa())}function $a(){u=0;y>(U-1)*m&&(y=(U-1)*m)}function xb(a){if(F)return(a=
a.getData("text/plain"))?(a=a.replace(/\r\n/g,"\n"),ja||G?gb(a):J(a),!0):!1}function hb(){if(aa){var a=!!aa.value;aa.value=D.toString();a||(a=new hi5.ui.Lightbox(document.getElementById("copydialog")),a.show(),B&&B.setIgnorePaste(!1),a.onclose=function(){aa.value=""});setTimeout(function(){aa.scrollTop=aa.scrollHeight},10)}}function ib(a){A(r.mapDisk)&&(H||(H=new hi5.file.UploadManager(new hi5.file.WsFileService(Ka),!1),H.enabled=!0,H.canCopyFile=!1,H.addEvent("beforeupload",function(b,e,d){h.beforeupload&&
h.beforeupload(b,e,d)}),H.addEvent("fileuploaded",function(b,e,d){if(h.onfileuploaded)h.onfileuploaded(b,e,d)}),H.addEvent("uploaded",function(b,e){if(h.onuploaded)h.onuploaded(b,e)}),H.addEvent("uploadingCancelled",function(){if(h.onuploadingCancelled)h.onuploadingCancelled()})),a.setFileHandler(H))}function J(a){if(a){a=unescape(encodeURIComponent(a));var b=a.length+1,e=new Uint8Array(b);e[0]=147;for(var d=1;d<b;d++)e[d]=a.charCodeAt(d-1);x.send(e.buffer)}}function Ra(a,b){function e(){var f=Array(a);
hi5.Arrays.fill(f,0,a," ");return f}var d=0,c=[],t=10*b;this.resize=function(f,g,l){l=0;for(var v=c.length;l<v;l++)if(c[l]&&(c[l].length=f,f>a))for(var E=a;E<f;E++)c[l][E]=" ";a=f;b=g;t=10*b};this.writeText=function(f,g,l){g--;f--;var v=c[d+g];v||(v=e(),c[d+g]=v);g=0;for(var E=l.length;g<E;g++)v[g+f]=l[g]};this.appendLines=function(f){d+=f};this.scrollDown=function(f,g,l){l=d+l-1-f;for(g=d+g-1;g<=l;g++)c[g]=c[g+f];l++;for(g=0;g<f;g++)c[l+g]=e()};this.scrollUp=function(f,g,l){g=d+g-1+f;for(l=d+l-1;l>=
g;l--)c[l]=c[l-f];g--;for(l=0;l<f;l++)c[g-l]=e()};this.cleanScreen=function(){d=c.length;if(d>=t){var f=2*b;c.splice(0,f);d-=f}};this.clearEOS=function(f,g){g--;f--;for(var l=d+g,v,E=0,ea=b-g;E<ea;E++)if(v=c[l+E])for(g=f;g<a;g++)v[g]=" "};this.clearBOS=function(f,g){g--;f--;for(var l=d,v,E,ea=0;ea<g;ea++)if(E=c[l+ea])for(v=0;v<f;v++)E[v]=" "};this.clearLine=function(f){f--;(f=c[d+f])&&hi5.Arrays.fill(f,0,a," ")};this.clearBOL=function(f,g){g--;f--;if(g=c[d+g])for(var l=0;l<f;l++)g[l]=" "};this.clearEOL=
function(f,g){g--;f--;if(g=c[d+g])for(;f<a;f++)g[f]=" "};this.eraseChars=function(f,g,l){g--;f--;if(g=c[d+g]){var v=f;for(f+=l;v<f;v++)g[v]=" "}};this.deleteChars=function(f,g,l){g--;f--;(g=c[d+g])&&g.splice(f,l)};this.insertSpace=function(f,g,l){l--;g--;if(l=c[d+l]){for(var v=l.length-1;v>=g;v--)l[v+f]=l[v];for(v=0;v<f;v++)l[g+v]=" "}};this.getSingleLine=function(f,g,l){f--;g--;l--;var v="";if(f=c[d+f])for(;g<l;g++)v+=f[g];return v.trimRight()};this.getMultiLines=function(f,g,l,v){if(v<g)return this.getMultiLines(l,
v,f,g);var E=v-g+1;if(1>E)return null;if(1==E)return this.getSingleLine(g,f,l);f=this.getSingleLine(g,f,a);l=this.getSingleLine(v,1,l);E-=2;g+=d;for(var ea=0;ea<E;ea++)f=(v=c[ea+g])?f+("\r\n"+v.join("").trimRight()):f+"\r\n\r\n";return f+"\r\n"+l};this.toString=function(){for(var f="",g=0,l=c.length;g<l;g++)c[g]&&(f+=c[g].join("").trimRight()),f+="\r\n";return f}}var fa=0,ha=null,Ua=!1;this.displayMsg=!0;this.reconnectTimes=0;this.setTitle=this.openLink=!0;this.mode=0;this.reconnectOnResize=!0;var h=
this;this.getHistory=function(){return D.toString()};hi5.appcfg||(hi5.appcfg={img:{},toolbar:{fadable:!0},displayMsg:!0});var C=hi5.appcfg,S={on:!1,text:"",prompt:"",cmd:"",process:function(){var a=S.cmd.indexOf(" "),b=S.cmd.substring(a+1);a=b.lastIndexOf(".");var e="";if(-1!=a)switch(b.substring(a+1).toLowerCase()){case "jpe":case "jpg":case "jpeg":e="image/jpeg";break;case "gif":e="image/gif";break;case "bmp":e="image/bmp";break;case "svg":e="image/svg+xml";break;case "png":e="image/png";break;
case "webp":e="image/webp";break;case "ico":e="image/x-icon"}a="data:"+(e||"application/octet-stream")+";base64,"+S.text;S.text="";h.showMessage(e?{msg:'<img src="'+a+'" style="max-width:100%"/>'}:{msg:'<a download="'+b+'" href="'+a+'" target="_blank">'+b+"</a>"})}};void 0!=C.reconnectOnResize&&(this.reconnectOnResize=C.reconnectOnResize);var Oa="object"==typeof k?k:null,jb="object"==typeof k||0<k.indexOf("/PLAY?");jb?(this.mode=1,Oa&&(k=""),k+="&touchpad=on"):0<k.indexOf("/JOIN?")&&(this.mode=2,
this.reconnectOnResize=!1);var r=hi5.tool.queryToObj(k.substring(k.indexOf("?")+1));r.keyfile&&r.keyfile.startsWith("-----BEGIN")&&(C.wsPost=!0);r.color||(r.color=32);var aa=A(r.mapClipboard)?document.getElementById("copytextarea"):null,D=null;aa&&(aa.value="");var Aa={download:"/DOWNLOAD?",clipboard:"/CLIP?"};this.setLinks=function(a){a.download&&(Aa.download=a.download);a.clipboard&&(Aa.clipboard=a.clipboard)};this.server=r.server;this.port=parseInt(r.port,10);this.sessionInfo={major:0,minor:0,
width:0,height:0,bpp:0,bigEndian:!0,trueColor:!0};var B=null,F=!1,ua=!1,Pa=0,za="",T=0,H=null;C.copyDialog=!0;var u=0,y=0,z=0,m=18,Wa=0,Ga="#000 #cd0000 #00cd00 #cdcd00 #0000ee #cd00cd #00cdcd #e5e5e5".split(" "),eb="#7f7f7f #ff0000 #00ff00 #ffff00 #5c5cff #ff00ff #00ffff #ffffff".split(" "),ya=Ga,I=r.fgColor||ya[7],K=r.bgColor||ya[0],db=0,va=!0;r.wraparoundMode&&(va=A(r.wraparoundMode));var O=1,U=24,Ba=0,Qa=!0,ta=document.getElementById("cursorID"),P=0,M=0,L=0,Y=null;window.$ssh=this;var ma=new function(a){var b=
0,e=0,d=new Uint8Array(a),c=this,t=new Sa(0,null,0);this.needMore=!1;this.release=function(){c=d=t=null};this.getHandler=function(){return t};this.getData=function(){return d};this.getPosition=function(){return b};this.setPosition=function(f){b=f};this.getEnd=function(){return e};this.has=function(f){return e-b>=f};this.set=function(f){var g=f.length,l=e-b;if(1>l)e=g,d=f;else{var v=d.subarray(b,e);e=l+g;g=new Uint8Array(e);g.set(v);g.set(f,l);d=g}b=0};this.handle=function(){t.handler(c,t)};this.setHandler=
function(f){f&&1>f.need&&svGlobal.logger.warn("need < 1");(t=f)&&e-b>=f.need&&f.handler(c,f)};this.getByte=function(){return d[b++]};this.peekByte=function(){return d[b]};this.getBE32=function(){return d[b++]<<24|d[b++]<<16|d[b++]<<8|d[b++]};this.getBE16=function(){return d[b++]<<8|d[b++]};this.skip=function(f){b+=f};this.skipBack=function(f){b-=f};this.getBytes=function(f,g){if(g)for(var l=0;l<f;l++)g[l]=d[b++];else return g=b,b+=f,d.subarray(g,b)};this.copyToByteArray=function(f,g,l,v){hi5.Arrays.arraycopy(d,
l,f,g,v)}}(4194304);this.__que=ma;this.running=function(){return F};this.setColorTable=function(a){Ga=a};this.setColorTableBright=function(a){eb=a};this.loadbalanceToken=C.loadbalanceTokenName?C.loadbalanceTokenName+"="+hi5.tool.uuid():"";this.mapCmdToCtrl=!0;var x=null;p||(p=window.innerWidth);r.width=p;k+="&width="+p;n||(n=window.innerHeight);r.height=n;k+="&height="+n;w=(w=w||r.fontSize)?parseInt(w):13;r.fontSize?(w=parseInt(r.fontSize,10),r.fontSize=w):(r.fontSize=w,k+="&fontSize="+w);var Ya,
X=window.OffscreenCanvas?new OffscreenCanvas(p,n):document.createElement("canvas"),q;this.modifyURL=function(a){h.loadbalanceToken&&(a+="&"+h.loadbalanceToken);return a};this.__write=Ka;this.getFileUrl=function(a){var b=W(),e=Aa.download,d=e.indexOf("://");b=(0<d&&11>d?e:b+e)+"s="+za+"&f="+a;return h.modifyURL(b)};this.listFiles=function(a,b){H&&H.list(a,b)};this.reconnect=function(a,b){Ca(a,b);x.send("ED"+M+"\t"+P+"\t"+p+"\t"+n)};var Q=new function(a){this.setJoinMode=a.setJoinMode;this.requestControl=
a.requestControl;this.writeKeyComb=a.writeKeyComb;this.localLockFlags=0;this.checkLockFlags=!0;this.getAppMode=function(){return a.mode};this.send=function(e){"891"!=e&&F&&a.__write(e)};this.sendInput=function(e){a.writeRawInput(e);if(a.onactivity)a.onactivity(e)};var b=null;this.getAppInfo=function(){return a.sessionInfo.appInfo};this.onresize=function(e){if(e=e.target.svSurface){e=e.getFreeSpace();var d=e.width,c=e.height;hi5.browser.isTouch||Math.abs(p-d)<z&&Math.abs(n-c)<m||!a.reconnectOnResize||
!F||(b&&(clearTimeout(b),b=null),b=setTimeout(function(){Ca(d,c);x.send("ED"+M+"\t"+P+"\t"+p+"\t"+n)},333))}};this.onorientationchange=function(e){};this.getClipData=ia;this.onfocus=function(e){};this.getShareFiles=a.listFiles;this.getFile=function(e){var d=a.getFileUrl(e);a.ondownload&&a.ondownload({fileName:e,url:d})||window.open(d)};this.getFileLink=a.getFileUrl;this.getGateway=function(){return k};this.reconnect=function(e,d,c){};this.sendKeyboardSyncFlags=function(e){return F?(this.remoteLockFlags=
this.localLockFlags=e,!0):!1};this.setWorkDir=function(e,d){d&&a.writeText("cd "+d+"\n")}}(this);void 0!=C.displayMsg?this.displayMsg=C.displayMsg:C.displayMsg=this.displayMsg;void 0!=C.reconnectTimes&&(this.reconnectTimes=C.reconnectTimes);void 0!=C.openLink&&(this.openLink=C.openLink);void 0!=C.setTitle&&(this.setTitle=C.setTitle);"boolean"==typeof C.useWSS&&(k=(C.useWSS?"wss":"ws")+k.substring(k.indexOf("://")));this.getURL=function(){return k};var yb=parseInt(r.server_bpp||r.color||24);this.getColor=
function(){return yb};this.run=function(){if(!F){if(Oa)x=Oa,La();else{Va();var a=k+="&cols="+M+"&rows="+P;hi5.browser.binaryWS()&&(a+="&binary=on");var b=window.opener;if(b){var e=null;try{e=b.__sparkUser}catch(d){}e&&(b=e.account,e=e.session,b&&(a+="&account="+b),e&&(a+="&session="+e))}k=a+("&pasteCap="+(hi5.browser.isChrome&&hi5.browser.isDesktop?3:0));a=0==h.mode&&C.wsPost?k.substring(0,k.indexOf("?"))+"?_METHOD=post":k;a=h.modifyURL(a);(e=hi5.browser.cookie.get("__SV_TOKEN_A"))&&(a+="&__SV_TOKEN_A="+
encodeURIComponent(e));x=new WebSocket(a,"ssh");x.binaryType="arraybuffer"}x.onopen=ub;void 0!=r.recording&&"on"==r.recording&&nb(r);x.onmessage=function(d){d=d.data;if("string"!=typeof d){var c=new Uint8Array(d);null!=Y&&Y.add(new RecordingObj(c,0,d.byteLength));ma.set(c);ma.handle()}else{var t=parseInt(d.substring(0,2),16);c=d.substring(2);switch(t){case 0:d=k.substring(k.indexOf("?")+1);x.send("00"+d);x.send("87"+navigator.userAgent);break;case 15:d=JSON.parse(c);x.send("8D");if(h){h.sessionInfo.protocolVersion=
d.protocolVersion;if(h.onready)h.onready();if(h.onloggedin)h.onloggedin();C.pingInterval&&h.startPing(C.pingInterval);H&&(H.enabled=!0)}pa(!1);break;case 26:d=JSON.parse(c);if(d.name){svGlobal.logger.info("msg="+c);if(h.onerror)h.onerror(d);c=__svi18n.errorCode["S"+d.name]||"";c+=d.message||d.msg;h.showMessage(c)}else 0<svGlobal.log&&console.erro("No error code for message:"+c);break;case 27:0!=C.drawLicense&&B.drawLicense(c);break;case 56:d=JSON.parse(c);za=d.session;d.server=h.server;if(c=hi5.$("joinSelect"))c.value=
d.joinMode;if(c=hi5.$("requestControl"))c.disabled=d.hasControl;c=tb("joinssh.html")+"?id="+d.numericId;c=h.modifyURL(c);var f=d.webAddress;f&&0<f.length&&(t=f.indexOf("://"),f=f.substring(t+3),t=f.indexOf("/"),0<t&&(f=f.substring(0,t)),f.toLowerCase()!=location.host.toLowerCase()&&(c+="&gateway="+f));d.joinLink=c;h.sessionInfo.appInfo=d;d.ver&&d.ver!=svGlobal.version&&svGlobal.logger.warn("Client:"+svGlobal.version+" server:"+d.ver);La();if(h&&h.onsessionstart)h.onsessionstart(h.sessionInfo);break;
case 58:if(H)if(d=parseInt(c.charAt(0),10),c=c.substring(1),5==d)H.notifyFiles(JSON.parse(c));else switch(c=c.split("\t"),d){case 1:H.confirmId(c[0],c[1],c[2]);break;case 2:H.read(c[0],parseInt(c[1],10),parseInt(c[2],10));break;case 4:H.close(c[0]);break;case 9:d='<a href="'+c[0]+'" download="'+c[1]+'" target="_blank">'+__svi18n.info.fileReady+"</a>",surfaces.getFocused().showMessage({msg:d,title:__svi18n.info.download})}break;case 59:d=hi5.Base64.dec(c,0);Pa=d[3]<<24|d[2]<<16|d[1]<<8|d[0];Pa&64&&
h.showMessage(__svi18n.info.recording);B.setFeature(Pa);break;case 61:d=JSON.parse(c);switch(d.type){case 0:r.fontSize=parseInt(d.fontSize);p=d.width;n=d.height;La();B.setAutoScale(!0);Ca(0,0,M,P);if(c=d.server)h.server=d.server,h.setTitle&&(document.title=r.displayName||h.server);(c=d.mapDisk)&&ib(B);pa(!1);kb=d.length;if(h.onopened)h.onopened(d);break;case 1:d=d.duration;if(h.onprogress)h.onprogress(d,kb);break;case 2:2==d.status?F=!0:((Xa=c=0==d.status)||ba(),d.warn&&h.showMessage(c?__svi18n.info.sessionPaused:
__svi18n.info.sessionResumed))}break;case 62:sb(c);break;case 91:ua=!0;if(h.onusername)h.onusername(rb);else ca(__svi18n.info.user||c),ja=!0,ba(),oa();break;case 93:G=JSON.parse(c);if(h.onauthprompt)h.onauthprompt(G,qb);else d=G.name||"",G.instruction&&(d+=G.instruction),d&&(y+=m,u=0,ca(d),oa()),G.answer=[],Ta();break;default:svGlobal.logger.warn("@TODO:"+d+"\n")}}};x.onclose=Ea;x.onerror=vb;h.setTitle&&(document.title=r.displayName||h.server)}};this.setJoinMode=function(a){F&&x.send("8E1"+a)};this.refuseControl=
function(a){F&&x.send("8E3"+a)};this.giveControl=function(a){F&&x.send("8E4"+a)};this.requestControl=function(){F&&x.send("8E2")};this.play=function(){x.send("F3")};this.pause=function(){x.send("F2")};this.scan=function(a){x.send("F4"+(a?"1":"0"))};this.seek=function(a){B&&F&&x.send("F4"+(a?"1":"0")+"\t"+(a/B.getScale().x|0))};this.allowJoin=function(a,b){x.send("8EA"+a+"\t"+(b?1:0))};var V=null,ja=!1,G=null,da="",kb=0;this.hide=function(){B&&(pa(!0),B.hide())};this.showMessage=function(a,b){h.displayMsg&&
a&&(B?B.showMessage(a,b):("string"==typeof a&&(a={msg:a,timeout:b||0}),hi5.notifications.notify(a)))};this.close=function(){if(x&&F)try{x.send("85"),x.close()}catch(a){}else Ea()};hi5.browser.isChromeApp?chrome.runtime.onSuspend.addListener(Ea):window.addEventListener("unload",Ea,!1);var zb=new Sa(1024,function(a){var b=u,e=y;for(a.needMore=!1;a.has(1);){var d=a.getByte();if(31>=d)if(27==d){a:{var c=a;if(c.has(1)){d=c.getByte();switch(d){case 40:c.getByte();break;case 41:c.getByte();break;case 55:break;
case 61:break;case 62:break;case 68:cb();break;case 69:$a();y+=m;qa(!0);break;case 77:bb();break;case 92:console.log("ST");break;case 93:d=console;for(var t=d.log,f=c,g=f.getPosition(),l="",v=f.getEnd(),E=f.getData();g<v;)if(c=E[g++],7!=c)switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:l+=String.fromCharCode(c);break;case 12:case 13:l+=String.fromCharCode((c&31)<<6|E[g++]&63);break;case 14:l+=String.fromCharCode((c&15)<<12|(E[g++]&63)<<6|(E[g++]&63)<<0)}else break;f.setPosition(g);
t.call(d,"OSC:"+l);break;case 91:d=wb(c);break a;default:console.log("unkown cmd for ESC:"+d)}d=!0}else c.skipBack(1),d=!1}if(!d)return}else Za(d);else if(128<=d&&159>=d)switch(d){case 146:a.skip(2);break;default:console.log("C1:"+d)}else{a.skipBack(1);a:{d=a;t=d.getPosition();f="";g=d.getEnd();for(l=d.getData();t<g;)if(c=l[t++],31<c&&(128>c||159<c)){if(177!=c)switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:f+=String.fromCharCode(c);break;case 12:case 13:if(t<g)f+=String.fromCharCode((c&
31)<<6|l[t++]&63);else{d.needMore=!0;d=f;break a}break;case 14:if(1<g-t)f+=String.fromCharCode((c&15)<<12|(l[t++]&63)<<6|(l[t++]&63)<<0);else{d.needMore=!0;d=f;break a}}}else{t--;break}d.setPosition(t);d=f}ca(d);if(a.needMore)return}}b==u&&e==y||oa();ba();ha&&ha.check()});ma.setHandler(zb);var Xa=!1;this.refreshOutput=ba;var Z={mode:0,parameters:[0],count:0,trailing:0,command:0,toString:function(){var a="CSI, ";this.mode&&(a+="mode:"+String.fromCharCode(this.mode));0<this.count&&(a+=" parameters:"+
this.parameters.slice(0,this.count).join(";"));this.trailing&&(a+=" trailing:"+String.fromCharCode(this.trailing));return a+=" cmd:"+String.fromCharCode(this.command)},parse:function(a){var b=0,e=!1,d=a.getByte();if(!d)return!1;if(60<=d&&63>=d)this.mode=d,d=a.getByte();else if(this.mode=0,31>=d||128<=d&&159>=d)Za(d),d=a.getByte();if(!d)return!1;for(this.count=0;48<=d&&57>=d||59==d;)if(59==d?(this.parameters[this.count]=e?b:null,this.count++,b=0,e=!1):(b=10*b+(d-48),e=!0),d=a.getByte(),!d)return!1;
e?(this.parameters[this.count]=b,this.count++):0<this.count&&(this.parameters[this.count]=1,this.count++);if(32<=d&&47>=d){if(this.trailing=d,d=a.getByte(),!d)return!1}else this.trailing=0;64<=d&&127>=d?this.command=d:(this.command="",console.log("Invalid CSI final char:"+String.fromCharCode(d)));return!0}};this.showHistory=hb;this.getUploadManager=function(){return H};this.addSurface=function(a){B=a;jb&&a.setPlayerMode();Ya=B.context;X.width=p;X.height=n;q=X.getContext("2d",{alpha:!1});a.alwaysPaste=
!0;a.setAutoScale(0<h.mode);a.setSize(p,n);a.setController(Q);a.setTouchpad(A(r.touchpad));a.setClipboard(A(r.mapClipboard));ib(B);var b=void 0!=r.cmdToCtrl?A(r.cmdToCtrl):void 0!=C.cmdToCtrl?C.cmdToCtrl:h.mapCmdToCtrl;a.run(99997,!1,!0,b);a.onclipdata=xb};this.sendPing=function(a){a=new Uint8Array(2);a[0]=146;Ka(a.buffer)};this.startPing=function(a){ha||(ha=new hi5.tool.ResponseMonitor(function(){ua&&h.sendPing()},function(){ua&&ha.check(1)}));ha.setInterval(a,a);setTimeout(function(){ha.check()},
1E3*a)};this.stopPing=function(){ha&&ha.stop()};this.writeText=J;this.writeScancode=function(a,b){J(na.process(a,b,0))};var Ab={" ":57,space:57,pageup:201,pagedown:209,end:207,home:199,left:203,up:200,right:205,down:208,printscreen:183,insert:210,del:211,"delete":211,altgr:184,windows:219,windowsright:220,context:221,esc:1,backspace:14,tab:15,enter:28,meta:29,command:29,ctrl:29,shift:42,alt:56,capslock:58,f1:59,f2:60,f3:61,f4:62,f5:63,f6:64,f7:65,f8:66,f9:67,f10:68,f11:87,f12:88,numlock:69,scrolllock:70,
add:78};this.writeKeyComb=function(a){a=a.split("+");var b=a.length;if(0!=b)for(var e=null,d=0;d<b;d++){var c=a[d];""==c&&""==e&&(c="Add");if(""!=c){e=c;var t=Ab[e.toLowerCase()];t?h.writeScancode(!0,t):console.log("Invalid key:"+e)}e=c}};var Ha=!1,ka=0,la=0,Ia=0,ra=!1,lb=0,mb=0,sa=null;this.writeRawInput=function(a){if(F){var b=parseInt(a.substring(0,2),16);a=a.substring(2).split("\t");switch(b){case 128:ka=parseInt(a[0]);la=parseInt(a[1]);Ia=parseInt(a[2]);ra=!1;Ha=!0;lb=Math.floor(ka/z)*z;mb=Math.floor(la/
m)*m;1015==T?J("\u001b["+(parseInt(a[2])+32)+";"+(Math.floor(ka/z)+1)+";"+(Math.floor(la/m)+1)+"M"):1006==T?J("\u001b[<"+a[2]+";"+(Math.floor(ka/z)+1)+";"+(Math.floor(la/m)+1)+"M"):T&&J("\u001b[M"+a[2]+String.fromCharCode(Math.floor(ka/z)+33)+String.fromCharCode(Math.floor(la/m)+33));return;case 129:T&&(1015==T?J("\u001b["+(parseInt(a[2])+32)+";"+(Math.floor(ka/z)+1)+";"+(Math.floor(la/m)+1)+"M"):1006==T?J("\u001b[<"+a[2]+";"+(Math.floor(parseInt(a[0])/z)+1)+";"+(Math.floor(parseInt(a[1])/m)+1)+"m"):
T&&J("\u001b[M3"+String.fromCharCode(Math.floor(parseInt(a[0])/z)+33)+String.fromCharCode(Math.floor(parseInt(a[1])/m)+33)));Ia=parseInt(a[2]);2==Ia&&Ha&&!ra?(aa&&(aa.value=""),setTimeout(hb,50)):ra&&(a=D.getMultiLines(Math.floor(ka/z)+1,Math.floor(la/m+.1)+1,Math.floor(parseInt(a[0])/z+.4)+1,Math.floor(parseInt(a[1])/m-.4)+1))&&B&&B.copyToClip("text/plain;"+a);sa&&(setTimeout(B.removeWhiteboard,333),sa=null);ra=Ha=!1;return;case 130:if(Ha){b=parseInt(a[0]);a=parseInt(a[1]);if(!ra){if(3>Math.abs(b-
ka)&&3>Math.abs(a-la))return;ra=!0}if(0==Ia){if(!sa){var e=B.initWhiteboard();e.style.opacity=.6;e=e.getContext("2d");sa=new hi5.canvas.TextSelect(e,m,C.selectionColor,"1px",p)}sa.clear();sa.draw(lb,mb,b,a)}}return;case 131:1006==T?J("\u001b[<"+("1"==a[2]?65:64)+";"+(Math.floor(parseInt(a[0])/z)+1)+";"+(Math.floor(parseInt(a[1])/m)+1)+"M"):T&&J("\u001b[M"+("1"==a[2]?5:4)+String.fromCharCode(Math.floor(parseInt(a[0])/z)+64)+String.fromCharCode(Math.floor(parseInt(a[1])/m)+64));return;case 132:e=0==
a[0];b=parseInt(a[1]);if(ja||G)e&&(a=b,28==a?(y+=m,u=0,ja?(ja=!1,x.send("5B"+da),da=""):G&&(G.answer.push(da),da="",Ta())):14==a&&0<da.length&&(da=da.substring(0,da.length-1),ja&&(Ma(),ca(" "),ba(),Ma())));else if(J(na.process(e,b,0)),28!=b)fa||(fa=R());else if(fa){if(fa&&(a=D.getSingleLine(N(),fa,R()))){b=D.getSingleLine(N(),1,fa);if(h.oncommand)h.oncommand(a,b);a.startsWith("cd /")?B.setDirectory(a.substring(3)):a.startsWith("base64 ")&&(S.on=!0,S.cmd=a,S.prompt=b)}fa=0}return;case 139:b=parseInt(a[1]);
e=0==a[0];J(na.process(e,b,1));return;case 134:ja||G?gb(a[0]):(fa||(fa=R()),J(na.process(!0,a[0],3)));return}svGlobal.logger.warn("Unknowncode: "+a[1]+" type:"+b)}};var na=new function(){var a=!1,b=!1,e=!1,d=0;this.setEscMode=function(c){d=c;console.log("Esc mode:"+c)};this.process=function(c,t,f){if(3==f)return t;if(0==f){switch(t){case 29:case 157:return a=c,"";case 56:case 184:return b=c,"";case 42:case 54:return e=c,""}if(c){switch(t){case 28:c="\r";break;case 200:c=0==d?"\u001b[A":"\u001bOA";
break;case 208:c=0==d?"\u001b[B":"\u001bOB";break;case 205:c=0==d?"\u001b[C":"\u001bOC";break;case 203:c=0==d?"\u001b[D":"\u001bOD";break;case 59:c="\u001bOP";break;case 60:c="\u001bOQ";break;case 61:c="\u001bOR";break;case 62:c="\u001bOS";break;case 63:c="\u001b[15~";break;case 64:c="\u001b[17~";break;case 65:c="\u001b[18~";break;case 66:c="\u001b[19~";break;case 67:c="\u001b[20~";break;case 68:c="\u001b[21~";break;case 87:c="\u001b[23~";break;case 88:c="\u001b[24~";break;case 15:c="\t";break;case 209:c=
"\u001b[6~";break;case 201:c="\u001b[5~";break;case 199:c=0==d?"\u001b[H":"\u001bOH";break;case 207:c=0==d?"\u001b[F":"\u001bOF";break;case 14:c=e?"\b":"\u007f";break;case 211:c="\u001b[3~";break;case 197:c="\u00ff\u00f3";break;case 210:c="\u001b[2~";break;case 1:c="\u001b";break;case 55:c="*";break;case 71:c=Q.localLockFlags&2?"7":0==d?"\u001b[H":"\u001bOH";break;case 72:c=Q.localLockFlags&2?"8":0==d?"\u001b[A":"\u001bOA";break;case 73:c=Q.localLockFlags&2?"9":"\u001b[5~";break;case 74:c="-";break;
case 75:c=Q.localLockFlags&2?"4":0==d?"\u001b[D":"\u001bOD";break;case 76:c=Q.localLockFlags&2?"5":"\u001bOu";break;case 77:c=Q.localLockFlags&2?"6":0==d?"\u001b[C":"\u001bOC";break;case 78:c="+";break;case 79:c=Q.localLockFlags&2?"1":0==d?"\u001b[F":"\u001bOF";break;case 80:c=Q.localLockFlags&2?"2":0==d?"\u001b[B":"\u001bOB";break;case 81:c=Q.localLockFlags&2?"3":"\u001b[6~";break;case 82:c=Q.localLockFlags&2?"0":"\u001b[2~";break;case 83:c=Q.localLockFlags&2?".":"\u001b[3~";break;case 156:c="\r";
break;case 181:c="/";break;default:return console.log("Invalid code:"+t),""}b&&(c="\u001b"+c);return c}return""}if(1==f&&c&&a){if(64<t&&91>t)return String.fromCharCode(t-64);switch(t){case 54:return"\u001e";case 219:return"\u001b";case 220:return"\u001c";case 221:return"\u001d";case 32:return"\x00";case 192:return"\u001e";case 191:return"\u001f";default:return console.log("Invalid key code:"+t),""}}if(b)return"\u001b"+String.fromCharCode(t).toLowerCase()}}};
