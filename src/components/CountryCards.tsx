import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import React from "react";

interface countryProps {
  country: any;
}
const Country = (props: countryProps) => {
  const country = props.country;
  return (
    country !== undefined && (
      <Card
        className="bg-white shadow-lg text-black dark:bg-gray-800 dark:text-white dark:border-transparent"
        margin={5}
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        variant="outline"
        maxH={350}
        minH={350}
        boxShadow="lg"
        borderStyle={"none"}
        width={250}
      >
        <Image
          objectFit="cover"
          minW={{ base: "100%", sm: "200px" }}
          minH={"150px"}
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <Divider />

        <Stack>
          <CardBody>
            <Heading size="md">{country?.name.official}</Heading>
            <div className="flex pt-4">
              <Text fontWeight={"bold"}>{"Population: "}&nbsp;</Text>
              <Text>{country.population}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"bold"}>{"Region: "}&nbsp;</Text>
              <Text>{country.region}</Text>
            </div>
            <div className="flex">
              <Text fontWeight={"bold"}>{"Capital: "}&nbsp;</Text>
              <Text> {country?.capital ? country?.capital.join(",") : ""}</Text>
            </div>
          </CardBody>
        </Stack>
      </Card>
    )
  );
};

export default Country;
