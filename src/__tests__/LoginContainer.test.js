import React from "react";
import { render } from "@testing-library/react";

import LoginContainer from "../components/LoginComponent";

describe("<LoginContainer /> test suite", () => {
  test("signin widget mounts successfully", () => {
    const { container, debug } = render(<LoginContainer />);
    debug();
    expect(container.querySelector("#sign-in-widget")).toBeTruthy();
  });
});
