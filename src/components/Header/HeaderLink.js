import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default styled(NavLink)`
  display: inline-flex;
  padding: 0.5rem 2rem;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.app.white};
  fontfamily: "Gabriela", serif;
  & > b {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
