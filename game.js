const playerHealth = document.getElementById("player-health");
const aiHealth = document.getElementById("ai-health");
const playerDie = document.getElementById("player-die-container");
const aiDie = document.getElementById("ai-die-container");
const rollDice = document.getElementById("roll-dice");

const playerDie1 = document.getElementById("player-die-1");
const playerDie2 = document.getElementById("player-die-2");

const aiDie1 = document.getElementById("ai-die-1");
const aiDie2 = document.getElementById("ai-die-2");

let currentPlayerHealth = 10;
let currentAiHealth = 10;

playerHealth.textContent = currentPlayerHealth;
aiHealth.textContent = currentAiHealth;


function takeATurn() {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    for (let i = 0; i <= 3; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        if (num == 1) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "⚔";
                    currentAiHealth -= 1;
                    aiHealth.textContent = currentAiHealth;
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "⚔";
                    currentAiHealth -= 1;
                    aiHealth.textContent = currentAiHealth;
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "⚔";
                    currentPlayerHealth -= 1;
                    playerHealth.textContent = currentPlayerHealth;
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "⚔";
                    currentPlayerHealth -= 1;
                    playerHealth.textContent = currentPlayerHealth;
                    d = num;
                    break;
            }

        }
        if (num == 2) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "⇊";
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "⇊";
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "⇊";
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "⇊";
                    d = num;
                    break;
            }


        }
        if (num == 3) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "₥";
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "₥";
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "₥";
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "₥";
                    d = num;
                    break;
            }

        }
        if (num == 4) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "⋇";
                    currentAiHealth -= 2;
                    aiHealth.textContent = currentAiHealth;
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "⋇";
                    currentAiHealth -= 2;
                    aiHealth.textContent = currentAiHealth;
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "⋇";
                    currentPlayerHealth -= 2;
                    playerHealth.textContent = currentPlayerHealth;
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "⋇";
                    currentPlayerHealth -= 2;
                    playerHealth.textContent = currentPlayerHealth;
                    d = num;
                    break;
            }

        }
        if (num == 5) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "-♥";
                    currentPlayerHealth -= 1;
                    playerHealth.textContent = currentPlayerHealth;
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "-♥";
                    currentPlayerHealth -= 1;
                    playerHealth.textContent = currentPlayerHealth;
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "-♥";
                    currentAiHealth -= 1;
                    aiHealth.textContent = currentAiHealth;
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "-♥";
                    currentAiHealth -= 1;
                    aiHealth.textContent = currentAiHealth;
                    d = num;
                    break;
            }

        }
        if (num == 6) {
            switch (i) {
                case 0:
                    playerDie1.textContent = "+♥";
                    currentPlayerHealth += 1;
                    playerHealth.textContent = currentPlayerHealth;
                    a = num;
                    break;
                case 1:
                    playerDie2.textContent = "+♥";
                    currentPlayerHealth += 1;
                    playerHealth.textContent = currentPlayerHealth;
                    b = num;
                    break;
                case 2:
                    aiDie1.textContent = "+♥";
                    currentAiHealth += 1;
                    aiHealth.textContent = currentAiHealth;
                    c = num;
                    break;
                case 3:
                    aiDie2.textContent = "+♥";
                    currentAiHealth += 1;
                    aiHealth.textContent = currentAiHealth;
                    d = num;
                    break;
            }
        }
    }

    if (currentAiHealth <= 0) { alert("The Player Wins The Game!") };
    if (currentPlayerHealth <= 0) { alert("The AI Wins The Game!") };
    console.log(a, b, c, d);

}

rollDice.addEventListener("click", takeATurn);


let oneDArr = [0, 1, 2, 3, 4, 5, 6, 7];
let oneDArr2 = ["a","b","c","d","e","f","g","h"];
let oneDArr3 = ["Zebra","Calc", "Monkey", "Fish", "Elk", "Test", "Again","Finally"];
let oneDArr4 = [1.5, 1.9, 2.3, 4.3, 7.5, 6.1, 2.1, 8.2]

let twoDArr = [oneDArr, oneDArr2];
let twoDArr2 = [oneDArr3, oneDArr4];

let threeDArr = [twoDArr, twoDArr2];

// console.log(twoDArr[0][2]);
// console.log(oneDArr[2]); // 2 is expected output
// console.log(twoDArr[0][5]); //5 is expected output.
// console.log(threeDArr[0]); // Monkey is expected output
