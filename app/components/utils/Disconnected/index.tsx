// In App.js in a new project

import LottieView from "lottie-react-native";
import * as React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text, Title } from "./styles";

interface Props {}

const Main: React.FC = ({}: Props) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          style={{ height: 200, width: 200 }}
          source={require("@/app/styles/themes/animations/disconnected.json")}
          autoPlay
          loop
        />
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Title>Conecte-se à Internet.</Title>
          <Text>Você está off-line. Verifique a sua conexão.</Text>
        </View>

        {/* <Button style={{marginTop: 50}} onPress={() => checkConnection()}>
          <Text style={{color: '#fff', fontSize: 14}}>TENTAR NOVAMENTE</Text>
        </Button> */}
      </View>
    </ScrollView>
  );
};

export default Main;
