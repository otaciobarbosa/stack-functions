function sfCcyFormat(value) {
  if (typeof value !== "number") {
    throw new Error("Input should be a number");
  }
  return value.toFixed(2);
}

export default sfCcyFormat;