import styled from "styled-components";

interface Props {
  margin?: number;
}
export const StyledP = styled.p<Props>`
  color: #c1ffd7;
  font-size: 1.2em;
  margin: ${(Props) => (Props.margin ? Props.margin : 0.1)}em;
`;

export default StyledP;
