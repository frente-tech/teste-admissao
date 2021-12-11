interface Props {
  x: number;
}
export const toMoney = ({ x }: Props) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(x);
};
