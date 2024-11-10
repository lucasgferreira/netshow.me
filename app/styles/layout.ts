import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled(KeyboardAvoidingView).attrs(() => {
  // const heght = Platform.OS === 'ios' ? (hasNotch ? 100 : 70) : 25;
  // return {
  //   behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  //   keyboardVerticalOffset: heght,
  // };
})`
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
`;

export const CardDark = styled.View`
  background-color: ${(props) => props.theme.colors.card};
  flex: 1;
  border-radius: 5px;
  padding: 10px 15px;
`;

export const Card = styled.View`
  margin: ${(props) =>
    props.margin === 0 || props.margin ? props.margin : "10"}px;
  border-radius: 10px;
  padding: ${(props) =>
    props.padding === 0 || props.padding ? props.padding : "5px 10px"};
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: ${(props) =>
    props.elevation === 0 || props.elevation
      ? "0px 0px 0px rgba(000, 000, 000, 0.2)"
      : "0px 0px 3px rgba(000, 000, 000, 0.2)"};
  elevation: ${(props) =>
    props.elevation === 0 || props.elevation ? props.elevation : "4"}px;
  border-width: 1px;
  border-color: #ddd;
`;
