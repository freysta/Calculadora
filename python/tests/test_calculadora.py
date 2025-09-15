import unittest
from calculadora.calculadora import Calculadora

class TestCalculadora(unittest.TestCase):
    def setUp(self):
        self.calc = Calculadora()

    def test_adicionar(self):
        self.assertEqual(self.calc.adicionar(2, 3), 5)
        self.assertEqual(self.calc.adicionar(-1, 1), 0)

    def test_subtrair(self):
        self.assertEqual(self.calc.subtrair(5, 3), 2)
        self.assertEqual(self.calc.subtrair(1, 1), 0)

    def test_multiplicar(self):
        self.assertEqual(self.calc.multiplicar(2, 3), 6)
        self.assertEqual(self.calc.multiplicar(-2, 3), -6)

    def test_dividir(self):
        self.assertEqual(self.calc.dividir(6, 2), 3)
        self.assertEqual(self.calc.dividir(5, 2), 2.5)
        with self.assertRaises(ValueError):
            self.calc.dividir(5, 0)

    def test_potencia(self):
        self.assertEqual(self.calc.potencia(2, 3), 8)
        self.assertEqual(self.calc.potencia(5, 0), 1)

    def test_raiz_quadrada(self):
        self.assertEqual(self.calc.raiz_quadrada(9), 3)
        self.assertEqual(self.calc.raiz_quadrada(0), 0)
        with self.assertRaises(ValueError):
            self.calc.raiz_quadrada(-1)

if __name__ == '__main__':
    unittest.main()
