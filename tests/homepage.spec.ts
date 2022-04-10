import { test, expect } from "@playwright/test"

test("it show show a header", async ({ page }) => {
  await page.goto("/")

  await expect(page.locator("h1")).toHaveText(/hello world/i)
})
