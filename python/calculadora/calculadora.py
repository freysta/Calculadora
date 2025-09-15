class Calculadora:
    def _validar_numero(self, valor):
        if not isinstance(valor, (int, float)):
            raise TypeError("Entrada deve ser um número (int ou float)")

    def adicionar(self, a, b):
        self._validar_numero(a)
        self._validar_numero(b)
        return a + b

    def subtrair(self, a, b):
        self._validar_numero(a)
        self._validar_numero(b)
        return a - b

    def multiplicar(self, a, b):
        self._validar_numero(a)
        self._validar_numero(b)
        return a * b

    def dividir(self, a, b):
        self._validar_numero(a)
        self._validar_numero(b)
        if b == 0:
            raise ValueError("Divisão por zero não é permitida")
        return a / b

    def potencia(self, base, expoente):
        self._validar_numero(base)
        self._validar_numero(expoente)
        return base ** expoente

    def raiz_quadrada(self, numero):
        self._validar_numero(numero)
        if numero < 0:
            raise ValueError("Raiz quadrada de número negativo não é permitida")
        return numero ** 0.5
