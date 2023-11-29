export default (animalInfo, normalValueRanges, specificValue) => {
    let normalValues = "";
    const animal = animalInfo.species;
    const animalNormalValues = normalValueRanges[specificValue][animal]
  
    if (animal && animalNormalValues && animalNormalValues.length) {
      normalValues += ` (n- ${animalNormalValues})`;
    }
  return normalValues
}