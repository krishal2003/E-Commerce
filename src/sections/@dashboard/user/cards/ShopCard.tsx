// @mui
import { Box, Card, Typography } from '@mui/material';
// utils
// @types
import { IUserCard } from '../../../../@types/user';
// _mock
// components
import Image from '../../../../components/image';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

type Props = {
  user: IUserCard;
};

export default function ShopCard({ user }: Props) {
  const { productName, cover, amount } = user;

  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>

        <Image src={cover} alt={cover} ratio="4/3" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        {productName}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary',mb: 5 }}>
        Rs. {amount}
      </Typography>


    </Card>
  );
}
