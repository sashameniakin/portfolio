import { useState } from "react";
import { FooterStyle } from "./styles/Footer.styled";
import { Flex } from "./styles/Footer.styled";
import { Rings } from "./styles/Footer.styled";
import Nav from "./Nav";

export default function Footer() {
  const [error, setError] = useState(true);

  function errorset() {
    setError(true);
  }

  function style(e) {
    e.target.setCustomValidity("");
  }

  return (
    <FooterStyle>
      <Flex>
        <div>
          <p>Contact</p>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form>
          <input type="text" placeholder="NAME" />
          <input
            type="email"
            placeholder="EMAIL"
            onInvalid={errorset}
            pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
          />
          {error && <span error={error}>Sorry, invalid format here</span>}
          <textarea type="textarea" placeholder="MESSAGE" />
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
