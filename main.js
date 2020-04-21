$(".nav-item .nav-link").on("click", function () {
  $(".nav-item").find(".active").removeClass("active");
  $(this).addClass("active");
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

function deferVideo() {

  //defer html5 video loading
  $("video source").each(function () {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}
window.onload = deferVideo;
var currentDate = new Date();

var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();
var dateString = '';

if (month <= 9) {
  if (date <= 9) {
    dateString = '0' + date + "-" + '0' + (month + 1) + "-" + year;
  }
  dateString = date + "-" + '0' + (month + 1) + "-" + year;
} else {
  if (date <= 9) {
    dateString = '0' + date + "-" + (month + 1) + "-" + year;
  }
  dateString = date + "-" + (month + 1) + "-" + year;
}

let today = document.getElementById('date');
let sunRise = document.getElementById('sunr');
let sunSet = document.getElementById('suns');
let moonRise = document.getElementById('moonr');
let moonSet = document.getElementById('moons');
let Tithi = document.getElementById('tithi');
let Naksh = document.getElementById('naksh');
let Yog = document.getElementById('yog');
let karan = document.getElementById('Karan');
let varr = document.getElementById('Var');

var sunr = '';
var suns = '';
var moonr = '';
var moons = '';
var tithi = '';
var naksh = '';
var yog = '';
var Karan = '';
var Var = '';

$(document).ready(function (e) {
  // $("#punchang").modal('show');
  // $('#sunrise').html('sunrise');
  // e.preventDefault();
  var mymodal = $('#punchang');
  // mymodal.find('.modal-body').text('hello');
  setPunchangData();
  mymodal.modal('show');
});

//०५:५८ ए. एम. ०६:४४ पी. एम.
function setPunchangData() {

  today.innerHTML = '<b>पञ्चाङ्ग</b>' + '&nbsp;||&nbsp;<b>' + dateString + '</b>';

  switch (dateString) {
    case '20-04-2020':
      sunr = '|| ०५:४९ ए. एम.';
      suns = '|| ०६:४९ पी. एम.';
      moonr = '|| ०५:०३ ए. एम., अप्रैल २१';
      moons = '|| ०४:३१ पी. एम.';
      tithi = '|| कृष्ण पक्ष त्रयोदशी - ०३:११ ए. एम., अप्रैल २१ तक ||चतुर्दशी';
      naksh = '|| पूर्व भाद्रपद - ०७:२३  ए. एम. तक || उत्तर भाद्रपद';
      yog = '|| इन्द्र - ०८:३२ पी. एम. तक || वैधृति';
      Karan = '|| गर - ०१:५७ पी. एम. तक || वणिज - ०३:११ ए एम, अप्रैल २१ तक || विष्टि';
      Var = '|| सोमवार';
      break;
    case '21-04-2020':
      sunr = '|| ०५:४८ ए. एम.';
      suns = '|| ०६:५० पी. एम.';
      moonr = '|| ०५:३३ ए. एम., अप्रैल २२';
      moons = '|| ०५:२३ पी. एम.';
      tithi = '|| कृष्ण पक्ष चतुर्दशी - ०५:३७ ए. एम., अप्रैल २२ तक';
      naksh = '|| उत्तर भाद्रपद - १०:२३ ए. एम. तक';
      yog = '|| वैधृति - ०९:२७ पी. एम. तक';
      Karan = '|| विष्टि - ०४:२५ पी. एम. तक';
      Var = '|| मंगलवार';
      break;
    case '22-04-2020':
      sunr = '|| 05:47 ए. एम.';
      suns = '|| 06:50 पी. एम.';
      moonr = '|| चन्द्रोदय नहीं';
      moons = '|| 06:15 पी. एम.';
      tithi = '|| अमावस्या - पूर्ण रात्रि तक';
      naksh = '|| रेवती - 01:18 पी. एम. तक';
      yog = '|| विष्कम्भ - 10:18 पी. एम. तक';
      Karan = '|| चतुष्पाद - 06:47 पी. एम. तक';
      Var = '|| बुधवार';
      break;
    case '23-04-2020':
      sunr = '|| 05:46 ए. एम.';
      suns = '|| 06:51 पी. एम.';
      moonr = '|| 06:03 ए. एम.';
      moons = '|| 07:07 पी. एम.';
      tithi = '|| अमावस्या - 07:55 ए. एम. तक';
      naksh = '|| अश्विनी - 04:05 पी. एम. तक';
      yog = '|| प्रीति - 11:01 पी. एम. तक';
      Karan = '|| नाग - 07:55 ए. एम. तक';
      Var = '|| गुरुवार';
      break;
    case '24-04-2020':
      sunr = '|| 05:46 ए. एम.';
      suns = '|| 06:51 पी. एम.';
      moonr = '|| 06:35 ए. एम.';
      moons = '|| 08:01 पी. एम.';
      tithi = '|| प्रतिपदा - 10:01 .ए एम. तक';
      naksh = '|| भरणी - 06:39 पी. एम. तक';
      yog = '|| आयुष्मान् - 11:33 पी. एम. तक';
      Karan = '|| बव - 10:01 ए. एम. तक';
      Var = '|| शुक्रवार';
      break;
    case '25-04-2020':
      sunr = '|| 05:45 ए. एम.';
      suns = '|| 06:52 पी. एम.';
      moonr = '|| 07:10 ए. एम.';
      moons = '|| 08:57 पी. एम.';
      tithi = '|| द्वितीया - 11:51 ए. एम. तक';
      naksh = '|| कृत्तिका - 08:58 पी. एम. तक';
      yog = '|| सौभाग्य - 11:52 पी. एम. तक';
      Karan = '|| कौलव - 11:51 ए. एम. तक';
      Var = '|| शनिवार';
      break;
    case '26-04-2020':
      sunr = '|| 05:44 ए एम';
      suns = '|| 06:53 पी एम';
      moonr = '|| 07:49 ए एम';
      moons = '|| 09:54 पी एम';
      tithi = '|| तृतीया - 01:22 पी एम तक';
      naksh = '|| रोहिणी - 10:56 पी एम तक';
      yog = '|| शोभन - 11:55 पी एम तक';
      Karan = '|| गर - 01:22 पी एम तक';
      Var = '|| रविवार';
      break;
    case '27-04-2020':
      sunr = '|| 05:43 ए एम';
      suns = '|| 06:53 पी एम';
      moonr = '|| 08:33 ए एम';
      moons = '|| 10:50 पी एम';
      tithi = '|| चतुर्थी - 02:29 पी एम तक';
      naksh = '|| मॄगशिरा - 12:30 ए एम, अप्रैल 28 तक';
      yog = '|| अतिगण्ड - 11:38 पी एम तक';
      Karan = '|| विष्टि - 02:29 पी एम तक';
      Var = '|| सोमवार';
      break;
    case '28-04-2020':
      sunr = '|| 05:42 ए एम';
      suns = '|| 06:54 पी एम';
      moonr = '|| 09:22 ए एम';
      moons = '|| 11:45 पी एम';
      tithi = '|| पञ्चमी - 03:07 पी एम तक';
      naksh = '|| आर्द्रा - 01:33 ए एम, अप्रैल 29 तक';
      yog = '|| सुकर्मा - 10:57 पी एम तक';
      Karan = '|| बालव - 03:07 पी एम तक';
      Var = '|| मंगलवार';
      break;
    case '29-04-2020':
      sunr = '|| 05:41 ए एम';
      suns = '|| 06:54 पी एम';
      moonr = '|| 10:17 ए एम';
      moons = '|| 12:38 ए एम, अप्रैल 30';
      tithi = '|| षष्ठी - 03:12 पी एम तक';
      naksh = '|| पुनर्वसु - 02:02 ए एम, अप्रैल 30 तक';
      yog = '|| धृति - 09:48 पी एम तक';
      Karan = '|| तैतिल - 03:12 पी एम तक';
      Var = '|| बुधवार';
      break;
    case '30-04-2020':
      sunr = '|| 05:40 ए एम';
      suns = '|| 06:55 पी एम';
      moonr = '|| 11:16 ए एम';
      moons = '|| 01:27 ए एम, मई 01';
      tithi = '|| सप्तमी - 02:39 पी एम तक';
      naksh = '|| पुष्य - 01:53 ए एम, मई 01 तक';
      yog = '|| शूल - 08:10 पी एम तक';
      Karan = '|| वणिज - 02:39 पी एम तक';
      Var = '|| गुरुवार';
      break;
  }

  sunRise.innerHTML = sunr;
  sunSet.innerHTML = suns;
  moonRise.innerHTML = moonr;
  moonSet.innerHTML = moons;
  Tithi.innerHTML = tithi;
  Naksh.innerHTML = naksh;
  Yog.innerHTML = yog;
  karan.innerHTML = Karan;
  varr.innerHTML = Var;

}