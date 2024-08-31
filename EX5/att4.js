let N = 10;

let termo1 = 0;
let termo2 = 1;
let contador = 0;

console.log("Os primeiros " + N + " termos da sequência de Fibonacci são:");

while (contador < N) {
    console.log(termo1);

    let proximoTermo = termo1 + termo2;

    termo1 = termo2;
    termo2 = proximoTermo;

    contador++;
}
