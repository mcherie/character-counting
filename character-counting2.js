function countLetters(string) {

   var uniqueCharacters = {} ;
   var input = string.split(" ").join("") ;


   for (char of input) {
     if (char in uniqueCharacters) {
       uniqueCharacters[char] += 1 ;
     } else
     uniqueCharacters[char] = 1 ;
   }
   return uniqueCharacters ;
  }


  console.log(countLetters("lighthouse in the house"));