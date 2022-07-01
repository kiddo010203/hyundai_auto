import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
// import Home from '/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//
