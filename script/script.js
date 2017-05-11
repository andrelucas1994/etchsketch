$(document).ready(function(){
	init();
});

function init(){
	$c=$('#container');
	for(i>0,i<320,i++){
		$c.append("<div class='squares'></div>");
	}	
	$div=$('.squares');
	$div.css('width', 10);
	$div.css('height', 10);	
	$div.css('color','blue');
};