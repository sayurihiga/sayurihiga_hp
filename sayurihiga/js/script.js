$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン
});


$("p").css({
    left:"-100px",
    opacity:"0.0"
}).animate({
    left:"100px",
    opacity:"1.0"
},1500);

