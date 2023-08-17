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

## Exemplos de Uso:

### Express.js

```javascript
const express = require('express');
const { sfCcyBRLFormat } = require('stack-functions');

const app = express();

app.get('/', (req, res) => {
  const value = 1234.56;
  const formattedValue = sfCcyBRLFormat(value);

  res.send(`Formatted value: ${formattedValue}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Express.js Versão Minificada:

```javascript
const express = require('express');
const { sfCcyBRLFormat } = require('stack-functions/dist/sfCcyBRLFormat.min');

const app = express();

app.get('/', (req, res) => {
  const value = 1234.56;
  const formattedValue = sfCcyBRLFormat(value);

  res.send(`Formatted value: ${formattedValue}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### React.js

```javascript
import React from 'react';
import { sfToLowerCase, sfToUpperCase } from 'stack-functions';

const MyComponent = () => {
  const originalString = 'Hello World';
  const lowerCaseString = sfToLowerCase(originalString);
  const upperCaseString = sfToUpperCase(originalString);

  return (
    <div>
      <p>Original: {originalString}</p>
      <p>Lowercase: {lowerCaseString}</p>
      <p>Uppercase: {upperCaseString}</p>
    </div>
  );
};

export default MyComponent;
```

### React.js Versão Minificada:

```javascript
import React from 'react';
import { sfToLowerCase } from 'stack-functions/dist/sfToLowerCase.min';
import { sfToUpperCase } from 'stack-functions/dist/sfToUpperCase.min';

const MyComponent = () => {
  const originalString = 'Hello World';
  const lowerCaseString = sfToLowerCase(originalString);
  const upperCaseString = sfToUpperCase(originalString);

  return (
    <div>
      <p>Original: {originalString}</p>
      <p>Lowercase: {lowerCaseString}</p>
      <p>Uppercase: {upperCaseString}</p>
    </div>
  );
};

export default MyComponent;
```

## Uso das Versões Minificadas

Ao utilizar nossas funções, você tem a opção de escolher entre as versões originais ou as versões minificadas. As versões minificadas têm nomes que terminam com `.min.js` e são otimizadas para reduzir o tamanho do pacote e melhorar o desempenho.


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