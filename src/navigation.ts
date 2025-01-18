import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links:[
    { text: 'Features', href: getHomePermalink()+'#features' },
    { text: 'Use Cases', href: getHomePermalink()+'#usecases' },
    { text: 'FAQ', href: getHomePermalink()+'#faq' },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  position: "left",
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [

  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://aboutsvc.com/"> AboutService</a> · All rights reserved.
  `,
};
