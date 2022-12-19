const result = prompt('Hallo, wat is je naam?', '-----------');
alert(`Hallo ${result}, welkom bij Nanda's portfolio pagina`);

const welcomeText = document.querySelector('.welcome-text');
welcomeText.textContent = 'Hallo, mijn naam is Nanda en in deze portfolio van mij laat ik zien wat er over mij te vertellen is. Hopelijk zal u genoten hebben van mijn creatie.';

welcomeText.addEventListener('mouseover', originalText);
welcomeText.addEventListener('mouseout', changeText);

function originalText() {
    welcomeText.textContent = 'John Cena is COol';
}

function changeText() {
    welcomeText.textContent = 'Hallo, mijn naam is Nanda en in deze portfolio van mij laat ik zien wat er over mij te vertellen is. Hopelijk zal u genoten hebben van mijn creatie.';
}