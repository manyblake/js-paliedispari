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
    return false;
  }

  const randomNumber = getRandomNumber();

  const sum = getSum(playerNumber, randomNumber);

  if (evenOrOdd === isEven(sum) && !isNaN(playerNumber)) {
    alert(`Hai vinto! La somma dei numeri inseriti è ${sum}`);
  } else if (isNaN(playerNumber)) {
    alert(`Il numero inserito non è valido`);
  } else {
    alert(`Hai perso! La somma dei numeri inseriti è ${sum}`);
  }
}

isPlayerWinner();
