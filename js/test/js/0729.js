var now = new Date(); // 현재 날짜와 시간
var firstDate = new Date(y); // 설정 날짜

var y = document.getElementById('anni').value;

// console.log(firstDate.toLocaleString());
// console.log(now);
var start = firstDate.getTime(); // 기념일의 1000분의 1초
var end = now.getTime(); // 오늘의 1000분의 1초
var pass = end - start; // 오늘 - 기념일 -> 경과 시간의 1000분의 1초
var passDay = parseInt(pass / 1000 / 60 / 60 / 24); // 경과 시간(일)

document.querySelector('#passDay').innerHTML = passDay;


function calcDay(days) {
    // 전달받은 일을 1000분의 1초로 바꿔야함
    var days2 = days * 1000 * 60 * 60 * 24; // 일을 1000분의 1초로 바꿔주는 작업
    var passDay2 = start + days2 // 기념일에서 경과일(100일)을 뺀 1000분의 1초

    // 1000분의 1초를 Date 객체로 다시 만들어야한다 -> 년월일을 구하기 위해서
    var someDate = new Date(passDay2);
    // console.log(someDate);
    // console.log(someDate.toLocaleString());

    var year = someDate.getFullYear();
    var month = someDate.getMonth() + 1;
    var day = someDate.getDate();


    // console.log(pass + " ms");
    // console.log(pass/1000 + " 초");
    // console.log(pass/1000/60 + " 분");
    // console.log(Math.floor(pass/1000/60/60) + " 시");
    // console.log(parseInt(pass/1000/60/60/24) + " 일");

    console.log(year + "년 " + month + "월" + day + "일");

    // 월을 2자리로 만들기
    var month2 = "";
    if (month < 10) {
        month2 = "0".concat(month);
    } else {
        month2 = month;
    }

    var day3 = "";
    if (day < 10) {
        day3 = "0".concat(day);
    } else {
        day3 = day;
    }

    document.querySelector('#date' + days).innerHTML = year + "년 " + month2 + "월 " + day3 + "일";

}

calcDay(100);
calcDay(200);
calcDay(365);
calcDay(500);
calcDay(730);
calcDay(1000);
