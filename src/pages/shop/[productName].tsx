
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Image from 'src/components/image/Image';
import MainLayout from 'src/layouts/main/MainLayout';
import ShopItem from 'src/layouts/main/ShopItem';
import { PATH_PAGE } from 'src/routes/paths';

ProductDetailPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;
export default function ProductDetailPage() {
  const router = useRouter();
  const { productName } = router.query;
  const { amount } = router.query;

  return (
    <div>
      {/* Display product details here */}
      <Container>
        <CustomBreadcrumbs
          heading="Product Details"
          links={[
            { name: 'Home', href: PATH_PAGE.home },

            {
              name: 'Shop',
              href: PATH_PAGE.shop,
            },
            { name: 'productName' },
          ]}
        />{' '}
      </Container>
    </div>
  );
}
