import { BoxContainer, MainContainer } from "@/styles/GlobalStyles";
import Link from "next/link";

export default function Home() {
  return (
    <MainContainer>
      <BoxContainer>
        <Link href="/busca" className="link">
          Buscar Veículo
        </Link>
      </BoxContainer>
    </MainContainer>
  );
}
