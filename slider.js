let idx = 0;

const allImg = $("#slider-content div");

function Slider(next) {
  if (next) {
    if (idx < allImg.length - 1) idx++;
    else idx = 0;
  } else if (idx > 0) idx--;
  else idx = allImg.length - 1;

  centerSlider();
}

function centerSlider() {
  const translation = -(idx * $("#slider-content div").width()) + "px";

  $("#slider-content").css({
    "-webkit-transform": "translateX(" + translation + ")",
    "-moz-transform": "translateX(" + translation + ")",
    transform: "translateX(" + translation + ")",
  });
}

$(window).resize(centerSlider);
