
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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

            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "Black",
              fontWeight: 600,
              letterSpacing: 1,
              fontSize: {
                xs: "1.6rem",
                sm: "2rem",
                md: "2.2rem",
              },
            }}
          >
            💰 Expense Tracker
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <List sx={{ width: 200 }}>
              {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>


        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;