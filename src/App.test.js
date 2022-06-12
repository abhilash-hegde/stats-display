import { render } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  it("rendered app", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("app");
    expect(input).toBeTruthy();
  });
});
