import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import AppStyle from '../../styles/Styles';
import API from '../../services/Service';
import AnimeCard from '../../components/AnimeCard';
import HomeScreenSkeleton from '../../components/HomeScreenSkeleton';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            animes : [],
            isLoading : true,
            isLoadMore : false,
            isNoLoadMore : false,
            limit : 6,
        }
    }

    getAnimesList = (params = {}, action = null) => {
        let animes = [...this.state.animes];
        let data = [];
        API.getAnimes(params)
        .then((result) => {
            if(result.status){
                data = result.data;
                this.setState({
                    animes : [...animes,...data]
                }, action)
            } else {
                // console.warn('dawda')
                if(result.statusCode === 404){
                    this.setState({
                        isNoLoadMore : true,
                    }, action)  
                }
            }
        })
    }

    loadFirstData = () => {
        let params = {
            limit : this.state.limit,
            offset : 0,
            listed : 'desc',
            order : 'date_update'
        };
        this.getAnimesList(params, () => {
            setTimeout(() => {
                this.setState({
                    isLoading : false
                })
            },1000)
        })
    }

    loadMoreData = () => {
        let animes = this.state.animes;
        let offset = animes.length;
        let params = {
            offset : offset,
            limit : this.state.limit,
            order : 'date_update',
            listed : 'desc',
        }
        this.setState({
            isLoadMore : true,
        }, () => {
            this.getAnimesList(params, () => {
                this.setState({
                    isLoadMore : false,
                })
            })
        })
    }

    previewDetail = (value) => {
        this.props.navigation.push('Detail', {
            data : value
        })
    }

    componentDidMount(){
        // this.getAnimesList()
        this.loadFirstData();
    }



    render(){
        return(
            <ScrollView style={AppStyle.homescreen.container}>
                <StatusBar barStyle="light-content" backgroundColor={AppStyle.color.base} />
                <SafeAreaView>
                    {
                        this.state.isLoading ?
                        (<HomeScreenSkeleton />)
                        :
                        (<View style={AppStyle.homescreen.section}>
                            <View style={AppStyle.homescreen.sectionHeader}>
                                <Text style={{fontSize : 18, fontWeight : "600"}}>Latest Update</Text>
                                <Text style={{fontSize : 18, fontWeight : "600"}}>Filter</Text>
                            </View>
                            <View style={AppStyle.homescreen.sectionBody}>
                                {
                                    this.state.animes.length > 0 ?
                                    <FlatList
                                        keyExtractor = {(item) => {
                                            return(item.anime_id)
                                        } }
                                        data = {this.state.animes}
                                        contentContainerStyle={{marginHorizontal : -7}}
                                        numColumns = {2}
                                        renderItem ={({item}) => {
                                            // console.warn(item)
                                            return(
                                                <View style={AppStyle.homescreen.cardCol}>
                                                    <AnimeCard data={item} onPress={() => this.previewDetail(item)} />
                                                </View>
                                            )
                                        }}
                                    />
                                    :
                                    <Text>No data</Text>
                                }
                            </View>
                            <View style={AppStyle.homescreen.sectionFooter}>
                                    {
                                        this.state.isLoadMore ?
                                        (<TouchableOpacity style={{...AppStyle.homescreen.loadMoreBtn, backgroundColor : "#bbb"}}>
                                            <Text style={{fontSize : 16, color : "#fff"}}>Please wait...</Text>
                                        </TouchableOpacity>) 

                                        :
                                        this.state.isNoLoadMore ?
                                        (<TouchableOpacity style={AppStyle.homescreen.loadMoreBtn}>
                                            <Text style={{fontSize : 16, color : "#fff"}}>No more data</Text>
                                        </TouchableOpacity>)  
                                        :
                                        (<TouchableOpacity onPress={this.loadMoreData} style={AppStyle.homescreen.loadMoreBtn}>
                                            <Text style={{fontSize : 16, color : "#fff"}}>Load More</Text>
                                        </TouchableOpacity>) 
                                    }
                            </View>
                        </View>)
                    }
                </SafeAreaView>
            </ScrollView>
        )
    }
}

export default Home;