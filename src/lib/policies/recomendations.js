export default {
  title: "Rekomendacija",
  name: "recomendation",
  inputs: [
    {
      title: "Rekomendacija",
      name: "recomendation",
      type: "text",
    },
  ],
  generate: (inputs) => {
    let description = "";
    if (inputs.recomendation) {
      description += `Rekomendacija: ${inputs.recomendation}`;
    }
    
    return description;
  },
};
