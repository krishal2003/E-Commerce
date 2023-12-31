// @mui
import { Box, Button, Card, Fab, Typography } from '@mui/material';
// utils
// @types
import { IUserCard } from '../../../../@types/user';
// _mock
// components
import Image from '../../../../components/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from 'src/redux/slices/product';
import Iconify from 'src/components/iconify';
import { useState } from 'react';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  user: IUserCard;
};

export default function ShopCard({ user }: Props) {
  const { id, productName, shoeimage, shoeimagehover, amount } = user;
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddCart = async () => {
    const newProduct = {
      productName,
      shoeimage,
      amount,
      id,
    };
    try {
      dispatch(addToCart(newProduct));
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box
        sx={{ position: 'relative', alignItems: 'top' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <Image src={isHovered ? shoeimagehover : shoeimage} alt={productName} ratio="9/16" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        {productName}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
        Rs. {amount}
      </Typography>
      <Box sx={{ mt: -3, pb: 2 }}>
        <Link href= '/maintenance' style={{ textDecoration: 'none', color: 'white' }}>
          <Button variant="contained">See More</Button>
        </Link>
        <Link
          href="https://www.instagram.com/dmerce.np/"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button>DM us Now!</Button>
        </Link>
      </Box>
    </Card>
  );
}
