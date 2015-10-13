var main = function() {
  $('#top-text').keyup(function() {
	$('.top-caption').text($('#top-text').val());
  });
  $('#bottom-text').keyup(function() {
	$('.bottom-caption').text($('#bottom-text').val());
  });
  $('#image-url').keyup(function() {
    $("img").attr("src", $('#image-url').val());
});

};
$(document).ready(main);