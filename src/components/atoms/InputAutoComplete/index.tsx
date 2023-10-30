import { ICarValue } from "@/types";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

type IInput = {
  options?: ICarValue[] | null;
  value: ICarValue | null;
  setValue: (valor: ICarValue | null) => void;
  label: string;
  marginTop?: string;
};

const InputAutoComplete = ({
  options,
  value,
  setValue,
  label,
  marginTop = "0",
}: IInput) => {
  return (
    <Autocomplete
      disablePortal
      id="selectBrand"
      options={options ? options : []}
      sx={{
        width: "100%",
        marginTop: `${marginTop}px`,
      }}
      getOptionLabel={(option) => option.nome}
      renderInput={(params) => {
        return <TextField {...params} label={label} />;
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.codigo}>
            {option.nome}
          </li>
        );
      }}
      isOptionEqualToValue={(option, vl) => option.codigo === vl.codigo}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      value={value}
    />
  );
};

export default InputAutoComplete;
