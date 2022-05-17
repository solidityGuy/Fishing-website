import React from 'react';
import {
    NavWrap,
    NavbarTitle,
    ElemWrap,
    NavElem,
    RightWrap
} from './Navbar'

const Navbar = () => {

    return(
        <>
        <NavWrap>
            <NavbarTitle>Pesca Produtos</NavbarTitle>
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