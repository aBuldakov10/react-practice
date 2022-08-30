import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Products from '../../pages/Products/Products';
import Articles from '../../pages/Articles/Articles';
import Article from '../../pages/Article/Article';
import Authors from '../../pages/Authors/Authors';
import Author from '../../pages/Author/Author';

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/author/:id" element={<Author />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
