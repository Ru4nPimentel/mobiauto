import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/global.css";
import Header from "@/components/organisms/Header";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/components/molecules/Footer";
import { UiContextProvider } from "@/context/UiContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Comprar e vender Carros Usados, Novos e Seminovos | Mobiauto",
  description:
    "Compre, Venda, Compare Valores e Ficha Técnica de carros novos, seminovos e usados. Fique por dentro das novidades no mercado automotivo em um único lugar.",
  icons: {
    icon: ["/favicon-16.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.variable}>
        <StyledComponentsRegistry>
          <UiContextProvider>
            <Header />
            {children}
            <Footer />
          </UiContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
