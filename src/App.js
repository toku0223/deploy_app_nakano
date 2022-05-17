import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopPage from './pages/TopPage';
import Janken from './pages/Janken';
import Qiita from './pages/Qiita';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Toppage" element={<TopPage />} />
          <Route exact path="/Janken" element={<Janken />} />
          <Route exact path="/Qiita" element={<Qiita />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
