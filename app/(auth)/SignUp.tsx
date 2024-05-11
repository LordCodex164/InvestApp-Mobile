import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';

export default function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("")

  const navigation = useNavigation()

  return (
    <ScrollView style={{padding: 20, paddingTop: 35}}>

      <View style={{marginBottom: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      </View>
      

      <View>
        <Text style={{textAlign: "center", fontFamily: "DMSansMedium", fontSize: 34}}>Create an account</Text>
        <Text style={{textAlign: "center", fontFamily: "DMSansRegular",}}>Invest and double any income now</Text>
      </View>

      <View style={{paddingTop: 87, gap: 18}}>
        <TextInput 
         autoCapitalize="none"
         value={firstName}
         style={styles.inputStyles}
         onChangeText={(firstName) => setFirstName(firstName)}
         placeholder='Full Name'
         />
        <TextInput 
        autoCapitalize="none"
        value={firstName}
        style={styles.inputStyles}
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholder='Email Address'
        />
        <TextInput 
        autoCapitalize="none"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholder='Password'
        />

        <View style={styles.btnContainer}>
        <CustomButton text='Create Account'/>
        <TouchableOpacity onPress={() => router.push("/(auth)/Signin")} style={{marginTop: 34}}>
          <Text style={{color: "#31A062"}}>Already have an account?</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    marginTop: 33,
    alignItems: "center"
 },
    inputStyles:{
      borderColor: "#828282",
      borderWidth: 1,
      borderRadius: 20,
      width: "auto",
      padding: 15
    }
})