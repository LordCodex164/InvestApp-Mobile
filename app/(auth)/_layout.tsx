import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Redirect } from 'expo-router'
import { StatusBar } from 'react-native'


export default function _layout() {


  return (
    <Stack>
      <Stack.Screen
       name='Signin'
       options={{headerShown: false}}
      />
       <Stack.Screen
       name='SignUp'
       options={{headerShown: false}}
      />
    </Stack>
  )
  
}