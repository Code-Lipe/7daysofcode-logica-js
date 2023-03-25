function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 3;

    while (true) {
        let guess = prompt("What value do you want to try?");

        if (handlingError(min, max, guess) == true) {
            break;
        }
        else if (Number(guess) == result) {
            alert("Congratulations, you got it right!");
            break;
        }
        else if (attempts > 0 ){
            alert(`You have more ${attempts} attempts!`);
            attempts--;
        }
        else {
            alert(`Your attempts are over! My choice was: ${result}`);
            break;
        };

        function handlingError(min, max, guess) {
            let stop = true;
            if (guess < min || guess > max) {
                alert(`ERRO! Only number greater than ${min} and less than ${max}`);
                return stop;
            };
        };
    };
};

randomNumber(0, 10);