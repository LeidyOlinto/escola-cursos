# Projeto 'Cursos-Alunos'

## O presente respositório visa expor uma possível solução uma aplicação em interface de linha de comando de um _cadastro de cursos/alunos_ que foi solicitada como requisito para finalização do módulo de _Programação Orientada a Objetos com Javascript/Typescript_ do curso de _back-end_ ministrado pela [ADA](https://ada.tech/) em parceria com [iFood](https://www.ifood.com.br/)

### Integrantes do grupo

[Djair Alves](https://www.linkedin.com/in/djairdj)

[Fábio Reis](https://www.linkedin.com/in/fabioreispaz/)

[Igor Lopes](https://www.linkedin.com/in/igorlopes-dev/)

[Jessany Kaline](https://www.linkedin.com/in/jessany-kaline/)

[Leidy Olinto](www.linkedin.com/in/leidy-olinto)

### Requisitos para executar a aplicação

___
Nesse projeto será usado TypeScript, então para executar a aplicação, será necessário um ambiente de execução JavaScript que suporta a transpilação de TypeScript, como exemplo:

- [NodeJs](https://nodejs.org/en/download)

Instale o `Node.js` na versão 18 ou superior de acordo com seu Sistema Operacional.

- Para Windows e Mac, instale o arquivo executável correspondente localizado no site do [NodeJs](https://nodejs.org/en/download).

- Para Linux entre no terminal e utilize o comando:

  ```bash
    sudo apt install nodejs
  ```

- Assegure-se que a instalação foi bem sucedida no seu sistema utilizando o seguinte comando em seu terminal:

  ```bash
    node -v
  ```

Clone esse [repositório](https://github.com/LeidyOlinto/escola-cursos.git) e navegue pelo terminal até a pasta raiz dele e execute o seguinte comando:

```bash
  npm init -y
```

Instale o Typescript usando o seguinte comando:

```bash
  npm i -g typescript
```

Inicialize o Typescript:

```bash
  tsc --init
```

Provavelmente já estarás vendo o arquivo `tsconfig.json` na raiz do projeto, você poderá subtituir todas as linhas de dentro dele pelas correspondentes abaixo:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src/",
    "outDir": "./dist/",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Instale o pacote do ts-node, ele visa facilitar a transpilação e execução de arquivos `.ts`:

```bash
  npm i -g ts-node
```

Este projeto necessita de um pacote externo, para instalar:

```bash
  npm install readline-sync
  npm i --save-dev @types/readline-sync
```

Em seguida, construa o projeto:

```bash
  tsc --build
```

Para executar o projeto, certifique-se de estar dentro da pasta dist, e execute:

```bash
  node index.js
```

___

### Sobre o projeto

#### Os requisitos do projeto foram originalmente definidos como

- [ ] 01 - Crie um sistema com um MENU com as seguintes opções:
  - [x] 1.1 - Gerenciar ALUNOS
  - [X] 1.2 - Gerenciar DISCIPLINAS
  - [ ] 1.3 - Gerenciar CURSOS
  - [X] 1.4 - SAIR

- [x] 02 - Crie um SUBMENU com as seguintes opções para a opção 1:
  - [x] 2.1 - Cadastrar ALUNO
  - [x] 2.2 - Consultar ALUNO
  - [x] 2.3 - Remover ALUNO
  - [x] 2.4 - Atualizar ALUNO

- [X] 03 - Crie um SUBMENU com as seguintes opções para a opção 2:
  - [X] 3.1 - Cadastrar DISCIPLINA
  - [X] 3.2 - Consultar DISCIPLINA
  - [X] 3.3 - Remover DISCIPLINA
  - [X] 3.4 - Atualizar DISCIPLINA

- [ ] 04 - Crie um SUBMENU com as seguintes opções para a opção 3:
  - [X] 4.1 - Cadastrar CURSO
  - [X] 4.2 - Consultar CURSO
  - [x] 4.3 - Remover CURSO
  - [ ] 4.4 - Atualizar CURSO

- [x] 05 - Desenvolva cada uma das funcionalidades dos SUBMENUS.

- [X] 06 - Um ALUNO deve possuir um CURSO (e dados adicionais como nome, idade e etc.)

- [X] 07 - Um CURSO deve pussuir DISCIPLINAS (e dados como nome do curso, turno e etc.)

- [X] 08 - Uma DISCIPLINA deve possuir nome, carga horária, nota e etc.

#### Observações

- Utilize ARRAYS para salvar os objetos, verifique a aula 8 no drive compartilhado.
- Ao mostrar os dados do aluno, o sistema deve mostrar seu curso e todas as disciplinas.
- Ao cadastrar um aluno, deve ser escolhido um dos cursos existentes.
- Ao cadastrar uma disciplina, esta deve pertencer a um curso específico.

#### Os requisitos adjacentes que encontramos foram

- [x] Definir o tipo e a estrutura das entidades mencionadas no desafio;
- [x] Criação de uma função "Main" que iniciará a interação via **CLI** (Command Line Interface) com o usuário no arquivo index.ts;
- [x] Invocar a função "Main" com as operações principais requeridas no projeto;
- [ ] Criar funções adjacentes que segregam responsabilidades dentro do código, como:
  - [x] Função que calcula a carga horária (workload) de cada curso somando as caragas horárias de suas correspondentes disciplinas.
    - [x] Defini-la dentro da classe "Course" com o método "getTotalWorkload()"
