Bootstrapper.bindDependencyDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;window.isNewVersion="1";window.subscriptions=[];function getPlayer(){var videoplayer=null,videoPlayers=window.videojs.getAllPlayers();if(videoPlayers&&videoPlayers.length>0)videoplayer=videoPlayers&&videoPlayers.pop();return videoplayer}window.activePlayer="";window.visionMedia=function(){if(typeof VISION!=="undefined"&&VISION.videojsPlugin&&typeof vision!=="undefined"&&
vision.trackMedia)if(typeof videojs!=="undefined"){var playerInfo=getPlayer();if(playerInfo&&playerInfo.mediainfo){if(activePlayer===playerInfo.id())return;activePlayer=playerInfo.id();VISION.videojsPlugin(playerInfo,{},function(data,mediainfo){vision.trackMedia(data,mediainfo)});if(typeof __dataLayer!=="undefined"&&typeof __dataLayer.updateDataLayer==="function")__dataLayer.updateDataLayer(["currentVideo"],playerInfo.mediainfo)}}else if(typeof espn!=="undefined"&&espn.video&&espn.video.player){var player=
espn.video.player,videoId;if(player._playerExtension&&player._playerExtension._savedInitOptions)videoId=player._playerExtension._savedInitOptions.id;if(activePlayer===videoId)return;activePlayer=videoId;VISION.videojsPlugin(player,{},function(data,mediainfo){vision.trackMedia(data,mediainfo)})}};if(typeof espn!=="undefined"&&espn.video&&espn.video.subscribe){subscriptions.push(espn.video.subscribe("espn.video.play",visionMedia));subscriptions.push(espn.video.subscribe("espn.video.ad.load",visionMedia));
subscriptions.push(espn.video.subscribe("espn.video.ready",visionMedia))}else if(typeof fitt!=="undefined"&&fitt.emitter)subscriptions.push(fitt.emitter.on("espn.video",visionMedia))},3527525,[4091823],639884,[639683],24);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var _dl=__dataLayer,_cb=_dl.chartBeatConfig||{},site=_dl.site||{},page=_dl.page||{},page_name=page.page_name||"",mabSections=[];if(page_name==="frontpage")mabSections=["index"];var _getVal=function(key){if(key=="title")return document.title.replace(/(\s+)?-(\s+)?(Stream.*)?ESPN$/,"");else if(key=="section"||key=="content_type"){if(/^\/(watch|espnplus)\/player/.test(location.pathname))return"watchespn:player";
if(history&&history.state&&history.state.analytics){var data=history.state.analytics;if(data.chartbeat){if(key=="section"&&data.chartbeat.sections)return data.chartbeat.sections;if(key=="content_type"&&data.chartbeat.authors)return data.chartbeat.authors}}if(key=="section"&&typeof page.section=="string")return page.section.split("/").join(",");if(key=="content_type")return page.content_type}else if(key=="url"){if(page.page_infrastructure=="fitt"){if(location.pathname.indexOf("/_/")>-1)return location.pathname;
if(typeof page.page_url=="string")return page.page_url.replace(/^https?:\/\/([^/]+)/,"")}return location.pathname}return"unknown"};function updateConfig(){return{"uid":"22222","domain":location.hostname,"path":_getVal("url"),"title":_getVal("title"),"pingServer":"pespn.chartbeat.net","mabServer":"mabping.chartbeat.net","sections":_getVal("section"),"authors":_getVal("content_type"),"useCanonical":true,"useSubDomains":false,"flickerControl":false,"autoDetect":false,"mabSections":mabSections}}_cb=Object.assign(updateConfig(),
_cb);Bootstrapper.initChartbeat(_cb);if(!!window.__dataLayer&&__dataLayer.subscribe)__dataLayer.subscribe("pageView",function(){setTimeout(function(){window.pSUPERFLY&&pSUPERFLY.virtualPage({sections:_getVal("section"),authors:_getVal("content_type"),path:_getVal("url"),title:_getVal("title")})},100)})},4050928,[4099256],744805,[693526],24);