"use client";

import React, { createContext, useContext, useState } from "react";
import globalConfig from "@/app/globalConfig.json";

export type GlobalStateContextType = {
  globalState: Record<string, any>;
  updateGlobalState: (
    key: string,
    value: any,
    operator?: "set" | "toggle" | "increment" | "decrement"
  ) => void;
  globalComponents: Record<string, any>;
};

const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}

export function GlobalStateProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const config = globalConfig as {
    state?: Record<string, any>;
    components?: Record<string, any>;
  };

  const [globalState, setGlobalState] = useState<Record<string, any>>(() => config.state || {});

  const updateGlobalState = (
    key: string,
    value: any,
    operator?: "set" | "toggle" | "increment" | "decrement"
  ) => {
    setGlobalState((prev) => {
      const next = { ...prev };
      const currentVal = next[key];

      if (operator === "toggle") {
        next[key] = !currentVal;
      } else if (operator === "increment") {
        next[key] = (typeof currentVal === "number" ? currentVal : 0) + (typeof value === "number" ? value : 1);
      } else if (operator === "decrement") {
        next[key] = (typeof currentVal === "number" ? currentVal : 0) - (typeof value === "number" ? value : 1);
      } else {
        next[key] = value;
      }

      return next;
    });
  };

  const contextValue: GlobalStateContextType = {
    globalState,
    updateGlobalState,
    globalComponents: config.components || {},
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}
