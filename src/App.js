import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/layouts/Header';
import Home from './page/Home';
import Tours from './page/Tours';
import Tour from './page/Tour';
import Signin from './page/Signin';
import Signup from './page/Signup';
import Contact from './page/Contact';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/tours" element={<Tours />} />
                    <Route path="/tour/:id" element={<Tour />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

