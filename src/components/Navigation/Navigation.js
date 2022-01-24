import { Outlet } from "react-router-dom";
import { StyledNavLink, Header } from "./Navigation.styled";

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Outlet />
    </>
  );
}
export default Navigation;
