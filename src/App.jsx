import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import HomePage from './Pages/HomePage';


const App = () => {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>

        </Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
};

export default App;