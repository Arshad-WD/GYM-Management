import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Choose Your Role
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/admin/login")}
        >
          Admin Login
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/member/login")}
        >
          Member Login
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/user/login")}
        >
          User Login
        </Button>
      </Box>
    </Container>
  );
};

export default RoleSelection;
