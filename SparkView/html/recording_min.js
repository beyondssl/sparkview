RecordingManager=function(){function k(){e=0;0<h.length&&(h.length=0);0<f.length&&(f.length=0)}function r(a){if(0<e&&0<f.length)return u.exit(),(a||window.event).returnValue="Please download the recorded file first"}function l(a){for(var b=new Uint8Array(64),c=a.filetag||"RDPV",m=0,n=0;4>n;n++)b[m++]=c.charCodeAt(n);d(b,0,2,4);d(b,a.width,2,6);d(b,a.height,2,8);d(b,a.color,1,10);d(b,e,8,11);d(b,a.duration,8,19);d(b,1,4,27);h.push(b)}function d(a,b,c,m){for(--c;0<=c;c--)a[m++]=b>>8*c&255}function p(a){var b=
a.getType(),c=new Uint8Array(-1==b?8:10);d(c,a.getLen()+(-1==b?0:2),4,0);d(c,a.getTime()-e,4,4);-1!=b&&(d(c,a.getType()&255,1,8),d(c,a.getType()>>8,1,9));h.push(c);h.push(a.getData())}var f=[],q="",e=0,g,t="",h=[],u=this;this.setHeader=function(a){k();e=(new Date).getTime();g=a;q=".rdpv";null!=g.namesuffix&&void 0!=g.namesuffix&&(q=g.namesuffix);t=g.name+e+q;window.addEventListener("beforeunload",r,!1)};this.add=function(a){0<e&&f.push(a)};this.exit=function(){var a=f.length;if(0!=a&&0!=e){g.duration=
f[a-1].getTime()-e;l(g);for(var b=0;b<a;b++)p(f[b]);a=new Blob(h,{type:"application/octet-binary"});k();var c=URL.createObjectURL(a);a="";__svi18n&&__svi18n.info&&(a=__svi18n.info.recready);a||(a="Recorded file is ready. Please right click and save the link.");hi5.notifications.notify({msg:'<a href="'+c+'" target="_blank" download="'+t+'">'+a+"</a>",cbClose:function(){setTimeout(function(){(window.URL||window.webkitURL).revokeObjectURL(c)},999)}})}}};
RecordingObj=function(k,r,l,d){var p=(new Date).getTime();"undefined"==typeof d&&(d=48);this.strToInt=function(f){return parseInt(f,16)};this.getLen=function(){return l};this.getTime=function(){return p};this.getType=function(){return d};this.getData=function(){return k}};
