import React, { useEffect, useState, useRef } from 'react';
import {
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    Carrousel,
    Item,
    CarrImgWrap,
    CarrImg,
    CarrInfo,
    Name,
    OldPrice,
    NewPrice,
    Buttons,
    Button,
    ScrollIcon
} from './HeroElements';

const HeroSection = () => {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:9000/promo')
        .then((response) => response.json())
        .then(setData);
    }, []);

const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
}

const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
}

if(!data || !data.length) return null;

    return (
        <>                    
            <HeroContainer className="carrouselContainer">
                <HeroTitle>Aproveite nossas promoções</HeroTitle>
                <HeroSubtitle>Os preços mais baixos de todos os 5 oceanos</HeroSubtitle>
                <Carrousel className="carrousel" ref={carousel}>
                    {data.map((item) => {
                        console.log(item);
                        const{id, name, newPrice, price, image} = item;
                    return(
                    <Item key={id}>
                        <CarrImgWrap>
                            <CarrImg src={image} alt={name} height="250px" width="250px"/>
                        </CarrImgWrap>
                        <CarrInfo>
                            <Name className="carrouselText">{name}</Name>
                            <OldPrice className="carrouselText">{price}</OldPrice>
                            <NewPrice className="carrouselText">{newPrice}</NewPrice>
                        </CarrInfo>
                    </Item>
                    );
                })}
                </Carrousel>
                <Buttons>
                    <Button onClick={handleLeftClick}>
                        <ScrollIcon className="left" src="/216151_right_chevron_icon.png"/>
                    </Button>
                    <Button onClick={handleRightClick}>
                        <ScrollIcon src="216151_right_chevron_icon.png"/>
                    </Button>
                </Buttons>
            </HeroContainer>
        </>
    )
}

export default HeroSection;