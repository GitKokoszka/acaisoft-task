import { render } from "@testing-library/react";
import ServersProvider from "providers/ServersProvider";
import Servers from "./Servers";

it("Should render with no errors", () => {
  render(
    <ServersProvider>
      <Servers />
    </ServersProvider>
  );
});
