// next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// @mui
import { Box } from '@mui/material';
import { _shopCards } from 'src/_mock/arrays';
import ShopCard from 'src/sections/@dashboard/user/cards/ShopCard';
//
const ShopHeader = dynamic(() => import('./ShopHeader'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function ShopLayout({ children }: Props) {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <ShopHeader />
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {_shopCards.map((user) => (
          <ShopCard key={user.id} user={user} />
        ))}
      </Box>
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
