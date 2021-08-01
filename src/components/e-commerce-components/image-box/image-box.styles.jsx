import styled from 'styled-components';

export const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImageToShow = styled.div`
    display: flex;
    justify-content: center;
`;

export const SlideBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 50px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    height: auto;
    img {
        margin: .1em;
    }
`;