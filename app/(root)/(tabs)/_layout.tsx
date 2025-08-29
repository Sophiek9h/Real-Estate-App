import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'


const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => (
    <View className='flex-1 mt-3 flex flex-col justify-center items-center'>
        <Image source={icon} tintColor={focused? '#0061ff' : '#666876'} resizeMode='contain' className='size-6'/>
        <Text className={`text-xs mt-1 w-full text-center ${focused? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'}`}>{title}</Text>
    </View>
)


const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{ headerShown: false,
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#0061FF1FA',
            borderTopWidth: 1,
            minHeight: 70,
            position: 'absolute',

        }}
    }
    >

    <Tabs.Screen
        name="index"
        options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({focused}) => 
                <TabIcon icon={icons.home} focused={focused} title='Home'/>
        }}
    />
    <Tabs.Screen
        name="explore"
        options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({focused}) => 
                <TabIcon icon={icons.search} focused={focused} title='Explore'/>
        }}
    />
    <Tabs.Screen
        name="profile"
        options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({focused}) => 
                <TabIcon icon={icons.person} focused={focused} title='Profile'/>
        }}
    />

    </Tabs>
  )
}

export default TabsLayout