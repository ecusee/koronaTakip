import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url

  if(country){
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, lastUpdate, deaths } } = await axios.get(changeableUrl);

    return { confirmed, recovered, lastUpdate, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json')

    return data.map(({ positive: confirmed, recovered, death: deaths, dateChecked: date }) => ({
      confirmed, recovered, deaths, date
    }))
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries')
    
    return countries.map(country => country.name)
  } catch (error) {
    console.log(error)
  }
}