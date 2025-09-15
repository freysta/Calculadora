class Calculadora {
    adicionar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    }

    potencia(base, expoente) {
        return Math.pow(base, expoente);
    }

    raizQuadrada(numero) {
        if (numero < 0) {
            throw new Error("Raiz quadrada de número negativo não é permitida");
        }
        return Math.sqrt(numero);
    }
}

module.exports = Calculadora;
