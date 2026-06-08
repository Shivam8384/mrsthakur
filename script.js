// ======================
// QUESTIONS
// ======================

const questions = [

"Praveen Thakur ko aap kya bulati ho? ❤️",

"Praveen ki jaan kisme basti hai? ❤️",

"Praveen ki sabse keemti cheez kya hai? ❤️",

"Aapke dil me kaun rehta hai? ❤️",

"Aap sabse zyada pyaar kisse karti ho? ❤️",

"Bubiii ka favourite person kaun hai? ❤️",

"Shivi ki cutest mummy kaun hai? ❤️",

"Praveen ki duniya ka sabse pyara insaan kaun hai? ❤️"

];

// ======================
// ELEMENTS
// ======================

let currentQuestion = 0;

const welcomePage =
document.getElementById("welcomePage");

const quizPage =
document.getElementById("quizPage");

const winPage =
document.getElementById("winPage");

const countdownPage =
document.getElementById("countdownPage");

const letterPage =
document.getElementById("letterPage");

const startBtn =
document.getElementById("startBtn");

const nextBtn =
document.getElementById("nextBtn");

const specialBtn =
document.getElementById("specialBtn");

const questionText =
document.getElementById("questionText");

const answerInput =
document.getElementById("answerInput");

const lovePopup =
document.getElementById("lovePopup");

// ======================
// LOAD QUESTION
// ======================

function loadQuestion(){

questionText.innerText =
questions[currentQuestion];

}

// ======================
// START
// ======================

startBtn.addEventListener("click",()=>{

welcomePage.classList.add("hidden");

quizPage.classList.remove("hidden");

loadQuestion();

});

// ======================
// QUIZ
// ======================

nextBtn.addEventListener("click",()=>{

lovePopup.style.display="block";

lovePopup.innerHTML =
loveMessages[
Math.floor(
Math.random() *
loveMessages.length
)
];
setTimeout(()=>{

lovePopup.style.display="none";

},1500);

/*
AUTO CORRECT

KOI BHI ANSWER HO
CORRECT MAAN LO
*/

currentQuestion++;

answerInput.value="";

if(currentQuestion < questions.length){

loadQuestion();

}else{

quizPage.classList.add("hidden");

winPage.classList.remove("hidden");

}

});

// ======================
// SPECIAL BUTTON
// ======================

specialBtn.addEventListener("click",()=>{

winPage.classList.add("hidden");

countdownPage.classList.remove("hidden");

let count = 10;

const countdown =
document.getElementById("countdown");

const timer = setInterval(()=>{

countdown.innerText = count;

count--;

if(count < 0){

clearInterval(timer);

countdownPage.classList.add("hidden");

letterPage.classList.remove("hidden");

}

},1000);

});
// ==========================
// LOVE MESSAGES
// ==========================

const loveMessages = [

"Hello Bby ❤️",
"I Love You ❤️",
"I Miss You ❤️",
"Shivi Ki Pyari Cute Mummy ❤️",
"Meri Bituuuu ❤️",
"Bubiii Loves You ❤️",
"Tum Meri Duniya Ho ❤️",
"Tum Meri Smile Ho ❤️",
"Tum Meri Khushi Ho ❤️",
"Forever Together ❤️"

];

// ==========================
// FLOATING LOVE TEXT
// ==========================

function createLoveText(){

const text =
document.createElement("div");

text.classList.add("loveText");

text.innerHTML =
loveMessages[
Math.floor(
Math.random()
*
loveMessages.length
)
];

text.style.left =
Math.random()*80 + "vw";

document.body.appendChild(text);

setTimeout(()=>{

text.remove();

},6000);

}

setInterval(
createLoveText,
2500
);

// ==========================
// HEART RAIN
// ==========================

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add(
"fallingHeart"
);

heart.innerHTML =
["❤️","💖","💕","💘","💝"]
[Math.floor(Math.random()*5)];

heart.style.left =
Math.random()*100+"vw";

heart.style.animationDuration =
(Math.random()*4+5)+"s";

document
.getElementById("heartContainer")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(
createHeart,
180
);

// ==========================
// RANDOM QUIZ POPUP
// ==========================

// ==========================
// EXTRA HEART BURST
// ==========================

function burstHearts(){

for(let i=0;i<30;i++){

setTimeout(()=>{

createHeart();

},i*60);

}

}

specialBtn.addEventListener(
"click",
burstHearts
);