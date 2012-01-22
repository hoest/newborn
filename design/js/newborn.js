var openArticleId = null;

$(function() {
  $('section.extra section.text').hide();
  $('section.more a').click(function() {
    var myId = $(this).parents('article:first').attr('id');

    if(openArticleId != null) {
      // close
      $('#' + openArticleId + ' section.text').slideToggle();
    }

    if(openArticleId != myId) {
      // open
      $(this).parents('article:first').find('section.text').slideToggle();
      $('html, body').animate(
        { scrollTop: $(this).offset().top },
        { duration: 'slow', easing: 'swing'}
        ); // scroll to element
      openArticleId = myId;
    } else {
      openArticleId = null;
    }
  });
});