import React, {Component, createContext} from 'react';

const Context = createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

const GlobalProvider = (ChildrenComponent) => {
    return(
        class ParentComponent extends Component{
            constructor(props){
                super(props);
                this.state = {
                    isLogin : false,
                }
            }

            dispatcher = () => {

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