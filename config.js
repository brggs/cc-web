// @ts-check
import profileImage from './src/images/cc-logo.png?url';
import backgroundImage from './src/images/backgrounds/watercolor-pink-blue-orange.png?url';

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "Curious Coders",
    bio: "Empowering the next generation of problem solvers through coding and digital making.",
    profileImage: profileImage,
  },
  background: {
    color: "#0c0b1e",
    image: backgroundImage,
  },
  socialLinks: [
    {
      url: "https://www.instagram.com/mrabriggs/",
      icon: "fab fa-instagram",
    },
    {
      url: "https://www.youtube.com/@Curious-Coders",
      icon: "fab fa-youtube",
    },
    {
      url: "https://bsky.app/profile/andy.curiouscoders.co.uk",
      icon: "fab fa-bluesky",
    },
    {
      url: "mailto:hello@curiouscoders.co.uk",
      icon: "fas fa-envelope",
    },
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
      title: "Subscribe to our newsletter",
      url: "https://curiouscoders.substack.com/",
      icon: "newspaper",
    },
    {
      title: "Fix the Space Ship - A STEM Engagement Escape Room",
      url: "https://github.com/brggs/Fix-The-SpaceShip-Escape-Room",
      icon: "rocket",
    },
    {
      title: "How to: Build your own escape room puzzle with the micro:bit",
      url: "https://curiouscoders.substack.com/p/build-your-own-escape-room-puzzle",
      icon: "microchip",
    },
    {
      title: "Get in touch",
      url: "mailto:hello@curiouscoders.co.uk",
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
    //   image: '',
    // },
    // Add more products as needed
  ],
};

// export const analytics = {
//   posthog: {
//     enableTracking: false
//   }
// };

export default config;
