function onScroll() {
  var menu_selector = ".top-menu";
  var scroll_top = $(document).scrollTop();

  $(menu_selector + " a.scroll").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);

      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        console.log(this);
      } else {
        $(this).removeClass("active");
      }
  });
}

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});
  
$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

