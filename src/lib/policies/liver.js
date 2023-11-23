export default {
  title: "Kepenys",
  name: "liver",
  inputs: [
    {
      title: "Kepenų parenchima",
      type: "radio",
      name: "homogenicity",
      options: ["homogeniška", "heterogeniška"],
      normalValue: "homogeniška",
      tooltip: "Normali kepenų parenchima yra homogeniška.",
    },
    {
      title: "Kepenų parenchima lyginant su blužnimi",
      type: "radio",
      name: "liverToSpleen",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
      normalValue: "hipoechogeniška",
      tooltip:
        "Normali kepenų parenchima yra hipoechogeniška blužnies parenchimai",
    },
    {
      title: "Kepenų kraštai",
      type: "radio",
      name: "edges",
      options: ["aštrūs", "suapvalėję"],
      normalValue: "aštrūs",
      tooltip: "Normalių kepenų kraštai yra aštrūs.",
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs) => {
    const { homogenicity, edges, liverToSpleen, otherChanges } = inputs;

    let description = "";

    description += generateHomogenicity({ homogenicity, liverToSpleen });

    if (edges && !homogenicity && !liverToSpleen) {
      description += `Kepenų skilčių kraštai ${edges}. `;
    } else if (edges) {
      description += `Skilčių kraštai ${edges}. `;
    }

    if (otherChanges) {
      description += otherChanges;
    }

    return description;
  },
};

const generateHomogenicity = ({ homogenicity, liverToSpleen }) => {
  if (liverToSpleen && homogenicity) {
    return `Kepenų parenchima yra ${homogenicity}, ${liverToSpleen} blužnies parenchimai. `;
  } else if (homogenicity) {
    return `Kepenų parenchima yra ${homogenicity}. `;
  } else if (liverToSpleen) {
    return `Kepenų parenchima yra ${liverToSpleen} blužnies parenchimai. `;
  }

  return "";
};
