function ehPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    let divisor = 2;
    while (divisor <= Math.sqrt(numero)) {
        if (numero % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

let numero = 1;

while (numero <= 100) {
    if (ehPrimo(numero)) {
        console.log(numero);
    }
    numero++;
}
