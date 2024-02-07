import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import ContextProvider from './context/ContextProvider'

const queryClient = new QueryClient();
function App() {
  return (

      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>

  );
}

export default App;
