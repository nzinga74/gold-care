import { ReactNode } from "react";
import NavBar from "./NavBar";
import { LayoutContainer } from "./styles";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
