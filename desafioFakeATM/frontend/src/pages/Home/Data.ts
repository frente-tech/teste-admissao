import {  svg2, svg3, svg4 } from "../../assets";

export const homeObj = {
  page: [
    {
      key: 1,
      lightBg: false, //true -> fundo branco; false -> fundo escuro
      prymary: true, //true -> hover button mais escuro; false -> hover button mais claro
      imgStart: false, //true -> a esquerda do texto; false -> a direita do texto
      lightTopLine: true, //true -> deixa a primeira linha com cor clara; false -> deixa azul mais escuro
      lightTextDesc: true, //altera cor texto description
      lightText: true, //altera cor texto principal
      buttonLabel: "Entrar em contato",
      redirect: '/contact',
      description:
        "Unimos a experiência de profissionais com carreira consolidada no mercado financeiro a uma visão inovadora e contemporânea de negócios.",
      headline:
        "Nossa missão é transformar a forma com a qual as pessoas fazem câmbio.",
      topLine: "Frente Corretora",
      img: svg2,
      alt: "Imagem",
      start: false, //mais proximo ou longe dos cantos da tela
    },
    {
      key: 2,
      lightBg: true, //true -> fundo branco; false -> fundo escuro
      prymary: false, //true -> hover button mais escuro; false -> hover button mais claro
      imgStart: true, //true -> a esquerda do texto; false -> a direita do texto
      lightTopLine: false, //true -> deixa a primeira linha com cor clara; false -> deixa azul mais escuro
      lightTextDesc: false, //altera cor texto description
      lightText: false, //altera cor texto principal
      buttonLabel: "Acessar",
      redirect: '/clients',
      description:
        "Aqui você pode adicionar um cliente, atualizar suas informacoes e controlar de maneira facil!",
      headline:
        "Cadastre/atualize seus clientes por aqui.",
      topLine: "Pagina de Clientes",
      img: svg3,
      alt: "Imagem",
      start: true, //mais proximo ou longe dos cantos da tela
    },
    {
      key: 3,
      lightBg: false, //true -> fundo branco; false -> fundo escuro
      prymary: true, //true -> hover button mais escuro; false -> hover button mais claro
      imgStart: false, //true -> a esquerda do texto; false -> a direita do texto
      lightTopLine: true, //true -> deixa a primeira linha com cor clara; false -> deixa azul mais escuro
      lightTextDesc: true, //altera cor texto description
      lightText: true, //altera cor texto principal
      buttonLabel: "Acessar",
      redirect: '/operation',
      description:
        "Aqui você pode controlar as operacoes, referente a cada cliente...",
      headline:
        "Cadastre/atualize suas operacoes por aqui.",
      topLine: "Pagina de Operação",
      img: svg4,
      alt: "Imagem",
      start: false, //mais proximo ou longe dos cantos da tela
    },
  ],
};
