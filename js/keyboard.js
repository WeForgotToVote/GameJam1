window.addEventListener('keydown', function(event)
{
	console.log("Pressed " + event.keyCode);
	switch (event.keyCode)
	{
	/*Spacebar*/
		case 32:
			console.log("Pressed Spacebar");
			break;
	/*CTRL*/
		case 17:
			console.log("Pressed CTRL");
			break;
	/*ALT*/
		case 18:
			console.log("Pressed ALT");
			break;
	/*X*/
		case 88:
			console.log("Pressed X");
			break;
	/*Z*/
		case 90:
			console.log("Pressed Z");
			break;
	/*W*/
		case 87:
			console.log("Pressed W");
			break;
	/*Up*/
		case 38:
			console.log("Pressed W");
			break;
	/*A*/
		case 65:
			console.log("Pressed A");
			break;
	/*Left*/
		case 37:
			console.log("Pressed Left");
			break;
	/*S*/
		case 83:
			console.log("Pressed S");
			break;
	/*Down*/
		case 40:
			console.log("Pressed Down");
			break;
	/*D*/
		case 68:
			console.log("Pressed D");
			break;
	/*Right*/
		case 39:
			console.log("Pressed Right");
			break;
	}
}, false);