const container = document.querySelector(".quote");

const QT_NB = 3;

const quotes = [
    {
        writer: 'John Keats',
        text: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.' 
    },
    {
        writer: 'Socrates',
        text: 'The only true wisdom is in knowing you know nothing.'
    },
    {
        writer: 'Helen Keller',
        text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'
    }
]

function genRandom(){
    const randomNb = Math.floor(Math.random() * QT_NB);
    container.innerText = `${quotes[randomNb].text}
    ${quotes[randomNb].writer}`;
    
}

function init(){
    genRandom();
}

init()