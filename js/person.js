$(function(){
	$('.j-edit').click(function(){
		$('.j-revise').show();
		$('.j-revise-con').show();
		$('.j-price').val($('.j-rate').text());
	});
	$('.j-cancel').click(function(){
		$('.j-revise').hide();
		$('.j-revise-con').hide();
	});
	$('.j-sure').click(function(){
		$('.j-rate').text($('.j-price').val());
		$('.j-revise').hide();
		$('.j-revise-con').hide();
	});
	// window.keydown(function(){
	// 	alert(keycode);
	// })
	// $('.j-price').value=$('.j-rate').innerHtml;
})