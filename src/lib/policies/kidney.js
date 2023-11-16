export default {
  title: "Inkstai",
  groups: [
    { title: "Kairys inkstas", name: "left" },
    {
      title: "Dešinys inkstas",
      name: "right",
    },
  ],
  inputs: [
    {
      title: "Inksto žievė lyginant su blužnimi",
      type: "radio",
      name: "cortexToSpleen",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
    },
    {
      title: "Inksto ilgis",
      name: "length",
      type: "number",
    },
    {
      title: "Inksto plotis",
      name: "width",
      type: "number",
    },
    {
      title: "Inksto geldelė",
      type: "radio",
      name: "medulla",
      options: ["išsiplėtusi", "neišsiplėtusi"],
    },
    {
      title: "Geldelės plotis skersiniame pjūvyje, cm",
      type: "number",
      name: "medullaWidth",
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
      if (group.name == "left") {
        description += "Kairys inkstas. "
      } else if (group.name == "right") {
        description += "Dešinys inkstas. "
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
