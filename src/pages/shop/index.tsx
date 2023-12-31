import { Container } from '@mui/material';
import React from 'react';
import DashboardLayout from 'src/layouts/dashboard';
import ShopLayout from 'src/layouts/main/ShopLayout';
import CartWidget from 'src/sections/@dashboard/e-commerce/CartWidget';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import Head from 'next/head';
import MainLayout from 'src/layouts/main/MainLayout';

Shop.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

function Shop() {
  const {  checkout } = useSelector((state: RootState) => state.product);

  return (
    <>
      <Head>
        <title>Shop | Dmerce</title>
      </Head>
      <Container>
        <ShopLayout />
        {/* <CartWidget totalItems={checkout.totalItems} /> */}
      </Container>
    </>
  );
}

export default Shop;
