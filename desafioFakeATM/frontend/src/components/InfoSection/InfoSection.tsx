import React from "react";
import { Link } from "react-router-dom";
//assets global elements
import { Button, Container } from "../../globalStyles";
//assets elements
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./InfoSection.elements";
//interface
interface Props {
  lightBg: boolean;
  imgStart: boolean;
  primary: boolean;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  start: boolean;
  alt: string;
  redirect: string;
  buttonExists: boolean;
}

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  primary,
  img,
  start,
  alt,
  redirect,
  buttonExists,
}: Props) => {
  return (
    <>
      <InfoSec color="#fff" padding="160px 0" lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                {buttonExists && (
                  <Link to={redirect}>
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
