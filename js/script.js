/*
■必殺扇メモ

-------------変数や配列は下記をコピーして書き換え-------------

const test = 1;
const ary = ["こすげ", "たつや"];



-------------イベントは下記をコピーして必要なところを書き換える！！！！-------------
$('#start').on("click", function(){




});


-------------ifは下記をコピーして必要なところを書き換える！！！！-------------

if(条件){
    
}else{
    
}

*/
const myName = "うやま";
const members = ["けーさん", "ながしまさん", "かんださん"];

console.log(myName)
console.log(members)

//$("#liji").append(members[0]);
//$("#liji").append(members[1]);
//$("#liji").append(members[2]);

//members.forEach(function (person) {
//$("#liji").append("<div>"+person+"</div>");



//});

//お掃除↓

$(".toggle").on("click", function () {
    $(".title-on").toggle();
    $(".title-off").toggle();
});

$(".toggle1").on("click", function () {
    $(".title-on1").toggle();
    $(".title-off1").toggle();
});

$(".toggle2").on("click", function () {
    $(".title-on2").toggle();
    $(".title-off2").toggle();
});



let MyHand = 0
$('#btn1').on('click', function () {
    console.log("OK")
    MyHand = 1
    console.log(MyHand)
    const randomNum = Math.ceil(Math.random() * 3);
    $("#myresult").html("豚肉")
    if (randomNum === 1) {
        $("#comresult").html("卵")
        result2.textContent = "かつ丼"
    } else if (randomNum === 2) {
        $("#comresult").html("野菜")
        result2.textContent = "酢豚"
    } else {
        $("#comresult").html("油")
        result2.textContent = "叉焼"
    }


});




$('#btn2').on('click', function () {
    MyHand = 1
    console.log(MyHand)
    const randomNum = Math.ceil(Math.random() * 3);
    $('#myresult').html("鶏肉")
    if (randomNum === 1) {
        $('#comresult').html("卵")
        result2.textContent = "親子丼"
    } else if (randomNum === 2) {
        $('#comresult').html('小麦粉')
        result2.textContent = "唐揚げ"
    } else {
        $('#comresult').html('油')
        result2.textContent = "油淋鶏"
    }


});




$('#btn3').on('click', function () {
    MyHand = 1
    console.log(MyHand)
    const randomNum = Math.ceil(Math.random() * 3);
    $('#myresult').html("お魚")
    if (randomNum === 1) {
        $('#comresult').html("卵")
        result2.textContent = "フリッター"
    } else if (randomNum === 2) {
        $('#comresult').html('小麦粉')
        result2.textContent = "ムニエル"
    } else {
        $('#comresult').html('油')
        result2.textContent = "天ぷら"
    }
});




$('#btn').on('click', function () {

    const randomNum = Math.ceil(Math.random() * 10);

    if (randomNum > 5) {
        $('#result').html('涼しくなってきたよね');
    } else if (randomNum === 3) {
        $('#result').html('ごはん食べた？');
    } else { $('#result').html('長岡花火良かったね～'); }

});


const tasks = ["お掃除", "今日の献立", "会話の内容", "次回の約束"]

console.log(tasks)

tasks.forEach(function (person1) {
    $("#tasks").append('<div><input type="checkbox"id="task0">' + person1 + "</div>");
});


function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
