let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if(randomNumber == 1){
    computerMove = 'kamen';
    else if(randomNumber == 2){
        computerMove = 'papier';
        else(randomNumber == 3){
            computerMove = 'nozyce';
        }
    }
}
let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');
console.log('Gracz wpisal: ' + playerInput);
let playerMove = 'nieznany ruch'
if(playerInput == 1){
    playerMove = 'kamien';
    else if(playerInput == 2){
        computerMove = 'papier';
        else(playerInput == 3){
            computerMove = 'nozyce';
        }
    }
}
printMessage('Zagrlem ' + computerMove + '! Jesli Twoj ruch to ' + playerMove +', to wygrywasz!');
