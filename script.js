// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput');
    const message = document.querySelector('.message');
    const attemptsSpan = document.getElementById('attempts');
    console.log('Random Number:', targetNumber);
    
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;
        attemptsSpan.textContent = attempts;

        if (guess === targetNumber) {
            message.textContent = `Correct Guess - ${attempts} Trial(s)`;
            message.style.color = 'green';
            guessInput.disabled = true;
        } else if (guess < targetNumber) {
            window.alert('Your guess is too low. Try a higher number.');
            message.textContent = 'HIGH';
            message.style.color = 'red';
            <!-- window.alert('Your guess is too low. Try a higher number.'); -->
        } else {
            window.alert('Your guess is too high. Try a lower number.');
            message.textContent = 'LOW';
            message.style.color = 'red';
            <!-- window.alert('Your guess is too high. Try a lower number.'); -->
        }
    }

    guessInput.value = '';
});
