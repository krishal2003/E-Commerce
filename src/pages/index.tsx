// next
import Head from 'next/head';
// @mui
import { Box, Container, Grid, Typography } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import { HomeHero, HomeMinimal, RecentPosts } from '../sections/home';
import { AboutTestimonials } from 'src/sections/about';
import { FaqsList } from '../sections/faqs';
import { _analyticPost } from 'src/_mock/arrays';
import NewsUpdate from 'src/sections/News/Newsupdate';
import { ContactForm } from 'src/sections/contact';
import TournamentStatus from 'src/sections/tournament-status/tournament-status';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Game On | ESAN</title>
      </Head>

      <ScrollProgress />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Grid container spacing={3} sx={{ my: 3 }}>
            <Grid item xs={12} md={7}>
              {/* TODO ui chnages */}
              <TournamentStatus />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ pt: 11 }}>
                <NewsUpdate title="News Update" list={_analyticPost} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <RecentPosts />

        <HomeMinimal />
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Want to know more about us?
          </Typography>

          <Box sx={{ pb: 7 }}>
            <Grid container spacing={5} sx={{ my: 3 }}>
              <Grid item xs={12} md={6}>
                <FaqsList />
              </Grid>
              <Grid item xs={12} md={6}>
                <ContactForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <AboutTestimonials />
      </Box>
    </>
  );
}
