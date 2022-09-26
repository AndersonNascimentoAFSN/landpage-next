import { api } from "@/services/api";
import MockAdapter from "axios-mock-adapter";

import { getProducts } from "@/lib/products";

const axiosMock = new MockAdapter(api);

describe("products lib", () => {
  afterEach(() => axiosMock.restore());

  const products = [
    {
      id: "1",
      name: "Camiseta Gospel Frases Bíblicas Masculina",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: 60,
      salePrice: 49,
      isFavorite: false,
    },
  ];

  it("should return array of the products", async () => {
    axiosMock.onGet().reply(200, products);

    const result = await getProducts();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data).toEqual(products);
  });
});
