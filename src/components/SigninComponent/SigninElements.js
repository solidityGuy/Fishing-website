import styled from 'styled-components';

export const SigninContainer = styled.div`
    width: 50%;    
    height: 300px;
    border: 3px solid #1269dd;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
`;

export const Labels = styled.span`
    padding-top: 15px;
    padding-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    color: #1e1e1e;
`;

export const InputField = styled.input`
    border-radius: 10px;
    border: 2px solid #1269dd;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    color: #1e1e1e;

    &:focus {
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    width: 30%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;