# Alumnus_Lemobs

Resultado do Desafio fase parte 2 Lemobs

### Pré-requisitos

Ambiente Node.js configurado

```
https://nodejs.org/en/docs/guides/
```
Framework nestjs configurado

```
https://docs.nestjs.com/
```
Banco de Dados PostgresSQL instalado. (Também é possível utilizar uma imagem do Postgres para criar um container com o Docker)
```
https://www.postgresql.org/
```
```
https://hub.docker.com/_/postgres
```

TypeORM instalado e configurado
```
https://typeorm.io/#/
```
OpenAPI Swagger Instalado
```
https://docs.nestjs.com/recipes/swagger
```


### Serviços Implementados
Criação de banco de dados relacional utilizando PostgreSQL + typeORM + Docker

Implamentação de conexão da API com banco de dados relacional;

Implamentação de serviço /aluno (POST) para cadastrar um aluno;

Implamentação de serviço /aluno/{aluno_id} (PUT) para editar um aluno;

Implamentação de serviço /aluno/{aluno_id} (GET) para retornar dados de um único aluno;

Implamentação de serviço /aluno (GET) para retornar dados de todos os alunos;

Implamentação de serviço /aluno/{aluno_id}/endereco (GET) para retornar todos os endereços de um aluno e sua quantidade;

Implamentação de serviço /aluno/{nota}/criterio/{criterio} (GET) para retornar os dados de todos os alunos que possuem nota maior que a nota dada como parâmetro se o
criterio for igual a “>” e os que possuem nota menor se o criterio for igual a “<”;

Implamentação de serviço /aluno/media (GET) para retornar os dados de todos os alunos que possuem nota maior que a média de todos os alunos;

Implamentação de serviço /endereco (POST) para cadastrar um novo endereço;

Implamentação de serviço /endereco (GET) para retornar dados de todos os endereços;

### Tarefas Bônus Desenvolvidas
★ Versionamento de código no GitHub;

★ Verificação de usuário no banco de dados antes de cadastrá-lo;

★ Validação de CPF;

★ Formatação de CPF nos retornos da API;

★ Filtro por bairro no serviço de retornar todos os endereços - “/endereco (GET)”;

★ Utilização do ORM TypeORM;
