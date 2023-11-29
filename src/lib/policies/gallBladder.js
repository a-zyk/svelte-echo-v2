import normalRangesPresent from "$lib/helpers/normalRangesPresent";
const NORMAL_VALUES = {
  ductusWidth: {
    cat: "≤0.4 cm",
    dog: "≤0.3 cm",
  },
  wallWidth: {
    cat: "<0.1 cm",
    dog: "<0.1 cm",
  },
};
export default {
  title: "Tulžies pūslė ir bendrasis tulžies latakas",
  name: "gallblader",
  inputs: [
    {
      title: "Tulžies pūslės sienelė",
      type: "radio",
      name: "wallWidth",
      options: ["sustorėjusi", "nesustorėjusi"],
      normalValue: "nesustorėjusi",
    },
    {
      title: "Tulžies pūslės sienelės storis, cm",
      name: "width",
      type: "number",
      tooltip:
        "Normalios tulžies pūslės sienelės storis katėms ir šunims yra <0.1cm.",
    },
    {
      title: "Bendrasis tulžies latakas",
      type: "radio",
      name: "commonDuctus",
      options: ["prasiplėtęs", "neprasiplėtęs"],
      normalValue: "neprasiplėtęs",
    },
    {
      title: "Tulžies pūslės latako skersmuo, cm",
      name: "commonDuctusWidth",
      type: "number",
      tooltip:
        "Normalus tulžies pūslės latako skersmuo katėms yra ≤0.4cm, o šunims - ≤0.3cm.",
    },

    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs, animalInfo) => {
    const { wallWidth, width, commonDuctus, commonDuctusWidth, otherChanges } =
      inputs;

    let description = "";

    description += generateWallInfo({
      wallWidth,
      width,
      animalInfo,
    });

    description += generateDuctusInfo({
      commonDuctus,
      commonDuctusWidth,
      animalInfo,
    });

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};

const generateWallInfo = ({ wallWidth, width, animalInfo }) => {
  let wallWidthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "wallWidth"
  );
  if (wallWidth && width) {
    return `Tulžies pūslės sienelė ${wallWidth}, storis ${width} cm${wallWidthNormalValue}. `;
  } else if (wallWidth) {
    return `Tulžies pūslės sienelė ${wallWidth}. `;
  } else if (width) {
    return `Tulžies pūslės sienelės storis ${width} cm${wallWidthNormalValue}. `;
  }

  return "";
};

const generateDuctusInfo = ({
  commonDuctus,
  commonDuctusWidth,
  animalInfo,
}) => {
  let ductusWidthNormalValue = normalRangesPresent(
    animalInfo,
    NORMAL_VALUES,
    "ductusWidth"
  );
  if (commonDuctus && commonDuctusWidth) {
    return `Tulžies bendrasis latakas ${commonDuctus}, skersmuo ${commonDuctusWidth} cm${ductusWidthNormalValue}. `;
  } else if (commonDuctus) {
    return `Tulžies bendrasis latakas ${commonDuctus}. `;
  } else if (commonDuctusWidth) {
    return `Tulžies bendrojo latako skersmuo ${commonDuctusWidth} cm${ductusWidthNormalValue}. `;
  }
  return "";
};
