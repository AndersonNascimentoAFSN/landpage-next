import { render } from "@testing-library/react";

import { FavoriteButton } from "@/components/FavoriteButton";

describe("FavoriteButton component", () => {
  it("should display button", () => {
    const { getByRole } = render(
      <FavoriteButton id={"1"} isFavorite={true} onClick={() => {}} />
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
