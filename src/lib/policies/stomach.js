export default {
  title: "Skrandis",
  name: "stomach",
  inputs: [
    {
      title: "Skrandžio sienelės storis, cm",
      name: "wallWidth",
      type: "number",
      tooltip:
        "Normalus skrandžio sienelės storis katei yra ~0.2-0.4cm, šunims ~0.2-0.5cm.",
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs) => {
    const { wallWidth, otherChanges } = inputs;

    let description = "";

    if (wallWidth) {
      description += `Skandžio sienelės storis ${wallWidth} cm. `;
    }

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};
