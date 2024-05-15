import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
  //const capital = country?.capital.join(",");
  return (
    country !== undefined && (
      <Card
        margin={5}
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        variant="outline"
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

            <Text py="2">Population: {country.population}</Text>
            <Text py="2">Region: {country.region}</Text>
            <Text py="2">
              Capital: {country?.capital ? country?.capital.join(",") : ""}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    )
  );
};

export default Country;
