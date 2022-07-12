import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const pages = ['Pagrindinis', 'Gamybos eiga', 'Mano lentyna'];

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{
              display: { sm: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {pages.map((pageTitle) => (
              <Typography
                key={pageTitle}
                variant="h6"
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {pageTitle}
              </Typography>
            ))}
          </Box>

          <ShoppingBasketIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
