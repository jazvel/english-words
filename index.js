import data from './words.json' assert { type: "json" };

const wordsContainer = document.getElementById("spanish-words");
const englishForm = document.querySelector('form');
const successMessage = document.getElementById("success-message");

let counter = 0;

wordsContainer.textContent = data.words[counter].spanish;

englishForm.addEventListener('submit', e => {
    e.preventDefault();
    const data1 = Object.fromEntries(
        new FormData(e.target)
    );
        console.log(data1);
    if (counter < data.words.length) {
        if (data.words[counter].english === data1.englishWord) {
            alert('la palabra coincide');
            englishForm.reset();
            counter++;
            wordsContainer.textContent = data.words[counter]?.spanish;
            if (counter === data.words.length) {
                successMessage.textContent = "Excelente has completado todas las palabras";
                englishForm.classList.add("invisible");
            }
        } else {
            alert('palabra incorrecta');
        }
    }
})