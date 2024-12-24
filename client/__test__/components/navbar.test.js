import React from "react";
import {screen, render, fireEvent, getByTestId} from "@testing-library/react";
import NavBar from "../../src/components/navbar";

describe("NavBar Component", () => {
  it("renders navigation items correctly", () => {
    const {getByText} = render(<NavBar />);

    // Assert that navigation items are rendered
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Latest News")).toBeInTheDocument();
    expect(getByText("Gallery")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
  });

  //   it("opens mobile menu when clicking the menu button", () => {
  //     const {getByRole, getByText} = render(<NavBar />);
  //     const menuButton = getByRole("button", {name: /open main menu/i});

  //     fireEvent.click(menuButton);

  //     // Assert that mobile menu is open
  //     expect(getByText("Home")).toBeInTheDocument();
  //     expect(getByText("Latest News")).toBeInTheDocument();
  //     expect(getByText("Gallery")).toBeInTheDocument();
  //     expect(getByText("About Us")).toBeInTheDocument();
  //   });

  // it("logs out when clicking the logout button", () => {
  //   render(<NavBar />);
  //   const logoutButton = screen.getByTestId("comp-logoutbtn");
  //   expect(logoutButton).toBeInTheDocument();
  // });

  it("does not display logout button when not logged in", () => {
    const {queryByText} = render(<NavBar />);
    const logoutButton = queryByText("Log out");

    // Assert that logout button is not rendered
    expect(logoutButton).toBeNull();
  });

  // it("redirects to login page when clicking login button", () => {
  //   const {queryByText} = render(<NavBar />);
  //   const loginButton = queryByText("Log in");

  //   fireEvent.click(loginButton);

  //   // Assert that user is redirected to the login page
  //   expect(window.location.href).toBe("/auth");
  // });

  // Mocked functions
  const removeCookie = jest.fn();
  const reloadMock = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, "location", {
      value: {reload: reloadMock},
      writable: true,
    });
  });

  beforeEach(() => {
    removeCookie.mockClear();
    reloadMock.mockClear();
  });

  // Test cases for handleLogout function when mocked
  // it("deletes token cookie when logging out", () => {
  //   const {getByTestId} = render(<NavBar />);
  //   const logoutButton = getByTestId("Log out");

  //   fireEvent.click(logoutButton);

  //   // Assert that removeCookie is called with the correct argument
  //   expect(removeCookie).toHaveBeenCalledWith("token");
  // });

  it("Logo should be there", () => {
    const {getByTestId} = render(<NavBar />);
    const logoImg = getByTestId("logoImg");

    expect(logoImg).toBeInTheDocument();
  });
});
