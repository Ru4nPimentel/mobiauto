"use client"
import {styled} from 'styled-components';

export const MainContainer = styled.main`
  display: block;
  width: 100%;
`;

export const Title = styled.h1`
    font-size: 34px;
    margin-top: 32px;
    font-weight: 700;
    line-height: 42px;
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    margin-top: 8px;
    font-weight: 500;
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 156px);
  min-height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(68, 67, 188);
`;


