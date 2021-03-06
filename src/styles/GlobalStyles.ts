import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: var(--primary);
    }
    *, button, input{
        border: 0;
        background: none;
        font: 400 16px 'Roboto', sans-serif;
        color: var(--black);
        text-decoration:none;
    }
    ul{
        list-style: none;
    }
    :root{
        --primary: #fff;
        --black: #1b1f23;
        --gray: #586069;
        --gray-light: #6a737d;
        --gray-dark: #24292e;
        --orange: #f9826c;
        --logo: #fff;
        --header: #24292e;
        --username: #666;
        --search: rgba(255, 255, 255, 0.13);
        --search-placeholder: hsla(0, 0%, 100%, .75);
        --icon: #6a737d;
        --link: #0366d6;
        --border: #e1e4e8;
        --ticker: rgba(209,213,218, .5);
        
        --calendar-scale-0: #ebedf0;
        --calendar-scale-1: #9BE9A8;
        --calendar-scale-2: #3FC463;
        --calendar-scale-3: #30A14E;
        --calendar-scale-4: #216E3A;
        --javascript: #f1e05a;
        --typescript: #2b7489;
        --other-language: #8257e5;
        --cor-neon: #25D285;

    }

    .github-image{
        width: 5%;
        left: 65%;
        bottom: 50%;
        position: absolute;
        animation: neon 4s alternate infinite ease-in-out ;
	    --cor-neon: #e1e4e8;
        
    }

    @keyframes neon {
	from {
		filter: drop-shadow(0 0 1px var(--cor-neon));
	}
	to {
		filter: drop-shadow(0 0 30px var(--cor-neon));
	}
}
`;