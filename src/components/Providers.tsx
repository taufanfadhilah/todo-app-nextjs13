"use client"

import React from "react";
import { Provider } from "react-redux";

// stores
import { store } from "@/store";

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
