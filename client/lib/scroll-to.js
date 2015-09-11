import $ from 'jquery';

export default (e) => {
  let el = e.target;
  if (location.pathname.replace(/^\//,'') == el.pathname.replace(/^\//,'') && location.hostname == el.hostname) {
    var target = $(el.hash);

    target = target.length ? target : $('[name=' + el.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({scrollTop: target.offset().top - 40}, 900);
      e.preventDefault()
    }
  }
}
