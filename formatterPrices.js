export const formatPrice = (num) => {
  return new Intl.NumberFormat("pt-PE", {
    style: "currency",
    currency: "PEN",
  }).format(num);
};
