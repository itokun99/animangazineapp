import React, { Component } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, FlatList, TextInput } from 'react-native';
import AppStyle from '../../styles/Styles';
import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnimeEpsCard from '../../components/AnimeEpsCard';
import FavoriteIcon from '../../components/FavoriteIcon';
import { GlobalConsumer, Context } from '../../context/Context';
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
                            <Collapse>
                                <CollapseHeader>
                                    <View style={AppStyle.detail.sectionBodyTitle}>
                                        <Text style={AppStyle.detail.sectionBodyTitleText}>Informasi</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={AppStyle.detail.sectionBodyDesc}>
                                        <View style={AppStyle.detail.rowInfo}>
                                            <View style={AppStyle.detail.infoLeft}>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Status</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_status}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Episode</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_episode}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Durasi</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_duration}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Rilis</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_release}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Studio</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_studios}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Tipe</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_type}</Text>
                                                </View>
                                                <View style={AppStyle.detail.infoList}>
                                                    <Text style={AppStyle.detail.listLeft}>Genre</Text><Text style={AppStyle.detail.listRight}>{this.state.anime.anime_genre}</Text>
                                                </View>

                                            </View>
                                            <View style={AppStyle.detail.infoRight}>
                                                <View style={AppStyle.detail.scoreInfo}>
                                                    <Icon name="star" size={24} style={{marginRight : 10}} color="#fff" />
                                                    <Text style={{fontSize : 26, fontWeight : "600", color : "#fff"}}>{this.state.anime.anime_score}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </CollapseBody>
                            </Collapse>

                            <Collapse>
                                <CollapseHeader>
                                    <View style={AppStyle.detail.sectionBodyTitle}>
                                        <Text style={AppStyle.detail.sectionBodyTitleText}>Sinopsis</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={AppStyle.detail.sectionBodyDesc}>
                                        <Text style={AppStyle.detail.sectionBodyDescText}>{this.state.anime.anime_sinopsis.replace("& quot;", '"').replace("& quot;", '"').replace("& mdash;", '--')}</Text>
                                    </View>
                                </CollapseBody>
                            </Collapse>

                            <Collapse isCollapsed= {true}>
                                <CollapseHeader>
                                    <View style={AppStyle.detail.sectionBodyTitle}>
                                        <Text style={AppStyle.detail.sectionBodyTitleText}>Playlist</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <ScrollView horizontal={true} style={{...AppStyle.detail.sectionBodyDesc, padding: 0}}>
                                        {
                                            this.state.playData.play360.length > 0 ?
                                                this.state.playData.play360.map((value, index) => {
                                                    return(
                                                        <View key={index+1} style={{paddingVertical : 24, paddingLeft :24,  ...index === (this.state.playData.play360.length - 1) ? {paddingRight : 24} : null  }}>
                                                            <AnimeEpsCard data={value} />
                                                        </View>
                                                    )
                                                })
                                            :
                                            <View><Text>No Data</Text></View>
                                        }
                                    </ScrollView>
                                </CollapseBody>
                            </Collapse>

                        </View>
                        <View style={AppStyle.detail.sectionFooter}>

                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default GlobalConsumer(Detail);