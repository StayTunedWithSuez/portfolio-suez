import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navigation/navbar/Navbar'
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/navigation/Footer';

import AuthProvider from './context/AuthProvider';
import UserLayout from './layouts/UserLayout';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ErrorFallbackUI from './components/errorBoundary/ErrorFallbackUI';


function App() {
  return (
    <ErrorBoundary fallback = {ErrorFallbackUI}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App