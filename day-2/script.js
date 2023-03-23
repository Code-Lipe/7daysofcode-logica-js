function questions() {
    let askName = prompt("What is your name?");
    let askAge = prompt("How old are you?");
    let askProgrammingLanguage = prompt("What programming language are you studying?");
    let sendMessage = `Hello ${askName}, you are ${askAge} years old and you are already learning ${askProgrammingLanguage}.`;
    alert(sendMessage);
    extra(askProgrammingLanguage);

    function extra(programmingLanguage) {
        let askExtra = prompt(`Do you like to study ${programmingLanguage}?\nAnswer with the number 1 for YES or 2 for NO.`);
        
        if (askExtra == "1") {
            let sendMessage = 'Very good! Keep studying and you will be very successful.';
            alert(sendMessage);
        }
        else {
            let sendMessage = 'Ahh too bad... Have you tried to learn other languages?';
            alert(sendMessage);
        };
    };
};

questions();