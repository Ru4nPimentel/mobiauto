"use client"

import { Button, Autocomplete, Box, styled } from "@mui/material";

export const FormCar= styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(00,00,00,0.4);
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.16);
  padding: 25px 40px;
  max-width: 450px;
  width: calc(100% - 16px);
  height: auto;
  margin-top: 8px;
  margin-left:8px;
  margin-right:8px;
  background-color: #fff;
`;


export const BtnTeste= styled(Button)`
  background-color: #7d35ce;
  color: #fff;
  font-size: 16px;
  margin-top: 16px;
  padding: 10px 24px;
  text-transform: none;
  font-family: var(--font-roboto), sans-serif;
  font-weight: 400;
  &:hover{
    background-color: #5c04bc;
  }
  &:disabled {
    background-color: #c1c1c1;
  }
`;



