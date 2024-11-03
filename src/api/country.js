const getCountry = async (name) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const countries = await data.json();
    return countries;
  } catch (error) {
    return [];
  }
};
export default getCountry;
