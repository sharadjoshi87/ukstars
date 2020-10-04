
var currentDate = new Date();

var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();
var dateString = '';

if (month <= 9) {
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
    case '04-10-2020':
      sunr = '06:16 AM';
      suns = '06:03 PM';
      moonr = '07:39 PM';
      moons = '08:08 AM';
      tithi = 'Dwitiya upto 07:27 AM';
      naksh = 'Ashwini upto 11:53 AM';
      yog = 'Harshana upto 11:07 PM';
      Karan = 'Garaja upto 07:27 AM';
      Var = 'Raviwara';
      break;
    case '05-10-2020':
      sunr = '06:16 AM';
      suns = '06:02 PM';
      moonr = '08:12 PM';
      moons = '09:01 AM';
      tithi = 'Tritiya upto 10:02 AM';
      naksh = 'Bharani upto 02:57 PM';
      yog = 'Vajra upto 12:05 AM, Oct 06';
      Karan = 'Vishti upto 10:02 AM';
      Var = 'Somawara';
      break;
    case '06-10-2020':
      sunr = '06:17 AM';
      suns = '06:01 PM';
      moonr = '08:49 PM';
      moons = '09:55 AM';
      tithi = 'Chaturthi upto 12:31 PM';
      naksh = 'Krittika upto 05:54 PM';
      yog = 'Siddhi upto 12:56 AM, Oct 07';
      Karan = 'Balava upto 12:31 PM';
      Var = 'Mangalawara';
      break;
    case '07-10-2020':
      sunr = '06:17 AM';
      suns = '06:00 PM';
      moonr = '09:29 PM';
      moons = '10:50 AM';
      tithi = 'Panchami upto 02:47 PM';
      naksh = 'Rohini upto 08:36 PM';
      yog = 'Vyatipata upto 01:32 AM, Oct 08';
      Karan = 'Taitila upto 02:47 PM';
      Var = 'Budhawara';
      break;
    case '08-10-2020':
      sunr = '06:18 AM';
      suns = '05:59 PM';
      moonr = '10:16 PM';
      moons = '11:46 AM';
      tithi = 'Shashthi upto 04:36 PM';
      naksh = 'Mrigashirsha upto 10:50 PM';
      yog = 'Varigha upto 01:44 AM, Oct 09';
      Karan = 'Vanija upto 04:36 PM';
      Var = 'Guruwara';
      break;
    case '09-10-2020':
      sunr = '06:18 AM';
      suns = '05:58 PM';
      moonr = '11:07 PM';
      moons = '12:41 PM';
      tithi = 'Saptami upto 05:49 PM';
      naksh = 'Ardra upto 12:27 AM, Oct 10';
      yog = 'Parigha upto 01:25 AM, Oct 10';
      Karan = 'Bava upto 05:49 PM';
      Var = 'Shukrawara';
      break;
    case '10-10-2020':
      sunr = '06:19 AM';
      suns = '05:57 PM';
      moonr = '12:04 AM, Oct 11';
      moons = '01:33 PM';
      tithi = 'Ashtami upto 06:16 PM';
      naksh = 'Punarvasu upto 01:18 AM, Oct 11';
      yog = 'Shiva upto 12:30 AM, Oct 11';
      Karan = 'Kaulava upto 06:16 PM';
      Var = 'Shaniwara';
      break;
    case '11-10-2020':
      sunr = '06:20 AM';
      suns = '05:55 PM';
      moonr = '01:06 AM, Oct 12';
      moons = '02:23 PM';
      tithi = 'Navami upto 05:53 PM';
      naksh = 'Pushya upto 01:19 AM, Oct 12';
      yog = 'Siddha upto 10:54 PM';
      Karan = 'Garaja upto 05:53 PM';
      Var = 'Raviwara';
      break;
    case '12-10-2020':
      sunr = '06:20 AM';
      suns = '05:54 PM';
      moonr = '02:10 AM, Oct 13';
      moons = '03:10 PM';
      tithi = 'Dashami upto 04:38 PM';
      naksh = 'Ashlesha upto 12:30 AM, Oct 13';
      yog = 'Sadhya upto 08:38 PM';
      Karan = 'Vishti upto 04:38 PM';
      Var = 'Somawara';
      break;
    case '13-10-2020':
      sunr = '06:21 AM';
      suns = '05:53 PM';
      moonr = '03:16 AM, Oct 14';
      moons = '03:52 PM';
      tithi = 'Ekadashi upto 02:35 PM';
      naksh = 'Magha upto 10:55 PM';
      yog = 'Shubha upto 05:43 PM';
      Karan = 'Balava upto 02:35 PM';
      Var = 'Mangalawara';
      break;
    case '14-10-2020':
      sunr = '06:21 AM';
      suns = '05:52 PM';
      moonr = '04:23 AM, Oct 15';
      moons = '04:33 PM';
      tithi = 'Dwadashi upto 11:51 AM';
      naksh = 'Purva Phalguni upto 08:41 PM';
      yog = 'Shukla upto 02:15 PM';
      Karan = 'Taitila upto 11:51 AM';
      Var = 'Budhawara';
      break;
    case '15-10-2020':
      sunr = '06:22 AM';
      suns = '05:51 PM';
      moonr = '05:31 AM, Oct 16';
      moons = '05:11 PM';
      tithi = 'Trayodashi upto 08:33 AM';
      naksh = 'Chaturdashi upto 04:52 AM, Oct 16';
      yog = 'Uttara Phalguni upto 05:58 PM';
      Karan = 'Brahma upto 10:21 AM';
      Var = 'Guruwara';
      break;
    case '16-10-2020':
      sunr = '06:23 AM';
      suns = '05:50 PM';
      moonr = 'No Moonrise';
      moons = '05:50 PM';
      tithi = 'Amavasya upto 01:00 AM, Oct 17';
      naksh = 'Hasta upto 02:58 PM';
      yog = 'Vaidhriti upto 01:47 AM, Oct 17';
      Karan = 'Chatushpada upto 02:57 PM';
      Var = 'Shukrawara';
      break;
    case '17-10-2020':
      sunr = '06:23 AM';
      suns = '05:49 PM';
      moonr = '06:40 AM';
      moons = '06:30 PM';
      tithi = 'Pratipada upto 09:08 PM';
      naksh = 'Chitra upto 11:52 AM';
      yog = 'Vishkambha upto 09:25 PM';
      Karan = 'Kinstughna upto 11:04 AM';
      Var = 'Shaniwara';
      break;
    case '18-10-2020':
      sunr = '06:24 AM';
      suns = '05:48 PM';
      moonr = '07:50 AM';
      moons = '07:12 PM';
      tithi = 'Dwitiya upto 05:27 PM';
      naksh = 'Swati upto 08:52 AM';
      yog = 'Vishakha upto 06:08 AM, Oct 19';
      Karan = 'Priti upto 05:13 PM';
      Var = 'Raviwara';
      break;
    case '19-10-2020':
      sunr = '06:24 AM';
      suns = '05:47 PM';
      moonr = '09:00 AM';
      moons = '07:59 PM';
      tithi = 'Tritiya upto 02:07 PM';
      naksh = 'Anuradha upto 03:53 AM, Oct 20';
      yog = 'Ayushman upto 01:19 PM';
      Karan = 'Garaja upto 02:07 PM';
      Var = 'Somawara';
      break;
    case '20-10-2020':
      sunr = '06:25 AM';
      suns = '05:46 PM';
      moonr = '10:09 AM';
      moons = '08:50 PM';
      tithi = 'Chaturthi upto 11:18 AM';
      naksh = 'Jyeshtha upto 02:12 AM, Oct 21';
      yog = 'Saubhagya upto 09:49 AM';
      Karan = 'Vishti upto 11:18 AM';
      Var = 'Mangalawara';
      break;
    case '21-10-2020':
      sunr = '06:26 AM';
      suns = '05:45 PM';
      moonr = '11:15 AM';
      moons = '09:45 PM';
      tithi = 'Panchami upto 09:07 AM';
      naksh = 'Mula upto 01:13 AM, Oct 22';
      yog = 'Shobhana upto 06:50 AM';
      Karan = 'Atiganda upto 04:25 AM, Oct 22';
      Var = 'Budhawara';
      break;
    case '22-10-2020':
      sunr = '06:26 AM';
      suns = '05:44 PM';
      moonr = '12:15 PM';
      moons = '10:44 PM';
      tithi = 'Shashthi upto 07:39 AM';
      naksh = 'Purva Ashadha upto 12:59 AM, Oct 23';
      yog = 'Sukarman upto 02:37 AM, Oct 23';
      Karan = 'Taitila upto 07:39 AM';
      Var = 'Guruwara';
      break;
    case '23-10-2020':
      sunr = '06:27 AM';
      suns = '05:43 PM';
      moonr = '01:08 PM';
      moons = '11:43 PM';
      tithi = 'Saptami upto 06:57 AM';
      naksh = 'Uttara Ashadha upto 01:28 AM, Oct 24';
      yog = 'Dhriti upto 01:23 AM, Oct 24';
      Karan = 'Vanija upto 06:57 AM';
      Var = 'Shukrawara';
      break;
    case '24-10-2020':
      sunr = '06:28 AM';
      suns = '05:42 PM';
      moonr = '01:55 PM';
      moons = '12:42 AM, Oct 25';
      tithi = 'Ashtami upto 06:58 AM';
      naksh = 'Shravana upto 02:38 AM, Oct 25';
      yog = 'Shula upto 12:42 AM, Oct 25';
      Karan = 'Bava upto 06:58 AM';
      Var = 'Shaniwara';
      break;
    case '25-10-2020':
      sunr = '06:28 AM';
      suns = '05:41 PM';
      moonr = '02:35 PM';
      moons = '01:39 AM, Oct 26';
      tithi = 'Navami upto 07:41 AM';
      naksh = 'Dhanishtha upto 04:23 AM, Oct 26';
      yog = 'Ganda upto 12:29 AM, Oct 26';
      Karan = 'Kaulava upto 07:41 AM';
      Var = 'Raviwara';
      break;
    case '26-10-2020':
      sunr = '06:29 AM';
      suns = '05:41 PM';
      moonr = '03:11 PM';
      moons = '02:34 AM, Oct 27';
      tithi = 'Dashami upto 09:00 AM';
      naksh = 'Shatabhisha upto Full Night';
      yog = 'Vriddhi upto 12:40 AM, Oct 27';
      Karan = 'Garaja upto 09:00 AM';
      Var = 'Somawara';
      break;
    case '27-10-2020':
      sunr = '06:30 AM';
      suns = '05:40 PM';
      moonr = '03:43 PM';
      moons = '03:28 AM, Oct 28';
      tithi = 'Ekadashi upto 10:46 AM';
      naksh = 'Shatabhisha upto 06:37 AM';
      yog = 'Dhruva upto 01:08 AM, Oct 28';
      Karan = 'Vishti upto 10:46 AM';
      Var = 'Mangalawara';
      break;
    case '28-10-2020':
      sunr = '06:30 AM';
      suns = '05:39 PM';
      moonr = '04:13 PM';
      moons = '04:20 AM, Oct 29';
      tithi = 'Dwadashi upto 12:54 PM';
      naksh = 'Purva Bhadrapada upto 09:11 AM';
      yog = 'Vyaghata upto 01:50 AM, Oct 29';
      Karan = 'Balava upto 12:54 PM';
      Var = 'Budhawara';
      break;
    case '29-10-2020':
      sunr = '06:31 AM';
      suns = '05:38 PM';
      moonr = '04:42 PM';
      moons = '05:12 AM, Oct 30';
      tithi = 'Trayodashi upto 03:15 PM';
      naksh = 'Uttara Bhadrapada upto 12:00 PM';
      yog = 'Harshana upto 02:39 AM, Oct 30';
      Karan = 'Taitila upto 03:15 PM';
      Var = 'Guruwara';
      break;
    case '30-10-2020':
      sunr = '06:32 AM';
      suns = '05:37 PM';
      moonr = '05:11 PM';
      moons = '06:04 AM, Oct 31';
      tithi = 'Chaturdashi upto 05:45 PM';
      naksh = 'Revati upto 02:57 PM';
      yog = 'Vajra upto 03:33 AM, Oct 31';
      Karan = 'Vanija upto 05:45 PM';
      Var = 'Shukrawara';
      break;
    case '31-10-2020':
      sunr = '06:32 AM';
      suns = '05:36 PM';
      moonr = '05:41 PM';
      moons = 'No Moonset';
      tithi = 'Purnima upto 08:18 PM';
      naksh = 'Ashwini upto 05:58 PM';
      yog = 'Siddhi upto 04:27 AM, Nov 01';
      Karan = 'Vishti upto 07:01 AM';
      Var = 'Shaniwara';
      break;
    case '01-11-2020':
      sunr = '06:33 AM';
      suns = '05:36 PM';
      moonr = '06:13 PM';
      moons = '06:57 AM';
      tithi = 'Pratipada upto 10:49 PM';
      naksh = 'Bharani upto 08:57 PM';
      yog = 'Vyatipata upto 05:19 AM, Nov 02';
      Karan = 'Balava upto 09:34 AM';
      Var = 'Raviwara';
      break;
    case '02-11-2020':
      sunr = '06:34 AM';
      suns = '05:35 PM';
      moonr = '06:49 PM';
      moons = '07:50 AM';
      tithi = 'Dwitiya upto 01:13 AM, Nov 03';
      naksh = 'Krittika upto 11:50 PM';
      yog = 'Varigha upto 06:04 AM, Nov 03';
      Karan = 'Taitila upto 12:03 PM';
      Var = 'Somawara';
      break;
    case '03-11-2020':
      sunr = '06:35 AM';
      suns = '05:34 PM';
      moonr = '07:28 PM';
      moons = '08:46 AM';
      tithi = 'Tritiya upto 03:24 AM, Nov 04';
      naksh = 'Rohini upto 02:30 AM, Nov 04';
      yog = 'Parigha upto Full Night';
      Karan = 'Vanija upto 02:21 PM';
      Var = 'Mangalawara';
      break;
    case '04-11-2020':
      sunr = '06:35 AM';
      suns = '05:34 PM';
      moonr = '08:12 PM';
      moons = '09:41 AM';
      tithi = 'Chaturthi upto 05:14 AM, Nov 05';
      naksh = 'Mrigashirsha upto 04:51 AM, Nov 05';
      yog = 'Parigha upto 06:39 AM';
      Karan = 'Bava upto 04:22 PM';
      Var = 'Budhawara';
      break;
    case '05-11-2020':
      sunr = '06:36 AM';
      suns = '05:33 PM';
      moonr = '09:02 PM';
      moons = '10:36 AM';
      tithi = 'Panchami upto 06:36 AM, Nov 06';
      naksh = 'Ardra upto Full Night';
      yog = 'Shiva upto 06:57 AM';
      Karan = 'Kaulava upto 05:59 PM';
      Var = 'Guruwara';
      break;
    case '06-11-2020':
      sunr = '06:37 AM';
      suns = '05:32 PM';
      moonr = '09:56 PM';
      moons = '11:29 AM';
      tithi = 'Shashthi upto Full Night';
      naksh = 'Ardra upto 06:45 AM';
      yog = 'Siddha upto 06:53 AM';
      Karan = 'Sadhya upto 06:22 AM, Nov 07';
      Var = 'Shukrawara';
      break;
    case '07-11-2020':
      sunr = '06:38 AM';
      suns = '05:32 PM';
      moonr = '10:55 PM';
      moons = '12:19 PM';
      tithi = 'Shashthi upto 07:23 AM';
      naksh = 'Punarvasu upto 08:05 AM';
      yog = 'Shubha upto 05:20 AM, Nov 08';
      Karan = 'Vanija upto 07:23 AM';
      Var = 'Shaniwara';
      break;
    case '08-11-2020':
      sunr = '06:38 AM';
      suns = '05:31 PM';
      moonr = '11:56 PM';
      moons = '01:05 PM';
      tithi = 'Saptami upto 07:29 AM';
      naksh = 'Pushya upto 08:46 AM';
      yog = 'Shukla upto 03:43 AM, Nov 09';
      Karan = 'Bava upto 07:29 AM';
      Var = 'Raviwara';
      break;
    case '09-11-2020':
      sunr = '06:39 AM';
      suns = '05:30 PM';
      moonr = '12:59 AM, Nov 10';
      moons = '01:47 PM';
      tithi = 'Ashtami upto 06:50 AM';
      naksh = 'Navami upto 05:27 AM, Nov 10';
      yog = 'Ashlesha upto 08:43 AM';
      Karan = 'Brahma upto 01:31 AM, Nov 10';
      Var = 'Somawara';
      break;
    case '10-11-2020':
      sunr = '06:40 AM';
      suns = '05:30 PM';
      moonr = '02:03 AM, Nov 11';
      moons = '02:27 PM';
      tithi = 'Dashami upto 03:22 AM, Nov 11';
      naksh = 'Magha upto 07:56 AM';
      yog = 'Purva Phalguni upto 06:29 AM, Nov 11';
      Karan = 'Indra upto 10:45 PM';
      Var = 'Mangalawara';
      break;
    case '11-11-2020':
      sunr = '06:41 AM';
      suns = '05:29 PM';
      moonr = '03:08 AM, Nov 12';
      moons = '03:05 PM';
      tithi = 'Ekadashi upto 12:40 AM, Nov 12';
      naksh = 'Uttara Phalguni upto 04:25 AM, Nov 12';
      yog = 'Vaidhriti upto 07:28 PM';
      Karan = 'Bava upto 02:05 PM';
      Var = 'Budhawara';
      break;
    case '12-11-2020':
      sunr = '06:42 AM';
      suns = '05:29 PM';
      moonr = '04:15 AM, Nov 13';
      moons = '03:42 PM';
      tithi = 'Dwadashi upto 09:30 PM';
      naksh = 'Hasta upto 01:55 AM, Nov 13';
      yog = 'Vishkambha upto 03:45 PM';
      Karan = 'Kaulava upto 11:08 AM';
      Var = 'Guruwara';
      break;
    case '13-11-2020':
      sunr = '06:42 AM';
      suns = '05:28 PM';
      moonr = '05:23 AM, Nov 14';
      moons = '04:20 PM';
      tithi = 'Trayodashi upto 05:59 PM';
      naksh = 'Chitra upto 11:06 PM';
      yog = 'Priti upto 11:44 AM';
      Karan = 'Garaja upto 07:46 AM';
      Var = 'Shukrawara';
      break;
    case '14-11-2020':
      sunr = '06:43 AM';
      suns = '05:28 PM';
      moonr = '06:34 AM, Nov 15';
      moons = '05:00 PM';
      tithi = 'Chaturdashi upto 02:17 PM';
      naksh = 'Swati upto 08:09 PM';
      yog = 'Ayushman upto 07:32 AM';
      Karan = 'Saubhagya upto 03:16 AM, Nov 15';
      Var = 'Shaniwara';
      break;
    case '15-11-2020':
      sunr = '06:44 AM';
      suns = '05:27 PM';
      moonr = 'No Moonrise';
      moons = '05:45 PM';
      tithi = 'Amavasya upto 10:36 AM';
      naksh = 'Vishakha upto 05:16 PM';
      yog = 'Shobhana upto 11:07 PM';
      Karan = 'Nagava upto 10:36 AM';
      Var = 'Raviwara';
      break;
    case '16-11-2020':
      sunr = '06:45 AM';
      suns = '05:27 PM';
      moonr = '07:45 AM';
      moons = '06:34 PM';
      tithi = 'Pratipada upto 07:06 AM';
      naksh = 'Dwitiya upto 03:56 AM, Nov 17';
      yog = 'Anuradha upto 02:37 PM';
      Karan = 'Atiganda upto 07:11 PM';
      Var = 'Somawara';
      break;
    case '17-11-2020':
      sunr = '06:45 AM';
      suns = '05:27 PM';
      moonr = '08:54 AM';
      moons = '07:29 PM';
      tithi = 'Tritiya upto 01:17 AM, Nov 18';
      naksh = 'Jyeshtha upto 12:22 PM';
      yog = 'Sukarman upto 03:37 PM';
      Karan = 'Taitila upto 02:32 PM';
      Var = 'Mangalawara';
      break;
    case '18-11-2020':
      sunr = '06:46 AM';
      suns = '05:26 PM';
      moonr = '10:00 AM';
      moons = '08:28 PM';
      tithi = 'Chaturthi upto 11:16 PM';
      naksh = 'Mula upto 10:40 AM';
      yog = 'Dhriti upto 12:31 PM';
      Karan = 'Vanija upto 12:11 PM';
      Var = 'Budhawara';
      break;
    case '19-11-2020':
      sunr = '06:47 AM';
      suns = '05:26 PM';
      moonr = '10:59 AM';
      moons = '09:30 PM';
      tithi = 'Panchami upto 09:59 PM';
      naksh = 'Purva Ashadha upto 09:39 AM';
      yog = 'Shula upto 09:59 AM';
      Karan = 'Bava upto 10:31 AM';
      Var = 'Guruwara';
      break;
    case '20-11-2020':
      sunr = '06:48 AM';
      suns = '05:26 PM';
      moonr = '11:50 AM';
      moons = '10:31 PM';
      tithi = 'Shashthi upto 09:29 PM';
      naksh = 'Uttara Ashadha upto 09:23 AM';
      yog = 'Ganda upto 08:03 AM';
      Karan = 'Vriddhi upto 06:44 AM, Nov 21';
      Var = 'Shukrawara';
      break;
    case '21-11-2020':
      sunr = '06:49 AM';
      suns = '05:25 PM';
      moonr = '12:34 PM';
      moons = '11:31 PM';
      tithi = 'Saptami upto 09:48 PM';
      naksh = 'Shravana upto 09:54 AM';
      yog = 'Dhruva upto 06:02 AM, Nov 22';
      Karan = 'Garaja upto 09:33 AM';
      Var = 'Shaniwara';
      break;
    case '22-11-2020':
      sunr = '06:49 AM';
      suns = '05:25 PM';
      moonr = '01:12 PM';
      moons = '12:28 AM, Nov 23';
      tithi = 'Ashtami upto 10:51 PM';
      naksh = 'Dhanishtha upto 11:10 AM';
      yog = 'Vyaghata upto 05:52 AM, Nov 23';
      Karan = 'Vishti upto 10:14 AM';
      Var = 'Raviwara';
      break;
    case '23-11-2020':
      sunr = '06:50 AM';
      suns = '05:25 PM';
      moonr = '01:45 PM';
      moons = '01:22 AM, Nov 24';
      tithi = 'Navami upto 12:32 AM, Nov 24';
      naksh = 'Shatabhisha upto 01:05 PM';
      yog = 'Harshana upto 06:10 AM, Nov 24';
      Karan = 'Balava upto 11:37 AM';
      Var = 'Somawara';
      break;
    case '24-11-2020':
      sunr = '06:51 AM';
      suns = '05:25 PM';
      moonr = '02:16 PM';
      moons = '02:15 AM, Nov 25';
      tithi = 'Dashami upto 02:42 AM, Nov 25';
      naksh = 'Purva Bhadrapada upto 03:32 PM';
      yog = 'Vajra upto 06:46 AM, Nov 25';
      Karan = 'Taitila upto 01:34 PM';
      Var = 'Mangalawara';
      break;
    case '25-11-2020':
      sunr = '06:52 AM';
      suns = '05:24 PM';
      moonr = '02:45 PM';
      moons = '03:07 AM, Nov 26';
      tithi = 'Ekadashi upto 05:10 AM, Nov 26';
      naksh = 'Uttara Bhadrapada upto 06:21 PM';
      yog = 'Siddhi upto Full Night';
      Karan = 'Vanija upto 03:54 PM';
      Var = 'Budhawara';
      break;
    case '26-11-2020':
      sunr = '06:53 AM';
      suns = '05:24 PM';
      moonr = '03:14 PM';
      moons = '03:58 AM, Nov 27';
      tithi = 'Dwadashi upto Full Night';
      naksh = 'Revati upto 09:21 PM';
      yog = 'Siddhi upto 07:36 AM';
      Karan = 'Bava upto 06:28 PM';
      Var = 'Guruwara';
      break;
    case '27-11-2020':
      sunr = '06:53 AM';
      suns = '05:24 PM';
      moonr = '03:43 PM';
      moons = '04:51 AM, Nov 28';
      tithi = 'Dwadashi upto 07:46 AM';
      naksh = 'Ashwini upto 12:23 AM, Nov 28';
      yog = 'Vyatipata upto 08:30 AM';
      Karan = 'Balava upto 07:46 AM';
      Var = 'Shukrawara';
      break;
    case '28-11-2020':
      sunr = '06:54 AM';
      suns = '05:24 PM';
      moonr = '04:15 PM';
      moons = '05:45 AM, Nov 29';
      tithi = 'Trayodashi upto 10:21 AM';
      naksh = 'Bharani upto 03:19 AM, Nov 29';
      yog = 'Varigha upto 09:23 AM';
      Karan = 'Taitila upto 10:21 AM';
      Var = 'Shaniwara';
      break;
    case '29-11-2020':
      sunr = '06:55 AM';
      suns = '05:24 PM';
      moonr = '04:49 PM';
      moons = '06:40 AM, Nov 30';
      tithi = 'Chaturdashi upto 12:47 PM';
      naksh = 'Krittika upto 06:04 AM, Nov 30';
      yog = 'Parigha upto 10:10 AM';
      Karan = 'Vanija upto 12:47 PM';
      Var = 'Raviwara';
      break;
    case '30-11-2020':
      sunr = '06:56 AM';
      suns = '05:24 PM';
      moonr = '05:27 PM';
      moons = 'No Moonset';
      tithi = 'Purnima upto 02:59 PM';
      naksh = 'Rohini upto Full Night';
      yog = 'Shiva upto 10:47 AM';
      Karan = 'Bava upto 02:59 PM';
      Var = 'Somawara';
      break;
    case '01-12-2020':
      sunr = '06:57 AM';
      suns = '05:24 PM';
      moonr = '06:10 PM';
      moons = '07:36 AM';
      tithi = 'Pratipada upto 04:51 PM';
      naksh = 'Rohini upto 08:31 AM';
      yog = 'Siddha upto 11:09 AM';
      Karan = 'Kaulava upto 04:51 PM';
      Var = 'Mangalawara';
      break;
    case '02-12-2020':
      sunr = '06:57 AM';
      suns = '05:24 PM';
      moonr = '06:58 PM';
      moons = '08:31 AM';
      tithi = 'Dwitiya upto 06:22 PM';
      naksh = 'Mrigashirsha upto 10:38 AM';
      yog = 'Sadhya upto 11:15 AM';
      Karan = 'Garaja upto 06:22 PM';
      Var = 'Budhawara';
      break;
    case '03-12-2020':
      sunr = '06:58 AM';
      suns = '05:24 PM';
      moonr = '07:51 PM';
      moons = '09:26 AM';
      tithi = 'Tritiya upto 07:26 PM';
      naksh = 'Ardra upto 12:22 PM';
      yog = 'Shubha upto 11:03 AM';
      Karan = 'Vishti upto 07:26 PM';
      Var = 'Guruwara';
      break;
    case '04-12-2020':
      sunr = '06:59 AM';
      suns = '05:24 PM';
      moonr = '08:49 PM';
      moons = '10:17 AM';
      tithi = 'Chaturthi upto 08:03 PM';
      naksh = 'Punarvasu upto 01:39 PM';
      yog = 'Shukla upto 10:30 AM';
      Karan = 'Bava upto 07:48 AM';
      Var = 'Shukrawara';
      break;
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