import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
        --white: #FFFFFF;

        --gray-100: #C4C4CC;
        --gray-200: #7E7E7E;
        --gray-500: #505059;
        --gray-600: #4B4B50;
        --gray-700: #1A1A1E;
        --gray-800: #121214;

        --dark-100: #F3F3F3;
        --dark-400: #767676;

        --dark-200: #E2E2E2;
        --dark-300: #6A6A6A;
        --dark-500: #191919;
        --dark-550: #1A1A1E;
        --dark-900: #020202;

        --dark-600: #171314;
        --dark-700: #130D0E;
        --dark-800: #0F080A;

        --purple-500: #bf59fd;

        --red: #f20f4b;
        --red-600: #D53F62;

        --white: #FFFFFF;

        --toastify-color-error: #BF59FD;

        --font-xxxxl: clamp(1.75rem, 5vw, 3.75rem); // 60px novo
        --font-xxxl: clamp(1rem, 20vw, 2.5rem); // 40px
        --font-xxl: clamp(1.5rem, 7vw, 2.25rem); // 36px
        --font-xl: clamp(1.5rem, 5vw, 2rem); // 32px
        --font-l: clamp(0.2rem, 4vw , 1.5rem); // 24px
        --font-md: clamp(0.875rem, 5vw , 1.125rem); //18px novo
        --font-n: clamp(0.9rem, 2vw , 1rem); // 16px
        --font-sm: clamp(0.9rem, 2vw , 0.875rem); // 14px
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;

        ::-webkit-scrollbar-track {
            background-color:
            #352043;
        }

        ::-webkit-scrollbar {
            width: 0.5vh;
            height: 0.5vh;
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--purple-500);
            border-radius: 10px;
        }
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: var(--dark-900);
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        font-family: "Noto Sans", sans-serif
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
`

export default GlobalStyle
