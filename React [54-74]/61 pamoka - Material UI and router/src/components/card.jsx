import React from 'react';
import {
  Typography,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material';

const MugCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://m.media-amazon.com/images/I/918nomWTWLL._AC_SL1500_.jpg"
        alt=""
      />
      <CardContent sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="subtitle" component="div">Kategorija</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button size="small" variant="contained">Peržiūrėti</Button>
        <Button size="small" variant="contained">Dėti į krepšelį</Button>
      </CardActions>

    </Card>
  )
}

export default MugCard