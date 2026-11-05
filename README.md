# Demonstração: GitHub Actions com Node.js

Este repositório foi criado para demonstrar a automação de testes (CI - Integração Contínua) utilizando o **GitHub Actions** durante um seminário acadêmico.

## 🛠️ Tecnologias Utilizadas
*   Node.js (v20)
*   Jest (Framework de testes)
*   GitHub Actions (CI/CD)

## 🧪 Como rodar os testes localmente

Para executar os testes na sua máquina, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/demo-actions.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd demo-actions
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute os testes:
   ```bash
   npm test
   ```

## ⚙️ Como funciona o Pipeline?
O arquivo de configuração está localizado em `.github/workflows/ci.yml`.
Sempre que um novo código é enviado (`push`) ou um Pull Request é aberto, o GitHub Actions inicia uma máquina virtual, instala o Node.js, baixa as dependências e roda o comando `npm test`. Se o teste passar, fica com o selo verde ✅.
```

---

### Resumo do que você faz no seu PC agora:
1. Cria a pasta `demo-actions`.
2. Coloca os arquivos `calculadora.js`, `calculadora.test.js`, `package.json`, `.gitignore` e `README.md`.
3. Abre o terminal do VS Code dentro dessa pasta e roda `npm install` (vai gerar o `package-lock.json` e a `node_modules`).
4. Roda `npm test` para ver se os testes passam no seu computador.
5. Cria a pasta `.github/workflows/` e coloca o arquivo `ci.yml`.
6. Sobe tudo pro GitHub (o `.gitignore` vai impedir a `node_modules` de subir).



teste
