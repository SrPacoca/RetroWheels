$(window).on("load", function () {
  $("#nav-list-sidebar").hide();
});

$("#bar-sidebar").on("click", function () {
  $("#nav-list-sidebar").hide();

  if ($("#sidebar").hasClass("sidebar-enabled")) {
    $("#bar-sidebar").removeClass("bar-active");
    $("#sidebar").addClass("sidebar-disabled");
    $("#sidebar").removeClass("sidebar-enabled");
  } else {
    $("#bar-sidebar").addClass("bar-active");
    $("#sidebar").removeClass("sidebar-disabled");
    $("#sidebar").addClass("sidebar-enabled");

    $("#sidebar").on("transitionend", function () {
      $("#nav-list-sidebar").show();
    });
  }
});
