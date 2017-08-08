var menu = $('select');
var articles = $('article');

menu.on('change', function(){
  if (menu.val() !== 'all') {
    // for (var i = 0; i < articles.length; i++) {
    //   articles[i].classList.add('hide');
    //
    //   if (articles[i].classList.contains(menu.value)) {
    //     articles[i].classList.remove('hide');
    //   }
    // }

    articles.each(function(){
      $(this).addClass('hide');

      if ($(this).hasClass(menu.val())) {
        $(this).removeClass('hide');
      }
    })
  } else {
    // for (var i = 0; i < articles.length; i++) {
    //   articles[i].classList.remove('hide');
    // }

    articles.each(function(){
      $(this).removeClass('hide');
    })
  }
})

var openBtn = $('.open-menu');
var closeBtn = $('.close-menu');

openBtn.on('click', function(){
  $('nav').fadeIn();
  $('body').addClass('stop-scroll');
})

closeBtn.on('click', function(){
  $('nav').fadeOut();
  $('body').removeClass('stop-scroll');

})
