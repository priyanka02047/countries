import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const getNativeName = (nativeNameObj: any): string => {
  if (nativeNameObj) {
    const firstKey = Object.keys(nativeNameObj)[0];
    const firstNativeName = nativeNameObj[firstKey];

    return firstNativeName.common;
  } else {
    return "";
  }
};
const getCurrenyName = (nativeCurrObj: any): string => {
  if (nativeCurrObj) {
    const firstKey = Object.keys(nativeCurrObj)[0];
    const firstCurrencyName = nativeCurrObj[firstKey];

    return firstCurrencyName.name;
  } else {
    return "";
  }
};
const getLanguages = (languagesObj: any): string => {
  if (languagesObj) {
    const languageValues = Object.values(languagesObj);
    const joinedLanguages = languageValues.join(", ");

    return joinedLanguages;
  } else {
    return "";
  }
};
interface countrySideDetailProps {
  country: any;
}
const CountrySideDetail = (props: countrySideDetailProps): JSX.Element => {
  const { country } = props;
  return (
    country && (
      <div className="ml-0 mt-20 sm:ml-20 sm:mt-2">
        <h1 className=" font-bold text-xl">{country.name.common}</h1>
        <div className="flex pt-2 space-x-6 sm:space-x-20">
          <div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Native Name: "}&nbsp;</Text>
              <Text>{getNativeName(country.name.nativeName)}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Population: "}&nbsp;</Text>
              <Text>{country.population}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Region: "}&nbsp;</Text>
              <Text>{country.region}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Sub Region: "}&nbsp;</Text>
              <Text>{country.subregion}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Capital: "}&nbsp;</Text>
              <Text>{country.capital.join(",")}</Text>
            </div>
          </div>
          <div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Top Level Domain: "}&nbsp;</Text>
              <Text>{country.tld.join(",")}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Currencies: "}&nbsp;</Text>
              <Text>{getCurrenyName(country.currencies)}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"500"}>{"Languages: "}&nbsp;</Text>
              <Text>{getLanguages(country.languages)}</Text>
            </div>
          </div>
        </div>
        <div className="flex pt-8">
          <Text fontWeight={"500"}>{"Border Countries: "}&nbsp;</Text>
          {country.borders &&
            country.borders.map((item: any) => {
              return (
                <Link to={`/country/${item}`} key={item}>
                  <button className="shadow-md dark:bg-gray-800 dark:border-transparent border rounded-md mr-2 w-20">
                    {item}
                  </button>
                </Link>
              );
            })}
        </div>
      </div>
    )
  );
};

export default CountrySideDetail;
