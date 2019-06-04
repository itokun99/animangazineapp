import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppStyle from '../styles/Styles';

const DrawerIcon = (props) => {
    // console.warn(props)
    return (
        <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={AppStyle.drawerIcon.wrapper}>
            <View style={AppStyle.drawerIcon.drawerItem}>
            </View>
        </TouchableOpacity>
    )
}

export default DrawerIcon;