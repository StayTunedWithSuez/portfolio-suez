import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/common/ScrollToTop';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      
    </BrowserRouter>
  );
}

export default App