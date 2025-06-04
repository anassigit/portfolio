import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Portofolio from './pages/Portofolio';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portofolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;