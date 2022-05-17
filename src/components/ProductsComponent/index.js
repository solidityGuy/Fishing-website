import React, { useState, useRef, useEffect } from 'react';
import {Button} from '../ButtonElement';
import { ProductsContainer, SearchContainer, SearchBox, ItemsContainer, Item, ItemInfo, Name, Price, ImgWrap, Img, ButtonContainer } from './ProductsElements';
import { FcSearch } from 'react-icons/fc';

export const ProductsComponent = () => {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/carretilhas.json')
        .then((response) => response.json())
        .then(setData);
    }, []);


    return(
        <>
            <ProductsContainer>
                <SearchContainer>
                    <SearchBox placeholder="Pesquise produtos"/>
                    <FcSearch style={{height:20, width:20, paddingRight: 10}}/>
                </SearchContainer>
                <ItemsContainer>
                    {data.map((item) => {
                        const{id, name, price, oldPrice, image} = item;
                    return(
                    <Item key={id}>
                        <ImgWrap>
                            <Img src={image} alt={name} height="250px" width="250px"/>
                        </ImgWrap>
                        <ItemInfo>
                            <Name className="carrouselText">{name}</Name>
                            <Price className="carrouselText">{price}</Price>
                        </ItemInfo>
                        <ButtonContainer>
                            <Button darkTextButton={false}>Compre agora!</Button>
                        </ButtonContainer>
                    </Item>
                    );
                    })};
                </ItemsContainer>
            </ProductsContainer>
        </>
    );
}