import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Container, Title } from "./styles";

interface Props {
  text: string;
}

const Main: React.FC<Props> = ({ text }) => {
  useEffect(() => {}, []);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <LottieView
          style={{ height: 250, width: "100%" }}
          source={require("@/app/styles/themes/animations/construct.json")}
          autoPlay
          loop
        />

        <Title>{text}</Title>
      </View>
    </Container>
  );
};

export default Main;
