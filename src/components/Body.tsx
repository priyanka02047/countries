import {
  Button,
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
import { Link } from "react-router-dom";
const Body = (): JSX.Element => {
  const [allCountries, setAllCountries] = useState([]);
  const [allRegions, setAllRegions] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  // set the country data and region data in states
  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await data.json();
    const regions = jsonData.map((item: any) => item.region);
    const allRegionsData = [...new Set(regions)] as string[];
    setAllRegions(allRegionsData);
    setAllCountries(jsonData);
  };
  useEffect(() => {
    // fetch the country data
    fetchData();
  }, []);

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

  return (
    <div className="pt-2 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col sm:flex-row p-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:p-10">
        <InputGroup className="border-none">
          <InputLeftElement pointerEvents="none">
            <HiMiniMagnifyingGlass color="gray.300" />
          </InputLeftElement>
          <Input
            className="bg-white shadow-md text-black dark:bg-gray-800 dark:text-white min-w-full sm:min-w-60 max-w-full sm:max-w-60"
            type="text"
            border="none"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search for a country..."
          />
        </InputGroup>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoChevronDown />}
            maxWidth={"200px"}
            minWidth={"200px"}
            transition="all 0.2s"
            _expanded={{ bg: "gray.100" }}
            borderRadius="md"
            borderWidth="0px"
            className="bg-white shadow-md text-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800 dark:aria-expanded:bg-gray-800 dark:border-transparent"
          >
            Filter By Region
          </MenuButton>
          <MenuList
            boxShadow="lg"
            borderStyle={"none"}
            className="bg-white text-black dark:bg-gray-800 dark:text-white dark:border-transparent"
          >
            <MenuItem
              onClick={() => {
                setRegion("");
              }}
              className="bg-white text-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900"
            >
              All
            </MenuItem>
            {allRegions.map((item) => {
              return (
                <MenuItem
                  onClick={() => {
                    setRegion(item);
                  }}
                  className="bg-white text-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900"
                >
                  {item}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
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
