"use client";
import React, { useState } from "react";

type IUiContext = {
  resultCar: IResultFipeCar | undefined;
  setResultCar: React.Dispatch<
    React.SetStateAction<IResultFipeCar | undefined>
  >;
};

type IResultFipeCar = {
  idBrand: string | undefined;
  idModel: string | undefined;
  idYear: string | undefined;
};

const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null)
    throw new Error("useContext needs to be inside a provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [resultCar, setResultCar] = useState<IResultFipeCar | undefined>();

  return (
    <UiContext.Provider value={{ resultCar, setResultCar }}>
      {children}
    </UiContext.Provider>
  );
};
