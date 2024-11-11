import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomRoutes from "@/app/routes/bottom.routes";

//Screens
import Video from "@/app/screens/Home/Category/Video";

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

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...style,
          headerLargeTitle: true,
          title: "Home",
          headerShown: false,
        }}
        name="BottomRoutes"
        component={BottomRoutes}
      />

      <Stack.Screen
        options={{
          ...style,
          title: "Vídeo",
          headerShown: true,
          headerLargeTitle: true,
        }}
        name="Video"
        component={Video}
      />
    </Stack.Navigator>
  );
}

export default Main;
