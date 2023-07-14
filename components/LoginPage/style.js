import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
        flex: 1,
        backgroundColor: '#E6E7EE'


    },
    logo : {
        display: 'flex',
        width: 268,
        height: 268,
        marginTop: 160,
        marginHorizontal: 86,
    },
    contentSize:{
        
        
        width: 331,
        marginHorizontal: 42,
        marginTop: 59.44
    },
    contentSize2:{
        
        width: 309.565,
        marginHorizontal: 52,
        marginTop: 8.53
    },
    content1 : {
        color: '#8F9FF8',
        
        
        fontWeight: 700, 
        fontSize: 24,
        textAlign:'center'

        
    },
    content2:{
        color: '#404358',
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500, 
        lineHeight: 20,

    },
    dot:{
        width: 52,
        height: 12,
        marginHorizontal: 180,
        marginTop: 53.3
    },
    retangleButton:{
        width: 374, 
        height: 50,
        borderRadius: 10,
        marginHorizontal: 27,
        marginTop: 90,
        opacity: 0.949999988079071,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: 2, height: 2},  
        shadowColor: 'rgba(83, 92, 136, 0.20) ',  
        shadowOpacity: 1,
        shadowRadius: 3,  
    },
    contentButton:{
        color: '#404358',
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 500,
        paddingVertical: 14
       

    },
    createWallet:{
        width: 120,
        marginHorizontal: 150,
        marginTop: 33,
    },
    createContent:{
        color: '#404358',
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 500,
    }
})

export default styles;