import styled from "styled-components";

interface ModalProps {
  bgColor: string;
}
export const ModalContainer = styled.div<ModalProps>`
  margin: 20px 0px;
  background: ${(props) => props.bgColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  height: 170px;
  width: 280px;
  border-radius: 10px;
`;

export const ModalInput = styled.input`
  height: 1.5rem;
  border: none;
  border-radius: 1rem;
  margin-left: 5px;
`;
