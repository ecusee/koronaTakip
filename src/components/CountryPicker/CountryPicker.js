import React, {useEffect, useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/index'

import styles from './CountryPicker.module.css';

 const CountryPicker = ({ handleCountryPicker }) => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountryApi = async () => {
      setCountries(await fetchCountries())
    }

    fetchCountryApi()
  },[])

  return (
    <FormControl className={styles.container}>
      <NativeSelect default="" onChange={(e) => handleCountryPicker(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}


export default CountryPicker