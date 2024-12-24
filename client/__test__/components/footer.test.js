import React from "react";
import {screen, render, fireEvent, getByTestId} from "@testing-library/react";
import NavBar from "../../src/components/footer";

describe("NavBar Component", () => {
  it("Logo should be there", () => {
    const {getByTestId} = render(<NavBar />);
    const logoImg = getByTestId("logoImg");

    expect(logoImg).toBeInTheDocument();
  });

  
});
