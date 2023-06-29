import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
  }
  svg {
    vertical-align: bottom;
  }

  :root {
    /* Used for texts (+ footer background) */
    --color-granite: #252629;
    /* Used for backgrounds (+ footer text color) */
    --color-foam: #ffffff;
    /* Used for buttons, icons, etc. */
    --color-nemo: #ff4a11;
  }
`;
