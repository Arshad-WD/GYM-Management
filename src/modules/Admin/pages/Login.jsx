import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/admin/dashboard"; // Redirect to Admin Dashboard
    } catch (err) {
      setError(err.message || "Invalid login credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", boxShadow: 3, borderRadius: 2, padding: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
        <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: "#d32f2f", ":hover": { bgcolor: "#b71c1c" } }} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default AdminLogin;
