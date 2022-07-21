import * as React from 'react';
import {
  Box,
  TextField,
  Paper,
  Typography,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const genders = [
  { value: 'female', label: 'Moteris' },
  { value: 'male', label: 'Vyras' },
  { value: 'other', label: 'Kita' },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState('Serbentautas Bordiūras');
  const [email, setEmail] = React.useState('');
  const [currency, setCurrency] = React.useState(currencies[0].value);
  const [gender, setGender] = React.useState(null);

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
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />

          <TextField
            name="currency"
            select
            label="Currency"
            variant="filled"
            onChange={(event) => setCurrency(event.target.value)}
            value={currency}
            fullWidth
          >
            {currencies.map(
              ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
            )}
          </TextField>

          <FormControl sx={{ width: '100%' }}>
            <FormLabel>Socialinė lytis</FormLabel>
            <RadioGroup
              name="gender"
              value={gender}
              onChange={(_, newGender) => setGender(newGender)}
            >
              {genders.map(({ value, label }) => (
                <FormControlLabel value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>

      </Paper>
    </Box>
  );
};

export default OrderPage;
