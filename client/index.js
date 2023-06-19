import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'; 
import Nav from './Nav.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Footer from './Footer.jsx';
import "./style/style.css";
import "./style/background.css";
import "./style/login.css";
import "./style/pages.css";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <HashRouter>
    <Nav />
    <Routes>
        <Route
                path="/signup"
                element={
                <Signup
                    // setUser={setUser}
                    // user={user}
                    // selectedPage={selectedPage}
                />
                }
            />
        <Route
                path="/"
                element={
                <Login
                    // setUser={setUser}
                    // user={user}
                    // selectedPage={selectedPage}
                />
                }
            />
            
    </Routes>
    <Footer />
    </HashRouter>
);