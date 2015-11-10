// text adder/image adder

var textAdd = function() {
  $('#top-text').keyup(function() {
	if($('#top-text').val().length > 0) {
	  $('.top-caption').text($('#top-text').val());
}else {
	  $('.top-caption').text("When your girl");
}
  });
  $('#bottom-text').keyup(function() {
  	if($('#bottom-text').val().length > 0) {
	  $('.bottom-caption').text($('#bottom-text').val());
  }else {
	  $('.bottom-caption').text("Asks if you still like pokemon");
}
  });
  $('#image-url').keyup(function() {
    if($('#image-url').val().length > 0) {
      $("img").attr("src", $('#image-url').val());
	}else {
	  $("img").attr("src", 'img/charizard.jpg');
}
});
};
//Color Changer function
function changeColor() {

	$('.color-sel').click(function() {
		var textColor = $(this).css('background-color');
		$('.top-caption').css('color', textColor);
		$('.bottom-caption').css('color', textColor); 
	});
}
//Font Size manipulation
function changeFontsize() {
	var fontSizeTop = parseInt($(".top-caption").css("font-size")),
		fontSizeBottom = parseInt($(".bottom-caption").css("font-size"));
	$('#top-plus').click(function() {
		fontSizeTop = fontSizeTop + 2 + "px";
		$('.top-caption').css({'font-size':fontSizeTop})
		fontSizeTop = parseInt($(".top-caption").css("font-size"))
	})
	$('#top-minus').click(function() {
		fontSizeTop = fontSizeTop - 2 + "px";
		$('.top-caption').css({'font-size':fontSizeTop})
		fontSizeTop = parseInt($(".top-caption").css("font-size"))
	})
	$('#bottom-plus').click(function() {
		fontSizeBottom = fontSizeBottom + 2 + "px";
		$('.bottom-caption').css({'font-size':fontSizeBottom})
		fontSizeBottom = parseInt($(".bottom-caption").css("font-size"))
	})
	$('#bottom-minus').click(function() {
		fontSizeBottom = fontSizeBottom - 2 + "px";
		$('.bottom-caption').css({'font-size':fontSizeBottom})
		fontSizeBottom = parseInt($(".bottom-caption").css("font-size"))
	})
}
//Toggle buttons
var toggleBtn = function() {
	$('#change-color').click(function() { 
		$('.color-changer').toggle();
		$('.font-size-editor').css('display', 'none');
});
	$('#change-font-size').click(function() { 
		$('.font-size-editor').toggle();
		$('.color-changer').css('display', 'none')
});
};

$(document).ready(textAdd, changeColor(), toggleBtn());
