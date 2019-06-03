import React, { Component } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import AppStyle from '../../styles/Styles';

class Detail extends Component {
    constructor(props){
        super(props);
        
        const navigation = props.navigation
        let currentData = navigation.state.params.data
        let poster = currentData.anime_poster;
        let cover = currentData.anime_play_data.play360.length > 0 ? currentData.anime_play_data.play360[0].anime_thumb : poster ;
        this.state = {
            anime : currentData,
            cover : cover,
            poster : poster,
            playData : currentData.anime_play_data
        }
    }

    storePropsData = () => {
        let data = this.props.navigation.state.params.data;
        let poster = data.anime_poster
        let cover = poster;
        let playData = data.anime_play_data;
        if(data.anime_play_data.play360.length > 0){
            cover = data.anime_play_data.play360[0].anime_thumb
        }
        this.setState({
            anime : data,
            cover : cover,
            poster : poster,
            playData : playData
        })
    }

    loadComponentData = () => {
        this.storePropsData()
    }

    componentDidMount(){

    }

    render(){
        return(
            <ScrollView style={AppStyle.detail.container}>
                <SafeAreaView>
                    <View style={AppStyle.detail.section}>
                        <View style={AppStyle.detail.sectionHeader}>
                            <Image 
                                source={{uri : this.state.cover}}
                                style={AppStyle.detail.cover}
                                resizeMode='cover'
                                blurRadius={1.2}
                            />
                            <Image
                                source={{uri : this.state.poster}}
                                style={AppStyle.detail.poster}
                                resizeMode="contain"
                            />
                            <View style={AppStyle.detail.floatingTitle}>
                                <Text style={AppStyle.detail.floatingTitleText}>{this.state.anime.anime_title}</Text>
                            </View>
                        </View>
                        <View style={AppStyle.detail.sectionBody}>
                            
                        </View>
                        <View style={AppStyle.detail.sectionFooter}>

                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default Detail;