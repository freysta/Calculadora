const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('adicionar', () => {
        expect(calc.adicionar(2, 3)).toBe(5);
        expect(calc.adicionar(-1, 1)).toBe(0);
    });

    test('subtrair', () => {
        expect(calc.subtrair(5, 3)).toBe(2);
        expect(calc.subtrair(1, 1)).toBe(0);
    });

    test('multiplicar', () => {
        expect(calc.multiplicar(2, 3)).toBe(6);
        expect(calc.multiplicar(-2, 3)).toBe(-6);
    });

    test('dividir', () => {
        expect(calc.dividir(6, 2)).toBe(3);
        expect(calc.dividir(5, 2)).toBe(2.5);
        expect(() => calc.dividir(5, 0)).toThrow("Divisão por zero não é permitida");
    });

    test('potencia', () => {
        expect(calc.potencia(2, 3)).toBe(8);
        expect(calc.potencia(5, 0)).toBe(1);
    });

    test('raizQuadrada', () => {
        expect(calc.raizQuadrada(9)).toBe(3);
        expect(calc.raizQuadrada(0)).toBe(0);
        expect(() => calc.raizQuadrada(-1)).toThrow("Raiz quadrada de número negativo não é permitida");
    });
});
