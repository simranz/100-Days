<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Silly String</title>
</head>
	<body>
		<textarea id="app" style="width:800px;" rows="30"></textarea>
	</body>

	<script>

		const sillyString = "I am a genius.";
		const sillyArray = sillyString.split('');
		sillyArray.push(' ');

		const el = document.getElementById( 'app' );
		let currentIndex = 0;
		let currentVal = '';
		app.addEventListener( 'keydown', makeItSilly );

		function makeItSilly(e){
			e.preventDefault();

			let sillyFy = ( (e.keyCode >= 48 && e.keyCode <= 57 ) || (e.keyCode >= 65 && e.keyCode <= 90) ) ? true : false;

			if( !sillyFy ) return;
	
			currentVal += sillyArray[currentIndex];
			el.value = currentVal;			
			currentIndex = ( currentIndex == sillyArray.length - 1 ) ? 0 : currentIndex+1;

		}

	</script>

</html>
