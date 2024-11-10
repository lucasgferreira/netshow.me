import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const Text = styled.Text`
  font-size: ${(props) => props.size | 14}px;
  color: ${(props) => props.color || props.theme.colors.text};
  font-weight: 400;
  font-family: "Nunito-Regular";
`;

export const TextBold = styled.Text`
  font-size: ${(props) => props.size | 12}px;
  color: ${(props) => props.color || props.theme.colors.text};
  font-weight: 700;
  font-family: "Nunito-Bold";
`;

export const TextDescription = styled.Text`
  font-size: 12px;
  color: #757575;
  font-weight: 400;
  font-family: "Nunito-Regular";
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.error};
  font-weight: 400;
  font-family: "Nunito-Regular";
`;

export const TextSuccess = styled.Text`
  font-size: 14px;
  color: #0b644d;
  font-weight: 400;
  font-family: "Nunito-Regular";
`;

export const TextVersion = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-family: "Nunito-Regular";
`;
