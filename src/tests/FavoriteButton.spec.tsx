import { render } from "@testing-library/react";

import { FavoriteButton } from "@/components/FavoriteButton";

describe("FavoriteButton component", () => {
  it("should display button", () => {
    const { getByRole } = render(
      <FavoriteButton id={"1"} isFavorite={true} onClick={() => {}} />
    );
    const button = getByRole("button");
  });

  it("should display favorite button if to marked as favorite", () => {
    const { getByRole } = render(
      <FavoriteButton id={"1"} isFavorite={true} onClick={() => {}} />
    );
    const button = getByRole("button");
    expect(button).toHaveAttribute("data-testId", "marked-favorite")
  });

  it("should not display favorite button if not to marked as favorite", () => {
    const { queryByRole } = render(
      <FavoriteButton id={"1"} isFavorite={false} onClick={() => {}} />
    );
    const button = queryByRole("button");
    expect(button).not.toHaveAttribute("data-testId", "marked-favorite")
  });
});
