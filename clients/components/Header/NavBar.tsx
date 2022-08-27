import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import { NavBarContainer, Button } from "./styled";

const NavBar: NextPage = () => {
  return (
    <NavBarContainer>
      <img src="/logo.png" />
      <Button>New Appointment</Button>
    </NavBarContainer>
  );
};
export default NavBar;
