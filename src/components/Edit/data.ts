import type { EditComponent, EditItem } from '../../types';
import AccountSettings from './AccountSettings/AccountSettings/AccountSettings';
import Contacts from './Contacts/Contacts/Contacts';
import DisplayOptions from './DisplayOptions/DisplayOptions';
import Elements from './Elements/Elements';
import EditFiles from './Files/EditFiles/EditFiles';
import QrCodes from './QrCodes/QrCodes';
import Enterprise from './Enterprise/Enterprise';
import Slides from './Slides/Slides/Slides';

export const regularOptions: Array<EditItem> = [
  // {
  //   title: 'News feed',
  //   pathname: '/edit/news_feed',
  //   href: '/edit/news_feed',
  // },
  {
    title: 'View Page',
    href: '/',
  },
  {
    title: 'Edit Page',
    pathname: '/edit/edit_vreel',
    href: '/edit/edit_vreel/files',
    children: [
      { title: 'File Manager', href: '/edit/edit_vreel/files' },
      { title: 'Slides', href: '/edit/edit_vreel/slides' },
      { title: 'Sections', href: '/edit/edit_vreel/elements' },
      {
        title: 'Display Options',
        href: '/edit/edit_vreel/display_options',
      },
      {
        title: 'Account',
        href: '/edit/edit_vreel/account',
      },
    ],
  },
];

export const editOptions: Array<EditItem> = [
  { title: 'File Manager', href: '/edit/edit_vreel/files' },
  { title: 'Slides', href: '/edit/edit_vreel/slides' },
  { title: 'Sections', href: '/edit/edit_vreel/elements' },
  {
    title: 'Display Options',
    href: '/edit/edit_vreel/display_options',
  },
  {
    title: 'Account',
    href: '/edit/edit_vreel/account',
  },
];

export const advanceOptions: Array<EditItem> = [
  // {
  //   title: 'Events',
  //   href: '/edit/events',
  // },
  // {
  //   title: 'Display Mode',
  //   href: '/edit/display_mode',
  // },
  // {
  //   title: 'Networks',
  //   href: '/edit/networks',
  // },
  // {
  //   title: 'Qr Codes',
  //   href: '/edit/edit_vreel/qr',
  // },
  // {
  //   title: 'Enterprise',
  //   href: '/edit/edit_vreel/enterprise',
  // },
];

export const footerOptions: Array<EditItem> = [
  {
    title: 'Analytics',
    href: '/analytics',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
  {
    title: 'Help',
    href: '/help',
  },
];

export const components: Array<EditComponent> = [
  // {
  //   title: 'news_feed',
  //   component: NewsFeed,
  // },
  {
    title: 'files',
    component: EditFiles,
  },
  {
    title: 'elements',
    component: Elements,
  },
  {
    title: 'slides',
    component: Slides,
  },

  {
    title: 'display_options',
    component: DisplayOptions,
  },
  {
    title: 'account',
    component: AccountSettings,
  },
  {
    title: 'qr',
    component: QrCodes,
  },
  {
    title: 'contacts',
    component: Contacts,
  },
  {
    title: 'enterprise',
    component: Enterprise,
  },
];
