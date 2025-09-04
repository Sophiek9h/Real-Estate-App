import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {

    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setselectedCategory] = useState(params.filter || 'All');

    const handleCategory = (category: string) => {
        if (selectedCategory === category) {
            setselectedCategory('');
            router.setParams({filter: 'All'});
            return;
        }else {
            setselectedCategory(category);
            router.setParams({filter: category});
        }
    }


  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3 mb-2">  
      {categories.map((item, index) => (
        <TouchableOpacity 
            onPress={() => handleCategory(item.category)} 
            className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === item.category ? 'bg-primary-300' : 'bg-gray-200'}`}>
            <Text className={`${selectedCategory === item.category ? 'text-white font-rubik-bold' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
        </TouchableOpacity>
      ))} 
      </ScrollView>
    </View>
  )
}

export default Filters