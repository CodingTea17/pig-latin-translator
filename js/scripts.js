// BACKEND LOGIC
var firstLetterChecker = function(word) {
  if(word.charAt(0) === "y"){

  } else if (word.charAt(0) === "q"){

  }
  // Uses the vowelChecker func to determine if the word begins with a vowel
  else if (vowelChecker(word.charAt(0))){

  }
  // IF the word DOESN'T begin with a 'Y', 'Y', or 'VOWEL'. Then it must be a consonant.
  else {

  }
};

// It loops through an array of vowels and compares them to FIRSTLETTER.
// IF there's a match then the func returns TRUE. Default is FALSE.
var vowelChecker = function(firstLetter) {
  vowels = ["a", "e", "i", "o", "u", "y"];
  for(var i = 0; i < vowels.length; i++){
    if(vowels[i] === firstLetter){
      return true;
    }
  }
  return false;
};

// FRONTEND LOGIC
$(document).ready(function() {
  $("#english").submit(function(event) {
    event.preventDefault();

    // Retrieves the user's input from the form
    var userEnglish = $("#user-input").val();

    // Splits the sentence into an array of words
    var arrayOfEnglishWords = userEnglish.split(" ");

    arrayOfEnglishWords.forEach(firstLetterChecker);
  });
});
