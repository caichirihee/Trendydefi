import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        paddingTop: 90,
        paddingBottom: 110,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        backgroundColor: '#E6E7EE'
    },
    iconBack:{
        width: 70,
        height: 70
    },
    form: {
        width: 374,
        height: 518,
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: 2, height: 2},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 2, 
        marginHorizontal: 30
    },
    import:{
        color: '#8F9FF8',
        textAlign: 'center',
        paddingTop: 19,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 700,
        
    },
    mnemonic:{
        width: 157,
        height: 40,
        flexShrink: 0,
        borderRadius: 10,
        opacity: 0.949999988079071,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: 2, height: 2},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 2,
        marginTop: 23,
        marginLeft: 14

    },
    mnemonicContent:{
        color: '#404358',
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        paddingVertical: 9,
        fontSize: 18,
        fontWeight: 500,

            
    },
    private:{
        width: 157,
        height: 40,
        flexShrink: 0,
        borderRadius: 10,
        opacity: 0.949999988079071,
        backgroundColor: '#E6E7EE',
        marginLeft: 203,
        marginTop: -38,
        shadowOffset: {width: -2, height: -2},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 3,


    },
    privateContent:{
        color: '#404358',
        textAlign:'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        paddingVertical: 9,
        fontSize: 18,
        fontWeight: 500,

    },
    secret:{
        color: '#404358',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        marginLeft: 14, 
        marginTop: 27,
        fontSize: 14, 
        fontWeight: 500,
        lineHeight: 20

    },
    show:{
        color: '#404358',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        marginLeft: 321, 
        marginTop: -20,
        fontSize: 14, 
        fontWeight: 500,
        lineHeight: 20
    },
    input:{
        width: 346,
        height: 50,
        flexShrink: 0,
        borderRadius: 10,
        opacity: 0.949999988079071,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: -2, height: -2},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 3,
        marginHorizontal: 14,
        marginTop: 15
        
    },
    character:{
        color: '#404358',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        marginLeft: 14, 
        marginTop: 9,
        fontSize: 14, 
        fontWeight: 500,
        lineHeight: 20

    },
    importButton:{
        width: 374,
        height: 50,
        flexShrink: 0,
        borderRadius: 10,
        opacity: 0.949999988079071,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: 2, height: 2},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 2,
        marginHorizontal: 30


    },
    importContent:{
        color: '#404358',
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        fontSize: 18,
        fontWeight: 500,
        marginVertical: 14
    }
})


export default styles;