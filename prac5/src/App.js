import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import { CategoryProvider } from './context/CategoryProvider';

const queryClient = new QueryClient();
function App() {
  return (
    <CategoryProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </CategoryProvider>
  );
}

export default App;
