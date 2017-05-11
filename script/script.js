$(document).ready(function(){
	var x=16;
	init();
});

function init(){
	for( var x=0; x<16; x++){
		for(var y=0; y<16; y++){
			$('#container').append("<div class='squares'></div>");		}
	}
}