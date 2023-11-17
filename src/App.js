import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Form from './components/Form';
import Page1 from './components/page1';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Form" element={<Form />} /> 

        
      </Routes>
    </Router>
  );
};

export default App;
