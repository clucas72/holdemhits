
// /**
//  * Immediately invoked anonymous function to setup our Drag library
//  */
// ( function ( global )
// {	
// 	var Drag = function() 
// 	{
// 		return new Drag.init();
// 	}

// 	// Object literal for scenario factory
// 	Drag.prototype = 
// 	{
// 		selectedElement: null,
// 		mouseX: 0,
// 		mouseY: 0,
// 		elementX: 0,
// 		elementY: 0,

// 		initDrag: function ( element )
// 		{
// 			this.selectedElement = element;
// 			this.elementX = this.mouseX - this.selectedElement.offsetLeft;
// 			this.elementY = this.mouseY - this.selectedElement.offsetTop;
// 		},

// 		dragElement: function ( e )
// 		{
// 			this.mouseX = document.all ? window.event.clickX : e.pageX;
// 			this.mouseY = document.all ? window.event.clickY : e.pageY;
// console.log ( this.selectedElement.style.left );
// 			if ( this.selectedElement )
// 			{
// 				this.selectedElement.style.left = ( this.mouseX - this.elementX ) + 'px';
// 				this.selectedElement.style.top = ( this.mouseY - this.elementY ) + 'px';
				
// 			}
// 		},

// 		stopDrag: function ()
// 		{
// 			this.selectedElement = null;
// 		}
// 	}


// 	// Init function
// 	Drag.init = function ()
// 	{
// 		var self = this;


// 	}

// 	Drag.init.prototype = Drag.prototype;

// 	global.drag = Drag ();

// } ( window ) );

// 		// Bind the functions...
// 		document.getElementById('thumb').onmousedown = function () {
// 			    drag.initDrag ( this );
// 			    return false;
// 			};

// 		document.onmousemove = drag.dragElement;
// 		document.onmouseup = drag.stopDrag;