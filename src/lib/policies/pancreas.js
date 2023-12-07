import normalRangesPresent from "$lib/helpers/normalRangesPresent";
const NORMAL_VALUES = {
  ductusWidth: {
    cat: "≤0.1 cm",
    dog: "≤0.06 cm",
  },
};
export default {
  title: "Kasa",
  name: "pancreas",
  inputs: [
    {
      title: "Kasos parenchima supantiems riebalams",
      type: "radio",
      name: "pancreasToFat",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
      normalValue: "izoechogeniška",
      tooltip: "Normali kasa aplinkiniams riebalams yra izoechogeniška.",
    },
    {
      title: "Kasos latako skersmuo, cm",
      name: "ductusWidth",
      type: "number",
      tooltip:
        "Normalus kasos latako skersmuo katėms yra ~0.1cm, šunims- ~0.06cm. Latako skersmuo, kuris galėtų indikuoti obstrukciją: 0.4-0.5cm. Senatvinis pakitimas katėms virš 10 metų - galimas kasos latako išsiplėtimas iki 0.25cm.",
    },

    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs, _, animalInfo) => {
    const { pancreasToFat, ductusWidth, otherChanges } = inputs;

    let description = "";

    description += generatePancreasInfo({
      pancreasToFat,
      ductusWidth,
      animalInfo,
    });

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};

const generatePancreasInfo = ({ pancreasToFat, ductusWidth, animalInfo }) => {
  let ductusWidthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "ductusWidth"
  );
  if (ductusWidth && pancreasToFat) {
    return `Kasa supantiems riebalams ${pancreasToFat}, kasos latako skresmuo ${ductusWidth} cm${ductusWidthNormalValue}. `;
  } else if (pancreasToFat) {
    return `Kasa supantiems riebalams ${pancreasToFat}. `;
  } else if (ductusWidth) {
    return `Kasos latako skersmuo ${ductusWidth} cm${ductusWidthNormalValue}. `;
  }

  return "";
};
