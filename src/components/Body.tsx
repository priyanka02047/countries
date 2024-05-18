import React, { useState } from "react";
import CountryCards from "./CountryCards";
import { Link } from "react-router-dom";
import useCountriesList from "../utils/useCountriesList";
import Filters from "./Filters";
import ShimmerUI from "./ShimmerUI";
const Body = (): JSX.Element => {
  const { allCountries, allRegions, isLoading } = useCountriesList();
  const [searchText, setSearchText] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const onSearchHandler = (search: string) => {
    setSearchText(search);
  };
  const onFilterRegionHandler = (filter: string) => {
    setRegion(filter);
  };

  // Filtering countries data on the bases of country search and filter Region
  const filteredData = allCountries.filter((item: any) => {
    return (
      item?.name.official
        .toLocaleLowerCase()
        .includes(searchText.trim().toLocaleLowerCase()) &&
      item?.region
        .toLocaleLowerCase()
        .includes(region.trim().toLocaleLowerCase())
    );
  });
  if (isLoading) {
    return <ShimmerUI />;
  }
  return (
    <div className="pt-2 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Filters
        onSearchHandler={onSearchHandler}
        onFilterRegionHandler={onFilterRegionHandler}
        allRegions={allRegions}
      />
      {filteredData.length > 0 ? (
        <div className="pl-2 flex flex-wrap sm:pl-12">
          {filteredData.map((item: any) => {
            return (
              <Link to={`/country/${item?.name.official}`} key={item.id}>
                <CountryCards country={item} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="pl-12 pt-40 text-center min-h-screen">
          No Data Found
        </div>
      )}
    </div>
  );
};

export default Body;
