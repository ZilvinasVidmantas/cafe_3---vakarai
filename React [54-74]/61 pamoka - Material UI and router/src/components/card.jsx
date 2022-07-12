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

const MugCard = ({ title, category, img, description, }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={img}
        alt=""
      />
      <CardContent sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="subtitle" component="div">{category}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button size="small" variant="contained">Peržiūrėti</Button>
        <Button size="small" variant="contained">Dėti į krepšelį</Button>
      </CardActions>

    </Card>
  )
}

export default MugCard