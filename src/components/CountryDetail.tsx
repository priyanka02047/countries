import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";

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
const CountryDetail = (): JSX.Element => {
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

  return (
    country && (
      <div className="text-black bg-white dark:text-white dark:bg-gray-900 min-h-screen ">
        <Link to="/" className="p-4 sm:p-10">
          <button className="flex dark:bg-gray-800 rounded-md min-w-24 max-w-24 p-2 m-10">
            {" "}
            <FaArrowLeftLong className="mt-1.5 mr-3" />
            Back
          </button>
        </Link>

        <div className="flex m-2 flex-col sm:flex-row sm:m-14">
          <Image
            objectFit="cover"
            minW={{ base: "100%", sm: "200px" }}
            maxW={"500px"}
            minH={"250px"}
            maxH={"550px"}
            borderRadius={6}
            src={country.flags.png}
            alt={country.flags.alt}
          />
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
        </div>
      </div>
    )
  );
};

export default CountryDetail;
