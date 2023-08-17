function sfCcyBRLFormat(value) {
  if (typeof value !== "number") {
    throw new Error("Input should be a number");
  }
  const roundedValue = Math.round(value * 100) / 100;
  const formattedValue = roundedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
}

export default sfCcyBRLFormat;