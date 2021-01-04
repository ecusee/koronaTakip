import React, { useEffect, useState } from "react";


import { Cards, Chart, CountryPicker } from "./components/index";
import { fetchData } from "./api";

import styles from "./App.module.css";
import image from './images/image.png';


const App = () => {
  const [country, setCountry] = useState('')
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };
    getData();
  }, []);

  const handleCountryPicker = async (country) => {
    setData(await fetchData(country))
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryPicker={handleCountryPicker}/>
      <Chart data={data} country={country}/>
    </div>
  );
};

export default App;
