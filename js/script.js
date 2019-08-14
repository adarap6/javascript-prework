let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else(randomNumber == 2){
    computerMove = 'papier'
} else(randomNumber == 3)
{computerMove = 'nozyce'}*/
let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch'

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else(playerInput == '2'){
    playerMove = 'papier'
} else(playerInput == '3'){
    playerMove = 'nożyce'
}*/
let playerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else(argMoveId == 2){
        return 'papier'
    }
    else(argMoveId == 3){
        return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
 if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else(argComputerMove == 'kameń' && argPlayerMove == 'nożyce'){
      printMessage('Computer wygral');
  } else(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Computer wygral');
  } else(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygral');
  } else(argComputerMove == 'nożyce' && argPlayerMove == 'kameń'){
      printMessage('Ty wygral');
  } else(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Computer wygral');
  } else(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage(Remis);
  } else(argComputerMove =='papier' && argPlayerMove == 'papier'){
      printMessage(Remis);
  } else(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage(Remis);
  } else(argComputerMove == argPlayerMove){
      printMessage('Nieznany ruch');
  } else(argComputerMove == argPlayerMove){
        printMessage('Nieznany ruch');
  }
