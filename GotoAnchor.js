var w=window, d=w.document;
//
var E=Element,EP=E.prototype;
if(!EP.scrollIntoViewIfNeeded){
 EP.scrollIntoViewIfNeeded=function(centerIfNeeded){
	var e=this, ech=e.clientHeight, ecw=e.clientWidth,
	k=function(n){
	 var e=n.parentNode;
	 if(e!==n.ownerDocument){
		if(!(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)){
		 e=k(e);
		};
	 };return e;
	},
	p=k(e),pst=p.scrollTop,psl=p.scrollLeft,pch=p.clientHeight,pcw=p.clientWidth,
	ot=e.offsetTop-p.offsetTop,
	ol=e.offsetLeft-p.offsetLeft,
	T=(k=window.getComputedStyle(p,null),ot<pst),
	bwt=parseInt(k.getPropertyValue('border-top-width')),
	bwl=parseInt(k.getPropertyValue('border-left-width')),
	B=(k=centerIfNeeded,(ot+ech-bwt)>(pst+pch)),
	TB=T||B,
	LR=((ol<psl)||((ol+ecw-bwl)>(psl+pcw)));
	if(k && TB){p.scrollTop=ot-pch/2-bwt+ech/2;};
	if(k && LR){p.scrollLeft=ol-pcw/2-bwl+ecw/2;};
	if(!k && (TB||LR)){e.scrollIntoView(T && !B);};//alignWithTop
 };
};
//
E=EP=null;
//
d.addEventListener("DOMContentLoaded",function(evt){
 //
 function GotoAnchor(evt){var e=evt;e.preventDefault();e=e.target.anchor;e.scrollIntoViewIfNeeded();return false;}
 for(var e,h,d=evt.target,m=d.getElementsByTagName('A'),l=m.length,i=0; i<l;i++){
	e=m[i];
	if((h=e.hash) && e.origin+e.pathname===self.location.href){
	 h=h.match(/\/?#([A-Za-z][A-Za-z0-9]+)/i)[1];
	 if(h && (h=d.getElementById(h))){e.anchor=h;e.addEventListener('click',GotoAnchor,false);};
	};
 };
 //
},false);










