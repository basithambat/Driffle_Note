import { describe, expect, it } from "vitest";

import { env } from "@/lib/env";

describe("env schema", () => {
  it("exposes NODE_ENV", () => {
    expect(env.NODE_ENV).toBeDefined();
  });
});
