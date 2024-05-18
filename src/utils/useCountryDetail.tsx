import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface CountryDetailReturn {
  country: any;
}

const useCountryDetail = (): CountryDetailReturn => {
  const [country, setCountry] = useState<any>(undefined);
  const { countryId } = useParams();
  // set the country data and region data in states
  const fetchData = async () => {
    let url = "";
    if ((country && countryId?.length === 2) || countryId?.length === 3) {
      url = `https://restcountries.com/v3.1/alpha/${countryId}`;
    } else {
      url = `https://restcountries.com/v3.1/name/${countryId}`;
    }
    const data = await fetch(url);
    const jsonData = await data.json();
    setCountry(jsonData[0]);
  };
  useEffect(() => {
    // fetch the country data
    fetchData();
  }, [countryId]);

  return { country };
};

export default useCountryDetail;
