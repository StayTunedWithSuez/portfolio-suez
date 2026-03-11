
import AppRoutes from '../routes/AppRoutes';
import Navbar from '../components/navigation/navbar/Navbar'
import ScrollToTop from '../components/common/ScrollToTop';
import Footer from '../components/navigation/Footer';
import { Outlet } from 'react-router-dom';


function UserLayout() {
    return (

        <div className='min-h-dvh flex flex-col'>
          <Navbar />
          <ScrollToTop />

          <main className='flex-1'>
            <Outlet />
          </main>


          <Footer />
        </div>

    )
}

export default UserLayout