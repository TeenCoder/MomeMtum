const body = document.querySelector("body");

const IMG_NB = 4;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1 }.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const randomNumber = Math.floor(Math.random() * IMG_NB);
    return randomNumber;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();