import { serializedProducts } from "@/utils/serializedProducts";

describe("serializedProduct utils", () => {
  const product = {
    id: "1",
    name: "Camiseta Gospel Frases Bíblicas Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: 60,
    salePrice: 49,
    isFavorite: false,
  };

  const productPropertiesNotSerialized = {
    id: "1",
    name: "Camiseta Gospel Frases Bíblicas Masculina",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    isFavorite: false,
  };

  it("should return serialized product", () => {
    const { listPrice, salePrice, ...notSerializedProperties } =
      serializedProducts(product);

    expect(typeof listPrice === "string").toBeTruthy();
    expect(listPrice).toEqual("R$\xa060,00");

    expect(typeof salePrice === "string").toBeTruthy();
    expect(salePrice).toEqual("R$\xa049,00");

    expect(notSerializedProperties).toEqual(productPropertiesNotSerialized);
  });
});
