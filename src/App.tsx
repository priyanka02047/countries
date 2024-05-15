import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";
import { ChakraProvider, Divider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <Divider />
        <Body />
      </ChakraProvider>
    </div>
  );
}

export default App;
