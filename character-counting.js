function countLetters(string) {

  var uniqueCharacters = {} ;
  var input = string.split(" ").join("") ;
  var count = 1 ;


  for (var i = 0; i < input.length ; i ++ ) {
    if (input[i] in uniqueCharacters) {
      uniqueCharacters[input[i]] += 1 ;
    } else
    uniqueCharacters[input[i]] = count ;
  }
  return uniqueCharacters ;
}


console.log(countLetters("lighthouse in the house"));