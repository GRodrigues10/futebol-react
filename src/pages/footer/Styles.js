import styled from 'styled-components'

export const FooterStyles = styled.footer `
    padding: 20px;
    background-color: #111111ff ;
    color: white;
    font-size: 1.4rem;
    position: relative;
    bottom: 0;
    text-align: center;
    transition: .4s ease;


    @media screen and (max-width:930px) {
        font-size: 1.2rem;
        transition: .4s ease;
    
    }

     @media screen and (max-width:768px) {
        font-size: 1rem;
    }
`