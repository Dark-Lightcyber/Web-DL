import React, { useState } from 'react';
import {AppBar,Toolbar,Typography,Button, Box, Stack, IconButton, Drawer,List,ListItem,ListItemButton,ListItemText,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2, fontFamily: 'cursive' }}>
        Bloom
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'cursive',
              ml: '50px',
              p: '20px',
            }}
          >
            Bloom
          </Typography>

          {/* Desktop Nav */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mr: '50px', display: { xs: 'none', md: 'flex' } }}
          >
            {navLinks.map((link) => (
              <Button key={link} color="inherit">
                {link}
              </Button>
            ))}
          </Stack>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
