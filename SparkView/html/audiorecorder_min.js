'use strict';function AudioMergeBuffer(p,q,D){var B=new p(Math.max(640,q)),C=B.length,A=0,k=0;this.process=function(E){E.length>C-k&&0<A&&(k>A&&B.set(B.subarray(A,k)),k-=A,A=0);var Z=C-k,ea=null;E.length<=Z?(B.set(E,k),k+=E.length):(ea=E.subarray(0,Z),B.set(ea,k),k=C,ea=E.subarray(Z));for(E=(k-A)/q|0;0<E;)D(B.subarray(A,A+q)),A+=q,E--;ea&&this.process(ea)}}
function audioResample(p,q,D,B,C,A){if(1==A)return p;if(1>A)console.error("rate must be smaller than the original rate");else{0!=q&&(p=p.subarray(q,q+D));0!=C&&(B=B.subarray(C));q=D/A+.5|0;for(var k=D=0;D<q;){C=(D+1)*A+.5|0;for(var E=0,Z=0;k<C&&k<p.length;k++)E+=p[k],Z++;B[D]=E/Z;D++;k=C}return q}}
function MSGSMEncoder(){function p(h,m){return-32768==h&&-32768==m?32767:h*m>>15<<16>>16}function q(h,m){return-32768==h&&-32768==m?32767:h*m+16384>>15<<16>>16}function D(h,m){if(0>=h){if(0<=m)return h+m;h=-(h+1)-(m+1);return 2147483647<=h?-2147483648:-h-2}if(0>=m)return h+m;h+=m;return 2147483647<h?2147483647:h}function B(h){if(0>h){if(-1073741824>=h)return 0;h=~h}return(0!=(h&4294901760)?0!=(h&4278190080)?-1+Sa[255&h>>24]:7+Sa[255&h>>16]:0!=(h&65280)?15+Sa[255&h>>8]:23+Sa[255&h])<<16>>16}function C(h,
m){return 16<=m?0>h?-1:-0:-16>=m?0:0>m?h<<-m<<16>>16:h>>m<<16>>16}function A(h,m,G,F,d,aa){h=p(h<<16>>16,d[aa]);m=h+(m<<16>>16);m=(-32768>m?-32768:32767<m?32767:m)+256;h=(-32768>m?-32768:32767<m?32767:m)>>9<<16>>16;d[aa]=(h>G?G-F:h<F?0:h-F)<<16>>16}function k(h,m){h=tb[h+3*m]>>2<<16>>16;return h*h}function E(h,m,G,F,d,aa,I){h=h[G]+aa;d=((-32768>h?-32768:32767<h?32767:h)<<26>>16)-(d<<17>>16);F=q(I,-32768>d?-32768:32767<d?32767:d);I=F+F;m[G]=-32768>I?-32768:32767<I?32767:I}function Z(h){for(var m,G,
F=0;8>F;F++)0>h[F]?(m=(-32768==h[F]?32767:-h[F])<<16>>16,G=(m>>2<<16>>16)+26112,h[F]=-(11059>m?m<<1:20070>m?m+11059:-32768>G?-32768:32767<G?32767:G)<<16>>16):(m=h[F],G=(m>>2<<16>>16)+26112,h[F]=(11059>m?m<<1:20070>m?m+11059:-32768>G?-32768:32767<G?32767:G)<<16>>16)}function ea(h,m,G,F,d){for(var aa=h.u,I,Da,na,ba,f,oa;0!=G;){G--;I=ba=F[d];for(oa=0;8>oa;oa++)na=aa[oa],f=m[oa],aa[oa]=ba,Da=q(f,I),ba=na+Da,ba=-32768>ba?-32768:32767<ba?32767:ba,Da=q(f,na),I+=Da,I=-32768>I?-32768:32767<I?32767:I;F[d++]=
I}h.u=aa}var Fc=[6554,16384,26214,32767],Gc=[29128,26215,23832,21846,20165,18725,17476,16384],Rb=[18431,20479,22527,24575,26623,28671,30719,32767],M=new function(){this.dp0=new Int16Array(280);this.mp=this.l_z2=this.z1=0;this.u=new Int16Array(8);this.larpp=[new Int16Array(8),new Int16Array(8)];this.j=0;this.nrp=40;this.v=new Int16Array(9);this.msr=0},t=new Int16Array(8),fa=new Int16Array(4),ha=new Int16Array(4),ia=new Int16Array(4),ja=new Int16Array(4),b=new Int16Array(52),Sb=new Int16Array(160),
g=new Uint8Array(33),Tb=0;this.encode=function(h,m,G,F){Sb=0==m?h:h.subarray(m);Ta=!Ta;for(var d=0,aa=0,I=0,Da=0,na=120,ba=new Int16Array(50),f=new Int16Array(160),oa=0,Hc=0,ub=M.z1,Ia=M.l_z2,Ua=M.mp,Ub,Ja,Vb,vb,Va,Wa,Wb=160;0!=Wb;){Wb--;vb=Sb[oa++]>>3<<2<<16>>16;Ub=vb-ub<<16>>16;ub=vb;Va=Ub;Va<<=15;Ja=Ia>>15<<16>>16;Vb=Ia-(Ja<<15)<<16>>16;Va+=q(Vb,32735);Wa=32735*Ja;Ia=D(Wa,Va);Wa=D(Ia,16384);Ja=q(Ua,-28180);Ua=Wa>>15<<16>>16;var wb=Ua+Ja;f[Hc++]=-32768>wb?-32768:32767<wb?32767:wb}M.z1=ub;M.l_z2=
Ia;M.mp=Ua;var S,n=0,Xa=0,y;for(y=0;159>=y;y++){var xb=f[y]+0;var Xb=-32768>xb?-32768:32767<xb?32767:xb;Xb>Xa&&(Xa=Xb)}var Ya=0==Xa?0:4-B(Xa<<16)<<16>>16;if(0<Ya)switch(Ya){case 1:for(y=0;159>=y;y++)f[y]=q(f[y],16384);break;case 2:for(y=0;159>=y;y++)f[y]=q(f[y],8192);break;case 3:for(y=0;159>=y;y++)f[y]=q(f[y],4096);break;case 4:for(y=0;159>=y;y++)f[y]=q(f[y],2048)}var l=f[n];c.fill(0);c[0]+=l*f[n-0];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];l=f[++n];
c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];c[3]+=l*f[n-3];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];c[3]+=l*f[n-3];c[4]+=l*f[n-4];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];c[3]+=l*f[n-3];c[4]+=l*f[n-4];c[5]+=l*f[n-5];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];c[3]+=l*f[n-3];c[4]+=l*f[n-4];c[5]+=l*f[n-5];c[6]+=l*f[n-6];l=f[++n];c[0]+=l*f[n-0];c[1]+=l*f[n-1];c[2]+=l*f[n-2];c[3]+=l*f[n-3];c[4]+=l*f[n-4];c[5]+=l*f[n-5];c[6]+=l*f[n-6];c[7]+=l*f[n-7];++n;for(S=n;160>
S;++S)l=f[S],c[0]+=l*f[S-0],c[1]+=l*f[S-1],c[2]+=l*f[S-2],c[3]+=l*f[S-3],c[4]+=l*f[S-4],c[5]+=l*f[S-5],c[6]+=l*f[S-6],c[7]+=l*f[S-7],c[8]+=l*f[S-8];for(y=0;9>y;y++)c[y]<<=1;if(0<Ya)for(y=0;160>y;y++)f[y]<<=Ya;var J=new Int16Array(1),za=0,T,yb=new Int16Array(9),ca=new Int16Array(9),Za=new Int16Array(9);if(0==c[0])for(T=0;8>T;T++)t[T]=0;else{J[0]=B(c[0]);for(T=0;8>=T;T++)yb[T]=c[T]<<J[0]>>16;Za.set(yb.subarray(0,7),0);ca.set(yb.subarray(0,8),0);for(var Ka=1;8>=Ka;Ka++,za++){J[0]=ca[1];J[0]=(0>J[0]?
-32768==J[0]?32767:-J[0]:J[0])<<16>>16;if(ca[0]<J[0]){for(T=Ka;8>T;T++)t[T]=0;break}var Ic=za;var Yb=J[0],zb=Yb,Zb=ca[0],$a=0,$b=15;if(0==Yb)var ac=0;else{for(;0!=$b;)$b--,$a=$a<<17>>16,zb<<=1,zb>=Zb&&(zb-=Zb,$a++);ac=$a<<16>>16}t[Ic]=ac;0<ca[1]&&(t[za]=-t[za]);if(8==Ka)break;J[0]=q(ca[1],t[za]);var Ab=ca[0]+J[0];ca[0]=-32768>Ab?-32768:32767<Ab?32767:Ab;for(var pa=1;pa<=8-Ka;pa++){J[0]=q(Za[pa],t[za]);var Bb=ca[pa+1]+J[0];ca[pa]=-32768>Bb?-32768:32767<Bb?32767:Bb;J[0]=q(ca[pa+1],t[za]);var Cb=Za[pa]+
J[0];Za[pa]=-32768>Cb?-32768:32767<Cb?32767:Cb}}}for(var P,La=0;8>La;La++)P=t[La],P=(0>P?-32768==P?32767:-P:P)<<16>>16,22118>P?P>>=1:31130>P?P-=11059:(P-=26112,P<<=2),t[La]=0>t[La]?-P:P;var qa=0;A(20480,0,31,-32,t,qa++);A(20480,0,31,-32,t,qa++);A(20480,2048,15,-16,t,qa++);A(20480,-2560,15,-16,t,qa++);A(13964,94,7,-8,t,qa++);A(15360,-1792,7,-8,t,qa++);A(8534,-341,3,-4,t,qa++);A(9036,-1144,3,-4,t,qa++);var K=new Int16Array(8),bc=M.j;var cc=bc^1;M.j=cc;var U=M.larpp[bc],ab=M.larpp[cc],ra=0;E(t,U,ra++,
0,0,-32,13107);E(t,U,ra++,0,0,-32,13107);E(t,U,ra++,0,2048,-16,13107);E(t,U,ra++,0,-2560,-16,13107);E(t,U,ra++,0,94,-8,19223);E(t,U,ra++,0,-1792,-8,17476);E(t,U,ra++,0,-341,-4,31454);E(t,U,ra++,0,-1144,-4,29708);for(var sa=0;8>sa;sa++){var Db=(ab[sa]>>2<<16>>16)+(U[sa]>>2<<16>>16);K[sa]=-32768>Db?-32768:32767<Db?32767:Db;var Eb=K[sa]+(ab[sa]>>1<<16>>16);K[sa]=-32768>Eb?-32768:32767<Eb?32767:Eb}Z(K);ea(M,K,13,f,0);for(var Ma=0;8>Ma;Ma++){var Fb=(ab[Ma]>>1<<16>>16)+(U[Ma]>>1<<16>>16);K[Ma]=-32768>Fb?
-32768:32767<Fb?32767:Fb}Z(K);ea(M,K,14,f,13);for(var ta=0;8>ta;ta++){var Gb=(ab[ta]>>2<<16>>16)+(U[ta]>>2<<16>>16);K[ta]=-32768>Gb?-32768:32767<Gb?32767:Gb;var Hb=K[ta]+(U[ta]>>1<<16>>16);K[ta]=-32768>Hb?-32768:32767<Hb?32767:Hb}Z(K);ea(M,K,13,f,27);for(var bb=0;8>bb;bb++)K[bb]=U[bb];Z(K);ea(M,K,120,f,40);for(var Ea=M.dp0,da,cb,Ib=0;3>=Ib;Ib++,aa+=13){for(var dc=f,ec=40*Ib,Jc=ba,fc=Ea,Kc=Ea,gc=na,hc=fa,ic=ia,Jb=I++,N=void 0,Kb=void 0,jc=void 0,kc=void 0,Fa=void 0,ua=void 0,db=void 0,r=void 0,lc=
dc,mc=ec,u=fc,v=gc,Lb=ic,Lc=hc,eb=Jb,w=new Int16Array(40),fb=0,V=0;39>=V;V++)N=lc[V+mc],N=(0>N?-32768==N?32767:-N:N)<<16>>16,N>fb&&(fb=N);N=0;0!=fb&&(N=B(fb<<16));Kb=6<N?0:6-N<<16>>16;for(V=0;39>=V;V++)w[V]=lc[V+mc]>>Kb;ua=0;for(r=db=40;120>=r;r++){var e=1;var x=w[0]*u[v-r];x+=w[1]*u[e+v-r];e++;x+=w[2]*u[e+v-r];e++;x+=w[3]*u[e+v-r];e++;x+=w[4]*u[e+v-r];e++;x+=w[5]*u[e+v-r];e++;x+=w[6]*u[e+v-r];e++;x+=w[7]*u[e+v-r];e++;x+=w[8]*u[e+v-r];e++;x+=w[9]*u[e+v-r];e++;x+=w[10]*u[e+v-r];e++;x+=w[11]*u[e+v-
r];e++;x+=w[12]*u[e+v-r];e++;x+=w[13]*u[e+v-r];e++;x+=w[14]*u[e+v-r];e++;x+=w[15]*u[e+v-r];e++;x+=w[16]*u[e+v-r];e++;x+=w[17]*u[e+v-r];e++;x+=w[18]*u[e+v-r];e++;x+=w[19]*u[e+v-r];e++;x+=w[20]*u[e+v-r];e++;x+=w[21]*u[e+v-r];e++;x+=w[22]*u[e+v-r];e++;x+=w[23]*u[e+v-r];e++;x+=w[24]*u[e+v-r];e++;x+=w[25]*u[e+v-r];e++;x+=w[26]*u[e+v-r];e++;x+=w[27]*u[e+v-r];e++;x+=w[28]*u[e+v-r];e++;x+=w[29]*u[e+v-r];e++;x+=w[30]*u[e+v-r];e++;x+=w[31]*u[e+v-r];e++;x+=w[32]*u[e+v-r];e++;x+=w[33]*u[e+v-r];e++;x+=w[34]*u[e+
v-r];e++;x+=w[35]*u[e+v-r];e++;x+=w[36]*u[e+v-r];e++;x+=w[37]*u[e+v-r];e++;x+=w[38]*u[e+v-r];e++;x+=w[39]*u[e+v-r];x>ua&&(db=r<<16>>16,ua=x)}Lc[eb]=db;ua=ua<<1>>6-Kb;for(V=Fa=0;39>=V;V++){var nc=u[V-db+v]>>3<<16>>16;Fa+=nc*nc}Fa<<=1;if(0>=ua)Lb[eb]=0;else if(ua>=Fa)Lb[eb]=3;else{N=B(Fa);kc=ua<<N>>16<<16>>16;jc=Fa<<N>>16<<16>>16;for(var gb=0;2>=gb&&!(kc<=p(jc,Fc[gb]));gb++)Lb[eb]=gb}var L=void 0,z=void 0,va=void 0,hb=hc[Jb],ib=fc,jb=dc,kb=ec,wa=Kc,lb=Jc,W=gc;switch(ic[Jb]){case 0:va=3277;for(z=0;39>=
z;z++)wa[z+W]=q(va,ib[z-hb+W]),L=jb[z+kb]-wa[z+W],lb[z+5]=-32768>L?-32768:32767<L?32767:L;break;case 1:va=11469;for(z=0;39>=z;z++)wa[z+W]=q(va,ib[z-hb+W]),L=jb[z+kb]-wa[z+W],lb[z+5]=-32768>L?-32768:32767<L?32767:L;break;case 2:va=21299;for(z=0;39>=z;z++)wa[z+W]=q(va,ib[z-hb+W]),L=jb[z+kb]-wa[z+W],lb[z+5]=-32768>L?-32768:32767<L?32767:L;break;case 3:for(va=32767,z=0;39>=z;z++)wa[z+W]=q(va,ib[z-hb+W]),L=jb[z+kb]-wa[z+W],lb[z+5]=-32768>L?-32768:32767<L?32767:L}for(var oc=ba,Mc=ja,pc=ha,Mb=Da++,qc=b,
rc=aa,sc=new Int16Array(13),tc=new Int16Array(13),Aa=void 0,ka=oc,X=0;39>=X;X++)Aa=4096,Aa+=-134*ka[X+0]+-374*ka[X+1]+2054*ka[X+3]+5741*ka[X+4]+8192*ka[X+5]+5741*ka[X+6]+2054*ka[X+7]+-374*ka[X+9]+-134*ka[X+10],Aa=Aa>>13<<16>>16,tb[X]=-32768>Aa?-32768:32767<Aa?32767:Aa;var uc=void 0,Ga=void 0,Q=void 0,Nc=sc,Oc=pc,Pc=Mb,Na=0;uc=Q=0+(k(0,1)+k(0,2)+k(0,3)+k(0,4)+k(0,5)+k(0,6)+k(0,7)+k(0,8)+k(0,9)+k(0,10)+k(0,11)+k(0,12));Q+=k(0,0);Ga=Q<<1;Q=0+(k(1,0)+k(1,1)+k(1,2)+k(1,3)+k(1,4)+k(1,5)+k(1,6)+k(1,7)+k(1,
8)+k(1,9)+k(1,10)+k(1,11)+k(1,12));Q<<=1;Q>Ga&&(Na=1,Ga=Q);Q=0+(k(2,0)+k(2,1)+k(2,2)+k(2,3)+k(2,4)+k(2,5)+k(2,6)+k(2,7)+k(2,8)+k(2,9)+k(2,10)+k(2,11)+k(2,12));Q<<=1;Q>Ga&&(Na=2,Ga=Q);Q=uc+k(3,12);Q<<=1;Q>Ga&&(Na=3);for(var mb=0;12>=mb;mb++)Nc[mb]=tb[Na+3*mb];Oc[Pc]=Na;var la=void 0,Y=void 0,Nb=void 0,Ba=void 0,vc=void 0,wc=void 0,H=void 0,Oa=void 0,Pa=void 0,xc=sc,Qc=qc,Rc=rc,Sc=Mc,Tc=Mb,nb=0;for(Y=0;12>=Y;Y++)H=xc[Y],H=0>H?-32768==H?32767:-H:H,H>nb&&(nb=H);Ba=0;H=nb>>9<<16>>16;for(Y=Pa=0;5>=Y;Y++)Pa=
0>=H?Pa|1:Pa|0,H=H>>1<<16>>16,0==Pa&&Ba++;var Ob=(nb>>(Ba+5<<16>>16)<<16>>16)+(Ba<<3<<16>>16);Oa=-32768>Ob?-32768:32767<Ob?32767:Ob;var Ha=0;15<Oa&&(Ha=(Oa>>3<<16>>16)-1<<16>>16);la=Oa-(Ha<<3)<<16>>16;if(0==la)Ha=-4,la=7;else{for(;7>=la;)la=(la<<1|1)<<16>>16,Ha--;la-=8}Ca==Ca?(ob=Ha,pb=la):(yc=Ha,zc=la);Ba=ob;Nb=pb;wc=6-Ba<<16>>16;vc=Gc[Nb];for(Y=0;12>=Y;Y++)H=xc[Y]<<wc<<16>>16,H=p(H,vc),H=H>>12<<16>>16,Qc[Y+Rc]=H+4<<16>>16;pb=Nb;ob=Ba;Sc[Tc]=Oa;var qb=void 0,ma=void 0,Ac=void 0,Pb=void 0,Qb=void 0,
xa=void 0,Uc=qc,Vc=tc,Wc=rc;Ca==Ca?(Qb=Rb[pb],ma=6-ob<<16>>16):(Qb=Rb[zc],ma=6-yc<<16>>16);Pb=-32768>ma?-32768:32767<ma?32767:ma;ma=Pb-1;var Qa=-32768>ma?-32768:32767<ma?32767:ma;Ac=16<=Qa?0:-16>=Qa?-0:0>Qa?C(1,-Qa):1<<Qa<<16>>16;for(var Cc=Bc=0;13>Cc;Cc++)xa=(Uc[Wc++]<<1)-7<<16>>16,xa=xa<<28>>16,xa=q(Qb,xa),qb=xa+Ac,xa=-32768>qb?-32768:32767<qb?32767:qb,Vc[Bc++]=C(xa,Pb);var O=void 0,rb=tc,R=oc,Dc=Ca,ya=13,sb=0;O=Dc==Ca?5:0;switch(pc[Mb]){case 3:R[O++]=0;do R[O++]=0,R[O++]=0,R[O++]=rb[sb++],--ya;
while(0!=ya);break;case 2:do R[O++]=0,R[O++]=0,R[O++]=rb[sb++],--ya;while(0!=ya);break;case 1:do R[O++]=0,R[O++]=rb[sb++],R[O++]=0,--ya;while(0!=ya);break;case 0:do R[O++]=rb[sb++],R[O++]=0,R[O++]=0,--ya;while(0!=ya)}Dc==Ca&&(R[O++]=0);for(da=0;39>=da;da++)cb=ba[5+da]+Ea[da+na],Ea[da+na]=-32768>cb?-32768:32767<cb?32767:cb;na+=40}for(da=0;120>da;da++)Ea[da]=Ea[160+da];if(Ta){var a=t[0]<<4|t[1]<<10;g[d++]=a>>4;a=a>>5|t[2]<<11;g[d++]=a>>7;a=a>>5|t[3]<<11;a=a>>4|t[4]<<12;g[d++]=a>>6;a=a>>4|t[5]<<12;a=
a>>3|t[6]<<13;g[d++]=a>>7;a=a>>3|t[7]<<13;a=a>>7|fa[0]<<9;g[d++]=a>>5;a=a>>2|ia[0]<<14;a=a>>2|ha[0]<<14;a=a>>6|ja[0]<<10;g[d++]=a>>3;a=a>>3|b[0]<<13;g[d++]=a>>8;a=a>>3|b[1]<<13;a=a>>3|b[2]<<13;a=a>>3|b[3]<<13;g[d++]=a>>7;a=a>>3|b[4]<<13;a=a>>3|b[5]<<13;a=a>>3|b[6]<<13;g[d++]=a>>6;a=a>>3|b[7]<<13;a=a>>3|b[8]<<13;g[d++]=a>>8;a=a>>3|b[9]<<13;a=a>>3|b[10]<<13;a=a>>3|b[11]<<13;g[d++]=a>>7;a=a>>3|b[12]<<13;a=a>>7|fa[1]<<9;g[d++]=a>>5;a=a>>2|ia[1]<<14;a=a>>2|ha[1]<<14;a=a>>6|ja[1]<<10;g[d++]=a>>3;a=a>>3|
b[13]<<13;g[d++]=a>>8;a=a>>3|b[14]<<13;a=a>>3|b[15]<<13;a=a>>3|b[16]<<13;g[d++]=a>>7;a=a>>3|b[17]<<13;a=a>>3|b[18]<<13;a=a>>3|b[19]<<13;g[d++]=a>>6;a=a>>3|b[20]<<13;a=a>>3|b[21]<<13;g[d++]=a>>8;a=a>>3|b[22]<<13;a=a>>3|b[23]<<13;a=a>>3|b[24]<<13;g[d++]=a>>7;a=a>>3|b[25]<<13;a=a>>7|fa[2]<<9;g[d++]=a>>5;a=a>>2|ia[2]<<14;a=a>>2|ha[2]<<14;a=a>>6|ja[2]<<10;g[d++]=a>>3;a=a>>3|b[26]<<13;g[d++]=a>>8;a=a>>3|b[27]<<13;a=a>>3|b[28]<<13;a=a>>3|b[29]<<13;g[d++]=a>>7;a=a>>3|b[30]<<13;a=a>>3|b[31]<<13;a=a>>3|b[32]<<
13;g[d++]=a>>6;a=a>>3|b[33]<<13;a=a>>3|b[34]<<13;g[d++]=a>>8;a=a>>3|b[35]<<13;a=a>>3|b[36]<<13;a=a>>3|b[37]<<13;g[d++]=a>>7;a=a>>3|b[38]<<13;a=a>>7|fa[3]<<9;g[d++]=a>>5;a=a>>2|ia[3]<<14;a=a>>2|ha[3]<<14;a=a>>6|ja[3]<<10;g[d++]=a>>3;a=a>>3|b[39]<<13;g[d++]=a>>8;a=a>>3|b[40]<<13;a=a>>3|b[41]<<13;a=a>>3|b[42]<<13;g[d++]=a>>7;a=a>>3|b[43]<<13;a=a>>3|b[44]<<13;a=a>>3|b[45]<<13;g[d++]=a>>6;a=a>>3|b[46]<<13;a=a>>3|b[47]<<13;g[d++]=a>>8;a=a>>3|b[48]<<13;a=a>>3|b[49]<<13;a=a>>3|b[50]<<13;g[d++]=a>>7;a=a>>
3|b[51]<<13;g[d]=a>>12;Tb=g[d]}else a=Tb<<6|t[0]<<10,g[d++]=a>>6,a=a>>6|t[1]<<10,g[d++]=a>>8,a=a>>5|t[2]<<11,a=a>>5|t[3]<<11,g[d++]=a>>6,a=a>>4|t[4]<<12,a=a>>4|t[5]<<12,g[d++]=a>>6,a=a>>3|t[6]<<13,a=a>>3|t[7]<<13,g[d++]=a>>8,a=a>>7|fa[0]<<9,a=a>>2|ia[0]<<14,g[d++]=a>>7,a=a>>2|ha[0]<<14,a=a>>6|ja[0]<<10,g[d++]=a>>7,a=a>>3|b[0]<<13,a=a>>3|b[1]<<13,a=a>>3|b[2]<<13,g[d++]=a>>6,a=a>>3|b[3]<<13,a=a>>3|b[4]<<13,g[d++]=a>>8,a=a>>3|b[5]<<13,a=a>>3|b[6]<<13,a=a>>3|b[7]<<13,g[d++]=a>>7,a=a>>3|b[8]<<13,a=a>>
3|b[9]<<13,a=a>>3|b[10]<<13,g[d++]=a>>6,a=a>>3|b[11]<<13,a=a>>3|b[12]<<13,g[d++]=a>>8,a=a>>7|fa[1]<<9,a=a>>2|ia[1]<<14,g[d++]=a>>7,a=a>>2|ha[1]<<14,a=a>>6|ja[1]<<10,g[d++]=a>>7,a=a>>3|b[13]<<13,a=a>>3|b[14]<<13,a=a>>3|b[15]<<13,g[d++]=a>>6,a=a>>3|b[16]<<13,a=a>>3|b[17]<<13,g[d++]=a>>8,a=a>>3|b[18]<<13,a=a>>3|b[19]<<13,a=a>>3|b[20]<<13,g[d++]=a>>7,a=a>>3|b[21]<<13,a=a>>3|b[22]<<13,a=a>>3|b[23]<<13,g[d++]=a>>6,a=a>>3|b[24]<<13,a=a>>3|b[25]<<13,g[d++]=a>>8,a=a>>7|fa[2]<<9,a=a>>2|ia[2]<<14,g[d++]=a>>
7,a=a>>2|ha[2]<<14,a=a>>6|ja[2]<<10,g[d++]=a>>7,a=a>>3|b[26]<<13,a=a>>3|b[27]<<13,a=a>>3|b[28]<<13,g[d++]=a>>6,a=a>>3|b[29]<<13,a=a>>3|b[30]<<13,g[d++]=a>>8,a=a>>3|b[31]<<13,a=a>>3|b[32]<<13,a=a>>3|b[33]<<13,g[d++]=a>>7,a=a>>3|b[34]<<13,a=a>>3|b[35]<<13,a=a>>3|b[36]<<13,g[d++]=a>>6,a=a>>3|b[37]<<13,a=a>>3|b[38]<<13,g[d++]=a>>8,a=a>>7|fa[3]<<9,a=a>>2|ia[3]<<14,g[d++]=a>>7,a=a>>2|ha[3]<<14,a=a>>6|ja[3]<<10,g[d++]=a>>7,a=a>>3|b[39]<<13,a=a>>3|b[40]<<13,a=a>>3|b[41]<<13,g[d++]=a>>6,a=a>>3|b[42]<<13,a=
a>>3|b[43]<<13,g[d++]=a>>8,a=a>>3|b[44]<<13,a=a>>3|b[45]<<13,a=a>>3|b[46]<<13,g[d++]=a>>7,a=a>>3|b[47]<<13,a=a>>3|b[48]<<13,a=a>>3|b[49]<<13,g[d++]=a>>6,a=a>>3|b[50]<<13,a=a>>3|b[51]<<13,g[d++]=a>>8;var Ra,Ec=Ta?32:33;for(Ra=0;Ra<Ec;Ra++)G[Ra+F]=g[Ra];return Ec};var Ta=!1,Sa=[8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=new Int32Array(9),ob=0,pb=0,yc=0,zc=0,Bc=0,Ca=0,tb=new Int16Array(40)}
class RecordWorkletProcessor extends AudioWorkletProcessor{constructor(){super();console.log("constructor");this._gsmData=new Uint8Array(65);this._rate=1;this._outLen=0;this._formatTag=1;this._channels=2;this.port.onmessage=function(p){switch(p.data.type){case "start":p=p.data,void 0!=p.rate&&(this._rate=p.rate),void 0!=p.formatTag&&(this._formatTag=p.formatTag),void 0!=p.length&&(this._outLen=p.length),void 0!=p.channels&&(this._channels=p.channels),console.log("init rate:"+this._rate+" len:"+this._outLen),
49==this._formatTag&&(this._inBuffer=new AudioMergeBuffer(Int16Array,320,this.onInDataAvailable.bind(this)),this._encoder=new MSGSMEncoder,0==this._outLen&&(this._outLen=65),this._channels=1),0<this._outLen&&(49!=this._formatTag||65!=this._outLen)&&(this._outBuffer=new AudioMergeBuffer(Uint8Array,this._outLen,this.onOutDataAvailable.bind(this)))}}.bind(this)}onInDataAvailable(p){var q=this._encoder.encode(p,0,this._gsmData,0);this._encoder.encode(p,160,this._gsmData,q);65==this._outLen?this.port.postMessage(this._gsmData):
this._outBuffer.process(this._gsmData)}onOutDataAvailable(p){this.port.postMessage(p)}process(p,q,D){var B=p[0];if(0==B.length)return!1;p=0;D=B[0];var C=D.length;for(q=new Int16Array(C);p<C;p++)q[p]=32767*D[p];D=C;1!=this._rate&&(D=audioResample(q,0,C,q,0,this._rate),q=q.subarray(0,D));if(2==this._channels){var A=B[1];B=new Int16Array(C);for(p=0;p<C;p++)B[p]=32767*A[p];1!=this._rate&&(audioResample(B,0,C,B,0,this._rate),B=B.subarray(0,D));C=new Int16Array(2*D);for(p=A=0;p<D;p++)C[A++]=q[p],C[A++]=
B[p];q=C}if(49==this._formatTag)this._inBuffer.process(q);else if(1==this._formatTag)if(q=new Uint8Array(q.buffer),this._outBuffer)this._outBuffer.process(q);else this.onOutDataAvailable(q);return!0}}registerProcessor("sv_record_worklet",RecordWorkletProcessor);
