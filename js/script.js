let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove;
if(randomNumber == 1){
    computerMove = 'kamien';
} else if(randomNumber == 2){
        computerMove = 'papier';
    } else {
            computerMove = 'nozyce';
        }
    

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
printMessage('Zagralem ' + computerMove + '! Jesli Twoj ruch to ' + playerMove +', to wygrywasz!');
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