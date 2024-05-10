import { StyleSheet, Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from 'expo-router'

export default function Welcome() {

  return (
      
      <ScrollView style={{backgroundColor: "#"}}>

          <View style={styles.subContainer}>

            <Image source={require("../assets/images/image.png")} style={{width: 300, height: 272.23}}/>
            <View>
              <Text style={{fontFamily: "SpaceMono", textAlign: "center", fontWeight: "bold", fontSize: 34}}>Stay on top of your {"\n"} finance with us</Text>
              <Text style={{fontFamily: "SpaceMono",  textAlign: "center", fontSize: 17}}>We are your new financial Advisors {"\n"}
              to recommed the best investments {"\n"} for you.</Text>
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.createAccount}>
                <Text style={{color: "#fff"}}>Create account</Text>
              </TouchableOpacity>
               <TouchableOpacity style={{marginVertical: 17}}>
                <Text style={styles.loginBtn}>Login</Text>
               </TouchableOpacity>
            </View>
          </View>
             
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginTop: 20,
        height: "100%"
    },
    subContainer:{
     display: "flex",
     paddingTop: 154,
     alignItems: "center"
    },
    btnContainer:{
       marginTop: 79,
       alignItems: "center"
    },
    createAccount: {
      backgroundColor: "#31A062",
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 20
    },
    loginBtn:{
      color: "#31A062"
    }
})