Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.Conviva=Bootstrapper.Conviva||{};var isScore=window&&window.__dataLayer&&window.__dataLayer.page&&window.__dataLayer.page.page_infrastructure==="sCore";Bootstrapper.Conviva.initOptions={debug:location.search.indexOf("qoePulseDebug\x3dtrue")>-1?true:false,appBrand:"espn_com",metaAccount:"dmed",baseKey:"885e2dd94adb263c2321d2d0f3778d18523bce4a"};Bootstrapper.Conviva.extendBrandContentInfo=
function(index){var dl=__dataLayer,visitor=dl.visitor||{},media=dl.media||{},meta=media.qoe||[],metaBundle=meta[index]||{},qoe=metaBundle.playback||{},brandMetadata={};brandMetadata.league=qoe.league;brandMetadata.sport=qoe.sport;brandMetadata[Conviva.Constants.PLAYER_NAME]="ESPN Browser";return brandMetadata};if(Bootstrapper.Conviva&&typeof Bootstrapper.Conviva.init==="function"&&!isScore)Bootstrapper.Conviva.init(Bootstrapper.Conviva.initOptions)},4033120,[4033481],756370,[709338],24);