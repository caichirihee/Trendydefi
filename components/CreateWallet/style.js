import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    paddingTop: 90,
    paddingBottom: 110,
   
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#E6E7EE'
},
iconBack:{
    width: 70,
    height: 70
},

title:{
  display:'flex',
  width: 308,
  height: 60, 
  flexDirection: 'column',
  flexShrink: 0,
  marginHorizontal: 55,
  marginTop: 26,
  color: '#8F9FF8',
  textAlign: 'center',
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 30
},
content:{
  display: 'flex',
  width: 286,
  flexDirection: 'column',
  flexShrink: 0,
  color: '#404358',
  textAlign: 'center',
  textShadowColor: 'rgba(38, 43, 70, 0.32)',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 1,
  fontSize: 14, 
  fontWeight: 500,
  lineHeight: 20,
  fontStyle: 'normal',
  marginTop: 9,
  marginHorizontal: 64,
},
formImage:{
  display: 'flex',
  width: 356,
  height: 245,
  paddingRight: 0,
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  marginHorizontal: 45,
  marginTop: 45,
},
astronaut:{
  flex: 2,
  width: 235.408,
  height: 237.41,
  flexShrink: 0,
  paddingTop: 28

  
  
},

safebox:{
  flex: 1,
  width: 116.944,
  height: 116.89,
  flexShrink: 0,
  marginTop: 120,
},

formConfirm:{
  width: 414,
  height: 880,
  backgroundColor: '#E6E7EE',
  marginTop: 47,
  
},

tick:{
  position: 'absolute',
  top: 29,
  left: 27,

},
confirmText:{
  display: 'flex',
  width: 320,
  flexDirection: 'column',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#404358',
 
  textShadowColor: 'rgba(38, 43, 70, 0.32)',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 1,
  fontSize: 14,
  fontWeight: 500, 
  lineHeight: 20, 
  fontStyle: 'normal',
  marginLeft: 80,
  marginRight: 20,
  position: 'absolute',
  top: 15,
},
buttonConfirm:{
  width: 374,
  height: 50,
  flexShrink: 0,

  borderRadius: 10,
  opacity: 0.949999988079071,
  backgroundColor: '#E6E7EE',
  
  shadowOffset: {width: 2, height: 2},  
  shadowColor: 'rgba(83, 92, 136, 0.20) ',  
  shadowOpacity: 1,
  shadowRadius: 2,  
  marginHorizontal: 30,
  marginTop: 40
},
next:{
  display: 'flex',
  width: 92.64,
  flexDirection: 'column',
  textAlign: 'center',
  flexShrink: 0,
  color: '#404358',
 
  textShadowColor: 'rgba(38, 43, 70, 0.32)',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 1,
  fontSize: 18,
  fontWeight: 500, 
  
  fontStyle: 'normal',
  marginHorizontal: 141, 
  marginVertical: 14,
}

})
 export default styles;  