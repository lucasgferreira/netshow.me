import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CommonActions,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButtom } from "./styles";

//Screens
import HomeRoutes from "@/app/routes/home.routes";
import PerfilRoutes from "@/app/routes/perfil.routes";

const Tab = createBottomTabNavigator();

const style = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowColor: "transparent",
  },
  headerShadowVisible: false,
  headerTitleStyle: {},
  headerTransparent: false,
  headerTitleAlign: "center",
  headerShown: true,
  headerLargeTitle: true,
};

function Main({ route }: any) {
  const navigation = useNavigation();
  // const route = useRoute();

  const { colors } = useTheme();

  // useEffect(() => {
  //   const onesignalToken: any = Config.ONESIGNAL_TOKEN;

  //   OneSignal.setAppId(onesignalToken);

  //   OneSignal.setNotificationOpenedHandler(notification => {
  //     const {screen, params} = notification.notification.additionalData;
  //     // alert(JSON.stringify(params));
  //     if (screen) {
  //       navigation.dispatch(CommonActions.navigate(screen, params));
  //     }
  //   });
  // }, []);

  return (
    <Tab.Navigator
      lazy={true}
      optimizationsEnabled={true}
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "rgba(000,000,000,0.4)",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarHideOnKeyboard: false,
      }}
    >
      <Tab.Screen
        name="HomeRoutes"
        lazy={true}
        optimizationsEnabled={true}
        component={HomeRoutes}
        options={{
          ...style,
          title: "Início",
          tabBarLabel: "Início",
          headerStyle: {
            // backgroundColor: colors.primary,
          },
          headerTitleStyle: { color: "#fff" },
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => (
            <IconButtom focused={focused}>
              <MaterialCommunityIcons
                name="home-outline"
                color={focused ? colors.primary : color}
                size={22}
              />
            </IconButtom>
          ),
        }}
      />

      <Tab.Screen
        name="ExploreRoutes"
        lazy={true}
        optimizationsEnabled={true}
        component={PerfilRoutes}
        options={{
          ...style,
          title: "Explorar",
          tabBarLabel: "Explorar",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <IconButtom focused={focused}>
              <MaterialIcons
                name="search"
                color={focused ? colors.primary : color}
                size={22}
              />
            </IconButtom>
          ),
        }}
      />

      <Tab.Screen
        name="ListRoutes"
        component={PerfilRoutes}
        lazy={true}
        optimizationsEnabled={true}
        options={{
          ...style,
          title: "Minha Lista",
          headerShown: false,

          tabBarBadge: 1,
          tabBarLabel: "Minha Lista",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButtom focused={focused}>
              <MaterialCommunityIcons
                name="heart"
                color={focused ? colors.primary : color}
                size={20}
              />
            </IconButtom>
          ),
        }}
      />

      <Tab.Screen
        name="DownloadsRoutes"
        component={PerfilRoutes}
        lazy={true}
        optimizationsEnabled={true}
        options={{
          ...style,
          title: "Downloads",
          headerShown: false,

          tabBarLabel: "Downloads",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButtom focused={focused}>
              <Ionicons
                name="download-outline"
                color={focused ? colors.primary : color}
                size={20}
              />
            </IconButtom>
          ),
        }}
      />

      <Tab.Screen
        name="PerfilRoutes"
        lazy={true}
        optimizationsEnabled={true}
        component={PerfilRoutes}
        options={{
          ...style,
          headerShown: false,
          title: "Perfil",
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <IconButtom focused={focused}>
              <MaterialCommunityIcons
                name="account-outline"
                color={focused ? colors.primary : color}
                size={22}
              />
            </IconButtom>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
