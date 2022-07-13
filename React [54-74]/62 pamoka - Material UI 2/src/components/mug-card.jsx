import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material';

const MugCard = ({ title, category, img, description }) => (
  <Card sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Box sx={{
      position: 'relative',
      width: '100%',
      pt: '95%',
    }}>
      <CardMedia
        component="img"
        image={img}
        alt=""
        sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
      />
    </Box>
    <CardContent sx={{ p: 2, flexGrow: 1 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="subtitle" component="div">{category}</Typography>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description}
      </Typography>
    </CardContent>

    <CardActions sx={{ p: 2, alignSelf: 'center' }}>
      <Button size="small" variant="contained">Peržiūrėti</Button>
      <Button size="small" variant="contained">Dėti į krepšelį</Button>
    </CardActions>

  </Card>
)


export default MugCard