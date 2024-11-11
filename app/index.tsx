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

const App = () => {
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

export default App;
