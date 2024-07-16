import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Contact />} />
                <Route path="/about" element={<Gallery/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
);