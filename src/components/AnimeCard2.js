import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyle from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimeCard2 = (props = {}) => {
    let currentEps = "No Episode";
    let currentPic = "";
    if(props.data.anime_play_data.play360.length > 0){
        currentEps = props.data.anime_play_data.play360[0].anime_play_title;
        currentPic = props.data.anime_play_data.play360[0].anime_thumb
    }
    return(
        <TouchableOpacity onPress={() => props.onPress(props.data)} >
            <View style={AppStyle.animeCard.card}>
                <Image source={{uri : currentPic}} style={AppStyle.animeCard.cardPic2} resizeMode="cover" />
                <View style={{...AppStyle.animeCard.startTag, paddingHorizontal : 14, top : 10, right :10}}>
                    <Text style={{color : "#fff", fontWeight : "600"}}>{currentEps}</Text>
                </View>
                <View style={AppStyle.animeCard.cardBody}>
                    <View style={AppStyle.animeCard.cardBodyRow}>
                        <Text style={AppStyle.animeCard.cardTitle2}>{props.data.anime_title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default AnimeCard2;