$(function() {
	$('body').fadeIn(1000); //1秒かけてフェードイン
});



$(function() {
    var $allMsg = $('h2');
    var $wordList = $('h2').html().split("");
    $('h2').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 150);
        newEL.animate({ opacity: 1 }, 2000);
    });
});
