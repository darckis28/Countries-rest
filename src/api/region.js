const getRegion = async (region) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const objet = await data.json();
    return objet;
  } catch (error) {
    console.log(error);
  }
};
export default getRegion;
