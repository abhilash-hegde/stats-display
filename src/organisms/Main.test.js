import { render } from "@testing-library/react";
import Main from "./Main";

describe("Main Component", () => {
  const currentJson = "data-1234.json";
  const inputData = [];
  it("rendered Mean", () => {
    const { getByTestId } = render(
      <Main inputData={inputData} currentJson={currentJson} />
    );
    const input = getByTestId("Mean");
    expect(input).toBeTruthy();
  });

  it("rendered Mode", () => {
    const { getByTestId } = render(
      <Main inputData={inputData} currentJson={currentJson} />
    );
    const input = getByTestId("Mode");
    expect(input).toBeTruthy();
  });

  it("rendered Median", () => {
    const { getByTestId } = render(
      <Main inputData={inputData} currentJson={currentJson} />
    );
    const input = getByTestId("Median");
    expect(input).toBeTruthy();
  });

  it("rendered Std Deviation", () => {
    const { getByTestId } = render(
      <Main inputData={inputData} currentJson={currentJson} />
    );
    const input = getByTestId("Std Deviation");
    expect(input).toBeTruthy();
  });
});
