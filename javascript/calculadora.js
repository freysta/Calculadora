class Calculadora {
  _validarNumero(valor) {
    if (typeof valor !== 'number' || isNaN(valor)) {
      throw new TypeError("Entrada deve ser um número");
    }
  }

  adicionar(a, b) {
    this._validarNumero(a);
    this._validarNumero(b);
    return a + b;
  }

  subtrair(a, b) {
    this._validarNumero(a);
    this._validarNumero(b);
    return a - b;
  }

  multiplicar(a, b) {
    this._validarNumero(a);
    this._validarNumero(b);
    return a * b;
  }

  dividir(a, b) {
    this._validarNumero(a);
    this._validarNumero(b);
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  }

  potencia(base, expoente) {
    this._validarNumero(base);
    this._validarNumero(expoente);
    return Math.pow(base, expoente);
  }

  raizQuadrada(numero) {
    this._validarNumero(numero);
    if (numero < 0) {
      throw new Error("Raiz quadrada de número negativo não é permitida");
    }
    return Math.sqrt(numero);
  }
}

module.exports = Calculadora;
