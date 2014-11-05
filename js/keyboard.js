var keyPressed = [];
window.addEventListener('keydown', function(event)
{
	console.log("Pressed " + event.keyCode);
	switch (event.keyCode)
	{
	/*Spacebar*/
		case 32:
			console.log("Pressed Spacebar");
			keyPressed["Spacebar"] = true;
			break;
	/*CTRL*/
		case 17:
			console.log("Pressed CTRL");
			keyPressed["Ctrl"] = true;
			break;
	/*ALT*/
		case 18:
			console.log("Pressed ALT");
			keyPressed["Alt"] = true;
			break;
	/*X*/
		case 88:
			console.log("Pressed X");
			keyPressed["X"] = true;
			break;
	/*Z*/
		case 90:
			console.log("Pressed Z");
			keyPressed["Z"] = true;
			break;
	/*W*/
		case 87:
			console.log("Pressed W");
			keyPressed["W"] = true;
			break;
	/*Up*/
		case 38:
			console.log("Pressed W");
			keyPressed["W"] = true;
			break;
	/*A*/
		case 65:
			console.log("Pressed A");
			keyPressed["A"] = true;
			break;
	/*Left*/
		case 37:
			console.log("Pressed Left");
			keyPressed["A"] = true;
			break;
	/*S*/
		case 83:
			console.log("Pressed S");
			keyPressed["S"] = true;
			break;
	/*Down*/
		case 40:
			console.log("Pressed Down");
			keyPressed["S"] = true;
			break;
	/*D*/
		case 68:
			console.log("Pressed D");
			keyPressed["D"] = true;
			break;
	/*Right*/
		case 39:
			console.log("Pressed Right");
			keyPressed["D"] = true;
			break;
	}
}, false);

window.addEventListener('keyup', function(event)
{
	console.log("Pressed " + event.keyCode);
	switch (event.keyCode)
	{
	/*Spacebar*/
		case 32:
			console.log("Pressed Spacebar");
			keyPressed["Spacebar"] = false;
			break;
	/*CTRL*/
		case 17:
			console.log("Pressed CTRL");
			keyPressed["Ctrl"] = false;
			break;
	/*ALT*/
		case 18:
			console.log("Pressed ALT");
			keyPressed["Alt"] = false;
			break;
	/*X*/
		case 88:
			console.log("Pressed X");
			keyPressed["X"] = false;
			break;
	/*Z*/
		case 90:
			console.log("Pressed Z");
			keyPressed["Z"] = false;
			break;
	/*W*/
		case 87:
			console.log("Pressed W");
			keyPressed["W"] = false;
			break;
	/*Up*/
		case 38:
			console.log("Pressed W");
			keyPressed["W"] = false;
			break;
	/*A*/
		case 65:
			console.log("Pressed A");
			keyPressed["A"] = false;
			break;
	/*Left*/
		case 37:
			console.log("Pressed Left");
			keyPressed["A"] = false;
			break;
	/*S*/
		case 83:
			console.log("Pressed S");
			keyPressed["S"] = false;
			break;
	/*Down*/
		case 40:
			console.log("Pressed Down");
			keyPressed["S"] = false;
			break;
	/*D*/
		case 68:
			console.log("Pressed D");
			keyPressed["D"] = false;
			break;
	/*Right*/
		case 39:
			console.log("Pressed Right");
			keyPressed["D"] = false;
			break;
	}
}, false);
