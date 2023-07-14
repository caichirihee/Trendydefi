import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        backgroundColor: '#E6E7EE'
    },
    iconback:{
        marginTop: 50, 
    },
    title:{
        
        width: 372,
        color: '#8F9FF8',
        textAlign: 'center',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 30,
        marginHorizontal: 21,
        marginTop: 46,
    },
    content:{
        width: 321,
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        marginHorizontal: 47,
        marginTop: 9,
    },
    inputForm:{
        width: 374, 
        height: 190,
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: -2, height: -2},  
        shadowColor: 'rgba(255, 255, 255, 0.35)',  
        shadowOpacity: 1,
        shadowRadius: 3,
        marginHorizontal: 27,
        marginTop: 35,
    
        
    },
    formKeyword:{
        display: 'flex',
        gap: 5,
        rowGap: 17,
        flexDirection: 'row',
        flexWrap: 'wrap',

        marginHorizontal: 60,
        marginTop: 45,
        

    },
    form:{
        borderRadius: 10,
        width: 100,
        height: 26,
        borderRadius: 8,
        backgroundColor: '#E6E7EE',
        shadowOffset: {width: -5, height: -5},  
        shadowColor: 'rgba(83, 92, 136, 0.20)',  
        shadowOpacity: 1,
        shadowRadius: 5,
        textAlign: 'center',
        padding: 2,

       
        
        
    },
    keyword:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(38, 43, 70, 0.32)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        
        

    },

    next:{
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
        marginHorizontal: 30,
        marginTop: 55, 
    },
    nextContent:{
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