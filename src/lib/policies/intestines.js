export default {
  title: "Žarnynas",
  name: "intestines",
  groups: [
    { title: "Dvylikapirštė žarna", name: "duodenum" },
    {
      title: "Tuščioji žarna",
      name: "jejunum",
    },
    {
      title: "Klubinės žarnos sienelės storis ties ileocekaline jungtimi, cm",
      name: "ileocecal",
    },
    {
      title: "Gaubtinė žarna",
      name: "colon",
    },
  ],
  inputs: [
    {
      title: "Sienelės storis, cm",
      name: "width",
      type: "number",
      tooltip: {
        duodenum:
          "Normalios dvylikapirštės žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.38cm, 15-30kg: ~0.41cm, >30kg: ~0.44cm.",
        jejunum:
          "Normalios tuščiosios žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.3cm, 15-30kg: ~0.35cm, >30kg: ~0.38cm.",
        ileocecal:
          "Normalios klubinės žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.3cm, 15-30kg: ~0.35cm, >30kg: ~0.38cm.",
        colon:
          "Normalios storosios žarnos sienelės storis katėms ir šunims yra ~0.15cm.",
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
      width,
      otherChanges,
    } = inputs;

    let description = "";

    if (inputsPresent(inputs)) {
      if (group.name == "duodenum") {
        description += "Dvylikapirštė žarna. ";
      } else if (group.name == "jejunum") {
        description += "Tuščioji žarna. ";
      } else if (group.name == "ileocecal") {
        description += "Klubinė žarna. ";
      } else if (group.name == "colon") {
        description += "Storoji žarna. ";
      }

      if (width) {
        description += `Sienelės storis ${width} cm. `;
      }

      if (otherChanges) description += otherChanges;
    }

    return description;
  },
};

const inputsPresent = (inputs) => {
  return Object.values(inputs).some((value) => value && value.length);
};
