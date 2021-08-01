import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectQuickLinks, selectTabItems } from '../../../redux/header/header.selectors';

import CustomAccordion from '../custom-accordion/custom-accordion.component';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
  IconBottonContainer,
  ArrowBackIcon,
  ListContainer,
  FirstList,
  SecondList,
  ThirdList,
  BackButton,
  ArrowForwardIcon,
  LinkDrawer,
  ListItemIconContainer
} from './swipeable-drawer.styles';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SwipeableTemporaryDrawer = ({ items, quickLinks }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const classes = useStyles();
  const [state, setState] = useState(false);
  const [openFirstDrawer, setOpenFirstDrawer] = useState(false);
  const [indexValue, setIndexValue] = useState(null);
  const [openSecondDrawer, setOpenSecondDrawer] = useState(false);
  const [secondIndexValue, setSecondIndexValue] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const handleFirstDrawer = (index) => {
    setOpenFirstDrawer(true);
    setIndexValue(index);
  }

  const handleSecondDrawer = (id) => {
    setOpenSecondDrawer(true);
    setSecondIndexValue(id);
  }

  const handleCloseAll = () => {
    setOpenFirstDrawer(false);
    setOpenSecondDrawer(false);
  }

  const handleCloseThird = () => {
    setOpenFirstDrawer(true);
    setOpenSecondDrawer(false);
  }

  const menuButton = (option, title) => {
    return (
    <ListItem button onClick={() => option === 'main' ? handleCloseAll() : handleCloseThird()}>
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText>
        {
          option === 'main' ? 'MAIN MENU' : title
        }
      </ListItemText>
    </ListItem>
  )};

  const title = (title) => (
    <ListItem>
      <ListItemText>
        <BackButton>
          {title}
        </BackButton>
      </ListItemText>
    </ListItem>
  );

  const secondList = (items) => (
    items.map((item, index) => (
      <SecondList open={openFirstDrawer} indexvalue={indexValue} key={index} value={index} isopen={openSecondDrawer ? 'true' : undefined}>
        {
          menuButton('main')
        }
        <Divider />
        {
          openFirstDrawer ?
            title(items[indexValue].title)
            : null
        }
        {item.tabContent.map((el, index) => (
          el.linkUrl ?
            <ListItem
              button
              key={index}
              value={index}
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              component={Link}
              to={el.linkUrl}
            >
              <ListItemText>
                <LinkDrawer >{el.name}</LinkDrawer>
              </ListItemText>
            </ListItem>
            :
            <ListItem
              button
              key={index}
              value={index}
              onClick={() => handleSecondDrawer(el.nestedEl.title)}
            >
              <ListItemText>
                {el.nestedEl.title}
              </ListItemText>
              <ListItemIconContainer>
                <ArrowForwardIcon />
              </ListItemIconContainer>
            </ListItem>
        ))}
      </SecondList>
    ))
  );

  const thirdList = (items) => (
    items.map((item) => (
      item.tabContent.map((tabContentItem, id) => (
        tabContentItem.nestedEl ?
          <ThirdList
            key={id}
            isopen={openSecondDrawer ? 'true' : undefined}
            secondindexvalue={secondIndexValue}
            value={tabContentItem.nestedEl.title}>
            {
              menuButton('main')
            }
            <Divider />
            {
              menuButton('second', item.title)
            }
            <Divider />
            {
              title(tabContentItem.nestedEl.title)
            }
            {
              tabContentItem.nestedEl.tabContent.map((ii, indii) => (
                <ListItem
                  button
                  key={indii}
                >
                  <ListItemText>
                    {ii.name}
                  </ListItemText>
                </ListItem>
              ))
            }
          </ThirdList>
          :
          null
      ))
    ))
  )

  const list = (anchor) => (
    <ListContainer
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <FirstList open={openFirstDrawer}>
        {
          title('MAIN MENU')
        }
        <Divider />
        {items.map((item, index) => (
          <ListItem button key={index} onClick={() => handleFirstDrawer(index)}>
            <ListItemText>
              {item.title}
            </ListItemText>
            <ListItemIconContainer>
              <ArrowForwardIcon />
            </ListItemIconContainer>
          </ListItem>
        ))}
        <Divider />
        {
          CustomAccordion(quickLinks)
        }
      </FirstList>
      <Divider />
      {
        secondList(items)
      }
      {
        thirdList(items)
      }

    </ListContainer>
  );

  return (
      <React.Fragment>
        <IconBottonContainer onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconBottonContainer>
        <SwipeableDrawer
          anchor={'left'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS} disableDiscovery={iOS} 
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  quickLinks: selectQuickLinks,
  items: selectTabItems
})

export default connect(mapStateToProps)(SwipeableTemporaryDrawer);