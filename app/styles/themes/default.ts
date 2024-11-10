import {
  configureFonts,
  MD2LightTheme,
  DefaultTheme as PaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "Nunito-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Nunito-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Nunito-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Nunito-Thin",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "Nunito-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Nunito-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Nunito-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Nunito-Thin",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "Nunito-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Nunito-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Nunito-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Nunito-Thin",
      fontWeight: "normal",
    },
  },
};
export default {
  ...PaperTheme,
  roundness: 2,
  colors: {
    ...PaperTheme.colors,
    primary: "#0B644D",
    primaryLight: "#0AB084",
    secundary: "#FFA91E",
    white: "#FFFFFF",
    accent: "#ac0800",
    notification: "rgb(255, 45, 85)",
    background: "#fff",
    card: "rgb(255, 255, 255)",
    text: "#444",
    textPrimary: "rgb(90, 90, 90)",
    border: "rgb(199, 199, 204)",
    input: "#f4f6f8",
    error: "rgb(255, 45, 85)",
    placeholder: "#828285",
    icon: "rgba(000, 000, 000, 0.5)",
    tag: "rgba(200, 200, 200, 0.3)",
    navigationPrimary: "#ac0800",
    loader: "rgb(200, 200, 200)",
    disabled: "#F2F2F2",
  },
  // fonts: {
  //   regular: 'Nunito-Regular',
  //   medium: 'Nunito-Medium',
  //   light: 'Nunito-Light',
  //   thin: 'Nunito-Light',
  // },
  fonts: configureFonts({ config: fontConfig, isV3: true }),

  version: 3,
};
