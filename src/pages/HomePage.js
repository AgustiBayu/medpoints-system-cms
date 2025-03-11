import React, { useEffect, useState } from "react";
import { supabase } from "../assets/api/supabaseClient"; // Pastikan path sesuai

const HomePage = ({ onLogout }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            
            if (error) {
                console.error("Error fetching user data:", error.message);
            } else if (user) {
                setEmail(user.email);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Welcome to Home Page!</h1>
            {email && <p>Logged in as: {email}</p>}
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default HomePage;
