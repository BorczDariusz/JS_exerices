var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerNameElem = document.getElementById('js-playerName');
var playerPointsElem = document.getElementById('js-playerPoints');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var drawResultElem = document.getElementById('js-DrawResult');
var winnerConsoleElem = document.getElementById('js-winnerConsole');
var winnerPlayerPointsElem = document.getElementById('js-winnerPlayerPoints');
var winnerComputerPointsElem = document.getElementById('js-winnerComputerPoints');
var sumGameEndedElem = document.getElementById('js-sumGameEnded');

var gameState = 'notStarted', 
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

pickRock.addEventListener('click', function() { playerPick('ROCK') ;});
pickPaper.addEventListener('click', function() { playerPick('PAPER') ;});
pickScissors.addEventListener('click', function() { playerPick('SCISSORS') ;});
newGameBtn.addEventListener('click', newGame);

setGameElements();

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        sumGameEndedElem.style.display = 'none';
      break;
    case 'ended':
        newGameBtn.innerText = 'Play again';
        
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        sumGameEndedElem.style.display = 'block';
  }
}

function newGame() { 
  player.name = prompt('Write your name: ', 'PLAYER NAME');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }
}

function getComputerPick() {
    var possiblePicks = ['ROCK', 'PAPER', 'SCISSORS'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = drawResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; 
        drawResultElem.innerHTML = 'DRAW';

    } else if (
        (computerPick == 'ROCK' &&  playerPick == 'SCISSORS') ||
        (computerPick == 'SCISSORS' &&  playerPick == 'PAPER') ||
        (computerPick == 'PAPER' &&  playerPick == 'ROCK') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "+1";
        player.score++;
        playerPointsElem.innerHTML = player.score;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "+1";
        computer.score++;
        computerPointsElem.innerHTML = computer.score;
    }

    if (player.score >= 10) {  
        theWinnerIsPlayer();
        setGameElements();

    } else if (computer.score >= 10) {
        theWinnerIsComputer();
        setGameElements();
    }
}
console.log(computer.points);
console.log(player.points);


function theWinnerIsComputer() {
    winnerConsoleElem.innerHTML = " You Lose!";
    winnerComputerPointsElem.innerHTML = "Computer: " + computer.score; 
    winnerPlayerPointsElem.innerHTML = "You: " + player.score;
    gameState = 'ended';
    playerResultElem.innerHTML = computerResultElem.innerHTML = drawResultElem.innerHTML = '';
}

function theWinnerIsPlayer() {   
    winnerConsoleElem.innerHTML = " Victory!";
    winnerComputerPointsElem.innerHTML = "Computer: " + computer.score; 
    winnerPlayerPointsElem.innerHTML = "You: " + player.score;
    gameState = 'ended';
    playerResultElem.innerHTML = computerResultElem.innerHTML = drawResultElem.innerHTML = '';
}

function gameEnd() {
    if (player.score >= 10) {
        return true;
    } else if (computer.score >= 10) {
        return true;   
    } else {
        return false;
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
