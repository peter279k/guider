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
	var defaultFrom = "臺北市大安區羅斯福路四段一號";
	
	$("#modify-route").click(function() {
		if($("#panel").html().length === 0) {
			alertify.alert("Sorry！沒有路線可修正！");
			return false;
		}
		console.log($("#panel").html());
	});
	
	$("#submit").click(function(event) {
		event.preventDefault();
		var fromText = $("#from").val();
		if(fromText === "目前為使用者位置")
			fromText = centerPos;
		var toText = $("#to").val();

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
			'optimize' : true,
			'requestExtra': {
				'provideRouteAlternatives': false
			},
			'event' : {
				'directions_changed': function () {
					var direction = this.getDirections();
					$("#directions").empty();
					// direction.routes[n] 表示第 N 段規劃的路徑
					// direction.routes[n].legs 該路段細節
					if (direction) {
						//console.log(direction);
						console.log($("td.adp-substep").html());
						$("#directions").append("<p>距離：" + direction.routes[0].legs[0].distance.text + "</p>")
							.append("<p>旅行時間：" + direction.routes[0].legs[0].duration.text + "</p>");
					}
				}
			}
		};

		$('.map').tinyMap('clear', 'marker');
		$('.map').tinyMap('modify', {
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
	$("#from").val(defaultFrom);

	$('.map').tinyMap({
		'center': defaultFrom,
		'marker': [{
			'addr': centerPos
		}],
		'zoom': 13,
		'autoLocation': function (loc) {
			$("#from").val("目前為使用者位置");
			centerPos = [loc.coords.latitude,loc.coords.longitude];
			$(".map").tinyMap('clear');
			$(".map").tinyMap('modify', {
				'center': centerPos,
				'marker': [{
					'addr': [
						loc.coords.latitude,
						loc.coords.longitude
					]
				}]
			});
		}
	});
	
	$("#from").on("keypress", function(e) {
		if($("#from").val() === "目前為使用者位置")
			return false;
		if(e.keyCode == 13) {
			$('.map').tinyMap('query', $("#from").val(), function (addr) {
				if(addr) {
					$("#from-list").empty();
					$("#from-list").append("<p>可能起點地址：</p>");
					$("#from").val(addr.formatted_address);
					$("#from-list").append("<li>" + addr.formatted_address + "</li>");
				}
			});
		}
	});
	
	$("#to").on("keypress", function(e) {
		if($("#to").val() === "")
			return false;
		if(e.keyCode == 13) {
			$('.map').tinyMap('query', $("#to").val(), function (addr) {
				if(addr) {
					$("#to-list").empty();
					$("#to-list").append("<p>可能終點地址：</p>");
					$("#to").val(addr.formatted_address);
					$("#to-list").append("<li>" + addr.formatted_address + "</li>");
				}
			});
		}
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