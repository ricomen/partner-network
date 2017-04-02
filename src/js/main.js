$(document).ready(function () {
  //Navigation
  $(".no-js").removeClass("no-js");
  $(".main-nav__toggle").on("click", function(){
    $(this).toggleClass('main-nav__toggle--close');
    $(".main-nav__list").slideToggle(400);
  });
  $(window).resize(function(){
    if($(".main-nav__list").is(":hidden")) {
      $(".main-nav__list").removeAttr('style');      
    }
  });

  //price__item height
    function setEqualHeight(columns) {
      var tallestcolumn = 0;
      columns.each(
      function() {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) {
          tallestcolumn = currentHeight;
        }
      });
      columns.height(tallestcolumn);
    }
    $(document).ready(function() {
      setEqualHeight($(".price__item"));
    });

  //slick slider
  $(".works__list").slick({
      infinite: false,
      slidesToShow: 5,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]      
  });

  $(".price__list").slick({      
      infinite: false,
      slidesToShow: 3,
      prevArrow: "<button type=\"button\" class=\"price__btn price__btn--prev\"></button>",
      nextArrow: "<button type=\"button\" class=\"price__btn price__btn--next\"></button>",
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]      
  });
  //feedback slider
  $(".slider").slick({
    dots: true,
    prevArrow: "<button type=\"button\" class=\"slider__btn slider__btn--prev\"></button>",
    nextArrow: "<button type=\"button\" class=\"slider__btn slider__btn--next\"></button>",
     responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }]
  });
  //jQery End
});

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
  if (!document.getElementsByClassName) {
    // Поддержка IE8
    var getElementsByClassName = function(node, classname) {
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    }
    var videos = getElementsByClassName(document.body,"youtube");
  } else {
      var videos = document.getElementsByClassName("youtube");
  }

  var nb_videos = videos.length;
  for (var i=0; i<nb_videos; i++) {
    // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
    videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

    // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
    var play = document.createElement("div");
    play.setAttribute("class","play");
    videos[i].appendChild(play);

    videos[i].onclick = function() {
      // создаем iframe со включенной опцией autoplay
      var iframe = document.createElement("iframe");
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
      iframe.setAttribute("src",iframe_url);
      iframe.setAttribute("frameborder",'0');

      // Высота и ширина iframe должны быть такими же, как и у родительского блока
      iframe.style.width  = this.style.width;
      iframe.style.height = this.style.height;

      // Заменяем миниатюру плеером с YouTube
      this.parentNode.replaceChild(iframe, this);
    }
  }
});