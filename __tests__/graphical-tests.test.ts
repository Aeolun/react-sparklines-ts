import * as Diff from "diff";
import kleur from "kleur";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import fixtures from "./helpers/fixtures";

for (const key of Object.keys(fixtures)) {
  describe(`${key}`, () => {
    it("should render as specified", () => {
      const html = renderToStaticMarkup(fixtures[key].jsx);

      const diff = Diff.diffChars(
        fixtures[key].svg.trim().replace("\n", "↩").replace("\r", "↩"),
        html.trim().replace("\n", "↩").replace("\r", "↩"),
      );

      if (diff.length > 1) {
        console.log("before", kleur.blue(fixtures[key].svg));
        console.log("after", kleur.gray(html));
        for (const part of diff) {
          // green for additions, red for deletions
          const text = part.added
            ? kleur.bgGreen(part.value)
            : part.removed
              ? kleur.bgRed(part.value)
              : part.value;
          process.stderr.write(text);
        }
      }

      expect(diff, "Not same").toHaveLength(1);
    });
  });
}
