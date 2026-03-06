import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/layout/Footer';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App