import { useState } from "react";
import { FooterStyle } from "./styles/Footer.styled";
import { Flex } from "./styles/Footer.styled";
import { Rings } from "./styles/Footer.styled";
import Nav from "./Nav";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [blur, setBlur] = useState(false);

  function handleBlur() {
    setBlur(true);
  }

  function handleChange() {
    setBlur(false);
  }

  return (
    <FooterStyle>
      <Flex>
        <div id="contact">
          <p>Contact</p>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form>
          <input type="text" placeholder="NAME" required />
          <input
            type="email"
            placeholder="EMAIL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            onFocus={handleChange}
            required
          />
          {inputValue &&
            !blur &&
            (!inputValue.includes("@") ||
              (inputValue.includes("@") &&
                inputValue.charAt(inputValue.length - 1) === "@") ||
              (inputValue.includes(".") &&
                inputValue.charAt(inputValue.length - 1) === ".")) && (
              <span>Sorry, invalid format here</span>
            )}
          <textarea type="textarea" placeholder="MESSAGE" required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </Flex>
      <Rings>
        <img src="./images/pattern-rings.svg" alt="rings" />
      </Rings>
      <Nav footer />
    </FooterStyle>
  );
}
