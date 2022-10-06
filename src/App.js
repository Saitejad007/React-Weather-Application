import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GetData } from "./components/GetData";

function App() {
  return (
    <ChakraProvider>
      <GetData />
    </ChakraProvider>
  );
}

export default App;
