import styled from 'styled-components'

export const HeroContainer = styled.div`
    max-width: 75vw;
    margin-left: 250px;
`
export const Carrousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-top: 30px;

    &:-webkit-scrollbar {
        display:none;
    }
    
`

export const Item = styled.div`
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 16px;
    flex: none;
`

export const CarrImgWrap = styled.div`    
`

export const CarrImg = styled.img`
    object-fit: cover;    
`

export const CarrInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Name = styled.span`
    margin-top: 5px;
    font-weight: bold;
    font-size: 1.2rem;
`

export const OldPrice = styled.span`
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #1269dd;
`

export const NewPrice = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
`

export const Buttons = styled.div`
    text-align: center;
    width: 100%;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;    
`;

export const ScrollIcon = styled.img`
`;

export const HeroTitle = styled.h1`
margin-top: 100px;
text-align: center;
font-size: 2.5rem;
`

export const HeroSubtitle = styled.h2`
text-align: center;
font-weight: normal;
font-size: 1rem;
`