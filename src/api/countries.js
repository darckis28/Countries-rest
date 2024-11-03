const getCountries = async () => {
  try {
    const data = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,currencies,subregion,languages,tld,borders"
    );
    const country = await data.json();
    return country;
  } catch (error) {
    console.log(error);
  }
};

export default getCountries;
