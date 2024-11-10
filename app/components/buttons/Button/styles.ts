import styled from "styled-components/native";
import { Button as Btn } from "react-native-paper";
import { Text as Tx } from "@/app/styles/text";

export const Button = styled(Btn).attrs(({ mode }) => ({
  mode: mode,
  uppercase: false,
  labelStyle: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  contentStyle: {
    // padding: 5,
  },
}))`
  justify-content: center;
  border-radius: 3px;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 5px;
`;

export const Text = styled(Tx).attrs({})`
  color: ${(props) => (props.disabled ? "#918C8C" : "white")};
  font-weight: 700;
  font-family: "Nunito-Bold";
  font-size: 16px;
`;
