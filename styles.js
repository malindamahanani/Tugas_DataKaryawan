import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    cardUtama: {
        shadowOffset : {width:0, height:2},
        shadowOpacity: 0.5,
        height: 220,
        margin:10
    },

    containerTitle: {
        height:'15%',
        padding: 7
    },

    title: {
        fontSize: 18,
        fontWeight:'bold',
        color:'gray'
    },
    containerImage:{
        width: '100%',
        height: '80%',
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    price: {
        backgroundColor:"white",
        padding:5,
        fontSize:16,
        color: 'black',
        fontWeight: 'bold',
        margin:10,
        opacity:0.7
    }
});

export default styles;