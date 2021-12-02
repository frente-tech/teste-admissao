import React from "react";
import {
  InfoSection,
  Navbar,
  Operationcard,
  OperationForm,
} from "../../components";
//dataFake
import { operationCardInfo, operationObj } from "./Data";

const Operation = () => {
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
      {operationCardInfo.operation.map((operationProps) => {
        return (
          <Operationcard
            key={operationProps.key}
            currencyName={operationProps.currencyName}
            currencyImg={operationProps.currencyImg}
            clientOperation={operationProps.clientOperation}
            transferOperation={operationProps.transferOperation}
            operationLimit={operationProps.operationLimit}
            valueOperation={operationProps.valueOperation}
          />
        );
      })}
    </>
  );
};

export default Operation;
