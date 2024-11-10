import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Image, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "@/app/components/buttons";
import { ButtonContainer, Container, Description, Title } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

interface RouteParams {
  title?: string;
  errors?: Array<any>;
  description?: string;
  subdescription?: string;
  buttonLabel?: string;
  buttonLabelCancel?: string;
  type?: string;
  onPress?: () => void;
  onPressTryAgain?: () => void;
  onPressCancel?: () => void;
}

interface MainProps {
  route: {
    params: RouteParams;
  };
  loading: boolean;
  typeMessage: string;
}

const typeToImageMap: Record<string, any> = {
  ERROR: require("@/app/assets/imgs/status/error.png"),
  DELETE: require("@/app/assets/imgs/status/delete.png"),
  SAVE: require("@/app/assets/imgs/status/save.png"),
  ADD: require("@/app/assets/imgs/status/add.png"),
  SUCCESS: require("@/app/assets/imgs/status/success.png"),
  EMPTY: require("@/app/assets/imgs/status/empty.png"),
};

const Main: React.FC<MainProps> = ({ route, loading, typeMessage }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const {
    title,
    errors,
    description,
    subdescription,
    buttonLabel,
    buttonLabelCancel,
    type,
    onPress,
    onPressTryAgain,
    onPressCancel,
  } = route?.params || {};

  const renderType = () => {
    const imageSource = type ? typeToImageMap[type] : null;
    const imageSourceType = typeMessage ? typeToImageMap[typeMessage] : null;

    if (imageSource) {
      return (
        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: 250,
            marginBottom: 20,
          }}
          source={imageSourceType || imageSource}
        />
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        {renderType()}

        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {subdescription && <Description>{subdescription}</Description>}
        {errors &&
          errors?.map((item) => (
            <Description>{item?.message || item?.mensagem}</Description>
          ))}
        <ButtonContainer>
          <View style={{ flex: 1, marginHorizontal: 5 }}>
            {onPress && (
              <Button
                text={buttonLabel || "OK"}
                onPress={() => {
                  onPress();
                  navigation.goBack();
                }}
              />
            )}
            {onPressTryAgain && (
              <Button
                loading={loading}
                text={buttonLabel || "OK"}
                onPress={onPressTryAgain}
              />
            )}
          </View>
          {onPressCancel && (
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <Button
                text={buttonLabelCancel || "Cancelar"}
                mode="outlined"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          )}
        </ButtonContainer>
      </Container>
    </ScrollView>
  );
};

export default Main;
