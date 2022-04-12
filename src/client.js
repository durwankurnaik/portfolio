import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_TOKEN,
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skXy9UQf2J3IRuQaGdntKQ7s1aBV1IWJ9IqKO9YXYISjDB5xdq7CUjmIXEPJ9ycrKI6AGCy7Z0cvmoftAn6Q8WJ7uHperWBDm5Z9bULo06XANSdUofqMZ75gLv1laDyBxuJFRmvV1wIKNKCs4bSGC1ZNH8ULBgTsh9GS1Te5LgeOoJZUKmEY",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
