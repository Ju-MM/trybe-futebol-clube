# ⚽ Trybe Futebol Clube ⚽
Desenvolvido durante módulo de backend na Trybe[^1] | agosto/2022.
[^1]: O programa conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.

## :page_with_curl: Sobre o Projeto

<details>
<summary><strong>A aplicação</strong></summary><br />

O `TFC` é um site informativo sobre partidas e classificações de futebol!
</details>

<details>
<summary><strong>O que foi desenvolvido</strong></summary><br />

Para esse projeto, foi desenvolvida uma API RESTful com aplicações frontend e backend integradas através do docker-compose, que consomem um banco de dados.

Construí um __backend dockerizado utilizando modelagem de dados através do Sequelize__.

Foram respeitadas regras de negócio pré definidas pela Trybe, onde precisei garantir que a API desenvolvida fosse capaz de ser consumida pelo frontend provido dentro do projeto. 

Destaco aqui, uma das regras principais nesse desenvolvimento: para adicionar uma partida ou fazer alterações, o usuário deve estar logado. __Essa verificação é feita através de um token válido__. 

Além disso, as tabelas `teams` e `matches` contam com um relacionamento para executar as devidas atualizações das partidas.
</details>

<details>
<summary><strong>Observações</strong></summary><br />

* Para esse projeto, foi disponibilizado pela Trybe toda a parte de frontend, sendo minha responsabilidade a criação do backend.
* O projeto foi desenvolvido com base em requisitos definidos pela Trybe dentro de um tempo pré determinado.
</details>

## :hammer_and_wrench: Ferramentas

<details>
<summary><strong>Básicas</strong></summary><br />
  
* TypeScript
* Node.js
* cors
* dotenv
* express
* express-async-errors
  
</details>

<details>
<summary><strong>Validações</strong></summary><br />
  
* bcryptjs
* JWT
* Joi
</details>

<details>
<summary><strong>Banco de Dados</strong></summary><br />
  
* MySQL
* Sequelize
</details>

<details>
<summary><strong>Testes</strong></summary><br />
  
* Jest
* Mocha
* Chai
</details>

## :memo: Metodologias

<details>
<summary><strong>Metodologias utilizadas</strong></summary><br />

* SOLID
* POO
* AGILE
</details>

## ⚔️ Desafios

<details>
<summary><strong>Principais Desafios</strong></summary><br />

* __Typescript__ com __POO__: projeto referencia para firmar esses conceitos.

* Conceitos de __SOLID__: desenvolver o projeto buscando utilizar ao máximo esses conceitos.

* Resultado geral (leaderboard): estruturar uma __query SQL__ para que em uma  única requisição, retornasse a classificação geral dos jogos (podendo ser filtrada por time da casa, visitantes e geral).
</details>

## :woman_technologist: Habilidades Desenvolvidas

<details>
<summary><strong>Hard Skills</strong></summary><br />
  
* Principais hard skills desenvolvidas:
  * TypeScript
  * POO
  * SOLID
</details>

<details>
<summary><strong>Soft Skills</strong></summary><br />
  
* Inteligência Emocional
* Autoliderança
* Gestão do Tempo
* Compartilhar conhecimentos com os demais alunos da Trybe
* Recorrer a mentorias para esclarecimento de dúvidas
</details>

## Evolução do Projeto
<details>
<summary><strong>Metodologias utilizadas</strong></summary><br />

* Refatoração: manipulação de erros e validações.
* Testes: atingir cobertura de 100% da aplicação.
</details>

## 🚧 Como Instalar o Projeto | em construção 🚧

<!--
<details>
  <summary markdown="span"><strong>Tutorial</strong></summary><br />
</details>
-->

## 🚧 Como Utilizar a Aplicação | em construção 🚧

<!--
<details>
  <summary markdown="span"><strong>Tutorial</strong></summary><br />
</details>
-->
