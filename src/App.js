import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link, Navigate } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Notfound} from "./pages/Notfound";
import {LayoutBlog} from "./pages/LayoutBlog"

import { Nav } from './components/Nav';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-company" element={<Navigate to="/about" replace />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/:id" element={<LayoutBlog />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
