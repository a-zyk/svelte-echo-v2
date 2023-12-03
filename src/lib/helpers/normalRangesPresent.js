export default (animalInfo, normalValueRanges, specificValue) => {
  if(!animalInfo){
    return ""
  }
  let normalValues = "";

  const animal = animalInfo.species;

  if (!animal) {
    return normalValues;
  }

  const animalNormalValues = normalValueRanges[specificValue][animal];
  const size = weightToSize(animalInfo.weight);

  if (typeof animalNormalValues == "string") {
    if (animalNormalValues && animalNormalValues.length) {
      normalValues += ` (n- ${animalNormalValues})`;
    }
  } else if (size) {
    const animalNormalValuesWithSize = animalNormalValues[size];
    if (animalNormalValuesWithSize && animalNormalValuesWithSize.length) {
      normalValues += ` (n- ${animalNormalValuesWithSize})`;
    }
  }

  return normalValues;
};

const weightToSize = (weight) => {
  if (!weight) return;

  if (weight < 15) {
    return "small";
  } else if (weight < 30) {
    return "medium";
  } else {
    return "large";
  }
};
