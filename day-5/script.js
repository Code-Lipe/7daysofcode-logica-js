function foodList() {
    let fruits = [];
    let dairy = [];
    let frozen = [];
    let sweets = [];

    while (true) {
        let ask = prompt("Add a food to your shopping list?\n1: Yes\n2: No");

        if (ask != '2') {
            let food = prompt("What food do you want: ");
            let category = prompt("What category:\n1: Fruit\n2: Dairy\n3: Frozen\n4: Sweets");

            switch (category) {
                case '1':
                    fruits.push(food);
                    break;
                case '2':
                    dairy.push(food);
                    break;
                case '3':
                    frozen.push(food);
                    break;
                case '4':
                    sweets.push(food);
                    break;
            };
        }
        else {
            alert(`Shopping list:\nFruits: ${fruits}\nDairy: ${dairy}\nFrozen: ${frozen}\nSweets: ${sweets}`);
            break;
        };
    }; 
};

foodList();