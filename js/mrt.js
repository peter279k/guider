$(function() {
	// 執行 tinyMap 前可使用 $.fn.tinyMapConfigure 進行 API 的設定。
	alertify.set({
		labels:{
			ok: "確定",
			cancel: "取消"
		}
	});

	var mark = [];
	var centerPos = ['25.039065815333753', '121.56097412109375'];
	
	$("#submit").click(function(event) {
		event.preventDefault();
		var fromText = $("#from").val();
		var toText = $("#to").val();
		var travel = $("#mode").val();
		
		if(travel === "CHOOSE-TRANSPORT") {
			alertify.alertify.alert("請選擇交通方式！");
			return false;
		}
		if(fromText === "") {
			alertify.alert("請輸入起點地址！");
			return false;
		}
		if(toText === "") {
			alertify.alert("請輸入終點地址！");
			return false;
		}

		var direction = {
			'from': fromText,
			'to': toText,
			'travel': 'transit',
			'panel': $("#panel"),
			// 自訂路徑顏色
			'polylineOptions': {
				'strokeColor': '#CCCC00',
				'strokeOpacity': 0.5
			},
			'renderAll': true,
			'requestExtra': {
				'provideRouteAlternatives': true
			},
			'event' : {
				'directions_changed': function () {
					var direction = this.getDirections();
					$("#directions").empty();
					// direction.routes[n] 表示第 N 段規劃的路徑
					// direction.routes[n].legs 該路段細節
					if (direction) {
						console.log(direction);
						$("#directions").append("<p>距離：" + direction.routes[0].legs[0].distance.text + "</p>")
							.append("<p>旅行時間：" + direction.routes[0].legs[0].duration.text + "</p>");
					}
				}
			}
		};

		$('.map').tinyMap('clear')
			.tinyMap('modify', {
				'direction': [direction]
			});
	});
	
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
		// MarkerClustererPlus.js 路徑
		// 預設 '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerclustererplus/src/markerclusterer_packed.js'
		// 建議下載至自有主機，避免讀取延遲造成無法使用。
		'clusterer': '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerclustererplus/src/markerclusterer_packed.js',
		// MarkerWithLabel.js 路徑
		// 預設 '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerwithlabel/src/markerwithlabel_packed.js'
		// 建議下載至自有主機，避免讀取延遲造成無法使用。
		'withLabel': '//google‐maps‐utility‐library‐v3.googlecode.com/svn/trunk/markerwithlabel/src/markerwithlabel_packed.js'
	});
	
	//Route Plan路徑規劃
	$('.map').tinyMap({
		'center': '臺北市大安區羅斯福路四段一號',
		'zoom': 13,
		'autoLocation': function (loc) {
			$(".map").tinyMap('modify', {
				'marker': [{
					'addr': [
						loc.coords.latitude,
						loc.coords.longitude
					]
				}]
			});
		}
	});
	
	$("#from").change(function() {
		$('.map').tinyMap('query', $("#from").val(), function (addr) {
			console.log(addr);
			//console.log(addr.geometry.location.lat()); // Latitude
			//console.log(addr.geometry.location.lng()); // Longitude
		});
	});
	
	//get mrt mark
	$.get("/guider/mrt/get/exit", function(data) {
		var result = $.parseJSON(data);
		var markCount = 0;
		for(var index=1;index<result.length;index++) {
			var temp = twd97_to_latlng(result[index]["lat"].replace("\n", ""), result[index]["lng"].replace("\n", ""));
			var tempMark = {};
			tempMark['addr'] = [];
			tempMark['text'] = result[index]["addr"];
			tempMark['addr'][0] = temp["lat"];
			tempMark['addr'][1] = temp["lng"];
			mark[markCount] = tempMark;
			markCount++;
		}
	});

	/*
	// Basic mark
	$(".map").tinyMap({
		// Map center
		'center': centerPos,
		// or 'center': 'lat, lng'
		// or 'center': [lat, lng]
		// or 'center': 'ADDRESS'
		// or 'center': 'N48°45.5952  E20°59.976' // WGS84 format
		'zoom': 14,
		'autoLocation': function (loc) {
			$(".map").tinyMap('modify', {
				'marker': [{
					'addr': [
						loc.coords.latitude,
						loc.coords.longitude
					]
				}]
			});
		},
		'marker': mark
	});
	*/
});