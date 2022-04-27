import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import React  from 'react';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';


import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';
import Container from './layouts/Container/Container';


function App() {
  return (
    <BrowserRouter>
      <TopMenu />
        <Container customClass="min_height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/novo-projeto" element={<NewProject />} />
            <Route path="/projetos" element={<Projects />} />
          </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
