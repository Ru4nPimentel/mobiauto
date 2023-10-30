"use client"

import {styled} from 'styled-components';

export const CarContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 156px);
  min-height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dbf3f3;
`;

export const BoxValue = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
      font-size: 14px;
      margin-top: 10px;
      color: #91909c;
    }
`;

export const BoxPrice = styled.div`
  display: block;
  background-color: #1a897b;
  color: #fff;
  font-size: 24px;
  padding: 8px 15px;
  margin-top: 15px;
  font-weight: bold;
  border-radius: 50px;
`;