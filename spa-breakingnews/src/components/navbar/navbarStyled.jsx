import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /*position: fixed;
    top: 0; */
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    `;

export const ImgLogo = styled.img`
    align-items: center;
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;    
`;

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    
    button{
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {
        background-color: #757575;
        color: #f5f5f5;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: .6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: .3rem;  
    }

    input:focus {
        border: 1px solid #0bade3;
    }
`;


export const ErrorSpan = styled.span`
    background-color: #ffcdcd;
    color: #9e0000;
    padding: .5rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    border-radius: 7px;
`;