import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavWrap = styled.nav`
        display: flex;
        justify-content: space-between;
        background-color: #1269dd;
`;

export const NavbarTitle = styled.h1`
        font-size: 2rem;
        color: white;
        margin: 10px;
        margin-left: 40px;
`;

export const ElemWrap = styled.div`
        margin-right: 40px;
        border-bottom: 3px solid #1269dd;
`;

export const NavElem = styled(Link)`
        color: white;
        font-size: 1.2rem;
        text-decoration: none;

        padding-bottom: 16px;

        &:hover {
                border-bottom: 3px solid black;
        }
`;

export const RightWrap = styled.div`
        display: flex;
        align-items: center;
`;