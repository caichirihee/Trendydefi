import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CreateWallet ({navigation}){
  
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}><Image source={require('../../assets/images/iconback.png')}  style={styles.iconBack}/></TouchableOpacity>
            
            
            <Text style={styles.title}>Backup your wallet right now!</Text>
            <Text style={styles.content}>In the next step, you will see 12 words allowing you to recover your wallet.</Text>
            <View style={styles.formImage}>
                <Image source={require('../../assets/images/safebox.png')} style={styles.safebox}/>
                
                <Image source={require('../../assets/images/astronaut.png')} style={styles.astronaut}/>

            </View>
            <View style={styles.formConfirm}>
                <View style={styles.checkBox}>
                    <Image source={require('../../assets/images/checkbox.png')} style={styles.check}/>
                    <Image source={require('../../assets/images/tick.png')} style={styles.tick}/>
                </View>
                <Text style={styles.confirmText}>I understand that if I lose the recovery phrase, I won't be able to access my wallet.</Text>

                <TouchableOpacity style={styles.buttonConfirm} onPress={()=> navigation.navigate('accuracy')}>
                    <Text style={styles.next}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>

        </View>
    )}