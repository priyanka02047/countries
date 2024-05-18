import React from "react";
import { Image } from "@chakra-ui/react";
import BackButton from "./BackButton";
import CountrySideDetail from "./CountrySideDetail";
import useCountryDetail from "../utils/useCountryDetail";

const CountryDetail = (): JSX.Element => {
  const { country } = useCountryDetail();

  return (
    country && (
      <div className="text-black bg-white dark:text-white dark:bg-gray-900 min-h-screen">
        <BackButton />
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
          <CountrySideDetail country={country} />
        </div>
      </div>
    )
  );
};

export default CountryDetail;
