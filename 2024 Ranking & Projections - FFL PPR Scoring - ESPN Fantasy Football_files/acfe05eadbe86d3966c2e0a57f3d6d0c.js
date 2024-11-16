Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.initChartbeat=function(config){var _dl=__dataLayer||{},page=_dl.page||{},section=page.section1||page.section_1||page.content_type||"",_cb=config||{},mabSections=_cb.mabSections||[],enableMabAllSections=_cb.mabAllSections||false;window._sf_async_config=_cb;(function(window){function bind(fn,ctx,var_args){var arraySlice=Array.prototype.slice;var args=
arraySlice.call(arguments,2);return function(){return fn.apply(ctx,args.concat(arraySlice.call(arguments)))}}function getTimeInMilliseconds(t){return Math.round(t===-1||isNaN(t)?-1:t*1E3)}function now(){return(new Date).getTime()}function DMEDPlayerStrategy(player){this.player_=player;this.viewStartTime_=now();this.subscribeEvents_()}DMEDPlayerStrategy.ContentType={AD:"ad",CONTENT:"ct"};DMEDPlayerStrategy.AdPosition={PREROLL:"a1",MIDROLL:"a2",POSTROLL:"a3",OVERLAY:"a4",SPECIAL:"a5"};DMEDPlayerStrategy.VideoState=
{UNPLAYED:"s1",PLAYED:"s2",STOPPED:"s3",COMPLETED:"s4"};DMEDPlayerStrategy.prototype.subscribeEvents_=function(){this.player_.on("dispose",bind(this.onDispose_,this))};DMEDPlayerStrategy.prototype.onDispose_=function(){var cbv=window._cbv;if(cbv&&cbv.push)cbv.push(["removePlayer",this.player_])};DMEDPlayerStrategy.prototype.isReady=function(){return this.getTitle()!==""};DMEDPlayerStrategy.prototype.getTitle=function(){return this.player_.mediaItem.name||""};DMEDPlayerStrategy.prototype.getVideoPath=
function(){return this.player_.mediaItem.webHref||this.player_.mediaItem.id};DMEDPlayerStrategy.prototype.getContentType=function(){if(__dataLayer.media&&__dataLayer.media.ad_id&&__dataLayer.media.ad_id!="N/A")return DMEDPlayerStrategy.ContentType.AD;return DMEDPlayerStrategy.ContentType.CONTENT};DMEDPlayerStrategy.prototype.getAdPosition=function(){if(__dataLayer.media&&__dataLayer.media.ad_type=="postroll")return DMEDPlayerStrategy.AdPosition.POSTROLL;else if(__dataLayer.media&&__dataLayer.media.ad_type==
"midroll")return DMEDPlayerStrategy.AdPosition.MIDROLL;return DMEDPlayerStrategy.AdPosition.PREROLL};DMEDPlayerStrategy.prototype.getTotalDuration=function(){var d=this.player_.mediaItem.duration||0;return getTimeInMilliseconds(d)};DMEDPlayerStrategy.prototype.getState=function(){if(!this.player_.hasStarted())return DMEDPlayerStrategy.VideoState.UNPLAYED;if(this.player_.ended())return DMEDPlayerStrategy.VideoState.COMPLETED;if(this.player_.paused())return DMEDPlayerStrategy.VideoState.STOPPED;return DMEDPlayerStrategy.VideoState.PLAYED};
DMEDPlayerStrategy.prototype.getCurrentPlayTime=function(){var pt=this.player_.currentTime();return getTimeInMilliseconds(pt)};DMEDPlayerStrategy.prototype.getBitrate=function(){return-1};DMEDPlayerStrategy.prototype.getThumbnailPath=function(){return this.player_.mediainfo&&this.player_.mediainfo.posterHref||""};DMEDPlayerStrategy.prototype.getPlayerType=function(){};DMEDPlayerStrategy.prototype.getAutoplayType=function(){if(this.player_.mediainfo&&this.player_.mediainfo.startType)if(!!this.player_.mediainfo.startType.match(/manual/i))return"man";
else if(this.player_.mediainfo.startType==="autostart")return"auto";else if(this.player_.mediainfo.startType==="endcard_continuous")return"cont";return"unkn"};DMEDPlayerStrategy.prototype.getViewStartTime=function(){return now()-this.viewStartTime_};DMEDPlayerStrategy.prototype.getViewPlayTime=function(){return now()-this.viewStartTime_};DMEDPlayerStrategy.prototype.getViewAdPlayTime=function(){return now()-this.viewStartTime_};DMEDPlayerStrategy.verify=function(player){return player.controlBar!==
undefined&&player.mediaItem!==undefined};window._cbv_strategies=window._cbv_strategies||[];window._cbv_strategies.unshift(DMEDPlayerStrategy)})(window);Bootstrapper.insertScript("//static.chartbeat.com/js/chartbeat_video.js");if(mabSections.indexOf(section)>-1||enableMabAllSections||!!window.__dataLayer&&__dataLayer.chartBeatConfig&&__dataLayer.chartBeatConfig.load_hl_cb_script===true)Bootstrapper.insertScript("//static.chartbeat.com/js/chartbeat_mab.js")}},4099256,[4010591,4044017,4053064,4062932],
693526,[645040,671423,683385,763742],-1);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var isChrome=navigator.userAgent.indexOf("Chrome/")>-1,shouldRemove=true;if(isChrome){var tc=Bootstrapper.Cookies.get("tvid"),cc=Bootstrapper.Cookies.get("country"),up=Bootstrapper.Cookies.get("usprivacy"),_attempted=Bootstrapper.Storage.session.getItem("tvid")!=null,curHost=location.hostname;if(typeof cc==="string"&&cc.toLowerCase()==="us"&&up==="1YNY"){shouldRemove=
false;if(!tc&&!_attempted){Bootstrapper.Storage.session.setItem("tvid",1);var base="//i79zj.publishers.tremorhub.com/pubsync?redir\x3d",isOTV=/(^|\.)(ouramericaabc|6abc|abc11|abc13|abc30|abc7|abc7chicago|abc7news|abc7ny|abcotvs(sb|qa)?)\.com(:\d+)?$/.test(curHost),dmap={"espn":"/tvid","abcn":"/setCookie","abcotv":"/setCookie","ff":"/tvid","abc":"/tvid","fxn":"/tvid","ngtv":"/tvid"},dl=window.__dataLayer||{},site=dl.site||{},curSite=site.site||"";if(isOTV)curSite="abcotv";else if(curHost.indexOf("espn")>
-1)curSite="espn";var redir=dmap[curSite]||null;if(redir){redir=location.protocol+"//"+curHost+redir+"?tvid\x3d[tvid]";Bootstrapper.Logging.logMsg("Get tvid Cookie from URL: ",base+encodeURIComponent(redir));Bootstrapper.imageRequest(base+encodeURIComponent(redir))}else Bootstrapper.Logging.logMsg("No Endpoint for TVID. Exiting.")}}}if(shouldRemove){Bootstrapper.Cookies.remove("tvid");var fHost="",curHost=location.hostname;if(curHost.indexOf("www")>-1){var parts=curHost.split(".");parts[0]="";fHost=
parts.join(".")}else fHost="."+curHost;document.cookie="tvid\x3d; Max-Age\x3d0; path\x3d/; domain\x3d"+fHost;document.cookie="tvid\x3d; Max-Age\x3d0; path\x3d/"}},4015702,[4010591,4044017,4053064,4062932],727846,[645040,671423,683385,763742],-1);