let compterNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea"); 
let answerBTN = document.getElementById("answerBTN");
let answerArea = document.getElementById("answerArea");

playButton.addEventListener("click", play);
answerBTN.addEventListener("click", showAnswer);

function pickRandomNum()
{
    compterNum = Math.floor( Math.random() * 100) + 1;      
    /* 
        Math.random() : 0 ~ 1사이 무작위 반환
        Math.floor() : 소수점 버림
        0 ~ 99까지만 반환하기 때문에 +1을 해주어 0 ~ 100까지 반환되게 함
    */
    console.log("정답", compterNum);

}

function play()
{
    let userValue = userInput.value;
    if(userValue < compterNum)
    {
        resultArea.textContent = "UP!"
    }
    else if (userValue > compterNum)
    {
        resultArea.textContent = "DOWN!";
    }
    else 
    {
        resultArea.textContent = "CORRECT!";
    }

    console.log("userValue :" +  userValue);
}

function showAnswer()
{
    answerArea.textContent = compterNum;
}

pickRandomNum();