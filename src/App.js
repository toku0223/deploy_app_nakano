import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<TopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
