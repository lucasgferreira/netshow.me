import styled from "styled-components/native";

export const IconButtom = styled.View`
  /* background-color: ${(props) =>
    props.focused ? "#fff" : props.theme.colors.primary}; */
  align-items: center;
  justify-content: center;
  /* border-radius: 14px;
  height: 28px;
  width: 28px;
  margin-top: 4px; */
`;

export const NotificationButtom = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.theme.colors.background};
  margin-left: 5px;
`;
