import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { api } from "@/services/api";
import MockAdapter from "axios-mock-adapter";

import Home, { getStaticProps } from "../../pages";

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

const productsData = [
  {
    id: "1",
    name: "Camiseta Gospel Frases Bíblicas Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: 60,
    salePrice: 49,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Camiseta Jesus Cristo Strong Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_jesus_cristo_strong_masculina_dizeres_religiosos_30089771_1_20200427181321.jpg",
    listPrice: 60,
    salePrice: 49,
    isFavorite: false,
  },
];

const axiosMock = new MockAdapter(api);

describe("Home page", () => {
  it("should display title 'Destaques'", () => {
    const { getByRole } = render(<Home productList={products} />);
    const title = getByRole("heading", {
      name: /destaques/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("should display card product", () => {
    const { getByText, getAllByRole } = render(<Home productList={products} />);

    const nameProduct = getByText(/camiseta gospel frases bíblicas masculina/i);
    expect(nameProduct).toBeInTheDocument();

    const favoriteButtons = getAllByRole("button");
    expect(favoriteButtons.length).toBe(2);
  });

  it("should mark the product as a favorite", async () => {
    const { getByRole } = render(<Home productList={products.slice(0, 1)} />);

    const favoriteButton = getByRole("button");

    expect(favoriteButton).not.toHaveAttribute(
      "data-testId",
      "marked-favorite"
    );

    await userEvent.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute("data-testId", "marked-favorite");
  });

  it("should loads initial data", async () => {
    axiosMock.onGet().reply(200, productsData);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          productList: products,
        },
        "revalidate": 30
      })
    );
  });
});
