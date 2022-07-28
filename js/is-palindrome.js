const word = prompt(`Inserisci una parola`);

const charsReversed = word.split(``).reverse();
const chars = word.split(``);

function isPalindrome(string, stringReversed) {
  for (let i = 0; i < string.length - 1; i++) {
    flag = true;
    if (string[i] != stringReversed[i]) {
      return false;
    }
    return flag;
  }
}

console.log(isPalindrome(chars, charsReversed));
