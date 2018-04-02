
$(document).ready(function(){
//メインスライド用
  $('#big_slider').bxSlider({
    auto: true,
    mode: 'fade',
    controls: false
  });
});

$(document).ready(function(){
  //メインスライド用
    $('#slider_img').bxSlider({
      auto: true,
      infiniteLoop: false,
      hideControlOnEnd: true,
      autoHover: true,
      nextSelector: '#next-btn',
      prevSelector: '#prev-btn',
      nextText: '',
      prevText: '',
      pager: false
    });
  });

