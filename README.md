# Projeto Calculadora Multi-linguagem

## 📖 Descrição

Este projeto apresenta a implementação de uma classe de calculadora em Python e JavaScript. O objetivo é demonstrar a criação de métodos robustos, a aplicação de testes unitários com Pytest e a organização de um projeto de desenvolvimento de software.

Este trabalho foi desenvolvido para fins educacionais por um estagiário da **Compass UOL** na área de **Quality Engineering (Q.E.)**. O projeto é direcionado aos estudos na plataforma de aprendizado **AIR LEARNING** da Compass, focando na aquisição e demonstração de habilidades em automação de testes e qualidade de código.

## ✨ Funcionalidades

A calculadora suporta as seguintes operações:
-   Adição
-   Subtração
-   Multiplicação
-   Divisão
-   Potenciação
-   Raiz Quadrada

## 📂 Estrutura de Arquivos

O repositório está organizado da seguinte forma:

```
/
|-- /.gitignore         # Arquivo para ignorar arquivos e pastas no Git
|-- /python/            # Código-fonte e testes da calculadora em Python
|   |-- /calculadora/
|   |   |-- __init__.py
|   |   `-- calculadora.py
|   `-- /tests/
|       `-- test_calculadora.py
|
|-- /javascript/        # Código-fonte e testes da calculadora em JavaScript
|   |-- calculadora.js
|   `-- calculadora.test.js
|
|-- /scripts/           # Scripts para executar os testes
|   |-- run_python.sh
|   `-- run_js.sh
|
`-- README.md           # Documentação do projeto
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

-   Python 3.x
-   Pytest (`pip install pytest`)
-   Node.js e npm (para a versão JavaScript)
-   Jest (`npm install --save-dev jest`)

### Executando os Testes

**Para a calculadora em Python:**

Você pode usar o script para rodar os testes Python:
```bash
./scripts/run_python.sh
```

**Para a calculadora em JavaScript:**

Você pode usar o script para rodar os testes JavaScript:
```bash
./scripts/run_js.sh
```

## 🤖 Git e Versionamento

-   **Repositório:** `calculadora`
-   **Branches:**
    -   `main`: Versão estável do projeto.
    -   `develop`: Branch de desenvolvimento para novas funcionalidades.
-   **Commits:** Commits diários com mensagens claras e descritivas (ex: "feat: implementa método de adição na calculadora Python").

## 🔗 Referências

-   **Pytest Documentation:** [https://docs.pytest.org/](https://docs.pytest.org/)
-   **Ajuda de IA:** Utilizei o Google Gemini para a estruturação inicial do projeto como o README e a melhor estrutura de pastas.
