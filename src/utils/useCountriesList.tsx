import { useEffect, useState } from "react";

interface countriesType {
  allCountries: any[];
  allRegions: string[];
  isLoading: boolean;
}
const useCountriesList = (): countriesType => {
  const [allCountries, setAllCountries] = useState([]);
  const [allRegions, setAllRegions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // set the country data and region data in states
  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    const regions = jsonData.map((item: any) => item.region);
    const allRegionsData = [...new Set(regions)] as string[];
    setAllRegions(allRegionsData);
    setAllCountries(jsonData);
    setIsLoading(false);
  };
  useEffect(() => {
    // fetch the country data
    fetchData();
  }, []);
  return { allCountries, allRegions, isLoading };
};

export default useCountriesList;
