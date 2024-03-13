import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
        --dark-100: #F3F3F3;
        --dark-400: #767676;

        --dark-200: #E2E2E2;
        --dark-300: #6A6A6A;
        --dark-500: #191919;
        --dark-900: #020202;

        --dark-600: #171314;
        --dark-700: #130D0E;
        --dark-800: #0F080A;

        --purple-500: #bf59fd;

        --blue-100: #D0F8FD;
        --blue-200: #A3EBFC;
        --blue-300: #79D8FA;
        --blue-400: #5AC4F7;
        --blue-500: #2DA3F4;
        --blue-600: #217CCC;
        --blue-700: #185AA6;
        --blue-800: #113F82;
        --blue-900: #0D2D69;

        --yellow-100: #FFFACA;
        --yellow-200: #FFF498;
        --yellow-300: #FFEE6B;
        --yellow-400: #FFE74F;
        --yellow-500: #FFDD35;
        --yellow-600: #D6B62C;
        --yellow-700: #AE9223;
        --yellow-800: #88711B;
        --yellow-900: #6F5A16;

        --red-100: #FFE1DB;
        --red-200: #FEBFB8;
        --red-300: #FE9796;
        --red-400: #FE7D86;
        --red-500: #FE5770;
        --red-600: #D53F62;
        --red-700: #AD2C55;
        --red-800: #871D48;
        --red-900: #6E1441;

        --green-100: #EEFAC8;
        --green-200: #DBF598;
        --green-300: #BAE468;
        --green-400: #97CB47;
        --green-500: #6BAC29;
        --green-600: #559022;
        --green-700: #41761C;
        --green-800: #305D16;
        --green-900: #254C12;

        --green: #BAE468;
        --ligth-green: #A9C58E;
        --dark-green: #254C12;

        --blue: #088CE8;
        --ligth-blue: #9DD7FF;

        --pink: #FE7D86;
        --ligth-pink: #FFC8C8;

        --red: #f20f4b;

        --white: #FFFFFF;

        --dark-gray: #767676;
        --ligth-gray: #ACACAC;
        --toastify-color-error: #BF59FD;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;

        ::-webkit-scrollbar-track {
            background-color: transparent;
        }

        ::-webkit-scrollbar {
            width: 0.5vh;
            height: 0.5vh;
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--purple-500);
        }
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: var(--dark-500);
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        border: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active
    {
        -webkit-animation-delay: 1s;
        -webkit-animation-name: autofill;
        -webkit-animation-fill-mode: both;
        box-shadow: 0 0 0 30px #020202 inset ;
    }
    input:-webkit-autofill
    {
        -webkit-text-fill-color: #FFFFFF !important;
    }
`;

export default GlobalStyle;
