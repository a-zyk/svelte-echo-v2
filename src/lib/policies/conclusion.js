export default {
  title: "Išvada",
  name: "conclusion",
  inputs: [
    {
      title: "Išvada",
      name: "conclusion",
      type: "text",
    },
  ],
  generate: (inputs) => {
    let description = "";
    if (inputs.conclusion) {
      description += `Išvada: ${inputs.conclusion}`;
    }
    return description;
  },
};
