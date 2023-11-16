export default {
  title: "Šlapimo pūslė",
  inputs: [
    {
      title: "Šlapimo pūslės sienelė",
      type: "radio",
      name: "wallThickness",
      options: ["sustorėjusi", "nesustorėjusi"],
    },
    {
      title: "Šlapimo pūslės sienelės storis, cm",
      name: "wallWidth",
      type: "number",
      tooltip: "Normalus šlapimo pūslės sienelės storis 0.1cm"
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs) => {
    const { wallThickness, wallWidth, otherChanges } = inputs;
    let description = "";

    description += generateBladderParameters({ wallThickness, wallWidth });

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};

const generateBladderParameters = ({ wallThickness, wallWidth }) => {
  if (wallWidth && !wallThickness) {
    return `Šlapimo pūslės sienelės storis yra ${wallWidth} cm. `;
  }
  if (wallThickness && wallWidth) {
    return `Šlapimo pūslės sienelė ${wallThickness}, sienelės storis ${wallWidth} cm. `;
  }

  if (wallThickness == "sustorėjusi" && !wallWidth) {
    return `Šlapimo pūslės sienelė sustorėjusi. `;
  }

  if (wallThickness == "nesustorėjusi" && !wallWidth) {
    return `Šlapimo pūslės sienelė nesustorėjusi. `;
  }
};
