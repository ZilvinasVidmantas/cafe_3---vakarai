import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="contained" color="primary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default App;
