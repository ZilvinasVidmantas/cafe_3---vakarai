import * as React from 'react';
import {
  Box, TextField, Paper, Typography, Button,
} from '@mui/material';

/*
  Įgalinkite dvipusį surišką tarp būsenos kintamojo ir paštui skirto TextField lauko

*/
const OrderPage = () => {
  const [fullname, setFullname] = React.useState('Serbentautas Bordiūras');

  return (
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
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Įveskite kontaktinius duomenis
          </Typography>
          <TextField
            name="fullname"
            label="Full name"
            variant="filled"
            fullWidth
            onChange={(event) => setFullname(event.target.value)}
            value={fullname}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="filled"
            fullWidth
          />
          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OrderPage;
