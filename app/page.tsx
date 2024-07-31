"use client"
import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

export default function Home() {
  const [nav,setNav]=useState(false)
  const openNav =()=>setNav(true)
  const closeNav =()=>setNav(false)
  return (
  <>
  <MobileNav nav={nav} closeNav={closeNav}/>
  <Nav openNav={openNav}/>
  <Hero/>
  </>
  );
}
