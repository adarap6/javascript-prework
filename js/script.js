let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else(randomNumber == 2){
    computerMove = 'papier'
} else(randomNumber == 3)
{computerMove = 'nozyce'}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch'

if(playerInput == '1'){
  playerMove = 'kamień';
} else(playerInput == '2'){
    playerMove = 'papier'
} else(playerInput == '3'){
    playerMove = 'nożyce'
}

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else(computerMove == 'kameń' && playerMove == 'nożyce'){
      printMessage('Computer wygral');
  } else(computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Computer wygral');
  } else(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygral');
  } else(computerMove == 'nożyce' && playerMove == 'kameń'){
      printMessage('Ty wygral');
  } else(computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage('Computer wygral');
  } else(computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage(Remis);
  } else(computerMove =='papier' && playerMove == 'papier'){
      printMessage(Remis);
  } else(computerMove == 'nożyce' && playerMove == 'nożyce'){
      printMessage(Remis);
  } else(playerMove == playerMove){
      printMessage('Nieznany ruch');
  } else(computerMove == computerMove){
        printMessage('Nieznany ruch');
  }
