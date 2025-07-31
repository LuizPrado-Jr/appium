# Appium Login Test

Este projeto automatiza testes de login e envio de formulário em um aplicativo Android utilizando Appium, Mocha e Chai.

## Estrutura de Pastas

```
android-apk.apk         # APK do app testado
package.json            # Configuração do projeto Node.js
README.md               # Documentação do projeto
pages/                  # Page Objects (LoginPage, HomePage, FormPage)
tests/                  # Scripts de teste (testLogin.js, testForm.js)
```

## Versões Utilizadas

- Node.js: >=14.x
- Appium: ^2.0.0
- Mocha: ^10.0.0
- Chai: ^4.3.4
- wd: ^1.11.4
- appium-uiautomator2-driver: ^4.2.7

## Instalação das Dependências

```sh
npm install
```

## Como Executar os Testes

1. Certifique-se de que o Appium Server está rodando localmente:
   ```sh
   appium
   ```
2. Execute os testes:
   ```sh
   npm test
   ```

## Gerar Relatório de Testes

Por padrão, o Mocha exibe o relatório no terminal. Para gerar um relatório em HTML, instale o `mochawesome`:

```sh
npm install --save-dev mochawesome
```

E execute:

```sh
npx mocha tests/*.js --reporter mochawesome
```

O relatório será gerado na pasta `mochawesome-report`.

---