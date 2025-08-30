import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { Image, SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">

        {/* welcome row */}
        <View className="flex flex-row justify-between items-center mt-12">
          <View className="flex flex-row items-center gap-3">
            <Image
              source={{ uri: user?.avatar }}
              className="size-12 rounded-full"
              resizeMode="contain"
            />
            <View>
              <Text className="text-lg font-rubik-light text-black-100">Good morning</Text>
              <Text className="text-xl font-rubik-bold text-black-300">{user?.name}</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image
              source={icons.bell}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        
        {/* search component */}
        <Search/>

        <View className="flex flex-row justify-between items-center my-5">
          <Text className="font-rubik-semibold text-xl text-black-300">
            Featured
          </Text>
          <TouchableOpacity>
            <Text className="text-base text-primary-300 font-rubik-semibold">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        

      </View>

      

    </SafeAreaView>
  );
}
