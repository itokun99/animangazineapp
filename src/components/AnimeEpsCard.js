import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyle from '../styles/Styles';
const AnimeEpsCard = (props) => {
    return (
        <TouchableOpacity style={{ ...AppStyle.animeCard.card, borderRadius: 6, overflow: "hidden", ...props.style }}>
            <View style={{ position: "relative" }}>
                <Image style={AppStyle.animeCard.cardPlayThumb} source={{ uri: props.data.anime_thumb }} resizeMode="stretch" />
                <Text style={AppStyle.animeCard.epsTag}>{props.data.anime_play_title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AnimeEpsCard;