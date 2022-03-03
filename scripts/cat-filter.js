$(".cards-categorias").on("click", function () {
  var categoria = $(this).attr("data-categoria");
  var children = $(".hidden").contents();

  $("section.card").each(function () {
    if (!$(this).hasClass(categoria)) {
      $(this).hide();
    } else {
      $(this).show();
      $(".hidden").replaceWith(children);
      $(".btn-show").detach();
      $(".btn-clean").show();
      $(".btn-clean").css("display", "flex");
    }
  });
});

$('#btn-clean').click(function() {
  location.reload();
});
