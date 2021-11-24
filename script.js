

function computerOutput() {
    let comOutputArray = Array('rock', 'paper', 'scissors');
    let comOutput = comOutputArray[Math.floor(Math.random()*comOutputArray.length)];
    return comOutput;
}

function checkRockPaperScissors() {
    let computer = computerOutput();
    let answer;
    let userInput = String(document.getElementById('user-entry').value);
    console.log(userInput);

    if (userInput == computer) {
         answer = 'Its a draw!';
    } else if (computer == 'scissors' && userInput == 'rock') {
         answer = 'user wins';
    } else if (computer == 'scissors' && userInput == 'paper') {
         answer = 'computer wins';
    } else if (computer == 'rock' && userInput == 'scissors') {
         answer = 'computer wins';
    } else if (computer == 'rock' && userInput == 'paper') {
         answer = 'user wins';
    } else if (computer == 'paper' && userInput == 'rock') {
         answer = 'computer wins';
    } else if (computer == 'paper' && userInput == 'scissors') {
         answer = 'user wins';
    } else {
         answer = 'Your answer does not match the required input!';
    }
    console.log('hello');
    document.getElementById('answer').innerHTML = answer;
}


