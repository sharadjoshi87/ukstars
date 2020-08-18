$(".nav-item .nav-link").on("click", function () {
  $(".nav-item").find(".active").removeClass("active");
  $(this).addClass("active");
});

// $('.nav-link').on('click', function () {
//   $('.navbar-collapse').collapse('hide');
// });
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});


/* Youtube Player */
/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
  function() {
    var div, n,
    v=document.getElementsByClassName("youtube-player");

    for (n=0; n < v.length; n++) {
      div=document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML=labnolThumb(v[n].dataset.id);
      div.onclick=labnolIframe;
      v[n].appendChild(div);
    }
  }

);

function labnolThumb(id) {
  var thumb='<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
  play='<div class="play"></div>';
  return thumb.replace("ID", id)+play;
}

function labnolIframe() {
  var iframe=document.createElement("iframe");
  var embed="https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}


/* XX Youtube Player XX */