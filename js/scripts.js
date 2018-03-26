$(function(){
 $("#wordForm").submit(function(event){

   function createNewSentence(){
    var sentenceInput = $("#sentence-input").val();
    var wordArray = sentenceToArray(sentenceInput);
    var greaterThanThree = wordsGreaterThanThree(wordArray);
    var transformedSentence = reversedSentence(greaterThanThree);
    console.log(transformedSentence);
   }

   function wordsGreaterThanThree(array) {
     return array.filter(function(word){
       return word.length > 3;
     });
   }

    function reversedSentence(arrayOfWords){
      return arrayOfWords.reverse().join(' ');
    }

    function sentenceToArray(string){
      return string.split(" ");
    }
    
   createNewSentence();
   event.preventDefault();
 });
});
