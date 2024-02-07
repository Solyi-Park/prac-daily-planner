import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import Home from './pages/Home';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
