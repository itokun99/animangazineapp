import {StyleSheet, Dimensions} from 'react-native';

export const color = {
    base : "#7158e2",
    white : "#fff",
    secondary : "#eee",
    bg : "#f5f6f8"
}

const global = StyleSheet.create({
    constainer : {

    }
})


export const homescreen  = StyleSheet.create({
    container : {
        backgroundColor : "#f5f5f5",
        paddingHorizontal : 14,
    },
    bigBannerContainer : {
        padding : 24,
    },
    bigBannerItem : {
        position: "relative",
        backgroundColor : '#ffffff'
    },
    bannerRow : {
        display: "flex",
        flexWrap : 'wrap',
        flexDirection : "row",
        paddingHorizontal : 12,
    },
    bannerCol : {
        width  : "50%",
        paddingHorizontal : 12,
        paddingBottom : 24,
    },
    mediumBannerItem : {
        backgroundColor : '#fff',
        
    },
    dummyBanner : {
        backgroundColor : color.base,
        height : 150,
    },
    bannerTitle : {
        position : "absolute",
    },
    section : {
        marginVertical : 14,
    },
    sectionHeader : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical : 8,
    },
    cardCol : {
        width : '50%',
        paddingHorizontal : 7,
        paddingBottom : 14,
    },
    sectionFooter :{
        flexDirection : "row",
        justifyContent : "center",
    },
    loadMoreBtn : {
        borderRadius : 8,
        paddingHorizontal : 14,
        paddingVertical : 8,
        backgroundColor : color.base,
    }
})

const homeScreenSkeleton = StyleSheet.create({
    section : {
        marginVertical : 14,
    },
    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical : 8,
    },
    headerText : {
        backgroundColor : "#ddd",
        borderRadius : 6,
        height : 25,
        width : Dimensions.get('window').width * 0.4,

    },
    headerText2 : {
        backgroundColor : "#ddd",
        borderRadius : 6,
        height : 25,
        width : Dimensions.get('window').width * 0.2,

    },
    row : {
        marginVertical : 14,
        marginHorizontal : -7,
        flexDirection : "row",
        flexWrap : "wrap"
    },
    col : {
        width : '50%',
        paddingHorizontal : 7,
        paddingBottom: 14,
    },
    item : {
        position : "relative",
    },
    pic : {
        backgroundColor : "#ddd",
        width :  "100%",
        height : 0,
        paddingBottom : '120%',
        borderRadius : 6,
        marginBottom : 14,
    },
    text : {
        width : "80%",
        height : 25,
        borderRadius : 6,
        backgroundColor : "#ddd",
        marginBottom : 14,
    },
    text2 : {
        width : "40%",
        height : 25,
        borderRadius : 6,
        backgroundColor : "#ddd"
    },
})

const drawerIcon = StyleSheet.create({
    wrapper : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        position : 'relative',
        borderColor : "#fff",
        borderWidth : 2,
        height : 35,
        width : 35,
        marginLeft : 14,
        borderRadius : 50
    },
    drawerItem : {
        position : "relative",
        width : 20,
        height : 20,
        borderRadius : 30,
        backgroundColor : "#fff",
    }

})

const detail = StyleSheet.create({
    section : {
        position : "relative"
    },
    sectionHeader : {
        position : 'relative',
        height : 250,
    },
    cover : {
        width : '100%',
        height : 150,
        backgroundColor : "#ddd"

    },
    poster : {
        position : "absolute",
        width : 150,
        height : 0,
        paddingBottom : '130%',
        bottom : 0, left : 14,
        borderRadius : 6
    },
    floatingTitle : {
        position : "relative",
        marginLeft : 150 + 14,
        marginRight : 14,
        // backgroundColor : "#222",
        padding : 14,
    },
    floatingTitleText : {
        fontSize : 20,
        fontWeight : "600",
        color : "#222"}
})

const animeCard = StyleSheet.create({
    card : {
        position : "relative",
        backgroundColor : "#fff",
        borderWidth : 1,
        borderColor : 'rgba(0,0,0,0.1)',
        width  : '100%',
    },
    cardPic : {
        position : 'relative',
        width : '100%',
        height : 0,
        paddingBottom : "130%",
    },
    cardBody : {
        position : "absolute",
        bottom : 0,
        left : 0,
        padding : 10,
        backgroundColor : "rgba(0,0,0,0.5)",
        width : "100%"
    },
    cardTitle : {
        color : "#fff",
        fontSize : 14,
        fontWeight : "600",
        lineHeight : 18,
        marginBottom : 10,
    },
    cardTag : {
        paddingVertical : 2,
        paddingHorizontal : 4,
        fontSize : 12,
        backgroundColor : color.base,
        color : "#fff",
    },
    startTag : {
        position : "absolute",
        top : 3,
        right : 3,
        flexDirection : "row",
        alignItems : 'center',
        paddingVertical : 3,
        paddingHorizontal : 4,
        backgroundColor : "rgba(0,0,0,0.4)",
        borderRadius : 8
    }
})


const AppStyle = {
    color,
    homescreen,
    homeScreenSkeleton,
    detail,
    drawerIcon,
    animeCard
}

export default AppStyle