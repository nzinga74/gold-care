import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
		
		body{
			background-color: #fff;
		}
		*{
			padding: 0px;
			margin: 0px;
			font-family: 'Inter', sans-serif;
			box-sizing:border-box ;
		}
		h1, h2,span{
			color:#353551 ;
			
		}
		.layout-container {
			max-width: 1280px ;
			margin: 0 auto ;
			padding: 0 2% ;
		}
`;
