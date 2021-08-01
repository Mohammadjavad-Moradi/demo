import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export const LinkDrawer = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:visited {
        text-decoration: none;
        color: inherit;
    }
`;

export const AccordionSummaryContainer = styled(AccordionSummary)`
    flex-flow: row-reverse;
    justify-content: space-between !important;
    

    div {
        display: block;
        font-weight: 600;
    }
`;

export const AccordionDetailsContainer = styled(AccordionDetails)`
    overflow-y: auto;
    display: block !important;
`;