const getCodigCountry = async (code) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const info = await data.json();
    return info[0].name.common;
  } catch (err) {
    console.log(err);
  }
};
export default getCodigCountry;
