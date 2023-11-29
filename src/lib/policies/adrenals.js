import inputsPresent from "$lib/helpers/inputsPresent";

export default {
  title: "Inkstai",
  groups: [
    { title: "Kairys prieinkstis", name: "leftAdrenal" },
    {
      title: "Dešinys prieinkstis",
      name: "rightAdrenal",
    },
  ],
  inputs: [
    {
      title: "Prieinksčio žievė aplink esantiems riebalams",
      type: "radio",
      name: "cortexToFat",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
      normalValue: "hipoechogeniška",
      tooltip:
        "Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška.",
    },
    {
      title: "Prieinksčio ilgis, cm",
      name: "frontWidth",
      type: "number",
      tooltip:
        "Normalus katės inksto ilgis ~3-4.5 cm. Didesnis pas nekastruotus katinus, mažesnis senoms katėms.",
      descriptionNormalValues: {
        cat: "1-1.1 cm",
        dog: "1-5 cm",
      },
    },

    {
      title: "Prieinksčio priekinio poliaus plotis, cm",
      name: "frontWidth",
      type: "number",
      tooltip:
        "Normalus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm.",
      descriptionNormalValues: {
        cat: "0.35-0.45 cm",
        dog: "0.6-0.8 cm",
      },
    },
    {
      title: "Prieinksčio galinio poliaus plotis, cm",
      name: "backWidth",
      type: "number",
      tooltip:
        "Normalus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm.",
      descriptionNormalValues: {
        cat: "0.35-0.45 cm",
        dog: "0.6-0.8 cm",
      },
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs, group) => {
    const {
      frontWidth,
      backWidth,
      width,

      cortexToFat,
      otherChanges,
    } = inputs;

    let description = "";

    if (inputsPresent(inputs)) {
      if (group.name == "leftAdrenal") {
        description += "Kairys prieinkstis. ";
      } else if (group.name == "rightAdrenal") {
        description += "Dešinys prieinkstis. ";
      }

      if (cortexToFat) {
        description += `Prieinksčio žievė yra ${cortexToSpleen} jį supantiems riebalams. `;
      }

      description += generateSize({ frontWidth, backWidth, width });

      if (otherChanges) description += otherChanges;
    }

    return description;
  },
};

const generateSize = ({ frontWidth, backWidth, width }) => {
  let description = "";
  if (width && frontWidth && backWidth) {
    description += `Ilgis ${width}, priekinis polius ${frontWidth} cm, galinis polius ${backWidth} cm.`;
  } else if (width) {
    description += `Prieinksčio ilgis ${width} cm. `;
  } else if (frontWidth) {
    description += `Priekinis polius ${frontWidth} cm. `;
  } else if (backWidth) {
    description += `Galinis polius ${backWidth} cm. `;
  }
  return description;
};
