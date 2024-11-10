import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-family: 'Nunito-Bold';
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-family: 'Nunito-Regular';
`;

export const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  padding-horizontal: 25px;
  padding-vertical: 5px;
  border-radius: 20px;
`;

export const IconCheck = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
