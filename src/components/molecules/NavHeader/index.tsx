"use client";
import Logo from "@/components/atoms/Logo";
import MenuList from "@/components/atoms/MenuList";
import { INav } from "@/types";
import * as S from "./styles";
import Link from "next/link";

const NavHeader = () => {
  const menuList: INav[] = [
    {
      name: "Buscar Veículo",
      path: "/busca",
    },
    {
      name: "Contato",
      path: "/busca",
    },
  ];

  return (
    <>
      <S.NavContainer role="navigation">
        <S.BoxLogo>
          <Link href="/busca">
            <Logo />
          </Link>
        </S.BoxLogo>
        <MenuList list={menuList} className="menuHeader" />
      </S.NavContainer>
    </>
  );
};

export default NavHeader;
