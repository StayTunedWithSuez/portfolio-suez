import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navigation/navbar/Navbar'
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/navigation/Footer';

import AuthProvider from './context/AuthProvider';
import UserLayout from './layouts/UserLayout';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App