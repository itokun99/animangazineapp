import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from '../styles/Styles';
import { GlobalConsumer } from '../context/Context';

class FavoriteIcon extends Component {
    constructor(props){
        super(props);
        const anime = this.props.navigation.state.params.data;
        this.state = {
            isFavorite : false,
            anime : anime
        }
    }

    toggleFavorite = () => {
        let favoriteList = this.props.globalState.favoriteList;
        let anime = this.state.anime
        let hasList = false;
        favoriteList.map((value, index) => {
            if(value.anime_id === anime.anime_id){
                hasList = true;
            }
            return hasList;
        })
        let action = {};
        if(hasList){
            action = {
                type : "REMOVE_FAVORITE",
                data : anime
            }
        } else {
            action = {
                type : "ADD_FAVORITE",
                data : anime
            }
        }
        this.setState({
            isFavorite : !this.state.isFavorite
        }, () => {
            // console.warn(action)
            this.props.globalAction(action);
        })
    }

    checkFavorite = () => {
        let anime = this.state.anime;
        let favoriteList = this.props.globalState.favoriteList;
        let isFavorite = this.state.isFavorite;
        favoriteList.map((value, index) => {
            if(value.anime_id === anime.anime_id){
                isFavorite = true;
            }
            return true;
        })
        this.setState({
            isFavorite : isFavorite
        })
    }

    componentDidMount(){
        this.checkFavorite()
    }

    render(){
        return(
            <TouchableOpacity onPress={this.toggleFavorite} style={AppStyle.favoritIcon.wrapper}>
                {
                    this.state.isFavorite ? (<Icon name="star" size={28} color="#fff" />) : (<Icon name="star-o" size={28} color="#fff" />)
                }
            </TouchableOpacity>
        )
    }
}



export default GlobalConsumer(FavoriteIcon);