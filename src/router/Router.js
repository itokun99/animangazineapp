import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Home from '../containers/screens/Home';
import AppStyle from '../styles/Styles';
import DrawerIcon from '../components/DrawerIcon';
import Detail from '../containers/screens/Detail';
import {fromRight} from 'react-navigation-transitions';

const HomeStack = createStackNavigator({
    Home : { 
        screen : Home,
        navigationOptions : ( navigation ) => ({
            title : "Anime Mangazine",
            headerLeft :  <DrawerIcon {...navigation} />
        })
    },
    Detail : {
        screen : Detail,
        navigationOptions : ( navigation ) => ({
            title : "Detail",
        })
    }
}, {
    defaultNavigationOptions : ( navigation ) => ({
        headerStyle : {
            backgroundColor : AppStyle.color.base
        },
        headerTintColor : AppStyle.color.white,
    }),
    transitionConfig : () => fromRight(300)
})

const AppDrawer = createDrawerNavigator({
    Home : HomeStack
})

const AppSwitcher = createSwitchNavigator({
    App : AppDrawer
})

const Navigation = createAppContainer(AppSwitcher);

export default Navigation;