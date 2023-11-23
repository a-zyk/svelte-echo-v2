export default {
  title: "Inkstai",
  groups: [
    { title: "Kairys inkstas", name: "leftKidney" },
    {
      title: "Dešinys inkstas",
      name: "rightKidney",
    },
  ],
  inputs: [
    {
      title: "Inksto žievė lyginant su blužnimi",
      type: "radio",
      name: "cortexToSpleen",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
      normalValue: "hipoechogeniška",
      tooltip: {
        leftKidney: "Normalaus kairio inksto žievė yra hipoechoiška blužniai.",

        rightKidney:
          "Normalaus dešinio inksto žievė yra hipoechoiška/izoechoiška kepenims.",
      },
    },
    {
      title: "Inksto ilgis, cm",
      name: "length",
      type: "number",
      tooltip:
        "Normalus katės inksto ilgis ~3-4.5cm. Didesnis pas nekastruotus katinus, mažesnis senoms katėms.",
    },
    {
      title: "Inksto plotis, cm",
      name: "width",
      type: "number",
      tooltip: "Normalaus katės inksto plotis ~2.23-2.83cm.",
    },
    {
      title: "Inksto geldelė",
      type: "radio",
      name: "medulla",
      options: ["išsiplėtusi", "neišsiplėtusi"],
      normalValue: "neišsiplėtusi",
    },
    {
      title: "Geldelės plotis skersiniame pjūvyje, cm",
      type: "number",
      name: "medullaWidth",
      tooltip:
        "Skersiniame pjūvyje normalus geldelės plotis ≤0.2cm. Plotis >1.3cm būdingas obstrukcijai.",
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs, group) => {
    const {
      medullaWidth,
      medulla,
      width,
      length,
      cortexToSpleen,
      otherChanges,
    } = inputs;

    let description = "";

    if (inputsPresent(inputs)) {
      if (group.name == "leftKidney") {
        description += "Kairys inkstas. ";
      } else if (group.name == "rightKidney") {
        description += "Dešinys inkstas. ";
      }

      if (cortexToSpleen) {
        description += `Inksto žievė yra ${cortexToSpleen} blužnies parenchimai. `;
      }

      description += generateSize({ width, length });
      description += generateMedulla({ medulla, medullaWidth });

      if (otherChanges) description += otherChanges;
    }

    return description;
  },
};

const generateSize = ({ width, length }) => {
  let description = "";
  if (length && !width) {
    description += `Inksto ilgis ${length} cm. `;
  }
  if (width && !length) {
    description += `Inksto plotis ${width} cm. `;
  }
  if (width && length) {
    description += `Inksto ilgis ir plotis ${length}x${width} cm. `;
  }
  return description;
};

const generateMedulla = ({ medulla, medullaWidth }) => {
  let description = "";
  if (medulla && !medullaWidth) {
    description += `Skersiniame pjūvyje geldelė ${medulla}. `;
  }
  if (medullaWidth && !medulla) {
    description += `Skersiniame pjūvyje geldelės plotis ${medullaWidth} cm. `;
  }
  if (medullaWidth && medulla) {
    description += `Skersiniame pjūvyje geldelė ${medulla}, plotis ${medullaWidth} cm. `;
  }
  return description;
};

const inputsPresent = (inputs) => {
  return Object.values(inputs).some((value) => value && value.length);
};
