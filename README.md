# Shopping List API

Uma API REST simples para gerenciar uma lista de compras, desenvolvida com Node.js e Express.

## Funcionalidades

- Inserir itens na lista de compras
- Consultar todos os itens da lista
- Consultar itens por tipo
- Consultar item específico por ID

## Tecnologias Utilizadas

- Node.js
- Express

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/felipe-bms/shopping-list-api.git
2. Navegue até o diretório do projeto:

   ```bash
   cd shopping-list-api
3. Instale as dependências:

   ```bash
   npm install
## Executando o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com reinicialização automática:

  ```bash
  npm run dev

```
### Modo de Produção

Para iniciar o servidor em modo de produção:

```bash
npm start
```

O servidor estará em execução em `http://localhost:5000`.

## Endpoints

### Inserir Item

- **URL:** `/items`
- **Método:** `POST`
- **Descrição:** Insere um item na lista de compras
- **Corpo da Requisição:**
  ```json
  {
    "name": "Apple",
    "quantity": 3,
    "type": "fruit"
  }

- **Respostas:**
  - `201 Created`: Item criado com sucesso
  - `422 Unprocessable Entity`: Nome, quantidade e tipo são obrigatórios
  - `409 Conflict`: Já existe um item com o mesmo nome

### Consultar Todos os Itens

- **URL:** `/items`
- **Método:** `GET`
- **Descrição:** Retorna todos os itens da lista de compras
- **Respostas:**
  - `200 OK`: Lista de itens

### Consultar Itens por Tipo

- **URL:** `/items?type=fruit`
- **Método:** `GET`
- **Descrição:** Retorna itens da lista de compras filtrados por tipo
- **Respostas:**
  - `200 OK`: Lista de itens filtrados

### Consultar Item por ID

- **URL:** `/items/:id`
- **Método:** `GET`
- **Descrição:** Retorna um item específico da lista de compras pelo ID
- **Respostas:**
  - `200 OK`: Item encontrado
  - `400 Bad Request`: ID deve ser um inteiro positivo
  - `404 Not Found`: Item não encontrado
