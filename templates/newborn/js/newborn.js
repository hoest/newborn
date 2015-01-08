var openArticleId = null;

$(function() {
  $('section.extra section.text').hide();
  $('section.more a').click(function() {
    var myId = $(this).parents('article:first').attr('id');

    if(openArticleId !== null) {
      // close
      $('#' + openArticleId + ' section.text').slideToggle();
      $('#' + openArticleId).removeClass('border-bottom');
    }

    if(openArticleId != myId) {
      // open
      var article = $(this).parents('article:first');
      $(article).find('section.text').slideToggle();
      $(article).addClass('border-bottom');

      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, {
        duration: 'slow',
        easing: 'swing'
      }); // scroll to element

      openArticleId = myId;
    } else {
      openArticleId = null;
    }
  });
});
