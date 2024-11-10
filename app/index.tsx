import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
// import codePush from 'react-native-code-push';
import ErrorBoundary from "react-native-error-boundary";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Button,
  Provider as PaperProvider,
  Provider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import Providers from "@/app/contexts";
import Routes from "@/app/routes";
import { light } from "@/app/styles/themes";

// if (__DEV__) {
//   // require("./config/ReactotronConfig");
// }

// const DEEP_LINKING_URL = Config.DEEP_LINKING_URL;
// const DEEP_LINKING_SCHEME = Config.DEEP_LINKING_SCHEME;
// const configuration = Config.CONFIGURATION;

const App = () => {
  // LogBox.ignoreAllLogs();

  // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app --ios
  // adb shell am start -W -a android.intent.action.VIEW -d "app-vendedor.dev.mercadinhodoze.com.br://app/pedidos/685" com.mercadinhodoze.dev
  // https://app-vendedor.dev.mercadinhodoze.com.br/app/

  const config = {
    screens: {
      path: "app",

      BottomRoutes: {
        screens: {
          // Stacks dentro do arquivo orders.routes.tsx
          OrdersRoutes: {
            screens: {
              OrdersDetails: "pedidos",
            },
          },
          HomeRoutes: {
            screens: {
              Home: "",
              // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/notificacoes --ios
              Notifications: "notificacoes",
            },
          },
          PerfilRoutes: {
            screens: {
              // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/perfil/perguntas_frequentes --ios
              FAQ: "perfil/perguntas_frequentes",
            },
          },
          CatalogRoutes: {
            screens: {
              // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/promocoes/12 --ios
              PromotionProducts: "promocoes/:promotion_id",
              // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/crm/clientes/416 --ios
              ListCustomersDetails: "crm/clientes/:cliente_id",
            },
          },
        },
      },

      // Stacks dentro do arquivo app.routes.tsx

      // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/pedidos/685 --ios
      OrdersDetails: "pedidos/:venda_id",
      // npx uri-scheme open app-vendedor.dev.mercadinhodoze.com.br://app/pedidos/novos --ios
      NegociateRoutes: "pedidos/novos",

      // Adicione outras telas de notificação aqui, se houver
    },
  };

  // const linking = {
  //   prefixes: [`${DEEP_LINKING_URL}/app/`, `${DEEP_LINKING_SCHEME}://app/`],
  //   config,
  // };

  const navigationRef = useRef();

  const errorHandler = (error: Error, stackTrace: string) => {
    /* Log the error to an error reporting service */
  };

  const CustomFallback = (props: { error: Error; resetError: Function }) => (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Algo aconteceu!</Text>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ marginVertical: 10 }}>{props.error.toString()}</Text>
      </View>

      <Button
        mode="contained"
        onPress={() => {
          props.resetError();
        }}
      >
        Ok
      </Button>
    </SafeAreaView>
  );

  return (
    <ErrorBoundary FallbackComponent={CustomFallback} onError={errorHandler}>
      <SafeAreaProvider>
        <PaperProvider theme={light}>
          <ThemeProvider theme={light}>
            <NavigationContainer
              ref={navigationRef}
              theme={light}
              // linking={linking}
              fallback={<Text>Carregando...</Text>}
            >
              <Providers>
                <>
                  <StatusBar
                    backgroundColor={light.colors.background}
                    barStyle={"dark-content"}
                  />
                  <Provider theme={light}>
                    <GestureHandlerRootView
                      style={{
                        flex: 1,
                      }}
                    >
                      <Routes />
                    </GestureHandlerRootView>
                  </Provider>
                </>
              </Providers>
            </NavigationContainer>
          </ThemeProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

// let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

// export default codePush(codePushOptions)(App);
export default App;
