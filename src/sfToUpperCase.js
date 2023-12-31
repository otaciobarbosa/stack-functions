function sfToUpperCase(value) {
  if (typeof value !== "string") {
    throw new Error("Input should be a string");
  }
  return value.toUpperCase();
}

export default sfToUpperCase;