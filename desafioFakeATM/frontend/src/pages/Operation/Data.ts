import { money, svg4 } from "../../assets";

export const operationObj = {
  page: [
    {
      key: 1,
      lightBg: true, //true -> fundo branco; false -> fundo escuro
      prymary: true, //true -> hover button mais escuro; false -> hover button mais claro
      imgStart: true, //true -> a esquerda do texto; false -> a direita do texto
      lightTopLine: false, //true -> deixa a primeira linha com cor clara; false -> deixa azul mais escuro
      lightTextDesc: false, //altera cor texto description
      lightText: false, //altera cor texto principal
      buttonLabel: "Acessar",
      redirect: "/operation",
      description:
        "Aqui você pode controlar as operacoes, tais como cadastrar uma nova, atualizar informacoes ou deletar, referente a cada cliente...",
      headline: "Pagina de Operações",
      topLine: "Controle de Operações",
      img: svg4,
      alt: "Imagem",
      start: false, //mais proximo ou longe dos cantos da tela
    },
  ],
};

export const operationCardInfo = {
  operation: [
    {
      key: 1,
      currencyName: "Angelita Alden",
      currencyImg: money,
      valueOperation: 12000,
      clientOperation: "Angelita Alden",
      transferOperation: "Diogo S.N",
      operationLimit: 12000,
    },
  ],
};
