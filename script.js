const fortunes=[
    "大吉💖運命の人に出会うかも！",
    "中吉😊少し勇気を出すと良いことが起きる",
    "小吉🌝今日はゆっくり過ごそう",
    "凶😢できるだけ外出は控えよう"
];

const button=document.getElementById("aaa");
const result=document.getElementById("bbb");

button.addEventListener("click",function(){

    const randomNumber=Math.floor(Math.random()*fortunes.length);

    result.textContent=fortunes[(randomNumber)];
});