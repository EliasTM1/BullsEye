let counterMovement,
    testingLimit,
    startPoint,
    bullsEye,
    outter,
    middle,
    inner,
    eyeCenter,
    startButton,
    stopButton,
    windowHeight,
    windowWidth;

counterMovement = 0;
testingLimit = 100;
startPoint = 50;
//  * Selectors
bullsEye = document.querySelector(".bullsEye");
outter = document.querySelector(".outter");
middle = document.querySelector(".middle");
inner = document.querySelector(".inner");
eyeCenter = document.querySelector(".eyeCenter");
startButton = document.querySelector("#start");
stopButton = document.querySelector("#pause");
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
// * Event Listener
eyeCenter.addEventListener("mousemove", inTheMiddle);
eyeCenter.addEventListener("mouseout", leftBullsEye);
stopButton.addEventListener("click", stopTheGame);
startButton.addEventListener("click", startTheGame);

function startTheGame() {
    console.log()
}

function stopTheGame() {
    counterMovement = testingLimit - startPoint;
}

function leftBullsEye() {
    eyeCenter.classList.remove("greenAim")
    console.error("FAILED")
}

function inTheMiddle() {
    eyeCenter.classList.add("greenAim")
    console.warn("CENTER")
}

let intervalTest = setInterval(() => {
    console.log("intervalo");
    moveFrame();
}, 50);

function moveFrame() {
    if (counterMovement === testingLimit - startPoint) {	
        clearInterval(intervalTest);
        resetPosition();
    } else {
        moveToBottom();
        console.log(windowHeight)
        console.log(windowWidth)
    }
}

function moveToBottom() {
    // Add a number by decimal points
    // First Value => 50
    // then => 50.1
    // then => 50.2
    // ...
    // then => 50.9

    bullsEye.style.top = startPoint++ + "px";
}

function resetPosition() {
    bullsEye.style.top = 50 + "%";
}


// ? counterMovement = 0;
// ? testingLimit = 100;
// ? startPoint = 50;

