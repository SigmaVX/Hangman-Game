

//Create an array of top 100 movies
var movies = ["STAR WARS THE FORCE AWAKENS", "AVATAR", "TITANIC", "JURASSIC WORLD", "THE AVENGERS", "STAR WARS THE LAST JEDI", "THE DARK KNIGHT", "ROGUE ONE A STAR WARS STORY", "BEAUTY AND THE BEAST", "FINDING DORY", "STAR WARS EPISODE I  THE PHANTOM MENACE", "STAR WARS", "AVENGERS AGE OF ULTRON", "THE DARK KNIGHT RISES", "SHREK 2", "ET THE EXTRATERRESTRIAL", "THE HUNGER GAMES CATCHING FIRE", "PIRATES OF THE CARIBBEAN DEAD MANS CHEST", "THE LION KING", "TOY STORY 3", "WONDER WOMAN", "IRON MAN 3", "CAPTAIN AMERICA CIVIL WAR", "THE HUNGER GAMES", "SPIDERMAN", "JURASSIC PARK", "TRANSFORMERS REVENGE OF THE FALLEN", "FROZEN", "GUARDIANS OF THE GALAXY VOL 2", "HARRY POTTER AND THE DEATHLY HALLOWS PART 2", "FINDING NEMO", "STAR WARS EPISODE III  REVENGE OF THE SITH", "THE LORD OF THE RINGS THE RETURN OF THE KING", "SPIDERMAN 2", "THE PASSION OF THE CHRIST", "THE SECRET LIFE OF PETS", "DESPICABLE ME 2", "THE JUNGLE BOOK", "DEADPOOL", "INSIDE OUT", "JUMANJI WELCOME TO THE JUNGLE", "FURIOUS 7", "TRANSFORMERS DARK OF THE MOON", "AMERICAN SNIPER", "THE LORD OF THE RINGS THE TWO TOWERS", "ZOOTOPIA", "THE HUNGER GAMES MOCKINGJAY  PART 1", "SPIDERMAN 3", "MINIONS", "SPIDERMAN HOMECOMING", "ALICE IN WONDERLAND", "GUARDIANS OF THE GALAXY", "BATMAN V SUPERMAN DAWN OF JUSTICE", "FORREST GUMP", "IT", "SUICIDE SQUAD", "SHREK THE THIRD", "TRANSFORMERS", "IRON MAN", "HARRY POTTER AND THE SORCERERS STONE", "INDIANA JONES AND THE KINGDOM OF THE CRYSTAL SKULL", "THE LORD OF THE RINGS THE FELLOWSHIP OF THE RING", "THOR RAGNAROK", "IRON MAN 2", "STAR WARS EPISODE II  ATTACK OF THE CLONES", "PIRATES OF THE CARIBBEAN AT WORLDS END", "RETURN OF THE JEDI", "INDEPENDENCE DAY", "PIRATES OF THE CARIBBEAN THE CURSE OF THE BLACK PEARL", "SKYFALL", "THE HOBBIT AN UNEXPECTED JOURNEY", "HARRY POTTER AND THE HALFBLOOD PRINCE", "THE TWILIGHT SAGA ECLIPSE", "THE TWILIGHT SAGA NEW MOON", "HARRY POTTER AND THE DEATHLY HALLOWS PART 1", "THE SIXTH SENSE", "UP", "INCEPTION", "THE TWILIGHT SAGA BREAKING DAWN PART 2", "HARRY POTTER AND THE ORDER OF THE PHOENIX", "THE CHRONICLES OF NARNIA THE LION THE WITCH AND THE WARDROBE", "MAN OF STEEL", "THE EMPIRE STRIKES BACK", "HARRY POTTER AND THE GOBLET OF FIRE", "MONSTERS INC", "HOME ALONE", "THE HUNGER GAMES MOCKINGJAY  PART 2", "THE MATRIX RELOADED", "THE TWILIGHT SAGA BREAKING DAWN PART 1", "MEET THE FOCKERS", "THE HANGOVER", "GRAVITY", "SING", "MONSTERS UNIVERSITY", "SHREK", "DESPICABLE ME 3", "THE AMAZING SPIDERMAN", "HARRY POTTER AND THE CHAMBER OF SECRETS", "THE INCREDIBLES", "HOW THE GRINCH STOLE CHRISTMAS"];


// Array For Storing Wrong Gusses
var wrongLetters = [ ];

// Array For Storing Right Gusses
var rightLetters = [ ];


// Declair & Link Variables From HTML
// Total Wins
 var winsHTML = document.getElementById("wins");
// Total Losses
 var lossesHTML = document.getElementById("losses");
// Guesses Remaining On Current Game
 var guessesHTML = document.getElementById("guesses");
// Wrong Letters Guesses On Current Game
 var wrongLettersHTML = document.getElementById("wrongLetters");
// The Selected Hangman Word
 var wordHTML = document.getElementById("word"); 
// Get Started Message
 var getStartedHTML = document.getElementById("startMessage"); 
// Masked Word
 var maskedHTML = document.getElementById("maskedWord");
//  System Message
 var messageHTML = document.getElementById("message"); 




//Start The Game
function startGame(){    
     
    // Computer Randomly Picks Word
    var wordPick = movies[Math.floor(Math.random() * 100)];
    console.log(wordPick);

    // Add The Word To HTML 
    wordHTML.textContent = wordPick;

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

    // Log User's Guess
    document.onkeyup = function(event) {
        var guess = event.key.toUpperCase();
        console.log(guess);
    
        for (var i=0; i < wordPick.length; i++){
            // Code If Right
            if (wordPick.charAt(i) === guess){
                console.log("letter found");
                mask[i] = guess;
                // Puts Masked Array Into A String On HTML
                var maskString = mask.join("");
                maskedHTML.textContent = maskString;
                
                // Stores Right Letter In Array
                // Checks If Right Is Already In Array
                if (rightLetters.indexOf(guess) === -1){
                    rightLetters.push(guess);
                    console.log(rightLetters);
                    }
                    else {
                        
                    }
            }
            // Code If Wrong
            else {
                // Checks If Wrong Is Already In Array
                if (wrongLetters.indexOf(guess) === -1){
                wrongLetters.push(guess);
                console.log(wrongLetters);
                }
                else {
                    // messageHTML.textContent = "You Already Tried This.";
                    // console.log(wrongLetters);
                }
            
            } 
        }
    }
}

// Add guess to array
    // document.onkeyup = function(event) {
    //     userGuessegs.push(event.key.toLowerCase());
    //     console.log(userGuesses);
    // }

    // Check If User Letter Is A Match
    // Loops through word at each position in array




// user enters leter 
// computer checks if letter is accurate
// computer sees if letter has been guesses before - if yes prompt
// if correct - show letter in hidden word and annimation
// if wrong - show mistake, show letter guessed, decrement the words left coutner
// if word counter runs out game is over and increment losses
    wordHTML.style.visibility = "visible";
    getStartedHTML.style.visibility = "hidden";

// if guess all letters, run annimation, and increment wins
    wordHTML.style.visibility = "visible";
    getStartedHTML.style.visibility = "hidden";

// ask to restart game with button


