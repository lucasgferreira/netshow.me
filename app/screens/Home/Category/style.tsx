import styled from "styled-components/native";

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: 800;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-horizontal: 10px;
`;

export const Content = styled.View`
  margin-horizontal: 10px;
`;

export const Chip = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(220, 220, 220, 0.4);
  margin-horizontal: 5px;
  justify-content: center;
`;

export const ChipTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  font-weight: 600;
`;
