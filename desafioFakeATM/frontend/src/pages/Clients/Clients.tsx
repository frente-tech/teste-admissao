import React from "react";
//components
import { ClientForm, Navbar, InfoSection, Clientcard } from "../../components";
import { toMoney } from "../../config/helper";

//dataFake
import { clientCardInfo, clientsObj } from "./Data";

const Clients = () => {
  return (
    <>
      <Navbar />
      {clientsObj.page.map((pageProps) => {
        return (
          <InfoSection
            key={pageProps.key}
            buttonExists={false}
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
      <ClientForm />
      {clientCardInfo.client.map((clientProps) => {
        return (
          <Clientcard
            key={clientProps.key}
            profileCpf={clientProps.profileCpf}
            profileDate={clientProps.profileDate}
            profileImg={clientProps.profileImg}
            profileLimit={clientProps.profileLimit}
            profileName={clientProps.profileName}
          />
        );
      })}
    </>
  );
};

export default Clients;
