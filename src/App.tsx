import { Layout } from "./components/Layout";
import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#1E192C" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center> Faça o login </Center>
          <Input placeholder='Email' type="email" />
          <Input placeholder='Password' type="password" /> 
          <Center>
            <Button colorScheme='teal' size='sm' width="100%" marginTop="5px">
              Button
            </Button>
          </ Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
