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
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
interface filtersProps {
  onSearchHandler: (search: string) => void;
  onFilterRegionHandler: (filter: string) => void;
  allRegions: string[];
}
const Filters = (props: filtersProps): JSX.Element => {
  const { onSearchHandler, onFilterRegionHandler, allRegions } = props;
  return (
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
            onSearchHandler(e.target.value);
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
              onFilterRegionHandler("");
            }}
            className="bg-white text-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900"
          >
            All
          </MenuItem>
          {allRegions.map((item) => {
            return (
              <MenuItem
                key={item}
                onClick={() => {
                  onFilterRegionHandler(item);
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
  );
};

export default Filters;
