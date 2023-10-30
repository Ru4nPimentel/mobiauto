import React from "react";

export type INav = {
  name: string;
  path: string;
}

export type ICarValue = { nome: string; codigo: string };



export type IModalData = {
  modelos?: ICarValue[]
}

export type IFormCardSearch = {
  brand: ICarValue | null;
  setBrand: React.Dispatch<React.SetStateAction<ICarValue | null>>
  model: ICarValue | null;
  setModel: React.Dispatch<React.SetStateAction<ICarValue | null>>
  year: ICarValue | null;
  setYear: React.Dispatch<React.SetStateAction<ICarValue | null>>
  optionsBrand?: ICarValue[] | null;
  optionsModel?: ICarValue[] | null;
  optionsYear?: ICarValue[] | null;
}

export type IResult = {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}