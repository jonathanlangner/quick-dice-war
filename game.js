const playerHealth = document.querySelector("#player-health");
const aiHealth = document.querySelector("#ai-health");
const playerDie = document.querySelector("#player-die-container");
const aiDie = document.querySelector("#ai-die-container");
const rollDice = document.querySelector("#roll-dice");

const playerDie1 = document.querySelector("#player-die-1");
const playerDie2 = document.querySelector("#player-die-2");

const aiDie1 = document.querySelector("#ai-die-1");
const aiDie2 = document.querySelector("#ai-die-2");

let currentPlayerHealth = 10;
let currentAiHealth = 10;

let totalPlayerScore = 0;
let totalAIScore = 0;

playerHealth.textContent = currentPlayerHealth;
aiHealth.textContent = currentAiHealth;


const takeATurn = function () {
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
    if( currentAiHealth <= 0 && currentPlayerHealth <=0){
        totalPlayerScore += 1;
        totalAIScore += 1;
        alert(`TIE! Total Score: Player: ${totalPlayerScore} | AI: ${totalAIScore}`);
        currentPlayerHealth = 10;
        currentAiHealth = 10;
        aiHealth.textContent = currentAiHealth;
        playerHealth.textContent = currentPlayerHealth;
    }
    else if (currentAiHealth <= 0) { 
        totalPlayerScore += 1;
        alert(`Player One Wins The Game! Total Score: Player: ${totalPlayerScore} | AI: ${totalAIScore}`);
        currentPlayerHealth = 10;
        currentAiHealth = 10;
        aiHealth.textContent = currentAiHealth;
        playerHealth.textContent = currentPlayerHealth;
        
    }
    else if (currentPlayerHealth <= 0) { 
        totalAIScore += 1;
        alert(`Player One Wins The Game! Total Score: Player: ${totalPlayerScore} | AI: ${totalAIScore}`);
        currentPlayerHealth = 10;
        currentAiHealth = 10;
        aiHealth.textContent = currentAiHealth;
        playerHealth.textContent = currentPlayerHealth;
    }

}

rollDice.addEventListener("click", takeATurn);


