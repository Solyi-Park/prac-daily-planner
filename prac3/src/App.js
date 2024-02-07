import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/Home';
import { CategoryProvider } from './providers/provider';


function App() {
  const queryClient = new QueryClient();

  return (
    <CategoryProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </CategoryProvider>
  );
}

export default App;
