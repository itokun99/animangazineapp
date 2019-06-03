import React from 'react';
import { View } from 'react-native'
import AppStyle from '../styles/Styles';

const HomeScreenSkeleton = (props = {}) => {
    let range = [1,2,3,4];
    return(
        <View style={AppStyle.homeScreenSkeleton.section}>
            <View style={AppStyle.homeScreenSkeleton.header}>
                <View style={AppStyle.homeScreenSkeleton.headerText}></View>
                <View style={AppStyle.homeScreenSkeleton.headerText2}></View>
            </View>
            <View style={AppStyle.homeScreenSkeleton.row}>
                {
                    range.map(value => (
                        <View key={value} style={AppStyle.homeScreenSkeleton.col}>
                            <View style={AppStyle.homeScreenSkeleton.item}>
                                <View style={AppStyle.homeScreenSkeleton.pic}></View>
                                <View style={AppStyle.homeScreenSkeleton.text}></View>
                                <View style={AppStyle.homeScreenSkeleton.text2}></View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default HomeScreenSkeleton;