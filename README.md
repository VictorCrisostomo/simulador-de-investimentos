<h1 align="center" title="Simulador de Investimos">
    <img align="center" height="50px" src="https://eqi.com.br/favicon-32x32.png?v=ad3f4b0be1cf5d392515aa59d3d7d50c" alt="Logo-EQI">
     EQI | Simulador de investimentos
</h1>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-projeto">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-instalacao">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
</p>

<p align="center">
<img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=ED8E53&labelColor=000000" alt="PRs welcome!" />
<img src="https://img.shields.io/static/v1?label=license&message=ISC&color=fff&labelColor=000000" alt="license"/>
<img src="https://img.shields.io/static/v1?label=node&message=14.17.6&color=fff&labelColor=000000" alt="node" />
<img src="https://img.shields.io/static/v1?label=npm&message=8.1.4&color=fff&labelColor=000000" alt="npm" />
</p>

<br>

## 💻 Projeto

Simulador de investimentos é um projeto desenvolvido com tecnologias front-end e consumindo um [API-fake](https://github.com/eqi-investimentos/desafio-fake-api) para o desafio tecnico frontend da EQI Investimentos.

## 🎨 Layout

<p align="center">
    <img alt="desktop-print" src="./assets/desktop-print.png" width="80%">
</p>
<br>
<p align="center">
    <img alt="mobile-print" src="./assets/mobile-print.png" width="50%">
</p>

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

`CSS` - Ultilizado para a estilização de componentes HTML;<br>
`HTML` - Ultilizado para a criação de componentes;<br>
`Webpack` - Epacotador de codigos para otimização do projeto no ambiente de produção;<br>
`Bootstrap` - Framework de CSS para criação de Grids e regras de CSS sempre dando prioridade ao mobile-fist;<br>
`JavaScript` - Ultilizado para manipulação de DOM e para comunicação da API com o Front-end;<br>

## 🔰 Inicialização

1. Clone o **repositório**

- `https://github.com/VictorCrisostomo/simulador-de-investimentos.git`

2. Instale as dependências do projeto

- `npm install`

3. Navegue entre as pastas do repositório

- `./src/components/api`

4. E execute a instalação e a inicialização da API

- `npm install` e `npx json-server db.json`

### Ultilização

A aplicação está dividida em dois modos, `produção` (modo onde o projeto é otimizado e entregue ao cliente final) e `desenvolvimento` (modo onde é feita toda configuração e edição do codigo), com um servidor local instalado no modo de desenvolvimento fazendo a representação mais proxima do ambiente de produção.

Para navegar entre os modos:<br>

`npm run prod` - para acessar o modo de produção com o codigo otimizado;

`npm run dev` - para acessar o modo de desenvolvimento (ao executar esse comando ele inicializa o servidor na `http://localhost:8000/`);

## 📜 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.MD) para mais detalhes.

---