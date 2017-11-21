$('.ripple-list li').click(e => {
  $('.ripple', e.target).remove();

  var pos = {
    x: $(e.target).offset().left,
    y: $(e.target).offset().top
  };
  var diameter = Math.max($(e.target).width(), $(e.target).height());
  var center = {
    x: e.pageX - pos.x - diameter / 2,
    y: e.pageY - pos.y - diameter / 2
  };

  $(e.target).prepend('<span class="ripple"></span>');

  $('.ripple', e.target).css({
    width: diameter,
    height: diameter,
    top: `${center.y}px`,
    left: `${center.x}px`
  }).addClass('ripple-effect');
});
