import * as React from "react";

//Stack

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Perfil from "@/app/screens/Perfil";

const Stack = createStackNavigator();

const style = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowColor: "transparent",
  },
  headerShadowVisible: false,
  headerTitleStyle: { fontSize: 18 },
  headerTransparent: false,

  headerTitleAlign: "center",
  headerShown: true,
  headerBackTitle: "Voltar",
};

type Props = {
  initialRouteName?: string;
};

function Main({ initialRouteName }: Props) {
  const navigation = useNavigation();

  // const {codigo_ze} = route?.params || {};

  // useEffect(() => {
  //   alert(JSON.stringify(codigo_ze));
  // }, [route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...style,
          title: "Vídeos",
          headerShown: true,
          headerLargeTitle: true,
        }}
        name="Perfil"
        component={Perfil}
      />
    </Stack.Navigator>
  );
}

export default Main;
