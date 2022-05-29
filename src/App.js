import React from 'react';
import { useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopPage from './pages/TopPage';
import Janken from './pages/Janken';
import Qiita from './pages/Qiita';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import Uranai from './pages/Uranai';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Toppage" element={<TopPage />} />
          <Route exact path="/Janken" element={<Janken />} />
          <Route exact path="/Qiita" element={<Qiita />} />
          <Route exact path="/PageA" element={<PageA />} />
          <Route path="/PageB" element={<PageB />} />
          {/* <Route path="/PageB/:HelloWorld" element={<PageB />} />
          </Route> */}
          <Route exact path="/Uranai" element={<Uranai />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
