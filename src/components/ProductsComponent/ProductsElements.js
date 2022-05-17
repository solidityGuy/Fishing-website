import styled from 'styled-components';

export const ProductsContainer = styled.div`
    width: 80%;    
    height: auto;
    border: 1px solid #e1e1e1;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 50%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 2px solid #1269dd;
    align-items: center;
    margin-bottom: 30px;
`;

export const SearchBox = styled.input`
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    color: #1e1e1e;

    &:focus {
        outline: none;
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

export const Item = styled.div`
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 16px;
    flex: none;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Name = styled.span`
    margin-top: 5px;
    font-weight: bold;
    font-size: 1.2rem;
`;

export const Price = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
`;

export const ImgWrap = styled.div`
`;

export const Img = styled.img`
`;

export const ButtonContainer = styled.div`
    width: 60%;
    margin: 20px auto;
`;