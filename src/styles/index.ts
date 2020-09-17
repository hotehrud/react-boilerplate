import styled, { createGlobalStyle } from 'styled-components';
import { device } from './device';
import { headerHeight, sidebarWidth } from './constants';
import { bgColors, fontColors } from './colors';

export const GlobalStyle = createGlobalStyle`
    body,
    button,
    dd,
    dl,
    dt,
    fieldset,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    legend,
    li,
    ol,
    p,
    select,
    table,
    td,
    textarea,
    th,
    ul {
      margin: 0;
      padding: 0;
    }
    
    html,
    body {
      height: 100%;
      background: ${bgColors.default};
      color: ${fontColors.black};
      //overflow: hidden;
    }
    
    iframe {
      border-width: 0;
    }
    
    html {
      font-family: sans-serif;
      font-size: 16px;
    }
    
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    a {
      color: inherit;
    }
    
    a,
    u {
      text-decoration: none;
    }
    
    *:focus {
      outline: none;
    }
    
    button {
      border: 0 none;
      border-radius: 0;
      background: transparent;
      cursor: pointer;
      appearance: button;
      -moz-appearance: button; /* Firefox */
      -webkit-appearance: button; /* Safari and Chrome */
    }
    
    #root {
      position: relative;
      min-height: 100%;
    }
`;

export const Container = styled.div`
    position: relative;
    padding: 5px 10px;
    &:before {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        height: ${headerHeight};
    }
    @media ${device.laptop} {
        margin-left: ${sidebarWidth};
        padding: 10px 20px;
        margin-top: 0px;
        &:before {
            display: none;
        }
    }
    > div {
        position: relative;
    }
`;
