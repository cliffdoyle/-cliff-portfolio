import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'j5p8xmf8',
  dataset: 'cliff',
  apiVersion: '2024-11-11',
  useCdn: true,
  token: 'skj54Ts46n4aqHAXJfKUVh6xdrGAv8ywEMq80YcM6yLRxaXdJ71IfHuAvaC9N374vTqGUmw7T0hgNbtNFIk1AVU1OLPAZk35TEEYJP6VWIUlkFWeFPfd4Zpks1DQIiuKeQ4tdItEjUUcjVzsYComoiw6jahOFFuMg8789l0gfbMuBLfgzB9V',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);