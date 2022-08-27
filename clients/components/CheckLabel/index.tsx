import { NextPage } from "next";
import { CheckLabelContainer } from "./styled";
import { FaCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactNode } from "react";
interface Props {
  text: string;
  icon: ReactNode;
}
const CheckLabel = ({ text, icon }: Props) => {
  return (
    <CheckLabelContainer>
      {icon}
      <p>{text}</p>
    </CheckLabelContainer>
  );
};
export default CheckLabel;
