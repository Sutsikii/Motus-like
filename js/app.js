const wordText = document.querySelector(".word"),
wordHint = document.querySelector(".hint"),
refresh = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputField = document.querySelector("input");

let correctWord;

const initGame = () => 
{
    let randomObj = words[Math.floor(Math.random() * words.length)]; // Prend un objet du tableau
    let wordArray = randomObj.word.split(""); // Séparation des lettres
    for (let i = wordArray.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * ( i + 1)); // randomise les chiffres 
        // Mélange des lettres 
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join(""); // On passe le texte dans l'html
    wordHint.innerText = randomObj.hint; 
    correctWord = randomObj.word.toLowerCase(); // on remet le mot correctement
    console.log(randomObj.word, wordArray);
}

initGame();

const checkWord = () => 
{
    let userWord = inputField.value.toLocaleLowerCase();

    if(!userWord) return alert("Il faut écrire un mot !");

    if(userWord !== correctWord) return alert(`Oops ! ${userWord} n'est pas correct !`);

    alert(`Bravo ${userWord.toUpperCase()} est le bon mot !`)
    initGame();
}

refresh.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);