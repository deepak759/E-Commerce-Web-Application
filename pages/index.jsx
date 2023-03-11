import React from "react";
import {
  Banner,
  FooterBanner,
  Products,
  Cart,
  Footer,
  Navbar,
  Layout,
} from "../Components/index";
import { client } from "../lib/client";


const index = ({ products, bannerdata }) => {
  return (
    <div>
      <Banner heroBanner={bannerdata.length && bannerdata[0]} />
     
      <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Products key={product._id} product={product} />)}
    </div>
      <Footer footerdata={bannerdata && bannerdata[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const Bannerquery = '*[_type=="banner"]';
  const bannerdata = await client.fetch(Bannerquery);
  return {
    props: { products, bannerdata },
  };
};

export default index;
