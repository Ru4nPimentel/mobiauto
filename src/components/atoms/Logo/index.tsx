"use client";
import LogoIMG from "@/assets/logo.svg";
import Image from "next/image";

type ILogo = React.ComponentProps<"img"> & {
  width?: number;
  height?: number;
};

const Logo = ({ className, width, height }: ILogo) => {
  return (
    <Image
      src={LogoIMG}
      className={className}
      alt="Logo MobiAuto"
      width={width ? width : 150}
      height={height ? height : 20}
      priority={true}
    />
  );
};

export default Logo;
