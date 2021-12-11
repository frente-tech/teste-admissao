import React from "react";
import { Button } from "../../../globalStyles";
import api from "../../../services/api";

import {
  OperationFormContainer,
  OperationFormHeader,
  OperationFormTitle,
  OperationInput,
  OperationInputContainer,
  OperationSelect,
  OperationFormSubmit,
} from "./OperationForm.elements";

const OperationForm = () => {
  const [value, setValue] = React.useState<string>();
  const [client, setClient] = React.useState<string>();

  const listClient = [{ id: 1, name: "Angelita Alden" }];

  const submitOperation = (value: any) => {
    api
      .post("/operations", {
        value: value.value,
        origin: value.client,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <OperationFormContainer>
      <OperationFormHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <OperationFormTitle />
        Cadastre sua Operação
      </OperationFormHeader>
      <OperationFormSubmit onSubmit={submitOperation}>
        <OperationInputContainer flexDirection="column">
          <h4>Qual o valor da operacao?</h4>
          <OperationInput
            type="text"
            name="value"
            placeholder="R$120,00"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <h4>Responsavel</h4>
          <OperationSelect
            value={client}
            name="client"
            onChange={(e) => setClient(e.target.value)}
          >
            {listClient.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </OperationSelect>
        </OperationInputContainer>
        <Button big fontBig primary type="submit">
          Cadastrar
        </Button>
      </OperationFormSubmit>
    </OperationFormContainer>
  );
};

export default OperationForm;
