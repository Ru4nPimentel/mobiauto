import { render, screen } from "@testing-library/react";
import MenuList from "./index";
import { INav } from "@/types";
describe("MenuList Component", () => {
  const menuList: INav[] = [
    {
      name: "carro",
      path: "/",
    },
    {
      name: "moto",
      path: "/",
    },
  ];

  it("shoulder render component", () => {
    render(<MenuList list={menuList} className="teste" />);

    expect(screen.getByText("carro")).toBeInTheDocument();
    expect(screen.getByText("moto")).toBeInTheDocument();
  });
});
