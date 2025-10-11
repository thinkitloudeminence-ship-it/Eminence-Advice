import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/admin/login`, 
                { email, password }
            );
            
            if (data.token) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError('Login failed: No token received');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'Invalid credentials or server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 3, boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" align="center" gutterBottom color="primary">
                    Admin Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField 
                        label="Email" 
                        type="email"
                        fullWidth 
                        margin="normal" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField 
                        label="Password" 
                        type="password" 
                        fullWidth 
                        margin="normal" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        fullWidth 
                        sx={{ mt: 2 }}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}