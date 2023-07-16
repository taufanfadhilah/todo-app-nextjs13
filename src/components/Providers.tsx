"use client";

import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

// stores
import { store } from "@/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default Providers;
