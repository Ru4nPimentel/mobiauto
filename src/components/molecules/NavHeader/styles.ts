"use client"
import {styled} from 'styled-components';


export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  .menuHeader{
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    li{
      height: 100%;
      a{
        color: rgb(66, 66, 66);
        cursor: pointer;
        padding: 0px 14px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 22px;
        background-color: transparent;
        height: 100%;
        display: flex;
        align-items: center;
        @media only screen and (max-width: 425px) {
          font-size: 0.688rem;
        }
      }
      &:hover{
        a{
          color: #fff;
          text-decoration: none;
          background-color: rgb(0, 180, 170);
        }
      }
    }
  }
`;

export const BoxLogo = styled.div`
  width: 12.5rem;
  padding: 0px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    cursor: pointer;
  }
`;
