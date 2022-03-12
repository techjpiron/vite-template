import { render, screen } from "@testing-library/react"
import App from "../App"

it("should work", () => {
  render(<App />)

  expect(
    screen.getByRole("heading", { name: /hello world/i })
  ).toBeInTheDocument()
})
