import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: inline-flex;
  padding: 0.5rem 2rem;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 2.4rem;
  font-weight: bold;
  color: ${props => props.theme.app.white};
`;
