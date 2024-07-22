import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Sparklines } from "../src/Sparklines";

describe("Sparklines", () => {
  it("does not throw without any parameters", () => {
    expect(() => <Sparklines />).to.not.throw;
  });

  it("renders nothing when passed no data", () => {
    const wrapper = renderToStaticMarkup(<Sparklines />);
    expect(wrapper).to.have.length(0);
  });

  it("is rendered as svg", () => {
    const wrapper = renderToStaticMarkup(<Sparklines data={[1]} />);
    expect(wrapper).to.have.length(108);
  });
});
