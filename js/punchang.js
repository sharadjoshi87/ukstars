
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
    case '05-12-2020':
      sunr = '07:00 AM';
      suns = '05:24 PM';
      moonr = '09:49 PM';
      moons = '11:04 AM';
      tithi = 'Panchami upto 08:10 PM';
      naksh = 'Pushya upto 02:28 PM';
      yog = 'Brahma upto 09:34 AM';
      Karan = 'Kaulava upto 08:10 AM';
      Var = 'Shaniwara';
      break;
    case '06-12-2020':
      sunr = '07:00 AM';
      suns = '05:24 PM';
      moonr = '10:50 PM';
      moons = '11:47 AM';
      tithi = 'Shashthi upto 07:44 PM';
      naksh = 'Ashlesha upto 02:46 PM';
      yog = 'Indra upto 08:14 AM';
      Karan = 'Vaidhriti upto 06:29 AM, Dec 07';
      Var = 'Raviwara';
      break;
    case '07-12-2020':
      sunr = '07:01 AM';
      suns = '05:24 PM';
      moonr = '11:52 PM';
      moons = '12:26 PM';
      tithi = 'Saptami upto 06:47 PM';
      naksh = 'Magha upto 02:33 PM';
      yog = 'Vishkambha upto 04:19 AM, Dec 08';
      Karan = 'Vishti upto 07:20 AM';
      Var = 'Somawara';
      break;
    case '08-12-2020':
      sunr = '07:02 AM';
      suns = '05:24 PM';
      moonr = '12:55 AM, Dec 09';
      moons = '01:03 PM';
      tithi = 'Ashtami upto 05:17 PM';
      naksh = 'Purva Phalguni upto 01:48 PM';
      yog = 'Priti upto 01:43 AM, Dec 09';
      Karan = 'Kaulava upto 05:17 PM';
      Var = 'Mangalawara';
      break;
    case '09-12-2020':
      sunr = '07:03 AM';
      suns = '05:25 PM';
      moonr = '01:58 AM, Dec 10';
      moons = '01:39 PM';
      tithi = 'Navami upto 03:17 PM';
      naksh = 'Uttara Phalguni upto 12:33 PM';
      yog = 'Ayushman upto 10:44 PM';
      Karan = 'Garaja upto 03:17 PM';
      Var = 'Budhawara';
      break;
    case '10-12-2020':
      sunr = '07:03 AM';
      suns = '05:25 PM';
      moonr = '03:03 AM, Dec 11';
      moons = '02:15 PM';
      tithi = 'Dashami upto 12:51 PM';
      naksh = 'Hasta upto 10:51 AM';
      yog = 'Saubhagya upto 07:26 PM';
      Karan = 'Vishti upto 12:51 PM';
      Var = 'Guruwara';
      break;
    case '11-12-2020':
      sunr = '07:04 AM';
      suns = '05:25 PM';
      moonr = '04:10 AM, Dec 12';
      moons = '02:52 PM';
      tithi = 'Ekadashi upto 10:04 AM';
      naksh = 'Dwadashi upto 07:02 AM, Dec 12';
      yog = 'Chitra upto 08:48 AM';
      Karan = 'Swati upto 06:30 AM, Dec 12';
      Var = 'Shukrawara';
      break;
    case '12-12-2020':
      sunr = '07:05 AM';
      suns = '05:25 PM';
      moonr = '05:19 AM, Dec 13';
      moons = '03:33 PM';
      tithi = 'Trayodashi upto 03:52 AM, Dec 13';
      naksh = 'Vishakha upto 04:05 AM, Dec 13';
      yog = 'Atiganda upto 12:07 PM';
      Karan = 'Garaja upto 05:27 PM';
      Var = 'Shaniwara';
      break;
    case '13-12-2020':
      sunr = '07:05 AM';
      suns = '05:26 PM';
      moonr = '06:29 AM, Dec 14';
      moons = '04:19 PM';
      tithi = 'Chaturdashi upto 12:44 AM, Dec 14';
      naksh = 'Anuradha upto 01:40 AM, Dec 14';
      yog = 'Sukarman upto 08:18 AM';
      Karan = 'Dhriti upto 04:31 AM, Dec 14';
      Var = 'Raviwara';
      break;
    case '14-12-2020':
      sunr = '07:06 AM';
      suns = '05:26 PM';
      moonr = 'No Moonrise';
      moons = '05:11 PM';
      tithi = 'Amavasya upto 09:46 PM';
      naksh = 'Jyeshtha upto 11:26 PM';
      yog = 'Shula upto 12:53 AM, Dec 15';
      Karan = 'Chatushpada upto 11:13 AM';
      Var = 'Somawara';
      break;
    case '15-12-2020':
      sunr = '07:06 AM';
      suns = '05:26 PM';
      moonr = '07:38 AM';
      moons = '06:08 PM';
      tithi = 'Pratipada upto 07:06 PM';
      naksh = 'Mula upto 09:31 PM';
      yog = 'Ganda upto 09:32 PM';
      Karan = 'Kinstughna upto 08:23 AM';
      Var = 'Mangalawara';
      break;
    case '16-12-2020':
      sunr = '07:07 AM';
      suns = '05:27 PM';
      moonr = '08:41 AM';
      moons = '07:10 PM';
      tithi = 'Dwitiya upto 04:54 PM';
      naksh = 'Purva Ashadha upto 08:04 PM';
      yog = 'Vriddhi upto 06:34 PM';
      Karan = 'Kaulava upto 04:54 PM';
      Var = 'Budhawara';
      break;
    case '17-12-2020':
      sunr = '07:08 AM';
      suns = '05:27 PM';
      moonr = '09:38 AM';
      moons = '08:14 PM';
      tithi = 'Tritiya upto 03:17 PM';
      naksh = 'Uttara Ashadha upto 07:13 PM';
      yog = 'Dhruva upto 04:04 PM';
      Karan = 'Garaja upto 03:17 PM';
      Var = 'Guruwara';
      break;
    case '18-12-2020':
      sunr = '07:08 AM';
      suns = '05:28 PM';
      moonr = '10:26 AM';
      moons = '09:16 PM';
      tithi = 'Chaturthi upto 02:22 PM';
      naksh = 'Shravana upto 07:04 PM';
      yog = 'Vyaghata upto 02:08 PM';
      Karan = 'Vishti upto 02:22 PM';
      Var = 'Shukrawara';
      break;
    case '19-12-2020':
      sunr = '07:09 AM';
      suns = '05:28 PM';
      moonr = '11:08 AM';
      moons = '10:16 PM';
      tithi = 'Panchami upto 02:14 PM';
      naksh = 'Dhanishtha upto 07:40 PM';
      yog = 'Harshana upto 12:47 PM';
      Karan = 'Balava upto 02:14 PM';
      Var = 'Shaniwara';
      break;
    case '20-12-2020':
      sunr = '07:09 AM';
      suns = '05:29 PM';
      moonr = '11:44 AM';
      moons = '11:13 PM';
      tithi = 'Shashthi upto 02:52 PM';
      naksh = 'Shatabhisha upto 09:01 PM';
      yog = 'Vajra upto 12:03 PM';
      Karan = 'Taitila upto 02:52 PM';
      Var = 'Raviwara';
      break;
    case '21-12-2020':
      sunr = '07:10 AM';
      suns = '05:29 PM';
      moonr = '12:17 PM';
      moons = '12:07 AM, Dec 22';
      tithi = 'Saptami upto 04:14 PM';
      naksh = 'Purva Bhadrapada upto 11:03 PM';
      yog = 'Siddhi upto 11:52 AM';
      Karan = 'Vanija upto 04:14 PM';
      Var = 'Somawara';
      break;
    case '22-12-2020':
      sunr = '07:10 AM';
      suns = '05:30 PM';
      moonr = '12:47 PM';
      moons = '12:59 AM, Dec 23';
      tithi = 'Ashtami upto 06:14 PM';
      naksh = 'Uttara Bhadrapada upto 01:38 AM, Dec 23';
      yog = 'Vyatipata upto 12:11 PM';
      Karan = 'Bava upto 06:14 PM';
      Var = 'Mangalawara';
      break;
    case '23-12-2020':
      sunr = '07:11 AM';
      suns = '05:30 PM';
      moonr = '01:16 PM';
      moons = '01:51 AM, Dec 24';
      tithi = 'Navami upto 08:39 PM';
      naksh = 'Revati upto 04:33 AM, Dec 24';
      yog = 'Varigha upto 12:50 PM';
      Karan = 'Balava upto 07:24 AM';
      Var = 'Budhawara';
      break;
    case '24-12-2020':
      sunr = '07:11 AM';
      suns = '05:31 PM';
      moonr = '01:45 PM';
      moons = '02:43 AM, Dec 25';
      tithi = 'Dashami upto 11:17 PM';
      naksh = 'Ashwini upto Full Night';
      yog = 'Parigha upto 01:42 PM';
      Karan = 'Taitila upto 09:57 AM';
      Var = 'Guruwara';
      break;
    case '25-12-2020':
      sunr = '07:12 AM';
      suns = '05:31 PM';
      moonr = '02:15 PM';
      moons = '03:36 AM, Dec 26';
      tithi = 'Ekadashi upto 01:54 AM, Dec 26';
      naksh = 'Ashwini upto 07:37 AM';
      yog = 'Shiva upto 02:37 PM';
      Karan = 'Vanija upto 12:36 PM';
      Var = 'Shukrawara';
      break;
    case '26-12-2020':
      sunr = '07:12 AM';
      suns = '05:32 PM';
      moonr = '02:48 PM';
      moons = '04:31 AM, Dec 27';
      tithi = 'Dwadashi upto 04:18 AM, Dec 27';
      naksh = 'Bharani upto 10:36 AM';
      yog = 'Siddha upto 03:26 PM';
      Karan = 'Bava upto 03:08 PM';
      Var = 'Shaniwara';
      break;
    case '27-12-2020':
      sunr = '07:12 AM';
      suns = '05:32 PM';
      moonr = '03:24 PM';
      moons = '05:27 AM, Dec 28';
      tithi = 'Trayodashi upto 06:20 AM, Dec 28';
      naksh = 'Krittika upto 01:19 PM';
      yog = 'Sadhya upto 04:01 PM';
      Karan = 'Kaulava upto 05:22 PM';
      Var = 'Raviwara';
      break;
    case '28-12-2020':
      sunr = '07:13 AM';
      suns = '05:33 PM';
      moonr = '04:06 PM';
      moons = '06:23 AM, Dec 29';
      tithi = 'Chaturdashi upto Full Night';
      naksh = 'Rohini upto 03:40 PM';
      yog = 'Shubha upto 04:18 PM';
      Karan = 'Garaja upto 07:11 PM';
      Var = 'Somawara';
      break;
    case '29-12-2020':
      sunr = '07:13 AM';
      suns = '05:34 PM';
      moonr = '04:52 PM';
      moons = 'No Moonset';
      tithi = 'Chaturdashi upto 07:54 AM';
      naksh = 'Mrigashirsha upto 05:33 PM';
      yog = 'Shukla upto 04:13 PM';
      Karan = 'Vanija upto 07:54 AM';
      Var = 'Mangalawara';
      break;
    case '30-12-2020':
      sunr = '07:13 AM';
      suns = '05:34 PM';
      moonr = '05:45 PM';
      moons = '07:19 AM';
      tithi = 'Purnima upto 08:57 AM';
      naksh = 'Ardra upto 06:55 PM';
      yog = 'Brahma upto 03:44 PM';
      Karan = 'Bava upto 08:57 AM';
      Var = 'Budhawara';
      break;
    case '31-12-2020':
      sunr = '07:14 AM';
      suns = '05:35 PM';
      moonr = '06:42 PM';
      moons = '08:12 AM';
      tithi = 'Pratipada upto 09:30 AM';
      naksh = 'Punarvasu upto 07:49 PM';
      yog = 'Indra upto 02:52 PM';
      Karan = 'Kaulava upto 09:30 AM';
      Var = 'Guruwara';
      break;
      case '01-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:36 PM';
	moonr = '|| 07:42 PM';
	moons = '|| 09:02 AM';
	tithi = '|| Dwitiya upto 09:33 AM';
	naksh = '|| Pushya upto 08:15 PM';
	yog = '|| Vaidhriti upto 01:38 PM';
	Karan = '|| Garaja upto 09:33 AM';
	Var = '|| Shukrawara';
	break;
case '02-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:36 PM';
	moonr = '|| 08:44 PM';
	moons = '|| 09:47 AM';
	tithi = '|| Tritiya upto 09:09 AM';
	naksh = '|| Ashlesha upto 08:17 PM';
	yog = '|| Vishkambha upto 12:04 PM';
	Karan = '|| Vishti upto 09:09 AM';
	Var = '|| Shaniwara';
	break;
case '03-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:37 PM';
	moonr = '|| 09:46 PM';
	moons = '|| 10:27 AM';
	tithi = '|| Chaturthi upto 08:22 AM';
	naksh = '|| Panchami upto 07:13 AM, Jan 04';
	yog = '|| Magha upto 07:57 PM';
	Karan = '|| Priti upto 10:11 AM';
	Var = '|| Raviwara';
	break;
case '04-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:38 PM';
	moonr = '|| 10:48 PM';
	moons = '|| 11:05 AM';
	tithi = '|| Shashthi upto 05:46 AM, Jan 05';
	naksh = '|| Purva Phalguni upto 07:17 PM';
	yog = '|| Ayushman upto 08:02 AM';
	Karan = '|| Saubhagya upto 05:38 AM, Jan 05';
	Var = '|| Somawara';
	break;
case '05-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:38 PM';
	moonr = '|| 11:50 PM';
	moons = '|| 11:40 AM';
	tithi = '|| Saptami upto 04:03 AM, Jan 06';
	naksh = '|| Uttara Phalguni upto 06:21 PM';
	yog = '|| Shobhana upto 03:01 AM, Jan 06';
	Karan = '|| Vishti upto 04:57 PM';
	Var = '|| Mangalawara';
	break;
case '06-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:39 PM';
	moonr = '|| 12:53 AM, Jan 07';
	moons = '|| 12:15 PM';
	tithi = '|| Ashtami upto 02:06 AM, Jan 07';
	naksh = '|| Hasta upto 05:10 PM';
	yog = '|| Atiganda upto 12:13 AM, Jan 07';
	Karan = '|| Balava upto 03:06 PM';
	Var = '|| Budhawara';
	break;
case '07-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:40 PM';
	moonr = '|| 01:57 AM, Jan 08';
	moons = '|| 12:51 PM';
	tithi = '|| Navami upto 11:57 PM';
	naksh = '|| Chitra upto 03:46 PM';
	yog = '|| Sukarman upto 09:16 PM';
	Karan = '|| Taitila upto 01:03 PM';
	Var = '|| Guruwara';
	break;
case '08-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:41 PM';
	moonr = '|| 03:02 AM, Jan 09';
	moons = '|| 01:29 PM';
	tithi = '|| Dashami upto 09:40 PM';
	naksh = '|| Swati upto 02:13 PM';
	yog = '|| Dhriti upto 06:11 PM';
	Karan = '|| Vanija upto 10:49 AM';
	Var = '|| Shukrawara';
	break;
case '09-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:42 PM';
	moonr = '|| 04:10 AM, Jan 10';
	moons = '|| 02:11 PM';
	tithi = '|| Ekadashi upto 07:17 PM';
	naksh = '|| Vishakha upto 12:32 PM';
	yog = '|| Shula upto 03:02 PM';
	Karan = '|| Bava upto 08:29 AM';
	Var = '|| Shaniwara';
	break;
case '10-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:42 PM';
	moonr = '|| 05:17 AM, Jan 11';
	moons = '|| 02:58 PM';
	tithi = '|| Dwadashi upto 04:52 PM';
	naksh = '|| Anuradha upto 10:50 AM';
	yog = '|| Ganda upto 11:50 AM';
	Karan = '|| Taitila upto 04:52 PM';
	Var = '|| Raviwara';
	break;
case '11-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:43 PM';
	moonr = '|| 06:22 AM, Jan 12';
	moons = '|| 03:52 PM';
	tithi = '|| Trayodashi upto 02:32 PM';
	naksh = '|| Jyeshtha upto 09:10 AM';
	yog = '|| Vriddhi upto 08:41 AM';
	Karan = '|| Dhruva upto 05:39 AM, Jan 12';
	Var = '|| Somawara';
	break;
case '12-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:44 PM';
	moonr = '|| No Moonrise';
	moons = '|| 04:51 PM';
	tithi = '|| Chaturdashi upto 12:22 PM';
	naksh = '|| Mula upto 07:38 AM';
	yog = '|| Purva Ashadha upto 06:22 AM, Jan 13';
	Karan = '|| Vyaghata upto 02:48 AM, Jan 13';
	Var = '|| Mangalawara';
	break;
case '13-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:45 PM';
	moonr = '|| 07:22 AM';
	moons = '|| 05:54 PM';
	tithi = '|| Amavasya upto 10:29 AM';
	naksh = '|| Uttara Ashadha upto 05:28 AM, Jan 14';
	yog = '|| Harshana upto 12:16 AM, Jan 14';
	Karan = '|| Nagava upto 10:29 AM';
	Var = '|| Budhawara';
	break;
case '14-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:46 PM';
	moonr = '|| 08:15 AM';
	moons = '|| 06:57 PM';
	tithi = '|| Pratipada upto 09:01 AM';
	naksh = '|| Shravana upto 05:05 AM, Jan 15';
	yog = '|| Vajra upto 10:06 PM';
	Karan = '|| Bava upto 09:01 AM';
	Var = '|| Guruwara';
	break;
case '15-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:46 PM';
	moonr = '|| 09:00 AM';
	moons = '|| 07:59 PM';
	tithi = '|| Dwitiya upto 08:04 AM';
	naksh = '|| Dhanishtha upto 05:17 AM, Jan 16';
	yog = '|| Siddhi upto 08:23 PM';
	Karan = '|| Kaulava upto 08:04 AM';
	Var = '|| Shukrawara';
	break;
case '16-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:47 PM';
	moonr = '|| 09:39 AM';
	moons = '|| 08:59 PM';
	tithi = '|| Tritiya upto 07:45 AM';
	naksh = '|| Shatabhisha upto 06:10 AM, Jan 17';
	yog = '|| Vyatipata upto 07:12 PM';
	Karan = '|| Garaja upto 07:45 AM';
	Var = '|| Shaniwara';
	break;
case '17-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:48 PM';
	moonr = '|| 10:14 AM';
	moons = '|| 09:55 PM';
	tithi = '|| Chaturthi upto 08:08 AM';
	naksh = '|| Purva Bhadrapada upto Full Night';
	yog = '|| Varigha upto 06:34 PM';
	Karan = '|| Vishti upto 08:08 AM';
	Var = '|| Raviwara';
	break;
case '18-01-2021':
	sunr = '|| 07:15 AM';
	suns = '|| 05:49 PM';
	moonr = '|| 10:45 AM';
	moons = '|| 10:49 PM';
	tithi = '|| Panchami upto 09:13 AM';
	naksh = '|| Purva Bhadrapada upto 07:43 AM';
	yog = '|| Parigha upto 06:27 PM';
	Karan = '|| Balava upto 09:13 AM';
	Var = '|| Somawara';
	break;
case '19-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:50 PM';
	moonr = '|| 11:15 AM';
	moons = '|| 11:42 PM';
	tithi = '|| Shashthi upto 10:58 AM';
	naksh = '|| Uttara Bhadrapada upto 09:55 AM';
	yog = '|| Shiva upto 06:49 PM';
	Karan = '|| Taitila upto 10:58 AM';
	Var = '|| Mangalawara';
	break;
case '20-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:51 PM';
	moonr = '|| 11:44 AM';
	moons = '|| 12:34 AM, Jan 21';
	tithi = '|| Saptami upto 01:14 PM';
	naksh = '|| Revati upto 12:37 PM';
	yog = '|| Siddha upto 07:31 PM';
	Karan = '|| Vanija upto 01:14 PM';
	Var = '|| Budhawara';
	break;
case '21-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:51 PM';
	moonr = '|| 12:14 PM';
	moons = '|| 01:27 AM, Jan 22';
	tithi = '|| Ashtami upto 03:50 PM';
	naksh = '|| Ashwini upto 03:37 PM';
	yog = '|| Sadhya upto 08:25 PM';
	Karan = '|| Bava upto 03:50 PM';
	Var = '|| Guruwara';
	break;
case '22-01-2021':
	sunr = '|| 07:14 AM';
	suns = '|| 05:52 PM';
	moonr = '|| 12:46 PM';
	moons = '|| 02:21 AM, Jan 23';
	tithi = '|| Navami upto 06:29 PM';
	naksh = '|| Bharani upto 06:40 PM';
	yog = '|| Shubha upto 09:19 PM';
	Karan = '|| Kaulava upto 06:29 PM';
	Var = '|| Shukrawara';
	break;
case '23-01-2021':
	sunr = '|| 07:13 AM';
	suns = '|| 05:53 PM';
	moonr = '|| 01:21 PM';
	moons = '|| 03:16 AM, Jan 24';
	tithi = '|| Dashami upto 08:56 PM';
	naksh = '|| Krittika upto 09:33 PM';
	yog = '|| Shukla upto 10:04 PM';
	Karan = '|| Taitila upto 07:45 AM';
	Var = '|| Shaniwara';
	break;
case '24-01-2021':
	sunr = '|| 07:13 AM';
	suns = '|| 05:54 PM';
	moonr = '|| 02:00 PM';
	moons = '|| 04:12 AM, Jan 25';
	tithi = '|| Ekadashi upto 10:57 PM';
	naksh = '|| Rohini upto 12:01 AM, Jan 25';
	yog = '|| Brahma upto 10:30 PM';
	Karan = '|| Vanija upto 10:00 AM';
	Var = '|| Raviwara';
	break;
case '25-01-2021':
	sunr = '|| 07:13 AM';
	suns = '|| 05:55 PM';
	moonr = '|| 02:44 PM';
	moons = '|| 05:08 AM, Jan 26';
	tithi = '|| Dwadashi upto 12:24 AM, Jan 26';
	naksh = '|| Mrigashirsha upto 01:56 AM, Jan 26';
	yog = '|| Indra upto 10:29 PM';
	Karan = '|| Bava upto 11:46 AM';
	Var = '|| Somawara';
	break;
case '26-01-2021':
	sunr = '|| 07:12 AM';
	suns = '|| 05:56 PM';
	moonr = '|| 03:34 PM';
	moons = '|| 06:03 AM, Jan 27';
	tithi = '|| Trayodashi upto 01:11 AM, Jan 27';
	naksh = '|| Ardra upto 03:12 AM, Jan 27';
	yog = '|| Vaidhriti upto 09:59 PM';
	Karan = '|| Kaulava upto 12:53 PM';
	Var = '|| Mangalawara';
	break;
case '27-01-2021':
	sunr = '|| 07:12 AM';
	suns = '|| 05:56 PM';
	moonr = '|| 04:30 PM';
	moons = '|| 06:54 AM, Jan 28';
	tithi = '|| Chaturdashi upto 01:17 AM, Jan 28';
	naksh = '|| Punarvasu upto 03:49 AM, Jan 28';
	yog = '|| Vishkambha upto 08:57 PM';
	Karan = '|| Garaja upto 01:19 PM';
	Var = '|| Budhawara';
	break;
case '28-01-2021':
	sunr = '|| 07:11 AM';
	suns = '|| 05:57 PM';
	moonr = '|| 05:30 PM';
	moons = '|| No Moonset';
	tithi = '|| Purnima upto 12:45 AM, Jan 29';
	naksh = '|| Pushya upto 03:51 AM, Jan 29';
	yog = '|| Priti upto 07:25 PM';
	Karan = '|| Vishti upto 01:05 PM';
	Var = '|| Guruwara';
	break;
case '29-01-2021':
	sunr = '|| 07:11 AM';
	suns = '|| 05:58 PM';
	moonr = '|| 06:33 PM';
	moons = '|| 07:42 AM';
	tithi = '|| Pratipada upto 11:41 PM';
	naksh = '|| Ashlesha upto 03:21 AM, Jan 30';
	yog = '|| Ayushman upto 05:28 PM';
	Karan = '|| Balava upto 12:17 PM';
	Var = '|| Shukrawara';
	break;
case '30-01-2021':
	sunr = '|| 07:10 AM';
	suns = '|| 05:59 PM';
	moonr = '|| 07:37 PM';
	moons = '|| 08:25 AM';
	tithi = '|| Dwitiya upto 10:12 PM';
	naksh = '|| Magha upto 02:28 AM, Jan 31';
	yog = '|| Saubhagya upto 03:09 PM';
	Karan = '|| Taitila upto 10:59 AM';
	Var = '|| Shaniwara';
	break;
case '31-01-2021':
	sunr = '|| 07:10 AM';
	suns = '|| 06:00 PM';
	moonr = '|| 08:40 PM';
	moons = '|| 09:04 AM';
	tithi = '|| Tritiya upto 08:24 PM';
	naksh = '|| Purva Phalguni upto 01:18 AM, Feb 01';
	yog = '|| Shobhana upto 12:33 PM';
	Karan = '|| Vanija upto 09:20 AM';
	Var = '|| Raviwara';
	break;
case '01-02-2021':
	sunr = '|| 07:09 AM';
	suns = '|| 06:00 PM';
	moonr = '|| 09:44 PM';
	moons = '|| 09:41 AM';
	tithi = '|| Chaturthi upto 06:24 PM';
	naksh = '|| Uttara Phalguni upto 11:58 PM';
	yog = '|| Atiganda upto 09:46 AM';
	Karan = '|| Sukarman upto 06:53 AM, Feb 02';
	Var = '|| Somawara';
	break;
case '02-02-2021':
	sunr = '|| 07:09 AM';
	suns = '|| 06:01 PM';
	moonr = '|| 10:47 PM';
	moons = '|| 10:16 AM';
	tithi = '|| Panchami upto 04:19 PM';
	naksh = '|| Hasta upto 10:33 PM';
	yog = '|| Dhriti upto 03:57 AM, Feb 03';
	Karan = '|| Taitila upto 04:19 PM';
	Var = '|| Mangalawara';
	break;
case '03-02-2021':
	sunr = '|| 07:08 AM';
	suns = '|| 06:02 PM';
	moonr = '|| 11:50 PM';
	moons = '|| 10:52 AM';
	tithi = '|| Shashthi upto 02:12 PM';
	naksh = '|| Chitra upto 09:08 PM';
	yog = '|| Shula upto 01:01 AM, Feb 04';
	Karan = '|| Vanija upto 02:12 PM';
	Var = '|| Budhawara';
	break;
case '04-02-2021':
	sunr = '|| 07:08 AM';
	suns = '|| 06:03 PM';
	moonr = '|| 12:55 AM, Feb 05';
	moons = '|| 11:29 AM';
	tithi = '|| Saptami upto 12:07 PM';
	naksh = '|| Swati upto 07:45 PM';
	yog = '|| Ganda upto 10:09 PM';
	Karan = '|| Bava upto 12:07 PM';
	Var = '|| Guruwara';
	break;
case '05-02-2021':
	sunr = '|| 07:07 AM';
	suns = '|| 06:04 PM';
	moonr = '|| 02:00 AM, Feb 06';
	moons = '|| 12:09 PM';
	tithi = '|| Ashtami upto 10:07 AM';
	naksh = '|| Vishakha upto 06:28 PM';
	yog = '|| Vriddhi upto 07:21 PM';
	Karan = '|| Kaulava upto 10:07 AM';
	Var = '|| Shukrawara';
	break;
case '06-02-2021':
	sunr = '|| 07:06 AM';
	suns = '|| 06:04 PM';
	moonr = '|| 03:06 AM, Feb 07';
	moons = '|| 12:53 PM';
	tithi = '|| Navami upto 08:13 AM';
	naksh = '|| Dashami upto 06:26 AM, Feb 07';
	yog = '|| Anuradha upto 05:18 PM';
	Karan = '|| Dhruva upto 04:38 PM';
	Var = '|| Shaniwara';
	break;
case '07-02-2021':
	sunr = '|| 07:06 AM';
	suns = '|| 06:05 PM';
	moonr = '|| 04:10 AM, Feb 08';
	moons = '|| 01:43 PM';
	tithi = '|| Ekadashi upto 04:47 AM, Feb 08';
	naksh = '|| Jyeshtha upto 04:15 PM';
	yog = '|| Vyaghata upto 02:01 PM';
	Karan = '|| Bava upto 05:35 PM';
	Var = '|| Raviwara';
	break;
case '08-02-2021':
	sunr = '|| 07:05 AM';
	suns = '|| 06:06 PM';
	moonr = '|| 05:11 AM, Feb 09';
	moons = '|| 02:39 PM';
	tithi = '|| Dwadashi upto 03:19 AM, Feb 09';
	naksh = '|| Mula upto 03:21 PM';
	yog = '|| Harshana upto 11:32 AM';
	Karan = '|| Kaulava upto 04:02 PM';
	Var = '|| Somawara';
	break;
case '09-02-2021':
	sunr = '|| 07:04 AM';
	suns = '|| 06:07 PM';
	moonr = '|| 06:05 AM, Feb 10';
	moons = '|| 03:39 PM';
	tithi = '|| Trayodashi upto 02:05 AM, Feb 10';
	naksh = '|| Purva Ashadha upto 02:39 PM';
	yog = '|| Vajra upto 09:11 AM';
	Karan = '|| Siddhi upto 07:02 AM, Feb 10';
	Var = '|| Mangalawara';
	break;
case '10-02-2021':
	sunr = '|| 07:03 AM';
	suns = '|| 06:08 PM';
	moonr = '|| 06:52 AM, Feb 11';
	moons = '|| 04:41 PM';
	tithi = '|| Chaturdashi upto 01:08 AM, Feb 11';
	naksh = '|| Uttara Ashadha upto 02:12 PM';
	yog = '|| Vyatipata upto 05:09 AM, Feb 11';
	Karan = '|| Vishti upto 01:34 PM';
	Var = '|| Budhawara';
	break;
case '11-02-2021':
	sunr = '|| 07:03 AM';
	suns = '|| 06:08 PM';
	moonr = '|| No Moonrise';
	moons = '|| 05:44 PM';
	tithi = '|| Amavasya upto 12:35 AM, Feb 12';
	naksh = '|| Shravana upto 02:05 PM';
	yog = '|| Varigha upto 03:33 AM, Feb 12';
	Karan = '|| Chatushpada upto 12:48 PM';
	Var = '|| Guruwara';
	break;
case '12-02-2021':
	sunr = '|| 07:02 AM';
	suns = '|| 06:09 PM';
	moonr = '|| 07:34 AM';
	moons = '|| 06:44 PM';
	tithi = '|| Pratipada upto 12:29 AM, Feb 13';
	naksh = '|| Dhanishtha upto 02:23 PM';
	yog = '|| Parigha upto 02:20 AM, Feb 13';
	Karan = '|| Kinstughna upto 12:28 PM';
	Var = '|| Shukrawara';
	break;
case '13-02-2021':
	sunr = '|| 07:01 AM';
	suns = '|| 06:10 PM';
	moonr = '|| 08:10 AM';
	moons = '|| 07:42 PM';
	tithi = '|| Dwitiya upto 12:56 AM, Feb 14';
	naksh = '|| Shatabhisha upto 03:11 PM';
	yog = '|| Shiva upto 01:33 AM, Feb 14';
	Karan = '|| Balava upto 12:38 PM';
	Var = '|| Shaniwara';
	break;
case '14-02-2021':
	sunr = '|| 07:00 AM';
	suns = '|| 06:11 PM';
	moonr = '|| 08:43 AM';
	moons = '|| 08:38 PM';
	tithi = '|| Tritiya upto 01:58 AM, Feb 15';
	naksh = '|| Purva Bhadrapada upto 04:33 PM';
	yog = '|| Siddha upto 01:13 AM, Feb 15';
	Karan = '|| Taitila upto 01:23 PM';
	Var = '|| Raviwara';
	break;
case '15-02-2021':
	sunr = '|| 06:59 AM';
	suns = '|| 06:11 PM';
	moonr = '|| 09:14 AM';
	moons = '|| 09:32 PM';
	tithi = '|| Chaturthi upto 03:36 AM, Feb 16';
	naksh = '|| Uttara Bhadrapada upto 06:29 PM';
	yog = '|| Sadhya upto 01:19 AM, Feb 16';
	Karan = '|| Vanija upto 02:43 PM';
	Var = '|| Somawara';
	break;
case '16-02-2021':
	sunr = '|| 06:59 AM';
	suns = '|| 06:12 PM';
	moonr = '|| 09:43 AM';
	moons = '|| 10:25 PM';
	tithi = '|| Panchami upto 05:46 AM, Feb 17';
	naksh = '|| Revati upto 08:57 PM';
	yog = '|| Shubha upto 01:50 AM, Feb 17';
	Karan = '|| Bava upto 04:38 PM';
	Var = '|| Mangalawara';
	break;
case '17-02-2021':
	sunr = '|| 06:58 AM';
	suns = '|| 06:13 PM';
	moonr = '|| 10:13 AM';
	moons = '|| 11:17 PM';
	tithi = '|| Shashthi upto Full Night';
	naksh = '|| Ashwini upto 11:49 PM';
	yog = '|| Shukla upto 02:39 AM, Feb 18';
	Karan = '|| Kaulava upto 06:59 PM';
	Var = '|| Budhawara';
	break;
case '18-02-2021':
	sunr = '|| 06:57 AM';
	suns = '|| 06:13 PM';
	moonr = '|| 10:44 AM';
	moons = '|| 12:11 AM, Feb 19';
	tithi = '|| Shashthi upto 08:17 AM';
	naksh = '|| Bharani upto 02:54 AM, Feb 19';
	yog = '|| Brahma upto 03:37 AM, Feb 19';
	Karan = '|| Taitila upto 08:17 AM';
	Var = '|| Guruwara';
	break;
case '19-02-2021':
	sunr = '|| 06:56 AM';
	suns = '|| 06:14 PM';
	moonr = '|| 11:17 AM';
	moons = '|| 01:05 AM, Feb 20';
	tithi = '|| Saptami upto 10:58 AM';
	naksh = '|| Krittika upto 05:58 AM, Feb 20';
	yog = '|| Indra upto 04:33 AM, Feb 20';
	Karan = '|| Vanija upto 10:58 AM';
	Var = '|| Shukrawara';
	break;
case '20-02-2021':
	sunr = '|| 06:55 AM';
	suns = '|| 06:15 PM';
	moonr = '|| 11:54 AM';
	moons = '|| 02:00 AM, Feb 21';
	tithi = '|| Ashtami upto 01:31 PM';
	naksh = '|| Rohini upto Full Night';
	yog = '|| Vaidhriti upto 05:16 AM, Feb 21';
	Karan = '|| Bava upto 01:31 PM';
	Var = '|| Shaniwara';
	break;
case '21-02-2021':
	sunr = '|| 06:54 AM';
	suns = '|| 06:16 PM';
	moonr = '|| 12:35 PM';
	moons = '|| 02:56 AM, Feb 22';
	tithi = '|| Navami upto 03:42 PM';
	naksh = '|| Rohini upto 08:44 AM';
	yog = '|| Vishkambha upto 05:35 AM, Feb 22';
	Karan = '|| Kaulava upto 03:42 PM';
	Var = '|| Raviwara';
	break;
case '22-02-2021':
	sunr = '|| 06:53 AM';
	suns = '|| 06:16 PM';
	moonr = '|| 01:22 PM';
	moons = '|| 03:50 AM, Feb 23';
	tithi = '|| Dashami upto 05:16 PM';
	naksh = '|| Mrigashirsha upto 10:58 AM';
	yog = '|| Priti upto 05:24 AM, Feb 23';
	Karan = '|| Garaja upto 05:16 PM';
	Var = '|| Somawara';
	break;
case '23-02-2021':
	sunr = '|| 06:52 AM';
	suns = '|| 06:17 PM';
	moonr = '|| 02:15 PM';
	moons = '|| 04:43 AM, Feb 24';
	tithi = '|| Ekadashi upto 06:05 PM';
	naksh = '|| Ardra upto 12:31 PM';
	yog = '|| Ayushman upto 04:35 AM, Feb 24';
	Karan = '|| Vishti upto 06:05 PM';
	Var = '|| Mangalawara';
	break;
case '24-02-2021':
	sunr = '|| 06:51 AM';
	suns = '|| 06:18 PM';
	moonr = '|| 03:13 PM';
	moons = '|| 05:32 AM, Feb 25';
	tithi = '|| Dwadashi upto 06:05 PM';
	naksh = '|| Punarvasu upto 01:17 PM';
	yog = '|| Saubhagya upto 03:10 AM, Feb 25';
	Karan = '|| Balava upto 06:05 PM';
	Var = '|| Budhawara';
	break;
case '25-02-2021':
	sunr = '|| 06:50 AM';
	suns = '|| 06:18 PM';
	moonr = '|| 04:15 PM';
	moons = '|| 06:18 AM, Feb 26';
	tithi = '|| Trayodashi upto 05:18 PM';
	naksh = '|| Pushya upto 01:17 PM';
	yog = '|| Shobhana upto 01:08 AM, Feb 26';
	Karan = '|| Taitila upto 05:18 PM';
	Var = '|| Guruwara';
	break;
case '26-02-2021':
	sunr = '|| 06:49 AM';
	suns = '|| 06:19 PM';
	moonr = '|| 05:20 PM';
	moons = '|| No Moonset';
	tithi = '|| Chaturdashi upto 03:49 PM';
	naksh = '|| Ashlesha upto 12:35 PM';
	yog = '|| Atiganda upto 10:36 PM';
	Karan = '|| Vanija upto 03:49 PM';
	Var = '|| Shukrawara';
	break;
case '27-02-2021':
	sunr = '|| 06:48 AM';
	suns = '|| 06:20 PM';
	moonr = '|| 06:25 PM';
	moons = '|| 06:59 AM';
	tithi = '|| Purnima upto 01:46 PM';
	naksh = '|| Magha upto 11:18 AM';
	yog = '|| Sukarman upto 07:38 PM';
	Karan = '|| Bava upto 01:46 PM';
	Var = '|| Shaniwara';
	break;
case '28-02-2021':
	sunr = '|| 06:47 AM';
	suns = '|| 06:20 PM';
	moonr = '|| 07:30 PM';
	moons = '|| 07:38 AM';
	tithi = '|| Pratipada upto 11:18 AM';
	naksh = '|| Purva Phalguni upto 09:36 AM';
	yog = '|| Dhriti upto 04:22 PM';
	Karan = '|| Kaulava upto 11:18 AM';
	Var = '|| Raviwara';
	break;
case '01-03-2021':
	sunr = '|| 06:46 AM';
	suns = '|| 06:21 PM';
	moonr = '|| 08:35 PM';
	moons = '|| 08:14 AM';
	tithi = '|| Dwitiya upto 08:35 AM';
	naksh = '|| Tritiya upto 05:46 AM, Mar 02';
	yog = '|| Uttara Phalguni upto 07:37 AM';
	Karan = '|| Hasta upto 05:32 AM, Mar 02';
	Var = '|| Somawara';
	break;
case '02-03-2021':
	sunr = '|| 06:45 AM';
	suns = '|| 06:22 PM';
	moonr = '|| 09:41 PM';
	moons = '|| 08:51 AM';
	tithi = '|| Chaturthi upto 02:59 AM, Mar 03';
	naksh = '|| Chitra upto 03:29 AM, Mar 03';
	yog = '|| Ganda upto 09:26 AM';
	Karan = '|| Vriddhi upto 05:59 AM, Mar 03';
	Var = '|| Mangalawara';
	break;
case '03-03-2021':
	sunr = '|| 06:44 AM';
	suns = '|| 06:22 PM';
	moonr = '|| 10:47 PM';
	moons = '|| 09:28 AM';
	tithi = '|| Panchami upto 12:21 AM, Mar 04';
	naksh = '|| Swati upto 01:36 AM, Mar 04';
	yog = '|| Dhruva upto 02:41 AM, Mar 04';
	Karan = '|| Kaulava upto 01:38 PM';
	Var = '|| Budhawara';
	break;
case '04-03-2021':
	sunr = '|| 06:43 AM';
	suns = '|| 06:23 PM';
	moonr = '|| 11:53 PM';
	moons = '|| 10:08 AM';
	tithi = '|| Shashthi upto 09:58 PM';
	naksh = '|| Vishakha upto 11:58 PM';
	yog = '|| Vyaghata upto 11:35 PM';
	Karan = '|| Garaja upto 11:08 AM';
	Var = '|| Guruwara';
	break;
case '05-03-2021':
	sunr = '|| 06:42 AM';
	suns = '|| 06:23 PM';
	moonr = '|| 01:00 AM, Mar 06';
	moons = '|| 10:51 AM';
	tithi = '|| Saptami upto 07:54 PM';
	naksh = '|| Anuradha upto 10:38 PM';
	yog = '|| Harshana upto 08:44 PM';
	Karan = '|| Vishti upto 08:54 AM';
	Var = '|| Shukrawara';
	break;
case '06-03-2021':
	sunr = '|| 06:41 AM';
	suns = '|| 06:24 PM';
	moonr = '|| 02:05 AM, Mar 07';
	moons = '|| 11:40 AM';
	tithi = '|| Ashtami upto 06:10 PM';
	naksh = '|| Jyeshtha upto 09:38 PM';
	yog = '|| Vajra upto 06:10 PM';
	Karan = '|| Balava upto 06:59 AM';
	Var = '|| Shaniwara';
	break;
case '07-03-2021':
	sunr = '|| 06:40 AM';
	suns = '|| 06:25 PM';
	moonr = '|| 03:06 AM, Mar 08';
	moons = '|| 12:33 PM';
	tithi = '|| Navami upto 04:47 PM';
	naksh = '|| Mula upto 08:59 PM';
	yog = '|| Siddhi upto 03:52 PM';
	Karan = '|| Garaja upto 04:47 PM';
	Var = '|| Raviwara';
	break;
case '08-03-2021':
	sunr = '|| 06:39 AM';
	suns = '|| 06:25 PM';
	moonr = '|| 04:01 AM, Mar 09';
	moons = '|| 01:32 PM';
	tithi = '|| Dashami upto 03:44 PM';
	naksh = '|| Purva Ashadha upto 08:40 PM';
	yog = '|| Vyatipata upto 01:51 PM';
	Karan = '|| Vishti upto 03:44 PM';
	Var = '|| Somawara';
	break;
case '09-03-2021':
	sunr = '|| 06:38 AM';
	suns = '|| 06:26 PM';
	moonr = '|| 04:49 AM, Mar 10';
	moons = '|| 02:32 PM';
	tithi = '|| Ekadashi upto 03:02 PM';
	naksh = '|| Uttara Ashadha upto 08:42 PM';
	yog = '|| Varigha upto 12:06 PM';
	Karan = '|| Balava upto 03:02 PM';
	Var = '|| Mangalawara';
	break;
case '10-03-2021':
	sunr = '|| 06:36 AM';
	suns = '|| 06:27 PM';
	moonr = '|| 05:32 AM, Mar 11';
	moons = '|| 03:34 PM';
	tithi = '|| Dwadashi upto 02:40 PM';
	naksh = '|| Shravana upto 09:03 PM';
	yog = '|| Parigha upto 10:37 AM';
	Karan = '|| Taitila upto 02:40 PM';
	Var = '|| Budhawara';
	break;
case '11-03-2021':
	sunr = '|| 06:35 AM';
	suns = '|| 06:27 PM';
	moonr = '|| 06:09 AM, Mar 12';
	moons = '|| 04:34 PM';
	tithi = '|| Trayodashi upto 02:39 PM';
	naksh = '|| Dhanishtha upto 09:45 PM';
	yog = '|| Shiva upto 09:25 AM';
	Karan = '|| Vanija upto 02:39 PM';
	Var = '|| Guruwara';
	break;
case '12-03-2021':
	sunr = '|| 06:34 AM';
	suns = '|| 06:28 PM';
	moonr = '|| No Moonrise';
	moons = '|| 05:32 PM';
	tithi = '|| Chaturdashi upto 03:02 PM';
	naksh = '|| Shatabhisha upto 10:51 PM';
	yog = '|| Siddha upto 08:30 AM';
	Karan = '|| Shakuni upto 03:02 PM';
	Var = '|| Shukrawara';
	break;
case '13-03-2021':
	sunr = '|| 06:33 AM';
	suns = '|| 06:28 PM';
	moonr = '|| 06:43 AM';
	moons = '|| 06:28 PM';
	tithi = '|| Amavasya upto 03:50 PM';
	naksh = '|| Purva Bhadrapada upto 12:22 AM, Mar 14';
	yog = '|| Sadhya upto 07:55 AM';
	Karan = '|| Nagava upto 03:50 PM';
	Var = '|| Shaniwara';
	break;
case '14-03-2021':
	sunr = '|| 06:32 AM';
	suns = '|| 06:29 PM';
	moonr = '|| 07:14 AM';
	moons = '|| 07:23 PM';
	tithi = '|| Pratipada upto 05:06 PM';
	naksh = '|| Uttara Bhadrapada upto 02:20 AM, Mar 15';
	yog = '|| Shubha upto 07:40 AM';
	Karan = '|| Bava upto 05:06 PM';
	Var = '|| Raviwara';
	break;
case '15-03-2021':
	sunr = '|| 06:31 AM';
	suns = '|| 06:29 PM';
	moonr = '|| 07:43 AM';
	moons = '|| 08:16 PM';
	tithi = '|| Dwitiya upto 06:49 PM';
	naksh = '|| Revati upto 04:44 AM, Mar 16';
	yog = '|| Shukla upto 07:47 AM';
	Karan = '|| Kaulava upto 06:49 PM';
	Var = '|| Somawara';
	break;
case '16-03-2021':
	sunr = '|| 06:30 AM';
	suns = '|| 06:30 PM';
	moonr = '|| 08:13 AM';
	moons = '|| 09:09 PM';
	tithi = '|| Tritiya upto 08:58 PM';
	naksh = '|| Ashwini upto Full Night';
	yog = '|| Brahma upto 08:15 AM';
	Karan = '|| Taitila upto 07:51 AM';
	Var = '|| Mangalawara';
	break;
case '17-03-2021':
	sunr = '|| 06:29 AM';
	suns = '|| 06:31 PM';
	moonr = '|| 08:43 AM';
	moons = '|| 10:02 PM';
	tithi = '|| Chaturthi upto 11:28 PM';
	naksh = '|| Ashwini upto 07:31 AM';
	yog = '|| Indra upto 09:00 AM';
	Karan = '|| Vanija upto 10:11 AM';
	Var = '|| Budhawara';
	break;
case '18-03-2021':
	sunr = '|| 06:27 AM';
	suns = '|| 06:31 PM';
	moonr = '|| 09:15 AM';
	moons = '|| 10:56 PM';
	tithi = '|| Panchami upto 02:09 AM, Mar 19';
	naksh = '|| Bharani upto 10:35 AM';
	yog = '|| Vaidhriti upto 09:58 AM';
	Karan = '|| Bava upto 12:48 PM';
	Var = '|| Guruwara';
	break;
case '19-03-2021':
	sunr = '|| 06:26 AM';
	suns = '|| 06:32 PM';
	moonr = '|| 09:50 AM';
	moons = '|| 11:51 PM';
	tithi = '|| Shashthi upto 04:48 AM, Mar 20';
	naksh = '|| Krittika upto 01:44 PM';
	yog = '|| Vishkambha upto 11:00 AM';
	Karan = '|| Kaulava upto 03:30 PM';
	Var = '|| Shukrawara';
	break;
case '20-03-2021':
	sunr = '|| 06:25 AM';
	suns = '|| 06:32 PM';
	moonr = '|| 10:29 AM';
	moons = '|| 12:45 AM, Mar 21';
	tithi = '|| Saptami upto Full Night';
	naksh = '|| Rohini upto 04:46 PM';
	yog = '|| Priti upto 11:58 AM';
	Karan = '|| Garaja upto 06:02 PM';
	Var = '|| Shaniwara';
	break;
case '21-03-2021':
	sunr = '|| 06:24 AM';
	suns = '|| 06:33 PM';
	moonr = '|| 11:13 AM';
	moons = '|| 01:40 AM, Mar 22';
	tithi = '|| Saptami upto 07:09 AM';
	naksh = '|| Mrigashirsha upto 07:25 PM';
	yog = '|| Ayushman upto 12:40 PM';
	Karan = '|| Vanija upto 07:09 AM';
	Var = '|| Raviwara';
	break;
case '22-03-2021':
	sunr = '|| 06:23 AM';
	suns = '|| 06:33 PM';
	moonr = '|| 12:02 PM';
	moons = '|| 02:33 AM, Mar 23';
	tithi = '|| Ashtami upto 09:00 AM';
	naksh = '|| Ardra upto 09:28 PM';
	yog = '|| Saubhagya upto 12:56 PM';
	Karan = '|| Bava upto 09:00 AM';
	Var = '|| Somawara';
	break;
case '23-03-2021':
	sunr = '|| 06:22 AM';
	suns = '|| 06:34 PM';
	moonr = '|| 12:57 PM';
	moons = '|| 03:22 AM, Mar 24';
	tithi = '|| Navami upto 10:07 AM';
	naksh = '|| Punarvasu upto 10:46 PM';
	yog = '|| Shobhana upto 12:39 PM';
	Karan = '|| Kaulava upto 10:07 AM';
	Var = '|| Mangalawara';
	break;
case '24-03-2021':
	sunr = '|| 06:20 AM';
	suns = '|| 06:35 PM';
	moonr = '|| 01:57 PM';
	moons = '|| 04:08 AM, Mar 25';
	tithi = '|| Dashami upto 10:23 AM';
	naksh = '|| Pushya upto 11:12 PM';
	yog = '|| Atiganda upto 11:42 AM';
	Karan = '|| Garaja upto 10:23 AM';
	Var = '|| Budhawara';
	break;
case '25-03-2021':
	sunr = '|| 06:19 AM';
	suns = '|| 06:35 PM';
	moonr = '|| 02:59 PM';
	moons = '|| 04:51 AM, Mar 26';
	tithi = '|| Ekadashi upto 09:47 AM';
	naksh = '|| Ashlesha upto 10:49 PM';
	yog = '|| Sukarman upto 10:04 AM';
	Karan = '|| Vishti upto 09:47 AM';
	Var = '|| Guruwara';
	break;
case '26-03-2021':
	sunr = '|| 06:18 AM';
	suns = '|| 06:36 PM';
	moonr = '|| 04:04 PM';
	moons = '|| 05:30 AM, Mar 27';
	tithi = '|| Dwadashi upto 08:21 AM';
	naksh = '|| Trayodashi upto 06:11 AM, Mar 27';
	yog = '|| Magha upto 09:40 PM';
	Karan = '|| Dhriti upto 07:46 AM';
	Var = '|| Shukrawara';
	break;
case '27-03-2021':
	sunr = '|| 06:17 AM';
	suns = '|| 06:36 PM';
	moonr = '|| 05:09 PM';
	moons = '|| 06:08 AM, Mar 28';
	tithi = '|| Chaturdashi upto 03:27 AM, Mar 28';
	naksh = '|| Purva Phalguni upto 07:52 PM';
	yog = '|| Ganda upto 01:32 AM, Mar 28';
	Karan = '|| Garaja upto 04:53 PM';
	Var = '|| Shaniwara';
	break;
case '28-03-2021':
	sunr = '|| 06:16 AM';
	suns = '|| 06:37 PM';
	moonr = '|| 06:15 PM';
	moons = '|| No Moonset';
	tithi = '|| Purnima upto 12:17 AM, Mar 29';
	naksh = '|| Uttara Phalguni upto 05:36 PM';
	yog = '|| Vriddhi upto 09:50 PM';
	Karan = '|| Vishti upto 01:54 PM';
	Var = '|| Raviwara';
	break;
case '29-03-2021':
	sunr = '|| 06:15 AM';
	suns = '|| 06:37 PM';
	moonr = '|| 07:22 PM';
	moons = '|| 06:45 AM';
	tithi = '|| Pratipada upto 08:54 PM';
	naksh = '|| Hasta upto 03:02 PM';
	yog = '|| Dhruva upto 05:54 PM';
	Karan = '|| Balava upto 10:37 AM';
	Var = '|| Somawara';
	break;
case '30-03-2021':
	sunr = '|| 06:13 AM';
	suns = '|| 06:38 PM';
	moonr = '|| 08:30 PM';
	moons = '|| 07:22 AM';
	tithi = '|| Dwitiya upto 05:27 PM';
	naksh = '|| Chitra upto 12:22 PM';
	yog = '|| Vyaghata upto 01:55 PM';
	Karan = '|| Taitila upto 07:10 AM';
	Var = '|| Mangalawara';
	break;
case '31-03-2021':
	sunr = '|| 06:12 AM';
	suns = '|| 06:38 PM';
	moonr = '|| 09:39 PM';
	moons = '|| 08:02 AM';
	tithi = '|| Tritiya upto 02:06 PM';
	naksh = '|| Swati upto 09:45 AM';
	yog = '|| Harshana upto 09:59 AM';
	Karan = '|| Vishti upto 02:06 PM';
	Var = '|| Budhawara';
	break;
case '01-04-2021':
	sunr = '|| 06:11 AM';
	suns = '|| 06:39 PM';
	moonr = '|| 10:49 PM';
	moons = '|| 08:46 AM';
	tithi = '|| Chaturthi upto 10:59 AM';
	naksh = '|| Vishakha upto 07:22 AM';
	yog = '|| Anuradha upto 05:19 AM, Apr 02';
	Karan = '|| Vajra upto 06:14 AM';
	Var = '|| Guruwara';
	break;
case '02-04-2021':
	sunr = '|| 06:10 AM';
	suns = '|| 06:40 PM';
	moonr = '|| 11:57 PM';
	moons = '|| 09:34 AM';
	tithi = '|| Panchami upto 08:15 AM';
	naksh = '|| Shashthi upto 05:58 AM, Apr 03';
	yog = '|| Jyeshtha upto 03:44 AM, Apr 03';
	Karan = '|| Vyatipata upto 11:40 PM';
	Var = '|| Shukrawara';
	break;
case '03-04-2021':
	sunr = '|| 06:09 AM';
	suns = '|| 06:40 PM';
	moonr = '|| 01:01 AM, Apr 04';
	moons = '|| 10:27 AM';
	tithi = '|| Saptami upto 04:12 AM, Apr 04';
	naksh = '|| Mula upto 02:39 AM, Apr 04';
	yog = '|| Varigha upto 08:59 PM';
	Karan = '|| Vishti upto 05:01 PM';
	Var = '|| Shaniwara';
	break;
case '04-04-2021':
	sunr = '|| 06:08 AM';
	suns = '|| 06:41 PM';
	moonr = '|| 01:58 AM, Apr 05';
	moons = '|| 11:25 AM';
	tithi = '|| Ashtami upto 02:59 AM, Apr 05';
	naksh = '|| Purva Ashadha upto 02:06 AM, Apr 05';
	yog = '|| Parigha upto 06:43 PM';
	Karan = '|| Balava upto 03:32 PM';
	Var = '|| Raviwara';
	break;
case '05-04-2021':
	sunr = '|| 06:07 AM';
	suns = '|| 06:41 PM';
	moonr = '|| 02:49 AM, Apr 06';
	moons = '|| 12:26 PM';
	tithi = '|| Navami upto 02:18 AM, Apr 06';
	naksh = '|| Uttara Ashadha upto 02:05 AM, Apr 06';
	yog = '|| Shiva upto 04:54 PM';
	Karan = '|| Taitila upto 02:35 PM';
	Var = '|| Somawara';
	break;
case '06-04-2021':
	sunr = '|| 06:05 AM';
	suns = '|| 06:42 PM';
	moonr = '|| 03:33 AM, Apr 07';
	moons = '|| 01:28 PM';
	tithi = '|| Dashami upto 02:09 AM, Apr 07';
	naksh = '|| Shravana upto 02:35 AM, Apr 07';
	yog = '|| Siddha upto 03:30 PM';
	Karan = '|| Vanija upto 02:10 PM';
	Var = '|| Mangalawara';
	break;
case '07-04-2021':
	sunr = '|| 06:04 AM';
	suns = '|| 06:42 PM';
	moonr = '|| 04:11 AM, Apr 08';
	moons = '|| 02:28 PM';
	tithi = '|| Ekadashi upto 02:28 AM, Apr 08';
	naksh = '|| Dhanishtha upto 03:33 AM, Apr 08';
	yog = '|| Sadhya upto 02:30 PM';
	Karan = '|| Bava upto 02:15 PM';
	Var = '|| Budhawara';
	break;
case '08-04-2021':
	sunr = '|| 06:03 AM';
	suns = '|| 06:43 PM';
	moonr = '|| 04:45 AM, Apr 09';
	moons = '|| 03:26 PM';
	tithi = '|| Dwadashi upto 03:15 AM, Apr 09';
	naksh = '|| Shatabhisha upto 04:58 AM, Apr 09';
	yog = '|| Shubha upto 01:52 PM';
	Karan = '|| Kaulava upto 02:48 PM';
	Var = '|| Guruwara';
	break;
case '09-04-2021':
	sunr = '|| 06:02 AM';
	suns = '|| 06:43 PM';
	moonr = '|| 05:16 AM, Apr 10';
	moons = '|| 04:22 PM';
	tithi = '|| Trayodashi upto 04:27 AM, Apr 10';
	naksh = '|| Purva Bhadrapada upto Full Night';
	yog = '|| Shukla upto 01:34 PM';
	Karan = '|| Garaja upto 03:48 PM';
	Var = '|| Shukrawara';
	break;
case '10-04-2021':
	sunr = '|| 06:01 AM';
	suns = '|| 06:44 PM';
	moonr = '|| 05:45 AM, Apr 11';
	moons = '|| 05:16 PM';
	tithi = '|| Chaturdashi upto Full Night';
	naksh = '|| Purva Bhadrapada upto 06:46 AM';
	yog = '|| Brahma upto 01:35 PM';
	Karan = '|| Vishti upto 05:12 PM';
	Var = '|| Shaniwara';
	break;
case '11-04-2021':
	sunr = '|| 06:00 AM';
	suns = '|| 06:45 PM';
	moonr = '|| No Moonrise';
	moons = '|| 06:10 PM';
	tithi = '|| Chaturdashi upto 06:03 AM';
	naksh = '|| Uttara Bhadrapada upto 08:58 AM';
	yog = '|| Indra upto 01:53 PM';
	Karan = '|| Shakuni upto 06:03 AM';
	Var = '|| Raviwara';
	break;
case '12-04-2021':
	sunr = '|| 05:59 AM';
	suns = '|| 06:45 PM';
	moonr = '|| 06:14 AM';
	moons = '|| 07:02 PM';
	tithi = '|| Amavasya upto 08:00 AM';
	naksh = '|| Revati upto 11:30 AM';
	yog = '|| Vaidhriti upto 02:28 PM';
	Karan = '|| Nagava upto 08:00 AM';
	Var = '|| Somawara';
	break;
case '13-04-2021':
	sunr = '|| 05:58 AM';
	suns = '|| 06:46 PM';
	moonr = '|| 06:44 AM';
	moons = '|| 07:55 PM';
	tithi = '|| Pratipada upto 10:16 AM';
	naksh = '|| Ashwini upto 02:20 PM';
	yog = '|| Vishkambha upto 03:17 PM';
	Karan = '|| Bava upto 10:16 AM';
	Var = '|| Mangalawara';
	break;
case '14-04-2021':
	sunr = '|| 05:57 AM';
	suns = '|| 06:46 PM';
	moonr = '|| 07:15 AM';
	moons = '|| 08:49 PM';
	tithi = '|| Dwitiya upto 12:47 PM';
	naksh = '|| Bharani upto 05:23 PM';
	yog = '|| Priti upto 04:16 PM';
	Karan = '|| Kaulava upto 12:47 PM';
	Var = '|| Budhawara';
	break;
case '15-04-2021':
	sunr = '|| 05:56 AM';
	suns = '|| 06:47 PM';
	moonr = '|| 07:49 AM';
	moons = '|| 09:44 PM';
	tithi = '|| Tritiya upto 03:27 PM';
	naksh = '|| Krittika upto 08:33 PM';
	yog = '|| Ayushman upto 05:20 PM';
	Karan = '|| Garaja upto 03:27 PM';
	Var = '|| Guruwara';
	break;
case '16-04-2021':
	sunr = '|| 05:55 AM';
	suns = '|| 06:47 PM';
	moonr = '|| 08:26 AM';
	moons = '|| 10:38 PM';
	tithi = '|| Chaturthi upto 06:05 PM';
	naksh = '|| Rohini upto 11:40 PM';
	yog = '|| Saubhagya upto 06:24 PM';
	Karan = '|| Vishti upto 06:05 PM';
	Var = '|| Shukrawara';
	break;
case '17-04-2021':
	sunr = '|| 05:54 AM';
	suns = '|| 06:48 PM';
	moonr = '|| 09:08 AM';
	moons = '|| 11:33 PM';
	tithi = '|| Panchami upto 08:32 PM';
	naksh = '|| Mrigashirsha upto 02:34 AM, Apr 18';
	yog = '|| Shobhana upto 07:19 PM';
	Karan = '|| Bava upto 07:21 AM';
	Var = '|| Shaniwara';
	break;
case '18-04-2021':
	sunr = '|| 05:53 AM';
	suns = '|| 06:49 PM';
	moonr = '|| 09:55 AM';
	moons = '|| 12:26 AM, Apr 19';
	tithi = '|| Shashthi upto 10:34 PM';
	naksh = '|| Ardra upto 05:02 AM, Apr 19';
	yog = '|| Atiganda upto 07:56 PM';
	Karan = '|| Kaulava upto 09:37 AM';
	Var = '|| Raviwara';
	break;
case '19-04-2021':
	sunr = '|| 05:52 AM';
	suns = '|| 06:49 PM';
	moonr = '|| 10:47 AM';
	moons = '|| 01:15 AM, Apr 20';
	tithi = '|| Saptami upto 12:01 AM, Apr 20';
	naksh = '|| Punarvasu upto Full Night';
	yog = '|| Sukarman upto 08:07 PM';
	Karan = '|| Garaja upto 11:23 AM';
	Var = '|| Somawara';
	break;
case '20-04-2021':
	sunr = '|| 05:51 AM';
	suns = '|| 06:50 PM';
	moonr = '|| 11:43 AM';
	moons = '|| 02:02 AM, Apr 21';
	tithi = '|| Ashtami upto 12:43 AM, Apr 21';
	naksh = '|| Punarvasu upto 06:53 AM';
	yog = '|| Dhriti upto 07:44 PM';
	Karan = '|| Vishti upto 12:28 PM';
	Var = '|| Mangalawara';
	break;
case '21-04-2021':
	sunr = '|| 05:50 AM';
	suns = '|| 06:50 PM';
	moonr = '|| 12:43 PM';
	moons = '|| 02:44 AM, Apr 22';
	tithi = '|| Navami upto 12:35 AM, Apr 22';
	naksh = '|| Pushya upto 07:59 AM';
	yog = '|| Shula upto 06:43 PM';
	Karan = '|| Balava upto 12:45 PM';
	Var = '|| Budhawara';
	break;
case '22-04-2021':
	sunr = '|| 05:49 AM';
	suns = '|| 06:51 PM';
	moonr = '|| 01:45 PM';
	moons = '|| 03:24 AM, Apr 23';
	tithi = '|| Dashami upto 11:35 PM';
	naksh = '|| Ashlesha upto 08:15 AM';
	yog = '|| Ganda upto 05:02 PM';
	Karan = '|| Taitila upto 12:11 PM';
	Var = '|| Guruwara';
	break;
case '23-04-2021':
	sunr = '|| 05:48 AM';
	suns = '|| 06:52 PM';
	moonr = '|| 02:48 PM';
	moons = '|| 04:01 AM, Apr 24';
	tithi = '|| Ekadashi upto 09:47 PM';
	naksh = '|| Magha upto 07:42 AM';
	yog = '|| Vriddhi upto 02:40 PM';
	Karan = '|| Vanija upto 10:47 AM';
	Var = '|| Shukrawara';
	break;
case '24-04-2021':
	sunr = '|| 05:47 AM';
	suns = '|| 06:52 PM';
	moonr = '|| 03:53 PM';
	moons = '|| 04:38 AM, Apr 25';
	tithi = '|| Dwadashi upto 07:17 PM';
	naksh = '|| Purva Phalguni upto 06:22 AM';
	yog = '|| Uttara Phalguni upto 04:24 AM, Apr 25';
	Karan = '|| Dhruva upto 11:43 AM';
	Var = '|| Shaniwara';
	break;
case '25-04-2021':
	sunr = '|| 05:46 AM';
	suns = '|| 06:53 PM';
	moonr = '|| 04:58 PM';
	moons = '|| 05:14 AM, Apr 26';
	tithi = '|| Trayodashi upto 04:12 PM';
	naksh = '|| Hasta upto 01:55 AM, Apr 26';
	yog = '|| Vyaghata upto 08:15 AM';
	Karan = '|| Harshana upto 04:23 AM, Apr 26';
	Var = '|| Raviwara';
	break;
case '26-04-2021':
	sunr = '|| 05:45 AM';
	suns = '|| 06:53 PM';
	moonr = '|| 06:06 PM';
	moons = '|| No Moonset';
	tithi = '|| Chaturdashi upto 12:44 PM';
	naksh = '|| Chitra upto 11:06 PM';
	yog = '|| Vajra upto 12:17 AM, Apr 27';
	Karan = '|| Vanija upto 12:44 PM';
	Var = '|| Somawara';
	break;
case '27-04-2021':
	sunr = '|| 05:44 AM';
	suns = '|| 06:54 PM';
	moonr = '|| 07:16 PM';
	moons = '|| 05:53 AM';
	tithi = '|| Purnima upto 09:01 AM';
	naksh = '|| Pratipada upto 05:14 AM, Apr 28';
	yog = '|| Swati upto 08:08 PM';
	Karan = '|| Siddhi upto 08:03 PM';
	Var = '|| Mangalawara';
	break;
case '28-04-2021':
	sunr = '|| 05:43 AM';
	suns = '|| 06:55 PM';
	moonr = '|| 08:28 PM';
	moons = '|| 06:35 AM';
	tithi = '|| Dwitiya upto 01:34 AM, Apr 29';
	naksh = '|| Vishakha upto 05:13 PM';
	yog = '|| Vyatipata upto 03:51 PM';
	Karan = '|| Taitila upto 03:22 PM';
	Var = '|| Budhawara';
	break;
case '29-04-2021':
	sunr = '|| 05:42 AM';
	suns = '|| 06:55 PM';
	moonr = '|| 09:39 PM';
	moons = '|| 07:22 AM';
	tithi = '|| Tritiya upto 10:09 PM';
	naksh = '|| Anuradha upto 02:29 PM';
	yog = '|| Varigha upto 11:49 AM';
	Karan = '|| Vanija upto 11:49 AM';
	Var = '|| Guruwara';
	break;
case '30-04-2021':
	sunr = '|| 05:41 AM';
	suns = '|| 06:56 PM';
	moonr = '|| 10:48 PM';
	moons = '|| 08:15 AM';
	tithi = '|| Chaturthi upto 07:09 PM';
	naksh = '|| Jyeshtha upto 12:08 PM';
	yog = '|| Parigha upto 08:04 AM';
	Karan = '|| Shiva upto 04:42 AM, May 01';
	Var = '|| Shukrawara';
	break;
case '01-05-2021':
	sunr = '|| 05:40 AM';
	suns = '|| 06:56 PM';
	moonr = '|| 11:51 PM';
	moons = '|| 09:14 AM';
	tithi = '|| Panchami upto 04:41 PM';
	naksh = '|| Mula upto 10:16 AM';
	yog = '|| Siddha upto 01:48 AM, May 02';
	Karan = '|| Kaulava upto 05:51 AM';
	Var = '|| Shaniwara';
	break;
case '02-05-2021':
	sunr = '|| 05:40 AM';
	suns = '|| 06:57 PM';
	moonr = '|| 12:46 AM, May 03';
	moons = '|| 10:16 AM';
	tithi = '|| Shashthi upto 02:50 PM';
	naksh = '|| Purva Ashadha upto 08:59 AM';
	yog = '|| Sadhya upto 11:26 PM';
	Karan = '|| Vanija upto 02:50 PM';
	Var = '|| Raviwara';
	break;
case '03-05-2021':
	sunr = '|| 05:39 AM';
	suns = '|| 06:58 PM';
	moonr = '|| 01:33 AM, May 04';
	moons = '|| 11:19 AM';
	tithi = '|| Saptami upto 01:39 PM';
	naksh = '|| Uttara Ashadha upto 08:22 AM';
	yog = '|| Shubha upto 09:37 PM';
	Karan = '|| Bava upto 01:39 PM';
	Var = '|| Somawara';
	break;
case '04-05-2021':
	sunr = '|| 05:38 AM';
	suns = '|| 06:58 PM';
	moonr = '|| 02:13 AM, May 05';
	moons = '|| 12:21 PM';
	tithi = '|| Ashtami upto 01:10 PM';
	naksh = '|| Shravana upto 08:26 AM';
	yog = '|| Shukla upto 08:22 PM';
	Karan = '|| Kaulava upto 01:10 PM';
	Var = '|| Mangalawara';
	break;
case '05-05-2021':
	sunr = '|| 05:37 AM';
	suns = '|| 06:59 PM';
	moonr = '|| 02:48 AM, May 06';
	moons = '|| 01:21 PM';
	tithi = '|| Navami upto 01:21 PM';
	naksh = '|| Dhanishtha upto 09:11 AM';
	yog = '|| Brahma upto 07:38 PM';
	Karan = '|| Garaja upto 01:21 PM';
	Var = '|| Budhawara';
	break;
case '06-05-2021':
	sunr = '|| 05:36 AM';
	suns = '|| 06:59 PM';
	moonr = '|| 03:20 AM, May 07';
	moons = '|| 02:18 PM';
	tithi = '|| Dashami upto 02:10 PM';
	naksh = '|| Shatabhisha upto 10:32 AM';
	yog = '|| Indra upto 07:22 PM';
	Karan = '|| Vishti upto 02:10 PM';
	Var = '|| Guruwara';
	break;
case '07-05-2021':
	sunr = '|| 05:36 AM';
	suns = '|| 07:00 PM';
	moonr = '|| 03:49 AM, May 08';
	moons = '|| 03:12 PM';
	tithi = '|| Ekadashi upto 03:32 PM';
	naksh = '|| Purva Bhadrapada upto 12:26 PM';
	yog = '|| Vaidhriti upto 07:31 PM';
	Karan = '|| Balava upto 03:32 PM';
	Var = '|| Shukrawara';
	break;
case '08-05-2021':
	sunr = '|| 05:35 AM';
	suns = '|| 07:01 PM';
	moonr = '|| 04:18 AM, May 09';
	moons = '|| 04:05 PM';
	tithi = '|| Dwadashi upto 05:20 PM';
	naksh = '|| Uttara Bhadrapada upto 02:47 PM';
	yog = '|| Vishkambha upto 08:00 PM';
	Karan = '|| Taitila upto 05:20 PM';
	Var = '|| Shaniwara';
	break;
case '09-05-2021':
	sunr = '|| 05:34 AM';
	suns = '|| 07:01 PM';
	moonr = '|| 04:47 AM, May 10';
	moons = '|| 04:58 PM';
	tithi = '|| Trayodashi upto 07:30 PM';
	naksh = '|| Revati upto 05:29 PM';
	yog = '|| Priti upto 08:44 PM';
	Karan = '|| Garaja upto 06:23 AM';
	Var = '|| Raviwara';
	break;
case '10-05-2021':
	sunr = '|| 05:34 AM';
	suns = '|| 07:02 PM';
	moonr = '|| 05:17 AM, May 11';
	moons = '|| 05:50 PM';
	tithi = '|| Chaturdashi upto 09:55 PM';
	naksh = '|| Ashwini upto 08:26 PM';
	yog = '|| Ayushman upto 09:40 PM';
	Karan = '|| Vishti upto 08:41 AM';
	Var = '|| Somawara';
	break;
case '11-05-2021':
	sunr = '|| 05:33 AM';
	suns = '|| 07:02 PM';
	moonr = '|| No Moonrise';
	moons = '|| 06:44 PM';
	tithi = '|| Amavasya upto 12:29 AM, May 12';
	naksh = '|| Bharani upto 11:31 PM';
	yog = '|| Saubhagya upto 10:43 PM';
	Karan = '|| Chatushpada upto 11:11 AM';
	Var = '|| Mangalawara';
	break;
case '12-05-2021':
	sunr = '|| 05:32 AM';
	suns = '|| 07:03 PM';
	moonr = '|| 05:50 AM';
	moons = '|| 07:38 PM';
	tithi = '|| Pratipada upto 03:05 AM, May 13';
	naksh = '|| Krittika upto 02:40 AM, May 13';
	yog = '|| Shobhana upto 11:48 PM';
	Karan = '|| Kinstughna upto 01:47 PM';
	Var = '|| Budhawara';
	break;
case '13-05-2021':
	sunr = '|| 05:32 AM';
	suns = '|| 07:04 PM';
	moonr = '|| 06:26 AM';
	moons = '|| 08:33 PM';
	tithi = '|| Dwitiya upto Full Night';
	naksh = '|| Rohini upto Full Night';
	yog = '|| Atiganda upto 12:51 AM, May 14';
	Karan = '|| Balava upto 04:23 PM';
	Var = '|| Guruwara';
	break;
case '14-05-2021':
	sunr = '|| 05:31 AM';
	suns = '|| 07:04 PM';
	moonr = '|| 07:06 AM';
	moons = '|| 09:28 PM';
	tithi = '|| Dwitiya upto 05:38 AM';
	naksh = '|| Rohini upto 05:45 AM';
	yog = '|| Sukarman upto 01:47 AM, May 15';
	Karan = '|| Kaulava upto 05:38 AM';
	Var = '|| Shukrawara';
	break;
case '15-05-2021':
	sunr = '|| 05:30 AM';
	suns = '|| 07:05 PM';
	moonr = '|| 07:51 AM';
	moons = '|| 10:21 PM';
	tithi = '|| Tritiya upto 07:59 AM';
	naksh = '|| Mrigashirsha upto 08:39 AM';
	yog = '|| Dhriti upto 02:29 AM, May 16';
	Karan = '|| Garaja upto 07:59 AM';
	Var = '|| Shaniwara';
	break;
case '16-05-2021':
	sunr = '|| 05:30 AM';
	suns = '|| 07:06 PM';
	moonr = '|| 08:41 AM';
	moons = '|| 11:12 PM';
	tithi = '|| Chaturthi upto 10:00 AM';
	naksh = '|| Ardra upto 11:14 AM';
	yog = '|| Shula upto 02:52 AM, May 17';
	Karan = '|| Vishti upto 10:00 AM';
	Var = '|| Raviwara';
	break;
case '17-05-2021':
	sunr = '|| 05:29 AM';
	suns = '|| 07:06 PM';
	moonr = '|| 09:36 AM';
	moons = '|| 11:59 PM';
	tithi = '|| Panchami upto 11:34 AM';
	naksh = '|| Punarvasu upto 01:22 PM';
	yog = '|| Ganda upto 02:50 AM, May 18';
	Karan = '|| Balava upto 11:34 AM';
	Var = '|| Somawara';
	break;
case '18-05-2021':
	sunr = '|| 05:29 AM';
	suns = '|| 07:07 PM';
	moonr = '|| 10:33 AM';
	moons = '|| 12:42 AM, May 19';
	tithi = '|| Shashthi upto 12:32 PM';
	naksh = '|| Pushya upto 02:55 PM';
	yog = '|| Vriddhi upto 02:17 AM, May 19';
	Karan = '|| Taitila upto 12:32 PM';
	Var = '|| Mangalawara';
	break;
case '19-05-2021':
	sunr = '|| 05:28 AM';
	suns = '|| 07:07 PM';
	moonr = '|| 11:33 AM';
	moons = '|| 01:21 AM, May 20';
	tithi = '|| Saptami upto 12:50 PM';
	naksh = '|| Ashlesha upto 03:48 PM';
	yog = '|| Dhruva upto 01:10 AM, May 20';
	Karan = '|| Vanija upto 12:50 PM';
	Var = '|| Budhawara';
	break;
case '20-05-2021':
	sunr = '|| 05:28 AM';
	suns = '|| 07:08 PM';
	moonr = '|| 12:34 PM';
	moons = '|| 01:58 AM, May 21';
	tithi = '|| Ashtami upto 12:23 PM';
	naksh = '|| Magha upto 03:58 PM';
	yog = '|| Vyaghata upto 11:28 PM';
	Karan = '|| Bava upto 12:23 PM';
	Var = '|| Guruwara';
	break;
case '21-05-2021':
	sunr = '|| 05:27 AM';
	suns = '|| 07:09 PM';
	moonr = '|| 01:36 PM';
	moons = '|| 02:33 AM, May 22';
	tithi = '|| Navami upto 11:10 AM';
	naksh = '|| Purva Phalguni upto 03:23 PM';
	yog = '|| Harshana upto 09:10 PM';
	Karan = '|| Kaulava upto 11:10 AM';
	Var = '|| Shukrawara';
	break;
case '22-05-2021':
	sunr = '|| 05:27 AM';
	suns = '|| 07:09 PM';
	moonr = '|| 02:39 PM';
	moons = '|| 03:08 AM, May 23';
	tithi = '|| Dashami upto 09:15 AM';
	naksh = '|| Uttara Phalguni upto 02:06 PM';
	yog = '|| Vajra upto 06:18 PM';
	Karan = '|| Garaja upto 09:15 AM';
	Var = '|| Shaniwara';
	break;
case '23-05-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:10 PM';
	moonr = '|| 03:43 PM';
	moons = '|| 03:44 AM, May 24';
	tithi = '|| Ekadashi upto 06:42 AM';
	naksh = '|| Dwadashi upto 03:38 AM, May 24';
	yog = '|| Hasta upto 12:12 PM';
	Karan = '|| Siddhi upto 02:58 PM';
	Var = '|| Raviwara';
	break;
case '24-05-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:10 PM';
	moonr = '|| 04:51 PM';
	moons = '|| 04:24 AM, May 25';
	tithi = '|| Trayodashi upto 12:11 AM, May 25';
	naksh = '|| Chitra upto 09:49 AM';
	yog = '|| Vyatipata upto 11:14 AM';
	Karan = '|| Kaulava upto 01:57 PM';
	Var = '|| Somawara';
	break;
case '25-05-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:11 PM';
	moonr = '|| 06:01 PM';
	moons = '|| 05:08 AM, May 26';
	tithi = '|| Chaturdashi upto 08:29 PM';
	naksh = '|| Swati upto 07:06 AM';
	yog = '|| Vishakha upto 04:11 AM, May 26';
	Karan = '|| Varigha upto 07:13 AM';
	Var = '|| Mangalawara';
	break;
case '26-05-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:11 PM';
	moonr = '|| 07:13 PM';
	moons = '|| No Moonset';
	tithi = '|| Purnima upto 04:43 PM';
	naksh = '|| Anuradha upto 01:16 AM, May 27';
	yog = '|| Shiva upto 10:52 PM';
	Karan = '|| Vishti upto 06:36 AM';
	Var = '|| Budhawara';
	break;
case '27-05-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:12 PM';
	moonr = '|| 08:26 PM';
	moons = '|| 05:59 AM';
	tithi = '|| Pratipada upto 01:02 PM';
	naksh = '|| Jyeshtha upto 10:29 PM';
	yog = '|| Siddha upto 06:48 PM';
	Karan = '|| Kaulava upto 01:02 PM';
	Var = '|| Guruwara';
	break;
case '28-05-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:12 PM';
	moonr = '|| 09:34 PM';
	moons = '|| 06:56 AM';
	tithi = '|| Dwitiya upto 09:36 AM';
	naksh = '|| Mula upto 08:02 PM';
	yog = '|| Sadhya upto 02:58 PM';
	Karan = '|| Garaja upto 09:36 AM';
	Var = '|| Shukrawara';
	break;
case '29-05-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:13 PM';
	moonr = '|| 10:34 PM';
	moons = '|| 07:59 AM';
	tithi = '|| Tritiya upto 06:33 AM';
	naksh = '|| Chaturthi upto 04:03 AM, May 30';
	yog = '|| Purva Ashadha upto 06:04 PM';
	Karan = '|| Shubha upto 11:30 AM';
	Var = '|| Shaniwara';
	break;
case '30-05-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:14 PM';
	moonr = '|| 11:27 PM';
	moons = '|| 09:04 AM';
	tithi = '|| Panchami upto 02:12 AM, May 31';
	naksh = '|| Uttara Ashadha upto 04:42 PM';
	yog = '|| Shukla upto 08:31 AM';
	Karan = '|| Kaulava upto 03:02 PM';
	Var = '|| Raviwara';
	break;
case '31-05-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:14 PM';
	moonr = '|| 12:11 AM, Jun 01';
	moons = '|| 10:09 AM';
	tithi = '|| Shashthi upto 01:05 AM, Jun 01';
	naksh = '|| Shravana upto 04:02 PM';
	yog = '|| Brahma upto 06:04 AM';
	Karan = '|| Indra upto 04:14 AM, Jun 01';
	Var = '|| Somawara';
	break;
case '01-06-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:15 PM';
	moonr = '|| 12:49 AM, Jun 02';
	moons = '|| 11:12 AM';
	tithi = '|| Saptami upto 12:46 AM, Jun 02';
	naksh = '|| Dhanishtha upto 04:08 PM';
	yog = '|| Vaidhriti upto 03:02 AM, Jun 02';
	Karan = '|| Vishti upto 12:49 PM';
	Var = '|| Mangalawara';
	break;
case '02-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:15 PM';
	moonr = '|| 01:22 AM, Jun 03';
	moons = '|| 12:11 PM';
	tithi = '|| Ashtami upto 01:12 AM, Jun 03';
	naksh = '|| Shatabhisha upto 05:00 PM';
	yog = '|| Vishkambha upto 02:27 AM, Jun 03';
	Karan = '|| Balava upto 12:53 PM';
	Var = '|| Budhawara';
	break;
case '03-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:16 PM';
	moonr = '|| 01:52 AM, Jun 04';
	moons = '|| 01:07 PM';
	tithi = '|| Navami upto 02:22 AM, Jun 04';
	naksh = '|| Purva Bhadrapada upto 06:35 PM';
	yog = '|| Priti upto 02:24 AM, Jun 04';
	Karan = '|| Taitila upto 01:42 PM';
	Var = '|| Guruwara';
	break;
case '04-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:16 PM';
	moonr = '|| 02:21 AM, Jun 05';
	moons = '|| 02:01 PM';
	tithi = '|| Dashami upto 04:07 AM, Jun 05';
	naksh = '|| Uttara Bhadrapada upto 08:47 PM';
	yog = '|| Ayushman upto 02:50 AM, Jun 05';
	Karan = '|| Vanija upto 03:10 PM';
	Var = '|| Shukrawara';
	break;
case '05-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:17 PM';
	moonr = '|| 02:50 AM, Jun 06';
	moons = '|| 02:53 PM';
	tithi = '|| Ekadashi upto Full Night';
	naksh = '|| Revati upto 11:28 PM';
	yog = '|| Saubhagya upto 03:36 AM, Jun 06';
	Karan = '|| Bava upto 05:10 PM';
	Var = '|| Shaniwara';
	break;
case '06-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:17 PM';
	moonr = '|| 03:20 AM, Jun 07';
	moons = '|| 03:46 PM';
	tithi = '|| Ekadashi upto 06:19 AM';
	naksh = '|| Ashwini upto 02:28 AM, Jun 07';
	yog = '|| Shobhana upto 04:36 AM, Jun 07';
	Karan = '|| Balava upto 06:19 AM';
	Var = '|| Raviwara';
	break;
case '07-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:17 PM';
	moonr = '|| 03:51 AM, Jun 08';
	moons = '|| 04:39 PM';
	tithi = '|| Dwadashi upto 08:48 AM';
	naksh = '|| Bharani upto Full Night';
	yog = '|| Atiganda upto Full Night';
	Karan = '|| Taitila upto 08:48 AM';
	Var = '|| Somawara';
	break;
case '08-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:18 PM';
	moonr = '|| 04:26 AM, Jun 09';
	moons = '|| 05:33 PM';
	tithi = '|| Trayodashi upto 11:24 AM';
	naksh = '|| Bharani upto 05:36 AM';
	yog = '|| Atiganda upto 05:42 AM';
	Karan = '|| Vanija upto 11:24 AM';
	Var = '|| Mangalawara';
	break;
case '09-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:18 PM';
	moonr = '|| 05:05 AM, Jun 10';
	moons = '|| 06:28 PM';
	tithi = '|| Chaturdashi upto 01:57 PM';
	naksh = '|| Krittika upto 08:44 AM';
	yog = '|| Sukarman upto 06:48 AM';
	Karan = '|| Shakuni upto 01:57 PM';
	Var = '|| Budhawara';
	break;
case '10-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:19 PM';
	moonr = '|| No Moonrise';
	moons = '|| 07:23 PM';
	tithi = '|| Amavasya upto 04:22 PM';
	naksh = '|| Rohini upto 11:45 AM';
	yog = '|| Dhriti upto 07:49 AM';
	Karan = '|| Nagava upto 04:22 PM';
	Var = '|| Guruwara';
	break;
case '11-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:19 PM';
	moonr = '|| 05:49 AM';
	moons = '|| 08:17 PM';
	tithi = '|| Pratipada upto 06:30 PM';
	naksh = '|| Mrigashirsha upto 02:31 PM';
	yog = '|| Shula upto 08:39 AM';
	Karan = '|| Kinstughna upto 05:28 AM';
	Var = '|| Shukrawara';
	break;
case '12-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:19 PM';
	moonr = '|| 06:38 AM';
	moons = '|| 09:09 PM';
	tithi = '|| Dwitiya upto 08:17 PM';
	naksh = '|| Ardra upto 04:58 PM';
	yog = '|| Ganda upto 09:14 AM';
	Karan = '|| Balava upto 07:27 AM';
	Var = '|| Shaniwara';
	break;
case '13-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 07:31 AM';
	moons = '|| 09:57 PM';
	tithi = '|| Tritiya upto 09:40 PM';
	naksh = '|| Punarvasu upto 07:01 PM';
	yog = '|| Vriddhi upto 09:31 AM';
	Karan = '|| Taitila upto 09:02 AM';
	Var = '|| Raviwara';
	break;
case '14-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 08:28 AM';
	moons = '|| 10:41 PM';
	tithi = '|| Chaturthi upto 10:34 PM';
	naksh = '|| Pushya upto 08:37 PM';
	yog = '|| Dhruva upto 09:28 AM';
	Karan = '|| Vanija upto 10:10 AM';
	Var = '|| Somawara';
	break;
case '15-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 09:27 AM';
	moons = '|| 11:21 PM';
	tithi = '|| Panchami upto 10:56 PM';
	naksh = '|| Ashlesha upto 09:42 PM';
	yog = '|| Vyaghata upto 09:01 AM';
	Karan = '|| Bava upto 10:49 AM';
	Var = '|| Mangalawara';
	break;
case '16-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 10:26 AM';
	moons = '|| 11:58 PM';
	tithi = '|| Shashthi upto 10:45 PM';
	naksh = '|| Magha upto 10:15 PM';
	yog = '|| Harshana upto 08:09 AM';
	Karan = '|| Kaulava upto 10:55 AM';
	Var = '|| Budhawara';
	break;
case '17-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 11:26 AM';
	moons = '|| 12:33 AM, Jun 18';
	tithi = '|| Saptami upto 09:59 PM';
	naksh = '|| Purva Phalguni upto 10:13 PM';
	yog = '|| Vajra upto 06:50 AM';
	Karan = '|| Siddhi upto 05:03 AM, Jun 18';
	Var = '|| Guruwara';
	break;
case '18-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 12:27 PM';
	moons = '|| 01:06 AM, Jun 19';
	tithi = '|| Ashtami upto 08:39 PM';
	naksh = '|| Uttara Phalguni upto 09:38 PM';
	yog = '|| Vyatipata upto 02:47 AM, Jun 19';
	Karan = '|| Vishti upto 09:23 AM';
	Var = '|| Shukrawara';
	break;
case '19-06-2021':
	sunr = '|| 05:23 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 01:29 PM';
	moons = '|| 01:41 AM, Jun 20';
	tithi = '|| Navami upto 06:45 PM';
	naksh = '|| Hasta upto 08:29 PM';
	yog = '|| Varigha upto 12:06 AM, Jun 20';
	Karan = '|| Balava upto 07:46 AM';
	Var = '|| Shaniwara';
	break;
case '20-06-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 02:33 PM';
	moons = '|| 02:17 AM, Jun 21';
	tithi = '|| Dashami upto 04:21 PM';
	naksh = '|| Chitra upto 06:50 PM';
	yog = '|| Parigha upto 09:00 PM';
	Karan = '|| Taitila upto 05:36 AM';
	Var = '|| Raviwara';
	break;
case '21-06-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 03:39 PM';
	moons = '|| 02:58 AM, Jun 22';
	tithi = '|| Ekadashi upto 01:31 PM';
	naksh = '|| Swati upto 04:46 PM';
	yog = '|| Shiva upto 05:34 PM';
	Karan = '|| Vishti upto 01:31 PM';
	Var = '|| Somawara';
	break;
case '22-06-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 04:49 PM';
	moons = '|| 03:44 AM, Jun 23';
	tithi = '|| Dwadashi upto 10:22 AM';
	naksh = '|| Vishakha upto 02:23 PM';
	yog = '|| Siddha upto 01:52 PM';
	Karan = '|| Balava upto 10:22 AM';
	Var = '|| Mangalawara';
	break;
case '23-06-2021':
	sunr = '|| 05:24 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 06:00 PM';
	moons = '|| 04:37 AM, Jun 24';
	tithi = '|| Trayodashi upto 06:59 AM';
	naksh = '|| Chaturdashi upto 03:32 AM, Jun 24';
	yog = '|| Anuradha upto 11:48 AM';
	Karan = '|| Sadhya upto 10:01 AM';
	Var = '|| Budhawara';
	break;
case '24-06-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 07:11 PM';
	moons = '|| No Moonset';
	tithi = '|| Purnima upto 12:09 AM, Jun 25';
	naksh = '|| Jyeshtha upto 09:11 AM';
	yog = '|| Shubha upto 06:06 AM';
	Karan = '|| Shukla upto 02:16 AM, Jun 25';
	Var = '|| Guruwara';
	break;
case '25-06-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 08:16 PM';
	moons = '|| 05:37 AM';
	tithi = '|| Pratipada upto 08:59 PM';
	naksh = '|| Mula upto 06:40 AM';
	yog = '|| Purva Ashadha upto 04:26 AM, Jun 26';
	Karan = '|| Brahma upto 10:38 PM';
	Var = '|| Shukrawara';
	break;
case '26-06-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 09:14 PM';
	moons = '|| 06:43 AM';
	tithi = '|| Dwitiya upto 06:11 PM';
	naksh = '|| Uttara Ashadha upto 02:36 AM, Jun 27';
	yog = '|| Indra upto 07:19 PM';
	Karan = '|| Taitila upto 07:31 AM';
	Var = '|| Shaniwara';
	break;
case '27-06-2021':
	sunr = '|| 05:25 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 10:03 PM';
	moons = '|| 07:50 AM';
	tithi = '|| Tritiya upto 03:54 PM';
	naksh = '|| Shravana upto 01:22 AM, Jun 28';
	yog = '|| Vaidhriti upto 04:26 PM';
	Karan = '|| Vishti upto 03:54 PM';
	Var = '|| Raviwara';
	break;
case '28-06-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 10:45 PM';
	moons = '|| 08:56 AM';
	tithi = '|| Chaturthi upto 02:16 PM';
	naksh = '|| Dhanishtha upto 12:49 AM, Jun 29';
	yog = '|| Vishkambha upto 02:05 PM';
	Karan = '|| Balava upto 02:16 PM';
	Var = '|| Somawara';
	break;
case '29-06-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 11:21 PM';
	moons = '|| 09:58 AM';
	tithi = '|| Panchami upto 01:22 PM';
	naksh = '|| Shatabhisha upto 01:02 AM, Jun 30';
	yog = '|| Priti upto 12:21 PM';
	Karan = '|| Taitila upto 01:22 PM';
	Var = '|| Mangalawara';
	break;
case '30-06-2021':
	sunr = '|| 05:26 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 11:53 PM';
	moons = '|| 10:57 AM';
	tithi = '|| Shashthi upto 01:18 PM';
	naksh = '|| Purva Bhadrapada upto 02:03 AM, Jul 01';
	yog = '|| Ayushman upto 11:15 AM';
	Karan = '|| Vanija upto 01:18 PM';
	Var = '|| Budhawara';
	break;
case '01-07-2021':
	sunr = '|| 05:27 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 12:23 AM, Jul 02';
	moons = '|| 11:53 AM';
	tithi = '|| Saptami upto 02:01 PM';
	naksh = '|| Uttara Bhadrapada upto 03:49 AM, Jul 02';
	yog = '|| Saubhagya upto 10:47 AM';
	Karan = '|| Bava upto 02:01 PM';
	Var = '|| Guruwara';
	break;
case '02-07-2021':
	sunr = '|| 05:27 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 12:52 AM, Jul 03';
	moons = '|| 12:47 PM';
	tithi = '|| Ashtami upto 03:28 PM';
	naksh = '|| Revati upto Full Night';
	yog = '|| Shobhana upto 10:54 AM';
	Karan = '|| Kaulava upto 03:28 PM';
	Var = '|| Shukrawara';
	break;
case '03-07-2021':
	sunr = '|| 05:28 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 01:21 AM, Jul 04';
	moons = '|| 01:40 PM';
	tithi = '|| Navami upto 05:30 PM';
	naksh = '|| Revati upto 06:14 AM';
	yog = '|| Atiganda upto 11:29 AM';
	Karan = '|| Garaja upto 05:30 PM';
	Var = '|| Shaniwara';
	break;
case '04-07-2021':
	sunr = '|| 05:28 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 01:52 AM, Jul 05';
	moons = '|| 02:33 PM';
	tithi = '|| Dashami upto 07:55 PM';
	naksh = '|| Ashwini upto 09:06 AM';
	yog = '|| Sukarman upto 12:25 PM';
	Karan = '|| Vanija upto 06:40 AM';
	Var = '|| Raviwara';
	break;
case '05-07-2021':
	sunr = '|| 05:28 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 02:26 AM, Jul 06';
	moons = '|| 03:26 PM';
	tithi = '|| Ekadashi upto 10:30 PM';
	naksh = '|| Bharani upto 12:12 PM';
	yog = '|| Dhriti upto 01:30 PM';
	Karan = '|| Bava upto 09:12 AM';
	Var = '|| Somawara';
	break;
case '06-07-2021':
	sunr = '|| 05:29 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 03:03 AM, Jul 07';
	moons = '|| 04:21 PM';
	tithi = '|| Dwadashi upto 01:02 AM, Jul 07';
	naksh = '|| Krittika upto 03:21 PM';
	yog = '|| Shula upto 02:37 PM';
	Karan = '|| Kaulava upto 11:47 AM';
	Var = '|| Mangalawara';
	break;
case '07-07-2021':
	sunr = '|| 05:29 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 03:45 AM, Jul 08';
	moons = '|| 05:16 PM';
	tithi = '|| Trayodashi upto 03:20 AM, Jul 08';
	naksh = '|| Rohini upto 06:19 PM';
	yog = '|| Ganda upto 03:36 PM';
	Karan = '|| Garaja upto 02:13 PM';
	Var = '|| Budhawara';
	break;
case '08-07-2021':
	sunr = '|| 05:30 AM';
	suns = '|| 07:23 PM';
	moonr = '|| 04:33 AM, Jul 09';
	moons = '|| 06:11 PM';
	tithi = '|| Chaturdashi upto 05:16 AM, Jul 09';
	naksh = '|| Mrigashirsha upto 08:59 PM';
	yog = '|| Vriddhi upto 04:20 PM';
	Karan = '|| Vishti upto 04:21 PM';
	Var = '|| Guruwara';
	break;
case '09-07-2021':
	sunr = '|| 05:30 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 05:25 AM, Jul 10';
	moons = '|| 07:04 PM';
	tithi = '|| Amavasya upto Full Night';
	naksh = '|| Ardra upto 11:14 PM';
	yog = '|| Dhruva upto 04:46 PM';
	Karan = '|| Chatushpada upto 06:04 PM';
	Var = '|| Shukrawara';
	break;
case '10-07-2021':
	sunr = '|| 05:31 AM';
	suns = '|| 07:22 PM';
	moonr = '|| No Moonrise';
	moons = '|| 07:54 PM';
	tithi = '|| Amavasya upto 06:46 AM';
	naksh = '|| Punarvasu upto 01:02 AM, Jul 11';
	yog = '|| Vyaghata upto 04:50 PM';
	Karan = '|| Nagava upto 06:46 AM';
	Var = '|| Shaniwara';
	break;
case '11-07-2021':
	sunr = '|| 05:31 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 06:22 AM';
	moons = '|| 08:40 PM';
	tithi = '|| Pratipada upto 07:47 AM';
	naksh = '|| Pushya upto 02:22 AM, Jul 12';
	yog = '|| Harshana upto 04:32 PM';
	Karan = '|| Bava upto 07:47 AM';
	Var = '|| Raviwara';
	break;
case '12-07-2021':
	sunr = '|| 05:32 AM';
	suns = '|| 07:22 PM';
	moonr = '|| 07:21 AM';
	moons = '|| 09:22 PM';
	tithi = '|| Dwitiya upto 08:19 AM';
	naksh = '|| Ashlesha upto 03:15 AM, Jul 13';
	yog = '|| Vajra upto 03:51 PM';
	Karan = '|| Kaulava upto 08:19 AM';
	Var = '|| Somawara';
	break;
case '13-07-2021':
	sunr = '|| 05:32 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 08:21 AM';
	moons = '|| 10:00 PM';
	tithi = '|| Tritiya upto 08:24 AM';
	naksh = '|| Magha upto 03:41 AM, Jul 14';
	yog = '|| Siddhi upto 02:49 PM';
	Karan = '|| Garaja upto 08:24 AM';
	Var = '|| Mangalawara';
	break;
case '14-07-2021':
	sunr = '|| 05:33 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 09:21 AM';
	moons = '|| 10:35 PM';
	tithi = '|| Chaturthi upto 08:02 AM';
	naksh = '|| Purva Phalguni upto 03:43 AM, Jul 15';
	yog = '|| Vyatipata upto 01:27 PM';
	Karan = '|| Vishti upto 08:02 AM';
	Var = '|| Budhawara';
	break;
case '15-07-2021':
	sunr = '|| 05:33 AM';
	suns = '|| 07:21 PM';
	moonr = '|| 10:21 AM';
	moons = '|| 11:08 PM';
	tithi = '|| Panchami upto 07:16 AM';
	naksh = '|| Uttara Phalguni upto 03:21 AM, Jul 16';
	yog = '|| Varigha upto 11:44 AM';
	Karan = '|| Balava upto 07:16 AM';
	Var = '|| Guruwara';
	break;
case '16-07-2021':
	sunr = '|| 05:34 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 11:22 AM';
	moons = '|| 11:41 PM';
	tithi = '|| Shashthi upto 06:06 AM';
	naksh = '|| Saptami upto 04:34 AM, Jul 17';
	yog = '|| Hasta upto 02:37 AM, Jul 17';
	Karan = '|| Parigha upto 09:43 AM';
	Var = '|| Shukrawara';
	break;
case '17-07-2021':
	sunr = '|| 05:34 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 12:23 PM';
	moons = '|| 12:16 AM, Jul 18';
	tithi = '|| Ashtami upto 02:41 AM, Jul 18';
	naksh = '|| Chitra upto 01:33 AM, Jul 18';
	yog = '|| Shiva upto 07:24 AM';
	Karan = '|| Siddha upto 04:48 AM, Jul 18';
	Var = '|| Shaniwara';
	break;
case '18-07-2021':
	sunr = '|| 05:35 AM';
	suns = '|| 07:20 PM';
	moonr = '|| 01:27 PM';
	moons = '|| 12:54 AM, Jul 19';
	tithi = '|| Navami upto 12:28 AM, Jul 19';
	naksh = '|| Swati upto 12:08 AM, Jul 19';
	yog = '|| Sadhya upto 01:57 AM, Jul 19';
	Karan = '|| Balava upto 01:37 PM';
	Var = '|| Raviwara';
	break;
case '19-07-2021':
	sunr = '|| 05:35 AM';
	suns = '|| 07:19 PM';
	moonr = '|| 02:33 PM';
	moons = '|| 01:36 AM, Jul 20';
	tithi = '|| Dashami upto 09:59 PM';
	naksh = '|| Vishakha upto 10:27 PM';
	yog = '|| Shubha upto 10:52 PM';
	Karan = '|| Taitila upto 11:16 AM';
	Var = '|| Somawara';
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