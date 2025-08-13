import * as React from "react";
import Headers from "./Headers";
import Home from "./Home";
import ProductDetailPage from "../viewstrangphu/trangchitiet";
import Footer from "./Footer";

const DefaultLayout = ({child}:any) => {
  return (
    <>
      <Headers />
        {child}
      <Footer/>
      {/* <ProductDetailPage/> */}
    </>
  );
};

export default DefaultLayout;
