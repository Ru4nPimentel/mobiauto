"use client";
import React from "react";
import * as S from "./styles";
import Logo from "@/components/atoms/Logo";

const Footer = () => {
  return (
    <S.Footer className="grayBg">
      <span>
        <Logo />
      </span>
    </S.Footer>
  );
};

export default Footer;
