import React from "react";
import { Button } from "../../../globalStyles";
import api from "../../../services/api";
import {
  ClientFormContainer,
  ClientFormHeader,
  ClientFormTitle,
  ClientFormTitleAddres,
  ClientInput,
  ClientInputContainer,
  ClientFormSubmit,
} from "./ClientForm.elements";

const ClientForm = () => {
  const [name, setName] = React.useState<string>("");
  const [street, setStreet] = React.useState<string>("");
  const [district, setDestrict] = React.useState<string>("");
  const [number, setNumber] = React.useState<string>("");
  const [Birthday, setBirthday] = React.useState<string>("");
  const [cpf, setCpf] = React.useState<string>("");

  console.log(name, street, district, number, Birthday, cpf);

  const submitClient = (value: any) => {
    api
      .post("/clients", {
        name: value.name,
        Birthday: value.date,
        cpf: value.cpf,
      })
      .then((response) => console.log(response));
  };

  return (
    <ClientFormContainer>
      <ClientFormHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <ClientFormTitle />
        Cadastre seu cliente
      </ClientFormHeader>
      <ClientFormSubmit onSubmit={submitClient} action="">
        <ClientInputContainer flexDirection="column">
          <h4>Nome</h4>
          <ClientInput
            name="name"
            type="text"
            placeholder="Insira seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h4>Data de nascimento</h4>
          <ClientInput
            name="date"
            type="date"
            placeholder="Insira sua data de nascimento"
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <h4>Informe seu CPF</h4>
          <ClientInput
            name="cpf"
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
        <Button big fontBig primary type="submit">
          Cadastrar
        </Button>
      </ClientFormSubmit>
    </ClientFormContainer>
  );
};

export default ClientForm;
