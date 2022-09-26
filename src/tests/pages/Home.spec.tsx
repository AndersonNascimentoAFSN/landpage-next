import { render } from "@testing-library/react";

import Home from "../../pages";

const products = [
  {
    id: "1",
    name: "Camiseta Gospel Frases Bíblicas Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 60,00",
    salePrice: "R$ 49,00",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Camiseta Jesus Cristo Strong Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_jesus_cristo_strong_masculina_dizeres_religiosos_30089771_1_20200427181321.jpg",
    listPrice: "R$ 60,00",
    salePrice: "R$ 49,00",
    isFavorite: false,
  },
];

describe("Home page", () => {
  it("should display title 'Destaques'", () => {
    const { getByRole } = render(<Home productList={products} />);
    const title = getByRole('heading', {
      name: /destaques/i
    })

    expect(title).toBeInTheDocument();
  });

  it("should display card product", () => {
    const { getByText, getAllByRole } = render(<Home productList={products} />);

    const nameProduct = getByText(/camiseta gospel frases bíblicas masculina/i)
    expect(nameProduct).toBeInTheDocument();

    const favoriteButtons = getAllByRole('button')
    expect(favoriteButtons.length).toBe(2);
  });
});
