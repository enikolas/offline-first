import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,100;1,700&display=swap');

	* {
		box-sizing: border-box;
	}

  html, body {
    margin: 0;
		padding: 0;
		font-size: 10px;
		font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
