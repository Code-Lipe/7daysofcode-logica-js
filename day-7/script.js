function calculator() {
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";

    while (true) {
        firstNumber = prompt("Enter first number:");
        operator = prompt("Enter operator:\n1: Addition\n2: Subtraction\n3: Multiplication\n4: Division\n5: Exit");
        
        if (operator == '5')
        {
            alert("To the next!");
            break;
        }
        else {
            secondNumber = prompt("Enter second number:");
            
            switch (operator) {
                case "1":
                    addition(firstNumber, secondNumber);
                    break;
                case "2":
                    subtraction(firstNumber, secondNumber);
                    break;
                case "3":
                    multiplication(firstNumber, secondNumber);
                    break;
                case "4":
                    division(firstNumber, secondNumber);
                    break;
            };
        };
        
        function addition(firstNumber, secondNumber) {
            let result = Number(firstNumber) + Number(secondNumber);
            return alert(`${firstNumber} + ${secondNumber} = ${result}`);
        };

        function subtraction(firstNumber, secondNumber) {
            let result = Number(firstNumber) - Number(secondNumber);
            return alert(`${firstNumber} - ${secondNumber} = ${result}`);
        };

        function multiplication(firstNumber, secondNumber) {
            let result = Number(firstNumber) * Number(secondNumber);
            return alert(`${firstNumber} * ${secondNumber} = ${result}`);
        };

        function division(firstNumber, secondNumber) {
            let result = Number(firstNumber) / Number(secondNumber);
            return alert(`${firstNumber} / ${secondNumber} = ${result}`);
        };
    };
};

calculator();