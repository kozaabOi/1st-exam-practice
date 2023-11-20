/* input hello world
   output: hello dlrow */

/*function brokenMirror(sentence) {
  const words = sentence.split(" ");

  if (words.length >= 2) {
    const secondWordReversed = words[1].split("").reverse().join("");
    words[1] = secondWordReversed;
  }
  const modifiedSentence = words.join(" ");
  return modifiedSentence;
}*/

/*function brokenMirror(sentence) {
  const words = sentence.split(' ')
  let reverseWords = []

  words.forEach((word, index) => {
    const letters = word.split("")

    if(index % 2 === 0) {
      reverseWords.push(word)
    } else {
      reverseWords.push(letters.reverse().join(""))
    }
  })

  return reverseWords.join(" ")
}*/

  /*
  return words.map((word, index) => {
    if (index % 2 === 0) {
      return words
    } else {
      return word.split("").reverse().join("")
    }
  }).join(" ")

console.log(brokenMirror("hello world")) /* --> hello dlrow */