const rope = document.getElementById("rope");
const content = document.getElementById("content");
const instruction = document.getElementById("instruction");
const card = document.getElementById("card");

let pulled = false;

// TIRAR CUERDA
rope.addEventListener("click", () => {

    if (pulled) return;
    pulled = true;

    rope.style.transform = "translateY(40px)";

    setTimeout(() => {
        showQuestion();
    }, 400);

    instruction.innerText = "";
});

// MOSTRAR PREGUNTA
function showQuestion() {

    content.innerHTML = `
        <div class="question">¿Queres ser mi San Valentín? ❤️</div>
        <div class="buttons">
            <button class="yes">Sí</button>
            <button class="no">No</button>
        </div>
    `;

    const yesBtn = document.querySelector(".yes");
    const noBtn = document.querySelector(".no");

    yesBtn.addEventListener("click", yesAnswer);
    noBtn.addEventListener("mouseenter", moveNoButton);
}

// BOTÓN NO ESCAPA
function moveNoButton(e) {
    const btn = e.target;
    const maxX = 100;
    const maxY = 100;

    const randomX = Math.floor(Math.random() * maxX) - 50;
    const randomY = Math.floor(Math.random() * maxY) - 50;

    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// RESPUESTA SÍ
function yesAnswer() {

    card.innerHTML = `
        <div class="content final">
            <div style="font-size:40px">💖</div>
            <h2>Sabía que dirías que sí 😍</h2>
            <p>Eres la mejor decisión de mi vida.</p>
        </div>
    `;

    card.style.background = "#ffe3ec";
    document.body.style.background = "linear-gradient(to bottom,#ff9ab7,#ff6f9f)";
}
