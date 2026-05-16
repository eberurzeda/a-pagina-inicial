# A Página Inicial

**A Página Inicial** é um conto digital interativo criado com HTML, CSS e JavaScript.

O projeto une literatura, memória e tecnologia em uma experiência de leitura pensada para a tela. A narrativa acompanha Henrique, um professor de Língua Portuguesa e Literatura em transição para o desenvolvimento web.

Além da interface em HTML, CSS e JavaScript, o projeto possui um script SQL experimental para organizar elementos narrativos do conto, como capítulos, personagens, temas e lugares.

## Projeto online

Acesse o conto digital aqui:

https://eberurzeda.github.io/a-pagina-inicial/

## Sobre o projeto

Este projeto nasceu como parte do meu portfólio de transição de carreira, unindo minha experiência como professor, escritor e estudante de programação.

A proposta é transformar um conto literário em uma experiência digital, usando recursos simples de front-end para criar uma leitura mais imersiva.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- MySQL
- MySQL Workbench
- Git
- GitHub Pages

## Funcionalidades

- Página inicial do conto
- Capítulos em páginas separadas
- Navegação entre capítulos
- Modo claro e escuro
- Tema salvo durante a navegação
- Paleta visual inspirada na caixa azul do conto
- Layout responsivo para celular, tablet e computador

## Banco de dados

O projeto também inclui um script SQL criado durante meus estudos de MySQL.

O banco de dados `a_pagina_inicial` foi pensado para organizar informações narrativas do conto digital, como capítulos, personagens, temas e lugares.

Arquivo do banco:

`sql/banco-a-pagina-inicial.sql`

Esse script é um estudo complementar e não é necessário para executar o site no GitHub Pages.

## Estrutura do projeto

```text
a-pagina-inicial/
├── index.html
├── README.md
├── assets/
│   ├── favicon/
│   │   └── favicon.svg
│   └── imagens/
│       └── a-pagina-inicial.jpg
├── capitulos/
│   ├── body.html
│   ├── header.html
│   ├── main.html
│   ├── link.html
│   ├── script.html
│   ├── breakpoint.html
│   └── deploy.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── sql/
    └── banco-a-pagina-inicial.sql
```

## Como executar localmente

Por ser um projeto estático, basta abrir o arquivo `index.html` no navegador.

Também é possível usar a extensão Live Server no VS Code para navegar pelo projeto durante o desenvolvimento.

## O que aprendi

- Estruturar páginas com HTML semântico
- Organizar capítulos em arquivos separados
- Criar estilos responsivos com CSS
- Implementar modo claro e escuro com JavaScript
- Usar GitHub Pages para publicar um projeto estático
- Relacionar escrita literária, tecnologia e portfólio profissional

## Checklist de teste manual

Antes de publicar uma nova versão, conferir:

- A página inicial abre corretamente
- Todos os capítulos carregam
- Os links de capítulo anterior e próximo funcionam
- O botão de tema alterna entre claro e escuro
- O tema escolhido continua ativo ao trocar de página
- O layout continua legível no celular
- O README descreve a estrutura atual do projeto

## Autor

Eber Urzeda dos Santos  
Professor de Língua Portuguesa e Literatura, escritor e estudante de desenvolvimento web.
