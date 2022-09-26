import { setProductAsFavorite } from "@/hooks/useProducts";

describe("setProductAsFavorite function", () => {
  const product = {
    id: "1",
    name: "Camiseta Gospel Frases Bíblicas Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 60,00",
    salePrice: "R$ 49,00",
    isFavorite: false,
  };

  it("should return true in isFavorite if id exist in the product", () => {
    const { isFavorite } = setProductAsFavorite(product, "1");
    expect(isFavorite).toEqual(true);
  });

  it("should return false in isFavorite if id not exist in the product", () => {
    const { isFavorite } = setProductAsFavorite(product, "2");
    expect(isFavorite).toEqual(false);
  });
});
