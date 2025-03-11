import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./assets/api/supabaseClient";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Cek status login saat pertama kali aplikasi dimuat
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsAuthenticated(true);
            }
        };
        checkAuth();
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        isAuthenticated ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />
                    } 
                />
                <Route 
                    path="/home" 
                    element={
                        isAuthenticated ? <HomePage onLogout={handleLogout} /> : <Navigate to="/" />
                    } 
                />
            </Routes>
        </Router>
    );
};

export default App;
