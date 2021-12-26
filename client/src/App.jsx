import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes/AppRoutes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={ queryClient }>
    <ChakraProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
