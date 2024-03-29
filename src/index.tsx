import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, input, textarea,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video,button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.2;
    vertical-align: baseline;
    font-family: 'Roboto', sans-serif;
    color: white;
    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    height: 5px;     
    display: none;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;    
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 20px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);
