import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Surah from './pages/Surah';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:id" element={<Surah />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
