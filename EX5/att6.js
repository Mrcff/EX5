let numeroAleatorio = Math.floor(Math.random() * 101);
let tentativas = 0;
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Adivinhe o número entre 0 e 100:"));
    tentativas++;

    if (palpite === numeroAleatorio) {
        alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        acertou = true;
    } else if (palpite > numeroAleatorio) {
        alert("O número é menor que " + palpite + ".");
    } else if (palpite < numeroAleatorio) {
        alert("O número é maior que " + palpite + ".");
    }
}
