function showMessage() {

    document.getElementById("bgMusic").play();
    document.getElementById("message").style.display = "block";
    document.getElementById("gift").style.display = "block";
}

function openGift() {
    document.getElementById("gift").style.display = "none";
    document.getElementById("letter").style.display = "block";
}

function blowCandles(){

    document.getElementById("cakeImage").src = "image/cake blown.png";

    createConfetti();

    setTimeout(function(){

        alert("🎉 Happy Birthday! Make a Wish! ❤️");

    },500);

}
let text =
"🎂✨ Happy Birthday to my favourite person 🎊\n\n" +
"Tula majhya baddal kay vatta he mala mahit nahi... 🧿🥰\n\n" +
"Pan majhya sathi tu nehmi ch khup khas rahshil. 😌❤️‍🩹\n\n" +
"Tujha hasan, tujha bolan ani fakt tujh asan suddha manala khup chhan vatta. 💖🤌🏻🪐\n\n" +
"Mazi ekach ichha aahe—tu nehmi ch anandi rahava, tuzhi pratyek swapna purn vhavit ani tula ayushyatil pratyek anand milava, jyacha tu kharach hakdaar ahes. 😭💗🌸\n\n" +
"Kadachit majhya feelings tula kadhich samajnar nahit, pan majhya shubhechha ani prarthana nehmi ch tujhya sobat astil. 🥹❤️‍🩹🧿\n\n" +
"🎉 Happy Birthday... Stay Happy, Stay Blessed and Keep Shining Always. 🌏❤️‍🩹🫂";

let index = 0;

function typeLetter() {

    let area = document.getElementById("typing");

    area.innerHTML = "";

    index = 0;

    let timer = setInterval(function(){

        area.innerHTML += text.charAt(index);

        index++;

        if(index >= text.length){
            clearInterval(timer);
        }

    },40);
}

function openGift(){

    document.getElementById("gift").style.display="none";

    document.getElementById("letter").style.display="block";

    typeLetter();
}

let popped = 0;

const words = [
    "You ❤️",
    "Will Always 💕",
    "Be My 💖",
    "Favourite 🌸",
    "Person 🥹❤️"
];

function popBalloon(balloon){

    balloon.innerHTML = words[popped];
    balloon.style.fontSize = "22px";
    balloon.style.pointerEvents = "none";

    popped++;

    if(popped == 5){

        document.getElementById("cakeBtn").style.display = "block";

        setTimeout(function(){

            alert("🎉 Yay! Happy Birthday ❤️");

        },500);
    }
}
function createConfetti(){

    const container = document.getElementById("confetti-container");

    for(let i=0;i<100;i++){

        let confetti = document.createElement("div");

        confetti.className="confetti";

        confetti.style.left = Math.random()*100 + "vw";

        confetti.style.animationDelay = Math.random()*3 + "s";

        confetti.style.backgroundColor =
        "hsl(" + Math.random()*360 + ",100%,50%)";

        container.appendChild(confetti);

    }

}

createConfetti();
function createHearts(){

    let container = document.getElementById("hearts-container");

    setInterval(function(){

        let heart = document.createElement("div");

        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left = Math.random()*100 + "vw";

        heart.style.animationDuration =
        (3 + Math.random()*3) + "s";

        container.appendChild(heart);


        setTimeout(function(){
            heart.remove();
        },6000);


    },300);

}

createHearts();
function createSparkles(){

    let container = document.getElementById("sparkle-container");

    setInterval(function(){

        let sparkle = document.createElement("div");

        sparkle.className="sparkle";
        sparkle.innerHTML="✨";

        sparkle.style.left = Math.random()*100 + "vw";
        sparkle.style.top = Math.random()*100 + "vh";

        sparkle.style.animationDuration =
        (2 + Math.random()*2) + "s";

        container.appendChild(sparkle);


        setTimeout(function(){
            sparkle.remove();
        },3000);


    },200);

}

createSparkles();
function showGiftBox(){

    document.getElementById("cakeSection").style.display = "none";

    document.getElementById("gift-box").style.display = "block";

}
function playMusic(){

    document.getElementById("bgMusic").play();

}


function pauseMusic(){

    document.getElementById("bgMusic").pause();

}
function shareWebsite(){

    if(navigator.share){

        navigator.share({
            title:"Birthday Surprise ❤️",
            text:"Open this special surprise 🎁",
            url:window.location.href
        });

    }

    else{

        alert("Copy this link and share: " + window.location.href);

    }

}
function showBalloonGame(){

document.getElementById("balloonGame").style.display="block";

}
function showCake(){

    document.getElementById("cakeSection").style.display = "block";

    document.getElementById("cakeSection").scrollIntoView({
        behavior: "smooth"
    });

}
function showVideo(){

    // Cake section hide
    document.getElementById("cakeSection").style.display = "none";

    // Video section show
    document.getElementById("videoSection").style.display = "block";

    // Video auto play
    document.getElementById("birthdayVideo").play();

    document.getElementById("videoSection").scrollIntoView({
        behavior: "smooth"
    });

}
function openLastGift(){

    document.getElementById("gift-box").style.display = "none";

    document.getElementById("videoSection").style.display = "block";

    document.getElementById("birthdayVideo").play();

    document.getElementById("videoSection").scrollIntoView({
        behavior:"smooth"
    });

}
