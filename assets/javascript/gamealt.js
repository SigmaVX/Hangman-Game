

//Create an array of top 100 movies
var movies = ["STAR WARS THE FORCE AWAKENS", "AVATAR", "TITANIC", "JURASSIC WORLD", "THE AVENGERS", "STAR WARS THE LAST JEDI", "THE DARK KNIGHT", "ROGUE ONE A STAR WARS STORY", "BEAUTY AND THE BEAST", "FINDING DORY", "STAR WARS EPISODE I  THE PHANTOM MENACE", "STAR WARS", "AVENGERS AGE OF ULTRON", "THE DARK KNIGHT RISES", "SHREK 2", "ET THE EXTRATERRESTRIAL", "THE HUNGER GAMES CATCHING FIRE", "PIRATES OF THE CARIBBEAN DEAD MANS CHEST", "THE LION KING", "TOY STORY 3", "WONDER WOMAN", "IRON MAN 3", "CAPTAIN AMERICA CIVIL WAR", "THE HUNGER GAMES", "SPIDERMAN", "JURASSIC PARK", "TRANSFORMERS REVENGE OF THE FALLEN", "FROZEN", "GUARDIANS OF THE GALAXY VOL 2", "HARRY POTTER AND THE DEATHLY HALLOWS PART 2", "FINDING NEMO", "STAR WARS EPISODE III  REVENGE OF THE SITH", "THE LORD OF THE RINGS THE RETURN OF THE KING", "SPIDERMAN 2", "THE PASSION OF THE CHRIST", "THE SECRET LIFE OF PETS", "DESPICABLE ME 2", "THE JUNGLE BOOK", "DEADPOOL", "INSIDE OUT", "JUMANJI WELCOME TO THE JUNGLE", "FURIOUS 7", "TRANSFORMERS DARK OF THE MOON", "AMERICAN SNIPER", "THE LORD OF THE RINGS THE TWO TOWERS", "ZOOTOPIA", "THE HUNGER GAMES MOCKINGJAY  PART 1", "SPIDERMAN 3", "MINIONS", "SPIDERMAN HOMECOMING", "ALICE IN WONDERLAND", "GUARDIANS OF THE GALAXY", "BATMAN V SUPERMAN DAWN OF JUSTICE", "FORREST GUMP", "IT", "SUICIDE SQUAD", "SHREK THE THIRD", "TRANSFORMERS", "IRON MAN", "HARRY POTTER AND THE SORCERERS STONE", "INDIANA JONES AND THE KINGDOM OF THE CRYSTAL SKULL", "THE LORD OF THE RINGS THE FELLOWSHIP OF THE RING", "THOR RAGNAROK", "IRON MAN 2", "STAR WARS EPISODE II  ATTACK OF THE CLONES", "PIRATES OF THE CARIBBEAN AT WORLDS END", "RETURN OF THE JEDI", "INDEPENDENCE DAY", "PIRATES OF THE CARIBBEAN THE CURSE OF THE BLACK PEARL", "SKYFALL", "THE HOBBIT AN UNEXPECTED JOURNEY", "HARRY POTTER AND THE HALFBLOOD PRINCE", "THE TWILIGHT SAGA ECLIPSE", "THE TWILIGHT SAGA NEW MOON", "HARRY POTTER AND THE DEATHLY HALLOWS PART 1", "THE SIXTH SENSE", "UP", "INCEPTION", "THE TWILIGHT SAGA BREAKING DAWN PART 2", "HARRY POTTER AND THE ORDER OF THE PHOENIX", "THE CHRONICLES OF NARNIA THE LION THE WITCH AND THE WARDROBE", "MAN OF STEEL", "THE EMPIRE STRIKES BACK", "HARRY POTTER AND THE GOBLET OF FIRE", "MONSTERS INC", "HOME ALONE", "THE HUNGER GAMES MOCKINGJAY  PART 2", "THE MATRIX RELOADED", "THE TWILIGHT SAGA BREAKING DAWN PART 1", "MEET THE FOCKERS", "THE HANGOVER", "GRAVITY", "SING", "MONSTERS UNIVERSITY", "SHREK", "DESPICABLE ME 3", "THE AMAZING SPIDERMAN", "HARRY POTTER AND THE CHAMBER OF SECRETS", "THE INCREDIBLES", "HOW THE GRINCH STOLE CHRISTMAS"];

// Array For Storing Wrong Gusses
var wrongLetters = [ ];

// Array For Storing Right Gusses
var rightLetters = [ ];

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

 // Masked Word
 var maskedHTML = document.getElementById("maskedWord");

 // Get Started Message
var getStartedHTML = document.getElementById("startMessage"); 

 //  System Message
 var messageHTML = document.getElementById("message"); 

var maskString = "";

var wrongString = "";

var rightString = "";


//Start The Game
function startGame(){    
    // Guesses and Arrays Reset
    guesses = 10;
    rightLetters = [];
    wrongLetters = [];
    guessesRemainingHTML.textContent = guesses;
    wrongString = wrongLetters.join("");
    wrongLettersHTML.textContent = wrongString; 

    // Computer Randomly Picks Word
    var wordPick = movies[Math.floor(Math.random() * 100)];
    console.log(wordPick);

    // Add The Word To HTML 
    wordHTML.textContent = wordPick;
    wordHTML.style.visibility = "hidden";

    // Masks The Word On Page Using An Empty Array 
    var mask = [];
    // Loop Through Word To Build Masked Array
    for (var i=0; i < wordPick.length ; i++){
        if (wordPick.charAt(i) === " "){
        mask[i] = wordPick.charAt(i);
        }

        else {
        mask[i] = "_";
        }

        // Puts Masked Array Into A String On HTML
        var maskString = mask.join("");
        maskedHTML.textContent = maskString;    
    } 

    // Log User's Guess & Convert To Upper Case
    document.onkeyup = function(event) {
        var guess = event.key.toUpperCase();
        console.log(guess);
        
        // Converts Arrays To Sring To Search If Letter Was Already Guessed 
        rightString = rightLetters.join("");
        wrongString = wrongLetters.join("");
        if(rightString.includes(guess) === true || wrongString.includes(guess) === true){
            alert("What's Up?  You Already Tried This Letter.");
        }
        
        else {
            
            // Loop Checking User's Guess
            for (var i=0; i < wordPick.length; i++){
                
                // Code If Right
                if (wordPick.charAt(i) === guess){
                    console.log("letter found");
                    mask[i] = guess;

                    // Puts Masked Array Into A String On HTML
                    maskString = mask.join("");
                    maskedHTML.textContent = maskString;
                    
                    // Checks If Right Is Already In Array & Stores It 
                    if (rightLetters.indexOf(guess) === -1){
                        rightLetters.push(guess);
                        console.log(rightLetters);
                    }
                    else {    
                    // Do Nothing & Alert
                    console.log("correct letter already added to array");
                    }
                }
                else {
                    // Do Nothing
                    console.log("nothing to do for this part of the loop");
                }   
            }
        }
            // Code If Wrong
            if (!maskString.includes(guess)) {
                if (wrongLetters.indexOf(guess) === -1){
                    wrongLetters.push(guess);
                    console.log("wrong letter");
                    console.log(wrongLetters);
                    guesses--;
                    console.log(guesses);
                    guessesRemainingHTML.textContent = guesses;

                    // Puts Wrong Letters Into Array & A String On HTML
                    wrongString = wrongLetters.join("");
                    wrongLettersHTML.textContent = wrongString;
                    // guessesLeft--;
                    }
    
                else {
                // Do Nothing
                console.log("already guessed incorrect letter");
                }
                }
            else {
                // Do Nothing
                console.log("do nothing here");
            } 
            
            // Code If Win | Finished The Word
            if (maskString === wordPick){
                wordHTML.style.visibility = "visible";
                alert("winner winner chicken dinner. Shall We Play Again?");
                wins++;
                winsHTML.textContent = wins;
                startGame();
            }
            else{
                // Do Nothing
            }    


            // Game Over Code | If Out Of Guesses
            if (guesses === 0){
                wordHTML.style.visibility = "visible";
                alert("I get knocked down but I get up again.  Shale We Play Again?");
                losses++;
                lossesHTML.textContent = losses;
                startGame();
            }
            else{
                // Do Nothing
            }



        } 
}


// if wrong - show mistake, show letter guessed, decrement the words left coutner
// if word counter runs out game is over and increment losses


// if guess all letters, run annimation, and increment wins


// ask to restart game with button


