import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import AppStyle from '../../styles/Styles';
import API from '../../services/Service';
import AnimeCard from '../../components/AnimeCard';
import HomeScreenSkeleton from '../../components/HomeScreenSkeleton';
import Toast, {DURATION} from 'react-native-easy-toast';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            animes : [],
            isLoading : true,
            isLoadMore : false,
            isNoLoadMore : false,
            limit : 6,
            isRefresh : false,
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
                if(result.statusCode === 503){
                    this.refs.toast.show(result.message);
                }
            }
        })
    }

    loadFirstData = (action = null) => {
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
                }, action)
            },1000)
        })
    }

    onRefresh = () => {
        this.setState({
            isRefresh : true,
            isLoading : true,
            isNoLoadMore : false,
            animes : [],
        }, () => {
            this.loadFirstData(() => {
                this.setState({
                    isRefresh : false,
                })
            })            
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
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {   return layoutMeasurement.height + contentOffset.y 
        >= contentSize.height - 50; 
    }

    componentDidMount(){
        this.loadFirstData();
    }



    render(){
        return(
            <>
            <ScrollView 
                contentContainerStyle={AppStyle.homescreen.container} 
                onScroll={({nativeEvent}) => {
                    if(this.isCloseToBottom(nativeEvent) && !this.state.isNoLoadMore){
                        this.loadMoreData()
                    }
                }}
                refreshControl = {
                    <RefreshControl
                        refreshing={this.state.isRefresh}
                        onRefresh={this.onRefresh}
                    />
                }
                
            >
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
            <Toast ref='toast' />
            </>
        )
    }
}

export default Home;