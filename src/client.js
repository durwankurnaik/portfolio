import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: du78kh8i,
  dataset: 'production',
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skPsdJamTYQxoRbtfE11BrWouxMdYdoa9AnNdrjJ1y7v1jLDoUJCiwOe7p1IDKJlsODTRn4aiRpe98QLPFEtjfXhJRVE8UMWkOKbI1iOsGuuwvf4men7hln3yBvX5vmofiZUDXQPbKSlCSfkDe0fXasMabOLsmY3UXjLCy6Cae0NKdCoEHyX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
