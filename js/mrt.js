$(function() {
	// 執行 tinyMap 前可使用 $.fn.tinyMapConfigure 進行 API 的設定。
	var routeArray = ['0南','0東','1','108','108區(二子坪)','109','111','12','128','129','14','15','1501','1503','1505','1717','18','2','20','201','202','202區','203','204','205','206','207','208','208區','208直','21','211','212','212區','212夜','212直','214','214直','215','216副','216區','218','218區','218直','21直','22','220','220夜','220直','221','222','223','224','225','225區','226','227','227區','230','231','232','232副','232快','234','235','236','236區','236夜','237','240','240直','241','242','243','245','246','247','247區','248','249','250','251','251區','252','253','254','254區','255','255區','256','257','26','260','260區','261','262','262區','263','264','265區','265夜','265經中央路','265經明德路','266','266區','267','268','270','270區','274','275','275副','276','277','278','278區','279','28','280','280直','281','282','282副','284','284直','285','286','286副','287','287區','287夜','288','288區','290','290副','290副萬和','292','292副','294','295','297','298','298區','299','299區','302','303','303區','304承德','304重慶','306','306區','307','308','310','311','311區','32','32區','33','37','38','38區','39','39夜','41','42','42區','46','49','5','505','508','508區','51(新北市)','513','518','52','520','521','527','529','53','530','531','535','536','539','542','550','551','552','553','556','557','57','601','602','604','605','605副','605快','605新台五','606','611','612','612區','615','616','617','618','62','620','621','622','624','624綠','629','63','630','631','635','636','637','638','639','640','641','642','643','644','645','645副','646','646區','647','648','650','651','652','656','657','657延','658','660','662','663','665','666烏塗窟','666皇帝殿','666華梵大學','667','668','669','670','671','672','672區','673','675','676','677','678','679','679區','68','680','681','682','683','685','68副','701','702','704','704區','705','706','711','72','74','756','757','778','779','780','781','782','783','785','786','787','787經瑞芳工業區','788-瑞芳','788去水湳洞','788去海科館','788往基隆','788往金瓜石','788返水湳洞','788返海科館','789','790','790漁港','791','793','795往十分寮','795往平溪','795往木柵','795往野人谷','796去','796返','797','798','799','8','800','801','802','802區','803','805','806','807','808','810','811','812','813','813區間','815','816','817','818','819','820','821','822','823','825','826','827','828','829','835','836','836假日','837','838','839','839耕莘','842','843','845','846','847','847區','848','849','851','852','853','856(台灣好行~黃金福隆線)','857','858','859','860','861','862基隆-淡水','862淡水-基隆','862皇冠北海岸','862皇冠經富基','863','864','865','866','867','867區','868正','868返','869','870','871','871經中山北路','872','872經正德國中','873','873經正德國中','874','875','876','877','878','879','880樹林-淡海','880淡海-樹林','881','882','883樹林-淡海','883淡海-樹林','885','886','887','888','889','890','891','892去','892返','893','895','896','897','898','9','902','903','905','905副','906','907','908','909','910','912','913','915','916','917','918','918三民路','919','920','921','922','923','925','926','927','927經八仙','927經台北港','928','930','930延','932','933去','933返','935','936','937','938','939','940','941','943','945','946','946副','947','948','949','950','951','952','953','981三鶯捷運先導公車','982區間環狀先導公車','982環狀先導公車','982直達環狀先導公車','982直達環狀先導公車新埔線','983淡海捷運先導公車','985萬大樹林先導公車','986機場捷運先導公車','99','F101坪頂','F101樹興','F102去','F102返','F103','F105','F105返','F106上午','F106下午','F106中午','F107','F108','F109','F110','F111新春正','F111新春返','F111新民正','F111新民返','F112','F121','F122','F123-0640','F123-1205','F123-1550','F123-1555','F125廖添丁','F125馬偕','F126去','F126江厝去','F126江厝返','F126返','F131','F132','F133假日','F133平日','F133後店','F133末班','F135去','F135返','F136','F137','F137紅樹林','F138內橫山','F138新古庄','F138新古庄區','F139','F151-0600','F151-0620','F151-0730','F151-0930','F151-1000','F151-1525','F151-1555','F151-1625','F151-1800','F151-山溪集會所','F152-0600','F152-0625','F152-0640','F152-0710','F152-0810','F152-0850','F152-0925','F152-1555','F152-1700','F152-1725','F152-1800','F152-1820','F153-0600','F153-0730','F153-0820','F153-1030','F153-1540','F153-1645','F153-1730','F161去','F161返','F201去','F201返','F202','F203','F205','F206','F207','F208','F211','F212','F212副','F212楓江','F213','F213黎明','F215去','F215返','F216去','F216返','F217','F218','F221德泰','F221馬偕','F222御史','F222陸光','F223去','F223工業去','F223工業返','F223返','F225','F231去','F231返','F232副去','F232副返','F232去','F232返','F233去','F233返','F235去','F235返','F236去','F236返','F237副去','F237副返','F237去','F237返','F238去','F238返','F239去','F239返','F250去','F250返','F301上午','F301下午','F302','F303','F311去','F311返','F312去','F312返','F313','F315','F315-09-12','F316去','F316返','F317','F318去','F318返','F501','F502','F511','F512','F513','F521','F522','F523','F525','F526','F601','F602','F603','F605','F606','F607','F611去','F611返','F621','F622','F623','F625','F626','F627','F628','F629','F629四份仔','F630去','F630返','F631去','F631返','F651','F652去','F652返','F653A','F653B','F655去','F655返','F656','F701安一路去','F701安一路返','F701安康路去','F701安康路返','F702','F702返','F703','F703前三班','F703去','F703返','F705','F706','F707','F708','F711去','F711返','F712','F713','F721','F722','F723','F801去','F801返','F802去','F802返','F803去','F803返','F805去','F805返','F806去','F806返','F807','F807祖師廟','F808去','F808返','F811去','F811返','F812去','F812返','F813','F815去','F815返','F821','F822','F823去','F823返','F831','F832','F833','F835','F836','F837','F837返','F838','F839','F901去','F901返','F902去','F902新興','F902返','F903去','F903返','F905去','F905返','F906去','F906返','F907A','F907B','F908去','F908返','F909去','F909返','F910去','F910返','F911去','F911返','F912A','F912B','F913去','F913去延','F913返','F913返延','F915去','F915返','F916','F917','F918','F919八連去','F919八連去延','F919八連返','F919去','F919去延','F919返','F920去','F920去延','F920返','F920返延','F921','F921假日','F922內崁','F922烏塗炭','F923','F923假日','F931-0600','F931-0700','F931-0800','F931-0910','F931-1030','F931-1255','F931-1630','F931-1730','F932-06:00','F932-06:30','F932-07:30','F932-08:20','F932-09:50','F932-11:10','F932-13:00','F932-17:20','F933','F933-0800','F933專車','七堵車站－十分基平橋天燈專車','中山幹線','信義幹線','信義新幹線','兒樂1號線','兒樂2號線','內科通勤專車-圓山直達車','內科通勤專車-市府直達車','內科通勤專車10','內科通勤專車11','內科通勤專車12','內科通勤專車13','內科通勤專車15','內科通勤專車16','內科通勤專車17','內科通勤專車18','內科通勤專車19','內科通勤專車2','內科通勤專車20','內科通勤專車3','內科通勤專車5','內科通勤專車6','內科通勤專車7','內科通勤專車8','南山橋-嶺腳寮天燈專車','南軟通勤專車中和線','南軟通勤專車北投線','南軟通勤專車天母線','南軟通勤專車雙和線','和平幹線','基隆─金山','天元宮－漁人碼頭','小1','小10','小11','小12','小12區','小14','小15','小15區','小16','小17','小18','小18區','小19','小1區','小2','小21','小22','小23','小25','小26','小28','小2區','小3','小30','小3區','小5','小5區','小6','小7','小8','小9 (台灣好行-北投竹子湖)','市民小巴1','市民小巴10','市民小巴11','市民小巴12','市民小巴15','市民小巴2','市民小巴5','市民小巴6','市民小巴7','市民小巴8','市民小巴9','忠孝新幹線','懷恩專車S31','懷恩專車S32','懷恩專車S33','捷運淡水站－天元宮','敦化幹線','新市二路－天元宮','景美-榮總(快)','暖暖運動公園－十分基平橋天燈專車','曙光專車','木柵動物園-中埔停車場天燈專車','木柵動物園-南山橋天燈專車','林口-捷運圓山站','棕1','棕10','棕11','棕11副','棕12','棕13','棕15','棕15區','棕16','棕18','棕19','棕2','棕20','棕21','棕22','棕3','棕5','棕6','棕7','棕7綠野香坡','棕9','橘1','橘10','橘12','橘13','橘16','橘17','橘18','橘18福隆路','橘19','橘2','橘20','橘21','橘22','橘25','橘26','橘3','橘5','橘9','水巴-忠孝','水巴-華江','海祭專車-台2丙線','海祭專車-台2線','瑞芳車站－十分平交道天燈專車','瑞芳車站－十分瀑布天燈專車','石碇交流道-中埔停車場天燈專車','石碇交流道-南山橋天燈專車','祈福專車-指南宮','祈福專車-關渡宮','紅10','紅12','紅13','紅15','紅19','紅2','紅22','紅22台北港','紅23','紅25','紅26','紅27','紅28','紅28直','紅29','紅3','紅30','紅31','紅32','紅33','紅34','紅35','紅36','紅37','紅37往繞淡水商工','紅37返繞淡水商工','紅38','紅38區','紅39','紅3區','紅5','紅50','紅51','紅52','紅55','紅55區','紅56','紅57','紅7','紅7區','紅9','綠1','綠10','綠11','綠12','綠13','綠15','綠16','綠17','綠2右','綠2左','綠3','綠5','綠6','綠7','綠8','綠9','綠9北新國小','綠9耕莘','藍1','藍10','藍15','藍17','藍18','藍1經新興路','藍2','藍20區','藍21','藍21副','藍22','藍23','藍25','藍26','藍27','藍28','藍29','藍31','藍31華江','藍32','藍33','藍35','藍36','藍37','藍38','藍39','藍39副','藍40','藍41','藍41延和','藍43','藍44','藍44延','藍45','藍46','藍5','藍50','藍51','藍7','貓空右線','貓空左線(動物園)','貓空左線(指南宮)','重慶幹線'];
	
	alertify.set({
		labels:{
			ok: "確定",
			cancel: "取消"
		}
	});

	var mark = [];
	var centerPos = ['25.039065815333753', '121.56097412109375'];
	var defaultFrom = "臺北市大安區羅斯福路四段一號";
	var modify = null;
	var placeName = [];
	var terminalName = [];
	var modifyBus = [];
	var placeIndex = 0;
	
	$("#modify-route").click(function() {
		if($("#panel").html().length === 0) {
			alertify.alert("Sorry！沒有路線可修正！");
			return false;
		}
		
		$("b[jstcache='41']").each(function(index) {
			placeName[index] = $(this).text();
		});
		
		$("span[jstcache='46']").each(function(index) {
			var str = $(this).text();
			str = str.replace("巴士", "").replace("開往", "").replace(/ /g, "");
			terminalName[index] = $(this).text();
		});

		$("td[class='adp-substep']").each(function(stepIndex) {
			var strHTML = $(this).html();
			var str = $(this).text().replace(/ /g, "").replace(/(, )/g, ",");
			if(str.indexOf("步行") !== -1 || str.indexOf("火車") !== -1 || str.indexOf("地下鐵") !== -1 || str.indexOf("– (,)") !== -1) {
				//nothing to do
				//alertify.alert("路線修改完成！");
			}
			else {
				var busArr = str.split("巴士");
				var busNo = busArr[0];
				var busNum = "";
				var busTime = busArr[1];
				var getBusTime = "";
				var temp = [];
				
				for(var index=0;index<busNo.length;index++) {
					if(isNaN(parseInt(busNo.charAt(index))))
						continue;
					if(parseInt(busNo.charAt(index)) <= 9 && parseInt(busNo.charAt(index)) >= 0)
						busNum += busNo.charAt(index);
				}
				
				//modify bus number,公車幾路
				if(busNo.indexOf("紅") !== -1)
					busNum = "紅" + busNum;
				if(busNo.indexOf("橘") !== -1)
					busNum = "橘" + busNum;
				if(busNo.indexOf("綠") !== -1)
					busNum = "綠" + busNum;
				if(busNo.indexOf("棕") !== -1)
					busNum = "棕" + busNum;
				if(busNo.indexOf("藍") !== -1)
					busNum = "藍" + busNum;
				if(busNo.indexOf("東") !== -1)
					busNum = busNum + "東";
				if(busNo.indexOf("南") !== -1)
					busNum = busNum + "南";
				if(busNo.indexOf("小") !== -1)
					busNum = "小" + busNum;
				if(busNo.indexOf("敦化幹線") !== -1)
					busNum = "敦化幹線";
				if(busNo.indexOf("重慶幹線") !== -1)
					busNum = "重慶幹線";
				
				//得到公車時間,查詢是否還有公車
				if(busTime.indexOf("上午") !== -1 && busTime.indexOf("下午") !== -1) {
					temp = busTime.split("上午");
					
					if(temp[0].indexOf("下午")) {
						temp = temp[0].split("下午");
					}
					else {
						temp = temp[1].split("下午");
					}

					getBusTime = temp[0];
				}
				else if(busTime.indexOf("上午") !== -1) {
					var busTimeArr = busTime.split("上午");
					getBusTime = busTimeArr[1];
				}
				else {
					var busTimeArr = busTime.split("下午");
					getBusTime = busTimeArr[1];
				}
				
				getBusTime = getBusTime.replace("-", "");
				
				console.log(getBusTime);
				console.log(busNum);
				
				//上車站名
				var startName = placeName[stepIndex];
				console.log(placeName);
				var startIndex = 0;
				
				//下車站名
				var endName = terminalName[stepIndex];
				endName = endName.replace("巴士 開往", "");
				var endIndex = 0;
				
				//確認 goBack
				var goBack = 0;

				//查詢公車目前距離時間,query 目前公車(站名)
				busNum = encodeURIComponent(busNum);

				$.get("http://taipeiomg.azurewebsites.net/api/EstimateTime?id=" + busNum + "&goBack=0", function(data) {
					//checkGoBack();
					for(var index=0;index<data.length;index++) {
						if(startName.indexOf(data[index].StopNameZh) !== -1 || startName === data[index].StopNameZh)
							startIndex = index;
						if(endName.indexOf(data[index].StopNameZh) !== -1 || endName === data[index].StopNameZh)
							endIndex = index;
					}
					console.log(startIndex);
					console.log(endIndex);

					if((endIndex - startIndex) < 0) {
						goBack = 0;
						$.get("http://taipeiomg.azurewebsites.net/api/EstimateTime?id=" + busNum + "&goBack=" + goBack, function(data) {
							for(var index=0;index<data.length;index++) {
								if(startName.indexOf(data[index].StopNameZh) !== -1) {
									if(data[index].EstimateTime === -1) {
										modifyBus[placeIndex] = "目前未知時間";
									}
									else if(data[index].EstimateTime === 0) {
										modifyBus[placeIndex] = "公車已過站";
									}
									else {
										var sec = data[index].EstimateTime;
										var mins = Math.round(sec / 60);
										modifyBus[placeIndex] = "公車還有約" + mins + "分鐘到站";
									}
								}
								
							}
							
							modifyBusStyle(modifyBus);
						});
					}
					else {
						goBack = 1;
						$.get("http://taipeiomg.azurewebsites.net/api/EstimateTime?id=" + busNum + "&goBack=" + goBack, function(data) {
							for(var index=0;index<data.length;index++) {
								if(endName.indexOf(data[index].StopNameZh) !== -1) {
									if(data[index].EstimateTime === -1) {
										modifyBus[placeIndex] = "目前未知時間";
									}
									else if(data[index].EstimateTime === 0) {
										modifyBus[placeIndex] = "公車已過站";
									}
									else {
										var sec = data[index].EstimateTime;
										var mins = Math.round(sec / 60);
										modifyBus[placeIndex] = "公車還有約" + mins + "分鐘到站";
									}
								}
								
							}
							
							modifyBusStyle(modifyBus);
						});
					}
				});
			}
		});
	});
	
	$("#submit").click(function(event) {
		event.preventDefault();
		$("#panel").empty();
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

function modifyBusStyle(modifyBus) {
	$("b[jstcache='41']").each(function(index) {
		if(modifyBus[index]) {
			//strike or tag some message
			$(this).append("<span class='modify-bus'>" + "→" + "(" + modifyBus[index] + ")" + "</span>");
		}
	});
}