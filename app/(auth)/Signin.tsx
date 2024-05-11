import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Signin() {

  return (
    <ScrollView style={{padding: 20}}>
      <View>
        <Text style={{fontFamily: "DMSansBold", fontSize: 18}}>Signin</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnContainer}>
            <View style={{display: "flex", flexDirection: "row", gap: 20, alignItems: "center"}}>
              <AntDesign name="google" size={24} color="blue" />
              <Text>Sign In With Google</Text> 
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
   container:{
    paddingTop: 180
   },
    btnContainer:{
      alignSelf: "center",
      borderColor: "#828282",
      borderWidth: 1,
      borderRadius: 15,
      padding: 15
    }
})