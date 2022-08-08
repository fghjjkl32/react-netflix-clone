import React from "react"
import { render, screen } from "@testing-library/react"
import Banner from "./components/Banner"

test("renders learn react link", () => {
  render(<Banner />)
  const testElement = screen.getByTestId("test_text")
  expect(testElement).toHaveTextContent("More Information")
})
