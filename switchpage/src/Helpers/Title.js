import styled from "styled-components";
import { primaryColorLight, primaryColorDark } from "../Variaveis/Theme";

const Title = styled.h1`
  font-size: 10rem;
  text-align: center;
  color: ${(props) => (props.switcher ? primaryColorLight : primaryColorDark)};

  @media (max-width: 575.98px) {
    font-size: 5rem;
  }
`;

export default Title;
