"use client";
import { useUi } from "@/context/UiContext";
import useFetch from "@/hooks/useFetch";
import { INFO_CAR_GET } from "@/services/Api";
import { IResult } from "@/types";
import * as S from "./styles";
import React from "react";
import { SubTitle, Title } from "@/styles/GlobalStyles";

const ResultCard = () => {
  const { resultCar } = useUi();

  const resultData = useFetch<IResult>(
    INFO_CAR_GET(resultCar?.idBrand, resultCar?.idModel, resultCar?.idYear).url
  );

  return (
    <S.CarContainer>
      <S.BoxValue>
        <Title>Tabela Fipe</Title>
        <SubTitle>
          Marca: {resultData.data?.Marca} <br /> Modelo:
          {resultData.data?.Modelo}
          <br /> Ano: {resultData.data?.AnoModelo}
        </SubTitle>
        <S.BoxPrice>{resultData.data?.Valor}</S.BoxPrice>
      </S.BoxValue>
    </S.CarContainer>
  );
};

export default ResultCard;
