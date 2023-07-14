import { StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'




export default function LoginPage({navigation}) {


  return (
   
          <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/Frame.png')} />
        
      </View>
      <View>
        <View style={styles.contentSize}>
          <Text style ={styles.content1}>All assets in one place</Text>
          </View>
        <View style={styles.contentSize2}>
          <Text style ={styles.content2}>View and store your assets easily.</Text>
        </View>
        <View >
          <Image source={require('../../assets/images/dots.png')} style={styles.dot} />
        </View>
      </View>
      <TouchableOpacity style={styles.retangleButton} onPress={()=> navigation.navigate('create-wallet')} title='clicked'>
        <Text style={styles.contentButton}>Create a new wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createWallet} onPress={()=> navigation.navigate('add-wallet')}>
        <Text style={styles.createContent}>I have wallet</Text>
      </TouchableOpacity>
      

      </View>
    
  )
}
