import React from 'react';
import {
  Box, TextField, Paper, Typography, Button,
} from '@mui/material';

const OrderPage = () => (
  <Box sx={{ pt: 7 }}>
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 3,
        width: 500,
        mx: 'auto',
      }}
    >
      <Box component="form">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ pb: 3 }}
        >
          Įveskite kontaktinius duomenis
        </Typography>
        <TextField label="name" fullWidth variant="filled" />
        <Box sx={{ textAlign: 'center', pt: 3 }}>
          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>
      </Box>

    </Paper>
  </Box>
);

export default OrderPage;
