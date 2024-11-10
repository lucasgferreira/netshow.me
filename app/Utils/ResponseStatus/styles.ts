import styled from 'styled-components/native';
import {Button as Btn} from 'react-native-paper';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  min-height: 150px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconCheckSuccess = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #76d643;
  justify-content: center;
  align-items: center;
`;

export const IconCheckError = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #e02121;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 8;
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  font-family: 'Nunito';
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 8;
  font-size: 14px;
  color: #757575;
  font-weight: 400;
  font-family: 'Nunito';
  text-align: center;
`;
