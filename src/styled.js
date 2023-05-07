
import styled from "styled-components";

export const GrupoFrases = styled.div`
    margin: 20px;
    text-align: center;
`;

export const Forma = styled.div`
    border-radius: 30px;
    border: 3px solid black;
    margin: 20px 0;
    background-color: ${({ isRight }) => isRight ? 'red' : 'white'}
`;

export const Btn = styled.button`
    width: 50%;
    height: 60px;
    background-color: #c1c1c1;
    font-size: large;
    ;
`;