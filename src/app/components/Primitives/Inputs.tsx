import styled, { css } from "styled-components";

const style = css`
  width: 50%;
  margin: 10px 0;
  font-size: 1.3em;
  padding: 10px;
  background: none;
  outline: none;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  color: var(--text-color);
  font-family: inherit;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const TextInput = styled.input`
  ${style}
`;

export const TextArea = styled.textarea`
  ${style}
`;