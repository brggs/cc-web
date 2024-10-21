// @ts-check
import profileImage from './src/images/CuriousCodersLogo.jpeg?url';
import backgroundImage from './src/images/backgrounds/watercolor-pink-blue-orange.png?url';
import productImage from './src/images/product1.png?url';

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "Curious Coders",
    bio: "Empowering the next generation of problem solvers through coding and digital making.",
    profileImage: profileImage,
  },
  background: {
    color: "#23265F",
    image: backgroundImage,
  },
  socialLinks: [
    {
      platform: "youtube",
      url: "https://www.youtube.com/@Curious-Coders",
      icon: "youtube",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/cory-trimm",
      icon: "linkedin",
    },
    {
      platform: "email",
      url: "https://threads.net/@journey.unknown",
      icon: "envelope",
    },
    // {
    //   platform: "spotify",
    //   url: "https://spotify.com",
    //   icon: "spotify",
    // },
    // {
    //   platform: "snapchat",
    //   url: "https://snapchat.com",
    //   icon: "snapchaat",
    // },
    // {
    //   platform: "tiktok",
    //   url: "https://tiktok.com",
    //   icon: "tiktok",
    // },
    // Add more social links as needed
    // Search for icons here - https://fontawesome.com/search
  ],
  links: [
    {
      title: "Latest Video: Coding a Catch Game with OctoStudio",
      url: "https://youtu.be/xFgwxr4HP6A?si=PUVgd3j1OsgHofJx",
      icon: "play",
    },
    {
      title: "Subscribe to the newsletter",
      url: "https://curiouscoders.substack.com/",
      icon: "newspaper",
    },
    {
      title: "Get in touch",
      url: "https://youtube.com/c/corytrimm",
      icon: "envelope",
    },
    // Add more links as needed
  ],
  products: [
    // {
    //   title: "Digital Product",
    //   description: "Description of your digital product",
    //   url: "https://inshortpod.com",
    //   price: 19.99,
    //   includePriceOnSite: true,
    //   image: productImage,
    // },
    // Add more products as needed
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false
  }
};

export default config;
