
rsinetsegs=['E05516_14567','E05516_13057','E05516_14982','E05516_14933','E05516_14654','E05516_13926','E05516_14508','E05516_14596','E05516_12633','E05516_14569','E05516_14533','E05516_14606','E05516_14858','E05516_12352','E05516_14185','E05516_14666','E05516_15260','E05516_12390','E05516_12868','E05516_13663','E05516_14068','E05516_14203','E05516_14213','E05516_14219','E05516_14236','E05516_14245','E05516_14330','E05516_14387','E05516_14401','E05516_14455','E05516_14464','D08734_70625','E05516_14644','D08734_74688','E05516_14633','E05516_14650','E05516_14639','E05516_14664','E05516_14665','E05516_14685','E05516_13825','E05516_14702','E05516_14749','E05516_14763','E05516_14773','E05516_14893','E05516_14945','G07610_13315','D08734_75420','E05516_14994','E05516_15121','E05516_15251','E05516_15227','E05516_14899','E05516_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiSegs="";
var rsiPat=/.*_5.*/;
var rsiPat2=/([^_]{2})[^_]*_(.*)/;
var i=0;
for(x=0;x<rsinetsegs.length&&i<100;++x){if(!rsiPat.test(rsinetsegs[x])){var f=rsiPat2.exec(rsinetsegs[x]);if(f!=null){rsiSegs+=f[1]+f[2];++i;}}}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs:"")+";expires="+rsiExp.toGMTString()+";path=/;domain=.mg.co.za";
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['E05516_14567','E05516_13057','E05516_14982','E05516_14933','E05516_14654','E05516_13926','E05516_14508','E05516_14596','E05516_12633','E05516_14569','E05516_14533','E05516_14606','E05516_14858','E05516_12352','E05516_14185','E05516_14666','E05516_15260','E05516_12390','E05516_12868','E05516_13663','E05516_14068','E05516_14203','E05516_14213','E05516_14219','E05516_14236','E05516_14245','E05516_14330','E05516_14387','E05516_14401','E05516_14455','E05516_14464','D08734_70625','E05516_14644','D08734_74688','E05516_14633','E05516_14650','E05516_14639','E05516_14664','E05516_14665','E05516_14685','E05516_13825','E05516_14702','E05516_14749','E05516_14763','E05516_14773','E05516_14893','E05516_14945','G07610_13315','D08734_75420','E05516_14994','E05516_15121','E05516_15251','E05516_15227','E05516_14899','E05516_0'],'e05516');} 