import React from "react";
import { Button } from "../../../globalStyles";

import {
  OperationFormContainer,
  OperationFormHeader,
  OperationFormTitle,
  OperationInput,
  OperationInputContainer,
  OperationSelect,
} from "./OperationForm.elements";

const OperationForm = () => {
  const [value, setValue] = React.useState<string>();
  const [client, setClient] = React.useState<string>();

  const listClient = [{ id: 1, name: "Angelita Alden" }];
  
  return (
    <OperationFormContainer>
      <OperationFormHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <OperationFormTitle />
        Cadastre sua Operação
      </OperationFormHeader>
      <OperationInputContainer flexDirection="column">
        <h4>Qual o valor da operacao?</h4>
        <OperationInput
          type="text"
          placeholder="R$120,00"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <h4>Responsavel</h4>
        <OperationSelect
          value={client}
          onChange={(e) => setClient(e.target.value)}
        >
          {listClient.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </OperationSelect>
      </OperationInputContainer>
      <Button big fontBig primary>
        Cadastrar
      </Button>
    </OperationFormContainer>
  );
};

export default OperationForm;
