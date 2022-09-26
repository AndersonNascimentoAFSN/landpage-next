import { render } from "@testing-library/react";

import { Header } from "@/components/Header";

describe("Header component", () => {
  it("should display logo image in the header", () => {
    const { getByRole } = render(<Header />);
    const header = getByRole("img", {
      name: /logo/i,
    });

    expect(header).toBeInTheDocument();
  });
});
