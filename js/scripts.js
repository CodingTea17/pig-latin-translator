// BACKEND LOGIC
var firstLetterChecker = function(word) {
  // Converts all letters to lowercase
  word = word.toLowerCase();
  /********************************************************************************
  ** IF the first letter is a "y" then is sends the sentence to the consonantCase
  ** BUT first it chops off the "y" and adds it to the end of the word
  ** (e.g. "year" --> "ear" + "y" --> "eary")
  *********************************************************************************/
  if(word.charAt(0) === "y") {
    word = yCase(word);
    return word;
  }
  // IF the word begins with a "qu" it runs the qCase()
  else if (word.charAt(0) === "q" && word.charAt(1) === "u") {
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
  var stringOfConsonants = "";
  //
  var quCheckString = consonantWord.slice(1,consonantWord.length);
  if (quCheckString.charAt(0) === "q" && quCheckString.charAt(1) === "u"){
    // alert(consonantWord.slice(3, consonantWord.length));
    stringOfConsonants = consonantWord.charAt(0) + "qu";
    consonantWord = consonantWord.slice(3,consonantWord.length) + stringOfConsonants;
    return consonantWord + "ay";
  };
  for(var i = 0; i < consonantWord.length; i++) {
    if(vowelChecker(consonantWord.charAt(i))) {
      /***************************************************************************
      ** Once a VOWEL has been found it returns the string minus the length of
      ** the stringOfConsonants and add that string along with "ay" to the end
      ****************************************************************************/
      return consonantWord.slice(stringOfConsonants.length).concat(stringOfConsonants + "ay");
    } else {
      // If the letter is not a VOWEL it will append it to the stringOfConsonants
      stringOfConsonants = stringOfConsonants.concat(consonantWord.charAt(i));
    }
  };
};

var yCase = function(yWord) {
  var yTranslated = (yWord.slice(1) + "y");
  //
  yTranslated = consonantCase(yTranslated);
  return yTranslated;
};
// It will handle words that start with "qu"
var qCase = function(quWord) {
  var quTranslated = (quWord.slice(2) + "qu");
  //
  quTranslated = consonantCase(quTranslated);
  return quTranslated;
};

// It will handle words that start with vowels by adding the phrase "way" to the end of them.
var vowelCase = function(vowelWord) {
  var vowelTranslated = vowelWord.concat("way");
  return vowelTranslated;
};

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

    // Converts the sentence word by word and places the result into the translatedArray
    var translatedArray = arrayOfEnglishWords.map(firstLetterChecker);

    // Finds the p with an id "igpay", shows it, and places the translatedArray into it
    $("#ardcay").show();
    $("#igpay").text(translatedArray.join(" "));
  });
});
