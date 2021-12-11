import { svg3 } from "../../assets";

export const clientsObj = {
  page: [
    {
      key: 1,
      lightBg: true, //true -> fundo branco; false -> fundo escuro
      prymary: false, //true -> hover button mais escuro; false -> hover button mais claro
      imgStart: true, //true -> a esquerda do texto; false -> a direita do texto
      lightTopLine: false, //true -> deixa a primeira linha com cor clara; false -> deixa azul mais escuro
      lightTextDesc: false, //altera cor texto description
      lightText: false, //altera cor texto principal
      buttonLabel: "Acessar",
      redirect: "/clients",
      description:
        "Aqui você pode adicionar um cliente, atualizar suas informacoes e controlar tudo de maneira facil!",
      headline: "Pagina de Clientes",
      topLine: "Controle de clientes",
      img: svg3,
      alt: "Imagem",
      start: true, //mais proximo ou longe dos cantos da tela
    },
  ],
};
