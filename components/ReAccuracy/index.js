import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from './style'

export default function ReAccuracy ({navigation}){
  
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}><Image source={require('../../assets/images/iconback.png')} style={styles.iconback}/></TouchableOpacity>
            <Text style={styles.title}>Cụm Từ phục hồi ví của bạn.</Text>
            <Text style={styles.content}>Nhấn vào các từ để đặt chúng cạnh nhau theo đúng thứ tự.</Text>
            <View style={styles.inputForm}></View>
            <View style={styles.formKeyword}>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.keyword}>1. transfer</Text>
                </View>


                

            </View>
           
            <View style={styles.next}>
                <Text style={styles.nextContent}>Tiếp tục</Text>
            </View>
        </View>
    )}