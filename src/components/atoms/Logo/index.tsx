"use client";
import LogoIMG from "@/assets/logo.svg";
import LogoIMGLight from "@/assets/logoLight.svg";
import Image from "next/image";

type ILogo = React.ComponentProps<"img"> & {
  width?: number;
  height?: number;
  light?: boolean;
};

const Logo = ({ className, width, height, light }: ILogo) => {
  return (
    <Image
      src={light ? LogoIMGLight : LogoIMG}
      className={className}
      alt="Logo MobiAuto"
      width={width ? width : 150}
      height={height ? height : 20}
      priority={true}
    />
  );
};

export default Logo;
