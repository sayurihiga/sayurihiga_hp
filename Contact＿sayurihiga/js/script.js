$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン
});

$('button').on('click',function(){
    $('.popup').addClass('show').fadeIn(1000);
});
  
$('#close').on('click',function(){
    $('.popup').fadeOut();
});

