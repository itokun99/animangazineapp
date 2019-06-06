import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyle from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimeCard = (props = {}) => {
    let currentEps = "No Episode";
    if(props.data.anime_play_data.play360.length > 0){
        currentEps = props.data.anime_play_data.play360[0].anime_play_title
    }
    return(
        <TouchableOpacity onPress={() => props.onPress(props.data)} >
            <View style={AppStyle.animeCard.card}>
                <Image source={{uri : props.data.anime_poster}} style={AppStyle.animeCard.cardPic} resizeMode="cover" />
                <View style={AppStyle.animeCard.startTag}>
                    <Icon name="star" size={14} color="#fff" style={{marginRight : 5}} />
                    <Text style={{color : "#fff", fontWeight : "600"}}>{props.data.anime_score}</Text>
                </View>
                <View style={AppStyle.animeCard.cardBody}>
                    <Text style={AppStyle.animeCard.cardTitle}>{props.data.anime_title}</Text>
                    {/* <View style={{flexDirection : "row"}}>
                        <Text style={AppStyle.animeCard.cardTag}>{currentEps}</Text>
                    </View> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default AnimeCard;