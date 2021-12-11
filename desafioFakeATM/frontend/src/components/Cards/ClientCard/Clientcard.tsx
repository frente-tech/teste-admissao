import React from "react";
import { IconContext } from "react-icons/lib";
import {
  CardClientContainer,
  CardContainer,
  CardHeading,
  CardWrapper,
  ClientAvatar,
  ClientCardFeatures,
  ClientCardInfo,
  ClientCardItem,
  ClientInfo,
  ClientName,
} from "./Clientcard.elements";
import Avatar from "react-avatar";
import { Button } from "../../../globalStyles";
import ModalClient from "../Modal/ModalClient";

interface Props {
  profileName: string;
  profileImg: string;
  profileCpf: string;
  profileLimit: string;
  profileDate: string;
}
const Clientcard = ({
  profileName,
  profileImg,
  profileCpf,
  profileLimit,
  profileDate,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#a9b3c1", size: "64" }}>
        <CardContainer>
          <CardWrapper>
            <CardHeading>Clientes Cadastrados</CardHeading>
            <CardClientContainer>
              {" "}
              {/* inicio de um card */}
              <ClientCardInfo>
                <ClientInfo>
                  <ClientAvatar>
                    <Avatar round={true} name={profileName} src={profileImg} />
                  </ClientAvatar>
                  <ClientName>{profileName}</ClientName>
                  <ClientCardFeatures>
                    <ClientCardItem>cpf: {profileCpf}</ClientCardItem>
                    <ClientCardItem>Limite: {profileLimit}</ClientCardItem>
                    <ClientCardItem>
                      Data de nascimento: {profileDate}
                    </ClientCardItem>
                  </ClientCardFeatures>
                  <Button big fontBig primary onClick={handleClick}>
                    Editar
                  </Button>
                  {showModal && <ModalClient />}
                </ClientInfo>
              </ClientCardInfo>
            </CardClientContainer>{" "}
            {/* fim de um card */}
          </CardWrapper>
        </CardContainer>
      </IconContext.Provider>
    </>
  );
};

export default Clientcard;
