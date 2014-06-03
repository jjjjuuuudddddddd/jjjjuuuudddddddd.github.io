/*
 * Copyright 2012 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function(window,document,undefined){
var h=void 0,i=!0,l=null,n=!1;function p(a){return function(){return this[a]}}var q;function r(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}};function s(a){this.G=a;this.V=h}s.prototype.createElement=function(a,c,b){a=this.G.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?v(this,a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.G.createTextNode(b));return a};function w(a,c,b){a=a.G.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function aa(a){function c(){document.body?a():setTimeout(c,0)}c()}function x(a){a.parentNode&&a.parentNode.removeChild(a)}
function y(a,c){return a.createElement("link",{rel:"stylesheet prefetch",href:c})}function z(a,c){return a.createElement("script",{src:c})}function A(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}function B(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,g=b.length;e<g;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}
function ba(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return i;return n}function v(a,c,b){if(a.V===h){var d=a.G.createElement("p");d.innerHTML='<a style="top:1px;">w</a>';a.V=/top/.test(d.getElementsByTagName("a")[0].getAttribute("style"))}a.V?c.setAttribute("style",b):c.style.cssText=b};function C(a,c,b,d,e,g,f,j){this.Aa=a;this.Ga=c;this.oa=b;this.na=d;this.Da=e;this.Ca=g;this.ma=f;this.Ha=j}q=C.prototype;q.getName=p("Aa");q.wa=p("Ga");q.Y=p("oa");q.ta=p("na");q.ua=p("Da");q.va=p("Ca");q.sa=p("ma");q.z=p("Ha");function D(a,c){this.a=a;this.j=c}var ca=new C("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",h,n);
D.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=E(this);var c=F(this),b=G(this.a,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1],e=H(d),g=H(c);a=new C(b,d,b,d,a,c,I(this.j),"Windows"==a&&6<=e||"Windows Phone"==a&&8<=g)}else a=new C("MSIE","Unknown","MSIE","Unknown",a,c,I(this.j),n)}else if(-1!=this.a.indexOf("Opera"))a:if(c=a="Unknown",b=G(this.a,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=G(this.a,
/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.a.indexOf("Opera Mini/"))b=G(this.a,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new C("OperaMini",b,a,c,E(this),F(this),I(this.j),n);else{if(-1!=this.a.indexOf("Version/")&&(b=G(this.a,/Version\/([\d\.]+)/,1),""!=b)){a=new C("Opera",b,a,c,E(this),F(this),I(this.j),10<=H(b));break a}b=G(this.a,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new C("Opera",b,a,c,E(this),F(this),I(this.j),10<=H(b)):new C("Opera","Unknown",a,c,E(this),F(this),I(this.j),n)}else-1!=this.a.indexOf("AppleWebKit")?
(a=E(this),c=F(this),b=G(this.a,/AppleWebKit\/([\d\.\+]+)/,1),""==b&&(b="Unknown"),d="Unknown",-1!=this.a.indexOf("Chrome")||-1!=this.a.indexOf("CrMo")||-1!=this.a.indexOf("CriOS")?d="Chrome":-1!=this.a.indexOf("Safari")?d="Safari":-1!=this.a.indexOf("AdobeAIR")&&(d="AdobeAIR"),e="Unknown",-1!=this.a.indexOf("Version/")?e=G(this.a,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=G(this.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=G(this.a,/AdobeAIR\/([\d\.]+)/,1)),g=n,"AdobeAIR"==d?(g=G(e,/\d+\.(\d+)/,
1),g=2<H(e)||2==H(e)&&5<=parseInt(g,10)):(g=G(b,/\d+\.(\d+)/,1),g=526<=H(b)||525<=H(b)&&13<=parseInt(g,10)),a=new C(d,e,"AppleWebKit",b,a,c,I(this.j),g)):-1!=this.a.indexOf("Gecko")?(c=a="Unknown",d=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=G(this.a,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=G(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=H(b)&&5<=parseInt(d,10))):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),b=G(this.a,/rv:([^\)]+)/,1),""==b?b="Unknown":d||(d=H(b),e=parseInt(G(b,/\d+\.(\d+)/,1),10),g=parseInt(G(b,
/\d+\.\d+\.(\d+)/,1),10),d=1<d||1==d&&9<e||1==d&&9==e&&2<=g||b.match(/1\.9\.1b[123]/)!=l||b.match(/1\.9\.1\.[\d\.]+/)!=l),a=new C(a,c,"Gecko",b,E(this),F(this),I(this.j),d)):a=ca;return a};function E(a){var c=G(a.a,/(iPod|iPad|iPhone|Android|Windows Phone)/,1);if(""!=c)return c;a=G(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function F(a){var c=G(a.a,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=G(a.a,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=G(a.a,/(iPhone )?OS ([\d_]+)/,2))return c;return(a=G(a.a,/Linux ([i\d]+)/,1))?a:"Unknown"}function H(a){a=G(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function G(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function I(a){if(a.documentMode)return a.documentMode};function da(a,c,b){this.c=a;this.g=c;this.W=b;this.k="wf";this.h=new fa("-")}function ga(a){A(a.g,a.h.e(a.k,"loading"));J(a,"loading")}function K(a){B(a.g,a.h.e(a.k,"loading"));ba(a.g,a.h.e(a.k,"active"))||A(a.g,a.h.e(a.k,"inactive"));J(a,"inactive")}function J(a,c,b,d){if(a.W[c])a.W[c](b,d)};function ha(){this.fa={}}function ia(a,c){var b=[],d;for(d in c)if(c.hasOwnProperty(d)){var e=a.fa[d];e&&b.push(e(c[d]))}return b};function L(a,c,b,d,e){this.c=a;this.B=c;this.o=b;this.v=d;this.F=e;this.M=0;this.ja=this.ea=n}L.prototype.watch=function(a,c,b,d,e){for(var g=a.length,f=0;f<g;f++){var j=a[f];c[j]||(c[j]=["n4"]);this.M+=c[j].length}e&&(this.ea=e);for(f=0;f<g;f++)for(var j=a[f],e=c[j],m=b[j],k=0,o=e.length;k<o;k++){var t=e[k],u=this.B,P=j,ea=t;A(u.g,u.h.e(u.k,P,ea,"loading"));J(u,"fontloading",P,ea);u=r(this,this.pa);P=r(this,this.qa);(new d(u,P,this.c,this.o,this.v,this.F,j,t,m)).start()}};
L.prototype.pa=function(a,c){var b=this.B;B(b.g,b.h.e(b.k,a,c,"loading"));B(b.g,b.h.e(b.k,a,c,"inactive"));A(b.g,b.h.e(b.k,a,c,"active"));J(b,"fontactive",a,c);this.ja=i;ja(this)};L.prototype.qa=function(a,c){var b=this.B;B(b.g,b.h.e(b.k,a,c,"loading"));ba(b.g,b.h.e(b.k,a,c,"active"))||A(b.g,b.h.e(b.k,a,c,"inactive"));J(b,"fontinactive",a,c);ja(this)};
function ja(a){0==--a.M&&a.ea&&(a.ja?(a=a.B,B(a.g,a.h.e(a.k,"loading")),B(a.g,a.h.e(a.k,"inactive")),A(a.g,a.h.e(a.k,"active")),J(a,"active")):K(a.B))};function M(a,c,b,d,e,g,f,j,m){this.J=a;this.$=c;this.c=b;this.o=d;this.v=e;this.F=g;this.za=new ka;this.w=new N;this.N=f;this.C=j;this.ra=m||"BESbswy";this.Q=la(this,"arial,'URW Gothic L',sans-serif");this.R=la(this,"Georgia,'Century Schoolbook L',serif");this.ca=this.Q;this.da=this.R;this.S=O(this,"arial,'URW Gothic L',sans-serif");this.T=O(this,"Georgia,'Century Schoolbook L',serif")}M.prototype.start=function(){this.ia=this.F();this.L()};
M.prototype.L=function(){var a=this.o.q(this.S),c=this.o.q(this.T);(this.Q!=a||this.R!=c)&&this.ca==a&&this.da==c?Q(this,this.J):5E3<=this.F()-this.ia?Q(this,this.$):(this.ca=a,this.da=c,ma(this))};function ma(a){a.v(function(a,b){return function(){b.call(a)}}(a,a.L),25)}function Q(a,c){x(a.S);x(a.T);c(a.N,a.C)}function la(a,c){var b=O(a,c,i),d=a.o.q(b);x(b);return d}function O(a,c,b){c=a.c.createElement("span",{style:R(a,c,a.C,b)},a.ra);w(a.c,"body",c);return c}
function R(a,c,b,d){b=a.w.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.za.quote(a.N)+",")+c+";"+b};function S(a,c,b,d,e){this.c=a;this.X=c;this.g=b;this.v=d;this.a=e;this.O=this.P=0}S.prototype.s=function(a,c){this.X.fa[a]=c};S.prototype.load=function(a){var c=new da(this.c,this.g,a);this.a.z()?na(this,c,a):K(c)};S.prototype.xa=function(a,c,b,d){var e=a.Z?a.Z():M;d?a.load(r(this,this.Ba,c,b,e)):(a=0==--this.P,this.O--,a&&(0==this.O?K(c):ga(c)),b.watch([],{},{},e,a))};
S.prototype.Ba=function(a,c,b,d,e,g){var f=0==--this.P;f&&ga(a);this.v(r(this,function(a,b,c,d,e,g){a.watch(b,c||{},d||{},e,g)},c,d,e,g,b,f))};function na(a,c,b){b=ia(a.X,b);a.O=a.P=b.length;for(var d=new L(a.c,c,{q:function(a){return a.offsetWidth}},a.v,function(){return(new Date).getTime()}),e=0,g=b.length;e<g;e++){var f=b[e];f.A(a.a,r(a,a.xa,f,c,d))}};function fa(a){this.ya=a||"-"}fa.prototype.e=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.ya)};function ka(){this.ha="'"}ka.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.ha+d+this.ha)}return c.join(",")};function N(){this.I=oa;this.p=pa}var oa=["font-style","font-weight"],pa={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function T(a,c,b){this.aa=a;this.Ea=c;this.p=b}T.prototype.compact=function(a,c){for(var b=0;b<this.p.length;b++)if(c==this.p[b][1]){a[this.aa]=this.p[b][0];break}};
T.prototype.expand=function(a,c){for(var b=0;b<this.p.length;b++)if(c==this.p[b][0]){a[this.aa]=this.Ea+":"+this.p[b][1];break}};N.prototype.compact=function(a){for(var c=["n","4"],a=a.split(";"),b=0,d=a.length;b<d;b++){var e=a[b].replace(/\s+/g,"").split(":");if(2==e.length){var g=e[1];a:{for(var e=e[0],f=0;f<this.I.length;f++)if(e==this.I[f]){e=new T(f,e,this.p[e]);break a}e=l}e&&e.compact(c,g)}}return c.join("")};
N.prototype.expand=function(a){if(2!=a.length)return l;for(var c=[l,l],b=0,d=this.I.length;b<d;b++){var e=this.I[b];(new T(b,e,this.p[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":l};var U=window.WebFont=function(){var a=(new D(navigator.userAgent,document)).parse();return new S(new s(document),new ha,document.documentElement,function(a,b){setTimeout(a,b)},a)}();U.load=U.load;U.addModule=U.s;C.prototype.getName=C.prototype.getName;C.prototype.getVersion=C.prototype.wa;C.prototype.getEngine=C.prototype.Y;C.prototype.getEngineVersion=C.prototype.ta;C.prototype.getPlatform=C.prototype.ua;C.prototype.getPlatformVersion=C.prototype.va;C.prototype.getDocumentMode=C.prototype.sa;
C.prototype.isSupportingWebFont=C.prototype.z;function V(a,c){this.c=a;this.d=c}V.prototype.load=function(a){for(var c=this.d.urls||[],b=this.d.families||[],d=0,e=c.length;d<e;d++)w(this.c,"head",y(this.c,c[d]));a(b)};V.prototype.A=function(a,c){return c(a.z())};U.s("custom",function(a){return new V(new s(document),a)});function W(a,c,b,d,e){this.m=a;this.a=c;this.c=b;this.j=d;this.d=e;this.f=[];this.t={}}W.prototype.A=function(a,c){var b=this,d=b.d.projectId;if(d){var e=z(b.c,b.D(d));e.id="__MonotypeAPIScript__"+d;e.onreadystatechange=function(a){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=l,e.onload(a)};e.onload=function(){if(b.m["__mti_fntLst"+d]){var e=b.m["__mti_fntLst"+d]();if(e&&e.length){var f;for(f=0;f<e.length;f++)b.f.push(e[f].fontfamily)}}c(a.z())};w(this.c,"head",e)}else c(i)};
W.prototype.D=function(a){var c=this.protocol(),b=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+b+"/"+a+".js"};W.prototype.load=function(a){a(this.f,this.t)};W.prototype.protocol=function(){var a=["http:","https:"],c=a[0];if(this.j&&this.j.location&&this.j.location.protocol)for(var b=0,b=0;b<a.length;b++)if(this.j.location.protocol===a[b])return this.j.location.protocol;return c};
U.s("monotype",function(a){var c=(new D(navigator.userAgent,document)).parse();return new W(window,c,new s(document),document,a)});function X(a,c,b){this.m=a;this.c=c;this.d=b;this.f=[];this.t={}}X.prototype.D=function(a){var c="https:"==window.location.protocol?"https:":"http:";return(this.d.api||c+"//use.typekit.com")+"/"+a+".js"};X.prototype.A=function(a,c){var b=this.d.id,d=this.d,e=this;b?(this.m.__webfonttypekitmodule__||(this.m.__webfonttypekitmodule__={}),this.m.__webfonttypekitmodule__[b]=function(b){b(a,d,function(a,b,d){e.f=b;e.t=d;c(a)})},w(this.c,"head",z(this.c,this.D(b)))):c(i)};
X.prototype.load=function(a){a(this.f,this.t)};U.s("typekit",function(a){return new X(window,new s(document),a)});function Y(a,c,b,d,e,g,f,j,m){Y.Fa.call(this,a,c,b,d,e,g,f,j,m);a=["Times New Roman","Arial","Times","Sans","Serif"];c=a.length;b={};d=O(this,a[0],i);b[this.o.q(d)]=i;for(e=1;e<c;e++)g=a[e],v(this.c,d,R(this,g,this.C,i)),b[this.o.q(d)]=i,"4"!=this.C[1]&&(v(this.c,d,R(this,g,this.C[0]+"4",i)),b[this.o.q(d)]=i);x(d);this.u=b;this.la=n}(function(a,c){function b(){}b.prototype=a.prototype;c.prototype=new b;c.Fa=a;c.Ia=a.prototype})(M,Y);var qa={Arimo:i,Cousine:i,Tinos:i};
Y.prototype.L=function(){var a=this.o.q(this.S),c=this.o.q(this.T);!this.la&&a==c&&this.u[a]&&(this.u={},this.la=this.u[a]=i);(this.Q!=a||this.R!=c)&&!this.u[a]&&!this.u[c]?Q(this,this.J):5E3<=this.F()-this.ia?this.u[a]&&this.u[c]&&qa[this.N]?Q(this,this.J):Q(this,this.$):ma(this)};function ra(a){this.K=a?a:("https:"==window.location.protocol?"https:":"http:")+sa;this.f=[];this.U=[]}var sa="//fonts.googleapis.com/css";ra.prototype.e=function(){if(0==this.f.length)throw Error("No fonts to load !");if(-1!=this.K.indexOf("kit="))return this.K;for(var a=this.f.length,c=[],b=0;b<a;b++)c.push(this.f[b].replace(/ /g,"+"));a=this.K+"?family="+c.join("%7C");0<this.U.length&&(a+="&subset="+this.U.join(","));return a};function ta(a){this.f=a;this.ga=[];this.ka={};this.H={};this.w=new N}
var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ta.prototype.parse=function(){for(var a=this.f.length,c=0;c<a;c++){var b=this.f[c].split(":"),d=b[0].replace(/\+/g," "),e=["n4"];if(2<=b.length){var g;var f=b[1];g=[];if(f)for(var f=f.split(","),j=f.length,m=0;m<j;m++){var k;k=f[m];if(k.match(/^[\w]+$/))if(k=xa.exec(k.toLowerCase()),k==l)k="";else{var o=h;o=k[1];if(o==l)o="4";else var t=va[o],o=t?t:isNaN(o)?"4":o.substr(0,1);k=(k=this.w.expand([k[2]==l?"n":wa[k[2]],o].join("")))?this.w.compact(k):l}else k="";k&&g.push(k)}0<g.length&&(e=g);3==b.length&&
(b=b[2],g=[],b=!b?g:b.split(","),0<b.length&&(b=ua[b[0]])&&(this.H[d]=b))}this.H[d]||(b=ua[d])&&(this.H[d]=b);this.ga.push(d);this.ka[d]=e}};function Z(a,c,b){this.a=a;this.c=c;this.d=b}Z.prototype.A=function(a,c){c(a.z())};Z.prototype.Z=function(){return"AppleWebKit"==this.a.Y()?Y:M};Z.prototype.load=function(a){"MSIE"==this.a.getName()&&this.d.blocking!=i?aa(r(this,this.ba,a)):this.ba(a)};
Z.prototype.ba=function(a){for(var c=this.c,b=new ra(this.d.api),d=this.d.families,e=d.length,g=0;g<e;g++){var f=d[g].split(":");3==f.length&&b.U.push(f.pop());var j="";2==f.length&&""!=f[1]&&(j=":");b.f.push(f.join(j))}d=new ta(d);d.parse();w(c,"head",y(c,b.e()));a(d.ga,d.ka,d.H)};U.s("google",function(a){var c=(new D(navigator.userAgent,document)).parse();return new Z(c,new s(document),a)});function ya(a,c){this.c=a;this.d=c}var za={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};ya.prototype.A=function(a,c){return c(a.z())};
ya.prototype.load=function(a){var c,b;w(this.c,"head",y(this.c,("https:"==document.location.protocol?"https:":"http:")+"//webfonts.fontslive.com/css/"+this.d.key+".css"));var d=this.d.families,e,g;e=[];g={};for(var f=0,j=d.length;f<j;f++){b=b=c=h;b=d[f].split(":");c=b[0];if(b[1]){b=b[1].split(",");for(var m=[],k=0,o=b.length;k<o;k++){var t=b[k];if(t){var u=za[t];m.push(u?u:t)}}b=m}else b=["n4"];e.push(c);g[c]=b}a(e,g)};U.s("ascender",function(a){return new ya(new s(document),a)});function $(a,c,b){this.m=a;this.c=c;this.d=b;this.f=[];this.t={};this.w=new N}$.prototype.D=function(a){return("https:"==this.m.location.protocol?"https:":"http:")+(this.d.api||"//f.fontdeck.com/s/css/js/")+this.m.document.location.hostname+"/"+a+".js"};
$.prototype.A=function(a,c){var b=this.d.id,d=this;b?(this.m.__webfontfontdeckmodule__||(this.m.__webfontfontdeckmodule__={}),this.m.__webfontfontdeckmodule__[b]=function(a,b){for(var f=0,j=b.fonts.length;f<j;++f){var m=b.fonts[f];d.f.push(m.name);d.t[m.name]=[d.w.compact("font-weight:"+m.weight+";font-style:"+m.style)]}c(a)},w(this.c,"head",z(this.c,this.D(b)))):c(i)};$.prototype.load=function(a){a(this.f,this.t)};U.s("fontdeck",function(a){return new $(window,new s(document),a)});window.WebFontConfig&&U.load(window.WebFontConfig);
})(this,document);
