import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import CountryCards from "./CountryCards";
const Body = (): JSX.Element => {
  const [allCountries, setAllCountries] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    console.log(jsonData);
    setAllCountries(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-2">
      <div className="flex p-4">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <HiMiniMagnifyingGlass color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for a country..."
            width={"auto"}
          />
        </InputGroup>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoChevronDown />}
            minWidth={"200px"}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            background={"white"}
          >
            Filter By Region
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="pl-12 flex flex-wrap">
        {allCountries.map((item) => {
          return <CountryCards country={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
