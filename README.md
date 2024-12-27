<h1 align="center">
   Projeto Spring Boot - CRUD API de Produtos
</h1>   

Este é um projeto Spring Boot simples que fornece uma API RESTful para realizar operações CRUD (Criar, Ler, Atualizar, Excluir) em produtos. A aplicação utiliza o banco de dados PostgreSQL em produção, mas também possui suporte ao H2 Database para desenvolvimento local.   

## Requisitos   

- Java 1.8 ou superior
- Maven 3.x ou superior   
- PostgreSQL (para produção)   
- H2 Database (opcional para desenvolvimento)   

## Como Executar   

### 1. Clone o repositório   

```bash   
git clone https://github.com/Gilvan-R-A/product-api.git  
cd springboot-rest-api-sample   
```  

### 2. Configure o banco de dados   

Para produção, configure o PostgreSQL conforme necessário no arquivo **application.properties**:  

```bash   
spring.datasource.url=jdbc:postgresql://localhost:5432/spring-boot-sistema-produtos
spring.datasource.username=postgres
spring.datasource.password=1234
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL9Dialect   
```   

### 3. Executando a aplicação   

Execute a aplicação usando o Maven:   

```bash   
mvn spring-boot:run   
```  

Ou, para gerar o JAR e rodar:   

```bash   

mvn clean package   
java -jar target/springboot-rest-api-sample-1.0.0-SNAPSHOT.jar   

```  

A aplicação estará disponível em **http://localhost:8000/springboot-rest-api-sample**   


### 4. Acesso ao H2 Console (opcional)   

Se você deseja usar o banco de dados H2 para testes ou desenvolvimento, acesse o console H2 em **http://localhost:8000/h2-console**   


## Endpoints da API   

### 1. Get /produtos   

Recupera todos os produtos cadastrados.   

**Resposta:**   

```json   

[
    {
        "id": 1,
        "nome": "Produto A",
        "descricao": "Descrição do Produto A",
        "preco": 10.99
    },
    {
        "id": 2,
        "nome": "Produto B",
        "descricao": "Descrição do Produto B",
        "preco": 20.99
    }
]   

```   

### 2. GET /produtos/{id}   

Recupera um produto específico pelo seu **id**   

**Resposta:**  

```json   

{
    "id": 1,
    "nome": "Produto A",
    "descricao": "Descrição do Produto A",
    "preco": 10.99
}   

```  

### 3. POST /produtos/{id}   

Cria um novo produto.   

**Corpo da Requisição:**   

```json
{
    "nome": "Novo Produto",
    "descricao": "Descrição do novo produto",
    "preco": 15.99
}

```   

**Resposta:**   

```json   

{
    "id": 3,
    "nome": "Novo Produto",
    "descricao": "Descrição do novo produto",
    "preco": 15.99
}   

```  

### 4. PUT /produtos/{id}   

Atualiza um produto existente pelo seu **id**.   

**Corpo da Requisição:**   

```json   

{
    "nome": "Produto Atualizado",
    "descricao": "Descrição do produto atualizado",
    "preco": 18.99
}   

```  

**Resposta:**   

```json   

{
    "id": 1,
    "nome": "Produto Atualizado",
    "descricao": "Descrição do produto atualizado",
    "preco": 18.99
}   

```   

### 5. DELETE /produtos/{id}   

Deleta um produto pelo seu **id**.   

**Resposta**   

```json   

{
    "message": "Produto deletado com sucesso."
}   

```   

 ## Estrutura do Projeto   

 A estrutura de diretórios do projeto é organizada da seguinte forma:   


```bash   

springboot-rest-api-sample/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── br/com/springboot/sistema_produtos/
│   │   │       ├── controllers/
│   │   │       │   └── ProdutosController.java
│   │   │       ├── models/
│   │   │       │   └── Produto.java
│   │   │       ├── repository/
│   │   │       │   └── ProdutoRepository.java
│   │   │       └── Application.java
│   │   ├── resources/
│   │   │   ├── application.properties
│   │   │   ├── static/
│   │   │       ├── css/
│   │   │       │   └── produtos.css
│   │   │       ├── js/
│   │   │       │   └── main.js
│   │   │       └── index.html   

```   

 - **controller/**: Contém os controladores responsáveis por lidar com as requisições da API.   
 - **model/**: Contém as classes de modelo que representam os dados, como **Produto**.   
 - **repository/**: Contém os repositórios JPA para persistência de dados.   

 ## Dependências   

 - **Spring Boot Starter Web:** Para criar uma API RESTful.   
 - **Spring Boot Starter Data JPA:** Para facilitar a integração com o banco de dados.   
 - **PostgreSQL:** Banco de dados utilizado para produção.   
 - **H2 Database:** Banco de dados embutido para desenvolvimento e testes.   

 ## Banco de Dados   

 - **PostgreSQL** é utilizado em produção, configurado no arquivo **application.properties**.   
 - **H2 Database** pode ser usado durante o desenvolvimento. Acesse o console do H2 em **http://localhost:8000/h2-console**   

 ## Como Contribuir   

 1. Fork o repositório.   
 2. Crie uma branch para a sua feature (**git checkout -b feature-nome-da-feature**).   
 3. Faça as alterações necessárias.   
 4. Realize os testes.   
 5. Envie um pull request.
