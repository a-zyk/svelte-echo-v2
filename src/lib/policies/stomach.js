import normalRangesPresent from "$lib/helpers/normalRangesPresent";
const NORMAL_VALUES = {
  wallWidth: {
    cat: "0.2-0.4 cm",
    dog: "0.2-0.5 cm",
  },
};
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
  generate: (inputs, _, animalInfo) => {
    const { wallWidth, otherChanges } = inputs;
let wallWidthNormalValue = normalRangesPresent(animalInfo, NORMAL_VALUES, "wallWidth")
    let description = "";

    if (wallWidth) {
      description += `Skandžio sienelės storis ${wallWidth} cm${wallWidthNormalValue}. `;
    }

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};
