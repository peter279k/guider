<?php
	require 'vendor/autoload.php';

	$app = new Slim\App();

	$app->get('/get/{name}', function ($request, $response, $args) {
		$name = htmlentities($args["name"]);
		if($name === "exit") {
			//parse mrt.csv file
			$handler = fopen("../file/exit.csv", "r");
			$json = array();
			if($handler !== false) {
				$index = 0;
				while (!feof($handler)) {
					$arr = explode(",", fgets($handler));
					$json[$index]["lat"] = $arr[3];
					$json[$index]["lng"] = $arr[4];
					$json[$index]["addr"] = $arr[1];
					$index += 1;
				}

			}
			else {
				$json = "file not found";
			}

			if(is_array($json))
				$response -> write(json_encode($json));
			else
				$response -> write($json);
		}

		return $response;
	});
	
	$app -> get('get/mrt/{mrtName}/{goBack}', function($request, $response, $args) {
		//http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b
		$mrtName = htmlentities($args['mrtName']); //捷運站名
		$goBack = htmlentities($args['goBack']); //往哪個方向
		
	});

	$app->run();
?>