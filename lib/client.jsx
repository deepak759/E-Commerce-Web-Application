import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import process from 'process';

export const client= sanityClient({
    projectId:'tavrcrwb',
    dataset:'production',
    apiVersion:'2023-01-21',
    useCdn:true,
    token:process.env.SANITY_TOKEN

})
const builder=imageUrlBuilder(client)

export const urlForImage=(source)=>builder.image(source);