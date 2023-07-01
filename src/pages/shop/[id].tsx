import { useEffect, useState } from 'react';
// next
import Head from 'next/head';
import { useRouter } from 'next/router';
// @mui
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from 'src/redux/slices/product';
// routes
// @types
// components
// sections
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import ShopItem from 'src/layouts/main/ShopItem';
import { RootState } from 'src/redux/store';

// ----------------------------------------------------------------------


Items.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
export default function Items() {

  const {
    query: { name },
  } = useRouter();
  const dispatch = useDispatch();

  const { product, isLoading, checkout } = useSelector((state: RootState) => state.product);

  const [currentTab, setCurrentTab] = useState('description');

  useEffect(() => {
    if (name) {
      dispatch(getProduct(name as string) as any);
    }
  }, [dispatch, name]);




  return (
    <>
      <Head>
        <title>{`Shop: ${product?.name || ''} | Dmerce`}</title>
      </Head>
      <ShopItem />
    </>
  );
}
