import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai'

export const Container = styled.div`
    flex: 8;
    padding: 0 32px;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 6px;
`;

export const Topside = styled.div `
    > header {
        display: flex;
        align-items: center;
    }

    > a {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 600;
        color: var(--link);

        text-decoration: none;

        &:focus, 
        &:hover{
            text-decoration: underline;
        }
    }

    > p {
        margin: 8px 0 16px;
        font-size: 12px;
        color: var(--gray);
        letter-spacing: 0.1px;
    }
`;

const iconCSS = css `
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine) `
    ${iconCSS}
`;

export const Botside = styled.div `
    > ul {
        display: flex;
        align-items: center;

        > li {
            display: flex;
            align-items: center;

            margin-right: 16px;

            > span {
                margin-left: 5px;
                font-size: 12px;
                color: var(--gray);
            }
        }
    }
    .language {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;

        &.order{
            background: var(--other-languague);
        }
        &.javascript{
            background: var(--javascript);
        }
        &.typescript{
            background: var(--typescript);
        }
        &.python{
            background-color: #3572A5;
        }
        &.java{
            background-color: #b07219;
        }
        &.ruby{
            background-color: #701516;
        }
        &.php{
            background-color: #4F5D95;
        }
        &.html{
            background-color: #e34c26;
        }
        &.shell{
            background-color: #89e051;
        }
        &.stylus{
            background-color: #ff6347;
        }
        &.c{
            background-color: #555555;
        }
        &.go{
            background-color: #00ADD8;
        }
        &.dockerfile{
            background-color: #384d54;
        }
        &.vim{
            background-color: #199f4b;
        }
        &.css{
            background-color: #563d7c;
        }
    }

`;

export const StarIcon = styled(RiStarLine) `
    ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork) `
    ${iconCSS}
`;

