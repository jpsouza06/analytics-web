# Como rodar

## Requisitos:
- Node 18.18.0;

## Como executar a aplicação:
- Clone a aplicação
  ```
  git clone https://github.com/jpsouza06/analytics-web.git
  ```

- Instale as dependências
  ```
  npm install
  ```

- Crie um arquivo `.env` na raiz do projeto, o conteudo desse arquivo deve 
seguir como exemplo o arquivo '.env.example'.

- Inicie a aplicação:
  ```
  npm run dev
  ```

- Use a aplicação:
  ```
  http://localhost:3000
  ```

# Como rodar em produção:

## Requisitos:
- Node 18.18.0;

## Como executar a aplicação:
- Instale as dependências
  ```
  npm ci
  ```

- Crie o build da aplicação
  ```
  npm run build
  ```
  
- Inicie a aplicação
  ```
  npm run start
  ```
