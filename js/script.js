$(document).ready(function(){
	//Displaying text after click
	$(document).on('click','.hovered-title', function(){
		$('.text1').css("display","none");
		$(this).parent().children().eq(1).css("display","block");
});
});