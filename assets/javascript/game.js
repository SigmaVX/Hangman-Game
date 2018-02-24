$( document ).ready(function() {

//Create an array of top 100 movies
var movies = ["STAR WARS THE FORCE AWAKENS", "AVATAR", "TITANIC", "JURASSIC WORLD", "THE AVENGERS", "STAR WARS THE LAST JEDI", "THE DARK KNIGHT", "ROGUE ONE A STAR WARS STORY", "BEAUTY AND THE BEAST", "FINDING DORY", "STAR WARS EPISODE I  THE PHANTOM MENACE", "STAR WARS", "AVENGERS AGE OF ULTRON", "THE DARK KNIGHT RISES", "SHREK 2", "ET THE EXTRATERRESTRIAL", "THE HUNGER GAMES CATCHING FIRE", "PIRATES OF THE CARIBBEAN DEAD MANS CHEST", "THE LION KING", "TOY STORY 3", "WONDER WOMAN", "IRON MAN 3", "CAPTAIN AMERICA CIVIL WAR", "THE HUNGER GAMES", "SPIDERMAN", "JURASSIC PARK", "TRANSFORMERS REVENGE OF THE FALLEN", "FROZEN", "GUARDIANS OF THE GALAXY VOL 2", "HARRY POTTER AND THE DEATHLY HALLOWS PART 2", "FINDING NEMO", "STAR WARS EPISODE III  REVENGE OF THE SITH", "THE LORD OF THE RINGS THE RETURN OF THE KING", "SPIDERMAN 2", "THE PASSION OF THE CHRIST", "THE SECRET LIFE OF PETS", "DESPICABLE ME 2", "THE JUNGLE BOOK", "DEADPOOL", "INSIDE OUT", "JUMANJI WELCOME TO THE JUNGLE", "FURIOUS 7", "TRANSFORMERS DARK OF THE MOON", "AMERICAN SNIPER", "THE LORD OF THE RINGS THE TWO TOWERS", "ZOOTOPIA", "THE HUNGER GAMES MOCKINGJAY  PART 1", "SPIDERMAN 3", "MINIONS", "SPIDERMAN HOMECOMING", "ALICE IN WONDERLAND", "GUARDIANS OF THE GALAXY", "BATMAN V SUPERMAN DAWN OF JUSTICE", "FORREST GUMP", "IT", "SUICIDE SQUAD", "SHREK THE THIRD", "TRANSFORMERS", "IRON MAN", "HARRY POTTER AND THE SORCERERS STONE", "INDIANA JONES AND THE KINGDOM OF THE CRYSTAL SKULL", "THE LORD OF THE RINGS THE FELLOWSHIP OF THE RING", "THOR RAGNAROK", "IRON MAN 2", "STAR WARS EPISODE II  ATTACK OF THE CLONES", "PIRATES OF THE CARIBBEAN AT WORLDS END", "RETURN OF THE JEDI", "INDEPENDENCE DAY", "PIRATES OF THE CARIBBEAN THE CURSE OF THE BLACK PEARL", "SKYFALL", "THE HOBBIT AN UNEXPECTED JOURNEY", "HARRY POTTER AND THE HALFBLOOD PRINCE", "THE TWILIGHT SAGA ECLIPSE", "THE TWILIGHT SAGA NEW MOON", "HARRY POTTER AND THE DEATHLY HALLOWS PART 1", "THE SIXTH SENSE", "UP", "INCEPTION", "THE TWILIGHT SAGA BREAKING DAWN PART 2", "HARRY POTTER AND THE ORDER OF THE PHOENIX", "THE CHRONICLES OF NARNIA THE LION THE WITCH AND THE WARDROBE", "MAN OF STEEL", "THE EMPIRE STRIKES BACK", "HARRY POTTER AND THE GOBLET OF FIRE", "MONSTERS INC", "HOME ALONE", "THE HUNGER GAMES MOCKINGJAY  PART 2", "THE MATRIX RELOADED", "THE TWILIGHT SAGA BREAKING DAWN PART 1", "MEET THE FOCKERS", "THE HANGOVER", "GRAVITY", "SING", "MONSTERS UNIVERSITY", "SHREK", "DESPICABLE ME 3", "THE AMAZING SPIDERMAN", "HARRY POTTER AND THE CHAMBER OF SECRETS", "THE INCREDIBLES", "HOW THE GRINCH STOLE CHRISTMAS"];

// Array For Storing Encouragement
var encouragement = ["I’m Your Huckleberry!", "They Call Me Leerooooy Jenkinnnnns!", "Breaking News: Its Hip To Be Square!", "Party Time! Excellent!", "Lets Make A sandwich because I’m cheesy & your on a Roll.", "I'm Better At Chess", "Here's Looking At You, Kid.", "Show Me The Money!", "I'll Have What She's Having.", "I love the smell of binary in the morning."];
var randomEncouragement = "";

// Array For Storing Jeers
var jeers = ["Ouch!", "That Just Hurts", "Think McFly Think", "Now That's Just Silly", "For Reelz?", "I'm Speechless.", " Houston, we have a problem.", " You can't handle the truth!", "Living La Vida Luddite?", "There's no crying in Baseball or Hangman!"];
var randomJeers = "";

// Virtual Keyboard For Mobile 
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8","9","0"];

// Array For Storing Wrong Gusses
var wrongLetters = [ ];

// Array For Storing Right Gusses
var rightLetters = [ ];
var rightLettersString = "";

// User Guess
var guess = "";

// Mobile Keyboard Guess
var mobileLetterGuess="";
var letterBtn = "";

// To Indicate If Game Has Started
var gameActive = false;

// Total Wins
 var winsHTML = document.getElementById("wins");
 var wins = 0;

 // Total Losses
 var lossesHTML = document.getElementById("losses");
 var losses = 0;

 // Guesses Remaining On Current Game
 var guessesRemainingHTML = document.getElementById("guesses");
 var guesses = 0;

 // Wrong Letters Guessed On Current Game
 var wrongLettersHTML = document.getElementById("wrongLetters");

 // The Selected Hangman Word
 var wordHTML = document.getElementById("word"); 
 var wordPick ="";

 // Masked Word
 var maskedHTML = document.getElementById("maskedWord");
 var maskString = "";
 var mask = [];

 // System Message
 var jumbotron = document.getElementsByClassName("jumbotron");
 var messageHTML = document.getElementById("message"); 

 // Start Button
 var startButton = document.getElementById("startbtn");

 // Holds The Sring Version Of The Mask 
var maskString = "";

 // Holds The Sring Version Of Wrong Guesses
var wrongString = "";

 // Holds The Sring Version Of Right Guesses
var rightString = "";

// Holds The Background Image
var image = document.getElementById("background");

// Holds Audio File
var sound = document.getElementById("audio");


// Functions
// ======================================================

// Function For Playing Sound
window.onload = function() {
    document.getElementById("audio").play();
}

// Function For Playing Random Cheer
var randomCheerSound = function  () {
    var luck = Math.floor(Math.random() * 2);
    console.log("Cheer Luck Factor Was: " + luck);
    if (luck === 1){
        sound.pause();
        document.getElementById("startSound").pause();
        var i = Math.floor(Math.random() * 10) + 1;
        console.log("Cheer random number is: " + i);
        switch (i) {
            case 1:
                sound.setAttribute("src", "./assets/sound/cheers/Youre incredible.mp3");
                break;
            case 2:
                sound.setAttribute("src", "./assets/sound/cheers/No one can be told.mp3");
                break;
            case 3:
                sound.setAttribute("src", "./assets/sound/cheers/raven.mp3");
                break;
            case 4:
                sound.setAttribute("src", "./assets/sound/cheers/paint chips.mp3");
                break;
            case 5:
                sound.setAttribute("src", "./assets/sound/cheers/Shirley.mp3");
                break;
            case 6:
                sound.setAttribute("src", "./assets/sound/cheers/Im a Dude.mp3");
                break;
            case 7:
                sound.setAttribute("src", "./assets/sound/cheers/watching you.mp3");
                break;
            case 8:
                sound.setAttribute("src", "./assets/sound/cheers/drinks.mp3");
                break;
            case 9:
                sound.setAttribute("src", "./assets/sound/cheers/Sweet.mp3");
                break;
            case 10:
                sound.setAttribute("src", "./assets/sound/cheers/youcandoit.mp3");
                break;
            case 11:
                sound.setAttribute("src", "./assets/sound/cheers/important.mp3");
                break;
        }
    sound.play();
    }
}


// Function For Playing Random Jeer
var randomJeerSound = function  () {
    var luck = Math.floor(Math.random() * 2);
    console.log("Jeer Luck Factor Was: " + luck);
    if (luck === 1 && guesses > 1){
        sound.pause();
        document.getElementById("startSound").pause();
        var i = Math.floor(Math.random() * 13) + 1;
        console.log("Jeer random number is: " + i);
        switch (i) {
            case 1:
                sound.setAttribute("src", "./assets/sound/jeers/baby.mp3");
                break;
            case 2:
                sound.setAttribute("src", "./assets/sound/jeers/bad.mp3");
                break;
            case 3:
                sound.setAttribute("src", "./assets/sound/jeers/Cougar.mp3");
                break;
            case 4:
                sound.setAttribute("src", "./assets/sound/jeers/Evil Laugh.mp3");
                break;
            case 5:
                sound.setAttribute("src", "./assets/sound/jeers/gameover.mp3");
                break;
            case 6:
                sound.setAttribute("src", "./assets/sound/jeers/How You Doing There.mp3");
                break;
            case 7:
                sound.setAttribute("src", "./assets/sound/jeers/Im gonna eat you.mp3");
                break;
            case 8:
                sound.setAttribute("src", "./assets/sound/jeers/iqs.mp3");
                break;
            case 9:
                sound.setAttribute("src", "./assets/sound/jeers/Mmkay.mp3");
                break;
            case 10:
                sound.setAttribute("src", "./assets/sound/jeers/zero.mp3");
                break;
            case 11:
                sound.setAttribute("src", "./assets/sound/jeers/MvFly Laugh.mp3");
                break;
            case 12:
                sound.setAttribute("src", "./assets/sound/jeers/thinkmcfly.mp3");
                break;
            case 13:
                sound.setAttribute("src", "./assets/sound/jeers/Ever.mp3");
                break;    
            
        }
        sound.play();
    }
}


// Create Letter Buttons With jQuery
for (var i=0; i<letters.length; i++){
    letterBtn = $("<div>").html(letters[i]);
    $(letterBtn).attr("class", "letter-button text-center col-3 no-gutters");
    $(letterBtn).attr("data-letter", letters[i] );
    $("#buttons").append(letterBtn);
}

if (window.matchMedia("(min-width: 900px)").matches) {
    //  Viewport is at least 900 pixels wide
    document.getElementById("buttons").style.display = "none";
    } else {
        // Viewport is less than 900 pixels wide
        document.getElementById("buttons").style.display = "flex";
    }   


//Function For Starting The Game
function startGame(){
    console.log("Game Started");

    // Reset Guesses and Arrays Reset
    gameActive = true;
    guesses = 10;
    rightLetters = [];
    wrongLetters = [];
    correctCount = 0;
    guessesRemainingHTML.textContent = guesses;
    wrongString = wrongLetters.join("");
    wrongLettersHTML.textContent = wrongString;
    startButton.style.visibility = "hidden"; 
    messageHTML.textContent = "This Is A Top 100 Movie.  EZ PZ Right?";
    image.style.backgroundImage = "url('./assets/images/circuit2.jpeg')";



    document.getElementById("startSound").play();

    // Computer Randomly Picks Word
    wordPick = movies[Math.floor(Math.random() * 100)];
    console.log(wordPick);

    // Add The Word To HTML 
    wordHTML.textContent = wordPick;
    wordHTML.style.visibility = "hidden";

    // Loop Through Word To Build Masked Array
    for (var i=0; i < wordPick.length ; i++){
        if (wordPick.charAt(i) === " "){
            mask[i] = wordPick.charAt(i);
        }

        else {
            mask[i] = "_";
        }

        // Puts Masked Array Into A String On HTML
        maskString = mask.join("");
        maskedHTML.textContent = maskString;    
    } 
}


// Function For Checking Each Guess 
function check(){
    
    // Converts Arrays To Sring To Search If Letter Was Already Guessed 
    rightString = rightLetters.join("");
    wrongString = wrongLetters.join("");
    if(rightString.includes(guess) === true || wrongString.includes(guess) === true){
        messageHTML.textContent = "What's Up?  You Already Tried This Letter.";
    }
    
    else {

        // Loop Checking User's Guess
        for (var i=0; i < wordPick.length; i++){
            
            // Code If Right
            if (wordPick.charAt(i) === guess){
                console.log("a: letter found");
                mask[i] = guess;
                console.log(wordPick);
                                    
                // Post Random Encouragement Message To User 
                randomEncouragement = encouragement[Math.floor(Math.random() * 10)];
                messageHTML.textContent = randomEncouragement;

                // Puts Masked Array Into A String On HTML
                maskString = mask.join("");
                maskedHTML.textContent = maskString;
                
                // Checks If Right Is Already In Array & Stores It 
                rightLettersString = rightLetters.join("");
                if (!rightLettersString.includes(guess)){
                    rightLetters.push(guess);
                    console.log("Right Letters Array: " + rightLetters);
                    correctCount++;
                    console.log("Correct Count: " + correctCount);
                    randomCheerSound();
                    
                }   
            }
        }
    }
    
    // Code If Wrong
    if (!maskString.includes(guess)) {
        if (wrongLetters.indexOf(guess) === -1){
            wrongLetters.push(guess);
            console.log("d: wrong letter");
            console.log(wrongLetters);
            guesses--;
            console.log("Guesses: " + guesses);
            guessesRemainingHTML.textContent = guesses;
            randomJeerSound();

                // Post Random Jeer Message To User 
                randomJeers = jeers[Math.floor(Math.random() * 10)];
                messageHTML.textContent = randomJeers;

            
            // Puts Wrong Letters Into Array & A String On HTML
            wrongString = wrongLetters.join("");
            wrongLettersHTML.textContent = "(Wrong Picks: " + wrongString + ")";
            }    
        }
    
    // Code If Win | Finished The Word
    if (maskString === wordPick){
        wordHTML.style.visibility = "visible";
        startButton.style.visibility = "visible";
        messageHTML.innerHTML = "Winner Winner Chicken Dinner!<br>Shall We Play Again?";
        wins++;
        winsHTML.textContent = wins;
        sound.pause();
        document.getElementById("winSound").play(); 
        if (window.matchMedia("(min-width: 640px)").matches) {
            //  Viewport is at least 640 pixels wide
            image.style.backgroundImage = "url('./assets/images/green-circuit.jpg')";
            } else {
                // Viewport is less than 900 pixels wide
                image.style.backgroundImage = "url('./assets/images/green-circuit.jpg')";
            }   
    }
    
    // Game Over Code | Out Of Guesses
    if (guesses === 0){    
        wordHTML.style.visibility = "visible";
        startButton.style.visibility = "visible";
        messageHTML.innerHTML = "Game Over!<br>Shall We Play Again?";
        losses++;
        lossesHTML.textContent = losses;
        sound.pause();
        document.getElementById("lostSound").play();
        if (window.matchMedia("(min-width: 640px)").matches) {
            //  Viewport is at least 640 pixels wide
            image.style.backgroundImage = "url('./assets/images/red-circuit.jpg')";
        } else {
            // Viewport is less than 900 pixels wide
            image.style.backgroundImage = "url('./assets/images/mobile-red-circuit.jpg')";
        }   
    }
} 


// Event Listeners
// ========================================================

    // Start Game Button
    startButton.addEventListener("click", startGame);

    // Log User's Guess With Keyboard & Convert To Upper Case
    document.onkeyup = function(event) {
        if(gameActive === true){
            guess = event.key.toUpperCase();
            console.log(guess);
            check();
        }
    }

// Attach Value To Letter Buttons With Each Click
// document.getElementsByClassName("letter-button").onclick = function(){
//     guess = this.setAttribute("data-letter");
//     console.log("Mobile Letter Guess: " + guess);
//     check();
// };

    $(".letter-button").on("click", function() {
        guess = $(this).attr("data-letter");
        console.log("Mobile Letter Guess: " + guess);
        check();
    });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
});

