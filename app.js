let min = 1,
    max = 10,
    winNum = 3,
    guessLeft = 3;

const minNum = document.querySelector('#min-num'),
    maxNum = document.querySelector('#max-num'),
    guessInput = document.querySelector('#quess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    game = document.querySelector('#game'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// Play again Event Listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
})

// Validate input
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        // Set message
        setMessage(`Please Enter a number between ${min} and ${max}`); 
    }
        if(guess === winNum){
            gameOver(true,`${winNum} is correct.You WIN!`);
            // // Disable the input
            // guess.disable = true;
            // // Change border color to green
            // guessInput.style.borderColor = 'green';
            // // Set message
            // setMessage(`${winNum} is correct.You WIN!`, 'green');
        }else{
            // Game continue
            guessLeft -= 1;
            // Set message
            setMessage(`you have ${guessLeft} Guesses left. Try again`);
            // Clear the input
            guessInput.value = '';
            // Check if number of guess is 0
            if(guessLeft === 0){
                // Game Over - Lost
                gameOver(false, `Game over. You lost. The correct number was ${winNum}`);
                // // Disable the input
                // guessInput.disable = true;
                // // Change border color to red
                // guessInput.style.borderColor = 'red';
                // // Set message
                // setMessage(`Game over. You lost. The correct number was ${winNum}`,'red');
            }else{
                // gameOver(false,`${guess} is worong. You have ${guessLeft} Guesses left`);
                // Game continues
                // Change border color
                guessInput.style.borderColor = 'red';
                // Clear the input
                guessInput.value = '';
                // Tell users they are wrong
                setMessage(`${guess} is worong. You have ${guessLeft} Guesses left`);
            }
    }
   
});

// Set message
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

// Game Over
function gameOver(won,msg){
    let color;
    won === true ? color = 'green': color = 'red';
// Disable the input
    guessInput.disable = true;
    // Change border color to green
    guessInput.style.borderColor = color;
    // Change text color
    message.style.color = color;
    // Set message
    setMessage(msg);

    guessBtn.value = 'PLAY-AGAIN';
    //Append className to click button
    guessBtn.className += 'paly-again';
}






