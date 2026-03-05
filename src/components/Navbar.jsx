
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Balances", path: "/balances" },
    { label: "Add Expense", path: "/add-expense" },
    { label: "Add Friend", path: "/add-friend" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ backgroundColor: "#92959c" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "Black",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            💰 Expense Tracker
          </Typography>

          <Box>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color:
                    location.pathname === item.path
                      ? "#4ADE80"
                      : "#E5E7EB",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;