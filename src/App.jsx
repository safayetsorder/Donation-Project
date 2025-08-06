import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './Components/Shared/Header';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router } from 'react-router'

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}>

          </Route>
        </Routes>
      </Router>

    </div>
  );
};

export default App;