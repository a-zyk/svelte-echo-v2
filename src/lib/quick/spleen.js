const homogenicity = "homogenicity";

export default {
  title: "Bluznis",
  inputs: {
    [homogenicity]: {
      type: "select",
      options: ["homogeniška", "heterogeniška"],
    },
  },
  text: `Blužnies parenchima yra {{${homogenicity}}} kepenų parenchimai`,
};

["Blužnies parenchima yra", "{{homogenicity}}", "kepeny parenchimai"]