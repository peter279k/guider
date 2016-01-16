$(function() {
	// 執行 tinyMap 前可使用 $.tinyMapConfigure 進行 API 的設定。
	$.fn.tinyMapConfigure({
		// Google Maps API URL
		'api': '//maps.googleapis.com/maps/api/js',
		// Google Maps API Version
		'v': '3.21',
		// Google Maps API Key，預設 null
		'key': 'AIzaSyAWGG-rKpPjYO_8Mmq_PoKk7paNNTZUMfE',
		// 使用的地圖語言
		'language': 'zh‐TW',
		// 載入的函式庫名稱，預設 null
		'libraries': null,
		// 使用個人化的地圖，預設 false
		'signed_in': false,
		'autoLocation': true,
		'autoLocation': function (loc) {
			console.log(loc);
		},
		// MarkerClustererPlus.js 路徑
		// 預設 '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerclustererplus/src/markerclusterer_packed.js'
		// 建議下載至自有主機，避免讀取延遲造成無法使用。
		'clusterer': '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerclustererplus/src/markerclusterer_packed.js',
		// MarkerWithLabel.js 路徑
		// 預設 '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerwithlabel/src/markerwithlabel_packed.js'
		// 建議下載至自有主機，避免讀取延遲造成無法使用。
		'withLabel': '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerwithlabel/src/markerwithlabel_packed.js'
	});
	
	//get mrt mark
	$.get("/guider/mrt/get/exit", function(data) {
		var result = $.parseJSON(data);
		//convert TWD97 to lat,lng
		
	});

	// Basic
	$(".map").tinyMap({
		// Map center
		'center': ['25.039065815333753', '121.56097412109375'],
		// or 'center': 'lat, lng'
		// or 'center': [lat, lng]
		// or 'center': 'ADDRESS'
		// or 'center': 'N48°45.5952  E20°59.976' // WGS84 format
		'zoom': 14,
		'marker': [
			{'addr': ['25.041282077030896', '121.56741142272949']},
			{'addr': ['25.0383270525352', '121.57045841217041'], 'text': '<strong>110台灣台北市信義區松高路68號</strong>'},
			{'addr': ['25.034516521123315','121.56496524810791'], 'text': '<strong>110台灣台北市信義區台北101</strong>'},
			{'addr': ['25.037627167884715', '121.56732559204102'], 'text': '<strong>110台灣台北市信義區松壽路20巷</strong>'},
			{'addr': ['25.039726809855434', '121.55633926391602'], 'text': '<strong>106台灣台北市大安區光復南路280巷25號</strong>'},
			{'addr': ['25.037160575899154', '121.55350685119629'], 'text': '<strong>106台灣台北市大安區仁愛路四段300巷11號</strong>'},
			{'addr': ['25.035877438787317', '121.55715465545654'], 'text': '<strong>106台灣台北市大安區光復南路440-1號</strong>'}
		]
	});
});