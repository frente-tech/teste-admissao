import React from "react";

import { Button } from "../../../globalStyles";

import { FormContainer, ModalContainer, ModalInput } from "./Modal.elements";

const ModalClient = () => {
  const [name, setName] = React.useState<string>("");
  const [limit, seLimit] = React.useState<string>("1200");
  return (
    <>
      <ModalContainer bgColor="#242424">
        <FormContainer>
          <h4>Nome:</h4>
          <ModalInput
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h4>Limite:</h4>
          <ModalInput
            type="text"
            onChange={(e) => {
              seLimit(e.target.value);
            }}
          />
          <Button margin="10px 0px" fontBig={false} big={false} primary>
            Salvar
          </Button>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default ModalClient;
