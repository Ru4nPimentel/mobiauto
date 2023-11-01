"use client";
import { useUi } from "@/context/UiContext";
import useFetch from "@/hooks/useFetch";
import { INFO_CAR_GET } from "@/services/Api";
import { IResult } from "@/types";
import * as S from "./styles";
import React from "react";
import { BoxContainer, SubTitle, Title } from "@/styles/GlobalStyles";
import Link from "next/link";

const ResultCard = () => {
  const { resultCar } = useUi();

  const resultCheck =
    resultCar?.idBrand !== undefined ||
    resultCar?.idModel !== undefined ||
    resultCar?.idYear !== undefined;

  const resultData = useFetch<IResult>(
    INFO_CAR_GET(resultCar?.idBrand, resultCar?.idModel, resultCar?.idYear).url
  );

  return (
    <>
      {resultCheck && (
        <S.CarContainer>
          <S.BoxValue>
            <Title className="grayColor">Tabela Fipe</Title>
            <SubTitle className="grayColor">
              Marca: {resultData.data?.Marca} <br /> Modelo:
              {resultData.data?.Modelo}
              <br /> Ano: {resultData.data?.AnoModelo}
            </SubTitle>
            <S.BoxPrice>{resultData.data?.Valor}</S.BoxPrice>
            <p className="grayColor">Este é o preço de compra do veículo</p>
          </S.BoxValue>
        </S.CarContainer>
      )}
      {!resultCheck && (
        <BoxContainer>
          <Title style={{ color: "#fff" }}>Resultado não encontrado</Title>
          <SubTitle style={{ color: "#fff", marginBottom: "10px" }}>
            faça novamente a pesquisa
          </SubTitle>
          <Link href="/busca" className="link">
            Buscar Veículo
          </Link>
        </BoxContainer>
      )}
    </>
  );
};

export default ResultCard;
