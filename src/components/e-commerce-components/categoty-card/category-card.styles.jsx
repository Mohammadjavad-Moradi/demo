import styled from 'styled-components';

export const CategoryCardContainer = styled.div`
    padding: 1em;
`;

export const ImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    height: 150px;
    cursor: pointer;
    &:hover {
        box-shadow: 5px 6px 16px 0px rgba(0,0,0,0.55);
    }
`;

export const TitleContainer = styled.div`
    margin: 1em auto;
    text-align: center;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;