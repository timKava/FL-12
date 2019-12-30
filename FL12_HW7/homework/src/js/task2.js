let game = confirm('Do you want to play a game?');

if(game) {
    let nextGame, isNextGame, nullInput, trueNum = true, step = 4, stop;
    const DOUBLE = 2, DECR = 2;

    while(!stop) {
        let range = 9, attempt = 3, continueCount = 3, plusPrize = 100, prize = 0;
        let rand = Math.floor(Math.random() * range);
        let prizeCount = 1;

        while (attempt !== 0) {
            let userGuess = +prompt(`Choose a roulette pocket number from 0 to ${range - 1}
Attempts left: ${attempt}\nTotal prize: ${prize}$\nPossible prize on current attempt: ${plusPrize}$`, '');
            if(userGuess === null) {
                nullInput = true;
            } else {
                if(isNaN(userGuess)) {
                    trueNum = false;
                }
            }
            if(nullInput || !trueNum) {
                isNextGame = true;
                trueNum = true;
                nullInput = false;
                break;
            } else {
                if(userGuess === rand) {
                    prize += plusPrize;
                    let nextContinue = confirm(`Congratulation, you won!
Your prize is: ${prize}$\nDo you want to continue?`);
                    if(nextContinue) {
                        plusPrize = plusPrize * prizeCount * DOUBLE;
                        attempt = continueCount;
                        range += step;
                        prizeCount = 1;
                        rand = Math.floor(Math.random() * range);
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${prize}$`);
                        isNextGame = true;
                        break;
                    }
                } else {
                    --attempt;
                    plusPrize /= DECR;
                    prizeCount *= DOUBLE;
                    if(attempt === 0) {
                        alert(`Thank you for your participation. Your prize is: ${prize}$`);
                        isNextGame = true;
                        break;
                    }
                }
            }

        }
        if(isNextGame) {
            nextGame = confirm(`Do you want to play again?`);
            if(nextGame) {
                isNextGame = false;
            } else {
                stop = true;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can');
}
