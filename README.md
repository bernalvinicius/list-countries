# List Countries - Softplan

![Preview-Screens](https://raw.githubusercontent.com/bernalvinicius/list-countries/master/src/assets/images/screenPage.png)

Se você quiser dar uma olhada em todas as telas da aplicação, elas estão [aqui](https://list-countries.netlify.app/).

## Porquê?

Este projeto faz parte do processo seletivo para desenvolvedor Front-End enviado pela Softplan.
O desafio consiste em fazer um projeto que consome à [API Graph Countries](https://github.com/lennertVanSever/graphcountries) utlizando React.
O layout ficou de livre escolha, o tanto quanto possível busquei construir uma interface amigável e funcional ao utilizador.

## Algumas observações sobre esse App

**1** - Foi construído com a base do `create-react-app`.

**2** - Para este desafio utilizei o `Material-UI`, que traz todos os recursos do Material Design para projetos em React.

**3** - Os testes foram feitos na biblioteca `@testing-library/react`.

**4** - O gerenciamento de estado da aplicação foi feito utlizando `Apollo Client`.

## Funcionalidades

- Home Page:

  - É renderizada uma lista de países que vem da [API Graph Countries](https://github.com/lennertVanSever/graphcountries). É exibido ao utilizador apenas a Bandeira, Nome e Capital de cada país. O usuário tem a opção de filtar por Nome ou Capital para encontrar o país desejado.
  - Ao clicar no `card` de algum país, ele é redirecionado para a páginas de detalhes do país.

- Country Page:
  - Na tela de detalhes do país, são renderizados alguns outros dados que não estão na home page, além da Bandeira, Nome e Capital, o utuilizado pode ver a área, população e top level domain.
  - O usuário tem a opção de editar os dados. Ao clicar no botão `editar` os campos que estão somente como leitura, ficam ativos para edição. Mas essa funcionalidade não está implementada.

## Iniciando a Aplicação

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará de um ambiente básico para executar um aplicativo React, que pode ser encontrado [aqui.](https://reactjs.org/docs/getting-started.html)

### Instalando

**Clonando este repositório**

```
$ https://github.com/bernalvinicius/list-countries.git
$ cd list-countries
```

**Instalando dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

**Rodar Aplicação**

Com todas as dependências instaladas e o ambiente configurado corretamente, agora você pode executar o aplicativo::

```
$ npm start
```

## Construído com

**Obs:** Abaixo falarei sobre alguns plugins, todos eles no [Visual Studio Code](https://code.visualstudio.com/).

Após gerar um novo projeto com 'npx create-react-app', criei alguns arquivos extras para deixar a aplicação pré-configurada em níveis de compilação e indentação.

Foram criados os seguintes arquivos: (na raiz do projeto):

- **.editorconfig:**

Para este arquivo ser válido, deve ser adicionada e extensão [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig). Com a extensão instalada e o arquivo criado, pode-se definir determinadas indicações de estilo de código. Coisas como quantos espaços uma tab deve ter. Isso pode reduzir o atrito ao trabalhar com uma equipe com vários programadores. Para maiores informações: [EditorConfig](https://editorconfig.org/).

- **.prettierrc**

Para esse arquivo ser válido, deve ser adicionada a extensão [Prettier – Code formatter](https://prettier.io/). O Prettier nada mais é do que um formatador de código, ele garante que todo o código emitido esteja em conformidade com um estilo consistente. Por exemplo, você pode escrever uma linha de código que fique muito grande, pode limitar o tamanho máximo da linha para 60 caracteres e então o Prettier fará o trabalho de organizar o código para você. Com a extensão instalada e o arquivo criado pode-se dar início a configuração do arquivo. Para maiores informações: [Prettier](https://prettier.io/).

- **jsconfig.json**

O arquivo jsconfig.json especifica os arquivos raiz e as opções para os recursos fornecidos pelo serviço de JavaScript. Por exemplo, por padrão o serviço de idioma JavaScript analisará e fornecerá o IntelliSense para todos os arquivos em seu projeto JavaScript. Se você desejar especificar quais arquivos excluir ou incluir para fornecer o IntelliSense adequado, pode utilizar uma propriedade no jsconfig.json para isso. Para maiores informações: [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig).

- **.eslintrc.js**

O ESLint foi projetado para ser configurável, você pode desativar todas as regras e executar apenas com a validação básica de sintaxe, ou misturar e combinar as regras agrupadas e as regras personalizadas. Configuramos o ESLint através do arquivo .eslintrc.js, nele é especificado todas informações de configuração que desejamos aplicar. Para maiores informações: [Documentação do ESLint](https://eslint.org/docs/user-guide/configuring). Você também deve instalar a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Após a criação de todos esse arquivos e extensões, foram instaldas as seguintes dependências:

- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [React-Router](https://reactrouter.com/) - Rotas
- [ESlint](https://eslint.org/) - Linter
- [@testing-library/react](https://github.com/testing-library/react-testing-library#readme) - Biblioteca para testes
- [React Apollo - Hooks](https://github.com/apollographql/react-apollo#readme) - React Apollo `useQuery`, `useLazyQuery`, `useMutation`, `useSubscription` e `useApolloClient` hooks
- [react-apollo](https://github.com/apollographql/react-apollo#readme) - O React Apollo permite a busque dados no servidor GraphQL e os use na construção de interfaces de usuário reativas usando a estrutura React.
- [apollo-client](https://www.npmjs.com/package/apollo-client) - O Apollo Client é um cliente GraphQL com cache completo, com integrações para React.
- [apollo-link-http]() - O `http link` é o Apollo Link mais comum, um sistema de componentes modulares para redes GraphQL.
- [React Apollo - Testing](https://www.npmjs.com/package/@apollo/react-testing) - Utilitários de teste do Apollo
- [apollo-boost](https://www.npmjs.com/package/apollo-boost) - uma maneira sem configuração de começar a usar o Apollo Client. Ele inclui alguns padrões sensíveis, como o `InMemoryCache` e o `HttpLink` recomendados, que são configurados de acordo com as recomendações.
- [apollo-cache-inmemory](https://www.npmjs.com/package/apollo-cache-inmemory) - é a implementação de cache recomendada para o Apollo Client 2.0.
- [eslint-config-airbnb](https://github.com/airbnb/javascript) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme) - Desativa todas as regras desnecessárias ou que podem entrar em conflito com o Prettier
- [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias#readme) - Este é um plugin simples de resolução de importação de módulo Node.js para eslint-plugin-import, que suporta resolução nativa de módulo Node.js, módulo de alias/mapeamento e extensões de arquivos personalizados
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Este plugin oferece suporte à sintaxe de importação/exportação do ES2015+ (ES6+) e evitar problemas com erros de ortografia de caminhos de arquivos e nomes de importação
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) - Verificador AST (árvore abstrata de sintaxe) estático para regras de acessibilidade em elementos JSX
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme) - Executa o Prettier como uma regra do ESLint e relata as diferenças como problemas individuais do ESLint
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras específicas de aprendizagem para ESLint
- [eslint-plugin-react-hooks](https://github.com/facebook/react) - Aplica as regras dos Hooks
- [Prettier](https://github.com/prettier/prettier) - Formatador de código
- [prop-types](https://github.com/facebook/prop-types) - Verificação de tipo de tempo de execução para React props e objetos semelhantes. Você pode usar prop-types para documentar os tipos pretendidos de propriedades passados aos componentes. O React verificará os props passados para seus componentes em relação a essas definições e avisará em desenvolvimento se eles não corresponderem
- [customize-cra](https://github.com/arackaf/customize-cra#readme) - Fornece um conjunto de utilitários para personalizar as configurações das versões 02 e 03 do create-react-app, aproveitando as principais funcionalidades do react-app-rewired
- [customize-cra-react-refresh](https://github.com/esetnik/customize-cra-react-refresh#readme) - Fornece uma maneira simples de integrar react-refresh ao seu create-react-app usando customize-cra e @pmmmwh/react-refresh-webpack-plugin
