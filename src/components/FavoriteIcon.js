import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FavoriteIcon extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFavorite : false,
        }
    }
    render(){
        return(
            <View>
                {
                    this.state.isFavorite ? (<Icon name="star" size={32} color="#fff" />) : (<Icon name="star-o" size={32} color="#fff" />)
                }
            </View>
        )
    }
}

export default FavoriteIcon;