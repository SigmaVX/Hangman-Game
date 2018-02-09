

//Create an array of top 100 movies
var movies = ["Star Wars The Force Awakens", "Avatar", "Titanic", "Jurassic World", "The Avengers", "Star Wars The Last Jedi", "The Dark Knight", "Rogue One A Star Wars Story", "Beauty and the Beast", "Finding Dory", "Star Wars Episode I  The Phantom Menace", "Star Wars", "Avengers Age of Ultron", "The Dark Knight Rises", "Shrek 2", "ET The ExtraTerrestrial", "The Hunger Games Catching Fire", "Pirates of the Caribbean Dead Mans Chest", "The Lion King", "Toy Story 3", "Wonder Woman", "Iron Man 3", "Captain America Civil War", "The Hunger Games", "SpiderMan", "Jurassic Park", "Transformers Revenge of the Fallen", "Frozen", "Guardians of the Galaxy Vol 2", "Harry Potter and the Deathly Hallows Part 2", "Finding Nemo", "Star Wars Episode III  Revenge of the Sith", "The Lord of the Rings The Return of the King", "SpiderMan 2", "The Passion of the Christ", "The Secret Life of Pets", "Despicable Me 2", "The Jungle Book", "Deadpool", "Inside Out", "Jumanji Welcome to the Jungle", "Furious 7", "Transformers Dark of the Moon", "American Sniper", "The Lord of the Rings The Two Towers", "Zootopia", "The Hunger Games Mockingjay  Part 1", "SpiderMan 3", "Minions", "SpiderMan Homecoming", "Alice in Wonderland", "Guardians of the Galaxy", "Batman v Superman Dawn of Justice", "Forrest Gump", "It", "Suicide Squad", "Shrek the Third", "Transformers", "Iron Man", "Harry Potter and the Sorcerers Stone", "Indiana Jones and the Kingdom of the Crystal Skull", "The Lord of the Rings The Fellowship of the Ring", "Thor Ragnarok", "Iron Man 2", "Star Wars Episode II  Attack of the Clones", "Pirates of the Caribbean At Worlds End", "Return of the Jedi", "Independence Day", "Pirates of the Caribbean The Curse of the Black Pearl", "Skyfall", "The Hobbit An Unexpected Journey", "Harry Potter and the HalfBlood Prince", "The Twilight Saga Eclipse", "The Twilight Saga New Moon", "Harry Potter and the Deathly Hallows Part 1", "The Sixth Sense", "Up", "Inception", "The Twilight Saga Breaking Dawn Part 2", "Harry Potter and the Order of the Phoenix", "The Chronicles of Narnia The Lion the Witch and the Wardrobe", "Man of Steel", "The Empire Strikes Back", "Harry Potter and the Goblet of Fire", "Monsters Inc", "Home Alone", "The Hunger Games Mockingjay  Part 2", "The Matrix Reloaded", "The Twilight Saga Breaking Dawn Part 1", "Meet the Fockers", "The Hangover", "Gravity", "Sing", "Monsters University", "Shrek", "Despicable Me 3", "The Amazing SpiderMan", "Harry Potter and the Chamber of Secrets", "The Incredibles", "How the Grinch Stole Christmas"];



// Declair & Link Variables From HTML
// Total Wins
 var winsHTML = document.getElementById("wins");
// Total Losses
 var lossesHTML = document.getElementById("losses");
// Guesses Remaining On Current Game
 var guessesHTML = document.getElementById("guesses");
// Wrong Letters Guesses On Current Game
 var lettersHTML = document.getElementById("letters");
// The Selected Hangman Word
 var wordHTML = document.getElementById("word"); 
// Get Started Message
 var getStartedHTML = document.getElementById("startMessage"); 
// Masked Word
 var maskedHTML = document.getElementById("maskedWord");


//Start The Game
function startGame(){    
    // Computer Randomly Picks Word
    var wordPick = movies[Math.floor(Math.random() * 100)];
    console.log(wordPick);
  
    // Add The Word To HTML 
    wordHTML.textContent = wordPick;

    // Masks The Word On Page Using An Empty Array That Is Put Into A String
    var mask = [];
    for (var i=0; i < wordPick.length ; i++){
        if (wordPick.charAt(i) === " "){
        mask[i] = wordPick.charAt(i);
        }
        else {
        mask[i] = "_";
        }
    }
    var stringStuff = mask.join (" "); 
    maskedHTML.textContent = mask;

    // Check If User Letter Is A Match
    // loop through word at each position in array
    for (var i=0; i < wordPick.length; i++){
        if (wordPick[1] === "a"){
            mask[i] = "a";
        }
        else {

        }
    }

}

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


