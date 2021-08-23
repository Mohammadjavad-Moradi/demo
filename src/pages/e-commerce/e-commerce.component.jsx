import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ParallaxProvider } from 'react-scroll-parallax';

import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shop/shop.selector';
import { selectCurrentUser } from '../../redux//user/user.selectors';

import CategoryDetails from '../../components/e-commerce-components/category-details/category-details.component';
import CatagoryBox from '../../components/e-commerce-components/category-box/category-box.component';
import OfferBox from '../../components/e-commerce-components/offer-box/offer-box.component';
import BriefList from '../../components/e-commerce-components/briefList/briefList.component';
import ParallaxImage from '../../components/e-commerce-components/parallax-image/parallax-image.component';
import ItemDetails from '../../components/e-commerce-components/item-details/item-details.component';
import ShoppingBag from '../../components/e-commerce-components/shopping-bag/shopping-bag.component';

const ECommerce = ({shopData, match, currentUser}) => {
    
    const ECommerceMainPage = () => (
        <ParallaxProvider>
            <CatagoryBox data={shopData}/>
            <OfferBox />
            <BriefList data={shopData.men}/>
            <ParallaxImage />
            <BriefList data={shopData.boys}/>                          
        </ParallaxProvider>
    );
    
    return (
        <Switch>       
            <Route exact path={`${match.path}`} render={(props) => <ECommerceMainPage {...props} />} />
            <Route exact path={`${match.path}/shoppingbag`} render={(props) => currentUser ? <ShoppingBag {...props} /> : <Redirect to={`${match.path}`} /> }/>
            <Route exact path={`${match.path}/:gender`} render={(props) => <CategoryDetails data={shopData} {...props} />}/> 
            <Route path={`${match.path}/:gender/:id`} render={(props) => <ItemDetails data={shopData} {...props} />}/>       
        </Switch>
    );
};

const mapStateToProps = createStructuredSelector({
    shopData: selectShopData,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(ECommerce);