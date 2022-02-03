// user input title and body 
// create Entry objects that include a 
// method to return the number of words in the entry
// method to return the number of vowels
// method to return the number of consonants
// method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.
export default class Entry {

  constructor(body) {
    this.body = body
  }

  wordCount() {
  let wordCount = 0;
  let wordArray = this.body.split(" ");
  wordArray.forEach(function(word) {
    word = word.trim();
    if (!Number(word) && word.length != 0) {
      wordCount++;
    }
  });
  return wordCount;
  };
}