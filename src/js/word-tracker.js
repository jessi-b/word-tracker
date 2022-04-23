export default class Entry {

  constructor(body) {
    this.body = body
  }

  wordCount() {
  let wordCount = 0;
  let wordArray = this.body.split(" ");
  wordArray.forEach(function(word) {
    word = word.trim();
    if (word !== "") {
      wordCount++;
    }
  });
  return wordCount;
  };

  vowelCount() {
  let vowelCount = 0;
  let vowelArray = this.body.split("");
  vowelArray.forEach(function(letter) {
    letter = letter.toUpperCase()
    if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
      vowelCount++;
    }
  });
  return vowelCount;
  };

  consonantCount() {
  let consonantCount = 0;
  let consonantArray = this.body.split("");
  consonantArray.forEach(function(letter) {
    letter = letter.toLowerCase();
    if (letter !== " " && letter !== 'a' && letter !== 'e' && letter !== 'i' && letter != 'o' && letter !== 'u') {
      consonantCount++;
    };
  });
  return consonantCount;
  }
  
//   getTeaser() {
//     let teaser = [];
//     let teaserArray = this.body.split;
//     for (let i=0; i <= 7; i++); {
//       teaser.push(teaserArray[i]);
//     }
//   return teaser.join(" ") + "...";
//   }
// };