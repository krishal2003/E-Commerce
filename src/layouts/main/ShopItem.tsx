// next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// @mui
import { Box, Card, Container, Divider, Grid, Stack, Tab, Tabs, Typography, alpha } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import { SkeletonProductDetails } from 'src/components/skeleton';
import { addToCart, getProduct, gotoStep } from 'src/redux/slices/product';
import { PATH_DASHBOARD, PATH_PAGE } from 'src/routes/paths';
import CartWidget from 'src/sections/@dashboard/e-commerce/CartWidget';
import { ProductDetailsCarousel, ProductDetailsReview, ProductDetailsSummary } from 'src/sections/@dashboard/e-commerce/details';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICheckoutCartItem } from 'src/@types/product';
import Markdown from 'src/components/markdown';
import { useSettingsContext } from 'src/components/settings';
import { RootState } from 'src/redux/store';
//
const ShopHeader = dynamic(() => import('./ShopHeader'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// ----------------------------------------------------------------------
const SUMMARY = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user',
  },
];


type Props = {
  children?: React.ReactNode;
};

export default function ShopItem({ children }: Props) {

    const { themeStretch } = useSettingsContext();

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

    const handleAddCart = (newProduct: ICheckoutCartItem) => {
      dispatch(addToCart(newProduct));
    };

    const handleGotoStep = (step: number) => {
      dispatch(gotoStep(step));
    };

    const TABS = [
      {
        value: 'description',
        label: 'description',
        component: product ? <Markdown children={product?.description} /> : null,
      },
      {
        value: 'reviews',
        label: `Reviews (${product ? product.reviews.length : ''})`,
        component: product ? <ProductDetailsReview product={product} /> : null,
      },
    ];

  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <ShopHeader />

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Product Details"
          links={[
            { name: 'Home', href: PATH_PAGE.home },

            {
              name: 'Shop',
              href: PATH_PAGE.shop,
            },
            { name: product?.name },
          ]}
        />

        <CartWidget totalItems={checkout.totalItems} />

        {product && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <ProductDetailsCarousel product={product} />
              </Grid>

              <Grid item xs={12} md={6} lg={5}>
                <ProductDetailsSummary
                  product={product}
                  cart={checkout.cart}
                  onAddCart={handleAddCart}
                  onGotoStep={handleGotoStep}
                />
              </Grid>
            </Grid>

            <Box
              gap={5}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
              sx={{ my: 10 }}
            >
              {SUMMARY.map((item) => (
                <Box key={item.title} sx={{ textAlign: 'center' }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      borderRadius: '50%',
                      color: 'primary.main',
                      bgcolor: (theme) => `${alpha(theme.palette.primary.main, 0.08)}`,
                    }}
                  >
                    <Iconify icon={item.icon} width={36} />
                  </Stack>

                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </Box>
              ))}
            </Box>

            <Card>
              <Tabs
                value={currentTab}
                onChange={(event, newValue) => setCurrentTab(newValue)}
                sx={{ px: 3, bgcolor: 'background.neutral' }}
              >
                {TABS.map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>

              <Divider />

              {TABS.map(
                (tab) =>
                  tab.value === currentTab && (
                    <Box
                      key={tab.value}
                      sx={{
                        ...(currentTab === 'description' && {
                          p: 3,
                        }),
                      }}
                    >
                      {tab.component}
                    </Box>
                  )
              )}
            </Card>
          </>
        )}

        {isLoading && <SkeletonProductDetails />}
      </Container>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 11 },
          }),
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
