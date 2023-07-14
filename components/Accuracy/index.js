import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default function Accuracy ({navigation}){
  
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}><Image source={require('../../assets/images/iconback.png')} style={styles.iconback}/></TouchableOpacity>
            <Text style={styles.title}>Cụm Từ phục hồi ví của bạn.</Text>
            <Text style={styles.content}>Viết xuống hoặc sao chép những từ này theo đúng thứ tự và lưu chúng ở nơi an toàn.</Text>
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
           
            <Text style={styles.copy}>Sao chép</Text>
            <View style={styles.warning}>
                <Image source={require('../../assets/images/warning.png')} style={styles.warningIcon}/>
            </View>
            <Text style={styles.warningContent}>Không bao giờ chia sẻ cụm từ phục hồi với bất cứ ai, phải luu trữ chúng an toàn và bí mật!</Text>
            <TouchableOpacity style={styles.next} onPress={()=> navigation.navigate('re-accuracy')}>
                <Text style={styles.nextContent}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    )}