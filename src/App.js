import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Header from './components/layouts/Header'
import Home from './page/Home';
import Tours from './page/Tours';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/tours" element={<Tours />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
