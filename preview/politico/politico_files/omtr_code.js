/* SiteCatalyst code version: H.20.3.

Copyright 1997-2009 Omniture, Inc. More info available at

http://www.omniture.com */

/************************ ADDITIONAL FEATURES ************************

     Dynamic Report Suite Selection

     Plugins

*/



if(typeof(s_account)=="undefined"){
	var s_account="allbrittonpolitico";
}
var omtr=s_gi(s_account)



/* WARNING: Changing any of the below variables will cause drastic

changes to how your visitor data is collected.  Changes should only be

made when instructed to do so by your account manager.*/

// omtr.visitorNamespace="allbritton"

/* Use the two lines of code below when for FPC tracking */

//omtr.trackingServer="a.allbritton.com"

//omtr.trackingServerSecure="b.allbritton.com"

omtr.dc="122"



/************************** CONFIG SECTION **************************/

/* You may add or alter any code config here. */

/*Lines below allow you to assign RSID according to domain that is servering the content */

omtr.dynamicAccountSelection=true

omtr.dynamicAccountList="allbrittonpolitico=politico.com;allbrittonglobal,allbrittonkatv=katv.com.com;allbrittonglobal,allbrittonktul=ktul.com;allbrittonglobal,allbrittonnews8=news8.com;allbrittonglobal,allbrittonwciv=wciv.com.com;allbrittonglobal,allbrittonwhtm=whtm.com;allbrittonglobal,allbrittonwjla=wjla.com;allbrittonglobal,allbrittonwset=wset.com";

/* Conversion Config */

omtr.charSet="utf-8"

omtr.currencyCode="USD"

/* Link Tracking Config */

omtr.trackDownloadLinks=true

omtr.trackExternalLinks=true

omtr.trackInlineStats=true

omtr.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"

omtr.linkInternalFilters="javascript:,politico.com,katv.com,ktul.com,news8.com,wciv.com,whtm.com,wjla.com,wset.com"

omtr.linkLeaveQueryString=false

omtr.linkTrackVars="prop5,prop6,prop7,prop8"

omtr.linkTrackEvents="None"

/* Plugin Config */

omtr.usePlugins=true



/* Configure Modules and Plugins */



/* Page Name Plugin Config */

omtr.siteID=""            // leftmost value in pagename

omtr.defaultPage="home page"      // filename to add when none exists

omtr.queryVarsList=""     // query parameters to keep

omtr.pathExcludeDelim=";" // portion of the path to exclude

omtr.pathConcatDelim=":"   // page name component separator

omtr.pathExcludeList=""   // elements to exclude from the path



function s_doPlugins(s) {

	/* Add calls to plugins here */

		//Set omtr.server to domain host

		if(!omtr.server) {

			omtr.server=document.domain;

		}

		/*Page Name Plugin*/

		if(!omtr.pageType && !omtr.pageName)

		 omtr.pageName=omtr.getPageName();

		

		/* Set page name and page level tracking automatically using the URL */

		if(!omtr.pageNameTemp)

		{

			if(omtr.pageName) 

			{

			omtr.pageNameTemp = omtr.pageName;

			//omtr.pageName=omtr.getPageName();

			var siteSectionLength = omtr.pageNameTemp.split(':').length;

			var siteSection = omtr.pageNameTemp.split(':', siteSectionLength-1);

			if(!siteSection[0]) {

				siteSection[0] = "root"

			}

			/* Sub sections */

				 

			//omtr.prop1 

			 if(!omtr.prop1) {

				 omtr.prop1 = siteSection[0];

				 //alert(omtr.prop1);

			 }

		 

			//omtr.prop2 

			 if(!omtr.prop2 && siteSection[1]) {

			 omtr.prop2 = omtr.prop1 + ':' + siteSection[1]; 

			 } else {

			 omtr.prop2 = omtr.prop1;

			 }

			 // omtr.prop3

			 if(!omtr.prop3 && siteSection[2]) {

				omtr.prop3 = omtr.prop2 + ':' + siteSection[2]; 

			 } else {

				omtr.prop3 = omtr.prop2;

			 }

			//alert(omtr.prop3);

		 

			 // omtr.prop4

			 if(!omtr.prop4 && siteSection[3]) {

				 omtr.prop4 = omtr.prop3 + ':' + siteSection[3]; 

			 } 

			 else 

			 {

				 omtr.prop4 = omtr.prop3;

			 }

			//hier1 -- Content Drill Down

			omtr.hier1=omtr.prop4;

			

			//Set Alt Page Name into the Channel Variable

			//omtr.channel=omtr.prop4 + ':' + document.title;

			 }

		}

		

		/* Detects flash and silverlight version */

		omtr.detectRIA('omtr_ria','prop18','prop19','10','1','1');



		

		

		//Flash Version via SWF object, a bit more detailed than detectRIA-LK 12/14/2009

		//Get flash version using SWFObject (prop28)

		try

			{

			var version = deconcept.SWFObjectUtil.getPlayerVersion();

			var flashVersion = "None";

			if (version!="undefined")

			{

			if(version['major'] > 0) flashVersion = version['major'] +"."+ version['minor'] +"."+ version['rev'];

			else flashVersion = "None (or Disabled)";

			}

				omtr.prop28=flashVersion;

			}

		catch (e)

		{ omtr.prop28="Browser Error"; }

			

			



		

		/* set eVar page Name and event for custom conversions */

		omtr.eVar10=omtr.pageName

		if(omtr.events == 'event1')

		{

			omtr.events='event1'

		}

		else

		{

			omtr.events=omtr.apl(omtr.events,"event1",",",0)

		}

		 

		/* HBX Type Link Tracking */

		omtr.hbx_lt = "auto" // manual, auto

		omtr.setupLinkTrack("prop5,prop6,prop7,prop8","SC_LINKS");

		

		/* Get Visit Number Monthly */

		omtr.prop26=omtr.eVar26=omtr.getVisitNum();

		

		/* Get Days Since Last Visit */

		omtr.prop27=omtr.eVar27=omtr.getDaysSinceLastVisit('omtr_lv');

		  

		/* New/Repeat Status and Pathing Variables */

		omtr.prop22=omtr.eVar22=omtr.getNewRepeat();

		if(omtr.pageName && omtr.prop22 == 'New') omtr.prop23 = omtr.pageName;

		if(omtr.pageName && omtr.prop22 == 'Repeat') omtr.prop24 = omtr.pageName;

		

		/* Set Time Parting Variables */

		var currentDate = new Date()

		var year = currentDate.getFullYear()
		
		/* Future DST Dates for Time Parting */
		// Year		Begins		Ends
		// 2012 	03/11/2012 	11/04/2012
		// 2013 	03/10/2012 	11/03/2012
		// 2014 	03/09/2012 	11/02/2012
		// 2015 	03/08/2012 	11/01/2012
		omtr.dstStart="03/11/2012";
		omtr.dstEnd="11/04/2012";

		omtr.prop41=omtr.eVar41=omtr.getTimeParting('h','-5',year); // Set hour, set for EST

		omtr.prop42=omtr.eVar42=omtr.getTimeParting('d','-5',year); // Set day, set for EST

		//omtr.prop19=omtr.eVar19=omtr.getTimeParting('w','-7',year); // Set Weekend / Weekday

		/* External Campaign Tracking */
		if(!omtr.campaign) {

			omtr.campaign=omtr.getQueryParam('cmpid');//Set campaign here if not set in page already.

            omtr.campaign=omtr.getValOnce(omtr.campaign,'omtr_campaign',0);

            if(omtr.campaign) {

            	omtr.events=omtr.apl(omtr.events,"event3",",",0)

            }

		}

        else {

            omtr.campaign=omtr.getValOnce(omtr.campaign,'omtr_campaign',0);

            if(omtr.campaign) {

            	omtr.events=omtr.apl(omtr.events,"event3",",",0)

            }

        }		

		/*NOTE: this variable is being set in the code above with Channel Manager */

		/*********************

		*omtr.eVar30=omtr.crossVisitParticipation(vu,cn,ex,ct,dl,ev);

		* List of Parameters:                                                                    

		* vu-variable to stack values from                                                       

		* cn-name of cookie to stack values in                                                   

		* ex-expiration of variable value in days                                                   

		* ct-number of distinct values to store in cookie                                        

		* dl-delimiter to display in variable                                                         

		* ev-success event(s) which clear cookie (use comma separated list)                         

		*********************/ 

		/* Campaign Stacking */

		omtr.hier2=omtr.eVar43=omtr.crossVisitParticipation(omtr.campaign,'omtr_cpm','30','15',',','purchase');		

		

		/*********************

		*prop9 is search term

		*evar9 is search term

		*event2 is searches

		*NOTE: for null searches, prepend null: to the search term: i.e. omtr.prop9='null:teeth cleaning'

		*********************/

		if(omtr.prop9){

		omtr.eVar9=omtr.prop9=omtr.prop9.toLowerCase();

		var t_search=omtr.getValOnce(omtr.eVar9,'eVar9',0);

		if(t_search) {

		  if(omtr.events)

			omtr.events=omtr.apl(omtr.events,"event2",",",0)

		  else

			omtr.events="event2"

		}

		}

		omtr.prop25 = omtr.getPreviousValue(omtr.pageName,'gvp_pn');
		omtr.prop33 = omtr.getPreviousValue(omtr.prop20,'gvp_ct');
		hpid = omtr.getQueryParam('hp');
		if(hpid && (omtr.prop25=="POLITICO Home")) {
			omtr.prop38=hpid;
			omtr.eVar38=s.prop38;
			omtr.prop37 = omtr.prop38 +" - "+ omtr.prop41;
			omtr.prop39 = omtr.prop38 +" - "+ omtr.prop31 +" - "+ omtr.prop11;
			omtr.prop40 = omtr.prop38 +" - "+ omtr.prop31 +" - "+ omtr.prop41 +" - "+ omtr.prop11;
			
			if(omtr.prop11){
				omtr.prop36=omtr.prop11;
			}
			else {
				omtr.prop36="";
			}
		}
		mlid = omtr.getQueryParam('ml');
		if(mlid && ((omtr.prop33=="homepage") || (omtr.prop33=="front") || (omtr.prop33=="blog") || (omtr.prop33=="story"))){
			omtr.prop44 = mlid;
			omtr.eVar44 = omtr.prop44;
			omtr.prop45 = omtr.prop44 + " - " + omtr.prop33;
			omtr.prop46 = omtr.prop44 + " - " + omtr.prop25;
		}
		
		if(omtr.prop14 && omtr.prop11 && omtr.prop34){
		omtr.prop34 = omtr.prop14 +" - "+ omtr.prop11 +" - "+ omtr.prop34;
		}
		omtr.prop48 = omtr.prop33 +" | "+ omtr.prop6;

		/* Copy props to eVars */
		/*NOTE: These variables only pass the value from the prop to the eVar when the js loads */
		/*NOTE: Thus, if flash or AJAX calls are used, you much set the prop to the eVar manually */
		if(omtr.prop1&&!omtr.eVar1) omtr.eVar1=omtr.prop1;		//Page Level 1
		if(omtr.prop2&&!omtr.eVar2) omtr.eVar2=omtr.prop2;		//Page Level 2
		if(omtr.prop3&&!omtr.eVar3) omtr.eVar3=omtr.prop3;		//Page Level 3
		if(omtr.prop4&&!omtr.eVar4) omtr.eVar4=omtr.prop4;		//Page Level 4
		if(omtr.prop20&&!omtr.eVar8) omtr.eVar8=omtr.prop8;		//tool name
		if(omtr.prop9&&!omtr.eVar9) omtr.eVar9=omtr.prop9;		//blog name
		if(omtr.pageName&&!omtr.eVar10) omtr.eVar10=omtr.pageName;
		if(omtr.prop11&&!omtr.eVar11) omtr.eVar11=omtr.prop11;	//Detail Content ID
		if(omtr.prop12&&!omtr.eVar12) omtr.eVar12=omtr.prop12;	//Detail Content Name
		if(omtr.prop13&&!omtr.eVar13) omtr.eVar13=omtr.prop13;	//Detail Content Type
		if(omtr.prop14&&!omtr.eVar14) omtr.eVar14=omtr.prop14;	//Detail Content Author
		if(omtr.prop15&&!omtr.eVar18) omtr.eVar18=omtr.prop15;  //policy
		//if(omtr.prop16&&!omtr.eVar16) omtr.eVar16=omtr.prop16;	//Application:Lead Name
		if(!omtr.channel){omtr.channel="no section";}
		//if(omtr.channel&&!omtr.eVar17) omtr.eVar17=omtr.channel;
		//if(omtr.prop19&&!omtr.eVar19) omtr.eVar19=omtr.prop19;	//Content Container List ID (|)
		if(omtr.prop20&&!omtr.eVar20) omtr.eVar20=omtr.prop20;	//Tool Name
		if(omtr.prop21&&!omtr.eVar21) omtr.eVar21=omtr.prop21;	//Member ID
		if(omtr.prop25&&!omtr.eVar25) omtr.eVar25=omtr.prop25;	//previous page
		if(omtr.prop28&&!omtr.eVar28) omtr.eVar28=omtr.prop28;	//Flash Version via SWF object-LK 12/14/2009
		if(omtr.prop29&&!omtr.eVar29) omtr.eVar29=omtr.prop29;	//Share Name
		if(omtr.prop30&&!omtr.eVar30) omtr.eVar30=omtr.prop30;	//Share Format
		if(omtr.prop33&&!omtr.eVar33) omtr.eVar33=omtr.prop33;	//previous page
		if(omtr.prop34&&!omtr.eVar34) omtr.eVar34=omtr.prop34;	//author+ID+headline
		if(omtr.prop45&&!omtr.eVar45) omtr.eVar45=omtr.prop45;	//right-rail widget type & previous content type
		if(omtr.prop46&&!omtr.eVar46) omtr.eVar46=omtr.prop46;	//right-rail widget type & previous page
		
		//set up new events for right-rail module tracking
		if(omtr.pageType){
			var tempPrintStoryCheck = omtr.pageType;
		}
		else{
			var tempPrintStoryCheck = "";		
		}
		if(tempPrintStoryCheck != "Print"){
			if(omtr.prop20=="homepage"){
				if(omtr.events){
					omtr.events=omtr.apl(omtr.events,"event16",",",0)
				}
				else
				{
					omtr.events="event16"
				}			
			} 
			
			if(omtr.prop20=="front"){
				if(omtr.events) {
					omtr.events=omtr.apl(omtr.events,"event19",",",0);	
				}
				else
				{
					omtr.events="event19"	
				}
			} 
			
			if(omtr.prop20=="blog"){
				if(omtr.prop14){
					if(omtr.events) {
						omtr.events=omtr.apl(omtr.events,"event18",",",0);	
					}
					else
					{
						omtr.events="event18"
					}
					omtr.events=omtr.apl(omtr.events,"event23",",",0);
				}
			}
			
			if (omtr.prop20 == "story") {
				if(omtr.prop32.substr(0,1)=="1"){
					if (omtr.events) {
						omtr.events = omtr.apl(omtr.events, "event17", ",", 0);
					}
					else {
						omtr.events = "event17"
					}
					omtr.events=omtr.apl(omtr.events,"event23",",",0);
				}
			}
		}
}

omtr.doPlugins=s_doPlugins

omtr.trackingServer="metrics.politico.com";
omtr.trackingServerSecure="smetrics.politico.com";

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.				 */

// Optimizely SiteCatalyst Integration
window.optimizely = window.optimizely || [];
window.optimizely.push(['activateSiteCatalyst', {'sVariable': omtr}]);



/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
omtr.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*

 * Plugin: setupLinkTrack 2.0 - return links for HBX-based link 

 *         tracking in SiteCatalyst (requires omtr.split and omtr.apl)

 */

omtr.setupLinkTrack=new Function("vl","c",""

+"var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s."

+"c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for("

+"x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e"

+"o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&"

+"&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement"

+":o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);}for(i=0;i<4;i++"

+")if(o.tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC"

+"ase()!='area')o=o.parentElement;}b=s._LN(o);o.lid=b[0];o.lpos=b[1];"

+"if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='"

+"area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l"

+"id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))"

+"o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t"

+"ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid"

+"),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu"

+"&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")"

+";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';"

+"i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l"

+"=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC"

+"ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid"

+"+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if"

+"(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s"

+"._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<"

+"0){s.c_w(c,cv,0);}else return ''");

omtr._IL=new Function("a","var s=this;return a!='undefined'?a.length:0");

omtr._II=new Function("a","b","c","var s=this;return a.indexOf(b,c?c:0)"

);

omtr._IS=new Function("a","b","c",""

+"var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");

omtr._LN=new Function("a","b","c","d",""

+"var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP("

+"b,'lpos');r"

+"eturn[c,d]");

omtr._LVP=new Function("a","b","c","d","e",""

+"var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)"

+"{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)"

+");return e}return ''");

omtr._LS=new Function("a",""

+"var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca"

+"pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%"

+"09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g"

+"=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu"

+"rn unescape(b)");

omtr._LSP=new Function("a","b","c","d","var s=this;d=s._IP(a,b);return d"

+".join(c)");

omtr._IP=new Function("a","b","var s=this;return a.split(b)");

omtr._RP=new Function("a","b","c","d",""

+"var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d"

+"+s._IL(b),s._IL(a)),b,c)}return a");

omtr._TL=new Function("a","var s=this;return a.toLowerCase()");

omtr._NA=new Function("a","var s=this;return new Array(a?a:0)");

omtr._hbxm=new Function("m","var s=this;return (''+m).indexOf('{')<0");

omtr._hbxln=new Function("h","var s=this,n=s.linkNames;if(n)return s.pt("

+"n,',','lnf',h);return ''");

/*

 * Plugin: detectRIA v0.1 - detect and set Flash, Silverlight versions

 */

omtr.detectRIA=new Function("cn", "fp", "sp", "mfv", "msv", "sf", ""

+"cn=cn?cn:'s_ria';msv=msv?msv:2;mfv=mfv?mfv:10;var s=this,sv='',fv=-"

+"1,dwi=0,fr='',sr='',w,mt=s.n.mimeTypes,uk=s.c_r(cn),k=s.c_w('s_cc',"

+"'true',0)?'Y':'N';fk=uk.substring(0,uk.indexOf('|'));sk=uk.substrin"

+"g(uk.indexOf('|')+1,uk.length);if(k=='Y'&&s.p_fo('detectRIA')){if(u"

+"k&&!sf){if(fp){s[fp]=fk;}if(sp){s[sp]=sk;}return false;}if(!fk&&fp)"

+"{if(s.pl&&s.pl.length){if(s.pl['Shockwave Flash 2.0'])fv=2;x=s.pl['"

+"Shockwave Flash'];if(x){fv=0;z=x.description;if(z)fv=z.substring(16"

+",z.indexOf('.'));}}else if(navigator.plugins&&navigator.plugins.len"

+"gth){x=navigator.plugins['Shockwave Flash'];if(x){fv=0;z=x.descript"

+"ion;if(z)fv=z.substring(16,z.indexOf('.'));}}else if(mt&&mt.length)"

+"{x=mt['application/x-shockwave-flash'];if(x&&x.enabledPlugin)fv=0;}"

+"if(fv<=0)dwi=1;w=s.u.indexOf('Win')!=-1?1:0;if(dwi&&s.isie&&w&&exec"

+"Script){result=false;for(var i=mfv;i>=3&&result!=true;i--){execScri"

+"pt('on error resume next: result = IsObject(CreateObject(\"Shockwav"

+"eFlash.ShockwaveFlash.'+i+'\"))','VBScript');fv=i;}}fr=fv==-1?'flas"

+"h not detected':fv==0?'flash enabled (no version)':'flash '+fv;}if("

+"!sk&&sp&&s.apv>=4.1){var tc='try{x=new ActiveXObject(\"AgControl.A'"

+"+'gControl\");for(var i=msv;i>0;i--){for(var j=9;j>=0;j--){if(x.is'"

+"+'VersionSupported(i+\".\"+j)){sv=i+\".\"+j;break;}}if(sv){break;}'"

+"+'}}catch(e){try{x=navigator.plugins[\"Silverlight Plug-In\"];sv=x'"

+"+'.description.substring(0,x.description.indexOf(\".\")+2);}catch('"

+"+'e){}}';eval(tc);sr=sv==''?'silverlight not detected':'silverlight"

+" '+sv;}if((fr&&fp)||(sr&&sp)){s.c_w(cn,fr+'|'+sr,0);if(fr)s[fp]=fr;"

+"if(sr)s[sp]=sr;}}");





/*********************************************************************

* Function p_fo(x,y): Ensures the plugin code is fired only on the 

*      first call of do_plugins

*

*

* Returns:

*     - 1 if first instance on firing

*     - 0 if not first instance on firing

*********************************************************************/

omtr.p_fo=new Function("n",""

+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="

+"new Object;return 1;}else {return 0;}");



/*                                                                  

 * Plugin: Visit Number By Month 2.0 - Return the user visit number 

 */

omtr.getVisitNum=new Function(""

+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"

+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"

+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"

+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"

+"true',e);return str;}else return 'unknown visit number';}else{if(st"

+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"

+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"

+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"

+",'true',e);return 1;}}"

);

/*

 * Function - read combined cookies v 0.3

 */

if(!omtr.__ccucr){omtr.c_rr=omtr.c_r;omtr.__ccucr = true;

omtr.c_r=new Function("k",""

+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"

+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="

+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"

+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"

+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"

+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"

+"urn v;");}

/*

 * Function - write combined cookies v 0.3

 */

if(!omtr.__ccucw){omtr.c_wr=omtr.c_w;omtr.__ccucw = true;

omtr.c_w=new Function("k","v","e",""

+"this.new2 = true;"

+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"

+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"

+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"

+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"

+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"

+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"

+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"

+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"

+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"

+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"

+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}

/** Description **

Uses cookies to capture and pass the number of days since the user's

last visit.  Plugin returns a value every time doplugins executes.  

Plugin also uses 2 cookies--uses of the cookie combining utility is

highly recommended for this plugin and other plugins which use cookies.

*/

/*

 * Plugin: Days since last Visit 1.1.H - capture time from last visit

 */

omtr.getDaysSinceLastVisit=new Function("c",""

+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"

+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"

+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"

+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"

+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"

+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"

+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"

+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."

+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"

+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"

+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"

+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"

+"!=f5) return '';else return cval_s;");



/*

 * Plugin: crossVisitParticipation v1.2

 */

omtr.crossVisitParticipation = new Function("v","cn","ex","ct","dl","ev",""                          

+"var s=this;var ay=s.split(ev,',');for(var u=0;u<ay.length;u++){if(s"                     

+".events&&s.events.indexOf(ay[u])!=-1){s.c_w(cn,'');return '';}}if(!"                     

+"v||v=='')return '';var arry=new Array();var a=new Array();var c=s.c"                     

+"_r(cn);var g=0;var h=new Array();if(c&&c!='') arry=eval(c);var e=ne"                     

+"w Date();e.setFullYear(e.getFullYear()+5);if(arry.length>0&&arry[ar"                     

+"ry.length-1][0]==v)arry[arry.length-1]=[v, new Date().getTime()];el"                     

+"se arry[arry.length]=[v, new Date().getTime()];var data=s.join(arry"                     

+",{delim:',',front:'[',back:']',wrap:'\\''});var start=arry.length-c"                     

+"t < 0?0:arry.length-ct;s.c_w(cn,data,e);for(var x=start;x<arry.leng"                     

+"th;x++){var diff=Math.round(new Date()-new Date(parseInt(arry[x][1]"                     

+")))/86400000;if(diff<ex){h[g]=arry[x][0];a[g++]=arry[x];}}var r=s.j"                     

+"oin(h,{delim:dl});return r;");

 /*

 * Plugin: join

 */

omtr.join = new Function("v","p",""

+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"

+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"

+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"

+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

 /*

 * Plugin: getPageName v2.1 - parse URL and return

 */

omtr.getPageName=new Function("u",""

+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"

+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."

+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"

+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"

+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"

+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"

+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."

+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"

+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"

+"ubstring(x+1)}return n");

/*

 * Utility Function: p_gh

 */

omtr.p_gh=new Function(""

+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("

+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"

+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."

+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*

 * Utility Function: p_c

 */

omtr.p_c=new Function("v","c",""

+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"

+"ngth:x).toLowerCase()?v:0");

/*

 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone

 */

omtr.getTimeParting=new Function("t","z","y",""

+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"

+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"

+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("

+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"

+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"

+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"

+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("

+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"

+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"

+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="

+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"

+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"

+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"

+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"

+"estring}if(t=='d'){return daystring};if(t=='w'){return en"

+"dstring}}};"

);

/*

 * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat

 */

omtr.getNewRepeat=new Function(""

+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"

+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("

+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"

+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"

+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"

+"n 'Repeat';");

/*

 * Plugin: getQueryParam 2.1 - return query string parameter(s)

 */

omtr.getQueryParam=new Function("p","d","u",""

+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"

+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"

+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"

+"tring(i==p.length?i:i+1)}return v");

omtr.p_gpv=new Function("k","u",""

+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"

+"=s.pt(q,'&','p_gvf',k)}return v");

omtr.p_gvf=new Function("t","k",""

+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"

+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."

+"epa(v)}return ''");

/*

 * Plugin: getValOnce 0.2 - get a value once per session or number of days

 */

omtr.getValOnce=new Function("v","c","e",""

+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("

+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*

* Plugin Utility: apl v1.1

*/

omtr.apl=new Function("L","v","d","u",""

+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."

+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"

+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*

 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)

 */

omtr.split=new Function("l","d",""

+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"

+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");





omtr.loadModule("Media")

omtr.Media.autoTrack=false

omtr.Media.trackWhilePlaying=true

omtr.Media.trackVars="None"

omtr.Media.trackEvents="None"



omtr.loadModule("Integrate")



/* WARNING: Changing any of the below variables will cause drastic

changes to how your visitor data is collected.  Changes should only be

made when instructed to do so by your account manager.*/







/****************************** MODULES *****************************/

/* Module: Media */

omtr.m_Media_c="var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',"

+"x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0"

+";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m"

+"=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va"

+"r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,"

+"v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x="

+"=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a"

+"pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts"

+";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w"

+".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?"

+"m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m"

+".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i"

+".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p"

+"e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t"

+"){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',"

+"f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n"

+"ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc"

+"h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){"

+"p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n="

+"=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex"

+"t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui"

+"ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l"

+"=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&"

+"o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='"

+"RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!="

+"o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o."

+"'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+"

+"'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i"

+"sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";

omtr.m_i("Media");

/* Module: Integrate */

omtr.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.get=m.get;p.bea"

+"con=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&p[f]){if(s.apv>=5&&(!s.isopera||s.ap"

+"v>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase("

+").substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000"

+")%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v)==p[x])u=s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};"

+"m.get=function(u,v){var p=this,m=p._m,s=m.s;if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)};m._d=function(){var m=this,i"

+";for(i=0;i<m.l.length;i++)if(m[m.l[i]]._d>0)return 1;return 0};m._x=function(d,n){var p=this[n],x;for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--;};m.beacon=fun"

+"ction(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p"

+",u)}};m.script=function(u){var p=this,m=p._m;m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";

omtr.m_i("Integrate");



/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/

var omtr_code='',s_objectID;function s_gi(un,pg,ss){var c="s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s"

+".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func"

+"tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO"

+"f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(c=='AUTO"

+"'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';"

+"else y+=escape(c)}x=y}else{x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1)."

+"toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')):x};s.pt=function(x,d,f,a){var s=th"

+"is,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a"

+".indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0}"

+";s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(wd){var s=this,c=''+s_gi,a=c.indexOf(\"{\"),b=c.lastIndexOf(\"}\"),m;c=s_fe(a>0&&b>0?c.substring(a+1,b):0);if"

+"(wd&&wd.document&&c){wd.setTimeout('function s_sv(o,n,k){var v=o[k],i;if(v){if(typeof(v)==\"string\"||typeof(v)==\"number\")n[k]=v;else if (typeof(v)==\"array\"){n[k]=new Array;for(i=0;i<v.length;i"

+"++)s_sv(v,n[k],i)}else if (typeof(v)==\"object\"){n[k]=new Object;for(i in v)s_sv(v,n[k],i)}}}function s_si(t){var wd=window,s,i,j,c,a,b;wd.s_gi=new Function(\"un\",\"pg\",\"ss\",\"'+c+'\");wd.s=s_"

+"gi(\"'+s.oun+'\");s=wd.s;s.sa(\"'+s.un+'\");s.tfs=wd;s.pt(s.vl_g,\",\",\"vo1\",t);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3=\\'\\';if(t.m_l&&t.m_nl)for(i=0;i<"

+"t.m_nl.length;i++){n=t.m_nl[i];if(n){m=t[n];c=t[\"m_\"+n];if(m&&c){c=\"\"+c;if(c.indexOf(\"function\")>=0){a=c.indexOf(\"{\");b=c.lastIndexOf(\"}\");c=a>0&&b>0?c.substring(a+1,b):0;s[\"m_\"+n+\"_c"

+"\"]=c;if(m._e)s.loadModule(n);if(s[n])for(j=0;j<m._l.length;j++)s_sv(m,s[n],m._l[j])}}}}}var e,o,t;try{o=window.opener;if(o&&o.s_gi){t=o.s_gi(\"'+s.un+'\");if(t)s_si(t)}}catch(e){}',1)}};s.c_d='';s"

+".c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?par"

+"seInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ap"

+"e(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd("

+"),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie="

+"k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._"

+"in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x"

+".b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r"

+"');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfso"

+"e=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this"

+",p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet("

+"'gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s"

+"=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBu"

+"fferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorN"

+"amespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){i"

+"f(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.20.3/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if"

+"(s.isie&&!s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if"

+"(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]"

+"=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+u"

+"n+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;wh"

+"ile(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';re"

+"turn s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=t"

+"his,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://"

+"')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i"

+"=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.link"

+"TrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s"

+".va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='"

+"';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)"

+"}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if("

+"!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPe"

+"riods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='"

+"campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browse"

+"rWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')"

+"q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.to"

+"LowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'"

+"';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLower"

+"Case();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))re"

+"turn 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['"

+"+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t"

+"()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o"

+".protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i"

+"<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if(t=='INPUT'&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if("

+"!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript"

+"')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if(o.src&&t=='IMAGE')n=o.src"

+";if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s.epa(t.substring(e+1))"

+":''};s.rq=function(un){var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.ep"

+"a(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sq"

+"q=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?'"

+",':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s"

+"_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s"

+"_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s"

+".bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_"

+"'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t"

+"&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0}"

+";s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l."

+"toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.ou"

+"n+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i"

+")s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_"

+"t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.t"

+"oUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d"

+"(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl"

+"=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).in"

+"dexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+"

+"1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){"

+"var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElem"

+"ent){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o."

+"i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e"

+"',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f"

+"2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)"

+"g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a"

+"[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;"

+"s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,','"

+",'vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floo"

+"r(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMin"

+"utes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta='',q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',"

+"c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>"

+"=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}"

+"}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugin"

+"s}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function"

+"('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default"

+"#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.c"

+"olorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt("

+"s.vl_g,',','vo1',vo)}if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}"

+"if((vo&&vo._t)||!s.m_m('d')){s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY')"

+"{o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".t"

+"l(\")>=0)return ''}ta=n?o.target:1;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+"

+"(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objec"

+"tID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if("

+"trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq(s.un)),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',v"

+"b);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests("

+")}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_"

+"gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName"

+"){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Op"

+"era '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFl"

+"oat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if"

+"(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrati"

+"onServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvide"

+"r,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,p"

+"ev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',track"

+"ingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccount"

+"Match,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_ref"

+"errer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",

w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"

+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");

w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");

w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");

w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"

+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("

+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");

w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");

w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"

+"a");

w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"

+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"

+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");

c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}



