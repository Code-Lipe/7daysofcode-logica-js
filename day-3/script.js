function startGame() {
    let askFrontOrBack = prompt("Do you want to move on to the Front-End or Back-End area?\n1: Front\n2: Back");

    if (askFrontOrBack === "1") {
        let reactOrVue = prompt("Front-End: Want to learn React or Vue?\n1: React\n2: Vue");
    }
    else {
        let csharpOrJava = prompt("Back-End: Do you want to learn C# or Java?\n1: C#\n2: Java");
    };
    
    function askTechnology() {
        let start = true;
        let technologyList = [];
    
        while (start) {
            let technology = prompt("What technology would you like to specialize in or learn about?");
    
            technologyList.push(technology);
    
            let stop = prompt("Is there any other technology you would like to learn about?\n1: Yes\n2: No");
    
            if (stop == "2") {
                start = false;
            };
        };

        alert(`So you chose: ${technologyList}.\nDon't give up and start studying one at a time. You will get where you want.`);
    };

    askTechnology();
};

startGame();