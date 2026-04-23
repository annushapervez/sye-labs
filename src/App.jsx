import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Offerings from './components/Offerings';
import Content from './components/content';
import Ticker from './components/Ticker';
import Final from './components/FInal';
import Footer from './components/Footer';
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
     < NavBar />
     < Hero />
     <Intro />
    <Offerings/>
        <Ticker />
    <Content/>
    <Final/>
    <Footer></Footer>
    </>


  )
}

export default App
