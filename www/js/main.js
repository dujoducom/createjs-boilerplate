var canvas, stage;

var mouseTarget;	// the display object currently under the mouse, or being dragged

function init() {

	if (window.top != window) {
		document.getElementById("header").style.display = "none";
	}
	document.getElementById("loader").className = "loader";
	
	// create stage and point it to the canvas:
	canvas = document.getElementById("testCanvas");

	//check to see if we are running in a browser with touch support
	stage = new createjs.Stage(canvas);
	createjs.Touch.enable(stage);
	
	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

	// setup background
	var bg = new createjs.Shape();
	bg.graphics.beginFill("#ddd");
	bg.graphics.drawRect(0,0,1024,768);
	bg.graphics.endFill();

	stage.addChild(bg);
	
	createjs.Ticker.addEventListener("tick", stage); // update every tick
	createjs.Ticker.addEventListener("tick", tickFunc);
	createjs.Ticker.setFPS(30);

	stage.update();
	
}

function tickFunc() {
	
	// every update

}
