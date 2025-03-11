import React, { useState } from "react";
import "../assets/Login.css";


import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { supabase } from "../assets/api/supabaseClient"; // Import supabase dari file terpisah

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                setError(error.message);
                return;
            }

            if (data) {
                onLogin(); // Panggil fungsi onLogin jika berhasil
            }
        } catch (error) {
            setError('Login gagal, coba lagi!');
        }
    };

    return (
        <MDBContainer className='my-5'>
            <MDBCard>
                <MDBRow className='g-0 d-flex align-items-center'>
                    <MDBCol md='4'>
                        <MDBCardImage 
                            src='https://rsud.bulelengkab.go.id/uploads/konten/pengertian-rumah-sakit-definisi-fungsi-macam-karakteristik-tipe-a-b-c-d-79.png' 
                            alt='phone' 
                            className='rounded-t-5 rounded-tr-lg-0' 
                            fluid 
                        />
                    </MDBCol>

                    <MDBCol md='8'>
                        <MDBCardBody>
                            <p className="display-6 fw-bold mb-4 text-center"> 
                                Welcome to Medpoints System 
                            </p>
                            
                            <MDBInput 
                                wrapperClass='mb-4' 
                                label='Email address' 
                                id='form1' 
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <MDBInput 
                                wrapperClass='mb-4' 
                                label='Password' 
                                id='form2' 
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
    
                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>
    
                            <MDBBtn 
                                className="mb-4 w-100" 
                                onClick={handleLogin}
                            >
                                Sign in
                            </MDBBtn>

                            {error && <p className="text-danger">{error}</p>}
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
};

export default LoginPage;
