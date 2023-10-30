"use client";
import React, { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import { Title, SubTitle } from "@/styles/GlobalStyles";
import FormCarSearch from "@/components/molecules/FormCarSearch";
import useFetch from "@/hooks/useFetch";
import { ICarValue, IModalData } from "@/types";
import { BRAND_GET, MODEL_GET, YEAR_MODEL_GET } from "@/services/Api";

const CarSearch = () => {
  const [brand, setBrand] = useState<ICarValue | null>(null);
  const [model, setModel] = useState<ICarValue | null>(null);
  const [year, setYear] = useState<ICarValue | null>(null);

  const brandOpt = useFetch<ICarValue[]>(BRAND_GET().url);
  let modelOpt = useFetch<IModalData>(MODEL_GET(brand?.codigo).url);
  let yearModalOpt = useFetch<ICarValue[]>(
    YEAR_MODEL_GET(brand?.codigo, model?.codigo).url
  );

  useEffect(() => {
    setModel(null);
    setYear(null);
  }, [brand]);

  return (
    <S.CarContainer>
      <Title className="grayColor">Tabela Fipe</Title>
      <SubTitle className="grayColor">
        Consulte o valor de um veículo de forma gratuita
      </SubTitle>
      <FormCarSearch
        brand={brand}
        model={model}
        year={year}
        setBrand={setBrand}
        setModel={setModel}
        setYear={setYear}
        optionsBrand={brandOpt.data}
        optionsModel={modelOpt.data?.modelos}
        optionsYear={yearModalOpt?.data}
      />
    </S.CarContainer>
  );
};

export default CarSearch;
