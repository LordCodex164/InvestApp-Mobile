import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

const CustomButton = ({text}: {text: string}) => {
  return (
    <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")} style={styles.createAccount}>
        <Text style={{color: "#fff", fontFamily: "DMSansRegular"}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    createAccount: {
        backgroundColor: "#31A062",
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 20,
      },
})

export default CustomButton