import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  const onInputNumber = jest.fn();
  const onDataReload = jest.fn();
  it("rendered submit button", () => {
    const { getByTestId } = render(
      <Footer onInputNumber={onInputNumber} onDataReload={onDataReload} />
    );
    const input = getByTestId("input-submit");
    expect(input).toBeTruthy();
  });

  it("rendered input", () => {
    const { getByTestId } = render(
      <Footer onInputNumber={onInputNumber} onDataReload={onDataReload} />
    );
    const input = getByTestId("input-number");
    expect(input).toBeTruthy();
  });

  it("rendered reload button 1", () => {
    const { getByTestId } = render(
      <Footer onInputNumber={onInputNumber} onDataReload={onDataReload} />
    );
    const input = getByTestId("fetch-button-1");
    expect(input).toBeTruthy();
  });

  it("rendered reload button 2", () => {
    const { getByTestId } = render(
      <Footer onInputNumber={onInputNumber} onDataReload={onDataReload} />
    );
    const input = getByTestId("fetch-button-2");
    expect(input).toBeTruthy();
  });
});
