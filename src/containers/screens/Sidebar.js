import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyle from '../../styles/Styles';
import ListItem from '../../components/ListItem';

class Sidebar extends Component {
    constructor(props){
        super(props);
        // console.warn(props);
    }
    navigateTo = (screen, params) => {
        this.props.navigation.navigate(screen);
    }
    render(){
        return(
            <ScrollView style={AppStyle.sidebar.container}>
                <View style={AppStyle.sidebar.header}>

                </View>
                
                <View style={AppStyle.sidebar.menu}>
                    <ListItem title="Dashboard" icon="home" onPress={() => this.navigateTo('Home')} /> 
                    {/* <ListItem title="Anime List" icon="th-list" onPress={() => this.navigateTo('AnimeList')} />  */}
                    <ListItem title="Favorite" icon="star" onPress={() => this.navigateTo('Favorite')} />
                    <ListItem title="Riwayat" icon="clock-o" onPress={() => this.navigateTo('History')} />
                    <View style={{height : 1, backgroundColor : "#ddd", marginVertical : 2}}></View>
                    <ListItem title="Request/Report" icon="comment-o" /> 
                    <ListItem title="Feedback" icon="thumbs-o-up" /> 
                    <ListItem title="About" icon="info-circle" /> 
                </View>
            </ScrollView>
        )
    }
}

export default Sidebar;