// servicesとportfolioセクションのjsスクロールアニメーション
$(function(){

  $(window).scroll(function (){
    var fadeTrigger = $('.js-trigger');
    $(fadeTrigger).each(function(){
      var scroll = $(window).scrollTop(),
          elemTop = $(this).offset().top,
          windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight / 1.1){
        $(this).addClass('fade-scale');
        if ($(this).hasClass('multi-trigger')) {
          $(this).find('.fade-elem').addClass('fade-up-down');
        } else if ($(this).hasClass('fade-type-up') || $(this).hasClass('fade-type-down')) {
          $(this).addClass('fade-up-down');
        } else if ($(this).hasClass('fade-type-left') || $(this).hasClass('fade-type-right')) {
          $(this).addClass('fade-left-right');
        }
      }
    });
  });
  $(window).trigger('scroll');

});