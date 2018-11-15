jQuery(document).ready(function() {
  $('.albums').hide();
  $('#MC').on('click', function() {
    $.each($('audio'), function () {
      this.pause();
    });
    $('.albums').hide();
    $('.about').hide();
    $('#MC2').slideToggle();
  });
  $('#WTBG').on('click', function() {
    $.each($('audio'), function () {
      this.pause();
    });
    $('.albums').hide();
    $('.about').hide();
    $('#WTBG2').slideToggle();
  });
  $('#W').on('click', function() {
    $.each($('audio'), function () {
      this.pause();
    });
    $('.albums').hide();
    $('.about').hide();
    $('#W2').slideToggle();
  });
  $('#YA').on('click', function() {
    $.each($('audio'), function () {
      this.pause();
    });
    $('.albums').hide();
    $('.about').hide();
    $('#YA2').slideToggle();
  });
});
