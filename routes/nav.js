import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomePage  from '../screens/HomeScreen';
import ProductPage from '../screens/ProductScreen';
import SingleProductPage from '../screens/SingleProductScreen';

const screens =  {
    Home: {
        screen: HomePage
    },
    Product: {
        screen: ProductPage
    },
    SingleProduct: {
        screen: SingleProductPage
    },
};

const nav = createStackNavigator(screens);
export default createAppContainer(nav);