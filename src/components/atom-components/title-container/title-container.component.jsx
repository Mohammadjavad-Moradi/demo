import React from 'react';

import { TitleBar, TitleName, TitleNameLink } from './title-container.styles';

const TitleContainer = ({name, linkUrl, color}) => (
    <TitleBar color={color}>
        {
            linkUrl ? <TitleNameLink to={linkUrl}>{name}</TitleNameLink> : <TitleName>{name}</TitleName>
        }
    </TitleBar>
);

export default TitleContainer;