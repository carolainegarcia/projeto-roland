$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 100) {
    $("#header").css("background-color", "#000000");
    $("#logo").css("visibility", "visible");
    $("#header").slideDown();
  } else {
    $("#header").css("background-color", "transparent");
    $("#logo").css("visibility", "hidden");
    $("#header").slideUp();
  }
});
