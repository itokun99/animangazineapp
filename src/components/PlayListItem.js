import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

const PlayListItem  = (props) => {
    console.warn(props)
    return(
        <TouchableNativeFeedback>
            <View style={{paddingHorizontal : 24, backgroundColor : "#fff"}}>
                <Text>{props.data.anime_play_title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default PlayListItem;