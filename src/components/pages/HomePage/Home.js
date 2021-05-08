import React from "react";
import HeroSection from "../HeroSection";
import { homeObjFour } from "./Data";
import Pricing from "../Pricing";

function Home() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
