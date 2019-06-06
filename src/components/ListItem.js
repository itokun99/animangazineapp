import React from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from '../styles/Styles';

const ListItem = (props) => {
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={AppStyle.sidebar.list}>
                <View style={AppStyle.sidebar.listIcon}><Icon name={props.icon} size={24} color="#aaa" /></View>
                <Text style={AppStyle.sidebar.listTitle}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ListItem;