function sfToLowerCase(value) {
  if (typeof value !== "string") {
    throw new Error("Input should be a string");
  }
  return value.toLowerCase();
}

export default sfToLowerCase;