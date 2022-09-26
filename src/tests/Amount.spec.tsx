import { render } from "@testing-library/react";

import { Amount } from "@/components/Amount";

describe("Amount component", () => {
  it("should display title and value", () => {
    const { getByText } = render(<Amount title="Atacado" value="R$ 50,00" />);

    const title = getByText("Atacado");
    expect(title).toBeInTheDocument();

    const value = getByText("R$ 50,00");
    expect(value).toBeInTheDocument();
  });
});
