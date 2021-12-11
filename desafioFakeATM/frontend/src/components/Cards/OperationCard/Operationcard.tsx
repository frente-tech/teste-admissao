import React from "react";
import Avatar from "react-avatar";
import { IconContext } from "react-icons/lib";
import { Button } from "../../../globalStyles";
import ModalOperation from "../Modal/ModalOperation";
import {
  CardContainer,
  CardHeading,
  CardOperationContainer,
  CardWrapper,
  OperationCurrency,
  OperationCardFeatures,
  OperationCardInfo,
  OperationCardItem,
  OperationInfo,
} from "./Operationcard.elements";

interface Props {
  currencyName: string;
  currencyImg: string;
  clientOperation: string;
  transferOperation: string;
  operationLimit: Number;
  valueOperation: Number;
}

const Operationcard = ({
  currencyName,
  currencyImg,
  clientOperation,
  transferOperation,
  operationLimit,
  valueOperation,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "64" }}>
      <CardContainer>
        <CardWrapper>
          <CardHeading>Operationes Cadastrados</CardHeading>
          <CardOperationContainer>
            {" "}
            {/* inicio de um card */}
            <OperationCardInfo>
              <OperationInfo>
                <OperationCurrency>
                  <Avatar round={true} name={currencyName} src={currencyImg} />
                </OperationCurrency>
                <OperationCardFeatures>
                  <OperationCardItem>
                    Origem: {clientOperation}
                  </OperationCardItem>
                  <OperationCardItem>
                    Destinatario: {transferOperation}
                  </OperationCardItem>
                  <OperationCardItem>
                    Valor de operação: {valueOperation}
                  </OperationCardItem>
                  <OperationCardItem>
                    Limite: {operationLimit}
                  </OperationCardItem>
                </OperationCardFeatures>
                <Button big fontBig primary onClick={handleClick}>
                  Editar
                </Button>
                {showModal && <ModalOperation />}
              </OperationInfo>
            </OperationCardInfo>
          </CardOperationContainer>{" "}
          {/* fim de um card */}
        </CardWrapper>
      </CardContainer>
    </IconContext.Provider>
  );
};

export default Operationcard;
