import React from 'react'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AllOutIcon from '@mui/icons-material/AllOut';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from './components/navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Stack spacing={2} direction="row">
        <Button variant="text">
          Tekstas
          <AllOutIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AllOutIcon />}
        >Contained</Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<PersonIcon />}
        >Contained</Button>
      </Stack>
    </>
  );
}

export default App;
