// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/navbar'
import '../styles/global.css'
import { useState } from "react";
import AppContext from "../AppContext";
import languagesObject from "../languagesObject";

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) 
}