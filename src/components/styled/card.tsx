import styled from "styled-components";

interface Props {
  color?: string;
}

const Card = styled.div<Props>`
  background-color: ${(Props) => (Props.color ? Props.color : "#b5deff")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40em;
  margin: 0.1em 0;
  height: 4.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #eb92be;
  }
`;

export default Card;
