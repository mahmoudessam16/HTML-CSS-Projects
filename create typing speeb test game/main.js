const words = ["Hello", "Programming", "Code", "Javascript","town", "country", "testing","youtube", "linkedin", 
"twitter", "github", "leetcode", "internet", "python", "scala", "Destructuring", "paradigm", "styling", "cascade",
"Documentation", "coding", "funny", "working", "dependencies", "task", "runner", "rules", "test", "Rust", "playing"];

const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

// default level
let DefaultLevelName = "Normal";
let DefaultLevelSeconds = lvls[DefaultLevelName];


// Catch Selectore
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector("upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");


// Setting Level name + seconds + Score
lvlNameSpan.innerHTML = DefaultLevelName;
secondsSpan.innerHTML = DefaultLevelSeconds;
timeLeftSpan.innerHTML = DefaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable paste event 

input.onpaste = function () {
    return false;
}

// Start Game
startButton.onclick = function () {
    this.remove();
    input.focus();
    // generate word function
    genWords();
}



function genWords() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
    theword.innerHTML = randomWord;
    upcomingWords.innerHTML = '';
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
}
