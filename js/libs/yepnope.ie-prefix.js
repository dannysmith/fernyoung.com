(function(g){var d=({}).hasOwnProperty,e;if(typeof d!=="undefined"&&typeof d.call!=="undefined"){e=function(h,i){return d.call(h,i)}}else{e=function(h,i){return((i in h)&&typeof h.constructor.prototype[i]==="undefined")}}var f=(function(){var j,h=3,k=document.createElement("div"),i=k.getElementsByTagName("i");while(k.innerHTML="<!--[if gt IE "+(++h)+"]><i></i><![endif]-->",i[0]){}return h>4?h:j}()),a={ie:!!f,ie5:(f===5),ie6:(f===6),ie7:(f===7),ie8:(f===8),ie9:(f===9),iegt5:(f>5),iegt6:(f>6),iegt7:(f>7),iegt8:(f>8),ielt7:(f<7),ielt8:(f<8),ielt9:(f<9)},c=function(j){var i=j.prefixes,l,h;for(h=0;h<i.length;h++){l=i[h];if(e(a,l)){if(a[l]){return true}}}return false},b;for(b in a){if(e(a,b)){g.addPrefix(b,function(h){if(!c(h)){h.bypass=true}return h})}}})(this.yepnope);