<?php
	require 'vendor/autoload.php';

	$app = new Slim\App();

	$app->get('/get/{name}', function ($request, $response, $args) {
		$name = htmlentities($args["name"]);
		if($name === "exit") {
			//parse mrt.csv file
			
		}

		return $response;
	});

	$app->run();
?>