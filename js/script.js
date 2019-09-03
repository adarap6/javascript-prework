function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
        } else if(argMoveId == 3) {
                return 'nozyce';
            } else {
                return 'nieznany ruch'
                }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
/*if(randomNumber == 1){
    computerMove = 'kamien';
} else if(randomNumber == 2){
        computerMove = 'papier';
    } else {
            computerMove = 'nozyce';
        }*/
    

let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');
console.log('Gracz wpisal: ' + playerInput);
let playerMove;
if(playerInput == 1){
    playerMove = 'kamien';
} else if(playerInput == 2){
    playerMove = 'papier';
    } else if(playerInput == 3){
            playerMove = 'nozyce';
        } else {
            playerMove = 'nieznany ruch'
            }
/*printMessage('Zagralem ' + computerMove + '! Jesli Twoj ruch to ' + playerMove +', to wygrywasz!');
if( computerMove == 'kamien' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'kamien' && playerMove == 'nozyce'){
      printMessage('Przegrales!');
  } else if(computerMove == 'kamien' && playerMove == 'kamien'){
      printMessage('Remis!');
  } else if(computerMove == 'papier' && playerMove == 'kamien'){
      printMessage('Przegrales!');
  } else if(computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Remis!');
  } else if(computerMove == 'papier' && playerMove == 'nozyce'){
      printMessage('Wygrales!');
  } else if(computerMove == 'nozyce' && playerMove == 'kamien'){
      printMessage('Wygrales!');
  } else if(computerMove == 'nozyce' && playerMove == 'papier'){
      printMessage('Przegrales!');
  } else if(computerMove == 'nozyce' && playerMove == 'nozyce'){
      printMessage('Remis!');
  } else {
      printMessage('Graj uczciwo!')
  }*/

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'kamien' && argPlayerMove == 'nozyce'){
        printMessage('Przegrales!');
    } else if(argComputerMove == 'kamien' && argPlayerMove == 'kamien'){
        printMessage('Remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
        printMessage('Przegrales!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if(argComputerMovee == 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Wygrales!');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamien'){
        printMessage('Wygrales!');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
        printMessage('Przegrales!');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('Remis!');
    } else {
        printMessage('Graj uczciwo!')
    }
  }