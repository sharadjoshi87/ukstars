$(".nav-item .nav-link").on("click", function(){
    $(".nav-item").find(".active").removeClass("active");
    $(this).addClass("active");
 });

 // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
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

if (month <= 9){
    if (date <= 9){
        dateString = '0'+ date + "-" +'0'+ (month + 1) + "-" + year;   
    }
    dateString = date + "-" +'0'+ (month + 1) + "-" + year;
}else{
    if(date <= 9){
    dateString = '0'+ date + "-" +(month + 1) + "-" + year;
    }
    dateString = date + "-" +(month + 1) + "-" + year;
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

$(document).ready(function(e){
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
    today.innerHTML = '<b>पञ्चाङ्गम्</b>' + '&nbsp;||&nbsp;<b>' + dateString + '</b>';
    if (dateString == '20-04-2020'){
        sunr = '|| ०५:४९ ए. एम.';
        suns = '|| ०६:४९ पी. एम.';
        moonr = '|| ०५:०३ ए. एम., अप्रैल २१';
        moons = '|| ०४:३१ पी. एम.';
        tithi = '|| कृष्ण पक्ष त्रयोदशी - ०३:११ ए. एम., अप्रैल २१ तक ||चतुर्दशी';
        naksh = '|| पूर्व भाद्रपद - ०७:२३  ए. एम. तक || उत्तर भाद्रपद';
        yog = '|| इन्द्र - ०८:३२ पी. एम. तक || वैधृति';
        Karan = '|| गर - ०१:५७ पी. एम. तक || वणिज - ०३:११ ए एम, अप्रैल २१ तक || विष्टि';
        Var = 'सोमवार';
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