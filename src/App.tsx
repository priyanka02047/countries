import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { ChakraProvider, Divider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <Divider />
        <Outlet />
      </ChakraProvider>
    </div>
  );
}
export default App;
