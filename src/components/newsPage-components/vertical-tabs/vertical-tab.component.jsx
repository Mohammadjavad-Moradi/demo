import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectTitles, selectLinkUrls, selectPreviews } from '../../../redux/announcements/announcements.selector';

import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import TitleContainer from '../../atom-components/title-container/title-container.component';
import CustomButton from '../../atom-components/custom-button/custom-button.component';

import { TabsContainer, 
  VerticalTabsContainer, 
  TabPanelContainer, 
  LinkContainer,  
  TabContainer,
  ButtonContainer 
} from './vertical-tabs.styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </TabPanelContainer>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = ({ titles, linkUrls, previews, history }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <TitleContainer name='News Categories' color='grey' />
      <VerticalTabsContainer>
        <TabsContainer
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {
            titles.map((item, index) => (
              <TabContainer key={index} label={item} {...a11yProps(item.index)} />
            ))
          }
        </TabsContainer>
        {
          previews.map((item, inde) => (
            <TabPanel value={value} index={inde} key={inde}>
              {item.map((content, id) => (
                <div key={id}>
                  <LinkContainer  onClick={() => history.push(`${linkUrls[inde]}/${content.id}`)}>{content.title}</LinkContainer>
                  <Divider />                
                </div>
              ))}
              <ButtonContainer>
                <CustomButton variant='contained' color='secondary' component='link' to={linkUrls[inde]} >View All Titles</CustomButton>  
              </ButtonContainer>
            </TabPanel>
          ))
        }
      </VerticalTabsContainer>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  titles: selectTitles,
  linkUrls: selectLinkUrls,
  previews: selectPreviews
})
 
export default withRouter(connect(mapStateToProps)(VerticalTabs));