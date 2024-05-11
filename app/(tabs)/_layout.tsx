import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const TabIcon = async (icon:any, focused:string) => (
    <View>
       <Image/>
       <Text>

       </Text>
    </View>    
  )

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#FFA001",
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 84,
      },
    }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Product"
        options={{
          title: 'Product',
          tabBarIcon: ({ color, focused }) => (
            <>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Transaction"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color, focused }) => (
            <>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <>
            </>
          ),
        }}
      />
    </Tabs>
  );
}
