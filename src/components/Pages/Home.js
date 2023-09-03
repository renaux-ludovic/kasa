import React from "react";
import Banner from "../Containers/Banner/Banner";
import HomeGrid from "../Containers/Grid/Grid";
import homeBanner from "../../images/banner.png";

export default function Home() {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundURL={homeBanner}
      />
      <HomeGrid />
    </div>
  );
}
