import React from "react";
//components
import { ClientForm, Navbar, InfoSection, Clientcard } from "../../components";
import { toMoney } from "../../config/helper";
import api from "../../services/api";
//dataFake
import { clientsObj } from "./Data";

const Clients = () => {
  const [client, setClient] = React.useState([]);

  const getClient = () => {
    api
      .get("/clients")
      .then((response) => {
        const data = response.data;
        setClient(data);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    getClient();
  }, []);
  return (
    <>
      <Navbar />
      {clientsObj.page.map((pageProps) => {
        return (
          <InfoSection
            key={pageProps?.key}
            buttonExists={false}
            primary={pageProps?.prymary}
            buttonLabel={pageProps?.buttonLabel}
            redirect={pageProps?.redirect}
            imgStart={pageProps?.imgStart}
            lightBg={pageProps?.lightBg}
            description={pageProps?.description}
            headline={pageProps?.headline}
            lightText={pageProps?.lightText}
            lightTextDesc={pageProps?.lightTextDesc}
            lightTopLine={pageProps?.lightTopLine}
            topLine={pageProps?.topLine}
            alt={pageProps?.alt}
            img={pageProps?.img}
            start={pageProps?.start}
          />
        );
      })}
      <ClientForm />
      {client.map((clientProps: any) => {
        return (
          <Clientcard
            key={clientProps?.id}
            profileCpf={clientProps?.cpf}
            profileDate={clientProps?.dateBorn}
            profileImg={"clientProps.profileImg"}
            profileLimit={toMoney(clientProps?.limit)}
            profileName={clientProps?.name}
          />
        );
      })}
    </>
  );
};

export default Clients;
