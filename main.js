let compterNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea"); 
let answerBTN = document.getElementById("answerBTN");
let answerArea = document.getElementById("answerArea");
let resetBtn = document.getElementById("resetBtn"); 
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let history = [];

playButton.addEventListener("click", play);
answerBTN.addEventListener("click", showAnswer);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""});

/* 랜덤번호 생성  */
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
    
    if (userValue < 1 || userValue >100)
    {
        resultArea.textContent = "1과 100 사이의 숫자만 입력해주세요.";
        return;
    }

    if (history.includes(userValue))
    {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`;


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
        // playButton.disabled = true;
        gameOver = true;
    }

    history.push(userValue);    // 사용자가 입력한 값을 history안에 배열로 추가
    console.log(history);


    if (chances < 1)
    {
        gameOver = true;
    }

    if (gameOver == true)
    {
        playButton.disabled = true;
    }
}

function showAnswer()
{
    answerArea.textContent = compterNum;
}

function reset()
{
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과가 나온다";
    playButton.disabled = false;
    
}

pickRandomNum();