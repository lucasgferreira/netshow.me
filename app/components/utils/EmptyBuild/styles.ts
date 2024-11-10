import styled from "styled-components/native";
import { Text } from "@/app/styles/text";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  margin-top: 15px;
  align-self: center;
  text-align: center;
  font-weight: 500;
`;
