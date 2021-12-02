import React from "react";
import { Button } from "../../../globalStyles";
import {
  ClientFormContainer,
  ClientFormHeader,
  ClientFormTitle,
  ClientFormTitleAddres,
  ClientInput,
  ClientInputContainer,
} from "./ClientForm.elements";

const ClientForm = () => {
  const [name, setName] = React.useState<string>("");
  const [street, setStreet] = React.useState<string>("");
  const [district, setDestrict] = React.useState<string>("");
  const [number, setNumber] = React.useState<string>("");
  const [Birthday, setBirthday] = React.useState<string>("");
  const [cpf, setCpf] = React.useState<string>("");

  return (
    <ClientFormContainer>
      <ClientFormHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <ClientFormTitle />
        Cadastre seu cliente
      </ClientFormHeader>
      <ClientInputContainer flexDirection="column">
        <h4>Nome</h4>
        <ClientInput
          type="text"
          placeholder="Insira seu nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h4>Data de nascimento</h4>
        <ClientInput
          type="date"
          placeholder="Insira sua data de nascimento"
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
        <h4>Informe seu CPF</h4>
        <ClientInput
          type="text"
          placeholder="xxx.xxx.xxx-xx"
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
      </ClientInputContainer>
      <ClientFormHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <ClientFormTitleAddres />
        Cadastre seu Endereço
      </ClientFormHeader>
      <ClientInputContainer flexDirection="column">
      <h4>Nome da Rua/Avenida</h4>
        <ClientInput
          type="text"
          placeholder="Nome da Rua/Avenida"
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
        <h4>Nome do bairro</h4>
        <ClientInput
          type="text"
          placeholder="Nome do bairro"
          onChange={(e) => {
            setDestrict(e.target.value);
          }}
        />
        <h4>Numero</h4>
        <ClientInput
          type="text"
          placeholder="Numero"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </ClientInputContainer>
      <Button big fontBig primary>Cadastrar</Button>
    </ClientFormContainer>
  );
};

export default ClientForm;
