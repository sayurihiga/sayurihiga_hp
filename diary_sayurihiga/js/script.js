$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン
});


$(function() {
    var $allMsg = $('h1');
    var $wordList = $('h1').html().split("");
    $('h1').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });
});

$(function() {
	$('h2').fadeIn(1000); //1秒かけてフェードイン
});

$(function(){
    $("#btn0").click(function(){
        $(".box26").slideToggle("slow");
    });
});

$(function(){
    $("#btn1").click(function(){
        $(".box261").slideToggle("slow");
    });

});
$(function(){
    $("#btn2").click(function(){
        $(".box262").slideToggle("slow");
      });
    });


$(function(){
    $("#btn3").click(function(){
        $(".box263").slideToggle("slow");
    });
});

$(function(){
    $("#btn4").click(function(){
        $(".box264").slideToggle("slow");
    });
});

$(function(){
    $("#btn5").click(function(){
        $(".box265").slideToggle("slow");
    });
});

$(window).scroll(function() {
 
    console.log($(this).scrollTop());
 
})

$(function() {
    $("html,body").animate({scrollTop:$('#btn5').offset().top});
})
