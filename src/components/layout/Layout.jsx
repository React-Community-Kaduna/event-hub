import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../hooks/scrollToTop';

const DashboardLayout = () => {
  return (
      <div className='w-full flex flex-col'>
        <ScrollToTop  />
      <NavBar />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
