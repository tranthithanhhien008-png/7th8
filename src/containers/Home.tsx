import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Banner from '../component/Banner';
import More1 from '../component/More1';
import More2 from '../component/More2';
import More3 from '../component/More3';
import Footer from './Footer';

export default function Home() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");


  return (
    <div>
      <Banner />
      <More1 />
      <More2 />
      <More3 />
      
    </div>
  );
}