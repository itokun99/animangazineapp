import React from 'react'
import Navigation from './src/router/Router';
import GlobalProvider from './src/context/Context';


const RootApp = (props) => {
  return(
    <Navigation {...props} />
  )
}


export default GlobalProvider(RootApp);