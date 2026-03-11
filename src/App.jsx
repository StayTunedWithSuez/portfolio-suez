import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navigation/navbar/Navbar'
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/navigation/Footer';

import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='min-h-dvh flex flex-col'>
          <Navbar />
          <ScrollToTop />

          <main className='flex-1'>
            <AppRoutes />
          </main>


          <Footer />
        </div>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App