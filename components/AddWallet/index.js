import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default function AddWallet ({navigation}){
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()}><Image source={require('../../assets/images/iconback.png')}  style={styles.iconBack}/></TouchableOpacity>
        <View style={styles.form}>
          <Text style={styles.import}>Import</Text>
          <View style={styles.mnemonic}>
            <Text style={styles.mnemonicContent}>Mnemonic </Text>
          </View>
          <View style={styles.private}>
            <Text style={styles.privateContent}>Private Key </Text>
          </View>
          <View>
            <Text style={styles.secret}>Secret Recovery Phrase</Text>
            <Text style={styles.show}>Show</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View>
            <Text style={styles.secret}>Secret Recovery Phrase</Text>
            <Text style={styles.show}>Show</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View>
            <Text style={styles.secret}>Comfirm Password</Text>
            
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.character}>Must be at least 12 characters</Text>
          </View>

        </View>
        <View style={styles.importButton}>
          <Text style={styles.importContent}>Import</Text>
        </View>
      </View>
    )
  
}


