var currentDate = new Date();

var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();
var dateString = '';

if (month < 9) {
  if (date <= 9) {
    dateString = '0' + date + "-" + '0' + (month + 1) + "-" + year;
  } else if (date > 9) {
    dateString = date + "-" + '0' + (month + 1) + "-" + year;
  }
} else if (month > 9) {
  if (date <= 9) {
    dateString = '0' + date + "-" + (month + 1) + "-" + year;
  } else if (date > 9) {
    dateString = date + "-" + (month + 1) + "-" + year;
  }
} else if (month == 9) {
  if (date <= 9) {
    dateString = '0' + date + "-" + (month + 1) + "-" + year;
  } else if (date > 9) {
    dateString = date + "-" + (month + 1) + "-" + year;
  }
}

console.log("date" + dateString);

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
  var mymodal = $('#punchang');
  setPunchangData();
  document.getElementById('myform').reset();
  setTimeout(function () {
    mymodal.modal('show');
  }, 2000);
  // mymodal.delay(50000).modal('show');
});


//०५:५८ ए. एम. ०६:४४ पी. एम.
function setPunchangData() {

  today.innerHTML = '<b>Panchang</b>' + '&nbsp;||&nbsp;<b>' + dateString + '</b>';

  switch (dateString) {   
    case '05-08-2023':
	sunr = '|| 05:44 AM';
	suns = '|| 07:09 PM';
	moonr = '|| 09:54 PM';
	moons = '|| 09:28 AM';
	tithi = '|| Chaturthi upto 09:39 AM';
	naksh = '|| Uttara Bhadrapada upto 02:54 AM, Aug 06';
	yog = '|| Sukarma upto 11:12 PM';
	Karan = '|| Kaulava upto 08:20 PM';
	Var = '|| 01:36 PM to 03:05 PM';
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