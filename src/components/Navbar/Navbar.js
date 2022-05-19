import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavWrap = styled.nav`
        display: flex;
        justify-content: space-between;
        background-color: #1269dd;
`;

export const TitleWrap = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
`;

export const NavbarTitle = styled.h1`
        font-size: 2rem;
        color: white;
        margin: 10px;
`;

export const SiteIcon = styled.img`
        height: 60px;
        border-radius: 60px;
        margin: 20px;
`;

export const ElemWrap = styled.div`
        margin-right: 40px;
        border-bottom: 3px solid #1269dd;
`;

export const NavElem = styled(Link)`
        color: white;
        font-size: 1.3rem;
        text-decoration: none;

        padding-bottom: 38px;

        &:hover {
                border-bottom: 3px solid #ffff;
        }
`;

export const RightWrap = styled.div`
        display: flex;
        align-items: center;
`;