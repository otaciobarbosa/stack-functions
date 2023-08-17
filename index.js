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
  
  function sfToLowerCase(value) {
    if (typeof value !== "string") {
      throw new Error("Input should be a string");
    }
    return value.toLowerCase();
  }
  
  function sfToUpperCase(value) {
    if (typeof value !== "string") {
      throw new Error("Input should be a string");
    }
    return value.toUpperCase();
  }
  
  function sfCcyFormat(value) {
    if (typeof value !== "number") {
      throw new Error("Input should be a number");
    }
    return value.toFixed(2);
  }
  

  export {
    sfCcyFormat,
    sfCcyBRLFormat,
    sfToLowerCase,
    sfToUpperCase
  };
  