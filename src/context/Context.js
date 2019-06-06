import React, {Component, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const Context = createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

const GlobalProvider = (ChildrenComponent) => {
    return(
        class ParentComponent extends Component{
            constructor(props){
                super(props);
                this.state = {
                    isLogin : false,
                    favoriteList : []
                }
            }

            addFavoriteList = (data) => {
                let favoriteList = [...this.state.favoriteList];
                favoriteList.push(data);
                this.setState({
                    favoriteList : favoriteList
                }, () => {
                    this.updateFavoriteListData(this.state.favoriteList);
                })
            }
            
            removeFavoritList = (data) => {
                let favoriteList = [...this.state.favoriteList];
                let newList = [];
                favoriteList.map((value, index) => {
                    if(value.anime_id !== data.anime_id){
                        newList.push(value)
                    }
                    return true;
                })
                this.setState({
                    favoriteList : newList
                }, () => {
                    this.updateFavoriteListData(this.state.favoriteList);
                })
            }

            updateFavoriteListData = async (list) => {
                try{
                    await AsyncStorage.setItem('favoriteList', JSON.stringify(list))
                } catch(error) {
                    console.warn(error)
                }
            }
            
            checkFavoriteListData = async () => {
                try{
                    let favoriteList = await AsyncStorage.getItem('favoriteList');
                    if(favoriteList !== null){
                        favoriteList = JSON.parse(favoriteList);
                        this.setState({
                            favoriteList : favoriteList
                        })
                    }
                } catch(error) {
                    console.warn(error)
                } 
            }

            dispatcher = (action) => {
                switch(action.type){
                    case "ADD_FAVORITE":
                        this.addFavoriteList(action.data);
                        break;
                    case "REMOVE_FAVORITE":
                        this.removeFavoritList(action.data);
                        break;
                    default:
                        return false;
                }
            }

            componentDidMount(){
                setTimeout(() => {
                    this.checkFavoriteListData()
                }, 500)
            }

            render(){
                let state = {
                    globalState : this.state,
                    globalAction : this.dispatcher
                }
                return(
                    <Provider value={state}>
                        <ChildrenComponent {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export const GlobalConsumer = (ChildrenComponent) => {
    return(
        class ParentComponent extends Component {
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <Consumer>
                        {
                            (value) => {
                                return(
                                    <ChildrenComponent {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}


export default GlobalProvider;