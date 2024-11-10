import React from "react";

import { AppProvider } from "@/app/contexts/app";

const composeProviders =
  (...providers: any) =>
  ({ children }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children
    );
  };

const Providers = composeProviders(AppProvider);

export default Providers;
