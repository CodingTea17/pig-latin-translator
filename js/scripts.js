// BACKEND LOGIC
var firstLetterChecker = function(word) {
  if(word.charAt(0) === "y") {

  } else if (word.charAt(0) === "q" && word.charAt(1) === "u") {
    word = qCase(word);
    return word;
  }
  // Uses the vowelChecker func to determine if the word begins with a vowel
  else if (vowelChecker(word.charAt(0))) {
    word = vowelCase(word);
    return word;
  }
  // IF the word DOESN'T begin with a 'Y', 'Y', or 'VOWEL'. Then it must be a consonant.
  else {
    word = consonantCase(word);
    return word;
  }
};

var consonantCase = function(consonantWord) {
  var stringOfConsonants ="";
  for(var i = 0; i < consonantWord.length; i++) {
    if(vowelChecker(consonantWord.charAt(i))) {
      return consonantWord.concat(stringOfConsonants + "ay");
    } else {
      stringOfConsonants = stringOfConsonants.concat(consonantWord.charAt(i));
    }
  };
};

// It will handle words that start with "qu"
var qCase = function(quWord) {
  var quTranslated = (quWord.slice(2) + "qu");
  // NOW WE NEED TO CHECK FOR VOWELS AND ADD "AY" TO THE END
  quTranslated = consonantCase(quTranslated);
  return quTranslated;
};

// It will handle words that start with vowels by adding the phrase "way" to the end of them.
var vowelCase = function(vowelWord) {
  var vowelTranslated = vowelWord.concat("way");
  return vowelTranslated;
}

// It loops through an array of vowels and compares them to FIRSTLETTER.
// IF there's a match then the func returns TRUE. Default is FALSE.
var vowelChecker = function(firstLetter) {
  vowels = ["a", "e", "i", "o", "u", "y"];
  for(var i = 0; i < vowels.length; i++) {
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

    var translatedArray = arrayOfEnglishWords.map(firstLetterChecker);
    alert(translatedArray);
  });
});
