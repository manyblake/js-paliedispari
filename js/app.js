// const word = prompt(`Inserisci una parola`);

// const charsReversed = word.split(``).reverse();
// const chars = word.split(``);

// function isPalindrome(string, stringReversed) {
//   for (let i = 0; i < string.length - 1; i++) {
//     flag = true;
//     if (string[i] != stringReversed[i]) {
//       return false;
//     }
//     return flag;
//   }
// }

// console.log(isPalindrome(chars, charsReversed));

let evenOrOdd = prompt(`Scegli pari o dispari`);
const playerNumber = parseInt(
  prompt(`Fai la tua giocata ("Inserisci un numero da 1 a 5")`)
);

function getSum(playerPlay, computerPlay) {
  return playerPlay + computerPlay;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5 + 1);
}

function isEven(total) {
  return total % 2 === 0;
}

function isPlayerWinner() {
  if (evenOrOdd === `pari`) {
    evenOrOdd = true;
  } else if (evenOrOdd === `dispari`) {
    evenOrOdd = false;
  } else {
    alert(`Non hai scelto pari o dispari`);
  }

  const randomNumber = getRandomNumber();
  const sum = getSum(playerNumber, randomNumber);
  if (evenOrOdd === isEven(sum)) {
    alert(`Hai vinto! Il totale dei numeri inseriti è ${sum}`);
  } else alert(`Hai perso! Il totale dei numeri inseriti è ${sum}`);
}

isPlayerWinner();
