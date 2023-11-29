import normalRangesPresent from "$lib/helpers/normalRangesPresent";
const NORMAL_VALUES = {
  wallWidth: {
    cat: "≤0.17 cm",
    dog: "",
  },
};

export default {
  title: "Šlapimo pūslė",
  name: "bladder",
  inputs: [
    {
      title: "Šlapimo pūslės sienelė",
      type: "radio",
      name: "wallThickness",
      options: ["sustorėjusi", "nesustorėjusi"],
      normalValue: "nesustorėjusi",
    },
    {
      title: "Šlapimo pūslės sienelės storis, cm",
      name: "wallWidth",
      type: "number",
      tooltip: "Normalus šlapimo pūslės sienelės storis 0.1 cm",
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs, animalInfo) => {
    const { wallThickness, wallWidth, otherChanges } = inputs;
    let description = "";

    description += generateBladderParameters({
      wallThickness,
      wallWidth,
      animalInfo,
    });

    if (otherChanges) {
      description += otherChanges;
    }
    return description;
  },
};

const generateBladderParameters = ({
  wallThickness,
  wallWidth,
  animalInfo,
}) => {
  let wallWidthRange = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "wallWidth"
  );

  if (wallWidth && !wallThickness) {
    return `Šlapimo pūslės sienelės storis yra ${wallWidth} cm${wallWidthRange}. `;
  }
  if (wallThickness && wallWidth) {
    return `Šlapimo pūslės sienelė ${wallThickness}, sienelės storis ${wallWidth} cm${wallWidthRange}. `;
  }

  if (wallThickness == "sustorėjusi" && !wallWidth) {
    return `Šlapimo pūslės sienelė sustorėjusi. `;
  }

  if (wallThickness == "nesustorėjusi" && !wallWidth) {
    return `Šlapimo pūslės sienelė nesustorėjusi. `;
  }

  return "";
};
