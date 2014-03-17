(function() {
 	
	var MyContainer = function(args) {
	  this.initialize(args);
	}

	var p = MyContainer.prototype = new createjs.Container();
	 
	p.Container_initialize = p.initialize;

	p.initialize = function(args) {
	    this.Container_initialize();
	    var t = this;

	    // code

	}

	p.someMethod = function() {
		
		// some function
		
	}

	window.MyContainer = MyContainer
;
	
}());