import styled from 'styled-components';

export const Cardfourcss = styled.section`

    article{
        display: grid;
        grid-template-columns: 2fr 2fr;
        gap: 20px;
        padding: 20px;
    }

    img{
        width: 100%;
    }

    .item-1{
        margin-top: 80px;
    }
    .item-2{
        margin-top: -80px;
    }
`;