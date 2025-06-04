import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = () => {

  return (
    <div className="relative flex flex-col min-h-screen">
      <Outlet />
    </div>

  );
}

export default Layout;