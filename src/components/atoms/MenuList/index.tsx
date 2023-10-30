"use client";
import React from "react";
import * as S from "./styles";
import { INav } from "@/types";
import Link from "next/link";

type NavProps = React.ComponentProps<"nav"> & {
  list: INav[];
};

const MenuList = ({ list, className }: NavProps) => {
  return (
    <S.MenuContainer role="menu" className={className}>
      {list?.map(({ name, path }, index) => {
        return (
          <li key={index}>
            <Link href={path}>
              <span> {name} </span>
            </Link>
          </li>
        );
      })}
    </S.MenuContainer>
  );
};

export default MenuList;
