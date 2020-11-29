import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like  />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {

	it("Defaults likes", () => {
      const text = container.querySelector("p");
	  expect(text.innerHTML).toBe("Likes: 0");
    });
    
    it("Increment button", () => {
        const button = container.querySelector("#increment");
        const text = container.querySelector("p");
        let ant = text.textContent.split(": ");
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(text.textContent).toBe("Likes: "+(parseInt(ant[1])+1));
      });

      it("decrement button", () => {
        const button = container.querySelector("#decrement");
        const text = container.querySelector("p");
        let ant = text.textContent.split(": ");
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        
        expect(text.textContent).toBe("Likes: "+(parseInt(ant[1])-1));
      });
      
});