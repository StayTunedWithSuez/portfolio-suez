import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navigation/navbar/Navbar'
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/navigation/Footer';

import AuthProvider from './context/AuthProvider';
import UserLayout from './layouts/UserLayout';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ErrorFallbackUI from './components/errorBoundary/ErrorFallbackUI';
import { Suspense } from 'react';

import PageLoader from './components/suspense/PageLoader';

function App() {
  return (
    <ErrorBoundary fallback = {ErrorFallbackUI}>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback = {<PageLoader />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App