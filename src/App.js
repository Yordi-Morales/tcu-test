import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarTable from './components/tables/car-table/car';
import BabyTable from './components/tables/baby-table/baby';
import Footer from './components/footer/footer';
import Spotify from './components/spotify/spotify';
import Home from './components/home/home';
import Navigation from './components/navbar/navbar';
import CalcExpense from './components/calc/expense/expense';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/cars-table" element={<CarTable />} />
          <Route path="/baby-table" element={<BabyTable />} />
          <Route path="/podcast" element={<Spotify />} />
          <Route path="/calc-expenses" element={<CalcExpense />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
