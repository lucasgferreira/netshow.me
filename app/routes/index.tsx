import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

//Auth
import AppRoutes from "@/app/routes/app.routes";

const Routes: React.FC = ({ route }: any) => {
  const navigation = useNavigation();

  // const { colors } = useTheme();

  return <AppRoutes />;
};

export default Routes;
