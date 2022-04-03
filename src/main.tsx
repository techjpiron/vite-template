import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import App from "./App"
import "./tailwind.css"

const container = document.getElementById("root")

if (!container) {
  throw new Error("Couldn't find #root")
}

const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
