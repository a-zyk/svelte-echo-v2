export default (inputs) => {
  return Object.values(inputs).some((value) => {
    if (typeof value == "string") {
      return value && value.length;
    }

    return !!value;
  });
};
