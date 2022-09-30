import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GetData } from "./components/GetData";

function App() {
  return (
    <ChakraProvider>
      <h1>Weather Application</h1>
      <GetData />
    </ChakraProvider>
  );
}

export default App;
