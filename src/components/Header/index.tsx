import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled(RouterNavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src="https://placehold.co/150" alt="Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/example1">Example1</NavLink>
        <NavLink to="/example2">Example2</NavLink>
      </Nav>
    </Container>
  );
};
