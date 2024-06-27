import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Youtube video downloader Site`,
  },
  graphqlTypegen: true,
  flags:{
    DEV_SSR:true
  } ,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;
