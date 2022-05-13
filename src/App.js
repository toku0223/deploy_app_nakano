import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopPage from './pages/TopPage';
import Janken from './pages/Janken';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Toppage" element={<TopPage />} />
          <Route exact path="/Janken" element={<Janken />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
