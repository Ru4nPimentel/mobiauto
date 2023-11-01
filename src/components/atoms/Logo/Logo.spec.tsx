import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo Component", () => {
  it("should render the normal logo", () => {
    const { container } = render(<Logo />);

    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("should bring the class placed", () => {
    const { container } = render(<Logo className="img" />);

    const imgElement = container.querySelector("img");

    expect(imgElement).toHaveAttribute("class", "img");
  });

  it("should bring the alt attribute", () => {
    const { container } = render(<Logo />);

    const imgElement = container.querySelector("img");

    expect(imgElement).toHaveAttribute("alt", "Logo MobiAuto");
  });
});
