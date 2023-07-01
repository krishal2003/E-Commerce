import { Container } from '@mui/material';
import React from 'react';
import DashboardLayout from 'src/layouts/dashboard';
import ShopLayout from 'src/layouts/main/ShopLayout';
import CartWidget from 'src/sections/@dashboard/e-commerce/CartWidget';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

Shop.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

function Shop() {
   const { product, isLoading, checkout } = useSelector((state: RootState) => state.product);

  return (
    <Container>
      <ShopLayout />
      <CartWidget totalItems={checkout.totalItems} />
    </Container>
  );
}

export default Shop;
