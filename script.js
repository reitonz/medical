$(function() {
  $('#font-big').click(function() {
    $('.header-nav a').css('font-size', '22px');
    $('#schedule dt').css('font-size', '16px');
    $('#schedule dd').css('font-size', '16px');
    $('#notice dt').css('font-size', '16px');
    $('#notice dd').css('font-size', '16px');
  });

  $('#font-normal').click(function() {
    $('.header-nav a').css('font-size', '20px');
    $('#schedule dt').css('font-size', '15px');
    $('#schedule dd').css('font-size', '15px');
    $('#notice dt').css('font-size', '15px');
    $('#notice dd').css('font-size', '15px');
  });


  $('.bg-black').click(function() {
      $('.bg-black').attr('class','none');
      $('body').css('background-color', 'black');
      $('body').css('color', 'white');
      $('header a').css('color', 'white');
      $('h3').css('color', '#fff');
      $('.header-line, #schedule, .s-title').css('background-color', 'black');
      $('#font-big').css('border', '1px solid #fff');
      $('#font-normal').css('border', '1px solid #fff');
      $('.back-white').css('border', '1px solid #fff');
      $('#notice').css({'background-color':'black', 'color': 'black'});
      $('#n1, #n2, #n3, .n1-text, .n2-text, .n3-text').css({'background-color' : 'black', 'color':'#fff'});
      $('.last-nav, .nav-width').css('background-color' ,'black')
      $('.nav-width button').css({'background-color': '#fff' , 'border-radius': '100%'});
      $('.logo-white').removeClass('none');
      $('.logo-white').addClass('block');
      $('.logo-black').addClass('none');
      $('.back-white').removeClass('none');
      $('.back-white').addClass('inline-block');
  });




  $('.images').slick( {
    autoplay: true,
    autoplaySpeed:3000,
  });

  $('#n1').click(function() {
    $('#n1').addClass('active');
    $('.n1-text').addClass('block');
    $('#n2').removeClass('active');
    $('.n2-text').removeClass('block');
    $('#n3').removeClass('active');
    $('.n3-text').removeClass('block');
  });
  $('#n2').click(function() {
    $('#n2').addClass('active');
    $('.n2-text').addClass('block');
    $('#n1').removeClass('active');
    $('.n1-text').removeClass('block');
    $('#n3').removeClass('active');
    $('.n3-text').removeClass('block');
  });
  $('#n3').click(function() {
    $('#n3').addClass('active');
    $('.n3-text').addClass('block');
    $('#n2').removeClass('active');
    $('.n2-text').removeClass('block');
    $('#n1').removeClass('active');
    $('.n1-text').removeClass('block');
  });

  $('.slider').slick({
    focusOnSelect: true,
    slidesToShow:4,
    slidesToScroll:1
  });

  $('.js-menu__item__link').each(function(){
    $(this).on('click',function(){
        $(this).toggleClass('on');
        $("+.submenu",this).slideToggle(40)
        return false;
    });
});
});
