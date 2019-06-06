import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation';
import Home from '../containers/screens/Home';
import AppStyle from '../styles/Styles';
import DrawerIcon from '../components/DrawerIcon';
import Detail from '../containers/screens/Detail';
import {fromRight} from 'react-navigation-transitions';
import Sidebar from '../containers/screens/Sidebar';
import FavoriteIcon from '../components/FavoriteIcon';
import Favorite from '../containers/screens/Favorite';
import AnimeList from '../containers/screens/AnimeList';
import History from '../containers/screens/History';
import PlayerScreen from '../containers/screens/PlayerScreen';


const HomeTabs = createMaterialTopTabNavigator({
    Home : { 
        screen : Home,
        navigationOptions : ( navigation ) => ({
            title : "Dashboard",
        })
    },
    AnimeList : { 
        screen : AnimeList,
        navigationOptions : ( navigation ) => ({
            title : "Anime List",
        })
    },
}, {
    tabBarOptions : {
        style : {
            backgroundColor : AppStyle.color.base,
        }
    }
})

const HomeStack = createStackNavigator({
    Home : { 
        screen : HomeTabs,
        navigationOptions : ( navigation ) => ({
            title : "Dashboard",
            headerLeft :  <DrawerIcon {...navigation} />,
            headerStyle : {
                backgroundColor : AppStyle.color.base,
                elevation : 0,
                shadowOpacity : 0
            }
        }),
    },
    Detail : {
        screen : Detail,
        navigationOptions : ( navigation ) => ({
            title : "Detail",
            headerRight : <FavoriteIcon {...navigation} />,
            gesturesEnabled : false,
            drawerLockMode : "locked-closed"
        })
    },
    Favorite : { 
        screen : Favorite,
        navigationOptions : ( navigation ) => ({
            title : "Favorite",
            gesturesEnabled : false,
            drawerLockMode : "locked-closed"
        })
    },
    History : { 
        screen : History,
        navigationOptions : ( navigation ) => ({
            title : "Riwayat",
            gesturesEnabled : false,
            drawerLockMode : "locked-closed"
        })
    },
    Player : { 
        screen : PlayerScreen,
        navigationOptions : ( navigation ) => ({
            title : "Player",
            gesturesEnabled : false,
            drawerLockMode : "locked-closed"
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
}, {
    contentComponent : Sidebar,
})

const AppSwitcher = createSwitchNavigator({
    App : AppDrawer
})

const Navigation = createAppContainer(AppSwitcher);

export default Navigation;