import React from "react";
//components
import { Navbar, InfoSection } from "../../components";
//dataFake
import { homeObj } from "./Data";

const Home = () => {
  return (
    <>
      <Navbar />
      {homeObj.page.map((pageProps) => {
        return (
          <InfoSection
            key={pageProps.key}
            buttonExists={true}
            primary={pageProps.prymary}
            buttonLabel={pageProps.buttonLabel}
            redirect={pageProps.redirect}
            imgStart={pageProps.imgStart}
            lightBg={pageProps.lightBg}
            description={pageProps.description}
            headline={pageProps.headline}
            lightText={pageProps.lightText}
            lightTextDesc={pageProps.lightTextDesc}
            lightTopLine={pageProps.lightTopLine}
            topLine={pageProps.topLine}
            alt={pageProps.alt}
            img={pageProps.img}
            start={pageProps.start}
          />
        );
      })}
    </>
  );
};

export default Home;
