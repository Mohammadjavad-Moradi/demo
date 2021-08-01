import React from 'react';

import { LinkDrawer, AccordionSummaryContainer, AccordionDetailsContainer } from './custom-accordion.styles';

import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const CustomAccordion = (items) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div >
            {
                matchesSm ? 
                    <Accordion>
                        <AccordionSummaryContainer
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{items.title}</Typography>
                        </AccordionSummaryContainer>
                        <AccordionDetailsContainer>
                            <List>
                                {
                                    items.content.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText>
                                                <LinkDrawer to={item.linkUrl}>{item.title}</LinkDrawer>
                                            </ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </AccordionDetailsContainer>
                    </Accordion>
                : null
            }
        </div>
    );
}


export default CustomAccordion;