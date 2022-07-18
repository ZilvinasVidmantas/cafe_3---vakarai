import { styled, Typography } from '@mui/material';

const TypographyLimited = styled(Typography)(({ maxLines }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: maxLines ?? 4,
  WebkitBoxOrient: 'vertical',
}));

export default TypographyLimited;
