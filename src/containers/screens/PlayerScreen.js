import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView, StatusBar } from 'react-native';
import AppStyle from '../../styles/Styles';
import PlayListItem from '../../components/PlayListItem';
import Video from 'react-native-af-video-player-kolyde-clone';

class PlayerScreen extends Component {
    constructor(props){
        super(props);
        const navigation = this.props.navigation;
        const anime = navigation.state.params.data;
        const videos = anime.anime_play_data
        const currentVideo = navigation.state.params.currentVideo
        this.state = {
            anime : anime,
            videos : videos,
            currentVideo : currentVideo
        }
    }
    static navigationOptions = ( { navigation } ) => {
        const { state } = navigation
        const header = state.params && (state.params.fullscreen ? undefined : null); 
        return {
            // header
        }
    }

    onFullscreen = (status) => {
        this.props.navigation.setParams({
            fullscreen : !status
        })
    }


    render(){
        let video = this.state.currentVideo;
        let playlist = this.state.videos;
        let anime = this.state.anime;
        console.warn(playlist)
        return(
            <View style={AppStyle.playerScreen.container}>
                <View style={AppStyle.playerScreen.videoSection}>
                    <Video
                        title = {`${this.state.anime.anime_title} | ${video.anime_play_title}`}
                        url={video.anime_play_link}
                        onFullscreen = {(status) => this.onFullscreen(status)}
                        lockPortraitOnFsExit={true}
                    />
                </View>
                <ScrollView contentContainerStyle={AppStyle.playerScreen.playlistSection}>
                    {
                        playlist.play360.length > 0 ? 
                        <FlatList
                            keyExtractor = { item => item.play_id }
                            data = { playlist.play360 }
                            renderItem = {({ item }) => {
                                return(
                                    <PlayListItem data={item} />
                                )
                            }}
                        />
                        :
                        null
                    }
                </ScrollView>
            </View>
        )
    }
}

export default PlayerScreen;