# Express API

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de usuários.

O projeto implementa operações CRUD (Create, Read, Update e Delete), permitindo cadastrar, consultar, atualizar e remover usuários.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades

- Cadastro de usuários.
- Listagem de usuários.
- Atualização de usuários.
- Exclusão de usuários.
- Armazenamento de dados no MongoDB.

## Endpoints

| Método | Rota            | Descrição               |
| ------ | --------------- | ----------------------- |
| GET    | `/usuarios`     | Lista todos os usuários |
| POST   | `/usuarios`     | Cadastra um usuário     |
| PUT    | `/usuarios/:id` | Atualiza um usuário     |
| DELETE | `/usuarios/:id` | Remove um usuário       |

### Exemplos de requisição

**Cadastrar usuário — POST**

```json
{
  "nome": "Pedro",
  "email": "pedro@email.com",
  "idade": 30
}
```

**Atualizar usuário — PUT**

```json
{
  "nome": "Pedro Henrique",
  "email": "pedro@email.com",
  "idade": 31
}
```

O identificador do usuário deve ser informado na URL.

**Deletar usuário — DELETE**

```http
DELETE /usuarios/ID_DO_USUARIO
```

## Como executar o projeto

### Pré-requisitos

- Node.js 20.6 ou superior.
- npm.
- MongoDB Atlas ou uma instância local do MongoDB.

### 1. Clone o repositório

```bash
git clone https://github.com/pedrofigueiredojsx/express-api.git
```

### 2. Acesse a pasta

```bash
cd express-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a conexão com o MongoDB

Crie um arquivo `.env` na raiz do projeto:

```env
MONGODB_URI=sua_string_de_conexao
```

A aplicação deve utilizar `process.env.MONGODB_URI` para estabelecer a conexão com o banco de dados.

### 5. Execute a aplicação

```bash
node --env-file=.env index.js
```

A API estará disponível em:

```text
http://localhost:3000
```

## Autor

**Pedro Henrique Figueiredo**

- GitHub: [pedrofigueiredojsx](https://github.com/pedrofigueiredojsx)

---

Projeto desenvolvido para praticar desenvolvimento backend, criação de APIs REST e integração com MongoDB.
