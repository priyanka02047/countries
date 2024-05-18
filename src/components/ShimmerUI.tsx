import { Card, Input, InputGroup, Menu, MenuButton } from "@chakra-ui/react";
import React from "react";
const ShimmerUI = (): JSX.Element => {
  const shimmerData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="pt-2 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col sm:flex-row p-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:p-10">
        <InputGroup className="border-none">
          <Input
            className="bg-gray-100 shadow-md text-black dark:bg-gray-800 dark:text-white min-w-full sm:min-w-60 max-w-full sm:max-w-60"
            type="text"
            backgroundColor={"gray.100"}
            border="none"
          />
        </InputGroup>
        <Menu>
          <MenuButton
            maxWidth={"200px"}
            minWidth={"200px"}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="0px"
            className="bg-gray-100 shadow-md text-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800 dark:aria-expanded:bg-gray-800 dark:border-transparent"
          ></MenuButton>
        </Menu>
      </div>
      <div className="pl-2 flex flex-wrap sm:pl-12">
        {shimmerData.map((item: any) => {
          return (
            <Card
              key={item}
              className="bg-gray-100 shadow-lg text-black dark:bg-gray-800 dark:text-white dark:border-transparent"
              margin={5}
              direction={{ base: "column", sm: "column" }}
              overflow="hidden"
              variant="outline"
              maxH={350}
              minH={350}
              boxShadow="lg"
              backgroundColor={"gray.100"}
              borderStyle={"none"}
              width={250}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default ShimmerUI;
