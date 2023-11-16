export default {
  title: "Blužnis",
  inputs: [
    {
      title: "Blužnies parenchima",
      type: "radio",
      name: "homogenicity",
      options: ["homogeniška", "heterogeniška"],
      tooltip: "Normali blužnies parenchima yra homogeniška.",
    },
    {
      title: "Blužnies parenchima lyginant su kepenimis",
      type: "radio",
      name: "spleenToLiver",
      options: ["izoechogeniška", "hipoechogeniška", "hiperechogeniška"],
      tooltip:
        "Normali blužnies parenchima yra hiperechogeniška kepenų parenchimai",
    },
    {
      title: "Blužnies kraštai",
      type: "radio",
      name: "edges",
      options: ["aštrūs", "suapvalėję"],
      tooltip: "Normalios blužnies kraštai yra aštrūs.",
    },
    {
      title: "Kiti pakitimai",
      name: "otherChanges",
      type: "text",
    },
  ],
  generate: (inputs) => {
    const { homogenicity, edges, spleenToLiver, otherChanges } = inputs;

    let description = "";

    description += generateHomogenicity({ homogenicity, spleenToLiver });

    if (edges) {
      description += `Blužnies kraštai ${edges}. `;
    }

    if (otherChanges ) {
      description += otherChanges;
    }
    
    return description;
  },
};

const generateHomogenicity = ({ homogenicity, spleenToLiver }) => {
  if (spleenToLiver && homogenicity) {
    return `Blužnies parenchima yra ${homogenicity}, ${spleenToLiver} kepenų parenchimai. `;
  } else if (homogenicity) {
    return `Blužnies parenchima yra ${homogenicity}. `;
  } else if (spleenToLiver) {
    return `Blužnies parenchima yra ${spleenToLiver} kepenų parenchimai. `;
  }
};
