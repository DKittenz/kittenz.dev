import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders coming soon", () => {
	const { getByText } = render(<App />);
	const textElement = getByText(/coming soon/i);
	expect(textElement).toBeInTheDocument();
});

test("renders just wait", () => {
	const { getByText } = render(<App />);
	const textElement = getByText(/Just wait/i);
	expect(textElement).toBeInTheDocument();
});
