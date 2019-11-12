// servicesとaboutセクションのjsスクロールアニメーション
$(function(){
  $(window).scroll(function (){
    var fadeTrigger = $('.js-trigger');
    $(fadeTrigger).each(function(){
      var scroll = $(window).scrollTop(),
          elemTop = $(this).offset().top,
          windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight / 1.1){
        if ($(this).hasClass('fade-type-left') || $(this).hasClass('fade-type-right')) {
          $(this).addClass('fade-left-right');
          continue;
        };
        $(this).addClass('fade-scale');
      }
    });
  });
  $(window).trigger('scroll');
});