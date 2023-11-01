import {
  BoxContainer,
  MainContainer,
  SubTitle,
  Title,
} from "@/styles/GlobalStyles";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainContainer>
      <BoxContainer>
        <Title style={{ color: "#fff" }}>404</Title>
        <SubTitle style={{ color: "#fff", marginBottom: "10px" }}>
          Pagina não encontrada
        </SubTitle>
        <Link href="/busca" className="link">
          Buscar Veículo
        </Link>
      </BoxContainer>
    </MainContainer>
  );
}
