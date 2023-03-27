function foodList() {
    let fruits = [];
    let dairy = [];
    let frozen = [];
    let sweets = [];
    let foods = [];
    let ask = "";

    while (true) {
        if (foods.length == 0) {
            ask = prompt("Add a food to your shopping list?\n1: Yes\n2: No");
        }
        else {
            ask = prompt("Add a food to your shopping list?\n1: Yes\n2: No\nOr want to remove a food from the list?\n3: Remove");
        };

        if (ask == '3' && foods.length > 0){
            removeFood();
        }
        else if (ask != '2') {
            let food = prompt("What food do you want: ");
            foods.push(food);
            let category = prompt("What category:\n1: Fruit\n2: Dairy\n3: Frozen\n4: Sweets");

            switch (category) {
                case '1':
                    fruits.push(food.toLowerCase());
                    break;
                case '2':
                    dairy.push(food.toLowerCase());
                    break;
                case '3':
                    frozen.push(food.toLowerCase());
                    break;
                case '4':
                    sweets.push(food.toLowerCase());
                    break;
            };
        }
        else {
            alert(`Shopping list:\nFruits: ${fruits}\nDairy: ${dairy}\nFrozen: ${frozen}\nSweets: ${sweets}`);
            break;
        };

        function removeFood() {
            let removeFromList = "";
            alert(`Shopping list:\nFruits: ${fruits}\nDairy: ${dairy}\nFrozen: ${frozen}\nSweets: ${sweets}`);

            removeFromList = prompt("Which do you want to remove?").toLowerCase();

            if (fruits.includes(removeFromList)) {
                fruits.splice(fruits.indexOf(removeFromList), 1);
                foods.splice(fruits.indexOf(removeFromList), 1);
            }
            else if (dairy.includes(removeFromList)) {
                dairy.splice(dairy.indexOf(removeFromList), 1);
                foods.splice(fruits.indexOf(removeFromList), 1);
            }
            else if (frozen.includes(removeFromList)) {
                frozen.splice(frozen.indexOf(removeFromList), 1);
                foods.splice(fruits.indexOf(removeFromList), 1);
            }
            else if (sweets.includes(removeFromList)) {
                sweets.splice(sweets.indexOf(removeFromList), 1);
                foods.splice(fruits.indexOf(removeFromList), 1);
            }
            else {
                alert(`Sorry, ${removeFromList} is not in the list.`);
            };
        };
    }; 
};

foodList();