var window_h = $(window).height();
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();

  $(".initial-fadein").each(function() {
    var elem_pos = $(this).offset().top;
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});