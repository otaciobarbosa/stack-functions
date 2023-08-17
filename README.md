# Stack Functions

[![GitHub License](https://img.shields.io/github/license/otaciobarbosa/stack-functions)](LICENSE)
[![npm version](https://img.shields.io/npm/v/stack-functions)](https://www.npmjs.com/package/stack-functions)
[![Email](https://img.shields.io/badge/Email-contato%40otaciobarbosa.com.br-blue)](mailto:contato@otaciobarbosa.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ot%C3%A1ciobarbosa-blue)](https://www.linkedin.com/in/ot%C3%A1ciobarbosa/)


Uma coleção de funções utilitárias para formatar strings e valores monetários em JavaScript.

## Instalação

Para utilizar essas funções em seu projeto, você pode instalá-las via npm:

```bash
npm install stack-functions
```

## Funções Disponíveis

### `sfCcyBRLFormat(value)`

Formata um valor numérico como uma string de moeda no formato brasileiro (BRL - Real). A função arredonda o valor para duas casas decimais e o formata como moeda no padrão "pt-BR".

```javascript
const { sfCcyBRLFormat } = require('stack-functions');

console.log(sfCcyBRLFormat(1234.56)); // R$ 1.234,56
```

### `sfToLowerCase(value)`

Converte uma string para minúsculas.

```javascript
const { sfToLowerCase } = require('stack-functions');

console.log(sfToLowerCase('Hello World')); // hello world
```

### `sfToUpperCase(value)`

Converte uma string para maiúsculas.

```javascript
const { sfToUpperCase } = require('stack-functions');

console.log(sfToUpperCase('Hello World')); // HELLO WORLD
```

### `sfCcyFormat(value)`

Formata um valor numérico com duas casas decimais fixas.

```javascript
const { sfCcyFormat } = require('stack-functions');

console.log(sfCcyFormat(1234.5678)); // 1234.57
```

## Contribuição

Sinta-se à vontade para contribuir com novas funcionalidades, correções de bugs ou melhorias! Basta seguir estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença Creative Commons Atribuição 4.0 Internacional](http://creativecommons.org/licenses/by/4.0/).

Você é livre para:

- Compartilhar — copiar e redistribuir o material em qualquer suporte ou formato.
- Adaptar — remixar, transformar, e criar a partir do material para qualquer fim, mesmo que comercial.

Sob as seguintes condições:

- Atribuição — Você deve dar o crédito apropriado, prover um link para a licença e indicar se mudanças foram feitas. Você pode fazê-lo de qualquer maneira razoável, mas não de maneira que sugira que o licenciador endossa você ou o seu uso.