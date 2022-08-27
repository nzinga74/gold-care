import { NextPage } from "next";
import { Button } from "./styled";

interface Props {
  text: string;
}

const ButtonIcon: NextPage<Props> = ({ text }) => {
  return <Button>{text}</Button>;
};
export default ButtonIcon;
