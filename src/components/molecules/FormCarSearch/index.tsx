"use client";
import React from "react";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { IFormCardSearch } from "@/types";
import InputAutoComplete from "@/components/atoms/InputAutoComplete";
import { useUi } from "@/context/UiContext";

const FormCarSearch = ({
  brand,
  setBrand,
  model,
  setModel,
  year,
  setYear,
  optionsBrand,
  optionsModel,
  optionsYear,
}: IFormCardSearch) => {
  const router = useRouter();
  const { setResultCar } = useUi();
  return (
    <StyledEngineProvider injectFirst>
      <S.FormCar role="search" component="form">
        <InputAutoComplete
          options={optionsBrand}
          value={brand}
          setValue={setBrand}
          label="Marca"
        />
        <InputAutoComplete
          options={optionsModel}
          value={model}
          setValue={setModel}
          label="Modelo"
          marginTop={"16"}
        />
        {model && (
          <InputAutoComplete
            options={optionsYear}
            value={year}
            setValue={setYear}
            label="Ano"
            marginTop={"16"}
          />
        )}
        <S.BtnTeste
          disabled={brand === null || model === null || year === null}
          onClick={() => {
            if (brand !== null || model !== null || year !== null) {
              router.push("/resultado");
              setResultCar({
                idBrand: brand?.codigo.toString(),
                idModel: model?.codigo.toString(),
                idYear: year?.codigo.toString(),
              });
            }
          }}
        >
          Consultar Preço
        </S.BtnTeste>
      </S.FormCar>
    </StyledEngineProvider>
  );
};

export default FormCarSearch;
