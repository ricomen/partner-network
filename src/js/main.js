
$(document).ready(function () {
 
  $(".feedback__slider-container").slick({
    dots: true,
    infinite: false,
    responsive: [
    {
      breakpoint: 1150,
      settings: {
        arrows: false
      }
    }
    
  ]   

});
$(".works__row").slick({
  infinite: false,
  arrows: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ] 
});
  
//     $(".prices__row").slick({    
//     arrows: false, 
//     slidesToShow: 3,
//     infinite: false,
//     responsive: [

//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1, 
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 320,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]   
// });


  // var catpos = $(".categories").position();
  // $("#to-category").on("click", function () {
  //   console.log(Math.floor(catpos.top));
  //   $("html, body").animate({
  //     scrollTop: catpos.top
  //   }, 700);
  // });


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