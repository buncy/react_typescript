import styled from "styled-components";

interface Props {
  color?: string;
  fontSize?: number;
}

export const StyledH1 = styled.h1<Props>`
  color: ${(Props) => (Props.color ? Props.color : "#FCFFA6")};
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize : 5)}em;
  margin: 0.1em 0;
`;

export const StartBTN = styled.button`
  background-color: #c1ffd7;
  width: 4em;
  height: 2em;
  font-size: 1.5em;
  border-radius: 10px;
  border-width: 0px;
`;
