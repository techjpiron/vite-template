import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  webServer: {
    command: "pnpm dev",
    port: 3000,
    reuseExistingServer: true,
  },
}

export default config
