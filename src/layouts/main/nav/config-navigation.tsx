// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Blogs',
    path: PATH_PAGE.blog.root,
    icon: <Iconify icon="eva:archive-fill" />,
  },
  {
    title: 'Events',
    path: PATH_PAGE.event.root,
    icon: <Iconify icon="eva:archive-fill" />,
  },
  {
    title: 'Contact Us',
    path: PATH_PAGE.contact,
    icon: <Iconify icon="eva:archive-fill" />,
  },
  {
    title: 'FAQs',
    path: PATH_PAGE.faqs,
    icon: <Iconify icon="eva:archive-fill" />,
  },
  {
    title: 'Tournament',
    path: PATH_PAGE.tournaments,
    icon: <Iconify icon="eva:archive-fill" />,
  },
  {
    title: 'Resources',
    path: '#',
    icon: <Iconify icon="eva:archive-fill" />,
    children: [
      {
        subheader: 'Articles',
        items: [
          { title: 'Blogs', path: PATH_PAGE.blog.root },
          { title: 'News', path: PATH_PAGE.comingSoon },
          { title: 'Events', path: PATH_PAGE.comingSoon },
          { title: 'Tournaments', path: PATH_PAGE.tournaments },
          { title: 'Announcements', path: PATH_PAGE.comingSoon },
          { title: 'Updates', path: PATH_PAGE.comingSoon },
        ],
      },
      {
        subheader: 'About',
        items: [
          { title: 'About Us', path: PATH_PAGE.about },
          { title: 'Contact Us', path: PATH_PAGE.contact },
          { title: 'FAQs', path: PATH_PAGE.faqs },
        ],
      },
      {
        subheader: 'Policies',
        items: [
          { title: 'Privacy Policy', path: PATH_PAGE.privacy },
          { title: 'Cookie Policy', path: PATH_PAGE.cookie },
          { title: 'Terms and Condition', path: PATH_PAGE.terms },
        ],
      },
    ],
  },
];

export default navConfig;
