function playGame() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        else if (argMoveId == 2) {
            return 'papier'
        }
        else if (argMoveId == 3) {
            return 'nożyce'
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kameń' && argPlayerMove == 'nożyce') {
            printMessage('Computer wygral');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Computer wygral');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygral');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kameń') {
            printMessage('Ty wygral');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Computer wygral');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage(Remis);
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage(Remis);
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage(Remis);
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Nieznany ruch');
        }
    }
}

const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

stone.addEventListener('click', function() {
    playGame(1);
});
paper.addEventListener('click', function() {
    playGame(2);
});
scissors.addEventListener('click', function() {
    playGame(3);
});