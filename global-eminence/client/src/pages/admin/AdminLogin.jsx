// AdminLogin.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/admin/login`, { email, password });
            localStorage.setItem('adminToken', data.token);
            navigate('/admin/dashboard');
        } catch {
            setError('Invalid credentials');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10 }}>
                <Typography variant="h4" align="center">Admin Login</Typography>
                <form onSubmit={handleLogin}>
                    <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Login</Button>
                </form>
            </Box>
        </Container>
    );
}
