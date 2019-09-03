let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamien';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nozyce';
        } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');
console.log('Gracz wpisal: ' + playerInput);
let playerMove = getMoveName(playerInput);
function displayResult(computerMove, playerMove){
printMessage('Zagralem ' + computerMove + ', a ty ' + playerMove +'');
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
  }
}
displayResult(computerMove, playerMove);