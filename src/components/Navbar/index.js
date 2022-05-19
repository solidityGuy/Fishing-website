import React from 'react';
import {
    NavWrap,
    TitleWrap,
    NavbarTitle,
    SiteIcon,
    ElemWrap,
    NavElem,
    RightWrap
} from './Navbar'

const Navbar = () => {

    return(
        <>
        <NavWrap>
            <TitleWrap to="/">
                <SiteIcon src="/fishing_logo.png" />
                <NavbarTitle>Pesca Produtos</NavbarTitle>
            </TitleWrap>
            <RightWrap>
                <ElemWrap>
                    <NavElem to="/">Sobre nós</NavElem>
                </ElemWrap>
                <ElemWrap>
                    <NavElem to="/products">Produtos</NavElem>
                </ElemWrap>
                <ElemWrap>
                    <NavElem to="/">Contato</NavElem>
                </ElemWrap>
            </RightWrap>
        </NavWrap>
        </>
    )
}

export default Navbar;