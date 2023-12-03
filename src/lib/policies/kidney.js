import inputsPresent from "$lib/helpers/inputsPresent";
import normalRangesPresent from "$lib/helpers/normalRangesPresent";
const NORMAL_VALUES = {
  length: {
    cat: "3-4.5 cm",
    dog: "",
  },
  width: {
    cat: "2.23-2.83 cm",
    dog: "",
  },
  widthLength: {
    cat: "2.23-2.83 cm x 3-4.5 cm",
    dog: "",
  },
  medullaWidth: {
    cat: "<0.2cm cm",
    dog: "<0.2cm cm",
  },
};
export default {
  title: "Inkstai",
  name: "kidneys",
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
  generate: (inputs, group, animalInfo) => {
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

      description += generateSize({ width, length, animalInfo });
      description += generateMedulla({ medulla, medullaWidth, animalInfo });

      if (otherChanges) description += otherChanges;
    }

    return description;
  },
};

const generateSize = ({ width, length, animalInfo }) => {
  let lengthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "length"
  );
  let widthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "width"
  );
  let sizeNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "widthLength"
  );

  let description = "";

  if (length && !width) {
    description += `Inksto ilgis ${length} cm${lengthNormalValue}. `;
  }
  if (width && !length) {
    description += `Inksto plotis ${width} cm${widthNormalValue}. `;
  }
  if (width && length) {
    description += `Inksto ilgis ir plotis ${length}x${width} cm${sizeNormalValue}.`;
  }
  return description;
};

const generateMedulla = ({ medulla, medullaWidth, animalInfo }) => {
  let widthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "medullaWidth"
  );
  let description = "";
  if (medulla && !medullaWidth) {
    description += `Skersiniame pjūvyje geldelė ${medulla}. `;
  }
  if (medullaWidth && !medulla) {
    description += `Skersiniame pjūvyje geldelės plotis ${medullaWidth} cm${widthNormalValue}. `;
  }
  if (medullaWidth && medulla) {
    description += `Skersiniame pjūvyje geldelė ${medulla}, plotis ${medullaWidth} cm${widthNormalValue}. `;
  }
  return description;
};
