import React from "react";
import {
  InfoSection,
  Navbar,
  Operationcard,
  OperationForm,
} from "../../components";
import api from "../../services/api";
//dataFake
import { operationObj } from "./Data";

const Operation = () => {
  const [operation, setOperation] = React.useState([]);
  const getOperation = () => {
    api.get("/operations").then((response) => {
      const data = response.data;
      setOperation(data);
    });
  };
  React.useEffect(() => {
    getOperation();
  }, []);
  return (
    <>
      <Navbar />
      {operationObj.page.map((pageProps) => {
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
      <OperationForm />
      {operation?.map((operationProps: any) => {
        return (
          <Operationcard
            key={operationProps?.id}
            currencyName={operationProps?.origin}
            currencyImg={"operationProps?.currencyImg"}
            clientOperation={operationProps?.origin}
            transferOperation={operationProps?.recipient}
            operationLimit={operationProps?.operationLimit}
            valueOperation={operationProps?.value}
          />
        );
      })}
    </>
  );
};

export default Operation;
