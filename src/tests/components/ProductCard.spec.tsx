import { render } from "@testing-library/react";

import { ProductCard } from "@/components/ProductCard";

describe("Product component", () => {
  it("should display elements in the screen", () => {
    const { getByText, getByRole } = render(
      <ProductCard
        id="1"
        name="Camiseta Evangélica"
        imageURL="./public/logo.svg"
        listPrice="R$ 50,00"
        salePrice="R$ 55,00"
        isFavorite={true}
        onClick={() => {}}
      />
    );

    const name = getByText("Camiseta Evangélica");
    expect(name).toBeInTheDocument();

    const listPrice = getByText("R$ 50,00");
    expect(listPrice).toBeInTheDocument();

    const salePrice = getByText("R$ 55,00");
    expect(salePrice).toBeInTheDocument();

    const favoriteButton = getByRole("button");
    expect(favoriteButton).toBeInTheDocument();

    const imageProduct = getByRole("img", {
      name: /Image product/i,
    });
    expect(imageProduct).toBeInTheDocument();
  });
});
