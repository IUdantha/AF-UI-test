import React from "react";
import {screen, render, fireEvent, getByTestId} from "@testing-library/react";
import NavBar from "../../src/components/galleryImage";

describe("NavBar Component", () => {
  it("The image should be there", () => {
    const {getByTestId} = render(<NavBar />);
    const image = getByTestId("image");

    expect(image).toBeInTheDocument();
  });
});
