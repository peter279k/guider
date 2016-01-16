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

	$app->run();
?>