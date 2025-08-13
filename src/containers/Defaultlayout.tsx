import * as React from "react";
import Headers from "./Headers";
import Home from "./Home";
import ProductDetailPage from "../viewstrangphu/trangchitiet";

const DefaultLayout = () => {
  return (
    <>
      <Headers />
      <Home/>
      <ProductDetailPage/>
    </>
  );
};

export default DefaultLayout;
